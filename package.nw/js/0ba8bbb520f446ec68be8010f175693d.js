'use strict';!function(require,directRequire){const{connect:a}=require('react-redux'),{togglePanelShow:b}=require('./052960b25101aefc4f8999b429c19b44.js'),c=require('./7a1e4293919de3cd29fe81210f2f5819.js'),d=require('./fc137838572a83604db39acff8e909e0.js'),e=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js');module.exports=a(function(a){return{project:a.project.current,panelShow:a.git.panelShow,closeTs:a.git.closeTs,user:a.user,theme:(a.settings.appearance||{}).theme}},function(a){return{togglePanelShow(c){a(b(c))},toolbarActions:e.bindActionCreators(d,a)}})(c)}(require('lazyload'),require);