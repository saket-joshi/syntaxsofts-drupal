"use strict";
module.exports = function(grunt) {
    
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: "themes/custom/syntaxsofts_base/sass",
                    cssDir: "themes/custom/syntaxsofts_base/css"
                }
            },
            clean: {
                options: {
                    sassDir: "themes/custom/syntaxsofts_base/sass",
                    cssDir: "themes/custom/syntaxsofts_base/css",
                    clean: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    "themes/custom/syntaxsofts_base/js/main.js": ["themes/custom/syntaxsofts_base/lib/*.js"]
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ["themes/custom/syntaxsofts_base/sass/*.*"],
                tasks: ["compass:dist"]
            },
            scripts: {
                files: ["themes/custom/syntaxsofts_base/lib/*.*"],
                tasks: ["uglify:dist"]
            }
        }
    });

}