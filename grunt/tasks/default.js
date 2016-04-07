/**
 * Created by rerades on 7/4/16.
 */

module.exports = function(grunt) {
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
};
