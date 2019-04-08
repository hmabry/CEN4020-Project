var socket = io.connect('http://localhost:3000');
var config = {
    apiKey: "AIzaSyD1lj9odK753YVBGQECer5DplzZ6AYiNM8",
    authDomain: "guided-games.firebaseapp.com",
    databaseURL: "https://guided-games.firebaseio.com",
    projectId: "guided-games",
    storageBucket: "guided-games.appspot.com",
    messagingSenderId: "887475943898"
};
firebase.initializeApp(config);
  
//function to create user modelled after class example
function sign_up(event)
{
	event.preventDefault();
	
	const form = event.target;
	const email = form.Email.value;
	const password = form.password.value;
	const password2 = form.password2.value;
	const username = form.username.value;
	
	console.log(email);
	console.log(password);
	
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error){
		var errorCode = error.code;
		var errorMessage = error.message;
		console.log(errorCode);
		console.log(errorMessage);
	});
	
}

document.querySelector('#register').addEventListener('submit', sign_up);