import * as React from 'react';
import { IconsProps } from './types';

const WindIcon: React.FC<IconsProps> = ({ height, width, viewBox, svgClass }) => {
    return (
        <svg
            height={height}
            viewBox={viewBox}
            width={width}
            className={svgClass}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="m416 240h-384a16 16 0 0 1 0-32h384a16 16 0 0 0 0-32 16 16 0 0 1 0-32 48 48 0 0 1 0 96z" fill="#82cdaa"/>
            <path d="m416 272h-384a16 16 0 0 1 0-32h384a48 48 0 0 0 0-96 16 16 0 0 0 0 32 16 16 0 0 1 0 32 48 48 0 0 1 0-96 80 80 0 0 1 0 160z" fill="#329682"/>
            <path d="m192 176h-160a16 16 0 0 1 0-32h160a16 16 0 0 0 0-32 16 16 0 0 1 0-32 48 48 0 0 1 0 96z" fill="#82cdaa"/>
            <path d="m192 208h-160a16 16 0 0 1 0-32h160a48 48 0 0 0 0-96 16 16 0 0 0 0 32 16 16 0 0 1 0 32 48 48 0 0 1 0-96 80 80 0 0 1 0 160z" fill="#329682"/>
            <path d="m336 432a16 16 0 0 1 0-32 16 16 0 0 0 0-32h-144a16 16 0 0 1 0-32h144a48 48 0 0 1 0 96z" fill="#82cdaa"/>
            <path d="m336 464a48 48 0 0 1 0-96 16 16 0 0 1 0 32 16 16 0 0 0 0 32 48 48 0 0 0 0-96h-144a16 16 0 0 1 0-32h144a80 80 0 0 1 0 160z" fill="#329682"/>
            <g fill="#c39b69">
                <path d="m40 336h8a48 48 0 0 1 48 48v8a8 8 0 0 1 -8 8h-8a48 48 0 0 1 -48-48v-8a8 8 0 0 1 8-8z"/>
                <path d="m328 64h8a48 48 0 0 1 48 48v8a8 8 0 0 1 -8 8h-8a48 48 0 0 1 -48-48v-8a8 8 0 0 1 8-8z" transform="matrix(0 1 -1 0 448 -256)"/>
                <path d="m424 288h8a48 48 0 0 1 48 48v8a8 8 0 0 1 -8 8h-8a48 48 0 0 1 -48-48v-8a8 8 0 0 1 8-8z"/>
            </g>
        </svg>
    );
};

export default WindIcon;
