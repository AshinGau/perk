module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    cleancss: true
                },
                files: {
                    "public/css/perk.min.css": "bootstrap-less/__perk.less"
                }
            }
        },
        watch: {
            files: ['bootstrap-less/*.less', 'bootstrap-less/mixins/*.less'],
            tasks: ['less'],
            options: {
                spawn: false,
            }
        },
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            dist: {
                src: [
                    "src/utils/jquery.js",
                    "src/utils/jquery.cookie.js",
                    "src/utils/modal.js"
                ],
                dest: "public/dist/utils.js"
            }
        },
        uglify: {
            options: {
            },
            dist: {
                files: {
                    'public/dist/utils.min.js': 'public/dist/utils.js'
                }
            }
        }
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');  
    grunt.loadNpmTasks('grunt-contrib-uglify');  

    // 默认被执行的任务列表。
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('default', ['less', 'watch']);

}