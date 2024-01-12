var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue, resulttypevalue, conv;

input.addEventListener("keyup", myresult);
inputtype.addEventListener("change", myresult);
resulttype.addEventListener("change", myresult);


function myresult() {
	inputtypevalue = inputtype.value;
	resulttypevalue = resulttype.value;

	if (inputtypevalue === resulttypevalue)
		result.value = input.value; 
	else if (inputtypevalue === "1" && resulttypevalue === "2")
		result.value = ((input.value * 9) / 5)+32;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		result.value = parseFloat(input.value)+273.15;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		result.value = ((input.value - 32) * 5) / 9;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		result.value = (((input.value - 32) * 5) / 9)+273.15;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		result.value = input.value-273.15;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		result.value = (((input.value - 273.15) * 9) / 5)+32;
}