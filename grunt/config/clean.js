module.exports = function (grunt, opt) {
    return {
        "dev": {
            "src": [
                "<%= globalConfig.dev %>"
            ]
        },
        "build": {
            "src": [
                "<%= globalConfig.build %>"
            ]
        },
        "temp": {
            "src": [
                "temp"
            ]
        }
    }
}
