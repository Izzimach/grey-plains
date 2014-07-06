module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'src/*.js',
            dest: 'build/scripts/<%= pkg.name %>.min.js'
          }
        },

        browserify: {
          basic: {
            src: ['src/greyplains.js'],
            dest: 'build/scripts/<%= pkg.name %>.min.js'
          }
        },


        watch: {
          files: ['src/*.js'],
          tasks: ['browserify']
        },

        jshint: {
          all: ['src/**/*.js']
        }


      });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['browserify']);
};
