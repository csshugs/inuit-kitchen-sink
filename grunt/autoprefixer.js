module.exports = {
    "options": {
        "browsers": [
            "last 3 version",
            "ie 8",
            "ie 9",
            "ie 10"
        ]
    },
    "deploy": {
        "src": "<%= globalConfig.build %>/assets/css/style.css"
    }
}
