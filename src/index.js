module.exports = function toReadable (number) {
  let arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrayOfStrings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let length = String(number).length;
  let stringFinished = '';
  if (length == 1){ // проверка числа намбер на соответствие промежутку 0-9
    for (let i = 0; i < arrayOfNumbers.length; i++){
        if (arrayOfNumbers[i] == number){
            stringFinished = arrayOfStrings[i];
            break;
        }
    }
  } else return 'length no 1'; // пока не прописываю код для десятков и сотен
  return stringFinished;
}
