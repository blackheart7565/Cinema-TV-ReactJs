import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { mediaConfig } from "../../../api/config/media.config";
import mediaApi from "../../../api/modules/media.api";
import { useReducer } from "../../../hooks/reducer.hook";
import { IMediaDetailsHeaderProps } from "../../../types/media-types/details.type";
import { IMediaDetailsRoot } from "../../../types/media.types";
import { IParams } from "../../../types/other.type";

import "./Details.scss";

interface IDetailsMediaProps { }

const DetailsMedia: FC<IDetailsMediaProps> = ({

}) => {
	const [details, setDetails] = useState<IMediaDetailsRoot>();
	const { dispatch, actions } = useReducer();
	const { mediaType, mediaId } = useParams<keyof IParams>();

	useEffect(() => {
		const getDetails = async () => {
			if (!mediaType || !mediaId) return;

			dispatch(actions.setIsLoading(true));
			const { data } = await mediaApi.getDetails({ mediaType, mediaId });
			dispatch(actions.setIsLoading(false));

			if (data) {
				setDetails(data);
			}
		}

		getDetails();
	}, [mediaType, mediaId]);

	return (
		<>
			{details
				? (
					<div className="media-details">
						<MediaDetailsHeader src={mediaConfig.methods.poster_path(details?.backdrop_path || details?.poster_path)} />
						<div className="media-details__content">

						</div>
					</div>
				)
				: null}
		</>
	);
};


const MediaDetailsHeader: FC<IMediaDetailsHeaderProps> = ({
	src
}) => {
	return (
		<div className="media-details__header" style={{
			backgroundImage: `url(${src})`
		}}>
		</div>
	);
}

export default DetailsMedia;