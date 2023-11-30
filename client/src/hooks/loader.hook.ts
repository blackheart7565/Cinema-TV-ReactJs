import { useEffect, useState } from "react";

import { useReducer } from "./reducer.hook";

export const useGlobalLoader = () => {
	const { state } = useReducer();

	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		if (state.loader.isLoading) {
			setIsLoading(true);
		} else {
			setTimeout(() => {
				setIsLoading(false);
			}, 1000);
		}
	}, [state.loader.isLoading]);

	return {
		isLoading
	}
}