import React from "react";

class DisplayInfor extends React.Component {
    handleShowHide = () => {
        alert('me')
    }

    render() {
        // destructuring array/obj
        const { listUsers } = this.props;
        console.log(listUsers)
        // pros => viết tắt của propeties
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        Hide list users:
                    </span>
                </div>
                <div>
                    {listUsers.map((user) => {
                        return (
                            <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                <div>My name is {user.name} </div>
                                <div>My age is {user.age} </div>
                                <hr />
                            </div>

                        )

                    })}

                </div>
            </div>
        )
    }
}

export default DisplayInfor;