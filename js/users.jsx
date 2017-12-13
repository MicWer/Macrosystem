import React, {Component} from 'react';

export default class Users extends Component {

    constructor(props) {

        super(props);
        this.state = {
            users: []
        }
    }

    deleteRow(id){

    }

    render() {

        let users = this.props.users;

        return (
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>PESEL</td>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.pesel}</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}