module.exports = function (grunt, opt) {
    return {
        build: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: [
                {
                    expand: true,
                    cwd: "<%= globalConfig.build %>",
                    src: ["*.html"],
                    dest: "<%= globalConfig.build %>"
                }
            ]
        }
    }
}
