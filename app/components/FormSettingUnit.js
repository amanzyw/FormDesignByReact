import React from 'react';
class Myoptions extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:this.props.value,
            index:this.props.index,
            item:this.props.item
        }
    }
    componentWillReceiveProps(nextProps,props){
        this.setState({
            value:nextProps.value,
            index:nextProps.index,
            item:nextProps.item
        });
    }
    handleChange(evt){
        let index=this.state.index;
        let value=evt.target.value;
        this.props.onOtionsChange(evt,index);
        if(value.length>20){
            return;
        }
        this.setState({
            value:value
        });
    }
    btnOptionminus(evt){
        evt.stopPropagation();
        evt.preventDefault();
        let item=this.state.item;
        let index=this.state.index;
        if(item["sOpts"].length==1){
            alert("必须保留一个选项");
            return;
        }
        item["sOpts"].splice(index,1);
        this.props.onOptionAddOrMinus(item);
    }
    btnOptionAdd(evt){
        evt.stopPropagation();
        evt.preventDefault();
        let item=this.state.item;
        let index=this.state.index;
        let len=item["sOpts"].length;
        if(len==10){
            alert("不能超过10个选项");
            return;
        }
        item["sOpts"].push({
            value:"自定义选项"
        });
        this.props.onOptionAddOrMinus(item);
    }
    render(){
        let value=this.state.value;
        let item=this.state.item;
        let optionLen=item["sOpts"].length;

        return (
            <div className="form-add-item">
                <div className="iblock add-input">
                    <input onChange={this.handleChange.bind(this)} type="text" className="form-input" value={value}/>
                </div>
                <div className={optionLen==1?"btn-minus btn-i-cell disabled":"btn-minus btn-i-cell"} onClick={this.btnOptionminus.bind(this)}></div>
                <div className={optionLen>=10?"btn-add btn-i-cell disabled":"btn-add btn-i-cell"} onClick={this.btnOptionAdd.bind(this)}></div>
            </div>
        );
    }
}
class FormSettingUnit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            FormSettingData:this.props.FormSettingData,
            entryIboxInfo:this.props.entryIboxInfo
        }
    }
    componentWillReceiveProps(nextProps,props){
        this.setState({
            entryIboxInfo:nextProps.entryIboxInfo
        });
    }//标题变化函数
    hasTitleChange(evt,obj){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;
        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.title=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }
    hasTitle1Change(evt,obj){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;
        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.title1=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }
    hasTitle2Change(evt,obj){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;
        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.title2=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }
    //提示变化函数
    hasTipsChange(evt,obj){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;
        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.tips=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }//长度限制函数
    hasUnitChange(evt,obj){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;
        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.unit=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }//是否验证函数
    hasValidataChange(evt){
        let value=evt.target.value;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        if(value=="false"){
            item.validata=true;
        }else{
            item.validata=false;
        }
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }//是否大小写
    hasUpperCaseChange(evt){
        let value=evt.target.value;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        if(value=="false"){
            item.upperCase=true;
        }else{
            item.upperCase=false;
        }
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }
    //日期选择类型变化函数
    hasDateTypeChange(evt,obj){
        let value=evt.target.value;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let setValue=obj.dateType;
        item.dataType=setValue;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }//选项变化函数
    optionsChange(evt,obj,num){

        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex;
        let item=FormSettingData[currentIndex];
        let maxLen=obj.maxLen;
        let value=evt.target.value;

        if(maxLen!=undefined){
            if(value.length>maxLen){
                return;
            }
        }
        item.sOpts[num]["value"]=value;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }//选项添加或者减去
    onOptionAddOrMinus(changeItem){
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex||0;
        FormSettingData[currentIndex]=changeItem;
        this.setState({FormSettingData});
        this.props.FormSettingDataChange(FormSettingData);
    }
    render(){
        let that=this;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        let currentIndex=entryIboxInfo.currentIndex||0;
        let item=FormSettingData[currentIndex];
        let panel=null;
        if(item==undefined){
            return (
                <div></div>
            );
        }
        if(item["type"]=="inputText"){
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">提示文字</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasTipsChange(evt,{maxLen:20})}.bind(that)} value={item.tips}/>
                        </div>
                        <div className="from-text"><i className="tips">内容最多可填写1000个字</i></div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputTextArea"){
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">提示文字</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasTipsChange(evt,{maxLen:20})}.bind(that)} value={item.tips}/>
                        </div>
                        <div className="from-text"><i className="tips">内容最多可填写8000个字</i></div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputNumber"){
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title} />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">提示文字</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasTipsChange(evt,{maxLen:20})}.bind(that)} value={item.tips} />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">单位</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasUnitChange(evt,{maxLen:20})}.bind(that)} value={item.unit} />
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputRadio"){
            let sOpts=item.sOpts;
            let optionsPanel=[];
            sOpts.forEach(function(item1,idx){
                optionsPanel.push(<Myoptions onOtionsChange={function(evt,idx){that.optionsChange(evt,{maxLen:20},idx)}} value={item1.value} key={idx} index={idx} item={item} onOptionAddOrMinus={that.onOptionAddOrMinus.bind(that)}/>)
            });
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">提示文字</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasTipsChange(evt,{maxLen:20})}.bind(that)} value={item.tips}/>
                        </div>
                        <div className="from-text"><i className="tips">内容最多可填写8000个字</i></div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">选项</span>
                            <i className="tips">最多10项，每项最多20字</i>
                        </div>
                        <div className="form-control-add">
                            {optionsPanel}
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputCheckbox"){
            let sOpts=item.sOpts;
            let optionsPanel=[];
            sOpts.forEach(function(item1,idx){
                optionsPanel.push(<Myoptions onOtionsChange={function(evt,idx){that.optionsChange(evt,{maxLen:20},idx)}} value={item1.value} key={idx} index={idx} item={item} onOptionAddOrMinus={that.onOptionAddOrMinus.bind(that)}/>)
            });
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">选项</span>
                            <i className="tips">最多10项，每项最多20字</i>
                        </div>
                        <div className="form-control-add">
                            {optionsPanel}
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputDate"){
            let dataType=item.dataType;
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" value="日期" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">日期类型</span>
                            <i className="tips"></i>
                        </div>
                        <div className="from-text">
                            <label className="form-setting-label"><input type="radio" checked={dataType==0?true:false} name="date" value="0" onChange={function(evt){that.hasDateTypeChange(evt,{dateType:0})}}/> 年-月-日 时:分</label>
                            <label className="form-setting-label"><input type="radio" checked={dataType==1?true:false} name="date" value="1" onChange={function(evt){that.hasDateTypeChange(evt,{dateType:1})}}/> 年-月-日</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        if(item["type"]=="inputDateRange"){
            let dataType=item.dataType;
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题1</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" value="日期" onChange={function(evt){that.hasTitle1Change(evt,{maxLen:10})}.bind(that)} value={item.title1}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题2</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" value="日期" onChange={function(evt){that.hasTitle2Change(evt,{maxLen:10})}.bind(that)} value={item.title2}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">日期类型</span>
                            <i className="tips"></i>
                        </div>
                        <div className="from-text">
                            <label className="form-setting-label"><input type="radio" checked={dataType==0?true:false} name="date" value="0" onChange={function(evt){that.hasDateTypeChange(evt,{dateType:0})}}/> 年-月-日 时:分</label>
                            <label className="form-setting-label"><input type="radio" checked={dataType==1?true:false} name="date" value="1" onChange={function(evt){that.hasDateTypeChange(evt,{dateType:1})}}/> 年-月-日</label>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            );
        }
        if(item["type"]=="inputImg"){
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                        <div className="from-text"><i className="tips">图片最多可添加9张</i></div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputMoney"){

            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                        <div className="from-text"><i className="tips">图片最多可添加9张</i></div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">提示文字</span>
                            <i className="tips">最多20个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="20" type="text" className="form-input" onChange={function(evt){that.hasTipsChange(evt,{maxLen:20})}.bind(that)} value={item.tips}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">大写</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.upperCase} checked={item.upperCase} onChange={that.hasUpperCaseChange.bind(that)}/>
                                <span className="statement">显示大写</span>
                                <span className="upper-case">输入数字后自动显示大写</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        if(item["type"]=="inputAttachMent"){
            panel=(
                <div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">标题</span>
                            <i className="tips">最多10个字</i>
                        </div>
                        <div className="input-div">
                            <input data-max-len="10" type="text" className="form-input" onChange={function(evt){that.hasTitleChange(evt,{maxLen:10})}.bind(that)} value={item.title}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <div className="from-text">
                            <span className="thumb-size">验证</span>
                        </div>
                        <div className="input-div">
                            <label className="form-label">
                                <input type="checkbox" className="form-ckbox" value={item.validata} checked={item.validata} onChange={that.hasValidataChange.bind(that)}/>
                                <span className="statement">必填</span>
                            </label>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {panel}
            </div>
        );
    }
}
export default FormSettingUnit;