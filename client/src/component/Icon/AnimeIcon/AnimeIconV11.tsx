
import React from 'react';

interface IAnimeIconV11 {
	size?: string | number;
}

const AnimeIconV11: React.FC<IAnimeIconV11> = ({
	size,
}) => {
	return (
		<>
			<svg
				fill="currentColor"
				stroke="currentColor"
				stroke-width="0"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				width={size || "20px"}
				height={size || "20px"}
				viewBox="0 0 595.28 841.89"
				xmlSpace="preserve"
			>
				<path
					d="M518.36,305.52c1.48-0.98,2.63-1.73,3.6-2.37c-4.6-1.26-8.95-2.45-14.09-3.86c4.27-2.03,7.41-3.51,10.54-5
	c0.02-0.45,0.03-0.9,0.05-1.36c-7.35,0.54-9.95-4.71-13.24-9.96c4.36-2.44,8.56-4.8,13.36-7.49c-2.13-0.24-3.4-0.38-5.92-0.67
	c7.96-9.72,15.41-18.83,22.79-27.84c-6.79-0.54-13.61-1.08-20.74-1.64c2-4.62,5.1-3.85,7.9-2.92c3.7,1.23,6.94,0.33,10.28-1.16
	c2.23-0.99,4.6-1.81,6.99-2.3c5.69-1.17,11.45-2.02,17.15-3.14c3.71-0.73,7.37-1.72,11.06-2.59c-2.95-2.2-5.93-3.61-8.95-4.94
	c-4.24-1.86-8.5-3.66-13.49-5.81c2.49-2.31,4.12-3.81,5.6-5.18c-5.54-4.19-11.06-8.37-16.56-12.53c1.22-2.17,2.18-3.87,3.28-5.82
	c-2.21,0-4.07-0.38-5.71,0.07c-6.62,1.79-10.86-0.86-14.62-6.24c-3.16-4.53-7.36-8.34-11.1-12.47c-0.29,0.23-0.59,0.45-0.88,0.68
	c2.72,4.89,5.44,9.77,8.09,14.53c-4.36-1.55-8.98-3.2-13.97-4.98c1.39-2.44,2.71-4.73,3.91-6.82c-7.5-0.33-14.81-0.7-22.12-0.95
	c-4.51-0.15-9.03-0.29-13.52-0.08c-3.74,0.17-5.06-1.04-3.29-4.41c1.63-3.1,3.96-5.89,6.3-8.52c3.85-4.32,7.97-8.4,12.63-13.27
	c-10.47,0.54-17.47,6.84-25.73,10.69c0.37-9.63,6.18-16.2,11.32-23.23c-1.3-0.32-2.37-0.58-3.46-0.84c0.31-0.72,0.52-1.21,0.62-1.46
	c-1.43-0.07-2.79-0.15-5.03-0.26c7.92-10.69,15.3-20.65,22.86-30.86c-2.41-0.59-3.97-0.97-6.01-1.46c1-5.14,1.95-10.05,2.9-14.95
	c-1.37,0.65-2.3,1.73-3.19,2.84c-2.32,2.91-5.02,4.2-8.7,2.44c-1.66-0.79-2.47,0.06-3.03,1.79c-1.4,4.4-3.15,8.68-4.57,13.08
	c-0.82,2.54-2.1,3.61-4.88,3.05c-4.31-0.86-8.66-1.56-13.02-2.05c-2.64-0.3-4.35-1.03-3.86-3.25c-1.89-1.45-3.96-2.3-4.55-3.76
	c-0.35-0.86,1.3-3.23,2.6-3.97c8.3-4.75,12.2-12.7,15.69-20.94c1.32-3.12,1.31-7.04,6.5-7.72c-4.6-4.05,0.37-7.5-0.18-11.39
	c-2.42,0.58-4.55,0.89-6.52,1.64c-0.82,0.31-1.4,1.48-1.91,2.36c-0.82,1.45-1.23,3.22-2.29,4.43c-2.51,2.86-5.33,5.44-7.97,8.19
	c-2.22,2.32-4.22,4.88-6.58,7.04c-2.54,2.32-3.92,1.9-5.43-1.21c-1.84-3.77-1.55-7.59-0.15-11.4c0.78-2.13,1.61-4.23,2.5-6.57
	c-4.34,0.83-8.16,1.56-11.39,2.18c-0.1,1.88,0.34,3.87-0.36,5.31c-3.63,7.48-9.22,13.45-15.45,18.85c-0.09,0.08-0.41-0.09-0.89-0.22
	c0.76-3.03,1.53-6.05,2.51-9.96c-9.02,8.23-17.01,16.1-21.83,26.61c-0.35,0.75-0.55,1.65-1.1,2.21c-0.58,0.59-1.73,1.38-2.21,1.16
	c-0.8-0.37-1.87-1.61-1.73-2.23c0.37-1.65,1.2-3.25,2.09-4.73c1.58-2.63,3.34-5.14,5.02-7.71c-0.27-0.27-0.53-0.54-0.8-0.81
	c-3.59,0.92-7.18,1.84-11.52,2.94c3.24-10.85,5.17-21.51,10.99-31.25c-0.79,0.31-1.33,0.45-1.81,0.71
	c-10.62,5.61-21.49,10.57-33.25,13.39c-1.43,0.34-2.82,1.29-3.97,2.27c-11.41,9.73-22.76,19.51-34.11,29.3
	c-0.89,0.77-1.66,1.71-2.4,2.63c-3.19,3.98-6.36,7.98-9.6,12.06c-5.54-3.98-10.93-7.86-16.33-11.73c-7.35-5.27-7.66-6.14-4.88-14.85
	c0.47-1.46,1.12-2.87,1.79-4.25c2-4.09,4.06-8.16,6.1-12.23c-2.82,1.92-5.05,4.29-7.32,6.62c-2.84,2.91-4.72,6.94-9.29,7.9
	c-0.55,0.12-1.01,1.24-1.29,1.99c-3.24,8.39-6.58,16.75-9.59,25.22c-1.17,3.29-2.99,4.01-6.19,3.4c-6.53-1.23-13.1-2.29-19.69-3.22
	c-4.02-0.57-8.09-0.75-12.14-1.11c-0.12,0.32-0.24,0.63-0.36,0.95c1.98,1.63,3.96,3.26,5.94,4.9c-0.2,0.27-0.4,0.54-0.6,0.81
	c-3.29-0.84-6.58-1.67-9.87-2.51c-5.16-1.31-10.29-3.55-15.5-3.73c-10.57-0.37-21.19,0.14-31.77,0.77
	c-5.78,0.35-11.59,1.33-17.23,2.68c-4.9,1.17-8.57,4.47-11.67,8.93c2.07,0.21,3.44,0.34,5.06,0.5c-0.86,2.74-1.7,5.06-2.31,7.43
	c-0.61,2.39-0.99,4.84-1.34,6.56c6.63-3.97,13.05-8.16,19.78-11.75c7.85-4.19,15.81-4.58,23.44,1.54c0.77-3.06,2.21-4.74,5.34-3.7
	c2.48,0.82,3.68,2.34,3.13,5.24c-3.44,0.79-7.98-2.25-10.36,3.77c2.77,1.16,5.63,2.8,8.71,3.55c8.53,2.07,15.64,6.77,22.61,11.7
	c3.64,2.58,3,5.71-1.1,7.57c-2.38,1.07-4.9,1.92-7.08,3.31c-3.89,2.49-8.09,2.97-12.31,1.86c-3.13-0.82-6.02-2.55-8.35-3.58
	c-1.4,0.98-2.5,2.23-3.85,2.63c-5.45,1.63-11,2.96-16.48,4.49c-1.5,0.42-2.91,1.17-4.77,1.94c1.71,1.85,2.99,3.24,4.33,4.7
	c-0.66,0.48-1.04,0.93-1.21,0.86c-14.25-6-26.72-14.95-39.45-23.68c0.32,1.14,0.81,2.16,1.38,3.12c4.12,6.93,8.34,13.8,12.32,20.81
	c0.61,1.07,0.14,2.75,0.17,4.14c-1.48-0.1-3.24,0.27-4.37-0.4c-2.34-1.39-4.04-1.2-5.39,1.06c-1.66,2.78-4.32,3.51-7.22,3.82
	c-1.05,0.11-2.1,0.17-3.8,0.29c6.02,3.22,9.65,8.18,10.8,14.19c0.6,3.11-0.32,5.18-3.58,6.31c-16.2,5.61-30.43,14.91-44.65,24.19
	c-1.88,1.23-3.46,2.92-5.17,4.39c18.29-10.63,36.73-4.54,55.15-1.35c-4.56,2.94-9.22,4.89-14.73,5.17
	c-17.21,0.88-34.56-1.14-51.64,2.55c-7.27,1.57-14.61,2.83-21.91,4.23c5.78,1.98,11.46,3.11,17.12,4.35
	c10.32,2.26,20.64,4.49,29.55,10.71c4.28,2.99,8.67,5.83,13.14,8.55c1.3,0.79,3,1.2,4.54,1.28c3.92,0.22,7.86,0.02,11.78,0.23
	c5.78,0.31,7.63,3.46,5.1,8.54c-1.8,3.62-3.56,7.26-5.58,10.75c-6.44,11.19-11.11,22.82-9.99,36.13c0.15,1.78-0.19,4.12-1.26,5.39
	c-3.43,4.07-6.89,8.34-11.11,11.5c-15.77,11.79-30.73,24.49-44.34,38.71c-4.69,4.9-8.85,10.31-13.25,15.49
	c0.22,0.23,0.45,0.46,0.67,0.68c7.22-4.4,14.44-8.81,21.66-13.21c-10.65,18.17-20.81,54.8-17.49,65.1
	c3.51-6.83,6.86-13.88,10.69-20.66c4.16-7.38,11.91-15.66,15.25-17.02c-4.61,18.24-2.3,41.34,5,49.66c0-0.87,0-1.68,0-2.49
	c0.04-8.42-0.76-16.94,0.31-25.22c1.44-11.12,5.12-21.68,13.16-30.16c10.58-11.15,23.08-19.77,36.23-27.53
	c0.95-0.56,2.06-0.83,3.21-1.28c0,2.19,0.19,3.99-0.03,5.74c-1.43,11.58-0.07,23.03,1.11,34.53c0.79,7.68,0.87,15.58-3.27,22.56
	c-6.32,10.65-9.67,22.39-13.14,34.11c-4.21,14.2-8.78,28.3-12.78,42.56c-1.57,5.59-3.03,11.42-1.86,16.19
	c1.37-3.27,2.71-7.54,4.86-11.35c6.3-11.17,12.75-22.26,19.46-33.19c7.49-12.2,15.74-23.83,27.48-32.47
	c2.89-2.13,5.74-4.3,9.42-7.06c0,2.65,0.08,4.28-0.01,5.91c-0.63,11.73-4.05,22.82-7.47,33.98c-6.86,22.36-13.27,44.86-19.86,67.31
	c8.06-10.35,14.84-21.62,24.02-31.07c4.97,4.6,7.68,9.71,8.71,15.8c0.49,2.91,1.22,5.81,2.12,8.63c2.37,7.46,7.48,13,13.52,14.82
	c-3.05-6.97-6.06-13.85-9.18-20.99c4.81,2.77,9.19,5.28,13.57,7.8c0.28-0.36,0.56-0.72,0.83-1.08c-0.72-1.45-1.34-2.97-2.18-4.35
	c-4.25-7-8.2-14.23-12.95-20.87c-5.31-7.43-4.73-13.8,0.67-20.93c5.75-7.6,10.11-16.09,11.86-25.66c0.48-2.63,1.02-5.24,1.53-7.86
	c0.3-0.07,0.6-0.13,0.9-0.2c0.51,0.89,1.3,1.74,1.46,2.69c0.38,2.22,0.61,4.49,0.64,6.74c0.05,4.71,1.39,8.5,5.01,12
	c2.85,2.75,5.34,6.68,6.22,10.49c1.52,6.55,1.53,13.43,2.41,20.15c1.33,10.13,2.82,20.24,4.35,30.34c0.18,1.2,0.75,2.69,1.66,3.37
	c4.87,3.69,10.52,5.71,16.43,7.09c-0.34-0.56-0.79-0.91-1.27-1.2c-8.26-4.93-13.29-11.72-12.62-21.82
	c0.28-4.15,0.34-8.33,0.81-12.46c0.15-1.31,1.14-3.38,2.03-3.54c1.47-0.26,3.5,0.34,4.69,1.31c2.28,1.86,4.05,4.34,6.19,6.39
	c14.6,13.98,32.1,23.04,50.97,29.68c3.43,1.21,7.05,1.86,10.58,2.77c-8.81-6.24-17.1-17.32-17.44-24.16
	c4.52,2.36,9.05,4.63,13.48,7.06c4.45,2.44,8.52,2,12.64-0.88c5.54-3.88,11.22-7.56,16.88-11.28c3.23-2.13,6.52-4.18,9.76-6.24
	c6.88,5.07,8.5,12.74,11.87,19.51c-8.18,3.15-16.13,5.92-23.84,9.24c-12.29,5.3-24.54,10.74-36.59,16.57
	c-6.93,3.35-8.55,9.75-4.81,16.53c1.48,2.68,3.44,5.12,5.29,7.59c3.7,4.95,7.57,9.78,11.21,14.77c3.35,4.6,3,7.22-1.2,11.12
	c-1.31,1.21-2.68,2.36-4.11,3.43c-8.2,6.19-15.73,13.46-26.19,16.03c-2.15,0.53-4.17,1.7-6.16,2.75c-5.6,2.96-7.8,7.84-6.16,14.01
	c0.66,2.5,1.61,4.97,2.78,7.27c1.97,3.85,1.5,7.12-1.14,10.53c-7.42,9.59-14.53,19.43-22.04,28.96c-3.35,4.25-7.18,8.16-11.12,11.88
	c-3.04,2.86-5.16,6.05-6.49,10c-2.51,7.48-4.1,15.02-2.94,23.13c47.34,0,94.44,0,141.85,0c0-1.62-0.02-2.91,0-4.19
	c0.37-20.48,0.55-40.97,1.19-61.44c0.33-10.55,6.44-19.06,10.85-28.26c1.25,1.15,2.11,1.93,3.08,2.82
	c-1.97,2.96-0.38,5.36,1.33,7.62c1.05,1.38,2.34,3.47,3.64,3.56c1.83,0.14,4.46-0.77,5.51-2.16c1.7-2.27,3.34-5.33,3.21-7.98
	c-0.11-2.35-2.59-4.64-4.17-6.84c-0.21-0.3-1.33,0.04-2.03,0.12c-2.73,0.32-5.46,0.66-8.88,1.07c9.11-10.86,17.73-21.13,26.35-31.4
	c0.47,0.19,0.93,0.38,1.4,0.57c-0.15,1.87-0.3,3.73-0.45,5.6c0.27,0.15,0.53,0.3,0.8,0.45c1.05-1.25,2-2.62,3.19-3.72
	c1.05-0.98,2.38-1.66,3.59-2.47c0.15,0.27,0.29,0.53,0.44,0.8c-1.94,3.65-3.88,7.29-5.82,10.94c6.17,0.47,6.66-4.29,8.89-8.98
	c0.79,2.23,1.65,3.49,1.59,4.7c-0.21,4.12,1.84,5.79,5.68,4.34c2.25-0.85,4.52-1.64,6.7-2.42c-0.28-2.41-0.57-4.85-0.85-7.22
	c4.24-2.27,4.43-2.23,7.2,0.87c0.38,0.42,1.04,1.08,1.38,0.97c3.41-1.05,4.61,1.99,6.75,3.37c1.38,0.89,3.26,1.59,4.84,1.46
	c2.31-0.19,3.61,0.64,4.62,2.46c0.8,1.45,1.63,4.1,2.46,4.1c3.38,0.01,3.39,2.87,4.68,4.59c2.17,2.89,4.27,5.84,6.25,8.57
	c0.88-1.73,1.47-2.87,2.06-4.02c0.69,1.06,1.4,2.1,2.07,3.17c1.27,2.05,2.24,4.38,3.85,6.11c1.73,1.85,4.69,2.73,5.99,4.76
	c2.57,4.01,4.25,8.56,6.54,12.77c0.61,1.13,2.07,1.8,3.15,2.68c-0.05-1.37,0.19-2.83-0.2-4.1c-0.79-2.59-3.12-5.34-2.65-7.56
	c1.05-4.96-1.16-8.93-3.75-11.84c-2.53-2.85-2.69-5.35-1.96-8.23c0.77-3.01,0.07-5.29-1.9-7.44c-0.56-0.61-1.43-1.31-1.44-1.98
	c-0.18-6.99-4.21-12.22-7.64-17.83c-1.86-3.03-2.64-6.74-3.79-10.17c-0.3-0.9-0.18-1.94-0.25-2.91c0.98,0.17,2.05,0.15,2.91,0.55
	c5.26,2.46,9.77,5.89,13.03,10.77c5.44,8.14,10.49,16.37,9.44,26.88c-0.34,3.4,0.1,6.91,0.52,10.33c0.56,4.51,0.85,9.21,2.35,13.43
	c3.11,8.71,4.29,17.45,2.91,26.57c-0.12,0.77,0.2,1.62,0.4,2.42c1.03,4.13,2.02,8.26,3.15,12.36c0.4,1.44,0.75,3.44,1.79,4.05
	c3.24,1.88,3.75,4.85,2.81,7.64c-0.52,1.54-3.14,2.38-4.78,3.51c-2.94-4.08-4.13-4.24-6.49-0.94c6.23,1.06,5.22,5.88,5.34,10.13
	c0.03,0.95-0.05,1.91-0.19,2.85c-0.69,4.65-1.43,9.29-2.18,14.15c4.01,0,7.81-0.13,11.6,0.04c2.65,0.12,4.1-1.1,5.33-3.26
	c2.17-3.79,2.53-7.81,2.2-12.04c-0.13-1.63,0.01-4.18,2.25-3.17c1.62,0.73,2.63,3.33,3.38,5.29c0.63,1.63-0.14,2.92-2.28,3.12
	c-0.64,0.06-1.57,1.11-1.71,1.83c-0.48,2.54-0.67,5.13-0.99,7.89c3.48,0,6.78,0,10.28,0c-1.63-8.2-2.94-16.26-4.91-24.16
	c-1.77-7.12-3.31-14.09-0.98-21.37c0.9-2.81,1.29-5.78,2.24-8.56c0.39-1.13,1.51-2.58,2.54-2.79c1.46-0.31,3.13,0.38,4.7,0.64
	c-0.38,1.36-0.73,2.74-1.17,4.09c-0.18,0.54-0.63,0.99-0.87,1.53c-1.18,2.65,2.06,7.28,4.93,7.08c4.19-0.3,4.46,0.09,4.82,4.44
	c0.19,2.25,0.26,5.33,1.66,6.51c3.86,3.25,3.9,7.33,4.06,11.61c0.26,6.99,0.57,13.98,0.86,21.09c4.1,0,7.94,0,12.1,0
	c-1.31-4.54-2.67-8.7-3.69-12.94c-3.62-15.1-6.74-30.34-10.76-45.33c-5.5-20.53-11.36-40.94-24.4-58.43
	c-3.33-4.46-6.95-9.29-6.65-15.43c0.56-11.1-4.52-19.09-12.79-26.03c-7.02-5.89-6.68-6.32-0.46-13.07c2.13-2.31,4.16-4.51,2.72-8.12
	c-2.24-5.62-1.23-10.68,3.14-14.99c0.58-0.57,0.97-1.34,1.45-2.03c4.01-5.78,1.15-12.12-5.86-13.01c-3.66-0.46-7.3-1.18-10.98-1.35
	c-2.58-0.12-3.19-1.22-3.26-3.51c-0.12-4.28-0.32-8.56-0.76-12.82c-0.48-4.64-0.9-5.09-5.64-4.57c-4.95,0.54-9.86,1.49-14.72,2.58
	c-2.12,0.48-3.18-0.12-3.82-1.95c-1.28-3.65-2.51-7.31-3.84-11.19c5.8,0.53,11.28,1.02,17.39,1.58c-5.17-3.02-9.59-5.6-14.4-8.41
	c2.3-0.46,3.9-0.78,6.21-1.25c-2.15-1.94-3.82-3.41-5.45-4.93c-2.17-2.02-4.61-3.86-6.39-6.18c-2.16-2.81-4.12-6.1-2.09-9.81
	c1.65-3.01,3.65-5.83,5.66-8.63c0.55-0.77,2.22-1.77,2.43-1.59c2.65,2.34,6.55,1.51,9.17,4.82c7.51,9.5,15.07,19.15,25.41,25.86
	c4.14,2.69,8.85,4.52,13.3,6.74c0.02-0.16,0.03-0.32,0.05-0.48c-7.39-7.35-14.78-14.69-22.55-22.41c4.21-1.37,2.77-3.26,1.45-4.85
	c-4.36-5.25-8.71-10.47-10.02-18.23c1.56,0.76,2.9,1.15,3.89,1.97c1.45,1.21,2.52,2.9,4.03,4.01c0.59,0.44,2.68,0.09,2.8-0.29
	c0.87-2.92,2.94-2.44,5.08-2.19c1.1,0.13,2.22,0.02,3.98,0.02c-1.94-2.39-3.52-4.13-4.86-6.04c-1.49-2.12-1.38-3.61,1.69-4.24
	c3.47-0.71,6.88-1.76,10.26-2.85c3.02-0.97,5.21-2.85,5.85-6.33c-4.2,1.24-7.73,5.94-12.36,1.25c3.32-4.72,7.2-8.33,12.38-10.63
	c9.97-4.42,19.84-9.07,29.73-13.66c0.99-0.46,1.88-1.12,2.81-1.69c-0.01-0.34-0.03-0.68-0.04-1.03c-9.92-3.27-19.85-6.53-29.77-9.8
	c0.25-0.19,0.5-0.38,0.76-0.57c-1-1.17-1.99-2.33-3.17-3.7c5.66-3.64,11.35-7.3,16.82-10.81c-3.1-0.53-6.03-1.02-9.9-1.68
	c3.18-3.58,5.52-6.2,8.57-9.63c-2.35,0.71-3.75,0.95-4.98,1.54c-5.67,2.7-11.55,5.1-16.86,8.39c-4.28,2.65-8.08,2.36-13.28,0.31
	c4.28-2.39,7.88-4.4,12.3-6.87c-3.37-0.66-5.86-0.9-8.15-1.7c-1.08-0.38-2.56-1.91-2.49-2.81c0.11-1.41,1.08-3.32,2.25-3.93
	c1.56-0.8,3.66-0.6,5.53-0.74c0.8-0.06,1.79,0.45,2.41,0.14c5.72-2.88,11.42-1.2,16.98,0.24c4.14,1.07,7.5,2.66,12.52,1.42
	c4.69-1.16,7.3-4.57,11.32-6.11c-1.62-0.16-3.23-0.33-4.85-0.49c0.04-0.42,0.08-0.84,0.12-1.26c5.93,0.73,11.85,1.46,18.14,2.24
	c-3.4-4.02-6.52-7.7-9.69-11.44c7.43-2.23,7.99-9.34,11.59-14.23c-4.4,0.61-8.46,1.94-12.61,2.6c-4.19,0.67-8.49,0.93-12.74,0.89
	c-4.13-0.04-8.25-0.7-13.26-1.17c8.92-5.5,17.71-9.02,25.47-15.26c-3.89-0.7-7.02-1.26-10.15-1.83c-0.05-0.52-0.11-1.05-0.16-1.57
	c3.31-1,6.57-2.63,9.93-2.86c7.71-0.53,15.47-0.4,23.21-0.48c4.82-0.05,9.63-0.01,14.45-0.01c0.12-0.4,0.23-0.8,0.35-1.2
	C545.99,326.86,532.71,315.58,518.36,305.52z M252.12,336.07c-0.26,0.26-0.51,0.52-0.77,0.78c-7.41-5.78-15.73-10.73-17.84-21.33
	C239.71,322.36,245.92,329.22,252.12,336.07z M226.53,351.25c2.84,0.79,5.88,1.17,8.48,2.44c11.38,5.54,22.64,11.34,33.93,17.04
	c9.19,4.64,18.37,9.28,27.55,13.93c0.67,0.34,1.28,0.78,2.87,1.76c-3.49,0.19-5.93,0.42-8.38,0.44c-9.47,0.08-18.59,1.89-27.42,5.31
	c-1.09,0.42-2.83,0.39-3.76-0.22c-13.65-8.93-24.61-20.38-32.19-34.91c-0.74-1.42-1.28-2.95-1.91-4.42
	C225.99,352.15,226.26,351.7,226.53,351.25z M149.31,350.03c1.5,2.45,2.58,3.99,3.44,5.64c6.58,12.64,15.16,23.68,25.34,33.71
	c5.25,5.18,9.1,11.78,13.59,17.73c1.2,1.6,2.43,3.18,3.86,5.05C179.57,407.31,147.6,365.01,149.31,350.03z M190.28,437.05
	c6.59-0.54,6.59-0.54,7.5,4.43c1.08,5.88,6.53,12.06,11.26,12.49c0,1.07,0,2.17,0,4.12c-1.66-0.89-3.26-1.26-4.07-2.27
	C200.1,449.81,195.42,443.66,190.28,437.05z M256.38,560.66c-4.05-4.65-8.11-9.31-12.16-13.96
	C252.7,548.72,257.11,553.68,256.38,560.66z M444.36,604.89c-7.37-0.79-14.85-2.64-22.1-2c-5.98,0.53-11.72,3.97-17.52,6.22
	c-1.74,0.67-3.36,1.68-5.03,2.53c-0.36-0.3-0.73-0.61-1.09-0.91c1.02-1.54,1.79-3.34,3.09-4.57c4.87-4.59,11.03-6.27,17.47-7.05
	c6.12-0.74,12.27-1.35,18.41-1.92c4.69-0.43,9.62,3.21,10.92,8.34C446.99,605.29,445.69,605.04,444.36,604.89z M438.65,561.61
	c-0.41-1.83,0.63-3.95,0.78-5.96c0.16-2.1,0.04-4.21,0.04-7.35c1.13-1.43,2.48-1.09,3.37,1.68c0.36,1.12,0.56,2.28,0.87,3.42
	c1.4,5.13,2.47,5.74,7.49,4.25c3.24,3.74,3.12,4.99-1.28,6.98c-10.25,4.61-20.41,9.49-30.93,13.42c-8.78,3.28-16.17,8.29-22.97,14.5
	c-9.75,8.91-19.59,17.71-29.34,26.62c-1.51,1.38-2.71,3.12-4.05,4.69c-0.32-0.22-0.64-0.44-0.96-0.66
	c-0.07-0.77-0.21-1.55-0.18-2.31c0.08-2.09-0.72-3.87-2.9-3.56c-2.28,0.32-3.12,2.27-2.75,4.61c0.22,1.38,0.63,2.82,0.43,4.15
	c-0.38,2.53-0.89,4.88-3.49,6.6c-1.82,1.21-2.65,3.84-4.12,5.68c-0.9,1.12-2.06,2.5-3.3,2.75c-1.34,0.27-2.91-0.64-4.38-1.03
	c0.61-1.24,1.11-2.56,1.87-3.71c0.89-1.34,2.68-2.4,2.92-3.79c1.43-8.04,6.42-13.86,12.14-18.91c4.86-4.28,10.57-7.6,15.86-11.39
	c1.04-0.75,2.14-1.6,2.79-2.66c2.66-4.35,4.85-9.04,7.85-13.14c1.67-2.28,3.45-5.91,7.76-3.94c0.38,0.17,1.87-1.03,2.12-1.82
	c1-3.13,2.79-5.01,6.23-5.08c0.5-0.01,0.99-0.51,1.5-0.79c-3.05-4.66-3.02-4.91,0.98-8.41c1.62-1.42,7.28-1.18,8.97,0.48
	c0.34,0.33,0.12,1.18,0.35,1.71c0.35,0.8,0.77,2.09,1.33,2.2c6.13,1.11,12.41,4.3,18.27-0.98c-1.05-1.6-2.2-3.36-3.4-5.19
	c4.44-1,3.24-1.56,6.34,3.51C437.16,566.39,439.46,565.22,438.65,561.61z M370.1,517.83c0.42,0.03,0.83,0.06,1.25,0.09
	c4.03,11.59,8.06,23.18,12.28,35.3c-11.24,4.18-22.2,8.25-33.51,12.45C348.61,545.8,359.35,531.82,370.1,517.83z M429.88,401.29
	c-1.13-0.63-1.93-2.34-2.3-3.74c-0.74-2.79-0.64-5.88-1.8-8.43c-0.62-1.35-3.18-2.5-4.83-2.46c-1.01,0.02-2.63,2.38-2.82,3.84
	c-0.45,3.51,0.76,7.54-0.55,10.56c-1.28,2.96-5,4.8-7.38,7.39c-2.88,3.13-3.8,7.1-3.57,11.25c0.21,3.77,1.76,4.51,4.69,2.16
	c4.49-3.6,7.94-8.06,9.81-13.57c0.31,0.04,0.56,0.01,0.77,0.1c6.04,2.64,6.5,3.58,2.57,8.9c-4.36,5.91-9.14,11.52-13.87,17.16
	c-0.97,1.16-2.53,1.82-4.15,2.94c-1.03-2.81-1.81-4.94-2.77-7.57c-1.59,2.28-2.79,4.01-4.46,6.42c-0.52-1.77-0.89-2.61-1-3.48
	c-0.38-2.96-2.15-4.08-4.94-3.87c-2.67,0.2-4.5,1.39-4.79,4.29c-0.18,1.78-0.24,3.58-0.64,5.31c-0.27,1.17-1.09,2.22-1.59,3.35
	c-0.6,1.37-1.13,2.78-1.69,4.17c1.44,0.23,2.87,0.46,5.26,0.84c-0.31,2.92-0.69,6.57-1.1,10.53c3.57-0.24,5.67,1.63,7.22,4.82
	c1.41,2.89,2.64,2.73,4.49-0.05c0.72-1.08,1.15-2.46,2.1-3.25c1.36-1.12,3.07-1.82,4.63-2.71c0.69,1.27,1.64,2.47,2.03,3.83
	c4.38,15.37,8.29,30.89,13.14,46.11c3.14,9.86,7.64,19.28,11.52,28.91c0.26,0.65,0.44,1.34,0.75,2.3c-1.98,0.6-3.88,1.15-5.77,1.74
	c-6.88,2.14-13.79,4.19-20.61,6.51c-2.32,0.79-3.3,0.64-4.03-1.96c-0.83-2.92-2.16-5.76-3.7-8.39c-4.83-8.28-6.98-17.47-8.12-26.73
	c-1.22-9.88-1.05-19.93-1.63-29.89c-0.2-3.5-0.83-6.98-1.32-10.98c-0.56,0.76-0.78,0.93-0.83,1.14
	c-2.01,9.31-8.22,15.55-14.89,21.88c-25.39,24.12-53.43,44.64-83.26,62.85c-4.42,2.7-8.41,3.1-12.86,0.13
	c-8.88-5.94-17.92-11.63-26.84-17.5c-1.24-0.81-2.2-2.05-3.78-3.55c2.59-1.61,4.87-2.8,6.86-4.36c1.05-0.82,1.6-2.28,2.37-3.44
	c-1.46-0.44-3.04-1.47-4.35-1.2c-2.87,0.6-5.55,2.15-8.43,2.73c-1.44,0.29-3.44-0.32-4.6-1.25c-0.65-0.53-0.45-2.68-0.01-3.86
	c0.81-2.2-0.14-2.86-2-3.05c-0.57-0.06-1.18,0.12-1.76,0.26c-6.73,1.63-6.73,1.45-6.86-5.17c-0.03-1.41-2.13-3.61-3.65-4.01
	c-4.1-1.09-5.45-2.78-4.09-7.1c0.97-3.07-0.38-5.7-3.95-6.88c-4.15-1.37-8.28-2.9-12.23-4.77c-4.62-2.19-5-3.92-1.99-7.94
	c3.77-5.05,7.51-10.15,11.67-14.87c5.01-5.7,6.63-11.83,4.16-19.07c-0.95-2.79-1.57-5.68-2.53-9.22c3.44,1.47,6.53,2.8,9.62,4.12
	c0.2-0.27,0.39-0.54,0.59-0.81c-9.68-11.27-21.05-21.23-28.28-34.41c0.32-0.28,0.64-0.56,0.96-0.84c1.01,1.63,2.01,3.25,3.02,4.88
	c0.4-0.35,0.81-0.69,1.21-1.04c-1.14-2.49-2.28-4.99-3.42-7.48c9.88,10.42,18.51,21.98,30.24,30.98c0.28-1.2,0.48-2.03,0.72-3.07
	c3.16,1.96,6.12,3.79,9.78,6.05c-13.93-25.8-27.46-50.84-40.98-75.88c0.24-0.13,0.47-0.25,0.71-0.38
	c14.32,10.62,28.64,21.23,43.02,31.9c-0.74,0.58-2.13,1.67-3.51,2.76c0.08,0.14,0.17,0.28,0.25,0.42c2.02-1.05,4.03-2.1,5.29-2.75
	c3.38,1.09,6.08,1.96,8.46,2.73c-5.69,4.73-11.72,9.72-17.74,14.72c0.22,0.35,0.45,0.71,0.67,1.06c2.59-0.13,5.19-0.27,7.82-0.4
	c-1.7,5.36-3.28,10.33-4.86,15.3c0.39,0.15,0.78,0.29,1.17,0.44c1.85-3.8,3.71-7.6,5.56-11.4c0.4,0.08,0.79,0.17,1.19,0.25
	c0.36,3.14,0.73,6.28,1.22,10.56c2.39-7.62,3.87-14.81,11.26-17.95c1.16,4.77,2.3,9.49,3.44,14.21c0.37-0.01,0.74-0.03,1.11-0.04
	c-0.03-3.31-1.19-7.12,2.6-8.16c2.08,4.57,3.77,9.42,6.37,13.72c2.59,4.29,8,6.26,11.7,4.9c4.55-1.67,6.75-5.36,6.61-10
	c-0.14-4.54-1.02-9.05-1.56-13.4c1,1.49,2.19,3.27,3.39,5.05c0.18-0.06,0.36-0.12,0.55-0.18c-0.58-2.35-0.88-4.83-1.82-7.02
	c-0.98-2.28-0.26-3.47,1.74-4.04c5.54-1.57,11.11-3.09,16.73-4.33c0.94-0.21,2.42,0.89,3.3,1.75c6.96,6.77,13.83,13.63,21.42,21.16
	c0.26-2.14,0.36-2.97,0.5-4.1c1.97,1.12,3.67,2.08,5.37,3.05c-9.21-13.05-18.33-26.12-33.27-33.38c1.16-0.86,2.69-1.99,4.22-3.12
	c-3.83,0.31-4.46-2.04-5.37-4.81c-2.08-6.36-4.61-12.58-6.84-18.54c7.05,6.59,14.33,13.39,21.61,20.18c0.26-0.25,0.53-0.5,0.79-0.76
	c-4.12-10.21-12.09-17.62-19.29-25.66c15.42,10.88,30.76,21.67,48.74,28.85c-1.37-3.16-2.73-6.33-4.12-9.48
	c-1.34-3.02-3-5.94-3.98-9.07c-0.47-1.49,0.36-3.37,0.46-5.08c0.05-0.84-0.02-1.83-0.42-2.54c-3.26-5.91-6.53-11.81-9.96-17.62
	c-4.15-7.04-8.45-13.99-12.68-20.99c-0.77-1.28-1.49-2.59-1.63-4.48c3.54,3.03,7.13,5.99,10.59,9.1c3.63,3.26,7.05,6.77,10.71,9.99
	c11.22,9.87,17.42,23.29,25.26,35.56c4.86,7.6,9.57,15.29,14.42,22.9c0.88,1.38,2.07,2.55,3.11,3.82c0.34-0.08,0.67-0.16,1.01-0.23
	c-0.82-9.75-1.64-19.49-2.46-29.24c0.21-0.04,0.42-0.07,0.62-0.11c1.39,5.59,2.77,11.17,4.44,17.89c1.54-2.57,2.51-4.33,3.61-5.99
	c3.64-5.5,7.37-10.94,10.95-16.49c0.47-0.73,0.62-2.04,0.31-2.85c-1.25-3.27-0.13-5.99,2.09-8.09c6.06-5.72,14.75-9.51,23.27-2.09
	c7.74,6.75,12.93,14.85,10.94,25.94c-1.19,6.65-1.97,13.37-3.07,20.03c-0.24,1.48-0.76,3.12-1.69,4.24
	C432.59,400.5,430.56,401.66,429.88,401.29z M439.2,462.84c-2.02,0.27-4.04,0.54-7.25,0.97c1.55-2.31,2.28-4.54,3.6-4.98
	c1.01-0.34,2.78,1.57,4.21,2.47C439.57,461.81,439.38,462.32,439.2,462.84z M448.67,278.32c-1.4,2.7-2.51,5.74-7.63,5.52
	c-1.48-0.53-4.1-1.24-6.51-2.4c-2.14-1.03-2.17-2.71-0.23-4.13c2.38-1.73,4.69-3.76,7.36-4.83c1.61-0.65,4.07-0.17,5.75,0.63
	C449.44,274.07,449.77,276.21,448.67,278.32z M494.2,289c1.54-1.08,3.37-1.76,5.08-2.61c-0.31-0.77-0.61-1.54-0.92-2.31
	c2.73,2.36,5.53,4.66,8.16,7.13c0.54,0.51,0.76,1.73,0.58,2.5c-0.1,0.43-1.35,0.88-2.04,0.82c-3.29-0.26-6.58-0.59-9.84-1.12
	c-1.01-0.16-1.91-1.03-2.87-1.57C492.96,290.87,493.34,289.6,494.2,289z M515.02,350.03c-7.68,1.56-14.77,3.18-21.94,4.28
	c-1.35,0.21-3.87-1.31-4.33-2.58c-0.61-1.69-0.26-4.25,0.7-5.81c0.57-0.93,3.2-1.17,4.72-0.85
	C500.84,346.47,507.44,348.19,515.02,350.03z M466.82,730.79c-1.54,2.12-2.95,5.06,0.01,7.65c0.35,0.31,0.28,1.84-0.12,2.15
	c-4.23,3.39-4.21,8.41-5.49,12.83c-1.73-0.99-3.72-2.22-5.8-3.29c-3.26-1.68-2.67-4.56-1.42-6.71c1.73-2.98,1.12-5.63,0.27-8.45
	c-0.54-1.81-1.25-3.56-1.82-5.36c-1.21-3.8-3.63-7.55-0.21-11.5c0.52-0.6,0.53-1.87,0.4-2.77c-0.35-2.45,0.54-3.69,2.99-4.3
	c2.92-0.73,2.96,1.57,3.78,3.13c0.1,0.19,0.23,0.37,0.46,0.72c0.74-0.09,1.55-0.18,2.36-0.28c5.18-0.63,6.27,0.58,5.27,5.83
	c-0.09,0.45-0.27,1.1-0.06,1.35C470.17,725.03,469.08,727.68,466.82,730.79z M461.53,763.18c-4.33,0-8.64,0-12.99,0
	c-0.67-1.23-1.49-2.48-2.06-3.83c-0.39-0.93-0.97-2.35-0.57-2.96c1.75-2.65,1.08-5.57,1.45-8.37c0.07-0.56,0.98-1.31,1.6-1.42
	c0.68-0.12,1.48,0.4,2.23,0.64c-1.82,2.51,1.58,3.02,1.8,4.72c0.14,1.11,0.03,2.26,0.03,3.51
	C460.4,752.98,460.69,753.56,461.53,763.18z M377.77,663.81c-1.65,1.03-3.2,2.49-5,2.9c-0.82,0.19-3.17-2.27-3.01-2.57
	c0.86-1.65,2.29-3,4.33-5.4C375.81,661.1,376.79,662.46,377.77,663.81z M463.54,712.54c-0.63-0.51-1.88-1.23-1.79-1.51
	c0.43-1.35,1.23-2.59,1.9-3.87c0.62,0.34,1.23,0.69,1.85,1.03C464.84,709.64,464.19,711.09,463.54,712.54z M378.46,689.65
	c-0.54,0.54-1.09,1.08-1.63,1.62c-1.22-1.34-2.44-2.69-3.66-4.03c0.49-0.54,0.98-1.08,1.47-1.62
	C378.39,684.66,377.6,687.92,378.46,689.65z M429.03,379.6c-0.27,1.19-2.49,2.36-4.05,2.75c-2.55,0.63-5.27,0.62-7.91,0.88
	c-0.09-0.21-0.18-0.43-0.27-0.64c0.69-0.53,1.42-1,2.04-1.6c0.69-0.67,1.27-1.44,1.89-2.17c-0.82-0.57-1.6-1.53-2.47-1.62
	c-1.69-0.18-3.45,0.06-5.16,0.27c-1.37,0.16-2.71,0.53-5.1,1.01c1.34-2.03,2.46-3.17,2.86-4.51c0.37-1.22,0.33-2.9-0.28-3.94
	c-0.28-0.49-2.54-0.38-3.5,0.17c-1.8,1.03-3.27,2.47-5.22,0.29c-1.87-2.1-1.75-4.47,0.19-5.95c2.94-2.24,6.16-4.62,9.64-5.54
	c5.66-1.49,9.6,1.7,10.98,8.23c0.67,3.16,0.87,6.07,4.49,7.65C428.34,375.38,429.36,378.17,429.03,379.6z M406.63,540.97
	c-0.08-1.06,0.69-2.21,1.19-3.27c0.45-0.95,1.45-1.84,1.46-2.76c0.05-5.54-0.02-5.54,6.54-6.58c-1.38,4.82-2.42,8.98-3.86,13
	c-0.3,0.84-2.1,1.5-3.23,1.55C408.01,542.94,406.69,541.71,406.63,540.97z M415.28,509.63c-0.81-1.39-1.97-2.7-2.28-4.2
	c-0.15-0.71,1.3-1.76,2.02-2.65c0.9,1.2,1.8,2.4,2.99,4.01C416.86,507.98,416.07,508.81,415.28,509.63z M353.31,361.61
	c1.53,2.21,2.17,4.25,0.13,6.13c-0.35,0.32-2.11-0.08-2.28-0.51C350.3,365.01,350.17,362.82,353.31,361.61z M421.56,516.78
	c-0.6-0.14-1.2-0.28-1.8-0.42c0.17-1.17,0.18-2.4,0.61-3.45c0.12-0.28,1.53-0.03,2.35-0.02
	C422.34,514.18,421.95,515.48,421.56,516.78z M413.89,577.14c-0.74,2.76-3.05,3.12-6.09,2.29c0.48-2.51,0.11-5.48,3.63-5.32
	C412.35,574.15,414.1,576.35,413.89,577.14z"
				/>
			</svg>

		</>
	);
};

export default AnimeIconV11;