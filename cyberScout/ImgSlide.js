import React from 'react';

class ImgSlide extends React.Component {
	constructor(props){
		super(props);
		this.state={
			count: 0
			,  url :[
					'https://indiansenses.files.wordpress.com/2011/04/21-pursuit-play-private-school-rewalsar.jpg'
				,
					'http://myonetenth.org/wp-content/uploads/2015/05/slide-banner-052.jpg'
				,
					'http://nebula.wsimg.com/a1f68b86af36d910ce14ac8480f70887?AccessKeyId=7C6A65CA9473E5108CBF&disposition=0&alloworigin=1'
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

	
	render(){
		return(
			<div>
				<div >&#10094;</div>
				<div >&#10095;</div>
				<div>
					<h1> {this.state.count}/2 </h1>
					<img src={this.state.url[this.state.count]} alt="Photo" className="" />
				</div>
			</div>
			);
	}
}

export default ImgSlide;