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
		conv = 0.0009765625;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		conv = 0.000000953674;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		conv = 0.0000000009313225;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		conv = 0.0000000000009094702;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		conv = 1024;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		conv = 0.0009765625;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		conv = 0.000000953674316;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		conv = 0.000000000931322575;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		conv = 1048576;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		conv = 1024;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		conv = 0.0009765625;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		conv = 0.000000953674316;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		conv = 1073741820;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		conv = 1048576;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		conv = 1024;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		conv = 0.00097656225;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		conv = 1099511630000;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		conv = 1073741820;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		conv = 1048576;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		conv = 1024;


	result.value = input.value * conv;
}