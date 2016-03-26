var _root = __dirname + '/';
//React as a global reference
global.React    = require('react');
global.ReactDOM = require('react-dom');
//For isomorphic-fetch
global.XMLHttpRequest = require('xhr2');

var domHelper   = require(_root + 'dom');
var reactEnv    = require(_root + 'react');

//JScripty React Helpers
global.ReactEnv = reactEnv;

//JScripty tools & configs
global.jscripty = {
  config: {
    //set to "false" when not running in Visual Studio
    keepPreviousOutput : true
  },
  react: {}
};

//React tools
jscripty.react = {
    reactRuns: false,
    _message : 'hello world',
    _component : null,
    _node: null,
};

//Node-jsDOM tools
jscripty.domHelper = domHelper;


module.exports = (function(){

  //Create window object
  jscripty.domHelper.setupDOM();

}());