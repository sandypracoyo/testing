const object = require("../src/13")

test("Testing unit test", () => {
    expect(object([10, 2, 38, 23, 38, 23, 21])).toEqual({
        "mean": 22.142857142857,
        "median": 23,
        "range": 36,
        "mode": "38, 23, each appeared 2 times",
        "largest": 38,
        "smallest": 2,
        "sum": 155,
        "count": 7
      })
})