import ModalCreateUsers from "./ModalCreateUser";

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
                    table Users <ModalCreateUsers />
                </div>

            </div>
        </div>
    )

}

export default ManageUsers; 