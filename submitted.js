
function getPersonFromQuerystring() {
	var person = querySt();

	document.getElementById('first').innerText = person.first;
	document.getElementById('last').innerText = person.last;
}

function querySt() {
    var url = window.location.href,
        test = {};
    KeysValues = url.split(/[\?&]+/);
    for (i = 0; i < KeysValues.length; i++) {
        KeyValue = KeysValues[i].split("=");
        test[KeyValue[0]] = unescape(KeyValue[1]);
    }
    return test;
}

// function calcBMR(person.age, person.weight, person.height, person.gender, person.activity)
//  {
//  	var bmr;
//  	if(person.gender === "Female")
//  	{
//  		bmr = 655 + (4.3 * person.weight) + (4.7 * person.height) - (4.7 * person.age)
//  	}
//  	else
// 	{
// 		bmr = 66 + (6.3 * person.weight) + (12.9 * person.height) - (6.9 * person.age)
// 	}
// 	var calories;
// 	switch(person.activity) 
// 	{
//     	case 'Sedentary':
//         	return calories = bmr * 0.2;
//         	break;
//     	case 'Lightly Active':
//         	return calories = bmr * 0.3;
//         	break;
//         case 'Moderately Active': 
//         	return calories = bmr * 0.4;
//         	break;
//         case 'Very Active':
//         	return calories = bmr * 0.5;
//         	break;
//         case 'Extra Active':
//         	return calories = bmr * 0.6;
//         	break;		
//     	default:
//         	alert("I'm broken");
//         	break;
// 	}
// }

function calcPlan(bmi,hours) 
{

}