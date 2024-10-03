import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

//stateless vs statefull

const DisplayInfor = (props) => {
    const { listUsers } = props; //obj

    const [isShowHideListUser, setShowHideListUser] = useState(true);// cu phap react hook



    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowHideListUser)
    }

    console.log("call me render")

    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all user')
            }
            console.log("call me useEffect")
        }, [listUsers]);


    return (
        <div className='display-infor-container'>
            <div>
                <span onClick={() => handleShowHideListUser()}>

                    {isShowHideListUser === true ? "Hide List User" : "Show List User"}
                </span>
            </div>

            {isShowHideListUser &&
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