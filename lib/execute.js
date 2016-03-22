import minimist from 'minimist';

const flags = minimist(process.argv.slice(2));

console.log(`[FLAGS] ${JSON.stringify(flags)}`);

require(flags.file);