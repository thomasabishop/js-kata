 function convertToMd (tokenType, string) {
  let markedDown
  // Unary markdown properties:
  switch (tokenType) {
    case 'heading_3':
      markedDown = `### ${string}`
      break
    case 'bold':
      markedDown = `**${string}**`
      break
    case 'italic':
      markedDown = `_${string}_`
      break
    default:
      markedDown = `${string}`
  }
  return markedDown
}

function recurseMd(annotations, str){
   str = convertToMd(annotations[0], str);
    annotations.shift();
    if (annotations.length) {
     return recurseMd(annotations, str);
}  
return str
} 


let inputStr = 'banana'
let set = ['bold', 'italic', 'heading_3'];
let set2 = ['bold'];
let set3  = [];

console.log(recurseMd(set, inputStr));
console.log(recurseMd(set2, inputStr));
console.log(recurseMd(set3, inputStr));