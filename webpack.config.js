require('babel-polyfill');
var path                 = require('path');
var _root                = __dirname + '/';
var webpack              = require('webpack');
var WebpackOnBuildPlugin = require('on-build-webpack');
var requireFromString    = require('require-from-string');
var fs                   = require('fs');
var escapes              = require('ansi-escapes');
var JScripty             = _root + 'scripts/env/jscripty';
var _root                = __dirname + '/';
var scriptsRoot          = _root + 'scripts/';
var stylesRoot           = _root + 'styles/';
var vendorScripts        = scriptsRoot + 'vendor/';
var log                  = require('bows')('CLI');

//Stupid hack to make isomophic-fetch happy
global.self = global;

//get rid of webpack compile messages
var clearScreen = function () {
   if (jscripty.config.keepPreviousOutput) return;
   process.stdout.write(escapes.clearScreen);
};

process.on('uncaughtException', function(error){
  log(error);
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
        log(error);
      }
    });
};

var config = {
  //devtool: 'source-map', //currently not in use
  entry: [
    _root + 'scripts/app/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/release/',
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
       'Promise'            : 'imports?this=>global!exports?global.Promise!es6-promise',
       'fetch'              : 'imports?this=>global!exports?global.fetch!isomorphic-fetch',
       '$'                  : 'jquery',
       'jQuery'             : 'jquery',
       'window.jQuery'      : 'jquery',
    }),
    new WebpackOnBuildPlugin(function(stats) {
      readAsync('./dist/bundle.js');
    }),
  ],
  externals:{
    xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
  },
  module: {

    loaders: [
              {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
              },
              {
                  test : /\.html$/,
                  loader: 'html'
              },
              {
                  test : /\.less$/,
                  loader: 'style-loader!css-loader!less-loader'
              },
              {
                  test : /\.css$/,
                  loader: 'style-loader!css-loader'
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
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                  presets: ['es2015', 'react']
                }
              },
              {
                  test: /\.tsx?$/,
                  loader: 'ts'
              }
        ]
  },
  // specify option using `ts` property
  ts: {
      compiler: 'ntypescript'
  },
  resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.css', '.html', '.ts', '.tsx' ],
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

module.exports = function(opts){
  if(!opts)throw new Error('WebPack configuration options are missing.');
    global._argv = opts.argv;
    if(opts.loaders &&
      opts.loaders.length > 0){
      for (var i = 0; i < opts.loaders.length; i++) {
        config.module.loaders.push(opts.loaders[i]);
      };
  }
  if(opts.repl){
    config.entry = [_root + 'scripts/app/repl']
  }
  return config;
};