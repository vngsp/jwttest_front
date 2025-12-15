'use client'
import { useForm } from "react-hook-form";
import DefaultInput from "../components/defaultInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../utils/mutations";
import LogoForm from "./components/logoForm";
import DefaultBtn from "../components/defaultBtn";
import { LoginSchema, LoginSchemaObj } from "../schemas/loginSchema";

const Page = () => {
    const loginMutation = useLogin();

    const { control, handleSubmit } = useForm<LoginSchemaObj>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleFormSubmit = async (formData: LoginSchemaObj) => {
        loginMutation.mutateAsync(formData, {
            onSuccess: (res) => console.log(res),
            onError: (err) => console.error(err)
        });
    }

    return (
        <div className="flex justify-center">
            <form
                className="bg-gray-800 w-3xs rounded-lg shadow p-4 flex flex-col mt-24 gap-4"
                onSubmit={handleSubmit(handleFormSubmit)}
            >
                <LogoForm />
                <DefaultInput
                    name="email"
                    control={control}
                    placeHolder="Put your email"
                />
                <DefaultInput
                    name="password"
                    control={control}
                    placeHolder="Put your Password"
                />
                <DefaultBtn bgColor="bg-blue-600" label="Login" />
            </form>
        </div>
    )
}

export default Page;