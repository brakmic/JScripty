### JScripty

A simple REPL-like utility for transpiling & executing ES6 code.

<del>Inspired by</del> Stolen from the excellent [esbox](https://github.com/callumlocke/esbox)
written by [Callum Locke](https://twitter.com/callumlocke).

**Beware**: This project is not intended to be used for anything productive!

It's a moving target and will likely change very soon.

I'm __only using it to learn__ ECMAScript 6, React & Redux.

#### Installation

```
git clone https://github.com/brakmic/JScripty.git
npm install
```

#### Running

Open two consoles.

If you're running under Windows I recommend [ConEmu](https://conemu.github.io/).

In the first console open a script with your preferred editor.

In the second console run the REPL by executing

```
node cli.js
```

or

```
npm start [will automatically load scripts/app/main.js which is set in webpack.config.js]
```


Now edit the file and save it to kick-off the **transpile-process** in the REPL.

After a few moments your code will be executed and shown in the REPL.

<img src="http://fs5.directupload.net/images/160325/76wmrqdx.png"/>

#### IDE Integration

You don't have to run JScripty in a console. For example, I configured it as an `External Tool` in my Visual Studio 2015.

Just go to menu `Tools\External Tools` and type in the following (notice: use **your** Node install-path)

<img src="http://fs5.directupload.net/images/160325/8mwgdjsi.png"/>

Now you'll get a new menu option `JScripty` under `Tools`.

Create a **new, blank solution** and **import** the JScripty folder as an `Existing Web Site`.

First *right-click* the Solution itself then select following options:

<img src="http://fs5.directupload.net/images/160325/5xo2r8wo.png"/>

Go to the **root folder** of your JScripty project and select it.

The import will take a few moments and in the end you should get the following project settings:

<img src="http://fs5.directupload.net/images/160325/gsqqooya.png"/>

You can now select the `JScripty` menu option to start the watcher. Now change something in your main.js and watch the output.

<img src="http://fs5.directupload.net/images/160325/e26qrtd3.png"/>

**Notice**: Visual Studio's Output Window doesn't recognize **ANSI Escape Commands** which makes the `clearScreen` function unusable. In `webpack.config.js` you can find a variable to silent the ANSI-output.

#### Background info

Originally, this project had used much of the code from [Callum's](https://github.com/callumlocke/esbox) project which is a great tool for experimenting with newest JavaScript features. However, I didn't like the slow compilation times.
This is because on each save the running `node` instance has to restart and reload the complete environment again.

Therefore I thought it'd be much nicer to let **webpack** do all the heavy lifting. :smile:

After some experimentation with `hot-reloading`, `webpack-dev-server` and a few other things this solution now comprises of following `ingredients`:

- [require-from-string](https://www.npmjs.com/package/require-from-string) module for loading changed scripts as a string
- a simple asynchronous `file reload` function in `webpack.config.js` to be called after each successful build
- [babel-loader](https://www.npmjs.com/package/babel-loader) combined with the usual presets like `es2015`, `stage-0`, `react` and transformers for ES7 `async` syntax.
- [on-build webpack plugin](https://www.npmjs.com/package/on-build-webpack) to reload the rebuilt scripts.
- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch) to easy make web requests.
- [es6-promise polyfill](https://github.com/stefanpenner/es6-promise) to provide a globally available Promise API.
- [React](https://www.npmjs.com/package/react) for future experiments. [*currently not in use*]

The whole logic is located in `webpack.config.js`.

#### Future plans

I'm currently experimenting with React and trying to find out how to manipulate it without any browser environment.

#### License

[MIT](https://github.com/brakmic/JScripty/blob/master/LICENSE)
