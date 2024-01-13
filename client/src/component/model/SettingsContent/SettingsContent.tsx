import React from 'react';

interface IContent {
	id: number;
	node?: React.ReactNode | undefined;
}

interface ISettingsContentProps {
	contents: IContent[];
	selectId?: number | undefined;
}

const SettingsContent: React.FC<ISettingsContentProps> = ({
	contents,
	selectId,
}) => {
	return (
		<div
			className="settings__content"
		>
			{contents.map((item: IContent) => (
				item.id === selectId && (
					<div
						key={item.id}
						className="settings__content-item"
					>
						{item.node}
					</div>
				)
			))}
		</div>
	);
};

export default SettingsContent;