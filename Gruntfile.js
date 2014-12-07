module.exports = function(grunt) {



    var globalConfig = {
        // Assets destinaion paths
        dev: 'dist', // Path to dev output (`grunt`)
        build: 'build' // Path to build output (`grunt deploy`)
    };



    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {}
        },
        config: {
            globalConfig: globalConfig
        }
    });



    // Default dev task without open.
    grunt.registerTask('default', [
        'clean:dev',
        'copy:img',
        'copy:fonts',
        'assemble:dev',
        'concurrent',
        'connect',
        'watch'
    ]);

    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:build',
        'copy:deploy',
        'processhtml',
        'assemble:build',
        'autoprefixer',
        'htmlmin',
        'clean:temp'
    ]);

    grunt.registerTask('scss', [
        'sass:dev'
    ]);

    grunt.registerTask('html', [
        'assemble:dev'
    ]);

    grunt.registerTask('js', [
        'copy:js'
    ]);

    grunt.registerTask('img', [
        'copy:img'
    ]);

    grunt.registerTask('fonts', [
        'copy:fonts'
    ]);


};
