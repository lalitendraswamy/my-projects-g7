import React, { useState, useRef, useContext } from 'react';
import { Status } from './status-component.component';
import { GameBoard } from './game-board.component';
import { GameMoves } from './game-moves.component';
import { TicTacToeGame } from '../services/tic-tac-toe-game.service';
import { Timer } from './timer.component';
import { PlayButton } from './play-button.component';
import { GameContext } from './game-context';

export const Game = () => {
    const { handleGameResult } = useContext(GameContext);
    const [game, setGame] = useState(new TicTacToeGame());
    const [running, setRunning] = useState(false);
    const [reset, setReset] = useState(false);
    const timers = {
        O: useRef(),
        X: useRef()
    };

    const fetchGameState = () => {
        const state = {
            ...game,
            next: game.currentPlayer,
            isOver: game.isOver,
            winningPlayer: game.winningPlayer,
            isStalemate: game.isStalemate,
            timers: {
                O: 0,
                X: 0,
            }
        };

        if (game.winner) {
            state.message = `'${game.winningPlayer}' Wins`;
        } else if (game.isStalemate) {
            state.message = `Stalemate`;
        } else {
            state.message = `Next Player '${game.currentPlayer}'`;
        }

        return state;
    };

    const [state, setState] = useState(fetchGameState());

    const handleMove = (id) => {
        if (game.move(id) === false) return;

        setState(fetchGameState());

        if (game.isOver) {
            handleGameResult(game.winningPlayer);
            setRunning(false);
        }
    };

    const handlePlay = () => {
        timers.O.current.reset();
        timers.X.current.reset();

        const newGame = new TicTacToeGame();
        setGame(newGame);
        setState(fetchGameState());
        setRunning(true);
        setReset(true);
    };

    const handleReset = () => {
        setReset(false);
    };

    const handlePause = (name, value) => {
        setState(prevState => ({
            ...prevState,
            timers: {
                ...prevState.timers,
                [name]: value
            }
        }));
    };

    return (
        <div className='body'>
            <div className='game-component'>
                <Status message={state.message} />
                <PlayButton onClick={handlePlay} disabled={running} />
                <div className="same-row">
                    <GameBoard
                        winner={state.winner}
                        cells={state.cells}
                        onCellClick={handleMove}
                    />
                    <div>
                        <div className='timers same-row'>
                            <Timer
                                ref={timers.O}
                                hideControls={true}
                                running={state.next === 'O' && running}
                                name="O"
                                onPause={handlePause}
                                reset={reset}
                                onReset={handleReset}
                            />
                            <Timer
                                ref={timers.X}
                                running={state.next === 'X' && running}
                                hideControls
                                name="X"
                                onPause={handlePause}
                                reset={reset}
                                onReset={handleReset}
                            />
                        </div>
                        <GameMoves moves={state.moves} />
                    </div>
                </div>
            </div>
        </div>
    );
};
