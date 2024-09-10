import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [games, setGames] = useState(0);
    const [X, setX] = useState(0);
    const [O, setO] = useState(0);
    const [draw, setDraw] = useState(0);
    const [showClock, setShowClock] = useState(false);

    const handleGameResult = (winner) => {
        if (winner === 'X') {
            setX(prevX => prevX + 1);
        } else if (winner === 'O') {
            setO(prevO => prevO + 1);
        } else {
            setDraw(prevDraw => prevDraw + 1);
        }
        setGames(prevGames => prevGames + 1);
    };

    const handleToggleClock = () => {
        setShowClock(prevShowClock => !prevShowClock);
    };

    return (
        <GameContext.Provider
            value={{
                games,
                X,
                O,
                draw,
                showClock,
                handleGameResult,
                handleToggleClock,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
