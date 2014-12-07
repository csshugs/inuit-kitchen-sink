module.exports = {
    "build": {
        "files": [
            {
                "expand": true,
                "cwd": "temp/parts",
                "src": ["_page-head.hbs"],
                "dest": "temp/parts"
            },
            {
                "expand": true,
                "cwd": "temp/layouts",
                "src": ["./**/*.*"],
                "dest": "temp/layouts"
            }
        ]
    }
}
