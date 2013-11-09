module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      dist: {
        options: {
          flatten: true,
          assets: 'bower_components',
          layout: 'layouts/default.html'
        },
        src: 'pages/*.html',
        dest: 'dist/'
      }
    },

    clean: ['dist/'],

    watch: {
      styles: {
        files: ['layouts/*.html','pages/*.html'],
        tasks: ['assemble']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('assemble');

  grunt.registerTask('compile', ['clean', 'assemble'])
  grunt.registerTask('default', ['compile', 'watch']);
};