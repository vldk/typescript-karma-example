// Karma configuration
// Generated on Mon Jun 20 2016 14:47:02 GMT+0300 (EEST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['systemjs', 'mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            'test/**/*.ts',
            'test/**/*.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.ts': ['typescript', 'sourcemap'],
            'test/**/*.ts': ['typescript', 'sourcemap']
        },

        typescriptPreprocessor: {
            options: {
                sourceMap: true,
                module: 'commonjs'
            }
        },

        systemjs: {
            configFile: 'system.conf.js',

            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                'src/**/*.ts',
                'test/**/*.ts'
            ],

            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            config: {
                defaultJSExtensions:true,
                transpiler:null,
                paths: {
                    'systemjs': 'node_modules/systemjs/dist/system.js',
                    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
                    'chai':"node_modules/chai/chai.js"
                }
            }
        },

        client: {
            mocha: {
                reporter: 'html', // change Karma's debug.html to the mocha web reporter
                ui: 'bdd'
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [/*'Chrome', */'PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
