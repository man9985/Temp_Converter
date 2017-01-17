//temp converter into function Lab 6

function ConvertTemp(temp, unit) {

	if(unit === "F") {
		console.log((temp - 32) * 5/9 + " Celcius"); //F to C
	} else if(unit === "C") {
		console.log((temp * 9/5 + 32) + " Fahrenheit"); //C to F
	} else{
		console.log("Not a valid unit, please use C or F.");
	}
}



// // Lab 5
// var temp = 32;
// var convertedTemp = (temp - 32) * 5/9;
// console.log(convertedTemp);

// //pt 2

// var temp = 32;
// var unit = "F";
// var convertedTemp;

// if(unit === "F"){
// 	convertedTemp = (temp - 32) * 5/9; //F to C
// }
// else {
// 	convertedTemp = (temp * 9/5 + 32) //C to F
// }
// console.log (convertedTemp);
