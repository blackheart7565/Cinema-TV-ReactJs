import { useRef } from "react";

export const useShowMore = () => {
	const refShowMore = useRef<HTMLDivElement>(null);


	return {
		refShowMore,
	}
}