module.exports = function (grunt, opt) {
    return {
        "server": {
            "options": {
                "port": 8000,
                "hostname": "0.0.0.0",
                "base": "./dist"
            }
        }
    }
}
