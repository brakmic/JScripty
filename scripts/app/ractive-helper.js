var log = require('bows')('RactiveHelper');

var template = '<div>' +
                    '<div>{{message}}</div>' +
                    '<input id="hello-button" type="button" on-click="button-clicked:{{\'hello-button-clicked\'}}"/>' +
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
    }
  });
  ractiveInstance.on('button-clicked', function(e, selection){
      var ev = e;
      var selectedObject = selection.replace('-clicked','');
      ev.original.preventDefault();
      log('selectedObject} selected');
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