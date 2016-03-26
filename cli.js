var build    = require('webpack-build');
var minimist = require('minimist');

var argv   = minimist(process.argv.slice(2));
var script = argv._;

var config = {
  config: __dirname + '/webpack.config.js',
  watch: true
};

if(script){
  config['entry'] = script;
}

build(config, function(err, data) {
  if(err){
    console.error(err);
  }else{
    // domHelper.setupDOM();
    //console.log(JSON.stringify(data, null, 4));
  }
});