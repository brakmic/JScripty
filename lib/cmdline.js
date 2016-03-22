import execa from 'execa';
import path from 'path';
import pathExists from 'path-exists';
import packageJson from '../package.json';
import sane from 'sane';

const isPolling = false;

process.title = 'jscripty';

const onFileChange = (name, root) => {
  //console.log(`[FILE CHANGE] | ${name} | ${root}`);

  execute();

};

const userScript = (() => {
  let name = path.resolve(__dirname,'../test/file.js');
  return name;
})();

const execute = (() => {
    //console.log('[EXECUTING OUTER FUNCTION]');
    let cwd = path.resolve(__dirname, '../test/');
    console.log(`[CWD] | ${cwd}`);
    let executor = path.resolve(__dirname, 'execute.js');

    let child = undefined;


    return () => {
      //console.log('[EXECUTING INNER FUNCTION]');

      if(child)child.kill();

      child = execa.spawn('babel-node', [
        executor,
        '--file', userScript,
        '--clear', 'true'
      ], { cwd, stdio: 'inherit'} );

      child.on('close', code => {
        //console.log(`[EXIT] | Code: ${code}`);
      });

    };

})();

const watcher = sane('./test/', { poll : isPolling });
watcher.on('add', onFileChange);
watcher.on('change', onFileChange);
watcher.on('delete', onFileChange);
watcher.on('ready', execute);