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
        // console.log("Check: ", userObj)
        // let listUsersNew = this.state.listUsers;
        // listUsersNew.push(userObj);
        // this.setState({
        //     listUsers: listUsersNew
        // }) bad code vi ko dc tuong tac truc tiep voi bien cua react
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    // JSX
    render() {
        //DRY : dont repeat yourself
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div>
        );
    }
}

export default MyComponent;