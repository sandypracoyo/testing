const length = require("../src/07")

test("Testing unit test", () => {
    expect(length("i o", 2)).toBe("ii oo")
})