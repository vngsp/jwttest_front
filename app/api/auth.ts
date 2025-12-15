import { LoginSchema, LoginSchemaObj } from "../schemas/loginSchema";
import { req } from "./api";

export const auth = async (data: LoginSchemaObj) => {
    const parsed = LoginSchema.parse(data);
    const { data: res } = await req.post('/auth', parsed);
    return res;
};
