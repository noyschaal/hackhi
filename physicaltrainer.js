
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

      document.getElementById('bmi').innerText="Your bmi is " + Math.round(bmi*10)/10;
     return false;
}
      