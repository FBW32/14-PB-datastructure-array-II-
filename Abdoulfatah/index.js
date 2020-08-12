// first question:
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let biggestCity = euroCities[1]; 

console.log(euroCities);
console.log(biggestCity);

// second question:
euroCities[0] = "Berlin";
console.log(euroCities);

// third question:
console.log(euroCities.length);

// fourth question:
delete euroCities[euroCities.length -1];
console.log(euroCities);

// fifth question:
euroCities[euroCities.length] = "Budapest";
console.log(euroCities);

// sixth question:
delete euroCities[1];
delete euroCities[2];
console.log(euroCities);

// seventh question:
let asianCities = [ ...euroCities];
console.log(asianCities);