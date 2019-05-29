# till-days

> How many days is between those days in a week?

## Installation

```console
yarn add till-days
```

## Usage

```js
const till = require('till-days')

till(till.monday, till.wednesday) // -> 2
till(new Date().getDay(), till.friday)
till(moment().day(), till.friday)
```
