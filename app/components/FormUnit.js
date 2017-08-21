import React from 'react';
import ReactDom from 'react-dom';
//
class FormUnit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            isActive:this.props.isActive,
            index:this.props.index
        }
    }
    componentWillReceiveProps(nextProps,props){
        this.setState({
            data:nextProps.data
        });
    }
    onClickHandle(evt){
        evt.stopPropagation();
        evt.preventDefault();
        this.props.onClickHandle(this.props.index);
    }
    onClickClose(evt){
        evt.stopPropagation();
        evt.preventDefault();
        let index=this.state.index;
        this.props.onClosePanel(index);
    }
    render(){
        let data=this.state.data;
        let classify=data.type;
        let isActive=this.state.isActive;
        let panel=null;
        if(classify=="inputText"){
            panel=(
                <div className="text-ui-box">
                    <div className="text-ms-box clearfix">
                        <div className="text-state">
                            <label className="ui-label">{data["title"]}</label>
                        </div>
                        <div className="text-input-wrap">
                            <div className="text-format-input">
                                <div className="div-input">{data["tips"]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if(classify=="inputTextArea"){
            panel=(
                <div className="textarea-ui-box">
                    <div className="textarea-ms-box clearfix">
                        <div className="textarea-state">
                            <label className="ui-label">{data["title"]}</label>
                        </div>
                        <div className="textarea-input-wrap">
                            <div className="textarea-format-input">
                                <div className="div-textarea">{data["tips"]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        if(classify=="inputNumber"){
            panel=(
                <div className="num-ui-box clearfix">
                    <div className="num-label">
                        <label className="ui-label">{data["title"]}</label>
                    </div>
                    <div className="num-input-area">
                        <div className="textarea-format-input">
                            <div className="div-input">{data["tips"]}</div>
                        </div>
                    </div>
                </div>
            );
        }
        if(classify=="inputRadio"){
            panel=(
                <div className="radio-ui-box clearfix">
                    <div className="radio-label">
                        <label className="ui-label">{data["title"]}</label>
                    </div>
                    <div className="radio-input-area clearfix">
                        <div className="radio-choose fright clearfix">
                            <div className="itext fleft">{data["tips"]}&nbsp;</div>
                            <div className="fleft arrow-box">
                                <div className="arrow-right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(classify=="inputCheckbox"){
            panel=(
                <div className="checkbox-ui-box clearfix">
                    <div className="checkbox-label">
                        <label className="ui-label">{data["title"]}</label>
                    </div>
                    <div className="checkbox-input-area clearfix">
                        <div className="checkbox-choose fright clearfix">
                            <div className="itext fleft">请选择&nbsp;</div>
                            <div className="fleft arrow-box"><div className="arrow-right"></div></div>
                        </div>
                    </div>
                </div>
            )
        }
        if(classify=="inputDate"){
            panel=(
                <div className="date-ui-box clearfix">
                    <div className="date-label">
                        <label className="ui-label">{data["title"]}</label>
                    </div>
                    <div className="date-input-area clearfix">
                        <div className="date-choose fright clearfix">
                            <div className="itext fleft">请选择&nbsp;</div>
                            <div className="fleft arrow-box"><div className="arrow-right"></div></div>
                        </div>
                    </div>
                </div>
            )
        }
        if(classify=="inputDateRange"){
            panel=(
                <div className="dateRange-ui-box clearfix">
                    <div className="dateRange-display">
                        <div className="dateRange-item">
                            <div className="dateRange-label">
                                <label className="ui-label">{data["title1"]}</label>
                            </div>
                            <div className="dateRange-input-area clearfix">
                                <div className="dateRange-choose fright clearfix">
                                    <div className="itext fleft">{data["tips"]}&nbsp;</div>
                                    <div className="fleft arrow-box"><div className="arrow-right"></div></div>
                                </div>
                            </div>
                        </div>
                        <div className="dateRange-item">
                            <div className="dateRange-label">
                                <label className="ui-label">{data["title2"]}</label>
                            </div>
                            <div className="dateRange-input-area clearfix">
                                <div className="dateRange-choose fright clearfix">
                                    <div className="itext fleft">{data["tips"]}&nbsp;</div>
                                    <div className="fleft arrow-box"><div className="arrow-right"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if(classify=="inputImg"){
            panel=(
                <div className="img-ui-box clearfix">
                    <div className="img-label"><label className="ui-label">{data["title"]}</label></div>
                    <div className="img-input-area clearfix"><div className="img-choose fright clearfix"></div></div>
                </div>
            )
        }
        if(classify=="inputMoney"){
            panel=(
                <div className="money-ui-box clearfix"><div className="money-label">
                    <label className="ui-label">{data["title"]}</label>
                    </div><div className="money-input-area"><div className="div-input">{data["tips"]}</div></div>
                </div>
            )
        }
        if(classify=="inputAttachMent"){
            panel=(
                <div className="attachMent-ui-box clearfix">
                    <div className="attachMent-label"><label className="ui-label">{data["title"]}</label></div>
                    <div className="attachMent-input-area clearfix"><div className="attachMent-choose fright clearfix"></div></div>
                </div>
            )
        }
        return (
            <li onClick={this.onClickHandle.bind(this)} data-classify="inputTextArea" className={isActive==true?"droppingDOM item current":"droppingDOM item"}>
                {panel}
                <div onClick={this.onClickClose.bind(this)} className="drag-close">
                    <div className="close-btn"></div>
                </div>
            </li>
        )
    }
}

export default FormUnit;
