let log = jscripty.getLogger('ReactHelper');

class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: props.message
        }
        log(`[constructor] React component instantiated`);
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
    jscripty.react._element = jscripty.domHelper.getElement(elementId);
    jscripty.react._component = ReactEnv.render(<MyComponent message={jscripty.react._message} />,
                                                                                jscripty.react._element);

    jscripty.react._node = ReactDOM.findDOMNode(jscripty.react._component);
};

let getDOMNode = () => {
    return jscripty.react._node;
};

let getComponent = () => {
    return jscripty.react._component;
};

let updateMessage = (message) => {
    ReactDOM.render(<MyComponent message={message} />,
                            jscripty.react._element);
};

export default {
    setup,
    getDOMNode,
    getComponent,
    updateMessage
}