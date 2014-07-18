var user={firstname:"",lastname:"", age:0, sleep:0, smoke:0, drink:0, exercise:0, stress:0, happy:0 };
var hobbies=[];

function submitForm(){
	user.firstname=document.getElementById('firstname').value;
	user.lastname=document.getElementById('lastname').value;
	user.age=document.getElementById('age').value;
	user.sleep=document.getElementById('sleep').value;
	user.smoke=document.getElementById('smoke').value;
	user.drink=document.getElementById('drink').value;
	user.exercise=document.getElementById('exercise').value;
	user.stress=document.getElementById('stress').value;
	user.happy=document.getElementById('happy').value;
	alert("test");
	var i;
	for(i=0; i<20; i++){
		var num=i.toString();
		alert(num);
		var idString=num+"C";
		if(document.getElementById(idString).checked){
			hobbies.push(document.getElementById(idString).value);
			alert(hobbies.toString());
		}
	}
}

