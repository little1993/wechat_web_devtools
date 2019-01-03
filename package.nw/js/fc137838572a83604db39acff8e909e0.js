'use strict';!function(require,directRequire){function a(a=!0){return(b)=>{const c=y.getState();return c.project&&c.project.current&&c.project.current.isTourist?void(a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_USER_SESSION_SUCCESS})):void m({url:`${n.clearSession}`,method:'post',needToken:1,needAppID:1}).then(()=>{a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_USER_SESSION_SUCCESS}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})}).catch(()=>{b({type:l.INFO_SHOW_ERROR,data:{message:s.config.CLEAN_USER_SESSION_ERROR.format(errorList.join(','))}}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})})}}function b(a=!0){return(b)=>{const c=y.getState();if(c.project&&c.project.current&&c.project.current.isTourist)return void(a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_USER_AUTH_SUCCESS}));let d=2;const e=[],f=(c)=>{d--,c&&e.push(c),0==d&&(0==e.length?a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_USER_AUTH_SUCCESS}):b({type:l.INFO_SHOW_ERROR,data:{message:s.config.CLEAN_USER_AUTH_ERROR.format(e.join(','))}}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'}))};m({method:'post',url:`${n.cleanUserAuth}`,needToken:1,needAppID:1}).then(()=>{f()}).catch((a)=>{f(a)}),m({method:'post',url:`${n.clearUserAutoFillInfo}`,needToken:1,needAppID:1}).then(()=>{f()}).catch((a)=>{f(a)})}}function c(a=!0){const b=o.getUserInfo(),c=b&&b.openid?b.openid:'unknow',d=p.getCurrent(),e=d.hash,f=q.WeappFileCache;return(b)=>{j('*',{cwd:f},(c,e)=>{e.forEach((a)=>{const b=h.join(f,a);i.unlink(b,()=>{})}),k(h.join(f,d.appid),()=>{}),v.clearFileSystem(d),a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_FILE_CACHE_SUCCESS}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})})}}function d(a=!0){return(b)=>{const c=(c)=>{c?c.clearData({since:0},{cookies:!0,appcache:!0,sessionCookies:!0,persistentCookies:!0,cache:!0,fileSystems:!0,indexedDB:!0,localStorage:!0,webSQL:!0},()=>{a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAR_NETWORK_CACHE_SUCCESSFULLY}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})}):b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})};let d=u.getAnyAttached('simulator');c(d,a),d=u.getAnyAttached('htmlwebview'),c(d,!1)}}function e(a=!0){const b=o.getUserInfo(),c=b&&b.openid?b.openid:'unknow',d=q.WeappStorage,e=p.getCurrent(),f=h.join(d,`${e.hash}_${c}.json`),g=h.join(d,`storage_${e.hash}_${c}.json`);return(b)=>{try{i.existsSync(f)&&i.unlinkSync(f)}catch(a){console.error(a)}i.unlink(g,(d)=>{console.error(d),a&&b({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAN_DATA_CACHE_SUCCESS}),b({type:l.PROJECT_SET_STORAGE,data:{cache:{},openid:c}}),b({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})})}}function f(a){return(b,c)=>{b(a),g(c)}}function g(a){try{global.devInfo&&global.devInfo.projectid&&t.setToolbarForProject(global.devInfo.projectid,a().toolbar)}catch(a){}}const h=require('path'),i=require('fs'),j=require('glob'),k=require('rmdir'),l=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),m=require('./15ba1827c7f6564a45df6bd44da3a977.js'),n=require('./f171257bbcaef547a3cf27266ccb0db2.js'),o=require('./89ba85d67a88f7636d657c22b5d3e038.js'),p=require('./3bfffbe88b3d923921f851c0697974fe.js'),q=require('./92320c1386e6db6a6f2556736a9bc280.js'),r=require('./df6d0ff021a69fb541c733de4dbba0fe.js'),s=require('./common/locales/index.js'),t=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),u=require('./a78e6d6a87de1708226375ca4c320d76.js'),v=require('./f6cbcecf6ed9f533f6a506310d8f07b6.js'),w=require('./35a5c665bbd039baf968211c3ff216fc.js'),x=require('./f7806acc0e6f141f3b11c7faf34d32ad.js'),y=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js');module.exports={toggleNetworkToobar:function(){return{type:l.TOOLBAR_TOGGLE_NETWORK}},toggleSimulatorActionToolbar:function(){return{type:l.TOOLBAR_TOGGLE_SIMULATORACTION}},toggleDeviceToolbar:function(){return{type:l.TOOLBAR_TOGGLE_DEVICE}},toggleCompactToolbar:function(){return{type:l.TOOLBAR_TOGGLE_COMPACT}},toggleInfoToolbar:function(){return{type:l.TOOLBAR_TOGGLE_INFO}},toggleCompileTypeToolbar:function(){return{type:l.TOOLBAR_TOGGLE_COMPILETYPE}},selectDevice:function(a){return f({type:l.TOOLBAR_SELECT_DEVICE,data:a})},selectNetwork:function(a){return f({type:l.TOOLBAR_SELECT_NETWORK,data:a})},selectCompileType:function(a){return{type:l.TOOLBAR_SELECT_COMPILETYPE,data:a}},toggleClickKey:function(a){return{type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:a}},togglePreviewCode:function(a){return{type:l.TOOLBAR_PREVIEW_CODE,data:a}},toggleRemoteDebugCode:function(a){return{type:l.TOOLBAR_REMOTE_DEBUG_CODE,data:a}},setDeviceStatus:function(a){return f({type:l.TOOLBAR_SET_DEVICE_STATUS,data:a})},clearAuth:b,cleanFileCache:c,cleanStorageCache:e,setDeviceScale:function(a){return f({type:l.TOOLBAR_SET_DEVICESCALE,data:a})},addDevice:function(a){return{type:l.TOOLBAR_ADD_DEVICE,data:a}},removeDevice:function(a){return{type:l.TOOLBAR_REMOVE_DEVICE,data:a}},cleanWebViewCache:d,clearSession:a,cleanAll:function(){return(f)=>{f(e(!1)),f(c(!1)),f(d(!1)),f(b(!1)),f(a(!1)),f({type:l.INFO_SHOW_SUCCESS,data:s.config.CLEAR_ALL_SUCCESSFULLY}),f({type:l.TOOLBAR_TOGGLE_CLICKKEY,clickKey:'NONE'})}},setToolbarConfig:function(a){return f({type:l.TOOLBAR_CONFIG,data:a})},autoPreview:function(a){return a||(a=Date.now()),{type:l.TOOLBAR_AUTO_PREVIEW,data:a}},setMuted:function(a){return w.setMuted(a),x.setMuted(a),{type:l.TOOLBAR_SET_MUTED,data:a}},jumpTGit:function(){return(a)=>{m({url:n.getTGitUrl,method:'get',needToken:1,needAppID:1}).then(({body:a})=>{nw.Shell.openExternal(a.dev_master_url)}).catch((b)=>{b&&b.errcode==r.DEV_CLOUD_NO_TGIT_PROJECT?a({type:l.INFO_SET_CONFIRM,data:{show:!0,type:'error',title:'',content:s.config.TGIT_NOT_OPEN_DETAIL,showConfirm:!0,showCancel:!0,confirmText:s.config.READ_DOCUMENTATION,cancelText:s.config.CLOSE,callback:(a)=>{a&&nw.Shell.openExternal('https://developers.weixin.qq.com/miniprogram/dev/qcloud/tgit.html')}}}):a({type:l.INFO_SHOW_ERROR,data:{message:(b||'').toString()}})})}},setDeviceRotated:function(a){return f({type:l.TOOLBAR_SET_DEVICE_ROTATED,data:a})},setDeviceRotatedBeforeRoute:function(a){return f({type:l.TOOLBAR_SET_DEVICE_ROTATED_BEFORE_ROUTE,data:a})},syncToolbar:(a={},b)=>(c)=>{c({type:l.TOOLBAR_SYNC_STORE,data:a,syncTime:b})}}}(require('lazyload'),require);