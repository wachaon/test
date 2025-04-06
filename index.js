function inspect(data) {
    return require("util").inspect(data, {
        depth: null,
        colors: true,
        indentation: "  ",
    })
}

function test(message, expected, actual) {
    if (equals(expected, actual)) {
        console.log(`✔  ${message}`)
    } else {
        console.error(`✘  ${message}`)
        console.error(`  Expected: ${inspect(expected)}`)
        console.error(`  Actual:   ${inspect(actual)}`)
    }
}

function equals(expected, actual) {
    if (expected === actual) return true
    if (typeof expected !== typeof actual) return false
    if (typeof expected === "object") {
        for (const key in expected) {
            if (!equals(expected[key], actual[key])) return false
        }
        return true
    }
    return false
}

module.exports = {
    inspect,
    test,
    equals,
}
