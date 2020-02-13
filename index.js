const axios = require("axios");

function sum(num1, num2) {
  return num1 + num2;
}
// console.log(sum(5, 6));
function average(arr) {
  return parseFloat(arr.reduce((a, c) => a + c) / arr.length);
  // let avg = 0;
  // for (var i = 0; i < arr.length; i++) {
  //   avg += Number(arr[i]);
  // }
  // return avg / arr.length;
}
function createUser(name, age, place) {
  return {
    name,
    age,
    place
  };
}

function fetchUser() {
  return axios
    .get("https://reqres.in/api/users/2")
    .then(res => res.data.data)
    .catch(err => err.message);
}

function unionArray(arr1, arr2) {
  var obj = {};
  arr1.forEach(elem => (obj[elem] = elem));
  arr2.forEach(elem => (obj[elem] = elem));
  return Object.values(obj);
}
// console.log(unionArray([1, 2, 3], [3, 4, 5]));

module.exports = {
  sum,
  average,
  createUser,
  fetchUser,
  unionArray
};
