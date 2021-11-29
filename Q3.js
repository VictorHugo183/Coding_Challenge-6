/*Question 3: Write a function that converts HEX to RGB.
Then Make that function auto-dect the formats so that 
if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.
 example RGB conversion = converter("rgb(0,255,14)");
 example HEX conversion = converter("#00FF0E");*/

const converter = (value) => {
	return value[0] === '#' ? convertToRgb(value) : convertToHex(value)
}

const convertToRgb = (value) => {
	value = value.split("#").pop();
	let red = parseInt((value[0] + value[1]), 16);
	let green = parseInt((value[2] + value[3]), 16);
	let blue = parseInt((value[4] + value[5]), 16);
	let rgb = `rgb(${red},${green},${blue})`;
	return rgb;
}

const convertToHex = (value) => {
 value = value.split("(").pop().split(")")[0].split(","); //"rgb(0,255,14)" -> ["0","255","14"]
 let numberValues = value.map(item => parseInt(item, 10)); //["0","255","14"] -> [0,255,14]
 let hexValue = "#";
 for(let i=0; i < numberValues.length; i++){ //build hexValue string and add trailing zeros where necessary.
 	numberValues[i].toString(16).length === 1 ?
 		hexValue = `${hexValue}0${numberValues[i].toString(16)}`
 		:
 		hexValue = `${hexValue}${numberValues[i].toString(16)}`
 }
 return hexValue;
}