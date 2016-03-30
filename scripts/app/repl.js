import env from './environment';

jscripty.env = env;

let startRepl = (config) => {
  let replServer = jscripty.tools.repl.start({
    prompt: '> '
  });
  replServer.context.jscripty = jscripty;
};

export default (() => {
    startRepl();
})();