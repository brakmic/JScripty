import AsyncHelper from './async-helper';
import ReactHelper                 from './react-helper';
import InfernoHelper               from './inferno-helper';
let RactiveHelper = jscripty.ractive.helper;
let log = jscripty.getLogger('Main');

jscripty.inferno.helper = InfernoHelper;
jscripty.react.helper = ReactHelper;

let runReact = () => {
  if(!jscripty.argv.react)return;
  if(!jscripty.react.reactRuns){
      jscripty.react.reactRuns = true;
      ReactHelper.setup();
  }
};

let runInferno = () => {
  if(!jscripty.argv.inferno)return;
  if(!jscripty.inferno.infernoRuns){
      jscripty.inferno.infernoRuns = true;
      InfernoHelper.setup();
  }
};

let runRactive = () => {
  if(!jscripty.argv.ractive)return;
  if(!jscripty.ractive.ractiveRuns){
    jscripty.ractive.ractiveRuns = true;
    RactiveHelper.setup();
  }
};

export default (() => {
    let component = null;
    //************** ES6 / ES7 ********************/
    //AsyncHelper.testAsync();
    AsyncHelper.saySomething('Hello',' World ','from JScripty!');
    
    /**************** REACT ************************/
    //runReact();
    //component = ReactHelper.getComponent();
    //component.setState({message: 'Hello World'});

    //****************** INFERNO ********************/
    /*runInferno();
    component = InfernoHelper.getComponent();
    component.setState({message: 'Hello Inferno'});*/
    //log(`[component] : ${JSON.stringify(jscripty.inferno._component, null, 4)}`);
    //saySomething('hello','world',' with ', 'React');

    //*********************** RACTIVE *************************/
    // runRactive();
    // component = RactiveHelper.getComponent();
    /*log('Message is: ' + component.get('message'));
    component.set('message','YOLO!');
    log('Message is now: ' + component.get('message'));*/
    // let rawEvent = new window.Event('hello-button-clicked');
    /*let proxyEvent = {
                        node: document.getElementById('hello-button'),
                        original: rawEvent,
                     };
    component.fire('button-clicked', proxyEvent);*/

})();
