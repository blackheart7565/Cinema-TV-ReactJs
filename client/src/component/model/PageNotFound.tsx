import { FC } from 'react';

interface IPageNotFoundProps { }

const PageNotFound: FC<IPageNotFoundProps> = () => {
	return (
		<div style={{
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			color: "#FFF",
			width: "100%",
			height: "100vh",
			padding: "50px",
			textAlign: "center",
		}}>
			<h1 style={{
				width: "max-content",
				fontSize: "calc(calc(1vw + 1vh) * 2)",
				textShadow: "0 0 30px #FFF",
			}}>
				Такой страницы <span style={{
					color: "#DA0027",
					textShadow: "0 0 30px #da0027",
				}}>не существует !</span>
			</h1>
		</div>
	);
};

export default PageNotFound;