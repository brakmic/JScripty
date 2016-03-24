var path                 = require('path');
var webpack              = require('webpack');
var exec                 = require('child_process').exec;
var WebpackOnBuildPlugin = require('on-build-webpack');
var requireFromString    = require('require-from-string');
var fs                   = require('fs');
var escapes              = require('ansi-escapes');
var _root                = __dirname + '/';
var scriptsRoot          = _root + 'scripts/';
var stylesRoot           = _root + 'styles/';
var vendorScripts        = scriptsRoot + 'vendor/';
//load polyfill 'globally'
require('babel-polyfill');

//get rid of webpack compile messages
var clearScreen = function(){
  process.stdout.write(escapes.clearScreen);
};

process.on('uncaughtException', function(error){
  console.log("[EXCEPTION] : " + error);
});

//load changed file,
//clear current output
//and require its contents as a string
var readAsync = function(fileName){
    fs.readFile(fileName, "utf8", function(error, data ){
      if(!error){
        clearScreen();
        requireFromString(data.toString());
      }else{
        console.log("[ERROR] " + error);
      }
    });
};

module.exports = {
  //devtool: 'source-map', //currently not in use
  entry: [
    //'babel-polyfill', //do not use polyfill here but as a require above
    //'webpack-dev-server/client?http://localhost:8080',
    //'webpack/hot/only-dev-server',
    './scripts/app/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/release/'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
       'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new WebpackOnBuildPlugin(function(stats) {
      readAsync('./dist/bundle.js');
    }),
  ],
  module: {

    loaders: [
              //for future use *** begin
              {
                include: /\.json$/,
                loaders: ["json-loader"]
              },
              {
                  test : /\.html$/, loader: 'html'
              },
              {
                  test : /\.less$/, loader: 'style-loader!css-loader!less-loader'
              },
              {
                  test : /\.css$/, loader: 'style-loader!css-loader'
              },
              {
                  test : /\.(png|jpe?g|eot|ttf|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                  loader: 'url-loader?limit=8192&hash=sha512&digest=hex&name=[hash].[ext]'
              },
              {
                  test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                  loader: 'url-loader?mimetype=application/font-woff'
              },
              {   test: /\.jpg$/,
                  loader: "file-loader?name=[path][name].[ext]"
              },
              //for future use *** end
              {
                test: /\.js$/,
                include: path.join(__dirname, 'scripts'),
                loader: 'babel-loader',
                query: {
                  "plugins": ["syntax-async-functions","transform-regenerator",
                              "transform-async-to-generator"],
                  "presets": ["es2015","stage-0","react"],
                }
              }
        ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.html'],
    modulesDirectories: ['node_modules', 'bower_components'],
    //for future use *** begin
    alias: {
      'app.css'                        : stylesRoot    + 'app.css',
      'bootstrap.min.css'              : vendorScripts + 'bootstrap/css/bootstrap.min.css',
      'bootstrap.theme.min.css'        : vendorScripts + 'bootstrap/css/bootstrap-theme.min.css',
      'bootstrap'                      : vendorScripts + 'bootstrap/js/bootstrap.js',
      'bootstrap.min'                  : vendorScripts + 'bootstrap/js/bootstrap.min.js',
      'metisMenu.min.css'              : stylesRoot    + 'metis/metisMenu.min.css',
      'font-awesome.min.css'           : stylesRoot    + 'fontawesome/css/font-awesome.min.css',
      'awesome-bootstrap-checkbox.css' : stylesRoot    + 'awesome-bootstrap-checkbox.css',

    }
    //for future use *** end
  },
   devServer: { // not in use
    noInfo: true,
    contentBase: "./scripts"
  },
  useMemoryFs: true,
  progress: true
};