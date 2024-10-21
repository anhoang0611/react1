import ModalCreateUsers from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from "react-icons/fc";
import { useState } from "react";

const ManageUsers = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);



    return (
        <div className="manage-user-container">
            <div className="title" >
                ManageUsers
            </div>


            <div className="users-content">
                <div className="btn-add-new">
                    <button className="btn btn-primary"
                        onClick={() => setShowModalCreateUser(true)}>
                        <FcPlus /> Add users
                    </button>
                </div>

                <div className="table-users-container">
                    table Users
                </div>
                <ModalCreateUsers
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                />
            </div>


        </div>
    )

}

export default ManageUsers; 