import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }
    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        // destructuring array/obj
        const { listUsers } = this.props;
        console.log(listUsers)
        // pros => viết tắt của propeties
        return (
            <div className='display-infor-container'>
                {/* <img src={logo} /> */}
                <div >
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list users:" : "Show list users:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user) => {
                            // console.log(user)

                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                    <div>
                                        <div>My name is {user.name} </div>
                                        <div>My age is {user.age} </div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>

                                </div>

                            )
                        })}

                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;