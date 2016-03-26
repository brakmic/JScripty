var log = jscripty.getLogger('InfernoEnv');

var render = function(infernoComponent, domElement){
    InfernoDOM.render(infernoComponent, domElement);
    //log(JSON.stringify(infernoComponent, null, 4));
    return infernoComponent.instance;
};

var InfernoHelper = {
  render: render
}

module.exports = InfernoHelper;