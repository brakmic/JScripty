import { testAsync, saySomething } from './async.demo';
import { setupReact, getComponent, getDOMNode, updateMessage } from './react.demo';

let component = null;

let runReact = () => {
  if(!jscripty.react.reactRuns){
      jscripty.react.reactRuns = true;
      console.log(`[ORIGINAL HTML] : ${jscripty.domHelper.getHTML()}`);
      setupReact();
  }
  component = getComponent();
};


let testReact = () => {

  runReact();

  component.setState({
	  message: 'Hello Boo!'
  });

  // updateMessage('hello wooo');
  // console.log(`[HTML] : ${jscripty.domHelper.getHTML()}`);
  //console.log(`${JSON.stringify(getDOMNode(), null, 4)}`);
};

export default (() => {
    //testAsync();
    testReact();
    //saySomething('hello','world',' with ', 'React');
})();
