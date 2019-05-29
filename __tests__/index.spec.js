const { forAll, gen } = require("rapid-check");
const toMatchProperty = require("rapid-check/src/jest.matcher");
const moment = require("moment");
const till = require("../index");

expect.extend({ toMatchProperty });

const start = moment("2019-05-29T09:46:19.145Z");

test("till", async () => {
  const to = gen.int;
  const minus = gen.choose(0, 6);
  const generator = gen.fmap(([plus, minus]) => {
    const to = start.clone().add(plus, "days");
    const from = to.clone().subtract(minus, "days");
    return [from.day(), to.day(), minus];
  }, gen.tuple(to, minus));

  await expect(generator).toMatchProperty(
    ([from, to, d]) => till(from, to) === d && till(to, from) === (7 - d) % 7,
    { count: 500 }
  );
});
