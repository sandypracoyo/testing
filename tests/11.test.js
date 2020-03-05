const User = require("../src/11")

test("Testing unit test", () => {
    expect(User.findByUsername("johndoe")).toEqual({ id: 3, username: 'johndoe', name: 'John Doe' })
})