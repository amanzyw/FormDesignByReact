import React from 'react';
import FormUnit from './FormUnit.js';
import uuid from 'uuid';
//表单可视区
class FormView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            FormSettingData:this.props.FormSettingData,
            entryIboxInfo:this.props.entryIboxInfo
        }
    }
    componentWillReceiveProps(nextprops,props){
        this.setState({
            entryIboxInfo:nextprops.entryIboxInfo,
            FormSettingData:nextprops.FormSettingData
        });
    }
    onClickHandle(idx){
        let entryIboxInfo=this.state.entryIboxInfo;
        entryIboxInfo.currentIndex=idx;
        this.setState({entryIboxInfo});
        this.props.changeEntryIboxIndex(entryIboxInfo);
    }
    onClosePanel(idx){
        let FormSettingData=this.state.FormSettingData;
        FormSettingData.splice(idx,1);
        this.setState({FormSettingData});
        let entryIboxInfo={
            entryed:false,
            currentIndex:0
        };
        this.props.changeEntryIboxIndex(entryIboxInfo);
    }
    render(){
        let that=this;
        let FormSettingData=this.state.FormSettingData;
        let tamp=null;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex||0;
        let linePo=entryIboxInfo.po;
        let dropLine=<li id="drop-line" key={uuid.v1()} className="dropDomPo-line"></li>;
        if(FormSettingData.length==0){
            tamp=<li id="drag-empty" className="drag-empty">可以从控件库拖动相应的组件进来</li>
        }else{
            tamp=new Array();
            this.state.FormSettingData.forEach(function(item,idx){
                tamp.push(<FormUnit isActive={idx==currentIndex?true:false} key={uuid.v1()} index={idx} data={item} onClickHandle={that.onClickHandle.bind(that)} onClosePanel={that.onClosePanel.bind(that)}/>);
            });
            if(linePo!=undefined){
                tamp.splice(linePo,0,dropLine);
            }
        }
        return (
            <div className="center fleft">
                <div className="application app-view">
                    <div className="title">测试应用</div>
                    <div className="app-box">
                        <div id="drag-container"  className="display-model">
                            <ul id="ibox" className="app-list-ul clearfix ui-droppable">
                                {tamp}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormView;