import React from 'react';

export const LeftEye = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        {/* White of eye */}
        <ellipse cx="50" cy="30" rx="45" ry="25" fill="#fff" stroke="#000" strokeWidth="3" />
        {/* Iris */}
        <circle cx="60" cy="30" r="15" fill="#800080" /> {/* Purple Iris */}
        {/* Pupil */}
        <circle cx="60" cy="30" r="7" fill="#000" />
        {/* Highlight */}
        <circle cx="65" cy="25" r="4" fill="#fff" />
        {/* Eyeliner / Lashes */}
        <path d="M5,30 Q50,5 95,30" fill="none" stroke="#000" strokeWidth="5" />
        <path d="M5,30 Q20,60 10,50" fill="none" stroke="#000" strokeWidth="2" />
    </svg>
);

export const RightEye = ({ className, style }) => (
    <svg viewBox="0 0 100 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="30" rx="45" ry="25" fill="#fff" stroke="#000" strokeWidth="3" />
        <circle cx="40" cy="30" r="15" fill="#800080" />
        <circle cx="40" cy="30" r="7" fill="#000" />
        <circle cx="45" cy="25" r="4" fill="#fff" />
        <path d="M5,30 Q50,5 95,30" fill="none" stroke="#000" strokeWidth="5" />
        <path d="M95,30 Q80,60 90,50" fill="none" stroke="#000" strokeWidth="2" />
    </svg>
);
