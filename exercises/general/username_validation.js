/*
Source: https://coderbyte.com/editor/Codeland%20Username%20Validation:JavaScript
Instructions:
    * Take string as input
    * Return true if following conditions are met else false
        * The username is between 4 and 25 characters.
        * It must start with a letter. 
        * It can only contain letters, numbers, and the underscore character. 
        * It cannot end with an underscore character. 
Status: passed 
*/

function validateUsername(str) {
  const regex = /^[a-zA-Z][\w|_]+[^_]$/;
  if (str.length >= 4 && str.length <= 25 && regex.test(str)) {
    return true;
  } else {
    return false;
  }
}
