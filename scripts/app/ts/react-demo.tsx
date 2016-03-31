//this demo was taken from
//https://github.com/Microsoft/TypeScriptSamples/tree/master/jsx

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import {Greeter as Greetifier, GreeterProps as GreeterProps} from './greeter';

function getRandomGreeting() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return 'Hello';
        case 1: return 'Howdy';
        case 2: return 'Greetings to you';
    }
}

export function renderGreeting() {
    $(() => {
        let props: GreeterProps = {
            whomToGreet: 'world!',
        };

        console.log('Rendering React components with TypeScript!');
        ReactDOM.render(<Greetifier {...props} />, $('#app-ts').get(0));
    });
}