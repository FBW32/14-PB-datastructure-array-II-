let euroCities = 
[
    "Paris",
    "London",
    "Valletta",
    "Prague",
    "Rome"
]
euroCities[0]= "Berlin";
console.log(euroCities);             //[ 'Berlin', 'London', 'Valletta', 'Prague', 'Rome' ]
console.log(euroCities.length); //5

euroCities= euroCities.splice(0, (euroCities.length-1));
console.log(euroCities);       
 // [ 'Berlin', 'London', 'Valletta', 'Prague' ]

euroCities.push("Budapest");
console.log(euroCities);     
//[ 'Berlin', 'London', 'Valletta', 'Prague', 'Budapest' ]
let euroCities2= euroCities.splice(1,2); 
console.log(euroCities);
// [ 'Berlin', 'Prague', 'Budapest' ]
let asianCities = [
    'Damascus',
    'Beirut',
    'Cairo'
]
euroCities.push(asianCities);
console.log(euroCities);
 // [ 'Berlin', 'Prague', 'Budapest', [ 'Damascus', 'Beirut', 'Cairo' ] ]
///