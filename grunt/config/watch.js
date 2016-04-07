module.exports = function (grunt, opt) {
    return {
        "scss": {
            "files": ["src/assets/css/**/{.*,*,*/*}"],
            "tasks": "scss"
        },
        "html": {
            "files": ["src/templates/**/{.*,*,*/*}"],
            "tasks": "html"
        },
        "img": {
            "files": ["src/assets/img/**/{.*,*,*/*}"],
            "tasks": "img"
        },
        "fonts": {
            "files": ["src/assets/fonts/{.*,*,*/*}"],
            "tasks": "fonts"
        },
        "livereload": {
            "options": {
                "livereload": true
            },
            "files": [
                "<%= globalConfig.dev %>/**/*.html",
                "<%= globalConfig.dev %>/assets/css/{,*/}*.css",
                "<%= globalConfig.dev %>/assets/img/{,*/}*.*"
            ]
        }
    }
}
