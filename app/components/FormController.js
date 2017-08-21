import React from 'react';
import UnitControl from './UnitControl.js';
//左侧控件区域
class FormController extends React.Component{
    constructor(props){
        super(props);
        this.state={
            FormUnit:[
                {
                    classify:"inputText",
                    text:"单行输入",
                    formSettingConfig:{

                    }
                },{
                    classify:"inputTextArea",
                    text:"多行输入"
                },{
                    classify:"inputNumber",
                    text:"数字输入框"
                },{
                    classify:"inputRadio",
                    text:"单选框"
                },{
                    classify:"inputCheckbox",
                    text:"多选框"
                },{
                    classify:"inputDate",
                    text:"日期"
                },{
                    classify:"inputDateRange",
                    text:"日期区间"
                },{
                    classify:"inputImg",
                    text:"图片"
                },{
                    classify:"inputMoney",
                    text:"金额"
                },{
                    classify:"inputAttachMent",
                    text:"附件"
                }
            ]
        }
    }
    render(){
        let FormUnit=this.state.FormUnit;
        let UnitsCollect=new Array();
        let isMouseUp=this.props.isMouseUp;
        let onClickDown=this.props.onClickDown;
        let mouseMove=this.props.mouseMove;
        FormUnit.forEach(function(item,idx){
            UnitsCollect.push(<UnitControl mouseMove={mouseMove} isMouseUp={isMouseUp} onClickDown={onClickDown} key={idx} index={idx} classify={item.classify} text={item.text}/>)
        });
        return (
            <div className="fleft controller-bar">
                <div className="title">控件库</div>
                <div className="controller-ui">
                    <ul id="drag-area" className="content clearfix">
                        {UnitsCollect}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FormController;