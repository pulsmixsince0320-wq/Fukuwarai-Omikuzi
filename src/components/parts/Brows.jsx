import React from 'react';

export const LeftBrow = ({ className, style }) => (
    <svg viewBox="0 0 80 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M75,35 Q40,0 5,20 C10,10 40,-10 75,35 Z"
            fill="#000"
        />
    </svg>
);

export const RightBrow = ({ className, style }) => (
    <svg viewBox="0 0 80 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5,35 Q40,0 75,20 C70,10 40,-10 5,35 Z"
            fill="#000"
        />
    </svg>
);
