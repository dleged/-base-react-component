import * as React from 'react';

class Button extends React.Component<>{

	static defaultProps = {
		bgColor: 'red',
		text: button
	}

	render(){
		return<button className={{backageColor: this.props.bgColor}}>{this.props.children || this.props.text}</button>
	}
}
