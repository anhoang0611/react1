import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Rain", age: "30" },
//             { id: 2, name: "An", age: "16" },
//             { id: 3, name: "Minh", age: "45" },
//         ]
//     }

//     handleAddNewUser = (userObj) => {
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone
//         })
//     }
//     // template + logic js
//     // JSX
//     render() {
//         //DRY : dont repeat yourself


//         return (
//             <>

//                 <div className="a">
//                     <AddUserInfor
//                         handleAddNewUser={this.handleAddNewUser}
//                     />
//                     <br />
//                     <DisplayInfor
//                         listUsers={this.state.listUsers}
//                         handleDeleteUser={this.handleDeleteUser}

//                     />
//                 </div>
//                 <div className="b" >

//                 </div>
//             </>
//         );
//     }
// }


const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: "Rain", age: "30" },
            { id: 2, name: "An", age: "16" },
            { id: 3, name: "Minh", age: "45" },
        ]
    )



    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }


    return (
        <>
            <br />
            <div className="a">
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}

                />
            </div>
            <div className="b" >

            </div>
        </>
    );
}
export default MyComponent;