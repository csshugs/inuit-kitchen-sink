module.exports = function(grunt) {

    var globalConfig = {
        // Assets destinaion paths
        dev: 'dist', // Path to dev output (`grunt`)
        build: 'build' // Path to build output (`grunt deploy`)
    };

    var path = require('path');


    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), 'grunt/config/'),
        jitGrunt: {
            customTasksDir: 'grunt/tasks/',
            staticMappings: {}
        },
        config: {
            globalConfig: globalConfig
        }
        
    });

};
