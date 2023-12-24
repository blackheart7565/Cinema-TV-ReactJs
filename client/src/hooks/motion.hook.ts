//~~

import { propsMotionOption } from "../motion/details.motion";

interface ILoadingMotionParams {
	isLoading?: boolean;
	isViewport?: boolean;
}

/**
 *  Если isLoading равняеться true значит идёт загрузка, 
 * и опции не возвращаються, иначе если false то позвращаються опции motion 
 * 
 * @param isLoading default value equals false
 */
export const useLoadingMotion = ({
	isLoading,
	isViewport,
}: ILoadingMotionParams) => {
	if (isLoading === false) {
		return propsMotionOption({ isViewport: isViewport ?? false });
	}
	return propsMotionOption({ isViewport: isViewport ?? false });
};