module.exports = function (grunt, opt) {
    return {
        deploy: {
            files: [
                {
                    expand: true,
                    cwd: "src/assets/img",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.build %>/assets/img"
                },
                {
                    expand: true,
                    cwd: "src/assets/fonts",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.build %>/assets/fonts"
                },
                {
                    expand: true,
                    cwd: "src/assets/js",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.build %>/assets/js"
                },
                {
                    expand: true,
                    cwd: "src/templates",
                    src: ["./**/*.*"],
                    dest: "temp"
                }
            ]
        },
        img: {
            files: [
                {
                    expand: true,
                    cwd: "src/assets/img",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.dev %>/assets/img"
                }
            ]
        },
        fonts: {
            files: [
                {
                    expand: true,
                    cwd: "src/assets/fonts",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.dev %>/assets/fonts"
                }
            ]
        },
        js: {
            files: [
                {
                    expand: true,
                    cwd: "src/assets/js",
                    src: ["./**/*.*"],
                    dest: "<%= globalConfig.dev %>/assets/js"
                }
            ]
        }
    }
}
