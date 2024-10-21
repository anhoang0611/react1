import ModalCreateUsers from "./ModalCreateUser";
import './ManageUser.scss';
const ManageUsers = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title" >
                ManageUsers
            </div>


            <div className="users-content">
                <div>
                    <button>Add users </button>
                </div>

                <div>
                    table Users
                </div>
                <ModalCreateUsers />
            </div>


        </div>
    )

}

export default ManageUsers; 