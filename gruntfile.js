module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });
    
    grunt.initConfig({
        less:{
            development: {
                options:{
                    compress:true
                },
                files: {
                    'style.css': 'style.less'
                }
            }
        }
    });

    
    grunt.registerTask('default', ['less']);
};