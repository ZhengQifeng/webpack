module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,   //加载json文件
        loader: "json-loader"    //'-loader'不能少
      },
      {
      	test: /\.css$/,  //加载css文件
      	loader: "style-loader!css-loader"
      },
      {
      	test: /\.vue$/,    //加载vue插件
      	loader: "vue-loader"
      },

      {
        test: /\.(woff|woff2)$/, 
        loader:"url-loader?prefix=font/&limit=5000"   //一定要加'-loader'
      },

      { 
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
      }

    ]
  },

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },

  resolve: {    //使用vue插件时必须配置这个
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
}