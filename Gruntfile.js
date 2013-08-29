module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        traceur: {
            custom: {
                files:{
                    'build/traceur/': ['src/**/*.js']
                }
            },
        },
        transpile: {
            main: {
                type: "amd", // or "cjs" for CommonJS
                // files: {
                //     "build/transpiler/module.js": "src/module.js"
                // }
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'build/transpiler/'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-es6-module-transpiler');

    grunt.registerTask('default', ['traceur', 'transpile']);

};
