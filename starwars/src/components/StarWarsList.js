import React from 'react';
import StarWars from './StarWars';


function StarWarsList({charactersArr}) {
    console.log(charactersArr);
return charactersArr.map(character => {
    return <StarWars characters={character} />
})
}

export default StarWarsList;