var log = jscripty.getLogger('InfernoEnv');

var render = function(infernoComponent, domElement){
    InfernoDOM.render(infernoComponent, domElement);
    return infernoComponent.instance;
};

var InfernoEnv = {
  render: render
}

module.exports = InfernoEnv;