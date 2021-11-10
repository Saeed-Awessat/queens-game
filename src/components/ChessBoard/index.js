import React, {useEffect, useState} from 'react';
import './ChessBoardStyle.css';
import Cell from "../Cell";
import {
    vertical,
    horizontal,
    places
} from '../../Constants';


const ChessBoard = () => {
    const [board, setBoard] = useState([]);
    const [copyPlaces, setCopyPlaces] = useState({...places});
    const [countSymbols, setCountSymbols] = useState(0);

    useEffect(() => {
        let b = [];
        setCountSymbols(document.getElementsByTagName('IMG').length);

        for (let i = 0; i < vertical.length; i++) {
            for (let j = 0; j < horizontal.length; j++) {
                const number = i + j + 2;
                b.push(
                    <Cell
                        i={i}
                        j={j}
                        number={number}
                        places={copyPlaces}
                        setPlaces={setCopyPlaces}
                        countSymbols={countSymbols}
                        setCountSymbols={setCountSymbols}
                    />);
            }
        }
        setBoard(b);
    }, [copyPlaces]);

    if (countSymbols === 8) {
        alert('Good job, you solved it!');
        // return false;
    }


    return (
        <div className={'App'}>
            <header className={'App-header'}>{`There are ${8 - countSymbols} queens left`}</header>
            <div className={'board'}>{board}</div>
        </div>
    )
};

export default ChessBoard;