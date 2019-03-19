import React from 'react';
import List from './List.js';
import PageButton from './PageButton.js'
import './Listbox.css'

//测试数据
let listData=[{
	key:"001",
	name:"ddd"
},{
	key:"002",
	name:"ddd1"
},{
	key:"003",
	name:"ddd2"
},{
	key:"004",
	name:"ddd3"
},{
	key:"005",
	name:"ddd4"
},{
	key:"006",
	name:"ddd5"
},{
	key:"007",
	name:"ddd6"
},{
	key:"008",
	name:"ddd7"
},{
	key:"009",
	name:"ddd8"
},{
	key:"010",
	name:"ddd9"
},{
	key:"011",
	name:"ddd"
}]
export default class Listbox extends React.Component{
	constructor(props){
		super(props);
		this.nextPage=this.nextPage.bind(this);
		this.setPage=this.setPage.bind(this);
		this.state= {
			dataList:[],//当前页面要展示的数据
			totalData:listData,//总数据
			current:1,//当前页数
			pageSize:4,//每一页所存放的数据条数
			goPage:0,//初始数据起始
			totalPage:0//总页数
		}
	}

	componentWillMount(){
		this.setState({//设置总页数
			totalPage:Math.ceil(this.state.totalData.length/this.state.pageSize)
		});
		this.nextPage(this.state.goPage);
	}

	setPage(num){
		this.setState({//更改页面展示数据的内容
			dataList:this.state.totalData.slice(num,num+this.state.pageSize)
		})
	}

	nextPage(num){
		this.setPage(num);
	}

	render(){
		return (<div className='main'>
					<div className='top_bar'>
					</div>
					<div className='list_box'>
						<ul className='list'>
							{this.state.dataList.map((con)=>{
								return <List {...con} />
							})}
						</ul>
						<PageButton {...this.state} nextPage={this.nextPage} />
					</div>
			</div>)
	}
}