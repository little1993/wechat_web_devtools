'use strict';!function(require,directRequire){async function a(a,b){const{iconPath:d,text:e,hide:f}=b.args;return a({type:c.SIMULATOR_SET_NAVIGATION_BAR,data:{showRightBtn:!f}}),{errMsg:`${b.api}:ok`}}function b(a){const b=a.simulator.appConfig||{},c=((b.global||{}).window||{}).enableFullScreen,d=f.getNavigationStyle(a);return c||'custom'===d}const c=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),d=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),e=require('./a15851ca252a104aad8b3fd3fc114574.js'),f=require('./54bd189bb6081afa877cfd37a0dbec56.js'),g=/^#[0-9A-Fa-f]{6}$/,h=()=>{const a=d.getState(),b=a.simulator.webviewInfos[a.simulator.currentWebviewID]||{};return-1!=b.tabbarIndex};module.exports={setNavigationBarTitle:async function(a,b){return a({type:c.SIMULATOR_SET_NAVIGATION_BAR,data:{title:b.args.title}}),{errMsg:`${b.api}:ok`}},setNavigationBarColor:async function(a,b){const d=b.args,{frontColor:e,backgroundColor:f,alpha:g,animation:h}=d,i='#000000'==e?'black':'white';let j;if(h){const a=h.duration||0;let b=h.timingFunc||'linear';'easeIn'===b?b='ease-in':'easeOut'===b?b='ease-out':'easeInOut'===b&&(b='ease-in-out'),j=`all ${a}ms ${b}`}return a({type:c.SIMULATOR_SET_NAVIGATION_BAR,data:{frontColor:e,backgroundColor:f,alpha:g,transition:j,titleStyle:i}}),{errMsg:`${b.api}:ok`}},setNavigationBarRightButton:a,private_setNavigationBarRightButton:a,showNavigationBarLoading:async function(a,b){return a({type:c.SIMULATOR_SET_NAVIGATION_BAR,data:{showLoading:!0}}),{errMsg:`${b.api}:ok`}},hideNavigationBarLoading:async function(a,b){return a({type:c.SIMULATOR_SET_NAVIGATION_BAR,data:{showLoading:!1}}),{errMsg:`${b.api}:ok`}},startPullDownRefresh:async function(a,b){const c=d.getState(),f=c.simulator.currentWebviewID;return e.send(f,{command:'START_PULLDOWN_REFRESH'}),{errMsg:`${b.api}:ok`}},stopPullDownRefresh:async function(a,b){const c=d.getState(),f=c.simulator.currentWebviewID;return e.send(f,{command:'STOP_PULLDOWN_REFRESH'}),{errMsg:`${b.api}:ok`}},showTabBar:async function(a,b){return h()?(a({type:c.SIMULATOR_SET_TABBAR,data:b}),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail not TabBar page`}},hideTabBar:async function(a,b){return h()?(a({type:c.SIMULATOR_SET_TABBAR,data:b}),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail not TabBar page`}},setTabBarBadge:async function(a,b){if(!h())return{errMsg:`${b.api}:fail not TabBar page`};const e=d.getState(),f=b.args,g=e.simulator.tabbar,i=g.list[f.index];return i?f.badgeColor&&!/^#[0-9A-Fa-f]{6}$/.test(f.badgeColor)?{errMsg:`${b.api}:fail invalid badgeColor`}:f.badgeValue&&4<f.badgeValue.length?{errMsg:`${b.api}:fail badgeValue should be less than 4`}:0>['redDot','none','text'].indexOf(f.type)?{errMsg:`${b.api}:fail invalid type`}:(a({type:c.SIMULATOR_SET_TABBAR,data:b}),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail tabbar item not found`}},setTabBarItem:async function(a,b){if(!h())return{errMsg:`${b.api}:fail not TabBar page`};const e=d.getState(),f=b.args,g=e.simulator.tabbar,i=g.list[f.index];return i?(a({type:c.SIMULATOR_SET_TABBAR,data:b}),{errMsg:`${b.api}:ok`}):{errMsg:`${b.api}:fail tabbar item not found`}},setTabBarStyle:async function(a,b){if(!h())return{errMsg:`${b.api}:fail not TabBar page`};const d=b.args,e=[];return(['color','selectedColor','backgroundColor'].forEach((a)=>{d[a]&&!g.test(d[a])&&e.push(`invalid ${a}`)}),0<e.length)?{errMsg:`${b.api}:fail ${e.join(' ')}`}:d.borderStyle&&0>['white','black'].indexOf(d.borderStyle)?{errMsg:`${b.api}:fail invalid borderStyle`}:(a({type:c.SIMULATOR_SET_TABBAR,data:b}),{errMsg:`${b.api}:ok`})},setBackgroundColor:async function(a,b,c){const{api:d,args:f}=b,h=c(),i=h.simulator.currentWebviewID,j=[];return(['backgroundColor','backgroundColorTop','backgroundColorBottom'].forEach((a)=>{f[a]&&!g.test(f[a])&&j.push(`invalid ${a}`)}),0<j.length)?{errMsg:`${d}:fail ${j.join(' ')}`}:(e.send(i,{command:'SET_BACKGROUND_COLOR',data:f}),{errMsg:`${d}:ok`})},setBackgroundTextStyle:async function(a,b,c){const{api:d,args:f}=b,g=c(),h=g.simulator.currentWebviewID;return 0>['dark','light'].indexOf(f.textStyle)?{errMsg:`${d}:fail invalid textStyle`}:(e.send(h,{command:'SET_BACKGROUND_TEXT_STYLE',data:f}),{errMsg:`${d}:ok`})},getMenuButtonBoundingClientRect:async function(a,b){const{api:c}=b,d=document.querySelector('.simulator');if(d){const a=d.getBoundingClientRect(),b=document.querySelector('.simulator .capsule').getBoundingClientRect();return{errMsg:`${c}:ok`,width:b.width,height:b.height,left:b.left-a.left,top:b.top-a.top,right:b.right-a.left,bottom:b.bottom-a.top}}return{errMsg:`${c}:ok`}},hideNavigationBar:async function(a,d,e){const{api:f}=d,g=e(),h=b(g);return h||a({type:c.SIMULATOR_HIDE_NAVIGATION,data:{navigationBarHeight:g.toolbar.deviceInfo.navigationbarHeight}}),{errMsg:`${f}:ok`}},showNavigationBar:async function(a,d,e){const{api:f}=d,g=e(),h=b(g);return h||a({type:c.SIMULATOR_SHOW_NAVIGATION,data:{navigationBarHeight:g.toolbar.deviceInfo.navigationbarHeight}}),{errMsg:`${f}:ok`}},hideStatusBar:async function(a,d,e){const{api:f}=d,g=e(),h=b(g);return a({type:c.SIMULATOR_HIDE_STATUSBAR,data:{statusBarHeight:h?0:g.toolbar.deviceInfo.statusbarHeight}}),{errMsg:`${f}:ok`}},showStatusBar:async function(a,d,e){const{api:f}=d,g=e(),h=b(g);return a({type:c.SIMULATOR_SHOW_STATUSBAR,data:{statusBarHeight:h?0:g.toolbar.deviceInfo.statusbarHeight}}),{errMsg:`${f}:ok`}}}}(require('lazyload'),require);