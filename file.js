// Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];
let myCity = euroCities[1];
console.log(myCity);

// Change the first item in the array to "Berlin".
euroCities[0] = "Berlin";
console.log(euroCities);

// Print the length of the array "euroCities".
console.log(euroCities.length);

// Delete the last item of the array "euroCities".
delete euroCities[euroCities.length - 1];
console.log(euroCities);
//OR
euroCities.pop();
console.log(euroCities);


// Add "Budapest" to the euroCities array.
euroCities[5] = "Budapest";
console.log(euroCities);
// or
euroCities.push("Budapest");
console.log(euroCities);

// Delete the second and third items from the euroCities array.
euroCities.splice(1,2);
console.log(euroCities);
// Create another variable named asianCities and assign an array to the variable. Clone the array asianCities.
asianCities = [
    'Mecca',
    'Tokyo',
    'Seol',
]
//Clonet la7alak
