import { testAsync, saySomething } from './async-helper';
import ReactHelper                 from './react-helper';
import InfernoHelper               from './inferno-helper';
let log       = jscripty.getLogger('Main');

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

export default (() => {
    let component = null;
    //testAsync();

    //runReact();
    //component = ReactHelper.getComponent();
    //component.setState({message: 'Hello React'});

    runInferno();
    component = InfernoHelper.getComponent();
    component.setState({message: 'Hello Inferno'});

    //saySomething('hello','world',' with ', 'React');
})();
