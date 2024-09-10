import React, { useContext } from 'react';
import { GameContext } from './game-context';

export const GameScoreboard = () => {
    const { games, X, O, draw } = useContext(GameContext);

    return (
        <div className='game-scoreboard-component'>
            <h2>Game Scoreboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Games</th>
                        <th>O Wins</th>
                        <th>X Wins</th>
                        <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{games}</td>
                        <td>{O}</td>
                        <td>{X}</td>
                        <td>{draw}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
