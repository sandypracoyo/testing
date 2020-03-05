module.exports = (text = "", cencors = [], symbol = "#") => {
    const arr = text.split(" ")
    return arr.map(x => {
        if (cencors.includes(x.toLowerCase())) {
            return symbol.repeat(x.length)
        } else {
            return x
        }
    }).join(" ")
}