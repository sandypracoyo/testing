module.exports = (words = "", times = 1) => {
    return words.split("").map(x => {
        if (x === " ") {
            return x
        } else {
            return x.repeat(times)
        }
    }).join("")
}