(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function dx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $u={exports:{}},za={},qu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function fx(){if(fm)return gt;fm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(O,Z,Ce){this.props=O,this.context=Z,this.refs=b,this.updater=Ce||M}y.prototype.isReactComponent={},y.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(O,Z,Ce){this.props=O,this.context=Z,this.refs=b,this.updater=Ce||M}var N=C.prototype=new S;N.constructor=C,E(N,y.prototype),N.isPureReactComponent=!0;var L=Array.isArray,B=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function T(O,Z,Ce){var Ge,Ke={},le=null,ve=null;if(Z!=null)for(Ge in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(le=""+Z.key),Z)B.call(Z,Ge)&&!z.hasOwnProperty(Ge)&&(Ke[Ge]=Z[Ge]);var ge=arguments.length-2;if(ge===1)Ke.children=Ce;else if(1<ge){for(var ke=Array(ge),He=0;He<ge;He++)ke[He]=arguments[He+2];Ke.children=ke}if(O&&O.defaultProps)for(Ge in ge=O.defaultProps,ge)Ke[Ge]===void 0&&(Ke[Ge]=ge[Ge]);return{$$typeof:r,type:O,key:le,ref:ve,props:Ke,_owner:k.current}}function D(O,Z){return{$$typeof:r,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function Q(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function F(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ce){return Z[Ce]})}var Y=/\/+/g;function te(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):Z.toString(36)}function se(O,Z,Ce,Ge,Ke){var le=typeof O;(le==="undefined"||le==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(le){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0}}if(ve)return ve=O,Ke=Ke(ve),O=Ge===""?"."+te(ve,0):Ge,L(Ke)?(Ce="",O!=null&&(Ce=O.replace(Y,"$&/")+"/"),se(Ke,Z,Ce,"",function(He){return He})):Ke!=null&&(Q(Ke)&&(Ke=D(Ke,Ce+(!Ke.key||ve&&ve.key===Ke.key?"":(""+Ke.key).replace(Y,"$&/")+"/")+O)),Z.push(Ke)),1;if(ve=0,Ge=Ge===""?".":Ge+":",L(O))for(var ge=0;ge<O.length;ge++){le=O[ge];var ke=Ge+te(le,ge);ve+=se(le,Z,Ce,ke,Ke)}else if(ke=v(O),typeof ke=="function")for(O=ke.call(O),ge=0;!(le=O.next()).done;)le=le.value,ke=Ge+te(le,ge++),ve+=se(le,Z,Ce,ke,Ke);else if(le==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(O,Z,Ce){if(O==null)return O;var Ge=[],Ke=0;return se(O,Ge,"","",function(le){return Z.call(Ce,le,Ke++)}),Ge}function K(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ce)},function(Ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ce)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var j={current:null},$={transition:null},ue={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};function he(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:J,forEach:function(O,Z,Ce){J(O,function(){Z.apply(this,arguments)},Ce)},count:function(O){var Z=0;return J(O,function(){Z++}),Z},toArray:function(O){return J(O,function(Z){return Z})||[]},only:function(O){if(!Q(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=C,gt.StrictMode=s,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,gt.act=he,gt.cloneElement=function(O,Z,Ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=E({},O.props),Ke=O.key,le=O.ref,ve=O._owner;if(Z!=null){if(Z.ref!==void 0&&(le=Z.ref,ve=k.current),Z.key!==void 0&&(Ke=""+Z.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(ke in Z)B.call(Z,ke)&&!z.hasOwnProperty(ke)&&(Ge[ke]=Z[ke]===void 0&&ge!==void 0?ge[ke]:Z[ke])}var ke=arguments.length-2;if(ke===1)Ge.children=Ce;else if(1<ke){ge=Array(ke);for(var He=0;He<ke;He++)ge[He]=arguments[He+2];Ge.children=ge}return{$$typeof:r,type:O.type,key:Ke,ref:le,props:Ge,_owner:ve}},gt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},gt.createElement=T,gt.createFactory=function(O){var Z=T.bind(null,O);return Z.type=O,Z},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:d,render:O}},gt.isValidElement=Q,gt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:K}},gt.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},gt.startTransition=function(O){var Z=$.transition;$.transition={};try{O()}finally{$.transition=Z}},gt.unstable_act=he,gt.useCallback=function(O,Z){return j.current.useCallback(O,Z)},gt.useContext=function(O){return j.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return j.current.useDeferredValue(O)},gt.useEffect=function(O,Z){return j.current.useEffect(O,Z)},gt.useId=function(){return j.current.useId()},gt.useImperativeHandle=function(O,Z,Ce){return j.current.useImperativeHandle(O,Z,Ce)},gt.useInsertionEffect=function(O,Z){return j.current.useInsertionEffect(O,Z)},gt.useLayoutEffect=function(O,Z){return j.current.useLayoutEffect(O,Z)},gt.useMemo=function(O,Z){return j.current.useMemo(O,Z)},gt.useReducer=function(O,Z,Ce){return j.current.useReducer(O,Z,Ce)},gt.useRef=function(O){return j.current.useRef(O)},gt.useState=function(O){return j.current.useState(O)},gt.useSyncExternalStore=function(O,Z,Ce){return j.current.useSyncExternalStore(O,Z,Ce)},gt.useTransition=function(){return j.current.useTransition()},gt.version="18.3.1",gt}var hm;function Lf(){return hm||(hm=1,qu.exports=fx()),qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function hx(){if(pm)return za;pm=1;var r=Lf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var x,_={},v=null,M=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)s.call(h,x)&&!l.hasOwnProperty(x)&&(_[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)_[x]===void 0&&(_[x]=h[x]);return{$$typeof:e,type:d,key:v,ref:M,props:_,_owner:o.current}}return za.Fragment=t,za.jsx=u,za.jsxs=u,za}var mm;function px(){return mm||(mm=1,$u.exports=hx()),$u.exports}var R=px(),ie=Lf();const mx=dx(ie);var _l={},Yu={exports:{}},Nn={},Ku={exports:{}},Zu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function gx(){return gm||(gm=1,function(r){function e($,ue){var he=$.length;$.push(ue);e:for(;0<he;){var O=he-1>>>1,Z=$[O];if(0<o(Z,ue))$[O]=ue,$[he]=Z,he=O;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ue=$[0],he=$.pop();if(he!==ue){$[0]=he;e:for(var O=0,Z=$.length,Ce=Z>>>1;O<Ce;){var Ge=2*(O+1)-1,Ke=$[Ge],le=Ge+1,ve=$[le];if(0>o(Ke,he))le<Z&&0>o(ve,Ke)?($[O]=ve,$[le]=he,O=le):($[O]=Ke,$[Ge]=he,O=Ge);else if(le<Z&&0>o(ve,he))$[O]=ve,$[le]=he,O=le;else break e}}return ue}function o($,ue){var he=$.sortIndex-ue.sortIndex;return he!==0?he:$.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],p=[],x=1,_=null,v=3,M=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N($){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=$)s(p),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(p)}}function L($){if(b=!1,N($),!E)if(t(h)!==null)E=!0,K(B);else{var ue=t(p);ue!==null&&j(L,ue.startTime-$)}}function B($,ue){E=!1,b&&(b=!1,S(T),T=-1),M=!0;var he=v;try{for(N(ue),_=t(h);_!==null&&(!(_.expirationTime>ue)||$&&!F());){var O=_.callback;if(typeof O=="function"){_.callback=null,v=_.priorityLevel;var Z=O(_.expirationTime<=ue);ue=r.unstable_now(),typeof Z=="function"?_.callback=Z:_===t(h)&&s(h),N(ue)}else s(h);_=t(h)}if(_!==null)var Ce=!0;else{var Ge=t(p);Ge!==null&&j(L,Ge.startTime-ue),Ce=!1}return Ce}finally{_=null,v=he,M=!1}}var k=!1,z=null,T=-1,D=5,Q=-1;function F(){return!(r.unstable_now()-Q<D)}function Y(){if(z!==null){var $=r.unstable_now();Q=$;var ue=!0;try{ue=z(!0,$)}finally{ue?te():(k=!1,z=null)}}else k=!1}var te;if(typeof C=="function")te=function(){C(Y)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,J=se.port2;se.port1.onmessage=Y,te=function(){J.postMessage(null)}}else te=function(){y(Y,0)};function K($){z=$,k||(k=!0,te())}function j($,ue){T=y(function(){$(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,K(B))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function($){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var he=v;v=ue;try{return $()}finally{v=he}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,ue){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var he=v;v=$;try{return ue()}finally{v=he}},r.unstable_scheduleCallback=function($,ue,he){var O=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?O+he:O):he=O,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=he+Z,$={id:x++,callback:ue,priorityLevel:$,startTime:he,expirationTime:Z,sortIndex:-1},he>O?($.sortIndex=he,e(p,$),t(h)===null&&$===t(p)&&(b?(S(T),T=-1):b=!0,j(L,he-O))):($.sortIndex=Z,e(h,$),E||M||(E=!0,K(B))),$},r.unstable_shouldYield=F,r.unstable_wrapCallback=function($){var ue=v;return function(){var he=v;v=ue;try{return $.apply(this,arguments)}finally{v=he}}}}(Zu)),Zu}var vm;function vx(){return vm||(vm=1,Ku.exports=gx()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function xx(){if(xm)return Nn;xm=1;var r=Lf(),e=vx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function v(n){return h.call(_,n)?!0:h.call(x,n)?!1:p.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var L=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),F=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),$=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var he=Object.assign,O;function Z(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ce=!1;function Ge(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){c=de}n.call(i.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var f=de.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,U=m.length-1;1<=w&&0<=U&&f[w]!==m[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==m[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==m[U]){var H=`
`+f[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Z(n):""}function Ke(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case k:return"Portal";case D:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case Q:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=He(n))}function Gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var a=i.checked;return he({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function bt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function Ut(n,i){ct(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ft(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ft(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function V(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ft(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vt=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Be(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return he({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function P(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function g(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function I(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function q(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?q(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Pe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){et.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function be(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var $e=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,Ee=null,Ie=null;function Me(n){if(n=Ta(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Io(i),Ae(n.stateNode,n.type,i))}}function me(n){Ee?Ie?Ie.push(n):Ie=[n]:Ee=n}function je(){if(Ee){var n=Ee,i=Ie;if(Ie=Ee=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function st(n,i){return n(i)}function Nt(){}var Et=!1;function jn(n,i,a){if(Et)return n(i,a);Et=!0;try{return st(n,i,a)}finally{Et=!1,(Ee!==null||Ie!==null)&&(Nt(),je())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var c=Io(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var fs=!1;if(d)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){fs=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{fs=!1}function mc(n,i,a,c,f,m,w,U,H){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(_e){this.onError(_e)}}var ar=!1,Or=null,Xn=!1,kr=null,fo={onError:function(n){ar=!0,Or=n}};function ho(n,i,a,c,f,m,w,U,H){ar=!1,Or=null,mc.apply(fo,arguments)}function hs(n,i,a,c,f,m,w,U,H){if(ho.apply(this,arguments),ar){if(ar){var de=Or;ar=!1,Or=null}else throw Error(t(198));Xn||(Xn=!0,kr=de)}}function wi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oa(n){if(wi(n)!==n)throw Error(t(188))}function po(n){var i=n.alternate;if(!i){if(i=wi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return oa(f),n;if(m===c)return oa(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,c=m;break}if(U===c){w=!0,c=f,a=m;break}U=U.sibling}if(!w){for(U=m.child;U;){if(U===a){w=!0,a=m,c=f;break}if(U===c){w=!0,c=m,a=f;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function mo(n){return n=po(n),n!==null?go(n):null}function go(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=go(n);if(i!==null)return i;n=n.sibling}return null}var vo=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,gc=e.unstable_shouldYield,vc=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,ae=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Le=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,Re=null,Ue=null;function Qe(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Lt,ft=Math.log,Je=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(ft(n)/Je|0)|0}var kt=64,Ot=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?c=Mt(U):(m&=w,m!==0&&(c=Mt(m)))}else w=a&~f,w!==0?c=Mt(w):m!==0&&(c=Mt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-tt(i),f=1<<a,c|=n[a],i&=~f;return c}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-tt(m),U=1<<w,H=f[w];H===-1?((U&a)===0||(U&c)!==0)&&(f[w]=Ye(U,i)):H<=i&&(n.expiredLanes|=U),m&=~U}}function _t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bn(){var n=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),n}function An(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tt(i),n[i]=a}function or(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-tt(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Rt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-tt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var at=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yt,$n,ki,la,qf,xc=!1,_o=[],lr=null,cr=null,ur=null,ca=new Map,ua=new Map,dr=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ca.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(i.pointerId)}}function da(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&$n(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function I0(n,i,a,c,f){switch(i){case"focusin":return lr=da(lr,n,i,a,c,f),!0;case"dragenter":return cr=da(cr,n,i,a,c,f),!0;case"mouseover":return ur=da(ur,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return ca.set(m,da(ca.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,ua.set(m,da(ua.get(m)||null,n,i,a,c,f)),!0}return!1}function Kf(n){var i=zr(n.target);if(i!==null){var a=wi(i);if(a!==null){if(i=a.tag,i===13){if(i=Br(a),i!==null){n.blockedOn=i,qf(n.priority,function(){ki(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=yc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ut=c,a.target.dispatchEvent(c),ut=null}else return i=Ta(a),i!==null&&$n(i),n.blockedOn=a,!1;i.shift()}return!0}function Zf(n,i,a){yo(n)&&a.delete(i)}function U0(){xc=!1,lr!==null&&yo(lr)&&(lr=null),cr!==null&&yo(cr)&&(cr=null),ur!==null&&yo(ur)&&(ur=null),ca.forEach(Zf),ua.forEach(Zf)}function fa(n,i){n.blockedOn===i&&(n.blockedOn=null,xc||(xc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,U0)))}function ha(n){function i(f){return fa(f,n)}if(0<_o.length){fa(_o[0],n);for(var a=1;a<_o.length;a++){var c=_o[a];c.blockedOn===n&&(c.blockedOn=null)}}for(lr!==null&&fa(lr,n),cr!==null&&fa(cr,n),ur!==null&&fa(ur,n),ca.forEach(i),ua.forEach(i),a=0;a<dr.length;a++)c=dr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<dr.length&&(a=dr[0],a.blockedOn===null);)Kf(a),a.blockedOn===null&&dr.shift()}var ps=L.ReactCurrentBatchConfig,So=!0;function F0(n,i,a,c){var f=at,m=ps.transition;ps.transition=null;try{at=1,_c(n,i,a,c)}finally{at=f,ps.transition=m}}function O0(n,i,a,c){var f=at,m=ps.transition;ps.transition=null;try{at=4,_c(n,i,a,c)}finally{at=f,ps.transition=m}}function _c(n,i,a,c){if(So){var f=yc(n,i,a,c);if(f===null)Oc(n,i,c,Mo,a),Yf(n,c);else if(I0(f,n,i,a,c))c.stopPropagation();else if(Yf(n,c),i&4&&-1<N0.indexOf(n)){for(;f!==null;){var m=Ta(f);if(m!==null&&Yt(m),m=yc(n,i,a,c),m===null&&Oc(n,i,c,Mo,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Oc(n,i,c,null,a)}}var Mo=null;function yc(n,i,a,c){if(Mo=null,n=G(c),n=zr(n),n!==null)if(i=wi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Br(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mo=n,null}function Qf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case fe:return 1;case ae:return 4;case ne:case Le:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var fr=null,Sc=null,Eo=null;function Jf(){if(Eo)return Eo;var n,i=Sc,a=i.length,c,f="value"in fr?fr.value:fr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===f[m-c];c++);return Eo=f.slice(n,1<c?1-c:void 0)}function wo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function To(){return!0}function eh(){return!1}function kn(n){function i(a,c,f,m,w){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?To:eh,this.isPropagationStopped=eh,this}return he(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=To)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=To)},persist:function(){},isPersistent:To}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mc=kn(ms),pa=he({},ms,{view:0,detail:0}),k0=kn(pa),Ec,wc,ma,bo=he({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(Ec=n.screenX-ma.screenX,wc=n.screenY-ma.screenY):wc=Ec=0,ma=n),Ec)},movementY:function(n){return"movementY"in n?n.movementY:wc}}),th=kn(bo),B0=he({},bo,{dataTransfer:0}),z0=kn(B0),V0=he({},pa,{relatedTarget:0}),Tc=kn(V0),H0=he({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),G0=kn(H0),W0=he({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),j0=kn(W0),X0=he({},ms,{data:0}),nh=kn(X0),$0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},q0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Y0[n])?!!i[n]:!1}function bc(){return K0}var Z0=he({},pa,{key:function(n){if(n.key){var i=$0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=wo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?q0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?wo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?wo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Q0=kn(Z0),J0=he({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=kn(J0),ev=he({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),tv=kn(ev),nv=he({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),iv=kn(nv),rv=he({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),sv=kn(rv),av=[9,13,27,32],Ac=d&&"CompositionEvent"in window,ga=null;d&&"documentMode"in document&&(ga=document.documentMode);var ov=d&&"TextEvent"in window&&!ga,rh=d&&(!Ac||ga&&8<ga&&11>=ga),sh=" ",ah=!1;function oh(n,i){switch(n){case"keyup":return av.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function lv(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(ah=!0,sh);case"textInput":return n=i.data,n===sh&&ah?null:n;default:return null}}function cv(n,i){if(gs)return n==="compositionend"||!Ac&&oh(n,i)?(n=Jf(),Eo=Sc=fr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var uv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!uv[n.type]:i==="textarea"}function uh(n,i,a,c){me(c),i=Lo(i,"onChange"),0<i.length&&(a=new Mc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,xa=null;function dv(n){Ch(n,0)}function Ao(n){var i=Ss(n);if(Gt(i))return n}function fv(n,i){if(n==="change")return i}var dh=!1;if(d){var Cc;if(d){var Rc="oninput"in document;if(!Rc){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Rc=typeof fh.oninput=="function"}Cc=Rc}else Cc=!1;dh=Cc&&(!document.documentMode||9<document.documentMode)}function hh(){va&&(va.detachEvent("onpropertychange",ph),xa=va=null)}function ph(n){if(n.propertyName==="value"&&Ao(xa)){var i=[];uh(i,xa,n,G(n)),jn(dv,i)}}function hv(n,i,a){n==="focusin"?(hh(),va=i,xa=a,va.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function pv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(xa)}function mv(n,i){if(n==="click")return Ao(i)}function gv(n,i){if(n==="input"||n==="change")return Ao(i)}function vv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:vv;function _a(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!oi(n[f],i[f]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var a=mh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mh(a)}}function vh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function xh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function Pc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function xv(n){var i=xh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&vh(a.ownerDocument.documentElement,a)){if(c!==null&&Pc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=gh(a,m);var w=gh(a,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var _v=d&&"documentMode"in document&&11>=document.documentMode,vs=null,Lc=null,ya=null,Dc=!1;function _h(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Dc||vs==null||vs!==pt(c)||(c=vs,"selectionStart"in c&&Pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&_a(ya,c)||(ya=c,c=Lo(Lc,"onSelect"),0<c.length&&(i=new Mc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function Co(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var xs={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},Nc={},yh={};d&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Ro(n){if(Nc[n])return Nc[n];if(!xs[n])return n;var i=xs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in yh)return Nc[n]=i[a];return n}var Sh=Ro("animationend"),Mh=Ro("animationiteration"),Eh=Ro("animationstart"),wh=Ro("transitionend"),Th=new Map,bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Th.set(n,i),l(i,[n])}for(var Ic=0;Ic<bh.length;Ic++){var Uc=bh[Ic],yv=Uc.toLowerCase(),Sv=Uc[0].toUpperCase()+Uc.slice(1);hr(yv,"on"+Sv)}hr(Sh,"onAnimationEnd"),hr(Mh,"onAnimationIteration"),hr(Eh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Ah(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,hs(c,i,void 0,n),n.currentTarget=null}function Ch(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],H=U.instance,de=U.currentTarget;if(U=U.listener,H!==m&&f.isPropagationStopped())break e;Ah(f,U,de),m=H}else for(w=0;w<c.length;w++){if(U=c[w],H=U.instance,de=U.currentTarget,U=U.listener,H!==m&&f.isPropagationStopped())break e;Ah(f,U,de),m=H}}}if(Xn)throw n=kr,Xn=!1,kr=null,n}function zt(n,i){var a=i[Gc];a===void 0&&(a=i[Gc]=new Set);var c=n+"__bubble";a.has(c)||(Rh(i,n,2,!1),a.add(c))}function Fc(n,i,a){var c=0;i&&(c|=4),Rh(a,n,c,i)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Ma(n){if(!n[Po]){n[Po]=!0,s.forEach(function(a){a!=="selectionchange"&&(Mv.has(a)||Fc(a,!1,n),Fc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Po]||(i[Po]=!0,Fc("selectionchange",!1,i))}}function Rh(n,i,a,c){switch(Qf(i)){case 1:var f=F0;break;case 4:f=O0;break;default:f=_c}a=f.bind(null,i,a,n),f=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Oc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;w=w.return}for(;U!==null;){if(w=zr(U),w===null)return;if(H=w.tag,H===5||H===6){c=m=w;continue e}U=U.parentNode}}c=c.return}jn(function(){var de=m,_e=G(a),ye=[];e:{var xe=Th.get(n);if(xe!==void 0){var Fe=Mc,Xe=n;switch(n){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":Fe=Q0;break;case"focusin":Xe="focus",Fe=Tc;break;case"focusout":Xe="blur",Fe=Tc;break;case"beforeblur":case"afterblur":Fe=Tc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=z0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=tv;break;case Sh:case Mh:case Eh:Fe=G0;break;case wh:Fe=iv;break;case"scroll":Fe=k0;break;case"wheel":Fe=sv;break;case"copy":case"cut":case"paste":Fe=j0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=ih}var qe=(i&4)!==0,Kt=!qe&&n==="scroll",ee=qe?xe!==null?xe+"Capture":null:xe;qe=[];for(var W=de,re;W!==null;){re=W;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,ee!==null&&(Te=yn(W,ee),Te!=null&&qe.push(Ea(W,Te,re)))),Kt)break;W=W.return}0<qe.length&&(xe=new Fe(xe,Xe,null,a,_e),ye.push({event:xe,listeners:qe}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",xe&&a!==ut&&(Xe=a.relatedTarget||a.fromElement)&&(zr(Xe)||Xe[Bi]))break e;if((Fe||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,Fe?(Xe=a.relatedTarget||a.toElement,Fe=de,Xe=Xe?zr(Xe):null,Xe!==null&&(Kt=wi(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=de),Fe!==Xe)){if(qe=th,Te="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=ih,Te="onPointerLeave",ee="onPointerEnter",W="pointer"),Kt=Fe==null?xe:Ss(Fe),re=Xe==null?xe:Ss(Xe),xe=new qe(Te,W+"leave",Fe,a,_e),xe.target=Kt,xe.relatedTarget=re,Te=null,zr(_e)===de&&(qe=new qe(ee,W+"enter",Xe,a,_e),qe.target=re,qe.relatedTarget=Kt,Te=qe),Kt=Te,Fe&&Xe)t:{for(qe=Fe,ee=Xe,W=0,re=qe;re;re=_s(re))W++;for(re=0,Te=ee;Te;Te=_s(Te))re++;for(;0<W-re;)qe=_s(qe),W--;for(;0<re-W;)ee=_s(ee),re--;for(;W--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=_s(qe),ee=_s(ee)}qe=null}else qe=null;Fe!==null&&Ph(ye,xe,Fe,qe,!1),Xe!==null&&Kt!==null&&Ph(ye,Kt,Xe,qe,!0)}}e:{if(xe=de?Ss(de):window,Fe=xe.nodeName&&xe.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&xe.type==="file")var Ze=fv;else if(ch(xe))if(dh)Ze=gv;else{Ze=pv;var it=hv}else(Fe=xe.nodeName)&&Fe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ze=mv);if(Ze&&(Ze=Ze(n,de))){uh(ye,Ze,a,_e);break e}it&&it(n,xe,de),n==="focusout"&&(it=xe._wrapperState)&&it.controlled&&xe.type==="number"&&Ft(xe,"number",xe.value)}switch(it=de?Ss(de):window,n){case"focusin":(ch(it)||it.contentEditable==="true")&&(vs=it,Lc=de,ya=null);break;case"focusout":ya=Lc=vs=null;break;case"mousedown":Dc=!0;break;case"contextmenu":case"mouseup":case"dragend":Dc=!1,_h(ye,a,_e);break;case"selectionchange":if(_v)break;case"keydown":case"keyup":_h(ye,a,_e)}var rt;if(Ac)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else gs?oh(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(rh&&a.locale!=="ko"&&(gs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&gs&&(rt=Jf()):(fr=_e,Sc="value"in fr?fr.value:fr.textContent,gs=!0)),it=Lo(de,ot),0<it.length&&(ot=new nh(ot,n,null,a,_e),ye.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=lh(a),rt!==null&&(ot.data=rt)))),(rt=ov?lv(n,a):cv(n,a))&&(de=Lo(de,"onBeforeInput"),0<de.length&&(_e=new nh("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:de}),_e.data=rt))}Ch(ye,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Lo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=yn(n,a),m!=null&&c.unshift(Ea(n,m,f)),m=yn(n,i),m!=null&&c.push(Ea(n,m,f))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ph(n,i,a,c,f){for(var m=i._reactName,w=[];a!==null&&a!==c;){var U=a,H=U.alternate,de=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&de!==null&&(U=de,f?(H=yn(a,m),H!=null&&w.unshift(Ea(a,H,U))):f||(H=yn(a,m),H!=null&&w.push(Ea(a,H,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Ev=/\r\n?/g,wv=/\u0000|\uFFFD/g;function Lh(n){return(typeof n=="string"?n:""+n).replace(Ev,`
`).replace(wv,"")}function Do(n,i,a){if(i=Lh(i),Lh(n)!==i&&a)throw Error(t(425))}function No(){}var kc=null,Bc=null;function zc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vc=typeof setTimeout=="function"?setTimeout:void 0,Tv=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,bv=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(Av)}:Vc;function Av(n){setTimeout(function(){throw n})}function Hc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),ha(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);ha(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ti="__reactFiber$"+ys,wa="__reactProps$"+ys,Bi="__reactContainer$"+ys,Gc="__reactEvents$"+ys,Cv="__reactListeners$"+ys,Rv="__reactHandles$"+ys;function zr(n){var i=n[Ti];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Ti])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Ta(n){return n=n[Ti]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Io(n){return n[wa]||null}var Wc=[],Ms=-1;function mr(n){return{current:n}}function Vt(n){0>Ms||(n.current=Wc[Ms],Wc[Ms]=null,Ms--)}function Bt(n,i){Ms++,Wc[Ms]=n.current,n.current=i}var gr={},pn=mr(gr),Cn=mr(!1),Vr=gr;function Es(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(n){return n=n.childContextTypes,n!=null}function Uo(){Vt(Cn),Vt(pn)}function Ih(n,i,a){if(pn.current!==gr)throw Error(t(168));Bt(pn,i),Bt(Cn,a)}function Uh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return he({},a,c)}function Fo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=pn.current,Bt(pn,n),Bt(Cn,Cn.current),!0}function Fh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Uh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,Vt(Cn),Vt(pn),Bt(pn,n)):Vt(Cn),Bt(Cn,a)}var zi=null,Oo=!1,jc=!1;function Oh(n){zi===null?zi=[n]:zi.push(n)}function Pv(n){Oo=!0,Oh(n)}function vr(){if(!jc&&zi!==null){jc=!0;var n=0,i=at;try{var a=zi;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}zi=null,Oo=!1}catch(f){throw zi!==null&&(zi=zi.slice(n+1)),vo(fe,vr),f}finally{at=i,jc=!1}}return null}var ws=[],Ts=0,ko=null,Bo=0,qn=[],Yn=0,Hr=null,Vi=1,Hi="";function Gr(n,i){ws[Ts++]=Bo,ws[Ts++]=ko,ko=n,Bo=i}function kh(n,i,a){qn[Yn++]=Vi,qn[Yn++]=Hi,qn[Yn++]=Hr,Hr=n;var c=Vi;n=Hi;var f=32-tt(c)-1;c&=~(1<<f),a+=1;var m=32-tt(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Vi=1<<32-tt(i)+f|a<<f|c,Hi=m+n}else Vi=1<<m|a<<f|c,Hi=n}function Xc(n){n.return!==null&&(Gr(n,1),kh(n,1,0))}function $c(n){for(;n===ko;)ko=ws[--Ts],ws[Ts]=null,Bo=ws[--Ts],ws[Ts]=null;for(;n===Hr;)Hr=qn[--Yn],qn[Yn]=null,Hi=qn[--Yn],qn[Yn]=null,Vi=qn[--Yn],qn[Yn]=null}var Bn=null,zn=null,Ht=!1,li=null;function Bh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yc(n){if(Ht){var i=zn;if(i){var a=i;if(!zh(n,i)){if(qc(n))throw Error(t(418));i=pr(a.nextSibling);var c=Bn;i&&zh(n,i)?Bh(c,a):(n.flags=n.flags&-4097|2,Ht=!1,Bn=n)}}else{if(qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Bn=n}}}function Vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function zo(n){if(n!==Bn)return!1;if(!Ht)return Vh(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!zc(n.type,n.memoizedProps)),i&&(i=zn)){if(qc(n))throw Hh(),Error(t(418));for(;i;)Bh(n,i),i=pr(i.nextSibling)}if(Vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?pr(n.stateNode.nextSibling):null;return!0}function Hh(){for(var n=zn;n;)n=pr(n.nextSibling)}function bs(){zn=Bn=null,Ht=!1}function Kc(n){li===null?li=[n]:li.push(n)}var Lv=L.ReactCurrentBatchConfig;function ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var U=f.refs;w===null?delete U[m]:U[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function Wh(n){function i(ee,W){if(n){var re=ee.deletions;re===null?(ee.deletions=[W],ee.flags|=16):re.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function f(ee,W){return ee=Tr(ee,W),ee.index=0,ee.sibling=null,ee}function m(ee,W,re){return ee.index=re,n?(re=ee.alternate,re!==null?(re=re.index,re<W?(ee.flags|=2,W):re):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,W,re,Te){return W===null||W.tag!==6?(W=Vu(re,ee.mode,Te),W.return=ee,W):(W=f(W,re),W.return=ee,W)}function H(ee,W,re,Te){var Ze=re.type;return Ze===z?_e(ee,W,re.props.children,Te,re.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Gh(Ze)===W.type)?(Te=f(W,re.props),Te.ref=ba(ee,W,re),Te.return=ee,Te):(Te=dl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=ba(ee,W,re),Te.return=ee,Te)}function de(ee,W,re,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==re.containerInfo||W.stateNode.implementation!==re.implementation?(W=Hu(re,ee.mode,Te),W.return=ee,W):(W=f(W,re.children||[]),W.return=ee,W)}function _e(ee,W,re,Te,Ze){return W===null||W.tag!==7?(W=Zr(re,ee.mode,Te,Ze),W.return=ee,W):(W=f(W,re),W.return=ee,W)}function ye(ee,W,re){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Vu(""+W,ee.mode,re),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return re=dl(W.type,W.key,W.props,null,ee.mode,re),re.ref=ba(ee,null,W),re.return=ee,re;case k:return W=Hu(W,ee.mode,re),W.return=ee,W;case K:var Te=W._init;return ye(ee,Te(W._payload),re)}if(vt(W)||ue(W))return W=Zr(W,ee.mode,re,null),W.return=ee,W;Vo(ee,W)}return null}function xe(ee,W,re,Te){var Ze=W!==null?W.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:U(ee,W,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case B:return re.key===Ze?H(ee,W,re,Te):null;case k:return re.key===Ze?de(ee,W,re,Te):null;case K:return Ze=re._init,xe(ee,W,Ze(re._payload),Te)}if(vt(re)||ue(re))return Ze!==null?null:_e(ee,W,re,Te,null);Vo(ee,re)}return null}function Fe(ee,W,re,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(re)||null,U(W,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case B:return ee=ee.get(Te.key===null?re:Te.key)||null,H(W,ee,Te,Ze);case k:return ee=ee.get(Te.key===null?re:Te.key)||null,de(W,ee,Te,Ze);case K:var it=Te._init;return Fe(ee,W,re,it(Te._payload),Ze)}if(vt(Te)||ue(Te))return ee=ee.get(re)||null,_e(W,ee,Te,Ze,null);Vo(W,Te)}return null}function Xe(ee,W,re,Te){for(var Ze=null,it=null,rt=W,ot=W=0,cn=null;rt!==null&&ot<re.length;ot++){rt.index>ot?(cn=rt,rt=null):cn=rt.sibling;var At=xe(ee,rt,re[ot],Te);if(At===null){rt===null&&(rt=cn);break}n&&rt&&At.alternate===null&&i(ee,rt),W=m(At,W,ot),it===null?Ze=At:it.sibling=At,it=At,rt=cn}if(ot===re.length)return a(ee,rt),Ht&&Gr(ee,ot),Ze;if(rt===null){for(;ot<re.length;ot++)rt=ye(ee,re[ot],Te),rt!==null&&(W=m(rt,W,ot),it===null?Ze=rt:it.sibling=rt,it=rt);return Ht&&Gr(ee,ot),Ze}for(rt=c(ee,rt);ot<re.length;ot++)cn=Fe(rt,ee,ot,re[ot],Te),cn!==null&&(n&&cn.alternate!==null&&rt.delete(cn.key===null?ot:cn.key),W=m(cn,W,ot),it===null?Ze=cn:it.sibling=cn,it=cn);return n&&rt.forEach(function(br){return i(ee,br)}),Ht&&Gr(ee,ot),Ze}function qe(ee,W,re,Te){var Ze=ue(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var it=Ze=null,rt=W,ot=W=0,cn=null,At=re.next();rt!==null&&!At.done;ot++,At=re.next()){rt.index>ot?(cn=rt,rt=null):cn=rt.sibling;var br=xe(ee,rt,At.value,Te);if(br===null){rt===null&&(rt=cn);break}n&&rt&&br.alternate===null&&i(ee,rt),W=m(br,W,ot),it===null?Ze=br:it.sibling=br,it=br,rt=cn}if(At.done)return a(ee,rt),Ht&&Gr(ee,ot),Ze;if(rt===null){for(;!At.done;ot++,At=re.next())At=ye(ee,At.value,Te),At!==null&&(W=m(At,W,ot),it===null?Ze=At:it.sibling=At,it=At);return Ht&&Gr(ee,ot),Ze}for(rt=c(ee,rt);!At.done;ot++,At=re.next())At=Fe(rt,ee,ot,At.value,Te),At!==null&&(n&&At.alternate!==null&&rt.delete(At.key===null?ot:At.key),W=m(At,W,ot),it===null?Ze=At:it.sibling=At,it=At);return n&&rt.forEach(function(ux){return i(ee,ux)}),Ht&&Gr(ee,ot),Ze}function Kt(ee,W,re,Te){if(typeof re=="object"&&re!==null&&re.type===z&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case B:e:{for(var Ze=re.key,it=W;it!==null;){if(it.key===Ze){if(Ze=re.type,Ze===z){if(it.tag===7){a(ee,it.sibling),W=f(it,re.props.children),W.return=ee,ee=W;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Gh(Ze)===it.type){a(ee,it.sibling),W=f(it,re.props),W.ref=ba(ee,it,re),W.return=ee,ee=W;break e}a(ee,it);break}else i(ee,it);it=it.sibling}re.type===z?(W=Zr(re.props.children,ee.mode,Te,re.key),W.return=ee,ee=W):(Te=dl(re.type,re.key,re.props,null,ee.mode,Te),Te.ref=ba(ee,W,re),Te.return=ee,ee=Te)}return w(ee);case k:e:{for(it=re.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===re.containerInfo&&W.stateNode.implementation===re.implementation){a(ee,W.sibling),W=f(W,re.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Hu(re,ee.mode,Te),W.return=ee,ee=W}return w(ee);case K:return it=re._init,Kt(ee,W,it(re._payload),Te)}if(vt(re))return Xe(ee,W,re,Te);if(ue(re))return qe(ee,W,re,Te);Vo(ee,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,W!==null&&W.tag===6?(a(ee,W.sibling),W=f(W,re),W.return=ee,ee=W):(a(ee,W),W=Vu(re,ee.mode,Te),W.return=ee,ee=W),w(ee)):a(ee,W)}return Kt}var As=Wh(!0),jh=Wh(!1),Ho=mr(null),Go=null,Cs=null,Zc=null;function Qc(){Zc=Cs=Go=null}function Jc(n){var i=Ho.current;Vt(Ho),n._currentValue=i}function eu(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Go=n,Zc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Zc!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Go===null)throw Error(t(308));Cs=n,Go.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Wr=null;function tu(n){Wr===null?Wr=[n]:Wr.push(n)}function Xh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,tu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Gi(n,c)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var xr=!1;function nu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function _r(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Gi(n,a)}return f=c.interleaved,f===null?(i.next=i,tu(c)):(i.next=f.next,f.next=i),c.interleaved=i,Gi(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}function qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var f=n.updateQueue;xr=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var H=U,de=H.next;H.next=null,w===null?m=de:w.next=de,w=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,U=_e.lastBaseUpdate,U!==w&&(U===null?_e.firstBaseUpdate=de:U.next=de,_e.lastBaseUpdate=H))}if(m!==null){var ye=f.baseState;w=0,_e=de=H=null,U=m;do{var xe=U.lane,Fe=U.eventTime;if((c&xe)===xe){_e!==null&&(_e=_e.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,qe=U;switch(xe=i,Fe=a,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){ye=Xe.call(Fe,ye,xe);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,xe=typeof Xe=="function"?Xe.call(Fe,ye,xe):Xe,xe==null)break e;ye=he({},ye,xe);break e;case 2:xr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,xe=f.effects,xe===null?f.effects=[U]:xe.push(U))}else Fe={eventTime:Fe,lane:xe,tag:U.tag,payload:U.payload,callback:U.callback,next:null},_e===null?(de=_e=Fe,H=ye):_e=_e.next=Fe,w|=xe;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;xe=U,U=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(_e===null&&(H=ye),f.baseState=H,f.firstBaseUpdate=de,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);$r|=w,n.lanes=w,n.memoizedState=ye}}function Yh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Aa={},bi=mr(Aa),Ca=mr(Aa),Ra=mr(Aa);function jr(n){if(n===Aa)throw Error(t(174));return n}function iu(n,i){switch(Bt(Ra,i),Bt(Ca,n),Bt(bi,Aa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}Vt(bi),Bt(bi,i)}function Ps(){Vt(bi),Vt(Ca),Vt(Ra)}function Kh(n){jr(Ra.current);var i=jr(bi.current),a=pe(i,n.type);i!==a&&(Bt(Ca,n),Bt(bi,a))}function ru(n){Ca.current===n&&(Vt(bi),Vt(Ca))}var Wt=mr(0);function Xo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var su=[];function au(){for(var n=0;n<su.length;n++)su[n]._workInProgressVersionPrimary=null;su.length=0}var $o=L.ReactCurrentDispatcher,ou=L.ReactCurrentBatchConfig,Xr=0,jt=null,tn=null,on=null,qo=!1,Pa=!1,La=0,Dv=0;function mn(){throw Error(t(321))}function lu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function cu(n,i,a,c,f,m){if(Xr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,$o.current=n===null||n.memoizedState===null?Fv:Ov,n=a(c,f),Pa){m=0;do{if(Pa=!1,La=0,25<=m)throw Error(t(301));m+=1,on=tn=null,i.updateQueue=null,$o.current=kv,n=a(c,f)}while(Pa)}if($o.current=Zo,i=tn!==null&&tn.next!==null,Xr=0,on=tn=jt=null,qo=!1,i)throw Error(t(300));return n}function uu(){var n=La!==0;return La=0,n}function Ai(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?jt.memoizedState=on=n:on=on.next=n,on}function Zn(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=on===null?jt.memoizedState:on.next;if(i!==null)on=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?jt.memoizedState=on=n:on=on.next=n}return on}function Da(n,i){return typeof i=="function"?i(n):i}function du(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=tn,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var U=w=null,H=null,de=m;do{var _e=de.lane;if((Xr&_e)===_e)H!==null&&(H=H.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var ye={lane:_e,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};H===null?(U=H=ye,w=c):H=H.next=ye,jt.lanes|=_e,$r|=_e}de=de.next}while(de!==null&&de!==m);H===null?w=c:H.next=U,oi(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,jt.lanes|=m,$r|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);oi(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Zh(){}function Qh(n,i){var a=jt,c=Zn(),f=i(),m=!oi(c.memoizedState,f);if(m&&(c.memoizedState=f,Pn=!0),c=c.queue,hu(tp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Na(9,ep.bind(null,a,c,f,i),void 0,null),ln===null)throw Error(t(349));(Xr&30)!==0||Jh(a,i,f)}return f}function Jh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ep(n,i,a,c){i.value=a,i.getSnapshot=c,np(i)&&ip(n)}function tp(n,i,a){return a(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function ip(n){var i=Gi(n,1);i!==null&&fi(i,n,1,-1)}function rp(n){var i=Ai();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=Uv.bind(null,jt,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function sp(){return Zn().memoizedState}function Yo(n,i,a,c){var f=Ai();jt.flags|=n,f.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function Ko(n,i,a,c){var f=Zn();c=c===void 0?null:c;var m=void 0;if(tn!==null){var w=tn.memoizedState;if(m=w.destroy,c!==null&&lu(c,w.deps)){f.memoizedState=Na(i,a,m,c);return}}jt.flags|=n,f.memoizedState=Na(1|i,a,m,c)}function ap(n,i){return Yo(8390656,8,n,i)}function hu(n,i){return Ko(2048,8,n,i)}function op(n,i){return Ko(4,2,n,i)}function lp(n,i){return Ko(4,4,n,i)}function cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function up(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4,4,cp.bind(null,i,n),a)}function pu(){}function dp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function fp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&lu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function hp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(oi(a,i)||(a=bn(),jt.lanes|=a,$r|=a,n.baseState=!0),i)}function Nv(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=ou.transition;ou.transition={};try{n(!1),i()}finally{at=a,ou.transition=c}}function pp(){return Zn().memoizedState}function Iv(n,i,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,a);else if(a=Xh(n,i,a,c),a!==null){var f=En();fi(a,n,c,f),vp(a,i,c)}}function Uv(n,i,a){var c=Er(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,U=m(w,a);if(f.hasEagerState=!0,f.eagerState=U,oi(U,w)){var H=i.interleaved;H===null?(f.next=f,tu(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=Xh(n,i,f,c),a!==null&&(f=En(),fi(a,n,c,f),vp(a,i,c))}}function mp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function gp(n,i){Pa=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function vp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}var Zo={readContext:Kn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},Fv={readContext:Kn,useCallback:function(n,i){return Ai().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:ap,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=Ai();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ai();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Iv.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=Ai();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:pu,useDeferredValue:function(n){return Ai().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=Nv.bind(null,n[1]),Ai().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,f=Ai();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(Xr&30)!==0||Jh(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,ap(tp.bind(null,c,m,n),[n]),c.flags|=2048,Na(9,ep.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ai(),i=ln.identifierPrefix;if(Ht){var a=Hi,c=Vi;a=(c&~(1<<32-tt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Dv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ov={readContext:Kn,useCallback:dp,useContext:Kn,useEffect:hu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:du,useRef:sp,useState:function(){return du(Da)},useDebugValue:pu,useDeferredValue:function(n){var i=Zn();return hp(i,tn.memoizedState,n)},useTransition:function(){var n=du(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1},kv={readContext:Kn,useCallback:dp,useContext:Kn,useEffect:hu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:fp,useReducer:fu,useRef:sp,useState:function(){return fu(Da)},useDebugValue:pu,useDeferredValue:function(n){var i=Zn();return tn===null?i.memoizedState=n:hp(i,tn.memoizedState,n)},useTransition:function(){var n=fu(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=he({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function mu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:he({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Qo={isMounted:function(n){return(n=n._reactInternals)?wi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=En(),f=Er(n),m=Wi(c,f);m.payload=i,a!=null&&(m.callback=a),i=_r(n,m,f),i!==null&&(fi(i,n,f,c),Wo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=En(),f=Er(n),m=Wi(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=_r(n,m,f),i!==null&&(fi(i,n,f,c),Wo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),c=Er(n),f=Wi(a,c);f.tag=2,i!=null&&(f.callback=i),i=_r(n,f,c),i!==null&&(fi(i,n,c,a),Wo(i,n,c))}};function xp(n,i,a,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!_a(a,c)||!_a(f,m):!0}function _p(n,i,a){var c=!1,f=gr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(f=Rn(i)?Vr:pn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,f):gr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function yp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Qo.enqueueReplaceState(i,i.state,null)}function gu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},nu(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Kn(m):(m=Rn(i)?Vr:pn.current,f.context=Es(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(mu(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Qo.enqueueReplaceState(f,f.state,null),jo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ke(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function vu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function xu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Bv=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,Nu=c),xu(n,i)},a}function Mp(n,i,a){a=Wi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){xu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){xu(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Ep(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Bv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=Jv.bind(null,n,i,a),i.then(n,n))}function wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Tp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,_r(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var zv=L.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,c){i.child=n===null?jh(i,null,a,c):As(i,n.child,a,c)}function bp(n,i,a,c,f){a=a.render;var m=i.ref;return Rs(i,f),c=cu(n,i,a,c,m,f),a=uu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Ht&&a&&Xc(i),i.flags|=1,Mn(n,i,c,f),i.child)}function Ap(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!zu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Cp(n,i,m,c,f)):(n=dl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:_a,a(w,c)&&n.ref===i.ref)return ji(n,i,f)}return i.flags|=1,n=Tr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Cp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(_a(m,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ji(n,i,f)}return _u(n,i,a,c,f)}function Rp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(Ns,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Bt(Ns,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Bt(Ns,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Bt(Ns,Vn),Vn|=c;return Mn(n,i,f,a),i.child}function Pp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,a,c,f){var m=Rn(a)?Vr:pn.current;return m=Es(i,m),Rs(i,f),a=cu(n,i,a,c,m,f),c=uu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Ht&&c&&Xc(i),i.flags|=1,Mn(n,i,a,f),i.child)}function Lp(n,i,a,c,f){if(Rn(a)){var m=!0;Fo(i)}else m=!1;if(Rs(i,f),i.stateNode===null)el(n,i),_p(i,a,c),gu(i,a,c,f),c=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,de=a.contextType;typeof de=="object"&&de!==null?de=Kn(de):(de=Rn(a)?Vr:pn.current,de=Es(i,de));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||H!==de)&&yp(i,w,c,de),xr=!1;var xe=i.memoizedState;w.state=xe,jo(i,c,w,f),H=i.memoizedState,U!==c||xe!==H||Cn.current||xr?(typeof _e=="function"&&(mu(i,a,_e,c),H=i.memoizedState),(U=xr||xp(i,a,U,c,xe,H,de))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=de,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,$h(n,i),U=i.memoizedProps,de=i.type===i.elementType?U:ci(i.type,U),w.props=de,ye=i.pendingProps,xe=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=Rn(a)?Vr:pn.current,H=Es(i,H));var Fe=a.getDerivedStateFromProps;(_e=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||xe!==H)&&yp(i,w,c,H),xr=!1,xe=i.memoizedState,w.state=xe,jo(i,c,w,f);var Xe=i.memoizedState;U!==ye||xe!==Xe||Cn.current||xr?(typeof Fe=="function"&&(mu(i,a,Fe,c),Xe=i.memoizedState),(de=xr||xp(i,a,de,c,xe,Xe,H)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),w.props=c,w.state=Xe,w.context=H,c=de):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return yu(n,i,a,c,m,f)}function yu(n,i,a,c,f,m){Pp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Fh(i,a,!1),ji(n,i,m);c=i.stateNode,zv.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,m),i.child=As(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=c.state,f&&Fh(i,a,!0),i.child}function Dp(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),iu(n,i.containerInfo)}function Np(n,i,a,c,f){return bs(),Kc(f),i.flags|=256,Mn(n,i,a,c),i.child}var Su={dehydrated:null,treeContext:null,retryLane:0};function Mu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,a){var c=i.pendingProps,f=Wt.current,m=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Bt(Wt,f&1),n===null)return Yc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=fl(w,c,0,null),n=Zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Mu(a),i.memoizedState=Su,n):Eu(i,w));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Vv(n,i,w,c,U,f,a);if(m){m=c.fallback,w=i.mode,f=n.child,U=f.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Tr(f,H),c.subtreeFlags=f.subtreeFlags&14680064),U!==null?m=Tr(U,m):(m=Zr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?Mu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=Su,c}return m=n.child,n=m.sibling,c=Tr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Eu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Jo(n,i,a,c){return c!==null&&Kc(c),As(i,n.child,null,a),n=Eu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Vv(n,i,a,c,f,m,w){if(a)return i.flags&256?(i.flags&=-257,c=vu(Error(t(422))),Jo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=fl({mode:"visible",children:c.children},f,0,null),m=Zr(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=Mu(w),i.memoizedState=Su,m);if((i.mode&1)===0)return Jo(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=vu(m,c,void 0),Jo(n,i,w,c)}if(U=(w&n.childLanes)!==0,Pn||U){if(c=ln,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Gi(n,f),fi(c,n,f,-1))}return Bu(),c=vu(Error(t(421))),Jo(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ex.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,zn=pr(f.nextSibling),Bn=i,Ht=!0,li=null,n!==null&&(qn[Yn++]=Vi,qn[Yn++]=Hi,qn[Yn++]=Hr,Vi=n.id,Hi=n.overflow,Hr=i),i=Eu(i,c.children),i.flags|=4096,i)}function Up(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),eu(n.return,i,a)}function wu(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Fp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,a),c=Wt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Up(n,a,i);else if(n.tag===19)Up(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Bt(Wt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Xo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),wu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Xo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}wu(i,!0,a,null,m);break;case"together":wu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Hv(n,i,a){switch(i.tag){case 3:Dp(i),bs();break;case 5:Kh(i);break;case 1:Rn(i.type)&&Fo(i);break;case 4:iu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Bt(Ho,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Bt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ip(n,i,a):(Bt(Wt,Wt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);Bt(Wt,Wt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Bt(Wt,Wt.current),c)break;return null;case 22:case 23:return i.lanes=0,Rp(n,i,a)}return ji(n,i,a)}var Op,Tu,kp,Bp;Op=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Tu=function(){},kp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,jr(bi.current);var m=null;switch(a){case"input":f=yt(n,f),c=yt(n,c),m=[];break;case"select":f=he({},f,{value:void 0}),c=he({},c,{value:void 0}),m=[];break;case"textarea":f=Be(n,f),c=Be(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=No)}We(a,c);var w;a=null;for(de in f)if(!c.hasOwnProperty(de)&&f.hasOwnProperty(de)&&f[de]!=null)if(de==="style"){var U=f[de];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?m||(m=[]):(m=m||[]).push(de,null));for(de in c){var H=c[de];if(U=f?.[de],c.hasOwnProperty(de)&&H!==U&&(H!=null||U!=null))if(de==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(m||(m=[]),m.push(de,a)),a=H;else de==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(m=m||[]).push(de,H)):de==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(de,""+H):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(H!=null&&de==="onScroll"&&zt("scroll",n),m||U===H||(m=[])):(m=m||[]).push(de,H))}a&&(m=m||[]).push("style",a);var de=m;(i.updateQueue=de)&&(i.flags|=4)}},Bp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ia(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Gv(n,i,a){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Uo(),gn(i),null;case 3:return c=i.stateNode,Ps(),Vt(Cn),Vt(pn),au(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Fu(li),li=null))),Tu(n,i),gn(i),null;case 5:ru(i);var f=jr(Ra.current);if(a=i.type,n!==null&&i.stateNode!=null)kp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=jr(bi.current),zo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ti]=i,c[wa]=m,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",c),zt("close",c);break;case"iframe":case"object":case"embed":zt("load",c);break;case"video":case"audio":for(f=0;f<Sa.length;f++)zt(Sa[f],c);break;case"source":zt("error",c);break;case"img":case"image":case"link":zt("error",c),zt("load",c);break;case"details":zt("toggle",c);break;case"input":bt(c,m),zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},zt("invalid",c);break;case"textarea":P(c,m),zt("invalid",c)}We(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var U=m[w];w==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Do(c.textContent,U,n),f=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Do(c.textContent,U,n),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&zt("scroll",c)}switch(a){case"input":nt(c),V(c,m,!0);break;case"textarea":nt(c),I(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=No)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=q(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ti]=i,n[wa]=c,Op(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,c),a){case"dialog":zt("cancel",n),zt("close",n),f=c;break;case"iframe":case"object":case"embed":zt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Sa.length;f++)zt(Sa[f],n);f=c;break;case"source":zt("error",n),f=c;break;case"img":case"image":case"link":zt("error",n),zt("load",n),f=c;break;case"details":zt("toggle",n),f=c;break;case"input":bt(n,c),f=yt(n,c),zt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=he({},c,{value:void 0}),zt("invalid",n);break;case"textarea":P(n,c),f=Be(n,c),zt("invalid",n);break;default:f=c}We(a,f),U=f;for(m in U)if(U.hasOwnProperty(m)){var H=U[m];m==="style"?be(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(n,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&we(n,H):typeof H=="number"&&we(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&zt("scroll",n):H!=null&&N(n,m,H,w))}switch(a){case"input":nt(n),V(n,c,!1);break;case"textarea":nt(n),I(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?xt(n,!!c.multiple,m,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=No)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ra.current),jr(bi.current),zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ti]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Do(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=i,i.stateNode=c}return gn(i),null;case 13:if(Vt(Wt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hh(),bs(),i.flags|=98560,m=!1;else if(m=zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ti]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else li!==null&&(Fu(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):Bu())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ps(),Tu(n,i),n===null&&Ma(i.stateNode.containerInfo),gn(i),null;case 10:return Jc(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Uo(),gn(i),null;case 19:if(Vt(Wt),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Ia(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Xo(n),w!==null){for(i.flags|=128,Ia(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Bt(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>Is&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304)}else{if(!c)if(n=Xo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ht)return gn(i),null}else 2*A()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=Wt.current,Bt(Wt,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return ku(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Wv(n,i){switch($c(i),i.tag){case 1:return Rn(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),Vt(Cn),Vt(pn),au(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ru(i),null;case 13:if(Vt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Vt(Wt),null;case 4:return Ps(),null;case 10:return Jc(i.type._context),null;case 22:case 23:return ku(),null;case 24:return null;default:return null}}var tl=!1,vn=!1,jv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function bu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var zp=!1;function Xv(n,i){if(kc=So,n=xh(),Pc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,U=-1,H=-1,de=0,_e=0,ye=n,xe=null;t:for(;;){for(var Fe;ye!==a||f!==0&&ye.nodeType!==3||(U=w+f),ye!==m||c!==0&&ye.nodeType!==3||(H=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)xe=ye,ye=Fe;for(;;){if(ye===n)break t;if(xe===a&&++de===f&&(U=w),xe===m&&++_e===c&&(H=w),(Fe=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Fe}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:n,selectionRange:a},So=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,Kt=Xe.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ci(i.type,qe),Kt);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var re=i.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=zp,zp=!1,Xe}function Ua(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&bu(i,a,m)}f=f.next}while(f!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Vp(n){var i=n.alternate;i!==null&&(n.alternate=null,Vp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ti],delete i[wa],delete i[Gc],delete i[Cv],delete i[Rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=No));else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}function Ru(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Ru(n,i,a),n=n.sibling;n!==null;)Ru(n,i,a),n=n.sibling}var dn=null,ui=!1;function yr(n,i,a){for(a=a.child;a!==null;)Wp(n,i,a),a=a.sibling}function Wp(n,i,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 5:vn||Ds(a,i);case 6:var c=dn,f=ui;dn=null,yr(n,i,a),dn=c,ui=f,dn!==null&&(ui?(n=dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):dn.removeChild(a.stateNode));break;case 18:dn!==null&&(ui?(n=dn,a=a.stateNode,n.nodeType===8?Hc(n.parentNode,a):n.nodeType===1&&Hc(n,a),ha(n)):Hc(dn,a.stateNode));break;case 4:c=dn,f=ui,dn=a.stateNode.containerInfo,ui=!0,yr(n,i,a),dn=c,ui=f;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&bu(a,i,w),f=f.next}while(f!==c)}yr(n,i,a);break;case 1:if(!vn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Xt(a,i,U)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,yr(n,i,a),vn=c):yr(n,i,a);break;default:yr(n,i,a)}}function jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jv),i.forEach(function(c){var f=tx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function di(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:dn=U.stateNode,ui=!1;break e;case 3:dn=U.stateNode.containerInfo,ui=!0;break e;case 4:dn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(dn===null)throw Error(t(160));Wp(m,w,f),dn=null,ui=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(de){Xt(f,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xp(i,n),i=i.sibling}function Xp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),Ci(n),c&4){try{Ua(3,n,n.return),nl(3,n)}catch(qe){Xt(n,n.return,qe)}try{Ua(5,n,n.return)}catch(qe){Xt(n,n.return,qe)}}break;case 1:di(i,n),Ci(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(di(i,n),Ci(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var f=n.stateNode;try{we(f,"")}catch(qe){Xt(n,n.return,qe)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,U=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ct(f,m),Ne(U,w);var de=Ne(U,m);for(w=0;w<H.length;w+=2){var _e=H[w],ye=H[w+1];_e==="style"?be(f,ye):_e==="dangerouslySetInnerHTML"?Pe(f,ye):_e==="children"?we(f,ye):N(f,_e,ye,de)}switch(U){case"input":Ut(f,m);break;case"textarea":g(f,m);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?xt(f,!!m.multiple,Fe,!1):xe!==!!m.multiple&&(m.defaultValue!=null?xt(f,!!m.multiple,m.defaultValue,!0):xt(f,!!m.multiple,m.multiple?[]:"",!1))}f[wa]=m}catch(qe){Xt(n,n.return,qe)}}break;case 6:if(di(i,n),Ci(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(qe){Xt(n,n.return,qe)}}break;case 3:if(di(i,n),Ci(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ha(i.containerInfo)}catch(qe){Xt(n,n.return,qe)}break;case 4:di(i,n),Ci(n);break;case 13:di(i,n),Ci(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Du=A())),c&4&&jp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(de=vn)||_e,di(i,n),vn=de):di(i,n),Ci(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!_e&&(n.mode&1)!==0)for(Ve=n,_e=n.child;_e!==null;){for(ye=Ve=_e;Ve!==null;){switch(xe=Ve,Fe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Ua(4,xe,xe.return);break;case 1:Ds(xe,xe.return);var Xe=xe.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Xt(c,a,qe)}}break;case 5:Ds(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Yp(ye);continue}}Fe!==null?(Fe.return=xe,Ve=Fe):Yp(ye)}_e=_e.sibling}e:for(_e=null,ye=n;;){if(ye.tag===5){if(_e===null){_e=ye;try{f=ye.stateNode,de?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,H=ye.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=Se("display",w))}catch(qe){Xt(n,n.return,qe)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=de?"":ye.memoizedProps}catch(qe){Xt(n,n.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:di(i,n),Ci(n),c&4&&jp(n);break;case 21:break;default:di(i,n),Ci(n)}}function Ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Hp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(we(f,""),c.flags&=-33);var m=Gp(n);Ru(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,U=Gp(n);Cu(n,U,w);break;default:throw Error(t(161))}}catch(H){Xt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function $v(n,i,a){Ve=n,$p(n)}function $p(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var f=Ve,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||tl;if(!w){var U=f.alternate,H=U!==null&&U.memoizedState!==null||vn;U=tl;var de=vn;if(tl=w,(vn=H)&&!de)for(Ve=f;Ve!==null;)w=Ve,H=w.child,w.tag===22&&w.memoizedState!==null?Kp(f):H!==null?(H.return=w,Ve=H):Kp(f);for(;m!==null;)Ve=m,$p(m),m=m.sibling;Ve=f,tl=U,vn=de}qp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ve=m):qp(n)}}function qp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Yh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Yh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var _e=de.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&ha(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&Au(i)}catch(xe){Xt(i,i.return,xe)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Yp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Kp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(H){Xt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){Xt(i,f,H)}}var m=i.return;try{Au(i)}catch(H){Xt(i,m,H)}break;case 5:var w=i.return;try{Au(i)}catch(H){Xt(i,w,H)}}}catch(H){Xt(i,i.return,H)}if(i===n){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var qv=Math.ceil,il=L.ReactCurrentDispatcher,Pu=L.ReactCurrentOwner,Qn=L.ReactCurrentBatchConfig,wt=0,ln=null,Qt=null,fn=0,Vn=0,Ns=mr(0),nn=0,Fa=null,$r=0,rl=0,Lu=0,Oa=null,Ln=null,Du=0,Is=1/0,Xi=null,sl=!1,Nu=null,Sr=null,al=!1,Mr=null,ol=0,ka=0,Iu=null,ll=-1,cl=0;function En(){return(wt&6)!==0?A():ll!==-1?ll:ll=A()}function Er(n){return(n.mode&1)===0?1:(wt&2)!==0&&fn!==0?fn&-fn:Lv.transition!==null?(cl===0&&(cl=bn()),cl):(n=at,n!==0||(n=window.event,n=n===void 0?16:Qf(n.type)),n)}function fi(n,i,a,c){if(50<ka)throw ka=0,Iu=null,Error(t(185));On(n,a,c),((wt&2)===0||n!==ln)&&(n===ln&&((wt&2)===0&&(rl|=a),nn===4&&wr(n,fn)),Dn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Is=A()+500,Oo&&vr()))}function Dn(n,i){var a=n.callbackNode;Sn(n,i);var c=qt(n,n===ln?fn:0);if(c===0)a!==null&&xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&xo(a),i===1)n.tag===0?Pv(Qp.bind(null,n)):Oh(Qp.bind(null,n)),bv(function(){(wt&6)===0&&vr()}),a=null;else{switch(ai(c)){case 1:a=fe;break;case 4:a=ae;break;case 16:a=ne;break;case 536870912:a=Oe;break;default:a=ne}a=am(a,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zp(n,i){if(ll=-1,cl=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=qt(n,n===ln?fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ul(n,c);else{i=c;var f=wt;wt|=2;var m=em();(ln!==n||fn!==i)&&(Xi=null,Is=A()+500,Yr(n,i));do try{Zv();break}catch(U){Jp(n,U)}while(!0);Qc(),il.current=m,wt=f,Qt!==null?i=0:(ln=null,fn=0,i=nn)}if(i!==0){if(i===2&&(f=_t(n),f!==0&&(c=f,i=Uu(n,f))),i===1)throw a=Fa,Yr(n,0),wr(n,c),Dn(n,A()),a;if(i===6)wr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Yv(f)&&(i=ul(n,c),i===2&&(m=_t(n),m!==0&&(c=m,i=Uu(n,m))),i===1))throw a=Fa,Yr(n,0),wr(n,c),Dn(n,A()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,Ln,Xi);break;case 3:if(wr(n,c),(c&130023424)===c&&(i=Du+500-A(),10<i)){if(qt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Vc(Kr.bind(null,n,Ln,Xi),i);break}Kr(n,Ln,Xi);break;case 4:if(wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-tt(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=A()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*qv(c/1960))-c,10<c){n.timeoutHandle=Vc(Kr.bind(null,n,Ln,Xi),c);break}Kr(n,Ln,Xi);break;case 5:Kr(n,Ln,Xi);break;default:throw Error(t(329))}}}return Dn(n,A()),n.callbackNode===a?Zp.bind(null,n):null}function Uu(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=ul(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Fu(i)),n}function Fu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function Yv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(n,i){for(i&=~Lu,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-tt(i),c=1<<a;n[a]=-1,i&=~c}}function Qp(n){if((wt&6)!==0)throw Error(t(327));Us();var i=qt(n,0);if((i&1)===0)return Dn(n,A()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=_t(n);c!==0&&(i=c,a=Uu(n,c))}if(a===1)throw a=Fa,Yr(n,0),wr(n,i),Dn(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,Ln,Xi),Dn(n,A()),null}function Ou(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Is=A()+500,Oo&&vr())}}function qr(n){Mr!==null&&Mr.tag===0&&(wt&6)===0&&Us();var i=wt;wt|=1;var a=Qn.transition,c=at;try{if(Qn.transition=null,at=1,n)return n()}finally{at=c,Qn.transition=a,wt=i,(wt&6)===0&&vr()}}function ku(){Vn=Ns.current,Vt(Ns)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Tv(a)),Qt!==null)for(a=Qt.return;a!==null;){var c=a;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:Ps(),Vt(Cn),Vt(pn),au();break;case 5:ru(c);break;case 4:Ps();break;case 13:Vt(Wt);break;case 19:Vt(Wt);break;case 10:Jc(c.type._context);break;case 22:case 23:ku()}a=a.return}if(ln=n,Qt=n=Tr(n.current,null),fn=Vn=i,nn=0,Fa=null,Lu=rl=$r=0,Ln=Oa=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}a.pending=c}Wr=null}return n}function Jp(n,i){do{var a=Qt;try{if(Qc(),$o.current=Zo,qo){for(var c=jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}qo=!1}if(Xr=0,on=tn=jt=null,Pa=!1,La=0,Pu.current=null,a===null||a.return===null){nn=1,Fa=i,Qt=null;break}e:{var m=n,w=a.return,U=a,H=i;if(i=fn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var de=H,_e=U,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Fe=wp(w);if(Fe!==null){Fe.flags&=-257,Tp(Fe,w,U,m,i),Fe.mode&1&&Ep(m,de,i),i=Fe,H=de;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(H),i.updateQueue=qe}else Xe.add(H);break e}else{if((i&1)===0){Ep(m,de,i),Bu();break e}H=Error(t(426))}}else if(Ht&&U.mode&1){var Kt=wp(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Tp(Kt,w,U,m,i),Kc(Ls(H,U));break e}}m=H=Ls(H,U),nn!==4&&(nn=2),Oa===null?Oa=[m]:Oa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Sp(m,H,i);qh(m,ee);break e;case 1:U=H;var W=m.type,re=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Sr===null||!Sr.has(re)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Mp(m,U,i);qh(m,Te);break e}}m=m.return}while(m!==null)}nm(a)}catch(Ze){i=Ze,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function em(){var n=il.current;return il.current=Zo,n===null?Zo:n}function Bu(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||($r&268435455)===0&&(rl&268435455)===0||wr(ln,fn)}function ul(n,i){var a=wt;wt|=2;var c=em();(ln!==n||fn!==i)&&(Xi=null,Yr(n,i));do try{Kv();break}catch(f){Jp(n,f)}while(!0);if(Qc(),wt=a,il.current=c,Qt!==null)throw Error(t(261));return ln=null,fn=0,nn}function Kv(){for(;Qt!==null;)tm(Qt)}function Zv(){for(;Qt!==null&&!gc();)tm(Qt)}function tm(n){var i=sm(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?nm(n):Qt=i,Pu.current=null}function nm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Gv(a,i,Vn),a!==null){Qt=a;return}}else{if(a=Wv(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);nn===0&&(nn=5)}function Kr(n,i,a){var c=at,f=Qn.transition;try{Qn.transition=null,at=1,Qv(n,i,a,c)}finally{Qn.transition=f,at=c}return null}function Qv(n,i,a,c){do Us();while(Mr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(or(n,m),n===ln&&(Qt=ln=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,am(ne,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=at;at=1;var U=wt;wt|=4,Pu.current=null,Xv(n,a),Xp(a,n),xv(Bc),So=!!kc,Bc=kc=null,n.current=a,$v(a),vc(),wt=U,at=w,Qn.transition=m}else n.current=a;if(al&&(al=!1,Mr=n,ol=f),m=n.pendingLanes,m===0&&(Sr=null),Qe(a.stateNode),Dn(n,A()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(sl)throw sl=!1,n=Nu,Nu=null,n;return(ol&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===Iu?ka++:(ka=0,Iu=n):ka=0,vr(),null}function Us(){if(Mr!==null){var n=ai(ol),i=Qn.transition,a=at;try{if(Qn.transition=null,at=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,ol=0,(wt&6)!==0)throw Error(t(331));var f=wt;for(wt|=4,Ve=n.current;Ve!==null;){var m=Ve,w=m.child;if((Ve.flags&16)!==0){var U=m.deletions;if(U!==null){for(var H=0;H<U.length;H++){var de=U[H];for(Ve=de;Ve!==null;){var _e=Ve;switch(_e.tag){case 0:case 11:case 15:Ua(8,_e,m)}var ye=_e.child;if(ye!==null)ye.return=_e,Ve=ye;else for(;Ve!==null;){_e=Ve;var xe=_e.sibling,Fe=_e.return;if(Vp(_e),_e===de){Ve=null;break}if(xe!==null){xe.return=Fe,Ve=xe;break}Ve=Fe}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ve=w;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ve=ee;break e}Ve=m.return}}var W=n.current;for(Ve=W;Ve!==null;){w=Ve;var re=w.child;if((w.subtreeFlags&2064)!==0&&re!==null)re.return=w,Ve=re;else e:for(w=W;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:nl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===w){Ve=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Ve=Te;break e}Ve=U.return}}if(wt=f,vr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Re,n)}catch{}c=!0}return c}finally{at=a,Qn.transition=i}}return!1}function im(n,i,a){i=Ls(a,i),i=Sp(n,i,1),n=_r(n,i,1),i=En(),n!==null&&(On(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)im(n,n,a);else for(;i!==null;){if(i.tag===3){im(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Ls(a,n),n=Mp(i,n,1),i=_r(i,n,1),n=En(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function Jv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(fn&a)===a&&(nn===4||nn===3&&(fn&130023424)===fn&&500>A()-Du?Yr(n,0):Lu|=a),Dn(n,i)}function rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var a=En();n=Gi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function ex(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(n,a)}function tx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),rm(n,a)}var sm;sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,Hv(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Ht&&(i.flags&1048576)!==0&&kh(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var f=Es(i,pn.current);Rs(i,a),f=cu(null,i,c,n,f,a);var m=uu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(m=!0,Fo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,nu(i),f.updater=Qo,i.stateNode=f,f._reactInternals=i,gu(i,c,n,a),i=yu(null,i,c,!0,m,a)):(i.tag=0,Ht&&m&&Xc(i),Mn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ix(c),n=ci(c,n),f){case 0:i=_u(null,i,c,n,a);break e;case 1:i=Lp(null,i,c,n,a);break e;case 11:i=bp(null,i,c,n,a);break e;case 14:i=Ap(null,i,c,ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),_u(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),Lp(n,i,c,f,a);case 3:e:{if(Dp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,$h(n,i),jo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ls(Error(t(423)),i),i=Np(n,i,c,a,f);break e}else if(c!==f){f=Ls(Error(t(424)),i),i=Np(n,i,c,a,f);break e}else for(zn=pr(i.stateNode.containerInfo.firstChild),Bn=i,Ht=!0,li=null,a=jh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===f){i=ji(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return Kh(i),n===null&&Yc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,zc(c,f)?w=null:m!==null&&zc(c,m)&&(i.flags|=32),Pp(n,i),Mn(n,i,w,a),i.child;case 6:return n===null&&Yc(i),null;case 13:return Ip(n,i,a);case 4:return iu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=As(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),bp(n,i,c,f,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Bt(Ho,c._currentValue),c._currentValue=w,m!==null)if(oi(m.value,w)){if(m.children===f.children&&!Cn.current){i=ji(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){w=m.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=Wi(-1,a&-a),H.tag=2;var de=m.updateQueue;if(de!==null){de=de.shared;var _e=de.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),de.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),eu(m.return,a,i),U.lanes|=a;break}H=H.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),eu(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Mn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Rs(i,a),f=Kn(f),c=c(f),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,f=ci(c,i.pendingProps),f=ci(c.type,f),Ap(n,i,c,f,a);case 15:return Cp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ci(c,f),el(n,i),i.tag=1,Rn(c)?(n=!0,Fo(i)):n=!1,Rs(i,a),_p(i,c,f),gu(i,c,f,a),yu(null,i,c,!0,n,a);case 19:return Fp(n,i,a);case 22:return Rp(n,i,a)}throw Error(t(156,i.tag))};function am(n,i){return vo(n,i)}function nx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,c){return new nx(n,i,a,c)}function zu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ix(n){if(typeof n=="function")return zu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===J)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,c,f,m){var w=2;if(c=n,typeof n=="function")zu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case z:return Zr(a.children,f,m,i);case T:w=8,f|=8;break;case D:return n=Jn(12,a,i,f|2),n.elementType=D,n.lanes=m,n;case te:return n=Jn(13,a,i,f),n.elementType=te,n.lanes=m,n;case se:return n=Jn(19,a,i,f),n.elementType=se,n.lanes=m,n;case j:return fl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q:w=10;break e;case F:w=9;break e;case Y:w=11;break e;case J:w=14;break e;case K:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Zr(n,i,a,c){return n=Jn(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=Jn(22,n,c,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function Vu(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Hu(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function rx(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Gu(n,i,a,c,f,m,w,U,H){return n=new rx(n,i,a,U,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},nu(m),n}function sx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function om(n){if(!n)return gr;n=n._reactInternals;e:{if(wi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Uh(n,a,i)}return i}function lm(n,i,a,c,f,m,w,U,H){return n=Gu(a,c,!0,n,f,m,w,U,H),n.context=om(null),a=n.current,c=En(),f=Er(a),m=Wi(c,f),m.callback=i??null,_r(a,m,f),n.current.lanes=f,On(n,f,c),Dn(n,c),n}function hl(n,i,a,c){var f=i.current,m=En(),w=Er(f);return a=om(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=_r(f,i,w),n!==null&&(fi(n,f,w,m),Wo(n,f,w)),w}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Wu(n,i){cm(n,i),(n=n.alternate)&&cm(n,i)}function ax(){return null}var um=typeof reportError=="function"?reportError:function(n){console.error(n)};function ju(n){this._internalRoot=n}ml.prototype.render=ju.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=ju.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){hl(null,n,null,null)}),i[Bi]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=la();n={blockedOn:null,target:n,priority:i};for(var a=0;a<dr.length&&i!==0&&i<dr[a].priority;a++);dr.splice(a,0,n),a===0&&Kf(n)}};function Xu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function dm(){}function ox(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var de=pl(w);m.call(de)}}var w=lm(i,c,n,0,null,!1,!1,"",dm);return n._reactRootContainer=w,n[Bi]=w.current,Ma(n.nodeType===8?n.parentNode:n),qr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var U=c;c=function(){var de=pl(H);U.call(de)}}var H=Gu(n,0,!1,null,null,!1,!1,"",dm);return n._reactRootContainer=H,n[Bi]=H.current,Ma(n.nodeType===8?n.parentNode:n),qr(function(){hl(i,H,a,c)}),H}function vl(n,i,a,c,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var U=f;f=function(){var H=pl(w);U.call(H)}}hl(i,w,n,f)}else w=ox(a,i,n,f,c);return pl(w)}Yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(Rt(i,a|1),Dn(i,A()),(wt&6)===0&&(Is=A()+500,vr()))}break;case 13:qr(function(){var c=Gi(n,1);if(c!==null){var f=En();fi(c,n,1,f)}}),Wu(n,1)}},$n=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=En();fi(i,n,134217728,a)}Wu(n,134217728)}},ki=function(n){if(n.tag===13){var i=Er(n),a=Gi(n,i);if(a!==null){var c=En();fi(a,n,i,c)}Wu(n,i)}},la=function(){return at},qf=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},Ae=function(n,i,a){switch(i){case"input":if(Ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Io(c);if(!f)throw Error(t(90));Gt(c),Ut(c,f)}}}break;case"textarea":g(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},st=Ou,Nt=qr;var lx={usingClientEntryPoint:!1,Events:[Ta,Ss,Io,me,je,Ou]},Ba={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cx={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=mo(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||ax,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Re=xl.inject(cx),Ue=xl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lx,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(i))throw Error(t(200));return sx(n,i,null,a)},Nn.createRoot=function(n,i){if(!Xu(n))throw Error(t(299));var a=!1,c="",f=um;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Gu(n,1,!1,null,null,a,!1,c,f),n[Bi]=i.current,Ma(n.nodeType===8?n.parentNode:n),new ju(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=mo(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return qr(n)},Nn.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return vl(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!Xu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",w=um;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=lm(i,null,n,1,a??null,f,!1,m,w),n[Bi]=i.current,Ma(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ml(i)},Nn.render=function(n,i,a){if(!gl(i))throw Error(t(200));return vl(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){vl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Ou,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return vl(n,i,a,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var _m;function _x(){if(_m)return Yu.exports;_m=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yu.exports=xx(),Yu.exports}var ym;function yx(){if(ym)return _l;ym=1;var r=_x();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var Sx=yx();/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sm="popstate";function Mx(r={}){function e(s,o){let{pathname:l,search:u,hash:d}=s.location;return Fd("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ja(o)}return wx(e,t,null,r)}function rn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Mi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Ex(){return Math.random().toString(36).substring(2,10)}function Mm(r,e){return{usr:r.state,key:r.key,idx:e}}function Fd(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?ro(e):e,state:t,key:e&&e.key||s||Ex()}}function Ja({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function ro(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function wx(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d="POP",h=null,p=x();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function x(){return(u.state||{idx:null}).idx}function _(){d="POP";let y=x(),S=y==null?null:y-p;p=y,h&&h({action:d,location:b.location,delta:S})}function v(y,S){d="PUSH";let C=Fd(b.location,y,S);p=x()+1;let N=Mm(C,p),L=b.createHref(C);try{u.pushState(N,"",L)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(L)}l&&h&&h({action:d,location:b.location,delta:1})}function M(y,S){d="REPLACE";let C=Fd(b.location,y,S);p=x();let N=Mm(C,p),L=b.createHref(C);u.replaceState(N,"",L),l&&h&&h({action:d,location:b.location,delta:0})}function E(y){return Tx(y)}let b={get action(){return d},get location(){return r(o,u)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Sm,_),h=y,()=>{o.removeEventListener(Sm,_),h=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:M,go(y){return u.go(y)}};return b}function Tx(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),rn(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ja(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Ag(r,e,t="/"){return bx(r,e,t,!1)}function bx(r,e,t,s){let o=typeof e=="string"?ro(e):e,l=nr(o.pathname||"/",t);if(l==null)return null;let u=Cg(r);Ax(u);let d=null;for(let h=0;d==null&&h<u.length;++h){let p=kx(l);d=Fx(u[h],p,s)}return d}function Cg(r,e=[],t=[],s="",o=!1){let l=(u,d,h=o,p)=>{let x={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:d,route:u};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&h)return;rn(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let _=Ji([s,x.relativePath]),v=t.concat(x);u.children&&u.children.length>0&&(rn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${_}".`),Cg(u.children,e,v,_,h)),!(u.path==null&&!u.index)&&e.push({path:_,score:Ix(_,u.index),routesMeta:v})};return r.forEach((u,d)=>{if(u.path===""||!u.path?.includes("?"))l(u,d);else for(let h of Rg(u.path))l(u,d,!0,h)}),e}function Rg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Rg(s.join("/")),d=[];return d.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&d.push(...u),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function Ax(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Ux(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var Cx=/^:[\w-]+$/,Rx=3,Px=2,Lx=1,Dx=10,Nx=-2,Em=r=>r==="*";function Ix(r,e){let t=r.split("/"),s=t.length;return t.some(Em)&&(s+=Nx),e&&(s+=Px),t.filter(o=>!Em(o)).reduce((o,l)=>o+(Cx.test(l)?Rx:l===""?Lx:Dx),s)}function Ux(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function Fx(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let d=0;d<s.length;++d){let h=s[d],p=d===s.length-1,x=l==="/"?e:e.slice(l.length)||"/",_=ec({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},x),v=h.route;if(!_&&p&&t&&!s[s.length-1].route.index&&(_=ec({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},x)),!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:Ji([l,_.pathname]),pathnameBase:Hx(Ji([l,_.pathnameBase])),route:v}),_.pathnameBase!=="/"&&(l=Ji([l,_.pathnameBase]))}return u}function ec(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Ox(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,{paramName:x,isOptional:_},v)=>{if(x==="*"){let E=d[v]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return _&&!M?p[x]=void 0:p[x]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function Ox(r,e=!1,t=!0){Mi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h)=>(s.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function kx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function nr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}var Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bx=r=>Pg.test(r);function zx(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?ro(r):r,l;if(t)if(Bx(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Mi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?l=wm(t.substring(1),"/"):l=wm(t,e)}else l=e;return{pathname:l,search:Gx(s),hash:Wx(o)}}function wm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Qu(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Vx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lg(r){let e=Vx(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Dg(r,e,t,s=!1){let o;typeof r=="string"?o=ro(r):(o={...r},rn(!o.pathname||!o.pathname.includes("?"),Qu("?","pathname","search",o)),rn(!o.pathname||!o.pathname.includes("#"),Qu("#","pathname","hash",o)),rn(!o.search||!o.search.includes("#"),Qu("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let _=e.length-1;if(!s&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),_-=1;o.pathname=v.join("/")}d=_>=0?e[_]:"/"}let h=zx(o,d),p=u&&u!=="/"&&u.endsWith("/"),x=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||x)&&(h.pathname+="/"),h}var Ji=r=>r.join("/").replace(/\/\/+/g,"/"),Hx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Gx=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Wx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,jx=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function Xx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function $x(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ng=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ig(r,e){let t=r;if(typeof t!="string"||!Pg.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Ng)try{let l=new URL(window.location.href),u=t.startsWith("//")?new URL(l.protocol+t):new URL(t),d=nr(u.pathname,e);u.origin===l.origin&&d!=null?t=d+u.search+u.hash:o=!0}catch{Mi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var qx=["GET",...Ug];new Set(qx);var ia=ie.createContext(null);ia.displayName="DataRouter";var lc=ie.createContext(null);lc.displayName="DataRouterState";var Yx=ie.createContext(!1),Fg=ie.createContext({isTransitioning:!1});Fg.displayName="ViewTransition";var Kx=ie.createContext(new Map);Kx.displayName="Fetchers";var Zx=ie.createContext(null);Zx.displayName="Await";var si=ie.createContext(null);si.displayName="Navigation";var cc=ie.createContext(null);cc.displayName="Location";var sr=ie.createContext({outlet:null,matches:[],isDataRoute:!1});sr.displayName="Route";var Df=ie.createContext(null);Df.displayName="RouteError";var Og="REACT_ROUTER_ERROR",Qx="REDIRECT",Jx="ROUTE_ERROR_RESPONSE";function e_(r){if(r.startsWith(`${Og}:${Qx}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function t_(r){if(r.startsWith(`${Og}:${Jx}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new jx(e.status,e.statusText,e.data)}catch{}}function n_(r,{relative:e}={}){rn(so(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ie.useContext(si),{hash:o,pathname:l,search:u}=ao(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Ji([t,l])),s.createHref({pathname:d,search:u,hash:o})}function so(){return ie.useContext(cc)!=null}function Fr(){return rn(so(),"useLocation() may be used only in the context of a <Router> component."),ie.useContext(cc).location}var kg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bg(r){ie.useContext(si).static||ie.useLayoutEffect(r)}function zg(){let{isDataRoute:r}=ie.useContext(sr);return r?m_():i_()}function i_(){rn(so(),"useNavigate() may be used only in the context of a <Router> component.");let r=ie.useContext(ia),{basename:e,navigator:t}=ie.useContext(si),{matches:s}=ie.useContext(sr),{pathname:o}=Fr(),l=JSON.stringify(Lg(s)),u=ie.useRef(!1);return Bg(()=>{u.current=!0}),ie.useCallback((h,p={})=>{if(Mi(u.current,kg),!u.current)return;if(typeof h=="number"){t.go(h);return}let x=Dg(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Ji([e,x.pathname])),(p.replace?t.replace:t.push)(x,p.state,p)},[e,t,l,o,r])}ie.createContext(null);function ao(r,{relative:e}={}){let{matches:t}=ie.useContext(sr),{pathname:s}=Fr(),o=JSON.stringify(Lg(t));return ie.useMemo(()=>Dg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function r_(r,e,t,s,o){rn(so(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ie.useContext(si),{matches:u}=ie.useContext(sr),d=u[u.length-1],h=d?d.params:{},p=d?d.pathname:"/",x=d?d.pathnameBase:"/",_=d&&d.route;{let C=_&&_.path||"";Hg(p,!_||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let v=Fr(),M;M=v;let E=M.pathname||"/",b=E;if(x!=="/"){let C=x.replace(/^\//,"").split("/");b="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Ag(r,{pathname:b});return Mi(_||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Mi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),c_(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:Ji([x,l.encodeLocation?l.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?x:Ji([x,l.encodeLocation?l.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),u,t,s,o)}function s_(){let r=p_(),e=Xx(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=ie.createElement(ie.Fragment,null,ie.createElement("p",null,"💿 Hey developer 👋"),ie.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ie.createElement("code",{style:l},"ErrorBoundary")," or"," ",ie.createElement("code",{style:l},"errorElement")," prop on your route.")),ie.createElement(ie.Fragment,null,ie.createElement("h2",null,"Unexpected Application Error!"),ie.createElement("h3",{style:{fontStyle:"italic"}},e),t?ie.createElement("pre",{style:o},t):null,u)}var a_=ie.createElement(s_,null),Vg=class extends ie.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=t_(r.digest);t&&(r=t)}let e=r!==void 0?ie.createElement(sr.Provider,{value:this.props.routeContext},ie.createElement(Df.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ie.createElement(o_,{error:r},e):e}};Vg.contextType=Yx;var Ju=new WeakMap;function o_({children:r,error:e}){let{basename:t}=ie.useContext(si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=e_(e.digest);if(s){let o=Ju.get(e);if(o)throw o;let l=Ig(s.location,t);if(Ng&&!Ju.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Ju.set(e,u),u}return ie.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function l_({routeContext:r,match:e,children:t}){let s=ie.useContext(ia);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ie.createElement(sr.Provider,{value:r},t)}function c_(r,e=[],t=null,s=null,o=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,u=t?.errors;if(u!=null){let x=l.findIndex(_=>_.route.id&&u?.[_.route.id]!==void 0);rn(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,x+1))}let d=!1,h=-1;if(t)for(let x=0;x<l.length;x++){let _=l[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(h=x),_.route.id){let{loaderData:v,errors:M}=t,E=_.route.loader&&!v.hasOwnProperty(_.route.id)&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){d=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}let p=t&&s?(x,_)=>{s(x,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:$x(t.matches),errorInfo:_})}:void 0;return l.reduceRight((x,_,v)=>{let M,E=!1,b=null,y=null;t&&(M=u&&_.route.id?u[_.route.id]:void 0,b=_.route.errorElement||a_,d&&(h<0&&v===0?(Hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):h===v&&(E=!0,y=_.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,v+1)),C=()=>{let N;return M?N=b:E?N=y:_.route.Component?N=ie.createElement(_.route.Component,null):_.route.element?N=_.route.element:N=x,ie.createElement(l_,{match:_,routeContext:{outlet:x,matches:S,isDataRoute:t!=null},children:N})};return t&&(_.route.ErrorBoundary||_.route.errorElement||v===0)?ie.createElement(Vg,{location:t.location,revalidation:t.revalidation,component:b,error:M,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):C()},null)}function Nf(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function u_(r){let e=ie.useContext(ia);return rn(e,Nf(r)),e}function d_(r){let e=ie.useContext(lc);return rn(e,Nf(r)),e}function f_(r){let e=ie.useContext(sr);return rn(e,Nf(r)),e}function If(r){let e=f_(r),t=e.matches[e.matches.length-1];return rn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function h_(){return If("useRouteId")}function p_(){let r=ie.useContext(Df),e=d_("useRouteError"),t=If("useRouteError");return r!==void 0?r:e.errors?.[t]}function m_(){let{router:r}=u_("useNavigate"),e=If("useNavigate"),t=ie.useRef(!1);return Bg(()=>{t.current=!0}),ie.useCallback(async(o,l={})=>{Mi(t.current,kg),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Tm={};function Hg(r,e,t){!e&&!Tm[r]&&(Tm[r]=!0,Mi(!1,t))}ie.memo(g_);function g_({routes:r,future:e,state:t,onError:s}){return r_(r,void 0,t,s,e)}function v_({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){rn(!so(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),h=ie.useMemo(()=>({basename:d,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[d,o,l,u]);typeof t=="string"&&(t=ro(t));let{pathname:p="/",search:x="",hash:_="",state:v=null,key:M="default"}=t,E=ie.useMemo(()=>{let b=nr(p,d);return b==null?null:{location:{pathname:b,search:x,hash:_,state:v,key:M},navigationType:s}},[d,p,x,_,v,M,s]);return Mi(E!=null,`<Router basename="${d}"> is not able to match the URL "${p}${x}${_}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ie.createElement(si.Provider,{value:h},ie.createElement(cc.Provider,{children:e,value:E}))}var Xl="get",$l="application/x-www-form-urlencoded";function uc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function x_(r){return uc(r)&&r.tagName.toLowerCase()==="button"}function __(r){return uc(r)&&r.tagName.toLowerCase()==="form"}function y_(r){return uc(r)&&r.tagName.toLowerCase()==="input"}function S_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function M_(r,e){return r.button===0&&(!e||e==="_self")&&!S_(r)}var yl=null;function E_(){if(yl===null)try{new FormData(document.createElement("form"),0),yl=!1}catch{yl=!0}return yl}var w_=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ed(r){return r!=null&&!w_.has(r)?(Mi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${$l}"`),null):r}function T_(r,e){let t,s,o,l,u;if(__(r)){let d=r.getAttribute("action");s=d?nr(d,e):null,t=r.getAttribute("method")||Xl,o=ed(r.getAttribute("enctype"))||$l,l=new FormData(r)}else if(x_(r)||y_(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||d.getAttribute("action");if(s=h?nr(h,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||Xl,o=ed(r.getAttribute("formenctype"))||ed(d.getAttribute("enctype"))||$l,l=new FormData(d,r),!E_()){let{name:p,type:x,value:_}=r;if(x==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,_)}}else{if(uc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Xl,s=null,o=$l,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Uf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function b_(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&nr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function A_(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function C_(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function R_(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await A_(l,t);return u.links?u.links():[]}return[]}));return N_(s.flat(1).filter(C_).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function bm(r,e,t,s,o,l){let u=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,d=(h,p)=>t[p].pathname!==h.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==h.params["*"];return l==="assets"?e.filter((h,p)=>u(h,p)||d(h,p)):l==="data"?e.filter((h,p)=>{let x=s.routes[h.route.id];if(!x||!x.hasLoader)return!1;if(u(h,p)||d(h,p))return!0;if(h.route.shouldRevalidate){let _=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function P_(r,e,{includeHydrateFallback:t}={}){return L_(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function L_(r){return[...new Set(r)]}function D_(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function N_(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(D_(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Gg(){let r=ie.useContext(ia);return Uf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function I_(){let r=ie.useContext(lc);return Uf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ff=ie.createContext(void 0);Ff.displayName="FrameworkContext";function Wg(){let r=ie.useContext(Ff);return Uf(r,"You must render this element inside a <HydratedRouter> element"),r}function U_(r,e){let t=ie.useContext(Ff),[s,o]=ie.useState(!1),[l,u]=ie.useState(!1),{onFocus:d,onBlur:h,onMouseEnter:p,onMouseLeave:x,onTouchStart:_}=e,v=ie.useRef(null);ie.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let b=S=>{S.forEach(C=>{u(C.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),ie.useEffect(()=>{if(s){let b=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(b)}}},[s]);let M=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Va(d,M),onBlur:Va(h,E),onMouseEnter:Va(p,M),onMouseLeave:Va(x,E),onTouchStart:Va(_,M)}]:[!1,v,{}]}function Va(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function F_({page:r,...e}){let{router:t}=Gg(),s=ie.useMemo(()=>Ag(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?ie.createElement(k_,{page:r,matches:s,...e}):null}function O_(r){let{manifest:e,routeModules:t}=Wg(),[s,o]=ie.useState([]);return ie.useEffect(()=>{let l=!1;return R_(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function k_({page:r,matches:e,...t}){let s=Fr(),{manifest:o,routeModules:l}=Wg(),{basename:u}=Gg(),{loaderData:d,matches:h}=I_(),p=ie.useMemo(()=>bm(r,e,h,o,s,"data"),[r,e,h,o,s]),x=ie.useMemo(()=>bm(r,e,h,o,s,"assets"),[r,e,h,o,s]),_=ie.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,b=!1;if(e.forEach(S=>{let C=o.routes[S.route.id];!C||!C.hasLoader||(!p.some(N=>N.route.id===S.route.id)&&S.route.id in d&&l[S.route.id]?.shouldRevalidate||C.hasClientLoader?b=!0:E.add(S.route.id))}),E.size===0)return[];let y=b_(r,u,"data");return b&&E.size>0&&y.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[y.pathname+y.search]},[u,d,s,o,p,e,r,l]),v=ie.useMemo(()=>P_(x,o),[x,o]),M=O_(x);return ie.createElement(ie.Fragment,null,_.map(E=>ie.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>ie.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:b})=>ie.createElement("link",{key:E,nonce:t.nonce,...b})))}function B_(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var z_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{z_&&(window.__reactRouterVersion="7.11.0")}catch{}function V_({basename:r,children:e,unstable_useTransitions:t,window:s}){let o=ie.useRef();o.current==null&&(o.current=Mx({window:s,v5Compat:!0}));let l=o.current,[u,d]=ie.useState({action:l.action,location:l.location}),h=ie.useCallback(p=>{t===!1?d(p):ie.startTransition(()=>d(p))},[t]);return ie.useLayoutEffect(()=>l.listen(h),[l,h]),ie.createElement(v_,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:t})}var jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xg=ie.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,state:d,target:h,to:p,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E){let{basename:b,unstable_useTransitions:y}=ie.useContext(si),S=typeof p=="string"&&jg.test(p),C=Ig(p,b);p=C.to;let N=n_(p,{relative:o}),[L,B,k]=U_(s,M),z=j_(p,{replace:u,state:d,target:h,preventScrollReset:x,relative:o,viewTransition:_,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function T(Q){e&&e(Q),Q.defaultPrevented||z(Q)}let D=ie.createElement("a",{...M,...k,href:C.absoluteURL||N,onClick:C.isExternal||l?e:T,ref:B_(E,B),target:h,"data-discover":!S&&t==="render"?"true":void 0});return L&&!S?ie.createElement(ie.Fragment,null,D,ie.createElement(F_,{page:N})):D});Xg.displayName="Link";var H_=ie.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:d,children:h,...p},x){let _=ao(u,{relative:p.relative}),v=Fr(),M=ie.useContext(lc),{navigator:E,basename:b}=ie.useContext(si),y=M!=null&&K_(_)&&d===!0,S=E.encodeLocation?E.encodeLocation(_).pathname:_.pathname,C=v.pathname,N=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(C=C.toLowerCase(),N=N?N.toLowerCase():null,S=S.toLowerCase()),N&&b&&(N=nr(N,b)||N);const L=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let B=C===S||!o&&C.startsWith(S)&&C.charAt(L)==="/",k=N!=null&&(N===S||!o&&N.startsWith(S)&&N.charAt(S.length)==="/"),z={isActive:B,isPending:k,isTransitioning:y},T=B?e:void 0,D;typeof s=="function"?D=s(z):D=[s,B?"active":null,k?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let Q=typeof l=="function"?l(z):l;return ie.createElement(Xg,{...p,"aria-current":T,className:D,ref:x,style:Q,to:u,viewTransition:d},typeof h=="function"?h(z):h)});H_.displayName="NavLink";var G_=ie.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=Xl,action:d,onSubmit:h,relative:p,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:b}=ie.useContext(si),y=q_(),S=Y_(d,{relative:p}),C=u.toLowerCase()==="get"?"get":"post",N=typeof d=="string"&&jg.test(d),L=B=>{if(h&&h(B),B.defaultPrevented)return;B.preventDefault();let k=B.nativeEvent.submitter,z=k?.getAttribute("formmethod")||u,T=()=>y(k||B.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:l,relative:p,preventScrollReset:x,viewTransition:_,unstable_defaultShouldRevalidate:v});b&&t!==!1?ie.startTransition(()=>T()):T()};return ie.createElement("form",{ref:E,method:C,action:S,onSubmit:s?h:L,...M,"data-discover":!N&&r==="render"?"true":void 0})});G_.displayName="Form";function W_(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $g(r){let e=ie.useContext(ia);return rn(e,W_(r)),e}function j_(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:d,unstable_useTransitions:h}={}){let p=zg(),x=Fr(),_=ao(r,{relative:l});return ie.useCallback(v=>{if(M_(v,e)){v.preventDefault();let M=t!==void 0?t:Ja(x)===Ja(_),E=()=>p(r,{replace:M,state:s,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:d});h?ie.startTransition(()=>E()):E()}},[x,p,_,t,s,e,r,o,l,u,d,h])}var X_=0,$_=()=>`__${String(++X_)}__`;function q_(){let{router:r}=$g("useSubmit"),{basename:e}=ie.useContext(si),t=h_(),s=r.fetch,o=r.navigate;return ie.useCallback(async(l,u={})=>{let{action:d,method:h,encType:p,formData:x,body:_}=T_(l,e);if(u.navigate===!1){let v=u.fetcherKey||$_();await s(v,t,u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:x,body:_,formMethod:u.method||h,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||d,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:x,body:_,formMethod:u.method||h,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function Y_(r,{relative:e}={}){let{basename:t}=ie.useContext(si),s=ie.useContext(sr);rn(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...ao(r||".",{relative:e})},u=Fr();if(r==null){l.search=u.search;let d=new URLSearchParams(l.search),h=d.getAll("index");if(h.some(x=>x==="")){d.delete("index"),h.filter(_=>_).forEach(_=>d.append("index",_));let x=d.toString();l.search=x?`?${x}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ji([t,l.pathname])),Ja(l)}function K_(r,{relative:e}={}){let t=ie.useContext(Fg);rn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$g("useViewTransitionState"),o=ao(r,{relative:e});if(!t.isTransitioning)return!1;let l=nr(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=nr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return ec(o.pathname,u)!=null||ec(o.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Dt=(r,e)=>{const t=ie.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:d="",children:h,...p},x)=>ie.createElement("svg",{ref:x,...Z_,width:o,height:o,stroke:s,strokeWidth:u?Number(l)*24/Number(o):l,className:["lucide",`lucide-${Q_(r)}`,d].join(" "),...p},[...e.map(([_,v])=>ie.createElement(_,v)),...Array.isArray(h)?h:[h]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Dt("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=Dt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Dt("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Dt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Dt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Dt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Dt("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Dt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=Dt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Dt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Dt("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Of=Dt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Dt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Dt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Dt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Dt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Dt("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Dt("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Dt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Dt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Dt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=Dt("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=Dt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=Dt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=Dt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=Dt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=Dt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=Dt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=Dt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=Dt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),Ey=()=>{const[r,e]=ie.useState(null),t=[{icon:oy,title:"Started B.Tech",date:"2024",description:"Embarked on my CSE journey, diving deep into programming fundamentals and algorithmic problem solving.",color:"cyan",gradient:"from-cyan-500/20 to-blue-500/20",activeGradient:"from-cyan-500 to-blue-500"},{icon:eo,title:"Fitness Tracker",date:"2025",description:"Developed a comprehensive fitness tracking application with React and Firebase, featuring real-time data visualization.",color:"green",gradient:"from-green-500/20 to-emerald-500/20",activeGradient:"from-green-500 to-emerald-500"},{icon:qg,title:"ML Course",date:"2025",description:"Mastered machine learning concepts including neural networks, deep learning frameworks, and AI deployment.",color:"pink",gradient:"from-pink-500/20 to-rose-500/20",activeGradient:"from-pink-500 to-rose-500"},{icon:ey,title:"ScaleTech Intern",date:"2025",description:"Real-world software development with cutting-edge technologies, focusing on scalable systems and routing algorithms.",color:"purple",gradient:"from-purple-500/20 to-fuchsia-500/20",activeGradient:"from-purple-500 to-fuchsia-500"}];return R.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 h-auto md:h-[450px] flex flex-col md:flex-row gap-4 relative z-10",children:[t.map((s,o)=>{const l=s.icon,u=r===o||r===null&&o===0;return R.jsxs("div",{onMouseEnter:()=>e(o),onMouseLeave:()=>e(null),className:`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] cursor-pointer flex flex-col justify-end p-6 md:p-8 min-h-[160px]
              ${u?"md:flex-[3] bg-gray-800":"md:flex-[1] bg-gray-900/50 hover:bg-gray-800/80"}
              border border-gray-700/50 backdrop-blur-sm group`,style:{animation:`fadeInUp 0.6s ease-out ${o*.1}s both`},children:[R.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${u?s.activeGradient:s.gradient} opacity-20 transition-opacity duration-700`}),R.jsxs("div",{className:"relative z-10 flex flex-col h-full justify-between",children:[R.jsxs("div",{className:"flex justify-between items-start mb-12 md:mb-0",children:[R.jsx("div",{className:`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 
                  ${u?`bg-gradient-to-br ${s.activeGradient} text-white shadow-lg`:"bg-gray-800 text-gray-400"}
                `,children:R.jsx(l,{className:"w-6 h-6 md:w-7 md:h-7"})}),R.jsx("span",{className:`font-mono font-bold text-sm md:text-base px-4 py-1 rounded-full border transition-all duration-500 whitespace-nowrap
                  ${u?"border-white/30 text-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)]":"border-gray-700 text-gray-500 bg-gray-800/50"}
                `,children:s.date})]}),R.jsxs("div",{className:"mt-auto relative h-[80px] md:h-[100px]",children:[R.jsx("div",{className:`hidden md:block absolute bottom-0 left-0 transition-all duration-500 transform origin-left
                  ${u?"opacity-0 scale-95 translate-y-4 pointer-events-none":"opacity-100 scale-100 translate-y-0 -rotate-90 origin-bottom-left whitespace-nowrap bottom-[60px] left-[10px]"}
                `,children:R.jsx("h3",{className:"text-xl font-bold text-gray-400 tracking-widest uppercase",children:s.title})}),R.jsxs("div",{className:`transition-all duration-700 absolute bottom-0 left-0 right-0 ${u?"opacity-100 translate-y-0":"opacity-0 translate-y-8 pointer-events-none"}`,children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 whitespace-nowrap",children:s.title}),R.jsx("p",{className:"text-gray-300 text-sm md:text-base leading-relaxed max-w-md line-clamp-2 md:line-clamp-3",children:s.description})]})]})]})]},o)}),R.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}})]})},wy=()=>{const[r,e]=ie.useState(""),t="Transforming ideas into intelligent solutions",s=zg(),o=l=>{s(`/#${l}`)};return ie.useEffect(()=>{let l=0;const u=()=>{l<t.length&&(e(t.slice(0,l+1)),l++,setTimeout(u,100))};setTimeout(u,1e3)},[]),R.jsxs(R.Fragment,{children:[R.jsxs("section",{className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden",children:[R.jsxs("div",{className:"relative z-10 text-center px-4 max-w-4xl mx-auto",children:[R.jsxs("div",{className:"mb-8",children:[R.jsx("h3",{className:"text-5xl md:text-7xl font-bold mb-4 gradient-text",children:"KIAH MANDALIYA"}),R.jsx("div",{className:"h-12 flex items-center justify-center",children:R.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 font-light",children:[r,R.jsx("span",{className:"inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"})]})})]}),R.jsxs("div",{className:"flex justify-center gap-8 mb-12",children:[R.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[R.jsx(eo,{className:"w-6 h-6"}),R.jsx("span",{className:"hidden md:inline",children:"Developer"})]}),R.jsxs("div",{className:"flex items-center gap-2 text-purple-400",children:[R.jsx(Yg,{className:"w-6 h-6"}),R.jsx("span",{className:"hidden md:inline",children:"Engineer"})]}),R.jsxs("div",{className:"flex items-center gap-2 text-green-400",children:[R.jsx(ss,{className:"w-6 h-6"}),R.jsx("span",{className:"hidden md:inline",children:"Innovator"})]})]}),R.jsxs("div",{className:"flex justify-center gap-4",children:[R.jsx("button",{className:"glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105",onClick:()=>{const l=document.createElement("a");l.href="/Kiah_Resume.pdf",l.download="Kiah_Resume.pdf",l.click()},children:"Download Resume"}),R.jsx("button",{className:"glow-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300",onClick:()=>o("contact"),children:"Get In Touch"})]})]}),R.jsx("div",{className:"absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-20",onClick:()=>document.getElementById("hero-timeline")?.scrollIntoView({behavior:"smooth"}),children:R.jsx(ny,{className:"w-8 h-8 text-cyan-400"})})]}),R.jsxs("section",{id:"hero-timeline",className:"relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-12 md:py-20 bg-gray-900/20",children:[R.jsxs("div",{className:"text-center mb-8 md:mb-16 relative z-10 w-full px-4",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"My Journey"}),R.jsx("p",{className:"text-xl text-gray-400",children:"The path of continuous learning and building."})]}),R.jsx(Ey,{})]})]})},Ty=()=>{const r=ie.useRef(null);ie.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".project-item").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Truck Routing Optimization Web App",description:"A full-stack web application designed to solve the Vehicle Routing Problem using machine learning and routing algorithms.",image:"/routing.png",icon:fy,techStack:["ReactJS","Python (FastAPI)","PostgreSQL","OR-Tools","KMeans","OSRM"],features:["Uses KMeans clustering to strategically group destinations","Integrates OSRM for accurate real-world distances","Solves the complex Vehicle Routing Problem utilizing OR-Tools"],color:"cyan",github:"https://github.com/kiahcodes/VehicleRoutingReactFastAPI.git",live:"#"},{id:2,title:"Numerology Calculator",description:"A logic-based calculator that computes various numerological numbers based on Chaldean numerology principles.",image:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",icon:ty,techStack:["C"],features:["Calculates Birth Number securely and instantly","Generates Life Path Number based on exact date inputs","Computes Personality Number adhering to Chaldean numerology"],color:"purple",github:"#",live:"#"},{id:3,title:"Shopping Website",description:"A responsive clothing e-commerce website with a strong focus on navigation and highly interactive UI/UX elements.",image:"https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",icon:xy,techStack:["HTML","CSS","JavaScript"],features:["Fully responsive clothing showcase layout","Interactive sign-in and sign-up toggle system","Optimized UI/UX tailored for smooth intuitive navigation"],color:"green",github:"#",live:"#"},{id:4,title:"Fitness Tracking Website",description:"A workout planning platform enabling users to track metrics and plan their fitness journeys seamlessly.",image:"https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",icon:ay,techStack:["HTML","CSS","JavaScript"],features:["Comprehensive workout planning and tracking platform","Integrated BMI calculator for personalized metric monitoring","Secure user authentication feature"],color:"orange",github:"#",live:"#"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"};case"purple":return{border:"border-purple-400",text:"text-purple-400",check:"bg-purple-400",btn:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400"};case"green":return{border:"border-green-400",text:"text-green-400",check:"bg-green-400",btn:"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400"};case"orange":return{border:"border-orange-400",text:"text-orange-400",check:"bg-orange-400",btn:"bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400"};default:return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"}}};return R.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:R.jsxs("div",{className:"max-w-6xl mx-auto",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Featured Projects"}),R.jsx("div",{className:"grid gap-8 md:gap-12",children:e.map((s,o)=>{const l=t(s.color);return R.jsxs("div",{className:`project-item fade-up grid md:grid-cols-2 gap-8 items-center ${o%2===1?"md:grid-flow-dense":""}`,style:{animationDelay:`${o*.2}s`},children:[R.jsxs("div",{className:`relative overflow-hidden rounded-2xl ${o%2===1?"md:col-start-2":""}`,children:[R.jsx("img",{src:s.image,alt:s.title,className:"w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"}),R.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),R.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:R.jsxs("div",{className:"flex items-center gap-2 text-white mb-2",children:[R.jsx(s.icon,{className:"w-5 h-5"}),R.jsx("span",{className:"font-semibold",children:s.title})]})})]}),R.jsxs("div",{className:`space-y-6 ${o%2===1?"md:col-start-1":""}`,children:[R.jsxs("div",{children:[R.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:s.title}),R.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description})]}),R.jsxs("div",{children:[R.jsx("h4",{className:`text-lg font-semibold ${l.text} mb-3`,children:"Tech Stack"}),R.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map((u,d)=>R.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${l.border} ${l.text}`,children:u},d))})]}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Features"}),R.jsx("ul",{className:"space-y-2",children:s.features.map((u,d)=>R.jsxs("li",{className:"text-gray-300 flex items-start",children:[R.jsx("span",{className:`w-2 h-2 ${l.check} rounded-full mr-3 mt-2 flex-shrink-0`}),R.jsx("span",{children:u})]},d))})]}),R.jsx("div",{className:"flex gap-4",children:R.jsxs("a",{href:s.github,className:"glow-button flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[R.jsx(Of,{className:"w-5 h-5"}),"Code"]})})]})]},s.id)})})]})})},by=()=>{const r=ie.useRef(null);ie.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".hackathon-card").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Innovate Bharat Hackathon",year:"2026",result:"Finalist",description:"Built an AI-powered mobile app to deeply analyze product labels for ingredient safety and insights.",icon:Sy,contributions:["Implemented robust ingredient extraction and safety insights generation","Enabled personalized analysis targeting explicit allergies and sensitivities","Developed harmful ingredient detection, claim verifications, and safer alternatives","Integrated a responsive conversational chatbot with TTS/STT capabilities"],technologies:["Flutter","FastAPI","AI","TTS/STT"],color:"cyan",github:"https://github.com/kiahcodes/LabelLens-KnowBeforeYouBuy"},{id:2,title:"HackaMined",year:"2026",result:"Participant",description:"Pioneered a smart job market analytics platform leveraging live scraping and actionable insights.",icon:sy,contributions:["Scraped rich live data from LinkedIn and Naukri utilizing BeautifulSoup","Generated crucial insights including market trends, skills gaps, and AI risks","Built a sophisticated RAG-based intelligent chatbot powered by the Ollama API"],technologies:["Python","FastAPI","PostgreSQL","BeautifulSoup","RAG"],color:"purple",github:"https://github.com/kiahcodes/CarrerLens"},{id:3,title:"Smart India Hackathon",year:"2025",result:"Internal Finalist",description:"Developed an accessible conversational RASA chatbot crafted specifically to empower rural communities.",icon:dy,contributions:["Designed custom RASA conversational models tailored for regional context","Successfully integrated the bot with Twilio for widespread SMS and WhatsApp access"],technologies:["Python","FastAPI","RASA","Twilio"],color:"green",github:"https://github.com/kiahcodes/SIH.git"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"};case"purple":return{border:"border-purple-400",text:"text-purple-400",bg:"bg-purple-500/20 text-purple-400",iconBg:"bg-gradient-to-br from-purple-500 to-pink-500"};case"green":return{border:"border-green-400",text:"text-green-400",bg:"bg-green-500/20 text-green-400",iconBg:"bg-gradient-to-br from-green-500 to-emerald-500"};default:return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"}}};return R.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-800/50",children:R.jsxs("div",{className:"max-w-4xl mx-auto",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Hackathons & Achievements"}),R.jsx("div",{className:"space-y-8",children:e.map((s,o)=>{const l=t(s.color);return R.jsxs("div",{className:"hackathon-card fade-up bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group relative overflow-hidden",style:{animationDelay:`${o*.15}s`},children:[R.jsx("div",{className:`absolute -right-8 -top-8 w-24 h-24 rounded-full ${s.color==="cyan"?"bg-cyan-500/5":s.color==="purple"?"bg-purple-500/5":"bg-green-500/5"} blur-2xl group-hover:scale-150 transition-transform duration-700`}),R.jsxs("div",{className:"flex flex-col md:flex-row gap-6 relative z-10",children:[R.jsx("div",{className:"flex-shrink-0",children:R.jsx("div",{className:`w-16 h-16 rounded-xl flex items-center justify-center ${l.iconBg} shadow-lg`,children:R.jsx(s.icon,{className:"w-8 h-8 text-white"})})}),R.jsxs("div",{className:"flex-grow space-y-4",children:[R.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[R.jsxs("div",{children:[R.jsx("h3",{className:"text-2xl font-bold text-white flex items-center gap-3",children:s.title}),R.jsxs("div",{className:"flex flex-wrap gap-3 mt-2",children:[R.jsx("span",{className:"text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm font-semibold",children:s.year}),R.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold border ${l.border} ${l.text}`,children:s.result})]})]}),s.github&&s.github!=="#"&&R.jsxs("a",{href:s.github,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700/40 border border-gray-600 hover:border-${s.color}-400/50 transition-all duration-300 group/github hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]`,children:[R.jsx(Of,{className:`w-5 h-5 ${l.text} group-hover/github:scale-110 transition-transform`}),R.jsx("span",{className:"text-sm font-semibold text-gray-300 group-hover/github:text-white",children:"View Code"})]})]}),R.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-sm font-semibold text-white mb-3 uppercase tracking-wider",children:"Key Contributions"}),R.jsx("ul",{className:"space-y-2",children:s.contributions.map((u,d)=>R.jsxs("li",{className:"text-gray-300 flex items-start text-sm md:text-base",children:[R.jsx(yy,{className:`w-4 h-4 ${l.text} mr-3 mt-1 flex-shrink-0`}),R.jsx("span",{children:u})]},d))})]}),R.jsx("div",{className:"pt-2 border-t border-gray-700 border-dashed",children:R.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:s.technologies.map((u,d)=>R.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${l.bg}`,children:u},d))})})]})]})]},s.id)})})]})})},td=[{label:"Flutter",color:"#378ADD"},{label:"FastAPI",color:"#1D9E75"},{label:"Python",color:"#EF9F27"},{label:"Supabase",color:"#1D9E75"},{label:"Gemini AI",color:"#7F77DD"},{label:"React",color:"#378ADD"},{label:"Java",color:"#D85A30"},{label:"Spring Boot",color:"#639922"},{label:"PostgreSQL",color:"#185FA5"},{label:"Git",color:"#D85A30"},{label:"REST APIs",color:"#7F77DD"},{label:"Riverpod",color:"#378ADD"},{label:"SQL",color:"#185FA5"},{label:"ML Kit",color:"#BA7517"},{label:"BeautifulSoup",color:"#3B6D11"},{label:"GoRouter",color:"#378ADD"},{label:"RAG",color:"#7F77DD"},{label:"Linux",color:"#888780"},{label:"Dart",color:"#378ADD"},{label:"C++",color:"#993C1D"}],Ay=()=>{const r=ie.useRef(null);return ie.useEffect(()=>{const e=r.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const s=e.width,o=e.height,l=s/2,u=o/2,d=180;let h=.3,p=0,x=0,_=.004,v=!1,M=0,E=0,b;const y=td.map((Q,F)=>{const Y=Math.acos(-1+2*F/td.length),te=Math.sqrt(td.length*Math.PI)*Y;return{...Q,phi:Y,theta:te}}),S=(Q,F,Y)=>{const te=Math.cos(h),se=Math.sin(h),J=Math.cos(p),K=Math.sin(p),j=F*te-Y*se,$=F*se+Y*te,ue=Q*J+$*K,he=-Q*K+$*J;return{sx:l+ue,sy:u+j,depth:he}},C=()=>{t.clearRect(0,0,s,o);const Q=y.map(F=>{const Y=d*Math.sin(F.phi)*Math.cos(F.theta),te=d*Math.sin(F.phi)*Math.sin(F.theta),se=d*Math.cos(F.phi),J=S(Y,te,se),K=(J.depth+d)/(2*d),j=.25+.75*K,$=Math.round(10+8*K);return{...F,...J,scale:K,alpha:j,fs:$}});Q.sort((F,Y)=>F.depth-Y.depth),Q.forEach(F=>{t.save(),t.globalAlpha=F.alpha,t.font=`${F.scale>.6?500:400} ${F.fs}px sans-serif`,t.fillStyle=F.color,t.textAlign="center",t.textBaseline="middle",t.fillText(F.label,F.sx,F.sy),t.restore()})},N=()=>{v||(p+=_,h+=x,x*=.97),C(),b=requestAnimationFrame(N)};N();const L=Q=>{v=!0,M=Q.clientX,E=Q.clientY,e.style.cursor="grabbing"},B=Q=>{if(!v)return;const F=Q.clientX-M,Y=Q.clientY-E;p+=F*.008,h+=Y*.008,_=F*.008,x=Y*.008,M=Q.clientX,E=Q.clientY},k=()=>{v=!1,e.style.cursor="grab"},z=Q=>{v=!0,M=Q.touches[0].clientX,E=Q.touches[0].clientY},T=Q=>{if(!v)return;const F=Q.touches[0].clientX-M,Y=Q.touches[0].clientY-E;p+=F*.008,h+=Y*.008,_=F*.008,x=Y*.008,M=Q.touches[0].clientX,E=Q.touches[0].clientY},D=()=>{v=!1};return e.addEventListener("mousedown",L),window.addEventListener("mousemove",B),window.addEventListener("mouseup",k),e.addEventListener("touchstart",z,{passive:!1}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",D),()=>{cancelAnimationFrame(b),e.removeEventListener("mousedown",L),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",k),e.removeEventListener("touchstart",z),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",D)}},[]),R.jsx("div",{style:{padding:"1rem 0",textAlign:"center",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:R.jsx("canvas",{ref:r,width:520,height:420,style:{cursor:"grab",maxWidth:"100%",display:"block",margin:"0 auto"}})})},Cy=()=>{const r=[{name:"C/C++ Programming",color:"#00D4FF"},{name:"HTML/CSS",color:"#8B5CF6"},{name:"JavaScript",color:"#00FF94"},{name:"React.js",color:"#F97316"},{name:"Python",color:"#EF4444"},{name:"Machine Learning",color:"#10B981"},{name:"Git/GitHub",color:"#3B82F6"},{name:"Node.js",color:"#8B5CF6"},{name:"SQL",color:"#00D4FF"},{name:"MongoDB",color:"#00FF94"},{name:"FastAPI",color:"#F97316"},{name:"Java",color:"#EF4444"},{name:"DSA",color:"#10B981"},{name:"Flutter",color:"#3B82F6"},{name:"n8n",color:"#8B5CF6"}];return R.jsx("section",{className:"py-20 px-4 bg-gray-800/50",children:R.jsxs("div",{className:"max-w-6xl mx-auto",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Technical Arsenal"}),R.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-12",children:[R.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center relative min-h-[450px]",children:R.jsx(Ay,{})}),R.jsx("div",{className:"w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4",children:r.map((e,t)=>R.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover-lift border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center h-full",style:{animationDelay:`${t*.1}s`},children:[R.jsx("div",{className:"w-12 h-12 mb-3 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0",style:{backgroundColor:`${e.color}20`,color:e.color},children:e.name.charAt(0)}),R.jsx("h4",{className:"text-sm font-medium text-white break-words w-full",children:e.name})]},t))})]})]})})},Ry=()=>{const r=ie.useRef(null);ie.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".explore-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:_y,title:"Competitive programming",description:"Solving algorithmic problems to improve problem-solving skills",status:"Practicing",color:"cyan",progress:60},{icon:gy,title:"Agentic AI",description:"Developing intelligent agents that can perform tasks autonomously",status:"Practicing",color:"purple",progress:70},{icon:eo,title:"RAG",description:"Making AI answers more reliable by combining relevant information with LLMs.",status:"Practicing",color:"blue",progress:75},{icon:eo,title:"MCP",description:"Model Context Protocol enables tools and services to be connected to LLMs",status:"Exploring",color:"green",progress:50},{icon:ry,title:"Cloud Computing",description:"Learning AWS services and cloud architecture patterns",status:"Interested",color:"orange",progress:30},{icon:ss,title:"LangChain",description:"LangChain is a framework for developing applications powered by language models",status:"Interested",color:"pink",progress:20}];return R.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:R.jsxs("div",{className:"max-w-6xl mx-auto",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Current Explorations"}),R.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"The journey never stops. Here's what I'm diving into next to expand my technical horizons."})]}),R.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((t,s)=>R.jsxs("div",{className:"explore-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group",style:{animationDelay:`${s*.1}s`},children:[R.jsxs("div",{className:"flex items-center justify-between mb-4",children:[R.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:R.jsx(t.icon,{className:"w-6 h-6"})}),R.jsx("span",{className:`text-xs font-semibold px-3 py-1 rounded-full ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:t.status})]}),R.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:t.title}),R.jsx("p",{className:"text-gray-300 text-sm mb-4",children:t.description}),R.jsxs("div",{className:"space-y-2",children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("span",{className:"text-xs text-gray-400",children:"Progress"}),R.jsxs("span",{className:"text-xs text-gray-400",children:[t.progress,"%"]})]}),R.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:R.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ease-out ${t.color==="cyan"?"bg-gradient-to-r from-cyan-500 to-cyan-400":t.color==="purple"?"bg-gradient-to-r from-purple-500 to-purple-400":t.color==="green"?"bg-gradient-to-r from-green-500 to-green-400":t.color==="orange"?"bg-gradient-to-r from-orange-500 to-orange-400":t.color==="pink"?"bg-gradient-to-r from-pink-500 to-pink-400":"bg-gradient-to-r from-blue-500 to-blue-400"}`,style:{width:`${t.progress}%`}})})]})]},s))}),R.jsx("div",{className:"mt-16 text-center",children:R.jsxs("div",{className:"inline-flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700",children:[R.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),R.jsx("span",{className:"text-gray-300",children:"Currently learning React Native & Backend APIs"})]})})]})})},Py=()=>{const[r,e]=ie.useState(0),[t,s]=ie.useState(""),[o,l]=ie.useState(!0),[u,d]=ie.useState(!1),h=ie.useRef(null),p=ie.useRef(null),x=["$ cd /career/internships","$ ls -la","ScaleTech-2025/","$ cd ScaleTech-2025","$ cat experience.txt","Software Development Intern","Technologies: React, FastAPI, PostgreSQL","Duration: 1 month","Achievements: Built a logistics route optimization system solving real-world delivery inefficiencies"];ie.useEffect(()=>{const E=new IntersectionObserver(b=>{b.forEach(y=>{y.isIntersecting&&_()})},{threshold:.5});return h.current&&E.observe(h.current),()=>E.disconnect()},[]);const _=()=>{let E=0,b=0;const y=()=>{if(E<x.length){const S=x[E];b<S.length?(s(S.slice(0,b+1)),b++,setTimeout(y,50)):setTimeout(()=>{E++,b=0,e(E),E<x.length&&y()},1e3)}};y()};ie.useEffect(()=>{const E=setInterval(()=>{l(b=>!b)},500);return()=>clearInterval(E)},[]),ie.useEffect(()=>{const E=b=>{b.key==="Escape"&&M()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);const v=()=>{d(!0),document.body.style.overflow="hidden"},M=()=>{d(!1),document.body.style.overflow="",p.current&&(p.current.pause(),p.current.currentTime=0)};return R.jsxs(R.Fragment,{children:[R.jsx("section",{ref:h,className:"py-20 px-4 bg-gray-800/50",children:R.jsxs("div",{className:"max-w-6xl mx-auto",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Professional Experience"}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[R.jsxs("div",{className:"terminal",children:[R.jsxs("div",{className:"terminal-header",children:[R.jsx("div",{className:"terminal-dot red"}),R.jsx("div",{className:"terminal-dot yellow"}),R.jsx("div",{className:"terminal-dot green"}),R.jsx("span",{className:"text-gray-400 text-sm ml-4",children:"kiah@scaletech:~"})]}),R.jsxs("div",{className:"p-6 font-mono text-sm space-y-2 min-h-96",children:[x.slice(0,r).map((E,b)=>R.jsx("div",{className:"flex items-center",children:E.startsWith("$")?R.jsx("span",{className:"text-green-400",children:E}):R.jsx("span",{className:"text-gray-300 pl-2",children:E})},b)),R.jsx("div",{className:"flex items-center",children:R.jsxs("span",{className:"text-green-400",children:[t,o&&R.jsx("span",{className:"text-cyan-400",children:"|"})]})})]})]}),R.jsxs("div",{className:"space-y-8",children:[R.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700",children:[R.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[R.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center",children:R.jsx(Kg,{className:"w-8 h-8 text-white"})}),R.jsxs("div",{children:[R.jsx("h3",{className:"text-2xl font-bold text-white",children:"ScaleTech"}),R.jsx("p",{className:"text-cyan-400 font-semibold",children:"Software Development Intern"})]})]}),R.jsx("div",{className:"grid grid-cols-2 gap-4 mb-6",children:R.jsxs("div",{className:"bg-gray-700/50 rounded-lg p-4",children:[R.jsx(eo,{className:"w-6 h-6 text-cyan-400 mb-2"}),R.jsx("p",{className:"text-white font-semibold",children:"Technologies"}),R.jsx("p",{className:"text-gray-300 text-sm",children:"React, FastAPI, PostgreSQL"})]})}),R.jsxs("div",{className:"space-y-4",children:[R.jsx("h4",{className:"text-lg font-semibold text-white",children:"Key Achievements"}),R.jsxs("ul",{className:"space-y-2",children:[R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),R.jsx("span",{className:"text-gray-300",children:"Built a logistics route optimization system solving real-world delivery inefficiencies"})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),R.jsx("span",{className:"text-gray-300",children:"Integrated OSRM for accurate real-world road distance calculations"})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),R.jsx("span",{className:"text-gray-300",children:"Developed dynamic React dashboard for customer management and route visualization"})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),R.jsx("span",{className:"text-gray-300",children:"Enabled CSV upload and real-time data processing for scalability"})]}),R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),R.jsx("span",{className:"text-gray-300",children:"Improved delivery planning efficiency for multi-truck operations"})]})]})]})]}),R.jsx("div",{className:"text-center",children:R.jsxs("button",{id:"project-demo-btn",onClick:v,className:"inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer",children:[R.jsx(py,{className:"w-5 h-5"}),"Project Demo"]})})]})]})]})}),u&&R.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.85)",backdropFilter:"blur(6px)"},onClick:M,children:R.jsxs("div",{className:"relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl border border-gray-700",style:{backgroundColor:"#0d1117"},onClick:E=>E.stopPropagation(),children:[R.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700",children:[R.jsx("span",{className:"text-white font-semibold text-sm",children:"Truck Route Planner"}),R.jsx("button",{onClick:M,className:"text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700","aria-label":"Close",children:R.jsx(My,{className:"w-5 h-5"})})]}),R.jsx("video",{ref:p,src:"/demo.mp4",controls:!0,autoPlay:!0,className:"w-full",style:{maxHeight:"70vh",background:"#000"},children:"Your browser does not support the video tag."})]})})]})},Ly=()=>{const[r,e]=ie.useState(0),[t,s]=ie.useState(!1),[o,l]=ie.useState(!1),u=ie.useRef(null),d=ie.useRef(null),h=[{id:"tinyml",icon:Yg,title:"TinyML",subtitle:"Edge AI Deployment",description:"Exploring the deployment of machine learning models on resource-constrained edge devices for low-latency, offline inference. Focusing on model quantization, pruning, and optimization for microcontrollers.",tags:["TensorFlow Lite","Edge Computing","IoT","C++"],bgGradientRight:"bg-gradient-to-r from-cyan-400 to-blue-500",bgGradientBR:"bg-gradient-to-br from-cyan-400 to-blue-500",textGradient:"bg-gradient-to-r from-cyan-400 to-blue-500",glow:"shadow-cyan-500/50",accent:"bg-cyan-500"},{id:"iomt",icon:vy,title:"IoMT Attack Detection",subtitle:"Intrusion Detection",description:"Developed 1D CNN models to detect and mitigate cyber attacks on Internet of Medical Things (IoMT) devices. .",tags:["CNNs","Cybersecurity","Network Analysis","Python"],bgGradientRight:"bg-gradient-to-r from-purple-400 to-pink-500",bgGradientBR:"bg-gradient-to-br from-purple-400 to-pink-500",textGradient:"bg-gradient-to-r from-purple-400 to-pink-500",glow:"shadow-purple-500/50",accent:"bg-purple-500"},{id:"eeg",icon:qg,title:"EEG Analysis",subtitle:"Sleep Apnea Detection",description:"Studying and analyzing EEG (Electroencephalogram) signals to detect and classify sleep apnea patterns using deep learning techniques.",tags:["Signal Processing","Deep Learning","PyTorch","Biomedical Data"],bgGradientRight:"bg-gradient-to-r from-blue-400 to-indigo-500",bgGradientBR:"bg-gradient-to-br from-blue-400 to-indigo-500",textGradient:"bg-gradient-to-r from-blue-400 to-indigo-500",glow:"shadow-blue-500/50",accent:"bg-blue-500"}];return ie.useEffect(()=>{const p=new IntersectionObserver(x=>{x[0].isIntersecting&&l(!0)},{threshold:.2});return u.current&&p.observe(u.current),()=>p.disconnect()},[]),ie.useEffect(()=>(!t&&o&&(d.current=setInterval(()=>{e(p=>(p+1)%h.length)},5e3)),()=>{d.current&&clearInterval(d.current)}),[t,o,h.length]),R.jsxs("section",{ref:u,className:"py-24 px-4 bg-gray-950 relative overflow-hidden",children:[R.jsx("div",{className:"absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none",children:R.jsx("div",{className:`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-1000 ${h[r].bgGradientBR}`})}),R.jsxs("div",{className:`max-w-6xl mx-auto relative z-10 transition-all duration-1000 transform ${o?"translate-y-0 opacity-100":"translate-y-12 opacity-0"}`,children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsxs("h2",{className:"text-4xl md:text-5xl font-bold mb-4 inline-flex items-center gap-3",children:[R.jsx(J_,{className:"w-8 h-8 text-cyan-400"}),R.jsx("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500",children:"Research & Development"})]}),R.jsx("p",{className:"text-xl text-gray-400 max-w-2xl mx-auto",children:"Interactive exploration of my current academic and technical research focus areas."})]}),R.jsxs("div",{className:"bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative",onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),children:[R.jsx("div",{className:`absolute top-0 left-0 w-full h-1 ${h[r].bgGradientRight} transition-all duration-700`}),R.jsxs("div",{className:"lg:w-1/3 bg-gray-900/80 border-b lg:border-b-0 lg:border-r border-gray-800 p-6 flex flex-col gap-4 relative z-10",children:[R.jsxs("div",{className:"flex items-center gap-2 mb-2 px-2 text-gray-500 text-sm font-mono uppercase tracking-widest",children:[R.jsx(Kg,{className:"w-4 h-4"}),R.jsx("span",{children:"Select Topic"})]}),h.map((p,x)=>{const _=x===r,v=p.icon;return R.jsxs("button",{onClick:()=>e(x),className:`relative w-full text-left p-5 rounded-2xl transition-all duration-300 group overflow-hidden ${_?"bg-gray-800 border-gray-700 shadow-lg":"hover:bg-gray-800/50 border-transparent hover:border-gray-700/50"} border`,children:[_&&!t&&R.jsx("div",{className:`absolute bottom-0 left-0 h-1 ${p.bgGradientRight} w-full origin-left animate-[progress_5s_linear]`}),R.jsxs("div",{className:"relative z-10 flex items-center justify-between",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${_?`${p.bgGradientBR} text-white shadow-lg ${p.glow} scale-110`:"bg-gray-800 text-gray-400 group-hover:text-gray-200"}`,children:R.jsx(v,{className:"w-6 h-6"})}),R.jsx("div",{children:R.jsx("h3",{className:`font-bold text-lg transition-colors ${_?"text-white":"text-gray-400 group-hover:text-gray-200"}`,children:p.title})})]}),R.jsx(iy,{className:`w-5 h-5 transition-all duration-300 ${_?"text-white translate-x-0 opacity-100":"text-gray-600 -translate-x-4 opacity-0"}`})]})]},p.id)})]}),R.jsxs("div",{className:"lg:w-2/3 p-8 lg:p-12 min-h-[420px] flex items-center relative overflow-hidden bg-gray-950/50",children:[R.jsx("div",{className:"absolute -right-10 -bottom-10 opacity-5 pointer-events-none transform -rotate-12 transition-all duration-1000 scale-150",children:mx.createElement(h[r].icon,{size:400})}),R.jsxs("div",{className:"w-full relative z-10 animate-[fadeIn_0.5s_ease-out_forwards]",children:[R.jsx("div",{className:"inline-block mb-4 px-4 py-1.5 rounded-full bg-gray-800/80 border border-gray-700 shadow-inner",children:R.jsx("span",{className:`text-sm font-bold bg-clip-text text-transparent ${h[r].textGradient}`,children:h[r].subtitle})}),R.jsx("h3",{className:"text-3xl md:text-5xl font-bold text-white mb-6 leading-tight",children:h[r].title}),R.jsx("p",{className:"text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl",children:h[r].description}),R.jsxs("div",{children:[R.jsx("h4",{className:"text-sm font-bold text-gray-500 uppercase tracking-widest mb-4",children:"Key Technologies & Concepts"}),R.jsx("div",{className:"flex flex-wrap gap-3",children:h[r].tags.map((p,x)=>R.jsxs("span",{className:"px-4 py-2 bg-gray-900 border border-gray-700/80 rounded-xl text-gray-300 text-sm font-medium flex items-center gap-2 hover:border-gray-500 transition-colors cursor-default",style:{animation:`fadeInUp 0.4s ease-out ${x*.1}s forwards`,opacity:0},children:[R.jsx("div",{className:`w-2 h-2 rounded-full ${h[r].accent} shadow-[0_0_8px_rgba(255,255,255,0.4)]`}),p]},p))})]})]},r)]})]}),R.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(15px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}})]})]})},Dy=()=>{const r=ie.useRef(null);ie.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".contact-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:Of,name:"GitHub",url:"https://github.com/kiahcodes",color:"text-gray-400 hover:text-white",bgColor:"hover:bg-gray-800"},{icon:ly,name:"LinkedIn",url:"https://www.linkedin.com/in/kiah-mandaliya/",color:"text-blue-400 hover:text-blue-300",bgColor:"hover:bg-blue-500/20"}];return R.jsxs("section",{ref:r,className:"py-20 px-4 bg-gray-900 relative overflow-hidden",children:[R.jsxs("div",{className:"absolute inset-0 opacity-10",children:[R.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"}),R.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),R.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[R.jsxs("div",{className:"text-center mb-16",children:[R.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Let's Connect"}),R.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!"})]}),R.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[R.jsxs("div",{className:"contact-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[R.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Send a Message"}),R.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",className:"space-y-6",children:[R.jsx("input",{type:"hidden",name:"access_key",value:"ca4286d4-dc11-425f-9662-7d08345193af"}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Name"}),R.jsx("input",{type:"text",name:"name",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your name"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Email Address"}),R.jsx("input",{type:"email",name:"email",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your email"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),R.jsx("textarea",{name:"message",required:!0,rows:4,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white resize-none",placeholder:"Write your message..."})]}),R.jsxs("button",{type:"submit",className:"glow-button w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",children:[R.jsx(my,{className:"w-5 h-5"}),"Send Message"]})]})]}),R.jsxs("div",{className:"contact-item fade-up space-y-8",style:{animationDelay:"0.2s"},children:[R.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[R.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get in Touch"}),R.jsxs("div",{className:"space-y-4",children:[R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center",children:R.jsx(cy,{className:"w-6 h-6 text-cyan-400"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-gray-300",children:"Email"}),R.jsx("p",{className:"text-white font-semibold",children:"kiahdmandaliya@gmail.com"})]})]}),R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center",children:R.jsx(hy,{className:"w-6 h-6 text-green-400"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-gray-300",children:"Phone"}),R.jsx("p",{className:"text-white font-semibold",children:"+91 8140800042"})]})]}),R.jsxs("div",{className:"flex items-center gap-4",children:[R.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center",children:R.jsx(uy,{className:"w-6 h-6 text-purple-400"})}),R.jsxs("div",{children:[R.jsx("p",{className:"text-gray-300",children:"Location"}),R.jsx("p",{className:"text-white font-semibold",children:"Ahmedabad, India"})]})]})]})]}),R.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700",children:[R.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Find me Online"}),R.jsx("div",{className:"flex gap-4",children:e.map((t,s)=>R.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 rounded-xl border border-gray-600 flex items-center justify-center transition-all duration-300 ${t.color} ${t.bgColor} hover:border-opacity-0 hover:scale-110`,children:R.jsx(t.icon,{className:"w-5 h-5"})},s))})]}),R.jsx("div",{className:"text-center",children:R.jsxs("div",{className:"inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold",children:[R.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),"Available for opportunities"]})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="183",Ny=0,Am=1,Iy=2,ql=1,Uy=2,Ka=3,Ur=0,Un=1,Qi=2,er=0,Ks=1,Od=2,Cm=3,Rm=4,Fy=5,as=100,Oy=101,ky=102,By=103,zy=104,Vy=200,Hy=201,Gy=202,Wy=203,kd=204,Bd=205,jy=206,Xy=207,$y=208,qy=209,Yy=210,Ky=211,Zy=212,Qy=213,Jy=214,zd=0,Vd=1,Hd=2,Qs=3,Gd=4,Wd=5,jd=6,Xd=7,Zg=0,eS=1,tS=2,Ni=0,Qg=1,Jg=2,e0=3,t0=4,n0=5,i0=6,r0=7,s0=300,ds=301,Js=302,nd=303,id=304,dc=306,$d=1e3,Wn=1001,qd=1002,hn=1003,nS=1004,Sl=1005,en=1006,rd=1007,ls=1008,ni=1009,a0=1010,o0=1011,to=1012,Bf=1013,Ii=1014,xi=1015,Ui=1016,zf=1017,Vf=1018,no=1020,l0=35902,c0=35899,u0=1021,d0=1022,ii=1023,ir=1026,cs=1027,f0=1028,Hf=1029,ea=1030,Gf=1031,Wf=1033,Yl=33776,Kl=33777,Zl=33778,Ql=33779,Yd=35840,Kd=35841,Zd=35842,Qd=35843,Jd=36196,ef=37492,tf=37496,nf=37488,rf=37489,sf=37490,af=37491,of=37808,lf=37809,cf=37810,uf=37811,df=37812,ff=37813,hf=37814,pf=37815,mf=37816,gf=37817,vf=37818,xf=37819,_f=37820,yf=37821,Sf=36492,Mf=36494,Ef=36495,wf=36283,Tf=36284,bf=36285,Af=36286,iS=3200,rS=0,sS=1,Nr="",ti="srgb",ta="srgb-linear",tc="linear",It="srgb",Fs=7680,Pm=519,aS=512,oS=513,lS=514,jf=515,cS=516,uS=517,Xf=518,dS=519,Lm=35044,Dm="300 es",Di=2e3,nc=2001;function fS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ic(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hS(){const r=ic("canvas");return r.style.display="block",r}const Nm={};function Im(...r){const e="THREE."+r.shift();console.log(e,...r)}function h0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=h0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ct(...r){r=h0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function rc(...r){const e=r.join(" ");e in Nm||(Nm[e]=!0,lt(...r))}function pS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const mS={[zd]:Vd,[Hd]:jd,[Gd]:Xd,[Qs]:Wd,[Vd]:zd,[jd]:Hd,[Xd]:Gd,[Wd]:Qs};class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=Math.PI/180,Cf=180/Math.PI;function oo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function gS(r,e){return(r%e+e)%e}function ad(r,e,t){return(1-t)*r+t*e}function Ha(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3],v=l[u+0],M=l[u+1],E=l[u+2],b=l[u+3];if(_!==b||h!==v||p!==M||x!==E){let y=h*v+p*M+x*E+_*b;y<0&&(v=-v,M=-M,E=-E,b=-b,y=-y);let S=1-d;if(y<.9995){const C=Math.acos(y),N=Math.sin(C);S=Math.sin(S*C)/N,d=Math.sin(d*C)/N,h=h*S+v*d,p=p*S+M*d,x=x*S+E*d,_=_*S+b*d}else{h=h*S+v*d,p=p*S+M*d,x=x*S+E*d,_=_*S+b*d;const C=1/Math.sqrt(h*h+p*p+x*x+_*_);h*=C,p*=C,x*=C,_*=C}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],h=s[o+1],p=s[o+2],x=s[o+3],_=l[u],v=l[u+1],M=l[u+2],E=l[u+3];return e[t]=d*E+x*_+h*M-p*v,e[t+1]=h*E+x*v+p*_-d*M,e[t+2]=p*E+x*M+d*v-h*_,e[t+3]=x*E-d*_-h*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(s/2),x=d(o/2),_=d(l/2),v=h(s/2),M=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=v*x*_+p*M*E,this._y=p*M*_-v*x*E,this._z=p*x*E+v*M*_,this._w=p*x*_-v*M*E;break;case"YXZ":this._x=v*x*_+p*M*E,this._y=p*M*_-v*x*E,this._z=p*x*E-v*M*_,this._w=p*x*_+v*M*E;break;case"ZXY":this._x=v*x*_-p*M*E,this._y=p*M*_+v*x*E,this._z=p*x*E+v*M*_,this._w=p*x*_-v*M*E;break;case"ZYX":this._x=v*x*_-p*M*E,this._y=p*M*_+v*x*E,this._z=p*x*E-v*M*_,this._w=p*x*_+v*M*E;break;case"YZX":this._x=v*x*_+p*M*E,this._y=p*M*_+v*x*E,this._z=p*x*E-v*M*_,this._w=p*x*_-v*M*E;break;case"XZY":this._x=v*x*_-p*M*E,this._y=p*M*_-v*x*E,this._z=p*x*E+v*M*_,this._w=p*x*_+v*M*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],x=t[6],_=t[10],v=s+d+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(x-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(x-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,x=t._w;return this._x=s*x+u*d+o*p-l*h,this._y=o*x+u*h+l*d-s*p,this._z=l*x+u*p+s*h-o*d,this._w=u*x-s*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,l=-l,u=-u,d=-d);let h=1-t;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);h=Math.sin(h*p)/x,t=Math.sin(t*p)/x,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,t=0,s=0){oe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*s),x=2*(d*t-l*o),_=2*(l*s-u*t);return this.x=t+h*p+u*_-d*x,this.y=s+h*x+d*p-l*_,this.z=o+h*_+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-s*h,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new oe,Um=new sa;class ht{constructor(e,t,s,o,l,u,d,h,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,p)}set(e,t,s,o,l,u,d,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=h,x[6]=s,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],p=s[1],x=s[4],_=s[7],v=s[2],M=s[5],E=s[8],b=o[0],y=o[3],S=o[6],C=o[1],N=o[4],L=o[7],B=o[2],k=o[5],z=o[8];return l[0]=u*b+d*C+h*B,l[3]=u*y+d*N+h*k,l[6]=u*S+d*L+h*z,l[1]=p*b+x*C+_*B,l[4]=p*y+x*N+_*k,l[7]=p*S+x*L+_*z,l[2]=v*b+M*C+E*B,l[5]=v*y+M*N+E*k,l[8]=v*S+M*L+E*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*d*p-s*l*x+s*d*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],_=x*u-d*p,v=d*h-x*l,M=p*l-u*h,E=t*_+s*v+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=_*b,e[1]=(o*p-x*s)*b,e[2]=(d*s-o*u)*b,e[3]=v*b,e[4]=(x*t-o*h)*b,e[5]=(o*l-d*t)*b,e[6]=M*b,e[7]=(s*h-p*t)*b,e[8]=(u*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(ld.makeScale(e,t)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,t){return this.premultiply(ld.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new ht,Fm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vS(){const r={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?tc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ta]:{primaries:e,whitePoint:s,transfer:tc,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:It,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Tt=vS();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Os;class xS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=ic("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ic("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(tr(t[s]/255)*255):t[s]=tr(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class $f{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(cd(o[u].image)):l.push(cd(o[u]))}else l=cd(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function cd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let yS=0;const ud=new oe;class Tn extends ra{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,s=Wn,o=Wn,l=en,u=ls,d=ii,h=ni,p=Tn.DEFAULT_ANISOTROPY,x=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=oo(),this.name="",this.source=new $f(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=s0;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],x=h[4],_=h[8],v=h[1],M=h[5],E=h[9],b=h[2],y=h[6],S=h[10];if(Math.abs(x-v)<.01&&Math.abs(_-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(x+v)<.1&&Math.abs(_+b)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,L=(M+1)/2,B=(S+1)/2,k=(x+v)/4,z=(_+b)/4,T=(E+y)/4;return N>L&&N>B?N<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(N),o=k/s,l=z/s):L>B?L<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(L),s=k/o,l=T/o):B<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),s=z/l,o=T/l),this.set(s,o,l,t),this}let C=Math.sqrt((y-E)*(y-E)+(_-b)*(_-b)+(v-x)*(v-x));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(_-b)/C,this.z=(v-x)/C,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SS extends ra{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Tn(o),u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $f(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends SS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class p0 extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MS extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e,t,s,o,l,u,d,h,p,x,_,v,M,E,b,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,p,x,_,v,M,E,b,y)}set(e,t,s,o,l,u,d,h,p,x,_,v,M,E,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=h,S[2]=p,S[6]=x,S[10]=_,S[14]=v,S[3]=M,S[7]=E,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const v=u*x,M=u*_,E=d*x,b=d*_;t[0]=h*x,t[4]=-h*_,t[8]=p,t[1]=M+E*p,t[5]=v-b*p,t[9]=-d*h,t[2]=b-v*p,t[6]=E+M*p,t[10]=u*h}else if(e.order==="YXZ"){const v=h*x,M=h*_,E=p*x,b=p*_;t[0]=v+b*d,t[4]=E*d-M,t[8]=u*p,t[1]=u*_,t[5]=u*x,t[9]=-d,t[2]=M*d-E,t[6]=b+v*d,t[10]=u*h}else if(e.order==="ZXY"){const v=h*x,M=h*_,E=p*x,b=p*_;t[0]=v-b*d,t[4]=-u*_,t[8]=E+M*d,t[1]=M+E*d,t[5]=u*x,t[9]=b-v*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const v=u*x,M=u*_,E=d*x,b=d*_;t[0]=h*x,t[4]=E*p-M,t[8]=v*p+b,t[1]=h*_,t[5]=b*p+v,t[9]=M*p-E,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,M=u*p,E=d*h,b=d*p;t[0]=h*x,t[4]=b-v*_,t[8]=E*_+M,t[1]=_,t[5]=u*x,t[9]=-d*x,t[2]=-p*x,t[6]=M*_+E,t[10]=v-b*_}else if(e.order==="XZY"){const v=u*h,M=u*p,E=d*h,b=d*p;t[0]=h*x,t[4]=-_,t[8]=p*x,t[1]=v*_+b,t[5]=u*x,t[9]=M*_-E,t[2]=E*_-M,t[6]=d*x,t[10]=b*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ES,e,wS)}lookAt(e,t,s){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),Ar.crossVectors(s,Hn),Ar.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),Ar.crossVectors(s,Hn)),Ar.normalize(),Ml.crossVectors(Hn,Ar),o[0]=Ar.x,o[4]=Ml.x,o[8]=Hn.x,o[1]=Ar.y,o[5]=Ml.y,o[9]=Hn.y,o[2]=Ar.z,o[6]=Ml.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],p=s[12],x=s[1],_=s[5],v=s[9],M=s[13],E=s[2],b=s[6],y=s[10],S=s[14],C=s[3],N=s[7],L=s[11],B=s[15],k=o[0],z=o[4],T=o[8],D=o[12],Q=o[1],F=o[5],Y=o[9],te=o[13],se=o[2],J=o[6],K=o[10],j=o[14],$=o[3],ue=o[7],he=o[11],O=o[15];return l[0]=u*k+d*Q+h*se+p*$,l[4]=u*z+d*F+h*J+p*ue,l[8]=u*T+d*Y+h*K+p*he,l[12]=u*D+d*te+h*j+p*O,l[1]=x*k+_*Q+v*se+M*$,l[5]=x*z+_*F+v*J+M*ue,l[9]=x*T+_*Y+v*K+M*he,l[13]=x*D+_*te+v*j+M*O,l[2]=E*k+b*Q+y*se+S*$,l[6]=E*z+b*F+y*J+S*ue,l[10]=E*T+b*Y+y*K+S*he,l[14]=E*D+b*te+y*j+S*O,l[3]=C*k+N*Q+L*se+B*$,l[7]=C*z+N*F+L*J+B*ue,l[11]=C*T+N*Y+L*K+B*he,l[15]=C*D+N*te+L*j+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],x=e[2],_=e[6],v=e[10],M=e[14],E=e[3],b=e[7],y=e[11],S=e[15],C=h*M-p*v,N=d*M-p*_,L=d*v-h*_,B=u*M-p*x,k=u*v-h*x,z=u*_-d*x;return t*(b*C-y*N+S*L)-s*(E*C-y*B+S*k)+o*(E*N-b*B+S*z)-l*(E*L-b*k+y*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],x=e[8],_=e[9],v=e[10],M=e[11],E=e[12],b=e[13],y=e[14],S=e[15],C=t*d-s*u,N=t*h-o*u,L=t*p-l*u,B=s*h-o*d,k=s*p-l*d,z=o*p-l*h,T=x*b-_*E,D=x*y-v*E,Q=x*S-M*E,F=_*y-v*b,Y=_*S-M*b,te=v*S-M*y,se=C*te-N*Y+L*F+B*Q-k*D+z*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/se;return e[0]=(d*te-h*Y+p*F)*J,e[1]=(o*Y-s*te-l*F)*J,e[2]=(b*z-y*k+S*B)*J,e[3]=(v*k-_*z-M*B)*J,e[4]=(h*Q-u*te-p*D)*J,e[5]=(t*te-o*Q+l*D)*J,e[6]=(y*L-E*z-S*N)*J,e[7]=(x*z-v*L+M*N)*J,e[8]=(u*Y-d*Q+p*T)*J,e[9]=(s*Q-t*Y-l*T)*J,e[10]=(E*k-b*L+S*C)*J,e[11]=(_*L-x*k-M*C)*J,e[12]=(d*D-u*F-h*T)*J,e[13]=(t*F-s*D+o*T)*J,e[14]=(b*N-E*B-y*C)*J,e[15]=(x*B-_*N+v*C)*J,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,p=l*u,x=l*d;return this.set(p*u+s,p*d-o*h,p*h+o*d,0,p*d+o*h,x*d+s,x*h-o*u,0,p*h-o*d,x*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,x=u+u,_=d+d,v=l*p,M=l*x,E=l*_,b=u*x,y=u*_,S=d*_,C=h*p,N=h*x,L=h*_,B=s.x,k=s.y,z=s.z;return o[0]=(1-(b+S))*B,o[1]=(M+L)*B,o[2]=(E-N)*B,o[3]=0,o[4]=(M-L)*k,o[5]=(1-(v+S))*k,o[6]=(y+C)*k,o[7]=0,o[8]=(E+N)*z,o[9]=(y-C)*z,o[10]=(1-(v+b))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const d=ks.set(o[4],o[5],o[6]).length(),h=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),hi.copy(this);const p=1/u,x=1/d,_=1/h;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=x,hi.elements[5]*=x,hi.elements[6]*=x,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),s.x=u,s.y=d,s.z=h,this}makePerspective(e,t,s,o,l,u,d=Di,h=!1){const p=this.elements,x=2*l/(t-e),_=2*l/(s-o),v=(t+e)/(t-e),M=(s+o)/(s-o);let E,b;if(h)E=l/(u-l),b=u*l/(u-l);else if(d===Di)E=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===nc)E=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Di,h=!1){const p=this.elements,x=2/(t-e),_=2/(s-o),v=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,b;if(h)E=1/(u-l),b=u/(u-l);else if(d===Di)E=-2/(u-l),b=-(u+l)/(u-l);else if(d===nc)E=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new oe,hi=new Zt,ES=new oe(0,0,0),wS=new oe(1,1,1),Ar=new oe,Ml=new oe,Hn=new oe,km=new Zt,Bm=new sa;class rr{constructor(e=0,t=0,s=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],x=o[9],_=o[2],v=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class m0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TS=0;const zm=new oe,Bs=new sa,$i=new Zt,El=new oe,Ga=new oe,bS=new oe,AS=new sa,Vm=new oe(1,0,0),Hm=new oe(0,1,0),Gm=new oe(0,0,1),Wm={type:"added"},CS={type:"removed"},zs={type:"childadded",child:null},dd={type:"childremoved",child:null};class Fn extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new oe,t=new rr,s=new sa,o=new oe(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new m0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?El.copy(e):El.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ga,El,this.up):$i.lookAt(El,Ga,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix($i),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CS),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,bS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,AS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),_=u(e.shapes),v=u(e.skeletons),M=u(e.animations),E=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(d){const h=[];for(const p in d){const x=d[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new oe(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wl extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,s),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=x.position.distanceTo(_.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new wl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const g0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function hd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=gS(e,1),t=St(t,0,1),s=St(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=hd(u,l,e+1/3),this.g=hd(u,l,e),this.b=hd(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=g0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Tt.workingToColorSpace(_n.copy(this),e),Math.round(St(_n.r*255,0,255))*65536+Math.round(St(_n.g*255,0,255))*256+Math.round(St(_n.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(_n.copy(this),t);const s=_n.r,o=_n.g,l=_n.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let h,p;const x=(d+u)/2;if(d===u)h=0,p=0;else{const _=u-d;switch(p=x<=.5?_/(u+d):_/(2-u-d),u){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ti){Tt.workingToColorSpace(_n.copy(this),e);const t=_n.r,s=_n.g,o=_n.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Tl);const s=ad(Cr.h,Tl.h,t),o=ad(Cr.s,Tl.s,t),l=ad(Cr.l,Tl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Pt;Pt.NAMES=g0;class jm extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new oe,qi=new oe,pd=new oe,Yi=new oe,Vs=new oe,Hs=new oe,Xm=new oe,md=new oe,gd=new oe,vd=new oe,xd=new $t,_d=new $t,yd=new $t;class vi{constructor(e=new oe,t=new oe,s=new oe){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),qi.subVectors(s,t),pd.subVectors(e,t);const u=pi.dot(pi),d=pi.dot(qi),h=pi.dot(pd),p=qi.dot(qi),x=qi.dot(pd),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const v=1/_,M=(p*h-d*x)*v,E=(u*x-d*h)*v;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,o,l,u,d,h){return this.getBarycoord(e,t,s,o,Yi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Yi.x),h.addScaledVector(u,Yi.y),h.addScaledVector(d,Yi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return xd.setScalar(0),_d.setScalar(0),yd.setScalar(0),xd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,s),yd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(xd,l.x),u.addScaledVector(_d,l.y),u.addScaledVector(yd,l.z),u}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),qi.subVectors(e,t),pi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;Vs.subVectors(o,s),Hs.subVectors(l,s),md.subVectors(e,s);const h=Vs.dot(md),p=Hs.dot(md);if(h<=0&&p<=0)return t.copy(s);gd.subVectors(e,o);const x=Vs.dot(gd),_=Hs.dot(gd);if(x>=0&&_<=x)return t.copy(o);const v=h*_-x*p;if(v<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(s).addScaledVector(Vs,u);vd.subVectors(e,l);const M=Vs.dot(vd),E=Hs.dot(vd);if(E>=0&&M<=E)return t.copy(l);const b=M*p-h*E;if(b<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(s).addScaledVector(Hs,d);const y=x*E-M*_;if(y<=0&&_-x>=0&&M-E>=0)return Xm.subVectors(l,o),d=(_-x)/(_-x+(M-E)),t.copy(o).addScaledVector(Xm,d);const S=1/(y+b+v);return u=b*S,d=v*S,t.copy(s).addScaledVector(Vs,u).addScaledVector(Hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lo{constructor(e=new oe(1/0,1/0,1/0),t=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),bl.copy(s.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Al.subVectors(this.max,Wa),Gs.subVectors(e.a,Wa),Ws.subVectors(e.b,Wa),js.subVectors(e.c,Wa),Rr.subVectors(Ws,Gs),Pr.subVectors(js,Ws),Qr.subVectors(Gs,js);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-Qr.z,Qr.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,Qr.z,0,-Qr.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-Qr.y,Qr.x,0];return!Sd(t,Gs,Ws,js,Al)||(t=[1,0,0,0,1,0,0,0,1],!Sd(t,Gs,Ws,js,Al))?!1:(Cl.crossVectors(Rr,Pr),t=[Cl.x,Cl.y,Cl.z],Sd(t,Gs,Ws,js,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],mi=new oe,bl=new lo,Gs=new oe,Ws=new oe,js=new oe,Rr=new oe,Pr=new oe,Qr=new oe,Wa=new oe,Al=new oe,Cl=new oe,Jr=new oe;function Sd(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Jr.fromArray(r,l);const d=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),h=e.dot(Jr),p=t.dot(Jr),x=s.dot(Jr);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>d)return!1}return!0}const Jt=new oe,Rl=new dt;let PS=0;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Lm,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ha(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class v0 extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class x0 extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Si extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const LS=new lo,ja=new oe,Md=new oe;class fc{constructor(e=new oe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):LS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ja,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Md.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(Md)),this.expandByPoint(ja.copy(e.center).sub(Md))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let DS=0;const ei=new Zt,Ed=new Fn,Xs=new oe,Gn=new lo,Xa=new lo,un=new oe;class Ei extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fS(e)?x0:v0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Ed.lookAt(e),Ed.updateMatrix(),this.applyMatrix4(Ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Xa.setFromBufferAttribute(d),this.morphTargetsRelative?(un.addVectors(Gn.min,Xa.min),Gn.expandByPoint(un),un.addVectors(Gn.max,Xa.max),Gn.expandByPoint(un)):(Gn.expandByPoint(Xa.min),Gn.expandByPoint(Xa.max))}Gn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)un.fromBufferAttribute(d,p),h&&(Xs.fromBufferAttribute(e,p),un.add(Xs)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let T=0;T<s.count;T++)d[T]=new oe,h[T]=new oe;const p=new oe,x=new oe,_=new oe,v=new dt,M=new dt,E=new dt,b=new oe,y=new oe;function S(T,D,Q){p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,D),_.fromBufferAttribute(s,Q),v.fromBufferAttribute(l,T),M.fromBufferAttribute(l,D),E.fromBufferAttribute(l,Q),x.sub(p),_.sub(p),M.sub(v),E.sub(v);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(b.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(F),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(F),d[T].add(b),d[D].add(b),d[Q].add(b),h[T].add(y),h[D].add(y),h[Q].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,D=C.length;T<D;++T){const Q=C[T],F=Q.start,Y=Q.count;for(let te=F,se=F+Y;te<se;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const N=new oe,L=new oe,B=new oe,k=new oe;function z(T){B.fromBufferAttribute(o,T),k.copy(B);const D=d[T];N.copy(D),N.sub(B.multiplyScalar(B.dot(D))).normalize(),L.crossVectors(k,D);const F=L.dot(h[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,F)}for(let T=0,D=C.length;T<D;++T){const Q=C[T],F=Q.start,Y=Q.count;for(let te=F,se=F+Y;te<se;te+=3)z(e.getX(te+0)),z(e.getX(te+1)),z(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const o=new oe,l=new oe,u=new oe,d=new oe,h=new oe,p=new oe,x=new oe,_=new oe;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),d.fromBufferAttribute(s,E),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,y),d.add(x),h.add(x),p.add(x),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,h.x,h.y,h.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let v=0,M=t.count;v<M;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),x.subVectors(u,l),_.subVectors(o,l),x.cross(_),s.setXYZ(v+0,x.x,x.y,x.z),s.setXYZ(v+1,x.x,x.y,x.z),s.setXYZ(v+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(d,h){const p=d.array,x=d.itemSize,_=d.normalized,v=new p.constructor(h.length*x);let M=0,E=0;for(let b=0,y=h.length;b<y;b++){d.isInterleavedBufferAttribute?M=h[b]*d.data.stride+d.offset:M=h[b]*x;for(let S=0;S<x;S++)v[E++]=p[M++]}return new yi(v,x,_)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,s=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let x=0,_=p.length;x<_;x++){const v=p[x],M=e(v,s);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let _=0,v=p.length;_<v;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],_=l[p];for(let v=0,M=_.length;v<M;v++)x.push(_[v].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NS=0;class co extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Ks,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Bd,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kd&&(s.blendSrc=this.blendSrc),this.blendDst!==Bd&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new oe,wd=new oe,Pl=new oe,Lr=new oe,Td=new oe,Ll=new oe,bd=new oe;class _0{constructor(e=new oe,t=new oe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){wd.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(wd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),d=Lr.dot(this.direction),h=-Lr.dot(Pl),p=Lr.lengthSq(),x=Math.abs(1-u*u);let _,v,M,E;if(x>0)if(_=u*h-d,v=u*d-h,E=l*x,_>=0)if(v>=-E)if(v<=E){const b=1/x;_*=b,v*=b,M=_*(_+u*v+2*d)+v*(u*_+v+2*h)+p}else v=l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*h)+p;else v=-l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*h)+p;else v<=-E?(_=Math.max(0,-(-u*l+d)),v=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+v*(v+2*h)+p):v<=E?(_=0,v=Math.min(Math.max(-l,-h),l),M=v*(v+2*h)+p):(_=Math.max(0,-(u*l+d)),v=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+v*(v+2*h)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+d)),M=-_*_+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(wd).addScaledVector(Pl,v),M}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),o=Zi.dot(Zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,h;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),x>=0?(l=(e.min.y-v.y)*x,u=(e.max.y-v.y)*x):(l=(e.max.y-v.y)*x,u=(e.min.y-v.y)*x),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),s>h||d>o)||((d>s||s!==s)&&(s=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,s,o,l){Td.subVectors(t,e),Ll.subVectors(s,e),bd.crossVectors(Td,Ll);let u=this.direction.dot(bd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const h=d*this.direction.dot(Ll.crossVectors(Lr,Ll));if(h<0)return null;const p=d*this.direction.dot(Td.cross(Lr));if(p<0||h+p>u)return null;const x=-d*Lr.dot(bd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class y0 extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $m=new Zt,es=new _0,Dl=new fc,qm=new oe,Nl=new oe,Il=new oe,Ul=new oe,Ad=new oe,Fl=new oe,Ym=new oe,Ol=new oe;class ri extends Fn{constructor(e=new Ei,t=new y0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Fl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=d[h],_=l[h];x!==0&&(Ad.fromBufferAttribute(_,e),u?Fl.addScaledVector(Ad,x):Fl.addScaledVector(Ad.sub(t),x))}t.add(Fl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Dl.copy(s.boundingSphere),Dl.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Dl.containsPoint(es.origin)===!1&&(es.intersectSphere(Dl,qm)===null||es.origin.distanceToSquared(qm)>(e.far-e.near)**2))&&($m.copy(l).invert(),es.copy(e.ray).applyMatrix4($m),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,v=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const y=v[E],S=u[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let L=C,B=N;L<B;L+=3){const k=d.getX(L),z=d.getX(L+1),T=d.getX(L+2);o=kl(this,S,e,s,p,x,_,k,z,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=E,S=b;y<S;y+=3){const C=d.getX(y),N=d.getX(y+1),L=d.getX(y+2);o=kl(this,u,e,s,p,x,_,C,N,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,b=v.length;E<b;E++){const y=v[E],S=u[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let L=C,B=N;L<B;L+=3){const k=L,z=L+1,T=L+2;o=kl(this,S,e,s,p,x,_,k,z,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(h.count,M.start+M.count);for(let y=E,S=b;y<S;y+=3){const C=y,N=y+1,L=y+2;o=kl(this,u,e,s,p,x,_,C,N,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function IS(r,e,t,s,o,l,u,d){let h;if(e.side===Un?h=s.intersectTriangle(u,l,o,!0,d):h=s.intersectTriangle(o,l,u,e.side===Ur,d),h===null)return null;Ol.copy(d),Ol.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:r}}function kl(r,e,t,s,o,l,u,d,h,p){r.getVertexPosition(d,Nl),r.getVertexPosition(h,Il),r.getVertexPosition(p,Ul);const x=IS(r,e,t,s,Nl,Il,Ul,Ym);if(x){const _=new oe;vi.getBarycoord(Ym,Nl,Il,Ul,_),o&&(x.uv=vi.getInterpolatedAttribute(o,d,h,p,_,new dt)),l&&(x.uv1=vi.getInterpolatedAttribute(l,d,h,p,_,new dt)),u&&(x.normal=vi.getInterpolatedAttribute(u,d,h,p,_,new oe),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const v={a:d,b:h,c:p,normal:new oe,materialIndex:0};vi.getNormal(Nl,Il,Ul,v.normal),x.face=v,x.barycoord=_}return x}class S0 extends Tn{constructor(e=null,t=1,s=1,o,l,u,d,h,p=hn,x=hn,_,v){super(null,u,d,h,p,x,o,l,_,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new oe,US=new oe,FS=new ht;class rs{constructor(e=new oe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Cd.subVectors(s,t).cross(US.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Cd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||FS.getNormalMatrix(e),o=this.coplanarPoint(Cd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new fc,OS=new dt(.5,.5),Bl=new oe;class M0{constructor(e=new rs,t=new rs,s=new rs,o=new rs,l=new rs,u=new rs){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Di,s=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],p=l[3],x=l[4],_=l[5],v=l[6],M=l[7],E=l[8],b=l[9],y=l[10],S=l[11],C=l[12],N=l[13],L=l[14],B=l[15];if(o[0].setComponents(p-u,M-x,S-E,B-C).normalize(),o[1].setComponents(p+u,M+x,S+E,B+C).normalize(),o[2].setComponents(p+d,M+_,S+b,B+N).normalize(),o[3].setComponents(p-d,M-_,S-b,B-N).normalize(),s)o[4].setComponents(h,v,y,L).normalize(),o[5].setComponents(p-h,M-v,S-y,B-L).normalize();else if(o[4].setComponents(p-h,M-v,S-y,B-L).normalize(),t===Di)o[5].setComponents(p+h,M+v,S+y,B+L).normalize();else if(t===nc)o[5].setComponents(h,v,y,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=OS.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Bl.x=o.normal.x>0?e.max.x:e.min.x,Bl.y=o.normal.y>0?e.max.y:e.min.y,Bl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kS extends co{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sc=new oe,ac=new oe,Km=new Zt,$a=new _0,zl=new fc,Rd=new oe,Zm=new oe;class BS extends Fn{constructor(e=new Ei,t=new kS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)sc.fromBufferAttribute(t,o-1),ac.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=sc.distanceTo(ac);e.setAttribute("lineDistance",new Si(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zl.copy(s.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;Km.copy(o).invert(),$a.copy(e.ray).applyMatrix4(Km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=this.isLineSegments?2:1,x=s.index,v=s.attributes.position;if(x!==null){const M=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let b=M,y=E-1;b<y;b+=p){const S=x.getX(b),C=x.getX(b+1),N=Vl(this,e,$a,h,S,C,b);N&&t.push(N)}if(this.isLineLoop){const b=x.getX(E-1),y=x.getX(M),S=Vl(this,e,$a,h,b,y,E-1);S&&t.push(S)}}else{const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let b=M,y=E-1;b<y;b+=p){const S=Vl(this,e,$a,h,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=Vl(this,e,$a,h,E-1,M,E-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Vl(r,e,t,s,o,l,u){const d=r.geometry.attributes.position;if(sc.fromBufferAttribute(d,o),ac.fromBufferAttribute(d,l),t.distanceSqToSegment(sc,ac,Rd,Zm)>s)return;Rd.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Rd);if(!(p<e.near||p>e.far))return{distance:p,point:Zm.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Qm=new oe,Jm=new oe;class zS extends BS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Qm.fromBufferAttribute(t,o),Jm.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Qm.distanceTo(Jm);e.setAttribute("lineDistance",new Si(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class E0 extends Tn{constructor(e=[],t=ds,s,o,l,u,d,h,p,x){super(e,t,s,o,l,u,d,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class io extends Tn{constructor(e,t,s=Ii,o,l,u,d=hn,h=hn,p,x=ir,_=1){if(x!==ir&&x!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:_};super(v,o,l,u,d,h,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $f(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class VS extends io{constructor(e,t=Ii,s=ds,o,l,u=hn,d=hn,h,p=ir){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,s,o,l,u,d,h,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class w0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uo extends Ei{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],_=[];let v=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Si(p,3)),this.setAttribute("normal",new Si(x,3)),this.setAttribute("uv",new Si(_,2));function E(b,y,S,C,N,L,B,k,z,T,D){const Q=L/z,F=B/T,Y=L/2,te=B/2,se=k/2,J=z+1,K=T+1;let j=0,$=0;const ue=new oe;for(let he=0;he<K;he++){const O=he*F-te;for(let Z=0;Z<J;Z++){const Ce=Z*Q-Y;ue[b]=Ce*C,ue[y]=O*N,ue[S]=se,p.push(ue.x,ue.y,ue.z),ue[b]=0,ue[y]=0,ue[S]=k>0?1:-1,x.push(ue.x,ue.y,ue.z),_.push(Z/z),_.push(1-he/T),j+=1}}for(let he=0;he<T;he++)for(let O=0;O<z;O++){const Z=v+O+J*he,Ce=v+O+J*(he+1),Ge=v+(O+1)+J*(he+1),Ke=v+(O+1)+J*he;h.push(Z,Ce,Ke),h.push(Ce,Ge,Ke),$+=6}d.addGroup(M,$,D),M+=$,v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class us extends Ei{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(o),p=d+1,x=h+1,_=e/d,v=t/h,M=[],E=[],b=[],y=[];for(let S=0;S<x;S++){const C=S*v-u;for(let N=0;N<p;N++){const L=N*_-l;E.push(L,-C,0),b.push(0,0,1),y.push(N/d),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let C=0;C<d;C++){const N=C+p*S,L=C+p*(S+1),B=C+1+p*(S+1),k=C+1+p*S;M.push(N,L,k),M.push(L,B,k)}this.setIndex(M),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(b,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=na(r[t]);for(const o in s)e[o]=s[o]}return e}function HS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function T0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const GS={clone:na,merge:wn};var WS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WS,this.fragmentShader=jS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Za extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class XS extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $S extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl=new oe,Gl=new sa,Ri=new oe;class oc extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Gl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hl,Gl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Gl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new oe,eg=new dt,tg=new dt;class gi extends oc{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Cf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cf*2*Math.atan(Math.tan(sd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sd*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class b0 extends oc{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=-90,qs=1;class qS extends Fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi($s,qs,e,t);o.layers=this.layers,this.add(o);const l=new gi($s,qs,e,t);l.layers=this.layers,this.add(l);const u=new gi($s,qs,e,t);u.layers=this.layers,this.add(u);const d=new gi($s,qs,e,t);d.layers=this.layers,this.add(d);const h=new gi($s,qs,e,t);h.layers=this.layers,this.add(h);const p=new gi($s,qs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Di)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,x]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(_,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class YS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class KS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ng(r,e,t,s){const o=ZS(s);switch(t){case u0:return r*e;case f0:return r*e/o.components*o.byteLength;case Hf:return r*e/o.components*o.byteLength;case ea:return r*e*2/o.components*o.byteLength;case Gf:return r*e*2/o.components*o.byteLength;case d0:return r*e*3/o.components*o.byteLength;case ii:return r*e*4/o.components*o.byteLength;case Wf:return r*e*4/o.components*o.byteLength;case Yl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Qd:return Math.max(r,16)*Math.max(e,8)/4;case Yd:case Zd:return Math.max(r,8)*Math.max(e,8)/2;case Jd:case ef:case nf:case rf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case tf:case sf:case af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case cf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case uf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case df:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ff:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case hf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case pf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case mf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case vf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case xf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case yf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Sf:case Mf:case Ef:return Math.ceil(r/4)*Math.ceil(e/4)*16;case wf:case Tf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bf:case Af:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZS(r){switch(r){case ni:case a0:return{byteLength:1,components:1};case to:case o0:case Ui:return{byteLength:2,components:1};case zf:case Vf:return{byteLength:2,components:4};case Ii:case Bf:case xi:return{byteLength:4,components:1};case l0:case c0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function A0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function QS(r){const e=new WeakMap;function t(d,h){const p=d.array,x=d.usage,_=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,p){const x=h.array,_=h.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,x);else{_.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<_.length;M++){const E=_[v],b=_[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,_[v]=b)}_.length=v+1;for(let M=0,E=_.length;M<E;M++){const b=_[M];r.bufferSubData(p,b.start*x.BYTES_PER_ELEMENT,x,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}var JS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fM=`#ifdef USE_IRIDESCENCE
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
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,VM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,jM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$M=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,QM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ME=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,EE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,CE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,UE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,OE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VE=`#ifdef USE_SKINNING
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
#endif`,HE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$E=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,s1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,o1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,f1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,m1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,v1=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,S1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,E1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,T1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,A1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,L1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:JS,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:aM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:dM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:xM,color_pars_fragment:_M,color_pars_vertex:yM,color_vertex:SM,common:MM,cube_uv_reflection_fragment:EM,defaultnormal_vertex:wM,displacementmap_pars_vertex:TM,displacementmap_vertex:bM,emissivemap_fragment:AM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:DM,envmap_pars_fragment:NM,envmap_pars_vertex:IM,envmap_physical_pars_fragment:jM,envmap_vertex:UM,fog_vertex:FM,fog_pars_vertex:OM,fog_fragment:kM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:VM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:GM,lights_pars_begin:WM,lights_toon_fragment:XM,lights_toon_pars_fragment:$M,lights_phong_fragment:qM,lights_phong_pars_fragment:YM,lights_physical_fragment:KM,lights_physical_pars_fragment:ZM,lights_fragment_begin:QM,lights_fragment_maps:JM,lights_fragment_end:eE,logdepthbuf_fragment:tE,logdepthbuf_pars_fragment:nE,logdepthbuf_pars_vertex:iE,logdepthbuf_vertex:rE,map_fragment:sE,map_pars_fragment:aE,map_particle_fragment:oE,map_particle_pars_fragment:lE,metalnessmap_fragment:cE,metalnessmap_pars_fragment:uE,morphinstance_vertex:dE,morphcolor_vertex:fE,morphnormal_vertex:hE,morphtarget_pars_vertex:pE,morphtarget_vertex:mE,normal_fragment_begin:gE,normal_fragment_maps:vE,normal_pars_fragment:xE,normal_pars_vertex:_E,normal_vertex:yE,normalmap_pars_fragment:SE,clearcoat_normal_fragment_begin:ME,clearcoat_normal_fragment_maps:EE,clearcoat_pars_fragment:wE,iridescence_pars_fragment:TE,opaque_fragment:bE,packing:AE,premultiplied_alpha_fragment:CE,project_vertex:RE,dithering_fragment:PE,dithering_pars_fragment:LE,roughnessmap_fragment:DE,roughnessmap_pars_fragment:NE,shadowmap_pars_fragment:IE,shadowmap_pars_vertex:UE,shadowmap_vertex:FE,shadowmask_pars_fragment:OE,skinbase_vertex:kE,skinning_pars_vertex:BE,skinning_vertex:zE,skinnormal_vertex:VE,specularmap_fragment:HE,specularmap_pars_fragment:GE,tonemapping_fragment:WE,tonemapping_pars_fragment:jE,transmission_fragment:XE,transmission_pars_fragment:$E,uv_pars_fragment:qE,uv_pars_vertex:YE,uv_vertex:KE,worldpos_vertex:ZE,background_vert:QE,background_frag:JE,backgroundCube_vert:e1,backgroundCube_frag:t1,cube_vert:n1,cube_frag:i1,depth_vert:r1,depth_frag:s1,distance_vert:a1,distance_frag:o1,equirect_vert:l1,equirect_frag:c1,linedashed_vert:u1,linedashed_frag:d1,meshbasic_vert:f1,meshbasic_frag:h1,meshlambert_vert:p1,meshlambert_frag:m1,meshmatcap_vert:g1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:_1,meshphong_vert:y1,meshphong_frag:S1,meshphysical_vert:M1,meshphysical_frag:E1,meshtoon_vert:w1,meshtoon_frag:T1,points_vert:b1,points_frag:A1,shadow_vert:C1,shadow_frag:R1,sprite_vert:P1,sprite_frag:L1},De={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Li.physical={uniforms:wn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Wl={r:0,b:0,g:0},ns=new rr,D1=new Zt;function N1(r,e,t,s,o,l){const u=new Pt(0);let d=o===!0?0:1,h,p,x=null,_=0,v=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const L=C.backgroundBlurriness>0;N=e.get(N,L)}return N}function E(C){let N=!1;const L=M(C);L===null?y(u,d):L&&L.isColor&&(y(L,1),N=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(C,N){const L=M(N);L&&(L.isCubeTexture||L.mapping===dc)?(p===void 0&&(p=new ri(new uo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:na(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ns.copy(N.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.material.uniforms.envMap.value=L,p.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(D1.makeRotationFromEuler(ns)),p.material.toneMapped=Tt.getTransfer(L.colorSpace)!==It,(x!==L||_!==L.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,x=L,_=L.version,v=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):L&&L.isTexture&&(h===void 0&&(h=new ri(new us(2,2),new Fi({name:"BackgroundMaterial",uniforms:na(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=L,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(L.colorSpace)!==It,L.matrixAutoUpdate===!0&&L.updateMatrix(),h.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||_!==L.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,x=L,_=L.version,v=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function y(C,N){C.getRGB(Wl,T0(r)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,N,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,N=1){u.set(C),d=N,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,y(u,d)},render:E,addToRenderList:b,dispose:S}}function I1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,u=!1;function d(F,Y,te,se,J){let K=!1;const j=_(F,se,te,Y);l!==j&&(l=j,p(l.object)),K=M(F,se,te,J),K&&E(F,se,te,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(F,Y,te,se),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return r.createVertexArray()}function p(F){return r.bindVertexArray(F)}function x(F){return r.deleteVertexArray(F)}function _(F,Y,te,se){const J=se.wireframe===!0;let K=s[Y.id];K===void 0&&(K={},s[Y.id]=K);const j=F.isInstancedMesh===!0?F.id:0;let $=K[j];$===void 0&&($={},K[j]=$);let ue=$[te.id];ue===void 0&&(ue={},$[te.id]=ue);let he=ue[J];return he===void 0&&(he=v(h()),ue[J]=he),he}function v(F){const Y=[],te=[],se=[];for(let J=0;J<t;J++)Y[J]=0,te[J]=0,se[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:se,object:F,attributes:{},index:null}}function M(F,Y,te,se){const J=l.attributes,K=Y.attributes;let j=0;const $=te.getAttributes();for(const ue in $)if($[ue].location>=0){const O=J[ue];let Z=K[ue];if(Z===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;j++}return l.attributesNum!==j||l.index!==se}function E(F,Y,te,se){const J={},K=Y.attributes;let j=0;const $=te.getAttributes();for(const ue in $)if($[ue].location>=0){let O=K[ue];O===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(O=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(O=F.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),J[ue]=Z,j++}l.attributes=J,l.attributesNum=j,l.index=se}function b(){const F=l.newAttributes;for(let Y=0,te=F.length;Y<te;Y++)F[Y]=0}function y(F){S(F,0)}function S(F,Y){const te=l.newAttributes,se=l.enabledAttributes,J=l.attributeDivisors;te[F]=1,se[F]===0&&(r.enableVertexAttribArray(F),se[F]=1),J[F]!==Y&&(r.vertexAttribDivisor(F,Y),J[F]=Y)}function C(){const F=l.newAttributes,Y=l.enabledAttributes;for(let te=0,se=Y.length;te<se;te++)Y[te]!==F[te]&&(r.disableVertexAttribArray(te),Y[te]=0)}function N(F,Y,te,se,J,K,j){j===!0?r.vertexAttribIPointer(F,Y,te,J,K):r.vertexAttribPointer(F,Y,te,se,J,K)}function L(F,Y,te,se){b();const J=se.attributes,K=te.getAttributes(),j=Y.defaultAttributeValues;for(const $ in K){const ue=K[$];if(ue.location>=0){let he=J[$];if(he===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const O=he.normalized,Z=he.itemSize,Ce=e.get(he);if(Ce===void 0)continue;const Ge=Ce.buffer,Ke=Ce.type,le=Ce.bytesPerElement,ve=Ke===r.INT||Ke===r.UNSIGNED_INT||he.gpuType===Bf;if(he.isInterleavedBufferAttribute){const ge=he.data,ke=ge.stride,He=he.offset;if(ge.isInstancedInterleavedBuffer){for(let nt=0;nt<ue.locationSize;nt++)S(ue.location+nt,ge.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let nt=0;nt<ue.locationSize;nt++)y(ue.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let nt=0;nt<ue.locationSize;nt++)N(ue.location+nt,Z/ue.locationSize,Ke,O,ke*le,(He+Z/ue.locationSize*nt)*le,ve)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<ue.locationSize;ge++)S(ue.location+ge,he.meshPerAttribute);F.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<ue.locationSize;ge++)y(ue.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ge=0;ge<ue.locationSize;ge++)N(ue.location+ge,Z/ue.locationSize,Ke,O,Z*le,Z/ue.locationSize*ge*le,ve)}}else if(j!==void 0){const O=j[$];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ue.location,O);break;case 3:r.vertexAttrib3fv(ue.location,O);break;case 4:r.vertexAttrib4fv(ue.location,O);break;default:r.vertexAttrib1fv(ue.location,O)}}}}C()}function B(){D();for(const F in s){const Y=s[F];for(const te in Y){const se=Y[te];for(const J in se){const K=se[J];for(const j in K)x(K[j].object),delete K[j];delete se[J]}}delete s[F]}}function k(F){if(s[F.id]===void 0)return;const Y=s[F.id];for(const te in Y){const se=Y[te];for(const J in se){const K=se[J];for(const j in K)x(K[j].object),delete K[j];delete se[J]}}delete s[F.id]}function z(F){for(const Y in s){const te=s[Y];for(const se in te){const J=te[se];if(J[F.id]===void 0)continue;const K=J[F.id];for(const j in K)x(K[j].object),delete K[j];delete J[F.id]}}}function T(F){for(const Y in s){const te=s[Y],se=F.isInstancedMesh===!0?F.id:0,J=te[se];if(J!==void 0){for(const K in J){const j=J[K];for(const $ in j)x(j[$].object),delete j[$];delete J[K]}delete te[se],Object.keys(te).length===0&&delete s[Y]}}}function D(){Q(),u=!0,l!==o&&(l=o,p(l.object))}function Q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:Q,dispose:B,releaseStatesOfGeometry:k,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:C}}function U1(r,e,t){let s;function o(p){s=p}function l(p,x){r.drawArrays(s,p,x),t.update(x,s,1)}function u(p,x,_){_!==0&&(r.drawArraysInstanced(s,p,x,_),t.update(x,s,_))}function d(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=x[E];t.update(M,s,1)}function h(p,x,_,v){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],x[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,x,0,v,0,_);let E=0;for(let b=0;b<_;b++)E+=x[b]*v[b];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function F1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ni&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==xi&&!T)}function h(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(lt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),k=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:L,maxSamples:B,samples:k}}function O1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new rs,d=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||s!==0||o;return o=v,s=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){t=x(_,v,0)},this.setState=function(_,v,M){const E=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,S=r.get(_);if(!o||E===null||E.length===0||l&&!y)l?x(null):p();else{const C=l?0:s,N=C*4;let L=S.clippingState||null;h.value=L,L=x(E,v,N,M);for(let B=0;B!==N;++B)L[B]=t[B];S.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,v,M,E){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=h.value,E!==!0||y===null){const S=M+b*4,C=v.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,L=M;N!==b;++N,L+=4)u.copy(_[N]).applyMatrix4(C,d),u.normal.toArray(y,L),y[L+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Ir=4,ig=[.125,.215,.35,.446,.526,.582],os=20,k1=256,qa=new b0,rg=new Pt;let Pd=null,Ld=0,Dd=0,Nd=!1;const B1=new oe;class sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:d=B1}=l;Pd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Ld,Dd),this._renderer.xr.enabled=Nd,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Nd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ui,format:ii,colorSpace:ta,depthBuffer:!1},o=ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=z1(l)),this._blurMaterial=H1(l,e,t),this._ggxMaterial=V1(l,e,t)}return o}_compileMaterial(e){const t=new ri(new Ei,e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,s,o,l){const h=new gi(90,1,t,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(rg),_.toneMapping=Ni,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new uo,new y0({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(rg),S=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[N],l.y,l.z)):L===1?(h.up.set(0,0,p[N]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[N],l.z)):(h.up.set(0,p[N],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[N]));const B=this._cubeSize;Ys(o,L*B,N>2?B:0,B,B),_.setRenderTarget(o),S&&_.render(b,h),_.render(e,h)}_.toneMapping=M,_.autoClear=v,e.background=C}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ds||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ys(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,qa)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[s];d.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),v=0+p*1.25,M=_*v,{_lodMax:E}=this,b=this._sizeLods[s],y=3*b*(s>E-Ir?s-E+Ir:0),S=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=E-t,Ys(l,y,S,3*b,2*b),o.setRenderTarget(l),o.render(d,qa),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-s,Ys(e,y,S,3*b,2*b),o.setRenderTarget(e),o.render(d,qa)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[o];_.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*os-1),b=l/E,y=isFinite(l)?1+Math.floor(x*b):os;y>os&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${os}`);const S=[];let C=0;for(let z=0;z<os;++z){const T=z/b,D=Math.exp(-T*T/2);S.push(D),z===0?C+=D:z<y&&(C+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:N}=this;v.dTheta.value=E,v.mipInt.value=N-s;const L=this._sizeLods[o],B=3*L*(o>N-Ir?o-N+Ir:0),k=4*(this._cubeSize-L);Ys(t,B,k,3*L,2*L),h.setRenderTarget(t),h.render(_,qa)}}function z1(r){const e=[],t=[],s=[];let o=r;const l=r-Ir+1+ig.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let h=1/d;u>r-Ir?h=ig[u-r+Ir-1]:u===0&&(h=0),t.push(h);const p=1/(d-2),x=-p,_=1+p,v=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,b=3,y=2,S=1,C=new Float32Array(b*E*M),N=new Float32Array(y*E*M),L=new Float32Array(S*E*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,T=k>2?0:-1,D=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(D,b*E*k),N.set(v,y*E*k);const Q=[k,k,k,k,k,k];L.set(Q,S*E*k)}const B=new Ei;B.setAttribute("position",new yi(C,b)),B.setAttribute("uv",new yi(N,y)),B.setAttribute("faceIndex",new yi(L,S)),s.push(new ri(B,null)),o>Ir&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function ag(r,e,t){const s=new _i(r,e,t);return s.texture.mapping=dc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ys(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function V1(r,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function H1(r,e,t){const s=new Float32Array(os),o=new oe(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function og(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function lg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function hc(){return`

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
	`}class C0 extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new E0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new uo(5,5,5),l=new Fi({name:"CubemapFromEquirect",uniforms:na(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:er});l.uniforms.tEquirect.value=t;const u=new ri(o,l),d=t.minFilter;return t.minFilter===ls&&(t.minFilter=en),new qS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function G1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(v,M=!1){return v==null?null:M?u(v):l(v)}function l(v){if(v&&v.isTexture){const M=v.mapping;if(M===nd||M===id)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const b=new C0(E.height);return b.fromEquirectangularTexture(r,v),e.set(v,b),v.addEventListener("dispose",p),d(b.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const M=v.mapping,E=M===nd||M===id,b=M===ds||M===Js;if(E||b){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new sg(r)),y=E?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const C=v.image;return E&&C&&C.height>0||b&&C&&h(C)?(s===null&&(s=new sg(r)),y=E?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",x),y.texture):null}}}return v}function d(v,M){return M===nd?v.mapping=ds:M===id&&(v.mapping=Js),v}function h(v){let M=0;const E=6;for(let b=0;b<E;b++)v[b]!==void 0&&M++;return M===E}function p(v){const M=v.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function x(v){const M=v.target;M.removeEventListener("dispose",x);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:_}}function W1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&rc("WebGLRenderer: "+s+" extension not supported."),o}}}function j1(r,e,t,s){const o={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(_){const v=[],M=_.index,E=_.attributes.position;let b=0;if(E===void 0)return;if(M!==null){const C=M.array;b=M.version;for(let N=0,L=C.length;N<L;N+=3){const B=C[N+0],k=C[N+1],z=C[N+2];v.push(B,k,k,z,z,B)}}else{const C=E.array;b=E.version;for(let N=0,L=C.length/3-1;N<L;N+=3){const B=N+0,k=N+1,z=N+2;v.push(B,k,k,z,z,B)}}const y=new(E.count>=65535?x0:v0)(v,1);y.version=b;const S=l.get(_);S&&e.remove(S),l.set(_,y)}function x(_){const v=l.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:x}}function X1(r,e,t){let s;function o(v){s=v}let l,u;function d(v){l=v.type,u=v.bytesPerElement}function h(v,M){r.drawElements(s,M,l,v*u),t.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,l,v*u,E),t.update(M,s,E))}function x(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,v,0,E);let y=0;for(let S=0;S<E;S++)y+=M[S];t.update(y,s,1)}function _(v,M,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)p(v[S]/u,M[S],b[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,l,v,0,b,0,E);let S=0;for(let C=0;C<E;C++)S+=M[C]*b[C];t.update(S,s,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function $1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function q1(r,e,t){const s=new WeakMap,o=new $t;function l(u,d,h){const p=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let v=s.get(d);if(v===void 0||v.count!==_){let Q=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var M=Q;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),b===!0&&(L=2),y===!0&&(L=3);let B=d.attributes.position.count*L,k=1;B>e.maxTextureSize&&(k=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*k*4*_),T=new p0(z,B,k,_);T.type=xi,T.needsUpdate=!0;const D=L*4;for(let F=0;F<_;F++){const Y=S[F],te=C[F],se=N[F],J=B*k*4*F;for(let K=0;K<Y.count;K++){const j=K*D;E===!0&&(o.fromBufferAttribute(Y,K),z[J+j+0]=o.x,z[J+j+1]=o.y,z[J+j+2]=o.z,z[J+j+3]=0),b===!0&&(o.fromBufferAttribute(te,K),z[J+j+4]=o.x,z[J+j+5]=o.y,z[J+j+6]=o.z,z[J+j+7]=0),y===!0&&(o.fromBufferAttribute(se,K),z[J+j+8]=o.x,z[J+j+9]=o.y,z[J+j+10]=o.z,z[J+j+11]=se.itemSize===4?o.w:1)}}v={count:_,texture:T,size:new dt(B,k)},s.set(d,v),d.addEventListener("dispose",Q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const b=d.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",b),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function Y1(r,e,t,s,o){let l=new WeakMap;function u(p){const x=o.render.frame,_=p.geometry,v=e.get(p,_);if(l.get(v)!==x&&(e.update(v),l.set(v,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==x&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return v}function d(){l=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),s.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:d}}const K1={[Qg]:"LINEAR_TONE_MAPPING",[Jg]:"REINHARD_TONE_MAPPING",[e0]:"CINEON_TONE_MAPPING",[t0]:"ACES_FILMIC_TONE_MAPPING",[i0]:"AGX_TONE_MAPPING",[r0]:"NEUTRAL_TONE_MAPPING",[n0]:"CUSTOM_TONE_MAPPING"};function Z1(r,e,t,s,o){const l=new _i(e,t,{type:r,depthBuffer:s,stencilBuffer:o}),u=new _i(e,t,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),d=new Ei;d.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Si([0,2,0,0,2,0],2));const h=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ri(d,h),x=new b0(-1,1,1,-1,0,1);let _=null,v=null,M=!1,E,b=null,y=[],S=!1;this.setSize=function(C,N){l.setSize(C,N),u.setSize(C,N);for(let L=0;L<y.length;L++){const B=y[L];B.setSize&&B.setSize(C,N)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const N=l.width,L=l.height;for(let B=0;B<y.length;B++){const k=y[B];k.setSize&&k.setSize(N,L)}},this.begin=function(C,N){if(M||C.toneMapping===Ni&&y.length===0)return!1;if(b=N,N!==null){const L=N.width,B=N.height;(l.width!==L||l.height!==B)&&this.setSize(L,B)}return S===!1&&C.setRenderTarget(l),E=C.toneMapping,C.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=E,M=!0;let L=l,B=u;for(let k=0;k<y.length;k++){const z=y[k];if(z.enabled!==!1&&(z.render(C,B,L,N),z.needsSwap!==!1)){const T=L;L=B,B=T}}if(_!==C.outputColorSpace||v!==C.toneMapping){_=C.outputColorSpace,v=C.toneMapping,h.defines={},Tt.getTransfer(_)===It&&(h.defines.SRGB_TRANSFER="");const k=K1[v];k&&(h.defines[k]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(b),C.render(p,x),b=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),h.dispose()}}const R0=new Tn,Rf=new io(1,1),P0=new p0,L0=new MS,D0=new E0,cg=[],ug=[],dg=new Float32Array(16),fg=new Float32Array(9),hg=new Float32Array(4);function aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=cg[o];if(l===void 0&&(l=new Float32Array(o),cg[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function pc(r,e){let t=ug[e];t===void 0&&(t=new Int32Array(e),ug[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function Q1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function J1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function nw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;hg.set(s),r.uniformMatrix2fv(this.addr,!1,hg),an(t,s)}}function iw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;fg.set(s),r.uniformMatrix3fv(this.addr,!1,fg),an(t,s)}}function rw(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;dg.set(s),r.uniformMatrix4fv(this.addr,!1,dg),an(t,s)}}function sw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function aw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function ow(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function lw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function cw(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function uw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function dw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function fw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function hw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Rf.compareFunction=t.isReversedDepthBuffer()?Xf:jf,l=Rf):l=R0,t.setTexture2D(e||l,o)}function pw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||L0,o)}function mw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||D0,o)}function gw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||P0,o)}function vw(r){switch(r){case 5126:return Q1;case 35664:return J1;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return aw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}function xw(r,e){r.uniform1fv(this.addr,e)}function _w(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function yw(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function Sw(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function Mw(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ew(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ww(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tw(r,e){r.uniform1iv(this.addr,e)}function bw(r,e){r.uniform2iv(this.addr,e)}function Aw(r,e){r.uniform3iv(this.addr,e)}function Cw(r,e){r.uniform4iv(this.addr,e)}function Rw(r,e){r.uniform1uiv(this.addr,e)}function Pw(r,e){r.uniform2uiv(this.addr,e)}function Lw(r,e){r.uniform3uiv(this.addr,e)}function Dw(r,e){r.uniform4uiv(this.addr,e)}function Nw(r,e,t){const s=this.cache,o=e.length,l=pc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Rf:u=R0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function Iw(r,e,t){const s=this.cache,o=e.length,l=pc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||L0,l[u])}function Uw(r,e,t){const s=this.cache,o=e.length,l=pc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||D0,l[u])}function Fw(r,e,t){const s=this.cache,o=e.length,l=pc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||P0,l[u])}function Ow(r){switch(r){case 5126:return xw;case 35664:return _w;case 35665:return yw;case 35666:return Sw;case 35674:return Mw;case 35675:return Ew;case 35676:return ww;case 5124:case 35670:return Tw;case 35667:case 35671:return bw;case 35668:case 35672:return Aw;case 35669:case 35673:return Cw;case 5125:return Rw;case 36294:return Pw;case 36295:return Lw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Nw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Fw}}class kw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=vw(t.type)}}class Bw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ow(t.type)}}class zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function pg(r,e){r.seq.push(e),r.map[e.id]=e}function Vw(r,e,t){const s=r.name,o=s.length;for(Id.lastIndex=0;;){const l=Id.exec(s),u=Id.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){pg(t,p===void 0?new kw(d,r,e):new Bw(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new zw(d),pg(t,_)),t=_}}}class Jl{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const d=e.getActiveUniform(t,u),h=e.getUniformLocation(t,d.name);Vw(d,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function mg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Hw=37297;let Gw=0;function Ww(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const gg=new ht;function jw(r){Tt._getMatrix(gg,Tt.workingColorSpace,r);const e=`mat3( ${gg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case tc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Ww(r.getShaderSource(e),d)}else return l}function Xw(r,e){const t=jw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $w={[Qg]:"Linear",[Jg]:"Reinhard",[e0]:"Cineon",[t0]:"ACESFilmic",[i0]:"AgX",[r0]:"Neutral",[n0]:"Custom"};function qw(r,e){const t=$w[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new oe;function Yw(){Tt.getLuminanceCoefficients(jl);const r=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function Zw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Qw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function Qa(r){return r!==""}function xg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _g(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pf(r){return r.replace(Jw,tT)}const eT=new Map;function tT(r,e){let t=mt[e];if(t===void 0){const s=eT.get(e);if(s!==void 0)t=mt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pf(t)}const nT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(r){return r.replace(nT,iT)}function iT(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Sg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rT={[ql]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function sT(r){return rT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aT={[ds]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function oT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const lT={[Js]:"ENVMAP_MODE_REFRACTION"};function cT(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":lT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uT={[Zg]:"ENVMAP_BLENDING_MULTIPLY",[eS]:"ENVMAP_BLENDING_MIX",[tS]:"ENVMAP_BLENDING_ADD"};function dT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uT[r.combine]||"ENVMAP_BLENDING_NONE"}function fT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function hT(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=sT(t),p=oT(t),x=cT(t),_=dT(t),v=fT(t),M=Kw(t),E=Zw(l),b=o.createProgram();let y,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),S.length>0&&(S+=`
`)):(y=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),S=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Xw("linearToOutputTexel",t.outputColorSpace),Yw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=Pf(u),u=xg(u,t),u=_g(u,t),d=Pf(d),d=xg(d,t),d=_g(d,t),u=yg(u),d=yg(d),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+y+u,L=C+S+d,B=mg(o,o.VERTEX_SHADER,N),k=mg(o,o.FRAGMENT_SHADER,L);o.attachShader(b,B),o.attachShader(b,k),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(F){if(r.debug.checkShaderErrors){const Y=o.getProgramInfoLog(b)||"",te=o.getShaderInfoLog(B)||"",se=o.getShaderInfoLog(k)||"",J=Y.trim(),K=te.trim(),j=se.trim();let $=!0,ue=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,B,k);else{const he=vg(o,B,"vertex"),O=vg(o,k,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+he+`
`+O)}else J!==""?lt("WebGLProgram: Program Info Log:",J):(K===""||j==="")&&(ue=!1);ue&&(F.diagnostics={runnable:$,programLog:J,vertexShader:{log:K,prefix:y},fragmentShader:{log:j,prefix:S}})}o.deleteShader(B),o.deleteShader(k),T=new Jl(o,b),D=Qw(o,b)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=o.getProgramParameter(b,Hw)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=k,this}let pT=0;class mT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new gT(e),t.set(e,s)),s}}class gT{constructor(e){this.id=pT++,this.code=e,this.usedTimes=0}}function vT(r,e,t,s,o,l){const u=new m0,d=new mT,h=new Set,p=[],x=new Map,_=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function b(T,D,Q,F,Y){const te=F.fog,se=Y.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||J,K),$=j&&j.mapping===dc?j.image.height:null,ue=M[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const he=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,O=he!==void 0?he.length:0;let Z=0;se.morphAttributes.position!==void 0&&(Z=1),se.morphAttributes.normal!==void 0&&(Z=2),se.morphAttributes.color!==void 0&&(Z=3);let Ce,Ge,Ke,le;if(ue){const Et=Li[ue];Ce=Et.vertexShader,Ge=Et.fragmentShader}else Ce=T.vertexShader,Ge=T.fragmentShader,d.update(T),Ke=d.getVertexShaderID(T),le=d.getFragmentShaderID(T);const ve=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),ke=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,nt=!!T.map,Gt=!!T.matcap,pt=!!j,yt=!!T.aoMap,bt=!!T.lightMap,ct=!!T.bumpMap,Ut=!!T.normalMap,V=!!T.displacementMap,Ft=!!T.emissiveMap,vt=!!T.metalnessMap,xt=!!T.roughnessMap,Be=T.anisotropy>0,P=T.clearcoat>0,g=T.dispersion>0,I=T.iridescence>0,q=T.sheen>0,pe=T.transmission>0,ce=Be&&!!T.anisotropyMap,Pe=P&&!!T.clearcoatMap,we=P&&!!T.clearcoatNormalMap,ze=P&&!!T.clearcoatRoughnessMap,et=I&&!!T.iridescenceMap,Se=I&&!!T.iridescenceThicknessMap,be=q&&!!T.sheenColorMap,$e=q&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ne=!!T.specularColorMap,ut=!!T.specularIntensityMap,G=pe&&!!T.transmissionMap,Ae=pe&&!!T.thicknessMap,Ee=!!T.gradientMap,Ie=!!T.alphaMap,Me=T.alphaTest>0,me=!!T.alphaHash,je=!!T.extensions;let st=Ni;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(st=r.toneMapping);const Nt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ge,defines:T.defines,customVertexShaderID:Ke,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:ke,instancingColor:ke&&Y.instanceColor!==null,instancingMorph:ke&&Y.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ta,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Gt,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:$,aoMap:yt,lightMap:bt,bumpMap:ct,normalMap:Ut,displacementMap:V,emissiveMap:Ft,normalMapObjectSpace:Ut&&T.normalMapType===sS,normalMapTangentSpace:Ut&&T.normalMapType===rS,metalnessMap:vt,roughnessMap:xt,anisotropy:Be,anisotropyMap:ce,clearcoat:P,clearcoatMap:Pe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:g,iridescence:I,iridescenceMap:et,iridescenceThicknessMap:Se,sheen:q,sheenColorMap:be,sheenRoughnessMap:$e,specularMap:We,specularColorMap:Ne,specularIntensityMap:ut,transmission:pe,transmissionMap:G,thicknessMap:Ae,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Ks&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:me,combine:T.combine,mapUv:nt&&E(T.map.channel),aoMapUv:yt&&E(T.aoMap.channel),lightMapUv:bt&&E(T.lightMap.channel),bumpMapUv:ct&&E(T.bumpMap.channel),normalMapUv:Ut&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Ft&&E(T.emissiveMap.channel),metalnessMapUv:vt&&E(T.metalnessMap.channel),roughnessMapUv:xt&&E(T.roughnessMap.channel),anisotropyMapUv:ce&&E(T.anisotropyMap.channel),clearcoatMapUv:Pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:be&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(T.sheenRoughnessMap.channel),specularMapUv:We&&E(T.specularMap.channel),specularColorMapUv:Ne&&E(T.specularColorMap.channel),specularIntensityMapUv:ut&&E(T.specularIntensityMap.channel),transmissionMapUv:G&&E(T.transmissionMap.channel),thicknessMapUv:Ae&&E(T.thicknessMap.channel),alphaMapUv:Ie&&E(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ut||Be),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!se.attributes.uv&&(nt||Ie),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||se.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ge,skinning:Y.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Q.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===It,decodeVideoTextureEmissive:Ft&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===It,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=h.has(1),Nt.vertexUv2s=h.has(2),Nt.vertexUv3s=h.has(3),h.clear(),Nt}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)D.push(Q),D.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(S(D,T),C(D,T),D.push(r.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function S(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function C(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),T.push(u.mask)}function N(T){const D=M[T.type];let Q;if(D){const F=Li[D];Q=GS.clone(F.uniforms)}else Q=T.uniforms;return Q}function L(T,D){let Q=x.get(D);return Q!==void 0?++Q.usedTimes:(Q=new hT(r,D,T,o),p.push(Q),x.set(D,Q)),Q}function B(T){if(--T.usedTimes===0){const D=p.indexOf(T);p[D]=p[p.length-1],p.pop(),x.delete(T.cacheKey),T.destroy()}}function k(T){d.remove(T)}function z(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:N,acquireProgram:L,releaseProgram:B,releaseShaderCache:k,programs:p,dispose:z}}function xT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function _T(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Eg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function d(v,M,E,b,y,S){let C=r[e];return C===void 0?(C={id:v.id,object:v,geometry:M,material:E,materialVariant:u(v),groupOrder:b,renderOrder:v.renderOrder,z:y,group:S},r[e]=C):(C.id=v.id,C.object=v,C.geometry=M,C.material=E,C.materialVariant=u(v),C.groupOrder=b,C.renderOrder=v.renderOrder,C.z=y,C.group=S),e++,C}function h(v,M,E,b,y,S){const C=d(v,M,E,b,y,S);E.transmission>0?s.push(C):E.transparent===!0?o.push(C):t.push(C)}function p(v,M,E,b,y,S){const C=d(v,M,E,b,y,S);E.transmission>0?s.unshift(C):E.transparent===!0?o.unshift(C):t.unshift(C)}function x(v,M){t.length>1&&t.sort(v||_T),s.length>1&&s.sort(M||Mg),o.length>1&&o.sort(M||Mg)}function _(){for(let v=e,M=r.length;v<M;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:_,sort:x}}function yT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Eg,r.set(s,[u])):o>=l.length?(u=new Eg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function ST(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new oe,color:new Pt};break;case"SpotLight":t={position:new oe,direction:new oe,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new oe,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new oe,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=t,t}}}function MT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ET=0;function wT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function TT(r){const e=new ST,t=MT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new oe);const o=new oe,l=new Zt,u=new Zt;function d(p){let x=0,_=0,v=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,E=0,b=0,y=0,S=0,C=0,N=0,L=0,B=0,k=0,z=0;p.sort(wT);for(let D=0,Q=p.length;D<Q;D++){const F=p[D],Y=F.color,te=F.intensity,se=F.distance;let J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ea?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=Y.r*te,_+=Y.g*te,v+=Y.b*te;else if(F.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(F.sh.coefficients[K],te);z++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,$=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=F.shadow.matrix,C++}s.directional[M]=K,M++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(Y).multiplyScalar(te),K.distance=se,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,s.spot[b]=K;const j=F.shadow;if(F.map&&(s.spotLightMap[B]=F.map,B++,j.updateMatrices(F),F.castShadow&&k++),s.spotLightMatrix[b]=j.matrix,F.castShadow){const $=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.spotShadow[b]=$,s.spotShadowMap[b]=J,L++}b++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(Y).multiplyScalar(te),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),s.rectArea[y]=K,y++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const j=F.shadow,$=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=F.shadow.matrix,N++}s.point[E]=K,E++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(te),K.groundColor.copy(F.groundColor).multiplyScalar(te),s.hemi[S]=K,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==L||T.numSpotMaps!==B||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=L+B-k,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=L,T.numSpotMaps=B,T.numLightProbes=z,s.version=ET++)}function h(p,x){let _=0,v=0,M=0,E=0,b=0;const y=x.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const N=p[S];if(N.isDirectionalLight){const L=s.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(N.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const L=s.point[v];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),v++}else if(N.isHemisphereLight){const L=s.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),b++}}}return{setup:d,setupView:h,state:s}}function wg(r){const e=new TT(r),t=[],s=[];function o(x){p.camera=x,t.length=0,s.length=0}function l(x){t.push(x)}function u(x){s.push(x)}function d(){e.setup(t)}function h(x){e.setupView(t,x)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function bT(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new wg(r),e.set(o,[d])):l>=u.length?(d=new wg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,RT=[new oe(1,0,0),new oe(-1,0,0),new oe(0,1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1)],PT=[new oe(0,-1,0),new oe(0,-1,0),new oe(0,0,1),new oe(0,0,-1),new oe(0,-1,0),new oe(0,-1,0)],Tg=new Zt,Ya=new oe,Ud=new oe;function LT(r,e,t){let s=new M0;const o=new dt,l=new dt,u=new $t,d=new XS,h=new $S,p={},x=t.maxTextureSize,_={[Ur]:Un,[Un]:Ur,[Qi]:Qi},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:AT,fragmentShader:CT}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let S=this.type;this.render=function(k,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||k.length===0)return;this.type===Uy&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ql);const D=r.getRenderTarget(),Q=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(er),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const te=S!==this.type;te&&z.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(J=>J.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,J=k.length;se<J;se++){const K=k[se],j=K.shadow;if(j===void 0){lt("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const $=j.getFrameExtents();o.multiply($),l.copy(j.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/$.x),o.x=l.x*$.x,j.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/$.y),o.y=l.y*$.y,j.mapSize.y=l.y));const ue=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ue,j.map===null||te===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ka){if(K.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new _i(o.x,o.y,{format:ea,type:Ui,minFilter:en,magFilter:en,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new io(o.x,o.y,xi),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=ir,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn}else K.isPointLight?(j.map=new C0(o.x),j.map.depthTexture=new VS(o.x,Ii)):(j.map=new _i(o.x,o.y),j.map.depthTexture=new io(o.x,o.y,Ii)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=ir,this.type===ql?(j.map.depthTexture.compareFunction=ue?Xf:jf,j.map.depthTexture.minFilter=en,j.map.depthTexture.magFilter=en):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn);j.camera.updateProjectionMatrix()}const he=j.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<he;O++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,O),r.clear();else{O===0&&(r.setRenderTarget(j.map),r.clear());const Z=j.getViewport(O);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),Y.viewport(u)}if(K.isPointLight){const Z=j.camera,Ce=j.matrix,Ge=K.distance||Z.far;Ge!==Z.far&&(Z.far=Ge,Z.updateProjectionMatrix()),Ya.setFromMatrixPosition(K.matrixWorld),Z.position.copy(Ya),Ud.copy(Z.position),Ud.add(RT[O]),Z.up.copy(PT[O]),Z.lookAt(Ud),Z.updateMatrixWorld(),Ce.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Tg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Tg,Z.coordinateSystem,Z.reversedDepth)}else j.updateMatrices(K);s=j.getFrustum(),L(z,T,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ka&&C(j,T),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(D,Q,F)};function C(k,z){const T=e.update(b);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new _i(o.x,o.y,{format:ea,type:Ui})),v.uniforms.shadow_pass.value=k.map.depthTexture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(z,null,T,v,b,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(z,null,T,M,b,null)}function N(k,z,T,D){let Q=null;const F=T.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)Q=F;else if(Q=T.isPointLight===!0?h:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Y=Q.uuid,te=z.uuid;let se=p[Y];se===void 0&&(se={},p[Y]=se);let J=se[te];J===void 0&&(J=Q.clone(),se[te]=J,z.addEventListener("dispose",B)),Q=J}if(Q.visible=z.visible,Q.wireframe=z.wireframe,D===Ka?Q.side=z.shadowSide!==null?z.shadowSide:z.side:Q.side=z.shadowSide!==null?z.shadowSide:_[z.side],Q.alphaMap=z.alphaMap,Q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Q.map=z.map,Q.clipShadows=z.clipShadows,Q.clippingPlanes=z.clippingPlanes,Q.clipIntersection=z.clipIntersection,Q.displacementMap=z.displacementMap,Q.displacementScale=z.displacementScale,Q.displacementBias=z.displacementBias,Q.wireframeLinewidth=z.wireframeLinewidth,Q.linewidth=z.linewidth,T.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const Y=r.properties.get(Q);Y.light=T}return Q}function L(k,z,T,D,Q){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&Q===Ka)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,k.matrixWorld);const te=e.update(k),se=k.material;if(Array.isArray(se)){const J=te.groups;for(let K=0,j=J.length;K<j;K++){const $=J[K],ue=se[$.materialIndex];if(ue&&ue.visible){const he=N(k,ue,D,Q);k.onBeforeShadow(r,k,z,T,te,he,$),r.renderBufferDirect(T,null,te,he,k,$),k.onAfterShadow(r,k,z,T,te,he,$)}}}else if(se.visible){const J=N(k,se,D,Q);k.onBeforeShadow(r,k,z,T,te,J,null),r.renderBufferDirect(T,null,te,J,k,null),k.onAfterShadow(r,k,z,T,te,J,null)}}const Y=k.children;for(let te=0,se=Y.length;te<se;te++)L(Y[te],z,T,D,Q)}function B(k){k.target.removeEventListener("dispose",B);for(const T in p){const D=p[T],Q=k.target.uuid;Q in D&&(D[Q].dispose(),delete D[Q])}}}function DT(r,e){function t(){let G=!1;const Ae=new $t;let Ee=null;const Ie=new $t(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!G&&(r.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){G=Me},setClear:function(Me,me,je,st,Nt){Nt===!0&&(Me*=st,me*=st,je*=st),Ae.set(Me,me,je,st),Ie.equals(Ae)===!1&&(r.clearColor(Me,me,je,st),Ie.copy(Ae))},reset:function(){G=!1,Ee=null,Ie.set(-1,0,0,0)}}}function s(){let G=!1,Ae=!1,Ee=null,Ie=null,Me=null;return{setReversed:function(me){if(Ae!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ae=me;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return Ae},setTest:function(me){me?ve(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(me){Ee!==me&&!G&&(r.depthMask(me),Ee=me)},setFunc:function(me){if(Ae&&(me=mS[me]),Ie!==me){switch(me){case zd:r.depthFunc(r.NEVER);break;case Vd:r.depthFunc(r.ALWAYS);break;case Hd:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Gd:r.depthFunc(r.EQUAL);break;case Wd:r.depthFunc(r.GEQUAL);break;case jd:r.depthFunc(r.GREATER);break;case Xd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=me}},setLocked:function(me){G=me},setClear:function(me){Me!==me&&(Me=me,Ae&&(me=1-me),r.clearDepth(me))},reset:function(){G=!1,Ee=null,Ie=null,Me=null,Ae=!1}}}function o(){let G=!1,Ae=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Nt=null;return{setTest:function(Et){G||(Et?ve(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Et){Ae!==Et&&!G&&(r.stencilMask(Et),Ae=Et)},setFunc:function(Et,jn,yn){(Ee!==Et||Ie!==jn||Me!==yn)&&(r.stencilFunc(Et,jn,yn),Ee=Et,Ie=jn,Me=yn)},setOp:function(Et,jn,yn){(me!==Et||je!==jn||st!==yn)&&(r.stencilOp(Et,jn,yn),me=Et,je=jn,st=yn)},setLocked:function(Et){G=Et},setClear:function(Et){Nt!==Et&&(r.clearStencil(Et),Nt=Et)},reset:function(){G=!1,Ae=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Nt=null}}}const l=new t,u=new s,d=new o,h=new WeakMap,p=new WeakMap;let x={},_={},v=new WeakMap,M=[],E=null,b=!1,y=null,S=null,C=null,N=null,L=null,B=null,k=null,z=new Pt(0,0,0),T=0,D=!1,Q=null,F=null,Y=null,te=null,se=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),K=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=j>=2);let ue=null,he={};const O=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),Ce=new $t().fromArray(O),Ge=new $t().fromArray(Z);function Ke(G,Ae,Ee,Ie){const Me=new Uint8Array(4),me=r.createTexture();r.bindTexture(G,me),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Ee;je++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ae,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Ae+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return me}const le={};le[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),le[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),le[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Qs),ct(!1),Ut(Am),ve(r.CULL_FACE),yt(er);function ve(G){x[G]!==!0&&(r.enable(G),x[G]=!0)}function ge(G){x[G]!==!1&&(r.disable(G),x[G]=!1)}function ke(G,Ae){return _[G]!==Ae?(r.bindFramebuffer(G,Ae),_[G]=Ae,G===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ae),G===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(G,Ae){let Ee=M,Ie=!1;if(G){Ee=v.get(Ae),Ee===void 0&&(Ee=[],v.set(Ae,Ee));const Me=G.textures;if(Ee.length!==Me.length||Ee[0]!==r.COLOR_ATTACHMENT0){for(let me=0,je=Me.length;me<je;me++)Ee[me]=r.COLOR_ATTACHMENT0+me;Ee.length=Me.length,Ie=!0}}else Ee[0]!==r.BACK&&(Ee[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ee)}function nt(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const Gt={[as]:r.FUNC_ADD,[Oy]:r.FUNC_SUBTRACT,[ky]:r.FUNC_REVERSE_SUBTRACT};Gt[By]=r.MIN,Gt[zy]=r.MAX;const pt={[Vy]:r.ZERO,[Hy]:r.ONE,[Gy]:r.SRC_COLOR,[kd]:r.SRC_ALPHA,[Yy]:r.SRC_ALPHA_SATURATE,[$y]:r.DST_COLOR,[jy]:r.DST_ALPHA,[Wy]:r.ONE_MINUS_SRC_COLOR,[Bd]:r.ONE_MINUS_SRC_ALPHA,[qy]:r.ONE_MINUS_DST_COLOR,[Xy]:r.ONE_MINUS_DST_ALPHA,[Ky]:r.CONSTANT_COLOR,[Zy]:r.ONE_MINUS_CONSTANT_COLOR,[Qy]:r.CONSTANT_ALPHA,[Jy]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(G,Ae,Ee,Ie,Me,me,je,st,Nt,Et){if(G===er){b===!0&&(ge(r.BLEND),b=!1);return}if(b===!1&&(ve(r.BLEND),b=!0),G!==Fy){if(G!==y||Et!==D){if((S!==as||L!==as)&&(r.blendEquation(r.FUNC_ADD),S=as,L=as),Et)switch(G){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Od:r.blendFunc(r.ONE,r.ONE);break;case Cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Od:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",G);break}C=null,N=null,B=null,k=null,z.set(0,0,0),T=0,y=G,D=Et}return}Me=Me||Ae,me=me||Ee,je=je||Ie,(Ae!==S||Me!==L)&&(r.blendEquationSeparate(Gt[Ae],Gt[Me]),S=Ae,L=Me),(Ee!==C||Ie!==N||me!==B||je!==k)&&(r.blendFuncSeparate(pt[Ee],pt[Ie],pt[me],pt[je]),C=Ee,N=Ie,B=me,k=je),(st.equals(z)===!1||Nt!==T)&&(r.blendColor(st.r,st.g,st.b,Nt),z.copy(st),T=Nt),y=G,D=!1}function bt(G,Ae){G.side===Qi?ge(r.CULL_FACE):ve(r.CULL_FACE);let Ee=G.side===Un;Ae&&(Ee=!Ee),ct(Ee),G.blending===Ks&&G.transparent===!1?yt(er):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ie=G.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ft(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){Q!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),Q=G)}function Ut(G){G!==Ny?(ve(r.CULL_FACE),G!==F&&(G===Am?r.cullFace(r.BACK):G===Iy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),F=G}function V(G){G!==Y&&(K&&r.lineWidth(G),Y=G)}function Ft(G,Ae,Ee){G?(ve(r.POLYGON_OFFSET_FILL),(te!==Ae||se!==Ee)&&(te=Ae,se=Ee,u.getReversed()&&(Ae=-Ae),r.polygonOffset(Ae,Ee))):ge(r.POLYGON_OFFSET_FILL)}function vt(G){G?ve(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function xt(G){G===void 0&&(G=r.TEXTURE0+J-1),ue!==G&&(r.activeTexture(G),ue=G)}function Be(G,Ae,Ee){Ee===void 0&&(ue===null?Ee=r.TEXTURE0+J-1:Ee=ue);let Ie=he[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},he[Ee]=Ie),(Ie.type!==G||Ie.texture!==Ae)&&(ue!==Ee&&(r.activeTexture(Ee),ue=Ee),r.bindTexture(G,Ae||le[G]),Ie.type=G,Ie.texture=Ae)}function P(){const G=he[ue];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function q(){try{r.texSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function pe(){try{r.texSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function we(){try{r.texStorage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function ze(){try{r.texStorage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function et(){try{r.texImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Se(){try{r.texImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function be(G){Ce.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function $e(G){Ge.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function We(G,Ae){let Ee=p.get(Ae);Ee===void 0&&(Ee=new WeakMap,p.set(Ae,Ee));let Ie=Ee.get(G);Ie===void 0&&(Ie=r.getUniformBlockIndex(Ae,G.name),Ee.set(G,Ie))}function Ne(G,Ae){const Ie=p.get(Ae).get(G);h.get(Ae)!==Ie&&(r.uniformBlockBinding(Ae,Ie,G.__bindingPointIndex),h.set(Ae,Ie))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},ue=null,he={},_={},v=new WeakMap,M=[],E=null,b=!1,y=null,S=null,C=null,N=null,L=null,B=null,k=null,z=new Pt(0,0,0),T=0,D=!1,Q=null,F=null,Y=null,te=null,se=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ve,disable:ge,bindFramebuffer:ke,drawBuffers:He,useProgram:nt,setBlending:yt,setMaterial:bt,setFlipSided:ct,setCullFace:Ut,setLineWidth:V,setPolygonOffset:Ft,setScissorTest:vt,activeTexture:xt,bindTexture:Be,unbindTexture:P,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:et,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:ze,texSubImage2D:q,texSubImage3D:pe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Pe,scissor:be,viewport:$e,reset:ut}}function NT(r,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,x=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,g){return M?new OffscreenCanvas(P,g):ic("canvas")}function b(P,g,I){let q=1;const pe=Be(P);if((pe.width>I||pe.height>I)&&(q=I/Math.max(pe.width,pe.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ce=Math.floor(q*pe.width),Pe=Math.floor(q*pe.height);_===void 0&&(_=E(ce,Pe));const we=g?E(ce,Pe):_;return we.width=ce,we.height=Pe,we.getContext("2d").drawImage(P,0,0,ce,Pe),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ce+"x"+Pe+")."),we}else return"data"in P&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function y(P){return P.generateMipmaps}function S(P){r.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(P,g,I,q,pe=!1){if(P!==null){if(r[P]!==void 0)return r[P];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ce=g;if(g===r.RED&&(I===r.FLOAT&&(ce=r.R32F),I===r.HALF_FLOAT&&(ce=r.R16F),I===r.UNSIGNED_BYTE&&(ce=r.R8)),g===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(ce=r.R8UI),I===r.UNSIGNED_SHORT&&(ce=r.R16UI),I===r.UNSIGNED_INT&&(ce=r.R32UI),I===r.BYTE&&(ce=r.R8I),I===r.SHORT&&(ce=r.R16I),I===r.INT&&(ce=r.R32I)),g===r.RG&&(I===r.FLOAT&&(ce=r.RG32F),I===r.HALF_FLOAT&&(ce=r.RG16F),I===r.UNSIGNED_BYTE&&(ce=r.RG8)),g===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(ce=r.RG8UI),I===r.UNSIGNED_SHORT&&(ce=r.RG16UI),I===r.UNSIGNED_INT&&(ce=r.RG32UI),I===r.BYTE&&(ce=r.RG8I),I===r.SHORT&&(ce=r.RG16I),I===r.INT&&(ce=r.RG32I)),g===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),I===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),I===r.UNSIGNED_INT&&(ce=r.RGB32UI),I===r.BYTE&&(ce=r.RGB8I),I===r.SHORT&&(ce=r.RGB16I),I===r.INT&&(ce=r.RGB32I)),g===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),I===r.UNSIGNED_INT&&(ce=r.RGBA32UI),I===r.BYTE&&(ce=r.RGBA8I),I===r.SHORT&&(ce=r.RGBA16I),I===r.INT&&(ce=r.RGBA32I)),g===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),g===r.RGBA){const Pe=pe?tc:Tt.getTransfer(q);I===r.FLOAT&&(ce=r.RGBA32F),I===r.HALF_FLOAT&&(ce=r.RGBA16F),I===r.UNSIGNED_BYTE&&(ce=Pe===It?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(P,g){let I;return P?g===null||g===Ii||g===no?I=r.DEPTH24_STENCIL8:g===xi?I=r.DEPTH32F_STENCIL8:g===to&&(I=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===no?I=r.DEPTH_COMPONENT24:g===xi?I=r.DEPTH_COMPONENT32F:g===to&&(I=r.DEPTH_COMPONENT16),I}function B(P,g){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==hn&&P.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?g.mipmaps.length:1}function k(P){const g=P.target;g.removeEventListener("dispose",k),T(g),g.isVideoTexture&&x.delete(g)}function z(P){const g=P.target;g.removeEventListener("dispose",z),Q(g)}function T(P){const g=s.get(P);if(g.__webglInit===void 0)return;const I=P.source,q=v.get(I);if(q){const pe=q[g.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&D(P),Object.keys(q).length===0&&v.delete(I)}s.remove(P)}function D(P){const g=s.get(P);r.deleteTexture(g.__webglTexture);const I=P.source,q=v.get(I);delete q[g.__cacheKey],u.memory.textures--}function Q(P){const g=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let pe=0;pe<g.__webglFramebuffer[q].length;pe++)r.deleteFramebuffer(g.__webglFramebuffer[q][pe]);else r.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)r.deleteFramebuffer(g.__webglFramebuffer[q]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=P.textures;for(let q=0,pe=I.length;q<pe;q++){const ce=s.get(I[q]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),u.memory.textures--),s.remove(I[q])}s.remove(P)}let F=0;function Y(){F=0}function te(){const P=F;return P>=o.maxTextures&&lt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),F+=1,P}function se(P){const g=[];return g.push(P.wrapS),g.push(P.wrapT),g.push(P.wrapR||0),g.push(P.magFilter),g.push(P.minFilter),g.push(P.anisotropy),g.push(P.internalFormat),g.push(P.format),g.push(P.type),g.push(P.generateMipmaps),g.push(P.premultiplyAlpha),g.push(P.flipY),g.push(P.unpackAlignment),g.push(P.colorSpace),g.join()}function J(P,g){const I=s.get(P);if(P.isVideoTexture&&vt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&I.__version!==P.version){const q=P.image;if(q===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{le(I,P,g);return}}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+g)}function K(P,g){const I=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){le(I,P,g);return}else P.isExternalTexture&&(I.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+g)}function j(P,g){const I=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&I.__version!==P.version){le(I,P,g);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+g)}function $(P,g){const I=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&I.__version!==P.version){ve(I,P,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+g)}const ue={[$d]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[qd]:r.MIRRORED_REPEAT},he={[hn]:r.NEAREST,[nS]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[rd]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},O={[aS]:r.NEVER,[dS]:r.ALWAYS,[oS]:r.LESS,[jf]:r.LEQUAL,[lS]:r.EQUAL,[Xf]:r.GEQUAL,[cS]:r.GREATER,[uS]:r.NOTEQUAL};function Z(P,g){if(g.type===xi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===rd||g.magFilter===Sl||g.magFilter===ls||g.minFilter===en||g.minFilter===rd||g.minFilter===Sl||g.minFilter===ls)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,ue[g.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,ue[g.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,ue[g.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,he[g.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,O[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===hn||g.minFilter!==Sl&&g.minFilter!==ls||g.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||s.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(P,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,o.getMaxAnisotropy())),s.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(P,g){let I=!1;P.__webglInit===void 0&&(P.__webglInit=!0,g.addEventListener("dispose",k));const q=g.source;let pe=v.get(q);pe===void 0&&(pe={},v.set(q,pe));const ce=se(g);if(ce!==P.__cacheKey){pe[ce]===void 0&&(pe[ce]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,I=!0),pe[ce].usedTimes++;const Pe=pe[P.__cacheKey];Pe!==void 0&&(pe[P.__cacheKey].usedTimes--,Pe.usedTimes===0&&D(g)),P.__cacheKey=ce,P.__webglTexture=pe[ce].texture}return I}function Ge(P,g,I){return Math.floor(Math.floor(P/I)/g)}function Ke(P,g,I,q){const ce=P.updateRanges;if(ce.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,I,q,g.data);else{ce.sort((Se,be)=>Se.start-be.start);let Pe=0;for(let Se=1;Se<ce.length;Se++){const be=ce[Pe],$e=ce[Se],We=be.start+be.count,Ne=Ge($e.start,g.width,4),ut=Ge(be.start,g.width,4);$e.start<=We+1&&Ne===ut&&Ge($e.start+$e.count-1,g.width,4)===Ne?be.count=Math.max(be.count,$e.start+$e.count-be.start):(++Pe,ce[Pe]=$e)}ce.length=Pe+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let Se=0,be=ce.length;Se<be;Se++){const $e=ce[Se],We=Math.floor($e.start/4),Ne=Math.ceil($e.count/4),ut=We%g.width,G=Math.floor(We/g.width),Ae=Ne,Ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,ut,G,Ae,Ee,I,q,g.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function le(P,g,I){let q=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=r.TEXTURE_3D);const pe=Ce(P,g),ce=g.source;t.bindTexture(q,P.__webglTexture,r.TEXTURE0+I);const Pe=s.get(ce);if(ce.version!==Pe.__version||pe===!0){t.activeTexture(r.TEXTURE0+I);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),et=g.colorSpace===Nr||we===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Se=b(g.image,!1,o.maxTextureSize);Se=xt(g,Se);const be=l.convert(g.format,g.colorSpace),$e=l.convert(g.type);let We=N(g.internalFormat,be,$e,g.colorSpace,g.isVideoTexture);Z(q,g);let Ne;const ut=g.mipmaps,G=g.isVideoTexture!==!0,Ae=Pe.__version===void 0||pe===!0,Ee=ce.dataReady,Ie=B(g,Se);if(g.isDepthTexture)We=L(g.format===cs,g.type),Ae&&(G?t.texStorage2D(r.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,be,$e,null));else if(g.isDataTexture)if(ut.length>0){G&&Ae&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,be,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,be,$e,Ne.data);g.generateMipmaps=!1}else G?(Ae&&t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height),Ee&&Ke(g,Se,be,$e)):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,be,$e,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,ut[0].width,ut[0].height,Se.depth);for(let Me=0,me=ut.length;Me<me;Me++)if(Ne=ut[Me],g.format!==ii)if(be!==null)if(G){if(Ee)if(g.layerUpdates.size>0){const je=ng(Ne.width,Ne.height,g.format,g.type);for(const st of g.layerUpdates){const Nt=Ne.data.subarray(st*je/Ne.data.BYTES_PER_ELEMENT,(st+1)*je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,st,Ne.width,Ne.height,1,be,Nt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,be,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,be,$e,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,be,$e,Ne.data)}else{G&&Ae&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],g.format!==ii?be!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,be,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,be,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,be,$e,Ne.data)}else if(g.isDataArrayTexture)if(G){if(Ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,Se.width,Se.height,Se.depth),Ee)if(g.layerUpdates.size>0){const Me=ng(Se.width,Se.height,g.format,g.type);for(const me of g.layerUpdates){const je=Se.data.subarray(me*Me/Se.data.BYTES_PER_ELEMENT,(me+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,be,$e,je)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,be,$e,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,be,$e,Se.data);else if(g.isData3DTexture)G?(Ae&&t.texStorage3D(r.TEXTURE_3D,Ie,We,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,be,$e,Se.data)):t.texImage3D(r.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,be,$e,Se.data);else if(g.isFramebufferTexture){if(Ae)if(G)t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height);else{let Me=Se.width,me=Se.height;for(let je=0;je<Ie;je++)t.texImage2D(r.TEXTURE_2D,je,We,Me,me,0,be,$e,null),Me>>=1,me>>=1}}else if(ut.length>0){if(G&&Ae){const Me=Be(ut[0]);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,be,$e,Ne):t.texImage2D(r.TEXTURE_2D,Me,We,be,$e,Ne);g.generateMipmaps=!1}else if(G){if(Ae){const Me=Be(Se);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,be,$e,Se)}else t.texImage2D(r.TEXTURE_2D,0,We,be,$e,Se);y(g)&&S(q),Pe.__version=ce.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function ve(P,g,I){if(g.image.length!==6)return;const q=Ce(P,g),pe=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+I);const ce=s.get(pe);if(pe.version!==ce.__version||q===!0){t.activeTexture(r.TEXTURE0+I);const Pe=Tt.getPrimaries(Tt.workingColorSpace),we=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),ze=g.colorSpace===Nr||Pe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const et=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,be=[];for(let me=0;me<6;me++)!et&&!Se?be[me]=b(g.image[me],!0,o.maxCubemapSize):be[me]=Se?g.image[me].image:g.image[me],be[me]=xt(g,be[me]);const $e=be[0],We=l.convert(g.format,g.colorSpace),Ne=l.convert(g.type),ut=N(g.internalFormat,We,Ne,g.colorSpace),G=g.isVideoTexture!==!0,Ae=ce.__version===void 0||q===!0,Ee=pe.dataReady;let Ie=B(g,$e);Z(r.TEXTURE_CUBE_MAP,g);let Me;if(et){G&&Ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ut,$e.width,$e.height);for(let me=0;me<6;me++){Me=be[me].mipmaps;for(let je=0;je<Me.length;je++){const st=Me[je];g.format!==ii?We!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,Ne,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,st.width,st.height,0,We,Ne,st.data)}}}else{if(Me=g.mipmaps,G&&Ae){Me.length>0&&Ie++;const me=Be(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Se){G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,be[me].width,be[me].height,We,Ne,be[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,be[me].width,be[me].height,0,We,Ne,be[me].data);for(let je=0;je<Me.length;je++){const Nt=Me[je].image[me].image;G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Nt.width,Nt.height,We,Ne,Nt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,Nt.width,Nt.height,0,We,Ne,Nt.data)}}else{G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Ne,be[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,We,Ne,be[me]);for(let je=0;je<Me.length;je++){const st=Me[je];G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,We,Ne,st.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,We,Ne,st.image[me])}}}y(g)&&S(r.TEXTURE_CUBE_MAP),ce.__version=pe.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function ge(P,g,I,q,pe,ce){const Pe=l.convert(I.format,I.colorSpace),we=l.convert(I.type),ze=N(I.internalFormat,Pe,we,I.colorSpace),et=s.get(g),Se=s.get(I);if(Se.__renderTarget=g,!et.__hasExternalTextures){const be=Math.max(1,g.width>>ce),$e=Math.max(1,g.height>>ce);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,ce,ze,be,$e,g.depth,0,Pe,we,null):t.texImage2D(pe,ce,ze,be,$e,0,Pe,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,P),Ft(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,pe,Se.__webglTexture,0,V(g)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,pe,Se.__webglTexture,ce),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(P,g,I){if(r.bindRenderbuffer(r.RENDERBUFFER,P),g.depthBuffer){const q=g.depthTexture,pe=q&&q.isDepthTexture?q.type:null,ce=L(g.stencilBuffer,pe),Pe=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ft(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),ce,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),ce,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ce,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,P)}else{const q=g.textures;for(let pe=0;pe<q.length;pe++){const ce=q[pe],Pe=l.convert(ce.format,ce.colorSpace),we=l.convert(ce.type),ze=N(ce.internalFormat,Pe,we,ce.colorSpace);Ft(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),ze,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),ze,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ze,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(P,g,I){const q=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,P),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(g.depthTexture);if(pe.__renderTarget=g,(!pe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),q){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,g.depthTexture.addEventListener("dispose",k)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Z(r.TEXTURE_CUBE_MAP,g.depthTexture);const et=l.convert(g.depthTexture.format),Se=l.convert(g.depthTexture.type);let be;g.depthTexture.format===ir?be=r.DEPTH_COMPONENT24:g.depthTexture.format===cs&&(be=r.DEPTH24_STENCIL8);for(let $e=0;$e<6;$e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,be,g.width,g.height,0,et,Se,null)}}else J(g.depthTexture,0);const ce=pe.__webglTexture,Pe=V(g),we=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,ze=g.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(g.depthTexture.format===ir)Ft(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,ce,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,ce,0);else if(g.depthTexture.format===cs)Ft(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,ce,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,ce,0);else throw new Error("Unknown depthTexture format")}function nt(P){const g=s.get(P),I=P.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const pe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",pe)};q.addEventListener("dispose",pe),g.__depthDisposeCallback=pe}g.__boundDepthTexture=q}if(P.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let q=0;q<6;q++)He(g.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?He(g.__webglFramebuffer[0],P,0):He(g.__webglFramebuffer,P,0)}else if(I){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=r.createRenderbuffer(),ke(g.__webglDepthbuffer[q],P,!1);else{const pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ce)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),ke(g.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,ce)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(P,g,I){const q=s.get(P);g!==void 0&&ge(q.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&nt(P)}function pt(P){const g=P.texture,I=s.get(P),q=s.get(g);P.addEventListener("dispose",z);const pe=P.textures,ce=P.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=g.version,u.memory.textures++),ce){I.__webglFramebuffer=[];for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[we]=[];for(let ze=0;ze<g.mipmaps.length;ze++)I.__webglFramebuffer[we][ze]=r.createFramebuffer()}else I.__webglFramebuffer[we]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let we=0;we<g.mipmaps.length;we++)I.__webglFramebuffer[we]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let we=0,ze=pe.length;we<ze;we++){const et=s.get(pe[we]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),u.memory.textures++)}if(P.samples>0&&Ft(P)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let we=0;we<pe.length;we++){const ze=pe[we];I.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[we]);const et=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),be=N(ze.internalFormat,et,Se,ze.colorSpace,P.isXRRenderTarget===!0),$e=V(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,be,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,I.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(I.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Z(r.TEXTURE_CUBE_MAP,g);for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[we][ze],P,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else ge(I.__webglFramebuffer[we],P,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(g)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let we=0,ze=pe.length;we<ze;we++){const et=pe[we],Se=s.get(et);let be=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,Se.__webglTexture),Z(be,et),ge(I.__webglFramebuffer,P,et,r.COLOR_ATTACHMENT0+we,be,0),y(et)&&S(be)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(we=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,q.__webglTexture),Z(we,g),g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[ze],P,g,r.COLOR_ATTACHMENT0,we,ze);else ge(I.__webglFramebuffer,P,g,r.COLOR_ATTACHMENT0,we,0);y(g)&&S(we),t.unbindTexture()}P.depthBuffer&&nt(P)}function yt(P){const g=P.textures;for(let I=0,q=g.length;I<q;I++){const pe=g[I];if(y(pe)){const ce=C(P),Pe=s.get(pe).__webglTexture;t.bindTexture(ce,Pe),S(ce),t.unbindTexture()}}}const bt=[],ct=[];function Ut(P){if(P.samples>0){if(Ft(P)===!1){const g=P.textures,I=P.width,q=P.height;let pe=r.COLOR_BUFFER_BIT;const ce=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(P),we=g.length>1;if(we)for(let et=0;et<g.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ze=P.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let et=0;et<g.length;et++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,I,q,0,0,I,q,pe,r.NEAREST),h===!0&&(bt.length=0,ct.length=0,bt.push(r.COLOR_ATTACHMENT0+et),P.depthBuffer&&P.resolveDepthBuffer===!1&&(bt.push(ce),ct.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<g.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const g=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function V(P){return Math.min(o.maxSamples,P.samples)}function Ft(P){const g=s.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function vt(P){const g=u.render.frame;x.get(P)!==g&&(x.set(P,g),P.update())}function xt(P,g){const I=P.colorSpace,q=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||I!==ta&&I!==Nr&&(Tt.getTransfer(I)===It?(q!==ii||pe!==ni)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",I)),g}function Be(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Gt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IT(r,e){function t(s,o=Nr){let l;const u=Tt.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===zf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===l0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===c0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===a0)return r.BYTE;if(s===o0)return r.SHORT;if(s===to)return r.UNSIGNED_SHORT;if(s===Bf)return r.INT;if(s===Ii)return r.UNSIGNED_INT;if(s===xi)return r.FLOAT;if(s===Ui)return r.HALF_FLOAT;if(s===u0)return r.ALPHA;if(s===d0)return r.RGB;if(s===ii)return r.RGBA;if(s===ir)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===f0)return r.RED;if(s===Hf)return r.RED_INTEGER;if(s===ea)return r.RG;if(s===Gf)return r.RG_INTEGER;if(s===Wf)return r.RGBA_INTEGER;if(s===Yl||s===Kl||s===Zl||s===Ql)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===Kd||s===Zd||s===Qd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===Yd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jd||s===ef||s===tf||s===nf||s===rf||s===sf||s===af)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Jd||s===ef)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===tf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===nf)return l.COMPRESSED_R11_EAC;if(s===rf)return l.COMPRESSED_SIGNED_R11_EAC;if(s===sf)return l.COMPRESSED_RG11_EAC;if(s===af)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===of||s===lf||s===cf||s===uf||s===df||s===ff||s===hf||s===pf||s===mf||s===gf||s===vf||s===xf||s===_f||s===yf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===of)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===lf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===cf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===uf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===df)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ff)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===pf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===mf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===gf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===vf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_f)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===yf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sf||s===Mf||s===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Sf)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Mf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wf||s===Tf||s===bf||s===Af)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===wf)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Tf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===bf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Af)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===no?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const UT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new w0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Fi({vertexShader:UT,fragmentShader:FT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new us(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends ra{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,x=null,_=null,v=null,M=null,E=null;const b=typeof XRWebGLBinding<"u",y=new OT,S={},C=t.getContextAttributes();let N=null,L=null;const B=[],k=[],z=new dt;let T=null;const D=new gi;D.viewport=new $t;const Q=new gi;Q.viewport=new $t;const F=[D,Q],Y=new YS;let te=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ve=B[le];return ve===void 0&&(ve=new fd,B[le]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(le){let ve=B[le];return ve===void 0&&(ve=new fd,B[le]=ve),ve.getGripSpace()},this.getHand=function(le){let ve=B[le];return ve===void 0&&(ve=new fd,B[le]=ve),ve.getHandSpace()};function J(le){const ve=k.indexOf(le.inputSource);if(ve===-1)return;const ge=B[ve];ge!==void 0&&(ge.update(le.inputSource,le.frame,p||u),ge.dispatchEvent({type:le.type,data:le.inputSource}))}function K(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let le=0;le<B.length;le++){const ve=k[le];ve!==null&&(k[le]=null,B[le].disconnect(ve))}te=null,se=null,y.reset();for(const le in S)delete S[le];e.setRenderTarget(N),M=null,v=null,_=null,o=null,L=null,Ke.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){d=le,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&b&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,He=null;C.depth&&(He=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?cs:ir,ke=C.stencil?no:Ii);const nt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(nt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),L=new _i(v.textureWidth,v.textureHeight,{format:ii,type:ni,depthTexture:new io(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new _i(M.framebufferWidth,M.framebufferHeight,{format:ii,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),Ke.setContext(o),Ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(le){for(let ve=0;ve<le.removed.length;ve++){const ge=le.removed[ve],ke=k.indexOf(ge);ke>=0&&(k[ke]=null,B[ke].disconnect(ge))}for(let ve=0;ve<le.added.length;ve++){const ge=le.added[ve];let ke=k.indexOf(ge);if(ke===-1){for(let nt=0;nt<B.length;nt++)if(nt>=k.length){k.push(ge),ke=nt;break}else if(k[nt]===null){k[nt]=ge,ke=nt;break}if(ke===-1)break}const He=B[ke];He&&He.connect(ge)}}const $=new oe,ue=new oe;function he(le,ve,ge){$.setFromMatrixPosition(ve.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const ke=$.distanceTo(ue),He=ve.projectionMatrix.elements,nt=ge.projectionMatrix.elements,Gt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],bt=(He[9]-1)/He[5],ct=(He[8]-1)/He[0],Ut=(nt[8]+1)/nt[0],V=Gt*ct,Ft=Gt*Ut,vt=ke/(-ct+Ut),xt=vt*-ct;if(ve.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(xt),le.translateZ(vt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),He[10]===-1)le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Be=Gt+vt,P=pt+vt,g=V-xt,I=Ft+(ke-xt),q=yt*pt/P*Be,pe=bt*pt/P*Be;le.projectionMatrix.makePerspective(g,I,q,pe,Be,P),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function O(le,ve){ve===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ve.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let ve=le.near,ge=le.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),Y.near=Q.near=D.near=ve,Y.far=Q.far=D.far=ge,(te!==Y.near||se!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),te=Y.near,se=Y.far),Y.layers.mask=le.layers.mask|6,D.layers.mask=Y.layers.mask&-5,Q.layers.mask=Y.layers.mask&-3;const ke=le.parent,He=Y.cameras;O(Y,ke);for(let nt=0;nt<He.length;nt++)O(He[nt],ke);He.length===2?he(Y,D,Q):Y.projectionMatrix.copy(D.projectionMatrix),Z(le,Y,ke)};function Z(le,ve,ge){ge===null?le.matrix.copy(ve.matrixWorld):(le.matrix.copy(ge.matrixWorld),le.matrix.invert(),le.matrix.multiply(ve.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ve.projectionMatrix),le.projectionMatrixInverse.copy(ve.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Cf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(le){h=le,v!==null&&(v.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(le){return S[le]};let Ce=null;function Ge(le,ve){if(x=ve.getViewerPose(p||u),E=ve,x!==null){const ge=x.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let ke=!1;ge.length!==Y.cameras.length&&(Y.cameras.length=0,ke=!0);for(let pt=0;pt<ge.length;pt++){const yt=ge[pt];let bt=null;if(M!==null)bt=M.getViewport(yt);else{const Ut=_.getViewSubImage(v,yt);bt=Ut.viewport,pt===0&&(e.setRenderTargetTextures(L,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(L))}let ct=F[pt];ct===void 0&&(ct=new gi,ct.layers.enable(pt),ct.viewport=new $t,F[pt]=ct),ct.matrix.fromArray(yt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(yt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(bt.x,bt.y,bt.width,bt.height),pt===0&&(Y.matrix.copy(ct.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),ke===!0&&Y.cameras.push(ct)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){_=s.getBinding();const pt=_.getDepthInformation(ge[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,o.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),_=s.getBinding();for(let pt=0;pt<ge.length;pt++){const yt=ge[pt].camera;if(yt){let bt=S[yt];bt||(bt=new w0,S[yt]=bt);const ct=_.getCameraImage(yt);bt.sourceTexture=ct}}}}for(let ge=0;ge<B.length;ge++){const ke=k[ge],He=B[ge];ke!==null&&He!==void 0&&He.update(ke,ve,p||u)}Ce&&Ce(le,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Ke=new A0;Ke.setAnimationLoop(Ge),this.setAnimationLoop=function(le){Ce=le},this.dispose=function(){}}}const is=new rr,BT=new Zt;function zT(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,T0(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,N,L){S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),_(y,S)):S.isMeshPhongMaterial?(l(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,L)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?h(y,S,C,N):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Un&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Un&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),N=C.envMap,L=C.envMapRotation;N&&(y.envMap.value=N,is.copy(L),is.x*=-1,is.y*=-1,is.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),y.envMapRotation.value.setFromMatrix4(BT.makeRotationFromEuler(is)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,C,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=N*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Un&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function VT(r,e,t,s){let o={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,N){const L=N.program;s.uniformBlockBinding(C,L)}function p(C,N){let L=o[C.id];L===void 0&&(E(C),L=x(C),o[C.id]=L,C.addEventListener("dispose",y));const B=N.program;s.updateUBOMapping(C,B);const k=e.render.frame;l[C.id]!==k&&(v(C),l[C.id]=k)}function x(C){const N=_();C.__bindingPointIndex=N;const L=r.createBuffer(),B=C.__size,k=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,B,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,L),L}function _(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const N=o[C.id],L=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let k=0,z=L.length;k<z;k++){const T=Array.isArray(L[k])?L[k]:[L[k]];for(let D=0,Q=T.length;D<Q;D++){const F=T[D];if(M(F,k,D,B)===!0){const Y=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let se=0;for(let J=0;J<te.length;J++){const K=te[J],j=b(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,Y+se,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,se),se+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,N,L,B){const k=C.value,z=N+"_"+L;if(B[z]===void 0)return typeof k=="number"||typeof k=="boolean"?B[z]=k:B[z]=k.clone(),!0;{const T=B[z];if(typeof k=="number"||typeof k=="boolean"){if(T!==k)return B[z]=k,!0}else if(T.equals(k)===!1)return T.copy(k),!0}return!1}function E(C){const N=C.uniforms;let L=0;const B=16;for(let z=0,T=N.length;z<T;z++){const D=Array.isArray(N[z])?N[z]:[N[z]];for(let Q=0,F=D.length;Q<F;Q++){const Y=D[Q],te=Array.isArray(Y.value)?Y.value:[Y.value];for(let se=0,J=te.length;se<J;se++){const K=te[se],j=b(K),$=L%B,ue=$%j.boundary,he=$+ue;L+=ue,he!==0&&B-he<j.storage&&(L+=B-he),Y.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=L,L+=j.storage}}}const k=L%B;return k>0&&(L+=B-k),C.__size=L,C.__cache={},this}function b(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",C),N}function y(C){const N=C.target;N.removeEventListener("dispose",y);const L=u.indexOf(N.__bindingPointIndex);u.splice(L,1),r.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function S(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:S}}const HT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function GT(){return Pi===null&&(Pi=new S0(HT,16,16,ea,Ui),Pi.name="DFG_LUT",Pi.minFilter=en,Pi.magFilter=en,Pi.wrapS=Wn,Pi.wrapT=Wn,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class WT{constructor(e={}){const{canvas:t=hS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ni}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const b=M,y=new Set([Wf,Gf,Hf]),S=new Set([ni,Ii,to,no,zf,Vf]),C=new Uint32Array(4),N=new Int32Array(4);let L=null,B=null;const k=[],z=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let Q=!1;this._outputColorSpace=ti;let F=0,Y=0,te=null,se=-1,J=null;const K=new $t,j=new $t;let $=null;const ue=new Pt(0);let he=0,O=t.width,Z=t.height,Ce=1,Ge=null,Ke=null;const le=new $t(0,0,O,Z),ve=new $t(0,0,O,Z);let ge=!1;const ke=new M0;let He=!1,nt=!1;const Gt=new Zt,pt=new oe,yt=new $t,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Ut(){return te===null?Ce:1}let V=s;function Ft(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kf}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),V===null){const X="webgl2";if(V=Ft(X,A),V===null)throw Ft(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let vt,xt,Be,P,g,I,q,pe,ce,Pe,we,ze,et,Se,be,$e,We,Ne,ut,G,Ae,Ee,Ie;function Me(){vt=new W1(V),vt.init(),Ae=new IT(V,vt),xt=new F1(V,vt,e,Ae),Be=new DT(V,vt),xt.reversedDepthBuffer&&v&&Be.buffers.depth.setReversed(!0),P=new $1(V),g=new xT,I=new NT(V,vt,Be,g,xt,Ae,P),q=new G1(D),pe=new QS(V),Ee=new I1(V,pe),ce=new j1(V,pe,P,Ee),Pe=new Y1(V,ce,pe,Ee,P),Ne=new q1(V,xt,I),be=new O1(g),we=new vT(D,q,vt,xt,Ee,be),ze=new zT(D,g),et=new yT,Se=new bT(vt),We=new N1(D,q,Be,Pe,E,h),$e=new LT(D,Pe,xt),Ie=new VT(V,P,xt,Be),ut=new U1(V,vt,P),G=new X1(V,vt,P),P.programs=we.programs,D.capabilities=xt,D.extensions=vt,D.properties=g,D.renderLists=et,D.shadowMap=$e,D.state=Be,D.info=P}Me(),b!==ni&&(T=new Z1(b,t.width,t.height,o,l));const me=new kT(D,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(O,Z,!1))},this.getSize=function(A){return A.set(O,Z)},this.setSize=function(A,X,fe=!0){if(me.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,Z=X,t.width=Math.floor(A*Ce),t.height=Math.floor(X*Ce),fe===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*Ce,Z*Ce).floor()},this.setDrawingBufferSize=function(A,X,fe){O=A,Z=X,Ce=fe,t.width=Math.floor(A*fe),t.height=Math.floor(X*fe),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(le)},this.setViewport=function(A,X,fe,ae){A.isVector4?le.set(A.x,A.y,A.z,A.w):le.set(A,X,fe,ae),Be.viewport(K.copy(le).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,X,fe,ae){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,X,fe,ae),Be.scissor(j.copy(ve).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Be.setScissorTest(ge=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,fe=!0){let ae=0;if(A){let ne=!1;if(te!==null){const Le=te.texture.format;ne=y.has(Le)}if(ne){const Le=te.texture.type,Oe=S.has(Le),Re=We.getClearColor(),Ue=We.getClearAlpha(),Qe=Re.r,tt=Re.g,ft=Re.b;Oe?(C[0]=Qe,C[1]=tt,C[2]=ft,C[3]=Ue,V.clearBufferuiv(V.COLOR,0,C)):(N[0]=Qe,N[1]=tt,N[2]=ft,N[3]=Ue,V.clearBufferiv(V.COLOR,0,N))}else ae|=V.COLOR_BUFFER_BIT}X&&(ae|=V.DEPTH_BUFFER_BIT),fe&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),We.dispose(),et.dispose(),Se.dispose(),g.dispose(),q.dispose(),Pe.dispose(),Ee.dispose(),Ie.dispose(),we.dispose(),me.dispose(),me.removeEventListener("sessionstart",ar),me.removeEventListener("sessionend",Or),Xn.stop()};function je(A){A.preventDefault(),Im("WebGLRenderer: Context Lost."),Q=!0}function st(){Im("WebGLRenderer: Context Restored."),Q=!1;const A=P.autoReset,X=$e.enabled,fe=$e.autoUpdate,ae=$e.needsUpdate,ne=$e.type;Me(),P.autoReset=A,$e.enabled=X,$e.autoUpdate=fe,$e.needsUpdate=ae,$e.type=ne}function Nt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Et(A){const X=A.target;X.removeEventListener("dispose",Et),jn(X)}function jn(A){yn(A),g.remove(A)}function yn(A){const X=g.get(A).programs;X!==void 0&&(X.forEach(function(fe){we.releaseProgram(fe)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,fe,ae,ne,Le){X===null&&(X=bt);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Re=mo(A,X,fe,ae,ne);Be.setMaterial(ae,Oe);let Ue=fe.index,Qe=1;if(ae.wireframe===!0){if(Ue=ce.getWireframeAttribute(fe),Ue===void 0)return;Qe=2}const tt=fe.drawRange,ft=fe.attributes.position;let Je=tt.start*Qe,Lt=(tt.start+tt.count)*Qe;Le!==null&&(Je=Math.max(Je,Le.start*Qe),Lt=Math.min(Lt,(Le.start+Le.count)*Qe)),Ue!==null?(Je=Math.max(Je,0),Lt=Math.min(Lt,Ue.count)):ft!=null&&(Je=Math.max(Je,0),Lt=Math.min(Lt,ft.count));const kt=Lt-Je;if(kt<0||kt===1/0)return;Ee.setup(ne,ae,Re,fe,Ue);let Ot,Mt=ut;if(Ue!==null&&(Ot=pe.get(Ue),Mt=G,Mt.setIndex(Ot)),ne.isMesh)ae.wireframe===!0?(Be.setLineWidth(ae.wireframeLinewidth*Ut()),Mt.setMode(V.LINES)):Mt.setMode(V.TRIANGLES);else if(ne.isLine){let qt=ae.linewidth;qt===void 0&&(qt=1),Be.setLineWidth(qt*Ut()),ne.isLineSegments?Mt.setMode(V.LINES):ne.isLineLoop?Mt.setMode(V.LINE_LOOP):Mt.setMode(V.LINE_STRIP)}else ne.isPoints?Mt.setMode(V.POINTS):ne.isSprite&&Mt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const qt=ne._multiDrawStarts,Ye=ne._multiDrawCounts,Sn=ne._multiDrawCount,_t=Ue?pe.get(Ue).bytesPerElement:1,bn=g.get(ae).currentProgram.getUniforms();for(let An=0;An<Sn;An++)bn.setValue(V,"_gl_DrawID",An),Mt.render(qt[An]/_t,Ye[An])}else if(ne.isInstancedMesh)Mt.renderInstances(Je,kt,ne.count);else if(fe.isInstancedBufferGeometry){const qt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,qt);Mt.renderInstances(Je,kt,Ye)}else Mt.render(Je,kt)};function fs(A,X,fe){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Br(A,X,fe),A.side=Ur,A.needsUpdate=!0,Br(A,X,fe),A.side=Qi):Br(A,X,fe)}this.compile=function(A,X,fe=null){fe===null&&(fe=A),B=Se.get(fe),B.init(X),z.push(B),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(B.pushLight(ne),ne.castShadow&&B.pushShadow(ne))}),A!==fe&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(B.pushLight(ne),ne.castShadow&&B.pushShadow(ne))}),B.setupLights();const ae=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){const Re=Le[Oe];fs(Re,fe,ne),ae.add(Re)}else fs(Le,fe,ne),ae.add(Le)}),B=z.pop(),ae},this.compileAsync=function(A,X,fe=null){const ae=this.compile(A,X,fe);return new Promise(ne=>{function Le(){if(ae.forEach(function(Oe){g.get(Oe).currentProgram.isReady()&&ae.delete(Oe)}),ae.size===0){ne(A);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Oi=null;function mc(A){Oi&&Oi(A)}function ar(){Xn.stop()}function Or(){Xn.start()}const Xn=new A0;Xn.setAnimationLoop(mc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Oi=A,me.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},me.addEventListener("sessionstart",ar),me.addEventListener("sessionend",Or),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const fe=me.enabled===!0&&me.isPresenting===!0,ae=T!==null&&(te===null||fe)&&T.begin(D,te);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(X),X=me.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,te),B=Se.get(A,z.length),B.init(X),z.push(B),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(Gt,Di,X.reversedDepth),nt=this.localClippingEnabled,He=be.init(this.clippingPlanes,nt),L=et.get(A,k.length),L.init(),k.push(L),me.enabled===!0&&me.isPresenting===!0){const Oe=D.xr.getDepthSensingMesh();Oe!==null&&kr(Oe,X,-1/0,D.sortObjects)}kr(A,X,0,D.sortObjects),L.finish(),D.sortObjects===!0&&L.sort(Ge,Ke),ct=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ct&&We.addToRenderList(L,A),this.info.render.frame++,He===!0&&be.beginShadows();const ne=B.state.shadowsArray;if($e.render(ne,A,X),He===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&T.hasRenderPass())===!1){const Oe=L.opaque,Re=L.transmissive;if(B.setupLights(),X.isArrayCamera){const Ue=X.cameras;if(Re.length>0)for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const ft=Ue[Qe];ho(Oe,Re,A,ft)}ct&&We.render(A);for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const ft=Ue[Qe];fo(L,A,ft,ft.viewport)}}else Re.length>0&&ho(Oe,Re,A,X),ct&&We.render(A),fo(L,A,X)}te!==null&&Y===0&&(I.updateMultisampleRenderTarget(te),I.updateRenderTargetMipmap(te)),ae&&T.end(D),A.isScene===!0&&A.onAfterRender(D,A,X),Ee.resetDefaultState(),se=-1,J=null,z.pop(),z.length>0?(B=z[z.length-1],He===!0&&be.setGlobalState(D.clippingPlanes,B.state.camera)):B=null,k.pop(),k.length>0?L=k[k.length-1]:L=null};function kr(A,X,fe,ae){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ae&&yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);const Oe=Pe.update(A),Re=A.material;Re.visible&&L.push(A,Oe,Re,fe,yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Oe=Pe.update(A),Re=A.material;if(ae&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),yt.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),yt.copy(Oe.boundingSphere.center)),yt.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Re)){const Ue=Oe.groups;for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const ft=Ue[Qe],Je=Re[ft.materialIndex];Je&&Je.visible&&L.push(A,Oe,Je,fe,yt.z,ft)}}else Re.visible&&L.push(A,Oe,Re,fe,yt.z,null)}}const Le=A.children;for(let Oe=0,Re=Le.length;Oe<Re;Oe++)kr(Le[Oe],X,fe,ae)}function fo(A,X,fe,ae){const{opaque:ne,transmissive:Le,transparent:Oe}=A;B.setupLightsView(fe),He===!0&&be.setGlobalState(D.clippingPlanes,fe),ae&&Be.viewport(K.copy(ae)),ne.length>0&&hs(ne,X,fe),Le.length>0&&hs(Le,X,fe),Oe.length>0&&hs(Oe,X,fe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ho(A,X,fe,ae){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ae.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ae.id]=new _i(1,1,{generateMipmaps:!0,type:Je?Ui:ni,minFilter:ls,samples:Math.max(4,xt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=B.state.transmissionRenderTarget[ae.id],Oe=ae.viewport||K;Le.setSize(Oe.z*D.transmissionResolutionScale,Oe.w*D.transmissionResolutionScale);const Re=D.getRenderTarget(),Ue=D.getActiveCubeFace(),Qe=D.getActiveMipmapLevel();D.setRenderTarget(Le),D.getClearColor(ue),he=D.getClearAlpha(),he<1&&D.setClearColor(16777215,.5),D.clear(),ct&&We.render(fe);const tt=D.toneMapping;D.toneMapping=Ni;const ft=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),B.setupLightsView(ae),He===!0&&be.setGlobalState(D.clippingPlanes,ae),hs(A,fe,ae),I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Lt=0,kt=X.length;Lt<kt;Lt++){const Ot=X[Lt],{object:Mt,geometry:qt,material:Ye,group:Sn}=Ot;if(Ye.side===Qi&&Mt.layers.test(ae.layers)){const _t=Ye.side;Ye.side=Un,Ye.needsUpdate=!0,wi(Mt,fe,ae,qt,Ye,Sn),Ye.side=_t,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le))}D.setRenderTarget(Re,Ue,Qe),D.setClearColor(ue,he),ft!==void 0&&(ae.viewport=ft),D.toneMapping=tt}function hs(A,X,fe){const ae=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Le=A.length;ne<Le;ne++){const Oe=A[ne],{object:Re,geometry:Ue,group:Qe}=Oe;let tt=Oe.material;tt.allowOverride===!0&&ae!==null&&(tt=ae),Re.layers.test(fe.layers)&&wi(Re,X,fe,Ue,tt,Qe)}}function wi(A,X,fe,ae,ne,Le){A.onBeforeRender(D,X,fe,ae,ne,Le),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(D,X,fe,ae,A,Le),ne.transparent===!0&&ne.side===Qi&&ne.forceSinglePass===!1?(ne.side=Un,ne.needsUpdate=!0,D.renderBufferDirect(fe,X,ae,ne,A,Le),ne.side=Ur,ne.needsUpdate=!0,D.renderBufferDirect(fe,X,ae,ne,A,Le),ne.side=Qi):D.renderBufferDirect(fe,X,ae,ne,A,Le),A.onAfterRender(D,X,fe,ae,ne,Le)}function Br(A,X,fe){X.isScene!==!0&&(X=bt);const ae=g.get(A),ne=B.state.lights,Le=B.state.shadowsArray,Oe=ne.state.version,Re=we.getParameters(A,ne.state,Le,X,fe),Ue=we.getProgramCacheKey(Re);let Qe=ae.programs;ae.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ae.fog=X.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ae.envMap=q.get(A.envMap||ae.environment,tt),ae.envMapRotation=ae.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Et),Qe=new Map,ae.programs=Qe);let ft=Qe.get(Ue);if(ft!==void 0){if(ae.currentProgram===ft&&ae.lightsStateVersion===Oe)return po(A,Re),ft}else Re.uniforms=we.getUniforms(A),A.onBeforeCompile(Re,D),ft=we.acquireProgram(Re,Ue),Qe.set(Ue,ft),ae.uniforms=Re.uniforms;const Je=ae.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=be.uniform),po(A,Re),ae.needsLights=vo(A),ae.lightsStateVersion=Oe,ae.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.currentProgram=ft,ae.uniformsList=null,ft}function oa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Jl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function po(A,X){const fe=g.get(A);fe.outputColorSpace=X.outputColorSpace,fe.batching=X.batching,fe.batchingColor=X.batchingColor,fe.instancing=X.instancing,fe.instancingColor=X.instancingColor,fe.instancingMorph=X.instancingMorph,fe.skinning=X.skinning,fe.morphTargets=X.morphTargets,fe.morphNormals=X.morphNormals,fe.morphColors=X.morphColors,fe.morphTargetsCount=X.morphTargetsCount,fe.numClippingPlanes=X.numClippingPlanes,fe.numIntersection=X.numClipIntersection,fe.vertexAlphas=X.vertexAlphas,fe.vertexTangents=X.vertexTangents,fe.toneMapping=X.toneMapping}function mo(A,X,fe,ae,ne){X.isScene!==!0&&(X=bt),I.resetTextureUnits();const Le=X.fog,Oe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?X.environment:null,Re=te===null?D.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ta,Ue=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Qe=q.get(ae.envMap||Oe,Ue),tt=ae.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ft=!!fe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Je=!!fe.morphAttributes.position,Lt=!!fe.morphAttributes.normal,kt=!!fe.morphAttributes.color;let Ot=Ni;ae.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ot=D.toneMapping);const Mt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,qt=Mt!==void 0?Mt.length:0,Ye=g.get(ae),Sn=B.state.lights;if(He===!0&&(nt===!0||A!==J)){const Yt=A===J&&ae.id===se;be.setState(ae,A,Yt)}let _t=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Sn.state.version||Ye.outputColorSpace!==Re||ne.isBatchedMesh&&Ye.batching===!1||!ne.isBatchedMesh&&Ye.batching===!0||ne.isBatchedMesh&&Ye.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ye.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||ne.isInstancedMesh&&Ye.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ye.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ye.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ye.instancingMorph===!1&&ne.morphTexture!==null||Ye.envMap!==Qe||ae.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==be.numPlanes||Ye.numIntersection!==be.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==ft||Ye.morphTargets!==Je||Ye.morphNormals!==Lt||Ye.morphColors!==kt||Ye.toneMapping!==Ot||Ye.morphTargetsCount!==qt)&&(_t=!0):(_t=!0,Ye.__version=ae.version);let bn=Ye.currentProgram;_t===!0&&(bn=Br(ae,X,ne));let An=!1,On=!1,or=!1;const Rt=bn.getUniforms(),at=Ye.uniforms;if(Be.useProgram(bn.program)&&(An=!0,On=!0,or=!0),ae.id!==se&&(se=ae.id,On=!0),An||J!==A){Be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",A.projectionMatrix),Rt.setValue(V,"viewMatrix",A.matrixWorldInverse);const $n=Rt.map.cameraPosition;$n!==void 0&&$n.setValue(V,pt.setFromMatrixPosition(A.matrixWorld)),xt.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,On=!0,or=!0)}if(Ye.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",Sn.state.directionalShadowMap,I),Sn.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",Sn.state.spotShadowMap,I),Sn.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",Sn.state.pointShadowMap,I)),ne.isSkinnedMesh){Rt.setOptional(V,ne,"bindMatrix"),Rt.setOptional(V,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Rt.setValue(V,"boneTexture",Yt.boneTexture,I))}ne.isBatchedMesh&&(Rt.setOptional(V,ne,"batchingTexture"),Rt.setValue(V,"batchingTexture",ne._matricesTexture,I),Rt.setOptional(V,ne,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",ne._indirectTexture,I),Rt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",ne._colorsTexture,I));const ai=fe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ne.update(ne,fe,bn),(On||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,Rt.setValue(V,"receiveShadow",ne.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=GT()),On&&(Rt.setValue(V,"toneMappingExposure",D.toneMappingExposure),Ye.needsLights&&go(at,or),Le&&ae.fog===!0&&ze.refreshFogUniforms(at,Le),ze.refreshMaterialUniforms(at,ae,Ce,Z,B.state.transmissionRenderTarget[A.id]),Jl.upload(V,oa(Ye),at,I)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Jl.upload(V,oa(Ye),at,I),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Rt.setValue(V,"center",ne.center),Rt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(V,"normalMatrix",ne.normalMatrix),Rt.setValue(V,"modelMatrix",ne.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const Yt=ae.uniformsGroups;for(let $n=0,ki=Yt.length;$n<ki;$n++){const la=Yt[$n];Ie.update(la,bn),Ie.bind(la,bn)}}return bn}function go(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function vo(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(A,X,fe){const ae=g.get(A);ae.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),g.get(A.texture).__webglTexture=X,g.get(A.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:fe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const fe=g.get(A);fe.__webglFramebuffer=X,fe.__useDefaultFramebuffer=X===void 0};const xo=V.createFramebuffer();this.setRenderTarget=function(A,X=0,fe=0){te=A,F=X,Y=fe;let ae=null,ne=!1,Le=!1;if(A){const Re=g.get(A);if(Re.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(V.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(A.viewport),j.copy(A.scissor),$=A.scissorTest,Be.viewport(K),Be.scissor(j),Be.setScissorTest($),se=-1;return}else if(Re.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Re.__hasExternalTextures)I.rebindTextures(A,g.get(A.texture).__webglTexture,g.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&g.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Qe=g.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?ae=Qe[X][fe]:ae=Qe[X],ne=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?ae=g.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ae=Qe[fe]:ae=Qe,K.copy(A.viewport),j.copy(A.scissor),$=A.scissorTest}else K.copy(le).multiplyScalar(Ce).floor(),j.copy(ve).multiplyScalar(Ce).floor(),$=ge;if(fe!==0&&(ae=xo),Be.bindFramebuffer(V.FRAMEBUFFER,ae)&&Be.drawBuffers(A,ae),Be.viewport(K),Be.scissor(j),Be.setScissorTest($),ne){const Re=g.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,fe)}else if(Le){const Re=X;for(let Ue=0;Ue<A.textures.length;Ue++){const Qe=g.get(A.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,fe,Re)}}else if(A!==null&&fe!==0){const Re=g.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,fe)}se=-1},this.readRenderTargetPixels=function(A,X,fe,ae,ne,Le,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Qe=A.textures[Re],tt=Qe.format,ft=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!xt.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(ft)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ae&&fe>=0&&fe<=A.height-ne&&V.readPixels(X,fe,ae,ne,Ae.convert(tt),Ae.convert(ft),Le)}finally{const Qe=te!==null?g.get(te).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,fe,ae,ne,Le,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue)if(X>=0&&X<=A.width-ae&&fe>=0&&fe<=A.height-ne){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);const Qe=A.textures[Re],tt=Qe.format,ft=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!xt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(X,fe,ae,ne,Ae.convert(tt),Ae.convert(ft),0);const Lt=te!==null?g.get(te).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Lt);const kt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pS(V,kt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(Je),V.deleteSync(kt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,fe=0){const ae=Math.pow(2,-fe),ne=Math.floor(A.image.width*ae),Le=Math.floor(A.image.height*ae),Oe=X!==null?X.x:0,Re=X!==null?X.y:0;I.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,fe,0,0,Oe,Re,ne,Le),Be.unbindTexture()};const gc=V.createFramebuffer(),vc=V.createFramebuffer();this.copyTextureToTexture=function(A,X,fe=null,ae=null,ne=0,Le=0){let Oe,Re,Ue,Qe,tt,ft,Je,Lt,kt;const Ot=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(fe!==null)Oe=fe.max.x-fe.min.x,Re=fe.max.y-fe.min.y,Ue=fe.isBox3?fe.max.z-fe.min.z:1,Qe=fe.min.x,tt=fe.min.y,ft=fe.isBox3?fe.min.z:0;else{const at=Math.pow(2,-ne);Oe=Math.floor(Ot.width*at),Re=Math.floor(Ot.height*at),A.isDataArrayTexture?Ue=Ot.depth:A.isData3DTexture?Ue=Math.floor(Ot.depth*at):Ue=1,Qe=0,tt=0,ft=0}ae!==null?(Je=ae.x,Lt=ae.y,kt=ae.z):(Je=0,Lt=0,kt=0);const Mt=Ae.convert(X.format),qt=Ae.convert(X.type);let Ye;X.isData3DTexture?(I.setTexture3D(X,0),Ye=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Ye=V.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Sn=V.getParameter(V.UNPACK_ROW_LENGTH),_t=V.getParameter(V.UNPACK_IMAGE_HEIGHT),bn=V.getParameter(V.UNPACK_SKIP_PIXELS),An=V.getParameter(V.UNPACK_SKIP_ROWS),On=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ft);const or=A.isDataArrayTexture||A.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const at=g.get(A),ai=g.get(X),Yt=g.get(at.__renderTarget),$n=g.get(ai.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let ki=0;ki<Ue;ki++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(A).__webglTexture,ne,ft+ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(X).__webglTexture,Le,kt+ki)),V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||g.has(A)){const at=g.get(A),ai=g.get(X);Be.bindFramebuffer(V.READ_FRAMEBUFFER,gc),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,vc);for(let Yt=0;Yt<Ue;Yt++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.__webglTexture,ne,ft+Yt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,at.__webglTexture,ne),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,Le,kt+Yt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,Le),ne!==0?V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(Ye,Le,Je,Lt,kt+Yt,Qe,tt,Oe,Re):V.copyTexSubImage2D(Ye,Le,Je,Lt,Qe,tt,Oe,Re);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ye,Le,Je,Lt,kt,Oe,Re,Ue,Mt,qt,Ot.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Le,Je,Lt,kt,Oe,Re,Ue,Mt,Ot.data):V.texSubImage3D(Ye,Le,Je,Lt,kt,Oe,Re,Ue,Mt,qt,Ot):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,qt,Ot.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Ot.width,Ot.height,Mt,Ot.data):V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,qt,Ot);V.pixelStorei(V.UNPACK_ROW_LENGTH,Sn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_t),V.pixelStorei(V.UNPACK_SKIP_PIXELS,bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,An),V.pixelStorei(V.UNPACK_SKIP_IMAGES,On),Le===0&&X.generateMipmaps&&V.generateMipmap(Ye),Be.unbindTexture()},this.initRenderTarget=function(A){g.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){F=0,Y=0,te=null,Be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function jT({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:l=32,dt:u=.014,BFECC:d=!0,resolution:h=.5,isBounce:p=!1,colors:x=["#5227FF","#FF9FFC","#B497CF"],style:_={},className:v="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:b=2.2,takeoverDuration:y=.25,autoResumeDelay:S=1e3,autoRampDuration:C=.6}){const N=ie.useRef(null),L=ie.useRef(null),B=ie.useRef(null),k=ie.useRef(null),z=ie.useRef(null),T=ie.useRef(!0),D=ie.useRef(null);return ie.useEffect(()=>{if(!N.current)return;function Q(P){let g;Array.isArray(P)&&P.length>0?P.length===1?g=[P[0],P[0]]:g=P:g=["#ffffff","#ffffff"];const I=g.length,q=new Uint8Array(I*4);for(let ce=0;ce<I;ce++){const Pe=new Pt(g[ce]);q[ce*4+0]=Math.round(Pe.r*255),q[ce*4+1]=Math.round(Pe.g*255),q[ce*4+2]=Math.round(Pe.b*255),q[ce*4+3]=255}const pe=new S0(q,I,1,ii);return pe.magFilter=en,pe.minFilter=en,pe.wrapS=Wn,pe.wrapT=Wn,pe.generateMipmaps=!1,pe.needsUpdate=!0,pe}const F=Q(x),Y=new $t(0,0,0,0);class te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new WT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new KS,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const se=new te;class J{constructor(){this.mouseMoved=!1,this.coords=new dt,this.coords_old=new dt,this.diff=new dt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new dt,this.takeoverTo=new dt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,I){if(!this.container)return!1;const q=this.container.getBoundingClientRect();return q.width===0||q.height===0?!1:g>=q.left&&g<=q.right&&I>=q.top&&I<=q.bottom}updateHoverState(g,I){return this.isHoverInside=this.isPointInside(g,I),this.isHoverInside}setCoords(g,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const q=this.container.getBoundingClientRect();if(q.width===0||q.height===0)return;const pe=(g-q.left)/q.width,ce=(I-q.top)/q.height;this.coords.set(pe*2-1,-(ce*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,I){this.coords.set(g,I),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const q=(g.clientX-I.left)/I.width,pe=(g.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(q*2-1,-(pe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const K=new J;class j{constructor(g,I,q){this.mouse=g,this.manager=I,this.enabled=q.enabled,this.speed=q.speed,this.resumeDelay=q.resumeDelay||3e3,this.rampDurationMs=(q.rampDuration||0)*1e3,this.active=!1,this.current=new dt(0,0),this.target=new dt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new dt,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let q=(g-this.lastTime)/1e3;this.lastTime=g,q>.2&&(q=.016);const pe=this._tmpDir.subVectors(this.target,this.current),ce=pe.length();if(ce<.01){this.pickNewTarget();return}pe.normalize();let Pe=1;if(this.rampDurationMs>0){const et=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pe=et*et*(3-2*et)}const we=this.speed*q*Pe,ze=Math.min(we,ce);this.current.addScaledVector(pe,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const $=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,ue=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,he=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,O=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Z=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Ce=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ge=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,Ke=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,le=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,ve=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class ge{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new jm,this.camera=new oc,this.uniforms&&(this.material=new Za(this.props.material),this.geometry=new us(2,2),this.plane=new ri(this.geometry,this.material),this.scene.add(this.plane))}update(){se.renderer.setRenderTarget(this.props.output||null),se.renderer.render(this.scene,this.camera),se.renderer.setRenderTarget(null)}}class ke extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:O,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Ei,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new yi(I,3));const q=new Za({vertexShader:ue,fragmentShader:O,uniforms:this.uniforms});this.line=new zS(g,q),this.scene.add(this.line)}update({dt:g,isBounce:I,BFECC:q}){this.uniforms.dt.value=g,this.line.visible=I,this.uniforms.isBFECC.value=q,super.update()}}class He extends ge{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const I=new us(1,1),q=new Za({vertexShader:he,fragmentShader:Ge,blending:Od,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new dt(0,0)},center:{value:new dt(0,0)},scale:{value:new dt(g.cursor_size,g.cursor_size)}}});this.mouse=new ri(I,q),this.scene.add(this.mouse)}update(g){const I=K.diff.x/2*g.mouse_force,q=K.diff.y/2*g.mouse_force,pe=g.cursor_size*g.cellScale.x,ce=g.cursor_size*g.cellScale.y,Pe=Math.min(Math.max(K.coords.x,-1+pe+g.cellScale.x*2),1-pe-g.cellScale.x*2),we=Math.min(Math.max(K.coords.y,-1+ce+g.cellScale.y*2),1-ce-g.cellScale.y*2),ze=this.mouse.material.uniforms;ze.force.value.set(I,q),ze.center.value.set(Pe,we),ze.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class nt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:ve,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:I,dt:q}){let pe,ce;this.uniforms.v.value=g;for(let Pe=0;Pe<I;Pe++)Pe%2===0?(pe=this.props.output0,ce=this.props.output1):(pe=this.props.output1,ce=this.props.output0),this.uniforms.velocity_new.value=pe.texture,this.props.output=ce,this.uniforms.dt.value=q,super.update();return ce}}class Gt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:Ce,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class pt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:Ke,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let I,q;for(let pe=0;pe<g;pe++)pe%2===0?(I=this.props.output0,q=this.props.output1):(I=this.props.output1,q=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=q,super.update();return q}}class yt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:le,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:I}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=I.texture,super.update()}}class bt{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new dt,this.cellScale=new dt,this.boundarySpace=new dt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ui:xi}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:en,magFilter:en,wrapS:Wn,wrapT:Wn};for(let q in this.fbos)this.fbos[q]=new _i(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new He({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*se.width)),I=Math.max(1,Math.round(this.options.resolution*se.height)),q=1/g,pe=1/I;this.cellScale.set(q,pe),this.fboSize.set(g,I)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:I})}}class ct{constructor(){this.init()}init(){this.simulation=new bt,this.scene=new jm,this.camera=new oc,this.output=new ri(new us(2,2),new Za({vertexShader:$,fragmentShader:Z,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new dt},palette:{value:F},bgColor:{value:Y}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){se.renderer.setRenderTarget(null),se.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class Ut{constructor(g){this.props=g,se.init(g.$wrapper),K.init(g.$wrapper),K.autoIntensity=g.autoIntensity,K.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),K.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new j(K,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():T.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(se.renderer.domElement),this.output=new ct}resize(){se.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),K.update(),se.update(),this.output.update()}loop(){this.running&&(this.render(),k.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,k.current&&(cancelAnimationFrame(k.current),k.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),K.dispose(),se.renderer){const g=se.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),se.renderer.dispose(),se.renderer.forceContextLoss()}}catch{}}}const V=N.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const Ft=new Ut({$wrapper:V,autoDemo:M,autoSpeed:E,autoIntensity:b,takeoverDuration:y,autoResumeDelay:S,autoRampDuration:C});L.current=Ft,(()=>{if(!L.current)return;const P=L.current.output?.simulation;if(!P)return;const g=P.options.resolution;Object.assign(P.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:d,resolution:h,isBounce:p}),h!==g&&P.resize()})(),Ft.start();const xt=new IntersectionObserver(P=>{const g=P[0],I=g.isIntersecting&&g.intersectionRatio>0;T.current=I,L.current&&(I&&!document.hidden?L.current.start():L.current.pause())},{threshold:[0,.01,.1]});xt.observe(V),z.current=xt;const Be=new ResizeObserver(()=>{L.current&&(D.current&&cancelAnimationFrame(D.current),D.current=requestAnimationFrame(()=>{L.current&&L.current.resize()}))});return Be.observe(V),B.current=Be,()=>{if(k.current&&cancelAnimationFrame(k.current),B.current)try{B.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}L.current&&L.current.dispose(),L.current=null}},[d,e,u,p,t,l,o,r,h,s,x,M,E,b,y,S,C]),ie.useEffect(()=>{const Q=L.current;if(!Q)return;const F=Q.output?.simulation;if(!F)return;const Y=F.options.resolution;Object.assign(F.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:d,resolution:h,isBounce:p}),Q.autoDriver&&(Q.autoDriver.enabled=M,Q.autoDriver.speed=E,Q.autoDriver.resumeDelay=S,Q.autoDriver.rampDurationMs=C*1e3,Q.autoDriver.mouse&&(Q.autoDriver.mouse.autoIntensity=b,Q.autoDriver.mouse.takeoverDuration=y)),h!==Y&&F.resize()},[r,e,t,s,o,l,u,d,h,p,M,E,b,y,S,C]),R.jsx("div",{ref:N,className:`liquid-ether-container ${v||""}`,style:_})}const bg=[{id:"home",label:"Home",index:4},{id:"projects",label:"Projects",index:9},{id:"hackathons",label:"Hackathons",index:14},{id:"skills",label:"Skills",index:19},{id:"exploration",label:"Exploration",index:24},{id:"internship",label:"Internship",index:29},{id:"research",label:"Research",index:34},{id:"contact",label:"Contact",index:39}],XT=44,$T=()=>{const[r,e]=ie.useState("home"),[t,s]=ie.useState(null);ie.useEffect(()=>{const l=()=>{const u=window.scrollY+window.innerHeight/3;let d="home";for(const h of bg){const p=document.getElementById(h.id);p&&p.offsetTop<=u&&(d=h.id)}e(d)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const u=document.getElementById(l);u&&u.scrollIntoView({behavior:"smooth"})};return R.jsx("div",{className:"fixed right-0 top-0 h-screen flex flex-col justify-center items-end z-50 pointer-events-none",children:R.jsx("div",{className:"pointer-events-auto flex flex-col justify-center items-end group px-6 py-8",onMouseLeave:()=>s(null),children:Array.from({length:XT}).map((l,u)=>{const d=bg.find(v=>v.index===u),h=d&&d.id===r;let p=8,x=.3;if(t!==null){const v=Math.abs(t-u),M=8;if(v<M){const E=(Math.cos(v/M*Math.PI)+1)/2;p=8+E*(d?32:20),x=.3+E*.7}d&&v===0&&(p=45)}else h&&(p=26,x=1);return d?R.jsxs("div",{className:"flex items-center justify-end cursor-pointer py-[3px] w-full group/item",onMouseEnter:()=>s(u),onClick:()=>o(d.id),children:[R.jsx("span",{className:`text-[10px] sm:text-xs font-bold tracking-widest text-[#3afeda] mr-4 transition-all duration-300 ease-out whitespace-nowrap translate-x-0 pointer-events-auto
                    ${t!==null||h?"opacity-100":"opacity-50"}
                    ${h?"drop-shadow-[0_0_8px_rgba(58,254,218,0.8)]":""}
                  `,children:d.label.toUpperCase()}),R.jsx("div",{className:"bg-[#3afeda] rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${p}px`,height:h?"3px":"2px",opacity:x,boxShadow:h&&t===null?"0 0 8px rgba(58,254,218,0.8)":"none"}})]},u):R.jsx("div",{className:"flex items-center justify-end py-[3px] w-full",onMouseEnter:()=>s(u),children:R.jsx("div",{className:"bg-cyan-200 rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${p}px`,height:"1px",opacity:x}})},u)})})})},qT=["#5227FF","#FF9FFC","#B497CF"];function YT(){const r=Fr();return ie.useEffect(()=>{if(r.hash){const e=r.hash.replace("#",""),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},[r]),null}function KT(){return R.jsxs(V_,{children:[R.jsx(YT,{}),R.jsx($T,{}),R.jsxs("div",{className:"min-h-screen bg-gray-900 text-white overflow-x-hidden relative",children:[R.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:R.jsx(jT,{colors:qT,mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),R.jsxs("div",{className:"relative z-10",children:[R.jsx("section",{id:"home",children:R.jsx(wy,{})}),R.jsx("section",{id:"projects",children:R.jsx(Ty,{})}),R.jsx("section",{id:"hackathons",children:R.jsx(by,{})}),R.jsx("section",{id:"skills",children:R.jsx(Cy,{})}),R.jsx("section",{id:"exploration",children:R.jsx(Ry,{})}),R.jsx("section",{id:"internship",children:R.jsx(Py,{})}),R.jsx("section",{id:"research",children:R.jsx(Ly,{})}),R.jsx("section",{id:"contact",children:R.jsx(Dy,{})})]})]})]})}Sx.createRoot(document.getElementById("root")).render(R.jsx(ie.StrictMode,{children:R.jsx(KT,{})}));
