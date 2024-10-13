import CreateUserModals from "../Modals/CreateUserModals";

export default function ManagerUser() {
    return (
        <div className="manager-user-container">
            <div className="title">

            </div>
            <div className="user-content">
                <div>
                    <CreateUserModals/>
                </div>
                <div>
                    Table users
                </div>
            </div>
        </div>
    )
}