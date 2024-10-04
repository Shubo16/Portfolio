var O2=Object.defineProperty;var F2=(t,e,n)=>e in t?O2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gt=(t,e,n)=>F2(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Rl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function g_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var v_={exports:{}},Rc={},y_={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ol=Symbol.for("react.element"),z2=Symbol.for("react.portal"),U2=Symbol.for("react.fragment"),V2=Symbol.for("react.strict_mode"),B2=Symbol.for("react.profiler"),H2=Symbol.for("react.provider"),W2=Symbol.for("react.context"),G2=Symbol.for("react.forward_ref"),j2=Symbol.for("react.suspense"),$2=Symbol.for("react.memo"),X2=Symbol.for("react.lazy"),Ag=Symbol.iterator;function q2(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var x_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},__=Object.assign,S_={};function Bo(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||x_}Bo.prototype.isReactComponent={};Bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w_(){}w_.prototype=Bo.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=S_,this.updater=n||x_}var Op=Np.prototype=new w_;Op.constructor=Np;__(Op,Bo.prototype);Op.isPureReactComponent=!0;var Lg=Array.isArray,M_=Object.prototype.hasOwnProperty,Fp={current:null},b_={key:!0,ref:!0,__self:!0,__source:!0};function T_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)M_.call(e,i)&&!b_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ol,type:t,key:s,ref:o,props:r,_owner:Fp.current}}function Y2(t,e){return{$$typeof:ol,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function zp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ol}function K2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function Mf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K2(""+t.key):e.toString(36)}function Cu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ol:case z2:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mf(o,0):i,Lg(r)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),Cu(r,e,n,"",function(u){return u})):r!=null&&(zp(r)&&(r=Y2(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Lg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mf(s,a);o+=Cu(s,e,n,l,r)}else if(l=q2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mf(s,a++),o+=Cu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dl(t,e,n){if(t==null)return t;var i=[],r=0;return Cu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Z2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Yt={current:null},Pu={transition:null},Q2={ReactCurrentDispatcher:Yt,ReactCurrentBatchConfig:Pu,ReactCurrentOwner:Fp};function E_(){throw Error("act(...) is not supported in production builds of React.")}De.Children={map:Dl,forEach:function(t,e,n){Dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dl(t,function(){e++}),e},toArray:function(t){return Dl(t,function(e){return e})||[]},only:function(t){if(!zp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};De.Component=Bo;De.Fragment=U2;De.Profiler=B2;De.PureComponent=Np;De.StrictMode=V2;De.Suspense=j2;De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Q2;De.act=E_;De.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=__({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Fp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)M_.call(e,l)&&!b_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ol,type:t.type,key:r,ref:s,props:i,_owner:o}};De.createContext=function(t){return t={$$typeof:W2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H2,_context:t},t.Consumer=t};De.createElement=T_;De.createFactory=function(t){var e=T_.bind(null,t);return e.type=t,e};De.createRef=function(){return{current:null}};De.forwardRef=function(t){return{$$typeof:G2,render:t}};De.isValidElement=zp;De.lazy=function(t){return{$$typeof:X2,_payload:{_status:-1,_result:t},_init:Z2}};De.memo=function(t,e){return{$$typeof:$2,type:t,compare:e===void 0?null:e}};De.startTransition=function(t){var e=Pu.transition;Pu.transition={};try{t()}finally{Pu.transition=e}};De.unstable_act=E_;De.useCallback=function(t,e){return Yt.current.useCallback(t,e)};De.useContext=function(t){return Yt.current.useContext(t)};De.useDebugValue=function(){};De.useDeferredValue=function(t){return Yt.current.useDeferredValue(t)};De.useEffect=function(t,e){return Yt.current.useEffect(t,e)};De.useId=function(){return Yt.current.useId()};De.useImperativeHandle=function(t,e,n){return Yt.current.useImperativeHandle(t,e,n)};De.useInsertionEffect=function(t,e){return Yt.current.useInsertionEffect(t,e)};De.useLayoutEffect=function(t,e){return Yt.current.useLayoutEffect(t,e)};De.useMemo=function(t,e){return Yt.current.useMemo(t,e)};De.useReducer=function(t,e,n){return Yt.current.useReducer(t,e,n)};De.useRef=function(t){return Yt.current.useRef(t)};De.useState=function(t){return Yt.current.useState(t)};De.useSyncExternalStore=function(t,e,n){return Yt.current.useSyncExternalStore(t,e,n)};De.useTransition=function(){return Yt.current.useTransition()};De.version="18.3.1";y_.exports=De;var ee=y_.exports;const C_=g_(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J2=ee,eb=Symbol.for("react.element"),tb=Symbol.for("react.fragment"),nb=Object.prototype.hasOwnProperty,ib=J2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rb={key:!0,ref:!0,__self:!0,__source:!0};function P_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)nb.call(e,i)&&!rb.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:eb,type:t,key:s,ref:o,props:r,_owner:ib.current}}Rc.Fragment=tb;Rc.jsx=P_;Rc.jsxs=P_;v_.exports=Rc;var B=v_.exports,A_={exports:{}},yn={},L_={exports:{}},R_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,L){var k=R.length;R.push(L);e:for(;0<k;){var Y=k-1>>>1,q=R[Y];if(0<r(q,L))R[Y]=L,R[k]=q,k=Y;else break e}}function n(R){return R.length===0?null:R[0]}function i(R){if(R.length===0)return null;var L=R[0],k=R.pop();if(k!==L){R[0]=k;e:for(var Y=0,q=R.length,J=q>>>1;Y<J;){var le=2*(Y+1)-1,_e=R[le],$=le+1,Ie=R[$];if(0>r(_e,k))$<q&&0>r(Ie,_e)?(R[Y]=Ie,R[$]=k,Y=$):(R[Y]=_e,R[le]=k,Y=le);else if($<q&&0>r(Ie,k))R[Y]=Ie,R[$]=k,Y=$;else break e}}return L}function r(R,L){var k=R.sortIndex-L.sortIndex;return k!==0?k:R.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,m=!1,y=!1,p=!1,h=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(R){for(var L=n(u);L!==null;){if(L.callback===null)i(u);else if(L.startTime<=R)i(u),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(u)}}function _(R){if(p=!1,x(R),!y)if(n(l)!==null)y=!0,K(w);else{var L=n(u);L!==null&&Z(_,L.startTime-R)}}function w(R,L){y=!1,p&&(p=!1,g(S),S=-1),m=!0;var k=d;try{for(x(L),f=n(l);f!==null&&(!(f.expirationTime>L)||R&&!U());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,d=f.priorityLevel;var q=Y(f.expirationTime<=L);L=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(l)&&i(l),x(L)}else i(l);f=n(l)}if(f!==null)var J=!0;else{var le=n(u);le!==null&&Z(_,le.startTime-L),J=!1}return J}finally{f=null,d=k,m=!1}}var b=!1,P=null,S=-1,E=5,A=-1;function U(){return!(t.unstable_now()-A<E)}function ne(){if(P!==null){var R=t.unstable_now();A=R;var L=!0;try{L=P(!0,R)}finally{L?z():(b=!1,P=null)}}else b=!1}var z;if(typeof v=="function")z=function(){v(ne)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,V=N.port2;N.port1.onmessage=ne,z=function(){V.postMessage(null)}}else z=function(){h(ne,0)};function K(R){P=R,b||(b=!0,z())}function Z(R,L){S=h(function(){R(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,K(w))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var L=3;break;default:L=d}var k=d;d=L;try{return R()}finally{d=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,L){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var k=d;d=R;try{return L()}finally{d=k}},t.unstable_scheduleCallback=function(R,L,k){var Y=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Y+k:Y):k=Y,R){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=k+q,R={id:c++,callback:L,priorityLevel:R,startTime:k,expirationTime:q,sortIndex:-1},k>Y?(R.sortIndex=k,e(u,R),n(l)===null&&R===n(u)&&(p?(g(S),S=-1):p=!0,Z(_,k-Y))):(R.sortIndex=q,e(l,R),y||m||(y=!0,K(w))),R},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(R){var L=d;return function(){var k=d;d=L;try{return R.apply(this,arguments)}finally{d=k}}}})(R_);L_.exports=R_;var sb=L_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob=ee,gn=sb;function Q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D_=new Set,Fa={};function Ms(t,e){bo(t,e),bo(t+"Capture",e)}function bo(t,e){for(Fa[t]=e,t=0;t<e.length;t++)D_.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=Object.prototype.hasOwnProperty,ab=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dg={},kg={};function lb(t){return eh.call(kg,t)?!0:eh.call(Dg,t)?!1:ab.test(t)?kg[t]=!0:(Dg[t]=!0,!1)}function ub(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function cb(t,e,n,i){if(e===null||typeof e>"u"||ub(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Kt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var It={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){It[t]=new Kt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];It[e]=new Kt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){It[t]=new Kt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){It[t]=new Kt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){It[t]=new Kt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){It[t]=new Kt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){It[t]=new Kt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){It[t]=new Kt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){It[t]=new Kt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Up=/[\-:]([a-z])/g;function Vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Up,Vp);It[e]=new Kt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Up,Vp);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Up,Vp);It[e]=new Kt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!1,!1)});It.xlinkHref=new Kt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){It[t]=new Kt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Bp(t,e,n,i){var r=It.hasOwnProperty(e)?It[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(cb(e,n,r,i)&&(n=null),i||r===null?lb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=ob.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,kl=Symbol.for("react.element"),$s=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),Hp=Symbol.for("react.strict_mode"),th=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),nh=Symbol.for("react.suspense"),ih=Symbol.for("react.suspense_list"),Gp=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),N_=Symbol.for("react.offscreen"),Ig=Symbol.iterator;function Zo(t){return t===null||typeof t!="object"?null:(t=Ig&&t[Ig]||t["@@iterator"],typeof t=="function"?t:null)}var st=Object.assign,bf;function ca(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Tf=!1;function Ef(t,e){if(!t||Tf)return"";Tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function fb(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=Ef(t.type,!1),t;case 11:return t=Ef(t.type.render,!1),t;case 1:return t=Ef(t.type,!0),t;default:return""}}function rh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xs:return"Fragment";case $s:return"Portal";case th:return"Profiler";case Hp:return"StrictMode";case nh:return"Suspense";case ih:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I_:return(t.displayName||"Context")+".Consumer";case k_:return(t._context.displayName||"Context")+".Provider";case Wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gp:return e=t.displayName||null,e!==null?e:rh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return rh(t(e))}catch{}}return null}function db(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rh(e);case 8:return e===Hp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hb(t){var e=O_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Il(t){t._valueTracker||(t._valueTracker=hb(t))}function F_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=O_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ku(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function sh(t,e){var n=e.checked;return st({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z_(t,e){e=e.checked,e!=null&&Bp(t,"checked",e,!1)}function oh(t,e){z_(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ah(t,e.type,n):e.hasOwnProperty("defaultValue")&&ah(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Og(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ah(t,e,n){(e!=="number"||Ku(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fa=Array.isArray;function ho(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function lh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Q(91));return st({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Q(92));if(fa(n)){if(1<n.length)throw Error(Q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function U_(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function V_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?V_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,B_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function za(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pb=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){pb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function H_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function W_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=H_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mb=st({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ch(t,e){if(e){if(mb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Q(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dh=null;function jp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var hh=null,po=null,mo=null;function Ug(t){if(t=ul(t)){if(typeof hh!="function")throw Error(Q(280));var e=t.stateNode;e&&(e=Oc(e),hh(t.stateNode,t.type,e))}}function G_(t){po?mo?mo.push(t):mo=[t]:po=t}function j_(){if(po){var t=po,e=mo;if(mo=po=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function $_(t,e){return t(e)}function X_(){}var Cf=!1;function q_(t,e,n){if(Cf)return t(e,n);Cf=!0;try{return $_(t,e,n)}finally{Cf=!1,(po!==null||mo!==null)&&(X_(),j_())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var i=Oc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Q(231,e,typeof n));return n}var ph=!1;if(Fi)try{var Qo={};Object.defineProperty(Qo,"passive",{get:function(){ph=!0}}),window.addEventListener("test",Qo,Qo),window.removeEventListener("test",Qo,Qo)}catch{ph=!1}function gb(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Sa=!1,Zu=null,Qu=!1,mh=null,vb={onError:function(t){Sa=!0,Zu=t}};function yb(t,e,n,i,r,s,o,a,l){Sa=!1,Zu=null,gb.apply(vb,arguments)}function xb(t,e,n,i,r,s,o,a,l){if(yb.apply(this,arguments),Sa){if(Sa){var u=Zu;Sa=!1,Zu=null}else throw Error(Q(198));Qu||(Qu=!0,mh=u)}}function bs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vg(t){if(bs(t)!==t)throw Error(Q(188))}function _b(t){var e=t.alternate;if(!e){if(e=bs(t),e===null)throw Error(Q(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Vg(r),t;if(s===i)return Vg(r),e;s=s.sibling}throw Error(Q(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(Q(189))}}if(n.alternate!==i)throw Error(Q(190))}if(n.tag!==3)throw Error(Q(188));return n.stateNode.current===n?t:e}function K_(t){return t=_b(t),t!==null?Z_(t):null}function Z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z_(t);if(e!==null)return e;t=t.sibling}return null}var Q_=gn.unstable_scheduleCallback,Bg=gn.unstable_cancelCallback,Sb=gn.unstable_shouldYield,wb=gn.unstable_requestPaint,pt=gn.unstable_now,Mb=gn.unstable_getCurrentPriorityLevel,$p=gn.unstable_ImmediatePriority,J_=gn.unstable_UserBlockingPriority,Ju=gn.unstable_NormalPriority,bb=gn.unstable_LowPriority,e1=gn.unstable_IdlePriority,Dc=null,ui=null;function Tb(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Dc,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:Pb,Eb=Math.log,Cb=Math.LN2;function Pb(t){return t>>>=0,t===0?32:31-(Eb(t)/Cb|0)|0}var Ol=64,Fl=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=da(a):(s&=o,s!==0&&(i=da(s)))}else o=n&~r,o!==0?i=da(o):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ab(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lb(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-jn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Ab(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function t1(){var t=Ol;return Ol<<=1,!(Ol&4194240)&&(Ol=64),t}function Pf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Rb(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Xp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var We=0;function n1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i1,qp,r1,s1,o1,vh=!1,zl=[],mr=null,gr=null,vr=null,Va=new Map,Ba=new Map,ur=[],Db="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Jo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ul(e),e!==null&&qp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kb(t,e,n,i,r){switch(e){case"focusin":return mr=Jo(mr,t,e,n,i,r),!0;case"dragenter":return gr=Jo(gr,t,e,n,i,r),!0;case"mouseover":return vr=Jo(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Va.set(s,Jo(Va.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ba.set(s,Jo(Ba.get(s)||null,t,e,n,i,r)),!0}return!1}function a1(t){var e=Qr(t.target);if(e!==null){var n=bs(e);if(n!==null){if(e=n.tag,e===13){if(e=Y_(n),e!==null){t.blockedOn=e,o1(t.priority,function(){r1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Au(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);dh=i,n.target.dispatchEvent(i),dh=null}else return e=ul(n),e!==null&&qp(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){Au(t)&&n.delete(e)}function Ib(){vh=!1,mr!==null&&Au(mr)&&(mr=null),gr!==null&&Au(gr)&&(gr=null),vr!==null&&Au(vr)&&(vr=null),Va.forEach(Wg),Ba.forEach(Wg)}function ea(t,e){t.blockedOn===e&&(t.blockedOn=null,vh||(vh=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Ib)))}function Ha(t){function e(r){return ea(r,t)}if(0<zl.length){ea(zl[0],t);for(var n=1;n<zl.length;n++){var i=zl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&ea(mr,t),gr!==null&&ea(gr,t),vr!==null&&ea(vr,t),Va.forEach(e),Ba.forEach(e),n=0;n<ur.length;n++)i=ur[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ur.length&&(n=ur[0],n.blockedOn===null);)a1(n),n.blockedOn===null&&ur.shift()}var go=Wi.ReactCurrentBatchConfig,tc=!0;function Nb(t,e,n,i){var r=We,s=go.transition;go.transition=null;try{We=1,Yp(t,e,n,i)}finally{We=r,go.transition=s}}function Ob(t,e,n,i){var r=We,s=go.transition;go.transition=null;try{We=4,Yp(t,e,n,i)}finally{We=r,go.transition=s}}function Yp(t,e,n,i){if(tc){var r=yh(t,e,n,i);if(r===null)zf(t,e,i,nc,n),Hg(t,i);else if(kb(r,t,e,n,i))i.stopPropagation();else if(Hg(t,i),e&4&&-1<Db.indexOf(t)){for(;r!==null;){var s=ul(r);if(s!==null&&i1(s),s=yh(t,e,n,i),s===null&&zf(t,e,i,nc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else zf(t,e,i,null,n)}}var nc=null;function yh(t,e,n,i){if(nc=null,t=jp(i),t=Qr(t),t!==null)if(e=bs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function l1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mb()){case $p:return 1;case J_:return 4;case Ju:case bb:return 16;case e1:return 536870912;default:return 16}default:return 16}}var fr=null,Kp=null,Lu=null;function u1(){if(Lu)return Lu;var t,e=Kp,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Lu=r.slice(t,1<i?1-i:void 0)}function Ru(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ul(){return!0}function Gg(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ul:Gg,this.isPropagationStopped=Gg,this}return st(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ul)},persist:function(){},isPersistent:Ul}),e}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zp=xn(Ho),ll=st({},Ho,{view:0,detail:0}),Fb=xn(ll),Af,Lf,ta,kc=st({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ta&&(ta&&t.type==="mousemove"?(Af=t.screenX-ta.screenX,Lf=t.screenY-ta.screenY):Lf=Af=0,ta=t),Af)},movementY:function(t){return"movementY"in t?t.movementY:Lf}}),jg=xn(kc),zb=st({},kc,{dataTransfer:0}),Ub=xn(zb),Vb=st({},ll,{relatedTarget:0}),Rf=xn(Vb),Bb=st({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),Hb=xn(Bb),Wb=st({},Ho,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gb=xn(Wb),jb=st({},Ho,{data:0}),$g=xn(jb),$b={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qb[t])?!!e[t]:!1}function Qp(){return Yb}var Kb=st({},ll,{key:function(t){if(t.key){var e=$b[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ru(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qp,charCode:function(t){return t.type==="keypress"?Ru(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ru(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zb=xn(Kb),Qb=st({},kc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xg=xn(Qb),Jb=st({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qp}),e3=xn(Jb),t3=st({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),n3=xn(t3),i3=st({},kc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r3=xn(i3),s3=[9,13,27,32],Jp=Fi&&"CompositionEvent"in window,wa=null;Fi&&"documentMode"in document&&(wa=document.documentMode);var o3=Fi&&"TextEvent"in window&&!wa,c1=Fi&&(!Jp||wa&&8<wa&&11>=wa),qg=" ",Yg=!1;function f1(t,e){switch(t){case"keyup":return s3.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qs=!1;function a3(t,e){switch(t){case"compositionend":return d1(e);case"keypress":return e.which!==32?null:(Yg=!0,qg);case"textInput":return t=e.data,t===qg&&Yg?null:t;default:return null}}function l3(t,e){if(qs)return t==="compositionend"||!Jp&&f1(t,e)?(t=u1(),Lu=Kp=fr=null,qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return c1&&e.locale!=="ko"?null:e.data;default:return null}}var u3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!u3[t.type]:e==="textarea"}function h1(t,e,n,i){G_(i),e=ic(e,"onChange"),0<e.length&&(n=new Zp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ma=null,Wa=null;function c3(t){b1(t,0)}function Ic(t){var e=Zs(t);if(F_(e))return t}function f3(t,e){if(t==="change")return e}var p1=!1;if(Fi){var Df;if(Fi){var kf="oninput"in document;if(!kf){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),kf=typeof Zg.oninput=="function"}Df=kf}else Df=!1;p1=Df&&(!document.documentMode||9<document.documentMode)}function Qg(){Ma&&(Ma.detachEvent("onpropertychange",m1),Wa=Ma=null)}function m1(t){if(t.propertyName==="value"&&Ic(Wa)){var e=[];h1(e,Wa,t,jp(t)),q_(c3,e)}}function d3(t,e,n){t==="focusin"?(Qg(),Ma=e,Wa=n,Ma.attachEvent("onpropertychange",m1)):t==="focusout"&&Qg()}function h3(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ic(Wa)}function p3(t,e){if(t==="click")return Ic(e)}function m3(t,e){if(t==="input"||t==="change")return Ic(e)}function g3(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:g3;function Ga(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!eh.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Jg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function e0(t,e){var n=Jg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jg(n)}}function g1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?g1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v1(){for(var t=window,e=Ku();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ku(t.document)}return e}function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v3(t){var e=v1(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&g1(n.ownerDocument.documentElement,n)){if(i!==null&&em(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=e0(n,s);var o=e0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var y3=Fi&&"documentMode"in document&&11>=document.documentMode,Ys=null,xh=null,ba=null,_h=!1;function t0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_h||Ys==null||Ys!==Ku(i)||(i=Ys,"selectionStart"in i&&em(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ba&&Ga(ba,i)||(ba=i,i=ic(xh,"onSelect"),0<i.length&&(e=new Zp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ys)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ks={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},If={},y1={};Fi&&(y1=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Nc(t){if(If[t])return If[t];if(!Ks[t])return t;var e=Ks[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y1)return If[t]=e[n];return t}var x1=Nc("animationend"),_1=Nc("animationiteration"),S1=Nc("animationstart"),w1=Nc("transitionend"),M1=new Map,n0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){M1.set(t,e),Ms(e,[t])}for(var Nf=0;Nf<n0.length;Nf++){var Of=n0[Nf],x3=Of.toLowerCase(),_3=Of[0].toUpperCase()+Of.slice(1);Dr(x3,"on"+_3)}Dr(x1,"onAnimationEnd");Dr(_1,"onAnimationIteration");Dr(S1,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(w1,"onTransitionEnd");bo("onMouseEnter",["mouseout","mouseover"]);bo("onMouseLeave",["mouseout","mouseover"]);bo("onPointerEnter",["pointerout","pointerover"]);bo("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S3=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function i0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xb(i,e,void 0,t),t.currentTarget=null}function b1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;i0(r,a,u),s=l}}}if(Qu)throw t=mh,Qu=!1,mh=null,t}function qe(t,e){var n=e[Th];n===void 0&&(n=e[Th]=new Set);var i=t+"__bubble";n.has(i)||(T1(e,t,2,!1),n.add(i))}function Ff(t,e,n){var i=0;e&&(i|=4),T1(n,t,i,e)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function ja(t){if(!t[Bl]){t[Bl]=!0,D_.forEach(function(n){n!=="selectionchange"&&(S3.has(n)||Ff(n,!1,t),Ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bl]||(e[Bl]=!0,Ff("selectionchange",!1,e))}}function T1(t,e,n,i){switch(l1(e)){case 1:var r=Nb;break;case 4:r=Ob;break;default:r=Yp}n=r.bind(null,e,n,t),r=void 0,!ph||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function zf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}q_(function(){var u=s,c=jp(n),f=[];e:{var d=M1.get(t);if(d!==void 0){var m=Zp,y=t;switch(t){case"keypress":if(Ru(n)===0)break e;case"keydown":case"keyup":m=Zb;break;case"focusin":y="focus",m=Rf;break;case"focusout":y="blur",m=Rf;break;case"beforeblur":case"afterblur":m=Rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ub;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=e3;break;case x1:case _1:case S1:m=Hb;break;case w1:m=n3;break;case"scroll":m=Fb;break;case"wheel":m=r3;break;case"copy":case"cut":case"paste":m=Gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Xg}var p=(e&4)!==0,h=!p&&t==="scroll",g=p?d!==null?d+"Capture":null:d;p=[];for(var v=u,x;v!==null;){x=v;var _=x.stateNode;if(x.tag===5&&_!==null&&(x=_,g!==null&&(_=Ua(v,g),_!=null&&p.push($a(v,_,x)))),h)break;v=v.return}0<p.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:p}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==dh&&(y=n.relatedTarget||n.fromElement)&&(Qr(y)||y[zi]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Qr(y):null,y!==null&&(h=bs(y),y!==h||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(p=jg,_="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(p=Xg,_="onPointerLeave",g="onPointerEnter",v="pointer"),h=m==null?d:Zs(m),x=y==null?d:Zs(y),d=new p(_,v+"leave",m,n,c),d.target=h,d.relatedTarget=x,_=null,Qr(c)===u&&(p=new p(g,v+"enter",y,n,c),p.target=x,p.relatedTarget=h,_=p),h=_,m&&y)t:{for(p=m,g=y,v=0,x=p;x;x=As(x))v++;for(x=0,_=g;_;_=As(_))x++;for(;0<v-x;)p=As(p),v--;for(;0<x-v;)g=As(g),x--;for(;v--;){if(p===g||g!==null&&p===g.alternate)break t;p=As(p),g=As(g)}p=null}else p=null;m!==null&&r0(f,d,m,p,!1),y!==null&&h!==null&&r0(f,h,y,p,!0)}}e:{if(d=u?Zs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=f3;else if(Kg(d))if(p1)w=m3;else{w=h3;var b=d3}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=p3);if(w&&(w=w(t,u))){h1(f,w,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&ah(d,"number",d.value)}switch(b=u?Zs(u):window,t){case"focusin":(Kg(b)||b.contentEditable==="true")&&(Ys=b,xh=u,ba=null);break;case"focusout":ba=xh=Ys=null;break;case"mousedown":_h=!0;break;case"contextmenu":case"mouseup":case"dragend":_h=!1,t0(f,n,c);break;case"selectionchange":if(y3)break;case"keydown":case"keyup":t0(f,n,c)}var P;if(Jp)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else qs?f1(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(c1&&n.locale!=="ko"&&(qs||S!=="onCompositionStart"?S==="onCompositionEnd"&&qs&&(P=u1()):(fr=c,Kp="value"in fr?fr.value:fr.textContent,qs=!0)),b=ic(u,S),0<b.length&&(S=new $g(S,t,null,n,c),f.push({event:S,listeners:b}),P?S.data=P:(P=d1(n),P!==null&&(S.data=P)))),(P=o3?a3(t,n):l3(t,n))&&(u=ic(u,"onBeforeInput"),0<u.length&&(c=new $g("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=P))}b1(f,e)})}function $a(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ua(t,n),s!=null&&i.unshift($a(t,s,r)),s=Ua(t,e),s!=null&&i.push($a(t,s,r))),t=t.return}return i}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ua(n,s),l!=null&&o.unshift($a(n,l,a))):r||(l=Ua(n,s),l!=null&&o.push($a(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var w3=/\r\n?/g,M3=/\u0000|\uFFFD/g;function s0(t){return(typeof t=="string"?t:""+t).replace(w3,`
`).replace(M3,"")}function Hl(t,e,n){if(e=s0(e),s0(t)!==e&&n)throw Error(Q(425))}function rc(){}var Sh=null,wh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,b3=typeof clearTimeout=="function"?clearTimeout:void 0,o0=typeof Promise=="function"?Promise:void 0,T3=typeof queueMicrotask=="function"?queueMicrotask:typeof o0<"u"?function(t){return o0.resolve(null).then(t).catch(E3)}:bh;function E3(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ha(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ha(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function a0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wo=Math.random().toString(36).slice(2),ri="__reactFiber$"+Wo,Xa="__reactProps$"+Wo,zi="__reactContainer$"+Wo,Th="__reactEvents$"+Wo,C3="__reactListeners$"+Wo,P3="__reactHandles$"+Wo;function Qr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=a0(t);t!==null;){if(n=t[ri])return n;t=a0(t)}return e}t=n,n=t.parentNode}return null}function ul(t){return t=t[ri]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Q(33))}function Oc(t){return t[Xa]||null}var Eh=[],Qs=-1;function kr(t){return{current:t}}function Ye(t){0>Qs||(t.current=Eh[Qs],Eh[Qs]=null,Qs--)}function Xe(t,e){Qs++,Eh[Qs]=t.current,t.current=e}var Tr={},Ht=kr(Tr),en=kr(!1),hs=Tr;function To(t,e){var n=t.type.contextTypes;if(!n)return Tr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function sc(){Ye(en),Ye(Ht)}function l0(t,e,n){if(Ht.current!==Tr)throw Error(Q(168));Xe(Ht,e),Xe(en,n)}function E1(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Q(108,db(t)||"Unknown",r));return st({},n,i)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,hs=Ht.current,Xe(Ht,t),Xe(en,en.current),!0}function u0(t,e,n){var i=t.stateNode;if(!i)throw Error(Q(169));n?(t=E1(t,e,hs),i.__reactInternalMemoizedMergedChildContext=t,Ye(en),Ye(Ht),Xe(Ht,t)):Ye(en),Xe(en,n)}var bi=null,Fc=!1,Vf=!1;function C1(t){bi===null?bi=[t]:bi.push(t)}function A3(t){Fc=!0,C1(t)}function Ir(){if(!Vf&&bi!==null){Vf=!0;var t=0,e=We;try{var n=bi;for(We=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}bi=null,Fc=!1}catch(r){throw bi!==null&&(bi=bi.slice(t+1)),Q_($p,Ir),r}finally{We=e,Vf=!1}}return null}var Js=[],eo=0,ac=null,lc=0,En=[],Cn=0,ps=null,Ei=1,Ci="";function Gr(t,e){Js[eo++]=lc,Js[eo++]=ac,ac=t,lc=e}function P1(t,e,n){En[Cn++]=Ei,En[Cn++]=Ci,En[Cn++]=ps,ps=t;var i=Ei;t=Ci;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-jn(e)+r|n<<r|i,Ci=s+t}else Ei=1<<s|n<<r|i,Ci=t}function tm(t){t.return!==null&&(Gr(t,1),P1(t,1,0))}function nm(t){for(;t===ac;)ac=Js[--eo],Js[eo]=null,lc=Js[--eo],Js[eo]=null;for(;t===ps;)ps=En[--Cn],En[Cn]=null,Ci=En[--Cn],En[Cn]=null,Ei=En[--Cn],En[Cn]=null}var dn=null,fn=null,Qe=!1,Wn=null;function A1(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function c0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,dn=t,fn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,dn=t,fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ps!==null?{id:Ei,overflow:Ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,dn=t,fn=null,!0):!1;default:return!1}}function Ch(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ph(t){if(Qe){var e=fn;if(e){var n=e;if(!c0(t,e)){if(Ch(t))throw Error(Q(418));e=yr(n.nextSibling);var i=dn;e&&c0(t,e)?A1(i,n):(t.flags=t.flags&-4097|2,Qe=!1,dn=t)}}else{if(Ch(t))throw Error(Q(418));t.flags=t.flags&-4097|2,Qe=!1,dn=t}}}function f0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;dn=t}function Wl(t){if(t!==dn)return!1;if(!Qe)return f0(t),Qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=fn)){if(Ch(t))throw L1(),Error(Q(418));for(;e;)A1(t,e),e=yr(e.nextSibling)}if(f0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){fn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}fn=null}}else fn=dn?yr(t.stateNode.nextSibling):null;return!0}function L1(){for(var t=fn;t;)t=yr(t.nextSibling)}function Eo(){fn=dn=null,Qe=!1}function im(t){Wn===null?Wn=[t]:Wn.push(t)}var L3=Wi.ReactCurrentBatchConfig;function na(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Q(309));var i=n.stateNode}if(!i)throw Error(Q(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(Q(284));if(!n._owner)throw Error(Q(290,t))}return t}function Gl(t,e){throw t=Object.prototype.toString.call(e),Error(Q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function d0(t){var e=t._init;return e(t._payload)}function R1(t){function e(g,v){if(t){var x=g.deletions;x===null?(g.deletions=[v],g.flags|=16):x.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function i(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function r(g,v){return g=wr(g,v),g.index=0,g.sibling=null,g}function s(g,v,x){return g.index=x,t?(x=g.alternate,x!==null?(x=x.index,x<v?(g.flags|=2,v):x):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,x,_){return v===null||v.tag!==6?(v=Xf(x,g.mode,_),v.return=g,v):(v=r(v,x),v.return=g,v)}function l(g,v,x,_){var w=x.type;return w===Xs?c(g,v,x.props.children,_,x.key):v!==null&&(v.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&d0(w)===v.type)?(_=r(v,x.props),_.ref=na(g,v,x),_.return=g,_):(_=zu(x.type,x.key,x.props,null,g.mode,_),_.ref=na(g,v,x),_.return=g,_)}function u(g,v,x,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=qf(x,g.mode,_),v.return=g,v):(v=r(v,x.children||[]),v.return=g,v)}function c(g,v,x,_,w){return v===null||v.tag!==7?(v=os(x,g.mode,_,w),v.return=g,v):(v=r(v,x),v.return=g,v)}function f(g,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xf(""+v,g.mode,x),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case kl:return x=zu(v.type,v.key,v.props,null,g.mode,x),x.ref=na(g,null,v),x.return=g,x;case $s:return v=qf(v,g.mode,x),v.return=g,v;case or:var _=v._init;return f(g,_(v._payload),x)}if(fa(v)||Zo(v))return v=os(v,g.mode,x,null),v.return=g,v;Gl(g,v)}return null}function d(g,v,x,_){var w=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return w!==null?null:a(g,v,""+x,_);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:return x.key===w?l(g,v,x,_):null;case $s:return x.key===w?u(g,v,x,_):null;case or:return w=x._init,d(g,v,w(x._payload),_)}if(fa(x)||Zo(x))return w!==null?null:c(g,v,x,_,null);Gl(g,x)}return null}function m(g,v,x,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return g=g.get(x)||null,a(v,g,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case kl:return g=g.get(_.key===null?x:_.key)||null,l(v,g,_,w);case $s:return g=g.get(_.key===null?x:_.key)||null,u(v,g,_,w);case or:var b=_._init;return m(g,v,x,b(_._payload),w)}if(fa(_)||Zo(_))return g=g.get(x)||null,c(v,g,_,w,null);Gl(v,_)}return null}function y(g,v,x,_){for(var w=null,b=null,P=v,S=v=0,E=null;P!==null&&S<x.length;S++){P.index>S?(E=P,P=null):E=P.sibling;var A=d(g,P,x[S],_);if(A===null){P===null&&(P=E);break}t&&P&&A.alternate===null&&e(g,P),v=s(A,v,S),b===null?w=A:b.sibling=A,b=A,P=E}if(S===x.length)return n(g,P),Qe&&Gr(g,S),w;if(P===null){for(;S<x.length;S++)P=f(g,x[S],_),P!==null&&(v=s(P,v,S),b===null?w=P:b.sibling=P,b=P);return Qe&&Gr(g,S),w}for(P=i(g,P);S<x.length;S++)E=m(P,g,S,x[S],_),E!==null&&(t&&E.alternate!==null&&P.delete(E.key===null?S:E.key),v=s(E,v,S),b===null?w=E:b.sibling=E,b=E);return t&&P.forEach(function(U){return e(g,U)}),Qe&&Gr(g,S),w}function p(g,v,x,_){var w=Zo(x);if(typeof w!="function")throw Error(Q(150));if(x=w.call(x),x==null)throw Error(Q(151));for(var b=w=null,P=v,S=v=0,E=null,A=x.next();P!==null&&!A.done;S++,A=x.next()){P.index>S?(E=P,P=null):E=P.sibling;var U=d(g,P,A.value,_);if(U===null){P===null&&(P=E);break}t&&P&&U.alternate===null&&e(g,P),v=s(U,v,S),b===null?w=U:b.sibling=U,b=U,P=E}if(A.done)return n(g,P),Qe&&Gr(g,S),w;if(P===null){for(;!A.done;S++,A=x.next())A=f(g,A.value,_),A!==null&&(v=s(A,v,S),b===null?w=A:b.sibling=A,b=A);return Qe&&Gr(g,S),w}for(P=i(g,P);!A.done;S++,A=x.next())A=m(P,g,S,A.value,_),A!==null&&(t&&A.alternate!==null&&P.delete(A.key===null?S:A.key),v=s(A,v,S),b===null?w=A:b.sibling=A,b=A);return t&&P.forEach(function(ne){return e(g,ne)}),Qe&&Gr(g,S),w}function h(g,v,x,_){if(typeof x=="object"&&x!==null&&x.type===Xs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case kl:e:{for(var w=x.key,b=v;b!==null;){if(b.key===w){if(w=x.type,w===Xs){if(b.tag===7){n(g,b.sibling),v=r(b,x.props.children),v.return=g,g=v;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===or&&d0(w)===b.type){n(g,b.sibling),v=r(b,x.props),v.ref=na(g,b,x),v.return=g,g=v;break e}n(g,b);break}else e(g,b);b=b.sibling}x.type===Xs?(v=os(x.props.children,g.mode,_,x.key),v.return=g,g=v):(_=zu(x.type,x.key,x.props,null,g.mode,_),_.ref=na(g,v,x),_.return=g,g=_)}return o(g);case $s:e:{for(b=x.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(g,v.sibling),v=r(v,x.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=qf(x,g.mode,_),v.return=g,g=v}return o(g);case or:return b=x._init,h(g,v,b(x._payload),_)}if(fa(x))return y(g,v,x,_);if(Zo(x))return p(g,v,x,_);Gl(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(g,v.sibling),v=r(v,x),v.return=g,g=v):(n(g,v),v=Xf(x,g.mode,_),v.return=g,g=v),o(g)):n(g,v)}return h}var Co=R1(!0),D1=R1(!1),uc=kr(null),cc=null,to=null,rm=null;function sm(){rm=to=cc=null}function om(t){var e=uc.current;Ye(uc),t._currentValue=e}function Ah(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function vo(t,e){cc=t,rm=to=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(rm!==t)if(t={context:t,memoizedValue:e,next:null},to===null){if(cc===null)throw Error(Q(308));to=t,cc.dependencies={lanes:0,firstContext:t}}else to=to.next=t;return e}var Jr=null;function am(t){Jr===null?Jr=[t]:Jr.push(t)}function k1(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,am(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function lm(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function I1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Li(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Fe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,am(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function Du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xp(t,n)}}function h0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fc(t,e,n,i){var r=t.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,p=a;switch(d=e,m=n,p.tag){case 1:if(y=p.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=p.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=st({},f,d);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=f):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gs|=o,t.lanes=o,t.memoizedState=f}}function p0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Q(191,r));r.call(i)}}}var cl={},ci=kr(cl),qa=kr(cl),Ya=kr(cl);function es(t){if(t===cl)throw Error(Q(174));return t}function um(t,e){switch(Xe(Ya,e),Xe(qa,t),Xe(ci,cl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=uh(e,t)}Ye(ci),Xe(ci,e)}function Po(){Ye(ci),Ye(qa),Ye(Ya)}function N1(t){es(Ya.current);var e=es(ci.current),n=uh(e,t.type);e!==n&&(Xe(qa,t),Xe(ci,n))}function cm(t){qa.current===t&&(Ye(ci),Ye(qa))}var nt=kr(0);function dc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bf=[];function fm(){for(var t=0;t<Bf.length;t++)Bf[t]._workInProgressVersionPrimary=null;Bf.length=0}var ku=Wi.ReactCurrentDispatcher,Hf=Wi.ReactCurrentBatchConfig,ms=0,rt=null,_t=null,Tt=null,hc=!1,Ta=!1,Ka=0,R3=0;function Nt(){throw Error(Q(321))}function dm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function hm(t,e,n,i,r,s){if(ms=s,rt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ku.current=t===null||t.memoizedState===null?N3:O3,t=n(i,r),Ta){s=0;do{if(Ta=!1,Ka=0,25<=s)throw Error(Q(301));s+=1,Tt=_t=null,e.updateQueue=null,ku.current=F3,t=n(i,r)}while(Ta)}if(ku.current=pc,e=_t!==null&&_t.next!==null,ms=0,Tt=_t=rt=null,hc=!1,e)throw Error(Q(300));return t}function pm(){var t=Ka!==0;return Ka=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t,Tt}function Nn(){if(_t===null){var t=rt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Tt===null?rt.memoizedState:Tt.next;if(e!==null)Tt=e,_t=t;else{if(t===null)throw Error(Q(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Tt===null?rt.memoizedState=Tt=t:Tt=Tt.next=t}return Tt}function Za(t,e){return typeof e=="function"?e(t):e}function Wf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ms&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,rt.lanes|=c,gs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,rt.lanes|=s,gs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gf(t){var e=Nn(),n=e.queue;if(n===null)throw Error(Q(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function O1(){}function F1(t,e){var n=rt,i=Nn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,mm(V1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Tt!==null&&Tt.memoizedState.tag&1){if(n.flags|=2048,Qa(9,U1.bind(null,n,i,r,e),void 0,null),Et===null)throw Error(Q(349));ms&30||z1(n,e,r)}return r}function z1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U1(t,e,n,i){e.value=n,e.getSnapshot=i,B1(e)&&H1(t)}function V1(t,e,n){return n(function(){B1(e)&&H1(t)})}function B1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function H1(t){var e=Ui(t,1);e!==null&&$n(e,t,1,-1)}function m0(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=I3.bind(null,rt,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=rt.updateQueue,e===null?(e={lastEffect:null,stores:null},rt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function W1(){return Nn().memoizedState}function Iu(t,e,n,i){var r=ei();rt.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function zc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&dm(i,o.deps)){r.memoizedState=Qa(e,n,s,i);return}}rt.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function g0(t,e){return Iu(8390656,8,t,e)}function mm(t,e){return zc(2048,8,t,e)}function G1(t,e){return zc(4,2,t,e)}function j1(t,e){return zc(4,4,t,e)}function $1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function X1(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,$1.bind(null,e,t),n)}function gm(){}function q1(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Y1(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&dm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function K1(t,e,n){return ms&21?(Xn(n,e)||(n=t1(),rt.lanes|=n,gs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function D3(t,e){var n=We;We=n!==0&&4>n?n:4,t(!0);var i=Hf.transition;Hf.transition={};try{t(!1),e()}finally{We=n,Hf.transition=i}}function Z1(){return Nn().memoizedState}function k3(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Q1(t))J1(e,n);else if(n=k1(t,e,n,i),n!==null){var r=$t();$n(n,t,i,r),eS(n,e,i)}}function I3(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Q1(t))J1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,am(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=k1(t,e,r,i),n!==null&&(r=$t(),$n(n,t,i,r),eS(n,e,i))}}function Q1(t){var e=t.alternate;return t===rt||e!==null&&e===rt}function J1(t,e){Ta=hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eS(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Xp(t,n)}}var pc={readContext:In,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},N3={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:g0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4194308,4,$1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Iu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Iu(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=k3.bind(null,rt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:m0,useDebugValue:gm,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=m0(!1),e=t[0];return t=D3.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=rt,r=ei();if(Qe){if(n===void 0)throw Error(Q(407));n=n()}else{if(n=e(),Et===null)throw Error(Q(349));ms&30||z1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,g0(V1.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,U1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Et.identifierPrefix;if(Qe){var n=Ci,i=Ei;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=R3++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},O3={readContext:In,useCallback:q1,useContext:In,useEffect:mm,useImperativeHandle:X1,useInsertionEffect:G1,useLayoutEffect:j1,useMemo:Y1,useReducer:Wf,useRef:W1,useState:function(){return Wf(Za)},useDebugValue:gm,useDeferredValue:function(t){var e=Nn();return K1(e,_t.memoizedState,t)},useTransition:function(){var t=Wf(Za)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:O1,useSyncExternalStore:F1,useId:Z1,unstable_isNewReconciler:!1},F3={readContext:In,useCallback:q1,useContext:In,useEffect:mm,useImperativeHandle:X1,useInsertionEffect:G1,useLayoutEffect:j1,useMemo:Y1,useReducer:Gf,useRef:W1,useState:function(){return Gf(Za)},useDebugValue:gm,useDeferredValue:function(t){var e=Nn();return _t===null?e.memoizedState=t:K1(e,_t.memoizedState,t)},useTransition:function(){var t=Gf(Za)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:O1,useSyncExternalStore:F1,useId:Z1,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=st({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Lh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:st({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Uc={isMounted:function(t){return(t=t._reactInternals)?bs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Sr(t),s=Li(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&($n(e,t,r,i),Du(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=$t(),r=Sr(t),s=Li(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&($n(e,t,r,i),Du(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=$t(),i=Sr(t),r=Li(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&($n(e,t,i,n),Du(e,t,i))}};function v0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ga(n,i)||!Ga(r,s):!0}function tS(t,e,n){var i=!1,r=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=tn(e)?hs:Ht.current,i=e.contextTypes,s=(i=i!=null)?To(t,r):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Uc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function y0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Uc.enqueueReplaceState(e,e.state,null)}function Rh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},lm(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=tn(e)?hs:Ht.current,r.context=To(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Uc.enqueueReplaceState(r,r.state,null),fc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",i=e;do n+=fb(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Dh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var z3=typeof WeakMap=="function"?WeakMap:Map;function nS(t,e,n){n=Li(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){gc||(gc=!0,Hh=i),Dh(t,e)},n}function iS(t,e,n){n=Li(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Dh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Dh(t,e),typeof i!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function x0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new z3;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Q3.bind(null,t,e,n),e.then(t,t))}function _0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function S0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Li(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var U3=Wi.ReactCurrentOwner,Jt=!1;function jt(t,e,n,i){e.child=t===null?D1(e,null,n,i):Co(e,t.child,n,i)}function w0(t,e,n,i,r){n=n.render;var s=e.ref;return vo(e,r),i=hm(t,e,n,i,s,r),n=pm(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Qe&&n&&tm(e),e.flags|=1,jt(t,e,i,r),e.child)}function M0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rS(t,e,s,i,r)):(t=zu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ga,n(o,i)&&t.ref===e.ref)return Vi(t,e,r)}return e.flags|=1,t=wr(s,i),t.ref=e.ref,t.return=e,e.child=t}function rS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ga(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,Vi(t,e,r)}return kh(t,e,n,i,r)}function sS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(io,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Xe(io,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Xe(io,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Xe(io,un),un|=i;return jt(t,e,r,n),e.child}function oS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kh(t,e,n,i,r){var s=tn(n)?hs:Ht.current;return s=To(e,s),vo(e,r),n=hm(t,e,n,i,s,r),i=pm(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Vi(t,e,r)):(Qe&&i&&tm(e),e.flags|=1,jt(t,e,n,r),e.child)}function b0(t,e,n,i,r){if(tn(n)){var s=!0;oc(e)}else s=!1;if(vo(e,r),e.stateNode===null)Nu(t,e),tS(e,n,i),Rh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=tn(n)?hs:Ht.current,u=To(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&y0(e,o,i,u),ar=!1;var d=e.memoizedState;o.state=d,fc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||en.current||ar?(typeof c=="function"&&(Lh(e,n,c,i),l=e.memoizedState),(a=ar||v0(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,I1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=tn(n)?hs:Ht.current,l=To(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&y0(e,o,i,l),ar=!1,d=e.memoizedState,o.state=d,fc(e,i,o,r);var y=e.memoizedState;a!==f||d!==y||en.current||ar?(typeof m=="function"&&(Lh(e,n,m,i),y=e.memoizedState),(u=ar||v0(e,n,u,i,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ih(t,e,n,i,s,r)}function Ih(t,e,n,i,r,s){oS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&u0(e,n,!1),Vi(t,e,s);i=e.stateNode,U3.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):jt(t,e,a,s),e.memoizedState=i.state,r&&u0(e,n,!0),e.child}function aS(t){var e=t.stateNode;e.pendingContext?l0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&l0(t,e.context,!1),um(t,e.containerInfo)}function T0(t,e,n,i,r){return Eo(),im(r),e.flags|=256,jt(t,e,n,i),e.child}var Nh={dehydrated:null,treeContext:null,retryLane:0};function Oh(t){return{baseLanes:t,cachePool:null,transitions:null}}function lS(t,e,n){var i=e.pendingProps,r=nt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Xe(nt,r&1),t===null)return Ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Hc(o,i,0,null),t=os(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Oh(n),e.memoizedState=Nh,t):vm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return V3(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=os(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Oh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Nh,i}return s=t.child,t=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function vm(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jl(t,e,n,i){return i!==null&&im(i),Co(e,t.child,null,n),t=vm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function V3(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=jf(Error(Q(422))),jl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Hc({mode:"visible",children:i.children},r,0,null),s=os(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=Oh(o),e.memoizedState=Nh,s);if(!(e.mode&1))return jl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(Q(419)),i=jf(s,i,void 0),jl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Jt||a){if(i=Et,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),$n(i,t,r,-1))}return Mm(),i=jf(Error(Q(421))),jl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=J3.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,fn=yr(r.nextSibling),dn=e,Qe=!0,Wn=null,t!==null&&(En[Cn++]=Ei,En[Cn++]=Ci,En[Cn++]=ps,Ei=t.id,Ci=t.overflow,ps=e),e=vm(e,i.children),e.flags|=4096,e)}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ah(t.return,e,n)}function $f(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(jt(t,e,i.children,n),i=nt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Xe(nt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),$f(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}$f(e,!0,n,null,s);break;case"together":$f(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Q(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function B3(t,e,n){switch(e.tag){case 3:aS(e),Eo();break;case 5:N1(e);break;case 1:tn(e.type)&&oc(e);break;case 4:um(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Xe(uc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Xe(nt,nt.current&1),e.flags|=128,null):n&e.child.childLanes?lS(t,e,n):(Xe(nt,nt.current&1),t=Vi(t,e,n),t!==null?t.sibling:null);Xe(nt,nt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Xe(nt,nt.current),i)break;return null;case 22:case 23:return e.lanes=0,sS(t,e,n)}return Vi(t,e,n)}var cS,Fh,fS,dS;cS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};fS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,es(ci.current);var s=null;switch(n){case"input":r=sh(t,r),i=sh(t,i),s=[];break;case"select":r=st({},r,{value:void 0}),i=st({},i,{value:void 0}),s=[];break;case"textarea":r=lh(t,r),i=lh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=rc)}ch(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&qe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dS=function(t,e,n,i){n!==i&&(e.flags|=4)};function ia(t,e){if(!Qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function H3(t,e,n){var i=e.pendingProps;switch(nm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(e),null;case 1:return tn(e.type)&&sc(),Ot(e),null;case 3:return i=e.stateNode,Po(),Ye(en),Ye(Ht),fm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(jh(Wn),Wn=null))),Fh(t,e),Ot(e),null;case 5:cm(e);var r=es(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Q(166));return Ot(e),null}if(t=es(ci.current),Wl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Xa]=s,t=(e.mode&1)!==0,n){case"dialog":qe("cancel",i),qe("close",i);break;case"iframe":case"object":case"embed":qe("load",i);break;case"video":case"audio":for(r=0;r<ha.length;r++)qe(ha[r],i);break;case"source":qe("error",i);break;case"img":case"image":case"link":qe("error",i),qe("load",i);break;case"details":qe("toggle",i);break;case"input":Ng(i,s),qe("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},qe("invalid",i);break;case"textarea":Fg(i,s),qe("invalid",i)}ch(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Hl(i.textContent,a,t),r=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&qe("scroll",i)}switch(n){case"input":Il(i),Og(i,s,!0);break;case"textarea":Il(i),zg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=rc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=V_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ri]=e,t[Xa]=i,cS(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,i),n){case"dialog":qe("cancel",t),qe("close",t),r=i;break;case"iframe":case"object":case"embed":qe("load",t),r=i;break;case"video":case"audio":for(r=0;r<ha.length;r++)qe(ha[r],t);r=i;break;case"source":qe("error",t),r=i;break;case"img":case"image":case"link":qe("error",t),qe("load",t),r=i;break;case"details":qe("toggle",t),r=i;break;case"input":Ng(t,i),r=sh(t,i),qe("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=st({},i,{value:void 0}),qe("invalid",t);break;case"textarea":Fg(t,i),r=lh(t,i),qe("invalid",t);break;default:r=i}ch(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&za(t,l):typeof l=="number"&&za(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&qe("scroll",t):l!=null&&Bp(t,s,l,o))}switch(n){case"input":Il(t),Og(t,i,!1);break;case"textarea":Il(t),zg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ho(t,!!i.multiple,s,!1):i.defaultValue!=null&&ho(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=rc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ot(e),null;case 6:if(t&&e.stateNode!=null)dS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Q(166));if(n=es(Ya.current),es(ci.current),Wl(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=dn,t!==null))switch(t.tag){case 3:Hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return Ot(e),null;case 13:if(Ye(nt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Qe&&fn!==null&&e.mode&1&&!(e.flags&128))L1(),Eo(),e.flags|=98560,s=!1;else if(s=Wl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Q(317));s[ri]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ot(e),s=!1}else Wn!==null&&(jh(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||nt.current&1?St===0&&(St=3):Mm())),e.updateQueue!==null&&(e.flags|=4),Ot(e),null);case 4:return Po(),Fh(t,e),t===null&&ja(e.stateNode.containerInfo),Ot(e),null;case 10:return om(e.type._context),Ot(e),null;case 17:return tn(e.type)&&sc(),Ot(e),null;case 19:if(Ye(nt),s=e.memoizedState,s===null)return Ot(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ia(s,!1);else{if(St!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=dc(t),o!==null){for(e.flags|=128,ia(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Xe(nt,nt.current&1|2),e.child}t=t.sibling}s.tail!==null&&pt()>Lo&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304)}else{if(!i)if(t=dc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ia(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Qe)return Ot(e),null}else 2*pt()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,i=!0,ia(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pt(),e.sibling=null,n=nt.current,Xe(nt,i?n&1|2:n&1),e):(Ot(e),null);case 22:case 23:return wm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(Ot(e),e.subtreeFlags&6&&(e.flags|=8192)):Ot(e),null;case 24:return null;case 25:return null}throw Error(Q(156,e.tag))}function W3(t,e){switch(nm(e),e.tag){case 1:return tn(e.type)&&sc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Po(),Ye(en),Ye(Ht),fm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return cm(e),null;case 13:if(Ye(nt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Q(340));Eo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ye(nt),null;case 4:return Po(),null;case 10:return om(e.type._context),null;case 22:case 23:return wm(),null;case 24:return null;default:return null}}var $l=!1,Vt=!1,G3=typeof WeakSet=="function"?WeakSet:Set,ce=null;function no(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){ct(t,e,i)}else n.current=null}function zh(t,e,n){try{n()}catch(i){ct(t,e,i)}}var C0=!1;function j3(t,e){if(Sh=tc,t=v1(),em(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wh={focusedElem:t,selectionRange:n},tc=!1,ce=e;ce!==null;)if(e=ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ce=t;else for(;ce!==null;){e=ce;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var p=y.memoizedProps,h=y.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?p:Bn(e.type,p),h);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Q(163))}}catch(_){ct(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,ce=t;break}ce=e.return}return y=C0,C0=!1,y}function Ea(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&zh(e,n,s)}r=r.next}while(r!==i)}}function Vc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hS(t){var e=t.alternate;e!==null&&(t.alternate=null,hS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Xa],delete e[Th],delete e[C3],delete e[P3])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pS(t){return t.tag===5||t.tag===3||t.tag===4}function P0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=rc));else if(i!==4&&(t=t.child,t!==null))for(Vh(t,e,n),t=t.sibling;t!==null;)Vh(t,e,n),t=t.sibling}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var At=null,Hn=!1;function Xi(t,e,n){for(n=n.child;n!==null;)mS(t,e,n),n=n.sibling}function mS(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:Vt||no(n,e);case 6:var i=At,r=Hn;At=null,Xi(t,e,n),At=i,Hn=r,At!==null&&(Hn?(t=At,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):At.removeChild(n.stateNode));break;case 18:At!==null&&(Hn?(t=At,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),Ha(t)):Uf(At,n.stateNode));break;case 4:i=At,r=Hn,At=n.stateNode.containerInfo,Hn=!0,Xi(t,e,n),At=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zh(n,e,o),r=r.next}while(r!==i)}Xi(t,e,n);break;case 1:if(!Vt&&(no(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){ct(n,e,a)}Xi(t,e,n);break;case 21:Xi(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Xi(t,e,n),Vt=i):Xi(t,e,n);break;default:Xi(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new G3),e.forEach(function(i){var r=eT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:At=a.stateNode,Hn=!1;break e;case 3:At=a.stateNode.containerInfo,Hn=!0;break e;case 4:At=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(At===null)throw Error(Q(160));mS(s,o,r),At=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){ct(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gS(e,t),e=e.sibling}function gS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{Ea(3,t,t.return),Vc(3,t)}catch(p){ct(t,t.return,p)}try{Ea(5,t,t.return)}catch(p){ct(t,t.return,p)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&no(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&no(n,n.return),t.flags&32){var r=t.stateNode;try{za(r,"")}catch(p){ct(t,t.return,p)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z_(r,s),fh(a,o);var u=fh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?W_(r,f):c==="dangerouslySetInnerHTML"?B_(r,f):c==="children"?za(r,f):Bp(r,c,f,u)}switch(a){case"input":oh(r,s);break;case"textarea":U_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ho(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ho(r,!!s.multiple,s.defaultValue,!0):ho(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(p){ct(t,t.return,p)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(Q(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(p){ct(t,t.return,p)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ha(e.containerInfo)}catch(p){ct(t,t.return,p)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_m=pt())),i&4&&A0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||c,On(e,t),Vt=u):On(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ce=t,c=t.child;c!==null;){for(f=ce=c;ce!==null;){switch(d=ce,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ea(4,d,d.return);break;case 1:no(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(p){ct(i,n,p)}}break;case 5:no(d,d.return);break;case 22:if(d.memoizedState!==null){R0(f);continue}}m!==null?(m.return=d,ce=m):R0(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H_("display",o))}catch(p){ct(t,t.return,p)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(p){ct(t,t.return,p)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:On(e,t),Jn(t),i&4&&A0(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pS(n)){var i=n;break e}n=n.return}throw Error(Q(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(za(r,""),i.flags&=-33);var s=P0(t);Bh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=P0(t);Vh(t,a,o);break;default:throw Error(Q(161))}}catch(l){ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $3(t,e,n){ce=t,vS(t)}function vS(t,e,n){for(var i=(t.mode&1)!==0;ce!==null;){var r=ce,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||$l;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Vt;a=$l;var u=Vt;if($l=o,(Vt=l)&&!u)for(ce=r;ce!==null;)o=ce,l=o.child,o.tag===22&&o.memoizedState!==null?D0(r):l!==null?(l.return=o,ce=l):D0(r);for(;s!==null;)ce=s,vS(s),s=s.sibling;ce=r,$l=a,Vt=u}L0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ce=s):L0(t)}}function L0(t){for(;ce!==null;){var e=ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Vc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&p0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}p0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ha(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Q(163))}Vt||e.flags&512&&Uh(e)}catch(d){ct(e,e.return,d)}}if(e===t){ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,ce=n;break}ce=e.return}}function R0(t){for(;ce!==null;){var e=ce;if(e===t){ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ce=n;break}ce=e.return}}function D0(t){for(;ce!==null;){var e=ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vc(4,e)}catch(l){ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){ct(e,r,l)}}var s=e.return;try{Uh(e)}catch(l){ct(e,s,l)}break;case 5:var o=e.return;try{Uh(e)}catch(l){ct(e,o,l)}}}catch(l){ct(e,e.return,l)}if(e===t){ce=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ce=a;break}ce=e.return}}var X3=Math.ceil,mc=Wi.ReactCurrentDispatcher,ym=Wi.ReactCurrentOwner,Dn=Wi.ReactCurrentBatchConfig,Fe=0,Et=null,yt=null,Rt=0,un=0,io=kr(0),St=0,Ja=null,gs=0,Bc=0,xm=0,Ca=null,Zt=null,_m=0,Lo=1/0,wi=null,gc=!1,Hh=null,_r=null,Xl=!1,dr=null,vc=0,Pa=0,Wh=null,Ou=-1,Fu=0;function $t(){return Fe&6?pt():Ou!==-1?Ou:Ou=pt()}function Sr(t){return t.mode&1?Fe&2&&Rt!==0?Rt&-Rt:L3.transition!==null?(Fu===0&&(Fu=t1()),Fu):(t=We,t!==0||(t=window.event,t=t===void 0?16:l1(t.type)),t):1}function $n(t,e,n,i){if(50<Pa)throw Pa=0,Wh=null,Error(Q(185));al(t,n,i),(!(Fe&2)||t!==Et)&&(t===Et&&(!(Fe&2)&&(Bc|=n),St===4&&cr(t,Rt)),nn(t,i),n===1&&Fe===0&&!(e.mode&1)&&(Lo=pt()+500,Fc&&Ir()))}function nn(t,e){var n=t.callbackNode;Lb(t,e);var i=ec(t,t===Et?Rt:0);if(i===0)n!==null&&Bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bg(n),e===1)t.tag===0?A3(k0.bind(null,t)):C1(k0.bind(null,t)),T3(function(){!(Fe&6)&&Ir()}),n=null;else{switch(n1(i)){case 1:n=$p;break;case 4:n=J_;break;case 16:n=Ju;break;case 536870912:n=e1;break;default:n=Ju}n=TS(n,yS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yS(t,e){if(Ou=-1,Fu=0,Fe&6)throw Error(Q(327));var n=t.callbackNode;if(yo()&&t.callbackNode!==n)return null;var i=ec(t,t===Et?Rt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yc(t,i);else{e=i;var r=Fe;Fe|=2;var s=_S();(Et!==t||Rt!==e)&&(wi=null,Lo=pt()+500,ss(t,e));do try{K3();break}catch(a){xS(t,a)}while(!0);sm(),mc.current=s,Fe=r,yt!==null?e=0:(Et=null,Rt=0,e=St)}if(e!==0){if(e===2&&(r=gh(t),r!==0&&(i=r,e=Gh(t,r))),e===1)throw n=Ja,ss(t,0),cr(t,i),nn(t,pt()),n;if(e===6)cr(t,i);else{if(r=t.current.alternate,!(i&30)&&!q3(r)&&(e=yc(t,i),e===2&&(s=gh(t),s!==0&&(i=s,e=Gh(t,s))),e===1))throw n=Ja,ss(t,0),cr(t,i),nn(t,pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Q(345));case 2:jr(t,Zt,wi);break;case 3:if(cr(t,i),(i&130023424)===i&&(e=_m+500-pt(),10<e)){if(ec(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){$t(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bh(jr.bind(null,t,Zt,wi),e);break}jr(t,Zt,wi);break;case 4:if(cr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-jn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X3(i/1960))-i,10<i){t.timeoutHandle=bh(jr.bind(null,t,Zt,wi),i);break}jr(t,Zt,wi);break;case 5:jr(t,Zt,wi);break;default:throw Error(Q(329))}}}return nn(t,pt()),t.callbackNode===n?yS.bind(null,t):null}function Gh(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(ss(t,e).flags|=256),t=yc(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&jh(e)),t}function jh(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function q3(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(t,e){for(e&=~xm,e&=~Bc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function k0(t){if(Fe&6)throw Error(Q(327));yo();var e=ec(t,0);if(!(e&1))return nn(t,pt()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var i=gh(t);i!==0&&(e=i,n=Gh(t,i))}if(n===1)throw n=Ja,ss(t,0),cr(t,e),nn(t,pt()),n;if(n===6)throw Error(Q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,Zt,wi),nn(t,pt()),null}function Sm(t,e){var n=Fe;Fe|=1;try{return t(e)}finally{Fe=n,Fe===0&&(Lo=pt()+500,Fc&&Ir())}}function vs(t){dr!==null&&dr.tag===0&&!(Fe&6)&&yo();var e=Fe;Fe|=1;var n=Dn.transition,i=We;try{if(Dn.transition=null,We=1,t)return t()}finally{We=i,Dn.transition=n,Fe=e,!(Fe&6)&&Ir()}}function wm(){un=io.current,Ye(io)}function ss(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,b3(n)),yt!==null)for(n=yt.return;n!==null;){var i=n;switch(nm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&sc();break;case 3:Po(),Ye(en),Ye(Ht),fm();break;case 5:cm(i);break;case 4:Po();break;case 13:Ye(nt);break;case 19:Ye(nt);break;case 10:om(i.type._context);break;case 22:case 23:wm()}n=n.return}if(Et=t,yt=t=wr(t.current,null),Rt=un=e,St=0,Ja=null,xm=Bc=gs=0,Zt=Ca=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Jr=null}return t}function xS(t,e){do{var n=yt;try{if(sm(),ku.current=pc,hc){for(var i=rt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}hc=!1}if(ms=0,Tt=_t=rt=null,Ta=!1,Ka=0,ym.current=null,n===null||n.return===null){St=1,Ja=e,yt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Rt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_0(o);if(m!==null){m.flags&=-257,S0(m,o,a,s,e),m.mode&1&&x0(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var p=new Set;p.add(l),e.updateQueue=p}else y.add(l);break e}else{if(!(e&1)){x0(s,u,e),Mm();break e}l=Error(Q(426))}}else if(Qe&&a.mode&1){var h=_0(o);if(h!==null){!(h.flags&65536)&&(h.flags|=256),S0(h,o,a,s,e),im(Ao(l,a));break e}}s=l=Ao(l,a),St!==4&&(St=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=nS(s,l,e);h0(s,g);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(_r===null||!_r.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=iS(s,a,e);h0(s,_);break e}}s=s.return}while(s!==null)}wS(n)}catch(w){e=w,yt===n&&n!==null&&(yt=n=n.return);continue}break}while(!0)}function _S(){var t=mc.current;return mc.current=pc,t===null?pc:t}function Mm(){(St===0||St===3||St===2)&&(St=4),Et===null||!(gs&268435455)&&!(Bc&268435455)||cr(Et,Rt)}function yc(t,e){var n=Fe;Fe|=2;var i=_S();(Et!==t||Rt!==e)&&(wi=null,ss(t,e));do try{Y3();break}catch(r){xS(t,r)}while(!0);if(sm(),Fe=n,mc.current=i,yt!==null)throw Error(Q(261));return Et=null,Rt=0,St}function Y3(){for(;yt!==null;)SS(yt)}function K3(){for(;yt!==null&&!Sb();)SS(yt)}function SS(t){var e=bS(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?wS(t):yt=e,ym.current=null}function wS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W3(n,e),n!==null){n.flags&=32767,yt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{St=6,yt=null;return}}else if(n=H3(n,e,un),n!==null){yt=n;return}if(e=e.sibling,e!==null){yt=e;return}yt=e=t}while(e!==null);St===0&&(St=5)}function jr(t,e,n){var i=We,r=Dn.transition;try{Dn.transition=null,We=1,Z3(t,e,n,i)}finally{Dn.transition=r,We=i}return null}function Z3(t,e,n,i){do yo();while(dr!==null);if(Fe&6)throw Error(Q(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Rb(t,s),t===Et&&(yt=Et=null,Rt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xl||(Xl=!0,TS(Ju,function(){return yo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=We;We=1;var a=Fe;Fe|=4,ym.current=null,j3(t,n),gS(n,t),v3(wh),tc=!!Sh,wh=Sh=null,t.current=n,$3(n),wb(),Fe=a,We=o,Dn.transition=s}else t.current=n;if(Xl&&(Xl=!1,dr=t,vc=r),s=t.pendingLanes,s===0&&(_r=null),Tb(n.stateNode),nn(t,pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(gc)throw gc=!1,t=Hh,Hh=null,t;return vc&1&&t.tag!==0&&yo(),s=t.pendingLanes,s&1?t===Wh?Pa++:(Pa=0,Wh=t):Pa=0,Ir(),null}function yo(){if(dr!==null){var t=n1(vc),e=Dn.transition,n=We;try{if(Dn.transition=null,We=16>t?16:t,dr===null)var i=!1;else{if(t=dr,dr=null,vc=0,Fe&6)throw Error(Q(331));var r=Fe;for(Fe|=4,ce=t.current;ce!==null;){var s=ce,o=s.child;if(ce.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ce=u;ce!==null;){var c=ce;switch(c.tag){case 0:case 11:case 15:Ea(8,c,s)}var f=c.child;if(f!==null)f.return=c,ce=f;else for(;ce!==null;){c=ce;var d=c.sibling,m=c.return;if(hS(c),c===u){ce=null;break}if(d!==null){d.return=m,ce=d;break}ce=m}}}var y=s.alternate;if(y!==null){var p=y.child;if(p!==null){y.child=null;do{var h=p.sibling;p.sibling=null,p=h}while(p!==null)}}ce=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ce=o;else e:for(;ce!==null;){if(s=ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ea(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,ce=g;break e}ce=s.return}}var v=t.current;for(ce=v;ce!==null;){o=ce;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ce=x;else e:for(o=v;ce!==null;){if(a=ce,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vc(9,a)}}catch(w){ct(a,a.return,w)}if(a===o){ce=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,ce=_;break e}ce=a.return}}if(Fe=r,Ir(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(Dc,t)}catch{}i=!0}return i}finally{We=n,Dn.transition=e}}return!1}function I0(t,e,n){e=Ao(n,e),e=nS(t,e,1),t=xr(t,e,1),e=$t(),t!==null&&(al(t,1,e),nn(t,e))}function ct(t,e,n){if(t.tag===3)I0(t,t,n);else for(;e!==null;){if(e.tag===3){I0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(_r===null||!_r.has(i))){t=Ao(n,t),t=iS(e,t,1),e=xr(e,t,1),t=$t(),e!==null&&(al(e,1,t),nn(e,t));break}}e=e.return}}function Q3(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=$t(),t.pingedLanes|=t.suspendedLanes&n,Et===t&&(Rt&n)===n&&(St===4||St===3&&(Rt&130023424)===Rt&&500>pt()-_m?ss(t,0):xm|=n),nn(t,e)}function MS(t,e){e===0&&(t.mode&1?(e=Fl,Fl<<=1,!(Fl&130023424)&&(Fl=4194304)):e=1);var n=$t();t=Ui(t,e),t!==null&&(al(t,e,n),nn(t,n))}function J3(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MS(t,n)}function eT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Q(314))}i!==null&&i.delete(e),MS(t,n)}var bS;bS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,B3(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,Qe&&e.flags&1048576&&P1(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nu(t,e),t=e.pendingProps;var r=To(e,Ht.current);vo(e,n),r=hm(null,e,i,t,r,n);var s=pm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,oc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,lm(e),r.updater=Uc,e.stateNode=r,r._reactInternals=e,Rh(e,i,t,n),e=Ih(null,e,i,!0,s,n)):(e.tag=0,Qe&&s&&tm(e),jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nT(i),t=Bn(i,t),r){case 0:e=kh(null,e,i,t,n);break e;case 1:e=b0(null,e,i,t,n);break e;case 11:e=w0(null,e,i,t,n);break e;case 14:e=M0(null,e,i,Bn(i.type,t),n);break e}throw Error(Q(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),kh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),b0(t,e,i,r,n);case 3:e:{if(aS(e),t===null)throw Error(Q(387));i=e.pendingProps,s=e.memoizedState,r=s.element,I1(t,e),fc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(Q(423)),e),e=T0(t,e,i,n,r);break e}else if(i!==r){r=Ao(Error(Q(424)),e),e=T0(t,e,i,n,r);break e}else for(fn=yr(e.stateNode.containerInfo.firstChild),dn=e,Qe=!0,Wn=null,n=D1(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Eo(),i===r){e=Vi(t,e,n);break e}jt(t,e,i,n)}e=e.child}return e;case 5:return N1(e),t===null&&Ph(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mh(i,r)?o=null:s!==null&&Mh(i,s)&&(e.flags|=32),oS(t,e),jt(t,e,o,n),e.child;case 6:return t===null&&Ph(e),null;case 13:return lS(t,e,n);case 4:return um(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),w0(t,e,i,r,n);case 7:return jt(t,e,e.pendingProps,n),e.child;case 8:return jt(t,e,e.pendingProps.children,n),e.child;case 12:return jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Xe(uc,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!en.current){e=Vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Li(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ah(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(Q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ah(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,vo(e,n),r=In(r),i=i(r),e.flags|=1,jt(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),M0(t,e,i,r,n);case 15:return rS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Nu(t,e),e.tag=1,tn(i)?(t=!0,oc(e)):t=!1,vo(e,n),tS(e,i,r),Rh(e,i,r,n),Ih(null,e,i,!0,t,n);case 19:return uS(t,e,n);case 22:return sS(t,e,n)}throw Error(Q(156,e.tag))};function TS(t,e){return Q_(t,e)}function tT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new tT(t,e,n,i)}function bm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nT(t){if(typeof t=="function")return bm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wp)return 11;if(t===Gp)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xs:return os(n.children,r,s,e);case Hp:o=8,r|=8;break;case th:return t=Ln(12,n,e,r|2),t.elementType=th,t.lanes=s,t;case nh:return t=Ln(13,n,e,r),t.elementType=nh,t.lanes=s,t;case ih:return t=Ln(19,n,e,r),t.elementType=ih,t.lanes=s,t;case N_:return Hc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k_:o=10;break e;case I_:o=9;break e;case Wp:o=11;break e;case Gp:o=14;break e;case or:o=16,i=null;break e}throw Error(Q(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function os(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Hc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=N_,t.lanes=n,t.stateNode={isHidden:!1},t}function Xf(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function qf(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iT(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pf(0),this.expirationTimes=Pf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Tm(t,e,n,i,r,s,o,a,l){return t=new iT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lm(s),t}function rT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$s,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ES(t){if(!t)return Tr;t=t._reactInternals;e:{if(bs(t)!==t||t.tag!==1)throw Error(Q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Q(171))}if(t.tag===1){var n=t.type;if(tn(n))return E1(t,n,e)}return e}function CS(t,e,n,i,r,s,o,a,l){return t=Tm(n,i,!0,t,r,s,o,a,l),t.context=ES(null),n=t.current,i=$t(),r=Sr(n),s=Li(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,al(t,r,i),nn(t,i),t}function Wc(t,e,n,i){var r=e.current,s=$t(),o=Sr(r);return n=ES(n),e.context===null?e.context=n:e.pendingContext=n,e=Li(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,o),t!==null&&($n(t,r,o,s),Du(t,r,o)),o}function xc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function N0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Em(t,e){N0(t,e),(t=t.alternate)&&N0(t,e)}function sT(){return null}var PS=typeof reportError=="function"?reportError:function(t){console.error(t)};function Cm(t){this._internalRoot=t}Gc.prototype.render=Cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Q(409));Wc(t,e,null,null)};Gc.prototype.unmount=Cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vs(function(){Wc(null,t,null,null)}),e[zi]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=s1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ur.length&&e!==0&&e<ur[n].priority;n++);ur.splice(n,0,t),n===0&&a1(t)}};function Pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function O0(){}function oT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=xc(o);s.call(u)}}var o=CS(e,i,t,0,null,!1,!1,"",O0);return t._reactRootContainer=o,t[zi]=o.current,ja(t.nodeType===8?t.parentNode:t),vs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=xc(l);a.call(u)}}var l=Tm(t,0,!1,null,null,!1,!1,"",O0);return t._reactRootContainer=l,t[zi]=l.current,ja(t.nodeType===8?t.parentNode:t),vs(function(){Wc(e,l,n,i)}),l}function $c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=xc(o);a.call(l)}}Wc(e,o,t,r)}else o=oT(n,e,t,r,i);return xc(o)}i1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Xp(e,n|1),nn(e,pt()),!(Fe&6)&&(Lo=pt()+500,Ir()))}break;case 13:vs(function(){var i=Ui(t,1);if(i!==null){var r=$t();$n(i,t,1,r)}}),Em(t,1)}};qp=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=$t();$n(e,t,134217728,n)}Em(t,134217728)}};r1=function(t){if(t.tag===13){var e=Sr(t),n=Ui(t,e);if(n!==null){var i=$t();$n(n,t,e,i)}Em(t,e)}};s1=function(){return We};o1=function(t,e){var n=We;try{return We=t,e()}finally{We=n}};hh=function(t,e,n){switch(e){case"input":if(oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Oc(i);if(!r)throw Error(Q(90));F_(i),oh(i,r)}}}break;case"textarea":U_(t,n);break;case"select":e=n.value,e!=null&&ho(t,!!n.multiple,e,!1)}};$_=Sm;X_=vs;var aT={usingClientEntryPoint:!1,Events:[ul,Zs,Oc,G_,j_,Sm]},ra={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lT={bundleType:ra.bundleType,version:ra.version,rendererPackageName:ra.rendererPackageName,rendererConfig:ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=K_(t),t===null?null:t.stateNode},findFiberByHostInstance:ra.findFiberByHostInstance||sT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Dc=ql.inject(lT),ui=ql}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aT;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pm(e))throw Error(Q(200));return rT(t,e,null,n)};yn.createRoot=function(t,e){if(!Pm(t))throw Error(Q(299));var n=!1,i="",r=PS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Tm(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,ja(t.nodeType===8?t.parentNode:t),new Cm(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Q(188)):(t=Object.keys(t).join(","),Error(Q(268,t)));return t=K_(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return vs(t)};yn.hydrate=function(t,e,n){if(!jc(e))throw Error(Q(200));return $c(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Pm(t))throw Error(Q(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=PS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CS(e,null,t,1,n??null,r,!1,s,o),t[zi]=e.current,ja(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gc(e)};yn.render=function(t,e,n){if(!jc(e))throw Error(Q(200));return $c(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!jc(t))throw Error(Q(40));return t._reactRootContainer?(vs(function(){$c(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};yn.unstable_batchedUpdates=Sm;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jc(n))throw Error(Q(200));if(t==null||t._reactInternals===void 0)throw Error(Q(38));return $c(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function AS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(AS)}catch(t){console.error(t)}}AS(),A_.exports=yn;var LS=A_.exports,RS,F0=LS;RS=F0.createRoot,F0.hydrateRoot;function uT(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}function el(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const $h=t=>Array.isArray(t);function DS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function tl(t){return typeof t=="string"||Array.isArray(t)}function z0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Am(t,e,n,i){if(typeof e=="function"){const[r,s]=z0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=z0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function Xc(t,e,n){const i=t.getProps();return Am(i,e,n!==void 0?n:i.custom,t)}const Lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rm=["initial",...Lm],fl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nr=new Set(fl),Ri=t=>t*1e3,Di=t=>t/1e3,cT={type:"spring",stiffness:500,damping:25,restSpeed:10},fT=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),dT={type:"keyframes",duration:.8},hT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pT=(t,{keyframes:e})=>e.length>2?dT:Nr.has(t)?t.startsWith("scale")?fT(e[1]):cT:hT;function mT({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}function Dm(t,e){return t[e]||t.default||t}const gT={skipAnimations:!1,useManualTiming:!1},vT=t=>t!==null;function qc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(vT),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const Dt=t=>t;function yT(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,f=!1)=>{const m=f&&i?e:n;return c&&s.add(u),m.has(u)||m.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],n.clear(),e.forEach(a),i=!1,r&&(r=!1,l.process(u))}};return l}const Yl=["read","resolveKeyframes","update","preRender","render","postRender"],xT=40;function kS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Yl.reduce((g,v)=>(g[v]=yT(s),g),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:f,postRender:d}=o,m=()=>{const g=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(g-r.timestamp,xT),1),r.timestamp=g,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),f.process(r),d.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(m))},y=()=>{n=!0,i=!0,r.isProcessing||t(m)};return{schedule:Yl.reduce((g,v)=>{const x=o[v];return g[v]=(_,w=!1,b=!1)=>(n||y(),x.schedule(_,w,b)),g},{}),cancel:g=>{for(let v=0;v<Yl.length;v++)o[Yl[v]].cancel(g)},state:r,steps:o}}const{schedule:ke,cancel:qn,state:bt,steps:Yf}=kS(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dt,!0),IS=t=>/^0[^.\s]+$/u.test(t);function _T(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||IS(t):!0}let ST=Dt,Xh=Dt;const NS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),OS=t=>e=>typeof e=="string"&&e.startsWith(t),FS=OS("--"),wT=OS("var(--"),km=t=>wT(t)?MT.test(t.split("/*")[0].trim()):!1,MT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,bT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function TT(t){const e=bT.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function zS(t,e,n=1){const[i,r]=TT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return NS(o)?parseFloat(o):o}return km(r)?zS(r,e,n+1):r}const Er=(t,e,n)=>n>e?e:n<t?t:n,Go={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Aa={...Go,transform:t=>Er(0,1,t)},Kl={...Go,default:1},La=t=>Math.round(t*1e5)/1e5,Im=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,ET=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,CT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function dl(t){return typeof t=="string"}function PT(t){return t==null}const hl=t=>({test:e=>dl(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),rr=hl("deg"),fi=hl("%"),ye=hl("px"),AT=hl("vh"),LT=hl("vw"),U0={...fi,parse:t=>fi.parse(t)/100,transform:t=>fi.transform(t*100)},RT=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),V0=t=>t===Go||t===ye,B0=(t,e)=>parseFloat(t.split(", ")[e]),H0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return B0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?B0(s[1],t):0}},DT=new Set(["x","y","z"]),kT=fl.filter(t=>!DT.has(t));function IT(t){const e=[];return kT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Ro={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:H0(4,13),y:H0(5,14)};Ro.translateX=Ro.x;Ro.translateY=Ro.y;const US=t=>e=>e.test(t),NT={test:t=>t==="auto",parse:t=>t},VS=[Go,ye,fi,rr,LT,AT,NT],W0=t=>VS.find(US(t)),as=new Set;let qh=!1,Yh=!1;function BS(){if(Yh){const t=Array.from(as).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=IT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Yh=!1,qh=!1,as.forEach(t=>t.complete()),as.clear()}function HS(){as.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Yh=!0)})}function OT(){HS(),BS()}class Nm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(as.add(this),qh||(qh=!0,ke.read(HS),ke.resolveKeyframes(BS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),as.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,as.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Om=(t,e)=>n=>!!(dl(n)&&CT.test(n)&&n.startsWith(t)||e&&!PT(n)&&Object.prototype.hasOwnProperty.call(n,e)),WS=(t,e,n)=>i=>{if(!dl(i))return i;const[r,s,o,a]=i.match(Im);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},FT=t=>Er(0,255,t),Kf={...Go,transform:t=>Math.round(FT(t))},ts={test:Om("rgb","red"),parse:WS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Kf.transform(t)+", "+Kf.transform(e)+", "+Kf.transform(n)+", "+La(Aa.transform(i))+")"};function zT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const Kh={test:Om("#"),parse:zT,transform:ts.transform},ro={test:Om("hsl","hue"),parse:WS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+fi.transform(La(e))+", "+fi.transform(La(n))+", "+La(Aa.transform(i))+")"},Ut={test:t=>ts.test(t)||Kh.test(t)||ro.test(t),parse:t=>ts.test(t)?ts.parse(t):ro.test(t)?ro.parse(t):Kh.parse(t),transform:t=>dl(t)?t:t.hasOwnProperty("red")?ts.transform(t):ro.transform(t)};function UT(t){var e,n;return isNaN(t)&&dl(t)&&(((e=t.match(Im))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(ET))===null||n===void 0?void 0:n.length)||0)>0}const GS="number",jS="color",VT="var",BT="var(",G0="${}",HT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function nl(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(HT,l=>(Ut.test(l)?(i.color.push(s),r.push(jS),n.push(Ut.parse(l))):l.startsWith(BT)?(i.var.push(s),r.push(VT),n.push(l)):(i.number.push(s),r.push(GS),n.push(parseFloat(l))),++s,G0)).split(G0);return{values:n,split:a,indexes:i,types:r}}function $S(t){return nl(t).values}function XS(t){const{split:e,types:n}=nl(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===GS?s+=La(r[o]):a===jS?s+=Ut.transform(r[o]):s+=r[o]}return s}}const WT=t=>typeof t=="number"?0:t;function GT(t){const e=$S(t);return XS(t)(e.map(WT))}const Cr={test:UT,parse:$S,createTransformer:XS,getAnimatableNone:GT},jT=new Set(["brightness","contrast","saturate","opacity"]);function $T(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Im)||[];if(!i)return t;const r=n.replace(i,"");let s=jT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const XT=/\b([a-z-]*)\(.*?\)/gu,Zh={...Cr,getAnimatableNone:t=>{const e=t.match(XT);return e?e.map($T).join(" "):t}},j0={...Go,transform:Math.round},Fm={borderWidth:ye,borderTopWidth:ye,borderRightWidth:ye,borderBottomWidth:ye,borderLeftWidth:ye,borderRadius:ye,radius:ye,borderTopLeftRadius:ye,borderTopRightRadius:ye,borderBottomRightRadius:ye,borderBottomLeftRadius:ye,width:ye,maxWidth:ye,height:ye,maxHeight:ye,size:ye,top:ye,right:ye,bottom:ye,left:ye,padding:ye,paddingTop:ye,paddingRight:ye,paddingBottom:ye,paddingLeft:ye,margin:ye,marginTop:ye,marginRight:ye,marginBottom:ye,marginLeft:ye,rotate:rr,rotateX:rr,rotateY:rr,rotateZ:rr,scale:Kl,scaleX:Kl,scaleY:Kl,scaleZ:Kl,skew:rr,skewX:rr,skewY:rr,distance:ye,translateX:ye,translateY:ye,translateZ:ye,x:ye,y:ye,z:ye,perspective:ye,transformPerspective:ye,opacity:Aa,originX:U0,originY:U0,originZ:ye,zIndex:j0,backgroundPositionX:ye,backgroundPositionY:ye,fillOpacity:Aa,strokeOpacity:Aa,numOctaves:j0},qT={...Fm,color:Ut,backgroundColor:Ut,outlineColor:Ut,fill:Ut,stroke:Ut,borderColor:Ut,borderTopColor:Ut,borderRightColor:Ut,borderBottomColor:Ut,borderLeftColor:Ut,filter:Zh,WebkitFilter:Zh},zm=t=>qT[t];function qS(t,e){let n=zm(t);return n!==Zh&&(n=Cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const YT=new Set(["auto","none","0"]);function KT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!YT.has(s)&&nl(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=qS(n,r)}class YS extends Nm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),km(u))){const c=zS(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!RT.has(i)||e.length!==2)return;const[r,s]=e,o=W0(r),a=W0(s);if(o!==a)if(V0(o)&&V0(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)_T(e[r])&&i.push(r);i.length&&KT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ro[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Ro[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}function KS(t){let e;return()=>(e===void 0&&(e=t()),e)}let Uu;function ZT(){Uu=void 0}const ki={now:()=>(Uu===void 0&&ki.set(bt.isProcessing||gT.useManualTiming?bt.timestamp:performance.now()),Uu),set:t=>{Uu=t,queueMicrotask(ZT)}},$0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cr.test(t)||t==="0")&&!t.startsWith("url("));function QT(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function JT(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=$0(r,e),a=$0(s,e);return!o||!a?!1:QT(t)||n==="spring"&&i}const eE=40;class ZS{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=ki.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>eE?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&OT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=ki.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!JT(e,i,r,s))if(o)this.options.duration=0;else{l==null||l(qc(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function Um(t,e){return e?t*(1e3/e):0}const tE=5;function QS(t,e,n){const i=Math.max(e-tE,0);return Um(n-t(i),e-i)}const Zf=.001,nE=.01,iE=10,rE=.05,sE=1;function oE({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let r,s,o=1-e;o=Er(rE,sE,o),t=Er(nE,iE,Di(t)),o<1?(r=u=>{const c=u*o,f=c*t,d=c-n,m=Qh(u,o),y=Math.exp(-f);return Zf-d/m*y},s=u=>{const f=u*o*t,d=f*n+n,m=Math.pow(o,2)*Math.pow(u,2)*t,y=Math.exp(-f),p=Qh(Math.pow(u,2),o);return(-r(u)+Zf>0?-1:1)*((d-m)*y)/p}):(r=u=>{const c=Math.exp(-u*t),f=(u-n)*t+1;return-Zf+c*f},s=u=>{const c=Math.exp(-u*t),f=(n-u)*(t*t);return c*f});const a=5/t,l=lE(r,s,a);if(t=Ri(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const aE=12;function lE(t,e,n){let i=n;for(let r=1;r<aE;r++)i=i-t(i)/e(i);return i}function Qh(t,e){return t*Math.sqrt(1-e*e)}const uE=["duration","bounce"],cE=["stiffness","damping","mass"];function X0(t,e){return e.some(n=>t[n]!==void 0)}function fE(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!X0(t,cE)&&X0(t,uE)){const n=oE(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function JS({keyframes:t,restDelta:e,restSpeed:n,...i}){const r=t[0],s=t[t.length-1],o={done:!1,value:r},{stiffness:a,damping:l,mass:u,duration:c,velocity:f,isResolvedFromDuration:d}=fE({...i,velocity:-Di(i.velocity||0)}),m=f||0,y=l/(2*Math.sqrt(a*u)),p=s-r,h=Di(Math.sqrt(a/u)),g=Math.abs(p)<5;n||(n=g?.01:2),e||(e=g?.005:.5);let v;if(y<1){const x=Qh(h,y);v=_=>{const w=Math.exp(-y*h*_);return s-w*((m+y*h*p)/x*Math.sin(x*_)+p*Math.cos(x*_))}}else if(y===1)v=x=>s-Math.exp(-h*x)*(p+(m+h*p)*x);else{const x=h*Math.sqrt(y*y-1);v=_=>{const w=Math.exp(-y*h*_),b=Math.min(x*_,300);return s-w*((m+y*h*p)*Math.sinh(b)+x*p*Math.cosh(b))/x}}return{calculatedDuration:d&&c||null,next:x=>{const _=v(x);if(d)o.done=x>=c;else{let w=0;y<1&&(w=x===0?Ri(m):QS(v,x,_));const b=Math.abs(w)<=n,P=Math.abs(s-_)<=e;o.done=b&&P}return o.value=o.done?s:_,o}}}function q0({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const f=t[0],d={done:!1,value:f},m=S=>a!==void 0&&S<a||l!==void 0&&S>l,y=S=>a===void 0?l:l===void 0||Math.abs(a-S)<Math.abs(l-S)?a:l;let p=n*e;const h=f+p,g=o===void 0?h:o(h);g!==h&&(p=g-f);const v=S=>-p*Math.exp(-S/i),x=S=>g+v(S),_=S=>{const E=v(S),A=x(S);d.done=Math.abs(E)<=u,d.value=d.done?g:A};let w,b;const P=S=>{m(d.value)&&(w=S,b=JS({keyframes:[d.value,y(d.value)],velocity:QS(x,S,d.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return P(0),{calculatedDuration:null,next:S=>{let E=!1;return!b&&w===void 0&&(E=!0,_(S),P(S)),w!==void 0&&S>=w?b.next(S-w):(!E&&_(S),d)}}}const ew=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,dE=1e-7,hE=12;function pE(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=ew(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>dE&&++a<hE);return o}function pl(t,e,n,i){if(t===e&&n===i)return Dt;const r=s=>pE(s,0,1,t,n);return s=>s===0||s===1?s:ew(r(s),e,i)}const Vu=pl(.42,0,1,1),mE=pl(0,0,.58,1),tw=pl(.42,0,.58,1),gE=t=>Array.isArray(t)&&typeof t[0]!="number",nw=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,iw=t=>e=>1-t(1-e),Vm=t=>1-Math.sin(Math.acos(t)),rw=iw(Vm),vE=nw(Vm),sw=pl(.33,1.53,.69,.99),Bm=iw(sw),yE=nw(Bm),xE=t=>(t*=2)<1?.5*Bm(t):.5*(2-Math.pow(2,-10*(t-1))),Y0={linear:Dt,easeIn:Vu,easeInOut:tw,easeOut:mE,circIn:Vm,circInOut:vE,circOut:rw,backIn:Bm,backInOut:yE,backOut:sw,anticipate:xE},K0=t=>{if(Array.isArray(t)){Xh(t.length===4);const[e,n,i,r]=t;return pl(e,n,i,r)}else if(typeof t=="string")return Xh(Y0[t]!==void 0),Y0[t];return t},_E=(t,e)=>n=>e(t(n)),Ii=(...t)=>t.reduce(_E),Do=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},it=(t,e,n)=>t+(e-t)*n;function Qf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function SE({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Qf(l,a,t+1/3),s=Qf(l,a,t),o=Qf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function _c(t,e){return n=>n>0?e:t}const Jf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},wE=[Kh,ts,ro],ME=t=>wE.find(e=>e.test(t));function Z0(t){const e=ME(t);if(!e)return!1;let n=e.parse(t);return e===ro&&(n=SE(n)),n}const Q0=(t,e)=>{const n=Z0(t),i=Z0(e);if(!n||!i)return _c(t,e);const r={...n};return s=>(r.red=Jf(n.red,i.red,s),r.green=Jf(n.green,i.green,s),r.blue=Jf(n.blue,i.blue,s),r.alpha=it(n.alpha,i.alpha,s),ts.transform(r))},Jh=new Set(["none","hidden"]);function bE(t,e){return Jh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function TE(t,e){return n=>it(t,e,n)}function Hm(t){return typeof t=="number"?TE:typeof t=="string"?km(t)?_c:Ut.test(t)?Q0:PE:Array.isArray(t)?ow:typeof t=="object"?Ut.test(t)?Q0:EE:_c}function ow(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Hm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function EE(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Hm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function CE(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const PE=(t,e)=>{const n=Cr.createTransformer(e),i=nl(t),r=nl(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Jh.has(t)&&!r.values.length||Jh.has(e)&&!i.values.length?bE(t,e):Ii(ow(CE(i,r),r.values),n):_c(t,e)};function aw(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?it(t,e,n):Hm(t)(t,e)}function AE(t,e,n){const i=[],r=n||aw,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Dt:e;a=Ii(l,a)}i.push(a)}return i}function Wm(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Xh(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=AE(e,i,r),a=o.length,l=u=>{let c=0;if(a>1)for(;c<t.length-2&&!(u<t[c+1]);c++);const f=Do(t[c],t[c+1],u);return o[c](f)};return n?u=>l(Er(t[0],t[s-1],u)):l}function LE(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Do(0,e,i);t.push(it(n,1,r))}}function lw(t){const e=[0];return LE(e,t.length-1),e}function RE(t,e){return t.map(n=>n*e)}function DE(t,e){return t.map(()=>e||tw).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=gE(i)?i.map(K0):K0(i),s={done:!1,value:e[0]},o=RE(n&&n.length===e.length?n:lw(e),t),a=Wm(o,e,{ease:Array.isArray(r)?r:DE(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const J0=2e4;function kE(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<J0;)e+=n,i=t.next(e);return e>=J0?1/0:e}const IE=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ke.update(e,!0),stop:()=>qn(e),now:()=>bt.isProcessing?bt.timestamp:ki.now()}},NE={decay:q0,inertia:q0,tween:Sc,keyframes:Sc,spring:JS},OE=t=>t/100;class Gm extends ZS{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Nm,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=NE[n]||Sc;let l,u;a!==Sc&&typeof e[0]!="number"&&(l=Ii(OE,aw(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=kE(c));const{calculatedDuration:f}=c,d=f+r,m=d*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:d,totalDuration:m}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:S}=this.options;return{done:!0,value:S[S.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:f}=i;if(this.startTime===null)return s.next(0);const{delay:d,repeat:m,repeatType:y,repeatDelay:p,onUpdate:h}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let x=this.currentTime,_=s;if(m){const S=Math.min(this.currentTime,c)/f;let E=Math.floor(S),A=S%1;!A&&S>=1&&(A=1),A===1&&E--,E=Math.min(E,m+1),!!(E%2)&&(y==="reverse"?(A=1-A,p&&(A-=p/f)):y==="mirror"&&(_=o)),x=Er(0,1,A)*f}const w=v?{done:!1,value:l[0]}:_.next(x);a&&(w.value=a(w.value));let{done:b}=w;!v&&u!==null&&(b=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const P=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&b);return P&&r!==void 0&&(w.value=qc(l,this.options,r)),h&&h(w.value),P&&this.finish(),w}get duration(){const{resolved:e}=this;return e?Di(e.calculatedDuration):0}get time(){return Di(this.currentTime)}set time(e){e=Ri(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Di(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=IE,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const uw=new Set(["opacity","clipPath","filter","transform"]),cw=t=>Array.isArray(t)&&typeof t[0]=="number";function fw(t){return!!(!t||typeof t=="string"&&t in jm||cw(t)||Array.isArray(t)&&t.every(fw))}const pa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,jm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:pa([0,.65,.55,1]),circOut:pa([.55,0,1,.45]),backIn:pa([.31,.01,.66,-.59]),backOut:pa([.33,1.53,.69,.99])};function FE(t){return dw(t)||jm.easeOut}function dw(t){if(t)return cw(t)?pa(t):Array.isArray(t)?t.map(FE):jm[t]}function zE(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=dw(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const UE=KS(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),wc=10,VE=2e4;function BE(t){return t.type==="spring"||!fw(t.ease)}function HE(t,e){const n=new Gm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<VE;)i=n.sample(s),r.push(i.value),s+=wc;return{times:void 0,keyframes:r,duration:s-wc,ease:"linear"}}class ev extends ZS{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new YS(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){var i;let{duration:r=300,times:s,ease:o,type:a,motionValue:l,name:u,startTime:c}=this.options;if(!(!((i=l.owner)===null||i===void 0)&&i.current))return!1;if(BE(this.options)){const{onComplete:d,onUpdate:m,motionValue:y,element:p,...h}=this.options,g=HE(e,h);e=g.keyframes,e.length===1&&(e[1]=e[0]),r=g.duration,s=g.times,o=g.ease,a="keyframes"}const f=zE(l.owner.current,u,e,{...this.options,duration:r,times:s,ease:o});return f.startTime=c??this.calcStartTime(),this.pendingTimeline?(f.timeline=this.pendingTimeline,this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:d}=this.options;l.set(qc(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:r,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Di(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Di(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ri(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Dt;const{animation:i}=n;i.timeline=e,i.onfinish=null}return Dt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:f,element:d,...m}=this.options,y=new Gm({...m,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),p=Ri(this.time);u.setWithVelocity(y.sample(p-wc).value,y.sample(p).value,wc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;return UE()&&i&&uw.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}function WE(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return ke.update(i,!0),()=>qn(i)}const GE=KS(()=>window.ScrollTimeline!==void 0);class jE{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e){const n=this.animations.map(i=>{if(GE()&&i.attachTimeline)i.attachTimeline(e);else return i.pause(),WE(r=>{i.time=i.duration*r},e)});return()=>{n.forEach((i,r)=>{i&&i(),this.animations[r].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}const $m=(t,e,n,i={},r,s,o)=>a=>{const l=Dm(i,t)||{},u=l.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Ri(u);let f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-c,onUpdate:m=>{e.set(m),l.onUpdate&&l.onUpdate(m)},onComplete:()=>{a(),l.onComplete&&l.onComplete(),o&&o()},onStop:o,name:t,motionValue:e,element:s?void 0:r};mT(l)||(f={...f,...pT(t,f)}),f.duration&&(f.duration=Ri(f.duration)),f.repeatDelay&&(f.repeatDelay=Ri(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let d=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(f.duration=0,f.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const m=qc(f.keyframes,l);if(m!==void 0)return ke.update(()=>{f.onUpdate(m),f.onComplete()}),new jE([])}return!s&&ev.supports(f)?new ev(f):new Gm(f)},$E=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),XE=t=>$h(t)?t[t.length-1]||0:t;function Yc(t,e){t.indexOf(e)===-1&&t.push(e)}function Kc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Xm{constructor(){this.subscriptions=[]}add(e){return Yc(this.subscriptions,e),()=>Kc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tv=30,qE=t=>!isNaN(parseFloat(t)),Ra={current:void 0};class hw{constructor(e,n={}){this.version="11.5.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=ki.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=ki.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=qE(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Xm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ke.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ra.current&&Ra.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ki.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>tv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,tv);return Um(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function si(t,e){return new hw(t,e)}function YE(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,si(n))}function KE(t,e){const n=Xc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=XE(s[o]);YE(t,o,a)}}const Zc=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),ZE="framerAppearId",pw="data-"+Zc(ZE);function mw(t){return t.props[pw]}function gw(t){if(Nr.has(t))return"transform";if(uw.has(t))return Zc(t)}class QE extends hw{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(e){const n=gw(e);if(!n)return;const i=this.counts.get(n)||0;this.counts.set(n,i+1),i===0&&(this.output.push(n),this.update());let r=!1;return()=>{if(r)return;r=!0;const s=this.counts.get(n)-1;this.counts.set(n,s),s===0&&(Kc(this.output,n),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}const Bt=t=>!!(t&&t.getVelocity);function JE(t){return!!(Bt(t)&&t.add)}function ep(t,e){var n;if(!t.applyWillChange)return;let i=t.getValue("willChange");if(!i&&!(!((n=t.props.style)===null||n===void 0)&&n.willChange)&&(i=new QE("auto"),t.addValue("willChange",i)),JE(i))return i.add(e)}function eC({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function vw(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const f in l){const d=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),m=l[f];if(m===void 0||c&&eC(c,f))continue;const y={delay:n,...Dm(o||{},f)};let p=!1;if(window.MotionHandoffAnimation){const g=mw(t);if(g){const v=window.MotionHandoffAnimation(g,f,ke);v!==null&&(y.startTime=v,p=!0)}}d.start($m(f,d,m,t.shouldReduceMotion&&Nr.has(f)?{type:!1}:y,t,p,ep(t,f)));const h=d.animation;h&&u.push(h)}return a&&Promise.all(u).then(()=>{ke.update(()=>{a&&KE(t,a)})}),u}function tp(t,e,n={}){var i;const r=Xc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(vw(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:f,staggerDirection:d}=s;return tC(t,e,c+u,f,d,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function tC(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(nC).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(tp(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function nC(t,e){return t.sortNodePosition(e)}function iC(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>tp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=tp(t,e,n);else{const r=typeof e=="function"?Xc(t,e,n.custom):e;i=Promise.all(vw(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const rC=[...Lm].reverse(),sC=Lm.length;function oC(t){return e=>Promise.all(e.map(({animation:n,options:i})=>iC(t,n,i)))}function aC(t){let e=oC(t),n=nv(),i=!0;const r=l=>(u,c)=>{var f;const d=Xc(t,c,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(d){const{transition:m,transitionEnd:y,...p}=d;u={...u,...p,...y}}return u};function s(l){e=l(t)}function o(l){const u=t.getProps(),c=t.getVariantContext(!0)||{},f=[],d=new Set;let m={},y=1/0;for(let h=0;h<sC;h++){const g=rC[h],v=n[g],x=u[g]!==void 0?u[g]:c[g],_=tl(x),w=g===l?v.isActive:null;w===!1&&(y=h);let b=x===c[g]&&x!==u[g]&&_;if(b&&i&&t.manuallyAnimateOnMount&&(b=!1),v.protectedKeys={...m},!v.isActive&&w===null||!x&&!v.prevProp||el(x)||typeof x=="boolean")continue;let S=lC(v.prevProp,x)||g===l&&v.isActive&&!b&&_||h>y&&_,E=!1;const A=Array.isArray(x)?x:[x];let U=A.reduce(r(g),{});w===!1&&(U={});const{prevResolvedValues:ne={}}=v,z={...ne,...U},N=V=>{S=!0,d.has(V)&&(E=!0,d.delete(V)),v.needsAnimating[V]=!0;const K=t.getValue(V);K&&(K.liveStyle=!1)};for(const V in z){const K=U[V],Z=ne[V];if(m.hasOwnProperty(V))continue;let R=!1;$h(K)&&$h(Z)?R=!DS(K,Z):R=K!==Z,R?K!=null?N(V):d.add(V):K!==void 0&&d.has(V)?N(V):v.protectedKeys[V]=!0}v.prevProp=x,v.prevResolvedValues=U,v.isActive&&(m={...m,...U}),i&&t.blockInitialAnimation&&(S=!1),S&&(!b||E)&&f.push(...A.map(V=>({animation:V,options:{type:g}})))}if(d.size){const h={};d.forEach(g=>{const v=t.getBaseTarget(g),x=t.getValue(g);x&&(x.liveStyle=!0),h[g]=v??null}),f.push({animation:h})}let p=!!f.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(p=!1),i=!1,p?e(f):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(d=>{var m;return(m=d.animationState)===null||m===void 0?void 0:m.setActive(l,u)}),n[l].isActive=u;const f=o(l);for(const d in n)n[d].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=nv(),i=!0}}}function lC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!DS(e,t):!1}function Ur(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function nv(){return{animate:Ur(!0),whileInView:Ur(),whileHover:Ur(),whileTap:Ur(),whileDrag:Ur(),whileFocus:Ur(),exit:Ur()}}class Or{constructor(e){this.isMounted=!1,this.node=e}update(){}}class uC extends Or{constructor(e){super(e),e.animationState||(e.animationState=aC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();el(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let cC=0;class fC extends Or{constructor(){super(...arguments),this.id=cC++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const dC={animation:{Feature:uC},exit:{Feature:fC}},yw=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Qc(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const hC=t=>e=>yw(e)&&t(e,Qc(e));function Pi(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ni(t,e,n,i){return Pi(t,e,hC(n),i)}const iv=(t,e)=>Math.abs(t-e);function pC(t,e){const n=iv(t.x,e.x),i=iv(t.y,e.y);return Math.sqrt(n**2+i**2)}class xw{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=td(this.lastMoveEventInfo,this.history),d=this.startEvent!==null,m=pC(f.offset,{x:0,y:0})>=3;if(!d&&!m)return;const{point:y}=f,{timestamp:p}=bt;this.history.push({...y,timestamp:p});const{onStart:h,onMove:g}=this.handlers;d||(h&&h(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),g&&g(this.lastMoveEvent,f)},this.handlePointerMove=(f,d)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ed(d,this.transformPagePoint),ke.update(this.updatePoint,!0)},this.handlePointerUp=(f,d)=>{this.end();const{onEnd:m,onSessionEnd:y,resumeAnimation:p}=this.handlers;if(this.dragSnapToOrigin&&p&&p(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=td(f.type==="pointercancel"?this.lastMoveEventInfo:ed(d,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,h),y&&y(f,h)},!yw(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Qc(e),a=ed(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=bt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,td(a,this.history)),this.removeListeners=Ii(Ni(this.contextWindow,"pointermove",this.handlePointerMove),Ni(this.contextWindow,"pointerup",this.handlePointerUp),Ni(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),qn(this.updatePoint)}}function ed(t,e){return e?{point:e(t.point)}:t}function rv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function td({point:t},e){return{point:t,delta:rv(t,_w(e)),offset:rv(t,mC(e)),velocity:gC(e,.1)}}function mC(t){return t[0]}function _w(t){return t[t.length-1]}function gC(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=_w(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ri(e)));)n--;if(!i)return{x:0,y:0};const s=Di(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Sw(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const sv=Sw("dragHorizontal"),ov=Sw("dragVertical");function ww(t){let e=!1;if(t==="y")e=ov();else if(t==="x")e=sv();else{const n=sv(),i=ov();n&&i?e=()=>{n(),i()}:(n&&n(),i&&i())}return e}function Mw(){const t=ww(!0);return t?(t(),!1):!0}function so(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const bw=1e-4,vC=1-bw,yC=1+bw,Tw=.01,xC=0-Tw,_C=0+Tw;function vn(t){return t.max-t.min}function SC(t,e,n){return Math.abs(t-e)<=n}function av(t,e,n,i=.5){t.origin=i,t.originPoint=it(e.min,e.max,t.origin),t.scale=vn(n)/vn(e),t.translate=it(n.min,n.max,t.origin)-t.originPoint,(t.scale>=vC&&t.scale<=yC||isNaN(t.scale))&&(t.scale=1),(t.translate>=xC&&t.translate<=_C||isNaN(t.translate))&&(t.translate=0)}function Da(t,e,n,i){av(t.x,e.x,n.x,i?i.originX:void 0),av(t.y,e.y,n.y,i?i.originY:void 0)}function lv(t,e,n){t.min=n.min+e.min,t.max=t.min+vn(e)}function wC(t,e,n){lv(t.x,e.x,n.x),lv(t.y,e.y,n.y)}function uv(t,e,n){t.min=e.min-n.min,t.max=t.min+vn(e)}function ka(t,e,n){uv(t.x,e.x,n.x),uv(t.y,e.y,n.y)}function MC(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?it(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?it(n,t,i.max):Math.min(t,n)),t}function cv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function bC(t,{top:e,left:n,bottom:i,right:r}){return{x:cv(t.x,n,r),y:cv(t.y,e,i)}}function fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function TC(t,e){return{x:fv(t.x,e.x),y:fv(t.y,e.y)}}function EC(t,e){let n=.5;const i=vn(t),r=vn(e);return r>i?n=Do(e.min,e.max-i,t.min):i>r&&(n=Do(t.min,t.max-r,e.min)),Er(0,1,n)}function CC(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const np=.35;function PC(t=np){return t===!1?t=0:t===!0&&(t=np),{x:dv(t,"left","right"),y:dv(t,"top","bottom")}}function dv(t,e,n){return{min:hv(t,e),max:hv(t,n)}}function hv(t,e){return typeof t=="number"?t:t[e]||0}const pv=()=>({translate:0,scale:1,origin:0,originPoint:0}),oo=()=>({x:pv(),y:pv()}),mv=()=>({min:0,max:0}),ht=()=>({x:mv(),y:mv()});function Tn(t){return[t("x"),t("y")]}function Ew({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function AC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function LC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function nd(t){return t===void 0||t===1}function ip({scale:t,scaleX:e,scaleY:n}){return!nd(t)||!nd(e)||!nd(n)}function $r(t){return ip(t)||Cw(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Cw(t){return gv(t.x)||gv(t.y)}function gv(t){return t&&t!=="0%"}function Mc(t,e,n){const i=t-n,r=e*i;return n+r}function vv(t,e,n,i,r){return r!==void 0&&(t=Mc(t,r,i)),Mc(t,n,i)+e}function rp(t,e=0,n=1,i,r){t.min=vv(t.min,e,n,i,r),t.max=vv(t.max,e,n,i,r)}function Pw(t,{x:e,y:n}){rp(t.x,e.translate,e.scale,e.originPoint),rp(t.y,n.translate,n.scale,n.originPoint)}const yv=.999999999999,xv=1.0000000000001;function RC(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&lo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Pw(t,o)),i&&$r(s.latestValues)&&lo(t,s.latestValues))}e.x<xv&&e.x>yv&&(e.x=1),e.y<xv&&e.y>yv&&(e.y=1)}function ao(t,e){t.min=t.min+e,t.max=t.max+e}function _v(t,e,n,i,r=.5){const s=it(t.min,t.max,r);rp(t,e,n,s,i)}function lo(t,e){_v(t.x,e.x,e.scaleX,e.scale,e.originX),_v(t.y,e.y,e.scaleY,e.scale,e.originY)}function Aw(t,e){return Ew(LC(t.getBoundingClientRect(),e))}function DC(t,e,n){const i=Aw(t,n),{scroll:r}=e;return r&&(ao(i.x,r.offset.x),ao(i.y,r.offset.y)),i}const Lw=({current:t})=>t?t.ownerDocument.defaultView:null,kC=new WeakMap;class IC{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ht(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Qc(c,"page").point)},s=(c,f)=>{var d;const{drag:m,dragPropagation:y,onDragStart:p}=this.getProps();if(m&&!y&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ww(m),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tn(g=>{let v=this.getAxisMotionValue(g).get()||0;if(fi.test(v)){const{projection:x}=this.visualElement;if(x&&x.layout){const _=x.layout.layoutBox[g];_&&(v=vn(_)*(parseFloat(v)/100))}}this.originPoint[g]=v}),p&&ke.postRender(()=>p(c,f)),(d=this.removeWillChange)===null||d===void 0||d.call(this),this.removeWillChange=ep(this.visualElement,"transform");const{animationState:h}=this.visualElement;h&&h.setActive("whileDrag",!0)},o=(c,f)=>{const{dragPropagation:d,dragDirectionLock:m,onDirectionLock:y,onDrag:p}=this.getProps();if(!d&&!this.openGlobalLock)return;const{offset:h}=f;if(m&&this.currentDirection===null){this.currentDirection=NC(h),this.currentDirection!==null&&y&&y(this.currentDirection);return}this.updateAxis("x",f.point,h),this.updateAxis("y",f.point,h),this.visualElement.render(),p&&p(c,f)},a=(c,f)=>this.stop(c,f),l=()=>Tn(c=>{var f;return this.getAnimationState(c)==="paused"&&((f=this.getAxisMotionValue(c).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new xw(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:Lw(this.visualElement)})}stop(e,n){var i;(i=this.removeWillChange)===null||i===void 0||i.call(this);const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:o}=this.getProps();o&&ke.postRender(()=>o(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Zl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=MC(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&so(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=bC(r.layoutBox,n):this.constraints=!1,this.elastic=PC(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Tn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=CC(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!so(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=DC(i,r.root,this.visualElement.getTransformPagePoint());let o=TC(r.layout.layoutBox,s);if(n){const a=n(AC(o));this.hasMutatedConstraints=!!a,a&&(o=Ew(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=Tn(c=>{if(!Zl(c,n,this.currentDirection))return;let f=l&&l[c]||{};o&&(f={min:0,max:0});const d=r?200:1e6,m=r?40:1e7,y={type:"inertia",velocity:i?e[c]:0,bounceStiffness:d,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(c,y)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return i.start($m(e,i,0,n,this.visualElement,!1,ep(this.visualElement,e)))}stopAnimation(){Tn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Tn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Tn(n=>{const{drag:i}=this.getProps();if(!Zl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-it(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!so(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Tn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=EC({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Tn(o=>{if(!Zl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(it(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;kC.set(this.visualElement,this);const e=this.visualElement.current,n=Ni(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();so(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ke.read(i);const o=Pi(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Tn(c=>{const f=this.getAxisMotionValue(c);f&&(this.originPoint[c]+=l[c].translate,f.set(f.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=np,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Zl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function NC(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class OC extends Or{constructor(e){super(e),this.removeGroupControls=Dt,this.removeListeners=Dt,this.controls=new IC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Sv=t=>(e,n)=>{t&&ke.postRender(()=>t(e,n))};class FC extends Or{constructor(){super(...arguments),this.removePointerDownListener=Dt}onPointerDown(e){this.session=new xw(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Lw(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Sv(e),onStart:Sv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ke.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ni(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Jc=ee.createContext(null);function zC(){const t=ee.useContext(Jc);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:i}=t,r=ee.useId();ee.useEffect(()=>i(r),[]);const s=ee.useCallback(()=>n&&n(r),[r,n]);return!e&&n?[!1,s]:[!0]}const qm=ee.createContext({}),Rw=ee.createContext({}),Bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function wv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const sa={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ye.test(t))t=parseFloat(t);else return t;const n=wv(t,e.target.x),i=wv(t,e.target.y);return`${n}% ${i}%`}},UC={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Cr.parse(t);if(r.length>5)return i;const s=Cr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=it(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}},bc={};function VC(t){Object.assign(bc,t)}const{schedule:Ym,cancel:jz}=kS(queueMicrotask,!1);class BC extends ee.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;VC(HC),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ke.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ym.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Dw(t){const[e,n]=zC(),i=ee.useContext(qm);return B.jsx(BC,{...t,layoutGroup:i,switchLayoutGroup:ee.useContext(Rw),isPresent:e,safeToRemove:n})}const HC={borderRadius:{...sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:sa,borderTopRightRadius:sa,borderBottomLeftRadius:sa,borderBottomRightRadius:sa,boxShadow:UC},kw=["TopLeft","TopRight","BottomLeft","BottomRight"],WC=kw.length,Mv=t=>typeof t=="string"?parseFloat(t):t,bv=t=>typeof t=="number"||ye.test(t);function GC(t,e,n,i,r,s){r?(t.opacity=it(0,n.opacity!==void 0?n.opacity:1,jC(i)),t.opacityExit=it(e.opacity!==void 0?e.opacity:1,0,$C(i))):s&&(t.opacity=it(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<WC;o++){const a=`border${kw[o]}Radius`;let l=Tv(e,a),u=Tv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||bv(l)===bv(u)?(t[a]=Math.max(it(Mv(l),Mv(u),i),0),(fi.test(u)||fi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=it(e.rotate||0,n.rotate||0,i))}function Tv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const jC=Iw(0,.5,rw),$C=Iw(.5,.95,Dt);function Iw(t,e,n){return i=>i<t?0:i>e?1:n(Do(t,e,i))}function Ev(t,e){t.min=e.min,t.max=e.max}function Mn(t,e){Ev(t.x,e.x),Ev(t.y,e.y)}function Cv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Pv(t,e,n,i,r){return t-=e,t=Mc(t,1/n,i),r!==void 0&&(t=Mc(t,1/r,i)),t}function XC(t,e=0,n=1,i=.5,r,s=t,o=t){if(fi.test(e)&&(e=parseFloat(e),e=it(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=it(s.min,s.max,i);t===s&&(a-=e),t.min=Pv(t.min,e,n,a,r),t.max=Pv(t.max,e,n,a,r)}function Av(t,e,[n,i,r],s,o){XC(t,e[n],e[i],e[r],e.scale,s,o)}const qC=["x","scaleX","originX"],YC=["y","scaleY","originY"];function Lv(t,e,n,i){Av(t.x,e,qC,n?n.x:void 0,i?i.x:void 0),Av(t.y,e,YC,n?n.y:void 0,i?i.y:void 0)}function Rv(t){return t.translate===0&&t.scale===1}function Nw(t){return Rv(t.x)&&Rv(t.y)}function Dv(t,e){return t.min===e.min&&t.max===e.max}function KC(t,e){return Dv(t.x,e.x)&&Dv(t.y,e.y)}function kv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function Ow(t,e){return kv(t.x,e.x)&&kv(t.y,e.y)}function Iv(t){return vn(t.x)/vn(t.y)}function Nv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ZC{constructor(){this.members=[]}add(e){Yc(this.members,e),e.scheduleRender()}remove(e){if(Kc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function QC(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:f,rotateY:d,skewX:m,skewY:y}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),f&&(i+=`rotateX(${f}deg) `),d&&(i+=`rotateY(${d}deg) `),m&&(i+=`skewX(${m}deg) `),y&&(i+=`skewY(${y}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const JC=(t,e)=>t.depth-e.depth;class eP{constructor(){this.children=[],this.isDirty=!1}add(e){Yc(this.children,e),this.isDirty=!0}remove(e){Kc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JC),this.isDirty=!1,this.children.forEach(e)}}function Hu(t){const e=Bt(t)?t.get():t;return $E(e)?e.toValue():e}function tP(t,e){const n=ki.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(qn(i),t(s-e))};return ke.read(i,!0),()=>qn(i)}function nP(t){return t instanceof SVGElement&&t.tagName!=="svg"}function iP(t,e,n){const i=Bt(t)?t:si(t);return i.start($m("",i,e,n)),i.animation}const Xr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ma=typeof window<"u"&&window.MotionDebug!==void 0,id=["","X","Y","Z"],rP={visibility:"hidden"},Ov=1e3;let sP=0;function rd(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function Fw(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=mw(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ke,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&Fw(i)}function zw({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=sP++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ma&&(Xr.totalNodes=Xr.resolvedTargetDeltas=Xr.recalculatedProjection=0),this.nodes.forEach(lP),this.nodes.forEach(hP),this.nodes.forEach(pP),this.nodes.forEach(uP),ma&&window.MotionDebug.record(Xr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new eP)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Xm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=nP(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let f;const d=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=tP(d,250),Bu.hasAnimatedSinceResize&&(Bu.hasAnimatedSinceResize=!1,this.nodes.forEach(zv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:d,hasRelativeTargetChanged:m,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||c.getDefaultTransition()||xP,{onLayoutAnimationStart:h,onLayoutAnimationComplete:g}=c.getProps(),v=!this.targetLayout||!Ow(this.targetLayout,y)||m,x=!d&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||d&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const _={...Dm(p,"layout"),onPlay:h,onComplete:g};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else d||zv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,qn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mP),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Fw(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const f=this.path[c];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fv);return}this.isUpdating||this.nodes.forEach(fP),this.isUpdating=!1,this.nodes.forEach(dP),this.nodes.forEach(oP),this.nodes.forEach(aP),this.clearAllSnapshots();const a=ki.now();bt.delta=Er(0,1e3/60,a-bt.timestamp),bt.timestamp=a,bt.isProcessing=!0,Yf.update.process(bt),Yf.preRender.process(bt),Yf.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ym.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cP),this.sharedNodes.forEach(gP)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ke.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ke.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ht(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Nw(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||$r(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),_P(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return ht();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(SP))){const{scroll:c}=this.root;c&&(ao(l.x,c.offset.x),ao(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=ht();if(Mn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:f,options:d}=c;c!==this.root&&f&&d.layoutScroll&&(f.wasRoot&&Mn(l,o),ao(l.x,f.offset.x),ao(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=ht();Mn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&lo(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),$r(c.latestValues)&&lo(l,c.latestValues)}return $r(this.latestValues)&&lo(l,this.latestValues),l}removeTransform(o){const a=ht();Mn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!$r(u.latestValues))continue;ip(u.latestValues)&&u.updateSnapshot();const c=ht(),f=u.measurePageBox();Mn(c,f),Lv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return $r(this.latestValues)&&Lv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:d}=this.options;if(!(!this.layout||!(f||d))){if(this.resolvedRelativeTargetAt=bt.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),ka(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),Mn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ht(),this.targetWithTransforms=ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wC(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Mn(this.target,this.layout.layoutBox),Pw(this.target,this.targetDelta)):Mn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),ka(this.relativeTargetOrigin,this.target,m.target),Mn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ma&&Xr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||ip(this.parent.latestValues)||Cw(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;Mn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,m=this.treeScale.y;RC(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ht());const{target:y}=a;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cv(this.prevProjectionDelta.x,this.projectionDelta.x),Cv(this.prevProjectionDelta.y,this.projectionDelta.y)),Da(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==m||!Nv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Nv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y)),ma&&Xr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=oo(),this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},f=oo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const d=ht(),m=l?l.source:void 0,y=this.layout?this.layout.source:void 0,p=m!==y,h=this.getStack(),g=!h||h.members.length<=1,v=!!(p&&!g&&this.options.crossfade===!0&&!this.path.some(yP));this.animationProgress=0;let x;this.mixTargetDelta=_=>{const w=_/1e3;Uv(f.x,o.x,w),Uv(f.y,o.y,w),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ka(d,this.layout.layoutBox,this.relativeParent.layout.layoutBox),vP(this.relativeTarget,this.relativeTargetOrigin,d,w),x&&KC(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=ht()),Mn(x,this.relativeTarget)),p&&(this.animationValues=c,GC(c,u,this.latestValues,w,v,g)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(qn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ke.update(()=>{Bu.hasAnimatedSinceResize=!0,this.currentAnimation=iP(0,Ov,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ov),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&Uw(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ht();const f=vn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const d=vn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+d}Mn(a,l),lo(a,c),Da(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ZC),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&rd("z",o,u,this.animationValues);for(let c=0;c<id.length;c++)rd(`rotate${id[c]}`,o,u,this.animationValues),rd(`skew${id[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return rP;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Hu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const p={};return this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Hu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(p.transform=c?c({},""):"none",this.hasProjected=!1),p}const d=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=QC(this.projectionDeltaWithTransform,this.treeScale,d),c&&(u.transform=c(d,u.transform));const{x:m,y}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${y.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(a=d.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:u.opacity=f===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const p in bc){if(d[p]===void 0)continue;const{correct:h,applyTo:g}=bc[p],v=u.transform==="none"?d[p]:h(d[p],f);if(g){const x=g.length;for(let _=0;_<x;_++)u[g[_]]=v}else u[p]=v}return this.options.layoutId&&(u.pointerEvents=f===this?Hu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Fv),this.root.sharedNodes.clear()}}}function oP(t){t.updateLayout()}function aP(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Tn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],m=vn(d);d.min=i[f].min,d.max=d.min+m}):Uw(s,n.layoutBox,i)&&Tn(f=>{const d=o?n.measuredBox[f]:n.layoutBox[f],m=vn(i[f]);d.max=d.min+m,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+m)});const a=oo();Da(a,i,n.layoutBox);const l=oo();o?Da(l,t.applyTransform(r,!0),n.measuredBox):Da(l,i,n.layoutBox);const u=!Nw(a);let c=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:d,layout:m}=f;if(d&&m){const y=ht();ka(y,n.layoutBox,d.layoutBox);const p=ht();ka(p,i,m.layoutBox),Ow(y,p)||(c=!0),f.options.layoutRoot&&(t.relativeTarget=p,t.relativeTargetOrigin=y,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function lP(t){ma&&Xr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function uP(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function cP(t){t.clearSnapshot()}function Fv(t){t.clearMeasurements()}function fP(t){t.isLayoutDirty=!1}function dP(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function zv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function hP(t){t.resolveTargetDelta()}function pP(t){t.calcProjection()}function mP(t){t.resetSkewAndRotation()}function gP(t){t.removeLeadSnapshot()}function Uv(t,e,n){t.translate=it(e.translate,0,n),t.scale=it(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Vv(t,e,n,i){t.min=it(e.min,n.min,i),t.max=it(e.max,n.max,i)}function vP(t,e,n,i){Vv(t.x,e.x,n.x,i),Vv(t.y,e.y,n.y,i)}function yP(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const xP={duration:.45,ease:[.4,0,.1,1]},Bv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Hv=Bv("applewebkit/")&&!Bv("chrome/")?Math.round:Dt;function Wv(t){t.min=Hv(t.min),t.max=Hv(t.max)}function _P(t){Wv(t.x),Wv(t.y)}function Uw(t,e,n){return t==="position"||t==="preserve-aspect"&&!SC(Iv(e),Iv(n),.2)}function SP(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const wP=zw({attachResizeListener:(t,e)=>Pi(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),sd={current:void 0},Vw=zw({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!sd.current){const t=new wP({});t.mount(window),t.setOptions({layoutScroll:!0}),sd.current=t}return sd.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),MP={pan:{Feature:FC},drag:{Feature:OC,ProjectionNode:Vw,MeasureLayout:Dw}};function Gv(t,e){const n=e?"pointerenter":"pointerleave",i=e?"onHoverStart":"onHoverEnd",r=(s,o)=>{if(s.pointerType==="touch"||Mw())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[i];l&&ke.postRender(()=>l(s,o))};return Ni(t.current,n,r,{passive:!t.getProps()[i]})}class bP extends Or{mount(){this.unmount=Ii(Gv(this.node,!0),Gv(this.node,!1))}unmount(){}}class TP extends Or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ii(Pi(this.node.current,"focus",()=>this.onFocus()),Pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Bw=(t,e)=>e?t===e?!0:Bw(t,e.parentElement):!1;function od(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Qc(n))}class EP extends Or{constructor(){super(...arguments),this.removeStartListeners=Dt,this.removeEndListeners=Dt,this.removeAccessibleListeners=Dt,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),s=Ni(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:c,globalTapTarget:f}=this.node.getProps(),d=!f&&!Bw(this.node.current,a.target)?c:u;d&&ke.update(()=>d(a,l))},{passive:!(i.onTap||i.onPointerUp)}),o=Ni(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=Ii(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||od("up",(l,u)=>{const{onTap:c}=this.node.getProps();c&&ke.postRender(()=>c(l,u))})};this.removeEndListeners(),this.removeEndListeners=Pi(this.node.current,"keyup",o),od("down",(a,l)=>{this.startPress(a,l)})},n=Pi(this.node.current,"keydown",e),i=()=>{this.isPressing&&od("cancel",(s,o)=>this.cancelPress(s,o))},r=Pi(this.node.current,"blur",i);this.removeAccessibleListeners=Ii(n,r)}}startPress(e,n){this.isPressing=!0;const{onTapStart:i,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&ke.postRender(()=>i(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Mw()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&ke.postRender(()=>i(e,n))}mount(){const e=this.node.getProps(),n=Ni(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),i=Pi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Ii(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const sp=new WeakMap,ad=new WeakMap,CP=t=>{const e=sp.get(t.target);e&&e(t)},PP=t=>{t.forEach(CP)};function AP({root:t,...e}){const n=t||document;ad.has(n)||ad.set(n,{});const i=ad.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(PP,{root:t,...e})),i[r]}function LP(t,e,n){const i=AP(e);return sp.set(t,n),i.observe(t),()=>{sp.delete(t),i.unobserve(t)}}const RP={some:0,all:1};class DP extends Or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:RP[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:f}=this.node.getProps(),d=u?c:f;d&&d(l)};return LP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(kP(e,n))&&this.startObserver()}unmount(){}}function kP({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const IP={inView:{Feature:DP},tap:{Feature:EP},focus:{Feature:TP},hover:{Feature:bP}},NP={layout:{ProjectionNode:Vw,MeasureLayout:Dw}},ef=ee.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),tf=ee.createContext({}),Km=typeof window<"u",nf=Km?ee.useLayoutEffect:ee.useEffect,Hw=ee.createContext({strict:!1});let jv=!1;function OP(t,e,n,i,r){var s;const{visualElement:o}=ee.useContext(tf),a=ee.useContext(Hw),l=ee.useContext(Jc),u=ee.useContext(ef).reducedMotion,c=ee.useRef();i=i||a.renderer,!c.current&&i&&(c.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u}));const f=c.current,d=ee.useContext(Rw);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&zP(c.current,n,r,d),ee.useInsertionEffect(()=>{f&&f.update(n,l)});const m=n[pw],y=ee.useRef(!!m&&!window.MotionHandoffIsComplete&&((s=window.MotionHasOptimisedAnimation)===null||s===void 0?void 0:s.call(window,m)));return nf(()=>{f&&(f.updateFeatures(),Ym.render(f.render),y.current&&f.animationState&&f.animationState.animateChanges())}),ee.useEffect(()=>{f&&(!y.current&&f.animationState&&f.animationState.animateChanges(),y.current=!1,jv||(jv=!0,queueMicrotask(FP)))}),f}function FP(){window.MotionHandoffIsComplete=!0}function zP(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Ww(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&so(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function Ww(t){if(t)return t.options.allowProjection!==!1?t.projection:Ww(t.parent)}function UP(t,e,n){return ee.useCallback(i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):so(n)&&(n.current=i))},[e])}function rf(t){return el(t.animate)||Rm.some(e=>tl(t[e]))}function Gw(t){return!!(rf(t)||t.variants)}function VP(t,e){if(rf(t)){const{initial:n,animate:i}=t;return{initial:n===!1||tl(n)?n:void 0,animate:tl(i)?i:void 0}}return t.inherit!==!1?e:{}}function BP(t){const{initial:e,animate:n}=VP(t,ee.useContext(tf));return ee.useMemo(()=>({initial:e,animate:n}),[$v(e),$v(n)])}function $v(t){return Array.isArray(t)?t.join(" "):t}const Xv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},ko={};for(const t in Xv)ko[t]={isEnabled:e=>Xv[t].some(n=>!!e[n])};function HP(t){for(const e in t)ko[e]={...ko[e],...t[e]}}const WP=Symbol.for("motionComponentSymbol");function GP({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){t&&HP(t);function s(a,l){let u;const c={...ee.useContext(ef),...a,layoutId:jP(a)},{isStatic:f}=c,d=BP(a),m=i(a,f);if(!f&&Km){$P();const y=XP(c);u=y.MeasureLayout,d.visualElement=OP(r,m,c,e,y.ProjectionNode)}return B.jsxs(tf.Provider,{value:d,children:[u&&d.visualElement?B.jsx(u,{visualElement:d.visualElement,...c}):null,n(r,a,UP(m,d.visualElement,l),m,f,d.visualElement)]})}const o=ee.forwardRef(s);return o[WP]=r,o}function jP({layoutId:t}){const e=ee.useContext(qm).id;return e&&t!==void 0?e+"-"+t:t}function $P(t,e){ee.useContext(Hw).strict}function XP(t){const{drag:e,layout:n}=ko;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const qP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zm(t){return typeof t!="string"||t.includes("-")?!1:!!(qP.indexOf(t)>-1||/[A-Z]/u.test(t))}function jw(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const $w=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Xw(t,e,n,i){jw(t,e,void 0,i);for(const r in e.attrs)t.setAttribute($w.has(r)?r:Zc(r),e.attrs[r])}function qw(t,{layout:e,layoutId:n}){return Nr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!bc[t]||t==="opacity")}function Qm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Bt(r[o])||e.style&&Bt(e.style[o])||qw(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return n&&r&&typeof r.willChange=="string"&&(n.applyWillChange=!1),s}function Yw(t,e,n){const i=Qm(t,e,n);for(const r in t)if(Bt(t[r])||Bt(e[r])){const s=fl.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function jo(t){const e=ee.useRef(null);return e.current===null&&(e.current=t()),e.current}function YP({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:n,onMount:i},r,s,o,a){const l={latestValues:ZP(r,s,o,a?!1:t,e),renderState:n()};return i&&(l.mount=u=>i(r,u,l)),l}const Kw=t=>(e,n)=>{const i=ee.useContext(tf),r=ee.useContext(Jc),s=()=>YP(t,e,i,r,n);return n?s():jo(s)};function KP(t,e){const n=gw(e);n&&Yc(t,n)}function qv(t,e,n){const i=Array.isArray(e)?e:[e];for(let r=0;r<i.length;r++){const s=Am(t,i[r]);if(s){const{transitionEnd:o,transition:a,...l}=s;n(l,o)}}}function ZP(t,e,n,i,r){var s;const o={},a=[],l=i&&((s=t.style)===null||s===void 0?void 0:s.willChange)===void 0,u=r(t,{});for(const h in u)o[h]=Hu(u[h]);let{initial:c,animate:f}=t;const d=rf(t),m=Gw(t);e&&m&&!d&&t.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let y=n?n.initial===!1:!1;y=y||c===!1;const p=y?f:c;return p&&typeof p!="boolean"&&!el(p)&&qv(t,p,(h,g)=>{for(const v in h){let x=h[v];if(Array.isArray(x)){const _=y?x.length-1:0;x=x[_]}x!==null&&(o[v]=x)}for(const v in g)o[v]=g[v]}),l&&(f&&c!==!1&&!el(f)&&qv(t,f,h=>{for(const g in h)KP(a,g)}),a.length&&(o.willChange=a.join(","))),o}const Jm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Zw=()=>({...Jm(),attrs:{}}),Qw=(t,e)=>e&&typeof t=="number"?e.transform(t):t,QP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},JP=fl.length;function eA(t,e,n){let i="",r=!0;for(let s=0;s<JP;s++){const o=fl[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=Qw(a,Fm[o]);if(!l){r=!1;const c=QP[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function eg(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(Nr.has(l)){o=!0;continue}else if(FS(l)){r[l]=u;continue}else{const c=Qw(u,Fm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=eA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}function Yv(t,e,n){return typeof t=="string"?t:ye.transform(e+n*t)}function tA(t,e,n){const i=Yv(e,t.x,t.width),r=Yv(n,t.y,t.height);return`${i} ${r}`}const nA={offset:"stroke-dashoffset",array:"stroke-dasharray"},iA={offset:"strokeDashoffset",array:"strokeDasharray"};function rA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?nA:iA;t[s.offset]=ye.transform(-i);const o=ye.transform(e),a=ye.transform(n);t[s.array]=`${o} ${a}`}function tg(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,f){if(eg(t,u,f),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:m,dimensions:y}=t;d.transform&&(y&&(m.transform=d.transform),delete d.transform),y&&(r!==void 0||s!==void 0||m.transform)&&(m.transformOrigin=tA(y,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),o!==void 0&&rA(d,o,a,l,!1)}const ng=t=>typeof t=="string"&&t.toLowerCase()==="svg",sA={useVisualState:Kw({scrapeMotionValuesFromProps:Yw,createRenderState:Zw,onMount:(t,e,{renderState:n,latestValues:i})=>{ke.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ke.render(()=>{tg(n,i,ng(e.tagName),t.transformTemplate),Xw(e,n)})}})},oA={useVisualState:Kw({applyWillChange:!0,scrapeMotionValuesFromProps:Qm,createRenderState:Jm})};function Jw(t,e,n){for(const i in e)!Bt(e[i])&&!qw(i,n)&&(t[i]=e[i])}function aA({transformTemplate:t},e){return ee.useMemo(()=>{const n=Jm();return eg(n,e,t),Object.assign({},n.vars,n.style)},[e])}function lA(t,e){const n=t.style||{},i={};return Jw(i,n,t),Object.assign(i,aA(t,e)),i}function uA(t,e){const n={},i=lA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const cA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Tc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||cA.has(t)}let eM=t=>!Tc(t);function fA(t){t&&(eM=e=>e.startsWith("on")?!Tc(e):t(e))}try{fA(require("@emotion/is-prop-valid").default)}catch{}function dA(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(eM(r)||n===!0&&Tc(r)||!e&&!Tc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function hA(t,e,n,i){const r=ee.useMemo(()=>{const s=Zw();return tg(s,e,ng(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Jw(s,t.style,t),r.style={...s,...r.style}}return r}function pA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Zm(n)?hA:uA)(i,s,o,n),u=dA(i,typeof n=="string",t),c=n!==ee.Fragment?{...u,...l,ref:r}:{},{children:f}=i,d=ee.useMemo(()=>Bt(f)?f.get():f,[f]);return ee.createElement(n,{...c,children:d})}}function mA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Zm(i)?sA:oA,preloadedFeatures:t,useRender:pA(r),createVisualElement:e,Component:i};return GP(o)}}const op={current:null},tM={current:!1};function gA(){if(tM.current=!0,!!Km)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>op.current=t.matches;t.addListener(e),e()}else op.current=!1}function vA(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Bt(r))t.addValue(i,r);else if(Bt(s))t.addValue(i,si(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,si(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Kv=new WeakMap,yA=[...VS,Ut,Cr],xA=t=>yA.find(US(t)),Zv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],_A=Rm.length;class SA{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.applyWillChange=!1,this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Nm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,ke.render(this.render,!1,!0))};const{latestValues:l,renderState:u}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=rf(n),this.isVariantNode=Gw(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:c,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in f){const m=f[d];l[d]!==void 0&&Bt(m)&&m.set(l[d],!1)}}mount(e){this.current=e,Kv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),tM.current||gA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:op.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Kv.delete(this.current),this.projection&&this.projection.unmount(),qn(this.notifyUpdate),qn(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Nr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ke.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ko){const n=ko[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ht()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Zv.length;i++){const r=Zv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=vA(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(e=!1){if(e)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const i=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(i.initial=this.props.initial),i}const n={};for(let i=0;i<_A;i++){const r=Rm[i],s=this.props[r];(tl(s)||s===!1)&&(n[r]=s)}return n}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=si(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(NS(r)||IS(r))?r=parseFloat(r):!xA(r)&&Cr.test(n)&&(r=qS(e,n)),this.setBaseTarget(e,Bt(r)?r.get():r)),Bt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Am(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Bt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Xm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class nM extends SA{constructor(){super(...arguments),this.KeyframeResolver=YS}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}}function wA(t){return window.getComputedStyle(t)}class MA extends nM{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=jw}readValueFromInstance(e,n){if(Nr.has(n)){const i=zm(n);return i&&i.default||0}else{const i=wA(e),r=(FS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Aw(e,n)}build(e,n,i){eg(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Qm(e,n,i)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Bt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class bA extends nM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ht}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Nr.has(n)){const i=zm(n);return i&&i.default||0}return n=$w.has(n)?n:Zc(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return Yw(e,n,i)}build(e,n,i){tg(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){Xw(e,n,i,r)}mount(e){this.isSVGTag=ng(e.tagName),super.mount(e)}}const TA=(t,e)=>Zm(t)?new bA(e):new MA(e,{allowProjection:t!==ee.Fragment}),EA=mA({...dC,...IP,...MP,...NP},TA),Re=uT(EA);class CA extends ee.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PA({children:t,isPresent:e}){const n=ee.useId(),i=ee.useRef(null),r=ee.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=ee.useContext(ef);return ee.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),B.jsx(CA,{isPresent:e,childRef:i,sizeRef:r,children:ee.cloneElement(t,{ref:i})})}const AA=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=jo(LA),l=ee.useId(),u=ee.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:c=>{a.set(c,!0);for(const f of a.values())if(!f)return;i&&i()},register:c=>(a.set(c,!1),()=>a.delete(c))}),s?[Math.random()]:[n]);return ee.useMemo(()=>{a.forEach((c,f)=>a.set(f,!1))},[n]),ee.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=B.jsx(PA,{isPresent:n,children:t})),B.jsx(Jc.Provider,{value:u,children:t})};function LA(){return new Map}const Ql=t=>t.key||"";function Qv(t){const e=[];return ee.Children.forEach(t,n=>{ee.isValidElement(n)&&e.push(n)}),e}const ig=({children:t,exitBeforeEnter:e,custom:n,initial:i=!0,onExitComplete:r,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=ee.useMemo(()=>Qv(t),[t]),l=a.map(Ql),u=ee.useRef(!0),c=ee.useRef(a),f=jo(()=>new Map),[d,m]=ee.useState(a),[y,p]=ee.useState(a);nf(()=>{u.current=!1,c.current=a;for(let v=0;v<y.length;v++){const x=Ql(y[v]);l.includes(x)?f.delete(x):f.get(x)!==!0&&f.set(x,!1)}},[y,l.length,l.join("-")]);const h=[];if(a!==d){let v=[...a];for(let x=0;x<y.length;x++){const _=y[x],w=Ql(_);l.includes(w)||(v.splice(x,0,_),h.push(_))}o==="wait"&&h.length&&(v=h),p(Qv(v)),m(a);return}const{forceRender:g}=ee.useContext(qm);return B.jsx(B.Fragment,{children:y.map(v=>{const x=Ql(v),_=a===y||l.includes(x),w=()=>{if(f.has(x))f.set(x,!0);else return;let b=!0;f.forEach(P=>{P||(b=!1)}),b&&(g==null||g(),p(c.current),r&&r())};return B.jsx(AA,{isPresent:_,initial:!u.current||i?void 0:!1,custom:_?void 0:n,presenceAffectsLayout:s,mode:o,onExitComplete:_?void 0:w,children:v},x)})})};function RA(t){const e=jo(()=>si(t)),{isStatic:n}=ee.useContext(ef);if(n){const[,i]=ee.useState(t);ee.useEffect(()=>e.on("change",i),[])}return e}function iM(t,e){const n=RA(e()),i=()=>n.set(e());return i(),nf(()=>{const r=()=>ke.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),qn(i)}}),n}const DA=t=>t&&typeof t=="object"&&t.mix,kA=t=>DA(t)?t.mix:void 0;function IA(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=Wm(r,s,{mixer:kA(s[0]),...o});return e?a(i):a}function NA(t){Ra.current=[],t();const e=iM(Ra.current,t);return Ra.current=void 0,e}function OA(t,e,n,i){if(typeof t=="function")return NA(t);const r=typeof e=="function"?e:IA(e,n,i);return Array.isArray(t)?Jv(t,r):Jv([t],([s])=>r(s))}function Jv(t,e){const n=jo(()=>[]);return iM(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function FA(t,e,n){return typeof t=="string"?t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Wu=new WeakMap;let sr;function zA(t,e){if(e){const{inlineSize:n,blockSize:i}=e[0];return{width:n,height:i}}else return t instanceof SVGElement&&"getBBox"in t?t.getBBox():{width:t.offsetWidth,height:t.offsetHeight}}function UA({target:t,contentRect:e,borderBoxSize:n}){var i;(i=Wu.get(t))===null||i===void 0||i.forEach(r=>{r({target:t,contentSize:e,get size(){return zA(t,n)}})})}function VA(t){t.forEach(UA)}function BA(){typeof ResizeObserver>"u"||(sr=new ResizeObserver(VA))}function HA(t,e){sr||BA();const n=FA(t);return n.forEach(i=>{let r=Wu.get(i);r||(r=new Set,Wu.set(i,r)),r.add(e),sr==null||sr.observe(i)}),()=>{n.forEach(i=>{const r=Wu.get(i);r==null||r.delete(e),r!=null&&r.size||sr==null||sr.unobserve(i)})}}const Gu=new Set;let Ia;function WA(){Ia=()=>{const t={width:window.innerWidth,height:window.innerHeight},e={target:window,size:t,contentSize:t};Gu.forEach(n=>n(e))},window.addEventListener("resize",Ia)}function GA(t){return Gu.add(t),Ia||WA(),()=>{Gu.delete(t),!Gu.size&&Ia&&(Ia=void 0)}}function jA(t,e){return typeof t=="function"?GA(t):HA(t,e)}const $A=50,ey=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),XA=()=>({time:0,x:ey(),y:ey()}),qA={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ty(t,e,n,i){const r=n[e],{length:s,position:o}=qA[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=Do(0,r.scrollLength,r.current);const u=i-l;r.velocity=u>$A?0:Um(r.current-a,u)}function YA(t,e,n){ty(t,"x",e,n),ty(t,"y",e,n),e.time=n}function KA(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const ZA={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},ap={start:0,center:.5,end:1};function ny(t,e,n=0){let i=0;if(t in ap&&(t=ap[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const QA=[0,0];function JA(t,e,n,i){let r=Array.isArray(t)?t:QA,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,ap[t]?t:"0"]),s=ny(r[0],n,i),o=ny(r[1],e),s-o}const eL={x:0,y:0};function tL(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function nL(t,e,n){const{offset:i=ZA.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?KA(r,t):eL,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:tL(r),u={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let c=!e[s].interpolate;const f=i.length;for(let d=0;d<f;d++){const m=JA(i[d],u[o],l[o],a[s]);!c&&m!==e[s].interpolatorOffsets[d]&&(c=!0),e[s].offset[d]=m}c&&(e[s].interpolate=Wm(e[s].offset,lw(i)),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=e[s].interpolate(e[s].current)}function iL(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function rL(t,e,n,i={}){return{measure:()=>iL(t,i.target,n),update:r=>{YA(t,n,r),(i.offset||i.target)&&nL(t,n,i)},notify:()=>e(n)}}const oa=new WeakMap,iy=new WeakMap,ld=new WeakMap,ry=t=>t===document.documentElement?window:t;function sL(t,{container:e=document.documentElement,...n}={}){let i=ld.get(e);i||(i=new Set,ld.set(e,i));const r=XA(),s=rL(e,t,r,n);if(i.add(s),!oa.has(e)){const a=()=>{for(const d of i)d.measure()},l=()=>{for(const d of i)d.update(bt.timestamp)},u=()=>{for(const d of i)d.notify()},c=()=>{ke.read(a,!1,!0),ke.read(l,!1,!0),ke.update(u,!1,!0)};oa.set(e,c);const f=ry(e);window.addEventListener("resize",c,{passive:!0}),e!==document.documentElement&&iy.set(e,jA(e,c)),f.addEventListener("scroll",c,{passive:!0})}const o=oa.get(e);return ke.read(o,!1,!0),()=>{var a;qn(o);const l=ld.get(e);if(!l||(l.delete(s),l.size))return;const u=oa.get(e);oa.delete(e),u&&(ry(e).removeEventListener("scroll",u),(a=iy.get(e))===null||a===void 0||a(),window.removeEventListener("resize",u))}}function sy(t,e){ST(!!(!e||e.current))}const oL=()=>({scrollX:si(0),scrollY:si(0),scrollXProgress:si(0),scrollYProgress:si(0)});function rM({container:t,target:e,layoutEffect:n=!0,...i}={}){const r=jo(oL);return(n?nf:ee.useEffect)(()=>(sy("target",e),sy("container",t),sL(({x:o,y:a})=>{r.scrollX.set(o.current),r.scrollXProgress.set(o.progress),r.scrollY.set(a.current),r.scrollYProgress.set(a.progress)},{...i,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0})),[t,e,JSON.stringify(i.offset)]),r}const aL=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function lL(...t){const e=ee.useRef(0),[n,i]=ee.useState(t[e.current]),r=ee.useCallback(s=>{e.current=typeof s!="number"?aL(0,t.length,e.current+1):s,i(t[e.current])},[t.length,...t]);return[n,r]}function uL(){const{scrollYProgress:t}=rM();return B.jsx(B.Fragment,{children:B.jsx(Re.div,{className:"progress-bar",style:{scaleX:t}})})}var ut={},rg={},ml={},gl={},sM="Expected a function",oy=NaN,cL="[object Symbol]",fL=/^\s+|\s+$/g,dL=/^[-+]0x[0-9a-f]+$/i,hL=/^0b[01]+$/i,pL=/^0o[0-7]+$/i,mL=parseInt,gL=typeof Rl=="object"&&Rl&&Rl.Object===Object&&Rl,vL=typeof self=="object"&&self&&self.Object===Object&&self,yL=gL||vL||Function("return this")(),xL=Object.prototype,_L=xL.toString,SL=Math.max,wL=Math.min,ud=function(){return yL.Date.now()};function ML(t,e,n){var i,r,s,o,a,l,u=0,c=!1,f=!1,d=!0;if(typeof t!="function")throw new TypeError(sM);e=ay(e)||0,Ec(n)&&(c=!!n.leading,f="maxWait"in n,s=f?SL(ay(n.maxWait)||0,e):s,d="trailing"in n?!!n.trailing:d);function m(b){var P=i,S=r;return i=r=void 0,u=b,o=t.apply(S,P),o}function y(b){return u=b,a=setTimeout(g,e),c?m(b):o}function p(b){var P=b-l,S=b-u,E=e-P;return f?wL(E,s-S):E}function h(b){var P=b-l,S=b-u;return l===void 0||P>=e||P<0||f&&S>=s}function g(){var b=ud();if(h(b))return v(b);a=setTimeout(g,p(b))}function v(b){return a=void 0,d&&i?m(b):(i=r=void 0,o)}function x(){a!==void 0&&clearTimeout(a),u=0,i=l=r=a=void 0}function _(){return a===void 0?o:v(ud())}function w(){var b=ud(),P=h(b);if(i=arguments,r=this,l=b,P){if(a===void 0)return y(l);if(f)return a=setTimeout(g,e),m(l)}return a===void 0&&(a=setTimeout(g,e)),o}return w.cancel=x,w.flush=_,w}function bL(t,e,n){var i=!0,r=!0;if(typeof t!="function")throw new TypeError(sM);return Ec(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),ML(t,e,{leading:i,maxWait:e,trailing:r})}function Ec(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function TL(t){return!!t&&typeof t=="object"}function EL(t){return typeof t=="symbol"||TL(t)&&_L.call(t)==cL}function ay(t){if(typeof t=="number")return t;if(EL(t))return oy;if(Ec(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ec(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(fL,"");var n=hL.test(t);return n||pL.test(t)?mL(t.slice(2),n?2:8):dL.test(t)?oy:+t}var CL=bL,vl={};Object.defineProperty(vl,"__esModule",{value:!0});vl.addPassiveEventListener=function(e,n,i){var r=i.name;r||(r=n,console.warn("Listener must be a named function.")),ju.has(n)||ju.set(n,new Set);var s=ju.get(n);if(!s.has(r)){var o=function(){var a=!1;try{var l=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,l)}catch{}return a}();e.addEventListener(n,i,o?{passive:!0}:!1),s.add(r)}};vl.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),ju.get(n).delete(i.name||n)};var ju=new Map;Object.defineProperty(gl,"__esModule",{value:!0});var PL=CL,AL=RL(PL),LL=vl;function RL(t){return t&&t.__esModule?t:{default:t}}var DL=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,AL.default)(e,n)},et={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=DL(function(r){et.scrollHandler(e)},n);et.scrollSpyContainers.push(e),(0,LL.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return et.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=et.scrollSpyContainers[et.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(et.currentPositionX(e),et.currentPositionY(e))})},addStateHandler:function(e){et.spySetState.push(e)},addSpyHandler:function(e,n){var i=et.scrollSpyContainers[et.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(et.currentPositionX(n),et.currentPositionY(n))},updateStates:function(){et.spySetState.forEach(function(e){return e()})},unmount:function(e,n){et.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),et.spySetState&&et.spySetState.length&&et.spySetState.indexOf(e)>-1&&et.spySetState.splice(et.spySetState.indexOf(e),1),document.removeEventListener("scroll",et.scrollHandler)},update:function(){return et.scrollSpyContainers.forEach(function(e){return et.scrollHandler(e)})}};gl.default=et;var $o={},yl={};Object.defineProperty(yl,"__esModule",{value:!0});var kL=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,r=i?"#"+i:"",s=window&&window.location,o=r?s.pathname+s.search+r:s.pathname+s.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},IL=function(){return window.location.hash.replace(/^#/,"")},NL=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},OL=function(e){return getComputedStyle(e).position!=="static"},cd=function(e,n){for(var i=e.offsetTop,r=e.offsetParent;r&&!n(r);)i+=r.offsetTop,r=r.offsetParent;return{offsetTop:i,offsetParent:r}},FL=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(OL(e)){if(n.offsetParent!==e){var r=function(c){return c===e||c===document},s=cd(n,r),o=s.offsetTop,a=s.offsetParent;if(a!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(c){return c===document};return cd(n,l).offsetTop-cd(e,l).offsetTop};yl.default={updateHash:kL,getHash:IL,filterElementInContainer:NL,scrollOffset:FL};var sf={},sg={};Object.defineProperty(sg,"__esModule",{value:!0});sg.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var og={};Object.defineProperty(og,"__esModule",{value:!0});var zL=vl,UL=["mousedown","mousewheel","touchmove","keydown"];og.default={subscribe:function(e){return typeof document<"u"&&UL.forEach(function(n){return(0,zL.addPassiveEventListener)(document,n,e)})}};var xl={};Object.defineProperty(xl,"__esModule",{value:!0});var lp={registered:{},scrollEvent:{register:function(e,n){lp.registered[e]=n},remove:function(e){lp.registered[e]=null}}};xl.default=lp;Object.defineProperty(sf,"__esModule",{value:!0});var VL=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},BL=yl;of(BL);var HL=sg,ly=of(HL),WL=og,GL=of(WL),jL=xl,ti=of(jL);function of(t){return t&&t.__esModule?t:{default:t}}var oM=function(e){return ly.default[e.smooth]||ly.default.defaultEasing},$L=function(e){return typeof e=="function"?e:function(){return e}},XL=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},up=function(){return XL()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),aM=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},lM=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft},uM=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop},qL=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,r=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,r.clientWidth,r.scrollWidth,r.offsetWidth)},YL=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,r=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,r.clientHeight,r.scrollHeight,r.offsetHeight)},KL=function t(e,n,i){var r=n.data;if(!n.ignoreCancelEvents&&r.cancel){ti.default.registered.end&&ti.default.registered.end(r.to,r.target,r.currentPositionY);return}if(r.delta=Math.round(r.targetPosition-r.startPosition),r.start===null&&(r.start=i),r.progress=i-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var s=t.bind(null,e,n);up.call(window,s);return}ti.default.registered.end&&ti.default.registered.end(r.to,r.target,r.currentPosition)},ag=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},_l=function(e,n,i,r){n.data=n.data||aM(),window.clearTimeout(n.data.delayTimeout);var s=function(){n.data.cancel=!0};if(GL.default.subscribe(s),ag(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?lM(n):uM(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){ti.default.registered.end&&ti.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=$L(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=r;var o=oM(n),a=KL.bind(null,o,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){ti.default.registered.begin&&ti.default.registered.begin(n.data.to,n.data.target),up.call(window,a)},n.delay);return}ti.default.registered.begin&&ti.default.registered.begin(n.data.to,n.data.target),up.call(window,a)},af=function(e){return e=VL({},e),e.data=e.data||aM(),e.absolute=!0,e},ZL=function(e){_l(0,af(e))},QL=function(e,n){_l(e,af(n))},JL=function(e){e=af(e),ag(e),_l(e.horizontal?qL(e):YL(e),e)},eR=function(e,n){n=af(n),ag(n);var i=n.horizontal?lM(n):uM(n);_l(e+i,n)};sf.default={animateTopScroll:_l,getAnimationType:oM,scrollToTop:ZL,scrollToBottom:JL,scrollTo:QL,scrollMore:eR};Object.defineProperty($o,"__esModule",{value:!0});var tR=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},nR=yl,iR=lg(nR),rR=sf,sR=lg(rR),oR=xl,Jl=lg(oR);function lg(t){return t&&t.__esModule?t:{default:t}}var eu={},uy=void 0;$o.default={unmount:function(){eu={}},register:function(e,n){eu[e]=n},unregister:function(e){delete eu[e]},get:function(e){return eu[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return uy=e},getActiveLink:function(){return uy},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=tR({},n,{absolute:!1});var r=n.containerId,s=n.container,o=void 0;r?o=document.getElementById(r):s&&s.nodeType?o=s:o=document,n.absolute=!0;var a=n.horizontal,l=iR.default.scrollOffset(o,i,a)+(n.offset||0);if(!n.smooth){Jl.default.registered.begin&&Jl.default.registered.begin(e,i),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,Jl.default.registered.end&&Jl.default.registered.end(e,i);return}sR.default.animateTopScroll(l,n,e,i)}};var cM={exports:{}},aR="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",lR=aR,uR=lR;function fM(){}function dM(){}dM.resetWarningCache=fM;var cR=function(){function t(i,r,s,o,a,l){if(l!==uR){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:dM,resetWarningCache:fM};return n.PropTypes=n,n};cM.exports=cR();var Sl=cM.exports;const Ae=g_(Sl);var lf={};Object.defineProperty(lf,"__esModule",{value:!0});var fR=yl,fd=dR(fR);function dR(t){return t&&t.__esModule?t:{default:t}}var hR={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,r=i.get(e);if(r&&(n||e!==i.getActiveLink())){var s=this.containers[e]||document;i.scrollTo(e,{container:s})}},getHash:function(){return fd.default.getHash()},changeHash:function(e,n){this.isInitialized()&&fd.default.getHash()!==e&&fd.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};lf.default=hR;Object.defineProperty(ml,"__esModule",{value:!0});var tu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pR=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),mR=ee,cy=wl(mR),gR=gl,nu=wl(gR),vR=$o,yR=wl(vR),xR=Sl,Ze=wl(xR),_R=lf,qi=wl(_R);function wl(t){return t&&t.__esModule?t:{default:t}}function SR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wR(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function MR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var fy={to:Ze.default.string.isRequired,containerId:Ze.default.string,container:Ze.default.object,activeClass:Ze.default.string,activeStyle:Ze.default.object,spy:Ze.default.bool,horizontal:Ze.default.bool,smooth:Ze.default.oneOfType([Ze.default.bool,Ze.default.string]),offset:Ze.default.number,delay:Ze.default.number,isDynamic:Ze.default.bool,onClick:Ze.default.func,duration:Ze.default.oneOfType([Ze.default.number,Ze.default.func]),absolute:Ze.default.bool,onSetActive:Ze.default.func,onSetInactive:Ze.default.func,ignoreCancelEvents:Ze.default.bool,hashSpy:Ze.default.bool,saveHashHistory:Ze.default.bool,spyThrottle:Ze.default.number};ml.default=function(t,e){var n=e||yR.default,i=function(s){MR(o,s);function o(a){SR(this,o);var l=wR(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,a));return r.call(l),l.state={active:!1},l}return pR(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();nu.default.isMounted(l)||nu.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(qi.default.isMounted()||qi.default.mount(n),qi.default.mapContainer(this.props.to,l)),nu.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){nu.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=tu({},this.props.style,this.props.activeStyle):u=tu({},this.props.style);var c=tu({},this.props);for(var f in fy)c.hasOwnProperty(f)&&delete c[f];return c.className=l,c.style=u,c.onClick=this.handleClick,cy.default.createElement(t,c)}}]),o}(cy.default.PureComponent),r=function(){var o=this;this.scrollTo=function(a,l){n.scrollTo(a,tu({},o.state,l))},this.handleClick=function(a){o.props.onClick&&o.props.onClick(a),a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(a,l){var u=o.getScrollSpyContainer();if(!(qi.default.isMounted()&&!qi.default.isInitialized())){var c=o.props.horizontal,f=o.props.to,d=null,m=void 0,y=void 0;if(c){var p=0,h=0,g=0;if(u.getBoundingClientRect){var v=u.getBoundingClientRect();g=v.left}if(!d||o.props.isDynamic){if(d=n.get(f),!d)return;var x=d.getBoundingClientRect();p=x.left-g+a,h=p+x.width}var _=a-o.props.offset;m=_>=Math.floor(p)&&_<Math.floor(h),y=_<Math.floor(p)||_>=Math.floor(h)}else{var w=0,b=0,P=0;if(u.getBoundingClientRect){var S=u.getBoundingClientRect();P=S.top}if(!d||o.props.isDynamic){if(d=n.get(f),!d)return;var E=d.getBoundingClientRect();w=E.top-P+l,b=w+E.height}var A=l-o.props.offset;m=A>=Math.floor(w)&&A<Math.floor(b),y=A<Math.floor(w)||A>=Math.floor(b)}var U=n.getActiveLink();if(y){if(f===U&&n.setActiveLink(void 0),o.props.hashSpy&&qi.default.getHash()===f){var ne=o.props.saveHashHistory,z=ne===void 0?!1:ne;qi.default.changeHash("",z)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(f,d))}if(m&&(U!==f||o.state.active===!1)){n.setActiveLink(f);var N=o.props.saveHashHistory,V=N===void 0?!1:N;o.props.hashSpy&&qi.default.changeHash(f,V),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(f,d))}}}};return i.propTypes=fy,i.defaultProps={offset:0},i};Object.defineProperty(rg,"__esModule",{value:!0});var bR=ee,dy=hM(bR),TR=ml,ER=hM(TR);function hM(t){return t&&t.__esModule?t:{default:t}}function CR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hy(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function PR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var AR=function(t){PR(e,t);function e(){var n,i,r,s;CR(this,e);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return s=(i=(r=hy(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(a))),r),r.render=function(){return dy.default.createElement("a",r.props,r.props.children)},i),hy(r,s)}return e}(dy.default.Component);rg.default=(0,ER.default)(AR);var ug={};Object.defineProperty(ug,"__esModule",{value:!0});var LR=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),RR=ee,py=pM(RR),DR=ml,kR=pM(DR);function pM(t){return t&&t.__esModule?t:{default:t}}function IR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function NR(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function OR(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var FR=function(t){OR(e,t);function e(){return IR(this,e),NR(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return LR(e,[{key:"render",value:function(){return py.default.createElement("button",this.props,this.props.children)}}]),e}(py.default.Component);ug.default=(0,kR.default)(FR);var cg={},uf={};Object.defineProperty(uf,"__esModule",{value:!0});var zR=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},UR=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),VR=ee,my=cf(VR),BR=LS;cf(BR);var HR=$o,gy=cf(HR),WR=Sl,vy=cf(WR);function cf(t){return t&&t.__esModule?t:{default:t}}function GR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jR(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function $R(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}uf.default=function(t){var e=function(n){$R(i,n);function i(r){GR(this,i);var s=jR(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,r));return s.childBindings={domNode:null},s}return UR(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;gy.default.unregister(this.props.name)}},{key:"registerElems",value:function(s){gy.default.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return my.default.createElement(t,zR({},this.props,{parentBindings:this.childBindings}))}}]),i}(my.default.Component);return e.propTypes={name:vy.default.string,id:vy.default.string},e};Object.defineProperty(cg,"__esModule",{value:!0});var yy=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},XR=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),qR=ee,xy=fg(qR),YR=uf,KR=fg(YR),ZR=Sl,_y=fg(ZR);function fg(t){return t&&t.__esModule?t:{default:t}}function QR(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function JR(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function eD(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var mM=function(t){eD(e,t);function e(){return QR(this,e),JR(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return XR(e,[{key:"render",value:function(){var i=this,r=yy({},this.props);return delete r.name,r.parentBindings&&delete r.parentBindings,xy.default.createElement("div",yy({},r,{ref:function(o){i.props.parentBindings.domNode=o}}),this.props.children)}}]),e}(xy.default.Component);mM.propTypes={name:_y.default.string,id:_y.default.string};cg.default=(0,KR.default)(mM);var dd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Sy=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function wy(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function My(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function by(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var iu=ee,Vr=gl,hd=$o,tt=Sl,Yi=lf,Ty={to:tt.string.isRequired,containerId:tt.string,container:tt.object,activeClass:tt.string,spy:tt.bool,smooth:tt.oneOfType([tt.bool,tt.string]),offset:tt.number,delay:tt.number,isDynamic:tt.bool,onClick:tt.func,duration:tt.oneOfType([tt.number,tt.func]),absolute:tt.bool,onSetActive:tt.func,onSetInactive:tt.func,ignoreCancelEvents:tt.bool,hashSpy:tt.bool,spyThrottle:tt.number},tD={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||hd,r=function(o){by(a,o);function a(l){wy(this,a);var u=My(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,l));return s.call(u),u.state={active:!1},u}return Sy(a,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,c=this.props.container;return u?document.getElementById(u):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();Vr.isMounted(u)||Vr.mount(u,this.props.spyThrottle),this.props.hashSpy&&(Yi.isMounted()||Yi.mount(i),Yi.mapContainer(this.props.to,u)),this.props.spy&&Vr.addStateHandler(this.stateHandler),Vr.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){Vr.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var c=dd({},this.props);for(var f in Ty)c.hasOwnProperty(f)&&delete c[f];return c.className=u,c.onClick=this.handleClick,iu.createElement(e,c)}}]),a}(iu.Component),s=function(){var a=this;this.scrollTo=function(l,u){i.scrollTo(l,dd({},a.state,u))},this.handleClick=function(l){a.props.onClick&&a.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),a.scrollTo(a.props.to,a.props)},this.stateHandler=function(){i.getActiveLink()!==a.props.to&&(a.state!==null&&a.state.active&&a.props.onSetInactive&&a.props.onSetInactive(),a.setState({active:!1}))},this.spyHandler=function(l){var u=a.getScrollSpyContainer();if(!(Yi.isMounted()&&!Yi.isInitialized())){var c=a.props.to,f=null,d=0,m=0,y=0;if(u.getBoundingClientRect){var p=u.getBoundingClientRect();y=p.top}if(!f||a.props.isDynamic){if(f=i.get(c),!f)return;var h=f.getBoundingClientRect();d=h.top-y+l,m=d+h.height}var g=l-a.props.offset,v=g>=Math.floor(d)&&g<Math.floor(m),x=g<Math.floor(d)||g>=Math.floor(m),_=i.getActiveLink();if(x)return c===_&&i.setActiveLink(void 0),a.props.hashSpy&&Yi.getHash()===c&&Yi.changeHash(),a.props.spy&&a.state.active&&(a.setState({active:!1}),a.props.onSetInactive&&a.props.onSetInactive()),Vr.updateStates();if(v&&_!==c)return i.setActiveLink(c),a.props.hashSpy&&Yi.changeHash(c),a.props.spy&&(a.setState({active:!0}),a.props.onSetActive&&a.props.onSetActive(c)),Vr.updateStates()}}};return r.propTypes=Ty,r.defaultProps={offset:0},r},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){by(r,i);function r(s){wy(this,r);var o=My(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,s));return o.childBindings={domNode:null},o}return Sy(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;hd.unregister(this.props.name)}},{key:"registerElems",value:function(o){hd.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return iu.createElement(e,dd({},this.props,{parentBindings:this.childBindings}))}}]),r}(iu.Component);return n.propTypes={name:tt.string,id:tt.string},n}},nD=tD;Object.defineProperty(ut,"__esModule",{value:!0});ut.Helpers=ut.ScrollElement=ut.ScrollLink=ut.animateScroll=ut.scrollSpy=ut.Events=ut.scroller=ut.Element=ut.Button=Gs=ut.Link=void 0;var iD=rg,gM=pi(iD),rD=ug,vM=pi(rD),sD=cg,yM=pi(sD),oD=$o,xM=pi(oD),aD=xl,_M=pi(aD),lD=gl,SM=pi(lD),uD=sf,wM=pi(uD),cD=ml,MM=pi(cD),fD=uf,bM=pi(fD),dD=nD,TM=pi(dD);function pi(t){return t&&t.__esModule?t:{default:t}}var Gs=ut.Link=gM.default;ut.Button=vM.default;ut.Element=yM.default;ut.scroller=xM.default;ut.Events=_M.default;ut.scrollSpy=SM.default;ut.animateScroll=wM.default;ut.ScrollLink=MM.default;ut.ScrollElement=bM.default;ut.Helpers=TM.default;ut.default={Link:gM.default,Button:vM.default,Element:yM.default,scroller:xM.default,Events:_M.default,scrollSpy:SM.default,animateScroll:wM.default,ScrollLink:MM.default,ScrollElement:bM.default,Helpers:TM.default};function hD(){return B.jsx(B.Fragment,{children:B.jsxs("header",{class:"header",className:"bg-lm-dark-green h-24 drop-shadow-2xl w-full flex justify-between items-center px-10  uppercase font-bold",children:[B.jsx("div",{children:B.jsx(Gs,{to:"home",children:B.jsx("h1",{className:" sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl hover:text-pink-600 ",children:"Rithuan Kobir"})})}),B.jsxs("ul",{className:"flex gap-10 md:text-2xl lg:text-3xl xl:text-4xl",children:[B.jsx(Gs,{to:"home",smooth:!0,children:B.jsx("li",{className:"hover:text-pink-600 hover:underline",children:"Home"})}),B.jsx(Gs,{to:"about",smooth:!0,children:B.jsx("li",{className:"hover:text-pink-600 hover:underline",children:"About Me"})}),B.jsx(Gs,{to:"projects",smooth:!0,children:B.jsx("li",{className:"hover:text-pink-600 hover:underline",children:"Projects"})}),B.jsx(Gs,{to:"footer",smooth:!0,children:B.jsx("li",{className:"hover:text-pink-600 hover:underline",children:"Contact Me"})})]})]})})}function pD(){const[t,e]=lL(!1,!0),n=[{key:1,title:"Home",href:"#home"},{key:2,title:"About Me",href:"#about"},{key:3,title:"projects",href:"#projects"},{key:4,title:"Contact me",href:"#footer"}],i={initial:{scaleY:0},animate:{scaleY:1,transition:{duration:.5,ease:[.12,0,.36,0]}},exit:{scaleY:0,transition:{delay:.5,duration:.5,ease:[.22,1,.36,1]}}},r={initial:{transition:{staggerChildren:.1,staggerDirection:-1}},open:{transition:{delayChildren:.8,staggerChildren:.1,staggerDirection:1}}};return B.jsxs("header",{className:"h-24 w-full bg-lm-dark-green flex items-center justify-between px-5 z-50 sticky ",children:[B.jsx("div",{children:B.jsx("h2",{className:"text-pink-600 text-2xl font-bold uppercase",children:"Rithuan Kobir"})}),B.jsx("div",{className:"relative z-50 ",children:B.jsxs(Re.button,{animate:t?"open":"closed",onClick:()=>e(),className:"flex flex-col space-y-2 ",children:[B.jsx(Re.span,{variants:{closed:{rotate:0,transition:{duration:.8}},open:{rotate:45,y:12}},className:"w-8 h-1 rounded-xl bg-pink-500 block z-50"}),B.jsx(Re.span,{variants:{closed:{opacity:1},open:{opacity:0}},className:"w-8 h-1 rounded-xl bg-pink-500 block z-50"}),B.jsx(Re.span,{variants:{closed:{rotate:0},open:{rotate:-45,y:-12}},className:"w-8 h-1 rounded-xl bg-pink-500 block z-50"})]})}),B.jsx(ig,{children:t&&B.jsxs(Re.div,{variants:i,initial:"initial",animate:"animate",exit:"exit",className:"fixed left-0 top-0 w-full h-screen origin-top bg-lm-pastel-green flex flex-col p-10 z-0 ",children:[B.jsx("div",{className:"",children:B.jsx("h1",{className:"text-pink-600 text-2xl uppercase",children:"Portfolio"})}),B.jsx(Re.div,{variants:r,initial:"initial",animate:"open",exit:"initial",className:"flex flex-col items-center justify-center gap-5 z-0 w-full h-full",children:n.map((s,o)=>B.jsx("div",{className:"overflow-hidden hover:scale-110",children:B.jsx(mD,{title:s.title,href:s.href,toggleMobileNav:e},o)}))})]})})]})}const mD=({title:t,href:e,toggleMobileNav:n})=>{const i={initial:{y:"-30svh",transition:{duration:.2,ease:[.37,0,.63,1]}},open:{y:0,transition:{duration:1,ease:[0,.5,.45,1]}}};return B.jsx(Re.div,{variants:i,className:"text-5xl uppercase text-black scroll-smooth hover:text-pink-500 hover:scale-150",children:B.jsx("a",{href:e,onClick:()=>{n()},children:t})})};/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dg="144",gD=0,Ey=1,vD=2,EM=1,yD=2,ga=3,Io=0,kn=1,hr=2,Mr=0,xo=1,Cy=2,Py=3,Ay=4,xD=5,js=100,_D=101,SD=102,Ly=103,Ry=104,wD=200,MD=201,bD=202,TD=203,CM=204,PM=205,ED=206,CD=207,PD=208,AD=209,LD=210,RD=0,DD=1,kD=2,cp=3,ID=4,ND=5,OD=6,FD=7,AM=0,zD=1,UD=2,Oi=0,VD=1,BD=2,HD=3,WD=4,GD=5,LM=300,No=301,Oo=302,fp=303,dp=304,ff=306,hp=1e3,Gn=1001,pp=1002,Qt=1003,Dy=1004,ky=1005,Pn=1006,jD=1007,df=1008,ys=1009,$D=1010,XD=1011,RM=1012,qD=1013,ns=1014,is=1015,il=1016,YD=1017,KD=1018,_o=1020,ZD=1021,QD=1022,oi=1023,JD=1024,e4=1025,ls=1026,Fo=1027,t4=1028,n4=1029,i4=1030,r4=1031,s4=1033,pd=33776,md=33777,gd=33778,vd=33779,Iy=35840,Ny=35841,Oy=35842,Fy=35843,o4=36196,zy=37492,Uy=37496,Vy=37808,By=37809,Hy=37810,Wy=37811,Gy=37812,jy=37813,$y=37814,Xy=37815,qy=37816,Yy=37817,Ky=37818,Zy=37819,Qy=37820,Jy=37821,ex=36492,xs=3e3,lt=3001,a4=3200,l4=3201,u4=0,c4=1,Mi="srgb",rs="srgb-linear",yd=7680,f4=519,tx=35044,nx="300 es",mp=1035;class Xo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xd=Math.PI/180,ix=180/Math.PI;function Ml(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function cn(t,e,n){return Math.max(e,Math.min(n,t))}function d4(t,e){return(t%e+e)%e}function _d(t,e,n){return(1-n)*t+n*e}function rx(t){return(t&t-1)===0&&t!==0}function gp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ru(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,n=0){Be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rn{constructor(){Rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],m=i[5],y=i[8],p=r[0],h=r[3],g=r[6],v=r[1],x=r[4],_=r[7],w=r[2],b=r[5],P=r[8];return s[0]=o*p+a*v+l*w,s[3]=o*h+a*x+l*b,s[6]=o*g+a*_+l*P,s[1]=u*p+c*v+f*w,s[4]=u*h+c*x+f*b,s[7]=u*g+c*_+f*P,s[2]=d*p+m*v+y*w,s[5]=d*h+m*x+y*b,s[8]=d*g+m*_+y*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,m=u*s-o*l,y=n*f+i*d+r*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/y;return e[0]=f*p,e[1]=(r*u-c*i)*p,e[2]=(a*i-r*o)*p,e[3]=d*p,e[4]=(c*n-r*l)*p,e[5]=(r*s-a*n)*p,e[6]=m*p,e[7]=(i*l-u*n)*p,e[8]=(o*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=n,i[4]*=n,i[7]*=n,this}rotate(e){const n=Math.cos(e),i=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],u=r[4],c=r[7];return r[0]=n*s+i*l,r[3]=n*o+i*u,r[6]=n*a+i*c,r[1]=-i*s+n*l,r[4]=-i*o+n*u,r[7]=-i*a+n*c,this}translate(e,n){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=n*i[2],i[4]+=n*i[5],i[7]+=n*i[8],this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function DM(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $u(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Sd={[Mi]:{[rs]:us},[rs]:{[Mi]:$u}},Fn={legacyMode:!0,get workingColorSpace(){return rs},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.legacyMode||e===n||!e||!n)return t;if(Sd[e]&&Sd[e][n]!==void 0){const i=Sd[e][n];return t.r=i(t.r),t.g=i(t.g),t.b=i(t.b),t}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}},kM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xt={r:0,g:0,b:0},zn={h:0,s:0,l:0},su={h:0,s:0,l:0};function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function ou(t,e){return e.r=t.r,e.g=t.g,e.b=t.b,e}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Fn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rs){return this.r=e,this.g=n,this.b=i,Fn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rs){if(e=d4(e,1),n=cn(n,0,1),i=cn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=wd(o,s,e+1/3),this.g=wd(o,s,e),this.b=wd(o,s,e-1/3)}return Fn.toWorkingColorSpace(this,r),this}setStyle(e,n=Mi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Fn.toWorkingColorSpace(this,n),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Fn.toWorkingColorSpace(this,n),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,u=parseFloat(s[2])/100,c=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,u,c,n)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Fn.toWorkingColorSpace(this,n),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Fn.toWorkingColorSpace(this,n),this}return e&&e.length>0?this.setColorName(e,n):this}setColorName(e,n=Mi){const i=kM[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=$u(e.r),this.g=$u(e.g),this.b=$u(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return Fn.fromWorkingColorSpace(ou(this,xt),e),cn(xt.r*255,0,255)<<16^cn(xt.g*255,0,255)<<8^cn(xt.b*255,0,255)<<0}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rs){Fn.fromWorkingColorSpace(ou(this,xt),n);const i=xt.r,r=xt.g,s=xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=rs){return Fn.fromWorkingColorSpace(ou(this,xt),n),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Mi){return Fn.fromWorkingColorSpace(ou(this,xt),e),e!==Mi?`color(${e} ${xt.r} ${xt.g} ${xt.b})`:`rgb(${xt.r*255|0},${xt.g*255|0},${xt.b*255|0})`}offsetHSL(e,n,i){return this.getHSL(zn),zn.h+=e,zn.s+=n,zn.l+=i,this.setHSL(zn.h,zn.s,zn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zn),e.getHSL(su);const i=_d(zn.h,su.h,n),r=_d(zn.s,su.s,n),s=_d(zn.l,su.l,n);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}je.NAMES=kM;let Ls;class IM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Cc("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class NM{constructor(e=null){this.isSource=!0,this.uuid=Ml(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Md(r[o].image)):s.push(Md(r[o]))}else s=Md(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Md(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?IM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h4=0;class Yn extends Xo{constructor(e=Yn.DEFAULT_IMAGE,n=Yn.DEFAULT_MAPPING,i=Gn,r=Gn,s=Pn,o=df,a=oi,l=ys,u=1,c=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h4++}),this.uuid=Ml(),this.name="",this.source=new NM(e),this.mipmaps=[],this.mapping=n,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==LM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hp:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case pp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hp:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case pp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=LM;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],m=l[5],y=l[9],p=l[2],h=l[6],g=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-p)<.01&&Math.abs(y-h)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+p)<.1&&Math.abs(y+h)<.1&&Math.abs(u+m+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,_=(m+1)/2,w=(g+1)/2,b=(c+d)/4,P=(f+p)/4,S=(y+h)/4;return x>_&&x>w?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=P/i):_>w?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=b/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=P/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((h-y)*(h-y)+(f-p)*(f-p)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(h-y)/v,this.y=(f-p)/v,this.z=(d-c)/v,this.w=Math.acos((u+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _s extends Xo{constructor(e,n,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};this.texture=new Yn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Pn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new NM(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class OM extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class p4 extends Yn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],m=s[o+1],y=s[o+2],p=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=m,e[n+2]=y,e[n+3]=p;return}if(f!==p||l!==d||u!==m||c!==y){let h=1-a;const g=l*d+u*m+c*y+f*p,v=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const w=Math.sqrt(x),b=Math.atan2(w,g*v);h=Math.sin(h*b)/w,a=Math.sin(a*b)/w}const _=a*v;if(l=l*h+d*_,u=u*h+m*_,c=c*h+y*_,f=f*h+p*_,h===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],m=s[o+2],y=s[o+3];return e[n]=a*y+c*f+l*m-u*d,e[n+1]=l*y+c*d+u*f-a*m,e[n+2]=u*y+c*m+a*d-l*f,e[n+3]=c*y-a*f-l*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),m=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f-d*m*y;break;case"YXZ":this._x=d*c*f+u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f+d*m*y;break;case"ZXY":this._x=d*c*f-u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f-d*m*y;break;case"ZYX":this._x=d*c*f-u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f+d*m*y;break;case"YZX":this._x=d*c*f+u*m*y,this._y=u*m*f+d*c*y,this._z=u*c*y-d*m*f,this._w=u*c*f-d*m*y;break;case"XZY":this._x=d*c*f-u*m*y,this._y=u*m*f-d*c*y,this._z=u*c*y+d*m*f,this._w=u*c*f+d*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(c-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+u)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-u)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(cn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sx.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sx.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*n+o*r-a*i,c=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bd.copy(this).projectOnVector(e),this.sub(bd)}reflect(e){return this.sub(bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(cn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bd=new F,sx=new bl;class Tl{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],f=e[l+1],d=e[l+2];c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let n=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),f=e.getY(l),d=e.getZ(l);c<n&&(n=c),f<i&&(i=f),d<r&&(r=d),c>s&&(s=c),f>o&&(o=f),d>a&&(a=d)}return this.min.set(n,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Br.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(n&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)Br.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Br)}else i.boundingBox===null&&i.computeBoundingBox(),Td.copy(i.boundingBox),Td.applyMatrix4(e.matrixWorld),this.union(Td);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Br),Br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),au.subVectors(this.max,aa),Rs.subVectors(e.a,aa),Ds.subVectors(e.b,aa),ks.subVectors(e.c,aa),Ki.subVectors(Ds,Rs),Zi.subVectors(ks,Ds),Hr.subVectors(Rs,ks);let n=[0,-Ki.z,Ki.y,0,-Zi.z,Zi.y,0,-Hr.z,Hr.y,Ki.z,0,-Ki.x,Zi.z,0,-Zi.x,Hr.z,0,-Hr.x,-Ki.y,Ki.x,0,-Zi.y,Zi.x,0,-Hr.y,Hr.x,0];return!Ed(n,Rs,Ds,ks,au)||(n=[1,0,0,0,1,0,0,0,1],!Ed(n,Rs,Ds,ks,au))?!1:(lu.crossVectors(Ki,Zi),n=[lu.x,lu.y,lu.z],Ed(n,Rs,Ds,ks,au))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Br.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Br).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new F,new F,new F,new F,new F,new F,new F,new F],Br=new F,Td=new Tl,Rs=new F,Ds=new F,ks=new F,Ki=new F,Zi=new F,Hr=new F,aa=new F,au=new F,lu=new F,Wr=new F;function Ed(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),u=n.dot(Wr),c=i.dot(Wr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const m4=new Tl,ox=new F,uu=new F,Cd=new F;class hg{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):m4.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Cd.subVectors(e,this.center);const n=Cd.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.add(Cd.multiplyScalar(r/i)),this.radius+=r}return this}union(e){return this.center.equals(e.center)===!0?uu.set(0,0,1).multiplyScalar(e.radius):uu.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(ox.copy(e.center).add(uu)),this.expandByPoint(ox.copy(e.center).sub(uu)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new F,Pd=new F,cu=new F,Qi=new F,Ad=new F,fu=new F,Ld=new F;class g4{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.direction).multiplyScalar(n).add(this.origin),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pd.copy(e).add(n).multiplyScalar(.5),cu.copy(n).sub(e).normalize(),Qi.copy(this.origin).sub(Pd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(cu),a=Qi.dot(this.direction),l=-Qi.dot(cu),u=Qi.lengthSq(),c=Math.abs(1-o*o);let f,d,m,y;if(c>0)if(f=o*l-a,d=o*a-l,y=s*c,f>=0)if(d>=-y)if(d<=y){const p=1/c;f*=p,d*=p,m=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;else d<=-y?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u):d<=y?(f=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(cu).multiplyScalar(d).add(Pd),m}intersectSphere(e,n){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){Ad.subVectors(n,e),fu.subVectors(i,e),Ld.crossVectors(Ad,fu);let o=this.direction.dot(Ld),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const l=a*this.direction.dot(fu.crossVectors(Qi,fu));if(l<0)return null;const u=a*this.direction.dot(Ad.cross(Qi));if(u<0||l+u>o)return null;const c=-a*Qi.dot(Ld);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,s,o,a,l,u,c,f,d,m,y,p,h){const g=this.elements;return g[0]=e,g[4]=n,g[8]=i,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=u,g[6]=c,g[10]=f,g[14]=d,g[3]=m,g[7]=y,g[11]=p,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,m=o*f,y=a*c,p=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=m+y*u,n[5]=d-p*u,n[9]=-a*l,n[2]=p-d*u,n[6]=y+m*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,m=l*f,y=u*c,p=u*f;n[0]=d+p*a,n[4]=y*a-m,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=m*a-y,n[6]=p+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,m=l*f,y=u*c,p=u*f;n[0]=d-p*a,n[4]=-o*f,n[8]=y+m*a,n[1]=m+y*a,n[5]=o*c,n[9]=p-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,m=o*f,y=a*c,p=a*f;n[0]=l*c,n[4]=y*u-m,n[8]=d*u+p,n[1]=l*f,n[5]=p*u+d,n[9]=m*u-y,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*u,y=a*l,p=a*u;n[0]=l*c,n[4]=p-d*f,n[8]=y*f+m,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=m*f+y,n[10]=d-p*f}else if(e.order==="XZY"){const d=o*l,m=o*u,y=a*l,p=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+p,n[5]=o*c,n[9]=m*f-y,n[2]=y*f-m,n[6]=a*c,n[10]=p*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v4,e,y4)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),Ji.crossVectors(i,an),Ji.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ji.crossVectors(i,an)),Ji.normalize(),du.crossVectors(an,Ji),r[0]=Ji.x,r[4]=du.x,r[8]=an.x,r[1]=Ji.y,r[5]=du.y,r[9]=an.y,r[2]=Ji.z,r[6]=du.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],m=i[13],y=i[2],p=i[6],h=i[10],g=i[14],v=i[3],x=i[7],_=i[11],w=i[15],b=r[0],P=r[4],S=r[8],E=r[12],A=r[1],U=r[5],ne=r[9],z=r[13],N=r[2],V=r[6],K=r[10],Z=r[14],R=r[3],L=r[7],k=r[11],Y=r[15];return s[0]=o*b+a*A+l*N+u*R,s[4]=o*P+a*U+l*V+u*L,s[8]=o*S+a*ne+l*K+u*k,s[12]=o*E+a*z+l*Z+u*Y,s[1]=c*b+f*A+d*N+m*R,s[5]=c*P+f*U+d*V+m*L,s[9]=c*S+f*ne+d*K+m*k,s[13]=c*E+f*z+d*Z+m*Y,s[2]=y*b+p*A+h*N+g*R,s[6]=y*P+p*U+h*V+g*L,s[10]=y*S+p*ne+h*K+g*k,s[14]=y*E+p*z+h*Z+g*Y,s[3]=v*b+x*A+_*N+w*R,s[7]=v*P+x*U+_*V+w*L,s[11]=v*S+x*ne+_*K+w*k,s[15]=v*E+x*z+_*Z+w*Y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],m=e[14],y=e[3],p=e[7],h=e[11],g=e[15];return y*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*m-i*l*m)+p*(+n*l*m-n*u*d+s*o*d-r*o*m+r*u*c-s*l*c)+h*(+n*u*f-n*a*m-s*o*f+i*o*m+s*a*c-i*u*c)+g*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],m=e[11],y=e[12],p=e[13],h=e[14],g=e[15],v=f*h*u-p*d*u+p*l*m-a*h*m-f*l*g+a*d*g,x=y*d*u-c*h*u-y*l*m+o*h*m+c*l*g-o*d*g,_=c*p*u-y*f*u+y*a*m-o*p*m-c*a*g+o*f*g,w=y*f*l-c*p*l-y*a*d+o*p*d+c*a*h-o*f*h,b=n*v+i*x+r*_+s*w;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return e[0]=v*P,e[1]=(p*d*s-f*h*s-p*r*m+i*h*m+f*r*g-i*d*g)*P,e[2]=(a*h*s-p*l*s+p*r*u-i*h*u-a*r*g+i*l*g)*P,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*m-i*l*m)*P,e[4]=x*P,e[5]=(c*h*s-y*d*s+y*r*m-n*h*m-c*r*g+n*d*g)*P,e[6]=(y*l*s-o*h*s-y*r*u+n*h*u+o*r*g-n*l*g)*P,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*m+n*l*m)*P,e[8]=_*P,e[9]=(y*f*s-c*p*s-y*i*m+n*p*m+c*i*g-n*f*g)*P,e[10]=(o*p*s-y*a*s+y*i*u-n*p*u-o*i*g+n*a*g)*P,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*m-n*a*m)*P,e[12]=w*P,e[13]=(c*p*r-y*f*r+y*i*d-n*p*d-c*i*h+n*f*h)*P,e[14]=(y*a*r-o*p*r-y*i*l+n*p*l+o*i*h-n*a*h)*P,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,m=s*c,y=s*f,p=o*c,h=o*f,g=a*f,v=l*u,x=l*c,_=l*f,w=i.x,b=i.y,P=i.z;return r[0]=(1-(p+g))*w,r[1]=(m+_)*w,r[2]=(y-x)*w,r[3]=0,r[4]=(m-_)*b,r[5]=(1-(d+g))*b,r[6]=(h+v)*b,r[7]=0,r[8]=(y+x)*P,r[9]=(h-v)*P,r[10]=(1-(d+p))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const u=1/s,c=1/o,f=1/a;return Un.elements[0]*=u,Un.elements[1]*=u,Un.elements[2]*=u,Un.elements[4]*=c,Un.elements[5]*=c,Un.elements[6]*=c,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o){const a=this.elements,l=2*s/(n-e),u=2*s/(i-r),c=(n+e)/(n-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,n,i,r,s,o){const a=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-s),f=(n+e)*l,d=(i+r)*u,m=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Is=new F,Un=new kt,v4=new F(0,0,0),y4=new F(1,1,1),Ji=new F,du=new F,an=new F,ax=new kt,lx=new bl;class El{constructor(e=0,n=0,i=0,r=El.DefaultOrder){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-cn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-cn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return ax.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ax,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lx.setFromEuler(this),this.setFromQuaternion(lx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}El.DefaultOrder="XYZ";El.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];let FM=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},x4=0;const ux=new F,Ns=new bl,xi=new kt,hu=new F,la=new F,_4=new F,S4=new bl,cx=new F(1,0,0),fx=new F(0,1,0),dx=new F(0,0,1),w4={type:"added"},hx={type:"removed"};class hn extends Xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:x4++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DefaultUp.clone();const e=new F,n=new El,i=new bl,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new kt},normalMatrix:{value:new Rn}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=hn.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=hn.DefaultMatrixWorldAutoUpdate,this.layers=new FM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(cx,e)}rotateY(e){return this.rotateOnAxis(fx,e)}rotateZ(e){return this.rotateOnAxis(dx,e)}translateOnAxis(e,n){return ux.copy(e).applyQuaternion(this.quaternion),this.position.add(ux.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cx,e)}translateY(e){return this.translateOnAxis(fx,e)}translateZ(e){return this.translateOnAxis(dx,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?hu.copy(e):hu.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),la.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(la,hu,this.up):xi.lookAt(hu,la,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(xi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(w4)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(hx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,e,_4),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(la,S4,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}hn.DefaultUp=new F(0,1,0);hn.DefaultMatrixAutoUpdate=!0;hn.DefaultMatrixWorldAutoUpdate=!0;const Vn=new F,_i=new F,Rd=new F,Si=new F,Os=new F,Fs=new F,px=new F,Dd=new F,kd=new F,Id=new F;class Ti{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),_i.subVectors(i,n),Rd.subVectors(e,n);const o=Vn.dot(Vn),a=Vn.dot(_i),l=Vn.dot(Rd),u=_i.dot(_i),c=_i.dot(Rd),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(u*l-a*c)*d,y=(o*c-a*l)*d;return s.set(1-m-y,y,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Si),Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getUV(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Si),l.set(0,0),l.addScaledVector(s,Si.x),l.addScaledVector(o,Si.y),l.addScaledVector(a,Si.z),l}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),_i.subVectors(e,n),Vn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ti.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Ti.getUV(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),Fs.subVectors(s,i),Dd.subVectors(e,i);const l=Os.dot(Dd),u=Fs.dot(Dd);if(l<=0&&u<=0)return n.copy(i);kd.subVectors(e,r);const c=Os.dot(kd),f=Fs.dot(kd);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Os,o);Id.subVectors(e,s);const m=Os.dot(Id),y=Fs.dot(Id);if(y>=0&&m<=y)return n.copy(s);const p=m*u-l*y;if(p<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(Fs,a);const h=c*y-m*f;if(h<=0&&f-c>=0&&m-y>=0)return px.subVectors(s,r),a=(f-c)/(f-c+(m-y)),n.copy(r).addScaledVector(px,a);const g=1/(h+p+d);return o=p*g,a=d*g,n.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let M4=0;class hf extends Xo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:M4++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=xo,this.side=Io,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=CM,this.blendDst=PM,this.blendEquation=js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f4,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yd,this.stencilZFail=yd,this.stencilZPass=yd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn("THREE.Material: '"+n+"' parameter is undefined.");continue}const r=this[n];if(r===void 0){console.warn("THREE."+this.type+": '"+n+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(i.blending=this.blending),this.side!==Io&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zM extends hf{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=AM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,pu=new Be;class di{constructor(e,n,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i===!0,this.usage=tx,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pu.fromBufferAttribute(this,n),pu.applyMatrix3(e),this.setXY(n,pu.x,pu.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ru(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ru(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ru(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ru(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class UM extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class VM extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class cs extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let b4=0;const bn=new kt,Nd=new hn,zs=new F,ln=new Tl,ua=new Tl,Mt=new F;class Ts extends Xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:b4++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DM(e)?VM:UM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Rn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return Nd.lookAt(e),Nd.updateMatrix(),this.applyMatrix4(Nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new cs(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hg);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(Mt.addVectors(ln.min,ua.min),ln.expandByPoint(Mt),Mt.addVectors(ln.max,ua.max),ln.expandByPoint(Mt)):(ln.expandByPoint(ua.min),ln.expandByPoint(ua.max))}ln.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Mt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Mt.fromBufferAttribute(a,u),l&&(zs.fromBufferAttribute(e,u),Mt.add(zs)),r=Math.max(r,i.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new F,c[A]=new F;const f=new F,d=new F,m=new F,y=new Be,p=new Be,h=new Be,g=new F,v=new F;function x(A,U,ne){f.fromArray(r,A*3),d.fromArray(r,U*3),m.fromArray(r,ne*3),y.fromArray(o,A*2),p.fromArray(o,U*2),h.fromArray(o,ne*2),d.sub(f),m.sub(f),p.sub(y),h.sub(y);const z=1/(p.x*h.y-h.x*p.y);isFinite(z)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(m,-p.y).multiplyScalar(z),v.copy(m).multiplyScalar(p.x).addScaledVector(d,-h.x).multiplyScalar(z),u[A].add(g),u[U].add(g),u[ne].add(g),c[A].add(v),c[U].add(v),c[ne].add(v))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,U=_.length;A<U;++A){const ne=_[A],z=ne.start,N=ne.count;for(let V=z,K=z+N;V<K;V+=3)x(i[V+0],i[V+1],i[V+2])}const w=new F,b=new F,P=new F,S=new F;function E(A){P.fromArray(s,A*3),S.copy(P);const U=u[A];w.copy(U),w.sub(P.multiplyScalar(P.dot(U))).normalize(),b.crossVectors(S,U);const z=b.dot(c[A])<0?-1:1;l[A*4]=w.x,l[A*4+1]=w.y,l[A*4+2]=w.z,l[A*4+3]=z}for(let A=0,U=_.length;A<U;++A){const ne=_[A],z=ne.start,N=ne.count;for(let V=z,K=z+N;V<K;V+=3)E(i[V+0]),E(i[V+1]),E(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,f=new F;if(e)for(let d=0,m=e.count;d<m;d+=3){const y=e.getX(d+0),p=e.getX(d+1),h=e.getX(d+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,p),o.fromBufferAttribute(n,h),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),u.fromBufferAttribute(i,h),a.add(c),l.add(c),u.add(c),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(h,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Mt.fromBufferAttribute(e,n),Mt.normalize(),e.setXYZ(n,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let m=0,y=0;for(let p=0,h=l.length;p<h;p++){a.isInterleavedBufferAttribute?m=l[p]*a.data.stride+a.offset:m=l[p]*c;for(let g=0;g<c;g++)d[y++]=u[m++]}return new di(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ts,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const m=u[f];c.push(m.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,m=f.length;d<m;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const mx=new kt,Us=new g4,Od=new hg,er=new F,tr=new F,nr=new F,Fd=new F,zd=new F,Ud=new F,mu=new F,gu=new F,vu=new F,yu=new Be,xu=new Be,_u=new Be,Vd=new F,Su=new F;class Ai extends hn{constructor(e=new Ts,n=new zM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Od.copy(i.boundingSphere),Od.applyMatrix4(s),e.ray.intersectsSphere(Od)===!1)||(mx.copy(s).invert(),Us.copy(e.ray).applyMatrix4(mx),i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,f=i.attributes.uv,d=i.attributes.uv2,m=i.groups,y=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],v=r[g.materialIndex],x=Math.max(g.start,y.start),_=Math.min(a.count,Math.min(g.start+g.count,y.start+y.count));for(let w=x,b=_;w<b;w+=3){const P=a.getX(w),S=a.getX(w+1),E=a.getX(w+2);o=wu(this,v,e,Us,l,u,c,f,d,P,S,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const p=Math.max(0,y.start),h=Math.min(a.count,y.start+y.count);for(let g=p,v=h;g<v;g+=3){const x=a.getX(g),_=a.getX(g+1),w=a.getX(g+2);o=wu(this,r,e,Us,l,u,c,f,d,x,_,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,h=m.length;p<h;p++){const g=m[p],v=r[g.materialIndex],x=Math.max(g.start,y.start),_=Math.min(l.count,Math.min(g.start+g.count,y.start+y.count));for(let w=x,b=_;w<b;w+=3){const P=w,S=w+1,E=w+2;o=wu(this,v,e,Us,l,u,c,f,d,P,S,E),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const p=Math.max(0,y.start),h=Math.min(l.count,y.start+y.count);for(let g=p,v=h;g<v;g+=3){const x=g,_=g+1,w=g+2;o=wu(this,r,e,Us,l,u,c,f,d,x,_,w),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function T4(t,e,n,i,r,s,o,a){let l;if(e.side===kn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side!==hr,a),l===null)return null;Su.copy(a),Su.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Su);return u<n.near||u>n.far?null:{distance:u,point:Su.clone(),object:t}}function wu(t,e,n,i,r,s,o,a,l,u,c,f){er.fromBufferAttribute(r,u),tr.fromBufferAttribute(r,c),nr.fromBufferAttribute(r,f);const d=t.morphTargetInfluences;if(s&&d){mu.set(0,0,0),gu.set(0,0,0),vu.set(0,0,0);for(let y=0,p=s.length;y<p;y++){const h=d[y],g=s[y];h!==0&&(Fd.fromBufferAttribute(g,u),zd.fromBufferAttribute(g,c),Ud.fromBufferAttribute(g,f),o?(mu.addScaledVector(Fd,h),gu.addScaledVector(zd,h),vu.addScaledVector(Ud,h)):(mu.addScaledVector(Fd.sub(er),h),gu.addScaledVector(zd.sub(tr),h),vu.addScaledVector(Ud.sub(nr),h)))}er.add(mu),tr.add(gu),nr.add(vu)}t.isSkinnedMesh&&(t.boneTransform(u,er),t.boneTransform(c,tr),t.boneTransform(f,nr));const m=T4(t,e,n,i,er,tr,nr,Vd);if(m){a&&(yu.fromBufferAttribute(a,u),xu.fromBufferAttribute(a,c),_u.fromBufferAttribute(a,f),m.uv=Ti.getUV(Vd,er,tr,nr,yu,xu,_u,new Be)),l&&(yu.fromBufferAttribute(l,u),xu.fromBufferAttribute(l,c),_u.fromBufferAttribute(l,f),m.uv2=Ti.getUV(Vd,er,tr,nr,yu,xu,_u,new Be));const y={a:u,b:c,c:f,normal:new F,materialIndex:0};Ti.getNormal(er,tr,nr,y.normal),m.face=y}return m}class Cl extends Ts{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,m=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new cs(u,3)),this.setAttribute("normal",new cs(c,3)),this.setAttribute("uv",new cs(f,2));function y(p,h,g,v,x,_,w,b,P,S,E){const A=_/P,U=w/S,ne=_/2,z=w/2,N=b/2,V=P+1,K=S+1;let Z=0,R=0;const L=new F;for(let k=0;k<K;k++){const Y=k*U-z;for(let q=0;q<V;q++){const J=q*A-ne;L[p]=J*v,L[h]=Y*x,L[g]=N,u.push(L.x,L.y,L.z),L[p]=0,L[h]=0,L[g]=b>0?1:-1,c.push(L.x,L.y,L.z),f.push(q/P),f.push(1-k/S),Z+=1}}for(let k=0;k<S;k++)for(let Y=0;Y<P;Y++){const q=d+Y+V*k,J=d+Y+V*(k+1),le=d+(Y+1)+V*(k+1),_e=d+(Y+1)+V*k;l.push(q,J,_e),l.push(J,le,_e),R+=6}a.addGroup(m,R,E),m+=R,d+=Z}}static fromJSON(e){return new Cl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function zt(t){const e={};for(let n=0;n<t.length;n++){const i=zo(t[n]);for(const r in i)e[r]=i[r]}return e}function E4(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}const C4={clone:zo,merge:zt};var P4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends hf{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P4,this.fragmentShader=A4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=E4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class BM extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends BM{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ix*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ix*2*Math.atan(Math.tan(xd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xd*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=90,Bs=1;class L4 extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new An(Vs,Bs,e,n);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(1,0,0)),this.add(r);const s=new An(Vs,Bs,e,n);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new F(-1,0,0)),this.add(s);const o=new An(Vs,Bs,e,n);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new F(0,1,0)),this.add(o);const a=new An(Vs,Bs,e,n);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new An(Vs,Bs,e,n);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const u=new An(Vs,Bs,e,n);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new F(0,0,-1)),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Oi,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class HM extends Yn{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:No,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R4 extends _s{constructor(e,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new HM(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.encoding=n.encoding,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cl(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:kn,blending:Mr});s.uniforms.tEquirect.value=n;const o=new Ai(r,s),a=n.minFilter;return n.minFilter===df&&(n.minFilter=Pn),new L4(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Bd=new F,D4=new F,k4=new Rn;class qr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Bd.subVectors(i,n).cross(D4.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,n){const i=e.delta(Bd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||k4.getNormalMatrix(e),r=this.coplanarPoint(Bd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hs=new hg,Mu=new F;class WM{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],m=i[9],y=i[10],p=i[11],h=i[12],g=i[13],v=i[14],x=i[15];return n[0].setComponents(a-r,f-l,p-d,x-h).normalize(),n[1].setComponents(a+r,f+l,p+d,x+h).normalize(),n[2].setComponents(a+s,f+u,p+m,x+g).normalize(),n[3].setComponents(a-s,f-u,p-m,x-g).normalize(),n[4].setComponents(a-o,f-c,p-y,x-v).normalize(),n[5].setComponents(a+o,f+c,p+y,x+v).normalize(),this}intersectsObject(e){const n=e.geometry;return n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSprite(e){return Hs.center.set(0,0,0),Hs.radius=.7071067811865476,Hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Mu.x=r.normal.x>0?e.max.x:e.min.x,Mu.y=r.normal.y>0?e.max.y:e.min.y,Mu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function GM(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I4(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,m=t.createBuffer();t.bindBuffer(c,m),t.bufferData(c,f,d),u.onUploadCallback();let y;if(f instanceof Float32Array)y=5126;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(f instanceof Int16Array)y=5122;else if(f instanceof Uint32Array)y=5125;else if(f instanceof Int32Array)y=5124;else if(f instanceof Int8Array)y=5120;else if(f instanceof Uint8Array)y=5121;else if(f instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,m=c.updateRange;t.bindBuffer(f,u),m.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class pf extends Ts{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,m=[],y=[],p=[],h=[];for(let g=0;g<c;g++){const v=g*d-o;for(let x=0;x<u;x++){const _=x*f-s;y.push(_,-v,0),p.push(0,0,1),h.push(x/a),h.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){const x=v+u*g,_=v+u*(g+1),w=v+1+u*(g+1),b=v+1+u*g;m.push(x,_,b),m.push(_,w,b)}this.setIndex(m),this.setAttribute("position",new cs(y,3)),this.setAttribute("normal",new cs(p,3)),this.setAttribute("uv",new cs(h,2))}static fromJSON(e){return new pf(e.width,e.height,e.widthSegments,e.heightSegments)}}var N4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,O4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F4=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,z4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,V4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B4="vec3 transformed = vec3( position );",H4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W4=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,G4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,j4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,X4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,J4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,e5=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,t5=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n5=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,i5=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r5=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,s5=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o5=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a5="gl_FragColor = linearToOutputTexel( gl_FragColor );",l5=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,u5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,c5=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f5=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,d5=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h5=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p5=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m5=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g5=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v5=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y5=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,x5=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_5=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,S5=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,w5=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,M5=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,b5=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,T5=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E5=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,C5=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,P5=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,A5=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,L5=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,R5=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,D5=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,k5=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,I5=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N5=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O5=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,F5=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z5=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U5=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,B5=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H5=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W5=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G5=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j5=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$5=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,X5=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,q5=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Y5=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z5=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q5=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J5=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,ek=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,tk=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,nk=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,ik=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rk=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sk=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ok=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ak=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lk=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uk=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ck=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dk=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hk=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pk=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,mk=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gk=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vk=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,yk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xk=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_k=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mk=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bk=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Tk=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Ek=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ck=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Pk=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ak=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Lk=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Rk=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Dk=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kk=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ik=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ok=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fk=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zk=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Uk=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vk=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hk=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wk=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gk=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jk=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$k=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xk=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qk=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yk=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kk=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qk=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jk=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eI=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tI=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nI=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rI=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sI=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aI=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lI=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uI=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cI=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Le={alphamap_fragment:N4,alphamap_pars_fragment:O4,alphatest_fragment:F4,alphatest_pars_fragment:z4,aomap_fragment:U4,aomap_pars_fragment:V4,begin_vertex:B4,beginnormal_vertex:H4,bsdfs:W4,iridescence_fragment:G4,bumpmap_pars_fragment:j4,clipping_planes_fragment:$4,clipping_planes_pars_fragment:X4,clipping_planes_pars_vertex:q4,clipping_planes_vertex:Y4,color_fragment:K4,color_pars_fragment:Z4,color_pars_vertex:Q4,color_vertex:J4,common:e5,cube_uv_reflection_fragment:t5,defaultnormal_vertex:n5,displacementmap_pars_vertex:i5,displacementmap_vertex:r5,emissivemap_fragment:s5,emissivemap_pars_fragment:o5,encodings_fragment:a5,encodings_pars_fragment:l5,envmap_fragment:u5,envmap_common_pars_fragment:c5,envmap_pars_fragment:f5,envmap_pars_vertex:d5,envmap_physical_pars_fragment:b5,envmap_vertex:h5,fog_vertex:p5,fog_pars_vertex:m5,fog_fragment:g5,fog_pars_fragment:v5,gradientmap_pars_fragment:y5,lightmap_fragment:x5,lightmap_pars_fragment:_5,lights_lambert_fragment:S5,lights_lambert_pars_fragment:w5,lights_pars_begin:M5,lights_toon_fragment:T5,lights_toon_pars_fragment:E5,lights_phong_fragment:C5,lights_phong_pars_fragment:P5,lights_physical_fragment:A5,lights_physical_pars_fragment:L5,lights_fragment_begin:R5,lights_fragment_maps:D5,lights_fragment_end:k5,logdepthbuf_fragment:I5,logdepthbuf_pars_fragment:N5,logdepthbuf_pars_vertex:O5,logdepthbuf_vertex:F5,map_fragment:z5,map_pars_fragment:U5,map_particle_fragment:V5,map_particle_pars_fragment:B5,metalnessmap_fragment:H5,metalnessmap_pars_fragment:W5,morphcolor_vertex:G5,morphnormal_vertex:j5,morphtarget_pars_vertex:$5,morphtarget_vertex:X5,normal_fragment_begin:q5,normal_fragment_maps:Y5,normal_pars_fragment:K5,normal_pars_vertex:Z5,normal_vertex:Q5,normalmap_pars_fragment:J5,clearcoat_normal_fragment_begin:ek,clearcoat_normal_fragment_maps:tk,clearcoat_pars_fragment:nk,iridescence_pars_fragment:ik,output_fragment:rk,packing:sk,premultiplied_alpha_fragment:ok,project_vertex:ak,dithering_fragment:lk,dithering_pars_fragment:uk,roughnessmap_fragment:ck,roughnessmap_pars_fragment:fk,shadowmap_pars_fragment:dk,shadowmap_pars_vertex:hk,shadowmap_vertex:pk,shadowmask_pars_fragment:mk,skinbase_vertex:gk,skinning_pars_vertex:vk,skinning_vertex:yk,skinnormal_vertex:xk,specularmap_fragment:_k,specularmap_pars_fragment:Sk,tonemapping_fragment:wk,tonemapping_pars_fragment:Mk,transmission_fragment:bk,transmission_pars_fragment:Tk,uv_pars_fragment:Ek,uv_pars_vertex:Ck,uv_vertex:Pk,uv2_pars_fragment:Ak,uv2_pars_vertex:Lk,uv2_vertex:Rk,worldpos_vertex:Dk,background_vert:kk,background_frag:Ik,cube_vert:Nk,cube_frag:Ok,depth_vert:Fk,depth_frag:zk,distanceRGBA_vert:Uk,distanceRGBA_frag:Vk,equirect_vert:Bk,equirect_frag:Hk,linedashed_vert:Wk,linedashed_frag:Gk,meshbasic_vert:jk,meshbasic_frag:$k,meshlambert_vert:Xk,meshlambert_frag:qk,meshmatcap_vert:Yk,meshmatcap_frag:Kk,meshnormal_vert:Zk,meshnormal_frag:Qk,meshphong_vert:Jk,meshphong_frag:eI,meshphysical_vert:tI,meshphysical_frag:nI,meshtoon_vert:iI,meshtoon_frag:rI,points_vert:sI,points_frag:oI,shadow_vert:aI,shadow_frag:lI,sprite_vert:uI,sprite_frag:cI},re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Rn},uv2Transform:{value:new Rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Rn}}},ni={basic:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Le.meshbasic_vert,fragmentShader:Le.meshbasic_frag},lambert:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshlambert_vert,fragmentShader:Le.meshlambert_frag},phong:{uniforms:zt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Le.meshphong_vert,fragmentShader:Le.meshphong_frag},standard:{uniforms:zt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag},toon:{uniforms:zt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new je(0)}}]),vertexShader:Le.meshtoon_vert,fragmentShader:Le.meshtoon_frag},matcap:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Le.meshmatcap_vert,fragmentShader:Le.meshmatcap_frag},points:{uniforms:zt([re.points,re.fog]),vertexShader:Le.points_vert,fragmentShader:Le.points_frag},dashed:{uniforms:zt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Le.linedashed_vert,fragmentShader:Le.linedashed_frag},depth:{uniforms:zt([re.common,re.displacementmap]),vertexShader:Le.depth_vert,fragmentShader:Le.depth_frag},normal:{uniforms:zt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Le.meshnormal_vert,fragmentShader:Le.meshnormal_frag},sprite:{uniforms:zt([re.sprite,re.fog]),vertexShader:Le.sprite_vert,fragmentShader:Le.sprite_frag},background:{uniforms:{uvTransform:{value:new Rn},t2D:{value:null}},vertexShader:Le.background_vert,fragmentShader:Le.background_frag},cube:{uniforms:zt([re.envmap,{opacity:{value:1}}]),vertexShader:Le.cube_vert,fragmentShader:Le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Le.equirect_vert,fragmentShader:Le.equirect_frag},distanceRGBA:{uniforms:zt([re.common,re.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Le.distanceRGBA_vert,fragmentShader:Le.distanceRGBA_frag},shadow:{uniforms:zt([re.lights,re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Le.shadow_vert,fragmentShader:Le.shadow_frag}};ni.physical={uniforms:zt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Le.meshphysical_vert,fragmentShader:Le.meshphysical_frag};function fI(t,e,n,i,r,s){const o=new je(0);let a=r===!0?0:1,l,u,c=null,f=0,d=null;function m(p,h){let g=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=e.get(v));const x=t.xr,_=x.getSession&&x.getSession();_&&_.environmentBlendMode==="additive"&&(v=null),v===null?y(o,a):v&&v.isColor&&(y(v,1),g=!0),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ff)?(u===void 0&&(u=new Ai(new Cl(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:zo(ni.cube.uniforms),vertexShader:ni.cube.vertexShader,fragmentShader:ni.cube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(c!==v||f!==v.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ai(new pf(2,2),new Pr({name:"BackgroundMaterial",uniforms:zo(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Io,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||f!==v.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,c=v,f=v.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,h){n.buffers.color.setClear(p.r,p.g,p.b,h,s)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),a=h,y(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,y(o,a)},render:m}}function dI(t,e,n,i){const r=t.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=h(null);let u=l,c=!1;function f(N,V,K,Z,R){let L=!1;if(o){const k=p(Z,K,V);u!==k&&(u=k,m(u.object)),L=g(N,Z,K,R),L&&v(N,Z,K,R)}else{const k=V.wireframe===!0;(u.geometry!==Z.id||u.program!==K.id||u.wireframe!==k)&&(u.geometry=Z.id,u.program=K.id,u.wireframe=k,L=!0)}R!==null&&n.update(R,34963),(L||c)&&(c=!1,S(N,V,K,Z),R!==null&&t.bindBuffer(34963,n.get(R).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function y(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function p(N,V,K){const Z=K.wireframe===!0;let R=a[N.id];R===void 0&&(R={},a[N.id]=R);let L=R[V.id];L===void 0&&(L={},R[V.id]=L);let k=L[Z];return k===void 0&&(k=h(d()),L[Z]=k),k}function h(N){const V=[],K=[],Z=[];for(let R=0;R<r;R++)V[R]=0,K[R]=0,Z[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:K,attributeDivisors:Z,object:N,attributes:{},index:null}}function g(N,V,K,Z){const R=u.attributes,L=V.attributes;let k=0;const Y=K.getAttributes();for(const q in Y)if(Y[q].location>=0){const le=R[q];let _e=L[q];if(_e===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),le===void 0||le.attribute!==_e||_e&&le.data!==_e.data)return!0;k++}return u.attributesNum!==k||u.index!==Z}function v(N,V,K,Z){const R={},L=V.attributes;let k=0;const Y=K.getAttributes();for(const q in Y)if(Y[q].location>=0){let le=L[q];le===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const _e={};_e.attribute=le,le&&le.data&&(_e.data=le.data),R[q]=_e,k++}u.attributes=R,u.attributesNum=k,u.index=Z}function x(){const N=u.newAttributes;for(let V=0,K=N.length;V<K;V++)N[V]=0}function _(N){w(N,0)}function w(N,V){const K=u.newAttributes,Z=u.enabledAttributes,R=u.attributeDivisors;K[N]=1,Z[N]===0&&(t.enableVertexAttribArray(N),Z[N]=1),R[N]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,V),R[N]=V)}function b(){const N=u.newAttributes,V=u.enabledAttributes;for(let K=0,Z=V.length;K<Z;K++)V[K]!==N[K]&&(t.disableVertexAttribArray(K),V[K]=0)}function P(N,V,K,Z,R,L){i.isWebGL2===!0&&(K===5124||K===5125)?t.vertexAttribIPointer(N,V,K,R,L):t.vertexAttribPointer(N,V,K,Z,R,L)}function S(N,V,K,Z){if(i.isWebGL2===!1&&(N.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const R=Z.attributes,L=K.getAttributes(),k=V.defaultAttributeValues;for(const Y in L){const q=L[Y];if(q.location>=0){let J=R[Y];if(J===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const le=J.normalized,_e=J.itemSize,$=n.get(J);if($===void 0)continue;const Ie=$.buffer,Se=$.type,Me=$.bytesPerElement;if(J.isInterleavedBufferAttribute){const he=J.data,$e=he.stride,Pe=J.offset;if(he.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)w(q.location+xe,he.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let xe=0;xe<q.locationSize;xe++)_(q.location+xe);t.bindBuffer(34962,Ie);for(let xe=0;xe<q.locationSize;xe++)P(q.location+xe,_e/q.locationSize,Se,le,$e*Me,(Pe+_e/q.locationSize*xe)*Me)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)w(q.location+he,J.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<q.locationSize;he++)_(q.location+he);t.bindBuffer(34962,Ie);for(let he=0;he<q.locationSize;he++)P(q.location+he,_e/q.locationSize,Se,le,_e*Me,_e/q.locationSize*he*Me)}}else if(k!==void 0){const le=k[Y];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(q.location,le);break;case 3:t.vertexAttrib3fv(q.location,le);break;case 4:t.vertexAttrib4fv(q.location,le);break;default:t.vertexAttrib1fv(q.location,le)}}}}b()}function E(){ne();for(const N in a){const V=a[N];for(const K in V){const Z=V[K];for(const R in Z)y(Z[R].object),delete Z[R];delete V[K]}delete a[N]}}function A(N){if(a[N.id]===void 0)return;const V=a[N.id];for(const K in V){const Z=V[K];for(const R in Z)y(Z[R].object),delete Z[R];delete V[K]}delete a[N.id]}function U(N){for(const V in a){const K=a[V];if(K[N.id]===void 0)continue;const Z=K[N.id];for(const R in Z)y(Z[R].object),delete Z[R];delete K[N.id]}}function ne(){z(),c=!0,u!==l&&(u=l,m(u.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ne,resetDefaultState:z,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:_,disableUnusedAttributes:b}}function hI(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,m;if(r)d=t,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,f),n.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function pI(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){if(P==="highp"){if(t.getShaderPrecisionFormat(35633,36338).precision>0&&t.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(35633,36337).precision>0&&t.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&t instanceof WebGL2ComputeRenderingContext;let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,f=t.getParameter(34930),d=t.getParameter(35660),m=t.getParameter(3379),y=t.getParameter(34076),p=t.getParameter(34921),h=t.getParameter(36347),g=t.getParameter(36348),v=t.getParameter(36349),x=d>0,_=o||e.has("OES_texture_float"),w=x&&_,b=o?t.getParameter(36183):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:h,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:_,floatVertexTextures:w,maxSamples:b}}function mI(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qr,a=new Rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d,m){const y=f.length!==0||d||i!==0||r;return r=d,n=c(f,m,0),i=f.length,y},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1,u()},this.setState=function(f,d,m){const y=f.clippingPlanes,p=f.clipIntersection,h=f.clipShadows,g=t.get(f);if(!r||y===null||y.length===0||s&&!h)s?c(null):u();else{const v=s?0:i,x=v*4;let _=g.clippingState||null;l.value=_,_=c(y,d,x,m);for(let w=0;w!==x;++w)_[w]=n[w];g.clippingState=_,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,m,y){const p=f!==null?f.length:0;let h=null;if(p!==0){if(h=l.value,y!==!0||h===null){const g=m+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(h===null||h.length<g)&&(h=new Float32Array(g));for(let x=0,_=m;x!==p;++x,_+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(h,_),h[_+3]=o.constant}l.value=h,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,h}}function gI(t){let e=new WeakMap;function n(o,a){return a===fp?o.mapping=No:a===dp&&(o.mapping=Oo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fp||a===dp)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new R4(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pg extends BM{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=4,gx=[.125,.215,.35,.446,.526,.582],Kr=20,Hd=new pg,vx=new je;let Wd=null;const Yr=(1+Math.sqrt(5))/2,Ws=1/Yr,yx=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Yr,Ws),new F(0,Yr,-Ws),new F(Ws,0,Yr),new F(-Ws,0,Yr),new F(Yr,Ws,0),new F(-Yr,Ws,0)];class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wd=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wd),e.scissorTest=!1,bu(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===No||e.mapping===Oo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wd=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:il,format:oi,encoding:xs,depthBuffer:!1},r=_x(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_x(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vI(s)),this._blurMaterial=yI(s,e,n)}return r}_compileMaterial(e){const n=new Ai(this._lodPlanes[0],e);this._renderer.compile(n,Hd)}_sceneToCubeUV(e,n,i,r){const a=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(vx),c.toneMapping=Oi,c.autoClear=!1;const m=new zM({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),y=new Ai(new Cl,m);let p=!1;const h=e.background;h?h.isColor&&(m.color.copy(h),e.background=null,p=!0):(m.color.copy(vx),p=!0);for(let g=0;g<6;g++){const v=g%3;v===0?(a.up.set(0,l[g],0),a.lookAt(u[g],0,0)):v===1?(a.up.set(0,0,l[g]),a.lookAt(0,u[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,u[g]));const x=this._cubeSize;bu(r,v*x,g>2?x:0,x,x),c.setRenderTarget(r),p&&c.render(y,a),c.render(e,a)}y.geometry.dispose(),y.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=h}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===No||e.mapping===Oo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;bu(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Hd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yx[(r-1)%yx.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ai(this._lodPlanes[r],u),d=u.uniforms,m=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Kr-1),p=s/y,h=isFinite(s)?1+Math.floor(c*p):Kr;h>Kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Kr}`);const g=[];let v=0;for(let P=0;P<Kr;++P){const S=P/p,E=Math.exp(-S*S/2);g.push(E),P===0?v+=E:P<h&&(v+=2*E)}for(let P=0;P<g.length;P++)g[P]=g[P]/v;d.envMap.value=e.texture,d.samples.value=h,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=y,d.mipInt.value=x-i;const _=this._sizeLods[r],w=3*_*(r>x-uo?r-x+uo:0),b=4*(this._cubeSize-_);bu(n,w,b,3*_,2*_),l.setRenderTarget(n),l.render(f,Hd)}}function vI(t){const e=[],n=[],i=[];let r=t;const s=t-uo+1+gx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-uo?l=gx[o-t+uo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],m=6,y=6,p=3,h=2,g=1,v=new Float32Array(p*y*m),x=new Float32Array(h*y*m),_=new Float32Array(g*y*m);for(let b=0;b<m;b++){const P=b%3*2/3-1,S=b>2?0:-1,E=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];v.set(E,p*y*b),x.set(d,h*y*b);const A=[b,b,b,b,b,b];_.set(A,g*y*b)}const w=new Ts;w.setAttribute("position",new di(v,p)),w.setAttribute("uv",new di(x,h)),w.setAttribute("faceIndex",new di(_,g)),e.push(w),r>uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _x(t,e,n){const i=new _s(t,e,n);return i.texture.mapping=ff,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bu(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yI(t,e,n){const i=new Float32Array(Kr),r=new F(0,1,0);return new Pr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Sx(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function wx(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function mg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xI(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===fp||l===dp,c=l===No||l===Oo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new xx(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){n===null&&(n=new xx(t));const d=u?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _I(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function SI(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const y in d)e.update(d[y],34962);const m=f.morphAttributes;for(const y in m){const p=m[y];for(let h=0,g=p.length;h<g;h++)e.update(p[h],34962)}}function u(f){const d=[],m=f.index,y=f.attributes.position;let p=0;if(m!==null){const v=m.array;p=m.version;for(let x=0,_=v.length;x<_;x+=3){const w=v[x+0],b=v[x+1],P=v[x+2];d.push(w,b,b,P,P,w)}}else{const v=y.array;p=y.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const w=x+0,b=x+1,P=x+2;d.push(w,b,b,P,P,w)}}const h=new(DM(d)?VM:UM)(d,1);h.version=p;const g=s.get(f);g&&e.remove(g),s.set(f,h)}function c(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function wI(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,m){t.drawElements(s,m,a,d*l),n.update(m,s,1)}function f(d,m,y){if(y===0)return;let p,h;if(r)p=t,h="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[h](s,m,a,d*l,y),n.update(m,s,y)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function MI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case 4:n.triangles+=a*(s/3);break;case 1:n.lines+=a*(s/2);break;case 3:n.lines+=a*(s-1);break;case 2:n.lines+=a*s;break;case 0:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bI(t,e){return t[0]-e[0]}function TI(t,e){return Math.abs(e[1])-Math.abs(t[1])}function EI(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Lt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f,d){const m=u.morphTargetInfluences;if(e.isWebGL2===!0){const p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,h=p!==void 0?p.length:0;let g=s.get(c);if(g===void 0||g.count!==h){let K=function(){N.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var y=K;g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,b=c.morphAttributes.color!==void 0,P=c.morphAttributes.position||[],S=c.morphAttributes.normal||[],E=c.morphAttributes.color||[];let A=0;_===!0&&(A=1),w===!0&&(A=2),b===!0&&(A=3);let U=c.attributes.position.count*A,ne=1;U>e.maxTextureSize&&(ne=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const z=new Float32Array(U*ne*4*h),N=new OM(z,U,ne,h);N.type=is,N.needsUpdate=!0;const V=A*4;for(let Z=0;Z<h;Z++){const R=P[Z],L=S[Z],k=E[Z],Y=U*ne*4*Z;for(let q=0;q<R.count;q++){const J=q*V;_===!0&&(o.fromBufferAttribute(R,q),z[Y+J+0]=o.x,z[Y+J+1]=o.y,z[Y+J+2]=o.z,z[Y+J+3]=0),w===!0&&(o.fromBufferAttribute(L,q),z[Y+J+4]=o.x,z[Y+J+5]=o.y,z[Y+J+6]=o.z,z[Y+J+7]=0),b===!0&&(o.fromBufferAttribute(k,q),z[Y+J+8]=o.x,z[Y+J+9]=o.y,z[Y+J+10]=o.z,z[Y+J+11]=k.itemSize===4?o.w:1)}}g={count:h,texture:N,size:new Be(U,ne)},s.set(c,g),c.addEventListener("dispose",K)}let v=0;for(let _=0;_<m.length;_++)v+=m[_];const x=c.morphTargetsRelative?1:1-v;d.getUniforms().setValue(t,"morphTargetBaseInfluence",x),d.getUniforms().setValue(t,"morphTargetInfluences",m),d.getUniforms().setValue(t,"morphTargetsTexture",g.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",g.size)}else{const p=m===void 0?0:m.length;let h=i[c.id];if(h===void 0||h.length!==p){h=[];for(let w=0;w<p;w++)h[w]=[w,0];i[c.id]=h}for(let w=0;w<p;w++){const b=h[w];b[0]=w,b[1]=m[w]}h.sort(TI);for(let w=0;w<8;w++)w<p&&h[w][1]?(a[w][0]=h[w][0],a[w][1]=h[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(bI);const g=c.morphAttributes.position,v=c.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const b=a[w],P=b[0],S=b[1];P!==Number.MAX_SAFE_INTEGER&&S?(g&&c.getAttribute("morphTarget"+w)!==g[P]&&c.setAttribute("morphTarget"+w,g[P]),v&&c.getAttribute("morphNormal"+w)!==v[P]&&c.setAttribute("morphNormal"+w,v[P]),r[w]=S,x+=S):(g&&c.hasAttribute("morphTarget"+w)===!0&&c.deleteAttribute("morphTarget"+w),v&&c.hasAttribute("morphNormal"+w)===!0&&c.deleteAttribute("morphNormal"+w),r[w]=0)}const _=c.morphTargetsRelative?1:1-x;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function CI(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,34962),l.instanceColor!==null&&n.update(l.instanceColor,34962)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const jM=new Yn,$M=new OM,XM=new p4,qM=new HM,Mx=[],bx=[],Tx=new Float32Array(16),Ex=new Float32Array(9),Cx=new Float32Array(4);function qo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Mx[r];if(s===void 0&&(s=new Float32Array(r),Mx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function mf(t,e){let n=bx[e];n===void 0&&(n=new Int32Array(e),bx[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function AI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function LI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function RI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function DI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Cx.set(i),t.uniformMatrix2fv(this.addr,!1,Cx),qt(n,i)}}function kI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Ex.set(i),t.uniformMatrix3fv(this.addr,!1,Ex),qt(n,i)}}function II(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;Tx.set(i),t.uniformMatrix4fv(this.addr,!1,Tx),qt(n,i)}}function NI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OI(t,e){const n=this.cache;Xt(n,e)||(t.uniform2iv(this.addr,e),qt(n,e))}function FI(t,e){const n=this.cache;Xt(n,e)||(t.uniform3iv(this.addr,e),qt(n,e))}function zI(t,e){const n=this.cache;Xt(n,e)||(t.uniform4iv(this.addr,e),qt(n,e))}function UI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VI(t,e){const n=this.cache;Xt(n,e)||(t.uniform2uiv(this.addr,e),qt(n,e))}function BI(t,e){const n=this.cache;Xt(n,e)||(t.uniform3uiv(this.addr,e),qt(n,e))}function HI(t,e){const n=this.cache;Xt(n,e)||(t.uniform4uiv(this.addr,e),qt(n,e))}function WI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||jM,r)}function GI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||XM,r)}function jI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qM,r)}function $I(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$M,r)}function XI(t){switch(t){case 5126:return PI;case 35664:return AI;case 35665:return LI;case 35666:return RI;case 35674:return DI;case 35675:return kI;case 35676:return II;case 5124:case 35670:return NI;case 35667:case 35671:return OI;case 35668:case 35672:return FI;case 35669:case 35673:return zI;case 5125:return UI;case 36294:return VI;case 36295:return BI;case 36296:return HI;case 35678:case 36198:case 36298:case 36306:case 35682:return WI;case 35679:case 36299:case 36307:return GI;case 35680:case 36300:case 36308:case 36293:return jI;case 36289:case 36303:case 36311:case 36292:return $I}}function qI(t,e){t.uniform1fv(this.addr,e)}function YI(t,e){const n=qo(e,this.size,2);t.uniform2fv(this.addr,n)}function KI(t,e){const n=qo(e,this.size,3);t.uniform3fv(this.addr,n)}function ZI(t,e){const n=qo(e,this.size,4);t.uniform4fv(this.addr,n)}function QI(t,e){const n=qo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function JI(t,e){const n=qo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function eN(t,e){const n=qo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function tN(t,e){t.uniform1iv(this.addr,e)}function nN(t,e){t.uniform2iv(this.addr,e)}function iN(t,e){t.uniform3iv(this.addr,e)}function rN(t,e){t.uniform4iv(this.addr,e)}function sN(t,e){t.uniform1uiv(this.addr,e)}function oN(t,e){t.uniform2uiv(this.addr,e)}function aN(t,e){t.uniform3uiv(this.addr,e)}function lN(t,e){t.uniform4uiv(this.addr,e)}function uN(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2D(e[s]||jM,r[s])}function cN(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture3D(e[s]||XM,r[s])}function fN(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTextureCube(e[s]||qM,r[s])}function dN(t,e,n){const i=e.length,r=mf(n,i);t.uniform1iv(this.addr,r);for(let s=0;s!==i;++s)n.setTexture2DArray(e[s]||$M,r[s])}function hN(t){switch(t){case 5126:return qI;case 35664:return YI;case 35665:return KI;case 35666:return ZI;case 35674:return QI;case 35675:return JI;case 35676:return eN;case 5124:case 35670:return tN;case 35667:case 35671:return nN;case 35668:case 35672:return iN;case 35669:case 35673:return rN;case 5125:return sN;case 36294:return oN;case 36295:return aN;case 36296:return lN;case 35678:case 36198:case 36298:case 36306:case 35682:return uN;case 35679:case 36299:case 36307:return cN;case 35680:case 36300:case 36308:case 36293:return fN;case 36289:case 36303:case 36311:case 36292:return dN}}class pN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=XI(n.type)}}class mN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=hN(n.type)}}class gN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Px(t,e){t.seq.push(e),t.map[e.id]=e}function vN(t,e,n){const i=t.name,r=i.length;for(Gd.lastIndex=0;;){const s=Gd.exec(i),o=Gd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Px(n,u===void 0?new pN(a,t,e):new mN(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new gN(a),Px(n,f)),n=f}}}class Xu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vN(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ax(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let yN=0;function xN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function _N(t){switch(t){case xs:return["Linear","( value )"];case lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",t),["Linear","( value )"]}}function Lx(t,e,n){const i=t.getShaderParameter(e,35713),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+xN(t.getShaderSource(e),o)}else return r}function SN(t,e){const n=_N(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wN(t,e){let n;switch(e){case VD:n="Linear";break;case BD:n="Reinhard";break;case HD:n="OptimizedCineon";break;case WD:n="ACESFilmic";break;case GD:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function MN(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.tangentSpaceNormalMap||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(va).join(`
`)}function bN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function TN(t,e){const n={},i=t.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function va(t){return t!==""}function Rx(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dx(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EN=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(t){return t.replace(EN,CN)}function CN(t,e){const n=Le[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return vp(n)}const PN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kx(t){return t.replace(PN,AN)}function AN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ix(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LN(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===EM?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===yD?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ga&&(e="SHADOWMAP_TYPE_VSM"),e}function RN(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case No:case Oo:e="ENVMAP_TYPE_CUBE";break;case ff:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DN(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Oo:e="ENVMAP_MODE_REFRACTION";break}return e}function kN(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case AM:e="ENVMAP_BLENDING_MULTIPLY";break;case zD:e="ENVMAP_BLENDING_MIX";break;case UD:e="ENVMAP_BLENDING_ADD";break}return e}function IN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=LN(n),u=RN(n),c=DN(n),f=kN(n),d=IN(n),m=n.isWebGL2?"":MN(n),y=bN(s),p=r.createProgram();let h,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(h=[y].filter(va).join(`
`),h.length>0&&(h+=`
`),g=[m,y].filter(va).join(`
`),g.length>0&&(g+=`
`)):(h=[Ix(n),"#define SHADER_NAME "+n.shaderName,y,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.supportsVertexTextures?"#define VERTEX_TEXTURES":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.displacementMap&&n.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),g=[m,Ix(n),"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMap&&n.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",n.normalMap&&n.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",n.specularColorMap?"#define USE_SPECULARCOLORMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEENCOLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUvs?"#define USE_UV":"",n.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Oi?"#define TONE_MAPPING":"",n.toneMapping!==Oi?Le.tonemapping_pars_fragment:"",n.toneMapping!==Oi?wN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Le.encodings_pars_fragment,SN("linearToOutputTexel",n.outputEncoding),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(va).join(`
`)),o=vp(o),o=Rx(o,n),o=Dx(o,n),a=vp(a),a=Rx(a,n),a=Dx(a,n),o=kx(o),a=kx(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,g=["#define varying in",n.glslVersion===nx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=v+h+o,_=v+g+a,w=Ax(r,35633,x),b=Ax(r,35632,_);if(r.attachShader(p,w),r.attachShader(p,b),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),t.debug.checkShaderErrors){const E=r.getProgramInfoLog(p).trim(),A=r.getShaderInfoLog(w).trim(),U=r.getShaderInfoLog(b).trim();let ne=!0,z=!0;if(r.getProgramParameter(p,35714)===!1){ne=!1;const N=Lx(r,w,"vertex"),V=Lx(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+E+`
`+N+`
`+V)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(A===""||U==="")&&(z=!1);z&&(this.diagnostics={runnable:ne,programLog:E,vertexShader:{log:A,prefix:h},fragmentShader:{log:U,prefix:g}})}r.deleteShader(w),r.deleteShader(b);let P;this.getUniforms=function(){return P===void 0&&(P=new Xu(r,p)),P};let S;return this.getAttributes=function(){return S===void 0&&(S=TN(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=n.shaderName,this.id=yN++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=b,this}let ON=0;class FN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zN(e),n.set(e,i)),i}}class zN{constructor(e){this.id=ON++,this.code=e,this.usedTimes=0}}function UN(t,e,n,i,r,s,o){const a=new FM,l=new FN,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,E,A,U,ne){const z=U.fog,N=ne.geometry,V=S.isMeshStandardMaterial?U.environment:null,K=(S.isMeshStandardMaterial?n:e).get(S.envMap||V),Z=K&&K.mapping===ff?K.image.height:null,R=y[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const L=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,k=L!==void 0?L.length:0;let Y=0;N.morphAttributes.position!==void 0&&(Y=1),N.morphAttributes.normal!==void 0&&(Y=2),N.morphAttributes.color!==void 0&&(Y=3);let q,J,le,_e;if(R){const $e=ni[R];q=$e.vertexShader,J=$e.fragmentShader}else q=S.vertexShader,J=S.fragmentShader,l.update(S),le=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const $=t.getRenderTarget(),Ie=S.alphaTest>0,Se=S.clearcoat>0,Me=S.iridescence>0;return{isWebGL2:c,shaderID:R,shaderName:S.type,vertexShader:q,fragmentShader:J,defines:S.defines,customVertexShaderID:le,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?t.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:xs,map:!!S.map,matcap:!!S.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:Z,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===c4,tangentSpaceNormalMap:S.normalMapType===u4,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===lt,clearcoat:Se,clearcoatMap:Se&&!!S.clearcoatMap,clearcoatRoughnessMap:Se&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!S.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!S.iridescenceMap,iridescenceThicknessMap:Me&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===xo,alphaMap:!!S.alphaMap,alphaTest:Ie,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!N.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!z,useFog:S.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ne.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Y,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:S.toneMapped?t.toneMapping:Oi,physicallyCorrectLights:t.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===hr,flipSided:S.side===kn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)E.push(A),E.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(g(E,S),v(E,S),E.push(t.outputEncoding)),E.push(S.customProgramCacheKey),E.join()}function g(S,E){S.push(E.precision),S.push(E.outputEncoding),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.combine),S.push(E.vertexUvs),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function v(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),S.push(a.mask)}function x(S){const E=y[S.type];let A;if(E){const U=ni[E];A=C4.clone(U.uniforms)}else A=S.uniforms;return A}function _(S,E){let A;for(let U=0,ne=u.length;U<ne;U++){const z=u[U];if(z.cacheKey===E){A=z,++A.usedTimes;break}}return A===void 0&&(A=new NN(t,E,S,s),u.push(A)),A}function w(S){if(--S.usedTimes===0){const E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),S.destroy()}}function b(S){l.remove(S)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:x,acquireProgram:_,releaseProgram:w,releaseShaderCache:b,programs:u,dispose:P}}function VN(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function BN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ox(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,m,y,p,h){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:d,material:m,groupOrder:y,renderOrder:f.renderOrder,z:p,group:h},t[e]=g):(g.id=f.id,g.object=f,g.geometry=d,g.material=m,g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=p,g.group=h),e++,g}function a(f,d,m,y,p,h){const g=o(f,d,m,y,p,h);m.transmission>0?i.push(g):m.transparent===!0?r.push(g):n.push(g)}function l(f,d,m,y,p,h){const g=o(f,d,m,y,p,h);m.transmission>0?i.unshift(g):m.transparent===!0?r.unshift(g):n.unshift(g)}function u(f,d){n.length>1&&n.sort(f||BN),i.length>1&&i.sort(d||Nx),r.length>1&&r.sort(d||Nx)}function c(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function HN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ox,t.set(i,[o])):r>=s.length?(o=new Ox,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function WN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new je};break;case"SpotLight":n={position:new F,direction:new F,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function GN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jN=0;function $N(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XN(t,e){const n=new WN,i=GN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,o=new kt,a=new kt;function l(c,f){let d=0,m=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let p=0,h=0,g=0,v=0,x=0,_=0,w=0,b=0,P=0,S=0;c.sort($N);const E=f!==!0?Math.PI:1;for(let U=0,ne=c.length;U<ne;U++){const z=c[U],N=z.color,V=z.intensity,K=z.distance,Z=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)d+=N.r*V*E,m+=N.g*V*E,y+=N.b*V*E;else if(z.isLightProbe)for(let R=0;R<9;R++)r.probe[R].addScaledVector(z.sh.coefficients[R],V);else if(z.isDirectionalLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*E),z.castShadow){const L=z.shadow,k=i.get(z);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,r.directionalShadow[p]=k,r.directionalShadowMap[p]=Z,r.directionalShadowMatrix[p]=z.shadow.matrix,_++}r.directional[p]=R,p++}else if(z.isSpotLight){const R=n.get(z);R.position.setFromMatrixPosition(z.matrixWorld),R.color.copy(N).multiplyScalar(V*E),R.distance=K,R.coneCos=Math.cos(z.angle),R.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),R.decay=z.decay,r.spot[g]=R;const L=z.shadow;if(z.map&&(r.spotLightMap[P]=z.map,P++,L.updateMatrices(z),z.castShadow&&S++),r.spotLightMatrix[g]=L.matrix,z.castShadow){const k=i.get(z);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,r.spotShadow[g]=k,r.spotShadowMap[g]=Z,b++}g++}else if(z.isRectAreaLight){const R=n.get(z);R.color.copy(N).multiplyScalar(V),R.halfWidth.set(z.width*.5,0,0),R.halfHeight.set(0,z.height*.5,0),r.rectArea[v]=R,v++}else if(z.isPointLight){const R=n.get(z);if(R.color.copy(z.color).multiplyScalar(z.intensity*E),R.distance=z.distance,R.decay=z.decay,z.castShadow){const L=z.shadow,k=i.get(z);k.shadowBias=L.bias,k.shadowNormalBias=L.normalBias,k.shadowRadius=L.radius,k.shadowMapSize=L.mapSize,k.shadowCameraNear=L.camera.near,k.shadowCameraFar=L.camera.far,r.pointShadow[h]=k,r.pointShadowMap[h]=Z,r.pointShadowMatrix[h]=z.shadow.matrix,w++}r.point[h]=R,h++}else if(z.isHemisphereLight){const R=n.get(z);R.skyColor.copy(z.color).multiplyScalar(V*E),R.groundColor.copy(z.groundColor).multiplyScalar(V*E),r.hemi[x]=R,x++}}v>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=re.LTC_FLOAT_1,r.rectAreaLTC2=re.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=re.LTC_HALF_1,r.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=y;const A=r.hash;(A.directionalLength!==p||A.pointLength!==h||A.spotLength!==g||A.rectAreaLength!==v||A.hemiLength!==x||A.numDirectionalShadows!==_||A.numPointShadows!==w||A.numSpotShadows!==b||A.numSpotMaps!==P)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=v,r.point.length=h,r.hemi.length=x,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=b+P-S,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=S,A.directionalLength=p,A.pointLength=h,A.spotLength=g,A.rectAreaLength=v,A.hemiLength=x,A.numDirectionalShadows=_,A.numPointShadows=w,A.numSpotShadows=b,A.numSpotMaps=P,r.version=jN++)}function u(c,f){let d=0,m=0,y=0,p=0,h=0;const g=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const _=c[v];if(_.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),d++}else if(_.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(g),y++}else if(_.isRectAreaLight){const w=r.rectArea[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),a.identity(),o.copy(_.matrixWorld),o.premultiply(g),a.extractRotation(o),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),p++}else if(_.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),m++}else if(_.isHemisphereLight){const w=r.hemi[h];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),h++}}}return{setup:l,setupView:u,state:r}}function Fx(t,e){const n=new XN(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function u(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function qN(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Fx(t,e),n.set(s,[l])):o>=a.length?(l=new Fx(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class YN extends hf{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a4,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class KN extends hf{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ZN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,QN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function JN(t,e,n){let i=new WM;const r=new Be,s=new Be,o=new Lt,a=new YN({depthPacking:l4}),l=new KN,u={},c=n.maxTextureSize,f={0:kn,1:Io,2:hr},d=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:ZN,fragmentShader:QN}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const y=new Ts;y.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ai(y,d),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=EM,this.render=function(_,w,b){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||_.length===0)return;const P=t.getRenderTarget(),S=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),A=t.state;A.setBlending(Mr),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let U=0,ne=_.length;U<ne;U++){const z=_[U],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const V=N.getFrameExtents();if(r.multiply(V),s.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/V.x),r.x=s.x*V.x,N.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/V.y),r.y=s.y*V.y,N.mapSize.y=s.y)),N.map===null){const Z=this.type!==ga?{minFilter:Qt,magFilter:Qt}:{};N.map=new _s(r.x,r.y,Z),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const K=N.getViewportCount();for(let Z=0;Z<K;Z++){const R=N.getViewport(Z);o.set(s.x*R.x,s.y*R.y,s.x*R.z,s.y*R.w),A.viewport(o),N.updateMatrices(z,Z),i=N.getFrustum(),x(w,b,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ga&&g(N,b),N.needsUpdate=!1}h.needsUpdate=!1,t.setRenderTarget(P,S,E)};function g(_,w){const b=e.update(p);d.defines.VSM_SAMPLES!==_.blurSamples&&(d.defines.VSM_SAMPLES=_.blurSamples,m.defines.VSM_SAMPLES=_.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),_.mapPass===null&&(_.mapPass=new _s(r.x,r.y)),d.uniforms.shadow_pass.value=_.map.texture,d.uniforms.resolution.value=_.mapSize,d.uniforms.radius.value=_.radius,t.setRenderTarget(_.mapPass),t.clear(),t.renderBufferDirect(w,null,b,d,p,null),m.uniforms.shadow_pass.value=_.mapPass.texture,m.uniforms.resolution.value=_.mapSize,m.uniforms.radius.value=_.radius,t.setRenderTarget(_.map),t.clear(),t.renderBufferDirect(w,null,b,m,p,null)}function v(_,w,b,P,S,E){let A=null;const U=b.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(U!==void 0?A=U:A=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const ne=A.uuid,z=w.uuid;let N=u[ne];N===void 0&&(N={},u[ne]=N);let V=N[z];V===void 0&&(V=A.clone(),N[z]=V),A=V}return A.visible=w.visible,A.wireframe=w.wireframe,E===ga?A.side=w.shadowSide!==null?w.shadowSide:w.side:A.side=w.shadowSide!==null?w.shadowSide:f[w.side],A.alphaMap=w.alphaMap,A.alphaTest=w.alphaTest,A.clipShadows=w.clipShadows,A.clippingPlanes=w.clippingPlanes,A.clipIntersection=w.clipIntersection,A.displacementMap=w.displacementMap,A.displacementScale=w.displacementScale,A.displacementBias=w.displacementBias,A.wireframeLinewidth=w.wireframeLinewidth,A.linewidth=w.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(b.matrixWorld),A.nearDistance=P,A.farDistance=S),A}function x(_,w,b,P,S){if(_.visible===!1)return;if(_.layers.test(w.layers)&&(_.isMesh||_.isLine||_.isPoints)&&(_.castShadow||_.receiveShadow&&S===ga)&&(!_.frustumCulled||i.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,_.matrixWorld);const U=e.update(_),ne=_.material;if(Array.isArray(ne)){const z=U.groups;for(let N=0,V=z.length;N<V;N++){const K=z[N],Z=ne[K.materialIndex];if(Z&&Z.visible){const R=v(_,Z,P,b.near,b.far,S);t.renderBufferDirect(b,null,U,R,_,K)}}}else if(ne.visible){const z=v(_,ne,P,b.near,b.far,S);t.renderBufferDirect(b,null,U,z,_,null)}}const A=_.children;for(let U=0,ne=A.length;U<ne;U++)x(A[U],w,b,P,S)}}function eO(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const ue=new Lt;let W=null;const ae=new Lt(0,0,0,0);return{setMask:function(se){W!==se&&!D&&(t.colorMask(se,se,se,se),W=se)},setLocked:function(se){D=se},setClear:function(se,ze,wt,dt,ji){ji===!0&&(se*=dt,ze*=dt,wt*=dt),ue.set(se,ze,wt,dt),ae.equals(ue)===!1&&(t.clearColor(se,ze,wt,dt),ae.copy(ue))},reset:function(){D=!1,W=null,ae.set(-1,0,0,0)}}}function s(){let D=!1,ue=null,W=null,ae=null;return{setTest:function(se){se?Ie(2929):Se(2929)},setMask:function(se){ue!==se&&!D&&(t.depthMask(se),ue=se)},setFunc:function(se){if(W!==se){if(se)switch(se){case RD:t.depthFunc(512);break;case DD:t.depthFunc(519);break;case kD:t.depthFunc(513);break;case cp:t.depthFunc(515);break;case ID:t.depthFunc(514);break;case ND:t.depthFunc(518);break;case OD:t.depthFunc(516);break;case FD:t.depthFunc(517);break;default:t.depthFunc(515)}else t.depthFunc(515);W=se}},setLocked:function(se){D=se},setClear:function(se){ae!==se&&(t.clearDepth(se),ae=se)},reset:function(){D=!1,ue=null,W=null,ae=null}}}function o(){let D=!1,ue=null,W=null,ae=null,se=null,ze=null,wt=null,dt=null,ji=null;return{setTest:function(ot){D||(ot?Ie(2960):Se(2960))},setMask:function(ot){ue!==ot&&!D&&(t.stencilMask(ot),ue=ot)},setFunc:function(ot,gi,Sn){(W!==ot||ae!==gi||se!==Sn)&&(t.stencilFunc(ot,gi,Sn),W=ot,ae=gi,se=Sn)},setOp:function(ot,gi,Sn){(ze!==ot||wt!==gi||dt!==Sn)&&(t.stencilOp(ot,gi,Sn),ze=ot,wt=gi,dt=Sn)},setLocked:function(ot){D=ot},setClear:function(ot){ji!==ot&&(t.clearStencil(ot),ji=ot)},reset:function(){D=!1,ue=null,W=null,ae=null,se=null,ze=null,wt=null,dt=null,ji=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},m={},y=new WeakMap,p=[],h=null,g=!1,v=null,x=null,_=null,w=null,b=null,P=null,S=null,E=!1,A=null,U=null,ne=null,z=null,N=null;const V=t.getParameter(35661);let K=!1,Z=0;const R=t.getParameter(7938);R.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(R)[1]),K=Z>=1):R.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),K=Z>=2);let L=null,k={};const Y=t.getParameter(3088),q=t.getParameter(2978),J=new Lt().fromArray(Y),le=new Lt().fromArray(q);function _e(D,ue,W){const ae=new Uint8Array(4),se=t.createTexture();t.bindTexture(D,se),t.texParameteri(D,10241,9728),t.texParameteri(D,10240,9728);for(let ze=0;ze<W;ze++)t.texImage2D(ue+ze,0,6408,1,1,0,6408,5121,ae);return se}const $={};$[3553]=_e(3553,3553,1),$[34067]=_e(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ie(2929),l.setFunc(cp),Wt(!1),Kn(Ey),Ie(2884),Ct(Mr);function Ie(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function Se(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Me(D,ue){return m[D]!==ue?(t.bindFramebuffer(D,ue),m[D]=ue,i&&(D===36009&&(m[36160]=ue),D===36160&&(m[36009]=ue)),!0):!1}function he(D,ue){let W=p,ae=!1;if(D)if(W=y.get(ue),W===void 0&&(W=[],y.set(ue,W)),D.isWebGLMultipleRenderTargets){const se=D.texture;if(W.length!==se.length||W[0]!==36064){for(let ze=0,wt=se.length;ze<wt;ze++)W[ze]=36064+ze;W.length=se.length,ae=!0}}else W[0]!==36064&&(W[0]=36064,ae=!0);else W[0]!==1029&&(W[0]=1029,ae=!0);ae&&(n.isWebGL2?t.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function $e(D){return h!==D?(t.useProgram(D),h=D,!0):!1}const Pe={[js]:32774,[_D]:32778,[SD]:32779};if(i)Pe[Ly]=32775,Pe[Ry]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Pe[Ly]=D.MIN_EXT,Pe[Ry]=D.MAX_EXT)}const xe={[wD]:0,[MD]:1,[bD]:768,[CM]:770,[LD]:776,[PD]:774,[ED]:772,[TD]:769,[PM]:771,[AD]:775,[CD]:773};function Ct(D,ue,W,ae,se,ze,wt,dt){if(D===Mr){g===!0&&(Se(3042),g=!1);return}if(g===!1&&(Ie(3042),g=!0),D!==xD){if(D!==v||dt!==E){if((x!==js||b!==js)&&(t.blendEquation(32774),x=js,b=js),dt)switch(D){case xo:t.blendFuncSeparate(1,771,1,771);break;case Cy:t.blendFunc(1,1);break;case Py:t.blendFuncSeparate(0,769,0,1);break;case Ay:t.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xo:t.blendFuncSeparate(770,771,1,771);break;case Cy:t.blendFunc(770,1);break;case Py:t.blendFuncSeparate(0,769,0,1);break;case Ay:t.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}_=null,w=null,P=null,S=null,v=D,E=dt}return}se=se||ue,ze=ze||W,wt=wt||ae,(ue!==x||se!==b)&&(t.blendEquationSeparate(Pe[ue],Pe[se]),x=ue,b=se),(W!==_||ae!==w||ze!==P||wt!==S)&&(t.blendFuncSeparate(xe[W],xe[ae],xe[ze],xe[wt]),_=W,w=ae,P=ze,S=wt),v=D,E=null}function rn(D,ue){D.side===hr?Se(2884):Ie(2884);let W=D.side===kn;ue&&(W=!W),Wt(W),D.blending===xo&&D.transparent===!1?Ct(Mr):Ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ae=D.stencilWrite;u.setTest(ae),ae&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ie(32926):Se(32926)}function Wt(D){A!==D&&(D?t.frontFace(2304):t.frontFace(2305),A=D)}function Kn(D){D!==gD?(Ie(2884),D!==U&&(D===Ey?t.cullFace(1029):D===vD?t.cullFace(1028):t.cullFace(1032))):Se(2884),U=D}function Pt(D){D!==ne&&(K&&t.lineWidth(D),ne=D)}function Ge(D,ue,W){D?(Ie(32823),(z!==ue||N!==W)&&(t.polygonOffset(ue,W),z=ue,N=W)):Se(32823)}function mi(D){D?Ie(3089):Se(3089)}function Zn(D){D===void 0&&(D=33984+V-1),L!==D&&(t.activeTexture(D),L=D)}function C(D,ue){L===null&&Zn();let W=k[L];W===void 0&&(W={type:void 0,texture:void 0},k[L]=W),(W.type!==D||W.texture!==ue)&&(t.bindTexture(D,ue||$[D]),W.type=D,W.texture=ue)}function M(){const D=k[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(D){J.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function pe(D){le.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),le.copy(D))}function Ee(D,ue){let W=f.get(ue);W===void 0&&(W=new WeakMap,f.set(ue,W));let ae=W.get(D);ae===void 0&&(ae=t.getUniformBlockIndex(ue,D.name),W.set(D,ae))}function Ue(D,ue){const ae=f.get(ue).get(D);c.get(D)!==ae&&(t.uniformBlockBinding(ue,ae,D.__bindingPointIndex),c.set(D,ae))}function ft(){t.disable(3042),t.disable(2884),t.disable(2929),t.disable(32823),t.disable(3089),t.disable(2960),t.disable(32926),t.blendEquation(32774),t.blendFunc(1,0),t.blendFuncSeparate(1,0,1,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(513),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(519,0,4294967295),t.stencilOp(7680,7680,7680),t.clearStencil(0),t.cullFace(1029),t.frontFace(2305),t.polygonOffset(0,0),t.activeTexture(33984),t.bindFramebuffer(36160,null),i===!0&&(t.bindFramebuffer(36009,null),t.bindFramebuffer(36008,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},L=null,k={},m={},y=new WeakMap,p=[],h=null,g=!1,v=null,x=null,_=null,w=null,b=null,P=null,S=null,E=!1,A=null,U=null,ne=null,z=null,N=null,J.set(0,0,t.canvas.width,t.canvas.height),le.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ie,disable:Se,bindFramebuffer:Me,drawBuffers:he,useProgram:$e,setBlending:Ct,setMaterial:rn,setFlipSided:Wt,setCullFace:Kn,setLineWidth:Pt,setPolygonOffset:Ge,setScissorTest:mi,activeTexture:Zn,bindTexture:C,unbindTexture:M,compressedTexImage2D:j,texImage2D:ge,texImage3D:fe,updateUBOMapping:Ee,uniformBlockBinding:Ue,texStorage2D:be,texStorage3D:H,texSubImage2D:te,texSubImage3D:ie,compressedTexSubImage2D:oe,scissor:me,viewport:pe,reset:ft}}function tO(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let p;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return g?new OffscreenCanvas(C,M):Cc("canvas")}function x(C,M,j,te){let ie=1;if((C.width>te||C.height>te)&&(ie=te/Math.max(C.width,C.height)),ie<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const oe=M?gp:Math.floor,be=oe(ie*C.width),H=oe(ie*C.height);p===void 0&&(p=v(be,H));const ge=j?v(be,H):p;return ge.width=be,ge.height=H,ge.getContext("2d").drawImage(C,0,0,be,H),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+be+"x"+H+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function _(C){return rx(C.width)&&rx(C.height)}function w(C){return a?!1:C.wrapS!==Gn||C.wrapT!==Gn||C.minFilter!==Qt&&C.minFilter!==Pn}function b(C,M){return C.generateMipmaps&&M&&C.minFilter!==Qt&&C.minFilter!==Pn}function P(C){t.generateMipmap(C)}function S(C,M,j,te,ie=!1){if(a===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let oe=M;return M===6403&&(j===5126&&(oe=33326),j===5131&&(oe=33325),j===5121&&(oe=33321)),M===33319&&(j===5126&&(oe=33328),j===5131&&(oe=33327),j===5121&&(oe=33323)),M===6408&&(j===5126&&(oe=34836),j===5131&&(oe=34842),j===5121&&(oe=te===lt&&ie===!1?35907:32856),j===32819&&(oe=32854),j===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function E(C,M,j){return b(C,j)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){return C===Qt||C===Dy||C===ky?9728:9729}function U(C){const M=C.target;M.removeEventListener("dispose",U),z(M),M.isVideoTexture&&y.delete(M)}function ne(C){const M=C.target;M.removeEventListener("dispose",ne),V(M)}function z(C){const M=i.get(C);if(M.__webglInit===void 0)return;const j=C.source,te=h.get(j);if(te){const ie=te[M.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(C),Object.keys(te).length===0&&h.delete(j)}i.remove(C)}function N(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const j=C.source,te=h.get(j);delete te[M.__cacheKey],o.memory.textures--}function V(C){const M=C.texture,j=i.get(C),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)t.deleteFramebuffer(j.__webglFramebuffer[ie]),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer[ie]);else{if(t.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&t.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&t.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ie=0;ie<j.__webglColorRenderbuffer.length;ie++)j.__webglColorRenderbuffer[ie]&&t.deleteRenderbuffer(j.__webglColorRenderbuffer[ie]);j.__webglDepthRenderbuffer&&t.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ie=0,oe=M.length;ie<oe;ie++){const be=i.get(M[ie]);be.__webglTexture&&(t.deleteTexture(be.__webglTexture),o.memory.textures--),i.remove(M[ie])}i.remove(M),i.remove(C)}let K=0;function Z(){K=0}function R(){const C=K;return C>=l&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l),K+=1,C}function L(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function k(C,M){const j=i.get(C);if(C.isVideoTexture&&mi(C),C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(j,C,M);return}}n.activeTexture(33984+M),n.bindTexture(3553,j.__webglTexture)}function Y(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Se(j,C,M);return}n.activeTexture(33984+M),n.bindTexture(35866,j.__webglTexture)}function q(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Se(j,C,M);return}n.activeTexture(33984+M),n.bindTexture(32879,j.__webglTexture)}function J(C,M){const j=i.get(C);if(C.version>0&&j.__version!==C.version){Me(j,C,M);return}n.activeTexture(33984+M),n.bindTexture(34067,j.__webglTexture)}const le={[hp]:10497,[Gn]:33071,[pp]:33648},_e={[Qt]:9728,[Dy]:9984,[ky]:9986,[Pn]:9729,[jD]:9985,[df]:9987};function $(C,M,j){if(j?(t.texParameteri(C,10242,le[M.wrapS]),t.texParameteri(C,10243,le[M.wrapT]),(C===32879||C===35866)&&t.texParameteri(C,32882,le[M.wrapR]),t.texParameteri(C,10240,_e[M.magFilter]),t.texParameteri(C,10241,_e[M.minFilter])):(t.texParameteri(C,10242,33071),t.texParameteri(C,10243,33071),(C===32879||C===35866)&&t.texParameteri(C,32882,33071),(M.wrapS!==Gn||M.wrapT!==Gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,10240,A(M.magFilter)),t.texParameteri(C,10241,A(M.minFilter)),M.minFilter!==Qt&&M.minFilter!==Pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.type===is&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===il&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Ie(C,M){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",U));const te=M.source;let ie=h.get(te);ie===void 0&&(ie={},h.set(te,ie));const oe=L(M);if(oe!==C.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ie[oe].usedTimes++;const be=ie[C.__cacheKey];be!==void 0&&(ie[C.__cacheKey].usedTimes--,be.usedTimes===0&&N(M)),C.__cacheKey=oe,C.__webglTexture=ie[oe].texture}return j}function Se(C,M,j){let te=3553;M.isDataArrayTexture&&(te=35866),M.isData3DTexture&&(te=32879);const ie=Ie(C,M),oe=M.source;if(n.activeTexture(33984+j),n.bindTexture(te,C.__webglTexture),oe.version!==oe.__currentVersion||ie===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const be=w(M)&&_(M.image)===!1;let H=x(M.image,be,!1,c);H=Zn(M,H);const ge=_(H)||a,fe=s.convert(M.format,M.encoding);let me=s.convert(M.type),pe=S(M.internalFormat,fe,me,M.encoding,M.isVideoTexture);$(te,M,ge);let Ee;const Ue=M.mipmaps,ft=a&&M.isVideoTexture!==!0,D=oe.__currentVersion===void 0||ie===!0,ue=E(M,H,ge);if(M.isDepthTexture)pe=6402,a?M.type===is?pe=36012:M.type===ns?pe=33190:M.type===_o?pe=35056:pe=33189:M.type===is&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===ls&&pe===6402&&M.type!==RM&&M.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ns,me=s.convert(M.type)),M.format===Fo&&pe===6402&&(pe=34041,M.type!==_o&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_o,me=s.convert(M.type))),D&&(ft?n.texStorage2D(3553,1,pe,H.width,H.height):n.texImage2D(3553,0,pe,H.width,H.height,0,fe,me,null));else if(M.isDataTexture)if(Ue.length>0&&ge){ft&&D&&n.texStorage2D(3553,ue,pe,Ue[0].width,Ue[0].height);for(let W=0,ae=Ue.length;W<ae;W++)Ee=Ue[W],ft?n.texSubImage2D(3553,W,0,0,Ee.width,Ee.height,fe,me,Ee.data):n.texImage2D(3553,W,pe,Ee.width,Ee.height,0,fe,me,Ee.data);M.generateMipmaps=!1}else ft?(D&&n.texStorage2D(3553,ue,pe,H.width,H.height),n.texSubImage2D(3553,0,0,0,H.width,H.height,fe,me,H.data)):n.texImage2D(3553,0,pe,H.width,H.height,0,fe,me,H.data);else if(M.isCompressedTexture){ft&&D&&n.texStorage2D(3553,ue,pe,Ue[0].width,Ue[0].height);for(let W=0,ae=Ue.length;W<ae;W++)Ee=Ue[W],M.format!==oi?fe!==null?ft?n.compressedTexSubImage2D(3553,W,0,0,Ee.width,Ee.height,fe,Ee.data):n.compressedTexImage2D(3553,W,pe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?n.texSubImage2D(3553,W,0,0,Ee.width,Ee.height,fe,me,Ee.data):n.texImage2D(3553,W,pe,Ee.width,Ee.height,0,fe,me,Ee.data)}else if(M.isDataArrayTexture)ft?(D&&n.texStorage3D(35866,ue,pe,H.width,H.height,H.depth),n.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,fe,me,H.data)):n.texImage3D(35866,0,pe,H.width,H.height,H.depth,0,fe,me,H.data);else if(M.isData3DTexture)ft?(D&&n.texStorage3D(32879,ue,pe,H.width,H.height,H.depth),n.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,fe,me,H.data)):n.texImage3D(32879,0,pe,H.width,H.height,H.depth,0,fe,me,H.data);else if(M.isFramebufferTexture){if(D)if(ft)n.texStorage2D(3553,ue,pe,H.width,H.height);else{let W=H.width,ae=H.height;for(let se=0;se<ue;se++)n.texImage2D(3553,se,pe,W,ae,0,fe,me,null),W>>=1,ae>>=1}}else if(Ue.length>0&&ge){ft&&D&&n.texStorage2D(3553,ue,pe,Ue[0].width,Ue[0].height);for(let W=0,ae=Ue.length;W<ae;W++)Ee=Ue[W],ft?n.texSubImage2D(3553,W,0,0,fe,me,Ee):n.texImage2D(3553,W,pe,fe,me,Ee);M.generateMipmaps=!1}else ft?(D&&n.texStorage2D(3553,ue,pe,H.width,H.height),n.texSubImage2D(3553,0,0,0,fe,me,H)):n.texImage2D(3553,0,pe,fe,me,H);b(M,ge)&&P(te),oe.__currentVersion=oe.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Me(C,M,j){if(M.image.length!==6)return;const te=Ie(C,M),ie=M.source;if(n.activeTexture(33984+j),n.bindTexture(34067,C.__webglTexture),ie.version!==ie.__currentVersion||te===!0){t.pixelStorei(37440,M.flipY),t.pixelStorei(37441,M.premultiplyAlpha),t.pixelStorei(3317,M.unpackAlignment),t.pixelStorei(37443,0);const oe=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,H=[];for(let W=0;W<6;W++)!oe&&!be?H[W]=x(M.image[W],!1,!0,u):H[W]=be?M.image[W].image:M.image[W],H[W]=Zn(M,H[W]);const ge=H[0],fe=_(ge)||a,me=s.convert(M.format,M.encoding),pe=s.convert(M.type),Ee=S(M.internalFormat,me,pe,M.encoding),Ue=a&&M.isVideoTexture!==!0,ft=ie.__currentVersion===void 0||te===!0;let D=E(M,ge,fe);$(34067,M,fe);let ue;if(oe){Ue&&ft&&n.texStorage2D(34067,D,Ee,ge.width,ge.height);for(let W=0;W<6;W++){ue=H[W].mipmaps;for(let ae=0;ae<ue.length;ae++){const se=ue[ae];M.format!==oi?me!==null?Ue?n.compressedTexSubImage2D(34069+W,ae,0,0,se.width,se.height,me,se.data):n.compressedTexImage2D(34069+W,ae,Ee,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?n.texSubImage2D(34069+W,ae,0,0,se.width,se.height,me,pe,se.data):n.texImage2D(34069+W,ae,Ee,se.width,se.height,0,me,pe,se.data)}}}else{ue=M.mipmaps,Ue&&ft&&(ue.length>0&&D++,n.texStorage2D(34067,D,Ee,H[0].width,H[0].height));for(let W=0;W<6;W++)if(be){Ue?n.texSubImage2D(34069+W,0,0,0,H[W].width,H[W].height,me,pe,H[W].data):n.texImage2D(34069+W,0,Ee,H[W].width,H[W].height,0,me,pe,H[W].data);for(let ae=0;ae<ue.length;ae++){const ze=ue[ae].image[W].image;Ue?n.texSubImage2D(34069+W,ae+1,0,0,ze.width,ze.height,me,pe,ze.data):n.texImage2D(34069+W,ae+1,Ee,ze.width,ze.height,0,me,pe,ze.data)}}else{Ue?n.texSubImage2D(34069+W,0,0,0,me,pe,H[W]):n.texImage2D(34069+W,0,Ee,me,pe,H[W]);for(let ae=0;ae<ue.length;ae++){const se=ue[ae];Ue?n.texSubImage2D(34069+W,ae+1,0,0,me,pe,se.image[W]):n.texImage2D(34069+W,ae+1,Ee,me,pe,se.image[W])}}}b(M,fe)&&P(34067),ie.__currentVersion=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function he(C,M,j,te,ie){const oe=s.convert(j.format,j.encoding),be=s.convert(j.type),H=S(j.internalFormat,oe,be,j.encoding);i.get(M).__hasExternalTextures||(ie===32879||ie===35866?n.texImage3D(ie,0,H,M.width,M.height,M.depth,0,oe,be,null):n.texImage2D(ie,0,H,M.width,M.height,0,oe,be,null)),n.bindFramebuffer(36160,C),Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,te,ie,i.get(j).__webglTexture,0,Pt(M)):t.framebufferTexture2D(36160,te,ie,i.get(j).__webglTexture,0),n.bindFramebuffer(36160,null)}function $e(C,M,j){if(t.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(j||Ge(M)){const ie=M.depthTexture;ie&&ie.isDepthTexture&&(ie.type===is?te=36012:ie.type===ns&&(te=33190));const oe=Pt(M);Ge(M)?d.renderbufferStorageMultisampleEXT(36161,oe,te,M.width,M.height):t.renderbufferStorageMultisample(36161,oe,te,M.width,M.height)}else t.renderbufferStorage(36161,te,M.width,M.height);t.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const te=Pt(M);j&&Ge(M)===!1?t.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):t.renderbufferStorage(36161,34041,M.width,M.height),t.framebufferRenderbuffer(36160,33306,36161,C)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ie=0;ie<te.length;ie++){const oe=te[ie],be=s.convert(oe.format,oe.encoding),H=s.convert(oe.type),ge=S(oe.internalFormat,be,H,oe.encoding),fe=Pt(M);j&&Ge(M)===!1?t.renderbufferStorageMultisample(36161,fe,ge,M.width,M.height):Ge(M)?d.renderbufferStorageMultisampleEXT(36161,fe,ge,M.width,M.height):t.renderbufferStorage(36161,ge,M.width,M.height)}}t.bindRenderbuffer(36161,null)}function Pe(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ie=Pt(M);if(M.depthTexture.format===ls)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ie):t.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===Fo)Ge(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ie):t.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function xe(C){const M=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,C)}else if(j){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),$e(M.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),$e(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(36160,null)}function Ct(C,M,j){const te=i.get(C);M!==void 0&&he(te.__webglFramebuffer,C,C.texture,36064,3553),j!==void 0&&xe(C)}function rn(C){const M=C.texture,j=i.get(C),te=i.get(M);C.addEventListener("dispose",ne),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++);const ie=C.isWebGLCubeRenderTarget===!0,oe=C.isWebGLMultipleRenderTargets===!0,be=_(C)||a;if(ie){j.__webglFramebuffer=[];for(let H=0;H<6;H++)j.__webglFramebuffer[H]=t.createFramebuffer()}else{if(j.__webglFramebuffer=t.createFramebuffer(),oe)if(r.drawBuffers){const H=C.texture;for(let ge=0,fe=H.length;ge<fe;ge++){const me=i.get(H[ge]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Ge(C)===!1){const H=oe?M:[M];j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let ge=0;ge<H.length;ge++){const fe=H[ge];j.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(36161,j.__webglColorRenderbuffer[ge]);const me=s.convert(fe.format,fe.encoding),pe=s.convert(fe.type),Ee=S(fe.internalFormat,me,pe,fe.encoding),Ue=Pt(C);t.renderbufferStorageMultisample(36161,Ue,Ee,C.width,C.height),t.framebufferRenderbuffer(36160,36064+ge,36161,j.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(36161,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),$e(j.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(36160,null)}}if(ie){n.bindTexture(34067,te.__webglTexture),$(34067,M,be);for(let H=0;H<6;H++)he(j.__webglFramebuffer[H],C,M,36064,34069+H);b(M,be)&&P(34067),n.unbindTexture()}else if(oe){const H=C.texture;for(let ge=0,fe=H.length;ge<fe;ge++){const me=H[ge],pe=i.get(me);n.bindTexture(3553,pe.__webglTexture),$(3553,me,be),he(j.__webglFramebuffer,C,me,36064+ge,3553),b(me,be)&&P(3553)}n.unbindTexture()}else{let H=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?H=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(H,te.__webglTexture),$(H,M,be),he(j.__webglFramebuffer,C,M,36064,H),b(M,be)&&P(H),n.unbindTexture()}C.depthBuffer&&xe(C)}function Wt(C){const M=_(C)||a,j=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ie=j.length;te<ie;te++){const oe=j[te];if(b(oe,M)){const be=C.isWebGLCubeRenderTarget?34067:3553,H=i.get(oe).__webglTexture;n.bindTexture(be,H),P(be),n.unbindTexture()}}}function Kn(C){if(a&&C.samples>0&&Ge(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],j=C.width,te=C.height;let ie=16384;const oe=[],be=C.stencilBuffer?33306:36096,H=i.get(C),ge=C.isWebGLMultipleRenderTargets===!0;if(ge)for(let fe=0;fe<M.length;fe++)n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,null),n.bindFramebuffer(36160,H.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,null,0);n.bindFramebuffer(36008,H.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,H.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){oe.push(36064+fe),C.depthBuffer&&oe.push(be);const me=H.__ignoreDepthValues!==void 0?H.__ignoreDepthValues:!1;if(me===!1&&(C.depthBuffer&&(ie|=256),C.stencilBuffer&&(ie|=1024)),ge&&t.framebufferRenderbuffer(36008,36064,36161,H.__webglColorRenderbuffer[fe]),me===!0&&(t.invalidateFramebuffer(36008,[be]),t.invalidateFramebuffer(36009,[be])),ge){const pe=i.get(M[fe]).__webglTexture;t.framebufferTexture2D(36009,36064,3553,pe,0)}t.blitFramebuffer(0,0,j,te,0,0,j,te,ie,9728),m&&t.invalidateFramebuffer(36008,oe)}if(n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,null),ge)for(let fe=0;fe<M.length;fe++){n.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(36160,36064+fe,36161,H.__webglColorRenderbuffer[fe]);const me=i.get(M[fe]).__webglTexture;n.bindFramebuffer(36160,H.__webglFramebuffer),t.framebufferTexture2D(36009,36064+fe,3553,me,0)}n.bindFramebuffer(36009,H.__webglMultisampledFramebuffer)}}function Pt(C){return Math.min(f,C.samples)}function Ge(C){const M=i.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function mi(C){const M=o.render.frame;y.get(C)!==M&&(y.set(C,M),C.update())}function Zn(C,M){const j=C.encoding,te=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===mp||j!==xs&&(j===lt?a===!1?e.has("EXT_sRGB")===!0&&te===oi?(C.format=mp,C.minFilter=Pn,C.generateMipmaps=!1):M=IM.sRGBToLinear(M):(te!==oi||ie!==ys)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),M}this.allocateTextureUnit=R,this.resetTextureUnits=Z,this.setTexture2D=k,this.setTexture2DArray=Y,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=Ct,this.setupRenderTarget=rn,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Kn,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ge}function nO(t,e,n){const i=n.isWebGL2;function r(s,o=null){let a;if(s===ys)return 5121;if(s===YD)return 32819;if(s===KD)return 32820;if(s===$D)return 5120;if(s===XD)return 5122;if(s===RM)return 5123;if(s===qD)return 5124;if(s===ns)return 5125;if(s===is)return 5126;if(s===il)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ZD)return 6406;if(s===oi)return 6408;if(s===JD)return 6409;if(s===e4)return 6410;if(s===ls)return 6402;if(s===Fo)return 34041;if(s===t4)return 6403;if(s===QD)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===mp)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===n4)return 36244;if(s===i4)return 33319;if(s===r4)return 33320;if(s===s4)return 36249;if(s===pd||s===md||s===gd||s===vd)if(o===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===md)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===md)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Iy||s===Ny||s===Oy||s===Fy)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Iy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ny)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Oy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fy)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o4)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===zy||s===Uy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===zy)return o===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Uy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Vy||s===By||s===Hy||s===Wy||s===Gy||s===jy||s===$y||s===Xy||s===qy||s===Yy||s===Ky||s===Zy||s===Qy||s===Jy)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Vy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===By)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Hy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===$y)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Yy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ky)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Qy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Jy)return o===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ex)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ex)return o===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_o?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class iO extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tu extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rO={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const p of e.hand.values()){const h=n.getJointPose(p,i);if(u.joints[p.jointName]===void 0){const v=new Tu;v.matrixAutoUpdate=!1,v.visible=!1,u.joints[p.jointName]=v,u.add(v)}const g=u.joints[p.jointName];h!==null&&(g.matrix.fromArray(h.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=h.radius),g.visible=h!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),m=.02,y=.005;u.inputState.pinching&&d>m+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rO)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}}class sO extends Yn{constructor(e,n,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ls,c!==ls&&c!==Fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ls&&(i=ns),i===void 0&&c===Fo&&(i=_o),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1}}class oO extends Xo{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=null,u=null,c=null,f=null,d=null,m=null;const y=n.getContextAttributes();let p=null,h=null;const g=[],v=[],x=new An;x.layers.enable(1),x.viewport=new Lt;const _=new An;_.layers.enable(2),_.viewport=new Lt;const w=[x,_],b=new iO;b.layers.enable(1),b.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let k=g[L];return k===void 0&&(k=new jd,g[L]=k),k.getTargetRaySpace()},this.getControllerGrip=function(L){let k=g[L];return k===void 0&&(k=new jd,g[L]=k),k.getGripSpace()},this.getHand=function(L){let k=g[L];return k===void 0&&(k=new jd,g[L]=k),k.getHandSpace()};function E(L){const k=v.indexOf(L.inputSource);if(k===-1)return;const Y=g[k];Y!==void 0&&Y.dispatchEvent({type:L.type,data:L.inputSource})}function A(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",U);for(let L=0;L<g.length;L++){const k=v[L];k!==null&&(v[L]=null,g[L].disconnect(k))}P=null,S=null,e.setRenderTarget(p),d=null,f=null,c=null,r=null,h=null,R.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(L){l=L},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",A),r.addEventListener("inputsourceschange",U),y.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,k),r.updateRenderState({baseLayer:d}),h=new _s(d.framebufferWidth,d.framebufferHeight,{format:oi,type:ys,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let k=null,Y=null,q=null;y.depth&&(q=y.stencil?35056:33190,k=y.stencil?Fo:ls,Y=y.stencil?_o:ns);const J={colorFormat:32856,depthFormat:q,scaleFactor:s};c=new XRWebGLBinding(r,n),f=c.createProjectionLayer(J),r.updateRenderState({layers:[f]}),h=new _s(f.textureWidth,f.textureHeight,{format:oi,type:ys,depthTexture:new sO(f.textureWidth,f.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const le=e.properties.get(h);le.__ignoreDepthValues=f.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),R.setContext(r),R.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(L){for(let k=0;k<L.removed.length;k++){const Y=L.removed[k],q=v.indexOf(Y);q>=0&&(v[q]=null,g[q].dispatchEvent({type:"disconnected",data:Y}))}for(let k=0;k<L.added.length;k++){const Y=L.added[k];let q=v.indexOf(Y);if(q===-1){for(let le=0;le<g.length;le++)if(le>=v.length){v.push(Y),q=le;break}else if(v[le]===null){v[le]=Y,q=le;break}if(q===-1)break}const J=g[q];J&&J.dispatchEvent({type:"connected",data:Y})}}const ne=new F,z=new F;function N(L,k,Y){ne.setFromMatrixPosition(k.matrixWorld),z.setFromMatrixPosition(Y.matrixWorld);const q=ne.distanceTo(z),J=k.projectionMatrix.elements,le=Y.projectionMatrix.elements,_e=J[14]/(J[10]-1),$=J[14]/(J[10]+1),Ie=(J[9]+1)/J[5],Se=(J[9]-1)/J[5],Me=(J[8]-1)/J[0],he=(le[8]+1)/le[0],$e=_e*Me,Pe=_e*he,xe=q/(-Me+he),Ct=xe*-Me;k.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ct),L.translateZ(xe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const rn=_e+xe,Wt=$+xe,Kn=$e-Ct,Pt=Pe+(q-Ct),Ge=Ie*$/Wt*rn,mi=Se*$/Wt*rn;L.projectionMatrix.makePerspective(Kn,Pt,Ge,mi,rn,Wt)}function V(L,k){k===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(k.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;b.near=_.near=x.near=L.near,b.far=_.far=x.far=L.far,(P!==b.near||S!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,S=b.far);const k=L.parent,Y=b.cameras;V(b,k);for(let J=0;J<Y.length;J++)V(Y[J],k);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),L.matrix.copy(b.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale);const q=L.children;for(let J=0,le=q.length;J<le;J++)q[J].updateMatrixWorld(!0);Y.length===2?N(b,x,_):b.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(L){f!==null&&(f.fixedFoveation=L),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=L)};let K=null;function Z(L,k){if(u=k.getViewerPose(l||o),m=k,u!==null){const Y=u.views;d!==null&&(e.setRenderTargetFramebuffer(h,d.framebuffer),e.setRenderTarget(h));let q=!1;Y.length!==b.cameras.length&&(b.cameras.length=0,q=!0);for(let J=0;J<Y.length;J++){const le=Y[J];let _e=null;if(d!==null)_e=d.getViewport(le);else{const Ie=c.getViewSubImage(f,le);_e=Ie.viewport,J===0&&(e.setRenderTargetTextures(h,Ie.colorTexture,f.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(h))}let $=w[J];$===void 0&&($=new An,$.layers.enable(J),$.viewport=new Lt,w[J]=$),$.matrix.fromArray(le.transform.matrix),$.projectionMatrix.fromArray(le.projectionMatrix),$.viewport.set(_e.x,_e.y,_e.width,_e.height),J===0&&b.matrix.copy($.matrix),q===!0&&b.cameras.push($)}}for(let Y=0;Y<g.length;Y++){const q=v[Y],J=g[Y];q!==null&&J!==void 0&&J.update(q,k,l||o)}K&&K(L,k),m=null}const R=new GM;R.setAnimationLoop(Z),this.setAnimationLoop=function(L){K=L},this.dispose=function(){}}}function aO(t,e){function n(p,h){p.fogColor.value.copy(h.color),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,g,v,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),c(p,h)):h.isMeshPhongMaterial?(r(p,h),u(p,h)):h.isMeshStandardMaterial?(r(p,h),f(p,h),h.isMeshPhysicalMaterial&&d(p,h,x)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),y(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?a(p,h,g,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.bumpMap&&(p.bumpMap.value=h.bumpMap,p.bumpScale.value=h.bumpScale,h.side===kn&&(p.bumpScale.value*=-1)),h.displacementMap&&(p.displacementMap.value=h.displacementMap,p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap),h.normalMap&&(p.normalMap.value=h.normalMap,p.normalScale.value.copy(h.normalScale),h.side===kn&&p.normalScale.value.negate()),h.specularMap&&(p.specularMap.value=h.specularMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const g=e.get(h).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const _=t.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*_}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity);let v;h.map?v=h.map:h.specularMap?v=h.specularMap:h.displacementMap?v=h.displacementMap:h.normalMap?v=h.normalMap:h.bumpMap?v=h.bumpMap:h.roughnessMap?v=h.roughnessMap:h.metalnessMap?v=h.metalnessMap:h.alphaMap?v=h.alphaMap:h.emissiveMap?v=h.emissiveMap:h.clearcoatMap?v=h.clearcoatMap:h.clearcoatNormalMap?v=h.clearcoatNormalMap:h.clearcoatRoughnessMap?v=h.clearcoatRoughnessMap:h.iridescenceMap?v=h.iridescenceMap:h.iridescenceThicknessMap?v=h.iridescenceThicknessMap:h.specularIntensityMap?v=h.specularIntensityMap:h.specularColorMap?v=h.specularColorMap:h.transmissionMap?v=h.transmissionMap:h.thicknessMap?v=h.thicknessMap:h.sheenColorMap?v=h.sheenColorMap:h.sheenRoughnessMap&&(v=h.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let x;h.aoMap?x=h.aoMap:h.lightMap&&(x=h.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uv2Transform.value.copy(x.matrix))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function a(p,h,g,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*g,p.scale.value=v*.5,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let x;h.map?x=h.map:h.alphaMap&&(x=h.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix))}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);let g;h.map?g=h.map:h.alphaMap&&(g=h.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),p.uvTransform.value.copy(g.matrix))}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function c(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.roughness.value=h.roughness,p.metalness.value=h.metalness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap),h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap),e.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function d(p,h,g){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap)),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap),h.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),p.clearcoatNormalMap.value=h.clearcoatNormalMap,h.side===kn&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap)),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap)}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function y(p,h){p.referencePosition.value.copy(h.referencePosition),p.nearDistance.value=h.nearDistance,p.farDistance.value=h.farDistance}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lO(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(35375):0;function l(v,x){const _=x.program;i.uniformBlockBinding(v,_)}function u(v,x){let _=r[v.id];_===void 0&&(y(v),_=c(v),r[v.id]=_,v.addEventListener("dispose",h));const w=x.program;i.updateUBOMapping(v,w);const b=e.render.frame;s[v.id]!==b&&(d(v),s[v.id]=b)}function c(v){const x=f();v.__bindingPointIndex=x;const _=t.createBuffer(),w=v.__size,b=v.usage;return t.bindBuffer(35345,_),t.bufferData(35345,w,b),t.bindBuffer(35345,null),t.bindBufferBase(35345,x,_),_}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],_=v.uniforms,w=v.__cache;t.bindBuffer(35345,x);for(let b=0,P=_.length;b<P;b++){const S=_[b];if(m(S,b,w)===!0){const E=S.value,A=S.__offset;typeof E=="number"?(S.__data[0]=E,t.bufferSubData(35345,A,S.__data)):(S.value.isMatrix3?(S.__data[0]=S.value.elements[0],S.__data[1]=S.value.elements[1],S.__data[2]=S.value.elements[2],S.__data[3]=S.value.elements[0],S.__data[4]=S.value.elements[3],S.__data[5]=S.value.elements[4],S.__data[6]=S.value.elements[5],S.__data[7]=S.value.elements[0],S.__data[8]=S.value.elements[6],S.__data[9]=S.value.elements[7],S.__data[10]=S.value.elements[8],S.__data[11]=S.value.elements[0]):E.toArray(S.__data),t.bufferSubData(35345,A,S.__data))}}t.bindBuffer(35345,null)}function m(v,x,_){const w=v.value;if(_[x]===void 0)return typeof w=="number"?_[x]=w:_[x]=w.clone(),!0;if(typeof w=="number"){if(_[x]!==w)return _[x]=w,!0}else{const b=_[x];if(b.equals(w)===!1)return b.copy(w),!0}return!1}function y(v){const x=v.uniforms;let _=0;const w=16;let b=0;for(let P=0,S=x.length;P<S;P++){const E=x[P],A=p(E);if(E.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,P>0){b=_%w;const U=w-b;b!==0&&U-A.boundary<0&&(_+=w-b,E.__offset=_)}_+=A.storage}return b=_%w,b>0&&(_+=w-b),v.__size=_,v.__cache={},this}function p(v){const x=v.value,_={boundary:0,storage:0};return typeof x=="number"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function h(v){const x=v.target;x.removeEventListener("dispose",h);const _=o.indexOf(x.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function g(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:g}}function uO(){const t=Cc("canvas");return t.style.display="block",t}function YM(t={}){this.isWebGLRenderer=!0;const e=t.canvas!==void 0?t.canvas:uO(),n=t.context!==void 0?t.context:null,i=t.depth!==void 0?t.depth:!0,r=t.stencil!==void 0?t.stencil:!0,s=t.antialias!==void 0?t.antialias:!1,o=t.premultipliedAlpha!==void 0?t.premultipliedAlpha:!0,a=t.preserveDrawingBuffer!==void 0?t.preserveDrawingBuffer:!1,l=t.powerPreference!==void 0?t.powerPreference:"default",u=t.failIfMajorPerformanceCaveat!==void 0?t.failIfMajorPerformanceCaveat:!1;let c;n!==null?c=n.getContextAttributes().alpha:c=t.alpha!==void 0?t.alpha:!1;let f=null,d=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xs,this.physicallyCorrectLights=!1,this.toneMapping=Oi,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let h=!1,g=0,v=0,x=null,_=-1,w=null;const b=new Lt,P=new Lt;let S=null,E=e.width,A=e.height,U=1,ne=null,z=null;const N=new Lt(0,0,E,A),V=new Lt(0,0,E,A);let K=!1;const Z=new WM;let R=!1,L=!1,k=null;const Y=new kt,q=new Be,J=new F,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return x===null?U:1}let $=n;function Ie(T,O){for(let G=0;G<T.length;G++){const I=T[G],X=e.getContext(I,O);if(X!==null)return X}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dg}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",ft,!1),$===null){const O=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&O.shift(),$=Ie(O,T),$===null)throw Ie(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Se,Me,he,$e,Pe,xe,Ct,rn,Wt,Kn,Pt,Ge,mi,Zn,C,M,j,te,ie,oe,be,H,ge,fe;function me(){Se=new _I($),Me=new pI($,Se,t),Se.init(Me),H=new nO($,Se,Me),he=new eO($,Se,Me),$e=new MI,Pe=new VN,xe=new tO($,Se,he,Pe,Me,H,$e),Ct=new gI(p),rn=new xI(p),Wt=new I4($,Me),ge=new dI($,Se,Wt,Me),Kn=new SI($,Wt,$e,ge),Pt=new CI($,Kn,Wt,$e),ie=new EI($,Me,xe),M=new mI(Pe),Ge=new UN(p,Ct,rn,Se,Me,ge,M),mi=new aO(p,Pe),Zn=new HN,C=new qN(Se,Me),te=new fI(p,Ct,he,Pt,c,o),j=new JN(p,Pt,Me),fe=new lO($,$e,Me,he),oe=new hI($,Se,$e,Me),be=new wI($,Se,$e,Me),$e.programs=Ge.programs,p.capabilities=Me,p.extensions=Se,p.properties=Pe,p.renderLists=Zn,p.shadowMap=j,p.state=he,p.info=$e}me();const pe=new oO(p,$);this.xr=pe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=Se.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Se.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(E,A,!1))},this.getSize=function(T){return T.set(E,A)},this.setSize=function(T,O,G){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,A=O,e.width=Math.floor(T*U),e.height=Math.floor(O*U),G!==!1&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(E*U,A*U).floor()},this.setDrawingBufferSize=function(T,O,G){E=T,A=O,U=G,e.width=Math.floor(T*G),e.height=Math.floor(O*G),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,O,G,I){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,O,G,I),he.viewport(b.copy(N).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(V)},this.setScissor=function(T,O,G,I){T.isVector4?V.set(T.x,T.y,T.z,T.w):V.set(T,O,G,I),he.scissor(P.copy(V).multiplyScalar(U).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(T){he.setScissorTest(K=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(T=!0,O=!0,G=!0){let I=0;T&&(I|=16384),O&&(I|=256),G&&(I|=1024),$.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Zn.dispose(),C.dispose(),Pe.dispose(),Ct.dispose(),rn.dispose(),Pt.dispose(),ge.dispose(),fe.dispose(),Ge.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",ze),pe.removeEventListener("sessionend",wt),k&&(k.dispose(),k=null),dt.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),h=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),h=!1;const T=$e.autoReset,O=j.enabled,G=j.autoUpdate,I=j.needsUpdate,X=j.type;me(),$e.autoReset=T,j.enabled=O,j.autoUpdate=G,j.needsUpdate=I,j.type=X}function ft(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function D(T){const O=T.target;O.removeEventListener("dispose",D),ue(O)}function ue(T){W(T),Pe.remove(T)}function W(T){const O=Pe.get(T).programs;O!==void 0&&(O.forEach(function(G){Ge.releaseProgram(G)}),T.isShaderMaterial&&Ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,G,I,X,ve){O===null&&(O=le);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ce=D2(T,O,G,I,X);he.setMaterial(I,we);let Te=G.index;const He=G.attributes.position;if(Te===null){if(He===void 0||He.count===0)return}else if(Te.count===0)return;let Ne=1;I.wireframe===!0&&(Te=Kn.getWireframeAttribute(G),Ne=2),ge.setup(X,I,Ce,G,Te);let Oe,at=oe;Te!==null&&(Oe=Wt.get(Te),at=be,at.setIndex(Oe));const Fr=Te!==null?Te.count:He.count,Es=G.drawRange.start*Ne,Cs=G.drawRange.count*Ne,Qn=ve!==null?ve.start*Ne:0,Ve=ve!==null?ve.count*Ne:1/0,Ps=Math.max(Es,Qn),mt=Math.min(Fr,Es+Cs,Qn+Ve)-1,wn=Math.max(0,mt-Ps+1);if(wn!==0){if(X.isMesh)I.wireframe===!0?(he.setLineWidth(I.wireframeLinewidth*_e()),at.setMode(1)):at.setMode(4);else if(X.isLine){let $i=I.linewidth;$i===void 0&&($i=1),he.setLineWidth($i*_e()),X.isLineSegments?at.setMode(1):X.isLineLoop?at.setMode(2):at.setMode(3)}else X.isPoints?at.setMode(0):X.isSprite&&at.setMode(4);if(X.isInstancedMesh)at.renderInstances(Ps,wn,X.count);else if(G.isInstancedBufferGeometry){const $i=Math.min(G.instanceCount,G._maxInstanceCount);at.renderInstances(Ps,wn,$i)}else at.render(Ps,wn)}},this.compile=function(T,O){function G(I,X,ve){I.transparent===!0&&I.side===hr?(I.side=kn,I.needsUpdate=!0,Ll(I,X,ve),I.side=Io,I.needsUpdate=!0,Ll(I,X,ve),I.side=hr):Ll(I,X,ve)}d=C.get(T),d.init(),y.push(d),T.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(d.pushLight(I),I.castShadow&&d.pushShadow(I))}),d.setupLights(p.physicallyCorrectLights),T.traverse(function(I){const X=I.material;if(X)if(Array.isArray(X))for(let ve=0;ve<X.length;ve++){const we=X[ve];G(we,T,I)}else G(X,T,I)}),y.pop(),d=null};let ae=null;function se(T){ae&&ae(T)}function ze(){dt.stop()}function wt(){dt.start()}const dt=new GM;dt.setAnimationLoop(se),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){ae=T,pe.setAnimationLoop(T),T===null?dt.stop():dt.start()},pe.addEventListener("sessionstart",ze),pe.addEventListener("sessionend",wt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,O,x),d=C.get(T,y.length),d.init(),y.push(d),Y.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(Y),L=this.localClippingEnabled,R=M.init(this.clippingPlanes,L,O),f=Zn.get(T,m.length),f.init(),m.push(f),ji(T,O,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ne,z),R===!0&&M.beginShadows();const G=d.state.shadowsArray;if(j.render(G,T,O),R===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(f,T),d.setupLights(p.physicallyCorrectLights),O.isArrayCamera){const I=O.cameras;for(let X=0,ve=I.length;X<ve;X++){const we=I[X];ot(f,T,we,we.viewport)}}else ot(f,T,O);x!==null&&(xe.updateMultisampleRenderTarget(x),xe.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(p,T,O),ge.resetDefaultState(),_=-1,w=null,y.pop(),y.length>0?d=y[y.length-1]:d=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function ji(T,O,G,I){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){I&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const we=Pt.update(T),Ce=T.material;Ce.visible&&f.push(T,we,Ce,G,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==$e.render.frame&&(T.skeleton.update(),T.skeleton.frame=$e.render.frame),!T.frustumCulled||Z.intersectsObject(T))){I&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Y);const we=Pt.update(T),Ce=T.material;if(Array.isArray(Ce)){const Te=we.groups;for(let He=0,Ne=Te.length;He<Ne;He++){const Oe=Te[He],at=Ce[Oe.materialIndex];at&&at.visible&&f.push(T,we,at,G,J.z,Oe)}}else Ce.visible&&f.push(T,we,Ce,G,J.z,null)}}const ve=T.children;for(let we=0,Ce=ve.length;we<Ce;we++)ji(ve[we],O,G,I)}function ot(T,O,G,I){const X=T.opaque,ve=T.transmissive,we=T.transparent;d.setupLightsView(G),ve.length>0&&gi(X,O,G),I&&he.viewport(b.copy(I)),X.length>0&&Sn(X,O,G),ve.length>0&&Sn(ve,O,G),we.length>0&&Sn(we,O,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function gi(T,O,G){const I=Me.isWebGL2;k===null&&(k=new _s(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?il:ys,minFilter:df,samples:I&&s===!0?4:0})),p.getDrawingBufferSize(q),I?k.setSize(q.x,q.y):k.setSize(gp(q.x),gp(q.y));const X=p.getRenderTarget();p.setRenderTarget(k),p.clear();const ve=p.toneMapping;p.toneMapping=Oi,Sn(T,O,G),p.toneMapping=ve,xe.updateMultisampleRenderTarget(k),xe.updateRenderTargetMipmap(k),p.setRenderTarget(X)}function Sn(T,O,G){const I=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ve=T.length;X<ve;X++){const we=T[X],Ce=we.object,Te=we.geometry,He=I===null?we.material:I,Ne=we.group;Ce.layers.test(G.layers)&&R2(Ce,O,G,Te,He,Ne)}}function R2(T,O,G,I,X,ve){T.onBeforeRender(p,O,G,I,X,ve),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(p,O,G,I,T,ve),X.transparent===!0&&X.side===hr?(X.side=kn,X.needsUpdate=!0,p.renderBufferDirect(G,O,I,X,T,ve),X.side=Io,X.needsUpdate=!0,p.renderBufferDirect(G,O,I,X,T,ve),X.side=hr):p.renderBufferDirect(G,O,I,X,T,ve),T.onAfterRender(p,O,G,I,X,ve)}function Ll(T,O,G){O.isScene!==!0&&(O=le);const I=Pe.get(T),X=d.state.lights,ve=d.state.shadowsArray,we=X.state.version,Ce=Ge.getParameters(T,X.state,ve,O,G),Te=Ge.getProgramCacheKey(Ce);let He=I.programs;I.environment=T.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(T.isMeshStandardMaterial?rn:Ct).get(T.envMap||I.environment),He===void 0&&(T.addEventListener("dispose",D),He=new Map,I.programs=He);let Ne=He.get(Te);if(Ne!==void 0){if(I.currentProgram===Ne&&I.lightsStateVersion===we)return Cg(T,Ce),Ne}else Ce.uniforms=Ge.getUniforms(T),T.onBuild(G,Ce,p),T.onBeforeCompile(Ce,p),Ne=Ge.acquireProgram(Ce,Te),He.set(Te,Ne),I.uniforms=Ce.uniforms;const Oe=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=M.uniform),Cg(T,Ce),I.needsLights=I2(T),I.lightsStateVersion=we,I.needsLights&&(Oe.ambientLightColor.value=X.state.ambient,Oe.lightProbe.value=X.state.probe,Oe.directionalLights.value=X.state.directional,Oe.directionalLightShadows.value=X.state.directionalShadow,Oe.spotLights.value=X.state.spot,Oe.spotLightShadows.value=X.state.spotShadow,Oe.rectAreaLights.value=X.state.rectArea,Oe.ltc_1.value=X.state.rectAreaLTC1,Oe.ltc_2.value=X.state.rectAreaLTC2,Oe.pointLights.value=X.state.point,Oe.pointLightShadows.value=X.state.pointShadow,Oe.hemisphereLights.value=X.state.hemi,Oe.directionalShadowMap.value=X.state.directionalShadowMap,Oe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Oe.spotShadowMap.value=X.state.spotShadowMap,Oe.spotLightMatrix.value=X.state.spotLightMatrix,Oe.spotLightMap.value=X.state.spotLightMap,Oe.pointShadowMap.value=X.state.pointShadowMap,Oe.pointShadowMatrix.value=X.state.pointShadowMatrix);const at=Ne.getUniforms(),Fr=Xu.seqWithValue(at.seq,Oe);return I.currentProgram=Ne,I.uniformsList=Fr,Ne}function Cg(T,O){const G=Pe.get(T);G.outputEncoding=O.outputEncoding,G.instancing=O.instancing,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function D2(T,O,G,I,X){O.isScene!==!0&&(O=le),xe.resetTextureUnits();const ve=O.fog,we=I.isMeshStandardMaterial?O.environment:null,Ce=x===null?p.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:xs,Te=(I.isMeshStandardMaterial?rn:Ct).get(I.envMap||we),He=I.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ne=!!I.normalMap&&!!G.attributes.tangent,Oe=!!G.morphAttributes.position,at=!!G.morphAttributes.normal,Fr=!!G.morphAttributes.color,Es=I.toneMapped?p.toneMapping:Oi,Cs=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qn=Cs!==void 0?Cs.length:0,Ve=Pe.get(I),Ps=d.state.lights;if(R===!0&&(L===!0||T!==w)){const sn=T===w&&I.id===_;M.setState(I,T,sn)}let mt=!1;I.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ps.state.version||Ve.outputEncoding!==Ce||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Te||I.fog===!0&&Ve.fog!==ve||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==M.numPlanes||Ve.numIntersection!==M.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ne||Ve.morphTargets!==Oe||Ve.morphNormals!==at||Ve.morphColors!==Fr||Ve.toneMapping!==Es||Me.isWebGL2===!0&&Ve.morphTargetsCount!==Qn)&&(mt=!0):(mt=!0,Ve.__version=I.version);let wn=Ve.currentProgram;mt===!0&&(wn=Ll(I,O,X));let $i=!1,Ko=!1,_f=!1;const Gt=wn.getUniforms(),zr=Ve.uniforms;if(he.useProgram(wn.program)&&($i=!0,Ko=!0,_f=!0),I.id!==_&&(_=I.id,Ko=!0),$i||w!==T){if(Gt.setValue($,"projectionMatrix",T.projectionMatrix),Me.logarithmicDepthBuffer&&Gt.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,Ko=!0,_f=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const sn=Gt.map.cameraPosition;sn!==void 0&&sn.setValue($,J.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Gt.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&Gt.setValue($,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){Gt.setOptional($,X,"bindMatrix"),Gt.setOptional($,X,"bindMatrixInverse");const sn=X.skeleton;sn&&(Me.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Gt.setValue($,"boneTexture",sn.boneTexture,xe),Gt.setValue($,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Sf=G.morphAttributes;if((Sf.position!==void 0||Sf.normal!==void 0||Sf.color!==void 0&&Me.isWebGL2===!0)&&ie.update(X,G,I,wn),(Ko||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,Gt.setValue($,"receiveShadow",X.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(zr.envMap.value=Te,zr.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Ko&&(Gt.setValue($,"toneMappingExposure",p.toneMappingExposure),Ve.needsLights&&k2(zr,_f),ve&&I.fog===!0&&mi.refreshFogUniforms(zr,ve),mi.refreshMaterialUniforms(zr,I,U,A,k),Xu.upload($,Ve.uniformsList,zr,xe)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Xu.upload($,Ve.uniformsList,zr,xe),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Gt.setValue($,"center",X.center),Gt.setValue($,"modelViewMatrix",X.modelViewMatrix),Gt.setValue($,"normalMatrix",X.normalMatrix),Gt.setValue($,"modelMatrix",X.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const sn=I.uniformsGroups;for(let wf=0,N2=sn.length;wf<N2;wf++)if(Me.isWebGL2){const Pg=sn[wf];fe.update(Pg,wn),fe.bind(Pg,wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wn}function k2(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function I2(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,O,G){Pe.get(T.texture).__webglTexture=O,Pe.get(T.depthTexture).__webglTexture=G;const I=Pe.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=G===void 0,I.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const G=Pe.get(T);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,G=0){x=T,g=O,v=G;let I=!0;if(T){const Te=Pe.get(T);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),I=!1):Te.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Te.__hasExternalTextures&&xe.rebindTextures(T,Pe.get(T.texture).__webglTexture,Pe.get(T.depthTexture).__webglTexture)}let X=null,ve=!1,we=!1;if(T){const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture)&&(we=!0);const He=Pe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=He[O],ve=!0):Me.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?X=Pe.get(T).__webglMultisampledFramebuffer:X=He,b.copy(T.viewport),P.copy(T.scissor),S=T.scissorTest}else b.copy(N).multiplyScalar(U).floor(),P.copy(V).multiplyScalar(U).floor(),S=K;if(he.bindFramebuffer(36160,X)&&Me.drawBuffers&&I&&he.drawBuffers(T,X),he.viewport(b),he.scissor(P),he.setScissorTest(S),ve){const Te=Pe.get(T.texture);$.framebufferTexture2D(36160,36064,34069+O,Te.__webglTexture,G)}else if(we){const Te=Pe.get(T.texture),He=O||0;$.framebufferTextureLayer(36160,36064,Te.__webglTexture,G||0,He)}_=-1},this.readRenderTargetPixels=function(T,O,G,I,X,ve,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Pe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){he.bindFramebuffer(36160,Ce);try{const Te=T.texture,He=Te.format,Ne=Te.type;if(He!==oi&&H.convert(He)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===il&&(Se.has("EXT_color_buffer_half_float")||Me.isWebGL2&&Se.has("EXT_color_buffer_float"));if(Ne!==ys&&H.convert(Ne)!==$.getParameter(35738)&&!(Ne===is&&(Me.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-I&&G>=0&&G<=T.height-X&&$.readPixels(O,G,I,X,H.convert(He),H.convert(Ne),ve)}finally{const Te=x!==null?Pe.get(x).__webglFramebuffer:null;he.bindFramebuffer(36160,Te)}}},this.copyFramebufferToTexture=function(T,O,G=0){const I=Math.pow(2,-G),X=Math.floor(O.image.width*I),ve=Math.floor(O.image.height*I);xe.setTexture2D(O,0),$.copyTexSubImage2D(3553,G,0,0,T.x,T.y,X,ve),he.unbindTexture()},this.copyTextureToTexture=function(T,O,G,I=0){const X=O.image.width,ve=O.image.height,we=H.convert(G.format),Ce=H.convert(G.type);xe.setTexture2D(G,0),$.pixelStorei(37440,G.flipY),$.pixelStorei(37441,G.premultiplyAlpha),$.pixelStorei(3317,G.unpackAlignment),O.isDataTexture?$.texSubImage2D(3553,I,T.x,T.y,X,ve,we,Ce,O.image.data):O.isCompressedTexture?$.compressedTexSubImage2D(3553,I,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):$.texSubImage2D(3553,I,T.x,T.y,we,Ce,O.image),I===0&&G.generateMipmaps&&$.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(T,O,G,I,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Te=H.convert(I.format),He=H.convert(I.type);let Ne;if(I.isData3DTexture)xe.setTexture3D(I,0),Ne=32879;else if(I.isDataArrayTexture)xe.setTexture2DArray(I,0),Ne=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,I.flipY),$.pixelStorei(37441,I.premultiplyAlpha),$.pixelStorei(3317,I.unpackAlignment);const Oe=$.getParameter(3314),at=$.getParameter(32878),Fr=$.getParameter(3316),Es=$.getParameter(3315),Cs=$.getParameter(32877),Qn=G.isCompressedTexture?G.mipmaps[0]:G.image;$.pixelStorei(3314,Qn.width),$.pixelStorei(32878,Qn.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),G.isDataTexture||G.isData3DTexture?$.texSubImage3D(Ne,X,O.x,O.y,O.z,ve,we,Ce,Te,He,Qn.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Ne,X,O.x,O.y,O.z,ve,we,Ce,Te,Qn.data)):$.texSubImage3D(Ne,X,O.x,O.y,O.z,ve,we,Ce,Te,He,Qn),$.pixelStorei(3314,Oe),$.pixelStorei(32878,at),$.pixelStorei(3316,Fr),$.pixelStorei(3315,Es),$.pixelStorei(32877,Cs),X===0&&I.generateMipmaps&&$.generateMipmap(Ne),he.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){g=0,v=0,x=null,he.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class cO extends YM{}cO.prototype.isWebGL1Renderer=!0;class fO extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class dO{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=zx();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function zx(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dg);const So=50,wo=80,hO=!0,$d=5,pO=new dO,KM=SO();class mO{constructor(e){gt(this,"_ref");gt(this,"_speed",-1);gt(this,"_horizontalPressure",-1);gt(this,"_verticalPressure",-1);gt(this,"_waveFrequencyX",-1);gt(this,"_waveFrequencyY",-1);gt(this,"_waveAmplitude",-1);gt(this,"_shadows",-1);gt(this,"_highlights",-1);gt(this,"_saturation",-1);gt(this,"_brightness",-1);gt(this,"_colorBlending",-1);gt(this,"_colors",[]);gt(this,"_wireframe",!1);gt(this,"_backgroundColor","#FFFFFF");gt(this,"_backgroundAlpha",1);gt(this,"requestRef",-1);gt(this,"sizeObserver");gt(this,"sceneState");const{ref:n,speed:i=4,horizontalPressure:r=3,verticalPressure:s=3,waveFrequencyX:o=5,waveFrequencyY:a=5,waveAmplitude:l=3,colors:u,highlights:c=4,shadows:f=4,colorSaturation:d=0,colorBrightness:m=1,colorBlending:y=5,wireframe:p=!1,backgroundColor:h="#FFFFFF",backgroundAlpha:g=1,resolution:v=1,seed:x}=e;this._ref=n,this.destroy=this.destroy.bind(this),this._initScene=this._initScene.bind(this),this._buildMaterial=this._buildMaterial.bind(this),this.speed=i,this.horizontalPressure=r,this.verticalPressure=s,this.waveFrequencyX=o,this.waveFrequencyY=a,this.waveAmplitude=l,this.colorBlending=y,this.colors=u,this.shadows=f,this.highlights=c,this.colorSaturation=d,this.colorBrightness=m,this.wireframe=p,this.backgroundColor=h,this.backgroundAlpha=g,this.sceneState=this._initScene(v);let _=x!==void 0?x:_O();const w=()=>{const{renderer:P,camera:S,scene:E,meshes:A}=this.sceneState;Math.floor(_*10)%5===0&&xO(n),P.setClearColor(this._backgroundColor,this._backgroundAlpha),A.forEach(U=>{const ne=this._ref.width,z=this._ref.height,N=[...this._colors.map(V=>({is_active:V.enabled,color:new je(V.color),influence:V.influence})),...Array.from({length:$d-this._colors.length}).map(()=>({is_active:!1,color:new je(0)}))];_+=pO.getDelta()*this._speed,U.material.uniforms.u_time.value=_,U.material.uniforms.u_resolution={value:new Be(ne,z)},U.material.uniforms.u_color_pressure={value:new Be(this._horizontalPressure,this._verticalPressure)},U.material.uniforms.u_wave_frequency_x={value:this._waveFrequencyX},U.material.uniforms.u_wave_frequency_y={value:this._waveFrequencyY},U.material.uniforms.u_wave_amplitude={value:this._waveAmplitude},U.material.uniforms.u_plane_width={value:So},U.material.uniforms.u_plane_height={value:wo},U.material.uniforms.u_color_blending={value:this._colorBlending},U.material.uniforms.u_colors={value:N},U.material.uniforms.u_colors_count={value:$d},U.material.uniforms.u_shadows={value:this._shadows},U.material.uniforms.u_highlights={value:this._highlights},U.material.uniforms.u_saturation={value:this._saturation},U.material.uniforms.u_brightness={value:this._brightness},U.material.wireframe=this._wireframe}),P.render(E,S),this.requestRef=requestAnimationFrame(w)},b=()=>{const{renderer:P}=this.sceneState,S=P.domElement,E=S.clientWidth,A=S.clientHeight;this.sceneState.renderer.setSize(E,A,!1),Ux(this.sceneState.camera,E,A)};this.sizeObserver=new ResizeObserver(P=>{b()}),this.sizeObserver.observe(n),w()}destroy(){this&&(cancelAnimationFrame(this.requestRef),this.sizeObserver.disconnect())}set speed(e){this._speed=e/20}set horizontalPressure(e){this._horizontalPressure=e/4}set verticalPressure(e){this._verticalPressure=e/4}set waveFrequencyX(e){this._waveFrequencyX=e*.04}set waveFrequencyY(e){this._waveFrequencyY=e*.04}set waveAmplitude(e){this._waveAmplitude=e*.75}set colors(e){this._colors=e}set highlights(e){this._highlights=e/100}set shadows(e){this._shadows=e/100}set colorSaturation(e){this._saturation=e/10}set colorBrightness(e){this._brightness=e}set colorBlending(e){this._colorBlending=e/10}set wireframe(e){this._wireframe=e}set resolution(e){this.sceneState=this._initScene(e)}set backgroundColor(e){this._backgroundColor=e}set backgroundAlpha(e){this._backgroundAlpha=e}_initScene(e){const n=this._ref.width,i=this._ref.height,r=new YM({alpha:!0,canvas:this._ref});r.setClearColor(16711680,.5),r.setSize(n,i,!1);const s=[],o=new fO,a=this._buildMaterial(n,i),l=new pf(So,wo,240*e,240*e),u=new Ai(l,a);u.rotation.x=-Math.PI/3.5,u.position.z=-1,s.push(u),o.add(u);const c=new pg(0,0,0,0,0,0);return c.position.z=5,Ux(c,n,i),{renderer:r,camera:c,scene:o,meshes:s,resolution:e}}_buildMaterial(e,n){const i=[...this._colors.map(o=>({is_active:o.enabled,color:new je(o.color),influence:o.influence})),...Array.from({length:$d-this._colors.length}).map(()=>({is_active:!1,color:new je(0)}))],r={u_time:{value:0},u_color_pressure:{value:new Be(this._horizontalPressure,this._verticalPressure)},u_wave_frequency_x:{value:this._waveFrequencyX},u_wave_frequency_y:{value:this._waveFrequencyY},u_wave_amplitude:{value:this._waveAmplitude},u_resolution:{value:new Be(e,n)},u_colors:{value:i},u_colors_count:{value:this._colors.length},u_plane_width:{value:So},u_plane_height:{value:wo},u_shadows:{value:this._shadows},u_highlights:{value:this._highlights}},s=new Pr({uniforms:r,vertexShader:Vx()+yO()+Bx()+gO(),fragmentShader:Vx()+Bx()+vO()});return s.wireframe=hO,s}}function Ux(t,e,n){const i=e*n/1e6*So*wo/1.5,r=e/n,s=Math.sqrt(i*r),o=i/s,a=-So/2,l=Math.min((a+s)/1.5,So/2),u=wo/4,c=Math.max((u-o)/2,-wo/4),f=-100,d=1e3;t instanceof pg?(t.left=a,t.right=l,t.top=u,t.bottom=c,t.near=f,t.far=d,t.updateProjectionMatrix()):t instanceof An&&(t.aspect=e/n,t.updateProjectionMatrix())}function gO(){return`

void main() {

    vUv = uv;

    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * position.y + u_time,
        u_time
    ));
    
    vec3 color;

    // float t = mod(u_base_color, 100.0);
    color = u_colors[0].color;
    
    vec2 noise_cord = vUv * u_color_pressure;
    
    const float minNoise = .0;
    const float maxNoise = .9;
    
    for (int i = 1; i < u_colors_count; i++) {
    
        if(u_colors[i].is_active == 1.0){
            float noiseFlow = (1. + float(i)) / 30.;
            float noiseSpeed = (1. + float(i)) * 0.11;
            float noiseSeed = 13. + float(i) * 7.;
            
            float noise = snoise(
                vec3(
                    noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                    noise_cord.y * u_color_pressure.y,
                    u_time * noiseSpeed
                ) + noiseSeed
            );
            
            noise = clamp(minNoise, maxNoise + float(i) * 0.02, noise);
            vec3 nextColor = u_colors[i].color;
            
            // vec3 colorOklab = oklab2rgb(color);
            // vec3 nextColorOklab = oklab2rgb(nextColor);
            // vec3 mixColor = mix(colorOklab, nextColorOklab, smoothstep(0.0, u_color_blending, noise));
            //
            // color = rgb2oklab(mixColor);
            
            color = mix(color, nextColor, smoothstep(0.0, u_color_blending, noise));
        }
        
    }
    
    v_color = color;
    
    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
    
    v_new_position = gl_Position;
}
`}function vO(){return`

void main(){
    vec3 color = v_color;
    
    color.rgb += pow(v_displacement_amount, 1.0) * u_highlights;
    color.rgb -= pow(1.0 - v_displacement_amount, 2.0) * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;
    
    gl_FragColor = vec4(color,1.0);
}
`}const Vx=()=>`
precision highp float;

struct Color {
    float is_active;
    vec3 color;
    float value;
};

uniform float u_time;

uniform float u_wave_amplitude;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;

uniform vec2 u_color_pressure;

uniform float u_plane_width;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;

uniform float u_color_blending;

uniform int u_colors_count;
uniform Color u_colors[5];
uniform vec2 u_resolution;

varying vec2 vUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

    `,yO=()=>`

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float snoise(vec3 v)
{
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);
                    
vec3 oklab2rgb(vec3 linear)
{
    const mat3 im1 = mat3(0.4121656120, 0.2118591070, 0.0883097947,
                          0.5362752080, 0.6807189584, 0.2818474174,
                          0.0514575653, 0.1074065790, 0.6302613616);
                       
    const mat3 im2 = mat3(+0.2104542553, +1.9779984951, +0.0259040371,
                          +0.7936177850, -2.4285922050, +0.7827717662,
                          -0.0040720468, +0.4505937099, -0.8086757660);
                       
    vec3 lms = im1 * linear;
            
    return im2 * (sign(lms) * pow(abs(lms), vec3(1.0/3.0)));
}

vec3 rgb2oklab(vec3 oklab)
{
    const mat3 m1 = mat3(+1.000000000, +1.000000000, +1.000000000,
                         +0.396337777, -0.105561346, -0.089484178,
                         +0.215803757, -0.063854173, -1.291485548);
                       
    const mat3 m2 = mat3(+4.076724529, -1.268143773, -0.004111989,
                         -3.307216883, +2.609332323, -0.703476310,
                         +0.230759054, -0.341134429, +1.706862569);
    vec3 lms = m1 * oklab;
    
    return m2 * (lms * lms * lms);
}

    `,Bx=()=>`

vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}

float saturation(vec3 rgb)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(rgb.bg, K.wz), vec4(rgb.gb, K.xy), step(rgb.b, rgb.g));
    vec4 q = mix(vec4(p.xyw, rgb.r), vec4(rgb.r, p.yzx), step(p.x, rgb.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return abs(6.0 * d + e);
}

// get saturation of a color in values between 0 and 1
float getSaturation(vec3 color) {
    float max = max(color.r, max(color.g, color.b));
    float min = min(color.r, min(color.g, color.b));
    return (max - min) / max;
}
    
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`,Hx=t=>{t.id=KM,t.href="https://neat.firecms.co",t.target="_blank",t.style.position="absolute",t.style.display="block",t.style.bottom="0",t.style.right="0",t.style.padding="10px",t.style.color="#dcdcdc",t.style.opacity="0.8",t.style.fontFamily="sans-serif",t.style.fontSize="16px",t.style.fontWeight="bold",t.style.textDecoration="none",t.style.zIndex="10000",t.innerHTML="NEAT"},xO=t=>{var i,r;const e=(i=t.parentElement)==null?void 0:i.getElementsByTagName("a");if(e){for(let s=0;s<e.length;s++)if(e[s].id===KM){Hx(e[s]);return}}const n=document.createElement("a");Hx(n),(r=t.parentElement)==null||r.appendChild(n)};function _O(){const t=new Date,e=t.getMinutes(),n=t.getSeconds();return e*60+n}function SO(t=6){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<t;i++){const r=Math.floor(Math.random()*e.length);n+=e.charAt(r)}return n}const wO=()=>{const t=ee.useRef(null),e=ee.useRef(null);return ee.useEffect(()=>{if(t.current)return e.current=new mO({ref:t.current,colors:[{color:"#E4E4E4",enabled:!0},{color:"#FFFFFF",enabled:!0},{color:"#10410C",enabled:!0},{color:"#E4E4E4",enabled:!0},{color:"#10410C",enabled:!0}],speed:6,horizontalPressure:2,verticalPressure:5,waveFrequencyX:2,waveFrequencyY:4,waveAmplitude:2,shadows:5,highlights:6,colorBrightness:2,colorSaturation:5,wireframe:!1,colorBlending:4,backgroundColor:"#0b3954",backgroundAlpha:1,resolution:1}),()=>{e.current&&e.current.destroy()}},[]),B.jsx("canvas",{className:"gradient-canvas",style:{position:"absolute",top:0,left:0,zIndex:-1,height:"100vh",width:"100vw"},ref:t})},MO=[{key:1,name:"GitHub",url:"https://github.com/shubo16",image:"./assets/square-github.svg"},{key:2,name:"Instagram",url:"",image:"./assets/instaLogo.png"}];function bO(){const t={initial:{scaleY:0},animate:{scaleY:1,transition:{duration:1,ease:[.12,0,.36,0]}},exit:{scaleY:0,transition:{delay:.5,duration:.5,ease:[1,2,3,4]}}};return B.jsxs(Re.div,{id:"home",style:{position:"relative",height:"100vh",overflow:"hidden"},children:[B.jsx(wO,{}),B.jsxs(Re.div,{initial:{scale:0,x:0},animate:{x:0,scale:1},transition:{type:"spring",stiffness:260,damping:50},className:"content flex justify-center items-center flex-col h-5/6 w-full gap-10",children:[B.jsx(Re.h1,{className:"text-black text-5xl font-extrabold uppercase text-center",children:"hi there, i'm shubo!"}),B.jsx(Re.h3,{className:"text-3xl top-4 font-thin w-11/12 text-pretty text-center uppercase object-contain",children:"creative frontend developer based in the UK"}),B.jsx(Re.div,{variants:t,initial:"initial",animate:"animate",exit:"exit",className:"flex gap-10",children:MO.map(e=>B.jsx(Re.div,{children:B.jsx("a",{href:e.url,target:"_blank",children:B.jsx(Re.img,{whileHover:{scale:1.2,rotate:360,transitionDuration:"0.5s"},src:e.image,alt:e.name,className:"h-20"})})},e.key))})]})]})}const TO={description:"HI I'm Shubo, a junior frontend developer. I enjoy making interactive designs and bringing them to life, whether its in fashion, web design or frontend development. Theres nothing I crave more than creating and developing my skills and ideas to bring my vision to life, with a need to produce clear and concise code in any project. Accompanied by a strong, passion and drive to further develop my skills, I feel as though theres nothing stopping me being able to reach my full potential as a programmer and web developer."};function EO(){return B.jsx("section",{children:B.jsxs(Re.ul,{className:"flex justify-evenly gap-4 md:gap-10",children:[B.jsx(Re.div,{animate:{scale:1.2},transition:{duration:.1},whileHover:{scale:1.5,transition:Vu},children:B.jsx("img",{src:"assets/shubo1.jpeg",alt:"pfp",className:"hidden sm:block rounded-md sm:h-24 md:h-28 z-10 border-2 sm:border-lm-light-green border-solid"})}),B.jsx(Re.div,{animate:{scale:1.2},transition:{duration:.5},whileHover:{scale:1.5,transition:Vu},children:B.jsx("img",{src:"assets/londonpfp.jpeg",alt:"pfp",className:"hidden sm:block rounded-md sm:h-24 md:h-28 z-10 border-2 border-lm-light-green border-solid"})}),B.jsx(Re.div,{animate:{scale:1.2},transition:{duration:.5},whileHover:{scale:1.5,transition:Vu},children:B.jsx("img",{src:"assets/screenshot.png",alt:"pfp",className:"hidden sm:block rounded-md sm:h-24  md:h-28 z-10 border-2 border-lm-light-green border-solid"})})]})})}const Wx=()=>{};let gg={},ZM={},QM=null,JM={mark:Wx,measure:Wx};try{typeof window<"u"&&(gg=window),typeof document<"u"&&(ZM=document),typeof MutationObserver<"u"&&(QM=MutationObserver),typeof performance<"u"&&(JM=performance)}catch{}const{userAgent:Gx=""}=gg.navigator||{},Ar=gg,Ke=ZM,jx=QM,Eu=JM;Ar.document;const Gi=!!Ke.documentElement&&!!Ke.head&&typeof Ke.addEventListener=="function"&&typeof Ke.createElement=="function",e2=~Gx.indexOf("MSIE")||~Gx.indexOf("Trident/");var Je="classic",t2="duotone",pn="sharp",mn="sharp-duotone",CO=[Je,t2,pn,mn],PO={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},$x={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},AO=["kit"],LO=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,RO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,DO={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},kO={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},IO={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},NO={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},OO={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},FO={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},n2={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},zO=["solid","regular","light","thin","duotone","brands"],i2=[1,2,3,4,5,6,7,8,9,10],UO=i2.concat([11,12,13,14,15,16,17,18,19,20]),ya={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},VO=[...Object.keys(NO),...zO,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ya.GROUP,ya.SWAP_OPACITY,ya.PRIMARY,ya.SECONDARY].concat(i2.map(t=>"".concat(t,"x"))).concat(UO.map(t=>"w-".concat(t))),BO={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},HO={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},WO={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Xx={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const Bi="___FONT_AWESOME___",yp=16,r2="fa",s2="svg-inline--fa",Ss="data-fa-i2svg",xp="data-fa-pseudo-element",GO="data-fa-pseudo-element-pending",vg="data-prefix",yg="data-icon",qx="fontawesome-i2svg",jO="async",$O=["HTML","HEAD","STYLE","SCRIPT"],o2=(()=>{try{return!0}catch{return!1}})(),a2=[Je,pn,mn];function Pl(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[Je]}})}const l2={...n2};l2[Je]={...n2[Je],...$x.kit,...$x["kit-duotone"]};const fs=Pl(l2),_p={...FO};_p[Je]={..._p[Je],...Xx.kit,...Xx["kit-duotone"]};const rl=Pl(_p),Sp={...OO};Sp[Je]={...Sp[Je],...WO.kit};const ds=Pl(Sp),wp={...IO};wp[Je]={...wp[Je],...HO.kit};const XO=Pl(wp),qO=LO,u2="fa-layers-text",YO=RO,KO={...PO};Pl(KO);const ZO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xd=ya,Uo=new Set;Object.keys(rl[Je]).map(Uo.add.bind(Uo));Object.keys(rl[pn]).map(Uo.add.bind(Uo));Object.keys(rl[mn]).map(Uo.add.bind(Uo));const QO=[...AO,...VO],Na=Ar.FontAwesomeConfig||{};function JO(t){var e=Ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function eF(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}Ke&&typeof Ke.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,i]=e;const r=eF(JO(n));r!=null&&(Na[i]=r)});const c2={styleDefault:"solid",familyDefault:"classic",cssPrefix:r2,replacementClass:s2,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Na.familyPrefix&&(Na.cssPrefix=Na.familyPrefix);const Vo={...c2,...Na};Vo.autoReplaceSvg||(Vo.observeMutations=!1);const de={};Object.keys(c2).forEach(t=>{Object.defineProperty(de,t,{enumerable:!0,set:function(e){Vo[t]=e,Oa.forEach(n=>n(de))},get:function(){return Vo[t]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(t){Vo.cssPrefix=t,Oa.forEach(e=>e(de))},get:function(){return Vo.cssPrefix}});Ar.FontAwesomeConfig=de;const Oa=[];function tF(t){return Oa.push(t),()=>{Oa.splice(Oa.indexOf(t),1)}}const ir=yp,ai={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nF(t){if(!t||!Gi)return;const e=Ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=Ke.head.childNodes;let i=null;for(let r=n.length-1;r>-1;r--){const s=n[r],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=s)}return Ke.head.insertBefore(e,i),t}const iF="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function sl(){let t=12,e="";for(;t-- >0;)e+=iF[Math.random()*62|0];return e}function Yo(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function xg(t){return t.classList?Yo(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function f2(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rF(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(f2(t[n]),'" '),"").trim()}function gf(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function _g(t){return t.size!==ai.size||t.x!==ai.x||t.y!==ai.y||t.rotate!==ai.rotate||t.flipX||t.flipY}function sF(t){let{transform:e,containerWidth:n,iconWidth:i}=t;const r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function oF(t){let{transform:e,width:n=yp,height:i=yp,startCentered:r=!1}=t,s="";return r&&e2?s+="translate(".concat(e.x/ir-n/2,"em, ").concat(e.y/ir-i/2,"em) "):r?s+="translate(calc(-50% + ".concat(e.x/ir,"em), calc(-50% + ").concat(e.y/ir,"em)) "):s+="translate(".concat(e.x/ir,"em, ").concat(e.y/ir,"em) "),s+="scale(".concat(e.size/ir*(e.flipX?-1:1),", ").concat(e.size/ir*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var aF=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function d2(){const t=r2,e=s2,n=de.cssPrefix,i=de.replacementClass;let r=aF;if(n!==t||i!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(i))}return r}let Yx=!1;function qd(){de.autoAddCss&&!Yx&&(nF(d2()),Yx=!0)}var lF={mixout(){return{dom:{css:d2,insertCss:qd}}},hooks(){return{beforeDOMElementCreation(){qd()},beforeI2svg(){qd()}}}};const Hi=Ar||{};Hi[Bi]||(Hi[Bi]={});Hi[Bi].styles||(Hi[Bi].styles={});Hi[Bi].hooks||(Hi[Bi].hooks={});Hi[Bi].shims||(Hi[Bi].shims=[]);var li=Hi[Bi];const h2=[],p2=function(){Ke.removeEventListener("DOMContentLoaded",p2),Pc=1,h2.map(t=>t())};let Pc=!1;Gi&&(Pc=(Ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ke.readyState),Pc||Ke.addEventListener("DOMContentLoaded",p2));function uF(t){Gi&&(Pc?setTimeout(t,0):h2.push(t))}function Al(t){const{tag:e,attributes:n={},children:i=[]}=t;return typeof t=="string"?f2(t):"<".concat(e," ").concat(rF(n),">").concat(i.map(Al).join(""),"</").concat(e,">")}function Kx(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yd=function(e,n,i,r){var s=Object.keys(e),o=s.length,a=n,l,u,c;for(i===void 0?(l=1,c=e[s[0]]):(l=0,c=i);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function cF(t){const e=[];let n=0;const i=t.length;for(;n<i;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Mp(t){const e=cF(t);return e.length===1?e[0].toString(16):null}function fF(t,e){const n=t.length;let i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Zx(t){return Object.keys(t).reduce((e,n)=>{const i=t[n];return!!i.icon?e[i.iconName]=i.icon:e[n]=i,e},{})}function bp(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=n,r=Zx(e);typeof li.hooks.addPack=="function"&&!i?li.hooks.addPack(t,Zx(e)):li.styles[t]={...li.styles[t]||{},...r},t==="fas"&&bp("fa",e)}const{styles:Zr,shims:dF}=li,hF={[Je]:Object.values(ds[Je]),[pn]:Object.values(ds[pn]),[mn]:Object.values(ds[mn])};let Sg=null,m2={},g2={},v2={},y2={},x2={};const pF={[Je]:Object.keys(fs[Je]),[pn]:Object.keys(fs[pn]),[mn]:Object.keys(fs[mn])};function mF(t){return~QO.indexOf(t)}function gF(t,e){const n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!mF(r)?r:null}const _2=()=>{const t=i=>Yd(Zr,(r,s,o)=>(r[o]=Yd(s,i,{}),r),{});m2=t((i,r,s)=>(r[3]&&(i[r[3]]=s),r[2]&&r[2].filter(a=>typeof a=="number").forEach(a=>{i[a.toString(16)]=s}),i)),g2=t((i,r,s)=>(i[s]=s,r[2]&&r[2].filter(a=>typeof a=="string").forEach(a=>{i[a]=s}),i)),x2=t((i,r,s)=>{const o=r[2];return i[s]=s,o.forEach(a=>{i[a]=s}),i});const e="far"in Zr||de.autoFetchSvg,n=Yd(dF,(i,r)=>{const s=r[0];let o=r[1];const a=r[2];return o==="far"&&!e&&(o="fas"),typeof s=="string"&&(i.names[s]={prefix:o,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:o,iconName:a}),i},{names:{},unicodes:{}});v2=n.names,y2=n.unicodes,Sg=vf(de.styleDefault,{family:de.familyDefault})};tF(t=>{Sg=vf(t.styleDefault,{family:de.familyDefault})});_2();function wg(t,e){return(m2[t]||{})[e]}function vF(t,e){return(g2[t]||{})[e]}function pr(t,e){return(x2[t]||{})[e]}function S2(t){return v2[t]||{prefix:null,iconName:null}}function yF(t){const e=y2[t],n=wg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Lr(){return Sg}const Mg=()=>({prefix:null,iconName:null,rest:[]});function vf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=Je}=e,i=fs[n][t],r=rl[n][t]||rl[n][i],s=t in li.styles?t:null;return r||s||null}const xF={[Je]:Object.keys(ds[Je]),[pn]:Object.keys(ds[pn]),[mn]:Object.keys(ds[mn])};function yf(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,i={[Je]:"".concat(de.cssPrefix,"-").concat(Je),[pn]:"".concat(de.cssPrefix,"-").concat(pn),[mn]:"".concat(de.cssPrefix,"-").concat(mn)};let r=null,s=Je;const o=CO.filter(l=>l!==t2);o.forEach(l=>{(t.includes(i[l])||t.some(u=>xF[l].includes(u)))&&(s=l)});const a=t.reduce((l,u)=>{const c=gF(de.cssPrefix,u);if(Zr[u]?(u=hF[s].includes(u)?XO[s][u]:u,r=u,l.prefix=u):pF[s].indexOf(u)>-1?(r=u,l.prefix=vf(u,{family:s})):c?l.iconName=c:u!==de.replacementClass&&!o.some(f=>u===i[f])&&l.rest.push(u),!n&&l.prefix&&l.iconName){const f=r==="fa"?S2(l.iconName):{},d=pr(l.prefix,l.iconName);f.prefix&&(r=null),l.iconName=f.iconName||d||l.iconName,l.prefix=f.prefix||l.prefix,l.prefix==="far"&&!Zr.far&&Zr.fas&&!de.autoFetchSvg&&(l.prefix="fas")}return l},Mg());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&s===pn&&(Zr.fass||de.autoFetchSvg)&&(a.prefix="fass",a.iconName=pr(a.prefix,a.iconName)||a.iconName),!a.prefix&&s===mn&&(Zr.fasds||de.autoFetchSvg)&&(a.prefix="fasds",a.iconName=pr(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||r==="fa")&&(a.prefix=Lr()||"fas"),a}class _F{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...r[s]},bp(s,r[s]);const o=ds[Je][s];o&&bp(o,r[s]),_2()})}reset(){this.definitions={}}_pullDefinitions(e,n){const i=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(i).map(r=>{const{prefix:s,iconName:o,icon:a}=i[r],l=a[2];e[s]||(e[s]={}),l.length>0&&l.forEach(u=>{typeof u=="string"&&(e[s][u]=a)}),e[s][o]=a}),e}}let Qx=[],co={};const Mo={},SF=Object.keys(Mo);function wF(t,e){let{mixoutsTo:n}=e;return Qx=t,co={},Object.keys(Mo).forEach(i=>{SF.indexOf(i)===-1&&delete Mo[i]}),Qx.forEach(i=>{const r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(s=>{typeof r[s]=="function"&&(n[s]=r[s]),typeof r[s]=="object"&&Object.keys(r[s]).forEach(o=>{n[s]||(n[s]={}),n[s][o]=r[s][o]})}),i.hooks){const s=i.hooks();Object.keys(s).forEach(o=>{co[o]||(co[o]=[]),co[o].push(s[o])})}i.provides&&i.provides(Mo)}),n}function Tp(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];return(co[t]||[]).forEach(o=>{e=o.apply(null,[e,...i])}),e}function ws(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];(co[t]||[]).forEach(s=>{s.apply(null,n)})}function Rr(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Mo[t]?Mo[t].apply(null,e):void 0}function Ep(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||Lr();if(e)return e=pr(n,e)||e,Kx(w2.definitions,n,e)||Kx(li.styles,n,e)}const w2=new _F,MF=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,ws("noAuto")},bF={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Gi?(ws("beforeI2svg",t),Rr("pseudoElements2svg",t),Rr("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,uF(()=>{EF({autoReplaceSvgRoot:e}),ws("watch",t)})}},TF={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=vf(t[0]);return{prefix:n,iconName:pr(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(de.cssPrefix,"-"))>-1||t.match(qO))){const e=yf(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||Lr(),iconName:pr(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=Lr();return{prefix:e,iconName:pr(e,t)||t}}}},_n={noAuto:MF,config:de,dom:bF,parse:TF,library:w2,findIconDefinition:Ep,toHtml:Al},EF=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=Ke}=t;(Object.keys(li.styles).length>0||de.autoFetchSvg)&&Gi&&de.autoReplaceSvg&&_n.dom.i2svg({node:e})};function xf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>Al(n))}}),Object.defineProperty(t,"node",{get:function(){if(!Gi)return;const n=Ke.createElement("div");return n.innerHTML=t.html,n.children}}),t}function CF(t){let{children:e,main:n,mask:i,attributes:r,styles:s,transform:o}=t;if(_g(o)&&n.found&&!i.found){const{width:a,height:l}=n,u={x:a/l/2,y:.5};r.style=gf({...s,"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")})}return[{tag:"svg",attributes:r,children:e}]}function PF(t){let{prefix:e,iconName:n,children:i,attributes:r,symbol:s}=t;const o=s===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...r,id:o},children:i}]}]}function bg(t){const{icons:{main:e,mask:n},prefix:i,iconName:r,transform:s,symbol:o,title:a,maskId:l,titleId:u,extra:c,watchable:f=!1}=t,{width:d,height:m}=n.found?n:e,y=i==="fak",p=[de.replacementClass,r?"".concat(de.cssPrefix,"-").concat(r):""].filter(w=>c.classes.indexOf(w)===-1).filter(w=>w!==""||!!w).concat(c.classes).join(" ");let h={children:[],attributes:{...c.attributes,"data-prefix":i,"data-icon":r,class:p,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(m)}};const g=y&&!~c.classes.indexOf("fa-fw")?{width:"".concat(d/m*16*.0625,"em")}:{};f&&(h.attributes[Ss]=""),a&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(u||sl())},children:[a]}),delete h.attributes.title);const v={...h,prefix:i,iconName:r,main:e,mask:n,maskId:l,transform:s,symbol:o,styles:{...g,...c.styles}},{children:x,attributes:_}=n.found&&e.found?Rr("generateAbstractMask",v)||{children:[],attributes:{}}:Rr("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=x,v.attributes=_,o?PF(v):CF(v)}function Jx(t){const{content:e,width:n,height:i,transform:r,title:s,extra:o,watchable:a=!1}=t,l={...o.attributes,...s?{title:s}:{},class:o.classes.join(" ")};a&&(l[Ss]="");const u={...o.styles};_g(r)&&(u.transform=oF({transform:r,startCentered:!0,width:n,height:i}),u["-webkit-transform"]=u.transform);const c=gf(u);c.length>0&&(l.style=c);const f=[];return f.push({tag:"span",attributes:l,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function AF(t){const{content:e,title:n,extra:i}=t,r={...i.attributes,...n?{title:n}:{},class:i.classes.join(" ")},s=gf(i.styles);s.length>0&&(r.style=s);const o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}const{styles:Kd}=li;function Cp(t){const e=t[0],n=t[1],[i]=t.slice(4);let r=null;return Array.isArray(i)?r={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Xd.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Xd.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Xd.PRIMARY),fill:"currentColor",d:i[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:r}}const LF={found:!1,width:512,height:512};function RF(t,e){!o2&&!de.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Pp(t,e){let n=e;return e==="fa"&&de.styleDefault!==null&&(e=Lr()),new Promise((i,r)=>{if(n==="fa"){const s=S2(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Kd[e]&&Kd[e][t]){const s=Kd[e][t];return i(Cp(s))}RF(t,e),i({...LF,icon:de.showMissingIcons&&t?Rr("missingIconAbstract")||{}:{}})})}const e_=()=>{},Ap=de.measurePerformance&&Eu&&Eu.mark&&Eu.measure?Eu:{mark:e_,measure:e_},xa='FA "6.6.0"',DF=t=>(Ap.mark("".concat(xa," ").concat(t," begins")),()=>M2(t)),M2=t=>{Ap.mark("".concat(xa," ").concat(t," ends")),Ap.measure("".concat(xa," ").concat(t),"".concat(xa," ").concat(t," begins"),"".concat(xa," ").concat(t," ends"))};var Tg={begin:DF,end:M2};const qu=()=>{};function t_(t){return typeof(t.getAttribute?t.getAttribute(Ss):null)=="string"}function kF(t){const e=t.getAttribute?t.getAttribute(vg):null,n=t.getAttribute?t.getAttribute(yg):null;return e&&n}function IF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(de.replacementClass)}function NF(){return de.autoReplaceSvg===!0?Yu.replace:Yu[de.autoReplaceSvg]||Yu.replace}function OF(t){return Ke.createElementNS("http://www.w3.org/2000/svg",t)}function FF(t){return Ke.createElement(t)}function b2(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?OF:FF}=e;if(typeof t=="string")return Ke.createTextNode(t);const i=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){i.appendChild(b2(s,{ceFn:n}))}),i}function zF(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Yu={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(b2(n),e)}),e.getAttribute(Ss)===null&&de.keepOriginalSource){let n=Ke.createComment(zF(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~xg(e).indexOf(de.replacementClass))return Yu.replace(t);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((o,a)=>(a===de.replacementClass||a.match(i)?o.toSvg.push(a):o.toNode.push(a),o),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const r=n.map(s=>Al(s)).join(`
`);e.setAttribute(Ss,""),e.innerHTML=r}};function n_(t){t()}function T2(t,e){const n=typeof e=="function"?e:qu;if(t.length===0)n();else{let i=n_;de.mutateApproach===jO&&(i=Ar.requestAnimationFrame||n_),i(()=>{const r=NF(),s=Tg.begin("mutate");t.map(r),s(),n()})}}let Eg=!1;function E2(){Eg=!0}function Lp(){Eg=!1}let Ac=null;function i_(t){if(!jx||!de.observeMutations)return;const{treeCallback:e=qu,nodeCallback:n=qu,pseudoElementsCallback:i=qu,observeMutationsRoot:r=Ke}=t;Ac=new jx(s=>{if(Eg)return;const o=Lr();Yo(s).forEach(a=>{if(a.type==="childList"&&a.addedNodes.length>0&&!t_(a.addedNodes[0])&&(de.searchPseudoElements&&i(a.target),e(a.target)),a.type==="attributes"&&a.target.parentNode&&de.searchPseudoElements&&i(a.target.parentNode),a.type==="attributes"&&t_(a.target)&&~ZO.indexOf(a.attributeName))if(a.attributeName==="class"&&kF(a.target)){const{prefix:l,iconName:u}=yf(xg(a.target));a.target.setAttribute(vg,l||o),u&&a.target.setAttribute(yg,u)}else IF(a.target)&&n(a.target)})}),Gi&&Ac.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function UF(){Ac&&Ac.disconnect()}function VF(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((i,r)=>{const s=r.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(i[o]=a.join(":").trim()),i},{})),n}function BF(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"";let r=yf(xg(t));return r.prefix||(r.prefix=Lr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=vF(r.prefix,t.innerText)||wg(r.prefix,Mp(t.innerText))),!r.iconName&&de.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function HF(t){const e=Yo(t.attributes).reduce((r,s)=>(r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r),{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return de.autoA11y&&(n?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||sl()):(e["aria-hidden"]="true",e.focusable="false")),e}function WF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ai,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function r_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:i,rest:r}=BF(t),s=HF(t),o=Tp("parseNodeAttributes",{},t);let a=e.styleParser?VF(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:ai,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:s},...o}}const{styles:GF}=li;function C2(t){const e=de.autoReplaceSvg==="nest"?r_(t,{styleParser:!1}):r_(t);return~e.extra.classes.indexOf(u2)?Rr("generateLayersText",t,e):Rr("generateSvgReplacementMutation",t,e)}let hi=new Set;a2.map(t=>{hi.add("fa-".concat(t))});Object.keys(fs[Je]).map(hi.add.bind(hi));Object.keys(fs[pn]).map(hi.add.bind(hi));Object.keys(fs[mn]).map(hi.add.bind(hi));hi=[...hi];function s_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Gi)return Promise.resolve();const n=Ke.documentElement.classList,i=c=>n.add("".concat(qx,"-").concat(c)),r=c=>n.remove("".concat(qx,"-").concat(c)),s=de.autoFetchSvg?hi:a2.map(c=>"fa-".concat(c)).concat(Object.keys(GF));s.includes("fa")||s.push("fa");const o=[".".concat(u2,":not([").concat(Ss,"])")].concat(s.map(c=>".".concat(c,":not([").concat(Ss,"])"))).join(", ");if(o.length===0)return Promise.resolve();let a=[];try{a=Yo(t.querySelectorAll(o))}catch{}if(a.length>0)i("pending"),r("complete");else return Promise.resolve();const l=Tg.begin("onTree"),u=a.reduce((c,f)=>{try{const d=C2(f);d&&c.push(d)}catch(d){o2||d.name==="MissingIcon"&&console.error(d)}return c},[]);return new Promise((c,f)=>{Promise.all(u).then(d=>{T2(d,()=>{i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(d=>{l(),f(d)})})}function jF(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;C2(t).then(n=>{n&&T2([n],e)})}function $F(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:Ep(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:Ep(r||{})),t(i,{...n,mask:r})}}const XF=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ai,symbol:i=!1,mask:r=null,maskId:s=null,title:o=null,titleId:a=null,classes:l=[],attributes:u={},styles:c={}}=e;if(!t)return;const{prefix:f,iconName:d,icon:m}=t;return xf({type:"icon",...t},()=>(ws("beforeDOMElementCreation",{iconDefinition:t,params:e}),de.autoA11y&&(o?u["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(a||sl()):(u["aria-hidden"]="true",u.focusable="false")),bg({icons:{main:Cp(m),mask:r?Cp(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:f,iconName:d,transform:{...ai,...n},symbol:i,title:o,maskId:s,titleId:a,extra:{attributes:u,styles:c,classes:l}})))};var qF={mixout(){return{icon:$F(XF)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=s_,t.nodeCallback=jF,t}}},provides(t){t.i2svg=function(e){const{node:n=Ke,callback:i=()=>{}}=e;return s_(n,i)},t.generateSvgReplacementMutation=function(e,n){const{iconName:i,title:r,titleId:s,prefix:o,transform:a,symbol:l,mask:u,maskId:c,extra:f}=n;return new Promise((d,m)=>{Promise.all([Pp(i,o),u.iconName?Pp(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(y=>{let[p,h]=y;d([e,bg({icons:{main:p,mask:h},prefix:o,iconName:i,transform:a,symbol:l,maskId:c,title:r,titleId:s,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(e){let{children:n,attributes:i,main:r,transform:s,styles:o}=e;const a=gf(o);a.length>0&&(i.style=a);let l;return _g(s)&&(l=Rr("generateAbstractTransformGrouping",{main:r,transform:s,containerWidth:r.width,iconWidth:r.width})),n.push(l||r.icon),{children:n,attributes:i}}}},YF={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return xf({type:"layer"},()=>{ws("beforeDOMElementCreation",{assembler:t,params:e});let i=[];return t(r=>{Array.isArray(r)?r.map(s=>{i=i.concat(s.abstract)}):i=i.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...n].join(" ")},children:i}]})}}}},KF={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:i=[],attributes:r={},styles:s={}}=e;return xf({type:"counter",content:t},()=>(ws("beforeDOMElementCreation",{content:t,params:e}),AF({content:t.toString(),title:n,extra:{attributes:r,styles:s,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},ZF={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=ai,title:i=null,classes:r=[],attributes:s={},styles:o={}}=e;return xf({type:"text",content:t},()=>(ws("beforeDOMElementCreation",{content:t,params:e}),Jx({content:t,transform:{...ai,...n},title:i,extra:{attributes:s,styles:o,classes:["".concat(de.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:i,transform:r,extra:s}=n;let o=null,a=null;if(e2){const l=parseInt(getComputedStyle(e).fontSize,10),u=e.getBoundingClientRect();o=u.width/l,a=u.height/l}return de.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Jx({content:e.innerHTML,width:o,height:a,transform:r,title:i,extra:s,watchable:!0})])}}};const QF=new RegExp('"',"ug"),o_=[1105920,1112319],a_={FontAwesome:{normal:"fas",400:"fas"},...kO,...DO,...BO},Rp=Object.keys(a_).reduce((t,e)=>(t[e.toLowerCase()]=a_[e],t),{}),JF=Object.keys(Rp).reduce((t,e)=>{const n=Rp[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function ez(t){const e=t.replace(QF,""),n=fF(e,0),i=n>=o_[0]&&n<=o_[1],r=e.length===2?e[0]===e[1]:!1;return{value:Mp(r?e[0]:e),isSecondary:i||r}}function tz(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),r=isNaN(i)?"normal":i;return(Rp[n]||{})[r]||JF[n]}function l_(t,e){const n="".concat(GO).concat(e.replace(":","-"));return new Promise((i,r)=>{if(t.getAttribute(n)!==null)return i();const o=Yo(t.children).filter(d=>d.getAttribute(xp)===e)[0],a=Ar.getComputedStyle(t,e),l=a.getPropertyValue("font-family"),u=l.match(YO),c=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(o&&!u)return t.removeChild(o),i();if(u&&f!=="none"&&f!==""){const d=a.getPropertyValue("content");let m=tz(l,c);const{value:y,isSecondary:p}=ez(d),h=u[0].startsWith("FontAwesome");let g=wg(m,y),v=g;if(h){const x=yF(y);x.iconName&&x.prefix&&(g=x.iconName,m=x.prefix)}if(g&&!p&&(!o||o.getAttribute(vg)!==m||o.getAttribute(yg)!==v)){t.setAttribute(n,v),o&&t.removeChild(o);const x=WF(),{extra:_}=x;_.attributes[xp]=e,Pp(g,m).then(w=>{const b=bg({...x,icons:{main:w,mask:Mg()},prefix:m,iconName:v,extra:_,watchable:!0}),P=Ke.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(P,t.firstChild):t.appendChild(P),P.outerHTML=b.map(S=>Al(S)).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function nz(t){return Promise.all([l_(t,"::before"),l_(t,"::after")])}function iz(t){return t.parentNode!==document.head&&!~$O.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(xp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function u_(t){if(Gi)return new Promise((e,n)=>{const i=Yo(t.querySelectorAll("*")).filter(iz).map(nz),r=Tg.begin("searchPseudoElements");E2(),Promise.all(i).then(()=>{r(),Lp(),e()}).catch(()=>{r(),Lp(),n()})})}var rz={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=u_,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=Ke}=e;de.searchPseudoElements&&u_(n)}}};let c_=!1;var sz={mixout(){return{dom:{unwatch(){E2(),c_=!0}}}},hooks(){return{bootstrap(){i_(Tp("mutationObserverCallbacks",{}))},noAuto(){UF()},watch(t){const{observeMutationsRoot:e}=t;c_?Lp():i_(Tp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const f_=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,i)=>{const r=i.toLowerCase().split("-"),s=r[0];let o=r.slice(1).join("-");if(s&&o==="h")return n.flipX=!0,n;if(s&&o==="v")return n.flipY=!0,n;if(o=parseFloat(o),isNaN(o))return n;switch(s){case"grow":n.size=n.size+o;break;case"shrink":n.size=n.size-o;break;case"left":n.x=n.x-o;break;case"right":n.x=n.x+o;break;case"up":n.y=n.y-o;break;case"down":n.y=n.y+o;break;case"rotate":n.rotate=n.rotate+o;break}return n},e)};var oz={mixout(){return{parse:{transform:t=>f_(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=f_(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:i,containerWidth:r,iconWidth:s}=e;const o={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),c={transform:"".concat(a," ").concat(l," ").concat(u)},f={transform:"translate(".concat(s/2*-1," -256)")},d={outer:o,inner:c,path:f};return{tag:"g",attributes:{...d.outer},children:[{tag:"g",attributes:{...d.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...d.path}}]}]}}}};const Zd={x:0,y:0,width:"100%",height:"100%"};function d_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function az(t){return t.tag==="g"?t.children:[t]}var lz={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),i=n?yf(n.split(" ").map(r=>r.trim())):Mg();return i.prefix||(i.prefix=Lr()),t.mask=i,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:i,main:r,mask:s,maskId:o,transform:a}=e;const{width:l,icon:u}=r,{width:c,icon:f}=s,d=sF({transform:a,containerWidth:c,iconWidth:l}),m={tag:"rect",attributes:{...Zd,fill:"white"}},y=u.children?{children:u.children.map(d_)}:{},p={tag:"g",attributes:{...d.inner},children:[d_({tag:u.tag,attributes:{...u.attributes,...d.path},...y})]},h={tag:"g",attributes:{...d.outer},children:[p]},g="mask-".concat(o||sl()),v="clip-".concat(o||sl()),x={tag:"mask",attributes:{...Zd,id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[m,h]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:az(f)},x]};return n.push(_,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(g,")"),...Zd}}),{children:n,attributes:i}}}},uz={provides(t){let e=!1;Ar.matchMedia&&(e=Ar.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...i,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...r,attributeName:"opacity"},o={tag:"circle",attributes:{...i,cx:"256",cy:"364",r:"28"},children:[]};return e||o.children.push({tag:"animate",attributes:{...r,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(o),n.push({tag:"path",attributes:{...i,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...i,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},cz={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},fz=[lF,qF,YF,KF,ZF,rz,sz,oz,lz,uz,cz];wF(fz,{mixoutsTo:_n});_n.noAuto;_n.config;_n.library;_n.dom;const Dp=_n.parse;_n.findIconDefinition;_n.toHtml;const dz=_n.icon;_n.layer;_n.text;_n.counter;function h_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function ii(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(n),!0).forEach(function(i){fo(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h_(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Lc(t){"@babel/helpers - typeof";return Lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Lc(t)}function fo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hz(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function pz(t,e){if(t==null)return{};var n=hz(t,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function kp(t){return mz(t)||gz(t)||vz(t)||yz()}function mz(t){if(Array.isArray(t))return Ip(t)}function gz(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vz(t,e){if(t){if(typeof t=="string")return Ip(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ip(t,e)}}function Ip(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function yz(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xz(t){var e,n=t.beat,i=t.fade,r=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,p=t.listItem,h=t.flip,g=t.size,v=t.rotation,x=t.pull,_=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":p,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},fo(e,"fa-".concat(g),typeof g<"u"&&g!==null),fo(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),fo(e,"fa-pull-".concat(x),typeof x<"u"&&x!==null),fo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(w){return _[w]?w:null}).filter(function(w){return w})}function _z(t){return t=t-0,t===t}function P2(t){return _z(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Sz=["style"];function wz(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Mz(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=P2(n.slice(0,i)),s=n.slice(i+1).trim();return r.startsWith("webkit")?e[wz(r)]=s:e[r]=s,e},{})}function A2(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return A2(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Mz(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[P2(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=pz(n,Sz);return r.attrs.style=ii(ii({},r.attrs.style),o),t.apply(void 0,[e.tag,ii(ii({},r.attrs),a)].concat(kp(i)))}var L2=!1;try{L2=!0}catch{}function bz(){if(!L2&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function p_(t){if(t&&Lc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Dp.icon)return Dp.icon(t);if(t===null)return null;if(t&&Lc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Qd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?fo({},t,e):{}}var m_={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},lr=C_.forwardRef(function(t,e){var n=ii(ii({},m_),t),i=n.icon,r=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=n.maskId,c=p_(i),f=Qd("classes",[].concat(kp(xz(n)),kp((o||"").split(" ")))),d=Qd("transform",typeof n.transform=="string"?Dp.transform(n.transform):n.transform),m=Qd("mask",p_(r)),y=dz(c,ii(ii(ii(ii({},f),d),m),{},{symbol:s,title:a,titleId:l,maskId:u}));if(!y)return bz("Could not find icon",c),null;var p=y.abstract,h={ref:e};return Object.keys(n).forEach(function(g){m_.hasOwnProperty(g)||(h[g]=n[g])}),Tz(p[0],h)});lr.displayName="FontAwesomeIcon";lr.propTypes={beat:Ae.bool,border:Ae.bool,beatFade:Ae.bool,bounce:Ae.bool,className:Ae.string,fade:Ae.bool,flash:Ae.bool,mask:Ae.oneOfType([Ae.object,Ae.array,Ae.string]),maskId:Ae.string,fixedWidth:Ae.bool,inverse:Ae.bool,flip:Ae.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ae.oneOfType([Ae.object,Ae.array,Ae.string]),listItem:Ae.bool,pull:Ae.oneOf(["right","left"]),pulse:Ae.bool,rotation:Ae.oneOf([0,90,180,270]),shake:Ae.bool,size:Ae.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ae.bool,spinPulse:Ae.bool,spinReverse:Ae.bool,symbol:Ae.oneOfType([Ae.bool,Ae.string]),title:Ae.string,titleId:Ae.string,transform:Ae.oneOfType([Ae.string,Ae.object]),swapOpacity:Ae.bool};var Tz=A2.bind(null,C_.createElement);const Ez={prefix:"fab",iconName:"css3-alt",icon:[384,512,[],"f38b","M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"]},Cz={prefix:"fab",iconName:"git-alt",icon:[448,512,[],"f841","M439.55 236.05L244 40.45a28.87 28.87 0 0 0-40.81 0l-40.66 40.63 51.52 51.52c27.06-9.14 52.68 16.77 43.39 43.68l49.66 49.66c34.23-11.8 61.18 31 35.47 56.69-26.49 26.49-70.21-2.87-56-37.34L240.22 199v121.85c25.3 12.54 22.26 41.85 9.08 55a34.34 34.34 0 0 1-48.55 0c-17.57-17.6-11.07-46.91 11.25-56v-123c-20.8-8.51-24.6-30.74-18.64-45L142.57 101 8.45 235.14a28.86 28.86 0 0 0 0 40.81l195.61 195.6a28.86 28.86 0 0 0 40.8 0l194.69-194.69a28.86 28.86 0 0 0 0-40.81z"]},Pz={prefix:"fab",iconName:"react",icon:[512,512,[],"f41b","M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"]},Az={prefix:"fab",iconName:"html5",icon:[384,512,[],"f13b","M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"]},Lz={prefix:"fab",iconName:"js",icon:[448,512,[],"f3b8","M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"]},Rz={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Jd=[{icon:B.jsx(lr,{icon:Az,className:`h-10 sm:h-12 md:h-14
   `})},{icon:B.jsx(lr,{icon:Ez,className:"h-10 sm:h-12 md:h-14"})},{icon:B.jsx(lr,{icon:Lz,className:"h-10 sm:h-12 md:h-14"})},{icon:B.jsx(lr,{icon:Pz,className:"h-10 sm:h-12 md:h-14"})},{icon:B.jsx(lr,{icon:Rz,className:"h-10 sm:h-12 md:h-14"})},{icon:B.jsx(lr,{icon:Cz,className:`h-10 sm:h-12 md:h-14
  `})},{icon:B.jsx("img",{src:"./assets/tailwind.svg",alt:"Tailwind CSS",className:`h-10 sm:h-12 md:h-14
        `})}],Dz=()=>{const t=[...Jd,...Jd];return B.jsxs("div",{className:"relative h-[100%]  overflow-hidden py-5 bg-white mx-auto ",style:{width:"60%"},children:[B.jsx("h2",{className:"flex items-center justify-center uppercase font-bold mb-5 text-xl sm:text-2xl md:text-3xl",children:"My skills"}),B.jsx("div",{className:"absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-1 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3 "}),B.jsx(Re.div,{className:"flex gap-10 lg:h-auto lg:mt-28",animate:{x:["0%","-100%"],transition:{ease:"linear",duration:7,repeat:1/0}},children:t.map((e,n)=>B.jsx("div",{className:"flex-shrink-0",style:{width:`${100/Jd.length}%`},children:B.jsx("div",{className:"flex items-center justify-center h-full gap-10",children:e.icon})},n))})]})},kz="shubo_kobir",Iz="bd456b17c4842a4e18b5b0804a26754a",Nz=()=>{const[t,e]=ee.useState(null),[n,i]=ee.useState(!1),[r,s]=ee.useState("");ee.useEffect(()=>{(async()=>{var l,u,c;try{const f=await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${kz}&api_key=${Iz}&limit=1&nowplaying=true&format=json`);if(!f.ok)throw new Error("Network response was not ok");const d=await f.json();console.log(d);const m=(u=(l=d==null?void 0:d.recenttracks)==null?void 0:l.track)==null?void 0:u[0];i(((c=m==null?void 0:m["@attr"])==null?void 0:c.nowplaying)==="true"),e(m)}catch(f){console.error(f),s("Whoops! Something went wrong with Last.fm")}})()},[]);const o=()=>{var d;if(r)return B.jsx("p",{children:r});if(!t)return B.jsx("p",{children:"Loading..."});const{name:a,artist:l={},image:u=[]}=t,c=l["#text"]||"Unknown Artist",f=(d=u.find(m=>m.size==="large"))==null?void 0:d["#text"];return B.jsxs("div",{className:"border-2 border-gray-950 h-[95%] lg:h-96 rounded-xl p-4 flex justify-between items-center",children:[B.jsxs("div",{className:"flex justify-stretch flex-col h-full",children:[B.jsx("h3",{className:"text-sm sm:text font-semibold lg:text-2xl",children:"Currently listening to:"}),B.jsxs("h3",{className:"text-xl font-bold text-wrap my-5 lg:text-4xl lg:mt-32 text-pink-500",children:[a," by ",c," ",n&&"(Now Playing)"]})]}),f?B.jsx("img",{src:f,alt:`${a} album art`,className:"rounded-lg w-auto h-30 object-cover"}):B.jsx("p",{children:"No album art available"})]})};return B.jsx("div",{children:o()})};function Oz(){const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}},exit:{opacity:0,y:-50,transition:{duration:.6}}},e={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.9}},exit:{opacity:0,x:20,transition:{duration:.5}}};return B.jsx("section",{id:"about",className:"h-screen w-[100svw] flex justify-center flex-col lg:flex-row xl:flex-row p-10 gap-20",children:B.jsxs(ig,{children:[" ",B.jsxs(Re.main,{variants:t,initial:"hidden",animate:"visible",exit:"exit",className:"border-2 border-gray-950 h-auto rounded-xl bg-white shadow-2xl p-8 grid-flow-dense lg:overflow-hidden",children:[B.jsxs(Re.div,{variants:e,className:"p-2 text-center my-3 flex justify-center sm:items-center sm:justify-around lg:flex-row lg:gap-10",children:[B.jsx("h1",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-pretty font-bold hover:text-pink-600 hover:scale-110 transition-transform duration-75 ease-in-out",children:"About Me"}),B.jsx(EO,{})]}),B.jsx(Re.div,{variants:e,className:"border-2 border-gray-950 rounded-xl p-4 grid text-lg md:text-2xl lg:text-3xl lg:leading-10 text-center font-medium",children:TO.description}),B.jsxs("div",{className:"lg:flex gap-10 lg:h-full mt-4",children:[B.jsx(Re.div,{variants:e,className:"border-2 mt-4 border-gray-950 rounded-xl p-2 lg:w-6/12 lg:h-96  overflow-x-auto",children:B.jsx(Dz,{className:""})}),B.jsx(Re.div,{variants:e,className:"mt-5 lg:w-8/12 h-auto",children:B.jsx(Nz,{userName:"shubo_kobir",apiKey:"bd456b17c4842a4e18b5b0804a26754a"})})]})]})]})})}const Fz=[{key:1,title:"Fitness",description:"moew moew moew moew moew",src:"assets/fitness.png",link:"",tags:["React","Tailwind","express JS"]},{key:2,title:"Window Pane",description:"Creating an art piece applying my knowledge of CSS, using flexbox, different selectors, pseudo-elements and also integrating vanilla JS to create an interactive design changing the nightsky (aka dark mode). This project helped me understand pseudo-elements and how to create art in non-traditional ways.",src:"assets/window.png",link:"https://shubo16.github.io/Css-art-window-pane/",tags:["HTML","CSS","JS"]},{key:3,title:"Black Hole Loading Screen",description:"",src:"assets/blackHole.png",link:"https://shubo16.github.io/BLACK-HOLE-LOADER/",tags:["HTML","CSS","JS"]},{key:4,title:"Flag Quiz",description:"Flag quiz using postgres, correct answer gives you a point and an incorrect answer restarts the quiz.",src:"assets/flags.png ",link:" ",tags:["HTML","CSS","EJS","Postgres"]},{key:5,title:"Family travel tracker",description:"An application that allows multiple users (e.g a family) to highlight countries that they have been to by typing in their choice of country within the search bar, and seperately for each user. User is able to create its name and choose its color that is used for filling their choice of country. ",src:"assets/familyTracker.png",link:" ",tags:["HTML","CSS","EJS","Postgres","Express"]},{key:6,title:"Bento box Fitness dashboard",description:"Bento-box dashboard focusing on a ui for fitness-gurus, athletes, runners or anyone looking to physically push themselves, in a simple and efficient manner.",src:"assets/bento.png",link:" ",tags:["HTML","CSS","JS","Postgres"]},{key:7,title:"Sadia's Blog",description:"A blog page for a friend desgined to ensure she upload and create articles based on the political world and other relations that are deeply are important to us and those that share her views.",src:"assets/",link:" ",tags:["HTML"," Tailwind CSS","React JS","Postgres","Strapi CMS"]}];function zz(){const t={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6}},exit:{opacity:0,y:-50,transition:{duration:.6}}},e={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}};return B.jsx(ig,{children:B.jsx(Re.div,{className:"flex-col flex gap-10 md:items-center lg:items-center ",variants:e,initial:"hidden",animate:"visible",exit:"exit",children:Fz.map((n,i)=>{var r;return B.jsxs(Re.div,{className:"border-y-2 border-solid border-zinc-950 flex items-center drop-shadow-lg shadow-sm rounded-md md:w-[50%]",variants:t,whileInView:"visible",whileHover:{scale:1.03,transition:{spring:1}},initial:"hidden",viewport:{once:!1,amount:.3},exit:"exit",children:[B.jsx(Re.div,{className:"w-1/3",children:B.jsx("a",{href:n.link,target:"_blank",children:B.jsx("img",{src:n.src,alt:n.title,className:"w-full h-auto text-sm rounded-lg"})})}),B.jsxs(Re.div,{className:"p-6 flex flex-col justify-center gap-4 w-11/12",children:[B.jsx(Re.h3,{className:"text-xl font-bold sm:text-2xl",children:n.title}),B.jsx(Re.p,{className:"text-sm text-balance font-medium sm:text-base ",children:n.description}),B.jsx(Re.div,{className:"tags-container flex flex-row gap-10 items-center flex-wrap w-5/6",children:(r=n.tags)==null?void 0:r.map((s,o)=>B.jsx(Re.div,{className:"tag-box text-pink-500 p-1 border-2 border-black rounded uppercase text-xs sm:text-base",children:s},o))})]})]},i)})})})}function Uz(){return B.jsxs(Re.div,{id:"projects",className:"p-5 h-auto flex flex-col  items-center justify-center gap-10",initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[B.jsx("h2",{className:"text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase text-pretty font-bold hover:text-pink-600 hover:scale-110 transition-transform duration-75 ease-in-out",children:"My Projects"}),B.jsx(Re.div,{children:B.jsx(zz,{})})]})}const Vz=[{email:"shubo2002@gmail.com"},{phone:"07470688422"},{github:"shubo16",link:"https://github.com/Shubo16"}];function Bz(){const t=ee.useRef(null),{scrollYProgress:e}=rM({target:t,offset:["start 0.65","start 0.1"]}),n=OA(e,[0,1],[0,1]);let r=new Date().getFullYear();return B.jsxs(Re.div,{id:"footer",ref:t,className:"min-h-screen flex flex-col items-center justify-center mt-10",style:{opacity:n},children:[B.jsx("h2",{className:"uppercase text-5xl font-bold",children:"Contact me"}),B.jsx("div",{className:"my-24 flex flex-col items-center",children:Vz.map((s,o)=>{const a=Object.keys(s)[0],l=s[a];return B.jsx("div",{className:"text-4xl font-semibold uppercase border-b-2 border-gray-950 mb-6",children:B.jsx("span",{children:l})},o)})}),B.jsxs(Re.p,{className:"font-semibold left-10 ",children:[r,"©"]})]})}const Hz=ee.createContext(null);function Wz(){const[t,e]=ee.useState(window.innerWidth>700),[n,i]=ee.useState(()=>localStorage.getItem("theme")||"dark");ee.useEffect(()=>{const s=()=>{e(window.innerWidth>799)};return window.addEventListener("resize",s),()=>{window.removeEventListener("resize",s)}},[]);const r=()=>{i(s=>{const o=s==="light"?"dark":"light";return localStorage.setItem("theme",o),o})};return B.jsxs(Hz.Provider,{value:{theme:n,toggleTheme:r},children:[B.jsx(uL,{}),B.jsxs("div",{className:`App ${n}`,children:[t?B.jsx(hD,{}):B.jsx(pD,{}),B.jsx(bO,{}),B.jsx(Oz,{}),B.jsx(Uz,{}),B.jsx(Bz,{})]})]})}RS(document.getElementById("root")).render(B.jsx(ee.StrictMode,{children:B.jsx(Wz,{})}));
