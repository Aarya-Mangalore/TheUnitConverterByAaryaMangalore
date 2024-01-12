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
		conv = 1000;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		conv = 1000000;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		conv = 1000000000;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		conv = 10;
	else if (inputtypevalue === "1" && resulttypevalue === "6")
		conv = 2204.62262;
	else if (inputtypevalue === "1" && resulttypevalue === "7")
		conv = 35273.9619;
	else if (inputtypevalue === "1" && resulttypevalue === "8")
		conv = 5000000;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		conv = 0.001;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		conv = 1000;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		conv = 1000000;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		conv = 0.01;
	else if (inputtypevalue === "2" && resulttypevalue === "6")
		conv = 2.20462262;
	else if (inputtypevalue === "2" && resulttypevalue === "7")
		conv = 35.2739619;
	else if (inputtypevalue === "2" && resulttypevalue === "8")
		conv = 5000;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		conv = 0.000001;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		conv = 0.001;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		conv = 1000;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		conv = 0.000001;
	else if (inputtypevalue === "3" && resulttypevalue === "6")
		conv = 0.00220462262;
	else if (inputtypevalue === "3" && resulttypevalue === "7")
		conv = 0.00352739619;
	else if (inputtypevalue === "3" && resulttypevalue === "8")
		conv = 5;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		conv = 0.000000001;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		conv = 0.000001;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		conv = 0.001;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		conv = 0.00000001;
	else if (inputtypevalue === "4" && resulttypevalue === "6")
		conv = 2.20462262*0.000001;
	else if (inputtypevalue === "4" && resulttypevalue === "7")
		conv = 0.0000352739619;
	else if (inputtypevalue === "4" && resulttypevalue === "8")
		conv = 0.005;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		conv = 0.1;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		conv = 100;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		conv = 100000;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		conv = 100000000;
	else if (inputtypevalue === "5" && resulttypevalue === "6")
		conv = 220.462262;
	else if (inputtypevalue === "5" && resulttypevalue === "7")
		conv = 3527.39619;
	else if (inputtypevalue === "5" && resulttypevalue === "8")
		conv = 500000;
	else if (inputtypevalue === "6" && resulttypevalue === "1")
		conv = 0.00045359237;
	else if (inputtypevalue === "6" && resulttypevalue === "2")
		conv = 0.45359237;
	else if (inputtypevalue === "6" && resulttypevalue === "3")
		conv = 453.59237;
	else if (inputtypevalue === "6" && resulttypevalue === "4")
		conv = 453592.37;
	else if (inputtypevalue === "6" && resulttypevalue === "5")
		conv = 0.0045359237;
	else if (inputtypevalue === "6" && resulttypevalue === "7")
		conv = 16;
	else if (inputtypevalue === "6" && resulttypevalue === "8")
		conv = 2267.96185;
	else if (inputtypevalue === "7" && resulttypevalue === "1")
		conv = 0.0000283495231;
	else if (inputtypevalue === "7" && resulttypevalue === "2")
		conv = 0.0283495231;
	else if (inputtypevalue === "7" && resulttypevalue === "3")
		conv = 28.3495231;
	else if (inputtypevalue === "7" && resulttypevalue === "4")
		conv = 28349.5231;
	else if (inputtypevalue === "7" && resulttypevalue === "5")
		 conv=0.000283495231;
	else if (inputtypevalue === "7" && resulttypevalue === "6")
		conv = 0.0625;
	else if (inputtypevalue === "7" && resulttypevalue === "8")
		conv = 141.747616;
	else if (inputtypevalue === "8" && resulttypevalue === "1")
		conv = 0.0000002;
	else if (inputtypevalue === "8" && resulttypevalue === "2")
		conv = 0.0002;
	else if (inputtypevalue === "8" && resulttypevalue === "3")
		conv = 0.2;
	else if (inputtypevalue === "8" && resulttypevalue === "4")
		conv = 200;
	else if (inputtypevalue === "8" && resulttypevalue === "5")
		conv = 0.000002;
	else if (inputtypevalue === "8" && resulttypevalue === "6")
		conv = 0.000440924524;
	else if (inputtypevalue === "8" && resulttypevalue === "7")
		conv = 0.00705479239;
	result.value = input.value * conv;
}