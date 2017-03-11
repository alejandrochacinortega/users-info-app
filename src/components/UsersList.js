import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

class UsersList extends React.Component {

    componentDidMount() {

    }

    renderUser(user, index) {
        return (
            <h4 key={index}>{user.get('name')}</h4>
        )
    }
    
    render() {
        console.log(' this.props ', this.props.users);
        return (
            <div>
                <button onClick={this.props.fetchUsers}>Download data</button>
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);