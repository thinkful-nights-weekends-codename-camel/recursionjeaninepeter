// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

function reverseString(str) {
  if (str.length === 0) {
    return '';
  }
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1))
}
reverseString('word');


