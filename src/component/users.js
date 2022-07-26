import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../store/actions/usersAction'
import './user.css'

class users extends Component {
    constructor(props) {
        super(props);
        this.state =
            { deleteButton: true };
        this.handleButton = this.handleButton.bind(this)
    }

    componentDidMount() {
        this.props.getUsers()
    }

    handleButton(id) {

        document.getElementById(id).style.display = "none";
    }
    render() {
        const { users } = this.props.users
        console.log(this.props.users)
        return (
            <>
                <div className='container'>
                    <div className="d-flex justify-content-center">
                        <div className='p-2'>
                            {users.map(u =>
                                <span key={u.id} id={u.id} style={{ margin: '3rem' }} >
                                    <div class="panel panel-red userlist">
                                        
                                        <div class="panel-body text-center">
                                            <div class="userprofile">
                                                <div class="userpic"> <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" class="userpicimg" /> </div>
                                                <h5 style={{ textAlign: 'center', color: 'black' , margin:'7px' }}> Name : {u.name}</h5>
                                                <h6>{u.occupation}</h6>
                                                <h6 style={{ color: 'black' }}>Email : {u.email}</h6>
                                            </div>
                                            
                                            <strong style={{ padding: '10px' }}>OBJECTIVE</strong><br />
                                            <p style={{ padding: '12px', color: 'black', textAlign: 'justify' , width:'320px' , height:'250px' }}>{u.bio}<br />
                                                
                                                <br />
                                            </p>
                                        </div>
                                        <div class="panel-footer">
                                            <button onClick={() => this.handleButton(u.id)} className="btn btn-danger" style={{marginLeft:'100px'}}>Delete</button>

                                        </div>
                                    </div>
                                </span>
                            )}
                        </div></div>
                </div>
            </>
        )
    }
}
const mapStateToProps = (state) => ({ users: state.users })

export default connect(mapStateToProps, { getUsers })(users)