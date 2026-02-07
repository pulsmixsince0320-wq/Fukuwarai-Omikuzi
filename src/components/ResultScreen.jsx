import React, { useEffect, useState } from 'react';
import { getRandomOmikuji } from '../utils/omikujiData';

const ResultScreen = ({ onReset }) => {
    const [result, setResult] = useState(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const omikuji = getRandomOmikuji();
        setResult(omikuji);

        const timer = setTimeout(() => {
            setIsRevealed(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    if (!result) return null;

    return (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-end md:justify-center overflow-hidden pointer-events-none">

            {/* Darken background slightly to make text pop */}
            <div className={`absolute inset-0 bg-black/40 transition-opacity duration-1000 ${isRevealed ? 'opacity-100' : 'opacity-0'}`} />

            {/* Shout bubble - positioned absolutely relative to screen logic or just floating */}
            <div className={`absolute top-[15%] right-[10%] bg-white text-black p-6 rounded-full font-bold text-3xl border-4 border-red-600 rotate-12 transform transition-all duration-500 delay-1000 origin-bottom-left shadow-lg ${isRevealed ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                開運！！
            </div>

            {/* 2. The Result Text */}
            <div className={`pointer-events-auto flex flex-col items-center text-center transition-all duration-1000 delay-500 mb-10 md:mb-0 ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                <div className="mb-6 drop-shadow-lg">
                    <div
                        className="text-8xl md:text-9xl font-bold gorgeous-text animate-pulse"
                        style={{ color: result.color, textShadow: `0 0 30px ${result.color}, 2px 2px 0 #000` }}
                    >
                        {result.label}
                    </div>
                </div>

                <div className="bg-black/80 border-4 border-double border-[var(--gold-color)] p-6 rounded-xl max-w-lg backdrop-blur-md mx-4 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                    <h3 className="text-3xl text-[var(--gold-color)] mb-4 font-bold border-b border-gray-600 pb-2">{result.title}</h3>

                    <div className="text-left space-y-4 text-xl leading-relaxed">
                        <p><span className="text-red-400 font-bold text-2xl">❤ 恋愛：</span> {result.love}</p>
                        <p><span className="text-blue-400 font-bold text-2xl">💼 仕事：</span> {result.work}</p>
                        <p><span className="text-green-400 font-bold text-2xl">✨ その他：</span> {result.other}</p>
                    </div>
                </div>

                <button onClick={onReset} className="gorgeous-btn mt-8 text-2xl px-12 py-4 hover:scale-110 shadow-2xl">
                    もう一度遊ぶ
                </button>
            </div>
        </div>
    );
};

export default ResultScreen;
