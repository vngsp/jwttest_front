'use client'
import DefaultBtn from "@/app/components/defaultBtn";
import DefaultInput from "@/app/components/defaultInput";
import { DeleteUserSchema, DeleteUserSchemaObj } from "@/app/schemas/deleteUserSchema";
import { useDeleteUser } from "@/app/utils/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const DeleteUserForm = () => {
    const deleUserMutation = useDeleteUser();

    const { control, handleSubmit } = useForm<DeleteUserSchemaObj>({
        resolver: zodResolver(DeleteUserSchema),
        defaultValues: {
            id: ''
        }
    });

    const handleFormSubmitDelete = async (formData: DeleteUserSchemaObj) => {
        deleUserMutation.mutateAsync(formData, {
            onSuccess: (res) => console.log(res),
            onError: (error) => console.error(error)
        })
    }
    return (
        <form
            className="bg-gray-800 w-3xs rounded-lg shadow p-4 flex flex-col mt-24 gap-4 sm:w-[30%]"
            onSubmit={handleSubmit(handleFormSubmitDelete)}
        >
            <h1 className="text-center">Delete User</h1>
            <DefaultInput
                name="id"
                placeHolder="Put the user ID"
                control={control}
                inputType="number"
            />
            <DefaultBtn bgColor="bg-red-600" label="Delete" hoverColor="hover:bg-red-500/65" />
        </form>
    )
}

export default DeleteUserForm;