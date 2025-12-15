import CreateUserForm from "./createUserForm";
import DeleteUserForm from "./deleteUserForm";
import UpdateUserForm from "./updateUserForm";

const UserControlPanel = () => {
    return (
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <CreateUserForm />
            <DeleteUserForm />
            <UpdateUserForm />
        </div>
    )
}

export default UserControlPanel;