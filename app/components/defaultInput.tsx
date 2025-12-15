'use client'
import { useController, UseControllerProps, FieldValues } from "react-hook-form";

type Props<TFieldValues extends FieldValues> = UseControllerProps<TFieldValues> & {
    placeHolder: string,
    inputType?: string
}

const DefaultInput = <TFieldValues extends FieldValues>({ placeHolder, inputType, ...controllerProps }: Props<TFieldValues>) => {

    const { field, fieldState } = useController<TFieldValues>(controllerProps);

    return (
        <div>
            <label className="text-gray-200" htmlFor={field.name}>{field.name[0].toUpperCase() + field.name.slice(1)}</label>
            <input
                type={inputType}
                {...field}
                className="bg-gray-700 rounded-md p-2 outline-0 focus:outline-0 focus:ring-0 text-sm w-full"
                placeholder={placeHolder}
            />
            {fieldState.error && (
                <span className="text-red-500 text-sm">
                    {fieldState.error.message}
                </span>
            )}
        </div>
    )
}

export default DefaultInput;