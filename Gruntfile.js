module.exports = function(grunt) {

	grunt
			.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				copy : {
					main : {
						files : [
								{
									expand : true,
									flatten : true,
									src : [ 'bower_components/bootstrap/dist/css/*.css' ],
									dest : 'target/classes/static/css',
									filter : 'isFile'
								},
								{
									expand : true,
									flatten : true,
									src : [
											'bower_components/bootstrap/dist/js/*',
											'bower_components/jquery/dist/*' ],
									dest : 'target/classes/static/js',
									filter : 'isFile'
								},
								{
									expand : true,
									cwd : 'bower_components/bootstrap/dist/fonts/',
									src : [ '**' ],
									dest : 'target/classes/static/fonts/'
								} ],
					},
				},
				cssmin : {
					target : {
						files : [ {
							expand : true,
							cwd : 'src/main/resources/static/css',
							src : [ '*.css', '!*.min.css' ],
							dest : 'target/classes/static/css',
							ext : '.min.css'
						} ]
					}
				},
				uglify : {
					my_target : {
						files : {
							'target/classes/static/js/app.min.js' : [ 'src/main/resources/static/js/app.js' ],
						}
					}
				}
			});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', [ 'copy', 'uglify', 'cssmin' ]);

};