import React from 'react';

export default class List extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const name=this.props.name;

		return(<li>this name is {name}</li>)
	}
}