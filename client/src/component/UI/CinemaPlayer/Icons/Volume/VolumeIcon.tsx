import { FC } from 'react';
import { VolumeDownIcon } from "./VolumeDownIcon";
import { VolumeOffIcon } from "./VolumeOffIcon";
import { VolumeUpIcon } from "./VolumeUpIcon";

interface IVolumeIconProps {
	valueVolume: number
}

export const VolumeIcon: FC<IVolumeIconProps> = (
	{
		valueVolume
	}) => {
	return (
		<>
			{

				valueVolume === 0
					? <VolumeOffIcon className={'cinema-player__volume-off-ico ico'} />
					: valueVolume < 55
						? <VolumeDownIcon className={'cinema-player__volume-down-ico ico'} />
						: <VolumeUpIcon className={'cinema-player__volume-up-ico ico'} />
			}
		</>
	);
};