import React , {Component}from 'react';
import {auth, googleProvider} from 'firebase';
import firebase from 'firebase';

class SignIn extends React.Component{
	constructor(){
		super();
		this.userLogin = this.userLogin.bind(this);

	}

	async userLogin(e){
		e.preventDefault();
		if(this.email.value && this.password.value){
			await firebase.auth()
						  .signInWithEmailAndPassword(this.email.value, this.password.value)
						  .catch((e) => {
							console.log(e.message);
				});
			
		}

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
					   Style={"width: 20%; padding:3px;"}
					   ref={input => this.email = input}/>
				<br /><br />
				<input type="password" 
					   placeholder="Password" 
					   Style={"width: 20%; padding:3px;"}
					   ref={input => this.password = input}/>
				<br /><br />
				<button className="btn btn-default" 
						Style={"width: 20%;"} 
						onClick={this.userLogin}> Sign In </button>
				 <br /><br />
				 <span>----------- </span>
				 <span>or </span> 
				 <span>----------- </span>
				 <br /><br />
				 <button className="btn btn-primary btn-social "
				 	Style={"width: 20%;"} 
				 	onClick={( ) => auth.signInWithPopup(googleProvider)}>
				   <span className="fa fa-google"></span> Sign in with Google
				 </button>
				 <br /><br />
				 <button className="btn btn-default " Style={"width: 20%;"} >
				    Sign out
				 </button>
				 
			</div>
			);
	}
}

export default SignIn;