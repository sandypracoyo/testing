const Class = require("../src/12")
const Item = new Class()

test("Testing unit test", () => {
    expect(Item.findById(3).isOnSale()).toBeFalsy
})