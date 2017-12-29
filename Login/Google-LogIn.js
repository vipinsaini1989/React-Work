import React from 'react';
// import {auth, googleProvider} from 'firebase';
// import firebase from 'firebase';
//import * as firebase from 'firebase';
//firebase.initializeApp();

import firebase from 'firebase';
require ('firebase/firestore');


var config = {
    apiKey: "AIzaSyACv_X3aqi4QySHcafmRNXCPgQPhVVrX6Y",
    authDomain: "login-14a2b.firebaseapp.com",
    databaseURL: "https://login-14a2b.firebaseio.com",
    projectId: "login-14a2b",
    storageBucket: "",
    messagingSenderId: "228651249073"
  };
  firebase.initializeApp(config);

   const auth = firebase.auth();
   const googleProvider = new firebase.auth.GoogleAuthProvider();

class SignIn extends React.Component{
	constructor(){
		super();
		this.userLogin = this.userLogin.bind(this);
		this.userSignUp = this.userSignUp.bind(this);

	}

	async userLogin(e){
		e.preventDefault();
		if(this.email.value && this.password.value){
			await firebase.auth()
 						  .signInWithEmailAndPassword(this.email.value,this.password.value)
 						  .catch(e => console.log(e.message)
				);
			
		}

	}

	async userSignUp(e){
		e.preventDefault();
		if(this.email.value && this.password.value){
			await firebase.auth()
						  .createUserWithEmailAndPassword(this.email.value, this.password.value)
						  .catch(e => console.log(e.message)
						 );
		
			firebase.auth().onAuthStateChanged(firebaseUser => {
				if(firebaseUser){
					console.log(firebaseUser);
					this.refs.btn.classList.remove('is-hidden');
				}else {
					console.log('not logged in');
					this.refs.btn.classList.add('is-hidden');
				}
			});
		}
	}

	signOut(e){
		firebase.auth().signOut();
	}
	// userLogin = (e)=>{
	// 	console.log(this.email.value);
	// 	console.log(this.password.value);
	// }
	render(){
		return(
  			

			<div Style={"text-align: center; padding: 5%;"}>
				<h2> Log In </h2>
				<input type="email" 
					   placeholder="Email" 
					   className="input"
					   Style={"width: 24%;"}
					   ref={input => this.email = input}/>
				<br /><br />
				<input type="password" 
					   placeholder="Password" 
					   className="input"
					   Style={"width: 24%;"}
					   ref={input => this.password = input}/>
				<br /><br />
				<button className="button" 
						Style={"width: 24%;"} 
						onClick={this.userLogin}> Sign In </button>
				 <br />
				<p> No Account ? &nbsp;
				<a onClick={this.userSignUp} > Sign Up </a>
				</p>
				 <br />
				 <span>----------- </span>
				 <span>or </span> 
				 <span>----------- </span>
				 <br /><br />
				 <button 
				 	onClick={( ) => auth.signInWithPopup(googleProvider)}
				    className ="button is-link is-medium" >
				    <span class="icon">
				      <i class="fa fa-google"></i>
				    </span>
				    <span>Sign in with Google</span>
				 </button>
				 <br /><br />
				 <button className="button is-hidden" 
				 		 Style={"width: 24%;"} 
				 		 ref="btn"
				 		 onClick={this.signOut}>
				    Sign out
				 </button>
				 
			</div>
			);
	}
}

export default SignIn;