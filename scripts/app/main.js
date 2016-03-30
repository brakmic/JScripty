import env from './environment';
let log = jscripty.getLogger('Main');

jscripty.env = env;

//this is the main entry point for WebPack compilation
export default (() => {
    let component = null;
    //************** ES6 / ES7 ********************/
    //AsyncHelper.testAsync();
    //AsyncHelper.saySomething('Hello',' World ','from JScripty!');
    //env.TsHelper.renderGreeting();
    /**************** REACT ************************/
    //log(env);
    env.runReact();
    //component = ReactHelper.getComponent();
    //component.setState({message: 'Hello World'});

    log(jscripty.domHelper.getHTML());
 
    //jscripty.domHelper.resetDOM();
    //****************** INFERNO ********************/
    /*runInferno();
    component = InfernoHelper.getComponent();
    component.setState({message: 'Hello Inferno'});*/
    //log(`[component] : ${JSON.stringify(jscripty.inferno._component, null, 4)}`);
    //saySomething('hello','world',' with ', 'React');

    //*********************** RACTIVE *************************/
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
