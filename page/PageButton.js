import React from 'react';

export default class PageButton extends React.Component{
	constructor(props){
		super(props);
		this.setNext=this.setNext.bind(this);
		this.setUp=this.setUp.bind(this);
		this.setGo=this.setGo.bind(this);
		this.state={
			num:0,//当前列表的第一项
			pageNum:this.props.current//当前页数
		}
	}

	setNext(){
		if(this.state.pageNum<this.props.totalPage){
			this.setState({
				num:this.state.num+this.props.pageSize,
				pageNum:this.state.pageNum+1
			},()=>{
				this.props.nextPage(this.state.num);
			})
		}
	}

	setUp(){
		if(this.state.pageNum>1){
			this.setState({
				num:this.state.num-this.props.pageSize,
				pageNum:this.state.pageNum-1
			},()=>{
				this.props.nextPage(this.state.num);
			})
		}
	}
	setGo(){
		let goPage=this._input.value;
		if(goPage>=1&&goPage<=this.props.totalPage){
			this.setState({
				num:this.props.pageSize*(goPage-1),
				pageNum:goPage
			},()=>{
				this.props.nextPage(this.state.num)
			})
		}
	}

	render(){
		return (<div className='page_button'>
				<span onClick={this.setUp}>上一页</span>
				<span>第{this.state.pageNum}页/共{this.props.totalPage}页</span>
				<span onClick={this.setNext}>下一页</span>
				<input type='text' ref={(input)=>{this._input=input} }/>
				<button onClick={this.setGo}>跳转</button>
			</div>)
	}
}