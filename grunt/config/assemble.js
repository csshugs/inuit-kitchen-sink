module.exports = function (grunt, opt) {
    return {
        options: {
            flatten: true,
            layout: "default.hbs",
            layoutdir: "src/templates/layouts",
            assets: "<%= globalConfig.dev %>/assets",
            partials: [
                "src/templates/pages/*.hbs",
                "src/templates/parts/*.hbs"
            ],
            data: ['src/templates/data/**/*.json']
        },
        dev: {
            files: {
                "<%= globalConfig.dev %>/": ["src/templates/pages/**/*.hbs"]
            }
        },
        build: {
            options: {
                layout: "default.hbs",
                layoutdir: "temp/layouts",
                assets: "<%= globalConfig.build %>/assets",
                partials: [
                    "temp/pages/*.hbs",
                    "temp/parts/*.hbs"
                ],
            },
            files: {
                "./": ["temp/pages/**/*.hbs"]
            }
        }
    }
}
