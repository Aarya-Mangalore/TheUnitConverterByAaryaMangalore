var input = document.getElementById('input');
var result = document.getElementById('result');
var inputtype = document.getElementById('inputtype');
var resulttype = document.getElementById('resulttype');
var inputtypevalue, resulttypevalue,conv;

input.addEventListener("keyup", myresult);
inputtype.addEventListener("change", myresult);
resulttype.addEventListener("change", myresult);


function myresult() {
	inputtypevalue = inputtype.value;
	resulttypevalue = resulttype.value;

	if (inputtypevalue === resulttypevalue)
		conv = 1;
	else if (inputtypevalue === "1" && resulttypevalue === "2")
		conv = 100;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		conv = 1000;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		conv = 0.001;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		conv = 0.0006213712;
	else if (inputtypevalue === "1" && resulttypevalue === "6")
		conv = 39.37;
	else if (inputtypevalue === "1" && resulttypevalue === "7")
		conv = 3.28084;
	else if (inputtypevalue === "1" && resulttypevalue === "8")
		conv = 0.0005399568;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		conv = 0.01;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		conv = 10;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		conv = 0.00001;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		conv = 0.000006214;
	else if (inputtypevalue === "2" && resulttypevalue === "6")
		conv = 0.393700787;
	else if (inputtypevalue === "2" && resulttypevalue === "7")
		conv = 0.0328084;
	else if (inputtypevalue === "2" && resulttypevalue === "8")
		conv = 0.00000534;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		conv = 0.001;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		conv = 0.1;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		conv = 0.000001;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		conv = 0.0000006214;
	else if (inputtypevalue === "3" && resulttypevalue === "6")
		conv = 0.03937;
	else if (inputtypevalue === "3" && resulttypevalue === "7")
		conv = 0.00328084;
	else if (inputtypevalue === "3" && resulttypevalue === "8")
		conv = 0.00000054;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		conv = 1000;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		conv = 100000;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		conv = 1000000;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		conv = 0.6213712;
	else if (inputtypevalue === "4" && resulttypevalue === "6")
		conv = 39370.0787;
	else if (inputtypevalue === "4" && resulttypevalue === "7")
		conv = 3280.84;
	else if (inputtypevalue === "4" && resulttypevalue === "8")
		conv = 0.539956803;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		conv = 1609.344;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		conv = 160934.4;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		conv = 1609344;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		conv = 1.609344;
	else if (inputtypevalue === "5" && resulttypevalue === "6")
		conv = 63360;
	else if (inputtypevalue === "5" && resulttypevalue === "7")
		conv = 5380;
	else if (inputtypevalue === "5" && resulttypevalue === "8")
		conv = 0.868976242;
	else if (inputtypevalue === "6" && resulttypevalue === "1")
		conv = 0.0254;
	else if (inputtypevalue === "6" && resulttypevalue === "2")
		conv = 2.54;
	else if (inputtypevalue === "6" && resulttypevalue === "3")
		conv = 25.4;
	else if (inputtypevalue === "6" && resulttypevalue === "4")
		conv = 0.0000254;
	else if (inputtypevalue === "6" && resulttypevalue === "5")
		conv = 0.000015782;
	else if (inputtypevalue === "6" && resulttypevalue === "7")
		conv = 0.0833333334;
	else if (inputtypevalue === "6" && resulttypevalue === "8")
		conv = 0.0000137149;
	else if (inputtypevalue === "7" && resulttypevalue === "1")
		conv = 0.3048;
	else if (inputtypevalue === "7" && resulttypevalue === "2")
		conv = 30.48;
	else if (inputtypevalue === "7" && resulttypevalue === "3")
		conv = 304.8;
	else if (inputtypevalue === "7" && resulttypevalue === "4")
		conv = 0.0003048;
	else if (inputtypevalue === "7" && resulttypevalue === "5")
		conv = 0.00018939394;
	else if (inputtypevalue === "7" && resulttypevalue === "6")
		conv = 12;
	else if (inputtypevalue === "7" && resulttypevalue === "8")
		conv = 0.0001645788;
	else if (inputtypevalue === "8" && resulttypevalue === "1")
		conv = 1852;
	else if (inputtypevalue === "8" && resulttypevalue === "2")
		conv = 185200;
	else if (inputtypevalue === "8" && resulttypevalue === "3")
		conv = 1852000;
	else if (inputtypevalue === "8" && resulttypevalue === "4")
		conv = 1.852;
	else if (inputtypevalue === "8" && resulttypevalue === "5")
		conv = 1.15077945;
	else if (inputtypevalue === "8" && resulttypevalue === "6")
		conv = 72913.3858;
	else if (inputtypevalue === "8" && resulttypevalue === "7")
		conv = 6076.11549;
	result.value = input.value *conv;
}