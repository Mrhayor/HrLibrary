function Xm(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Zm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var sf={exports:{}},hs={},af={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Di=Symbol.for("react.element"),eg=Symbol.for("react.portal"),tg=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),rg=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),og=Symbol.for("react.context"),sg=Symbol.for("react.forward_ref"),ag=Symbol.for("react.suspense"),lg=Symbol.for("react.memo"),ug=Symbol.for("react.lazy"),uc=Symbol.iterator;function cg(t){return t===null||typeof t!="object"?null:(t=uc&&t[uc]||t["@@iterator"],typeof t=="function"?t:null)}var lf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},uf=Object.assign,cf={};function yr(t,e,n){this.props=t,this.context=e,this.refs=cf,this.updater=n||lf}yr.prototype.isReactComponent={};yr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};yr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function df(){}df.prototype=yr.prototype;function zl(t,e,n){this.props=t,this.context=e,this.refs=cf,this.updater=n||lf}var Bl=zl.prototype=new df;Bl.constructor=zl;uf(Bl,yr.prototype);Bl.isPureReactComponent=!0;var cc=Array.isArray,ff=Object.prototype.hasOwnProperty,Vl={current:null},hf={key:!0,ref:!0,__self:!0,__source:!0};function pf(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ff.call(e,r)&&!hf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Di,type:t,key:o,ref:s,props:i,_owner:Vl.current}}function dg(t,e){return{$$typeof:Di,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Di}function fg(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dc=/\/+/g;function Ys(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fg(""+t.key):e.toString(36)}function fo(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Di:case eg:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ys(s,0):r,cc(i)?(n="",t!=null&&(n=t.replace(dc,"$&/")+"/"),fo(i,e,n,"",function(u){return u})):i!=null&&(Wl(i)&&(i=dg(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(dc,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",cc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ys(o,a);s+=fo(o,e,n,l,i)}else if(l=cg(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ys(o,a++),s+=fo(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Gi(t,e,n){if(t==null)return t;var r=[],i=0;return fo(t,r,"","",function(o){return e.call(n,o,i++)}),r}function hg(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var we={current:null},ho={transition:null},pg={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:ho,ReactCurrentOwner:Vl};D.Children={map:Gi,forEach:function(t,e,n){Gi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Gi(t,function(){e++}),e},toArray:function(t){return Gi(t,function(e){return e})||[]},only:function(t){if(!Wl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=yr;D.Fragment=tg;D.Profiler=rg;D.PureComponent=zl;D.StrictMode=ng;D.Suspense=ag;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pg;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=uf({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Vl.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ff.call(e,l)&&!hf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Di,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:og,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ig,_context:t},t.Consumer=t};D.createElement=pf;D.createFactory=function(t){var e=pf.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:sg,render:t}};D.isValidElement=Wl;D.lazy=function(t){return{$$typeof:ug,_payload:{_status:-1,_result:t},_init:hg}};D.memo=function(t,e){return{$$typeof:lg,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=ho.transition;ho.transition={};try{t()}finally{ho.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return we.current.useCallback(t,e)};D.useContext=function(t){return we.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return we.current.useDeferredValue(t)};D.useEffect=function(t,e){return we.current.useEffect(t,e)};D.useId=function(){return we.current.useId()};D.useImperativeHandle=function(t,e,n){return we.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return we.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return we.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return we.current.useMemo(t,e)};D.useReducer=function(t,e,n){return we.current.useReducer(t,e,n)};D.useRef=function(t){return we.current.useRef(t)};D.useState=function(t){return we.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return we.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return we.current.useTransition()};D.version="18.2.0";af.exports=D;var S=af.exports;const gt=Zm(S),mg=Xm({__proto__:null,default:gt},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gg=S,vg=Symbol.for("react.element"),yg=Symbol.for("react.fragment"),wg=Object.prototype.hasOwnProperty,_g=gg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Eg={key:!0,ref:!0,__self:!0,__source:!0};function mf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)wg.call(e,r)&&!Eg.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:vg,type:t,key:o,ref:s,props:i,_owner:_g.current}}hs.Fragment=yg;hs.jsx=mf;hs.jsxs=mf;sf.exports=hs;var m=sf.exports,xa={},gf={exports:{}},De={},vf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,A){var L=N.length;N.push(A);e:for(;0<L;){var X=L-1>>>1,oe=N[X];if(0<i(oe,A))N[X]=A,N[L]=oe,L=X;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],L=N.pop();if(L!==A){N[0]=L;e:for(var X=0,oe=N.length,Hi=oe>>>1;X<Hi;){var un=2*(X+1)-1,qs=N[un],cn=un+1,Ki=N[cn];if(0>i(qs,L))cn<oe&&0>i(Ki,qs)?(N[X]=Ki,N[cn]=L,X=cn):(N[X]=qs,N[un]=L,X=un);else if(cn<oe&&0>i(Ki,L))N[X]=Ki,N[cn]=L,X=cn;else break e}}return A}function i(N,A){var L=N.sortIndex-A.sortIndex;return L!==0?L:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,c=null,g=3,y=!1,v=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(N){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=N)r(u),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(u)}}function w(N){if(_=!1,h(N),!v)if(n(l)!==null)v=!0,Ks(k);else{var A=n(u);A!==null&&Gs(w,A.startTime-N)}}function k(N,A){v=!1,_&&(_=!1,p(O),O=-1),y=!0;var L=g;try{for(h(A),c=n(l);c!==null&&(!(c.expirationTime>A)||N&&!We());){var X=c.callback;if(typeof X=="function"){c.callback=null,g=c.priorityLevel;var oe=X(c.expirationTime<=A);A=t.unstable_now(),typeof oe=="function"?c.callback=oe:c===n(l)&&r(l),h(A)}else r(l);c=n(l)}if(c!==null)var Hi=!0;else{var un=n(u);un!==null&&Gs(w,un.startTime-A),Hi=!1}return Hi}finally{c=null,g=L,y=!1}}var P=!1,R=null,O=-1,U=5,x=-1;function We(){return!(t.unstable_now()-x<U)}function Nr(){if(R!==null){var N=t.unstable_now();x=N;var A=!0;try{A=R(!0,N)}finally{A?Or():(P=!1,R=null)}}else P=!1}var Or;if(typeof f=="function")Or=function(){f(Nr)};else if(typeof MessageChannel<"u"){var lc=new MessageChannel,Jm=lc.port2;lc.port1.onmessage=Nr,Or=function(){Jm.postMessage(null)}}else Or=function(){T(Nr,0)};function Ks(N){R=N,P||(P=!0,Or())}function Gs(N,A){O=T(function(){N(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,Ks(k))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var L=g;g=A;try{return N()}finally{g=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var L=g;g=N;try{return A()}finally{g=L}},t.unstable_scheduleCallback=function(N,A,L){var X=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?X+L:X):L=X,N){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=L+oe,N={id:d++,callback:A,priorityLevel:N,startTime:L,expirationTime:oe,sortIndex:-1},L>X?(N.sortIndex=L,e(u,N),n(l)===null&&N===n(u)&&(_?(p(O),O=-1):_=!0,Gs(w,L-X))):(N.sortIndex=oe,e(l,N),v||y||(v=!0,Ks(k))),N},t.unstable_shouldYield=We,t.unstable_wrapCallback=function(N){var A=g;return function(){var L=g;g=A;try{return N.apply(this,arguments)}finally{g=L}}}})(yf);vf.exports=yf;var Ig=vf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf=S,Le=Ig;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _f=new Set,ai={};function xn(t,e){lr(t,e),lr(t+"Capture",e)}function lr(t,e){for(ai[t]=e,t=0;t<e.length;t++)_f.add(e[t])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),La=Object.prototype.hasOwnProperty,Sg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fc={},hc={};function kg(t){return La.call(hc,t)?!0:La.call(fc,t)?!1:Sg.test(t)?hc[t]=!0:(fc[t]=!0,!1)}function Tg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Cg(t,e,n,r){if(e===null||typeof e>"u"||Tg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function _e(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){fe[t]=new _e(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];fe[e]=new _e(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){fe[t]=new _e(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){fe[t]=new _e(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){fe[t]=new _e(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){fe[t]=new _e(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){fe[t]=new _e(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){fe[t]=new _e(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){fe[t]=new _e(t,5,!1,t.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Hl(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($l,Hl);fe[e]=new _e(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($l,Hl);fe[e]=new _e(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($l,Hl);fe[e]=new _e(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){fe[t]=new _e(t,1,!1,t.toLowerCase(),null,!1,!1)});fe.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){fe[t]=new _e(t,1,!1,t.toLowerCase(),null,!0,!0)});function Kl(t,e,n,r){var i=fe.hasOwnProperty(e)?fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Cg(e,n,i,r)&&(n=null),r||i===null?kg(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tt=wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qi=Symbol.for("react.element"),zn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),Gl=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Ef=Symbol.for("react.provider"),If=Symbol.for("react.context"),ql=Symbol.for("react.forward_ref"),ba=Symbol.for("react.suspense"),Ma=Symbol.for("react.suspense_list"),Yl=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Sf=Symbol.for("react.offscreen"),pc=Symbol.iterator;function Ar(t){return t===null||typeof t!="object"?null:(t=pc&&t[pc]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,Qs;function Vr(t){if(Qs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qs=e&&e[1]||""}return`
`+Qs+t}var Js=!1;function Xs(t,e){if(!t||Js)return"";Js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Js=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vr(t):""}function Pg(t){switch(t.tag){case 5:return Vr(t.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return t=Xs(t.type,!1),t;case 11:return t=Xs(t.type.render,!1),t;case 1:return t=Xs(t.type,!0),t;default:return""}}function Ua(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Bn:return"Fragment";case zn:return"Portal";case Da:return"Profiler";case Gl:return"StrictMode";case ba:return"Suspense";case Ma:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case If:return(t.displayName||"Context")+".Consumer";case Ef:return(t._context.displayName||"Context")+".Provider";case ql:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yl:return e=t.displayName||null,e!==null?e:Ua(t.type)||"Memo";case Lt:e=t._payload,t=t._init;try{return Ua(t(e))}catch{}}return null}function Rg(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ua(e);case 8:return e===Gl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ng(t){var e=kf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yi(t){t._valueTracker||(t._valueTracker=Ng(t))}function Tf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=kf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ja(t,e){var n=e.checked;return G({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cf(t,e){e=e.checked,e!=null&&Kl(t,"checked",e,!1)}function Fa(t,e){Cf(t,e);var n=Xt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?za(t,e.type,n):e.hasOwnProperty("defaultValue")&&za(t,e.type,Xt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function za(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Wr=Array.isArray;function Zn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return G({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function vc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(Wr(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xt(n)}}function Pf(t,e){var n=Xt(e.value),r=Xt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Va(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qi,Nf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function li(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Og=["Webkit","ms","Moz","O"];Object.keys(Yr).forEach(function(t){Og.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yr[e]=Yr[t]})});function Of(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yr.hasOwnProperty(t)&&Yr[t]?(""+e).trim():e+"px"}function Af(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Of(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Ag=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wa(t,e){if(e){if(Ag[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function $a(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Ql(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,er=null,tr=null;function wc(t){if(t=Ui(t)){if(typeof Ka!="function")throw Error(E(280));var e=t.stateNode;e&&(e=ys(e),Ka(t.stateNode,t.type,e))}}function xf(t){er?tr?tr.push(t):tr=[t]:er=t}function Lf(){if(er){var t=er,e=tr;if(tr=er=null,wc(t),e)for(t=0;t<e.length;t++)wc(e[t])}}function Df(t,e){return t(e)}function bf(){}var Zs=!1;function Mf(t,e,n){if(Zs)return t(e,n);Zs=!0;try{return Df(t,e,n)}finally{Zs=!1,(er!==null||tr!==null)&&(bf(),Lf())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=ys(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var Ga=!1;if(_t)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Ga=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Ga=!1}function xg(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Qr=!1,Oo=null,Ao=!1,qa=null,Lg={onError:function(t){Qr=!0,Oo=t}};function Dg(t,e,n,r,i,o,s,a,l){Qr=!1,Oo=null,xg.apply(Lg,arguments)}function bg(t,e,n,r,i,o,s,a,l){if(Dg.apply(this,arguments),Qr){if(Qr){var u=Oo;Qr=!1,Oo=null}else throw Error(E(198));Ao||(Ao=!0,qa=u)}}function Ln(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _c(t){if(Ln(t)!==t)throw Error(E(188))}function Mg(t){var e=t.alternate;if(!e){if(e=Ln(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return _c(i),t;if(o===r)return _c(i),e;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function jf(t){return t=Mg(t),t!==null?Ff(t):null}function Ff(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ff(t);if(e!==null)return e;t=t.sibling}return null}var zf=Le.unstable_scheduleCallback,Ec=Le.unstable_cancelCallback,Ug=Le.unstable_shouldYield,jg=Le.unstable_requestPaint,Z=Le.unstable_now,Fg=Le.unstable_getCurrentPriorityLevel,Jl=Le.unstable_ImmediatePriority,Bf=Le.unstable_UserBlockingPriority,xo=Le.unstable_NormalPriority,zg=Le.unstable_LowPriority,Vf=Le.unstable_IdlePriority,ps=null,st=null;function Bg(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(ps,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:$g,Vg=Math.log,Wg=Math.LN2;function $g(t){return t>>>=0,t===0?32:31-(Vg(t)/Wg|0)|0}var Ji=64,Xi=4194304;function $r(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Lo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=$r(a):(o&=s,o!==0&&(r=$r(o)))}else s=n&~i,s!==0?r=$r(s):o!==0&&(r=$r(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Hg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Hg(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Ya(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Wf(){var t=Ji;return Ji<<=1,!(Ji&4194240)&&(Ji=64),t}function ea(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function Gg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Xl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var j=0;function $f(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hf,Zl,Kf,Gf,qf,Qa=!1,Zi=[],Bt=null,Vt=null,Wt=null,ci=new Map,di=new Map,bt=[],qg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ic(t,e){switch(t){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":ci.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(e.pointerId)}}function Lr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ui(e),e!==null&&Zl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Yg(t,e,n,r,i){switch(e){case"focusin":return Bt=Lr(Bt,t,e,n,r,i),!0;case"dragenter":return Vt=Lr(Vt,t,e,n,r,i),!0;case"mouseover":return Wt=Lr(Wt,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ci.set(o,Lr(ci.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,di.set(o,Lr(di.get(o)||null,t,e,n,r,i)),!0}return!1}function Yf(t){var e=pn(t.target);if(e!==null){var n=Ln(e);if(n!==null){if(e=n.tag,e===13){if(e=Uf(n),e!==null){t.blockedOn=e,qf(t.priority,function(){Kf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ja(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return e=Ui(n),e!==null&&Zl(e),t.blockedOn=n,!1;e.shift()}return!0}function Sc(t,e,n){po(t)&&n.delete(e)}function Qg(){Qa=!1,Bt!==null&&po(Bt)&&(Bt=null),Vt!==null&&po(Vt)&&(Vt=null),Wt!==null&&po(Wt)&&(Wt=null),ci.forEach(Sc),di.forEach(Sc)}function Dr(t,e){t.blockedOn===e&&(t.blockedOn=null,Qa||(Qa=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Qg)))}function fi(t){function e(i){return Dr(i,t)}if(0<Zi.length){Dr(Zi[0],t);for(var n=1;n<Zi.length;n++){var r=Zi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bt!==null&&Dr(Bt,t),Vt!==null&&Dr(Vt,t),Wt!==null&&Dr(Wt,t),ci.forEach(e),di.forEach(e),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)Yf(n),n.blockedOn===null&&bt.shift()}var nr=Tt.ReactCurrentBatchConfig,Do=!0;function Jg(t,e,n,r){var i=j,o=nr.transition;nr.transition=null;try{j=1,eu(t,e,n,r)}finally{j=i,nr.transition=o}}function Xg(t,e,n,r){var i=j,o=nr.transition;nr.transition=null;try{j=4,eu(t,e,n,r)}finally{j=i,nr.transition=o}}function eu(t,e,n,r){if(Do){var i=Ja(t,e,n,r);if(i===null)ca(t,e,r,bo,n),Ic(t,r);else if(Yg(i,t,e,n,r))r.stopPropagation();else if(Ic(t,r),e&4&&-1<qg.indexOf(t)){for(;i!==null;){var o=Ui(i);if(o!==null&&Hf(o),o=Ja(t,e,n,r),o===null&&ca(t,e,r,bo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ca(t,e,r,null,n)}}var bo=null;function Ja(t,e,n,r){if(bo=null,t=Ql(r),t=pn(t),t!==null)if(e=Ln(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Uf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bo=t,null}function Qf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fg()){case Jl:return 1;case Bf:return 4;case xo:case zg:return 16;case Vf:return 536870912;default:return 16}default:return 16}}var Ut=null,tu=null,mo=null;function Jf(){if(mo)return mo;var t,e=tu,n=e.length,r,i="value"in Ut?Ut.value:Ut.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return mo=i.slice(t,1<r?1-r:void 0)}function go(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function eo(){return!0}function kc(){return!1}function be(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?eo:kc,this.isPropagationStopped=kc,this}return G(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=eo)},persist:function(){},isPersistent:eo}),e}var wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=be(wr),Mi=G({},wr,{view:0,detail:0}),Zg=be(Mi),ta,na,br,ms=G({},Mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==br&&(br&&t.type==="mousemove"?(ta=t.screenX-br.screenX,na=t.screenY-br.screenY):na=ta=0,br=t),ta)},movementY:function(t){return"movementY"in t?t.movementY:na}}),Tc=be(ms),ev=G({},ms,{dataTransfer:0}),tv=be(ev),nv=G({},Mi,{relatedTarget:0}),ra=be(nv),rv=G({},wr,{animationName:0,elapsedTime:0,pseudoElement:0}),iv=be(rv),ov=G({},wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sv=be(ov),av=G({},wr,{data:0}),Cc=be(av),lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=cv[t])?!!e[t]:!1}function ru(){return dv}var fv=G({},Mi,{key:function(t){if(t.key){var e=lv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(t){return t.type==="keypress"?go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),hv=be(fv),pv=G({},ms,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pc=be(pv),mv=G({},Mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),gv=be(mv),vv=G({},wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=be(vv),wv=G({},ms,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=be(wv),Ev=[9,13,27,32],iu=_t&&"CompositionEvent"in window,Jr=null;_t&&"documentMode"in document&&(Jr=document.documentMode);var Iv=_t&&"TextEvent"in window&&!Jr,Xf=_t&&(!iu||Jr&&8<Jr&&11>=Jr),Rc=" ",Nc=!1;function Zf(t,e){switch(t){case"keyup":return Ev.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vn=!1;function Sv(t,e){switch(t){case"compositionend":return eh(e);case"keypress":return e.which!==32?null:(Nc=!0,Rc);case"textInput":return t=e.data,t===Rc&&Nc?null:t;default:return null}}function kv(t,e){if(Vn)return t==="compositionend"||!iu&&Zf(t,e)?(t=Jf(),mo=tu=Ut=null,Vn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xf&&e.locale!=="ko"?null:e.data;default:return null}}var Tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Tv[t.type]:e==="textarea"}function th(t,e,n,r){xf(r),e=Mo(e,"onChange"),0<e.length&&(n=new nu("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Xr=null,hi=null;function Cv(t){fh(t,0)}function gs(t){var e=Hn(t);if(Tf(e))return t}function Pv(t,e){if(t==="change")return e}var nh=!1;if(_t){var ia;if(_t){var oa="oninput"in document;if(!oa){var Ac=document.createElement("div");Ac.setAttribute("oninput","return;"),oa=typeof Ac.oninput=="function"}ia=oa}else ia=!1;nh=ia&&(!document.documentMode||9<document.documentMode)}function xc(){Xr&&(Xr.detachEvent("onpropertychange",rh),hi=Xr=null)}function rh(t){if(t.propertyName==="value"&&gs(hi)){var e=[];th(e,hi,t,Ql(t)),Mf(Cv,e)}}function Rv(t,e,n){t==="focusin"?(xc(),Xr=e,hi=n,Xr.attachEvent("onpropertychange",rh)):t==="focusout"&&xc()}function Nv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return gs(hi)}function Ov(t,e){if(t==="click")return gs(e)}function Av(t,e){if(t==="input"||t==="change")return gs(e)}function xv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:xv;function pi(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!La.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function Lc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Dc(t,e){var n=Lc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lc(n)}}function ih(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ih(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function oh(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function ou(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Lv(t){var e=oh(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ih(n.ownerDocument.documentElement,n)){if(r!==null&&ou(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Dc(n,o);var s=Dc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Dv=_t&&"documentMode"in document&&11>=document.documentMode,Wn=null,Xa=null,Zr=null,Za=!1;function bc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Za||Wn==null||Wn!==No(r)||(r=Wn,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zr&&pi(Zr,r)||(Zr=r,r=Mo(Xa,"onSelect"),0<r.length&&(e=new nu("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wn)))}function to(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $n={animationend:to("Animation","AnimationEnd"),animationiteration:to("Animation","AnimationIteration"),animationstart:to("Animation","AnimationStart"),transitionend:to("Transition","TransitionEnd")},sa={},sh={};_t&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete $n.animationend.animation,delete $n.animationiteration.animation,delete $n.animationstart.animation),"TransitionEvent"in window||delete $n.transitionend.transition);function vs(t){if(sa[t])return sa[t];if(!$n[t])return t;var e=$n[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in sh)return sa[t]=e[n];return t}var ah=vs("animationend"),lh=vs("animationiteration"),uh=vs("animationstart"),ch=vs("transitionend"),dh=new Map,Mc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function on(t,e){dh.set(t,e),xn(e,[t])}for(var aa=0;aa<Mc.length;aa++){var la=Mc[aa],bv=la.toLowerCase(),Mv=la[0].toUpperCase()+la.slice(1);on(bv,"on"+Mv)}on(ah,"onAnimationEnd");on(lh,"onAnimationIteration");on(uh,"onAnimationStart");on("dblclick","onDoubleClick");on("focusin","onFocus");on("focusout","onBlur");on(ch,"onTransitionEnd");lr("onMouseEnter",["mouseout","mouseover"]);lr("onMouseLeave",["mouseout","mouseover"]);lr("onPointerEnter",["pointerout","pointerover"]);lr("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hr));function Uc(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bg(r,e,void 0,t),t.currentTarget=null}function fh(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Uc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Uc(i,a,u),o=l}}}if(Ao)throw t=qa,Ao=!1,qa=null,t}function B(t,e){var n=e[il];n===void 0&&(n=e[il]=new Set);var r=t+"__bubble";n.has(r)||(hh(e,t,2,!1),n.add(r))}function ua(t,e,n){var r=0;e&&(r|=4),hh(n,t,r,e)}var no="_reactListening"+Math.random().toString(36).slice(2);function mi(t){if(!t[no]){t[no]=!0,_f.forEach(function(n){n!=="selectionchange"&&(Uv.has(n)||ua(n,!1,t),ua(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[no]||(e[no]=!0,ua("selectionchange",!1,e))}}function hh(t,e,n,r){switch(Qf(e)){case 1:var i=Jg;break;case 4:i=Xg;break;default:i=eu}n=i.bind(null,e,n,t),i=void 0,!Ga||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ca(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=pn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Mf(function(){var u=o,d=Ql(n),c=[];e:{var g=dh.get(t);if(g!==void 0){var y=nu,v=t;switch(t){case"keypress":if(go(n)===0)break e;case"keydown":case"keyup":y=hv;break;case"focusin":v="focus",y=ra;break;case"focusout":v="blur",y=ra;break;case"beforeblur":case"afterblur":y=ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=gv;break;case ah:case lh:case uh:y=iv;break;case ch:y=yv;break;case"scroll":y=Zg;break;case"wheel":y=_v;break;case"copy":case"cut":case"paste":y=sv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Pc}var _=(e&4)!==0,T=!_&&t==="scroll",p=_?g!==null?g+"Capture":null:g;_=[];for(var f=u,h;f!==null;){h=f;var w=h.stateNode;if(h.tag===5&&w!==null&&(h=w,p!==null&&(w=ui(f,p),w!=null&&_.push(gi(f,w,h)))),T)break;f=f.return}0<_.length&&(g=new y(g,v,null,n,d),c.push({event:g,listeners:_}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",g&&n!==Ha&&(v=n.relatedTarget||n.fromElement)&&(pn(v)||v[Et]))break e;if((y||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?pn(v):null,v!==null&&(T=Ln(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(_=Tc,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Pc,w="onPointerLeave",p="onPointerEnter",f="pointer"),T=y==null?g:Hn(y),h=v==null?g:Hn(v),g=new _(w,f+"leave",y,n,d),g.target=T,g.relatedTarget=h,w=null,pn(d)===u&&(_=new _(p,f+"enter",v,n,d),_.target=h,_.relatedTarget=T,w=_),T=w,y&&v)t:{for(_=y,p=v,f=0,h=_;h;h=Un(h))f++;for(h=0,w=p;w;w=Un(w))h++;for(;0<f-h;)_=Un(_),f--;for(;0<h-f;)p=Un(p),h--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=Un(_),p=Un(p)}_=null}else _=null;y!==null&&jc(c,g,y,_,!1),v!==null&&T!==null&&jc(c,T,v,_,!0)}}e:{if(g=u?Hn(u):window,y=g.nodeName&&g.nodeName.toLowerCase(),y==="select"||y==="input"&&g.type==="file")var k=Pv;else if(Oc(g))if(nh)k=Av;else{k=Nv;var P=Rv}else(y=g.nodeName)&&y.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Ov);if(k&&(k=k(t,u))){th(c,k,n,d);break e}P&&P(t,g,u),t==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&za(g,"number",g.value)}switch(P=u?Hn(u):window,t){case"focusin":(Oc(P)||P.contentEditable==="true")&&(Wn=P,Xa=u,Zr=null);break;case"focusout":Zr=Xa=Wn=null;break;case"mousedown":Za=!0;break;case"contextmenu":case"mouseup":case"dragend":Za=!1,bc(c,n,d);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":bc(c,n,d)}var R;if(iu)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Vn?Zf(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Xf&&n.locale!=="ko"&&(Vn||O!=="onCompositionStart"?O==="onCompositionEnd"&&Vn&&(R=Jf()):(Ut=d,tu="value"in Ut?Ut.value:Ut.textContent,Vn=!0)),P=Mo(u,O),0<P.length&&(O=new Cc(O,t,null,n,d),c.push({event:O,listeners:P}),R?O.data=R:(R=eh(n),R!==null&&(O.data=R)))),(R=Iv?Sv(t,n):kv(t,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(d=new Cc("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=R))}fh(c,e)})}function gi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ui(t,n),o!=null&&r.unshift(gi(t,o,i)),o=ui(t,e),o!=null&&r.push(gi(t,o,i))),t=t.return}return r}function Un(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ui(n,o),l!=null&&s.unshift(gi(n,l,a))):i||(l=ui(n,o),l!=null&&s.push(gi(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var jv=/\r\n?/g,Fv=/\u0000|\uFFFD/g;function Fc(t){return(typeof t=="string"?t:""+t).replace(jv,`
`).replace(Fv,"")}function ro(t,e,n){if(e=Fc(e),Fc(t)!==e&&n)throw Error(E(425))}function Uo(){}var el=null,tl=null;function nl(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rl=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof zc<"u"?function(t){return zc.resolve(null).then(t).catch(Vv)}:rl;function Vv(t){setTimeout(function(){throw t})}function da(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(e)}function $t(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _r=Math.random().toString(36).slice(2),et="__reactFiber$"+_r,vi="__reactProps$"+_r,Et="__reactContainer$"+_r,il="__reactEvents$"+_r,Wv="__reactListeners$"+_r,$v="__reactHandles$"+_r;function pn(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Et]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bc(t);t!==null;){if(n=t[et])return n;t=Bc(t)}return e}t=n,n=t.parentNode}return null}function Ui(t){return t=t[et]||t[Et],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Hn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function ys(t){return t[vi]||null}var ol=[],Kn=-1;function sn(t){return{current:t}}function V(t){0>Kn||(t.current=ol[Kn],ol[Kn]=null,Kn--)}function z(t,e){Kn++,ol[Kn]=t.current,t.current=e}var Zt={},ge=sn(Zt),ke=sn(!1),Sn=Zt;function ur(t,e){var n=t.type.contextTypes;if(!n)return Zt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function jo(){V(ke),V(ge)}function Vc(t,e,n){if(ge.current!==Zt)throw Error(E(168));z(ge,e),z(ke,n)}function ph(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,Rg(t)||"Unknown",i));return G({},n,r)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zt,Sn=ge.current,z(ge,t),z(ke,ke.current),!0}function Wc(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=ph(t,e,Sn),r.__reactInternalMemoizedMergedChildContext=t,V(ke),V(ge),z(ge,t)):V(ke),z(ke,n)}var dt=null,ws=!1,fa=!1;function mh(t){dt===null?dt=[t]:dt.push(t)}function Hv(t){ws=!0,mh(t)}function an(){if(!fa&&dt!==null){fa=!0;var t=0,e=j;try{var n=dt;for(j=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dt=null,ws=!1}catch(i){throw dt!==null&&(dt=dt.slice(t+1)),zf(Jl,an),i}finally{j=e,fa=!1}}return null}var Gn=[],qn=0,zo=null,Bo=0,Me=[],Ue=0,kn=null,ft=1,ht="";function dn(t,e){Gn[qn++]=Bo,Gn[qn++]=zo,zo=t,Bo=e}function gh(t,e,n){Me[Ue++]=ft,Me[Ue++]=ht,Me[Ue++]=kn,kn=t;var r=ft;t=ht;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ft=1<<32-qe(e)+i|n<<i|r,ht=o+t}else ft=1<<o|n<<i|r,ht=t}function su(t){t.return!==null&&(dn(t,1),gh(t,1,0))}function au(t){for(;t===zo;)zo=Gn[--qn],Gn[qn]=null,Bo=Gn[--qn],Gn[qn]=null;for(;t===kn;)kn=Me[--Ue],Me[Ue]=null,ht=Me[--Ue],Me[Ue]=null,ft=Me[--Ue],Me[Ue]=null}var xe=null,Oe=null,W=!1,Ge=null;function vh(t,e){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $c(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xe=t,Oe=$t(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xe=t,Oe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kn!==null?{id:ft,overflow:ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xe=t,Oe=null,!0):!1;default:return!1}}function sl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function al(t){if(W){var e=Oe;if(e){var n=e;if(!$c(t,e)){if(sl(t))throw Error(E(418));e=$t(n.nextSibling);var r=xe;e&&$c(t,e)?vh(r,n):(t.flags=t.flags&-4097|2,W=!1,xe=t)}}else{if(sl(t))throw Error(E(418));t.flags=t.flags&-4097|2,W=!1,xe=t}}}function Hc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xe=t}function io(t){if(t!==xe)return!1;if(!W)return Hc(t),W=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nl(t.type,t.memoizedProps)),e&&(e=Oe)){if(sl(t))throw yh(),Error(E(418));for(;e;)vh(t,e),e=$t(e.nextSibling)}if(Hc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Oe=$t(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Oe=null}}else Oe=xe?$t(t.stateNode.nextSibling):null;return!0}function yh(){for(var t=Oe;t;)t=$t(t.nextSibling)}function cr(){Oe=xe=null,W=!1}function lu(t){Ge===null?Ge=[t]:Ge.push(t)}var Kv=Tt.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=G({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Vo=sn(null),Wo=null,Yn=null,uu=null;function cu(){uu=Yn=Wo=null}function du(t){var e=Vo.current;V(Vo),t._currentValue=e}function ll(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function rr(t,e){Wo=t,uu=Yn=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Se=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(uu!==t)if(t={context:t,memoizedValue:e,next:null},Yn===null){if(Wo===null)throw Error(E(308));Yn=t,Wo.dependencies={lanes:0,firstContext:t}}else Yn=Yn.next=t;return e}var mn=null;function fu(t){mn===null?mn=[t]:mn.push(t)}function wh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,fu(e)):(n.next=i.next,i.next=n),e.interleaved=n,It(t,r)}function It(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dt=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _h(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ht(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,It(t,n)}return i=r.interleaved,i===null?(e.next=e,fu(r)):(e.next=i.next,i.next=e),r.interleaved=e,It(t,n)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xl(t,n)}}function Kc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $o(t,e,n,r){var i=t.updateQueue;Dt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var c=i.baseState;s=0,d=u=l=null,a=o;do{var g=a.lane,y=a.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(g=e,y=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){c=v.call(y,c,g);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,g=typeof v=="function"?v.call(y,c,g):v,g==null)break e;c=G({},c,g);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else y={eventTime:y,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=y,l=c):d=d.next=y,s|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Cn|=s,t.lanes=s,t.memoizedState=c}}function Gc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var Eh=new wf.Component().refs;function ul(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:G({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _s={isMounted:function(t){return(t=t._reactInternals)?Ln(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Gt(t),o=vt(r,i);o.payload=e,n!=null&&(o.callback=n),e=Ht(t,o,i),e!==null&&(Ye(e,t,i,r),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Gt(t),o=vt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Ht(t,o,i),e!==null&&(Ye(e,t,i,r),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=Gt(t),i=vt(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ht(t,i,r),e!==null&&(Ye(e,t,r,n),vo(e,t,r))}};function qc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!pi(n,r)||!pi(i,o):!0}function Ih(t,e,n){var r=!1,i=Zt,o=e.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=Te(e)?Sn:ge.current,r=e.contextTypes,o=(r=r!=null)?ur(t,i):Zt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_s,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Yc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_s.enqueueReplaceState(e,e.state,null)}function cl(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Eh,hu(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=Te(e)?Sn:ge.current,i.context=ur(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(ul(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_s.enqueueReplaceState(i,i.state,null),$o(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Mr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===Eh&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qc(t){var e=t._init;return e(t._payload)}function Sh(t){function e(p,f){if(t){var h=p.deletions;h===null?(p.deletions=[f],p.flags|=16):h.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=qt(p,f),p.index=0,p.sibling=null,p}function o(p,f,h){return p.index=h,t?(h=p.alternate,h!==null?(h=h.index,h<f?(p.flags|=2,f):h):(p.flags|=2,f)):(p.flags|=1048576,f)}function s(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,h,w){return f===null||f.tag!==6?(f=wa(h,p.mode,w),f.return=p,f):(f=i(f,h),f.return=p,f)}function l(p,f,h,w){var k=h.type;return k===Bn?d(p,f,h.props.children,w,h.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&Qc(k)===f.type)?(w=i(f,h.props),w.ref=Mr(p,f,h),w.return=p,w):(w=So(h.type,h.key,h.props,null,p.mode,w),w.ref=Mr(p,f,h),w.return=p,w)}function u(p,f,h,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=_a(h,p.mode,w),f.return=p,f):(f=i(f,h.children||[]),f.return=p,f)}function d(p,f,h,w,k){return f===null||f.tag!==7?(f=wn(h,p.mode,w,k),f.return=p,f):(f=i(f,h),f.return=p,f)}function c(p,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wa(""+f,p.mode,h),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case qi:return h=So(f.type,f.key,f.props,null,p.mode,h),h.ref=Mr(p,null,f),h.return=p,h;case zn:return f=_a(f,p.mode,h),f.return=p,f;case Lt:var w=f._init;return c(p,w(f._payload),h)}if(Wr(f)||Ar(f))return f=wn(f,p.mode,h,null),f.return=p,f;oo(p,f)}return null}function g(p,f,h,w){var k=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:a(p,f,""+h,w);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:return h.key===k?l(p,f,h,w):null;case zn:return h.key===k?u(p,f,h,w):null;case Lt:return k=h._init,g(p,f,k(h._payload),w)}if(Wr(h)||Ar(h))return k!==null?null:d(p,f,h,w,null);oo(p,h)}return null}function y(p,f,h,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(h)||null,a(f,p,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qi:return p=p.get(w.key===null?h:w.key)||null,l(f,p,w,k);case zn:return p=p.get(w.key===null?h:w.key)||null,u(f,p,w,k);case Lt:var P=w._init;return y(p,f,h,P(w._payload),k)}if(Wr(w)||Ar(w))return p=p.get(h)||null,d(f,p,w,k,null);oo(f,w)}return null}function v(p,f,h,w){for(var k=null,P=null,R=f,O=f=0,U=null;R!==null&&O<h.length;O++){R.index>O?(U=R,R=null):U=R.sibling;var x=g(p,R,h[O],w);if(x===null){R===null&&(R=U);break}t&&R&&x.alternate===null&&e(p,R),f=o(x,f,O),P===null?k=x:P.sibling=x,P=x,R=U}if(O===h.length)return n(p,R),W&&dn(p,O),k;if(R===null){for(;O<h.length;O++)R=c(p,h[O],w),R!==null&&(f=o(R,f,O),P===null?k=R:P.sibling=R,P=R);return W&&dn(p,O),k}for(R=r(p,R);O<h.length;O++)U=y(R,p,O,h[O],w),U!==null&&(t&&U.alternate!==null&&R.delete(U.key===null?O:U.key),f=o(U,f,O),P===null?k=U:P.sibling=U,P=U);return t&&R.forEach(function(We){return e(p,We)}),W&&dn(p,O),k}function _(p,f,h,w){var k=Ar(h);if(typeof k!="function")throw Error(E(150));if(h=k.call(h),h==null)throw Error(E(151));for(var P=k=null,R=f,O=f=0,U=null,x=h.next();R!==null&&!x.done;O++,x=h.next()){R.index>O?(U=R,R=null):U=R.sibling;var We=g(p,R,x.value,w);if(We===null){R===null&&(R=U);break}t&&R&&We.alternate===null&&e(p,R),f=o(We,f,O),P===null?k=We:P.sibling=We,P=We,R=U}if(x.done)return n(p,R),W&&dn(p,O),k;if(R===null){for(;!x.done;O++,x=h.next())x=c(p,x.value,w),x!==null&&(f=o(x,f,O),P===null?k=x:P.sibling=x,P=x);return W&&dn(p,O),k}for(R=r(p,R);!x.done;O++,x=h.next())x=y(R,p,O,x.value,w),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?O:x.key),f=o(x,f,O),P===null?k=x:P.sibling=x,P=x);return t&&R.forEach(function(Nr){return e(p,Nr)}),W&&dn(p,O),k}function T(p,f,h,w){if(typeof h=="object"&&h!==null&&h.type===Bn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case qi:e:{for(var k=h.key,P=f;P!==null;){if(P.key===k){if(k=h.type,k===Bn){if(P.tag===7){n(p,P.sibling),f=i(P,h.props.children),f.return=p,p=f;break e}}else if(P.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lt&&Qc(k)===P.type){n(p,P.sibling),f=i(P,h.props),f.ref=Mr(p,P,h),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}h.type===Bn?(f=wn(h.props.children,p.mode,w,h.key),f.return=p,p=f):(w=So(h.type,h.key,h.props,null,p.mode,w),w.ref=Mr(p,f,h),w.return=p,p=w)}return s(p);case zn:e:{for(P=h.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(p,f.sibling),f=i(f,h.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=_a(h,p.mode,w),f.return=p,p=f}return s(p);case Lt:return P=h._init,T(p,f,P(h._payload),w)}if(Wr(h))return v(p,f,h,w);if(Ar(h))return _(p,f,h,w);oo(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,h),f.return=p,p=f):(n(p,f),f=wa(h,p.mode,w),f.return=p,p=f),s(p)):n(p,f)}return T}var dr=Sh(!0),kh=Sh(!1),ji={},at=sn(ji),yi=sn(ji),wi=sn(ji);function gn(t){if(t===ji)throw Error(E(174));return t}function pu(t,e){switch(z(wi,e),z(yi,t),z(at,ji),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Va(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Va(e,t)}V(at),z(at,e)}function fr(){V(at),V(yi),V(wi)}function Th(t){gn(wi.current);var e=gn(at.current),n=Va(e,t.type);e!==n&&(z(yi,t),z(at,n))}function mu(t){yi.current===t&&(V(at),V(yi))}var $=sn(0);function Ho(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ha=[];function gu(){for(var t=0;t<ha.length;t++)ha[t]._workInProgressVersionPrimary=null;ha.length=0}var yo=Tt.ReactCurrentDispatcher,pa=Tt.ReactCurrentBatchConfig,Tn=0,H=null,re=null,se=null,Ko=!1,ei=!1,_i=0,Gv=0;function he(){throw Error(E(321))}function vu(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function yu(t,e,n,r,i,o){if(Tn=o,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yo.current=t===null||t.memoizedState===null?Jv:Xv,t=n(r,i),ei){o=0;do{if(ei=!1,_i=0,25<=o)throw Error(E(301));o+=1,se=re=null,e.updateQueue=null,yo.current=Zv,t=n(r,i)}while(ei)}if(yo.current=Go,e=re!==null&&re.next!==null,Tn=0,se=re=H=null,Ko=!1,e)throw Error(E(300));return t}function wu(){var t=_i!==0;return _i=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=t:se=se.next=t,se}function Be(){if(re===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=re.next;var e=se===null?H.memoizedState:se.next;if(e!==null)se=e,re=t;else{if(t===null)throw Error(E(310));re=t,t={memoizedState:re.memoizedState,baseState:re.baseState,baseQueue:re.baseQueue,queue:re.queue,next:null},se===null?H.memoizedState=se=t:se=se.next=t}return se}function Ei(t,e){return typeof e=="function"?e(t):e}function ma(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=re,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((Tn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,s=r):l=l.next=c,H.lanes|=d,Cn|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qe(r,e.memoizedState)||(Se=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,H.lanes|=o,Cn|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ga(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qe(o,e.memoizedState)||(Se=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Ch(){}function Ph(t,e){var n=H,r=Be(),i=e(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,Se=!0),r=r.queue,_u(Oh.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,Ii(9,Nh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(E(349));Tn&30||Rh(n,e,i)}return i}function Rh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Nh(t,e,n,r){e.value=n,e.getSnapshot=r,Ah(e)&&xh(t)}function Oh(t,e,n){return n(function(){Ah(e)&&xh(t)})}function Ah(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function xh(t){var e=It(t,1);e!==null&&Ye(e,t,1,-1)}function Jc(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},e.queue=t,t=t.dispatch=Qv.bind(null,H,t),[e.memoizedState,t]}function Ii(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Lh(){return Be().memoizedState}function wo(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=Ii(1|e,n,void 0,r===void 0?null:r)}function Es(t,e,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(re!==null){var s=re.memoizedState;if(o=s.destroy,r!==null&&vu(r,s.deps)){i.memoizedState=Ii(e,n,o,r);return}}H.flags|=t,i.memoizedState=Ii(1|e,n,o,r)}function Xc(t,e){return wo(8390656,8,t,e)}function _u(t,e){return Es(2048,8,t,e)}function Dh(t,e){return Es(4,2,t,e)}function bh(t,e){return Es(4,4,t,e)}function Mh(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Uh(t,e,n){return n=n!=null?n.concat([t]):null,Es(4,4,Mh.bind(null,e,t),n)}function Eu(){}function jh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vu(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vu(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zh(t,e,n){return Tn&21?(Qe(n,e)||(n=Wf(),H.lanes|=n,Cn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Se=!0),t.memoizedState=n)}function qv(t,e){var n=j;j=n!==0&&4>n?n:4,t(!0);var r=pa.transition;pa.transition={};try{t(!1),e()}finally{j=n,pa.transition=r}}function Bh(){return Be().memoizedState}function Yv(t,e,n){var r=Gt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Vh(t))Wh(e,n);else if(n=wh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),$h(n,e,r)}}function Qv(t,e,n){var r=Gt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vh(t))Wh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,s)){var l=e.interleaved;l===null?(i.next=i,fu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=wh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),$h(n,e,r))}}function Vh(t){var e=t.alternate;return t===H||e!==null&&e===H}function Wh(t,e){ei=Ko=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $h(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xl(t,n)}}var Go={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},Jv={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:Xc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wo(4194308,4,Mh.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return wo(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Yv.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:Jc,useDebugValue:Eu,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=Jc(!1),e=t[0];return t=qv.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if(W){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ae===null)throw Error(E(349));Tn&30||Rh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Xc(Oh.bind(null,r,o,t),[t]),r.flags|=2048,Ii(9,Nh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if(W){var n=ht,r=ft;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_i++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Gv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Xv={readContext:ze,useCallback:jh,useContext:ze,useEffect:_u,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:bh,useMemo:Fh,useReducer:ma,useRef:Lh,useState:function(){return ma(Ei)},useDebugValue:Eu,useDeferredValue:function(t){var e=Be();return zh(e,re.memoizedState,t)},useTransition:function(){var t=ma(Ei)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Ch,useSyncExternalStore:Ph,useId:Bh,unstable_isNewReconciler:!1},Zv={readContext:ze,useCallback:jh,useContext:ze,useEffect:_u,useImperativeHandle:Uh,useInsertionEffect:Dh,useLayoutEffect:bh,useMemo:Fh,useReducer:ga,useRef:Lh,useState:function(){return ga(Ei)},useDebugValue:Eu,useDeferredValue:function(t){var e=Be();return re===null?e.memoizedState=t:zh(e,re.memoizedState,t)},useTransition:function(){var t=ga(Ei)[0],e=Be().memoizedState;return[t,e]},useMutableSource:Ch,useSyncExternalStore:Ph,useId:Bh,unstable_isNewReconciler:!1};function hr(t,e){try{var n="",r=e;do n+=Pg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function va(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dl(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ey=typeof WeakMap=="function"?WeakMap:Map;function Hh(t,e,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Yo||(Yo=!0,El=r),dl(t,e)},n}function Kh(t,e,n){n=vt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){dl(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){dl(t,e),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Zc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ey;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=py.bind(null,t,e,n),e.then(t,t))}function ed(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function td(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vt(-1,1),e.tag=2,Ht(n,e,1))),n.lanes|=1),t)}var ty=Tt.ReactCurrentOwner,Se=!1;function ve(t,e,n,r){e.child=t===null?kh(e,null,n,r):dr(e,t.child,n,r)}function nd(t,e,n,r,i){n=n.render;var o=e.ref;return rr(e,i),r=yu(t,e,n,r,o,i),n=wu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(W&&n&&su(e),e.flags|=1,ve(t,e,r,i),e.child)}function rd(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!Nu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Gh(t,e,o,r,i)):(t=So(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:pi,n(s,r)&&t.ref===e.ref)return St(t,e,i)}return e.flags|=1,t=qt(o,r),t.ref=e.ref,t.return=e,e.child=t}function Gh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(pi(o,r)&&t.ref===e.ref)if(Se=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(Se=!0);else return e.lanes=t.lanes,St(t,e,i)}return fl(t,e,n,r,i)}function qh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Jn,Re),Re|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,z(Jn,Re),Re|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,z(Jn,Re),Re|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,z(Jn,Re),Re|=r;return ve(t,e,i,n),e.child}function Yh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fl(t,e,n,r,i){var o=Te(n)?Sn:ge.current;return o=ur(e,o),rr(e,i),n=yu(t,e,n,r,o,i),r=wu(),t!==null&&!Se?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,St(t,e,i)):(W&&r&&su(e),e.flags|=1,ve(t,e,n,i),e.child)}function id(t,e,n,r,i){if(Te(n)){var o=!0;Fo(e)}else o=!1;if(rr(e,i),e.stateNode===null)_o(t,e),Ih(e,n,r),cl(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?Sn:ge.current,u=ur(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";c||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Yc(e,s,r,u),Dt=!1;var g=e.memoizedState;s.state=g,$o(e,r,s,i),l=e.memoizedState,a!==r||g!==l||ke.current||Dt?(typeof d=="function"&&(ul(e,n,d,r),l=e.memoizedState),(a=Dt||qc(e,n,a,r,g,l,u))?(c||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,_h(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),s.props=u,c=e.pendingProps,g=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?Sn:ge.current,l=ur(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==c||g!==l)&&Yc(e,s,r,l),Dt=!1,g=e.memoizedState,s.state=g,$o(e,r,s,i);var v=e.memoizedState;a!==c||g!==v||ke.current||Dt?(typeof y=="function"&&(ul(e,n,y,r),v=e.memoizedState),(u=Dt||qc(e,n,u,r,g,v,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,v,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,v,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),s.props=r,s.state=v,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return hl(t,e,n,r,o,i)}function hl(t,e,n,r,i,o){Yh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&Wc(e,n,!1),St(t,e,o);r=e.stateNode,ty.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=dr(e,t.child,null,o),e.child=dr(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&Wc(e,n,!0),e.child}function Qh(t){var e=t.stateNode;e.pendingContext?Vc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Vc(t,e.context,!1),pu(t,e.containerInfo)}function od(t,e,n,r,i){return cr(),lu(i),e.flags|=256,ve(t,e,n,r),e.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function ml(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jh(t,e,n){var r=e.pendingProps,i=$.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),z($,i&1),t===null)return al(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ks(s,r,0,null),t=wn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ml(n),e.memoizedState=pl,t):Iu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ny(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=qt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=qt(a,o):(o=wn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=pl,r}return o=t.child,t=o.sibling,r=qt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Iu(t,e){return e=ks({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,r){return r!==null&&lu(r),dr(e,t.child,null,n),t=Iu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ny(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=va(Error(E(422))),so(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=ks({mode:"visible",children:r.children},i,0,null),o=wn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&dr(e,t.child,null,s),e.child.memoizedState=ml(s),e.memoizedState=pl,o);if(!(e.mode&1))return so(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=va(o,r,void 0),so(t,e,s,r)}if(a=(s&t.childLanes)!==0,Se||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,It(t,i),Ye(r,t,i,-1))}return Ru(),r=va(Error(E(421))),so(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=my.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Oe=$t(i.nextSibling),xe=e,W=!0,Ge=null,t!==null&&(Me[Ue++]=ft,Me[Ue++]=ht,Me[Ue++]=kn,ft=t.id,ht=t.overflow,kn=e),e=Iu(e,r.children),e.flags|=4096,e)}function sd(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ll(t.return,e,n)}function ya(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Xh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=$.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sd(t,n,e);else if(t.tag===19)sd(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(z($,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ho(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ya(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ho(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ya(e,!0,n,null,o);break;case"together":ya(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function _o(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function St(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=qt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ry(t,e,n){switch(e.tag){case 3:Qh(e),cr();break;case 5:Th(e);break;case 1:Te(e.type)&&Fo(e);break;case 4:pu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;z(Vo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(z($,$.current&1),e.flags|=128,null):n&e.child.childLanes?Jh(t,e,n):(z($,$.current&1),t=St(t,e,n),t!==null?t.sibling:null);z($,$.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Xh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z($,$.current),r)break;return null;case 22:case 23:return e.lanes=0,qh(t,e,n)}return St(t,e,n)}var Zh,gl,ep,tp;Zh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gl=function(){};ep=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gn(at.current);var o=null;switch(n){case"input":i=ja(t,i),r=ja(t,r),o=[];break;case"select":i=G({},i,{value:void 0}),r=G({},r,{value:void 0}),o=[];break;case"textarea":i=Ba(t,i),r=Ba(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Uo)}Wa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};tp=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ur(t,e){if(!W)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function iy(t,e,n){var r=e.pendingProps;switch(au(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&jo(),pe(e),null;case 3:return r=e.stateNode,fr(),V(ke),V(ge),gu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(kl(Ge),Ge=null))),gl(t,e),pe(e),null;case 5:mu(e);var i=gn(wi.current);if(n=e.type,t!==null&&e.stateNode!=null)ep(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return pe(e),null}if(t=gn(at.current),io(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[vi]=o,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Hr.length;i++)B(Hr[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":mc(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":vc(r,o),B("invalid",r)}Wa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ro(r.textContent,a,t),i=["children",""+a]):ai.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":Yi(r),gc(r,o,!0);break;case"textarea":Yi(r),yc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Uo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[vi]=r,Zh(t,e,!1,!1),e.stateNode=t;e:{switch(s=$a(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hr.length;i++)B(Hr[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":mc(t,r),i=ja(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=G({},r,{value:void 0}),B("invalid",t);break;case"textarea":vc(t,r),i=Ba(t,r),B("invalid",t);break;default:i=r}Wa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Af(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&li(t,l):typeof l=="number"&&li(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ai.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",t):l!=null&&Kl(t,o,l,s))}switch(n){case"input":Yi(t),gc(t,r,!1);break;case"textarea":Yi(t),yc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Zn(t,!!r.multiple,o,!1):r.defaultValue!=null&&Zn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)tp(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=gn(wi.current),gn(at.current),io(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=xe,t!==null))switch(t.tag){case 3:ro(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ro(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if(V($),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(W&&Oe!==null&&e.mode&1&&!(e.flags&128))yh(),cr(),e.flags|=98560,o=!1;else if(o=io(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(E(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[et]=e}else cr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),o=!1}else Ge!==null&&(kl(Ge),Ge=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$.current&1?ie===0&&(ie=3):Ru())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return fr(),gl(t,e),t===null&&mi(e.stateNode.containerInfo),pe(e),null;case 10:return du(e.type._context),pe(e),null;case 17:return Te(e.type)&&jo(),pe(e),null;case 19:if(V($),o=e.memoizedState,o===null)return pe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ur(o,!1);else{if(ie!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Ho(t),s!==null){for(e.flags|=128,Ur(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return z($,$.current&1|2),e.child}t=t.sibling}o.tail!==null&&Z()>pr&&(e.flags|=128,r=!0,Ur(o,!1),e.lanes=4194304)}else{if(!r)if(t=Ho(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ur(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!W)return pe(e),null}else 2*Z()-o.renderingStartTime>pr&&n!==1073741824&&(e.flags|=128,r=!0,Ur(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Z(),e.sibling=null,n=$.current,z($,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return Pu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Re&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function oy(t,e){switch(au(e),e.tag){case 1:return Te(e.type)&&jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fr(),V(ke),V(ge),gu(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mu(e),null;case 13:if(V($),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));cr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return V($),null;case 4:return fr(),null;case 10:return du(e.type._context),null;case 22:case 23:return Pu(),null;case 24:return null;default:return null}}var ao=!1,me=!1,sy=typeof WeakSet=="function"?WeakSet:Set,C=null;function Qn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){q(t,e,r)}else n.current=null}function vl(t,e,n){try{n()}catch(r){q(t,e,r)}}var ad=!1;function ay(t,e){if(el=Do,t=oh(),ou(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,c=t,g=null;t:for(;;){for(var y;c!==n||i!==0&&c.nodeType!==3||(a=s+i),c!==o||r!==0&&c.nodeType!==3||(l=s+r),c.nodeType===3&&(s+=c.nodeValue.length),(y=c.firstChild)!==null;)g=c,c=y;for(;;){if(c===t)break t;if(g===n&&++u===i&&(a=s),g===o&&++d===r&&(l=s),(y=c.nextSibling)!==null)break;c=g,g=c.parentNode}c=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tl={focusedElem:t,selectionRange:n},Do=!1,C=e;C!==null;)if(e=C,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,C=t;else for(;C!==null;){e=C;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,T=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:He(e.type,_),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=e.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){q(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,C=t;break}C=e.return}return v=ad,ad=!1,v}function ti(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&vl(e,n,o)}i=i.next}while(i!==r)}}function Is(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function yl(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function np(t){var e=t.alternate;e!==null&&(t.alternate=null,np(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[vi],delete e[il],delete e[Wv],delete e[$v])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function rp(t){return t.tag===5||t.tag===3||t.tag===4}function ld(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||rp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wl(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Uo));else if(r!==4&&(t=t.child,t!==null))for(wl(t,e,n),t=t.sibling;t!==null;)wl(t,e,n),t=t.sibling}function _l(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(_l(t,e,n),t=t.sibling;t!==null;)_l(t,e,n),t=t.sibling}var ue=null,Ke=!1;function Ot(t,e,n){for(n=n.child;n!==null;)ip(t,e,n),n=n.sibling}function ip(t,e,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(ps,n)}catch{}switch(n.tag){case 5:me||Qn(n,e);case 6:var r=ue,i=Ke;ue=null,Ot(t,e,n),ue=r,Ke=i,ue!==null&&(Ke?(t=ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(Ke?(t=ue,n=n.stateNode,t.nodeType===8?da(t.parentNode,n):t.nodeType===1&&da(t,n),fi(t)):da(ue,n.stateNode));break;case 4:r=ue,i=Ke,ue=n.stateNode.containerInfo,Ke=!0,Ot(t,e,n),ue=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&vl(n,e,s),i=i.next}while(i!==r)}Ot(t,e,n);break;case 1:if(!me&&(Qn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){q(n,e,a)}Ot(t,e,n);break;case 21:Ot(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Ot(t,e,n),me=r):Ot(t,e,n);break;default:Ot(t,e,n)}}function ud(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sy),e.forEach(function(r){var i=gy.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:ue=a.stateNode,Ke=!1;break e;case 3:ue=a.stateNode.containerInfo,Ke=!0;break e;case 4:ue=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(ue===null)throw Error(E(160));ip(o,s,i),ue=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){q(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)op(e,t),e=e.sibling}function op(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($e(e,t),Xe(t),r&4){try{ti(3,t,t.return),Is(3,t)}catch(_){q(t,t.return,_)}try{ti(5,t,t.return)}catch(_){q(t,t.return,_)}}break;case 1:$e(e,t),Xe(t),r&512&&n!==null&&Qn(n,n.return);break;case 5:if($e(e,t),Xe(t),r&512&&n!==null&&Qn(n,n.return),t.flags&32){var i=t.stateNode;try{li(i,"")}catch(_){q(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Cf(i,o),$a(a,s);var u=$a(a,o);for(s=0;s<l.length;s+=2){var d=l[s],c=l[s+1];d==="style"?Af(i,c):d==="dangerouslySetInnerHTML"?Nf(i,c):d==="children"?li(i,c):Kl(i,d,c,u)}switch(a){case"input":Fa(i,o);break;case"textarea":Pf(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Zn(i,!!o.multiple,y,!1):g!==!!o.multiple&&(o.defaultValue!=null?Zn(i,!!o.multiple,o.defaultValue,!0):Zn(i,!!o.multiple,o.multiple?[]:"",!1))}i[vi]=o}catch(_){q(t,t.return,_)}}break;case 6:if($e(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(_){q(t,t.return,_)}}break;case 3:if($e(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(_){q(t,t.return,_)}break;case 4:$e(e,t),Xe(t);break;case 13:$e(e,t),Xe(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Tu=Z())),r&4&&ud(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,$e(e,t),me=u):$e(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(C=t,d=t.child;d!==null;){for(c=C=d;C!==null;){switch(g=C,y=g.child,g.tag){case 0:case 11:case 14:case 15:ti(4,g,g.return);break;case 1:Qn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){q(r,n,_)}}break;case 5:Qn(g,g.return);break;case 22:if(g.memoizedState!==null){dd(c);continue}}y!==null?(y.return=g,C=y):dd(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=c.stateNode,l=c.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Of("display",s))}catch(_){q(t,t.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){q(t,t.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:$e(e,t),Xe(t),r&4&&ud(t);break;case 21:break;default:$e(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(rp(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(li(i,""),r.flags&=-33);var o=ld(t);_l(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=ld(t);wl(t,a,s);break;default:throw Error(E(161))}}catch(l){q(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ly(t,e,n){C=t,sp(t)}function sp(t,e,n){for(var r=(t.mode&1)!==0;C!==null;){var i=C,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||ao;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=ao;var u=me;if(ao=s,(me=l)&&!u)for(C=i;C!==null;)s=C,l=s.child,s.tag===22&&s.memoizedState!==null?fd(i):l!==null?(l.return=s,C=l):fd(i);for(;o!==null;)C=o,sp(o),o=o.sibling;C=i,ao=a,me=u}cd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,C=o):cd(t)}}function cd(t){for(;C!==null;){var e=C;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||Is(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Gc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&fi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||e.flags&512&&yl(e)}catch(g){q(e,e.return,g)}}if(e===t){C=null;break}if(n=e.sibling,n!==null){n.return=e.return,C=n;break}C=e.return}}function dd(t){for(;C!==null;){var e=C;if(e===t){C=null;break}var n=e.sibling;if(n!==null){n.return=e.return,C=n;break}C=e.return}}function fd(t){for(;C!==null;){var e=C;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Is(4,e)}catch(l){q(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){q(e,i,l)}}var o=e.return;try{yl(e)}catch(l){q(e,o,l)}break;case 5:var s=e.return;try{yl(e)}catch(l){q(e,s,l)}}}catch(l){q(e,e.return,l)}if(e===t){C=null;break}var a=e.sibling;if(a!==null){a.return=e.return,C=a;break}C=e.return}}var uy=Math.ceil,qo=Tt.ReactCurrentDispatcher,Su=Tt.ReactCurrentOwner,Fe=Tt.ReactCurrentBatchConfig,M=0,ae=null,te=null,ce=0,Re=0,Jn=sn(0),ie=0,Si=null,Cn=0,Ss=0,ku=0,ni=null,Ie=null,Tu=0,pr=1/0,ct=null,Yo=!1,El=null,Kt=null,lo=!1,jt=null,Qo=0,ri=0,Il=null,Eo=-1,Io=0;function ye(){return M&6?Z():Eo!==-1?Eo:Eo=Z()}function Gt(t){return t.mode&1?M&2&&ce!==0?ce&-ce:Kv.transition!==null?(Io===0&&(Io=Wf()),Io):(t=j,t!==0||(t=window.event,t=t===void 0?16:Qf(t.type)),t):1}function Ye(t,e,n,r){if(50<ri)throw ri=0,Il=null,Error(E(185));bi(t,n,r),(!(M&2)||t!==ae)&&(t===ae&&(!(M&2)&&(Ss|=n),ie===4&&Mt(t,ce)),Ce(t,r),n===1&&M===0&&!(e.mode&1)&&(pr=Z()+500,ws&&an()))}function Ce(t,e){var n=t.callbackNode;Kg(t,e);var r=Lo(t,t===ae?ce:0);if(r===0)n!==null&&Ec(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ec(n),e===1)t.tag===0?Hv(hd.bind(null,t)):mh(hd.bind(null,t)),Bv(function(){!(M&6)&&an()}),n=null;else{switch($f(r)){case 1:n=Jl;break;case 4:n=Bf;break;case 16:n=xo;break;case 536870912:n=Vf;break;default:n=xo}n=pp(n,ap.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ap(t,e){if(Eo=-1,Io=0,M&6)throw Error(E(327));var n=t.callbackNode;if(ir()&&t.callbackNode!==n)return null;var r=Lo(t,t===ae?ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jo(t,r);else{e=r;var i=M;M|=2;var o=up();(ae!==t||ce!==e)&&(ct=null,pr=Z()+500,yn(t,e));do try{fy();break}catch(a){lp(t,a)}while(!0);cu(),qo.current=o,M=i,te!==null?e=0:(ae=null,ce=0,e=ie)}if(e!==0){if(e===2&&(i=Ya(t),i!==0&&(r=i,e=Sl(t,i))),e===1)throw n=Si,yn(t,0),Mt(t,r),Ce(t,Z()),n;if(e===6)Mt(t,r);else{if(i=t.current.alternate,!(r&30)&&!cy(i)&&(e=Jo(t,r),e===2&&(o=Ya(t),o!==0&&(r=o,e=Sl(t,o))),e===1))throw n=Si,yn(t,0),Mt(t,r),Ce(t,Z()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:fn(t,Ie,ct);break;case 3:if(Mt(t,r),(r&130023424)===r&&(e=Tu+500-Z(),10<e)){if(Lo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rl(fn.bind(null,t,Ie,ct),e);break}fn(t,Ie,ct);break;case 4:if(Mt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Z()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*uy(r/1960))-r,10<r){t.timeoutHandle=rl(fn.bind(null,t,Ie,ct),r);break}fn(t,Ie,ct);break;case 5:fn(t,Ie,ct);break;default:throw Error(E(329))}}}return Ce(t,Z()),t.callbackNode===n?ap.bind(null,t):null}function Sl(t,e){var n=ni;return t.current.memoizedState.isDehydrated&&(yn(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&kl(e)),t}function kl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function cy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mt(t,e){for(e&=~ku,e&=~Ss,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function hd(t){if(M&6)throw Error(E(327));ir();var e=Lo(t,0);if(!(e&1))return Ce(t,Z()),null;var n=Jo(t,e);if(t.tag!==0&&n===2){var r=Ya(t);r!==0&&(e=r,n=Sl(t,r))}if(n===1)throw n=Si,yn(t,0),Mt(t,e),Ce(t,Z()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,fn(t,Ie,ct),Ce(t,Z()),null}function Cu(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===0&&(pr=Z()+500,ws&&an())}}function Pn(t){jt!==null&&jt.tag===0&&!(M&6)&&ir();var e=M;M|=1;var n=Fe.transition,r=j;try{if(Fe.transition=null,j=1,t)return t()}finally{j=r,Fe.transition=n,M=e,!(M&6)&&an()}}function Pu(){Re=Jn.current,V(Jn)}function yn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zv(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(au(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&jo();break;case 3:fr(),V(ke),V(ge),gu();break;case 5:mu(r);break;case 4:fr();break;case 13:V($);break;case 19:V($);break;case 10:du(r.type._context);break;case 22:case 23:Pu()}n=n.return}if(ae=t,te=t=qt(t.current,null),ce=Re=e,ie=0,Si=null,ku=Ss=Cn=0,Ie=ni=null,mn!==null){for(e=0;e<mn.length;e++)if(n=mn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mn=null}return t}function lp(t,e){do{var n=te;try{if(cu(),yo.current=Go,Ko){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ko=!1}if(Tn=0,se=re=H=null,ei=!1,_i=0,Su.current=null,n===null||n.return===null){ie=1,Si=e,te=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ce,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=ed(s);if(y!==null){y.flags&=-257,td(y,s,a,o,e),y.mode&1&&Zc(o,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Zc(o,u,e),Ru();break e}l=Error(E(426))}}else if(W&&a.mode&1){var T=ed(s);if(T!==null){!(T.flags&65536)&&(T.flags|=256),td(T,s,a,o,e),lu(hr(l,a));break e}}o=l=hr(l,a),ie!==4&&(ie=2),ni===null?ni=[o]:ni.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=Hh(o,l,e);Kc(o,p);break e;case 1:a=l;var f=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Kt===null||!Kt.has(h)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=Kh(o,a,e);Kc(o,w);break e}}o=o.return}while(o!==null)}dp(n)}catch(k){e=k,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function up(){var t=qo.current;return qo.current=Go,t===null?Go:t}function Ru(){(ie===0||ie===3||ie===2)&&(ie=4),ae===null||!(Cn&268435455)&&!(Ss&268435455)||Mt(ae,ce)}function Jo(t,e){var n=M;M|=2;var r=up();(ae!==t||ce!==e)&&(ct=null,yn(t,e));do try{dy();break}catch(i){lp(t,i)}while(!0);if(cu(),M=n,qo.current=r,te!==null)throw Error(E(261));return ae=null,ce=0,ie}function dy(){for(;te!==null;)cp(te)}function fy(){for(;te!==null&&!Ug();)cp(te)}function cp(t){var e=hp(t.alternate,t,Re);t.memoizedProps=t.pendingProps,e===null?dp(t):te=e,Su.current=null}function dp(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oy(n,e),n!==null){n.flags&=32767,te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ie=6,te=null;return}}else if(n=iy(n,e,Re),n!==null){te=n;return}if(e=e.sibling,e!==null){te=e;return}te=e=t}while(e!==null);ie===0&&(ie=5)}function fn(t,e,n){var r=j,i=Fe.transition;try{Fe.transition=null,j=1,hy(t,e,n,r)}finally{Fe.transition=i,j=r}return null}function hy(t,e,n,r){do ir();while(jt!==null);if(M&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Gg(t,o),t===ae&&(te=ae=null,ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,pp(xo,function(){return ir(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Fe.transition,Fe.transition=null;var s=j;j=1;var a=M;M|=4,Su.current=null,ay(t,n),op(n,t),Lv(tl),Do=!!el,tl=el=null,t.current=n,ly(n),jg(),M=a,j=s,Fe.transition=o}else t.current=n;if(lo&&(lo=!1,jt=t,Qo=i),o=t.pendingLanes,o===0&&(Kt=null),Bg(n.stateNode),Ce(t,Z()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Yo)throw Yo=!1,t=El,El=null,t;return Qo&1&&t.tag!==0&&ir(),o=t.pendingLanes,o&1?t===Il?ri++:(ri=0,Il=t):ri=0,an(),null}function ir(){if(jt!==null){var t=$f(Qo),e=Fe.transition,n=j;try{if(Fe.transition=null,j=16>t?16:t,jt===null)var r=!1;else{if(t=jt,jt=null,Qo=0,M&6)throw Error(E(331));var i=M;for(M|=4,C=t.current;C!==null;){var o=C,s=o.child;if(C.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(C=u;C!==null;){var d=C;switch(d.tag){case 0:case 11:case 15:ti(8,d,o)}var c=d.child;if(c!==null)c.return=d,C=c;else for(;C!==null;){d=C;var g=d.sibling,y=d.return;if(np(d),d===u){C=null;break}if(g!==null){g.return=y,C=g;break}C=y}}}var v=o.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}C=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,C=s;else e:for(;C!==null;){if(o=C,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ti(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,C=p;break e}C=o.return}}var f=t.current;for(C=f;C!==null;){s=C;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,C=h;else e:for(s=f;C!==null;){if(a=C,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Is(9,a)}}catch(k){q(a,a.return,k)}if(a===s){C=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,C=w;break e}C=a.return}}if(M=i,an(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(ps,t)}catch{}r=!0}return r}finally{j=n,Fe.transition=e}}return!1}function pd(t,e,n){e=hr(n,e),e=Hh(t,e,1),t=Ht(t,e,1),e=ye(),t!==null&&(bi(t,1,e),Ce(t,e))}function q(t,e,n){if(t.tag===3)pd(t,t,n);else for(;e!==null;){if(e.tag===3){pd(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){t=hr(n,t),t=Kh(e,t,1),e=Ht(e,t,1),t=ye(),e!==null&&(bi(e,1,t),Ce(e,t));break}}e=e.return}}function py(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ce&n)===n&&(ie===4||ie===3&&(ce&130023424)===ce&&500>Z()-Tu?yn(t,0):ku|=n),Ce(t,e)}function fp(t,e){e===0&&(t.mode&1?(e=Xi,Xi<<=1,!(Xi&130023424)&&(Xi=4194304)):e=1);var n=ye();t=It(t,e),t!==null&&(bi(t,e,n),Ce(t,n))}function my(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fp(t,n)}function gy(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),fp(t,n)}var hp;hp=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ke.current)Se=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Se=!1,ry(t,e,n);Se=!!(t.flags&131072)}else Se=!1,W&&e.flags&1048576&&gh(e,Bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;_o(t,e),t=e.pendingProps;var i=ur(e,ge.current);rr(e,n),i=yu(null,e,r,t,i,n);var o=wu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(o=!0,Fo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hu(e),i.updater=_s,e.stateNode=i,i._reactInternals=e,cl(e,r,t,n),e=hl(null,e,r,!0,o,n)):(e.tag=0,W&&o&&su(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(_o(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yy(r),t=He(r,t),i){case 0:e=fl(null,e,r,t,n);break e;case 1:e=id(null,e,r,t,n);break e;case 11:e=nd(null,e,r,t,n);break e;case 14:e=rd(null,e,r,He(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),fl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),id(t,e,r,i,n);case 3:e:{if(Qh(e),t===null)throw Error(E(387));r=e.pendingProps,o=e.memoizedState,i=o.element,_h(t,e),$o(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=hr(Error(E(423)),e),e=od(t,e,r,n,i);break e}else if(r!==i){i=hr(Error(E(424)),e),e=od(t,e,r,n,i);break e}else for(Oe=$t(e.stateNode.containerInfo.firstChild),xe=e,W=!0,Ge=null,n=kh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(cr(),r===i){e=St(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return Th(e),t===null&&al(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,nl(r,i)?s=null:o!==null&&nl(r,o)&&(e.flags|=32),Yh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&al(e),null;case 13:return Jh(t,e,n);case 4:return pu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=dr(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),nd(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,z(Vo,r._currentValue),r._currentValue=s,o!==null)if(Qe(o.value,s)){if(o.children===i.children&&!ke.current){e=St(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=vt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ll(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ll(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,rr(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),rd(t,e,r,i,n);case 15:return Gh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),_o(t,e),e.tag=1,Te(r)?(t=!0,Fo(e)):t=!1,rr(e,n),Ih(e,r,i),cl(e,r,i,n),hl(null,e,r,!0,t,n);case 19:return Xh(t,e,n);case 22:return qh(t,e,n)}throw Error(E(156,e.tag))};function pp(t,e){return zf(t,e)}function vy(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(t,e,n,r){return new vy(t,e,n,r)}function Nu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yy(t){if(typeof t=="function")return Nu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ql)return 11;if(t===Yl)return 14}return 2}function qt(t,e){var n=t.alternate;return n===null?(n=je(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function So(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")Nu(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Bn:return wn(n.children,i,o,e);case Gl:s=8,i|=8;break;case Da:return t=je(12,n,e,i|2),t.elementType=Da,t.lanes=o,t;case ba:return t=je(13,n,e,i),t.elementType=ba,t.lanes=o,t;case Ma:return t=je(19,n,e,i),t.elementType=Ma,t.lanes=o,t;case Sf:return ks(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ef:s=10;break e;case If:s=9;break e;case ql:s=11;break e;case Yl:s=14;break e;case Lt:s=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=je(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function wn(t,e,n,r){return t=je(7,t,r,e),t.lanes=n,t}function ks(t,e,n,r){return t=je(22,t,r,e),t.elementType=Sf,t.lanes=n,t.stateNode={isHidden:!1},t}function wa(t,e,n){return t=je(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=je(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wy(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ea(0),this.expirationTimes=ea(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ea(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ou(t,e,n,r,i,o,s,a,l){return t=new wy(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=je(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hu(o),t}function _y(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function mp(t){if(!t)return Zt;t=t._reactInternals;e:{if(Ln(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Te(n))return ph(t,n,e)}return e}function gp(t,e,n,r,i,o,s,a,l){return t=Ou(n,r,!0,t,i,o,s,a,l),t.context=mp(null),n=t.current,r=ye(),i=Gt(n),o=vt(r,i),o.callback=e??null,Ht(n,o,i),t.current.lanes=i,bi(t,i,r),Ce(t,r),t}function Ts(t,e,n,r){var i=e.current,o=ye(),s=Gt(i);return n=mp(n),e.context===null?e.context=n:e.pendingContext=n,e=vt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ht(i,e,s),t!==null&&(Ye(t,i,s,o),vo(t,i,s)),s}function Xo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function md(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Au(t,e){md(t,e),(t=t.alternate)&&md(t,e)}function Ey(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function xu(t){this._internalRoot=t}Cs.prototype.render=xu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Ts(t,e,null,null)};Cs.prototype.unmount=xu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pn(function(){Ts(null,t,null,null)}),e[Et]=null}};function Cs(t){this._internalRoot=t}Cs.prototype.unstable_scheduleHydration=function(t){if(t){var e=Gf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bt.length&&e!==0&&e<bt[n].priority;n++);bt.splice(n,0,t),n===0&&Yf(t)}};function Lu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ps(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gd(){}function Iy(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Xo(s);o.call(u)}}var s=gp(e,r,t,0,null,!1,!1,"",gd);return t._reactRootContainer=s,t[Et]=s.current,mi(t.nodeType===8?t.parentNode:t),Pn(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xo(l);a.call(u)}}var l=Ou(t,0,!1,null,null,!1,!1,"",gd);return t._reactRootContainer=l,t[Et]=l.current,mi(t.nodeType===8?t.parentNode:t),Pn(function(){Ts(e,l,n,r)}),l}function Rs(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=Xo(s);a.call(l)}}Ts(e,s,t,i)}else s=Iy(n,e,t,i,r);return Xo(s)}Hf=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$r(e.pendingLanes);n!==0&&(Xl(e,n|1),Ce(e,Z()),!(M&6)&&(pr=Z()+500,an()))}break;case 13:Pn(function(){var r=It(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),Au(t,1)}};Zl=function(t){if(t.tag===13){var e=It(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}Au(t,134217728)}};Kf=function(t){if(t.tag===13){var e=Gt(t),n=It(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}Au(t,e)}};Gf=function(){return j};qf=function(t,e){var n=j;try{return j=t,e()}finally{j=n}};Ka=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ys(r);if(!i)throw Error(E(90));Tf(r),Fa(r,i)}}}break;case"textarea":Pf(t,n);break;case"select":e=n.value,e!=null&&Zn(t,!!n.multiple,e,!1)}};Df=Cu;bf=Pn;var Sy={usingClientEntryPoint:!1,Events:[Ui,Hn,ys,xf,Lf,Cu]},jr={findFiberByHostInstance:pn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ky={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jf(t),t===null?null:t.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Ey,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var uo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!uo.isDisabled&&uo.supportsFiber)try{ps=uo.inject(ky),st=uo}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(e))throw Error(E(200));return _y(t,e,null,n)};De.createRoot=function(t,e){if(!Lu(t))throw Error(E(299));var n=!1,r="",i=vp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ou(t,1,!1,null,null,n,!1,r,i),t[Et]=e.current,mi(t.nodeType===8?t.parentNode:t),new xu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=jf(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return Pn(t)};De.hydrate=function(t,e,n){if(!Ps(e))throw Error(E(200));return Rs(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!Lu(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=vp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=gp(e,null,t,1,n??null,i,!1,o,s),t[Et]=e.current,mi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Cs(e)};De.render=function(t,e,n){if(!Ps(e))throw Error(E(200));return Rs(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!Ps(t))throw Error(E(40));return t._reactRootContainer?(Pn(function(){Rs(null,null,t,!1,function(){t._reactRootContainer=null,t[Et]=null})}),!0):!1};De.unstable_batchedUpdates=Cu;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ps(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return Rs(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function yp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yp)}catch(t){console.error(t)}}yp(),gf.exports=De;var Ty=gf.exports,vd=Ty;xa.createRoot=vd.createRoot,xa.hydrateRoot=vd.hydrateRoot;/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ki(){return ki=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ki.apply(this,arguments)}var Ft;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ft||(Ft={}));const yd="popstate";function Cy(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return Tl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zo(i)}return Ry(e,n,null,t)}function K(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Du(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Py(){return Math.random().toString(36).substr(2,8)}function wd(t,e){return{usr:t.state,key:t.key,idx:e}}function Tl(t,e,n,r){return n===void 0&&(n=null),ki({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Er(e):e,{state:n,key:e&&e.key||r||Py()})}function Zo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Er(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ry(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Ft.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(ki({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function c(){a=Ft.Pop;let T=d(),p=T==null?null:T-u;u=T,l&&l({action:a,location:_.location,delta:p})}function g(T,p){a=Ft.Push;let f=Tl(_.location,T,p);n&&n(f,T),u=d()+1;let h=wd(f,u),w=_.createHref(f);try{s.pushState(h,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}o&&l&&l({action:a,location:_.location,delta:1})}function y(T,p){a=Ft.Replace;let f=Tl(_.location,T,p);n&&n(f,T),u=d();let h=wd(f,u),w=_.createHref(f);s.replaceState(h,"",w),o&&l&&l({action:a,location:_.location,delta:0})}function v(T){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof T=="string"?T:Zo(T);return K(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let _={get action(){return a},get location(){return t(i,s)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(yd,c),l=T,()=>{i.removeEventListener(yd,c),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let p=v(T);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:g,replace:y,go(T){return s.go(T)}};return _}var _d;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(_d||(_d={}));function Ny(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Er(e):e,i=Ti(r.pathname||"/",n);if(i==null)return null;let o=wp(t);Oy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Fy(o[a],By(i));return s}function wp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(K(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Yt([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(K(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),wp(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Uy(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of _p(o.path))i(o,s,l)}),e}function _p(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=_p(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Oy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ay=/^:[\w-]+$/,xy=3,Ly=2,Dy=1,by=10,My=-2,Ed=t=>t==="*";function Uy(t,e){let n=t.split("/"),r=n.length;return n.some(Ed)&&(r+=My),e&&(r+=Ly),n.filter(i=>!Ed(i)).reduce((i,o)=>i+(Ay.test(o)?xy:o===""?Dy:by),r)}function jy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Fy(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Cl({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;o.push({params:r,pathname:Yt([i,d.pathname]),pathnameBase:Ky(Yt([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=Yt([i,d.pathnameBase]))}return o}function Cl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zy(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:g,isOptional:y}=d;if(g==="*"){let _=a[c]||"";s=o.slice(0,o.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[c];return y&&!v?u[g]=void 0:u[g]=Vy(v||"",g),u},{}),pathname:o,pathnameBase:s,pattern:t}}function zy(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Du(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function By(t){try{return decodeURI(t)}catch(e){return Du(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Vy(t,e){try{return decodeURIComponent(t)}catch(n){return Du(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Ti(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Wy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Er(t):t;return{pathname:n?n.startsWith("/")?n:$y(n,e):e,search:Gy(r),hash:qy(i)}}function $y(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ea(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Hy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function bu(t,e){let n=Hy(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Mu(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Er(t):(i=ki({},t),K(!i.pathname||!i.pathname.includes("?"),Ea("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),Ea("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),Ea("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(s==null)a=n;else{let c=e.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),c-=1;i.pathname=g.join("/")}a=c>=0?e[c]:"/"}let l=Wy(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const Yt=t=>t.join("/").replace(/\/\/+/g,"/"),Ky=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Gy=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,qy=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Yy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ep=["post","put","patch","delete"];new Set(Ep);const Qy=["get",...Ep];new Set(Qy);/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ci.apply(this,arguments)}const Ns=S.createContext(null),Ip=S.createContext(null),Ct=S.createContext(null),Os=S.createContext(null),Pt=S.createContext({outlet:null,matches:[],isDataRoute:!1}),Sp=S.createContext(null);function Jy(t,e){let{relative:n}=e===void 0?{}:e;Ir()||K(!1);let{basename:r,navigator:i}=S.useContext(Ct),{hash:o,pathname:s,search:a}=As(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Yt([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Ir(){return S.useContext(Os)!=null}function ut(){return Ir()||K(!1),S.useContext(Os).location}function kp(t){S.useContext(Ct).static||S.useLayoutEffect(t)}function Fi(){let{isDataRoute:t}=S.useContext(Pt);return t?fw():Xy()}function Xy(){Ir()||K(!1);let t=S.useContext(Ns),{basename:e,future:n,navigator:r}=S.useContext(Ct),{matches:i}=S.useContext(Pt),{pathname:o}=ut(),s=JSON.stringify(bu(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return kp(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=Mu(u,JSON.parse(s),o,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Yt([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,s,o,t])}const Zy=S.createContext(null);function ew(t){let e=S.useContext(Pt).outlet;return e&&S.createElement(Zy.Provider,{value:t},e)}function As(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(Ct),{matches:i}=S.useContext(Pt),{pathname:o}=ut(),s=JSON.stringify(bu(i,r.v7_relativeSplatPath));return S.useMemo(()=>Mu(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function tw(t,e){return nw(t,e)}function nw(t,e,n,r){Ir()||K(!1);let{navigator:i}=S.useContext(Ct),{matches:o}=S.useContext(Pt),s=o[o.length-1],a=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=ut(),d;if(e){var c;let T=typeof e=="string"?Er(e):e;l==="/"||(c=T.pathname)!=null&&c.startsWith(l)||K(!1),d=T}else d=u;let g=d.pathname||"/",y=l==="/"?g:g.slice(l.length)||"/",v=Ny(t,{pathname:y}),_=aw(v&&v.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:Yt([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:Yt([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),o,n,r);return e&&_?S.createElement(Os.Provider,{value:{location:Ci({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ft.Pop}},_):_}function rw(){let t=dw(),e=Yy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const iw=S.createElement(rw,null);class ow extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Pt.Provider,{value:this.props.routeContext},S.createElement(Sp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sw(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(Ns);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Pt.Provider,{value:e},r)}function aw(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=s.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id]));d>=0||K(!1),s=s.slice(0,Math.min(s.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let c=s[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:g,errors:y}=n,v=c.route.loader&&g[c.route.id]===void 0&&(!y||y[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,c,g)=>{let y,v=!1,_=null,T=null;n&&(y=a&&c.route.id?a[c.route.id]:void 0,_=c.route.errorElement||iw,l&&(u<0&&g===0?(hw("route-fallback",!1),v=!0,T=null):u===g&&(v=!0,T=c.route.hydrateFallbackElement||null)));let p=e.concat(s.slice(0,g+1)),f=()=>{let h;return y?h=_:v?h=T:c.route.Component?h=S.createElement(c.route.Component,null):c.route.element?h=c.route.element:h=d,S.createElement(sw,{match:c,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:h})};return n&&(c.route.ErrorBoundary||c.route.errorElement||g===0)?S.createElement(ow,{location:n.location,revalidation:n.revalidation,component:_,error:y,children:f(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):f()},null)}var Tp=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Tp||{}),es=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(es||{});function lw(t){let e=S.useContext(Ns);return e||K(!1),e}function uw(t){let e=S.useContext(Ip);return e||K(!1),e}function cw(t){let e=S.useContext(Pt);return e||K(!1),e}function Cp(t){let e=cw(),n=e.matches[e.matches.length-1];return n.route.id||K(!1),n.route.id}function dw(){var t;let e=S.useContext(Sp),n=uw(es.UseRouteError),r=Cp(es.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function fw(){let{router:t}=lw(Tp.UseNavigateStable),e=Cp(es.UseNavigateStable),n=S.useRef(!1);return kp(()=>{n.current=!0}),S.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ci({fromRouteId:e},o)))},[t,e])}const Id={};function hw(t,e,n){!e&&!Id[t]&&(Id[t]=!0)}function Pp(t){let{to:e,replace:n,state:r,relative:i}=t;Ir()||K(!1);let{future:o,static:s}=S.useContext(Ct),{matches:a}=S.useContext(Pt),{pathname:l}=ut(),u=Fi(),d=Mu(e,bu(a,o.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function pw(t){return ew(t.context)}function xt(t){K(!1)}function mw(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ft.Pop,navigator:o,static:s=!1,future:a}=t;Ir()&&K(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:o,static:s,future:Ci({v7_relativeSplatPath:!1},a)}),[l,a,o,s]);typeof r=="string"&&(r=Er(r));let{pathname:d="/",search:c="",hash:g="",state:y=null,key:v="default"}=r,_=S.useMemo(()=>{let T=Ti(d,l);return T==null?null:{location:{pathname:T,search:c,hash:g,state:y,key:v},navigationType:i}},[l,d,c,g,y,v,i]);return _==null?null:S.createElement(Ct.Provider,{value:u},S.createElement(Os.Provider,{children:n,value:_}))}function gw(t){let{children:e,location:n}=t;return tw(Pl(e),n)}new Promise(()=>{});function Pl(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let o=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Pl(r.props.children,o));return}r.type!==xt&&K(!1),!r.props.index||!r.props.children||K(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Pl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ts(){return ts=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ts.apply(this,arguments)}function Rp(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vw(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function yw(t,e){return t.button===0&&(!e||e==="_self")&&!vw(t)}const ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],_w=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ew=S.createContext({isTransitioning:!1}),Iw="startTransition",Sd=mg[Iw];function Sw(t){let{basename:e,children:n,future:r,window:i}=t,o=S.useRef();o.current==null&&(o.current=Cy({window:i,v5Compat:!0}));let s=o.current,[a,l]=S.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Sd?Sd(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>s.listen(d),[s,d]),S.createElement(mw,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:s,future:r})}const kw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Tw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Cw=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d,unstable_viewTransition:c}=e,g=Rp(e,ww),{basename:y}=S.useContext(Ct),v,_=!1;if(typeof u=="string"&&Tw.test(u)&&(v=u,kw))try{let h=new URL(window.location.href),w=u.startsWith("//")?new URL(h.protocol+u):new URL(u),k=Ti(w.pathname,y);w.origin===h.origin&&k!=null?u=k+w.search+w.hash:_=!0}catch{}let T=Jy(u,{relative:i}),p=Rw(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i,unstable_viewTransition:c});function f(h){r&&r(h),h.defaultPrevented||p(h)}return S.createElement("a",ts({},g,{href:v||T,onClick:_||o?r:f,ref:n,target:l}))}),Fn=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,unstable_viewTransition:u,children:d}=e,c=Rp(e,_w),g=As(l,{relative:c.relative}),y=ut(),v=S.useContext(Ip),{navigator:_}=S.useContext(Ct),T=v!=null&&Nw(g)&&u===!0,p=_.encodeLocation?_.encodeLocation(g).pathname:g.pathname,f=y.pathname,h=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(f=f.toLowerCase(),h=h?h.toLowerCase():null,p=p.toLowerCase());const w=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let k=f===p||!s&&f.startsWith(p)&&f.charAt(w)==="/",P=h!=null&&(h===p||!s&&h.startsWith(p)&&h.charAt(p.length)==="/"),R={isActive:k,isPending:P,isTransitioning:T},O=k?r:void 0,U;typeof o=="function"?U=o(R):U=[o,k?"active":null,P?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let x=typeof a=="function"?a(R):a;return S.createElement(Cw,ts({},c,{"aria-current":O,className:U,ref:n,style:x,to:l,unstable_viewTransition:u}),typeof d=="function"?d(R):d)});var Rl;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Rl||(Rl={}));var kd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(kd||(kd={}));function Pw(t){let e=S.useContext(Ns);return e||K(!1),e}function Rw(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a}=e===void 0?{}:e,l=Fi(),u=ut(),d=As(t,{relative:s});return S.useCallback(c=>{if(yw(c,n)){c.preventDefault();let g=r!==void 0?r:Zo(u)===Zo(d);l(t,{replace:g,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:a})}},[u,l,d,r,i,n,t,o,s,a])}function Nw(t,e){e===void 0&&(e={});let n=S.useContext(Ew);n==null&&K(!1);let{basename:r}=Pw(Rl.useViewTransitionState),i=As(t,{relative:e.relative});if(!n.isTransitioning)return!1;let o=Ti(n.currentLocation.pathname,r)||n.currentLocation.pathname,s=Ti(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Cl(i.pathname,s)!=null||Cl(i.pathname,o)!=null}var Np={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Td=gt.createContext&&gt.createContext(Np),Ow=["attr","size","title"];function Aw(t,e){if(t==null)return{};var n=xw(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function xw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function ns(){return ns=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ns.apply(this,arguments)}function Cd(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function rs(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cd(Object(n),!0).forEach(function(r){Lw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Cd(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Lw(t,e,n){return e=Dw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Dw(t){var e=bw(t,"string");return typeof e=="symbol"?e:String(e)}function bw(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Op(t){return t&&t.map((e,n)=>gt.createElement(e.tag,rs({key:n},e.attr),Op(e.child)))}function Mw(t){return e=>gt.createElement(Uw,ns({attr:rs({},t.attr)},e),Op(t.child))}function Uw(t){var e=n=>{var{attr:r,size:i,title:o}=t,s=Aw(t,Ow),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),gt.createElement("svg",ns({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:l,style:rs(rs({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&gt.createElement("title",null,o),t.children)};return Td!==void 0?gt.createElement(Td.Consumer,null,n=>e(n)):e(Np)}function jw(t){return Mw({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z",fill:"currentColor"},child:[]}]})(t)}var Pd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},xp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,c=(o&3)<<4|a>>4;let g=(a&15)<<2|u>>6,y=u&63;l||(y=64,s||(g=64)),r.push(n[d],n[c],n[g],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ap(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||c==null)throw new zw;const g=o<<2|a>>4;if(r.push(g),u!==64){const y=a<<4&240|u>>2;if(r.push(y),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bw=function(t){const e=Ap(t);return xp.encodeByteArray(e,!0)},Lp=function(t){return Bw(t).replace(/\./g,"")},Dp=function(t){try{return xp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function is(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vw(n)||(t[n]=is(t[n],e[n]));return t}function Vw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=()=>Ww().__FIREBASE_DEFAULTS__,Hw=()=>{if(typeof process>"u"||typeof Pd>"u")return;const t=Pd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dp(t[1]);return e&&JSON.parse(e)},xs=()=>{try{return $w()||Hw()||Kw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Gw=t=>{var e,n;return(n=(e=xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bp=()=>{var t;return(t=xs())===null||t===void 0?void 0:t.config},Mp=t=>{var e;return(e=xs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function Up(){var t;const e=(t=xs())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Qw(){return typeof self=="object"&&self.self===self}function jp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Uu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fp(){const t=ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function os(){try{return typeof indexedDB=="object"}catch{return!1}}function Jw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="FirebaseError";class Pe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Xw,Object.setPrototypeOf(this,Pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Zw(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Pe(i,a,r)}}function Zw(t,e){return t.replace(e_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const e_=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function t_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ss(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Nd(o)&&Nd(s)){if(!ss(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Kr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function zp(t,e){const n=new n_(t,e);return n.subscribe.bind(n)}class n_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");r_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ia),i.error===void 0&&(i.error=Ia),i.complete===void 0&&(i.complete=Ia);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ia(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){return t&&t._delegate?t._delegate:t}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(s_(e))try{this.getOrInitializeService({instanceIdentifier:hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hn){return this.instances.has(e)}getOptions(e=hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hn){return this.component?this.component.multipleInstances?e:hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o_(t){return t===hn?void 0:t}function s_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=[];var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Bp={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},l_=F.INFO,u_={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},c_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=u_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fu{constructor(e){this.name=e,this._logLevel=l_,this._logHandler=c_,this._userLogHandler=null,ju.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}function d_(t){ju.forEach(e=>{e.setLogLevel(t)})}function f_(t,e){for(const n of ju){let r=null;e&&e.level&&(r=Bp[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:F[o].toLowerCase(),message:a,args:s,type:i.name})}}}const h_=(t,e)=>e.some(n=>t instanceof n);let Od,Ad;function p_(){return Od||(Od=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function m_(){return Ad||(Ad=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vp=new WeakMap,Nl=new WeakMap,Wp=new WeakMap,Sa=new WeakMap,zu=new WeakMap;function g_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Qt(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Vp.set(n,t)}).catch(()=>{}),zu.set(e,t),e}function v_(t){if(Nl.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Nl.set(t,e)}let Ol={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y_(t){Ol=t(Ol)}function w_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ka(this),e,...n);return Wp.set(r,e.sort?e.sort():[e]),Qt(r)}:m_().includes(t)?function(...e){return t.apply(ka(this),e),Qt(Vp.get(this))}:function(...e){return Qt(t.apply(ka(this),e))}}function __(t){return typeof t=="function"?w_(t):(t instanceof IDBTransaction&&v_(t),h_(t,p_())?new Proxy(t,Ol):t)}function Qt(t){if(t instanceof IDBRequest)return g_(t);if(Sa.has(t))return Sa.get(t);const e=__(t);return e!==t&&(Sa.set(t,e),zu.set(e,t)),e}const ka=t=>zu.get(t);function E_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Qt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Qt(s.result),l.oldVersion,l.newVersion,Qt(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const I_=["get","getKey","getAll","getAllKeys","count"],S_=["put","add","delete","clear"],Ta=new Map;function xd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ta.get(e))return Ta.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ta.set(e,o),o}y_(t=>({...t,get:(e,n,r)=>xd(e,n)||t.get(e,n,r),has:(e,n)=>!!xd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Al="@firebase/app",Ld="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Fu("@firebase/app"),C_="@firebase/app-compat",P_="@firebase/analytics-compat",R_="@firebase/analytics",N_="@firebase/app-check-compat",O_="@firebase/app-check",A_="@firebase/auth",x_="@firebase/auth-compat",L_="@firebase/database",D_="@firebase/database-compat",b_="@firebase/functions",M_="@firebase/functions-compat",U_="@firebase/installations",j_="@firebase/installations-compat",F_="@firebase/messaging",z_="@firebase/messaging-compat",B_="@firebase/performance",V_="@firebase/performance-compat",W_="@firebase/remote-config",$_="@firebase/remote-config-compat",H_="@firebase/storage",K_="@firebase/storage-compat",G_="@firebase/firestore",q_="@firebase/firestore-compat",Y_="firebase",Q_="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="[DEFAULT]",J_={[Al]:"fire-core",[C_]:"fire-core-compat",[R_]:"fire-analytics",[P_]:"fire-analytics-compat",[O_]:"fire-app-check",[N_]:"fire-app-check-compat",[A_]:"fire-auth",[x_]:"fire-auth-compat",[L_]:"fire-rtdb",[D_]:"fire-rtdb-compat",[b_]:"fire-fn",[M_]:"fire-fn-compat",[U_]:"fire-iid",[j_]:"fire-iid-compat",[F_]:"fire-fcm",[z_]:"fire-fcm-compat",[B_]:"fire-perf",[V_]:"fire-perf-compat",[W_]:"fire-rc",[$_]:"fire-rc-compat",[H_]:"fire-gcs",[K_]:"fire-gcs-compat",[G_]:"fire-fst",[q_]:"fire-fst-compat","fire-js":"fire-js",[Y_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Map,Pi=new Map;function as(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $p(t,e){t.container.addOrOverwriteComponent(e)}function Nn(t){const e=t.name;if(Pi.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Pi.set(e,t);for(const n of nn.values())as(n,t);return!0}function Ls(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function X_(t,e,n=tn){Ls(t,e).clearInstance(n)}function Z_(){Pi.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Dn("app","Firebase",e0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let t0=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=Q_;function Bu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(n||(n=bp()),!n)throw yt.create("no-options");const o=nn.get(i);if(o){if(ss(n,o.options)&&ss(r,o.config))return o;throw yt.create("duplicate-app",{appName:i})}const s=new a_(i);for(const l of Pi.values())s.addComponent(l);const a=new t0(n,r,s);return nn.set(i,a),a}function Hp(t=tn){const e=nn.get(t);if(!e&&t===tn&&bp())return Bu();if(!e)throw yt.create("no-app",{appName:t});return e}function n0(){return Array.from(nn.values())}async function Kp(t){const e=t.name;nn.has(e)&&(nn.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Jt(t,e,n){var r;let i=(r=J_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(a.join(" "));return}Nn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Gp(t,e){if(t!==null&&typeof t!="function")throw yt.create("invalid-log-argument");f_(t,e)}function qp(t){d_(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="firebase-heartbeat-database",i0=1,Ri="firebase-heartbeat-store";let Ca=null;function Yp(){return Ca||(Ca=E_(r0,i0,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ri)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Ca}async function o0(t){try{return await(await Yp()).transaction(Ri).objectStore(Ri).get(Qp(t))}catch(e){if(e instanceof Pe)Rn.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function Dd(t,e){try{const r=(await Yp()).transaction(Ri,"readwrite");await r.objectStore(Ri).put(e,Qp(t)),await r.done}catch(n){if(n instanceof Pe)Rn.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function Qp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=1024,a0=30*24*60*60*1e3;class l0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new c0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=bd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=a0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bd(),{heartbeatsToSend:r,unsentEntries:i}=u0(this._heartbeatsCache.heartbeats),o=Lp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function bd(){return new Date().toISOString().substring(0,10)}function u0(t,e=s0){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Md(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Md(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class c0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return os()?Jw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await o0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Md(t){return Lp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(t){Nn(new en("platform-logger",e=>new k_(e),"PRIVATE")),Nn(new en("heartbeat",e=>new l0(e),"PRIVATE")),Jt(Al,Ld,t),Jt(Al,Ld,"esm2017"),Jt("fire-js","")}d0("");const f0=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Pe,SDK_VERSION:bn,_DEFAULT_ENTRY_NAME:tn,_addComponent:as,_addOrOverwriteComponent:$p,_apps:nn,_clearComponents:Z_,_components:Pi,_getProvider:Ls,_registerComponent:Nn,_removeServiceInstance:X_,deleteApp:Kp,getApp:Hp,getApps:n0,initializeApp:Bu,onLog:Gp,registerVersion:Jt,setLogLevel:qp},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n){this._delegate=e,this.firebase=n,as(e,new en("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Kp(this._delegate)))}_getService(e,n=tn){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=tn){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){as(this._delegate,e)}_addOrOverwriteComponent(e){$p(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ud=new Dn("app-compat","Firebase",p0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Jt,setLogLevel:qp,onLog:Gp,apps:null,SDK_VERSION:bn,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:f0}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||tn,!Rd(e,u))throw Ud.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,d={}){const c=Bu(u,d);if(Rd(e,c.name))return e[c.name];const g=new t(c,n);return e[c.name]=g,g}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,c=d.replace("-compat","");if(Nn(u)&&u.type==="PUBLIC"){const g=(y=i())=>{if(typeof y[c]!="function")throw Ud.create("invalid-app-argument",{appName:d});return y[c]()};u.serviceProps!==void 0&&is(g,u.serviceProps),n[c]=g,t.prototype[c]=function(...y){return this._getService.bind(this,d).apply(this,u.multipleInstances?y:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(){const t=m0(h0);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Jp,extendNamespace:e,createSubscribe:zp,ErrorFactory:Dn,deepExtend:is});function e(n){is(t,n)}return t}const g0=Jp();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Fu("@firebase/app-compat"),v0="@firebase/app-compat",y0="0.2.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){Jt(v0,y0,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Qw()&&self.firebase!==void 0){jd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&jd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const kr=g0;w0();var _0="firebase",E0="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr.registerVersion(_0,E0,"app-compat");function Vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Fr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},jn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Xp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const S0=I0,k0=Xp,Zp=new Dn("auth","Firebase",Xp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Fu("@firebase/auth");function T0(t,...e){ls.logLevel<=F.WARN&&ls.warn(`Auth (${bn}): ${t}`,...e)}function ko(t,...e){ls.logLevel<=F.ERROR&&ls.error(`Auth (${bn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,...e){throw Wu(t,...e)}function de(t,...e){return Wu(t,...e)}function em(t,e,n){const r=Object.assign(Object.assign({},k0()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&le(t,"argument-error"),em(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Wu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Zp.create(t,...e)}function I(t,e,...n){if(!t)throw Wu(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Je(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $u(){return Fd()==="http:"||Fd()==="https:"}function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($u()||jp()||"connection"in navigator)?navigator.onLine:!0}function P0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=Yw()||Uu()}get(){return C0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=new zi(3e4,6e4);function Q(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function J(t,e,n,r,i={}){return nm(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Sr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tm.fetch()(rm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function nm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R0),e);try{const i=new A0(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Gr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gr(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Gr(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Gr(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw em(t,d,u);le(t,d)}}catch(i){if(i instanceof Pe)throw i;le(t,"network-request-failed",{message:String(i)})}}async function Rt(t,e,n,r,i={}){const o=await J(t,e,n,r,i);return"mfaPendingCredential"in o&&le(t,"multi-factor-auth-required",{_serverResponse:o}),o}function rm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Hu(t.config,i):`${t.config.apiScheme}://${i}`}function O0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(de(this.auth,"network-request-failed")),N0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=de(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zd(t){return t!==void 0&&t.getResponse!==void 0}function Bd(t){return t!==void 0&&t.enterprise!==void 0}class x0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return O0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L0(t){return(await J(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function D0(t,e){return J(t,"GET","/v2/recaptchaConfig",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b0(t,e){return J(t,"POST","/v1/accounts:delete",e)}async function M0(t,e){return J(t,"POST","/v1/accounts:update",e)}async function U0(t,e){return J(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j0(t,e=!1){const n=b(t),r=await n.getIdToken(e),i=Ds(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ii(Pa(i.auth_time)),issuedAtTime:ii(Pa(i.iat)),expirationTime:ii(Pa(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Pa(t){return Number(t)*1e3}function Ds(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=Dp(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function F0(t){const e=Ds(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pe&&z0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function z0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oi(t){var e;const n=t.auth,r=await t.getIdToken(),i=await kt(t,U0(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?$0(o.providerUserInfo):[],a=W0(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new im(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function V0(t){const e=b(t);await Oi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W0(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $0(t){return t.map(e=>{var{providerId:n}=e,r=Vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H0(t,e){const n=await nm(t,{},async()=>{const r=Sr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=rm(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function K0(t,e){return J(t,"POST","/v2/accounts:revokeToken",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await H0(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ai;return r&&(I(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(I(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ai,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new B0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new im(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await kt(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j0(this,e)}reload(){return V0(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Oi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await kt(this,b0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,y=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,v=(s=n.photoURL)!==null&&s!==void 0?s:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:h,emailVerified:w,isAnonymous:k,providerData:P,stsTokenManager:R}=n;I(h&&R,e,"internal-error");const O=Ai.fromJSON(this.name,R);I(typeof h=="string",e,"internal-error"),At(c,e.name),At(g,e.name),I(typeof w=="boolean",e,"internal-error"),I(typeof k=="boolean",e,"internal-error"),At(y,e.name),At(v,e.name),At(_,e.name),At(T,e.name),At(p,e.name),At(f,e.name);const U=new _n({uid:h,auth:e,email:g,emailVerified:w,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:y,tenantId:_,stsTokenManager:O,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(U.providerData=P.map(x=>Object.assign({},x))),T&&(U._redirectEventId=T),U}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ai;i.updateFromServerResponse(n);const o=new _n({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Oi(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;function Ae(t){Je(t instanceof Function,"Expected a class definition");let e=Vd.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}om.type="NONE";const mr=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t,e,n){return`firebase:${t}:${e}:${n}`}class or{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=En(this.userKey,i.apiKey,o),this.fullPersistenceKey=En("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new or(Ae(mr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Ae(mr);const s=En(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const c=_n._fromJSON(e,d);u!==o&&(a=c),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new or(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new or(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(um(e))return"Blackberry";if(cm(e))return"Webos";if(Ku(e))return"Safari";if((e.includes("chrome/")||am(e))&&!e.includes("edge/"))return"Chrome";if(Bi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sm(t=ne()){return/firefox\//i.test(t)}function Ku(t=ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function am(t=ne()){return/crios\//i.test(t)}function lm(t=ne()){return/iemobile/i.test(t)}function Bi(t=ne()){return/android/i.test(t)}function um(t=ne()){return/blackberry/i.test(t)}function cm(t=ne()){return/webos/i.test(t)}function Cr(t=ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function G0(t=ne()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function q0(t=ne()){var e;return Cr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Y0(){return Fp()&&document.documentMode===10}function dm(t=ne()){return Cr(t)||Bi(t)||cm(t)||um(t)||/windows phone/i.test(t)||lm(t)}function Q0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fm(t,e=[]){let n;switch(t){case"Browser":n=Wd(ne());break;case"Worker":n=`${Wd(ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e={}){return J(t,"GET","/v2/passwordPolicy",Q(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=6;class eE{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Z0,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $d(this),this.idTokenSubscription=new $d(this),this.beforeStateQueue=new J0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ae(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await or.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Oi(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=P0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?b(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X0(this),n=new eE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await K0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ae(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await or.create(this,[Ae(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(I(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&T0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Y(t){return b(t)}class $d{constructor(e){this.auth=e,this.observer=null,this.addObserver=zp(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=de("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",nE().appendChild(r)})}function hm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rE="https://www.google.com/recaptcha/enterprise.js?render=",iE="recaptcha-enterprise",oE="NO_RECAPTCHA";class sE{constructor(e){this.type=iE,this.auth=Y(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{D0(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new x0(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(oE)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Bd(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}Gu(rE+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Hd(t,e,n,r=!1){const i=new sE(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function xi(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Hd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Hd(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(t,e){const n=Ls(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ss(o,e??{}))return i;le(i,"already-initialized")}return n.initialize({options:e})}function lE(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ae);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pm(t,e,n){const r=Y(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=mm(e),{host:s,port:a}=uE(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cE()}function mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uE(t){const e=mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Kd(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Kd(s)}}}function Kd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(t,e){return J(t,"POST","/v1/accounts:resetPassword",Q(t,e))}async function dE(t,e){return J(t,"POST","/v1/accounts:update",e)}async function fE(t,e){return J(t,"POST","/v1/accounts:signUp",e)}async function hE(t,e){return J(t,"POST","/v1/accounts:update",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pE(t,e){return Rt(t,"POST","/v1/accounts:signInWithPassword",Q(t,e))}async function bs(t,e){return J(t,"POST","/v1/accounts:sendOobCode",Q(t,e))}async function mE(t,e){return bs(t,e)}async function gE(t,e){return bs(t,e)}async function vE(t,e){return bs(t,e)}async function yE(t,e){return bs(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wE(t,e){return Rt(t,"POST","/v1/accounts:signInWithEmailLink",Q(t,e))}async function _E(t,e){return Rt(t,"POST","/v1/accounts:signInWithEmailLink",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends Pr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Li(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Li(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xi(e,n,"signInWithPassword",pE);case"emailLink":return wE(e,{email:this._email,oobCode:this._password});default:le(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xi(e,r,"signUpPassword",fE);case"emailLink":return _E(e,{idToken:n,email:this._email,oobCode:this._password});default:le(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t,e){return Rt(t,"POST","/v1/accounts:signInWithIdp",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE="http://localhost";class lt extends Pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):le("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Vu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wt(e,n)}buildRequest(){const e={requestUri:EE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return J(t,"POST","/v1/accounts:sendVerificationCode",Q(t,e))}async function SE(t,e){return Rt(t,"POST","/v1/accounts:signInWithPhoneNumber",Q(t,e))}async function kE(t,e){const n=await Rt(t,"POST","/v1/accounts:signInWithPhoneNumber",Q(t,e));if(n.temporaryProof)throw Gr(t,"account-exists-with-different-credential",n);return n}const TE={USER_NOT_FOUND:"user-not-found"};async function CE(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Rt(t,"POST","/v1/accounts:signInWithPhoneNumber",Q(t,n),TE)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends Pr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new In({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new In({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return SE(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return kE(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return CE(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new In({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RE(t){const e=Xn(Kr(t)).link,n=e?Xn(Kr(e)).deep_link_id:null,r=Xn(Kr(t)).deep_link_id;return(r?Xn(Kr(r)).link:null)||r||n||e||t}class Ms{constructor(e){var n,r,i,o,s,a;const l=Xn(Kr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=PE((i=l.mode)!==null&&i!==void 0?i:null);I(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=RE(e);try{return new Ms(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.providerId=ln.PROVIDER_ID}static credential(e,n){return Li._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ms.parseLink(n);return I(r,"argument-error"),Li._fromEmailAndCode(e,r.code,r.tenantId)}}ln.PROVIDER_ID="password";ln.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ln.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends Nt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class sr extends Rr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return sr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return sr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new sr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Rr{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Rr{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="http://localhost";class gr extends Pr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return wt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new gr(r,o)}static _create(e,n){return new gr(e,n)}buildRequest(){return{requestUri:NE,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="saml.";class us extends Nt{constructor(e){I(e.startsWith(OE),"argument-error"),super(e)}static credentialFromResult(e){return us.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return us.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=gr.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return gr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Rr{constructor(){super("twitter.com")}static credential(e,n){return lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vm(t,e){return Rt(t,"POST","/v1/accounts:signUp",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await _n._fromIdTokenResponse(e,r,i),s=Gd(r);return new Ve({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Gd(r);return new Ve({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Gd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AE(t){var e;const n=Y(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ve({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await vm(n,{returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs extends Pe{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cs(e,n,r,i)}}function ym(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?cs._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(t,e){const n=b(t);await Us(!0,n,e);const{providerUserInfo:r}=await M0(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=wm(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function qu(t,e,n=!1){const r=await kt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ve._forOperation(t,"link",r)}async function Us(t,e,n){await Oi(e);const r=wm(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _m(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await kt(t,ym(r,i,e,t),n);I(o.idToken,r,"internal-error");const s=Ds(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(t.uid===a,r,"user-mismatch"),Ve._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&le(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t,e,n=!1){const r="signIn",i=await ym(t,r,e),o=await Ve._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function js(t,e){return Em(Y(t),e)}async function Im(t,e){const n=b(t);return await Us(!1,n,e.providerId),qu(n,e)}async function Sm(t,e){return _m(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t,e){return Rt(t,"POST","/v1/accounts:signInWithCustomToken",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DE(t,e){const n=Y(t),r=await LE(n,{token:e,returnSecureToken:!0}),i=await Ve._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Yu._fromServerResponse(e,n):"totpInfo"in n?Qu._fromServerResponse(e,n):le(e,"internal-error")}}class Yu extends Vi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Yu(n)}}class Qu extends Vi{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Qu(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ju(t){const e=Y(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bE(t,e,n){const r=Y(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Fs(r,i,n),await xi(r,i,"getOobCode",gE)}async function ME(t,e,n){await gm(b(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ju(t),r})}async function UE(t,e){await hE(b(t),{oobCode:e})}async function km(t,e){const n=b(t),r=await gm(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Vi._fromServerResponse(Y(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function jE(t,e){const{data:n}=await km(b(t),e);return n.email}async function FE(t,e,n){const r=Y(t),s=await xi(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",vm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ju(t),l}),a=await Ve._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(a.user),a}function zE(t,e,n){return js(b(t),ln.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ju(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n){const r=Y(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(s,a){I(a.handleCodeInApp,r,"argument-error"),a&&Fs(r,s,a)}o(i,n),await xi(r,i,"getOobCode",vE)}function VE(t,e){const n=Ms.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function WE(t,e,n){const r=b(t),i=ln.credentialWithLink(e,n||Ni());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),js(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(t,e){return J(t,"POST","/v1/accounts:createAuthUri",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(t,e){const n=$u()?Ni():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await $E(b(t),r);return i||[]}async function KE(t,e){const n=b(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Fs(n.auth,i,e);const{email:o}=await mE(n.auth,i);o!==t.email&&await t.reload()}async function GE(t,e,n){const r=b(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Fs(r.auth,o,n);const{email:s}=await yE(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qE(t,e){return J(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=b(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await kt(r,qE(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function QE(t,e){return Tm(b(t),e,null)}function JE(t,e){return Tm(b(t),null,e)}async function Tm(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await kt(t,dE(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=Ds(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new ar(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new ZE(o,i);case"github.com":return new eI(o,i);case"google.com":return new tI(o,i);case"twitter.com":return new nI(o,i,t.screenName||null);case"custom":case"anonymous":return new ar(o,null);default:return new ar(o,r,i)}}class ar{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class Cm extends ar{constructor(e,n,r,i){super(e,n,r),this.username=i}}class ZE extends ar{constructor(e,n){super(e,"facebook.com",n)}}class eI extends Cm{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class tI extends ar{constructor(e,n){super(e,"google.com",n)}}class nI extends Cm{constructor(e,n,r){super(e,"twitter.com",n,r)}}function rI(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:XE(n)}function iI(t,e,n,r){return b(t).onIdTokenChanged(e,n,r)}function oI(t,e,n){return b(t).beforeAuthStateChanged(e,n)}function sI(t,e,n,r){return b(t).onAuthStateChanged(e,n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new vn("enroll",e,n)}static _fromMfaPendingCredential(e){return new vn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Y(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Vi._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const s=vn._fromMfaPendingCredential(i.mfaPendingCredential);return new Xu(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await Ve._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return I(n.user,r,"internal-error"),Ve._forOperation(n.user,n.operationType,u);default:le(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function aI(t,e){var n;const r=b(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xu._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(t,e){return J(t,"POST","/v2/accounts/mfaEnrollment:start",Q(t,e))}function uI(t,e){return J(t,"POST","/v2/accounts/mfaEnrollment:finalize",Q(t,e))}function cI(t,e){return J(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Q(t,e))}class Zu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Vi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Zu(e)}async getSession(){return vn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),o=await kt(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await kt(this.user,cI(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Ra=new WeakMap;function dI(t){const e=b(t);return Ra.has(e)||Ra.set(e,Zu._fromUser(e)),Ra.get(e)}const ds="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ds,"1"),this.storage.removeItem(ds),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){const t=ne();return Ku(t)||Cr(t)}const hI=1e3,pI=10;class Rm extends Pm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=fI()&&Q0(),this.fallbackToPolling=dm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Y0()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,pI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rm.type="LOCAL";const zs=Rm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Pm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Nm.type="SESSION";const rn=Nm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Bs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await mI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Wi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(c){const g=c;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(g.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return window}function vI(t){ee().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(){return typeof ee().WorkerGlobalScope<"u"&&typeof ee().importScripts=="function"}async function yI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _I(){return ec()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="firebaseLocalStorageDb",EI=1,fs="firebaseLocalStorage",Am="fbase_key";class $i{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vs(t,e){return t.transaction([fs],e?"readwrite":"readonly").objectStore(fs)}function II(){const t=indexedDB.deleteDatabase(Om);return new $i(t).toPromise()}function xl(){const t=indexedDB.open(Om,EI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fs,{keyPath:Am})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fs)?e(r):(r.close(),await II(),e(await xl()))})})}async function qd(t,e,n){const r=Vs(t,!0).put({[Am]:e,value:n});return new $i(r).toPromise()}async function SI(t,e){const n=Vs(t,!1).get(e),r=await new $i(n).toPromise();return r===void 0?null:r.value}function Yd(t,e){const n=Vs(t,!0).delete(e);return new $i(n).toPromise()}const kI=800,TI=3;class xm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ec()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bs._getInstance(_I()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xl();return await qd(e,ds,"1"),await Yd(e,ds),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>SI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Vs(i,!1).getAll();return new $i(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xm.type="LOCAL";const vr=xm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(t,e){return J(t,"POST","/v2/accounts/mfaSignIn:start",Q(t,e))}function PI(t,e){return J(t,"POST","/v2/accounts/mfaSignIn:finalize",Q(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=500,NI=6e4,co=1e12;class OI{constructor(e){this.auth=e,this.counter=co,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new AI(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||co;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||co;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||co;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class AI{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=xI(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},NI)},RI))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function xI(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=hm("rcb"),LI=new zi(3e4,6e4),DI="https://www.google.com/recaptcha/api.js?";class bI{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=ee().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(MI(n),e,"argument-error"),this.shouldResolveImmediately(n)&&zd(ee().grecaptcha)?Promise.resolve(ee().grecaptcha):new Promise((r,i)=>{const o=ee().setTimeout(()=>{i(de(e,"network-request-failed"))},LI.get());ee()[Na]=()=>{ee().clearTimeout(o),delete ee()[Na];const a=ee().grecaptcha;if(!a||!zd(a)){i(de(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const c=l(u,d);return this.counter++,c},this.hostLanguage=n,r(a)};const s=`${DI}?${Sr({onload:Na,render:"explicit",hl:n})}`;Gu(s).catch(()=>{clearTimeout(o),i(de(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=ee().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function MI(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class UI{async load(e){return new OI(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm="recaptcha",jI={theme:"light",type:"image"};let FI=class{constructor(e,n,r=Object.assign({},jI)){this.parameters=r,this.type=Lm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Y(e),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new UI:new bI,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=ee()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I($u()&&!ec(),this.auth,"internal-error"),await zI(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await L0(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function zI(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=In._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function BI(t,e,n){const r=Y(t),i=await Ws(r,e,b(n));return new tc(i,o=>js(r,o))}async function VI(t,e,n){const r=b(t);await Us(!1,r,"phone");const i=await Ws(r.auth,e,b(n));return new tc(i,o=>Im(r,o))}async function WI(t,e,n){const r=b(t),i=await Ws(r.auth,e,b(n));return new tc(i,o=>Sm(r,o))}async function Ws(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===Lm,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return I(s.type==="enroll",t,"internal-error"),(await lI(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await CI(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await IE(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function $I(t,e){await qu(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On=class To{constructor(e){this.providerId=To.PROVIDER_ID,this.auth=Y(e)}verifyPhoneNumber(e,n){return Ws(this.auth,e,b(n))}static credential(e,n){return In._fromVerification(e,n)}static credentialFromResult(e){const n=e;return To.credentialFromTaggedObject(n)}static credentialFromError(e){return To.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?In._fromTokenResponse(n,r):null}};On.PROVIDER_ID="phone";On.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t,e){return e?Ae(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc extends Pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HI(t){return Em(t.auth,new nc(t),t.bypassAuthState)}function KI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),_m(n,new nc(t),t.bypassAuthState)}async function GI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),qu(n,new nc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return KI;default:le(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=new zi(2e3,1e4);async function YI(t,e,n){const r=Y(t);Tr(t,e,Nt);const i=Mn(r,n);return new pt(r,"signInViaPopup",e,i).executeNotNull()}async function QI(t,e,n){const r=b(t);Tr(r.auth,e,Nt);const i=Mn(r.auth,n);return new pt(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function JI(t,e,n){const r=b(t);Tr(r.auth,e,Nt);const i=Mn(r.auth,n);return new pt(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class pt extends Dm{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Wi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(de(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(de(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(de(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qI.get())};e()}}pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="pendingRedirect",oi=new Map;class ZI extends Dm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oi.get(this.auth._key());if(!e){try{const r=await eS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oi.set(this.auth._key(),e)}return this.bypassAuthState||oi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eS(t,e){const n=Mm(e),r=bm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function rc(t,e){return bm(t)._set(Mm(e),"true")}function tS(){oi.clear()}function ic(t,e){oi.set(t._key(),e)}function bm(t){return Ae(t._redirectPersistence)}function Mm(t){return En(XI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(t,e,n){return rS(t,e,n)}async function rS(t,e,n){const r=Y(t);Tr(t,e,Nt),await r._initializationPromise;const i=Mn(r,n);return await rc(i,r),i._openRedirect(r,e,"signInViaRedirect")}function iS(t,e,n){return oS(t,e,n)}async function oS(t,e,n){const r=b(t);Tr(r.auth,e,Nt),await r.auth._initializationPromise;const i=Mn(r.auth,n);await rc(i,r.auth);const o=await Um(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function sS(t,e,n){return aS(t,e,n)}async function aS(t,e,n){const r=b(t);Tr(r.auth,e,Nt),await r.auth._initializationPromise;const i=Mn(r.auth,n);await Us(!1,r,e.providerId),await rc(i,r.auth);const o=await Um(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function lS(t,e){return await Y(t)._initializationPromise,$s(t,e,!1)}async function $s(t,e,n=!1){const r=Y(t),i=Mn(r,e),s=await new ZI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Um(t){const e=Wi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=10*60*1e3;class jm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Fm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(de(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uS&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qd(e))}saveEventToCache(e){this.cachedEventUids.add(Qd(e)),this.lastProcessedEventTime=Date.now()}}function Qd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(t,e={}){return J(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fS=/^https?/;async function hS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zm(t);for(const n of e)try{if(pS(n))return}catch{}le(t,"unauthorized-domain")}function pS(t){const e=Ni(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!fS.test(n))return!1;if(dS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS=new zi(3e4,6e4);function Jd(){const t=ee().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gS(t){return new Promise((e,n)=>{var r,i,o;function s(){Jd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jd(),n(de(t,"network-request-failed"))},timeout:mS.get()})}if(!((i=(r=ee().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ee().gapi)===null||o===void 0)&&o.load)s();else{const a=hm("iframefcb");return ee()[a]=()=>{gapi.load?s():n(de(t,"network-request-failed"))},Gu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Co=null,e})}let Co=null;function vS(t){return Co=Co||gS(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=new zi(5e3,15e3),wS="__/auth/iframe",_S="emulator/auth/iframe",ES={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},IS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SS(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Hu(e,_S):`https://${t.config.authDomain}/${wS}`,r={apiKey:e.apiKey,appName:t.name,v:bn},i=IS.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Sr(r).slice(1)}`}async function kS(t){const e=await vS(t),n=ee().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:SS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ES,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=de(t,"network-request-failed"),a=ee().setTimeout(()=>{o(s)},yS.get());function l(){ee().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CS=500,PS=600,RS="_blank",NS="http://localhost";class Xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OS(t,e,n,r=CS,i=PS){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},TS),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ne().toLowerCase();n&&(a=am(u)?RS:n),sm(u)&&(e=e||NS,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[y,v])=>`${g}${y}=${v},`,"");if(q0(u)&&a!=="_self")return AS(e||"",a),new Xd(null);const c=window.open(e||"",a,d);I(c,t,"popup-blocked");try{c.focus()}catch{}return new Xd(c)}function AS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="__/auth/handler",LS="emulator/auth/handler",DS=encodeURIComponent("fac");async function Ll(t,e,n,r,i,o){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bn,eventId:i};if(e instanceof Nt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",t_(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(o||{}))s[d]=c}if(e instanceof Rr){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${DS}=${encodeURIComponent(l)}`:"";return`${bS(t)}?${Sr(a).slice(1)}${u}`}function bS({config:t}){return t.emulator?Hu(t,LS):`https://${t.authDomain}/${xS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="webStorageSupport";class MS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rn,this._completeRedirectFn=$s,this._overrideRedirectResult=ic}async _openPopup(e,n,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ll(e,n,r,Ni(),i);return OS(e,s,Wi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await Ll(e,n,r,Ni(),i);return vI(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kS(e),r=new jm(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oa,{type:Oa},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Oa];s!==void 0&&n(!!s),le(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dm()||Ku()||Cr()}}const Bm=MS;class US{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ot("unexpected MultiFactorSessionType")}}}class oc extends US{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new oc(e)}_finalizeEnroll(e,n,r){return uI(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return PI(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Vm{constructor(){}static assertion(e){return oc._fromCredential(e)}}Vm.FACTOR_ID="phone";var Zd="@firebase/auth",ef="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zS(t){Nn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;I(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fm(t)},u=new tE(r,i,o,l);return lE(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nn(new en("auth-internal",e=>{const n=Y(e.getProvider("auth").getImmediate());return(r=>new jS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Zd,ef,FS(t)),Jt(Zd,ef,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=5*60,VS=Mp("authIdTokenMaxAge")||BS;let tf=null;const WS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VS)return;const i=n==null?void 0:n.token;tf!==i&&(tf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $S(t=Hp()){const e=Ls(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aE(t,{popupRedirectResolver:Bm,persistence:[vr,zs,rn]}),r=Mp("authTokenSyncURL");if(r){const o=WS(r);oI(n,o,()=>o(n.currentUser)),iI(n,s=>o(s))}const i=Gw("auth");return i&&pm(n,`http://${i}`),n}zS("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=2e3;async function KS(t,e,n){var r;const{BuildInfo:i}=An();Je(e.sessionId,"AuthEvent did not contain a session ID");const o=await JS(e.sessionId),s={};return Cr()?s.ibi=i.packageName:Bi()?s.apn=i.packageName:le(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,Ll(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function GS(t){const{BuildInfo:e}=An(),n={};Cr()?n.iosBundleId=e.packageName:Bi()?n.androidPackageName=e.packageName:le(t,"operation-not-supported-in-this-environment"),await zm(t,n)}function qS(t){const{cordova:e}=An();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,G0()?"_blank":"_system","location=yes"),n(i)})})}async function YS(t,e,n){const{cordova:r}=An();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var c;o();const g=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof g=="function"&&g(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(de(t,"redirect-cancelled-by-user"))},HS))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),Bi()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function QS(t){var e,n,r,i,o,s,a,l,u,d;const c=An();I(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((o=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(s=c==null?void 0:c.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((d=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function JS(t){const e=XS(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function XS(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=20;class ek extends jm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function tk(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:ik(),postBody:null,tenantId:t.tenantId,error:de(t,"no-auth-event")}}function nk(t,e){return Dl()._set(bl(t),e)}async function nf(t){const e=await Dl()._get(bl(t));return e&&await Dl()._remove(bl(t)),e}function rk(t,e){var n,r;const i=sk(e);if(i.includes("/__/auth/callback")){const o=Po(i),s=o.firebaseError?ok(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?de(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function ik(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ZS;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Dl(){return Ae(zs)}function bl(t){return En("authEvent",t.config.apiKey,t.name)}function ok(t){try{return JSON.parse(t)}catch{return null}}function sk(t){const e=Po(t),n=e.link?decodeURIComponent(e.link):void 0,r=Po(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Po(i).link||i||r||n||t}function Po(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Xn(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=500;class lk{constructor(){this._redirectPersistence=rn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=$s,this._overrideRedirectResult=ic}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new ek(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){le(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){QS(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),tS(),await this._originValidation(e);const s=tk(e,r,i);await nk(e,s);const a=await KS(e,s,n),l=await qS(a);return YS(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=GS(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=An(),s=setTimeout(async()=>{await nf(e),n.onEvent(rf())},ak),a=async d=>{clearTimeout(s);const c=await nf(e);let g=null;c&&(d!=null&&d.url)&&(g=rk(c,d.url)),n.onEvent(g||rf())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;An().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(c){console.error(c)}}}}const uk=lk;function rf(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:de("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(t,e){Y(t)._logFramework(e)}var dk="@firebase/auth-compat",fk="0.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=1e3;function si(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function pk(){return si()==="http:"||si()==="https:"}function Wm(t=ne()){return!!((si()==="file:"||si()==="ionic:"||si()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function mk(){return Uu()||Up()}function gk(){return Fp()&&(document==null?void 0:document.documentMode)===11}function vk(t=ne()){return/Edge\/\d+/.test(t)}function yk(t=ne()){return gk()||vk(t)}function $m(){try{const t=self.localStorage,e=Wi();if(t)return t.setItem(e,"1"),t.removeItem(e),yk()?os():!0}catch{return sc()&&os()}return!1}function sc(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Aa(){return(pk()||jp()||Wm())&&!mk()&&$m()&&!sc()}function Hm(){return Wm()&&typeof document<"u"}async function wk(){return Hm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},hk);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function _k(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},zr=I,Km="persistence";function Ek(t,e){if(zr(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Uu()){zr(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(Up()){zr(e===Ne.NONE,t,"unsupported-persistence-type");return}if(sc()){zr(e===Ne.NONE||e===Ne.LOCAL&&os(),t,"unsupported-persistence-type");return}zr(e===Ne.NONE||$m(),t,"unsupported-persistence-type")}async function Ml(t){await t._initializationPromise;const e=Gm(),n=En(Km,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Ik(t,e){const n=Gm();if(!n)return[];const r=En(Km,t,e);switch(n.getItem(r)){case Ne.NONE:return[mr];case Ne.LOCAL:return[vr,rn];case Ne.SESSION:return[rn];default:return[]}}function Gm(){var t;try{return((t=_k())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=I;class zt{constructor(){this.browserResolver=Ae(Bm),this.cordovaResolver=Ae(uk),this.underlyingResolver=null,this._redirectPersistence=rn,this._completeRedirectFn=$s,this._overrideRedirectResult=ic}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Hm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Sk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await wk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t){return t.unwrap()}function kk(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(t){return Ym(t)}function Ck(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Pk(t,aI(t,e))}else if(r){const i=Ym(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Ym(t){const{_tokenResponse:e}=t instanceof Pe?t.customData:t;if(!e)return null;if(!(t instanceof Pe)&&"temporaryProof"in e&&"phoneNumber"in e)return On.credentialFromResult(t);const n=e.providerId;if(!n||n===Fr.PASSWORD)return null;let r;switch(n){case Fr.GOOGLE:r=nt;break;case Fr.FACEBOOK:r=tt;break;case Fr.GITHUB:r=rt;break;case Fr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?gr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new sr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Pe?r.credentialFromError(t):r.credentialFromResult(t)}function Ee(t,e){return e.catch(n=>{throw n instanceof Pe&&Ck(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:Tk(n),additionalUserInfo:rI(n),user:mt.getOrCreate(i)}})}async function Ul(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ee(t,n.confirm(r))}}class Pk{constructor(e,n){this.resolver=n,this.auth=kk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ee(qm(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._delegate=e,this.multiFactor=dI(e)}static getOrCreate(e){return mt.USER_MAP.has(e)||mt.USER_MAP.set(e,new mt(e)),mt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ee(this.auth,Im(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ul(this.auth,VI(this._delegate,e,n))}async linkWithPopup(e){return Ee(this.auth,JI(this._delegate,e,zt))}async linkWithRedirect(e){return await Ml(Y(this.auth)),sS(this._delegate,e,zt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ee(this.auth,Sm(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ul(this.auth,WI(this._delegate,e,n))}reauthenticateWithPopup(e){return Ee(this.auth,QI(this._delegate,e,zt))}async reauthenticateWithRedirect(e){return await Ml(Y(this.auth)),iS(this._delegate,e,zt)}sendEmailVerification(e){return KE(this._delegate,e)}async unlink(e){return await xE(this._delegate,e),this}updateEmail(e){return QE(this._delegate,e)}updatePassword(e){return JE(this._delegate,e)}updatePhoneNumber(e){return $I(this._delegate,e)}updateProfile(e){return YE(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return GE(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}mt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=I;class jl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Br(r,"invalid-api-key",{appName:e.name}),Br(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?zt:void 0;this._delegate=n.initialize({options:{persistence:Rk(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(S0),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?mt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){pm(this._delegate,e,n)}applyActionCode(e){return UE(this._delegate,e)}checkActionCode(e){return km(this._delegate,e)}confirmPasswordReset(e,n){return ME(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ee(this._delegate,FE(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return HE(this._delegate,e)}isSignInWithEmailLink(e){return VE(this._delegate,e)}async getRedirectResult(){Br(Aa(),this._delegate,"operation-not-supported-in-this-environment");const e=await lS(this._delegate,zt);return e?Ee(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){ck(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=of(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=of(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return BE(this._delegate,e,n)}sendPasswordResetEmail(e,n){return bE(this._delegate,e,n||void 0)}async setPersistence(e){Ek(this._delegate,e);let n;switch(e){case Ne.SESSION:n=rn;break;case Ne.LOCAL:n=await Ae(vr)._isAvailable()?vr:zs;break;case Ne.NONE:n=mr;break;default:return le("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ee(this._delegate,AE(this._delegate))}signInWithCredential(e){return Ee(this._delegate,js(this._delegate,e))}signInWithCustomToken(e){return Ee(this._delegate,DE(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ee(this._delegate,zE(this._delegate,e,n))}signInWithEmailLink(e,n){return Ee(this._delegate,WE(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ul(this._delegate,BI(this._delegate,e,n))}async signInWithPopup(e){return Br(Aa(),this._delegate,"operation-not-supported-in-this-environment"),Ee(this._delegate,YI(this._delegate,e,zt))}async signInWithRedirect(e){return Br(Aa(),this._delegate,"operation-not-supported-in-this-environment"),await Ml(this._delegate),nS(this._delegate,e,zt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return jE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}jl.Persistence=Ne;function of(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&mt.getOrCreate(s)),error:e,complete:n}}function Rk(t,e){const n=Ik(t,e);if(typeof self<"u"&&!n.includes(vr)&&n.push(vr),typeof window<"u")for(const r of[zs,rn])n.includes(r)||n.push(r);return n.includes(mr)||n.push(mr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(){this.providerId="phone",this._delegate=new On(qm(kr.auth()))}static credential(e,n){return On.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ac.PHONE_SIGN_IN_METHOD=On.PHONE_SIGN_IN_METHOD;ac.PROVIDER_ID=On.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=I;class Ok{constructor(e,n,r=kr.app()){var i;Nk((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new FI(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak="auth-compat";function xk(t){t.INTERNAL.registerComponent(new en(Ak,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new jl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:jn.EMAIL_SIGNIN,PASSWORD_RESET:jn.PASSWORD_RESET,RECOVER_EMAIL:jn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:jn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:jn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:jn.VERIFY_EMAIL}},EmailAuthProvider:ln,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:sr,SAMLAuthProvider:us,PhoneAuthProvider:ac,PhoneMultiFactorGenerator:Vm,RecaptchaVerifier:Ok,TwitterAuthProvider:it,Auth:jl,AuthCredential:Pr,Error:Pe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(dk,fk)}xk(kr);const Lk={apiKey:"AIzaSyBoJAVUhoS5aK0i3TbD4-HxrzkV-kNdOlM",authDomain:"hrlibrary-cace7.firebaseapp.com",projectId:"hrlibrary-cace7",storageBucket:"hrlibrary-cace7.appspot.com",messagingSenderId:"96435617487",appId:"1:96435617487:web:e3396f5f8599c984ca81ba"};kr.initializeApp(Lk);const Hs=kr.auth();let Fl=null;const Dk=async()=>{Fl=null;try{await Hs.signOut()}catch(t){Fl=t.message}},bk=()=>({error:Fl,logOut:Dk}),Qm=()=>{const[t,e]=S.useState(""),[n,r]=S.useState([]),[i,o]=S.useState([]),[s,a]=S.useState(""),l=Fi(),[u,d]=S.useState(!1),{error:c,logOut:g}=bk(),[y,v]=S.useState(!0),_=async()=>{await g(),c||l("/")},T=()=>{d(!u)},p=$S();S.useEffect(()=>{const h=sI(p,w=>{w?(o(w.email),console.log(i+" samuel header"),console.log(w),a(w)):(console.log("User is signed out"),a(null))});return()=>{h()}},[]);function f(h){if(h.preventDefault(),t)console.log("yes"),fetch(`https://openlibrary.org/search.json?q=${t}`).then(w=>w.json()).then(w=>{const k=w.docs;console.log(k),r(k),console.log("jj:",n)}).catch(w=>{console.error(w)});else{console.log("input value is empty"),console.log(alert("input value is empty"));return}return T()}return m.jsxs(m.Fragment,{children:[m.jsxs("nav",{className:"container",children:[m.jsx("header",{children:m.jsx(Fn,{to:"/",children:"HrLibrary"})}),m.jsx("div",{className:"search-box",children:m.jsxs("form",{onSubmit:f,children:[m.jsx("input",{type:"text",placeholder:"search",onChange:h=>e(h.target.value),className:"inp-word"}),m.jsx("button",{id:"search-btn",children:"search"})]})}),m.jsx("ul",{children:s===null?m.jsx("div",{className:"taged",children:y&&m.jsxs(m.Fragment,{children:[m.jsx("li",{className:"signup",children:m.jsx(Fn,{to:"/SignUp",className:"link",children:"Sign up"})}),m.jsx("li",{className:"login",children:m.jsx(Fn,{to:"/Login",className:"link",children:"Login"})})]})}):m.jsx(m.Fragment,{children:m.jsx("div",{className:"tag",children:y&&m.jsxs(m.Fragment,{children:[m.jsx("li",{className:"emailName",children:i}),m.jsx("li",{className:"blog",children:m.jsx(Fn,{to:"/BLog",className:"link",children:"Blog"})}),m.jsx("li",{className:"logOut",onClick:_,children:"log out"})]})})})}),m.jsx("div",{className:"menu",children:m.jsx(jw,{onClick:()=>v(!y)})})]}),m.jsx("div",{className:"output",style:{display:u?"block":"none"},children:m.jsx("ul",{children:n.map(h=>(console.log("harry potter titles:",h.title,h.key),m.jsx(m.Fragment,{children:m.jsx("li",{className:"outputed",style:{marginTop:"15px"},onClick:()=>{l("/SearchedResuts",{replace:!0,state:{book:h}})},children:m.jsx(Fn,{to:"/SearchedResuts",children:h.title})},h.key)})))})})]})};function Mk(){return m.jsxs("main",{children:[m.jsx(Qm,{}),m.jsx("div",{className:"reading all content",children:m.jsxs("ul",{children:[m.jsxs("li",{children:[m.jsx("h1",{children:" Books are a uniquely portable magic."}),m.jsx("div",{children:m.jsx("p",{children:"Reality doesn’t always give us the life that we desire, but we can always find what we desire between the pages of books. Maybe this is why we read, and why in moments of darkness we return to books: to find words for what we already know."})})]}),m.jsx("li",{children:m.jsxs("figure",{children:[m.jsx("img",{src:"https://res.cloudinary.com/dz0drrrvm/image/upload/v1704930008/n6jw4lnrehot2jxfglj0.jpg",alt:"A place to read"}),m.jsx("figcaption",{children:m.jsxs("p",{children:["Books and doors are the same thing. ",m.jsx("br",{}),"You open them, and you go through into another world."]})})]})})]})}),m.jsx("div",{className:"space"}),m.jsxs("section",{className:"world-library",children:[m.jsxs("div",{className:"world-library-books",children:[m.jsx("h2",{children:"The worlds best trusted library"}),m.jsx("p",{className:"slide-text",children:"Libraries are portals to worlds unknown, where each book is a key and every reader a traveler on the journey of knowledge."})]}),m.jsxs("div",{className:"library-shelf room",children:["Nothing is pleasanter than exploring a library. ",m.jsx("br",{}),"Libraries store the energy that fuels the imagination. ",m.jsx("br",{}),"They open up windows to the world and inspire us to explore and achieve,",m.jsx("br",{}),"and contribute to improving our quality of life."]})]}),m.jsxs("section",{className:"romance fiction love science",children:[m.jsxs("div",{className:"rae",children:[m.jsxs("div",{className:"romanceFiction",children:[m.jsxs("span",{className:"romantic",children:[m.jsx("h2",{children:"Fiction"}),m.jsx("div",{children:"is a type of book or story that is written about imaginary characters and events and not based on real people and facts:"})]}),m.jsxs("span",{className:"fiction",children:[m.jsx("h2",{children:"Non-fiction"}),m.jsx("div",{children:"is about real events and facts, rather than stories that have been invented"})]})]}),m.jsxs("div",{className:"loveScience",children:[m.jsxs("span",{className:"love",children:[m.jsx("h2",{children:"Historical-Fiction"}),m.jsx("div",{children:"takes readers to a time and place in the past,  it’s set in the past, with every element of the story conforming to the norms of the day. "})]}),m.jsxs("span",{className:"science",children:[m.jsx("h2",{children:"Science-Fiction"}),m.jsx("div",{children:" deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."})]})]})]}),m.jsx("div",{className:"romanceButton",children:m.jsx("button",{children:"Read a Book"})})]}),m.jsxs("footer",{children:[m.jsx("header",{children:"HrLibrary"}),m.jsx("div",{className:"footerCompany",children:m.jsxs("div",{className:"genres",children:[m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"manga"}),m.jsx("div",{children:"manga"}),m.jsx("div",{children:"manga"}),m.jsx("div",{children:"manga"})]}),m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"Mystery/Thriller"}),m.jsx("div",{children:"Historical Fiction"}),m.jsx("div",{children:"Dystopian"}),m.jsx("div",{children:"Adventure"}),m.jsx("div",{children:"Romance"})]}),m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"Mystery/Thriller1"}),m.jsx("div",{children:"Historical Fiction2"}),m.jsx("div",{children:"Dystopian3"}),m.jsx("div",{children:"Adventure4"}),m.jsx("div",{children:"Romance5"})]}),m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"Fantasy:"}),m.jsx("div",{children:"Science Fic"}),m.jsx("div",{children:"Coming-of-Age"}),m.jsx("div",{children:"Horror"})]}),m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"Romance"}),m.jsx("div",{children:"Historical Fiction"}),m.jsx("div",{children:"Western"}),m.jsx("div",{children:"Satire"})]}),m.jsxs("div",{className:"list",children:[m.jsx("div",{children:"Login"}),m.jsx("div",{children:"Sign up"})]})]})}),m.jsxs("div",{className:"subscribe",children:[m.jsxs("div",{className:"newsletter",children:[m.jsx("p",{children:"Join our newsletter to stay up to date on features and releases"}),m.jsx("div",{className:"search-box",children:m.jsxs("form",{children:[m.jsx("input",{type:"text",placeholder:"search",className:"inp-word"}),m.jsx("button",{id:"search-btn",children:"search"})]})})]}),m.jsxs("p",{children:["I understand that HrLibrary will process my information in accordance with their ",m.jsx("a",{href:"/privacy",children:"Privacy Policy"})," I may withdraw my consent through unsubscribe links at any time."]})]}),m.jsx("hr",{})]})]})}let qr=null;const Uk=async(t,e)=>{qr=null;try{const n=await Hs.signInWithEmailAndPassword(t,e),r=n.user;return qr=null,{res:n,jj:r}}catch(n){qr=n.message,console.log(qr)}},jk=()=>({error:qr,login:Uk}),Fk=()=>{var g,y;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,o]=S.useState(null),s=Fi(),l=((y=(g=ut().state)==null?void 0:g.from)==null?void 0:y.pathname)||"/Blog",{error:u,login:d}=jk(),c=async v=>{if(v.preventDefault(),await d(t,n),u)o(u);else{s(l,{replace:!0}),e(""),r("");return}};return m.jsx(m.Fragment,{children:m.jsxs("div",{className:"mains",children:[m.jsx("div",{className:"loginImage"}),m.jsx("div",{className:"formContainer",children:m.jsx("div",{className:"formix signup-form",children:m.jsxs("form",{onSubmit:c,children:[m.jsxs("div",{className:"input-mail",children:[m.jsx("label",{htmlFor:"gmail",children:"Gmail"}),m.jsx("div",{className:"input-Input-mail",children:m.jsx("input",{type:"text",id:"gmail",onChange:v=>e(v.target.value),placeholder:"gmail"})})]}),m.jsxs("div",{className:"input-passkey",children:[m.jsx("label",{htmlFor:"password",children:"Password"}),m.jsx("div",{className:"input-Input-passkey",children:m.jsx("input",{type:"text",id:"password",onChange:v=>r(v.target.value),placeholder:"password"})})]}),u&&m.jsx("p",{children:i}),m.jsx("button",{className:"submission",children:"Submit"})]})})})]})})};let Ro=null;const zk=async(t,e)=>{Ro=null;try{const n=await Hs.createUserWithEmailAndPassword(t,e);if(!n)throw new Error("");return Ro=null,console.log(n.user),n}catch(n){Ro=n.message}},Bk=()=>({error:Ro,signUp:zk}),Vk=()=>{var y;const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,o]=S.useState(null),[s]=S.useState("hayor"),a=Fi(),u=((y=ut().state)==null?void 0:y.from.pathname)||"/Blog",{error:d,signUp:c}=Bk(),g=async v=>{if(v.preventDefault(),await c(t,n),d)o(d);else{a(u,{replace:!0}),e(""),r("");return}};return console.log(s),m.jsx(m.Fragment,{children:m.jsxs("div",{className:"mains",children:[m.jsx("div",{className:"registrationImage"}),m.jsx("div",{className:"formContainer",children:m.jsx("div",{className:"formix signup-form",children:m.jsxs("form",{onSubmit:g,children:[m.jsxs("div",{className:"input-mail",children:[m.jsx("label",{htmlFor:"email",children:"Email"}),m.jsx("div",{className:"input-Input-mail",children:m.jsx("input",{type:"text",id:"email",value:t,onChange:v=>e(v.target.value),placeholder:"email"})})]}),m.jsxs("div",{className:"input-passkey",children:[m.jsx("label",{htmlFor:"password",children:"Password"}),m.jsx("div",{className:"input-Input-passkey",children:m.jsx("input",{type:"text",id:"password",value:n,onChange:v=>r(v.target.value),placeholder:"password"})})]}),d&&m.jsx("p",{children:i}),m.jsx("button",{className:"submission",children:"Submit"})]})})})]})})};function Wk(){return m.jsxs("div",{className:"jj",children:[m.jsx(Qm,{}),m.jsxs("div",{className:"about",children:[m.jsx("header",{children:"About HrLibrary"}),m.jsx("h2",{children:"Welcome to HrLibrary – Unleashing the World of Human Resources and Literature!"}),m.jsx("h3",{children:" Who We Are"}),"HrLibrary is not just your typical Human Resources resource hub; we","'","re also passionate about the world of literature. Our platform integrates seamlessly with the Open Library API, allowing you to explore a vast collection of books spanning all genres. Whether you","'","re an HR professional seeking a break from the corporate world or a book enthusiast looking for your next literary adventure, HrLibrary is the perfect intersection of HR expertise and the joy of reading.",m.jsx("h3",{children:"What Sets Us Apart"}),"### 1. Open Library Integration We have harnessed the power of the Open Library API to bring you a unique experience. Search for any book, across all genres, and get detailed information right at your fingertips. From the publication year and author details to the number of reads, HrLibrary makes exploring the literary world a breeze.",m.jsx("h3",{children:"Seamless Book Discovery"}),"Discovering your next favorite book has never been easier. Our platform allows you to search, explore, and learn more about books that pique your interest. Whether you","'","re into fiction, non-fiction, or anything in between, HrLibrary is your go-to source for literary exploration.",m.jsx("h3",{children:"HR and Literature Unite"}),"At HrLibrary, we celebrate the synergy between HR professionals and literature enthusiasts. We believe that a well-rounded individual is not only knowledgeable in their field but also curious about the world of books. Our platform bridges the gap, offering a unique blend of HR insights and literary adventures.",m.jsx("h3",{children:"How It Works"}),"Simply use our intuitive search feature to look up any book, and let the Open Library API work its magic. Within moments, you","'","ll have access to valuable information such as the publication year, author details, and the number of reads. It","'","s like having a personal literary assistant at your service. ## Join Us on this Literary Journey Whether you","'","re here for HR expertise, literary exploration, or both, HrLibrary welcomes you with open arms. Dive into the world of books, explore HR resources, and let us be your guide in this exciting journey of knowledge and discovery. Connect with us on [GitHub] ",m.jsx(Fn,{to:"https://github.com/Mrhayor",children:"(https://github.com/Mrhayor/HrLibrary)"})," to stay updated on our latest features, and don","'","t forget to share your favorite books with the HrLibrary community! Happy reading and HR exploring!"]})]})}function $k(){const t=ut();return console.log(t),console.log(t.state.book),m.jsx(m.Fragment,{children:m.jsxs("div",{className:"results",children:[m.jsx("header",{children:"Searched Results"}),m.jsxs("ul",{children:[m.jsxs("li",{children:[" Title - ",t.state.book.title]}),m.jsxs("li",{children:["Author - ",t.state.book.author_name]}),m.jsxs("li",{children:["No of Times Read - ",t.state.book.already_read_count]}),m.jsxs("li",{children:[" ",t.state.book.key]})]})]})})}const Hk=()=>{const t=ut();return Hs.currentUser?m.jsx(pw,{}):m.jsx(Pp,{to:"/Login",state:{from:t},replace:!0})};function Kk(){return m.jsxs(gw,{children:[m.jsx(xt,{path:"/",element:m.jsx(Mk,{})}),m.jsx(xt,{path:"/Login",element:m.jsx(Fk,{})}),m.jsx(xt,{path:"/SignUp",element:m.jsx(Vk,{})}),m.jsx(xt,{path:"/SearchedResuts",element:m.jsx($k,{})}),m.jsx(xt,{element:m.jsx(Hk,{}),children:m.jsx(xt,{path:"/Blog",element:m.jsx(Wk,{})})}),m.jsx(xt,{path:"*",element:m.jsx(Pp,{to:"/"})})]})}xa.createRoot(document.getElementById("root")).render(m.jsx(gt.StrictMode,{children:m.jsx(Sw,{children:m.jsx(Kk,{})})}));
