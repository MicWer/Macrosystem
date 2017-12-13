import React, {Component} from 'react';

export default class Users extends Component {

    constructor(props) {

        super(props);
        this.state = {
            selectedUsers: []
        }
    }

    rowDelete() {

        let userList = document.getElementById(this.props.id).lastChild;
        console.log(userList);
    }

    render() {

        let users = this.props.users;

        return (
            <table id={this.props.id} className="striped responsive-table">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Surname</td>
                    <td>PESEL</td>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return <tr key={100 + user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                        <td>{user.pesel}</td>
                        <td>
                            <a
                                id={user.id}
                               className="btn-floating btn waves-effect waves-light red"
                               onClick={this.rowDelete.bind(this)}
                            >
                                <i className="material-icons">-</i>
                            </a>
                            <input type="checkbox" value={user.id} onClick={this.rowDelete.bind(this)}/>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
}