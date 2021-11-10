import React, {useState} from 'react';
import './cellStyle.css';
import {horizontal, vertical} from "../../Constants";


const Cell = (
    {
        i,
        j,
        number,
        places,
        setPlaces
    }) => {
    const [image, setImage] = useState('');
    const extendPlace = i + '' + j;


    const updateCell = () => {
        if (places[extendPlace] === 0) {
            const enabledSpaces = gameTechnique(i, j);
            enabledSpaces[extendPlace] = 'image';
            setImage('assets/images/queen.png');
            setPlaces(enabledSpaces);
        }else if (places[extendPlace] === 'image') {
            const enabledSpaces = gameTechnique(i, j, true);
            enabledSpaces[extendPlace] = 0;
            setImage('');
            setPlaces(enabledSpaces);
        }
    };

    const gameTechnique = (row, col, decrease) => {
        let setPlace = '';
        const copyPlaces = {...places};

        //run vertical
        for (let i = 0; i < vertical.length; i++) {
            setPlace = i + '' + col;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }
        }

        //run horizontal
        for (let j = 0; j < horizontal.length; j++) {
            setPlace = row + '' + j;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }
        }

        //run diagonal increase
        for (let i = row, m = col, n = col; (n >= 0 || m < horizontal.length) && i < vertical.length; i++ , m++, n--) {
            setPlace = i + '' + m;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }
            setPlace = i + '' + n;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }

        }

        //run diagonal decrease
        for (let i = row, m = col, n = col; (n >= 0 || m < horizontal.length) && i < vertical.length; i-- , m++, n--) {
            setPlace = i + '' + m;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }
            setPlace = i + '' + n;
            if(decrease){
                if(copyPlaces[setPlace] > 0) copyPlaces[setPlace] -= 1;
            }else{
                copyPlaces[setPlace] += 1;
            }

        }

        return copyPlaces;
    };

    const isNotAvailable = places[extendPlace] > 0;
    const changeBGCIfNotAvailable = isNotAvailable ? ' not-available' : '';

    if (number % 2 === 0) {
        return (
            <div key={`${i},${j}`} className={'cell white-tile' + changeBGCIfNotAvailable} onClick={updateCell}>
                {image ? <img src={image}/> : <span/>}
            </div>
        );
    } else {
        return (
            <div key={`${i},${j}`} className={'cell black-tile' + changeBGCIfNotAvailable} onClick={updateCell}>
                {image ? <img src={image}/> : <span/>}
            </div>
        );
    }


};

export default Cell;