function rot13(str) {
  
  //Dictionary of values
  const key = {
    'N' : 'A',
    'O' : 'B',
    'P' : 'C',
    'Q' : 'D',
    'R' : 'E',
    'S' : 'F',
    'T' : 'G',
    'U' : 'H',
    'V' : 'I',
    'W' : 'J',
    'X' : 'K',
    'Y' : 'L',
    'Z' : 'M',
    'A' : 'N',
    'B' : 'O',
    'C' : 'P',
    'D' : 'Q',
    'E' : 'R',
    'F' : 'S',
    'G' : 'T',
    'H' : 'U',
    'I' : 'V',
    'J' : 'W',
    'K' : 'X',
    'L' : 'Y',
    'M' : 'Z'
  }
  
  //Convert string to array
  let stringArray = str.split("");

  //function for replacing using the dictionary
  function trans(array){
    return [].reduce.call(array, (transcribed, char, index) => {
      return transcribed +=  (key[char] || char);
      },'');
  }

 let tranString = trans(stringArray);
 

  return tranString;
}

rot13("SERR PBQR PNZC");
