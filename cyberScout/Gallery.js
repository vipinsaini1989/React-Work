import React, {Component} from 'react';
import {auth,storage} from '../firebase';

class Gallery extends React.Component{
	constructor(){
		super();
		this.state= {
			photoUrl : null
		};
	}
	UploadTheFile= (file)=>{
		console.log(file);
		storage
			.ref('./photoGallery')
			.child(file.name)
			.put(file,{contentType: file.type});

	};

	render(){
		return(
			<div>
				<input 
				type="file" 
				className="button is-primary is-inverted" 
				onChange={event => this.UploadTheFile(event.target.files[0]) }
				/>
				<figure >
				  <img src="https://bulma.io/images/placeholders/128x128.png" />
				</figure>
			</div>
			);
	}
}


export default Gallery;