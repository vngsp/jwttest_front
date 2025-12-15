import { AuthSchemaObj } from "../schemas/authSchema";
import { DeleteUserSchemaObj } from "../schemas/deleteUserSchema";
import { UpdateUserSchemaObj } from "../schemas/updateUserSchema";
import { userSchemaObj } from "../schemas/userSchema";
import { req } from "./api"

export const getAllUsers = async (page: number): Promise<userSchemaObj[]> => {
    const { data } = await req.get<userSchemaObj[]>(`/protected?page=${page}`);
    return data;
}

export const createUser = async (name: string, email: string, password: string): Promise<AuthSchemaObj> => {
    const { data } = await req.post<AuthSchemaObj>('/users', { name, email, password });
    return data;
}

export const deleteUser = async (id: string): Promise<DeleteUserSchemaObj> => {
    const { data } = await req.delete<DeleteUserSchemaObj>(`/user/${id}`);
    return data;
}

export const updateUser = async (email: string, name: string): Promise<UpdateUserSchemaObj> => {
    const { data } = await req.put<UpdateUserSchemaObj>('/users', { email, name });
    return data;
}