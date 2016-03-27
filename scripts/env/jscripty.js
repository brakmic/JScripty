var _root             = __dirname + '/';
var bows              = require('bows');
//For isomorphic-fetch
global.XMLHttpRequest = require('xhr2');
var domHelper         = require(_root + 'dom');
var RactiveHelper     = require('../app/ractive-helper.js');

//JScripty tools & configs
global.jscripty = {
  config: {
    //set to "false" when not running in Visual Studio
    keepPreviousOutput : true
  },
  activeFrameworks: [],
  react: {},
  inferno: {},
  ractive: {},
  //Node-jsDOM tools
  domHelper: domHelper,
  argv: global._argv,
  getLogger: function(area){
    return bows(area);
  }
};

//React
global.React    = require('react');
global.ReactDOM = require('react-dom');
//JScripty React Helpers
global.ReactEnv = require(_root + 'react');

//React tools
jscripty.react = {
    reactRuns: false,
    _message : 'hello world',
    _component : null,
    _node: null,
};

//Inferno
global.Inferno    = require('inferno');
global.InfernoDOM = require('inferno-dom');
global.InfernoEnv = require(_root + 'inferno');
//Inferno tools
jscripty.inferno = {
    infernoRuns: false,
    _message : 'hello world',
    _component : null,
    _node: null,
};

//Ractive
global.Ractive    = require('ractive');
jscripty.ractive = {
  ractiveRuns: false,
  _message : 'hello world',
  _component : null,
  _node : null,
  helper: RactiveHelper
};

module.exports = (function(){
  //Create window object
  jscripty.domHelper.setupDOM();

}());