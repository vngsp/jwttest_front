import UserList from "./components/userList";
import UserControlPanel from "./components/userControlPanel";

const Page = () => {
    return (
        <div className="flex flex-col items-center max-sm:gap-4">
            <UserControlPanel />
            <UserList />
        </div>
    )
}

export default Page;