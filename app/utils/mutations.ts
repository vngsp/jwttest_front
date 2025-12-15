import { useMutation, useQueryClient } from "@tanstack/react-query"
import { AuthSchemaObj } from "../schemas/authSchema"
import { auth } from "@/app/api/auth"
import { useRouter } from "next/navigation";
import { createUser, deleteUser, updateUser } from "../api/users";
import { LoginSchemaObj } from "../schemas/loginSchema";
import { DeleteUserSchemaObj } from "../schemas/deleteUserSchema";
import { UpdateUserSchemaObj } from "../schemas/updateUserSchema";

export const useLogin = () => {
    const queryClient = useQueryClient();
    const router = useRouter();

    return useMutation({
        mutationFn: (data: LoginSchemaObj) => auth(data),
        onSuccess: (res) => {
            localStorage.setItem("authToken", res.authToken); 
            localStorage.setItem("refreshToken", res.refreshToken);
            queryClient.invalidateQueries({ queryKey: ['users'] });
            router.push('/usersOpr');
        },
        onError: (error) => {
            console.error("Falha no login:", error);
        }
    })
}

export const useCreateUser = () => {
    return useMutation({
        mutationFn: ({ name, email, password }: AuthSchemaObj) => createUser(name, email, password),
        onSuccess: () => {
            window.location.reload();
        },
        onError: (error) => {
            console.error(error);
        }
    })
}

export const useDeleteUser = () => {
    return useMutation({
        mutationFn: ({ id }: DeleteUserSchemaObj) => deleteUser(id),
        onSuccess: () => {
            window.location.reload();
        },
        onError: (error) => {
            console.error(error);
        }
    })
}

export const useUpdateUser = () => {
    return useMutation({
        mutationFn: ({ email, name }: UpdateUserSchemaObj) => updateUser(email, name),
        onSuccess: () => {
            window.location.reload();
        },
        onError: (error) => {
            console.error(error);
        }
    })
}