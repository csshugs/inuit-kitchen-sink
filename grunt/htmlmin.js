module.exports = {
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
