import React, {Component} from 'react';
import firebase from 'firebase';
import {db,auth,storage} from '../firebase';

class Gallery extends React.Component{
	constructor(){
		super();
		this.state= {
			photoUrl : null,
			name: null
		};
	}
	componentDidMount(){
		storage
			.ref('photoGallery')
			.child('54')
			.getDownloadURL()
			.then(photoUrl => {
				console.log(photoUrl);
				this.setState({photoUrl});
			});
	}
	UploadTheFile= (file)=>{
		console.log(file);
		storage
			.ref('photoGallery')
			.child('54')
			.put(file,{contentType: file.type});

	};

	render(){
		return(
			<div>
				<h1> {this.state && this.state.name} </h1>
				<input 
				type="file" 
				className="button is-primary is-inverted" 
				onChange={event => this.UploadTheFile(event.target.files[0]) }
				/>
				<figure >
				  <img src={this.state.photoUrl} />
				</figure>
			</div>
			);
	}
}


export default Gallery;