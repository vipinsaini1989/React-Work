import React from 'react';

class ImgSlide extends React.Component {
	constructor(props){
		super(props);
		this.state={
			count: 0
			,  url :[
					'http://betunedsolutions.com/wp-content/uploads/2015/06/web-development-chandigarh.jpg'
				,
					'http://www.empyrealinfotech.com/media/web-development.jpg'
				,
					'http://anshikatechnologies.in/wp-content/uploads/2017/06/Website-Development-Company-in-Indore.jpg'
			]
		};

	}
	componentDidMount(){
		this.url = setInterval(
			()=>{this.shuffle()}
			,2000);
	}
	componentWillUnmount(){
		clearInterval(this.url);
	}

	shuffle(count){
	this.setState ({ 
		count: this.state.count === 2 ? this.state.count=0: this.state.count + 1
		 });
		}

	
	render(){
		return(
			<div>
				<div className="nameDiv">
					<div className="name">
						<h1>Vipin Kumar Saini</h1>
						<p>(Front End Developer)</p>
					</div>
				</div>
				<img src={this.state.url[this.state.count]} alt="Photo" className="slider" />
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