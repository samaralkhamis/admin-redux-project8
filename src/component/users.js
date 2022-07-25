import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../store/actions/usersAction'

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)
        
        return (
            <div>
                {users.map(u => 
                     <React.Fragment key={u.id}>
                         <h6 >{u.name}</h6> 
                         <h6 >{u.username}</h6> 
                         <h6 >{u.email}</h6> 
                         <h6 >{u.website}</h6> 
                         <hr></hr>
                     </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)