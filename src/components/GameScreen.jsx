import React, { useState, useRef, useEffect } from 'react';
import BaseFace from './parts/BaseFace';
import { LeftEye, RightEye } from './parts/Eyes';
import Mouth from './parts/Mouth';
import Nose from './parts/Nose';
import { LeftBrow, RightBrow } from './parts/Brows';

const PARTS_CONFIG = [
    { id: 'left_eye', type: LeftEye, width: 100, height: 60, initialX: 50, initialY: 50 },
    { id: 'right_eye', type: RightEye, width: 100, height: 60, initialX: 160, initialY: 50 },
    { id: 'nose', type: Nose, width: 60, height: 80, initialX: 110, initialY: 120 },
    { id: 'mouth', type: Mouth, width: 150, height: 80, initialX: 80, initialY: 210 },
    { id: 'left_brow', type: LeftBrow, width: 80, height: 40, initialX: 50, initialY: 10 },
    { id: 'right_brow', type: RightBrow, width: 80, height: 40, initialX: 170, initialY: 10 },
];

const GameScreen = ({ onFinish, isResultMode }) => {
    const [parts, setParts] = useState([]);
    const [activePartId, setActivePartId] = useState(null);
    const playAreaRef = useRef(null);
    const dragOffset = useRef({ x: 0, y: 0 });

    // Add initial parts to the "palette" (or just scatter them around if we want traditional fukuwarai)
    // For this app, let's have them start in a "tray" at the bottom and user drags them onto the face.
    // Actually, to make it more "Fukuwarai" (blindfold game), maybe they should appear one by one?
    // User spec says: "Drag and drop face parts".
    // Let's initialize parts in a random pile at the bottom.

    useEffect(() => {
        // Initial random positions at the bottom area
        const initialParts = PARTS_CONFIG.map(config => ({
            ...config,
            x: Math.random() * (window.innerWidth - 100) + 50,
            y: window.innerHeight - 150 + Math.random() * 50,
            rotation: Math.random() * 30 - 15,
            isPlaced: false,
        }));
        setParts(initialParts);
    }, []);

    const handlePointerDown = (e, partId) => {
        if (isResultMode) return; // Disable interaction in result mode
        e.preventDefault(); // Prevent scrolling
        e.stopPropagation();
        setActivePartId(partId);

        const part = parts.find(p => p.id === partId);
        if (part) {
            dragOffset.current = {
                x: e.clientX - part.x,
                y: e.clientY - part.y
            };
        }
    };

    const handlePointerMove = (e) => {
        if (activePartId) {
            e.preventDefault();
            const newX = e.clientX - dragOffset.current.x;
            const newY = e.clientY - dragOffset.current.y;

            setParts(prev => prev.map(p =>
                p.id === activePartId ? { ...p, x: newX, y: newY, isPlaced: true } : p
            ));
        }
    };

    const handlePointerUp = () => {
        setActivePartId(null);
        // Add "sparkle" effect here if placed on face?
    };

    return (
        <div
            className="relative w-full h-full overflow-hidden bg-black touch-none select-none"
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            ref={playAreaRef}
        >
            {/* Background / Base Face Area */}
            <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 ${isResultMode ? 'scale-110' : ''}`}>
                <div className={`relative w-[90vmin] h-[90vmin] max-w-[600px] max-h-[800px] ${isResultMode ? 'animate-[shake_2s_ease-in-out_infinite]' : ''}`}>
                    <BaseFace className="w-full h-full drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]" />
                </div>
            </div>

            {/* Parts */}
            {parts.map(part => {
                const PartComponent = part.type;
                return (
                    <div
                        key={part.id}
                        className={`absolute cursor-move filter drop-shadow-md transition-all duration-500 ${isResultMode && part.id === 'mouth' ? 'animate-[laugh_0.5s_infinite]' : ''}`}
                        style={{
                            left: part.x,
                            top: part.y,
                            width: part.width,
                            height: part.height,
                            transform: `rotate(${part.rotation}deg) scale(${activePartId === part.id ? 1.2 : 1})`,
                            zIndex: activePartId === part.id ? 100 : 10,
                            pointerEvents: isResultMode ? 'none' : 'auto',
                        }}
                        onPointerDown={(e) => handlePointerDown(e, part.id)}
                    >
                        <PartComponent className="w-full h-full" />
                    </div>
                );
            })}

            {/* Controls */}
            {!isResultMode && (
                <div className="absolute bottom-5 right-5 z-20">
                    <button
                        onClick={() => onFinish(parts)}
                        className="gorgeous-btn text-xl px-8 py-4 animate-bounce"
                    >
                        完成！
                    </button>
                </div>
            )}

            {/* Instructions Overlay (fades out) */}
            <div className="absolute top-10 w-full text-center pointer-events-none opacity-80">
                <p className="text-white text-lg font-bold gorgeous-text" style={{ textShadow: '2px 2px 4px #000' }}>
                    パーツをドラッグして配置せよ！
                </p>
            </div>

        </div >
    );
};

export default GameScreen;
