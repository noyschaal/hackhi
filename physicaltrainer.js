
function saveInfo() {
	var firstName = document.getElementById('first');
	var lastName = document.getElementById('last');
	var age = document.getElementById('age');
	var height = document.getElementById('height');
	var weight = document.getElementById('weight');
	var gender = document.getElementById('gender');
}


function calcBMI() {
      var height = document.getElementById('height');
      var weight = document.getElementById('weight');

      var bmi = (weight * 703) / (height * height);
      return bmi;

      