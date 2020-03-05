const length = require("../src/08")

test("Testing unit test", () => {
    expect(length('Saya ingin makan nasi goreng.', ['saya', 'nasi'])).toEqual("#### ingin makan #### goreng.")
})