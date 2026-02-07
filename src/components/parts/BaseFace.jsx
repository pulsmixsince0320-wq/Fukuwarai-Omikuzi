import React from 'react';

const BaseFace = ({ className }) => {
    return (
        <svg viewBox="0 0 400 500" className={className} xmlns="http://www.w3.org/2000/svg">
            {/* Face Outline */}
            <path
                d="M200,50 C100,50 50,150 50,280 C50,420 120,480 200,480 C280,480 350,420 350,280 C350,150 300,50 200,50 Z"
                fill="#fdfdfd"
                stroke="#000"
                strokeWidth="5"
            />

            {/* Kumadori (Red Makeup) - Forehead */}
            <path
                d="M150,120 Q200,160 250,120 Q250,100 230,90 Q200,120 170,90 Q150,100 150,120 Z"
                fill="#d7000f"
            />

            {/* Kumadori - Cheeks */}
            <path
                d="M80,250 Q120,280 100,320"
                fill="none"
                stroke="#d7000f"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <path
                d="M320,250 Q280,280 300,320"
                fill="none"
                stroke="#d7000f"
                strokeWidth="10"
                strokeLinecap="round"
            />

            {/* Chin Shadow */}
            <path
                d="M180,450 Q200,470 220,450"
                fill="none"
                stroke="#d7000f"
                strokeWidth="5"
            />
        </svg>
    );
};

export default BaseFace;
