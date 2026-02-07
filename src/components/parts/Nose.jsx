import React from 'react';

const Nose = ({ className, style }) => (
    <svg viewBox="0 0 60 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M30,10 Q50,40 50,60 Q50,80 30,70 Q10,80 10,60 Q10,40 30,10 Z"
            fill="#ffcc99"
            stroke="#000"
            strokeWidth="3"
        />
        {/* Nostrils */}
        <circle cx="20" cy="60" r="3" fill="#000" opacity="0.5" />
        <circle cx="40" cy="60" r="3" fill="#000" opacity="0.5" />
        {/* Highlight */}
        <ellipse cx="30" cy="30" rx="5" ry="10" fill="#fff" opacity="0.6" />
    </svg>
);

export default Nose;
