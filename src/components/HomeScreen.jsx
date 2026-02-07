import React from 'react';
import BaseFace from './parts/BaseFace';
import { LeftEye, RightEye } from './parts/Eyes';
import Mouth from './parts/Mouth';

const HomeScreen = ({ onStart }) => {
    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
            {/* Background Decor: Scattered Parts */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <BaseFace className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] opacity-10" />
                <LeftEye className="absolute top-10 left-10 w-24 h-24 animate-bounce" style={{ fill: '#fff' }} />
                <Mouth className="absolute bottom-20 right-20 w-32 h-32 animate-pulse" />
            </div>

            <div className="z-10 text-center fade-in">
                <div className="mb-8">
                    <h1 className="text-6rem md:text-8rem gorgeous-text m-0 leading-none" style={{ fontSize: 'min(15vw, 6rem)' }}>
                        笑顔<br />おみくじ
                    </h1>
                    <p className="text-xl md:text-2xl text-gold mt-4" style={{ color: 'var(--gold-color)', letterSpacing: '0.5em' }}>
                        〜ゴージャス版〜
                    </p>
                </div>

                <button onClick={onStart} className="gorgeous-btn mt-8">
                    いざ、運試し
                </button>
            </div>

            <div className="bg-overlay"></div>
        </div>
    );
};

export default HomeScreen;
