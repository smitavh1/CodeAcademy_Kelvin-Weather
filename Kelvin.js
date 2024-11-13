//kelvin is a constant set to 293.
const  kelvin = 293;
//Converting the Kelvin to Celsius
const celsius = kelvin - 273;
// Converting into fahrenheit
let fahrenheit = celsius * (9/5) +32;
// Using floor to round off fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is TEMPERATURE degrees Fahrenheit.${fahrenheit}`);
let newtonTemp = celsius * (33/100);
roundednewTontemp = Math.floor(newtonTemp);
console.log(roundednewTontemp);