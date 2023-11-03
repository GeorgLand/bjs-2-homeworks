function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
return false
    }
   const compare =  arr1.every((element, index) => element === arr2[index]);
return compare
     }
// вторая задача

function getUsersNamesInAgeRange(users, gender) {

function getSumOfAges (total, age){
    return total + age
 }
const initialValue = 0;
const curientGender = users.filter(user => user.gender === gender);
const curientUsersAge = curientGender.map(user => user.age);

const subTotal = curientUsersAge.reduce(getSumOfAges,initialValue)

if(users === [] && gender === "мужской") {
    return 0
}
if (gender !== "мужской" && gender !== "женский" ) {
    return 0
}

let result = subTotal / curientUsersAge.length;
return result
}

//let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((accumulator, user) => accumulator + currentValue, initialValue)
