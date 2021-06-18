const firebase = require("firebase");
const { firebaseConfig } = require("./config");

firebase.initializeApp(firebaseConfig); //initializing Firebase App

const users = [
	{ email: "umair.jibran@productbox.dev", password: "123456" },
	{ email: "test@mail.com", password: "123456" },
	{ email: "test1@mail.com", password: "123456" },
];

/**
 * Create User Acount on Firebase
 *
 * Generate a Password Reset Link After account Creation
 
*/
users.forEach(async user => {
	await firebase
		.auth()
		.createUserWithEmailAndPassword(user.email, user.password)
		.then(creds => console.log(creds))
		.catch(err => console.log(err));

	await firebase.auth().sendPasswordResetEmail(user.email);
});
