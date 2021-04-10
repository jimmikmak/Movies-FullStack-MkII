const assert = require("assert");

const sum = require("./sum");

const result = sum(4, 8);
assert.strictEqual(12, result);

const result2 = sum("4", "8");
assert.strictEqual(12, result2);

const result3 = sum([3, 4], 9);
assert.strictEqual("Error", result3);
