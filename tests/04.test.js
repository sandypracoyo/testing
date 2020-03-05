const isLeapYear = require("../src/04")

test("Testing async function", () => {
    expect(isLeapYear(2020)).toBeTruthy()
})