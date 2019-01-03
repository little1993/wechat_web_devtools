'use strict';!function(require,directRequire){const a=require('react'),b=require('redux'),c=require('fs'),d=require('path'),e=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),f=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),g=require('./a8c87029da0fa06e986298d447ab0fe2.js'),h=require('./92320c1386e6db6a6f2556736a9bc280.js'),i=require('./56119b0bb7e053a7c0ba6f7d9d5e1d0e.js'),j=require('./72653d4b93cdd7443296229431a7aa9a.js'),k=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),l=require('./53ec6a2d71bd5a4846662679c61fe819.js'),m=require('./3c55dff3626a3ee184d599f076158345.js'),n=require('./875171e7b864aa58d026d4fa0999fbd1.js'),o=require('./d28a711224425b00101635efe1034c99.js'),p=require('./2254692212b7d32a3c1405f399460682.js'),q=require('./common/locales/index.js'),{connect:r}=require('react-redux'),s={FILL_FORM:1,SHARING:2,SUCCESS:3};class t extends a.Component{constructor(a){super(a),this.handleNeedAppIDClick=(a)=>{const b=a.currentTarget.dataset.needappid;this.setState({needAppID:b?1:0})};let b=o.getVendorConfig(),c=Object.keys(b.libs),d=c.indexOf(a.libInUse);-1===d&&(d=0),this.state={status:s.FILL_FORM,show:a.show,shareBtnTitle:q.config.GENERATE_SHARED_LINK,desc:a.lastShareInfo&&a.lastShareInfo.desc||'',needAppID:a.lastShareInfo&&a.lastShareInfo.needAppID||0,minLib:a.lastShareInfo&&a.lastShareInfo.minLib||a.libInUse,shareLink:'',showLibs:!1,libs:c,libSelectedIndex:d,libDropDownLeft:0,libDropDownTop:0,libDropDownWidth:'200px',errorLoc:'',errorMsg:''},this.lock=!1}componentDidMount(){this.props.setMask(!0),this._cancalLocaleListener=q.onChangeLocale(()=>this.forceUpdate())}componentWillUnmount(){this.props.setMask(!1),this._cancalLocaleListener()}componentWillReceiveProps(a){let b={};a.show!=this.props.show&&(b.show=a.show),a.desc!=this.props.desc&&(b.desc=a.desc),a.needAppID!=this.props.needAppID&&(b.needAppID=a.needAppID),a.minLib!=this.props.minLib&&(b.minLib=a.minLib),this.setState(b)}onClose(){this.lock=!1,this.setState({shareBtnTitle:q.config.GENERATE_SHARED_LINK}),this.setState({show:!1})}onCopyLink(){const a=nw.Clipboard.get();a.set(this.state.shareLink,'text'),this.props.showSuccessTip(q.config.CONSOLE_COPY_SUCCESS)}async onConfirm(){if(!this.lock){this.lock=!0,this.setState({shareBtnTitle:q.config.GENERATING});try{const{desc:a,needAppID:b,minLib:c}=this.state,{codeid:d}=await i({projectpath:this.props.projectpath,formData:{projectDesc:a,needAppID:b,minLibVersion:c,compressType:'wxapkg',projectName:this.props.projectname}});this.props.saveShareInfo({codeid:d,shareTime:+new Date,desc:a,needAppID:b,minLib:c}),this.setState({status:s.SUCCESS,shareLink:p.getMiniCodeLink(d)})}catch(a){j.error(`share error: ${a}`),a&&2===a.errorcode?this.setState({errorLoc:'projectDesc',errorMsg:q.config.CONTENT_VIOLATE_RE_EDIT}):(this.setState({show:!1}),this.props.setConfirmInfo({show:!0,showCancel:!1,content:q.config.SHARE_FAIL_DETAIL.format(a)}))}this.lock=!1}}onShareSuccess(){this.lock=!1,this.setState({status:s.SUCCESS})}onInputChange(a){let b=a.currentTarget,c=b.dataset,d=c.name;this.setState({[d]:b.value})}onAnimationOut(){this.props.setShareInfo({show:!1})}onShowLibs(a){if(a.stopPropagation(),this.state.showLibs)this.setState({showLibs:!1});else{let b=a.currentTarget,c=b.getBoundingClientRect();this.setState({showLibs:!this.state.showLibs,libDropDownLeft:c.left,libDropDownTop:c.top+25,libDropDownWidth:c.width+'px'})}}onSelectClick(a){this.setState({showLibs:!1,libSelectedIndex:a,minLib:this.state.libs[a]})}render(){const b=this.props,c=this.state.status===s.SUCCESS?{display:'none'}:{},d=this.state.status===s.SUCCESS?{}:{display:'none'};return a.createElement(n,{show:this.state.show,style:{width:600,marginLeft:-300},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog',onAnimationOut:this.onAnimationOut.bind(this)},a.createElement('div',{className:'ui-dialog-hd'},a.createElement('h3',{className:'ui-dialog-title'},q.config.SHARE)),a.createElement('div',{className:'ui-dialog-bd',style:c},a.createElement('div',{className:'ui-form'},a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{className:'ui-form-label'},q.config.PROJECT_NAME),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',null,decodeURIComponent(b.projectname)))),a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{className:'ui-form-label'},q.config.PROJECT_DESCRIPTION),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-input-box'},a.createElement('textarea',{type:'text',ref:(a)=>this.descInput=a,value:this.state.desc,maxLength:200,"data-name":'desc',onChange:this.onInputChange.bind(this),className:'ui-textarea'})),a.createElement('p',{className:'ui-form-tips'},q.config.SHARE_OPTIONAL_DESCRIPTION))),a.createElement('div',{className:'ui-form-item ui-form-item-inline ui-form-item-vt'},a.createElement('label',{htmlFor:'',className:'ui-form-label'},'AppID'),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',null,q.config.NEED_APPID_TO_RUN),a.createElement('div',{className:'ui-flex'},a.createElement('label',{htmlFor:'',className:'ui-radio',onClick:this.handleNeedAppIDClick,"data-needappid":!0},a.createElement('input',{type:'radio',checked:''}),a.createElement('i',{className:this.state.needAppID?'ui-icon-radio-o':'ui-icon-radio'}),a.createElement('span',{className:'ui-radio-text'},q.config.SHARE_APPID_YES)),a.createElement('label',{htmlFor:'',className:'ui-radio',onClick:this.handleNeedAppIDClick},a.createElement('input',{type:'radio'}),a.createElement('i',{className:this.state.needAppID?'ui-icon-radio':'ui-icon-radio-o'}),a.createElement('span',{className:'ui-radio-text'},q.config.SHARE_APPID_NO))))),a.createElement('div',{className:'ui-form-item ui-form-item-inline'},a.createElement('label',{className:'ui-form-label'},q.config.MINIMUM_LIBRARY_VERSION),a.createElement('div',{className:'ui-form-controls'},a.createElement('div',{className:'ui-selector ui-selector-default',onClick:this.onShowLibs.bind(this)},a.createElement('input',{className:'ui-selector-input',placeholder:'',readOnly:!0,value:this.state.libs[this.state.libSelectedIndex]}),a.createElement('div',{className:'ui-selector-dropdown'},a.createElement('i',{className:this.state.showLibs?'ui-icon-arrow-up-o':'ui-icon-arrow-down-o'})),a.createElement(m,{show:this.state.showLibs,list:this.state.libs,left:this.state.libDropDownLeft,top:this.state.libDropDownTop,width:this.state.libDropDownWidth,height:250,onSelectClick:this.onSelectClick.bind(this)})))),a.createElement('div',{className:'ui-form-item ui-form-item-inline',style:this.state.errorLoc?{}:{display:'none'}},a.createElement('label',{className:'ui-form-label'}),a.createElement('div',{className:'ui-form-controls'},a.createElement('p',{className:'dashboard-error-tips'},this.state.errorMsg))))),a.createElement('div',{className:'ui-dialog-bd',style:d},a.createElement('input',{value:this.state.shareLink,style:{border:'none',outline:'none',boxShadow:'none',background:'transparent',width:'100%',userSelect:'text',font:'inherit',color:'inherit'},disabled:!0}),this.state.status===s.SUCCESS?a.createElement('p',null,q.config.MINICODE_COMPATIBILITY_NOTICE):null),a.createElement('div',{className:'ui-dialog-ft'},a.createElement('div',{className:'ui-dialog-action'},this.state.status===s.SUCCESS?a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onCopyLink.bind(this)},q.config.COPY_LINK):a.createElement('button',{className:'ui-button ui-button-primary',onClick:this.onConfirm.bind(this)},this.state.shareBtnTitle),a.createElement('button',{className:'ui-button ui-button-default',onClick:this.onClose.bind(this)},q.config.CANCEL))))}}module.exports=r((a)=>{const b=a.project.current;let c;return b.shareInfo&&(b.shareInfo.history&&b.shareInfo.history[0]?c=b.shareInfo.history[0]:b.shareInfo.from&&(c=b.shareInfo.from)),{show:a.info.shareInfo.show,lastShareInfo:c,projectname:b.projectname,projectpath:b.projectpath,libInUse:b.libVersion}},(a)=>{return{showSuccessTip:k.bindActionCreators(e.showSuccessTip,a),setShareInfo:k.bindActionCreators(e.setShareInfo,a),checkUploadStatus:k.bindActionCreators(f.checkUploadStatus,a),setMask:k.bindActionCreators(g.setMask,a),setConfirmInfo:k.bindActionCreators(e.setConfirmInfo,a),saveShareInfo:k.bindActionCreators(f.saveShareInfo,a)}})(t)}(require('lazyload'),require);