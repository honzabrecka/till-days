const till = (a, b) => (b - a + 7) % 7;

till.monday = 1;
till.tuesday = 2;
till.wednesday = 3;
till.thursday = 4;
till.friday = 5;
till.saturday = 6;
till.sunday = 0;

module.exports = till;
