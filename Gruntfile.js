module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        dist: {
            files: {
                'calc.js': ['src/calc.js', 'src/app.js']
            }
         }
       }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha');

  // Default task(s).
  grunt.registerTask("default", ['uglify']);
};