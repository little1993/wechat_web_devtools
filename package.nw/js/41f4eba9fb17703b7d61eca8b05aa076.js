'use strict';!function(require,directRequire){const a=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),b=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),c=a.getState.bind(a),d=()=>{try{return!!c().project.current}catch(a){return!1}},e=()=>{try{return(c().git||{}).panelShow}catch(a){return console.error(a),!1}},f=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.WEB_DEBUGGER}catch(a){return!1}},g=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.DEV}catch(a){return!1}},h=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.LOGIN}catch(a){return!1}},i=()=>{try{return c().window.mainWindow===b.MAIN_WINDOW_TYPE.SELECT_PROJECT}catch(a){return!1}},j=()=>{try{return c().window.simulator.show}catch(a){return!1}},k=()=>{try{return c().window.simulator.popup}catch(a){return!1}},l=()=>{try{return c().window.editor.show}catch(a){return!1}},m=()=>{try{return c().window.toolbar.show}catch(a){return!1}},n=()=>{try{return c().window.editor.fileTreeShow}catch(a){return!1}},o=()=>{try{return c().window.debug.show}catch(a){return!1}},p=()=>{try{return'left'===c().window.simulator.position}catch(a){return!1}},q=()=>{try{return c().window.focus===b.WINDOW_FOCUS.DEVTOOLS||c().window.focus===b.WINDOW_FOCUS.REMOTE_DEBUG_DEVTOOLS}catch(a){return!1}},r=()=>{try{return c().window.focus===b.WINDOW_FOCUS.EDITOR}catch(a){return!1}},s=()=>{try{return c().project.current.appid===b.TOURIST_APPID}catch(a){return!1}},t=()=>{try{return c().project.current.appid===b.GAME_TOURIST_APPID}catch(a){return!1}},u=()=>{try{return c().project.current.attr.userbanded}catch(a){return!0}},v=()=>{try{return c().project.current.isMiniCode}catch(a){return!0}},w=()=>{try{return'game'===c().project.current.compileType}catch(a){return!0}},x=()=>!!global.isSimple,y=(a)=>eval(a.replace(/isSimple|isMiniCode|userbanded|isEditorFocused|isMiniProgramDev|isGitManagerShown|isWebDev|inMainWindow|inLoginWindow|isSimulatorVisible|isEditorVisible|isFileTreeVisible|isDevtoolsVisible|isToolbarVisible|isSimulatorLeft|isSimulatorPopup|isDevtoolsFocused|isTourist|isGameTourist|inSelectProjectWindow|isGameProject/g,(a)=>z[a]&&z[a]())),z={isMiniProgramDev:d,isGitManagerShown:e,isWebDev:f,inMainWindow:g,inLoginWindow:h,inSelectProjectWindow:i,isSimulatorVisible:j,isEditorVisible:l,isFileTreeVisible:n,isDevtoolsVisible:o,isToolbarVisible:m,isSimulatorLeft:p,isSimulatorPopup:k,isDevtoolsFocused:q,isTourist:s,isGameTourist:t,userbanded:u,isEditorFocused:r,isMiniCode:v,isGameProject:w};module.exports={predicates:z,evaluate:y}}(require('lazyload'),require);