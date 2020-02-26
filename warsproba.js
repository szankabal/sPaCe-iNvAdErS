function removeChar(str){
  let word = [];
  word = str.split("");
  console.log(word);
  word.pop();
  word.shift();
  return word;
};

let word = 'asdasd';
console.log(removeChar(word));
