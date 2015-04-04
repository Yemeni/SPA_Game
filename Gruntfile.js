module.exports = function(grunt) {

	/** ToDo : 
		// Fix uncss ignoring underscore templates selectors
	*/

  // Project configuration.
	  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'), // reads package.json
		config: {
			dist: 'dist', // dist path
			reports: 'reports', // reports path
			docs: 'docs' // docs path
		},
		uglify: { // uglify plugin to shorten js files, variables and remove comments
		  options: {
			banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		  },
		  build: {
			src: ['assets/js/models/*.js', 'assets/js/collections/*.js','assets/js/views/*.js'], // the js files to be uglified
			dest: '<%= config.dist %>/js/<%= pkg.name %>.min.js' // the uglified output
		  }
		},
		copy: { // copy files & folders
			assets: {
				expand: true,
				flatten: true,
				src: [
					//'assets/css/*.min.css',
					//'assets/fonts/**/*',
					'assets/img/**/*',
					// Bower libs needed for oldIEs. The rest is concatenated via the bower_concat task.
					//'libs/html5shiv/dist/html5shiv-printshiv.min.js',
					//'libs/respondJs/dest/respond.min.js',
				],
				dest: '<%= config.dist %>/images' //destination
			},
		},
		uncss: { // removed unused css (have problems with classes used in underscore templates)
			dist: {
				files: [
					{ src: '*.html', dest: 'dist/css/compiled.min.css'}
				]
			},
			options: {
				compress:true
			}
		},
		 processhtml: {
			dist: {
				files: {
					'dist/index.html': ['start.html']
				}
			}
		}
		
	  });

  // Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-uncss');
	grunt.loadNpmTasks('grunt-processhtml');

  // Default task(s).
	grunt.registerTask('default', ['uglify','copy','uncss','processhtml']);

};