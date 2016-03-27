import { testAsync, saySomething } from './async-helper';
import ReactHelper                 from './react-helper';
import InfernoHelper               from './inferno-helper';
let log = jscripty.getLogger('Main');

let RactiveHelper = jscripty.ractive.helper;
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

export default {
  runReact,
  runInferno,
  runRactive,
  ReactHelper,
  InfernoHelper,
  RactiveHelper,
  jscripty
}