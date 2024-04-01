function caseChanger(str) {
    // a function that swaps out the case of each character
    
    let output = "";
    
    for (let char of str) {
        /*
        Using a ternary operator to check whether the case
        is uppercase or lowercase then convert
        */
      output += char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
    return output;
  }
  
  console.log(caseChanger("May the Odds be in YOUR Favour"));
  // the output will be mAY THE oDDS BE IN your fAVOUR
  