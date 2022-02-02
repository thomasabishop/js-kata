const testString = ` 
'foo foo\n' + 
'bar bar\n' + 
'baz baz\n' + 
'alpha alpha\n' + 
`;

function stripNotion(codeString) {
  codeString = codeString.split('+');
  codeString.map((x) => x.replace(/["']/g, ''));

  //   let x = codeString.filter((ss) => ss !== '\n');
  //   return x;
  let x = codeString[0].replace(/["']/g, '');
  //  x.replace(/(\r\n|\n|\r)/gm, '');
  return x;
}

console.log(stripNotion(testString));
