// class component
// function component
import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Rain", age: "30" },
            { id: 2, name: "An", age: "16" },
            { id: 3, name: "Minh", age: "45" },
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }
    // template + logic js
    // JSX
    render() {
        //DRY : dont repeat yourself
        const test = { name: 'rain', age: '44' }

        return (
            <>
                {JSON.stringify(test)}
                <div className="a">
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}

                    />
                </div>
                <div className="b" >

                </div>
            </>
        );
    }
}

export default MyComponent;