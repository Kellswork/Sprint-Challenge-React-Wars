import React from "react";

function StarWarsButton({previousButton, nextButton}) {

  return (
    <div>
      <button onClick={() => previousButton()}>previous</button>
      <button onClick={() => nextButton()}>next</button>
    </div>
  );
}

export default StarWarsButton;
