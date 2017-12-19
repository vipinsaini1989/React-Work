import React from 'react';

const Header =()=>{
	return(
		<div>
			<nav className="navbar is-primary ">
			<span className="navbar-burger burger">
		            <span></span>
		            <span></span>
		            <span></span>
		         </span>
			  <div className="navbar-menu">
			    <p className="is-size-3"> Cyberscouts </p>
			    	<div className="navbar-end ">
			    		<a className="navbar-item is-size-5">Home </a>
			    		<a className="navbar-item is-size-5">Gallery </a>
			    		<a className="navbar-item is-size-5">Programme </a>
			    		<a className="navbar-item is-size-5">Connect with us </a>
			    		<span class="navbar-item">
			              <a class="button is-primary is-inverted">
			                <span>Donate</span>
			              </a>
			            </span>

			    	</div>
			   
			  </div>
			</nav>
		</div>
		);
}

export default Header;