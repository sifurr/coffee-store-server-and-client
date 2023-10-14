import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = _id =>{

        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                const remainingUsers = users.filter(user => user._id !== _id);
                setUsers(remainingUsers);
                console.log("User deleted successfully");
            }
        })
    }
    return (
        <div>
            <h2>User: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged in</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user =>
                                <tr key={user._id}>
                                    <th>3</th>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td></td>
                                    <td>
                                        <button onClick={()=>handleDelete(user._id)} className="btn">X</button>
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;