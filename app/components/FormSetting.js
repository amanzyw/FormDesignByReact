import React from 'react';
import FormSettingUnit from './FormSettingUnit.js';
//表单配置区
class FormSetting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            btnIndex:3,
            FormSettingData:this.props.FormSettingData,
            entryIboxInfo:this.props.entryIboxInfo
        }

    }
    handleMouse(idx){
        this.setState({
            btnIndex:idx
        });
    }
    printFormDataInfo(idx){
        let FormSettingData=this.state.FormSettingData;
        console.log(FormSettingData);
    }
    componentWillReceiveProps(nextprops,props){
        this.setState({
            FormSettingData:nextprops.FormSettingData,
            entryIboxInfo:nextprops.entryIboxInfo
        });
    }
    FormSettingDataChange(FormSettingData){
        this.props.FormSettingDataChange(FormSettingData);
    }
    render(){
        let that=this;
        let btnIndex=this.state.btnIndex;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex||0;
        /*let bind=<FormSettingUnit classify={classify}/>*/
        return (
            <div className="fright">
                <div className="setting">
                    <div id="btn-grups" className="btn-group fright setting-btns">
                        <a className={btnIndex==1?"btn btn-default current":"btn btn-default"}  onMouseEnter={this.handleMouse.bind(this,1)} href="javascript:void(0);">预览</a>
                        <a onClick={this.printFormDataInfo.bind(this)} className={btnIndex==2?"btn btn-default current":"btn btn-default"}  onMouseEnter={this.handleMouse.bind(this,2)} href="javascript:void(0);">保存</a>
                        <a className={btnIndex==3?"btn btn-default current":"btn btn-default"}  onMouseEnter={this.handleMouse.bind(this,3)} href="javascript:void(0);">保存并启用</a>
                    </div>
                    <div className="setting-tabs tabs">
                        <div className="tab-header">
                            <div className="toper clearfix">
                                <div className="item fleft current">控件设置</div>
                                <div className="item fleft">表单设置</div>
                            </div>
                        </div>
                        <div className="tab-body">
                            <div className="tab-content">
                                <div id="controlSettingBox" className="item current">
                                    <FormSettingUnit FormSettingData={FormSettingData} entryIboxInfo={entryIboxInfo} FormSettingDataChange={this.FormSettingDataChange.bind(this)}/>
                                </div>
                                <div className="item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormSetting;