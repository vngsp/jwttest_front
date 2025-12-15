'use client'
import DefaultBtn from "@/app/components/defaultBtn";
import DefaultInput from "@/app/components/defaultInput";
import { UpdateUserSchema, UpdateUserSchemaObj } from "@/app/schemas/updateUserSchema";
import { useUpdateUser } from "@/app/utils/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const UpdateUserForm = () => {
    const updateUserMutation = useUpdateUser();

    const { control, handleSubmit } = useForm<UpdateUserSchemaObj>({
        resolver: zodResolver(UpdateUserSchema),
        defaultValues: {
            email: '',
            name: ''
        }
    });

    const handleFormSubmitDelete = async (formData: UpdateUserSchemaObj) => {
        updateUserMutation.mutateAsync(formData, {
            onSuccess: (res) => console.log(res),
            onError: (error) => console.error(error)
        })
    }
    return (
        <form
            className="bg-gray-800 w-3xs rounded-lg shadow p-4 flex flex-col mt-24 gap-4 sm:w-[30%]"
            onSubmit={handleSubmit(handleFormSubmitDelete)}
        >
            <h1 className="text-center">Update User</h1>
            <DefaultInput
                name="email"
                placeHolder="Put the user email"
                control={control}
            />
            <DefaultInput
                name="name"
                placeHolder="Put the user name"
                control={control}
            />
            <DefaultBtn bgColor="bg-yellow-600" label="Update" hoverColor="hover:bg-yellow-500/65" />
        </form>
    )
}

export default UpdateUserForm;