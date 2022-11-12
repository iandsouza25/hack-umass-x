import React from "react";

function App() {
  const data = require("./words_dictionary.json");
  let wordArr = Object.keys(data);

  function selectWords(wordArr) {
    let returnArr = [];
    let indTracker = new Set();
    while (returnArr.length < 50) {
      let indVal = Math.floor(Math.random() * wordArr.length);
      if (!indTracker.has(indVal)) {
        returnArr.push(wordArr[indVal]);
      }
      indTracker.add(indVal);
    }
    return returnArr;
  }

  let tempString = selectWords(wordArr).join(" ");

  return (
    <div>
      <button>start</button>
      <p>{tempString}</p>
    </div>
  )
}

export default App;
