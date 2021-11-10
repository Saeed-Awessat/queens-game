export const vertical = ['1','2','3','4','5','6','7','8'];
export const horizontal = ['1','2','3','4','5','6','7','8'];

let enablePlaces = {};

/**
 *  0 -> empty place
 *  number -> occupied place
 *  image -> its symbol
 */
let place = '';
for (let i = 0; i < vertical.length; i++) {
    for (let j = 0; j < horizontal.length; j++) {
        place = i+''+ j;
        enablePlaces[place] = 0;
    }
}

export const places = {...enablePlaces};