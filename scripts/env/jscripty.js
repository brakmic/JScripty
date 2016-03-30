var _root             = __dirname + '/';
var bows              = require('bows');
//For isomorphic-fetch
global.XMLHttpRequest = require('xhr2');
var repl              = require('repl');
var stringify         = require('json-stringify-safe');
var domHelper         = require(_root + 'dom');
var RactiveHelper     = require('../app/ractive/ractive-helper.js');

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
  async: {},
  //Node-jsDOM tools
  domHelper: domHelper,
  argv: global._argv,
  tools: {
    stringify: stringify,
    repl: repl
  },
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
    helper: null,
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
    helper: null,
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
  jscripty.domHelper.setupDOM();
}());