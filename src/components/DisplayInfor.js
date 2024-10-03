import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

//stateless vs statefull
// class DisplayInfor extends React.Component {

//     render() {
//         console.log("call me render")
//         // destructuring array/obj
//         const { listUsers } = this.props;
//         console.log(listUsers)
//         // pros => viết tắt của propeties
//         return (
//             <div className='display-infor-container'>


//                 {true &&
//                     <>
//                         {listUsers.map((user) => {
//                             // console.log(user)

//                             return (
//                                 <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
//                                     <div>
//                                         <div>My name is {user.name} </div>
//                                         <div>My age is {user.age} </div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>

//                                 </div>

//                             )
//                         })}

//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props; //obj

    return (
        <div className='display-infor-container'>


            {true &&
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
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                </div>

                            </div>

                        )
                    })}

                </>
            }
        </div>
    )
}

export default DisplayInfor;