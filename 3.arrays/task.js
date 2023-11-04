function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
return false
    }
   const compare =  arr1.every((element, index) => element === arr2[index]);
return compare
     }
// вторая задача

function getUsersNamesInAgeRange(users, gender) {
    if(  users.length === 0) {
        return 0
    }
    if (gender !== "мужской" && gender !== "женский" ) {
        return 0
    }
let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((total, age, index, users) => {
    total+=age;
    if(index === users.length - 1) {
        return total / users.length;
    }
    return total;
},0)
return result
}