

function querySt() {
	var url = window.location.href, test = {};
	KeysValues = url.split(/[\?&]+/);
	for (i = 0; i < KeysValues.length; i++) {
		KeyValue = KeysValues[i].split("=");
		test[KeyValue[0]] = unescape(KeyValue[1]);
	}
	return test;
}

function calculateStressLevel() {
	var person = querySt();

	var ageSum=0;
	if (person.age >= 94) {
		ageSum = ageSum + 5;
	} else if (person.age < 94 && person.age >= 78) {
		ageSum = ageSum + 6;
	} else if (person.age < 78 && person.age >= 62) {
		ageSum = ageSum + 7;
	} else if (person.age < 62 && person.age >= 46) {
		ageSum = ageSum + 3;
	} else if (person.age < 46 && person.age >= 30) {
		ageSum = ageSum + 5;
	} else if (person.age < 30 && person.age >= 19) {
		ageSum = ageSum + 10;
	} else {
		ageSum = ageSum + 7;
	}
	
	var sleepSum = 0;
	if (person.sleep >= 19) {
		sleepSum = sleepSum + 0;
	} else if (person.sleep < 19 && person.sleep >= 17) {
		sleepSum = sleepSum + 1;
	} else if (person.sleep  < 17 && person.sleep  >= 15) {
		sleepSum = sleepSum + 4;
	} else if (person.sleep  < 15 && person.sleep  >= 13) {
		sleepSum = sleepSum + 4;
	} else if (person.sleep  < 13 && person.sleep  >= 11) {
		sleepSum = sleepSum + 5;
	} else if (person.sleep  <11 && person.sleep  >=10 ) {
		sleepSum = sleepSum + 8;
	} else if(person.sleep <10 && person.sleep >=8) {
		sleepSum = sleepSum + 10;
	}else if(person.sleep <8 && person.sleep >=7){
		sleepSum=sleepSum+8;
	}else if(person.sleep <7 && person.sleep>=5){
		sleepSum=sleepSum+5;
	}else if(person.sleep <5 && person.sleep>=3){
		sleepSum=sleepSum+4;
	}else if(person.sleep<3 && person.sleep>=1){
		sleepSum=sleepSum+2;
	}
	else{
		sleepSum=sleepSum+0;
	}
	
	var smokeSum = 0;
	if(person.smoke==0){
		smokeSum=smokeSum+10;
	}
	
	var drinkSum = 0;
	if(person.drink>=16){
		drinkSum=drinkSum+0;
	}else if(person.drink<16 && person.drink>=14){
		drinkSum=drinkSum+3;
	}else if(person.drink<14 && person.drink>=12){
		drinkSum=drinkSum+4;
	}else if(person.drink<12 && person.drink>=10){
		drinkSum=drinkSum+6;
	}else if(person.drink<10 && person.drink>=8){
		drinkSum=drinkSum+8;
	}else{
		drinkSum=drinkSum+10;
	}
	
	var exerciseSum = 0;
	if(person.exercise>=30){
		exerciseSum=exerciseSum+0;
	}else if(person.exercise<30 && person.exercise>=28){
		exerciseSum=exerciseSum+3;
	}
	else if(person.exercise<28 && person.exercise>=27){
		exerciseSum=exerciseSum+4;
	}
	else if(person.exercise<27 && person.exercise>=25){
		exerciseSum=exerciseSum+5;
	}
	else if(person.exercise<25 && person.exercise>=21){
		exerciseSum=exerciseSum+6;
	}
	else if(person.exercise<21 && person.exercise>=19){
		exerciseSum=exerciseSum+8;
	}
	else if(person.exercise<19 && person.exercise>=7){
		exerciseSum=exerciseSum+10;
	}
	else if(person.exercise<7 && person.exercise>=5){
		exerciseSum=exerciseSum+8;
	}
	else if(person.exercise<5 && person.exercise>=3){
		exerciseSum=exerciseSum+6;
	}else if(person.exercise<3 && person.exercise>=1){
		exerciseSum=exerciseSum+4;
	}else{
		exerciseSum=exerciseSum+0;
	}
	
	var stressSum = 11-person.stress;
	var happySum = person.happy-10+10;
	var totalSum = ageSum+ sleepSum + smokeSum +drinkSum + exerciseSum+happySum+stressSum;


	return totalSum;
}
function createPlan(){
	var person=querySt();
	var sum=calculateStressLevel();
	document.getElementById('sum').innerText = sum;
	document.getElementById('firstname').innerText = person.firstname;
	//var i=;
	//var hobbies[];
//	for(i=0; i<22; i++){
//		var name="hobby"+i;
//		if(person.name!=null){
//			hobbies.push(person.name);
//		}
//	}
//	alert(hobbies.toString());
	
}
