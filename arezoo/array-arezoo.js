//1
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
console.log(euroCities);
let secondItem = euroCities[1];
console.log(secondItem);

//2
euroCities[0] = "Berlin";
console.log(euroCities);

//3
let lenghtArry = euroCities.length;
console.log(lenghtArry);
//4
euroCities.pop();
console.log(euroCities);

//5
euroCities.push("Budapest");
console.log(euroCities);

//6
euroCities.splice(1, 2);
console.log(euroCities);

//7
let asianCities = [];
console.log(asianCities);
//clone
let newCities = asianCities.slice(0);
console.log(newCities);
