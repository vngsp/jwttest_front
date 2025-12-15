'use client'
import { userSchemaObj } from "@/app/schemas/userSchema";

const UsersPanel = ({ users }: { users: userSchemaObj[] }) => {
    return (
        <ul className="mt-2 pt-2 text-nowrap">
            {users.length > 0 ? (
                users.map(user => (
                    <li key={user.id} className="p-2 border-b">{user.name} - {user.email} - {user.id}</li>
                ))
            ) : (
                <p>Nenhum usuário carregado.</p>
            )}
        </ul>
    );
}

export default UsersPanel;