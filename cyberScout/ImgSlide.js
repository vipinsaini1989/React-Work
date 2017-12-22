import React from 'react';

class ImgSlide extends React.Component {
	constructor(props){
		super(props);
		this.state={
			count: 0
			,  url :[
					'https://www.whatsuplife.in/gurgaon/blog/wp-content/uploads/2017/11/NGO-gurgaon.jpg'
				,
					'https://childngoinindia.files.wordpress.com/2017/03/cropped-education-for-a-bright-future-tw.jpg'
				,
					'http://www.childrightsconnect.org/wp-content/uploads/2013/10/holdinghands-PS-e1382112050807.jpg'
			]
		};

	}
	componentDidMount(){
		this.url = setInterval(
			()=>{this.shuffle()}
			,3000);
	}
	componentWillUnmount(){
		clearInterval(this.url);
	}

	shuffle(count){
	this.setState ({ 
		count: this.state.count === 2 ? this.state.count=0: this.state.count + 1
		 });
		}

	backward(e){
		this.setState({
			count: this.state.count === 0 ? this.state.count=2: this.state.count - 1
		})
	}

	forward(e){
		this.setState({
			count: this.state.count === 2 ? this.state.count=0: this.state.count + 1
		})
	}
	render(){
		return(
			<div>
				<section className="hero is-medium">
					<div className="left" onClick={(e)=> this.backward(e)}>&#10094;</div>
					<div className="right" onClick={(e)=> this.forward(e)}>&#10095;</div>
					<div className="count"> {this.state.count}/2 </div>
					<img src={this.state.url[this.state.count]} alt="Photo" className="slider" />
				</section>
			</div>
			);
	}
}

export default ImgSlide;

/*  
(style file attach to the carosel)


.slider {
	height: 400px;
 	
}
.left {
	position: absolute;
	margin-top: 10%;
	padding: 15px;
	color: white;
	background-color: rgba(0,0,0,0.3);
	border-radius: 0 10px 10px 0;
}
.right {
	position: absolute;
	padding: 15px;
	margin-top: 10%;
	margin-left: 97%;
	color: white;
	background-color: rgba(0,0,0,0.3);
	border-radius: 10px 0 0 10px;

}
.count {
	position: absolute;
	color: white;
}
   */