#!/usr/bin/env node

var path          = require('path');
var _root         = __dirname + '/';
var build         = require('webpack-build');
var webpackConfig = require(_root + 'webpack.config.js');
var minimist      = require('minimist');
var JScripty      = _root + 'scripts/env/jscripty';
var log           = require('bows')('JScripty');

var argv          = minimist(process.argv.slice(2));
var script        = argv._;
var info          = [];

var config = {
  config: __dirname + '/webpack.config.js',
  watch: true,
  argv: argv,
  loaders: []
};

if(script){
  config['entry'] = script;
}

//Process JSX files with React (uses .babelrc)
var webpackLoaderReact = {
  test: /\.jsx?$/,
  include: path.join(__dirname, 'scripts'),
  exclude: /node_modules/,
  loader: 'react-hot',
};
//Process JSX files with Inferno (ignores .babelrc)
var webpackLoaderInferno = {
  test: /\.jsx?$/,
  include: path.join(__dirname, 'scripts'),
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
     "presets": [
        "es2015",
        "stage-0",
     ],
    "plugins": [
        "transform-object-rest-spread",
        "babel-plugin-syntax-jsx",
        "babel-plugin-inferno"
    ]
  }
}

//Process Ractive components
var webpackLoaderRactive = {
  test: /\.ract$/,
  exclude: [/node_modules/, /bower_components/, /vendor/],
  loader: 'ractive-component'
};

if(argv.react &&
  argv.inferno){
  throw new Error('Running React and Inferno in parallel is not allowed!');
}
//When not in REPL at least one Framework has to be active
if(!argv.react &&
  !argv.inferno &&
  !argv.repl){
  config['argv']['react'] = true;
  config.repl = true;
  config.loaders.push(webpackLoaderReact);
}

//Babel for Inferno (uses different plugins for JSX processing)
if(argv.inferno){
  config.loaders.push(webpackLoaderInferno);
  info.push('Inferno');
}

//Ractive components loader
if(argv.ractive){
  config.loaders.push(webpackLoaderRactive);
  info.push('Ractive');
}
//Start WebPack
build(config, function(err, data) {
  if(err){
    console.error(err);
  }else{
    log('JScripty runs with: ' + info);
  }
});
//kick-off!
require(JScripty);