import React from 'react';
import ReactDom from 'react-dom';
//单个控件
class UnitControl extends React.Component{
    constructor(props){
        super(props);
        let classify=this.props.classify;
        this.state={
            classify:classify,
            isClickDown:false
        }
    }
    componentDidMount(){

    }
    onDragStart(evt){
        evt.stopPropagation();
        evt.preventDefault();
        let dom=ReactDom.findDOMNode(this.refs["react-"+this.props.index]);
        //从父级调用mousemove,开始移动，移动那个元素
        this.props.onClickDown(evt,dom,this.props);
        this.setState({
            isClickDown:true
        });

    }
    onDrag(evt){
        let isMouseUp=this.props.isMouseUp;
        let isClickDown=this.state.isClickDown;
        if(!isClickDown){
            return;
        }
        let dragDom=this.state.dragDom;
    }
    onDragEnd(evt){
        evt.preventDefault();
    }
    render(){
        return (
            <li className="drag-item" ref={"react-"+this.props.index} draggable="true" onMouseDown={this.onDragStart.bind(this)} onMouseMove={this.onDrag.bind(this)} onMouseUp={this.onDragEnd.bind(this)}>{this.props.text}</li>
        )
    }
}

export default UnitControl;
