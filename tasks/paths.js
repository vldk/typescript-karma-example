module.exports = {
    app: {
        stylesDir: 'src/styles/',
        src: {
            sass: [
                'src/styles/**/*.scss'
            ],
            img: [
                'src/img/**/*.png',
                'src/img/**/*.jpg'
            ]
        },
        dest: {
            styles: 'dist/styles/'
        }
    }
};
