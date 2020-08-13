// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

let euroCities = [
    "Paris",
    "London",
    "Valletta",
    "Prague",
    "Rome"
] 

console.log(euroCities); // [ 'Paris', 'London', 'Valletta', 'Prague', 'Rome' ]

euroCities[1] = "England";
console.log(euroCities[1]);  // euroCities[1] 

console.log(euroCities); // [ 'Paris', 'England', 'Valletta', 'Prague', 'Rome' ]



// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities[0]); //Berlin 
console.log(euroCities);  // [ 'Berlin', 'England', 'Valletta', 'Prague', 'Rome' ]


// 3. Print the length of the array "euroCities".

console.log(euroCities.length);  // 5


// 4. Remove the last item of the array "euroCities".

delete euroCities[euroCities.length -1];
console.log(euroCities); // [ 'Berlin', 'England', 'Valletta', 'Prague', <1 empty item> ]

// 5. Add "Budapest" to the euroCities array.

euroCities[5] = "Budapest";
console.log(euroCities);  // [ 'Berlin', 'England', 'Valletta', 'Prague', <1 empty item>, 'Budapest' ]


// 6. Remove the second and third items from the euroCities array.

delete euroCities[1];
delete euroCities[2];
console.log(euroCities); //  'Berlin', <2 empty items>, 'Prague', <1 empty item>, 'Budapest' ]


// 7. Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.

let asianCities = [
    "Hanoi",
    "Manila",
    "Bangkok",
    "Tokyo"
]

asianCities2 = asianCities.map(x => x);
console.log(asianCities2);  // [ 'Hanoi', 'Manila', 'Bangkok', 'Tokyo' ]


// or

let clone = asianCities.slice();
console.log(clone);   // [ 'Hanoi', 'Manila', 'Bangkok', 'Tokyo' ]

// or

let clone2 = [].concat(asianCities);
console.log(clone2);   // [ 'Hanoi', 'Manila', 'Bangkok', 'Tokyo' ]


// or 

let clone3 = [... asianCities];
console.log(clone3);   // asianCities