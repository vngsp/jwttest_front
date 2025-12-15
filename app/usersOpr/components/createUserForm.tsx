'use client'
import DefaultBtn from "@/app/components/defaultBtn";
import DefaultInput from "@/app/components/defaultInput";
import { AuthSchema, AuthSchemaObj } from "@/app/schemas/authSchema";
import { useCreateUser } from "@/app/utils/mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateUserForm = () => {
    const createUserMutation = useCreateUser();

    const { control, handleSubmit } = useForm<AuthSchemaObj>({
        resolver: zodResolver(AuthSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const handleFormSubmitCreate = async (formData: AuthSchemaObj) => {
        createUserMutation.mutateAsync(formData, {
            onSuccess: (res) => console.log(res),
            onError: (err) => console.error(err)
        })
    }
    return (
        <form
            className="bg-gray-800 w-3xs rounded-lg shadow p-4 flex flex-col mt-24 gap-4 sm:w-[30%]"
            onSubmit={handleSubmit(handleFormSubmitCreate)}
        >
            <h1 className="text-center">Create User</h1>
            <DefaultInput
                name="name"
                placeHolder="Put the user name"
                control={control}
            />
            <DefaultInput
                name="email"
                placeHolder="Put the user email"
                control={control}
            />
            <DefaultInput
                name="password"
                placeHolder="Put the user password"
                control={control}
            />
            <DefaultBtn bgColor="bg-blue-600" label="Create" hoverColor="hover:bg-blue-500/65" />
        </form>
    )
}

export default CreateUserForm;