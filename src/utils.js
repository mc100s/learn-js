export function insertAt (string, index, substring) { 
  return string.substr(0, index) + substring + string.substr(index);
}

export function getIndentationNumberForNextLine(string, cursorIndex) {
  string = "\n" + string
  let result = 0;
  let index;
  for (index = cursorIndex; index >= 0; index--) {
    if (string[index] === "\n")
      break;
    else if (string[index] === " ")
      result++
    else 
      result = 0
  }
  // if (string[cursorIndex] === "{")
  //   result += 0;
  return result
}

export function getPairCharacter(character) {
  switch(character){
    case `{`: return `}`
    case `(`: return `)`
    case `[`: return `]`
  }
}
