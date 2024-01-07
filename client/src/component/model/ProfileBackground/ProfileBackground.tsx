import React from 'react';

interface IProfileBackgroundProps {
	image?: string | undefined;
}

const ProfileBackground: React.FC<IProfileBackgroundProps> = ({
	image,
}) => {
	return (
		<>
			<div className="profile__header" style={{
				backgroundImage: `url(${image || "/profile_poster.jpg"})`,
			}} />
		</>
	);
};

export default ProfileBackground;