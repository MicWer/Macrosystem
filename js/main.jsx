import React, {Component} from 'react';
import Diagram from 'diagram.jsx';
import People from 'people.jsx';
import Controls from 'controls.jsx';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    render() {
        let men = ;
        return (
            <div>
                <Diagram/>
                <People/>
                <People/>
                <Controls/>
            </div>
        )
    }
}