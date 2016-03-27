var log = require('bows')('RactiveHelper');

var template = '<div>' +
                    '<div>{{message}}</div>' +
                    '<input id="hello-button" type="button" on-click="button-clicked"/>' +
                '</div>';

var ractiveInstance = null;

var setup = function(elementId){
  var docEl, MyComponent;
  if(!elementId)elementId = 'app2';
  docEl = document.getElementById(elementId);
  MyComponent = Ractive.extend({
    template: template,
  });
  ractiveInstance = new MyComponent({
    el: docEl,
    data: function(){
      return {
        message: 'hello world'
      };
    },
    oninit: function(){
      log('[init]');
    },
    onrender: function(){
      log('[render]');
      this.on('button-clicked', function(e){
        e.original.preventDefault();
        log('Button clicked!');
      });
    },
    onupdate: function(){
      log('[update]');
    },
    onteardown: function(){
      log('[teardown]');
    }
  });
};

var getDOMNode = function(){
  var domNode = null;
  if(ractiveInstance){
    document.getElementById(ractiveInstance.el);
  }
  return domNode;
};

var getComponent = function(){
  return ractiveInstance;
};

var updateMessage = function(message){
  if(ractiveInstance){
    ractiveInstance.set('message', message)
      .then((success) => {
        log('[SET OK] : ' + JSON.stringify(success));
      }).catch(error => {
        log('[SET ERROR] ' + JSON.stringify(error));
      });
  }
};

module.exports = {
    setup : setup,
    getDOMNode : getDOMNode,
    getComponent : getComponent,
    updateMessage : updateMessage
}