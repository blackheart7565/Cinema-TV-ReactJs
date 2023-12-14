import React, {FC} from 'react';
import {ICinemaIcon} from "../interface";

const VolumeDownIcon: FC<ICinemaIcon> = (
    {
        className
    }) => {
    return (
        <>
            <svg className={className} xmlns="http://www.w3.org/2000/svg"
                 height="24"
                 viewBox="0 -960 960 960" width="24">
                <path
                    d="M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320Z"/>
            </svg>
        </>
    );
};

export {VolumeDownIcon};