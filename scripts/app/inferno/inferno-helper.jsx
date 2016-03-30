import { Component } from 'inferno-component';
let log = jscripty.getLogger('InfernoHelper');

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: props.message
        }
        log(`[constructor] Inferno component instantiated`);
    }
    componentDidMount() {
        log(`[componentDidMount]`);
    }
    componentDidUpdate(prevProps, prevState){
        log(`[componentDidUpdate] prevState : ${JSON.stringify(prevState)}`);
    }
    componentWillReceiveProps(nextProps) {
        log(`[componentWillReceiveProps] ${JSON.stringify(nextProps)}`);
    }
    shouldComponentUpdate(nextProps, nextState) {
        log(`[shouldComponentUpdate] props : ${JSON.stringify(this.props)}, nextProps : ${JSON.stringify(nextProps)}`);
        return true;
    }
    render(){
        log(`[render] ${JSON.stringify(this.props.message)}`);
        return (<div>{this.props.message}</div>);
    }
}

let setup = (elementId = 'app') => {
    jscripty.inferno._element = jscripty.domHelper.getElement(elementId);
    jscripty.inferno._component = InfernoEnv.render(<MyComponent message={jscripty.inferno._message} />,
                                                                                jscripty.inferno._element);
    jscripty.inferno._node = jscripty.inferno._component._lastNode.dom;
};

let getDOMNode = () => {
    return jscripty.inferno._node;
};

let getComponent = () => {
    return jscripty.inferno._component;
};

let updateMessage = (message) => {
    InfernoDOM.render(<MyComponent message={message} />,
                            jscripty.inferno._element);
};

export default {
    setup,
    getDOMNode,
    getComponent,
    updateMessage,
    MyComponent
}