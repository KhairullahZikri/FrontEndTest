// Expected Result = true
// Direction : need to check if each of array value has value less than 91
const number = [1,29,88,37,22,'90'];

function result(number){
  let hasil = '';
  for (let i = 0; i < number.length; i++) {
    hasil = Boolean(number[i] > 9);
  }
  return hasil;
}

let test = result(number)
console.log(test)