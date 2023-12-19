import { FC } from 'react';
import { ICinemaIcon } from "../interface";

const PausedIcon: FC<ICinemaIcon> = (
	{
		className
	}) => {
	return (
		<>
			<svg className={className} xmlns="http://www.w3.org/2000/svg"
				height="24"
				viewBox="0 -960 960 960" width="24">
				<path
					d="M560-200v-560h160v560H560Zm-320 0v-560h160v560H240Z" />
			</svg>
		</>
	);
};

export { PausedIcon };
