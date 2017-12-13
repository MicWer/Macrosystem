import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Diagram from './diagram.jsx';
import Users from './users.jsx';
import Controls from './controls.jsx';

export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        this.getUsers();
    }

    getUsers() {
        return fetch('http://localhost:3000/users').then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network error');
            }
        }).then(users => this.setState({
            users: users
        })).catch(err => {
            console.log(err)
        })

    }

    render() {
        console.log('Rendering users: ', this.state.users);
        return (
            <div className="container">
                <Diagram/>
                <div className="row">
                    <div className="col l6">
                        <Users id={"women"} users={this.state.users}/>
                    </div>
                    <div className="col l6">
                        <Users id={"men"} users={this.state.users}/>
                    </div>
                </div>

                <Controls/>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>,
    document.getElementById('app')
);


