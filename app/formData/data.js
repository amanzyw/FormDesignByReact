class FormItem{
    constructor(item){
        this.type=item.type;
    }
}
//单输入
class InputText extends FormItem{
    constructor(item){
        super(item);
        this.tips=item.tips||"请输入";
        this.title=item.title||"单行输入框";
        this.validata=item.validata||false;
    }
}
//多输入
class InputTextArea extends FormItem{
    constructor(item){
        super(item);
        this.tips=item.tips||"请输入";
        this.title=item.title||"多行输入框";
        this.validata=item.validata||false;
    }
}
//数字输入框
class InputNumber extends FormItem{
    constructor(item){
        super(item);
        this.tips=item.tips||"请输入";
        this.title=item.title||"多行输入框";
        this.unit=item.unit||"";
        this.validata=item.validata||false;
    }
}
//单选框
class InputRadio extends FormItem{
    constructor(item){
        super(item);
        this.tips=item.tips||"请选择";
        this.title=item.title||"单选框";
        this.sOpts=item.sOpts||[{value:"选项1"},{value:"选项2"},{value:"选项3"}];
        this.validata=item.validata||false;
    }
}
//多选框
class InputCheckbox extends FormItem{
    constructor(item){
        super(item);
        this.title=item.title||"多选框";
        this.sOpts=item.sOpts||[{value:"选项1"},{value:"选项2"},{value:"选项3"}];
        this.validata=item.validata||false;
    }
}
//日期
class InputDate extends FormItem{
    constructor(item){
        super(item);
        this.title=item.title||"日期";
        this.dataType=item.dataType||1;
        this.validata=item.validata||false;
    }
}
//日期区间
class InputDateRange extends FormItem{
    constructor(item){
        super(item);
        this.title1=item.title1||"开始时间";
        this.title2=item.title2||"结束时间";
        this.tips=item.tips||"请选择";
        this.dataType=item.dataType||1;
        this.validata=item.validata||false;
    }
}
//图片
class InputImg extends FormItem{
    constructor(item){
        super(item);
        this.title=item.title||"图片";
        this.validata=item.validata||false;
    }
}
//金额
class InputMoney extends FormItem{
    constructor(item){
        super(item);
        this.tips=item.tips||"请输入";
        this.title=item.title||"金额（元）";
        this.validata=item.validata||false;
        this.upperCase=item.upperCase||false;
    }
}
//附件
class InputAttachMent extends FormItem{
    constructor(item){
        super(item);
        this.title=item.title||"附件";
        this.validata=item.validata||false;
    }
}


class FormData{
    constructor(){
        this.data=[new InputText(FormData['default'][0]),new InputTextArea(FormData['default'][1]),new InputNumber(FormData['default'][2]),new InputRadio(FormData['default'][3])]
    }
}
FormData["default"]=[{
    type:"inputText",
    tips:"请输入1",
    title:"单行输入框1",
    validata:true
},{
    type:"inputTextArea",
    tips:"请输入2",
    title:"多行输入框2"
},{
    type:"inputNumber",
    tips:"请输入3",
    title:"数字输入框3",
    unit:"个",
    validata:true
},{
    type:"inputRadio",
    tips:"请选择4",
    title:"单选框4",
    sOpts:[{value:"单选框选项1"},{value:"单选框选项2"},{value:"单选框选项3"},{value:"单选框选项4"},{value:"单选框选项5"}],
    validata:false
}];

module.exports={FormData,InputText,InputTextArea,InputNumber,InputRadio,InputCheckbox,InputDate,InputDateRange,InputImg,InputMoney,InputAttachMent}