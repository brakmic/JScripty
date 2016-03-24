#!/usr/bin/env node

var build    = require('webpack-build');
var minimist = require('minimist');

var argv   = minimist(process.argv.slice(2));
var script = argv._;

console.log("[FILE] : " + JSON.stringify(argv));

build({
  config: __dirname + '/webpack.config.js',
  watch: true,
  entry: [
    script
  ],
}, function(err, data) {
  if(err){
    console.error(err);
  }else{
    console.log(JSON.stringify(data));
  }
});