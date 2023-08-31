import { UseFormRegisterReturn, FieldError  } from 'react-hook-form'

type InputProps = {
    type: string;
    placeholder: string
    register: UseFormRegisterReturn,
	error: FieldError | undefined
}
function Input({type, placeholder, register, error}: InputProps) {

	return (
		<div className="flex flex-col items-start gap-y-2">
			<input
				className="w-full py-3 px-6 dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray"
				type={type}
				placeholder={placeholder}
				{...register}
			/>
			<small className="text-[#cc0000] text-md">{error?.message}</small>
			
		</div>
	);
}

export default Input;
