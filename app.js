export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function reverseString (string) {
  return string.split('').reverse().join('')
}


export function calculator () {
  function add (a,b) {
    return a +b;
  }

  function subtract (a,b) {
    return a - b;
  }

  function divide (a,b) {
    return a / b;
  }

  function multiply (a,b) { 
    return a * b;
  }

  return {
    add,
    subtract,
    divide,
    multiply
  }
}

export function caesarCipher(text, shiftAmount) {
  let encrypted = '';
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      // Uppercase letters
      const shiftedCode = (charCode - 65 + shiftAmount) % 26 + 65;
      encrypted += String.fromCharCode(shiftedCode);
    } else if (charCode >= 97 && charCode <= 122) {
      // Lowercase letters
      const shiftedCode = (charCode - 97 + shiftAmount) % 26 + 97;
      encrypted += String.fromCharCode(shiftedCode);
    } else {
      // Punctuation, numbers, and other characters
      encrypted += text.charAt(i);
    }
  }
  return encrypted;
}
export function analyzeArray (array) {

  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;
  const sum = array.reduce((total, num) => total + num);
  const avg = sum / length;
  return { average: avg, min: min, max: max, length: length };
}
