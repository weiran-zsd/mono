import test from "node:test";
import { strict as assert } from "node:assert";
import { answer } from "./mod";

test("mono-2", function () {
	assert.equal(answer, 42);
});
