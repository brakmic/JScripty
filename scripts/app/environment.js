import AsyncHelper   from './es6_es7/async-helper';
import ReactHelper   from './react/react-helper';
import InfernoHelper from './inferno/inferno-helper';
import TsHelper      from './ts/react-demo';
let log = jscripty.getLogger('Environment');

let RactiveHelper = jscripty.ractive.helper;
jscripty.inferno.helper = InfernoHelper;
jscripty.react.helper = ReactHelper;
jscripty.async = {
    helper: {
        testAsync: AsyncHelper.testAsync,
        saySomething : AsyncHelper.saySomething
    }
};

let runReact = () => {
    if(jscripty.argv &&
        !jscripty.argv.react)return;
  if(!jscripty.react.reactRuns){
      jscripty.react.reactRuns = true;
      ReactHelper.setup();
  }
};

let runInferno = () => {
    if(jscripty.argv &&
        !jscripty.argv.inferno)return;
  if(!jscripty.inferno.infernoRuns){
      jscripty.inferno.infernoRuns = true;
      InfernoHelper.setup();
  }
};

let runRactive = () => {
    if(jscripty.argv &&
        !jscripty.argv.ractive)return;
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
  AsyncHelper,
  TsHelper,
  jscripty
};