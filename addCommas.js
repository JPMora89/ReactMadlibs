// Write a function called addCommas which accepts a number and converts it into a string formatted with commas added for readability.

function addCommas(num) {
    const strNum = num.toString();
    let result = '';
  
    for (let i = strNum.length - 1, j = 1; i >= 0; i--, j++) {
      result = strNum.charAt(i) + result;
      if (j % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }
  
    return result;
  }
  
module.exports = addCommas;