//1
let euroCities = ["Amsterdam", "Istanbul", "Prag", "London", "Rome", "Paris"];
console.log(euroCities);
let secondItem = euroCities[1];
console.log(secondItem);
//2
euroCities[0] = "Berlin";
console.log(euroCities);
//3
console.log(euroCities.length);
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
let asianCities = ["Istanbul", "Damascus", "Moskov"];
asianCitiesCopied = Array.from(asianCities);
console.log(asianCitiesCopied);
