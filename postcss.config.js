module.exports = {
    plugins: [
            require('autoprefixer')({
                overrideBrowserslist: 'last 2 versions',
                cascade: false
            }),
            require('cssnano')({ // подключили cssnano
                preset: 'default', // выбрали настройки по умолчанию
        })
    ]
}