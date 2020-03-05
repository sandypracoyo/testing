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
    const map = new Map()
    const numbers = []

    arr.forEach(x => {
        if (map.get(x)) {
            map.set(x, map.get(x) + 1)
        } else {
            map.set(x, 1)
        }
    })

    for (const [key, value] of map) {
        if (value == Math.max(...Array.from(map.values()))) {
            numbers.push(key)
        }
    }

    return numbers.join(", ") + ", each appeared " + Math.max(...Array.from(map.values())) + " times"
}

module.exports = obj

