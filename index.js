const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

string === string.toUpperCase();
function shout(string) {
   return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
 if(string.toLowerCase()) {
      return 'I can\'t hear you!'
     };

  if(string.toUpperCase()) {
     return 'YES INDEED!'
  }
  if(string = 'Let\'s have dinner together!') {
      return 'I would love to!'
  }
}

   



//const checkForLowerCase = string === string.toLowerCase();
 // const checkForUpperCase = string === string.toUpperCase();

  //console.log(checkForLowerCase);
 // console.log(checkForUpperCase);
 // if (checkForLowerCase) {
   // return `This is a lower case word \n ${string}`;
 // }

  //if (checkForUpperCase) {
  //  return `This is an Upper case word \n ${string}`;
  //}