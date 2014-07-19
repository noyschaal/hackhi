var person = {
	height:"",
	weight:"",	
};

function saveInfo() {

	if(document.getElementById('myForm').checkValidity()=== false)
	{
		return false;
	}

	// person.firstName = document.getElementById('first').value;
	// person.lastName = document.getElementById('last').value;
	// person.age = document.getElementById('age').value;
	// person.tall = document.getElementById('height').value;
	// person.weight = document.getElementById('weight').value;
	// person.gender = document.getElementById('gender').value;
	return true;

}


function calcBMI() {
      person.height = document.getElementById('height').value;
      person.weight = document.getElementById('weight').value;
      var bmi = (person.weight * 703) / (person.height * person.height);

      document.getElementById('bmi').innerText=" Your BMI is " + Math.round(bmi*10)/10;
     return false;
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

// function getPersonFromQuerystring() {
	
// }



function calories()
{    
    var person = querySt();
    var test = 0;
    document.getElementById('first').innerText = person.first;
    document.getElementById('last').innerText = person.last;
    document.getElementById('age').innerText = person.age;
    document.getElementById('height').innerText = person.height;
    document.getElementById('weight').innerText = person.weight;
    document.getElementById('gender').innerText = person.gender;
 
    var bmr = 0;
    if(person.gender ==="Male")
    {
        bmr = 66 + (6.3 * person.weight) + (12.9 * person.height) - (6.9 * person.age);
    }
    else
    {
        bmr = 655 + (4.3 * person.weight) + (4.7 * person.height) - (4.7 * person.age);
    }
    document.getElementById('bmr').innerText = Math.round(bmr);

    var calories;
    switch(person.activity)
    {
        case 'Sedentary':
        {
            calories = bmr + (bmr * 0.2);
            break;
        }
        case 'lightly+active':
        {
            calories = bmr + (bmr * 0.3);
            break;
        }
        case 'moderately+active':
        { 
            calories = bmr + (bmr * 0.4);
            break;
        }
        case 'very+active':
        {
            calories = bmr + (bmr * 0.5);
            break;
        }
        case 'extra+active':
        {
            calories = bmr + (bmr * 0.6);
            break;
        }      
        default:
        {
            alert("I'm broken");
            break;
        }
    }

    document.getElementById('calories').innerText = Math.round(calories);
   // var Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday;
    var bmi = (person.weight * 703) / (person.height * person.height);
    var bmiRound = Math.round(bmi*10) / 10;
    document.getElementById('bmi').innerText = bmiRound;
    
    
    if(bmi < 18.5)
    {
        if(person.hours < 1)
        {
            document.getElementById('Monday').innerText = "15 minutes of biceps and back lifting exercises";
            document.getElementById('Tuesday').innerText= "15 minutes of triceps and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "15 minutes of shoulders and abs exercises";
            document.getElementById('Thursday').innerText= "15 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "15 minutes of running/jogging";
        }
        else if(person.hours <= 5)
        {
            document.getElementById('Monday').innerText = "45 minutes of biceps and back lifting exercises";
            document.getElementById('Tuesday').innerText = "45 minutes of triceps and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "45 minutes of shoulders and abs exercises";
            document.getElementById('Thursday').innerText = "45 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging" ;
        }
        else if(person.hours <= 10)
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
           document.getElementById('Friday').innerText  = "75 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
        else
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText  = "75 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
    }
    else if(bmi < 24.9)
    {
        
        if(person.hours < 1)
        {
            document.getElementById('Monday').innerText = "15 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "15 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "15 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "15 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "15 minutes of running/jogging and abs exercises";
        }
        else if(person.hours <= 5)
        {
            
            document.getElementById('Monday').innerText = "45 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "45 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "45 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "45 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging and abs exercises"; 
        }
        else if(person.hours <= 10)
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "75 minutes of running/jogging and abs exercises";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
        else
        {
            document.getElementById('Sunday').innerText= "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "75 minutes of running/jogging and abs exercises";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
    }
    else if(bmi < 29.9)
    {
         if(person.hours < 1)
        {
            document.getElementById('Monday').innerText = "15 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "15 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "15 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "15 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "15 minutes of running/jogging and abs exercises";
        }
        else if(person.hours <= 5)
        {
            document.getElementById('Sunday').innerText = "45 minutes of running/jogging";
            document.getElementById('Monday').innerText = "45 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "45 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "45 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "45 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging and abs exercises"; 
        }
        else if(person.hours <= 10)
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "75 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
        else
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of biceps, abs, and back lifting exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of triceps, shoulders, and chest lifting exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of shoulders, biceps, and abs exercises";
            document.getElementById('Thursday').innerText = "60 minutes of leg exercises/Plyometrics";
            document.getElementById('Friday').innerText = "75 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
    }
    else
    {
         if(person.hours < 1)
        {
            document.getElementById('Monday').innerText = "15 minutes of light jogging";
            document.getElementById('Tuesday').innerText = "15 minutes of light jogging";
            document.getElementById('Wednesday').innerText = "15 minutes arms and abs exercises";
            document.getElementById('Thursday').innerText = "15 minutes legs/Plyometrics exercises";
            document.getElementById('Friday').innerText = "15 minutes of light jogging";
        }
        else if(person.hours <= 5)
        {
            document.getElementById('Sunday').innerText = "45 minutes of light jogging";
            document.getElementById('Monday').innerText = "45 minutes of light jogging and abs exercises";
            document.getElementById('Tuesday').innerText = "45 minutes of arms and abs exercises";
            document.getElementById('Wednesday').innerText = "45 minutes of legs/Plyometrics exercises";
            document.getElementById('Thursday').innerText = "45 minutes of light jogging";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging and abs exercises"; 
        }
        else if(person.hours <= 10)
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of running/jogging and abs exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of arms and abs exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of running/jogging";
            document.getElementById('Thursday').innerText = "60 minutes of legs/Plyometrics exercises";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
        else
        {
            document.getElementById('Sunday').innerText = "60 minutes of running/jogging";
            document.getElementById('Monday').innerText = "60 minutes of running/jogging and abs exercises";
            document.getElementById('Tuesday').innerText = "60 minutes of arms and abs exercises";
            document.getElementById('Wednesday').innerText = "60 minutes of running/jogging";
            document.getElementById('Thursday').innerText = "60 minutes of legs/Plyometrics exercises";
            document.getElementById('Friday').innerText = "60 minutes of running/jogging";
            document.getElementById('Saturday').innerText = "90 minutes of any sport of preference";
        }
    }
 }


      