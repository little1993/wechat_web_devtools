;!function(require, directRequire){;"use strict";const tslib_1=require("tslib"),React=require("react"),locales=require('./common/locales/index.js'),SECTION="edit";let EditSetting=class extends React.Component{constructor(a){super(a),this.onAutoSaveChange=()=>{this.props.updateIDESetting(SECTION,"autoSave",!this.state.autoSave),this.setState({autoSave:!this.state.autoSave})},this.onSaveBeforeCompileChange=()=>{this.props.updateIDESetting(SECTION,"saveBeforeCompile",!this.state.saveBeforeCompile),this.setState({saveBeforeCompile:!this.state.saveBeforeCompile})},this.onAutoRefreshChange=()=>{this.props.updateIDESetting(SECTION,"autoRefresh",!this.state.autoRefresh),this.setState({autoRefresh:!this.state.autoRefresh})},this.onWrapChange=()=>{const a="off"===this.state.wrap?"on":"off";this.props.updateIDESetting(SECTION,"wrap",a),this.setState({wrap:a})},this.onInsertSpacesChange=()=>{this.props.updateIDESetting(SECTION,"insertSpaces",!this.state.insertSpaces),this.setState({insertSpaces:!this.state.insertSpaces})},this.onMinimapChange=()=>{this.props.updateIDESetting(SECTION,"minimap",!this.state.minimap),this.setState({minimap:!this.state.minimap})},this.onGitIgnoreWindowsReturnChange=()=>{this.props.updateIDESetting(SECTION,"gitIgnoreWindowsReturn",!this.state.gitIgnoreWindowsReturn),this.setState({gitIgnoreWindowsReturn:!this.state.gitIgnoreWindowsReturn})},this.onAlwaysOpenFileInNewTabChange=()=>{this.props.updateIDESetting(SECTION,"alwaysOpenFileInNewTab",!this.state.alwaysOpenFileInNewTab),this.setState({alwaysOpenFileInNewTab:!this.state.alwaysOpenFileInNewTab})},this.onTabSizeChange=(a)=>{let b=parseInt(a.target.value,10);return isNaN(b)?void this.setState({tabSize:""}):void(1>b&&(b=1),8<b&&(b=8),this.props.updateIDESetting(SECTION,"tabSize",b),this.setState({tabSize:b}))};const{settings:b}=this.props;this.state={autoSave:b.autoSave,autoRefresh:b.autoRefresh,saveBeforeCompile:b.saveBeforeCompile,wrap:b.wrap,insertSpaces:b.insertSpaces,minimap:b.minimap,gitIgnoreWindowsReturn:b.gitIgnoreWindowsReturn,alwaysOpenFileInNewTab:b.alwaysOpenFileInNewTab,tabSize:b.tabSize}}getSetting(){return{autoSave:this.state.autoSave,autoRefresh:this.state.autoRefresh,saveBeforeCompile:this.state.saveBeforeCompile,wrap:this.state.wrap,insertSpaces:this.state.insertSpaces,minimap:this.state.minimap,tabSize:this.state.tabSize}}render(){return React.createElement("div",{className:"setting-theme ui-form"},React.createElement("div",{className:"ui-form-item ui-form-item-inline ui-form-item-vt"},React.createElement("label",{className:"ui-form-label"},locales.config.SETTING_FILE_SAVE),React.createElement("div",{className:"ui-form-controls"},React.createElement("label",{className:"ui-checkbox",onClick:this.onAutoSaveChange},React.createElement("i",{className:this.state.autoSave?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_AUTO_SAVE)),React.createElement("label",{className:"ui-checkbox",onClick:this.onSaveBeforeCompileChange},React.createElement("i",{className:this.state.saveBeforeCompile?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_SAVE_BEFORE_COMPILE)),React.createElement("label",{className:"ui-checkbox",onClick:this.onAutoRefreshChange},React.createElement("i",{className:this.state.autoRefresh?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_COMPILE_ON_SAVE)),this.state.autoSave&&this.state.autoRefresh?React.createElement("p",{style:{color:"gray",fontSize:"12px",marginLeft:"24px"}},locales.config.COMPLIE_ON_MANUAL_SAVING):null)),React.createElement("div",{className:"ui-form-item ui-form-item-inline ui-form-item-vt"},React.createElement("label",{className:"ui-form-label"},locales.config.SETTING_EDITOR),React.createElement("div",{className:"ui-form-controls"},React.createElement("label",{className:"ui-checkbox",onClick:this.onWrapChange},React.createElement("i",{className:"on"===this.state.wrap?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_WRAP)),React.createElement("label",{className:"ui-checkbox",onClick:this.onInsertSpacesChange},React.createElement("i",{className:this.state.insertSpaces?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_TAB_TO_SPACES)),React.createElement("label",{className:"ui-checkbox",onClick:this.onMinimapChange},React.createElement("i",{className:this.state.minimap?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.SETTING_MINIMAP)),React.createElement("label",{className:"ui-checkbox",onClick:this.onAlwaysOpenFileInNewTabChange},React.createElement("i",{className:this.state.alwaysOpenFileInNewTab?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text"},locales.config.OPEN_FILE_NEW_TAB)),React.createElement("label",{className:"ui-checkbox",onClick:this.onGitIgnoreWindowsReturnChange},React.createElement("i",{className:this.state.gitIgnoreWindowsReturn?"ui-icon-checkbox-o":"ui-icon-checkbox"}),React.createElement("span",{className:"ui-checkbox-text",dangerouslySetInnerHTML:{__html:locales.config.GIT_IGNORE_WIN_RETURN}})))),React.createElement("div",{className:"ui-form-item ui-form-item-inline ui-form-item-vt"},React.createElement("label",{className:"ui-form-label"},locales.config.SETTING_TAB_SIZE),React.createElement("div",{className:"ui-form-controls"},React.createElement("div",{className:"ui-input-box",style:{width:70}},React.createElement("input",{type:"number",placeholder:"",value:this.state.tabSize,className:"ui-input",onChange:this.onTabSizeChange})))))}};EditSetting=tslib_1.__decorate([locales.mixin],EditSetting),module.exports=EditSetting;
;}(require("lazyload"), require);
