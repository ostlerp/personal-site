import React from 'react';
import Navigation from '../../components/Navigation';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navigation />
			</div>
		);
	}
}

App.propTypes = {

};

export default App;