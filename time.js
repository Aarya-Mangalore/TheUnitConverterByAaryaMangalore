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
		conv = 52.1428571;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		conv = 365;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		conv = 8760;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		conv = 525600;
	else if (inputtypevalue === "1" && resulttypevalue === "6")
		conv = 31536000;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		conv = 0.0191780822;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		conv = 7;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		conv = 168;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		conv = 10080;
	else if (inputtypevalue === "2" && resulttypevalue === "6")
		conv = 604800;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		conv = 0.00273972603;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		conv = 0.142857143;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		conv = 24;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		conv = 1440;
	else if (inputtypevalue === "3" && resulttypevalue === "6")
		conv = 86400;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		conv = 0.000114155251;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		conv = 0.00595238095;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		conv = 0.041666667;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		conv = 60;
	else if (inputtypevalue === "4" && resulttypevalue === "6")
		conv = 3600;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		conv = 0.00000190258;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		conv = 0.00009920635;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		conv = 0.00069444444;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		conv = 0.016666667;
	else if (inputtypevalue === "5" && resulttypevalue === "6")
		conv = 60;
	else if (inputtypevalue === "6" && resulttypevalue === "1")
		conv = 0.00000003171;
	else if (inputtypevalue === "6" && resulttypevalue === "2")
		conv = 0.00000165344;
	else if (inputtypevalue === "6" && resulttypevalue === "3")
		conv = 0.0000115740741;
	else if (inputtypevalue === "6" && resulttypevalue === "4")
		conv = 0.00027778;
	else if (inputtypevalue === "6" && resulttypevalue === "5")
		conv = 0.016666667;


	result.value = input.value * conv;
}