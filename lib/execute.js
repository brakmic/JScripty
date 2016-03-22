import minimist from 'minimist';

process.on('uncaughtException', error => {
  //swallow
  console.log(`${error}`);
});

const flags = minimist(process.argv.slice(2));

//console.log(`[FLAGS] ${JSON.stringify(flags)}`);

require(flags.file);