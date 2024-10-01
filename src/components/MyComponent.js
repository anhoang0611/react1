// class component
// function component
import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
    state = {
        listUsers: [
            { id: 1, name: "Rain", age: "30" },
            { id: 2, name: "An", age: "16" },
            { id: 3, name: "Minh", age: "45" },
        ]
    }

    // JSX
    render() {
        //DRY : dont repeat yourself
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    user={this.state.listUsers}
                />
                <hr />

            </div>
        );
    }
}

export default MyComponent;