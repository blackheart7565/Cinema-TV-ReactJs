import React, {FC} from 'react';
import {ICinemaIcon} from "../interface";

const FullscreenOpenIcon: FC<ICinemaIcon> = (
    {
        className
    }) => {
    return (
        <>
            <svg className={className} xmlns="http://www.w3.org/2000/svg"
                 height="24" viewBox="0 -960 960 960" width="24">
                <path
                    d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/>
            </svg>
        </>
    );
};

export {FullscreenOpenIcon};