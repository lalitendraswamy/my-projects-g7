import React from 'react';
import { GameScoreboard } from './game-scoreboard.component';
import { Game } from './game.component';
import { GameProvider } from './game-context';

export const GameSeries = () => {
    return (
        <GameProvider>
            <div className='game-series-component'>
                <GameScoreboard />
                <Game />
            </div>
        </GameProvider>
    );
};
