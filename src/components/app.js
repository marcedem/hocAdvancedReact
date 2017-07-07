import React, { Component } from 'react';
import Header from './header';
import Resources from './resources';

export default class App extends Component {
	render() {
		return (
			<div>
				<Header />
				{this.props.children} 
			</div>
		);
	}
}
