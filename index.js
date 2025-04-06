/** util.inspect のラッパー関数
 * @param {any} data
 * @returns {string}
 */
function inspect(data) {
    return require("util").inspect(data, {
        depth: null,
        colors: true,
        indentation: "  ",
    })
}

/** テスト関数
 * @param {string} message
 * @param {any} expected
 * @param {any} actual
 */
function test(message, expected, actual) {
    if (equals(expected, actual)) {
        console.log(`✔  ${message}`)
    } else {
        console.error(`✘  ${message}`)
        console.error(`  Expected: ${inspect(expected)}`)
        console.error(`  Actual:   ${inspect(actual)}`)
    }
}

/** オブジェクトの比較関数
 * @param {any} expected - 期待値
 * @param {any} actual - 実際の値
 * @returns  {boolean}
 */
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
