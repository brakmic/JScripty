import env from './environment';
import { Greeter } from './ts/hello';
let log = jscripty.getLogger('Main');

jscripty.env = env;

//this is the main entry point for WebPack compilation
export default (() => {
    let component = null;

    //************** ES6 / ES7 ********************/
    //AsyncHelper.testAsync();
    //AsyncHelper.saySomething('Hello',' World ','from JScripty!');
    //*********************************************/

    //*TypeScript with React */
    //************************/
    //env.TsHelper.renderGreeting();
    //*Using imported TypeScript classes */
    //let greeter = new Greeter();
    //log(greeter.greet('Coder'));

    /**************** React ************************/
    //log(env);
    //env.runReact();
    //component = ReactHelper.getComponent();
    //component.setState({message: 'Hello World'});

    //*Check your DOM **/
    //log(jscripty.domHelper.getHTML());
    //jscripty.domHelper.resetDOM();

    //****************** Inferno ********************/
    /*runInferno();
    component = InfernoHelper.getComponent();
    component.setState({message: 'Hello Inferno'});*/
    //log(`[component] : ${JSON.stringify(jscripty.inferno._component, null, 4)}`);
    //saySomething('hello','world',' with ', 'React');

    //*********************** Ractive*****************/
    // runRactive();
    // component = RactiveHelper.getComponent();
    /*log('Message is: ' + component.get('message'));
    component.set('message','YOLO!');
    log('Message is now: ' + component.get('message'));*/
    // let rawEvent = new window.Event('hello-button-clicked');
    /*let proxyEvent = {
                        node: document.getElementById('hello-button'),
                        original: rawEvent,
                     };
    component.fire('button-clicked', proxyEvent);*/

})();
