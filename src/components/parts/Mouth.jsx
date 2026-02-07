import React from 'react';

const Mouth = ({ className, style }) => (
    <svg viewBox="0 0 150 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        {/* Lips */}
        <path
            d="M10,20 Q75,80 140,20 Q75,60 10,20 Z"
            fill="#d7000f"
            stroke="#000"
            strokeWidth="2"
        />
        {/* Teeth */}
        <path
            d="M20,25 Q75,55 130,25 L125,30 Q75,60 25,30 Z"
            fill="#fff"
        />
    </svg>
);

export default Mouth;
