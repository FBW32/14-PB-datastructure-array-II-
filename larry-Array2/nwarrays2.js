//1.)
let euroCities = [
    "Paris","London","Amsterdam","Prague","Madrid"
]

let bigTag = ["value"];

//2.)

euroCities[0] = "Berlin";

console.log(euroCities);  // [ 'Berlin', 'London', 'Amsterdam', 'Prague', 'Madrid' ]

//3.)

console.log(euroCities.length);  // 5

//4.) 

delete euroCities[euroCities.length -1]; 

console.log(euroCities);  // [ 'Berlin', 'London', 'Amsterdam', 'Prague', <1 empty item> ]

//5.
euroCities[5] = "Budapest";

console.log(euroCities); // ['Berlin','London','Amsterdam','Prague', <1 empty item>,'Budapest']

//6.)

delete euroCities[euroCities.length -4];
console.log(euroCities); //  ['Berlin','London',<1 empty item>,'Prague',<1 empty item>,'Budapest']

delete euroCities[euroCities.length -5];
console.log(euroCities);  //[ 'Berlin', <2 empty items>, 'Prague', <1 empty item>, 'Budapest' ]

//7.)

let asianCities = [];

let asianCities2 = [
    asianCities
]

console.log(asianCities2);   //  [ [] ]