module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // sass
    sass: {
      options: {
          sourceMap: false, // sourcemap file 
          sourceComments: true, // line numbers
          outputStyle: 'expanded' // nested | expanded | compact | compressed
      },
      dist: {
        files: {
          'www/css/chess24.css': 'scss/chess24.scss',
          'www/css/embed/condensed.css':'scss/embed/condensed.scss'
        }
      }
    },

    // autoprefixer
    autoprefixer: {
      dist: {
        files:{
          'www/css/chess24.css':'www/css/chess24.css',
          'www/css/embed/condensed.css':'www/css/embed/condensed.css'
        },
        options: {
          browsers: ['last 2 versions', 'ie >=10', 'Opera >= 6']
        }
      }
    },

    // minify css
    cssmin: {
		css: {
			files: {
				'www/css/chess24.css':'www/css/chess24.css',
				'www/css/embed/condensed.css':'www/css/embed/condensed.css'
			}
		}
    },

    // watch
    watch: {
      sass: {
        files: ['scss/**/*.{scss,sass}'],
        tasks: ['sass:dist', 'autoprefixer:dist']
      }
    }
    
  });

  // load packages
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // registered tasks
  grunt.registerTask('default', ['sass:dist']);
  grunt.registerTask('brewCSS', ['sass:dist', 'autoprefixer']);
  grunt.registerTask('brewCSSAndWatch', ['sass:dist', 'autoprefixer', 'watch']);
  grunt.registerTask('brewCSSAndMinify', ['sass:dist', 'autoprefixer', 'cssmin:css']);
};