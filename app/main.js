var React = require('react');
var ReactDom=require('react-dom');

import FormController from './components/FormController.js';
import FormView from './components/FormView.js';
import FormSetting from './components/FormSetting.js';
import FormDataObj from './formData/data.js';

let isClickDown=false;

class App extends React.Component {
    constructor(props){
        super(props);
        let formData=new FormDataObj.FormData();
        this.state={
            isClickDown:false,
            FormSettingData:formData.data,
            entryIboxInfo:{
                entryed:false
            }
        }
    }
    //在formsetting中如果发生变化则改变formsettingdata
    FormSettingDataChange(FormSettingData){
        this.setState({FormSettingData})
    }
    //在formview中发生顺序变化则改变index顺序
    changeEntryIboxIndex(entryIboxInfo){
        this.setState({entryIboxInfo});
    }
    //鼠标按下，事件对象，点击的元素，元素的属性
    onClickDown(evt,dom,domProps){
        let ele=document.createElement("li");
        ele.className="drag-item drag-item-draging";
        let domRect=dom.getBoundingClientRect();
        let x=domRect.left;
        let y=domRect.top;
        ele.style.cssText="position:absolute;top:"+y+"px;left:"+x+"px;";
        ele.innerText=dom.innerText;
        document.getElementById("drag-area").appendChild(ele);
        //找出ibox中的子元素的位置信息存储起来
        let ibox=document.getElementById("ibox");
        let iboxChildrenLi=ibox.children;
        let FormUnits=Array.prototype.filter.call(iboxChildrenLi,function(item){
            if(item.getAttribute("data-classify")!=undefined){
                return item;
            }
        });
        this.setState({
            isClickDown:true,
            classify:domProps.classify,
            activeFormUnit:dom,
            activeFormPo:{
                startX:evt.clientX,
                startY:evt.clientY
            },
            activeFormUnitHelper:ele
        });
    }
    componentDidMount(){
        let ibox=document.getElementById("ibox");
        this.iboxDOM=ibox;
        this.ibox=ibox.getBoundingClientRect();
    }
    //鼠标抬起
    handleMouseUp(evt){
        if(evt.button==2){
            return false;
        }
        let helper=this.state.activeFormUnitHelper;
        if(helper==undefined){
            return;
        }
        document.getElementById("drag-area").removeChild(helper);
        evt.stopPropagation();
        evt.preventDefault();
        this.setState({
            isClickDown:false,
            activeFormUnit:null,
            activeFormPo:{},
            activeFormUnitHelper:null
        });
        let entrryed=this.state.entryIboxInfo.entryed;
        let entryPo=this.state.entryIboxInfo.po;
        if(entrryed){
            let formData=this.state.FormSettingData;
            let tamp=new Object();
            let classify=this.state.classify;
            //把inputTextArea转化为InputTextArea
            let classifyArr=classify.split("");
            let clsfyConstr=classifyArr.shift().toUpperCase()+classifyArr.join("");
            formData.splice(entryPo,0,new FormDataObj[clsfyConstr]({type:classify}));
            this.setState({
                formData:formData,
                entryIboxInfo:{
                    entryed:false,
                    po:null,
                    currentIndex:entryPo
                }
            });
        }
    }
    //移动
    handleMouseMove(evt){
        evt.stopPropagation();
        evt.preventDefault();
        let isClickDown=this.state.isClickDown;
        let that=this;
        if(isClickDown){
            let activeFormUnit=this.state.activeFormUnit;
            let activeFormUnitHelper=this.state.activeFormUnitHelper;
            let iboxRect=this.ibox;
            if(activeFormUnitHelper==undefined){
                return;
            }
            let startX=this.state.activeFormPo.startX;
            let startY=this.state.activeFormPo.startY;
            let offsetX=evt.clientX-this.state.activeFormPo.startX;
            let offsetY=evt.clientY-this.state.activeFormPo.startY;
            //当前点击的盒模型
            let activeFormUnitRect=activeFormUnit.getBoundingClientRect();
            //替代的rect的盒模型
            let helpRect=activeFormUnitHelper.getBoundingClientRect();

            activeFormUnitHelper.style.left=activeFormUnitRect.left+offsetX+"px";
            activeFormUnitHelper.style.top=activeFormUnitRect.top+offsetY+"px";
            //进入ibxo
            if(helpRect.left+helpRect.width>=iboxRect.left&&helpRect.left<=iboxRect.left+iboxRect.width){
                let iboxChildrenLi=this.iboxDOM.children;
                let FormUnits=Array.prototype.filter.call(iboxChildrenLi,function(item){
                    if(item.getAttribute("data-classify")!=undefined){
                        return item;
                    }
                });
                let FormSettingData=this.state.FormSettingData;
                let insertPo=null;
                for (let i=0,len=FormUnits.length;i<len;i++){
                    let tamp=FormUnits[i].getBoundingClientRect();
                    if(helpRect.top<=tamp.top+tamp.height/2){
                        insertPo=i;
                        break;
                    }else{
                        insertPo=len;
                    }
                }
                this.setState({
                    entryIboxInfo:{
                        entryed:true,
                        po:insertPo
                    }
                });
            }else{
                this.setState({
                    entryIboxInfo:{
                        entryed:false
                    }
                });
            }

        }
    }
    render() {
        let isMouseUp=!this.state.isClickDown;
        let FormSettingData=this.state.FormSettingData;
        let entryIboxInfo=this.state.entryIboxInfo;
        return (
            <div onMouseUp={this.handleMouseUp.bind(this)} onMouseMove={this.handleMouseMove.bind(this)} className="container">
                <div className="layout">
                    <div className="main-box clearfix">
                        <FormController onClickDown={this.onClickDown.bind(this)} isMouseUp={isMouseUp} mouseMove={this.handleMouseMove.bind(this)}/>
                        <FormView FormSettingData={FormSettingData} entryIboxInfo={entryIboxInfo} changeEntryIboxIndex={this.changeEntryIboxIndex.bind(this)}/>
                        <FormSetting FormSettingData={this.state.FormSettingData} entryIboxInfo={entryIboxInfo} FormSettingDataChange={this.FormSettingDataChange.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}
ReactDom.render(<App/>,document.getElementById("root"));