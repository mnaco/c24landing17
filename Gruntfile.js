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
          'css/c24landing.css': 'scss/c24landing.scss'
        }
      }
    },

    // autoprefixer
    autoprefixer: {
      dist: {
        files:{
          'css/c24landing.css':'css/c24landing.css'
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
				'css/c24landing.css':'css/c24landing.css'
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