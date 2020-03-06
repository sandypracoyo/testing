function obj(arr = []) {
    return {
        mean: mean(arr),
        sum: total(arr),
        median: median(arr),
        mode: mode(arr),
        range: Math.max(...arr) - Math.min(...arr),
        largest: Math.max(...arr),
        smallest: Math.min(...arr),
        count: arr.length
    }
}

function median(arr = []) {
    return arr.length % 2 == 1 ? arr[((arr.length + 1) / 2) - 1] : (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
}

function mean(arr = []) {
    return parseFloat((total(arr) / arr.length).toFixed(12))
}

function total(arr = []) {
    return arr.reduce((a, b) => a + b)
}

function mode(arr = []) {
    const temp = arr.map(x => {
        return {
            number: x,
            count: arr.filter(y => x == y).length
        }
    })

    const max = temp.map(x => x.count)

    const numbers = temp.filter(x => {
        return x.count == Math.max(...max)
    }).map(x => {
        return x.number
    })

    const set = [...new Set(numbers)]

    return set.join(", ") + ", each appeared " + Math.max(...max) + " times"
}

module.exports = obj

