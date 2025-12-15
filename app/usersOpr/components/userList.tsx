'use client'
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { redirect } from "next/navigation";
import DefaultBtn from "@/app/components/defaultBtn";
import { getAllUsers } from "@/app/api/users";
import UsersPanel from "./usersPanel";

const UserList = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['users', page],
        queryFn: () => getAllUsers(page),
        enabled: true,
    });

    return (
        <div className="p-4 w-xs text-sm flex flex-col sm:w-[740px] sm:mt-4 lg:w-[800px] xl:text-lg">
            <div>
                <h1 className="text-xl font-bold mb-4 xl:text-2xl">All Users List</h1>
                <div className="flex justify-between">
                    <button
                        onClick={() => setPage(1)}
                        disabled={isLoading}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500/65 disabled:bg-gray-400"
                    >
                        {isLoading ? "Reloading" : "Restart List"}
                    </button>
                </div>

            </div>

            {isError && <p className="text-red-500 mt-2">Erro ao carregar (Verifique o login/token)</p>}

            <UsersPanel users={data || []} />
            <div className="flex justify-between mt-8">
                <DefaultBtn label="Previous" bgColor="bg-slate-800" hoverColor="hover:bg-slate-500/65" onClick={() => setPage(page - 1)} />
                <DefaultBtn label="Next" bgColor="bg-slate-800" hoverColor="hover:bg-slate-500/65" onClick={() => setPage(page + 1)} />
            </div>
        </div>
    )
}

export default UserList