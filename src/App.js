import React from "react";



function App() {
  const data = require("./words_dictionary.json");
  let wordArr = Object.keys(data);
  let easyWords = wordArr.filter((x) => x.length <= 5);
  let mediumWords = wordArr.filter((x) => x.length <= 8);
  let hardWords = wordArr.filter((x) => x.length >= 10);



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

  function arrToString(arr) {
    return arr.join(" ");
  }

  let tempString = arrToString(selectWords(easyWords));

  let counter = 0;
  let handleKeyPress = (e) => {
    if (e.key === " "){
      if (tempString.charAt(counter) !== " "){
        return;
      }
    }
    console.log(tempString.charAt(counter) === e.key);
    console.log(e.key + " " + counter);
    ++counter;
  };

  let handleKeyDown = (e) =>{
    if (e.key === "Backspace" && counter>0){
      --counter;
      console.log(e.key +" " + counter);
      
    }
  }

  return (
    <div>
      <button>start</button>
      <p>{tempString}</p>
      <div>
        {" "}
        <input type="text" onKeyPress={(e) => handleKeyPress(e)} onKeyDown ={(s =>handleKeyDown(s))} />
      </div>
    </div>
  );
}

export default App;
