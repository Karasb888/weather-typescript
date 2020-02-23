import * as React from 'react';
import { IconsProps } from './types';

const RemoveIcon: React.FC<IconsProps> = ({ height, width, viewBox, svgClass, title }) => {
    return (
        <svg
            className={svgClass}
            height={height}
            viewBox={viewBox}
            width={width}
            xmlns="http://www.w3.org/2000/svg"
        >
            { title ? <title>{title}</title> : '' }
            <path d="m453.332031 0h-394.664062c-32.363281 0-58.667969 26.304688-58.667969 58.667969v394.664062c0 32.363281 26.304688 58.667969 58.667969 58.667969h394.664062c32.363281 0 58.667969-26.304688 58.667969-58.667969v-394.664062c0-32.363281-26.304688-58.667969-58.667969-58.667969zm0 0" fill="#f44336"/>
            <path d="m350.273438 320.105469c8.339843 8.34375 8.339843 21.847656 0 30.167969-4.160157 4.160156-9.621094 6.25-15.085938 6.25-5.460938 0-10.921875-2.089844-15.082031-6.25l-64.105469-64.109376-64.105469 64.109376c-4.160156 4.160156-9.621093 6.25-15.082031 6.25-5.464844 0-10.925781-2.089844-15.085938-6.25-8.339843-8.320313-8.339843-21.824219 0-30.167969l64.109376-64.105469-64.109376-64.105469c-8.339843-8.34375-8.339843-21.847656 0-30.167969 8.34375-8.339843 21.824219-8.339843 30.167969 0l64.105469 64.109376 64.105469-64.109376c8.34375-8.339843 21.824219-8.339843 30.167969 0 8.339843 8.320313 8.339843 21.824219 0 30.167969l-64.109376 64.105469zm0 0" fill="#fafafa"/>
        </svg>
    );
};

export default RemoveIcon;
