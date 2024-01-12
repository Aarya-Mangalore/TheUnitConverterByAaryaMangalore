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
		result.value = input.value * 750.1;
	else if (inputtypevalue === "1" && resulttypevalue === "3")
		result.value = input.value / 1.013;
	else if (inputtypevalue === "1" && resulttypevalue === "4")
		result.value = input.value * 100000;
	else if (inputtypevalue === "1" && resulttypevalue === "5")
		result.value = input.value * 750.1;
	else if (inputtypevalue === "1" && resulttypevalue === "6")
		result.value = input.value * 14.5038;
	else if (inputtypevalue === "2" && resulttypevalue === "1")
		result.value = input.value / 750.1;
	else if (inputtypevalue === "2" && resulttypevalue === "3")
		result.value = input.value / 760;
	else if (inputtypevalue === "2" && resulttypevalue === "4")
		result.value = input.value * 133.3;
	else if (inputtypevalue === "2" && resulttypevalue === "5")
		result.value = input.value;
	else if (inputtypevalue === "2" && resulttypevalue === "6")
		result.value = input.value / 51.715;
	else if (inputtypevalue === "3" && resulttypevalue === "1")
		result.value = input.value * 1.013;
	else if (inputtypevalue === "3" && resulttypevalue === "2")
		result.value = input.value * 760;
	else if (inputtypevalue === "3" && resulttypevalue === "4")
		result.value = input.value * 101300;
	else if (inputtypevalue === "3" && resulttypevalue === "5")
		result.value = input.value * 760;
	else if (inputtypevalue === "3" && resulttypevalue === "6")
		result.value = input.value * 14.696;
	else if (inputtypevalue === "4" && resulttypevalue === "1")
		result.value = input.value / 100000;
	else if (inputtypevalue === "4" && resulttypevalue === "2")
		result.value = input.value / 133.3;
	else if (inputtypevalue === "4" && resulttypevalue === "3")
		result.value = input.value / 101300;
	else if (inputtypevalue === "4" && resulttypevalue === "5")
		result.value = input.value / 133.3;
	else if (inputtypevalue === "4" && resulttypevalue === "6")
		result.value = input.value / 6895;
	else if (inputtypevalue === "5" && resulttypevalue === "1")
		result.value = input.value / 750.1;
	else if (inputtypevalue === "5" && resulttypevalue === "3")
		result.value = input.value / 760;
	else if (inputtypevalue === "5" && resulttypevalue === "4")
		result.value = input.value * 133.3;
	else if (inputtypevalue === "5" && resulttypevalue === "2")
		result.value = input.value;
	else if (inputtypevalue === "5" && resulttypevalue === "6")
		result.value = input.value / 51.715;
	else if (inputtypevalue === "6" && resulttypevalue === "1")
		result.value = input.value / 14.504;
	else if (inputtypevalue === "6" && resulttypevalue === "2")
		result.value = input.value * 51.715;
	else if (inputtypevalue === "6" && resulttypevalue === "3")
		result.value = input.value / 14.696;
	else if (inputtypevalue === "6" && resulttypevalue === "4")
		result.value = input.value * 6895;
	else if (inputtypevalue === "6" && resulttypevalue === "5")
		result.value = input.value * 51.715;

}