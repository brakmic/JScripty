export class MyComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: props.message
        }
        console.log(`[constructor] React component instantiated`);
    }
    componentDidMount() {
        console.log(`[componentDidMount]`);
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`[componentDidUpdate] prevState : ${JSON.stringify(prevState)}`);
    }
    componentWillReceiveProps(nextProps) {
        console.log(`[componentWillReceiveProps] ${JSON.stringify(nextProps)}`);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(`[shouldComponentUpdate] props : ${JSON.stringify(this.props)}, nextProps : ${JSON.stringify(nextProps)}`);
        return true;
    }
    render(props){
        console.log(`[render] ${JSON.stringify(this.state.message)}`);
        return (<div>{this.state.message}</div>);
    }
}

let setupReact = (elementId = 'app') => {
    jscripty.react._element = jscripty.domHelper.getElement(elementId);
    jscripty.react._component = ReactEnv.setupReact(<MyComponent message={jscripty.react._message} />,
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

export {
    setupReact,
    getDOMNode,
    getComponent,
    updateMessage
}