module.exports = function toReadable (number) {
  let arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrayOfStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrayOfStringsException = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayOfInitialNumber = Array.from(String(number));
  let length = String(number).length;
  //let teen = 'teen';
  let stringFinished = '';
  if (length == 1){ // проверка числа намбер на соответствие промежутку 0-9
    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] == number){
            stringFinished = arrayOfStrings[i];
            break;
        }
    }
  } else if (length == 2){ // начинается проверка на двузначные числа
    if (number >= 10 && number <= 20){ // начинаю с проверки на строки-исключения для прежутка 10-20
      switch(number){
        case 10: stringFinished = arrayOfStringsException[0];
          break;
        case 11: stringFinished = arrayOfStringsException[1];
          break;
        case 12: stringFinished = arrayOfStringsException[2];
          break;
        case 13: stringFinished = arrayOfStringsException[3];
          break;
        case 14: stringFinished = arrayOfStringsException[4];
          break;
        case 15: stringFinished = arrayOfStringsException[5];
          break;
        case 16: stringFinished = arrayOfStringsException[6];
          break;
        case 17: stringFinished = arrayOfStringsException[7];
          break;
        case 18: stringFinished = arrayOfStringsException[8];
          break;
        case 19: stringFinished = arrayOfStringsException[9];
          break;
        // по идее закончила с промежутком 0-19
      }
  } 
}
return stringFinished;
}
