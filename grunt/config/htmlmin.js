module.exports = function (grunt, opt) {
    return {
        "build": {
            "options": {
                "removeComments": true,
                "collapseWhitespace": true
            },
            "files": [
                {
                    "expand": true,
                    "cwd": "./",
                    "src": ["*.html"],
                    "dest": "./"
                }
            ]
        }
    }
}
