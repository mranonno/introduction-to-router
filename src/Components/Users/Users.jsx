import { useLoaderData } from "react-router-dom";
import User from "./User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h3>Hi iam from users</h3>
            {
                users.map((user)=><User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;