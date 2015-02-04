module.exports = {
    "options": {
        "require": "sass-globbing",
        "loadPath": "bower_components",
        "sourcemap": "none"
    },
    "dev": {
        "options": {
            "style": "expanded",
            "lineNumbers": true
        },
        "files": {
            "<%= globalConfig.dev %>/assets/css/style.css": "src/assets/css/style.scss"
        }
    },
    "build": {
        "options": {
            "style": "compressed"
        },
        "files": {
            "<%= globalConfig.build %>/assets/css/style.css": "src/assets/css/style.scss"
        }
    }
}
