var setupReact = function(reactComponent, domElement){
    var reactElement = ReactDOM.render(reactComponent, domElement);
    return reactElement;
};

var ReactHelper = {
  setupReact: setupReact
}

module.exports = ReactHelper;