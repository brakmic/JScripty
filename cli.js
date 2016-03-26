var path          = require('path');
var _root         = __dirname + '/';
var build         = require('webpack-build');
var webpackConfig = require('./webpack.config.js');
var minimist      = require('minimist');

var argv          = minimist(process.argv.slice(2));
var script        = argv._;
var info          = '';

var config = {
  config: __dirname + '/webpack.config.js',
  watch: true,
  argv: argv,
};

if(script){
  config['entry'] = script;
}

//Process JSX files with React (uses .babelrc)
var webpackLoaderReact = {
  test: /\.jsx?$/,
  include: path.join(__dirname, 'scripts'),
  exclude: /node_modules/,
  loaders: ['react-hot','babel-loader'],
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

if(!argv.react &&
  !argv.inferno){
  config['argv']['react'] = true;
}

if(argv.react &&
  argv.inferno){
  throw new Error('Running React and Inferno in parallel is not allowed!');
}
if(argv.react){
  config.loaders = [ webpackLoaderReact ];
  info = 'runs with React';
}
if(argv.inferno){
  config.loaders = [ webpackLoaderInferno ];
  info = 'runs with Inferno';
}

build(config, function(err, data) {
  if(err){
    console.error(err);
  }else{
    console.log('JScripty ' + info);
  }
});