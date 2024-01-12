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
		conv = 1;
	else if (inputtypevalue === "1" && resulttypevalue === "2")
		conv = 3.6;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		conv = 0.001;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		conv = 2.23693629;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		conv = 39.3700787;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		conv = 0.277777778;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		conv = 0.00027778;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		conv = 0.621371192;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		conv = 10.936133;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		conv = 1000;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		conv = 3600;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		conv = 2236.93629;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		conv = 39370.0787;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		conv = 0.00704;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		conv = 1.609344;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		conv = 0.00044704;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		conv = 17.6;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		conv = 0.0254;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		conv = 0.09144;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		conv = 0.0000254;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		conv = 0.0568181819;


	result.value = input.value * conv;
}