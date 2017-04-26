import React from 'react';

class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className="navbar navbar-default navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span>Nav</span>
                    </div>
                </div>
            </nav>
		);
	}
}

export default Navigation;