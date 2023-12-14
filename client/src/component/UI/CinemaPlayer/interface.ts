// ~~

//	==========> Types <==========
export type StringNumber = string | number;

//	==========> Interface <==========

export interface ICinemaPlayer {
	url: string;
	isFastRewindForwardBtn?: boolean;
	options?: IOptionPlayer;
}
export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void;
	mozRequestFullscreen?: () => void;
	webkitRequestFullscreen?: () => void;
}

export interface IOptionPlayer {
	width?: StringNumber;
	height?: StringNumber;
}