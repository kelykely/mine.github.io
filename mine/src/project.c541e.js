require=function i(c,l,u){function s(n,e){if(!l[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(a)return a(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var o=l[n]={exports:{}};c[n][0].call(o.exports,function(e){var t=c[n][1][e];return s(t||e)},o,o.exports,i,c,l,u)}return l[n].exports}for(var a="function"==typeof require&&require,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(e,t,n){var r,o,i=t.exports={};function c(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function u(t){if(r===setTimeout)return setTimeout(t,0);if((r===c||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}(function(){try{r="function"==typeof setTimeout?setTimeout:c}catch(e){r=c}try{o="function"==typeof clearTimeout?clearTimeout:l}catch(e){o=l}})();var s,a=[],f=!1,p=-1;function h(){f&&s&&(f=!1,s.length?a=s.concat(a):p=-1,a.length&&d())}function d(){if(!f){var e=u(h);f=!0;for(var t=a.length;t;){for(s=a,a=[];++p<t;)s&&s[p].run();p=-1,t=a.length}s=null,f=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(e)}}function g(e,t){this.fun=e,this.array=t}function y(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new g(e,t)),1!==a.length||f||u(d)},g.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},{}],2:[function(e,t,n){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var n=function(){};n.prototype=t.prototype,e.prototype=new n,e.prototype.constructor=e}},{}],3:[function(e,t,n){t.exports=function(e){return e&&"object"==typeof e&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},{}],4:[function(p,e,R){(function(r,o){var l=/%[sdj%]/g;R.format=function(e){if(!w(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(u(arguments[n]));return t.join(" ")}n=1;for(var r=arguments,o=r.length,i=String(e).replace(l,function(e){if("%%"===e)return"%";if(o<=n)return e;switch(e){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(e){return"[Circular]"}default:return e}}),c=r[n];n<o;c=r[++n])m(c)||!a(c)?i+=" "+c:i+=" "+u(c);return i},R.deprecate=function(e,t){if(S(o.process))return function(){return R.deprecate(e,t).apply(this,arguments)};if(!0===r.noDeprecation)return e;var n=!1;return function(){if(!n){if(r.throwDeprecation)throw new Error(t);r.traceDeprecation?console.trace(t):console.error(t),n=!0}return e.apply(this,arguments)}};var e,i={};function u(e,t){var n={seen:[],stylize:s};return 3<=arguments.length&&(n.depth=arguments[2]),4<=arguments.length&&(n.colors=arguments[3]),v(t)?n.showHidden=t:t&&R._extend(n,t),S(n.showHidden)&&(n.showHidden=!1),S(n.depth)&&(n.depth=2),S(n.colors)&&(n.colors=!1),S(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),h(n,e,n.depth)}function c(e,t){var n=u.styles[t];return n?"["+u.colors[n][0]+"m"+e+"["+u.colors[n][1]+"m":e}function s(e,t){return e}function h(t,n,r){if(t.customInspect&&n&&T(n.inspect)&&n.inspect!==R.inspect&&(!n.constructor||n.constructor.prototype!==n)){var e=n.inspect(r,t);return w(e)||(e=h(t,e,r)),e}var o=function(e,t){if(S(t))return e.stylize("undefined","undefined");if(w(t)){var n="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(n,"string")}if(b(t))return e.stylize(""+t,"number");if(v(t))return e.stylize(""+t,"boolean");if(m(t))return e.stylize("null","null")}(t,n);if(o)return o;var i,c=Object.keys(n),l=(i={},c.forEach(function(e,t){i[e]=!0}),i);if(t.showHidden&&(c=Object.getOwnPropertyNames(n)),F(n)&&(0<=c.indexOf("message")||0<=c.indexOf("description")))return d(n);if(0===c.length){if(T(n)){var u=n.name?": "+n.name:"";return t.stylize("[Function"+u+"]","special")}if(C(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(_(n))return t.stylize(Date.prototype.toString.call(n),"date");if(F(n))return d(n)}var s,a="",f=!1,p=["{","}"];(y(n)&&(f=!0,p=["[","]"]),T(n))&&(a=" [Function"+(n.name?": "+n.name:"")+"]");return C(n)&&(a=" "+RegExp.prototype.toString.call(n)),_(n)&&(a=" "+Date.prototype.toUTCString.call(n)),F(n)&&(a=" "+d(n)),0!==c.length||f&&0!=n.length?r<0?C(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=f?function(t,n,r,o,e){for(var i=[],c=0,l=n.length;c<l;++c)x(n,String(c))?i.push(g(t,n,r,o,String(c),!0)):i.push("");return e.forEach(function(e){e.match(/^\d+$/)||i.push(g(t,n,r,o,e,!0))}),i}(t,n,r,l,c):c.map(function(e){return g(t,n,r,l,e,f)}),t.seen.pop(),function(e,t,n){if(60<e.reduce(function(e,t){return 0,0<=t.indexOf("\n")&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0))return n[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+n[1];return n[0]+t+" "+e.join(", ")+" "+n[1]}(s,a,p)):p[0]+a+p[1]}function d(e){return"["+Error.prototype.toString.call(e)+"]"}function g(e,t,n,r,o,i){var c,l,u;if((u=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?l=u.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):u.set&&(l=e.stylize("[Setter]","special")),x(r,o)||(c="["+o+"]"),l||(e.seen.indexOf(u.value)<0?-1<(l=m(n)?h(e,u.value,null):h(e,u.value,n-1)).indexOf("\n")&&(l=i?l.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+l.split("\n").map(function(e){return"   "+e}).join("\n")):l=e.stylize("[Circular]","special")),S(c)){if(i&&o.match(/^\d+$/))return l;(c=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(c=c.substr(1,c.length-2),c=e.stylize(c,"name")):(c=c.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),c=e.stylize(c,"string"))}return c+": "+l}function y(e){return Array.isArray(e)}function v(e){return"boolean"==typeof e}function m(e){return null===e}function b(e){return"number"==typeof e}function w(e){return"string"==typeof e}function S(e){return void 0===e}function C(e){return a(e)&&"[object RegExp]"===t(e)}function a(e){return"object"==typeof e&&null!==e}function _(e){return a(e)&&"[object Date]"===t(e)}function F(e){return a(e)&&("[object Error]"===t(e)||e instanceof Error)}function T(e){return"function"==typeof e}function t(e){return Object.prototype.toString.call(e)}function n(e){return e<10?"0"+e.toString(10):e.toString(10)}R.debuglog=function(t){if(S(e)&&(e=r.env.NODE_DEBUG||""),t=t.toUpperCase(),!i[t])if(new RegExp("\\b"+t+"\\b","i").test(e)){var n=r.pid;i[t]=function(){var e=R.format.apply(R,arguments);console.error("%s %d: %s",t,n,e)}}else i[t]=function(){};return i[t]},(R.inspect=u).colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},u.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},R.isArray=y,R.isBoolean=v,R.isNull=m,R.isNullOrUndefined=function(e){return null==e},R.isNumber=b,R.isString=w,R.isSymbol=function(e){return"symbol"==typeof e},R.isUndefined=S,R.isRegExp=C,R.isObject=a,R.isDate=_,R.isError=F,R.isFunction=T,R.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e},R.isBuffer=p("./support/isBuffer");var f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(e,t){return Object.prototype.hasOwnProperty.call(e,t)}R.log=function(){var e,t;console.log("%s - %s",(e=new Date,t=[n(e.getHours()),n(e.getMinutes()),n(e.getSeconds())].join(":"),[e.getDate(),f[e.getMonth()],t].join(" ")),R.format.apply(R,arguments))},R.inherits=p("inherits"),R._extend=function(e,t){if(!t||!a(t))return e;for(var n=Object.keys(t),r=n.length;r--;)e[n[r]]=t[n[r]];return e}}).call(this,p("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":3,_process:1,inherits:2}],EventMgr:[function(e,t,n){"use strict";cc._RF.push(t,"6a972GAu4RMsI99L4Ct4eyg","EventMgr");var l={eventType:{},addListener:function(e,t){var n=l.eventType[e];void 0===n&&(n=[],l.eventType[e]=n),n.push(t)},removeListener:function(e,t){var n=l.eventType[e];if(void 0===n)return!1;var r=n.indexOf(t);return-1!==r&&(n.splice(r,1),!0)},dispatchEvent:function(e,t){var n=l.eventType[e];if(void 0===n||0==n.length)return!1;for(var r=arguments.length,o=Array(2<r?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];for(var c=0;c<n.length;c++)n[c].apply(n,[t].concat(o));return!0}};window.eventMgr=l,cc._RF.pop()},{}],Functions:[function(e,t,n){"use strict";cc._RF.push(t,"49196IKTjFNu4BFPtt6u3ZD","Functions"),window.log=function(e){console.log(e)},window.handler=function(o,i){return function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i.call.apply(i,[o,e].concat(n))}},window.handlerd=function(o,i,c){return function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i.call.apply(i,[o,c,e].concat(n))}},window.handlerds=function(o,i,c,l){return function(e){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i.call.apply(i,[o,c,l,e].concat(n))}},window.objCount=function(e){var t=0;for(var n in e)t++;return t},window.hasValue=function(e,t){for(var n in e)if(e[n]==t)return!0;return!1},window.getValue=function(e,t){for(var n in e)if(e[n].id.x==t.x&&e[n].id.y==t.y)return e[n];return!1},window.hasValue2=function(e,t){for(var n in e)if(e[n].x==t.x&&e[n].y==t.y)return!0;return!1},cc._RF.pop()},{}],Init:[function(e,t,n){"use strict";cc._RF.push(t,"3abbalfxL9AVLP3EzPNV+WF","Init"),e("./Config"),e("./utils/Vector"),e("./utils/Functions"),e("./config/Typedefine"),e("./mgr/EventMgr"),e("./scene/SceneMgr"),cc._RF.pop()},{"./Config":"config","./config/Typedefine":"Typedefine","./mgr/EventMgr":"EventMgr","./scene/SceneMgr":"SceneMgr","./utils/Functions":"Functions","./utils/Vector":"Vector"}],JsRunner:[function(e,t,n){"use strict";cc._RF.push(t,"af033buRcZHPIjvmM2f7vrj","JsRunner"),n.runTest=function(){console.log("99999999999999999999999")},cc._RF.pop()},{}],SceneMgr:[function(e,t,n){"use strict";cc._RF.push(t,"721759UfNpKFbiE348GierQ","SceneMgr");var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.sceneType=null}return r(e,[{key:"setSceneType",value:function(e){this.sceneType=e}},{key:"switchScene",value:function(e){this.setSceneType(e),e===SceneType.LOGIN?cc.director.loadScene("loginScene.fire"):e===SceneType.HALL&&cc.director.loadScene("hallScene.fire")}},{key:"getCurScene",value:function(){var e=cc.find("Canvas");return this.sceneType===SceneType.LOGIN?e.getComponent("LoginScene"):this.sceneType===SceneType.HALL?e.getComponent("HallScene"):void 0}},{key:"instantiatePrefab",value:function(e){var t=this.getCurScene().getPrefab(e);if(t)return cc.instantiate(t)}}]),e}();window.sceneMgr=new o,cc._RF.pop()},{}],Scene:[function(o,e,t){"use strict";cc._RF.push(e,"4b1aby+lFlD06cgH32T19wp","Scene");var n=cc.Class({extends:cc.Component,properties:{prefabs:[cc.Prefab]},ctor:function(){this.canvas=void 0,this.sceneType=void 0,this.uiLayerList=[],this.self=this},onLoad:function(){for(var e in ZorderLayer){var t=ZorderLayer[e],n=new cc.Node(e);n.parent=this.node,n.setPosition(0,0),n.setLocalZOrder(t),this.uiLayerList[t]=n}this.addLuarnnerView()},start:function(){},addChild:function(e,t){var n=this.uiLayerList[t];e.parent=n},getPrefab:function(e){for(var t=0;t<this.prefabs.length;t++){var n=this.prefabs[t];if(n.name===e)return n}},addLuarnnerView:function(){if(1===LUARNNER_DEBUG){var e=cc.director.getVisibleSize(),t=new cc.Node("blockBtn"),n=t.addComponent(cc.Sprite);n.sizeMode=cc.Sprite.SizeMode.CUSTOM,n.spriteFrame=new cc.SpriteFrame(cc.url.raw("resources/block.png")),t.opacity=100,t.rotation=45,t.setPosition(-e.width/2,e.height/2),t.setContentSize(70,70),this.addChild(t,ZorderLayer.Luarnner);var r=t.addComponent(cc.Widget);r.top=0,r.left=0,t.addComponent(cc.Button).transition=cc.Button.Transition.COLOR,t.on("cc.Node.EventType.TOUCH_END",function(e){o("../testtool/JsRunner").runTest()});t.addComponent(cc.Widget)}}});e.exports=n,cc._RF.pop()},{"../testtool/JsRunner":"JsRunner"}],Typedefine:[function(e,t,n){"use strict";cc._RF.push(t,"5d0c4JIEFlAhra21+VT6WeF","Typedefine"),window.ZorderLayer={Luarnner:5e3,TopPanel:2e3,UIPanel:0},window.SceneType={LOGIN:1,HALL:2},cc._RF.pop()},{}],Vector:[function(e,t,n){"use strict";cc._RF.push(t,"50ce4l8kRNDSLwePD7+QuSn","Vector");var r=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();var o=function(){function e(){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this._objects=new Array}return r(e,[{key:"add",value:function(e){null!=e&&this._objects.push(e)}},{key:"addAll",value:function(e){if(null!=e)for(var t=0;t<e.size();t++)this.add(e[t])}},{key:"insert",value:function(e,t){this._objects.splice(e,0,t)}},{key:"set",value:function(e,t){"number"==typeof e&&(e<this._objects.length?this._objects[e]=t:this.add(t))}},{key:"get",value:function(e){return this._objects[e]}},{key:"contains",value:function(e){for(var t=this._objects.length;t--;)if(this._objects[t]===obj)return!0;return!1}},{key:"sort",value:function(e){"function"==typeof e&&this._objects.sort(e)}},{key:"removeAt",value:function(e){this._objects.splice(e,1)}},{key:"removeData",value:function(e){var t=this._objects.indexOf(e);-1!==t&&this._objects.splice(t,1)}},{key:"find",value:function(e){return this._objects.indexOf(e)}},{key:"removeAll",value:function(e){if(!(void 0!==e||e.size()<=0))for(var t=this._objects.length-1;t<=0;t--){e.contains(this._objects[t])&&this.removeAt(t)}}},{key:"size",value:function(){return this._objects.length}},{key:"clear",value:function(){this._objects.splice(0,this._objects.length)}},{key:"tostring",value:function(){console.log("------------Tostring------------")}}]),e}();window.Vector=o,cc._RF.pop()},{}],cell:[function(e,t,n){"use strict";cc._RF.push(t,"c2031c7bJVEn7WRH8v6uNfT","cell"),cc.Class({extends:cc.Component,properties:{btn:{default:null,type:cc.Node},cell:{default:null,type:cc.Node}},onLoad:function(){},start:function(){}}),cc._RF.pop()},{}],config:[function(e,t,n){"use strict";cc._RF.push(t,"6a45aMbNblG1peM8aZBnRsr","config"),window.DEBUG=2,window.ADDERSS="localhost",window.LUARNNER_DEBUG=1,window.CC_SHOW_FPS=!0,window.serverHost="http://localhost",window.serverPort="3080",cc._RF.pop()},{}],gameLogic:[function(e,t,n){"use strict";cc._RF.push(t,"30a1co66g9Mt51HgyNaBt1U","gameLogic");var r={creatCellStyle:function(e,t){var n=[-1,0,1],r=[1,0,-1];for(var o in e){var i,c,l=e[o];i=l.x,c=l.y;for(var u=0;u<3;u++)for(var s=0;s<3;s++)if(0!=n[u]||0!=r[s]){var a=getValue(t,{x:i+n[u],y:c+r[s]});a&&"boom"!=a.style&&(a.style=a.style+1)}}return t},isBlank:function(e,t){var n=new Queue;n.enqueue(t);var r=[];r.push(t);for(var o=[-1,0,1],i=[1,0,-1];0==n.isEmpty();)for(var c=n.dequeue(),l=c.x,u=c.y,s=0;s<3;s++)for(var a=0;a<3;a++)if(0!=o[s]||0!=i[a]){var f={x:l+o[s],y:u+i[a]};if(!hasValue2(r,f)){var p=getValue(e,f);p&&0==p.style&&(r.push(p.id),n.enqueue(p.id))}}return r},clickCellDeal:function(e,t){var n=getValue(e,t);if(!n.flag)return"boom"==n.style?(console.log("游戏失败，点击到炸弹！！"),!1):0!=n.style||this.isBlank(e,t);console.log("do nothing")},isWin:function(e,t,n){var r=0;for(var o in e)e[o].touch&&r++;return n-r==t}};t.exports=r,cc._RF.pop()},{}],gameModel:[function(e,t,n){"use strict";cc._RF.push(t,"e1978d6JU1NBpM+Q9ixp4fN","gameModel");t.exports={cellImgSize:120,column:6,row:6,cellScale:1,boomCount:7,layoutSize:{w:750,h:800}},cc._RF.pop()},{}],gameUI:[function(e,t,n){"use strict";cc._RF.push(t,"b7a29iVOwVElYzRGpE7QrqE","gameUI");e("util");var o={0:"gameUI/cell0",1:"gameUI/1",2:"gameUI/2",3:"gameUI/3",4:"gameUI/4",5:"gameUI/5",6:"gameUI/6",7:"gameUI/7",9:"gameUI/8",flag:"gameUI/flagset",boom:"gameUI/mine",init:"gameUI/cell_light"},r=e("Scene"),i=e("./gameModel"),c=e("./gameLogic");cc.Class({extends:r,properties:{label:{default:null,type:cc.Label},text:"Hello, World!",layout:{default:null,type:cc.Node},cell:{default:null,type:cc.Prefab},loseAmi:{default:null,type:cc.Prefab},winAmi:{default:null,type:cc.Prefab}},ctor:function(){this.cellPool={},this.boomIndex=[],this.cellIndex={},this.isUseFlag=!1},onLoad:function(){r.prototype.onLoad.apply(this),this.label.string=this.text,this.layoutNode=this.node.getChildByName("layout"),this.layoutNode.width=i.cellScale*i.cellImgSize*i.column,this.layoutNode.height=i.cellScale*i.cellImgSize*i.row;var e=this.layoutNode.getComponent("cc.Layout");e.cellSize.width=i.cellScale*i.cellImgSize,e.cellSize.height=i.cellScale*i.cellImgSize,this.addCell(),this.btn_restart=this.node.getChildByName("btn_restart");var n=this;this.btn_restart.on("click",function(e){n.initCell(),n.creatBoom(i.boomCount),console.log("重新开始")}),this.btn_flagOrNormal=this.node.getChildByName("btn_flagOrNormal");n=this;this.btn_flagOrNormal.on("click",function(e){var t=e.detail;n.isUseFlag?(n.isUseFlag=!1,t.node.color=cc.Color.GRAY):(n.isUseFlag=!0,t.node.setColor(cc.Color.WHITE))})},addCell:function(){for(var e=1,t=1;t<=i.row*i.column;t++){var n=cc.instantiate(this.cell);if(n.setScale(i.cellScale),t%i.column==0)var r=i.column;else r=t%i.column;n.id={x:e,y:r},t%i.column==0&&e++,n.style=0,this.layout.addChild(n),(this.cellPool[t]=n).flag=!1,n.touch=!1,n.getChildByName("btn").on("click",handler(this,this.clickCellCb),this)}this.creatBoom(i.boomCount)},clickCellCb:function(e){var t=e.detail;if(this.isUseFlag){var n=t.node.parent.getChildByName("flag");n.active?(n.active=!1,t.node.parent.flag=!1):(n.active=!0,t.node.parent.flag=!0)}else this.dealCell(t.node.parent.id),t.node.parent.touch=!0,this.isWin()},isWin:function(){if(c.isWin(this.cellPool,i.boomCount,i.row*i.column)){console.log("游戏胜利，游戏结束,处理游戏胜利逻辑");var e=cc.instantiate(this.winAmi);this.node.addChild(e),e.setPosition(0,0);var t=e.getComponent(cc.Animation);t.wrapMode=cc.WrapMode.Loop,t.play().repeatCount=4,t.on("finished",function(){e.destroy()},this)}else console.log("继续游戏")},dealCell:function(e){var t=c.clickCellDeal(this.cellPool,e);if(0==t){this.showAllCell();var n=cc.instantiate(this.loseAmi);this.node.addChild(n),n.setPosition(0,0);var r=n.getComponent(cc.Animation);r.play().repeatCount=4,r.on("finished",function(){n.destroy()},this)}else if(1==t)this.showCell(e);else for(var o in t)this.showCell(t[o])},creatBoom:function(e){for(var t=0;t<e;){var n={x:Math.ceil(Math.random()*i.row),y:Math.ceil(Math.random()*i.column)};if(1==hasValue2(this.boomIndex,n));else{this.boomIndex.push(n);var r=getValue(this.cellPool,n);r&&(r.style="boom"),t++}}c.creatCellStyle(this.boomIndex,this.cellPool)},showAllCell:function(){for(var e in this.cellPool){var t=this.cellPool[e].getChildByName("sp"),n=cc.url.raw("resources/"+o[this.cellPool[e].style]+".png");t.getComponent("cc.Sprite").spriteFrame=new cc.SpriteFrame(n)}},initCell:function(){var e=cc.url.raw("resources/gameUI/cell_light.png");for(var t in this.cellPool){this.cellPool[t].getChildByName("sp").getComponent("cc.Sprite").spriteFrame=new cc.SpriteFrame(e),this.cellPool[t].style=0,this.cellPool[t].touch=!1,this.cellPool[t].getChildByName("flag").active=!1}this.boomIndex=[]},showCell:function(e){var t=this.cellPool[(e.x-1)*i.row+e.y].getChildByName("sp"),n=this.cellPool[(e.x-1)*i.row+e.y];n.touch=!0;var r=cc.url.raw("resources/"+o[n.style]+".png");t.getComponent("cc.Sprite").spriteFrame=new cc.SpriteFrame(r)},update:function(e){}}),cc._RF.pop()},{"./gameLogic":"gameLogic","./gameModel":"gameModel",Scene:"Scene",util:4}],queue:[function(e,t,n){"use strict";cc._RF.push(t,"e675deqFWNKE6ri9n9dRS+v","queue"),window.Queue=function(){var t=[];this.enqueue=function(e){t.push(e)},this.dequeue=function(){return t.shift()},this.front=function(){return t[0]},this.isEmpty=function(){return 0==t.length},this.size=function(){return t.length},this.print=function(){return t.toString()}},cc._RF.pop()},{}]},{},["cell","gameLogic","gameModel","gameUI","Init","config","Typedefine","EventMgr","Scene","SceneMgr","JsRunner","Functions","Vector","queue"]);