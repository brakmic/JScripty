var log = jscripty.getLogger('ReactEnv');

var render = function(reactComponent, domElement){
    var reactElement = ReactDOM.render(reactComponent, domElement);
    return reactElement;
};

var ReactEnv = {
  render: render
}

module.exports = ReactEnv;