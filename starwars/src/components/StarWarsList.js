import React from "react";
import StarWars from "./StarWars";
import StarWarsButton from './StarWarsButton';

function StarWarsList({ charactersArr, previousButton, nextButton }) {
  const result = charactersArr.map(character => {
    return <StarWars characters={character} />;
  });
return(
   <div>
       {result}
       <StarWarsButton previousButton={previousButton} nextButton={nextButton} />
   </div>
)
}

export default StarWarsList;
