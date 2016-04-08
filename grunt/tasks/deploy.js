/**
 * Created by rerades on 7/4/16.
 */

module.exports = function (grunt) {
    // Deploy task, compressing the css and concatenating the js files
    grunt.registerTask('deploy', [
        'clean:build',
        'sass:build',
        'copy:deploy',
        'processhtml',
        'assemble:build',
        // 'autoprefixer',  --> now it's  grunt-postcss
        'htmlmin',
        'clean:temp'
    ]);
};
