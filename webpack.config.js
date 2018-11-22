const path = require('path');
const fs = require('fs');
const VueLoaderPlugin = require('vue-loader/lib/plugin') /* vue-loader插件 */

let entry = (function () {
    let entry = {};
    /* 获取入口文件 */
    const pages = fs.readdirSync(path.resolve(__dirname, './src/assets/js'));

    pages.map(files => {
        files = files.replace(/\.js/g, '');
        entry[files] = `./src/assets/js/${files}.js`;
    })
    console.log(entry)
    return entry;
})()


module.exports = {
    entry,
    output: {
        filename: '[name].min.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: ["babel-loader"],
                // 不检查node_modules下的js文件
                exclude: "/node_modules/"
                // exclude: file => (
                // 	/node_modules/.test(file) &&
                // 	!/\.vue\.js/.test(file)
                // )
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}