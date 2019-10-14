import React from 'react';
import ReactDOM from 'react-dom';
import Commenting from './comment';
import Season from './season';
import Spinner from './spinner';

/*const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err)=> console.log(err)
	);
	return (
	  <div className="ui container comments">
	  
			<Commenting author="api" />
			<Season />
		 <div className = "ui container comments">
			<Commenting author= "catalyst" />
		 </div>
	 </div>
	);
};*/

class App extends React.Component{

	state={lat:null , long:null, errorMessage:''};
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({lat:position.coords.latitude, long:position.coords.longitude}),
			error => this.setState({errorMessage: error.message})
		);
	}

	
	render(){
		if( this.state.errorMessage && !this.state.lat){
			return <div>Error : {this.state.errorMessage}</div>;
		}
		if( !this.state.errorMessage && this.state.lat){
			//return <div>Latitude : {this.state.lat}</div>;
			return <Season lat={this.state.lat} />
		}

		return <Spinner message="Please Grant Access To Get Your Location" />;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));