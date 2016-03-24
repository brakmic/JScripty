var build = require('webpack-build');

build({
  config: __dirname + '/webpack.config.js',
  watch: true
}, function(err, data) {
  if(err){
    console.error(err);
  }else{
    console.log(JSON.stringify(data));
  }
});