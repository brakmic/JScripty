import env from './environment'
//import bows from 'bows';
//let log = bows('REPL');

let startRepl = (config) => {
  let replServer = jscripty.tools.repl.start({
    prompt: '> '
  });
  replServer.context.jscripty = jscripty;
};

export default (() => {
    startRepl();
})();