;!function(require, directRequire){;'use strict';const ChooseInvoiceTitle=require('./110d9d6fbf9b67da49ca942cde9b4d27.js'),simulatorActions=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),{connect}=require('react-redux'),mapStateToProps=(a)=>{const b=a.simulator.chooseInvoiceTitle,c=a.toolbar.deviceInfo;return{show:b.show,callbackID:b.callbackID,api:b.api,navigationbarHeight:c.navigationbarHeight,screenHeight:c.screenHeight,screenWidth:c.screenWidth,deviceScale:a.toolbar.deviceScale}},mapDispatchToProps=(a)=>({hideChooseInvoiceTitle:tools.bindActionCreators(simulatorActions.hideChooseInvoiceTitle,a)});module.exports=connect(mapStateToProps,mapDispatchToProps)(ChooseInvoiceTitle);
;}(require("lazyload"), require);
