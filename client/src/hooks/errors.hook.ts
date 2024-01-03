import { useEffect } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

export const useValidErrorKeys = (
	errors: FieldErrors<FieldValues>
) => {
	const errorsKeyLength = Object.keys(errors).length

	useEffect(() => {
		const errorKey = Object.keys(errors);
		for (const key of errorKey) {
			const mess = errors[key]?.message as string;
			toast.error(mess);
		}
	}, [errors, errorsKeyLength]);
}