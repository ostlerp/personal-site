import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Hi firebase!</h1>
				<button type="button" className="btn btn-primary">Test Button</button>
			</div>
		);
	}
}

App.propTypes = {

};

export default App;