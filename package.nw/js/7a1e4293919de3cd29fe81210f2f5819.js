'use strict';!function(require,directRequire){function a(){const a=nw.Window.get();a.setMinimumSize(1064,700)}function b(){const a=nw.Window.get();a.setMinimumSize(f.MIN_MAIN_WINDOW_WIDTH,f.MIN_MAIN_WINDOW_HEIGHT)}const c=require('react'),d=require('child_process'),e=require('./875171e7b864aa58d026d4fa0999fbd1.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./ff946754202ecf377034d29daac7c8d9.js'),h=require('./f15811258ec83bc7d2978d66ddd5ed8a.js'),i=require('./437e6043fc662374e4f1c2330516ac40.js'),j=require('./3ee3c042cc6a0925a86761ac0af92c10.js'),k=require('./41168dca39589e852da6631126d0f94d.js'),l=require('git-url-parse'),m=require('./3892cb9d0783075a973c350c41401370.js'),n=require('./da7c31daaf542cf1796023d8e344b98a.js'),o=require('./common/locales/index.js'),p='darwin'===process.platform;module.exports=class extends c.Component{constructor(b){super(b),this.state={animated:!1,show:b.panelShow},a()}componentWillReceiveProps(c){if(c.panelShow!==this.props.panelShow||c.closeTs!==this.props.closeTs){const d=c.panelShow&&c.closeTs===this.props.closeTs;this.setState({show:d}),d?a():b()}}async onMessage(a){try{const b=await k({taskName:'gitassistant',dataStr:JSON.stringify(a),maxTimeout:60000,useBackup:!!p,forceBackup:!!p,downgrade:!0});b.error&&console.error(b.error),j.send(b)}catch(a){console.error(a)}}componentDidMount(){n('git_manager_open',!0),this.mountWebview(),j.ready=!0,j.register(this._onMessageFn=this.onMessage.bind(this))}componentWillUnmount(){b(),this.webview&&(h.disable(this.webview),this.webview.removeEventListener('dialog',this._promptListener),this.webview.remove(),this.webview=null),this.freeAll(),j.ready=!1,j.unRegister(this._onMessageFn),clearTimeout(this._removeWebviewMaskTimer)}freeAll(){p?k({taskName:'gitassistant',dataStr:JSON.stringify({id:-1,method:'git.freeAll',params:{}}),maxTimeout:10000,useBackup:!!p,forceBackup:!!p,downgrade:!0}).then(console.log,console.error):k.stopImmediately&&k.stopImmediately()}handleCloseClick(){this.close()}close(){this.setState({show:!1}),b()}onAnimationOut(){this.props.togglePanelShow(!1),b()}onAnimationIn(){}promptListener(a){const b=a.messageType;let c=a.messageText;const d=a.dialog;if('prompt'===b&&d&&c)if(c.startsWith('getproxyforurl:')){a.preventDefault(),c=c.replace(/^getproxyforurl\:/,'');try{const a=l(c);a&&'string'==typeof a.resource&&'string'==typeof a.protocol&&(c=`${a.protocol}://${a.resource}`);const b=i.getProxyForURL(c);d.ok&&d.ok(JSON.stringify({result:b}))}catch(a){d.ok&&d.ok(JSON.stringify({result:null}))}}else if(c.startsWith('openterminal:'))a.preventDefault(),d.ok&&d.ok(),c=c.replace('openterminal:',''),m(c);else if(!c.startsWith('opentgit:'))c.startsWith('git:')&&(a.preventDefault(),c=c.replace('git:',''),d.ok&&d.ok(),'fc'===c?this.freeAll():'reload'===c?this.reloadWebview():void 0);else if(a.preventDefault(),c=c.replace('opentgit:',''),d.ok&&d.ok(),'document'===c)try{nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/qcloud/tgit.html')}catch(a){console.error(a)}else this.props.toolbarActions.jumpTGit()}reloadWebview(){const a=this.props,b=this.webview;if(!b)return;const c={isdev:(global.appConfig||{}).isDev?'yes':'',_random:Math.random()+'',projectpath:(this.props.project||{}).projectpath||'',ws:`ws://127.0.0.1:${global.gitMessagePort||global.messageCenterPort}`,wsprotocol:`GIT_MANAGER#${g.getToken()}#`,logined:'SUCCESS'===a.user.loginStatus?'yes':'no',openid:a.user.openid||'',nickname:a.user.nickName||'',hl:o.getLocale()||'zh',theme:'dark'===a.theme?'dark':'white'};let d='';for(const a in c)c.hasOwnProperty(a)&&void 0!==c[a]&&(d+=`${a}=${encodeURIComponent(c[a])}&`);b.src='html/gitmanager.html?'+d}mountWebview(){this.props;if(!this.webview&&this.webviewContainer){this.webview=document.createElement('webview');const a=this.webview;a.setAttribute('partition','persist:gitmanager'),a.setAttribute('data-plugin-id','gitmanager'),a.setAttribute('tabIndex','-1'),a.style.flex='1',this.reloadWebview(),h.enable(a),requestAnimationFrame(()=>{this.webviewContainer.appendChild(a),a.addEventListener('dialog',this._promptListener=this.promptListener.bind(this))})}this.webviewMask&&(this._removeWebviewMaskTimer=setTimeout(()=>{this.webviewMask&&requestAnimationFrame(()=>{this.webviewMask.style.opacity=0}),setTimeout(()=>requestAnimationFrame(()=>{this.webviewMask&&this.webviewMask.remove(),this.webviewMask=null,document.activeElement&&document.activeElement.blur&&document.activeElement.blur()}),1e3)},800))}render(){const a=this.props.theme;return c.createElement('div',null,c.createElement('div',{className:'ui-mask ui-mask-transparent',onClick:this.handleCloseClick.bind(this)}),c.createElement(e,{onAnimationIn:this.onAnimationIn.bind(this),onAnimationOut:this.onAnimationOut.bind(this),show:this.state.show,style:'dark'===a?{width:'90%',willChange:'transform',minWidth:'1024px',marginLeft:'calc(-90% / 2)',height:'95%',minHeight:'600px',boxShadow:'rgba(0, 0, 0, 0.8) 0px 5px 50px 5px',borderBottomLeftRadius:'3px',borderBottomRightRadius:'3px',border:'1px solid rgb(89, 89, 89)',background:'rgb(74, 74, 74)',animation:this.state.show?'pull-down cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s':'pull-up cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s'}:{width:'90%',willChange:'transform',minWidth:'1024px',marginLeft:'calc(-90% / 2)',height:'95%',minHeight:'600px',boxShadow:'inset 0 0 0 0.5px rgba(0, 0, 0, 0.3), 0 5px 50px 0 rgba(0, 0, 0, 0.3)',borderBottomLeftRadius:'3px',borderBottomRightRadius:'3px',border:'1px solid #d6d6d6',background:'#FFF',animation:this.state.show?'pull-down cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s':'pull-up cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s'},inClassName:'ui-animate-pull-down ui-dialog',outClassName:'ui-animate-pull-up ui-dialog'},c.createElement('div',{style:{flex:1,display:'flex',position:'relative'},ref:(a)=>this.webviewContainer=a},c.createElement('div',{ref:(a)=>this.webviewMask=a,style:'dark'===a?{position:'absolute',left:0,top:0,width:'100%',height:'100%',zIndex:999999,background:'rgb(74, 74, 74)',opacity:1,transition:'all .2s',willChange:'opacity',pointerEvents:'none'}:{position:'absolute',left:0,top:0,width:'100%',height:'100%',zIndex:999999,background:'rgb(252, 252, 252)',opacity:1,transition:'all .2s',willChange:'opacity',pointerEvents:'none'}},c.createElement('i',{className:'ui-icon-spinner',style:{width:'100px',height:'100px',display:'block',margin:'100px auto'}})))))}}}(require('lazyload'),require);