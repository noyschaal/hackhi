
var person = {
	// first:"",
	// last:"",
	// age:"",
	height:"",
	weight:"",
	// gender:"",
	// hours:"",
	// activity:""	
};

function saveInfo() {

	if(document.getElementById('myForm').checkValidity()=== false)
	{
		return false;
	}

	// person.first = document.getElementById('first').value;
	// person.last = document.getElementById('last').value;
	// person.age = document.getElementById('age').value;
	// person.height = document.getElementById('height').value;
	// person.weight = document.getElementById('weight').value;
	// person.gender = document.getElementById('gender').value;
	// person.hours = document.getElementById('hours').value;
	// person.activity = document.getElementsByName('activity').value;
	alert("data has been saved");
	return true;

}

function calcBMI() {
      person.height = document.getElementById('height').value;
      person.weight = document.getElementById('weight').value;
      var bmi = (person.weight * 703) / (person.height * person.height);
      alert("Test");
      document.getElementById('bmi').innerText="Your bmi is " + Math.round(bmi*10)/10;
     return false;
}





      