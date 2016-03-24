### JScripty

A simple REPL-like utility for transpiling & executing ES6 code.

<del>Inspired by</del> Stolen from the excellent [esbox](https://github.com/callumlocke/esbox)
written by [Callum Locke](https://twitter.com/callumlocke).

**Beware**: This project is not intended to be used for anything productive!

It's a moving target and will likely change very soon.

I'm __only using it to learn__ ECMAScript 6, React & Redux.

#### Installation

```
npm install jscripty
```

#### Running

Open two consoles.

If you're running under Windows I recommend [ConEmu](https://conemu.github.io/).

In the first console open *scripts/app/main.js* with your preferred editor.

In the second console run the REPL by executing

```
npm start
```

Now edit the file and save it to kick-off the transpile-process in the REPL.

After a few moments your code will be executed and shown in the REPL.

<img src="http://fs5.directupload.net/images/160322/sied76ni.png"/>

#### Background info

Originally this project used much code from [Callum's](https://github.com/callumlocke/esbox) project which is a great tool for experimenting with newest JavaScript features. However, I didn't like the slow compilation time.
This, of course, is because on each save `node` has to restart and reload the complete environment.

Therefore I thought it'd be much nicer for me to let **webpack** do all the heavy lifting. :smile:

After some experimentation with `hot-reloading`, `webpack-dev-server` and a few other plugins this solution comprises of following `ingredients`:

- [require-from-string](https://www.npmjs.com/package/require-from-string) module for loading changed scripts as a string
- a simple asynchronous `file reload` function to be called after each successful build
- [babel-loader](https://www.npmjs.com/package/babel-loader) combined with the usual presets like `es2015`, `stage-0`, `react` and transformers for ES7 `async` syntax.
- [on-build webpack plugin](https://www.npmjs.com/package/on-build-webpack) to reload the rebuilt scripts.

The whole logic is located in `webpack.config.js`.

#### Future plans

I'm currently experimenting with React and trying to find out how to manipulate it without any browser environments.

#### License

[MIT](https://github.com/brakmic/JScripty/blob/master/LICENSE)
