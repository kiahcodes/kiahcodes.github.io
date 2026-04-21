(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Xu={exports:{}},za={},$u={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function l_(){if(dm)return gt;dm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),y=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function x(O,Z,Ce){this.props=O,this.context=Z,this.refs=A,this.updater=Ce||M}x.prototype.isReactComponent={},x.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=x.prototype;function C(O,Z,Ce){this.props=O,this.context=Z,this.refs=A,this.updater=Ce||M}var D=C.prototype=new S;D.constructor=C,E(D,x.prototype),D.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,k={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function T(O,Z,Ce){var Ge,Ke={},oe=null,ve=null;if(Z!=null)for(Ge in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(oe=""+Z.key),Z)B.call(Z,Ge)&&!z.hasOwnProperty(Ge)&&(Ke[Ge]=Z[Ge]);var ge=arguments.length-2;if(ge===1)Ke.children=Ce;else if(1<ge){for(var ke=Array(ge),He=0;He<ge;He++)ke[He]=arguments[He+2];Ke.children=ke}if(O&&O.defaultProps)for(Ge in ge=O.defaultProps,ge)Ke[Ge]===void 0&&(Ke[Ge]=ge[Ge]);return{$$typeof:r,type:O,key:oe,ref:ve,props:Ke,_owner:k.current}}function L(O,Z){return{$$typeof:r,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function Q(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function F(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ce){return Z[Ce]})}var q=/\/+/g;function te(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?F(""+O.key):Z.toString(36)}function re(O,Z,Ce,Ge,Ke){var oe=typeof O;(oe==="undefined"||oe==="boolean")&&(O=null);var ve=!1;if(O===null)ve=!0;else switch(oe){case"string":case"number":ve=!0;break;case"object":switch(O.$$typeof){case r:case e:ve=!0}}if(ve)return ve=O,Ke=Ke(ve),O=Ge===""?"."+te(ve,0):Ge,P(Ke)?(Ce="",O!=null&&(Ce=O.replace(q,"$&/")+"/"),re(Ke,Z,Ce,"",function(He){return He})):Ke!=null&&(Q(Ke)&&(Ke=L(Ke,Ce+(!Ke.key||ve&&ve.key===Ke.key?"":(""+Ke.key).replace(q,"$&/")+"/")+O)),Z.push(Ke)),1;if(ve=0,Ge=Ge===""?".":Ge+":",P(O))for(var ge=0;ge<O.length;ge++){oe=O[ge];var ke=Ge+te(oe,ge);ve+=re(oe,Z,Ce,ke,Ke)}else if(ke=v(O),typeof ke=="function")for(O=ke.call(O),ge=0;!(oe=O.next()).done;)oe=oe.value,ke=Ge+te(oe,ge++),ve+=re(oe,Z,Ce,ke,Ke);else if(oe==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(O,Z,Ce){if(O==null)return O;var Ge=[],Ke=0;return re(O,Ge,"","",function(oe){return Z.call(Ce,oe,Ke++)}),Ge}function K(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Ce){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ce)},function(Ce){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ce)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var j={current:null},$={transition:null},ue={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};function he(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:J,forEach:function(O,Z,Ce){J(O,function(){Z.apply(this,arguments)},Ce)},count:function(O){var Z=0;return J(O,function(){Z++}),Z},toArray:function(O){return J(O,function(Z){return Z})||[]},only:function(O){if(!Q(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=x,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=C,gt.StrictMode=s,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,gt.act=he,gt.cloneElement=function(O,Z,Ce){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ge=E({},O.props),Ke=O.key,oe=O.ref,ve=O._owner;if(Z!=null){if(Z.ref!==void 0&&(oe=Z.ref,ve=k.current),Z.key!==void 0&&(Ke=""+Z.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(ke in Z)B.call(Z,ke)&&!z.hasOwnProperty(ke)&&(Ge[ke]=Z[ke]===void 0&&ge!==void 0?ge[ke]:Z[ke])}var ke=arguments.length-2;if(ke===1)Ge.children=Ce;else if(1<ke){ge=Array(ke);for(var He=0;He<ke;He++)ge[He]=arguments[He+2];Ge.children=ge}return{$$typeof:r,type:O.type,key:Ke,ref:oe,props:Ge,_owner:ve}},gt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},gt.createElement=T,gt.createFactory=function(O){var Z=T.bind(null,O);return Z.type=O,Z},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:f,render:O}},gt.isValidElement=Q,gt.lazy=function(O){return{$$typeof:_,_payload:{_status:-1,_result:O},_init:K}},gt.memo=function(O,Z){return{$$typeof:p,type:O,compare:Z===void 0?null:Z}},gt.startTransition=function(O){var Z=$.transition;$.transition={};try{O()}finally{$.transition=Z}},gt.unstable_act=he,gt.useCallback=function(O,Z){return j.current.useCallback(O,Z)},gt.useContext=function(O){return j.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return j.current.useDeferredValue(O)},gt.useEffect=function(O,Z){return j.current.useEffect(O,Z)},gt.useId=function(){return j.current.useId()},gt.useImperativeHandle=function(O,Z,Ce){return j.current.useImperativeHandle(O,Z,Ce)},gt.useInsertionEffect=function(O,Z){return j.current.useInsertionEffect(O,Z)},gt.useLayoutEffect=function(O,Z){return j.current.useLayoutEffect(O,Z)},gt.useMemo=function(O,Z){return j.current.useMemo(O,Z)},gt.useReducer=function(O,Z,Ce){return j.current.useReducer(O,Z,Ce)},gt.useRef=function(O){return j.current.useRef(O)},gt.useState=function(O){return j.current.useState(O)},gt.useSyncExternalStore=function(O,Z,Ce){return j.current.useSyncExternalStore(O,Z,Ce)},gt.useTransition=function(){return j.current.useTransition()},gt.version="18.3.1",gt}var hm;function Pd(){return hm||(hm=1,$u.exports=l_()),$u.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function c_(){if(pm)return za;pm=1;var r=Pd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var _,y={},v=null,M=null;p!==void 0&&(v=""+p),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)s.call(h,_)&&!l.hasOwnProperty(_)&&(y[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)y[_]===void 0&&(y[_]=h[_]);return{$$typeof:e,type:f,key:v,ref:M,props:y,_owner:o.current}}return za.Fragment=t,za.jsx=u,za.jsxs=u,za}var mm;function u_(){return mm||(mm=1,Xu.exports=c_()),Xu.exports}var N=u_(),ce=Pd(),_l={},Yu={exports:{}},Nn={},qu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function f_(){return gm||(gm=1,function(r){function e($,ue){var he=$.length;$.push(ue);e:for(;0<he;){var O=he-1>>>1,Z=$[O];if(0<o(Z,ue))$[O]=ue,$[he]=Z,he=O;else break e}}function t($){return $.length===0?null:$[0]}function s($){if($.length===0)return null;var ue=$[0],he=$.pop();if(he!==ue){$[0]=he;e:for(var O=0,Z=$.length,Ce=Z>>>1;O<Ce;){var Ge=2*(O+1)-1,Ke=$[Ge],oe=Ge+1,ve=$[oe];if(0>o(Ke,he))oe<Z&&0>o(ve,Ke)?($[O]=ve,$[oe]=he,O=oe):($[O]=Ke,$[Ge]=he,O=Ge);else if(oe<Z&&0>o(ve,he))$[O]=ve,$[oe]=he,O=oe;else break e}}return ue}function o($,ue){var he=$.sortIndex-ue.sortIndex;return he!==0?he:$.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],_=1,y=null,v=3,M=!1,E=!1,A=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D($){for(var ue=t(p);ue!==null;){if(ue.callback===null)s(p);else if(ue.startTime<=$)s(p),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(p)}}function P($){if(A=!1,D($),!E)if(t(h)!==null)E=!0,K(B);else{var ue=t(p);ue!==null&&j(P,ue.startTime-$)}}function B($,ue){E=!1,A&&(A=!1,S(T),T=-1),M=!0;var he=v;try{for(D(ue),y=t(h);y!==null&&(!(y.expirationTime>ue)||$&&!F());){var O=y.callback;if(typeof O=="function"){y.callback=null,v=y.priorityLevel;var Z=O(y.expirationTime<=ue);ue=r.unstable_now(),typeof Z=="function"?y.callback=Z:y===t(h)&&s(h),D(ue)}else s(h);y=t(h)}if(y!==null)var Ce=!0;else{var Ge=t(p);Ge!==null&&j(P,Ge.startTime-ue),Ce=!1}return Ce}finally{y=null,v=he,M=!1}}var k=!1,z=null,T=-1,L=5,Q=-1;function F(){return!(r.unstable_now()-Q<L)}function q(){if(z!==null){var $=r.unstable_now();Q=$;var ue=!0;try{ue=z(!0,$)}finally{ue?te():(k=!1,z=null)}}else k=!1}var te;if(typeof C=="function")te=function(){C(q)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,J=re.port2;re.port1.onmessage=q,te=function(){J.postMessage(null)}}else te=function(){x(q,0)};function K($){z=$,k||(k=!0,te())}function j($,ue){T=x(function(){$(r.unstable_now())},ue)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function($){$.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,K(B))},r.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<$?Math.floor(1e3/$):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function($){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var he=v;v=ue;try{return $()}finally{v=he}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function($,ue){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var he=v;v=$;try{return ue()}finally{v=he}},r.unstable_scheduleCallback=function($,ue,he){var O=r.unstable_now();switch(typeof he=="object"&&he!==null?(he=he.delay,he=typeof he=="number"&&0<he?O+he:O):he=O,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=he+Z,$={id:_++,callback:ue,priorityLevel:$,startTime:he,expirationTime:Z,sortIndex:-1},he>O?($.sortIndex=he,e(p,$),t(h)===null&&$===t(p)&&(A?(S(T),T=-1):A=!0,j(P,he-O))):($.sortIndex=Z,e(h,$),E||M||(E=!0,K(B))),$},r.unstable_shouldYield=F,r.unstable_wrapCallback=function($){var ue=v;return function(){var he=v;v=ue;try{return $.apply(this,arguments)}finally{v=he}}}}(Ku)),Ku}var vm;function d_(){return vm||(vm=1,qu.exports=f_()),qu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function h_(){if(_m)return Nn;_m=1;var r=Pd(),e=d_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},y={};function v(n){return h.call(y,n)?!0:h.call(_,n)?!1:p.test(n)?y[n]=!0:(_[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);x[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);x[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);x[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),k=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),F=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),$=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var he=Object.assign,O;function Z(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ce=!1;function Ge(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var c=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){c=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var d=fe.stack.split(`
`),m=c.stack.split(`
`),w=d.length-1,U=m.length-1;1<=w&&0<=U&&d[w]!==m[U];)U--;for(;1<=w&&0<=U;w--,U--)if(d[w]!==m[U]){if(w!==1||U!==1)do if(w--,U--,0>U||d[w]!==m[U]){var H=`
`+d[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Z(n):""}function Ke(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function oe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case k:return"Portal";case L:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case Q:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:oe(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return oe(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=He(n))}function Gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=ke(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var a=i.checked;return he({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function At(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function It(n,i){ct(n,i);var a=ge(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ut(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function V(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ut(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vt=Array.isArray;function _t(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Be(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return he({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function R(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function g(n,i){var a=ge(i.value),c=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function I(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Y(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Y(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var le,Pe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(le=le||document.createElement("div"),le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){et.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $e=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Ee=null,Ie=null;function Me(n){if(n=Ta(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=No(i),be(n.stateNode,n.type,i))}}function me(n){Ee?Ie?Ie.push(n):Ie=[n]:Ee=n}function je(){if(Ee){var n=Ee,i=Ie;if(Ie=Ee=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function st(n,i){return n(i)}function Dt(){}var Et=!1;function jn(n,i,a){if(Et)return n(i,a);Et=!0;try{return st(n,i,a)}finally{Et=!1,(Ee!==null||Ie!==null)&&(Dt(),je())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var c=No(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ds=!1;if(f)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{ds=!1}function pc(n,i,a,c,d,m,w,U,H){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(a,fe)}catch(xe){this.onError(xe)}}var ar=!1,Or=null,Xn=!1,kr=null,uo={onError:function(n){ar=!0,Or=n}};function fo(n,i,a,c,d,m,w,U,H){ar=!1,Or=null,pc.apply(uo,arguments)}function hs(n,i,a,c,d,m,w,U,H){if(fo.apply(this,arguments),ar){if(ar){var fe=Or;ar=!1,Or=null}else throw Error(t(198));Xn||(Xn=!0,kr=fe)}}function wi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oa(n){if(wi(n)!==n)throw Error(t(188))}function ho(n){var i=n.alternate;if(!i){if(i=wi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return oa(d),n;if(m===c)return oa(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var w=!1,U=d.child;U;){if(U===a){w=!0,a=d,c=m;break}if(U===c){w=!0,c=d,a=m;break}U=U.sibling}if(!w){for(U=m.child;U;){if(U===a){w=!0,a=m,c=d;break}if(U===c){w=!0,c=m,a=d;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function po(n){return n=ho(n),n!==null?mo(n):null}function mo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=mo(n);if(i!==null)return i;n=n.sibling}return null}var go=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,mc=e.unstable_shouldYield,gc=e.unstable_requestPaint,b=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,de=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Le=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,Re=null,Ue=null;function Qe(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Lt,dt=Math.log,Je=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(dt(n)/Je|0)|0}var Ot=64,Ft=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~d;U!==0?c=Mt(U):(m&=w,m!==0&&(c=Mt(m)))}else w=a&~d,w!==0?c=Mt(w):m!==0&&(c=Mt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-tt(i),d=1<<a,c|=n[a],i&=~d;return c}function qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-tt(m),U=1<<w,H=d[w];H===-1?((U&a)===0||(U&c)!==0)&&(d[w]=qe(U,i)):H<=i&&(n.expiredLanes|=U),m&=~U}}function xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function bn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tt(i),n[i]=a}function or(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-tt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Rt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-tt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var at=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var qt,$n,ki,la,Yd,vc=!1,_o=[],lr=null,cr=null,ur=null,ca=new Map,ua=new Map,fr=[],P0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qd(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":ur=null;break;case"pointerover":case"pointerout":ca.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(i.pointerId)}}function fa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ta(i),i!==null&&$n(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function L0(n,i,a,c,d){switch(i){case"focusin":return lr=fa(lr,n,i,a,c,d),!0;case"dragenter":return cr=fa(cr,n,i,a,c,d),!0;case"mouseover":return ur=fa(ur,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return ca.set(m,fa(ca.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,ua.set(m,fa(ua.get(m)||null,n,i,a,c,d)),!0}return!1}function Kd(n){var i=zr(n.target);if(i!==null){var a=wi(i);if(a!==null){if(i=a.tag,i===13){if(i=Br(a),i!==null){n.blockedOn=i,Yd(n.priority,function(){ki(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ut=c,a.target.dispatchEvent(c),ut=null}else return i=Ta(a),i!==null&&$n(i),n.blockedOn=a,!1;i.shift()}return!0}function Zd(n,i,a){xo(n)&&a.delete(i)}function D0(){vc=!1,lr!==null&&xo(lr)&&(lr=null),cr!==null&&xo(cr)&&(cr=null),ur!==null&&xo(ur)&&(ur=null),ca.forEach(Zd),ua.forEach(Zd)}function da(n,i){n.blockedOn===i&&(n.blockedOn=null,vc||(vc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,D0)))}function ha(n){function i(d){return da(d,n)}if(0<_o.length){da(_o[0],n);for(var a=1;a<_o.length;a++){var c=_o[a];c.blockedOn===n&&(c.blockedOn=null)}}for(lr!==null&&da(lr,n),cr!==null&&da(cr,n),ur!==null&&da(ur,n),ca.forEach(i),ua.forEach(i),a=0;a<fr.length;a++)c=fr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)Kd(a),a.blockedOn===null&&fr.shift()}var ps=P.ReactCurrentBatchConfig,yo=!0;function N0(n,i,a,c){var d=at,m=ps.transition;ps.transition=null;try{at=1,_c(n,i,a,c)}finally{at=d,ps.transition=m}}function I0(n,i,a,c){var d=at,m=ps.transition;ps.transition=null;try{at=4,_c(n,i,a,c)}finally{at=d,ps.transition=m}}function _c(n,i,a,c){if(yo){var d=xc(n,i,a,c);if(d===null)Fc(n,i,c,So,a),qd(n,c);else if(L0(d,n,i,a,c))c.stopPropagation();else if(qd(n,c),i&4&&-1<P0.indexOf(n)){for(;d!==null;){var m=Ta(d);if(m!==null&&qt(m),m=xc(n,i,a,c),m===null&&Fc(n,i,c,So,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Fc(n,i,c,null,a)}}var So=null;function xc(n,i,a,c){if(So=null,n=G(c),n=zr(n),n!==null)if(i=wi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Br(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function Qd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case de:return 1;case se:return 4;case ne:case Le:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var dr=null,yc=null,Mo=null;function Jd(){if(Mo)return Mo;var n,i=yc,a=i.length,c,d="value"in dr?dr.value:dr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===d[m-c];c++);return Mo=d.slice(n,1<c?1-c:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function eh(){return!1}function kn(n){function i(a,c,d,m,w){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wo:eh,this.isPropagationStopped=eh,this}return he(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sc=kn(ms),pa=he({},ms,{view:0,detail:0}),U0=kn(pa),Mc,Ec,ma,To=he({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(Mc=n.screenX-ma.screenX,Ec=n.screenY-ma.screenY):Ec=Mc=0,ma=n),Mc)},movementY:function(n){return"movementY"in n?n.movementY:Ec}}),th=kn(To),F0=he({},To,{dataTransfer:0}),O0=kn(F0),k0=he({},pa,{relatedTarget:0}),wc=kn(k0),B0=he({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=kn(B0),V0=he({},ms,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),H0=kn(V0),G0=he({},ms,{data:0}),nh=kn(G0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=X0[n])?!!i[n]:!1}function Tc(){return $0}var Y0=he({},pa,{key:function(n){if(n.key){var i=W0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?j0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tc,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q0=kn(Y0),K0=he({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ih=kn(K0),Z0=he({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tc}),Q0=kn(Z0),J0=he({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=kn(J0),tv=he({},To,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nv=kn(tv),iv=[9,13,27,32],Ac=f&&"CompositionEvent"in window,ga=null;f&&"documentMode"in document&&(ga=document.documentMode);var rv=f&&"TextEvent"in window&&!ga,rh=f&&(!Ac||ga&&8<ga&&11>=ga),sh=" ",ah=!1;function oh(n,i){switch(n){case"keyup":return iv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var gs=!1;function sv(n,i){switch(n){case"compositionend":return lh(i);case"keypress":return i.which!==32?null:(ah=!0,sh);case"textInput":return n=i.data,n===sh&&ah?null:n;default:return null}}function av(n,i){if(gs)return n==="compositionend"||!Ac&&oh(n,i)?(n=Jd(),Mo=yc=dr=null,gs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return rh&&i.locale!=="ko"?null:i.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ch(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ov[n.type]:i==="textarea"}function uh(n,i,a,c){me(c),i=Po(i,"onChange"),0<i.length&&(a=new Sc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var va=null,_a=null;function lv(n){Ch(n,0)}function Ao(n){var i=Ss(n);if(Gt(i))return n}function cv(n,i){if(n==="change")return i}var fh=!1;if(f){var bc;if(f){var Cc="oninput"in document;if(!Cc){var dh=document.createElement("div");dh.setAttribute("oninput","return;"),Cc=typeof dh.oninput=="function"}bc=Cc}else bc=!1;fh=bc&&(!document.documentMode||9<document.documentMode)}function hh(){va&&(va.detachEvent("onpropertychange",ph),_a=va=null)}function ph(n){if(n.propertyName==="value"&&Ao(_a)){var i=[];uh(i,_a,n,G(n)),jn(lv,i)}}function uv(n,i,a){n==="focusin"?(hh(),va=i,_a=a,va.attachEvent("onpropertychange",ph)):n==="focusout"&&hh()}function fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(_a)}function dv(n,i){if(n==="click")return Ao(i)}function hv(n,i){if(n==="input"||n==="change")return Ao(i)}function pv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:pv;function xa(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!oi(n[d],i[d]))return!1}return!0}function mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function gh(n,i){var a=mh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=mh(a)}}function vh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?vh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function _h(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function Rc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function mv(n){var i=_h(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&vh(a.ownerDocument.documentElement,a)){if(c!==null&&Rc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=gh(a,m);var w=gh(a,c);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var gv=f&&"documentMode"in document&&11>=document.documentMode,vs=null,Pc=null,ya=null,Lc=!1;function xh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lc||vs==null||vs!==pt(c)||(c=vs,"selectionStart"in c&&Rc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ya&&xa(ya,c)||(ya=c,c=Po(Pc,"onSelect"),0<c.length&&(i=new Sc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=vs)))}function bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Dc={},yh={};f&&(yh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Co(n){if(Dc[n])return Dc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in yh)return Dc[n]=i[a];return n}var Sh=Co("animationend"),Mh=Co("animationiteration"),Eh=Co("animationstart"),wh=Co("transitionend"),Th=new Map,Ah="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Th.set(n,i),l(i,[n])}for(var Nc=0;Nc<Ah.length;Nc++){var Ic=Ah[Nc],vv=Ic.toLowerCase(),_v=Ic[0].toUpperCase()+Ic.slice(1);hr(vv,"on"+_v)}hr(Sh,"onAnimationEnd"),hr(Mh,"onAnimationIteration"),hr(Eh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(wh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,hs(c,i,void 0,n),n.currentTarget=null}function Ch(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var U=c[w],H=U.instance,fe=U.currentTarget;if(U=U.listener,H!==m&&d.isPropagationStopped())break e;bh(d,U,fe),m=H}else for(w=0;w<c.length;w++){if(U=c[w],H=U.instance,fe=U.currentTarget,U=U.listener,H!==m&&d.isPropagationStopped())break e;bh(d,U,fe),m=H}}}if(Xn)throw n=kr,Xn=!1,kr=null,n}function Bt(n,i){var a=i[Hc];a===void 0&&(a=i[Hc]=new Set);var c=n+"__bubble";a.has(c)||(Rh(i,n,2,!1),a.add(c))}function Uc(n,i,a){var c=0;i&&(c|=4),Rh(a,n,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ma(n){if(!n[Ro]){n[Ro]=!0,s.forEach(function(a){a!=="selectionchange"&&(xv.has(a)||Uc(a,!1,n),Uc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Uc("selectionchange",!1,i))}}function Rh(n,i,a,c){switch(Qd(i)){case 1:var d=N0;break;case 4:d=I0;break;default:d=_c}a=d.bind(null,i,a,n),d=void 0,!ds||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Fc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;w=w.return}for(;U!==null;){if(w=zr(U),w===null)return;if(H=w.tag,H===5||H===6){c=m=w;continue e}U=U.parentNode}}c=c.return}jn(function(){var fe=m,xe=G(a),ye=[];e:{var _e=Th.get(n);if(_e!==void 0){var Fe=Sc,Xe=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":Fe=q0;break;case"focusin":Xe="focus",Fe=wc;break;case"focusout":Xe="blur",Fe=wc;break;case"beforeblur":case"afterblur":Fe=wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=O0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Q0;break;case Sh:case Mh:case Eh:Fe=z0;break;case wh:Fe=ev;break;case"scroll":Fe=U0;break;case"wheel":Fe=nv;break;case"copy":case"cut":case"paste":Fe=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=ih}var Ye=(i&4)!==0,Kt=!Ye&&n==="scroll",ee=Ye?_e!==null?_e+"Capture":null:_e;Ye=[];for(var W=fe,ie;W!==null;){ie=W;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,ee!==null&&(Te=yn(W,ee),Te!=null&&Ye.push(Ea(W,Te,ie)))),Kt)break;W=W.return}0<Ye.length&&(_e=new Fe(_e,Xe,null,a,xe),ye.push({event:_e,listeners:Ye}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",_e&&a!==ut&&(Xe=a.relatedTarget||a.fromElement)&&(zr(Xe)||Xe[Bi]))break e;if((Fe||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(Xe=a.relatedTarget||a.toElement,Fe=fe,Xe=Xe?zr(Xe):null,Xe!==null&&(Kt=wi(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=fe),Fe!==Xe)){if(Ye=th,Te="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=ih,Te="onPointerLeave",ee="onPointerEnter",W="pointer"),Kt=Fe==null?_e:Ss(Fe),ie=Xe==null?_e:Ss(Xe),_e=new Ye(Te,W+"leave",Fe,a,xe),_e.target=Kt,_e.relatedTarget=ie,Te=null,zr(xe)===fe&&(Ye=new Ye(ee,W+"enter",Xe,a,xe),Ye.target=ie,Ye.relatedTarget=Kt,Te=Ye),Kt=Te,Fe&&Xe)t:{for(Ye=Fe,ee=Xe,W=0,ie=Ye;ie;ie=xs(ie))W++;for(ie=0,Te=ee;Te;Te=xs(Te))ie++;for(;0<W-ie;)Ye=xs(Ye),W--;for(;0<ie-W;)ee=xs(ee),ie--;for(;W--;){if(Ye===ee||ee!==null&&Ye===ee.alternate)break t;Ye=xs(Ye),ee=xs(ee)}Ye=null}else Ye=null;Fe!==null&&Ph(ye,_e,Fe,Ye,!1),Xe!==null&&Kt!==null&&Ph(ye,Kt,Xe,Ye,!0)}}e:{if(_e=fe?Ss(fe):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var Ze=cv;else if(ch(_e))if(fh)Ze=hv;else{Ze=fv;var it=uv}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=dv);if(Ze&&(Ze=Ze(n,fe))){uh(ye,Ze,a,xe);break e}it&&it(n,_e,fe),n==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Ut(_e,"number",_e.value)}switch(it=fe?Ss(fe):window,n){case"focusin":(ch(it)||it.contentEditable==="true")&&(vs=it,Pc=fe,ya=null);break;case"focusout":ya=Pc=vs=null;break;case"mousedown":Lc=!0;break;case"contextmenu":case"mouseup":case"dragend":Lc=!1,xh(ye,a,xe);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":xh(ye,a,xe)}var rt;if(Ac)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else gs?oh(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(rh&&a.locale!=="ko"&&(gs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&gs&&(rt=Jd()):(dr=xe,yc="value"in dr?dr.value:dr.textContent,gs=!0)),it=Po(fe,ot),0<it.length&&(ot=new nh(ot,n,null,a,xe),ye.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=lh(a),rt!==null&&(ot.data=rt)))),(rt=rv?sv(n,a):av(n,a))&&(fe=Po(fe,"onBeforeInput"),0<fe.length&&(xe=new nh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:fe}),xe.data=rt))}Ch(ye,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=yn(n,a),m!=null&&c.unshift(Ea(n,m,d)),m=yn(n,i),m!=null&&c.push(Ea(n,m,d))),n=n.return}return c}function xs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ph(n,i,a,c,d){for(var m=i._reactName,w=[];a!==null&&a!==c;){var U=a,H=U.alternate,fe=U.stateNode;if(H!==null&&H===c)break;U.tag===5&&fe!==null&&(U=fe,d?(H=yn(a,m),H!=null&&w.unshift(Ea(a,H,U))):d||(H=yn(a,m),H!=null&&w.push(Ea(a,H,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var yv=/\r\n?/g,Sv=/\u0000|\uFFFD/g;function Lh(n){return(typeof n=="string"?n:""+n).replace(yv,`
`).replace(Sv,"")}function Lo(n,i,a){if(i=Lh(i),Lh(n)!==i&&a)throw Error(t(425))}function Do(){}var Oc=null,kc=null;function Bc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,Dh=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Dh<"u"?function(n){return Dh.resolve(null).then(n).catch(wv)}:zc;function wv(n){setTimeout(function(){throw n})}function Vc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),ha(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);ha(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ys=Math.random().toString(36).slice(2),Ti="__reactFiber$"+ys,wa="__reactProps$"+ys,Bi="__reactContainer$"+ys,Hc="__reactEvents$"+ys,Tv="__reactListeners$"+ys,Av="__reactHandles$"+ys;function zr(n){var i=n[Ti];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Ti])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Ta(n){return n=n[Ti]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ss(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function No(n){return n[wa]||null}var Gc=[],Ms=-1;function mr(n){return{current:n}}function zt(n){0>Ms||(n.current=Gc[Ms],Gc[Ms]=null,Ms--)}function kt(n,i){Ms++,Gc[Ms]=n.current,n.current=i}var gr={},pn=mr(gr),Cn=mr(!1),Vr=gr;function Es(n,i){var a=n.type.contextTypes;if(!a)return gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Rn(n){return n=n.childContextTypes,n!=null}function Io(){zt(Cn),zt(pn)}function Ih(n,i,a){if(pn.current!==gr)throw Error(t(168));kt(pn,i),kt(Cn,a)}function Uh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ve(n)||"Unknown",d));return he({},a,c)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=pn.current,kt(pn,n),kt(Cn,Cn.current),!0}function Fh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Uh(n,i,Vr),c.__reactInternalMemoizedMergedChildContext=n,zt(Cn),zt(pn),kt(pn,n)):zt(Cn),kt(Cn,a)}var zi=null,Fo=!1,Wc=!1;function Oh(n){zi===null?zi=[n]:zi.push(n)}function bv(n){Fo=!0,Oh(n)}function vr(){if(!Wc&&zi!==null){Wc=!0;var n=0,i=at;try{var a=zi;for(at=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}zi=null,Fo=!1}catch(d){throw zi!==null&&(zi=zi.slice(n+1)),go(de,vr),d}finally{at=i,Wc=!1}}return null}var ws=[],Ts=0,Oo=null,ko=0,Yn=[],qn=0,Hr=null,Vi=1,Hi="";function Gr(n,i){ws[Ts++]=ko,ws[Ts++]=Oo,Oo=n,ko=i}function kh(n,i,a){Yn[qn++]=Vi,Yn[qn++]=Hi,Yn[qn++]=Hr,Hr=n;var c=Vi;n=Hi;var d=32-tt(c)-1;c&=~(1<<d),a+=1;var m=32-tt(i)+d;if(30<m){var w=d-d%5;m=(c&(1<<w)-1).toString(32),c>>=w,d-=w,Vi=1<<32-tt(i)+d|a<<d|c,Hi=m+n}else Vi=1<<m|a<<d|c,Hi=n}function jc(n){n.return!==null&&(Gr(n,1),kh(n,1,0))}function Xc(n){for(;n===Oo;)Oo=ws[--Ts],ws[Ts]=null,ko=ws[--Ts],ws[Ts]=null;for(;n===Hr;)Hr=Yn[--qn],Yn[qn]=null,Hi=Yn[--qn],Yn[qn]=null,Vi=Yn[--qn],Yn[qn]=null}var Bn=null,zn=null,Vt=!1,li=null;function Bh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function zh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function $c(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Yc(n){if(Vt){var i=zn;if(i){var a=i;if(!zh(n,i)){if($c(n))throw Error(t(418));i=pr(a.nextSibling);var c=Bn;i&&zh(n,i)?Bh(c,a):(n.flags=n.flags&-4097|2,Vt=!1,Bn=n)}}else{if($c(n))throw Error(t(418));n.flags=n.flags&-4097|2,Vt=!1,Bn=n}}}function Vh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Bo(n){if(n!==Bn)return!1;if(!Vt)return Vh(n),Vt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bc(n.type,n.memoizedProps)),i&&(i=zn)){if($c(n))throw Hh(),Error(t(418));for(;i;)Bh(n,i),i=pr(i.nextSibling)}if(Vh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?pr(n.stateNode.nextSibling):null;return!0}function Hh(){for(var n=zn;n;)n=pr(n.nextSibling)}function As(){zn=Bn=null,Vt=!1}function qc(n){li===null?li=[n]:li.push(n)}var Cv=P.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var U=d.refs;w===null?delete U[m]:U[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Gh(n){var i=n._init;return i(n._payload)}function Wh(n){function i(ee,W){if(n){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function d(ee,W){return ee=Tr(ee,W),ee.index=0,ee.sibling=null,ee}function m(ee,W,ie){return ee.index=ie,n?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,W,ie,Te){return W===null||W.tag!==6?(W=zu(ie,ee.mode,Te),W.return=ee,W):(W=d(W,ie),W.return=ee,W)}function H(ee,W,ie,Te){var Ze=ie.type;return Ze===z?xe(ee,W,ie.props.children,Te,ie.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Gh(Ze)===W.type)?(Te=d(W,ie.props),Te.ref=Aa(ee,W,ie),Te.return=ee,Te):(Te=ul(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=Aa(ee,W,ie),Te.return=ee,Te)}function fe(ee,W,ie,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Vu(ie,ee.mode,Te),W.return=ee,W):(W=d(W,ie.children||[]),W.return=ee,W)}function xe(ee,W,ie,Te,Ze){return W===null||W.tag!==7?(W=Zr(ie,ee.mode,Te,Ze),W.return=ee,W):(W=d(W,ie),W.return=ee,W)}function ye(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=zu(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return ie=ul(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=Aa(ee,null,W),ie.return=ee,ie;case k:return W=Vu(W,ee.mode,ie),W.return=ee,W;case K:var Te=W._init;return ye(ee,Te(W._payload),ie)}if(vt(W)||ue(W))return W=Zr(W,ee.mode,ie,null),W.return=ee,W;zo(ee,W)}return null}function _e(ee,W,ie,Te){var Ze=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ze!==null?null:U(ee,W,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return ie.key===Ze?H(ee,W,ie,Te):null;case k:return ie.key===Ze?fe(ee,W,ie,Te):null;case K:return Ze=ie._init,_e(ee,W,Ze(ie._payload),Te)}if(vt(ie)||ue(ie))return Ze!==null?null:xe(ee,W,ie,Te,null);zo(ee,ie)}return null}function Fe(ee,W,ie,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(ie)||null,U(W,ee,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case B:return ee=ee.get(Te.key===null?ie:Te.key)||null,H(W,ee,Te,Ze);case k:return ee=ee.get(Te.key===null?ie:Te.key)||null,fe(W,ee,Te,Ze);case K:var it=Te._init;return Fe(ee,W,ie,it(Te._payload),Ze)}if(vt(Te)||ue(Te))return ee=ee.get(ie)||null,xe(W,ee,Te,Ze,null);zo(W,Te)}return null}function Xe(ee,W,ie,Te){for(var Ze=null,it=null,rt=W,ot=W=0,cn=null;rt!==null&&ot<ie.length;ot++){rt.index>ot?(cn=rt,rt=null):cn=rt.sibling;var bt=_e(ee,rt,ie[ot],Te);if(bt===null){rt===null&&(rt=cn);break}n&&rt&&bt.alternate===null&&i(ee,rt),W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt,rt=cn}if(ot===ie.length)return a(ee,rt),Vt&&Gr(ee,ot),Ze;if(rt===null){for(;ot<ie.length;ot++)rt=ye(ee,ie[ot],Te),rt!==null&&(W=m(rt,W,ot),it===null?Ze=rt:it.sibling=rt,it=rt);return Vt&&Gr(ee,ot),Ze}for(rt=c(ee,rt);ot<ie.length;ot++)cn=Fe(rt,ee,ot,ie[ot],Te),cn!==null&&(n&&cn.alternate!==null&&rt.delete(cn.key===null?ot:cn.key),W=m(cn,W,ot),it===null?Ze=cn:it.sibling=cn,it=cn);return n&&rt.forEach(function(Ar){return i(ee,Ar)}),Vt&&Gr(ee,ot),Ze}function Ye(ee,W,ie,Te){var Ze=ue(ie);if(typeof Ze!="function")throw Error(t(150));if(ie=Ze.call(ie),ie==null)throw Error(t(151));for(var it=Ze=null,rt=W,ot=W=0,cn=null,bt=ie.next();rt!==null&&!bt.done;ot++,bt=ie.next()){rt.index>ot?(cn=rt,rt=null):cn=rt.sibling;var Ar=_e(ee,rt,bt.value,Te);if(Ar===null){rt===null&&(rt=cn);break}n&&rt&&Ar.alternate===null&&i(ee,rt),W=m(Ar,W,ot),it===null?Ze=Ar:it.sibling=Ar,it=Ar,rt=cn}if(bt.done)return a(ee,rt),Vt&&Gr(ee,ot),Ze;if(rt===null){for(;!bt.done;ot++,bt=ie.next())bt=ye(ee,bt.value,Te),bt!==null&&(W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt);return Vt&&Gr(ee,ot),Ze}for(rt=c(ee,rt);!bt.done;ot++,bt=ie.next())bt=Fe(rt,ee,ot,bt.value,Te),bt!==null&&(n&&bt.alternate!==null&&rt.delete(bt.key===null?ot:bt.key),W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt);return n&&rt.forEach(function(o_){return i(ee,o_)}),Vt&&Gr(ee,ot),Ze}function Kt(ee,W,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===z&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:e:{for(var Ze=ie.key,it=W;it!==null;){if(it.key===Ze){if(Ze=ie.type,Ze===z){if(it.tag===7){a(ee,it.sibling),W=d(it,ie.props.children),W.return=ee,ee=W;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Gh(Ze)===it.type){a(ee,it.sibling),W=d(it,ie.props),W.ref=Aa(ee,it,ie),W.return=ee,ee=W;break e}a(ee,it);break}else i(ee,it);it=it.sibling}ie.type===z?(W=Zr(ie.props.children,ee.mode,Te,ie.key),W.return=ee,ee=W):(Te=ul(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=Aa(ee,W,ie),Te.return=ee,ee=Te)}return w(ee);case k:e:{for(it=ie.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(ee,W.sibling),W=d(W,ie.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Vu(ie,ee.mode,Te),W.return=ee,ee=W}return w(ee);case K:return it=ie._init,Kt(ee,W,it(ie._payload),Te)}if(vt(ie))return Xe(ee,W,ie,Te);if(ue(ie))return Ye(ee,W,ie,Te);zo(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(a(ee,W.sibling),W=d(W,ie),W.return=ee,ee=W):(a(ee,W),W=zu(ie,ee.mode,Te),W.return=ee,ee=W),w(ee)):a(ee,W)}return Kt}var bs=Wh(!0),jh=Wh(!1),Vo=mr(null),Ho=null,Cs=null,Kc=null;function Zc(){Kc=Cs=Ho=null}function Qc(n){var i=Vo.current;zt(Vo),n._currentValue=i}function Jc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Rs(n,i){Ho=n,Kc=Cs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Kc!==n)if(n={context:n,memoizedValue:i,next:null},Cs===null){if(Ho===null)throw Error(t(308));Cs=n,Ho.dependencies={lanes:0,firstContext:n}}else Cs=Cs.next=n;return i}var Wr=null;function eu(n){Wr===null?Wr=[n]:Wr.push(n)}function Xh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,eu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Gi(n,c)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $h(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Gi(n,a)}return d=c.interleaved,d===null?(i.next=i,eu(c)):(i.next=d.next,d.next=i),c.interleaved=i,Gi(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}function Yh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wo(n,i,a,c){var d=n.updateQueue;_r=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var H=U,fe=H.next;H.next=null,w===null?m=fe:w.next=fe,w=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=fe:U.next=fe,xe.lastBaseUpdate=H))}if(m!==null){var ye=d.baseState;w=0,xe=fe=H=null,U=m;do{var _e=U.lane,Fe=U.eventTime;if((c&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,Ye=U;switch(_e=i,Fe=a,Ye.tag){case 1:if(Xe=Ye.payload,typeof Xe=="function"){ye=Xe.call(Fe,ye,_e);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ye.payload,_e=typeof Xe=="function"?Xe.call(Fe,ye,_e):Xe,_e==null)break e;ye=he({},ye,_e);break e;case 2:_r=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[U]:_e.push(U))}else Fe={eventTime:Fe,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(fe=xe=Fe,H=ye):xe=xe.next=Fe,w|=_e;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(xe===null&&(H=ye),d.baseState=H,d.firstBaseUpdate=fe,d.lastBaseUpdate=xe,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);$r|=w,n.lanes=w,n.memoizedState=ye}}function qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ba={},Ai=mr(ba),Ca=mr(ba),Ra=mr(ba);function jr(n){if(n===ba)throw Error(t(174));return n}function nu(n,i){switch(kt(Ra,i),kt(Ca,n),kt(Ai,ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}zt(Ai),kt(Ai,i)}function Ps(){zt(Ai),zt(Ca),zt(Ra)}function Kh(n){jr(Ra.current);var i=jr(Ai.current),a=pe(i,n.type);i!==a&&(kt(Ca,n),kt(Ai,a))}function iu(n){Ca.current===n&&(zt(Ai),zt(Ca))}var Wt=mr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ru=[];function su(){for(var n=0;n<ru.length;n++)ru[n]._workInProgressVersionPrimary=null;ru.length=0}var Xo=P.ReactCurrentDispatcher,au=P.ReactCurrentBatchConfig,Xr=0,jt=null,tn=null,on=null,$o=!1,Pa=!1,La=0,Rv=0;function mn(){throw Error(t(321))}function ou(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function lu(n,i,a,c,d,m){if(Xr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Nv:Iv,n=a(c,d),Pa){m=0;do{if(Pa=!1,La=0,25<=m)throw Error(t(301));m+=1,on=tn=null,i.updateQueue=null,Xo.current=Uv,n=a(c,d)}while(Pa)}if(Xo.current=Ko,i=tn!==null&&tn.next!==null,Xr=0,on=tn=jt=null,$o=!1,i)throw Error(t(300));return n}function cu(){var n=La!==0;return La=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?jt.memoizedState=on=n:on=on.next=n,on}function Zn(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=on===null?jt.memoizedState:on.next;if(i!==null)on=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?jt.memoizedState=on=n:on=on.next=n}return on}function Da(n,i){return typeof i=="function"?i(n):i}function uu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=tn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var U=w=null,H=null,fe=m;do{var xe=fe.lane;if((Xr&xe)===xe)H!==null&&(H=H.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var ye={lane:xe,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};H===null?(U=H=ye,w=c):H=H.next=ye,jt.lanes|=xe,$r|=xe}fe=fe.next}while(fe!==null&&fe!==m);H===null?w=c:H.next=U,oi(c,i.memoizedState)||(Pn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,jt.lanes|=m,$r|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fu(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);oi(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Zh(){}function Qh(n,i){var a=jt,c=Zn(),d=i(),m=!oi(c.memoizedState,d);if(m&&(c.memoizedState=d,Pn=!0),c=c.queue,du(tp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Na(9,ep.bind(null,a,c,d,i),void 0,null),ln===null)throw Error(t(349));(Xr&30)!==0||Jh(a,i,d)}return d}function Jh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ep(n,i,a,c){i.value=a,i.getSnapshot=c,np(i)&&ip(n)}function tp(n,i,a){return a(function(){np(i)&&ip(n)})}function np(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function ip(n){var i=Gi(n,1);i!==null&&di(i,n,1,-1)}function rp(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=Dv.bind(null,jt,n),[i.memoizedState,n]}function Na(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function sp(){return Zn().memoizedState}function Yo(n,i,a,c){var d=bi();jt.flags|=n,d.memoizedState=Na(1|i,a,void 0,c===void 0?null:c)}function qo(n,i,a,c){var d=Zn();c=c===void 0?null:c;var m=void 0;if(tn!==null){var w=tn.memoizedState;if(m=w.destroy,c!==null&&ou(c,w.deps)){d.memoizedState=Na(i,a,m,c);return}}jt.flags|=n,d.memoizedState=Na(1|i,a,m,c)}function ap(n,i){return Yo(8390656,8,n,i)}function du(n,i){return qo(2048,8,n,i)}function op(n,i){return qo(4,2,n,i)}function lp(n,i){return qo(4,4,n,i)}function cp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function up(n,i,a){return a=a!=null?a.concat([n]):null,qo(4,4,cp.bind(null,i,n),a)}function hu(){}function fp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ou(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function dp(n,i){var a=Zn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ou(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function hp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(oi(a,i)||(a=An(),jt.lanes|=a,$r|=a,n.baseState=!0),i)}function Pv(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var c=au.transition;au.transition={};try{n(!1),i()}finally{at=a,au.transition=c}}function pp(){return Zn().memoizedState}function Lv(n,i,a){var c=Er(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},mp(n))gp(i,a);else if(a=Xh(n,i,a,c),a!==null){var d=En();di(a,n,c,d),vp(a,i,c)}}function Dv(n,i,a){var c=Er(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(mp(n))gp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,U=m(w,a);if(d.hasEagerState=!0,d.eagerState=U,oi(U,w)){var H=i.interleaved;H===null?(d.next=d,eu(i)):(d.next=H.next,H.next=d),i.interleaved=d;return}}catch{}finally{}a=Xh(n,i,d,c),a!==null&&(d=En(),di(a,n,c,d),vp(a,i,c))}}function mp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function gp(n,i){Pa=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function vp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rt(n,a)}}var Ko={readContext:Kn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},Nv={readContext:Kn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:ap,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4194308,4,cp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Yo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Yo(4,2,n,i)},useMemo:function(n,i){var a=bi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=bi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Lv.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:rp,useDebugValue:hu,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=rp(!1),i=n[0];return n=Pv.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,d=bi();if(Vt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(Xr&30)!==0||Jh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ap(tp.bind(null,c,m,n),[n]),c.flags|=2048,Na(9,ep.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=bi(),i=ln.identifierPrefix;if(Vt){var a=Hi,c=Vi;a=(c&~(1<<32-tt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Rv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Iv={readContext:Kn,useCallback:fp,useContext:Kn,useEffect:du,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:uu,useRef:sp,useState:function(){return uu(Da)},useDebugValue:hu,useDeferredValue:function(n){var i=Zn();return hp(i,tn.memoizedState,n)},useTransition:function(){var n=uu(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1},Uv={readContext:Kn,useCallback:fp,useContext:Kn,useEffect:du,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:dp,useReducer:fu,useRef:sp,useState:function(){return fu(Da)},useDebugValue:hu,useDeferredValue:function(n){var i=Zn();return tn===null?i.memoizedState=n:hp(i,tn.memoizedState,n)},useTransition:function(){var n=fu(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Zh,useSyncExternalStore:Qh,useId:pp,unstable_isNewReconciler:!1};function ci(n,i){if(n&&n.defaultProps){i=he({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:he({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?wi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=En(),d=Er(n),m=Wi(c,d);m.payload=i,a!=null&&(m.callback=a),i=xr(n,m,d),i!==null&&(di(i,n,d,c),Go(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=En(),d=Er(n),m=Wi(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=xr(n,m,d),i!==null&&(di(i,n,d,c),Go(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),c=Er(n),d=Wi(a,c);d.tag=2,i!=null&&(d.callback=i),i=xr(n,d,c),i!==null&&(di(i,n,c,a),Go(i,n,c))}};function _p(n,i,a,c,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!xa(a,c)||!xa(d,m):!0}function xp(n,i,a){var c=!1,d=gr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=Rn(i)?Vr:pn.current,c=i.contextTypes,m=(c=c!=null)?Es(n,d):gr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function yp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function mu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},tu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=Rn(i)?Vr:pn.current,d.context=Es(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(pu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Zo.enqueueReplaceState(d,d.state,null),Wo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=Ke(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function gu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fv=typeof WeakMap=="function"?WeakMap:Map;function Sp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,Du=c),vu(n,i)},a}function Mp(n,i,a){a=Wi(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){vu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){vu(n,i),typeof c!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Ep(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Fv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Kv.bind(null,n,i,a),i.then(n,n))}function wp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Tp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Ov=P.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,c){i.child=n===null?jh(i,null,a,c):bs(i,n.child,a,c)}function Ap(n,i,a,c,d){a=a.render;var m=i.ref;return Rs(i,d),c=lu(n,i,a,c,m,d),a=cu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Vt&&a&&jc(i),i.flags|=1,Mn(n,i,c,d),i.child)}function bp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Bu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Cp(n,i,m,c,d)):(n=ul(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(w,c)&&n.ref===i.ref)return ji(n,i,d)}return i.flags|=1,n=Tr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Cp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(xa(m,c)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ji(n,i,d)}return _u(n,i,a,c,d)}function Rp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ns,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ns,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,kt(Ns,Vn),Vn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,kt(Ns,Vn),Vn|=c;return Mn(n,i,d,a),i.child}function Pp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _u(n,i,a,c,d){var m=Rn(a)?Vr:pn.current;return m=Es(i,m),Rs(i,d),a=lu(n,i,a,c,m,d),c=cu(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,ji(n,i,d)):(Vt&&c&&jc(i),i.flags|=1,Mn(n,i,a,d),i.child)}function Lp(n,i,a,c,d){if(Rn(a)){var m=!0;Uo(i)}else m=!1;if(Rs(i,d),i.stateNode===null)Jo(n,i),xp(i,a,c),mu(i,a,c,d),c=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,fe=a.contextType;typeof fe=="object"&&fe!==null?fe=Kn(fe):(fe=Rn(a)?Vr:pn.current,fe=Es(i,fe));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==c||H!==fe)&&yp(i,w,c,fe),_r=!1;var _e=i.memoizedState;w.state=_e,Wo(i,c,w,d),H=i.memoizedState,U!==c||_e!==H||Cn.current||_r?(typeof xe=="function"&&(pu(i,a,xe,c),H=i.memoizedState),(U=_r||_p(i,a,U,c,_e,H,fe))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=fe,c=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,$h(n,i),U=i.memoizedProps,fe=i.type===i.elementType?U:ci(i.type,U),w.props=fe,ye=i.pendingProps,_e=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=Rn(a)?Vr:pn.current,H=Es(i,H));var Fe=a.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||_e!==H)&&yp(i,w,c,H),_r=!1,_e=i.memoizedState,w.state=_e,Wo(i,c,w,d);var Xe=i.memoizedState;U!==ye||_e!==Xe||Cn.current||_r?(typeof Fe=="function"&&(pu(i,a,Fe,c),Xe=i.memoizedState),(fe=_r||_p(i,a,fe,c,_e,Xe,H)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Xe,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Xe,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Xe),w.props=c,w.state=Xe,w.context=H,c=fe):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return xu(n,i,a,c,m,d)}function xu(n,i,a,c,d,m){Pp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return d&&Fh(i,a,!1),ji(n,i,m);c=i.stateNode,Ov.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=bs(i,n.child,null,m),i.child=bs(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=c.state,d&&Fh(i,a,!0),i.child}function Dp(n){var i=n.stateNode;i.pendingContext?Ih(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ih(n,i.context,!1),nu(n,i.containerInfo)}function Np(n,i,a,c,d){return As(),qc(d),i.flags|=256,Mn(n,i,a,c),i.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function Su(n){return{baseLanes:n,cachePool:null,transitions:null}}function Ip(n,i,a){var c=i.pendingProps,d=Wt.current,m=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),kt(Wt,d&1),n===null)return Yc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=fl(w,c,0,null),n=Zr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Su(a),i.memoizedState=yu,n):Mu(i,w));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return kv(n,i,w,c,U,d,a);if(m){m=c.fallback,w=i.mode,d=n.child,U=d.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=Tr(d,H),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?m=Tr(U,m):(m=Zr(m,w,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?Su(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=yu,c}return m=n.child,n=m.sibling,c=Tr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Mu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&qc(c),bs(i,n.child,null,a),n=Mu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kv(n,i,a,c,d,m,w){if(a)return i.flags&256?(i.flags&=-257,c=gu(Error(t(422))),Qo(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=fl({mode:"visible",children:c.children},d,0,null),m=Zr(m,d,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&bs(i,n.child,null,w),i.child.memoizedState=Su(w),i.memoizedState=yu,m);if((i.mode&1)===0)return Qo(n,i,w,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,m=Error(t(419)),c=gu(m,c,void 0),Qo(n,i,w,c)}if(U=(w&n.childLanes)!==0,Pn||U){if(c=ln,c!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Gi(n,d),di(c,n,d,-1))}return ku(),c=gu(Error(t(421))),Qo(n,i,w,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Zv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,zn=pr(d.nextSibling),Bn=i,Vt=!0,li=null,n!==null&&(Yn[qn++]=Vi,Yn[qn++]=Hi,Yn[qn++]=Hr,Vi=n.id,Hi=n.overflow,Hr=i),i=Mu(i,c.children),i.flags|=4096,i)}function Up(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Jc(n.return,i,a)}function Eu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Fp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(Mn(n,i,c.children,a),c=Wt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Up(n,a,i);else if(n.tag===19)Up(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(kt(Wt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Eu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Eu(i,!0,a,null,m);break;case"together":Eu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Bv(n,i,a){switch(i.tag){case 3:Dp(i),As();break;case 5:Kh(i);break;case 1:Rn(i.type)&&Uo(i);break;case 4:nu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;kt(Vo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(kt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ip(n,i,a):(kt(Wt,Wt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Fp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),kt(Wt,Wt.current),c)break;return null;case 22:case 23:return i.lanes=0,Rp(n,i,a)}return ji(n,i,a)}var Op,wu,kp,Bp;Op=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wu=function(){},kp=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,jr(Ai.current);var m=null;switch(a){case"input":d=yt(n,d),c=yt(n,c),m=[];break;case"select":d=he({},d,{value:void 0}),c=he({},c,{value:void 0}),m=[];break;case"textarea":d=Be(n,d),c=Be(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Do)}We(a,c);var w;a=null;for(fe in d)if(!c.hasOwnProperty(fe)&&d.hasOwnProperty(fe)&&d[fe]!=null)if(fe==="style"){var U=d[fe];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?m||(m=[]):(m=m||[]).push(fe,null));for(fe in c){var H=c[fe];if(U=d?.[fe],c.hasOwnProperty(fe)&&H!==U&&(H!=null||U!=null))if(fe==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(m||(m=[]),m.push(fe,a)),a=H;else fe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(m=m||[]).push(fe,H)):fe==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(fe,""+H):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(H!=null&&fe==="onScroll"&&Bt("scroll",n),m||U===H||(m=[])):(m=m||[]).push(fe,H))}a&&(m=m||[]).push("style",a);var fe=m;(i.updateQueue=fe)&&(i.flags|=4)}},Bp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ia(n,i){if(!Vt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function zv(n,i,a){var c=i.pendingProps;switch(Xc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Io(),gn(i),null;case 3:return c=i.stateNode,Ps(),zt(Cn),zt(pn),su(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Uu(li),li=null))),wu(n,i),gn(i),null;case 5:iu(i);var d=jr(Ra.current);if(a=i.type,n!==null&&i.stateNode!=null)kp(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=jr(Ai.current),Bo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Ti]=i,c[wa]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(d=0;d<Sa.length;d++)Bt(Sa[d],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":At(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":R(c,m),Bt("invalid",c)}We(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var U=m[w];w==="children"?typeof U=="string"?c.textContent!==U&&(m.suppressHydrationWarning!==!0&&Lo(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Lo(c.textContent,U,n),d=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Bt("scroll",c)}switch(a){case"input":nt(c),V(c,m,!0);break;case"textarea":nt(c),I(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Do)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Y(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ti]=i,n[wa]=c,Op(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),d=c;break;case"iframe":case"object":case"embed":Bt("load",n),d=c;break;case"video":case"audio":for(d=0;d<Sa.length;d++)Bt(Sa[d],n);d=c;break;case"source":Bt("error",n),d=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),d=c;break;case"details":Bt("toggle",n),d=c;break;case"input":At(n,c),d=yt(n,c),Bt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=he({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":R(n,c),d=Be(n,c),Bt("invalid",n);break;default:d=c}We(a,d),U=d;for(m in U)if(U.hasOwnProperty(m)){var H=U[m];m==="style"?Ae(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(n,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&we(n,H):typeof H=="number"&&we(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Bt("scroll",n):H!=null&&D(n,m,H,w))}switch(a){case"input":nt(n),V(n,c,!1);break;case"textarea":nt(n),I(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ge(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?_t(n,!!c.multiple,m,!1):c.defaultValue!=null&&_t(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Bp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ra.current),jr(Ai.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ti]=i,(m=c.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Lo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ti]=i,i.stateNode=c}return gn(i),null;case 13:if(zt(Wt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Vt&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hh(),As(),i.flags|=98560,m=!1;else if(m=Bo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ti]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else li!==null&&(Uu(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):ku())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Ps(),wu(n,i),n===null&&Ma(i.stateNode.containerInfo),gn(i),null;case 10:return Qc(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Io(),gn(i),null;case 19:if(zt(Wt),m=i.memoizedState,m===null)return gn(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)Ia(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=jo(n),w!==null){for(i.flags|=128,Ia(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&b()>Is&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304)}else{if(!c)if(n=jo(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Vt)return gn(i),null}else 2*b()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,c=!0,Ia(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=b(),i.sibling=null,a=Wt.current,kt(Wt,c?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Vv(n,i){switch(Xc(i),i.tag){case 1:return Rn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ps(),zt(Cn),zt(pn),su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return iu(i),null;case 13:if(zt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return Ps(),null;case 10:return Qc(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var el=!1,vn=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function Tu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var zp=!1;function Gv(n,i){if(Oc=yo,n=_h(),Rc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,U=-1,H=-1,fe=0,xe=0,ye=n,_e=null;t:for(;;){for(var Fe;ye!==a||d!==0&&ye.nodeType!==3||(U=w+d),ye!==m||c!==0&&ye.nodeType!==3||(H=w+c),ye.nodeType===3&&(w+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)_e=ye,ye=Fe;for(;;){if(ye===n)break t;if(_e===a&&++fe===d&&(U=w),_e===m&&++xe===c&&(H=w),(Fe=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Fe}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(kc={focusedElem:n,selectionRange:a},yo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ye=Xe.memoizedProps,Kt=Xe.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ci(i.type,Ye),Kt);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=zp,zp=!1,Xe}function Ua(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Tu(i,a,m)}d=d.next}while(d!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Au(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Vp(n){var i=n.alternate;i!==null&&(n.alternate=null,Vp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ti],delete i[wa],delete i[Hc],delete i[Tv],delete i[Av])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Hp(n){return n.tag===5||n.tag===3||n.tag===4}function Gp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Hp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(c!==4&&(n=n.child,n!==null))for(bu(n,i,a),n=n.sibling;n!==null;)bu(n,i,a),n=n.sibling}function Cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Cu(n,i,a),n=n.sibling;n!==null;)Cu(n,i,a),n=n.sibling}var fn=null,ui=!1;function yr(n,i,a){for(a=a.child;a!==null;)Wp(n,i,a),a=a.sibling}function Wp(n,i,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 5:vn||Ds(a,i);case 6:var c=fn,d=ui;fn=null,yr(n,i,a),fn=c,ui=d,fn!==null&&(ui?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(ui?(n=fn,a=a.stateNode,n.nodeType===8?Vc(n.parentNode,a):n.nodeType===1&&Vc(n,a),ha(n)):Vc(fn,a.stateNode));break;case 4:c=fn,d=ui,fn=a.stateNode.containerInfo,ui=!0,yr(n,i,a),fn=c,ui=d;break;case 0:case 11:case 14:case 15:if(!vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Tu(a,i,w),d=d.next}while(d!==c)}yr(n,i,a);break;case 1:if(!vn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(U){Xt(a,i,U)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(vn=(c=vn)||a.memoizedState!==null,yr(n,i,a),vn=c):yr(n,i,a);break;default:yr(n,i,a)}}function jp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Hv),i.forEach(function(c){var d=Qv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:fn=U.stateNode,ui=!1;break e;case 3:fn=U.stateNode.containerInfo,ui=!0;break e;case 4:fn=U.stateNode.containerInfo,ui=!0;break e}U=U.return}if(fn===null)throw Error(t(160));Wp(m,w,d),fn=null,ui=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(fe){Xt(d,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xp(i,n),i=i.sibling}function Xp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Ci(n),c&4){try{Ua(3,n,n.return),tl(3,n)}catch(Ye){Xt(n,n.return,Ye)}try{Ua(5,n,n.return)}catch(Ye){Xt(n,n.return,Ye)}}break;case 1:fi(i,n),Ci(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(fi(i,n),Ci(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var d=n.stateNode;try{we(d,"")}catch(Ye){Xt(n,n.return,Ye)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,U=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ct(d,m),Ne(U,w);var fe=Ne(U,m);for(w=0;w<H.length;w+=2){var xe=H[w],ye=H[w+1];xe==="style"?Ae(d,ye):xe==="dangerouslySetInnerHTML"?Pe(d,ye):xe==="children"?we(d,ye):D(d,xe,ye,fe)}switch(U){case"input":It(d,m);break;case"textarea":g(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?_t(d,!!m.multiple,Fe,!1):_e!==!!m.multiple&&(m.defaultValue!=null?_t(d,!!m.multiple,m.defaultValue,!0):_t(d,!!m.multiple,m.multiple?[]:"",!1))}d[wa]=m}catch(Ye){Xt(n,n.return,Ye)}}break;case 6:if(fi(i,n),Ci(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){Xt(n,n.return,Ye)}}break;case 3:if(fi(i,n),Ci(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ha(i.containerInfo)}catch(Ye){Xt(n,n.return,Ye)}break;case 4:fi(i,n),Ci(n);break;case 13:fi(i,n),Ci(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Lu=b())),c&4&&jp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(fe=vn)||xe,fi(i,n),vn=fe):fi(i,n),Ci(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(ye=Ve=xe;Ve!==null;){switch(_e=Ve,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ua(4,_e,_e.return);break;case 1:Ds(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(Ye){Xt(c,a,Ye)}}break;case 5:Ds(_e,_e.return);break;case 22:if(_e.memoizedState!==null){qp(ye);continue}}Fe!==null?(Fe.return=_e,Ve=Fe):qp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{d=ye.stateNode,fe?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,H=ye.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=Se("display",w))}catch(Ye){Xt(n,n.return,Ye)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=fe?"":ye.memoizedProps}catch(Ye){Xt(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(i,n),Ci(n),c&4&&jp(n);break;case 21:break;default:fi(i,n),Ci(n)}}function Ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Hp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(we(d,""),c.flags&=-33);var m=Gp(n);Cu(n,m,d);break;case 3:case 4:var w=c.stateNode.containerInfo,U=Gp(n);bu(n,U,w);break;default:throw Error(t(161))}}catch(H){Xt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Wv(n,i,a){Ve=n,$p(n)}function $p(n,i,a){for(var c=(n.mode&1)!==0;Ve!==null;){var d=Ve,m=d.child;if(d.tag===22&&c){var w=d.memoizedState!==null||el;if(!w){var U=d.alternate,H=U!==null&&U.memoizedState!==null||vn;U=el;var fe=vn;if(el=w,(vn=H)&&!fe)for(Ve=d;Ve!==null;)w=Ve,H=w.child,w.tag===22&&w.memoizedState!==null?Kp(d):H!==null?(H.return=w,Ve=H):Kp(d);for(;m!==null;)Ve=m,$p(m),m=m.sibling;Ve=d,el=U,vn=fe}Yp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ve=m):Yp(n)}}function Yp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:ci(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&qh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}qh(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var xe=fe.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&ha(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&Au(i)}catch(_e){Xt(i,i.return,_e)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function qp(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Kp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(H){Xt(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(H){Xt(i,d,H)}}var m=i.return;try{Au(i)}catch(H){Xt(i,m,H)}break;case 5:var w=i.return;try{Au(i)}catch(H){Xt(i,w,H)}}}catch(H){Xt(i,i.return,H)}if(i===n){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var jv=Math.ceil,nl=P.ReactCurrentDispatcher,Ru=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,wt=0,ln=null,Qt=null,dn=0,Vn=0,Ns=mr(0),nn=0,Fa=null,$r=0,il=0,Pu=0,Oa=null,Ln=null,Lu=0,Is=1/0,Xi=null,rl=!1,Du=null,Sr=null,sl=!1,Mr=null,al=0,ka=0,Nu=null,ol=-1,ll=0;function En(){return(wt&6)!==0?b():ol!==-1?ol:ol=b()}function Er(n){return(n.mode&1)===0?1:(wt&2)!==0&&dn!==0?dn&-dn:Cv.transition!==null?(ll===0&&(ll=An()),ll):(n=at,n!==0||(n=window.event,n=n===void 0?16:Qd(n.type)),n)}function di(n,i,a,c){if(50<ka)throw ka=0,Nu=null,Error(t(185));On(n,a,c),((wt&2)===0||n!==ln)&&(n===ln&&((wt&2)===0&&(il|=a),nn===4&&wr(n,dn)),Dn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Is=b()+500,Fo&&vr()))}function Dn(n,i){var a=n.callbackNode;Sn(n,i);var c=Yt(n,n===ln?dn:0);if(c===0)a!==null&&vo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&vo(a),i===1)n.tag===0?bv(Qp.bind(null,n)):Oh(Qp.bind(null,n)),Ev(function(){(wt&6)===0&&vr()}),a=null;else{switch(ai(c)){case 1:a=de;break;case 4:a=se;break;case 16:a=ne;break;case 536870912:a=Oe;break;default:a=ne}a=am(a,Zp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Zp(n,i){if(ol=-1,ll=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Us()&&n.callbackNode!==a)return null;var c=Yt(n,n===ln?dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var d=wt;wt|=2;var m=em();(ln!==n||dn!==i)&&(Xi=null,Is=b()+500,qr(n,i));do try{Yv();break}catch(U){Jp(n,U)}while(!0);Zc(),nl.current=m,wt=d,Qt!==null?i=0:(ln=null,dn=0,i=nn)}if(i!==0){if(i===2&&(d=xt(n),d!==0&&(c=d,i=Iu(n,d))),i===1)throw a=Fa,qr(n,0),wr(n,c),Dn(n,b()),a;if(i===6)wr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Xv(d)&&(i=cl(n,c),i===2&&(m=xt(n),m!==0&&(c=m,i=Iu(n,m))),i===1))throw a=Fa,qr(n,0),wr(n,c),Dn(n,b()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,Ln,Xi);break;case 3:if(wr(n,c),(c&130023424)===c&&(i=Lu+500-b(),10<i)){if(Yt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=zc(Kr.bind(null,n,Ln,Xi),i);break}Kr(n,Ln,Xi);break;case 4:if(wr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var w=31-tt(c);m=1<<w,w=i[w],w>d&&(d=w),c&=~m}if(c=d,c=b()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jv(c/1960))-c,10<c){n.timeoutHandle=zc(Kr.bind(null,n,Ln,Xi),c);break}Kr(n,Ln,Xi);break;case 5:Kr(n,Ln,Xi);break;default:throw Error(t(329))}}}return Dn(n,b()),n.callbackNode===a?Zp.bind(null,n):null}function Iu(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(qr(n,i).flags|=256),n=cl(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Uu(i)),n}function Uu(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function Xv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(n,i){for(i&=~Pu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-tt(i),c=1<<a;n[a]=-1,i&=~c}}function Qp(n){if((wt&6)!==0)throw Error(t(327));Us();var i=Yt(n,0);if((i&1)===0)return Dn(n,b()),null;var a=cl(n,i);if(n.tag!==0&&a===2){var c=xt(n);c!==0&&(i=c,a=Iu(n,c))}if(a===1)throw a=Fa,qr(n,0),wr(n,i),Dn(n,b()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,Ln,Xi),Dn(n,b()),null}function Fu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Is=b()+500,Fo&&vr())}}function Yr(n){Mr!==null&&Mr.tag===0&&(wt&6)===0&&Us();var i=wt;wt|=1;var a=Qn.transition,c=at;try{if(Qn.transition=null,at=1,n)return n()}finally{at=c,Qn.transition=a,wt=i,(wt&6)===0&&vr()}}function Ou(){Vn=Ns.current,zt(Ns)}function qr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Mv(a)),Qt!==null)for(a=Qt.return;a!==null;){var c=a;switch(Xc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Ps(),zt(Cn),zt(pn),su();break;case 5:iu(c);break;case 4:Ps();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:Qc(c.type._context);break;case 22:case 23:Ou()}a=a.return}if(ln=n,Qt=n=Tr(n.current,null),dn=Vn=i,nn=0,Fa=null,Pu=il=$r=0,Ln=Oa=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,c.next=w}a.pending=c}Wr=null}return n}function Jp(n,i){do{var a=Qt;try{if(Zc(),Xo.current=Ko,$o){for(var c=jt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$o=!1}if(Xr=0,on=tn=jt=null,Pa=!1,La=0,Ru.current=null,a===null||a.return===null){nn=1,Fa=i,Qt=null;break}e:{var m=n,w=a.return,U=a,H=i;if(i=dn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var fe=H,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=wp(w);if(Fe!==null){Fe.flags&=-257,Tp(Fe,w,U,m,i),Fe.mode&1&&Ep(m,fe,i),i=Fe,H=fe;var Xe=i.updateQueue;if(Xe===null){var Ye=new Set;Ye.add(H),i.updateQueue=Ye}else Xe.add(H);break e}else{if((i&1)===0){Ep(m,fe,i),ku();break e}H=Error(t(426))}}else if(Vt&&U.mode&1){var Kt=wp(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Tp(Kt,w,U,m,i),qc(Ls(H,U));break e}}m=H=Ls(H,U),nn!==4&&(nn=2),Oa===null?Oa=[m]:Oa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=Sp(m,H,i);Yh(m,ee);break e;case 1:U=H;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Sr===null||!Sr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=Mp(m,U,i);Yh(m,Te);break e}}m=m.return}while(m!==null)}nm(a)}catch(Ze){i=Ze,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function em(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function ku(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||($r&268435455)===0&&(il&268435455)===0||wr(ln,dn)}function cl(n,i){var a=wt;wt|=2;var c=em();(ln!==n||dn!==i)&&(Xi=null,qr(n,i));do try{$v();break}catch(d){Jp(n,d)}while(!0);if(Zc(),wt=a,nl.current=c,Qt!==null)throw Error(t(261));return ln=null,dn=0,nn}function $v(){for(;Qt!==null;)tm(Qt)}function Yv(){for(;Qt!==null&&!mc();)tm(Qt)}function tm(n){var i=sm(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?nm(n):Qt=i,Ru.current=null}function nm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=zv(a,i,Vn),a!==null){Qt=a;return}}else{if(a=Vv(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);nn===0&&(nn=5)}function Kr(n,i,a){var c=at,d=Qn.transition;try{Qn.transition=null,at=1,qv(n,i,a,c)}finally{Qn.transition=d,at=c}return null}function qv(n,i,a,c){do Us();while(Mr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(or(n,m),n===ln&&(Qt=ln=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,am(ne,function(){return Us(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=at;at=1;var U=wt;wt|=4,Ru.current=null,Gv(n,a),Xp(a,n),mv(kc),yo=!!Oc,kc=Oc=null,n.current=a,Wv(a),gc(),wt=U,at=w,Qn.transition=m}else n.current=a;if(sl&&(sl=!1,Mr=n,al=d),m=n.pendingLanes,m===0&&(Sr=null),Qe(a.stateNode),Dn(n,b()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(rl)throw rl=!1,n=Du,Du=null,n;return(al&1)!==0&&n.tag!==0&&Us(),m=n.pendingLanes,(m&1)!==0?n===Nu?ka++:(ka=0,Nu=n):ka=0,vr(),null}function Us(){if(Mr!==null){var n=ai(al),i=Qn.transition,a=at;try{if(Qn.transition=null,at=16>n?16:n,Mr===null)var c=!1;else{if(n=Mr,Mr=null,al=0,(wt&6)!==0)throw Error(t(331));var d=wt;for(wt|=4,Ve=n.current;Ve!==null;){var m=Ve,w=m.child;if((Ve.flags&16)!==0){var U=m.deletions;if(U!==null){for(var H=0;H<U.length;H++){var fe=U[H];for(Ve=fe;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Ua(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Ve=ye;else for(;Ve!==null;){xe=Ve;var _e=xe.sibling,Fe=xe.return;if(Vp(xe),xe===fe){Ve=null;break}if(_e!==null){_e.return=Fe,Ve=_e;break}Ve=Fe}}}var Xe=m.alternate;if(Xe!==null){var Ye=Xe.child;if(Ye!==null){Xe.child=null;do{var Kt=Ye.sibling;Ye.sibling=null,Ye=Kt}while(Ye!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ve=w;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ve=ee;break e}Ve=m.return}}var W=n.current;for(Ve=W;Ve!==null;){w=Ve;var ie=w.child;if((w.subtreeFlags&2064)!==0&&ie!==null)ie.return=w,Ve=ie;else e:for(w=W;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:tl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===w){Ve=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Ve=Te;break e}Ve=U.return}}if(wt=d,vr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Re,n)}catch{}c=!0}return c}finally{at=a,Qn.transition=i}}return!1}function im(n,i,a){i=Ls(a,i),i=Sp(n,i,1),n=xr(n,i,1),i=En(),n!==null&&(On(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)im(n,n,a);else for(;i!==null;){if(i.tag===3){im(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Sr===null||!Sr.has(c))){n=Ls(a,n),n=Mp(i,n,1),i=xr(i,n,1),n=En(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function Kv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(dn&a)===a&&(nn===4||nn===3&&(dn&130023424)===dn&&500>b()-Lu?qr(n,0):Pu|=a),Dn(n,i)}function rm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=En();n=Gi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function Zv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),rm(n,a)}function Qv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),rm(n,a)}var sm;sm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,Bv(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Vt&&(i.flags&1048576)!==0&&kh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(n,i),n=i.pendingProps;var d=Es(i,pn.current);Rs(i,a),d=lu(null,i,c,n,d,a);var m=cu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(c)?(m=!0,Uo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,tu(i),d.updater=Zo,i.stateNode=d,d._reactInternals=i,mu(i,c,n,a),i=xu(null,i,c,!0,m,a)):(i.tag=0,Vt&&m&&jc(i),Mn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=e_(c),n=ci(c,n),d){case 0:i=_u(null,i,c,n,a);break e;case 1:i=Lp(null,i,c,n,a);break e;case 11:i=Ap(null,i,c,n,a);break e;case 14:i=bp(null,i,c,ci(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),_u(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Lp(n,i,c,d,a);case 3:e:{if(Dp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,$h(n,i),Wo(i,c,null,a);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Ls(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Ls(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(zn=pr(i.stateNode.containerInfo.firstChild),Bn=i,Vt=!0,li=null,a=jh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===d){i=ji(n,i,a);break e}Mn(n,i,c,a)}i=i.child}return i;case 5:return Kh(i),n===null&&Yc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Bc(c,d)?w=null:m!==null&&Bc(c,m)&&(i.flags|=32),Pp(n,i),Mn(n,i,w,a),i.child;case 6:return n===null&&Yc(i),null;case 13:return Ip(n,i,a);case 4:return nu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=bs(i,null,c,a):Mn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Ap(n,i,c,d,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,kt(Vo,c._currentValue),c._currentValue=w,m!==null)if(oi(m.value,w)){if(m.children===d.children&&!Cn.current){i=ji(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){w=m.child;for(var H=U.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=Wi(-1,a&-a),H.tag=2;var fe=m.updateQueue;if(fe!==null){fe=fe.shared;var xe=fe.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),fe.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Jc(m.return,a,i),U.lanes|=a;break}H=H.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Jc(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Mn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Rs(i,a),d=Kn(d),c=c(d),i.flags|=1,Mn(n,i,c,a),i.child;case 14:return c=i.type,d=ci(c,i.pendingProps),d=ci(c.type,d),bp(n,i,c,d,a);case 15:return Cp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ci(c,d),Jo(n,i),i.tag=1,Rn(c)?(n=!0,Uo(i)):n=!1,Rs(i,a),xp(i,c,d),mu(i,c,d,a),xu(null,i,c,!0,n,a);case 19:return Fp(n,i,a);case 22:return Rp(n,i,a)}throw Error(t(156,i.tag))};function am(n,i){return go(n,i)}function Jv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,c){return new Jv(n,i,a,c)}function Bu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function e_(n){if(typeof n=="function")return Bu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===J)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ul(n,i,a,c,d,m){var w=2;if(c=n,typeof n=="function")Bu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case z:return Zr(a.children,d,m,i);case T:w=8,d|=8;break;case L:return n=Jn(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case te:return n=Jn(13,a,i,d),n.elementType=te,n.lanes=m,n;case re:return n=Jn(19,a,i,d),n.elementType=re,n.lanes=m,n;case j:return fl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q:w=10;break e;case F:w=9;break e;case q:w=11;break e;case J:w=14;break e;case K:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function Zr(n,i,a,c){return n=Jn(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=Jn(22,n,c,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function zu(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Vu(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function t_(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Hu(n,i,a,c,d,m,w,U,H){return n=new t_(n,i,a,U,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tu(m),n}function n_(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function om(n){if(!n)return gr;n=n._reactInternals;e:{if(wi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Uh(n,a,i)}return i}function lm(n,i,a,c,d,m,w,U,H){return n=Hu(a,c,!0,n,d,m,w,U,H),n.context=om(null),a=n.current,c=En(),d=Er(a),m=Wi(c,d),m.callback=i??null,xr(a,m,d),n.current.lanes=d,On(n,d,c),Dn(n,c),n}function dl(n,i,a,c){var d=i.current,m=En(),w=Er(d);return a=om(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=xr(d,i,w),n!==null&&(di(n,d,w,m),Go(n,d,w)),w}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function cm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gu(n,i){cm(n,i),(n=n.alternate)&&cm(n,i)}function i_(){return null}var um=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wu(n){this._internalRoot=n}pl.prototype.render=Wu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},pl.prototype.unmount=Wu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Yr(function(){dl(null,n,null,null)}),i[Bi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=la();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&Kd(n)}};function ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function fm(){}function r_(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var fe=hl(w);m.call(fe)}}var w=lm(i,c,n,0,null,!1,!1,"",fm);return n._reactRootContainer=w,n[Bi]=w.current,Ma(n.nodeType===8?n.parentNode:n),Yr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var fe=hl(H);U.call(fe)}}var H=Hu(n,0,!1,null,null,!1,!1,"",fm);return n._reactRootContainer=H,n[Bi]=H.current,Ma(n.nodeType===8?n.parentNode:n),Yr(function(){dl(i,H,a,c)}),H}function gl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var U=d;d=function(){var H=hl(w);U.call(H)}}dl(i,w,n,d)}else w=r_(a,i,n,d,c);return hl(w)}qt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(Rt(i,a|1),Dn(i,b()),(wt&6)===0&&(Is=b()+500,vr()))}break;case 13:Yr(function(){var c=Gi(n,1);if(c!==null){var d=En();di(c,n,1,d)}}),Gu(n,1)}},$n=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=En();di(i,n,134217728,a)}Gu(n,134217728)}},ki=function(n){if(n.tag===13){var i=Er(n),a=Gi(n,i);if(a!==null){var c=En();di(a,n,i,c)}Gu(n,i)}},la=function(){return at},Yd=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},be=function(n,i,a){switch(i){case"input":if(It(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=No(c);if(!d)throw Error(t(90));Gt(c),It(c,d)}}}break;case"textarea":g(n,a);break;case"select":i=a.value,i!=null&&_t(n,!!a.multiple,i,!1)}},st=Fu,Dt=Yr;var s_={usingClientEntryPoint:!1,Events:[Ta,Ss,No,me,je,Fu]},Ba={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a_={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=po(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||i_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Re=vl.inject(a_),Ue=vl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s_,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ju(i))throw Error(t(200));return n_(n,i,null,a)},Nn.createRoot=function(n,i){if(!ju(n))throw Error(t(299));var a=!1,c="",d=um;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Hu(n,1,!1,null,null,a,!1,c,d),n[Bi]=i.current,Ma(n.nodeType===8?n.parentNode:n),new Wu(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=po(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return Yr(n)},Nn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!ju(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",w=um;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=lm(i,null,n,1,a??null,d,!1,m,w),n[Bi]=i.current,Ma(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pl(i)},Nn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(Yr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Fu,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,c)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var xm;function p_(){if(xm)return Yu.exports;xm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yu.exports=h_(),Yu.exports}var ym;function m_(){if(ym)return _l;ym=1;var r=p_();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var g_=m_();/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Sm="popstate";function v_(r={}){function e(s,o){let{pathname:l,search:u,hash:f}=s.location;return Ff("",{pathname:l,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ja(o)}return x_(e,t,null,r)}function rn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Mi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function __(){return Math.random().toString(36).substring(2,10)}function Mm(r,e){return{usr:r.state,key:r.key,idx:e}}function Ff(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:t,key:e&&e.key||s||__()}}function Ja({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function io(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function x_(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,f="POP",h=null,p=_();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function _(){return(u.state||{idx:null}).idx}function y(){f="POP";let x=_(),S=x==null?null:x-p;p=x,h&&h({action:f,location:A.location,delta:S})}function v(x,S){f="PUSH";let C=Ff(A.location,x,S);p=_()+1;let D=Mm(C,p),P=A.createHref(C);try{u.pushState(D,"",P)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;o.location.assign(P)}l&&h&&h({action:f,location:A.location,delta:1})}function M(x,S){f="REPLACE";let C=Ff(A.location,x,S);p=_();let D=Mm(C,p),P=A.createHref(C);u.replaceState(D,"",P),l&&h&&h({action:f,location:A.location,delta:0})}function E(x){return y_(x)}let A={get action(){return f},get location(){return r(o,u)},listen(x){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Sm,y),h=x,()=>{o.removeEventListener(Sm,y),h=null}},createHref(x){return e(o,x)},createURL:E,encodeLocation(x){let S=E(x);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:M,go(x){return u.go(x)}};return A}function y_(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),rn(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ja(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function bg(r,e,t="/"){return S_(r,e,t,!1)}function S_(r,e,t,s){let o=typeof e=="string"?io(e):e,l=nr(o.pathname||"/",t);if(l==null)return null;let u=Cg(r);M_(u);let f=null;for(let h=0;f==null&&h<u.length;++h){let p=N_(l);f=L_(u[h],p,s)}return f}function Cg(r,e=[],t=[],s="",o=!1){let l=(u,f,h=o,p)=>{let _={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&h)return;rn(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let y=Ji([s,_.relativePath]),v=t.concat(_);u.children&&u.children.length>0&&(rn(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Cg(u.children,e,v,y,h)),!(u.path==null&&!u.index)&&e.push({path:y,score:R_(y,u.index),routesMeta:v})};return r.forEach((u,f)=>{if(u.path===""||!u.path?.includes("?"))l(u,f);else for(let h of Rg(u.path))l(u,f,!0,h)}),e}function Rg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Rg(s.join("/")),f=[];return f.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&f.push(...u),f.map(h=>r.startsWith("/")&&h===""?"/":h)}function M_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:P_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var E_=/^:[\w-]+$/,w_=3,T_=2,A_=1,b_=10,C_=-2,Em=r=>r==="*";function R_(r,e){let t=r.split("/"),s=t.length;return t.some(Em)&&(s+=C_),e&&(s+=T_),t.filter(o=>!Em(o)).reduce((o,l)=>o+(E_.test(l)?w_:l===""?A_:b_),s)}function P_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function L_(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",u=[];for(let f=0;f<s.length;++f){let h=s[f],p=f===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",y=Jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},_),v=h.route;if(!y&&p&&t&&!s[s.length-1].route.index&&(y=Jl({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},_)),!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:Ji([l,y.pathname]),pathnameBase:O_(Ji([l,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(l=Ji([l,y.pathnameBase]))}return u}function Jl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=D_(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:y},v)=>{if(_==="*"){let E=f[v]||"";u=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=f[v];return y&&!M?p[_]=void 0:p[_]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function D_(r,e=!1,t=!0){Mi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,h)=>(s.push({paramName:f,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function N_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function nr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}var Pg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I_=r=>Pg.test(r);function U_(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?io(r):r,l;if(t)if(I_(t))l=t;else{if(t.includes("//")){let u=t;t=t.replace(/\/\/+/g,"/"),Mi(!1,`Pathnames cannot have embedded double slashes - normalizing ${u} -> ${t}`)}t.startsWith("/")?l=wm(t.substring(1),"/"):l=wm(t,e)}else l=e;return{pathname:l,search:k_(s),hash:B_(o)}}function wm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Zu(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function F_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Lg(r){let e=F_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Dg(r,e,t,s=!1){let o;typeof r=="string"?o=io(r):(o={...r},rn(!o.pathname||!o.pathname.includes("?"),Zu("?","pathname","search",o)),rn(!o.pathname||!o.pathname.includes("#"),Zu("#","pathname","hash",o)),rn(!o.search||!o.search.includes("#"),Zu("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,f;if(u==null)f=t;else{let y=e.length-1;if(!s&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),y-=1;o.pathname=v.join("/")}f=y>=0?e[y]:"/"}let h=U_(o,f),p=u&&u!=="/"&&u.endsWith("/"),_=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||_)&&(h.pathname+="/"),h}var Ji=r=>r.join("/").replace(/\/\/+/g,"/"),O_=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),k_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,B_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,z_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function V_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function H_(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Ng=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Ig(r,e){let t=r;if(typeof t!="string"||!Pg.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Ng)try{let l=new URL(window.location.href),u=t.startsWith("//")?new URL(l.protocol+t):new URL(t),f=nr(u.pathname,e);u.origin===l.origin&&f!=null?t=f+u.search+u.hash:o=!0}catch{Mi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ug=["POST","PUT","PATCH","DELETE"];new Set(Ug);var G_=["GET",...Ug];new Set(G_);var ia=ce.createContext(null);ia.displayName="DataRouter";var oc=ce.createContext(null);oc.displayName="DataRouterState";var W_=ce.createContext(!1),Fg=ce.createContext({isTransitioning:!1});Fg.displayName="ViewTransition";var j_=ce.createContext(new Map);j_.displayName="Fetchers";var X_=ce.createContext(null);X_.displayName="Await";var si=ce.createContext(null);si.displayName="Navigation";var lc=ce.createContext(null);lc.displayName="Location";var sr=ce.createContext({outlet:null,matches:[],isDataRoute:!1});sr.displayName="Route";var Ld=ce.createContext(null);Ld.displayName="RouteError";var Og="REACT_ROUTER_ERROR",$_="REDIRECT",Y_="ROUTE_ERROR_RESPONSE";function q_(r){if(r.startsWith(`${Og}:${$_}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function K_(r){if(r.startsWith(`${Og}:${Y_}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new z_(e.status,e.statusText,e.data)}catch{}}function Z_(r,{relative:e}={}){rn(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=ce.useContext(si),{hash:o,pathname:l,search:u}=so(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:Ji([t,l])),s.createHref({pathname:f,search:u,hash:o})}function ro(){return ce.useContext(lc)!=null}function Fr(){return rn(ro(),"useLocation() may be used only in the context of a <Router> component."),ce.useContext(lc).location}var kg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Bg(r){ce.useContext(si).static||ce.useLayoutEffect(r)}function zg(){let{isDataRoute:r}=ce.useContext(sr);return r?ux():Q_()}function Q_(){rn(ro(),"useNavigate() may be used only in the context of a <Router> component.");let r=ce.useContext(ia),{basename:e,navigator:t}=ce.useContext(si),{matches:s}=ce.useContext(sr),{pathname:o}=Fr(),l=JSON.stringify(Lg(s)),u=ce.useRef(!1);return Bg(()=>{u.current=!0}),ce.useCallback((h,p={})=>{if(Mi(u.current,kg),!u.current)return;if(typeof h=="number"){t.go(h);return}let _=Dg(h,JSON.parse(l),o,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ji([e,_.pathname])),(p.replace?t.replace:t.push)(_,p.state,p)},[e,t,l,o,r])}ce.createContext(null);function so(r,{relative:e}={}){let{matches:t}=ce.useContext(sr),{pathname:s}=Fr(),o=JSON.stringify(Lg(t));return ce.useMemo(()=>Dg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function J_(r,e,t,s,o){rn(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=ce.useContext(si),{matches:u}=ce.useContext(sr),f=u[u.length-1],h=f?f.params:{},p=f?f.pathname:"/",_=f?f.pathnameBase:"/",y=f&&f.route;{let C=y&&y.path||"";Hg(p,!y||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let v=Fr(),M;M=v;let E=M.pathname||"/",A=E;if(_!=="/"){let C=_.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let x=bg(r,{pathname:A});return Mi(y||x!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Mi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),rx(x&&x.map(C=>Object.assign({},C,{params:Object.assign({},h,C.params),pathname:Ji([_,l.encodeLocation?l.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?_:Ji([_,l.encodeLocation?l.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),u,t,s,o)}function ex(){let r=cx(),e=V_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},u=null;return console.error("Error handled by React Router default ErrorBoundary:",r),u=ce.createElement(ce.Fragment,null,ce.createElement("p",null,"💿 Hey developer 👋"),ce.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ce.createElement("code",{style:l},"ErrorBoundary")," or"," ",ce.createElement("code",{style:l},"errorElement")," prop on your route.")),ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),t?ce.createElement("pre",{style:o},t):null,u)}var tx=ce.createElement(ex,null),Vg=class extends ce.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=K_(r.digest);t&&(r=t)}let e=r!==void 0?ce.createElement(sr.Provider,{value:this.props.routeContext},ce.createElement(Ld.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ce.createElement(nx,{error:r},e):e}};Vg.contextType=W_;var Qu=new WeakMap;function nx({children:r,error:e}){let{basename:t}=ce.useContext(si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=q_(e.digest);if(s){let o=Qu.get(e);if(o)throw o;let l=Ig(s.location,t);if(Ng&&!Qu.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const u=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Qu.set(e,u),u}return ce.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function ix({routeContext:r,match:e,children:t}){let s=ce.useContext(ia);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ce.createElement(sr.Provider,{value:r},t)}function rx(r,e=[],t=null,s=null,o=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,u=t?.errors;if(u!=null){let _=l.findIndex(y=>y.route.id&&u?.[y.route.id]!==void 0);rn(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let f=!1,h=-1;if(t)for(let _=0;_<l.length;_++){let y=l[_];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(h=_),y.route.id){let{loaderData:v,errors:M}=t,E=y.route.loader&&!v.hasOwnProperty(y.route.id)&&(!M||M[y.route.id]===void 0);if(y.route.lazy||E){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}let p=t&&s?(_,y)=>{s(_,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:H_(t.matches),errorInfo:y})}:void 0;return l.reduceRight((_,y,v)=>{let M,E=!1,A=null,x=null;t&&(M=u&&y.route.id?u[y.route.id]:void 0,A=y.route.errorElement||tx,f&&(h<0&&v===0?(Hg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,x=null):h===v&&(E=!0,x=y.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,v+1)),C=()=>{let D;return M?D=A:E?D=x:y.route.Component?D=ce.createElement(y.route.Component,null):y.route.element?D=y.route.element:D=_,ce.createElement(ix,{match:y,routeContext:{outlet:_,matches:S,isDataRoute:t!=null},children:D})};return t&&(y.route.ErrorBoundary||y.route.errorElement||v===0)?ce.createElement(Vg,{location:t.location,revalidation:t.revalidation,component:A,error:M,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:p}):C()},null)}function Dd(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sx(r){let e=ce.useContext(ia);return rn(e,Dd(r)),e}function ax(r){let e=ce.useContext(oc);return rn(e,Dd(r)),e}function ox(r){let e=ce.useContext(sr);return rn(e,Dd(r)),e}function Nd(r){let e=ox(r),t=e.matches[e.matches.length-1];return rn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function lx(){return Nd("useRouteId")}function cx(){let r=ce.useContext(Ld),e=ax("useRouteError"),t=Nd("useRouteError");return r!==void 0?r:e.errors?.[t]}function ux(){let{router:r}=sx("useNavigate"),e=Nd("useNavigate"),t=ce.useRef(!1);return Bg(()=>{t.current=!0}),ce.useCallback(async(o,l={})=>{Mi(t.current,kg),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Tm={};function Hg(r,e,t){!e&&!Tm[r]&&(Tm[r]=!0,Mi(!1,t))}ce.memo(fx);function fx({routes:r,future:e,state:t,onError:s}){return J_(r,void 0,t,s,e)}function dx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:u}){rn(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),h=ce.useMemo(()=>({basename:f,navigator:o,static:l,unstable_useTransitions:u,future:{}}),[f,o,l,u]);typeof t=="string"&&(t=io(t));let{pathname:p="/",search:_="",hash:y="",state:v=null,key:M="default"}=t,E=ce.useMemo(()=>{let A=nr(p,f);return A==null?null:{location:{pathname:A,search:_,hash:y,state:v,key:M},navigationType:s}},[f,p,_,y,v,M,s]);return Mi(E!=null,`<Router basename="${f}"> is not able to match the URL "${p}${_}${y}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:ce.createElement(si.Provider,{value:h},ce.createElement(lc.Provider,{children:e,value:E}))}var jl="get",Xl="application/x-www-form-urlencoded";function cc(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function hx(r){return cc(r)&&r.tagName.toLowerCase()==="button"}function px(r){return cc(r)&&r.tagName.toLowerCase()==="form"}function mx(r){return cc(r)&&r.tagName.toLowerCase()==="input"}function gx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function vx(r,e){return r.button===0&&(!e||e==="_self")&&!gx(r)}var xl=null;function _x(){if(xl===null)try{new FormData(document.createElement("form"),0),xl=!1}catch{xl=!0}return xl}var xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ju(r){return r!=null&&!xx.has(r)?(Mi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xl}"`),null):r}function yx(r,e){let t,s,o,l,u;if(px(r)){let f=r.getAttribute("action");s=f?nr(f,e):null,t=r.getAttribute("method")||jl,o=Ju(r.getAttribute("enctype"))||Xl,l=new FormData(r)}else if(hx(r)||mx(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=r.getAttribute("formaction")||f.getAttribute("action");if(s=h?nr(h,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||jl,o=Ju(r.getAttribute("formenctype"))||Ju(f.getAttribute("enctype"))||Xl,l=new FormData(f,r),!_x()){let{name:p,type:_,value:y}=r;if(_==="image"){let v=p?`${p}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else p&&l.append(p,y)}}else{if(cc(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=jl,s=null,o=Xl,u=r}return l&&o==="text/plain"&&(u=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:u}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Id(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Sx(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&nr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function Mx(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ex(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function wx(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let u=await Mx(l,t);return u.links?u.links():[]}return[]}));return Cx(s.flat(1).filter(Ex).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Am(r,e,t,s,o,l){let u=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,f=(h,p)=>t[p].pathname!==h.pathname||t[p].route.path?.endsWith("*")&&t[p].params["*"]!==h.params["*"];return l==="assets"?e.filter((h,p)=>u(h,p)||f(h,p)):l==="data"?e.filter((h,p)=>{let _=s.routes[h.route.id];if(!_||!_.hasLoader)return!1;if(u(h,p)||f(h,p))return!0;if(h.route.shouldRevalidate){let y=h.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Tx(r,e,{includeHydrateFallback:t}={}){return Ax(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Ax(r){return[...new Set(r)]}function bx(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function Cx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(bx(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Gg(){let r=ce.useContext(ia);return Id(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Rx(){let r=ce.useContext(oc);return Id(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ud=ce.createContext(void 0);Ud.displayName="FrameworkContext";function Wg(){let r=ce.useContext(Ud);return Id(r,"You must render this element inside a <HydratedRouter> element"),r}function Px(r,e){let t=ce.useContext(Ud),[s,o]=ce.useState(!1),[l,u]=ce.useState(!1),{onFocus:f,onBlur:h,onMouseEnter:p,onMouseLeave:_,onTouchStart:y}=e,v=ce.useRef(null);ce.useEffect(()=>{if(r==="render"&&u(!0),r==="viewport"){let A=S=>{S.forEach(C=>{u(C.isIntersecting)})},x=new IntersectionObserver(A,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[r]),ce.useEffect(()=>{if(s){let A=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(A)}}},[s]);let M=()=>{o(!0)},E=()=>{o(!1),u(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Va(f,M),onBlur:Va(h,E),onMouseEnter:Va(p,M),onMouseLeave:Va(_,E),onTouchStart:Va(y,M)}]:[!1,v,{}]}function Va(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Lx({page:r,...e}){let{router:t}=Gg(),s=ce.useMemo(()=>bg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?ce.createElement(Nx,{page:r,matches:s,...e}):null}function Dx(r){let{manifest:e,routeModules:t}=Wg(),[s,o]=ce.useState([]);return ce.useEffect(()=>{let l=!1;return wx(r,e,t).then(u=>{l||o(u)}),()=>{l=!0}},[r,e,t]),s}function Nx({page:r,matches:e,...t}){let s=Fr(),{manifest:o,routeModules:l}=Wg(),{basename:u}=Gg(),{loaderData:f,matches:h}=Rx(),p=ce.useMemo(()=>Am(r,e,h,o,s,"data"),[r,e,h,o,s]),_=ce.useMemo(()=>Am(r,e,h,o,s,"assets"),[r,e,h,o,s]),y=ce.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,A=!1;if(e.forEach(S=>{let C=o.routes[S.route.id];!C||!C.hasLoader||(!p.some(D=>D.route.id===S.route.id)&&S.route.id in f&&l[S.route.id]?.shouldRevalidate||C.hasClientLoader?A=!0:E.add(S.route.id))}),E.size===0)return[];let x=Sx(r,u,"data");return A&&E.size>0&&x.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[x.pathname+x.search]},[u,f,s,o,p,e,r,l]),v=ce.useMemo(()=>Tx(_,o),[_,o]),M=Dx(_);return ce.createElement(ce.Fragment,null,y.map(E=>ce.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>ce.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:A})=>ce.createElement("link",{key:E,nonce:t.nonce,...A})))}function Ix(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Ux=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ux&&(window.__reactRouterVersion="7.11.0")}catch{}function Fx({basename:r,children:e,unstable_useTransitions:t,window:s}){let o=ce.useRef();o.current==null&&(o.current=v_({window:s,v5Compat:!0}));let l=o.current,[u,f]=ce.useState({action:l.action,location:l.location}),h=ce.useCallback(p=>{t===!1?f(p):ce.startTransition(()=>f(p))},[t]);return ce.useLayoutEffect(()=>l.listen(h),[l,h]),ce.createElement(dx,{basename:r,children:e,location:u.location,navigationType:u.action,navigator:l,unstable_useTransitions:t})}var jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xg=ce.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:u,state:f,target:h,to:p,preventScrollReset:_,viewTransition:y,unstable_defaultShouldRevalidate:v,...M},E){let{basename:A,unstable_useTransitions:x}=ce.useContext(si),S=typeof p=="string"&&jg.test(p),C=Ig(p,A);p=C.to;let D=Z_(p,{relative:o}),[P,B,k]=Px(s,M),z=zx(p,{replace:u,state:f,target:h,preventScrollReset:_,relative:o,viewTransition:y,unstable_defaultShouldRevalidate:v,unstable_useTransitions:x});function T(Q){e&&e(Q),Q.defaultPrevented||z(Q)}let L=ce.createElement("a",{...M,...k,href:C.absoluteURL||D,onClick:C.isExternal||l?e:T,ref:Ix(E,B),target:h,"data-discover":!S&&t==="render"?"true":void 0});return P&&!S?ce.createElement(ce.Fragment,null,L,ce.createElement(Lx,{page:D})):L});Xg.displayName="Link";var Ox=ce.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:u,viewTransition:f,children:h,...p},_){let y=so(u,{relative:p.relative}),v=Fr(),M=ce.useContext(oc),{navigator:E,basename:A}=ce.useContext(si),x=M!=null&&jx(y)&&f===!0,S=E.encodeLocation?E.encodeLocation(y).pathname:y.pathname,C=v.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(C=C.toLowerCase(),D=D?D.toLowerCase():null,S=S.toLowerCase()),D&&A&&(D=nr(D,A)||D);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let B=C===S||!o&&C.startsWith(S)&&C.charAt(P)==="/",k=D!=null&&(D===S||!o&&D.startsWith(S)&&D.charAt(S.length)==="/"),z={isActive:B,isPending:k,isTransitioning:x},T=B?e:void 0,L;typeof s=="function"?L=s(z):L=[s,B?"active":null,k?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let Q=typeof l=="function"?l(z):l;return ce.createElement(Xg,{...p,"aria-current":T,className:L,ref:_,style:Q,to:u,viewTransition:f},typeof h=="function"?h(z):h)});Ox.displayName="NavLink";var kx=ce.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:u=jl,action:f,onSubmit:h,relative:p,preventScrollReset:_,viewTransition:y,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:A}=ce.useContext(si),x=Gx(),S=Wx(f,{relative:p}),C=u.toLowerCase()==="get"?"get":"post",D=typeof f=="string"&&jg.test(f),P=B=>{if(h&&h(B),B.defaultPrevented)return;B.preventDefault();let k=B.nativeEvent.submitter,z=k?.getAttribute("formmethod")||u,T=()=>x(k||B.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:l,relative:p,preventScrollReset:_,viewTransition:y,unstable_defaultShouldRevalidate:v});A&&t!==!1?ce.startTransition(()=>T()):T()};return ce.createElement("form",{ref:E,method:C,action:S,onSubmit:s?h:P,...M,"data-discover":!D&&r==="render"?"true":void 0})});kx.displayName="Form";function Bx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function $g(r){let e=ce.useContext(ia);return rn(e,Bx(r)),e}function zx(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f,unstable_useTransitions:h}={}){let p=zg(),_=Fr(),y=so(r,{relative:l});return ce.useCallback(v=>{if(vx(v,e)){v.preventDefault();let M=t!==void 0?t:Ja(_)===Ja(y),E=()=>p(r,{replace:M,state:s,preventScrollReset:o,relative:l,viewTransition:u,unstable_defaultShouldRevalidate:f});h?ce.startTransition(()=>E()):E()}},[_,p,y,t,s,e,r,o,l,u,f,h])}var Vx=0,Hx=()=>`__${String(++Vx)}__`;function Gx(){let{router:r}=$g("useSubmit"),{basename:e}=ce.useContext(si),t=lx(),s=r.fetch,o=r.navigate;return ce.useCallback(async(l,u={})=>{let{action:f,method:h,encType:p,formData:_,body:y}=yx(l,e);if(u.navigate===!1){let v=u.fetcherKey||Hx();await s(v,t,u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:_,body:y,formMethod:u.method||h,formEncType:u.encType||p,flushSync:u.flushSync})}else await o(u.action||f,{unstable_defaultShouldRevalidate:u.unstable_defaultShouldRevalidate,preventScrollReset:u.preventScrollReset,formData:_,body:y,formMethod:u.method||h,formEncType:u.encType||p,replace:u.replace,state:u.state,fromRouteId:t,flushSync:u.flushSync,viewTransition:u.viewTransition})},[s,o,e,t])}function Wx(r,{relative:e}={}){let{basename:t}=ce.useContext(si),s=ce.useContext(sr);rn(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...so(r||".",{relative:e})},u=Fr();if(r==null){l.search=u.search;let f=new URLSearchParams(l.search),h=f.getAll("index");if(h.some(_=>_==="")){f.delete("index"),h.filter(y=>y).forEach(y=>f.append("index",y));let _=f.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ji([t,l.pathname])),Ja(l)}function jx(r,{relative:e}={}){let t=ce.useContext(Fg);rn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=$g("useViewTransitionState"),o=so(r,{relative:e});if(!t.isTransitioning)return!1;let l=nr(t.currentLocation.pathname,s)||t.currentLocation.pathname,u=nr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Jl(o.pathname,u)!=null||Jl(o.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Ht=(r,e)=>{const t=ce.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:f="",children:h,...p},_)=>ce.createElement("svg",{ref:_,...Xx,width:o,height:o,stroke:s,strokeWidth:u?Number(l)*24/Number(o):l,className:["lucide",`lucide-${$x(r)}`,f].join(" "),...p},[...e.map(([y,v])=>ce.createElement(y,v)),...Array.isArray(h)?h:[h]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Ht("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Ht("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Ht("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=Ht("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Ht("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Ht("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ht("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=Ht("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ht("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ht("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ht("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ht("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ht("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Ht("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ht("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Ht("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Ht("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Ht("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Ht("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Ht("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Ht("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Ht("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Ht("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=Ht("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),my=()=>{const[r,e]=ce.useState(""),t="Transforming ideas into intelligent solutions",s=zg(),o=l=>{s(`/#${l}`)};return ce.useEffect(()=>{let l=0;const u=()=>{l<t.length&&(e(t.slice(0,l+1)),l++,setTimeout(u,100))};setTimeout(u,1e3)},[]),N.jsx("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:N.jsxs("div",{className:"relative z-10 text-center px-4 max-w-4xl mx-auto",children:[N.jsxs("div",{className:"mb-8",children:[N.jsx("h3",{className:"text-5xl md:text-7xl font-bold mb-4 gradient-text",children:"KIAH MANDALIYA"}),N.jsx("div",{className:"h-12 flex items-center justify-center",children:N.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 font-light",children:[r,N.jsx("span",{className:"inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"})]})})]}),N.jsxs("div",{className:"flex justify-center gap-8 mb-12",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[N.jsx(Fd,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Developer"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-purple-400",children:[N.jsx(Zx,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Engineer"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-green-400",children:[N.jsx(ss,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Innovator"})]})]}),N.jsxs("div",{className:"flex justify-center gap-4",children:[N.jsx("button",{className:"glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105",onClick:()=>{const l=document.createElement("a");l.href="/Kiah_Resume.pdf",l.download="Kiah_Resume.pdf",l.click()},children:"Download Resume"}),N.jsx("button",{className:"glow-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300",onClick:()=>o("contact"),children:"Get In Touch"})]})]})})},gy=()=>{const r=ce.useRef(null);ce.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".project-item").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Truck Routing Optimization Web App",description:"A full-stack web application designed to solve the Vehicle Routing Problem using machine learning and routing algorithms.",image:"/routing.png",icon:ry,techStack:["ReactJS","Python (FastAPI)","PostgreSQL","OR-Tools","KMeans","OSRM"],features:["Uses KMeans clustering to strategically group destinations","Integrates OSRM for accurate real-world distances","Solves the complex Vehicle Routing Problem utilizing OR-Tools"],color:"cyan",github:"https://github.com/kiahcodes/VehicleRoutingReactFastAPI.git",live:"#"},{id:2,title:"Numerology Calculator",description:"A logic-based calculator that computes various numerological numbers based on Chaldean numerology principles.",image:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",icon:Yx,techStack:["C"],features:["Calculates Birth Number securely and instantly","Generates Life Path Number based on exact date inputs","Computes Personality Number adhering to Chaldean numerology"],color:"purple",github:"#",live:"#"},{id:3,title:"Shopping Website",description:"A responsive clothing e-commerce website with a strong focus on navigation and highly interactive UI/UX elements.",image:"https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",icon:cy,techStack:["HTML","CSS","JavaScript"],features:["Fully responsive clothing showcase layout","Interactive sign-in and sign-up toggle system","Optimized UI/UX tailored for smooth intuitive navigation"],color:"green",github:"#",live:"#"},{id:4,title:"Fitness Tracking Website",description:"A workout planning platform enabling users to track metrics and plan their fitness journeys seamlessly.",image:"https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",icon:Jx,techStack:["HTML","CSS","JavaScript"],features:["Comprehensive workout planning and tracking platform","Integrated BMI calculator for personalized metric monitoring","Secure user authentication feature"],color:"orange",github:"#",live:"#"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"};case"purple":return{border:"border-purple-400",text:"text-purple-400",check:"bg-purple-400",btn:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400"};case"green":return{border:"border-green-400",text:"text-green-400",check:"bg-green-400",btn:"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400"};case"orange":return{border:"border-orange-400",text:"text-orange-400",check:"bg-orange-400",btn:"bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400"};default:return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"}}};return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Featured Projects"}),N.jsx("div",{className:"grid gap-8 md:gap-12",children:e.map((s,o)=>{const l=t(s.color);return N.jsxs("div",{className:`project-item fade-up grid md:grid-cols-2 gap-8 items-center ${o%2===1?"md:grid-flow-dense":""}`,style:{animationDelay:`${o*.2}s`},children:[N.jsxs("div",{className:`relative overflow-hidden rounded-2xl ${o%2===1?"md:col-start-2":""}`,children:[N.jsx("img",{src:s.image,alt:s.title,className:"w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"}),N.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),N.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:N.jsxs("div",{className:"flex items-center gap-2 text-white mb-2",children:[N.jsx(s.icon,{className:"w-5 h-5"}),N.jsx("span",{className:"font-semibold",children:s.title})]})})]}),N.jsxs("div",{className:`space-y-6 ${o%2===1?"md:col-start-1":""}`,children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:s.title}),N.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description})]}),N.jsxs("div",{children:[N.jsx("h4",{className:`text-lg font-semibold ${l.text} mb-3`,children:"Tech Stack"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map((u,f)=>N.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${l.border} ${l.text}`,children:u},f))})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Features"}),N.jsx("ul",{className:"space-y-2",children:s.features.map((u,f)=>N.jsxs("li",{className:"text-gray-300 flex items-start",children:[N.jsx("span",{className:`w-2 h-2 ${l.check} rounded-full mr-3 mt-2 flex-shrink-0`}),N.jsx("span",{children:u})]},f))})]}),N.jsx("div",{className:"flex gap-4",children:N.jsxs("a",{href:s.github,className:"glow-button flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[N.jsx(Od,{className:"w-5 h-5"}),"Code"]})})]})]},s.id)})})]})})},vy=()=>{const r=ce.useRef(null);ce.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".hackathon-card").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Innovate Bharat Hackathon",year:"2026",result:"Finalist",description:"Built an AI-powered mobile app to deeply analyze product labels for ingredient safety and insights.",icon:hy,contributions:["Implemented robust ingredient extraction and safety insights generation","Enabled personalized analysis targeting explicit allergies and sensitivities","Developed harmful ingredient detection, claim verifications, and safer alternatives","Integrated a responsive conversational chatbot with TTS/STT capabilities"],technologies:["Flutter","FastAPI","AI","TTS/STT"],color:"cyan",github:"https://github.com/kiahcodes/LabelLens-KnowBeforeYouBuy"},{id:2,title:"HackaMined",year:"2026",result:"Participant",description:"Pioneered a smart job market analytics platform leveraging live scraping and actionable insights.",icon:Kx,contributions:["Scraped rich live data from LinkedIn and Naukri utilizing BeautifulSoup","Generated crucial insights including market trends, skills gaps, and AI risks","Built a sophisticated RAG-based intelligent chatbot powered by the Ollama API"],technologies:["Python","FastAPI","PostgreSQL","BeautifulSoup","RAG"],color:"purple",github:"https://github.com/kiahcodes/CarrerLens"},{id:3,title:"Smart India Hackathon",year:"2025",result:"Internal Finalist",description:"Developed an accessible conversational RASA chatbot crafted specifically to empower rural communities.",icon:iy,contributions:["Designed custom RASA conversational models tailored for regional context","Successfully integrated the bot with Twilio for widespread SMS and WhatsApp access"],technologies:["Python","FastAPI","RASA","Twilio"],color:"green",github:"https://github.com/kiahcodes/SIH.git"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"};case"purple":return{border:"border-purple-400",text:"text-purple-400",bg:"bg-purple-500/20 text-purple-400",iconBg:"bg-gradient-to-br from-purple-500 to-pink-500"};case"green":return{border:"border-green-400",text:"text-green-400",bg:"bg-green-500/20 text-green-400",iconBg:"bg-gradient-to-br from-green-500 to-emerald-500"};default:return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"}}};return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-4xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Hackathons & Achievements"}),N.jsx("div",{className:"space-y-8",children:e.map((s,o)=>{const l=t(s.color);return N.jsxs("div",{className:"hackathon-card fade-up bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group relative overflow-hidden",style:{animationDelay:`${o*.15}s`},children:[N.jsx("div",{className:`absolute -right-8 -top-8 w-24 h-24 rounded-full ${s.color==="cyan"?"bg-cyan-500/5":s.color==="purple"?"bg-purple-500/5":"bg-green-500/5"} blur-2xl group-hover:scale-150 transition-transform duration-700`}),N.jsxs("div",{className:"flex flex-col md:flex-row gap-6 relative z-10",children:[N.jsx("div",{className:"flex-shrink-0",children:N.jsx("div",{className:`w-16 h-16 rounded-xl flex items-center justify-center ${l.iconBg} shadow-lg`,children:N.jsx(s.icon,{className:"w-8 h-8 text-white"})})}),N.jsxs("div",{className:"flex-grow space-y-4",children:[N.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white flex items-center gap-3",children:s.title}),N.jsxs("div",{className:"flex flex-wrap gap-3 mt-2",children:[N.jsx("span",{className:"text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm font-semibold",children:s.year}),N.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold border ${l.border} ${l.text}`,children:s.result})]})]}),s.github&&s.github!=="#"&&N.jsxs("a",{href:s.github,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700/40 border border-gray-600 hover:border-${s.color}-400/50 transition-all duration-300 group/github hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]`,children:[N.jsx(Od,{className:`w-5 h-5 ${l.text} group-hover/github:scale-110 transition-transform`}),N.jsx("span",{className:"text-sm font-semibold text-gray-300 group-hover/github:text-white",children:"View Code"})]})]}),N.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-sm font-semibold text-white mb-3 uppercase tracking-wider",children:"Key Contributions"}),N.jsx("ul",{className:"space-y-2",children:s.contributions.map((u,f)=>N.jsxs("li",{className:"text-gray-300 flex items-start text-sm md:text-base",children:[N.jsx(fy,{className:`w-4 h-4 ${l.text} mr-3 mt-1 flex-shrink-0`}),N.jsx("span",{children:u})]},f))})]}),N.jsx("div",{className:"pt-2 border-t border-gray-700 border-dashed",children:N.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:s.technologies.map((u,f)=>N.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${l.bg}`,children:u},f))})})]})]})]},s.id)})})]})})},ef=[{label:"Flutter",color:"#378ADD"},{label:"FastAPI",color:"#1D9E75"},{label:"Python",color:"#EF9F27"},{label:"Supabase",color:"#1D9E75"},{label:"Gemini AI",color:"#7F77DD"},{label:"React",color:"#378ADD"},{label:"Java",color:"#D85A30"},{label:"Spring Boot",color:"#639922"},{label:"PostgreSQL",color:"#185FA5"},{label:"Git",color:"#D85A30"},{label:"REST APIs",color:"#7F77DD"},{label:"Riverpod",color:"#378ADD"},{label:"SQL",color:"#185FA5"},{label:"ML Kit",color:"#BA7517"},{label:"BeautifulSoup",color:"#3B6D11"},{label:"GoRouter",color:"#378ADD"},{label:"RAG",color:"#7F77DD"},{label:"Linux",color:"#888780"},{label:"Dart",color:"#378ADD"},{label:"C++",color:"#993C1D"}],_y=()=>{const r=ce.useRef(null);return ce.useEffect(()=>{const e=r.current;if(!e)return;const t=e.getContext("2d");if(!t)return;const s=e.width,o=e.height,l=s/2,u=o/2,f=180;let h=.3,p=0,_=0,y=.004,v=!1,M=0,E=0,A;const x=ef.map((Q,F)=>{const q=Math.acos(-1+2*F/ef.length),te=Math.sqrt(ef.length*Math.PI)*q;return{...Q,phi:q,theta:te}}),S=(Q,F,q)=>{const te=Math.cos(h),re=Math.sin(h),J=Math.cos(p),K=Math.sin(p),j=F*te-q*re,$=F*re+q*te,ue=Q*J+$*K,he=-Q*K+$*J;return{sx:l+ue,sy:u+j,depth:he}},C=()=>{t.clearRect(0,0,s,o);const Q=x.map(F=>{const q=f*Math.sin(F.phi)*Math.cos(F.theta),te=f*Math.sin(F.phi)*Math.sin(F.theta),re=f*Math.cos(F.phi),J=S(q,te,re),K=(J.depth+f)/(2*f),j=.25+.75*K,$=Math.round(10+8*K);return{...F,...J,scale:K,alpha:j,fs:$}});Q.sort((F,q)=>F.depth-q.depth),Q.forEach(F=>{t.save(),t.globalAlpha=F.alpha,t.font=`${F.scale>.6?500:400} ${F.fs}px sans-serif`,t.fillStyle=F.color,t.textAlign="center",t.textBaseline="middle",t.fillText(F.label,F.sx,F.sy),t.restore()})},D=()=>{v||(p+=y,h+=_,_*=.97),C(),A=requestAnimationFrame(D)};D();const P=Q=>{v=!0,M=Q.clientX,E=Q.clientY,e.style.cursor="grabbing"},B=Q=>{if(!v)return;const F=Q.clientX-M,q=Q.clientY-E;p+=F*.008,h+=q*.008,y=F*.008,_=q*.008,M=Q.clientX,E=Q.clientY},k=()=>{v=!1,e.style.cursor="grab"},z=Q=>{v=!0,M=Q.touches[0].clientX,E=Q.touches[0].clientY},T=Q=>{if(!v)return;const F=Q.touches[0].clientX-M,q=Q.touches[0].clientY-E;p+=F*.008,h+=q*.008,y=F*.008,_=q*.008,M=Q.touches[0].clientX,E=Q.touches[0].clientY},L=()=>{v=!1};return e.addEventListener("mousedown",P),window.addEventListener("mousemove",B),window.addEventListener("mouseup",k),e.addEventListener("touchstart",z,{passive:!1}),window.addEventListener("touchmove",T,{passive:!1}),window.addEventListener("touchend",L),()=>{cancelAnimationFrame(A),e.removeEventListener("mousedown",P),window.removeEventListener("mousemove",B),window.removeEventListener("mouseup",k),e.removeEventListener("touchstart",z),window.removeEventListener("touchmove",T),window.removeEventListener("touchend",L)}},[]),N.jsx("div",{style:{padding:"1rem 0",textAlign:"center",width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:N.jsx("canvas",{ref:r,width:520,height:420,style:{cursor:"grab",maxWidth:"100%",display:"block",margin:"0 auto"}})})},xy=()=>{const r=[{name:"C/C++ Programming",color:"#00D4FF"},{name:"HTML/CSS",color:"#8B5CF6"},{name:"JavaScript",color:"#00FF94"},{name:"React.js",color:"#F97316"},{name:"Python",color:"#EF4444"},{name:"Machine Learning",color:"#10B981"},{name:"Git/GitHub",color:"#3B82F6"},{name:"Node.js",color:"#8B5CF6"},{name:"SQL",color:"#8B5CF6"},{name:"MongoDB",color:"#8B5CF6"},{name:"FastAPI",color:"#8B5CF6"},{name:"Java",color:"#8B5CF6"},{name:"DSA",color:"#8B5CF6"},{name:"Flutter",color:"#8B5CF6"},{name:"n8n",color:"#8B5CF6"}];return N.jsx("section",{className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Technical Arsenal"}),N.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-12",children:[N.jsx("div",{className:"w-full lg:w-1/2 flex items-center justify-center relative min-h-[450px]",children:N.jsx(_y,{})}),N.jsx("div",{className:"w-full lg:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4",children:r.map((e,t)=>N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover-lift border border-gray-700 hover:border-cyan-400 transition-all duration-300 flex flex-col items-center justify-center h-full",style:{animationDelay:`${t*.1}s`},children:[N.jsx("div",{className:"w-12 h-12 mb-3 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0",style:{backgroundColor:`${e.color}20`,color:e.color},children:e.name.charAt(0)}),N.jsx("h4",{className:"text-sm font-medium text-white break-words w-full",children:e.name})]},t))})]})]})})},yy=()=>{const r=ce.useRef(null);ce.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".explore-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:uy,title:"React Native",description:"Building cross-platform mobile applications with native performance",status:"Learning",color:"cyan",progress:60},{icon:ly,title:"Backend APIs",description:"Developing robust REST APIs with Node.js and Express",status:"Practicing",color:"purple",progress:70},{icon:Qx,title:"Database Design",description:"Mastering SQL and NoSQL database optimization",status:"Exploring",color:"green",progress:50},{icon:qx,title:"Cloud Computing",description:"Learning AWS services and cloud architecture patterns",status:"Starting",color:"orange",progress:30},{icon:ss,title:"GraphQL",description:"Modern API query language for efficient data fetching",status:"Interested",color:"pink",progress:20},{icon:Fd,title:"TypeScript",description:"Adding type safety to JavaScript applications",status:"Practicing",color:"blue",progress:75}];return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Current Explorations"}),N.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"The journey never stops. Here's what I'm diving into next to expand my technical horizons."})]}),N.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((t,s)=>N.jsxs("div",{className:"explore-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group",style:{animationDelay:`${s*.1}s`},children:[N.jsxs("div",{className:"flex items-center justify-between mb-4",children:[N.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:N.jsx(t.icon,{className:"w-6 h-6"})}),N.jsx("span",{className:`text-xs font-semibold px-3 py-1 rounded-full ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:t.status})]}),N.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:t.title}),N.jsx("p",{className:"text-gray-300 text-sm mb-4",children:t.description}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between items-center",children:[N.jsx("span",{className:"text-xs text-gray-400",children:"Progress"}),N.jsxs("span",{className:"text-xs text-gray-400",children:[t.progress,"%"]})]}),N.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:N.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ease-out ${t.color==="cyan"?"bg-gradient-to-r from-cyan-500 to-cyan-400":t.color==="purple"?"bg-gradient-to-r from-purple-500 to-purple-400":t.color==="green"?"bg-gradient-to-r from-green-500 to-green-400":t.color==="orange"?"bg-gradient-to-r from-orange-500 to-orange-400":t.color==="pink"?"bg-gradient-to-r from-pink-500 to-pink-400":"bg-gradient-to-r from-blue-500 to-blue-400"}`,style:{width:`${t.progress}%`}})})]})]},s))}),N.jsx("div",{className:"mt-16 text-center",children:N.jsxs("div",{className:"inline-flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700",children:[N.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),N.jsx("span",{className:"text-gray-300",children:"Currently learning React Native & Backend APIs"})]})})]})})},Sy=()=>{const[r,e]=ce.useState(0),[t,s]=ce.useState(""),[o,l]=ce.useState(!0),[u,f]=ce.useState(!1),h=ce.useRef(null),p=ce.useRef(null),_=["$ cd /career/internships","$ ls -la","ScaleTech-2025/","$ cd ScaleTech-2025","$ cat experience.txt","Software Development Intern","Technologies: React, FastAPI, PostgreSQL","Duration: 1 month","Achievements: Built a logistics route optimization system solving real-world delivery inefficiencies","$ git log --oneline","a1b2c3d Feature: User authentication system","e4f5g6h Fix: Database optimization","i7j8k9l Feature: Real-time notifications","$ exit"];ce.useEffect(()=>{const E=new IntersectionObserver(A=>{A.forEach(x=>{x.isIntersecting&&y()})},{threshold:.5});return h.current&&E.observe(h.current),()=>E.disconnect()},[]);const y=()=>{let E=0,A=0;const x=()=>{if(E<_.length){const S=_[E];A<S.length?(s(S.slice(0,A+1)),A++,setTimeout(x,50)):setTimeout(()=>{E++,A=0,e(E),E<_.length&&x()},1e3)}};x()};ce.useEffect(()=>{const E=setInterval(()=>{l(A=>!A)},500);return()=>clearInterval(E)},[]),ce.useEffect(()=>{const E=A=>{A.key==="Escape"&&M()};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[]);const v=()=>{f(!0),document.body.style.overflow="hidden"},M=()=>{f(!1),document.body.style.overflow="",p.current&&(p.current.pause(),p.current.currentTime=0)};return N.jsxs(N.Fragment,{children:[N.jsx("section",{ref:h,className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Professional Experience"}),N.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[N.jsxs("div",{className:"terminal",children:[N.jsxs("div",{className:"terminal-header",children:[N.jsx("div",{className:"terminal-dot red"}),N.jsx("div",{className:"terminal-dot yellow"}),N.jsx("div",{className:"terminal-dot green"}),N.jsx("span",{className:"text-gray-400 text-sm ml-4",children:"kiah@scaletech:~"})]}),N.jsxs("div",{className:"p-6 font-mono text-sm space-y-2 min-h-96",children:[_.slice(0,r).map((E,A)=>N.jsx("div",{className:"flex items-center",children:E.startsWith("$")?N.jsx("span",{className:"text-green-400",children:E}):N.jsx("span",{className:"text-gray-300 pl-2",children:E})},A)),N.jsx("div",{className:"flex items-center",children:N.jsxs("span",{className:"text-green-400",children:[t,o&&N.jsx("span",{className:"text-cyan-400",children:"|"})]})})]})]}),N.jsxs("div",{className:"space-y-8",children:[N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700",children:[N.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[N.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center",children:N.jsx(dy,{className:"w-8 h-8 text-white"})}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white",children:"ScaleTech"}),N.jsx("p",{className:"text-cyan-400 font-semibold",children:"Software Development Intern"})]})]}),N.jsx("div",{className:"grid grid-cols-2 gap-4 mb-6",children:N.jsxs("div",{className:"bg-gray-700/50 rounded-lg p-4",children:[N.jsx(Fd,{className:"w-6 h-6 text-cyan-400 mb-2"}),N.jsx("p",{className:"text-white font-semibold",children:"Technologies"}),N.jsx("p",{className:"text-gray-300 text-sm",children:"React, FastAPI, PostgreSQL"})]})}),N.jsxs("div",{className:"space-y-4",children:[N.jsx("h4",{className:"text-lg font-semibold text-white",children:"Key Achievements"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Built a logistics route optimization system solving real-world delivery inefficiencies"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Integrated OSRM for accurate real-world road distance calculations"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Developed dynamic React dashboard for customer management and route visualization"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Enabled CSV upload and real-time data processing for scalability"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(ss,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Improved delivery planning efficiency for multi-truck operations"})]})]})]})]}),N.jsx("div",{className:"text-center",children:N.jsxs("button",{id:"project-demo-btn",onClick:v,className:"inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 cursor-pointer",children:[N.jsx(ay,{className:"w-5 h-5"}),"Project Demo"]})})]})]})]})}),u&&N.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{backgroundColor:"rgba(0,0,0,0.85)",backdropFilter:"blur(6px)"},onClick:M,children:N.jsxs("div",{className:"relative w-full max-w-4xl mx-4 rounded-2xl overflow-hidden shadow-2xl border border-gray-700",style:{backgroundColor:"#0d1117"},onClick:E=>E.stopPropagation(),children:[N.jsxs("div",{className:"flex items-center justify-between px-5 py-3 border-b border-gray-700",children:[N.jsx("span",{className:"text-white font-semibold text-sm",children:"Truck Route Planner"}),N.jsx("button",{onClick:M,className:"text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700","aria-label":"Close",children:N.jsx(py,{className:"w-5 h-5"})})]}),N.jsx("video",{ref:p,src:"/demo.mp4",controls:!0,autoPlay:!0,className:"w-full",style:{maxHeight:"70vh",background:"#000"},children:"Your browser does not support the video tag."})]})})]})},My=()=>{const r=ce.useRef(null);ce.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".contact-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:Od,name:"GitHub",url:"https://github.com/kiahcodes",color:"text-gray-400 hover:text-white",bgColor:"hover:bg-gray-800"},{icon:ey,name:"LinkedIn",url:"https://www.linkedin.com/in/kiah-mandaliya/",color:"text-blue-400 hover:text-blue-300",bgColor:"hover:bg-blue-500/20"}];return N.jsxs("section",{ref:r,className:"py-20 px-4 bg-gray-900 relative overflow-hidden",children:[N.jsxs("div",{className:"absolute inset-0 opacity-10",children:[N.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"}),N.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),N.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Let's Connect"}),N.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!"})]}),N.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[N.jsxs("div",{className:"contact-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Send a Message"}),N.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",className:"space-y-6",children:[N.jsx("input",{type:"hidden",name:"access_key",value:"ca4286d4-dc11-425f-9662-7d08345193af"}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Name"}),N.jsx("input",{type:"text",name:"name",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your name"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Email Address"}),N.jsx("input",{type:"email",name:"email",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your email"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),N.jsx("textarea",{name:"message",required:!0,rows:4,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white resize-none",placeholder:"Write your message..."})]}),N.jsxs("button",{type:"submit",className:"glow-button w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",children:[N.jsx(oy,{className:"w-5 h-5"}),"Send Message"]})]})]}),N.jsxs("div",{className:"contact-item fade-up space-y-8",style:{animationDelay:"0.2s"},children:[N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get in Touch"}),N.jsxs("div",{className:"space-y-4",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center",children:N.jsx(ty,{className:"w-6 h-6 text-cyan-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Email"}),N.jsx("p",{className:"text-white font-semibold",children:"kiahdmandaliya@gmail.com"})]})]}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center",children:N.jsx(sy,{className:"w-6 h-6 text-green-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Phone"}),N.jsx("p",{className:"text-white font-semibold",children:"+91 8140800042"})]})]}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center",children:N.jsx(ny,{className:"w-6 h-6 text-purple-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Location"}),N.jsx("p",{className:"text-white font-semibold",children:"Ahmedabad, India"})]})]})]})]}),N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700",children:[N.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Find me Online"}),N.jsx("div",{className:"flex gap-4",children:e.map((t,s)=>N.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 rounded-xl border border-gray-600 flex items-center justify-center transition-all duration-300 ${t.color} ${t.bgColor} hover:border-opacity-0 hover:scale-110`,children:N.jsx(t.icon,{className:"w-5 h-5"})},s))})]}),N.jsx("div",{className:"text-center",children:N.jsxs("div",{className:"inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold",children:[N.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),"Available for opportunities"]})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="183",Ey=0,bm=1,wy=2,$l=1,Ty=2,Ka=3,Ur=0,Un=1,Qi=2,er=0,Ks=1,Of=2,Cm=3,Rm=4,Ay=5,as=100,by=101,Cy=102,Ry=103,Py=104,Ly=200,Dy=201,Ny=202,Iy=203,kf=204,Bf=205,Uy=206,Fy=207,Oy=208,ky=209,By=210,zy=211,Vy=212,Hy=213,Gy=214,zf=0,Vf=1,Hf=2,Qs=3,Gf=4,Wf=5,jf=6,Xf=7,Yg=0,Wy=1,jy=2,Ni=0,qg=1,Kg=2,Zg=3,Qg=4,Jg=5,e0=6,t0=7,n0=300,fs=301,Js=302,tf=303,nf=304,uc=306,$f=1e3,Wn=1001,Yf=1002,hn=1003,Xy=1004,yl=1005,en=1006,rf=1007,ls=1008,ni=1009,i0=1010,r0=1011,eo=1012,Bd=1013,Ii=1014,_i=1015,Ui=1016,zd=1017,Vd=1018,to=1020,s0=35902,a0=35899,o0=1021,l0=1022,ii=1023,ir=1026,cs=1027,c0=1028,Hd=1029,ea=1030,Gd=1031,Wd=1033,Yl=33776,ql=33777,Kl=33778,Zl=33779,qf=35840,Kf=35841,Zf=35842,Qf=35843,Jf=36196,ed=37492,td=37496,nd=37488,id=37489,rd=37490,sd=37491,ad=37808,od=37809,ld=37810,cd=37811,ud=37812,fd=37813,dd=37814,hd=37815,pd=37816,md=37817,gd=37818,vd=37819,_d=37820,xd=37821,yd=36492,Sd=36494,Md=36495,Ed=36283,wd=36284,Td=36285,Ad=36286,$y=3200,Yy=0,qy=1,Nr="",ti="srgb",ta="srgb-linear",ec="linear",Nt="srgb",Fs=7680,Pm=519,Ky=512,Zy=513,Qy=514,jd=515,Jy=516,eS=517,Xd=518,tS=519,Lm=35044,Dm="300 es",Di=2e3,tc=2001;function nS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iS(){const r=nc("canvas");return r.style.display="block",r}const Nm={};function Im(...r){const e="THREE."+r.shift();console.log(e,...r)}function u0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=u0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ct(...r){r=u0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ic(...r){const e=r.join(" ");e in Nm||(Nm[e]=!0,lt(...r))}function rS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const sS={[zf]:Vf,[Hf]:jf,[Gf]:Xf,[Qs]:Wf,[Vf]:zf,[jf]:Hf,[Xf]:Gf,[Wf]:Qs};class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,bd=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function aS(r,e){return(r%e+e)%e}function af(r,e,t){return(1-t)*r+t*e}function Ha(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,f){let h=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3],v=l[u+0],M=l[u+1],E=l[u+2],A=l[u+3];if(y!==A||h!==v||p!==M||_!==E){let x=h*v+p*M+_*E+y*A;x<0&&(v=-v,M=-M,E=-E,A=-A,x=-x);let S=1-f;if(x<.9995){const C=Math.acos(x),D=Math.sin(C);S=Math.sin(S*C)/D,f=Math.sin(f*C)/D,h=h*S+v*f,p=p*S+M*f,_=_*S+E*f,y=y*S+A*f}else{h=h*S+v*f,p=p*S+M*f,_=_*S+E*f,y=y*S+A*f;const C=1/Math.sqrt(h*h+p*p+_*_+y*y);h*=C,p*=C,_*=C,y*=C}}e[t]=h,e[t+1]=p,e[t+2]=_,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,o,l,u){const f=s[o],h=s[o+1],p=s[o+2],_=s[o+3],y=l[u],v=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+_*y+h*M-p*v,e[t+1]=h*E+_*v+p*y-f*M,e[t+2]=p*E+_*M+f*v-h*y,e[t+3]=_*E-f*y-h*v-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),_=f(o/2),y=f(l/2),v=h(s/2),M=h(o/2),E=h(l/2);switch(u){case"XYZ":this._x=v*_*y+p*M*E,this._y=p*M*y-v*_*E,this._z=p*_*E+v*M*y,this._w=p*_*y-v*M*E;break;case"YXZ":this._x=v*_*y+p*M*E,this._y=p*M*y-v*_*E,this._z=p*_*E-v*M*y,this._w=p*_*y+v*M*E;break;case"ZXY":this._x=v*_*y-p*M*E,this._y=p*M*y+v*_*E,this._z=p*_*E+v*M*y,this._w=p*_*y-v*M*E;break;case"ZYX":this._x=v*_*y-p*M*E,this._y=p*M*y+v*_*E,this._z=p*_*E-v*M*y,this._w=p*_*y+v*M*E;break;case"YZX":this._x=v*_*y+p*M*E,this._y=p*M*y+v*_*E,this._z=p*_*E-v*M*y,this._w=p*_*y-v*M*E;break;case"XZY":this._x=v*_*y-p*M*E,this._y=p*M*y-v*_*E,this._z=p*_*E+v*M*y,this._w=p*_*y+v*M*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],_=t[6],y=t[10],v=s+f+y;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>f&&s>y){const M=2*Math.sqrt(1+s-f-y);this._w=(_-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>y){const M=2*Math.sqrt(1+f-s-y);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+y-s-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,_=t._w;return this._x=s*_+u*f+o*p-l*h,this._y=o*_+u*h+l*f-s*p,this._z=l*_+u*p+s*h-o*f,this._w=u*_-s*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(s=-s,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),_=Math.sin(p);h=Math.sin(h*p)/_,t=Math.sin(t*p)/_,this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+s*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ae{constructor(e=0,t=0,s=0){ae.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*s),_=2*(f*t-l*o),y=2*(l*s-u*t);return this.x=t+h*p+u*y-f*_,this.y=s+h*_+f*p-l*y,this.z=o+h*y+l*_-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-s*h,this.z=s*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const of=new ae,Um=new sa;class ht{constructor(e,t,s,o,l,u,f,h,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p)}set(e,t,s,o,l,u,f,h,p){const _=this.elements;return _[0]=e,_[1]=o,_[2]=f,_[3]=t,_[4]=l,_[5]=h,_[6]=s,_[7]=u,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],_=s[4],y=s[7],v=s[2],M=s[5],E=s[8],A=o[0],x=o[3],S=o[6],C=o[1],D=o[4],P=o[7],B=o[2],k=o[5],z=o[8];return l[0]=u*A+f*C+h*B,l[3]=u*x+f*D+h*k,l[6]=u*S+f*P+h*z,l[1]=p*A+_*C+y*B,l[4]=p*x+_*D+y*k,l[7]=p*S+_*P+y*z,l[2]=v*A+M*C+E*B,l[5]=v*x+M*D+E*k,l[8]=v*S+M*P+E*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8];return t*u*_-t*f*p-s*l*_+s*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],y=_*u-f*p,v=f*h-_*l,M=p*l-u*h,E=t*y+s*v+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=y*A,e[1]=(o*p-_*s)*A,e[2]=(f*s-o*u)*A,e[3]=v*A,e[4]=(_*t-o*h)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(s*h-p*t)*A,e[8]=(u*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(lf.makeScale(e,t)),this}rotate(e){return this.premultiply(lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lf=new ht,Fm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oS(){const r={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Nt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ta]:{primaries:e,whitePoint:s,transfer:ec,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Tt=oS();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Os;class lS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Os===void 0&&(Os=nc("canvas")),Os.width=e.width,Os.height=e.height;const o=Os.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Os}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(tr(t[s]/255)*255):t[s]=tr(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cS=0;class $d{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(cf(o[u].image)):l.push(cf(o[u]))}else l=cf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function cf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let uS=0;const uf=new ae;class Tn extends ra{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,s=Wn,o=Wn,l=en,u=ls,f=ii,h=ni,p=Tn.DEFAULT_ANISOTROPY,_=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=ao(),this.name="",this.source=new $d(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $f:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Yf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $f:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Yf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=n0;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],_=h[4],y=h[8],v=h[1],M=h[5],E=h[9],A=h[2],x=h[6],S=h[10];if(Math.abs(_-v)<.01&&Math.abs(y-A)<.01&&Math.abs(E-x)<.01){if(Math.abs(_+v)<.1&&Math.abs(y+A)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(p+1)/2,P=(M+1)/2,B=(S+1)/2,k=(_+v)/4,z=(y+A)/4,T=(E+x)/4;return D>P&&D>B?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=k/s,l=z/s):P>B?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=k/o,l=T/o):B<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),s=z/l,o=T/l),this.set(s,o,l,t),this}let C=Math.sqrt((x-E)*(x-E)+(y-A)*(y-A)+(v-_)*(v-_));return Math.abs(C)<.001&&(C=1),this.x=(x-E)/C,this.y=(y-A)/C,this.z=(v-_)/C,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fS extends ra{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Tn(o),u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new $d(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends fS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class f0 extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dS extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e,t,s,o,l,u,f,h,p,_,y,v,M,E,A,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,f,h,p,_,y,v,M,E,A,x)}set(e,t,s,o,l,u,f,h,p,_,y,v,M,E,A,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=u,S[9]=f,S[13]=h,S[2]=p,S[6]=_,S[10]=y,S[14]=v,S[3]=M,S[7]=E,S[11]=A,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(o),p=Math.sin(o),_=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const v=u*_,M=u*y,E=f*_,A=f*y;t[0]=h*_,t[4]=-h*y,t[8]=p,t[1]=M+E*p,t[5]=v-A*p,t[9]=-f*h,t[2]=A-v*p,t[6]=E+M*p,t[10]=u*h}else if(e.order==="YXZ"){const v=h*_,M=h*y,E=p*_,A=p*y;t[0]=v+A*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*y,t[5]=u*_,t[9]=-f,t[2]=M*f-E,t[6]=A+v*f,t[10]=u*h}else if(e.order==="ZXY"){const v=h*_,M=h*y,E=p*_,A=p*y;t[0]=v-A*f,t[4]=-u*y,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*_,t[9]=A-v*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const v=u*_,M=u*y,E=f*_,A=f*y;t[0]=h*_,t[4]=E*p-M,t[8]=v*p+A,t[1]=h*y,t[5]=A*p+v,t[9]=M*p-E,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,M=u*p,E=f*h,A=f*p;t[0]=h*_,t[4]=A-v*y,t[8]=E*y+M,t[1]=y,t[5]=u*_,t[9]=-f*_,t[2]=-p*_,t[6]=M*y+E,t[10]=v-A*y}else if(e.order==="XZY"){const v=u*h,M=u*p,E=f*h,A=f*p;t[0]=h*_,t[4]=-y,t[8]=p*_,t[1]=v*y+A,t[5]=u*_,t[9]=M*y-E,t[2]=E*y-M,t[6]=f*_,t[10]=A*y+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hS,e,pS)}lookAt(e,t,s){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),br.crossVectors(s,Hn),br.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),br.crossVectors(s,Hn)),br.normalize(),Sl.crossVectors(Hn,br),o[0]=br.x,o[4]=Sl.x,o[8]=Hn.x,o[1]=br.y,o[5]=Sl.y,o[9]=Hn.y,o[2]=br.z,o[6]=Sl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],_=s[1],y=s[5],v=s[9],M=s[13],E=s[2],A=s[6],x=s[10],S=s[14],C=s[3],D=s[7],P=s[11],B=s[15],k=o[0],z=o[4],T=o[8],L=o[12],Q=o[1],F=o[5],q=o[9],te=o[13],re=o[2],J=o[6],K=o[10],j=o[14],$=o[3],ue=o[7],he=o[11],O=o[15];return l[0]=u*k+f*Q+h*re+p*$,l[4]=u*z+f*F+h*J+p*ue,l[8]=u*T+f*q+h*K+p*he,l[12]=u*L+f*te+h*j+p*O,l[1]=_*k+y*Q+v*re+M*$,l[5]=_*z+y*F+v*J+M*ue,l[9]=_*T+y*q+v*K+M*he,l[13]=_*L+y*te+v*j+M*O,l[2]=E*k+A*Q+x*re+S*$,l[6]=E*z+A*F+x*J+S*ue,l[10]=E*T+A*q+x*K+S*he,l[14]=E*L+A*te+x*j+S*O,l[3]=C*k+D*Q+P*re+B*$,l[7]=C*z+D*F+P*J+B*ue,l[11]=C*T+D*q+P*K+B*he,l[15]=C*L+D*te+P*j+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],_=e[2],y=e[6],v=e[10],M=e[14],E=e[3],A=e[7],x=e[11],S=e[15],C=h*M-p*v,D=f*M-p*y,P=f*v-h*y,B=u*M-p*_,k=u*v-h*_,z=u*y-f*_;return t*(A*C-x*D+S*P)-s*(E*C-x*B+S*k)+o*(E*D-A*B+S*z)-l*(E*P-A*k+x*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],_=e[8],y=e[9],v=e[10],M=e[11],E=e[12],A=e[13],x=e[14],S=e[15],C=t*f-s*u,D=t*h-o*u,P=t*p-l*u,B=s*h-o*f,k=s*p-l*f,z=o*p-l*h,T=_*A-y*E,L=_*x-v*E,Q=_*S-M*E,F=y*x-v*A,q=y*S-M*A,te=v*S-M*x,re=C*te-D*q+P*F+B*Q-k*L+z*T;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/re;return e[0]=(f*te-h*q+p*F)*J,e[1]=(o*q-s*te-l*F)*J,e[2]=(A*z-x*k+S*B)*J,e[3]=(v*k-y*z-M*B)*J,e[4]=(h*Q-u*te-p*L)*J,e[5]=(t*te-o*Q+l*L)*J,e[6]=(x*P-E*z-S*D)*J,e[7]=(_*z-v*P+M*D)*J,e[8]=(u*q-f*Q+p*T)*J,e[9]=(s*Q-t*q-l*T)*J,e[10]=(E*k-A*P+S*C)*J,e[11]=(y*P-_*k-M*C)*J,e[12]=(f*L-u*F-h*T)*J,e[13]=(t*F-s*L+o*T)*J,e[14]=(A*D-E*B-x*C)*J,e[15]=(_*B-y*D+v*C)*J,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,_=l*f;return this.set(p*u+s,p*f-o*h,p*h+o*f,0,p*f+o*h,_*f+s,_*h-o*u,0,p*h-o*f,_*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,_=u+u,y=f+f,v=l*p,M=l*_,E=l*y,A=u*_,x=u*y,S=f*y,C=h*p,D=h*_,P=h*y,B=s.x,k=s.y,z=s.z;return o[0]=(1-(A+S))*B,o[1]=(M+P)*B,o[2]=(E-D)*B,o[3]=0,o[4]=(M-P)*k,o[5]=(1-(v+S))*k,o[6]=(x+C)*k,o[7]=0,o[8]=(E+D)*z,o[9]=(x-C)*z,o[10]=(1-(v+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let u=ks.set(o[0],o[1],o[2]).length();const f=ks.set(o[4],o[5],o[6]).length(),h=ks.set(o[8],o[9],o[10]).length();l<0&&(u=-u),hi.copy(this);const p=1/u,_=1/f,y=1/h;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=y,hi.elements[9]*=y,hi.elements[10]*=y,t.setFromRotationMatrix(hi),s.x=u,s.y=f,s.z=h,this}makePerspective(e,t,s,o,l,u,f=Di,h=!1){const p=this.elements,_=2*l/(t-e),y=2*l/(s-o),v=(t+e)/(t-e),M=(s+o)/(s-o);let E,A;if(h)E=l/(u-l),A=u*l/(u-l);else if(f===Di)E=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(f===tc)E=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=y,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,s,o,l,u,f=Di,h=!1){const p=this.elements,_=2/(t-e),y=2/(s-o),v=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,A;if(h)E=1/(u-l),A=u/(u-l);else if(f===Di)E=-2/(u-l),A=-(u+l)/(u-l);else if(f===tc)E=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=y,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const ks=new ae,hi=new Zt,hS=new ae(0,0,0),pS=new ae(1,1,1),br=new ae,Sl=new ae,Hn=new ae,km=new Zt,Bm=new sa;class rr{constructor(e=0,t=0,s=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],_=o[9],y=o[2],v=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-St(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(km,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bm.setFromEuler(this),this.setFromQuaternion(Bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class d0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mS=0;const zm=new ae,Bs=new sa,$i=new Zt,Ml=new ae,Ga=new ae,gS=new ae,vS=new sa,Vm=new ae(1,0,0),Hm=new ae(0,1,0),Gm=new ae(0,0,1),Wm={type:"added"},_S={type:"removed"},zs={type:"childadded",child:null},ff={type:"childremoved",child:null};class Fn extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new ae,t=new rr,s=new sa,o=new ae(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new d0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ga,Ml,this.up):$i.lookAt(Ml,Ga,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix($i),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_S),ff.child=e,this.dispatchEvent(ff),ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,gS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,_=h.length;p<_;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),_=u(e.images),y=u(e.shapes),v=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),y.length>0&&(s.shapes=y),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function u(f){const h=[];for(const p in f){const _=f[p];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new ae(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,s),S=this._getHandJoint(p,A);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const _=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],v=_.position.distanceTo(y.position),M=.02,E=.005;p.inputState.pinching&&v>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new El;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const h0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function hf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=aS(e,1),t=St(t,0,1),s=St(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=hf(u,l,e+1/3),this.g=hf(u,l,e),this.b=hf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=h0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(St(xn.r*255,0,255))*65536+Math.round(St(xn.g*255,0,255))*256+Math.round(St(xn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),t);const s=xn.r,o=xn.g,l=xn.b,u=Math.max(s,o,l),f=Math.min(s,o,l);let h,p;const _=(f+u)/2;if(f===u)h=0,p=0;else{const y=u-f;switch(p=_<=.5?y/(u+f):y/(2-u-f),u){case s:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-s)/y+2;break;case l:h=(s-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=_,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ti){Tt.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,o=xn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(wl);const s=af(Cr.h,wl.h,t),o=af(Cr.s,wl.s,t),l=af(Cr.l,wl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Pt;Pt.NAMES=h0;class jm extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new ae,Yi=new ae,pf=new ae,qi=new ae,Vs=new ae,Hs=new ae,Xm=new ae,mf=new ae,gf=new ae,vf=new ae,_f=new $t,xf=new $t,yf=new $t;class vi{constructor(e=new ae,t=new ae,s=new ae){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),Yi.subVectors(s,t),pf.subVectors(e,t);const u=pi.dot(pi),f=pi.dot(Yi),h=pi.dot(pf),p=Yi.dot(Yi),_=Yi.dot(pf),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const v=1/y,M=(p*h-f*_)*v,E=(u*_-f*h)*v;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,s,o,l,u,f,h){return this.getBarycoord(e,t,s,o,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qi.x),h.addScaledVector(u,qi.y),h.addScaledVector(f,qi.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return _f.setScalar(0),xf.setScalar(0),yf.setScalar(0),_f.fromBufferAttribute(e,t),xf.fromBufferAttribute(e,s),yf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(_f,l.x),u.addScaledVector(xf,l.y),u.addScaledVector(yf,l.z),u}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),Yi.subVectors(e,t),pi.cross(Yi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),pi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,f;Vs.subVectors(o,s),Hs.subVectors(l,s),mf.subVectors(e,s);const h=Vs.dot(mf),p=Hs.dot(mf);if(h<=0&&p<=0)return t.copy(s);gf.subVectors(e,o);const _=Vs.dot(gf),y=Hs.dot(gf);if(_>=0&&y<=_)return t.copy(o);const v=h*y-_*p;if(v<=0&&h>=0&&_<=0)return u=h/(h-_),t.copy(s).addScaledVector(Vs,u);vf.subVectors(e,l);const M=Vs.dot(vf),E=Hs.dot(vf);if(E>=0&&M<=E)return t.copy(l);const A=M*p-h*E;if(A<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(s).addScaledVector(Hs,f);const x=_*E-M*y;if(x<=0&&y-_>=0&&M-E>=0)return Xm.subVectors(l,o),f=(y-_)/(y-_+(M-E)),t.copy(o).addScaledVector(Xm,f);const S=1/(x+A+v);return u=A*S,f=v*S,t.copy(s).addScaledVector(Vs,u).addScaledVector(Hs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tl.copy(s.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Al.subVectors(this.max,Wa),Gs.subVectors(e.a,Wa),Ws.subVectors(e.b,Wa),js.subVectors(e.c,Wa),Rr.subVectors(Ws,Gs),Pr.subVectors(js,Ws),Qr.subVectors(Gs,js);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-Qr.z,Qr.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,Qr.z,0,-Qr.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-Qr.y,Qr.x,0];return!Sf(t,Gs,Ws,js,Al)||(t=[1,0,0,0,1,0,0,0,1],!Sf(t,Gs,Ws,js,Al))?!1:(bl.crossVectors(Rr,Pr),t=[bl.x,bl.y,bl.z],Sf(t,Gs,Ws,js,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],mi=new ae,Tl=new oo,Gs=new ae,Ws=new ae,js=new ae,Rr=new ae,Pr=new ae,Qr=new ae,Wa=new ae,Al=new ae,bl=new ae,Jr=new ae;function Sf(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Jr.fromArray(r,l);const f=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),h=e.dot(Jr),p=t.dot(Jr),_=s.dot(Jr);if(Math.max(-Math.max(h,p,_),Math.min(h,p,_))>f)return!1}return!0}const Jt=new ae,Cl=new ft;let yS=0;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Lm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ha(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class p0 extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class m0 extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Si extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const SS=new oo,ja=new ae,Mf=new ae;class fc{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):SS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ja,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(Mf)),this.expandByPoint(ja.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MS=0;const ei=new Zt,Ef=new Fn,Xs=new ae,Gn=new oo,Xa=new oo,un=new ae;class Ei extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?m0:p0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Xa.setFromBufferAttribute(f),this.morphTargetsRelative?(un.addVectors(Gn.min,Xa.min),Gn.expandByPoint(un),un.addVectors(Gn.max,Xa.max),Gn.expandByPoint(un)):(Gn.expandByPoint(Xa.min),Gn.expandByPoint(Xa.max))}Gn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)un.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(un));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,_=f.count;p<_;p++)un.fromBufferAttribute(f,p),h&&(Xs.fromBufferAttribute(e,p),un.add(Xs)),o=Math.max(o,s.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<s.count;T++)f[T]=new ae,h[T]=new ae;const p=new ae,_=new ae,y=new ae,v=new ft,M=new ft,E=new ft,A=new ae,x=new ae;function S(T,L,Q){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),y.fromBufferAttribute(s,Q),v.fromBufferAttribute(l,T),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,Q),_.sub(p),y.sub(p),M.sub(v),E.sub(v);const F=1/(M.x*E.y-E.x*M.y);isFinite(F)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(F),x.copy(y).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(F),f[T].add(A),f[L].add(A),f[Q].add(A),h[T].add(x),h[L].add(x),h[Q].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const Q=C[T],F=Q.start,q=Q.count;for(let te=F,re=F+q;te<re;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new ae,P=new ae,B=new ae,k=new ae;function z(T){B.fromBufferAttribute(o,T),k.copy(B);const L=f[T];D.copy(L),D.sub(B.multiplyScalar(B.dot(L))).normalize(),P.crossVectors(k,L);const F=P.dot(h[T])<0?-1:1;u.setXYZW(T,D.x,D.y,D.z,F)}for(let T=0,L=C.length;T<L;++T){const Q=C[T],F=Q.start,q=Q.count;for(let te=F,re=F+q;te<re;te+=3)z(e.getX(te+0)),z(e.getX(te+1)),z(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const o=new ae,l=new ae,u=new ae,f=new ae,h=new ae,p=new ae,_=new ae,y=new ae;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),A=e.getX(v+1),x=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,x),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),f.fromBufferAttribute(s,E),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,x),f.add(_),h.add(_),p.add(_),s.setXYZ(E,f.x,f.y,f.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,M=t.count;v<M;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),_.subVectors(u,l),y.subVectors(o,l),_.cross(y),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(f,h){const p=f.array,_=f.itemSize,y=f.normalized,v=new p.constructor(h.length*_);let M=0,E=0;for(let A=0,x=h.length;A<x;A++){f.isInterleavedBufferAttribute?M=h[A]*f.data.stride+f.offset:M=h[A]*_;for(let S=0;S<_;S++)v[E++]=p[M++]}return new yi(v,_,y)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,s=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let _=0,y=p.length;_<y;_++){const v=p[_],M=e(v,s);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],_=[];for(let y=0,v=p.length;y<v;y++){const M=p[y];_.push(M.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const p in o){const _=o[p];this.setAttribute(p,_.clone(t))}const l=e.morphAttributes;for(const p in l){const _=[],y=l[p];for(let v=0,M=y.length;v<M;v++)_.push(y[v].clone(t));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,_=u.length;p<_;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ES=0;class lo extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ks,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=Bf,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kf&&(s.blendSrc=this.blendSrc),this.blendDst!==Bf&&(s.blendDst=this.blendDst),this.blendEquation!==as&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new ae,wf=new ae,Rl=new ae,Lr=new ae,Tf=new ae,Pl=new ae,Af=new ae;class g0{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){wf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(wf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Lr.dot(this.direction),h=-Lr.dot(Rl),p=Lr.lengthSq(),_=Math.abs(1-u*u);let y,v,M,E;if(_>0)if(y=u*h-f,v=u*f-h,E=l*_,y>=0)if(v>=-E)if(v<=E){const A=1/_;y*=A,v*=A,M=y*(y+u*v+2*f)+v*(u*y+v+2*h)+p}else v=l,y=Math.max(0,-(u*v+f)),M=-y*y+v*(v+2*h)+p;else v=-l,y=Math.max(0,-(u*v+f)),M=-y*y+v*(v+2*h)+p;else v<=-E?(y=Math.max(0,-(-u*l+f)),v=y>0?-l:Math.min(Math.max(-l,-h),l),M=-y*y+v*(v+2*h)+p):v<=E?(y=0,v=Math.min(Math.max(-l,-h),l),M=v*(v+2*h)+p):(y=Math.max(0,-(u*l+f)),v=y>0?l:Math.min(Math.max(-l,-h),l),M=-y*y+v*(v+2*h)+p);else v=u>0?-l:l,y=Math.max(0,-(u*v+f)),M=-y*y+v*(v+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(wf).addScaledVector(Rl,v),M}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),o=Zi.dot(Zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,f,h;const p=1/this.direction.x,_=1/this.direction.y,y=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,o=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,o=(e.min.x-v.x)*p),_>=0?(l=(e.min.y-v.y)*_,u=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,u=(e.min.y-v.y)*_),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),y>=0?(f=(e.min.z-v.z)*y,h=(e.max.z-v.z)*y):(f=(e.max.z-v.z)*y,h=(e.min.z-v.z)*y),s>h||f>o)||((f>s||s!==s)&&(s=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,s,o,l){Tf.subVectors(t,e),Pl.subVectors(s,e),Af.crossVectors(Tf,Pl);let u=this.direction.dot(Af),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const h=f*this.direction.dot(Pl.crossVectors(Lr,Pl));if(h<0)return null;const p=f*this.direction.dot(Tf.cross(Lr));if(p<0||h+p>u)return null;const _=-f*Lr.dot(Af);return _<0?null:this.at(_/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class v0 extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=Yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $m=new Zt,es=new g0,Ll=new fc,Ym=new ae,Dl=new ae,Nl=new ae,Il=new ae,bf=new ae,Ul=new ae,qm=new ae,Fl=new ae;class ri extends Fn{constructor(e=new Ei,t=new v0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ul.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const _=f[h],y=l[h];_!==0&&(bf.fromBufferAttribute(y,e),u?Ul.addScaledVector(bf,_):Ul.addScaledVector(bf.sub(t),_))}t.add(Ul)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ll.copy(s.boundingSphere),Ll.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Ll.containsPoint(es.origin)===!1&&(es.intersectSphere(Ll,Ym)===null||es.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&($m.copy(l).invert(),es.copy(e.ray).applyMatrix4($m),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,_=l.attributes.uv1,y=l.attributes.normal,v=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const x=v[E],S=u[x.materialIndex],C=Math.max(x.start,M.start),D=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let P=C,B=D;P<B;P+=3){const k=f.getX(P),z=f.getX(P+1),T=f.getX(P+2);o=Ol(this,S,e,s,p,_,y,k,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let x=E,S=A;x<S;x+=3){const C=f.getX(x),D=f.getX(x+1),P=f.getX(x+2);o=Ol(this,u,e,s,p,_,y,C,D,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let E=0,A=v.length;E<A;E++){const x=v[E],S=u[x.materialIndex],C=Math.max(x.start,M.start),D=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let P=C,B=D;P<B;P+=3){const k=P,z=P+1,T=P+2;o=Ol(this,S,e,s,p,_,y,k,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let x=E,S=A;x<S;x+=3){const C=x,D=x+1,P=x+2;o=Ol(this,u,e,s,p,_,y,C,D,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function wS(r,e,t,s,o,l,u,f){let h;if(e.side===Un?h=s.intersectTriangle(u,l,o,!0,f):h=s.intersectTriangle(o,l,u,e.side===Ur,f),h===null)return null;Fl.copy(f),Fl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Fl);return p<t.near||p>t.far?null:{distance:p,point:Fl.clone(),object:r}}function Ol(r,e,t,s,o,l,u,f,h,p){r.getVertexPosition(f,Dl),r.getVertexPosition(h,Nl),r.getVertexPosition(p,Il);const _=wS(r,e,t,s,Dl,Nl,Il,qm);if(_){const y=new ae;vi.getBarycoord(qm,Dl,Nl,Il,y),o&&(_.uv=vi.getInterpolatedAttribute(o,f,h,p,y,new ft)),l&&(_.uv1=vi.getInterpolatedAttribute(l,f,h,p,y,new ft)),u&&(_.normal=vi.getInterpolatedAttribute(u,f,h,p,y,new ae),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:h,c:p,normal:new ae,materialIndex:0};vi.getNormal(Dl,Nl,Il,v.normal),_.face=v,_.barycoord=y}return _}class _0 extends Tn{constructor(e=null,t=1,s=1,o,l,u,f,h,p=hn,_=hn,y,v){super(null,u,f,h,p,_,o,l,y,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new ae,TS=new ae,AS=new ht;class rs{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=Cf.subVectors(s,t).cross(TS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Cf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||AS.getNormalMatrix(e),o=this.coplanarPoint(Cf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new fc,bS=new ft(.5,.5),kl=new ae;class x0{constructor(e=new rs,t=new rs,s=new rs,o=new rs,l=new rs,u=new rs){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Di,s=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],_=l[4],y=l[5],v=l[6],M=l[7],E=l[8],A=l[9],x=l[10],S=l[11],C=l[12],D=l[13],P=l[14],B=l[15];if(o[0].setComponents(p-u,M-_,S-E,B-C).normalize(),o[1].setComponents(p+u,M+_,S+E,B+C).normalize(),o[2].setComponents(p+f,M+y,S+A,B+D).normalize(),o[3].setComponents(p-f,M-y,S-A,B-D).normalize(),s)o[4].setComponents(h,v,x,P).normalize(),o[5].setComponents(p-h,M-v,S-x,B-P).normalize();else if(o[4].setComponents(p-h,M-v,S-x,B-P).normalize(),t===Di)o[5].setComponents(p+h,M+v,S+x,B+P).normalize();else if(t===tc)o[5].setComponents(h,v,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=bS.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class CS extends lo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new ae,sc=new ae,Km=new Zt,$a=new g0,Bl=new fc,Rf=new ae,Zm=new ae;class RS extends Fn{constructor(e=new Ei,t=new CS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)rc.fromBufferAttribute(t,o-1),sc.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=rc.distanceTo(sc);e.setAttribute("lineDistance",new Si(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bl.copy(s.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;Km.copy(o).invert(),$a.copy(e.ray).applyMatrix4(Km);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const S=_.getX(A),C=_.getX(A+1),D=zl(this,e,$a,h,S,C,A);D&&t.push(D)}if(this.isLineLoop){const A=_.getX(E-1),x=_.getX(M),S=zl(this,e,$a,h,A,x,E-1);S&&t.push(S)}}else{const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let A=M,x=E-1;A<x;A+=p){const S=zl(this,e,$a,h,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=zl(this,e,$a,h,E-1,M,E-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function zl(r,e,t,s,o,l,u){const f=r.geometry.attributes.position;if(rc.fromBufferAttribute(f,o),sc.fromBufferAttribute(f,l),t.distanceSqToSegment(rc,sc,Rf,Zm)>s)return;Rf.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(Rf);if(!(p<e.near||p>e.far))return{distance:p,point:Zm.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Qm=new ae,Jm=new ae;class PS extends RS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Qm.fromBufferAttribute(t,o),Jm.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Qm.distanceTo(Jm);e.setAttribute("lineDistance",new Si(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class y0 extends Tn{constructor(e=[],t=fs,s,o,l,u,f,h,p,_){super(e,t,s,o,l,u,f,h,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends Tn{constructor(e,t,s=Ii,o,l,u,f=hn,h=hn,p,_=ir,y=1){if(_!==ir&&_!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:y};super(v,o,l,u,f,h,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $d(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class LS extends no{constructor(e,t=Ii,s=fs,o,l,u=hn,f=hn,h,p=ir){const _={width:e,height:e,depth:1},y=[_,_,_,_,_,_];super(e,e,t,s,o,l,u,f,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class S0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class co extends Ei{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],_=[],y=[];let v=0,M=0;E("z","y","x",-1,-1,s,t,e,u,l,0),E("z","y","x",1,-1,s,t,-e,u,l,1),E("x","z","y",1,1,e,s,t,o,u,2),E("x","z","y",1,-1,e,s,-t,o,u,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new Si(p,3)),this.setAttribute("normal",new Si(_,3)),this.setAttribute("uv",new Si(y,2));function E(A,x,S,C,D,P,B,k,z,T,L){const Q=P/z,F=B/T,q=P/2,te=B/2,re=k/2,J=z+1,K=T+1;let j=0,$=0;const ue=new ae;for(let he=0;he<K;he++){const O=he*F-te;for(let Z=0;Z<J;Z++){const Ce=Z*Q-q;ue[A]=Ce*C,ue[x]=O*D,ue[S]=re,p.push(ue.x,ue.y,ue.z),ue[A]=0,ue[x]=0,ue[S]=k>0?1:-1,_.push(ue.x,ue.y,ue.z),y.push(Z/z),y.push(1-he/T),j+=1}}for(let he=0;he<T;he++)for(let O=0;O<z;O++){const Z=v+O+J*he,Ce=v+O+J*(he+1),Ge=v+(O+1)+J*(he+1),Ke=v+(O+1)+J*he;h.push(Z,Ce,Ke),h.push(Ce,Ge,Ke),$+=6}f.addGroup(M,$,L),M+=$,v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class us extends Ei{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(o),p=f+1,_=h+1,y=e/f,v=t/h,M=[],E=[],A=[],x=[];for(let S=0;S<_;S++){const C=S*v-u;for(let D=0;D<p;D++){const P=D*y-l;E.push(P,-C,0),A.push(0,0,1),x.push(D/f),x.push(1-S/h)}}for(let S=0;S<h;S++)for(let C=0;C<f;C++){const D=C+p*S,P=C+p*(S+1),B=C+1+p*(S+1),k=C+1+p*S;M.push(D,P,k),M.push(P,B,k)}this.setIndex(M),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(A,3)),this.setAttribute("uv",new Si(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=na(r[t]);for(const o in s)e[o]=s[o]}return e}function DS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function M0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const NS={clone:na,merge:wn};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,US=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=US,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=DS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Za extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class FS extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class OS extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vl=new ae,Hl=new sa,Ri=new ae;class ac extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Hl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new ae,eg=new ft,tg=new ft;class gi extends ac{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class E0 extends ac{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $s=-90,Ys=1;class kS extends Fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new gi($s,Ys,e,t);l.layers=this.layers,this.add(l);const u=new gi($s,Ys,e,t);u.layers=this.layers,this.add(u);const f=new gi($s,Ys,e,t);f.layers=this.layers,this.add(f);const h=new gi($s,Ys,e,t);h.layers=this.layers,this.add(h);const p=new gi($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Di)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,_]=this.children,y=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(s,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(s,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(s,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(y,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class BS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class zS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ng(r,e,t,s){const o=VS(s);switch(t){case o0:return r*e;case c0:return r*e/o.components*o.byteLength;case Hd:return r*e/o.components*o.byteLength;case ea:return r*e*2/o.components*o.byteLength;case Gd:return r*e*2/o.components*o.byteLength;case l0:return r*e*3/o.components*o.byteLength;case ii:return r*e*4/o.components*o.byteLength;case Wd:return r*e*4/o.components*o.byteLength;case Yl:case ql:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kf:case Qf:return Math.max(r,16)*Math.max(e,8)/4;case qf:case Zf:return Math.max(r,8)*Math.max(e,8)/2;case Jf:case ed:case nd:case id:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case td:case rd:case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ld:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case dd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case xd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yd:case Sd:case Md:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ed:case wd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Td:case Ad:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VS(r){switch(r){case ni:case i0:return{byteLength:1,components:1};case eo:case r0:case Ui:return{byteLength:2,components:1};case zd:case Vd:return{byteLength:2,components:4};case Ii:case Bd:case _i:return{byteLength:4,components:1};case s0:case a0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function w0(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function HS(r){const e=new WeakMap;function t(f,h){const p=f.array,_=f.usage,y=p.byteLength,v=r.createBuffer();r.bindBuffer(h,v),r.bufferData(h,p,_),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,h,p){const _=h.array,y=h.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,_);else{y.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<y.length;M++){const E=y[v],A=y[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,y[v]=A)}y.length=v+1;for(let M=0,E=y.length;M<E;M++){const A=y[M];r.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var GS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WS=`#ifdef USE_ALPHAHASH
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
#endif`,jS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qS=`#ifdef USE_AOMAP
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
#endif`,KS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zM=`PhysicalMaterial material;
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
#endif`,VM=`uniform sampler2D dfgLUT;
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
}`,HM=`
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QM=`#if defined( USE_POINTS_UV )
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
#endif`,JM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`#ifdef USE_MORPHTARGETS
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
#endif`,sE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ME=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,EE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,PE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LE=`#ifdef USE_SKINNING
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
#endif`,DE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,UE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GE=`uniform sampler2D t2D;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,KE=`#define DISTANCE
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
}`,ZE=`#define DISTANCE
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
}`,QE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`uniform float scale;
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
}`,t1=`uniform vec3 diffuse;
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
}`,n1=`#include <common>
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
}`,i1=`uniform vec3 diffuse;
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define LAMBERT
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
}`,a1=`#define MATCAP
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
}`,o1=`#define MATCAP
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
}`,l1=`#define NORMAL
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
}`,c1=`#define NORMAL
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
}`,u1=`#define PHONG
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
}`,f1=`#define PHONG
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
}`,d1=`#define STANDARD
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
}`,h1=`#define STANDARD
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
}`,p1=`#define TOON
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
}`,m1=`#define TOON
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
}`,g1=`uniform float size;
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
}`,v1=`uniform vec3 diffuse;
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
}`,_1=`#include <common>
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
}`,x1=`uniform vec3 color;
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
}`,y1=`uniform float rotation;
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
}`,S1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:GS,alphahash_pars_fragment:WS,alphamap_fragment:jS,alphamap_pars_fragment:XS,alphatest_fragment:$S,alphatest_pars_fragment:YS,aomap_fragment:qS,aomap_pars_fragment:KS,batching_pars_vertex:ZS,batching_vertex:QS,begin_vertex:JS,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:fM,common:dM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:gM,emissivemap_fragment:vM,emissivemap_pars_fragment:_M,colorspace_fragment:xM,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:UM,envmap_vertex:TM,fog_vertex:AM,fog_pars_vertex:bM,fog_fragment:CM,fog_pars_fragment:RM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:NM,lights_pars_begin:IM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:kM,lights_phong_pars_fragment:BM,lights_physical_fragment:zM,lights_physical_pars_fragment:VM,lights_fragment_begin:HM,lights_fragment_maps:GM,lights_fragment_end:WM,logdepthbuf_fragment:jM,logdepthbuf_pars_fragment:XM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:YM,map_fragment:qM,map_pars_fragment:KM,map_particle_fragment:ZM,map_particle_pars_fragment:QM,metalnessmap_fragment:JM,metalnessmap_pars_fragment:eE,morphinstance_vertex:tE,morphcolor_vertex:nE,morphnormal_vertex:iE,morphtarget_pars_vertex:rE,morphtarget_vertex:sE,normal_fragment_begin:aE,normal_fragment_maps:oE,normal_pars_fragment:lE,normal_pars_vertex:cE,normal_vertex:uE,normalmap_pars_fragment:fE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:pE,iridescence_pars_fragment:mE,opaque_fragment:gE,packing:vE,premultiplied_alpha_fragment:_E,project_vertex:xE,dithering_fragment:yE,dithering_pars_fragment:SE,roughnessmap_fragment:ME,roughnessmap_pars_fragment:EE,shadowmap_pars_fragment:wE,shadowmap_pars_vertex:TE,shadowmap_vertex:AE,shadowmask_pars_fragment:bE,skinbase_vertex:CE,skinning_pars_vertex:RE,skinning_vertex:PE,skinnormal_vertex:LE,specularmap_fragment:DE,specularmap_pars_fragment:NE,tonemapping_fragment:IE,tonemapping_pars_fragment:UE,transmission_fragment:FE,transmission_pars_fragment:OE,uv_pars_fragment:kE,uv_pars_vertex:BE,uv_vertex:zE,worldpos_vertex:VE,background_vert:HE,background_frag:GE,backgroundCube_vert:WE,backgroundCube_frag:jE,cube_vert:XE,cube_frag:$E,depth_vert:YE,depth_frag:qE,distance_vert:KE,distance_frag:ZE,equirect_vert:QE,equirect_frag:JE,linedashed_vert:e1,linedashed_frag:t1,meshbasic_vert:n1,meshbasic_frag:i1,meshlambert_vert:r1,meshlambert_frag:s1,meshmatcap_vert:a1,meshmatcap_frag:o1,meshnormal_vert:l1,meshnormal_frag:c1,meshphong_vert:u1,meshphong_frag:f1,meshphysical_vert:d1,meshphysical_frag:h1,meshtoon_vert:p1,meshtoon_frag:m1,points_vert:g1,points_frag:v1,shadow_vert:_1,shadow_frag:x1,sprite_vert:y1,sprite_frag:S1},De={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Li.physical={uniforms:wn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Gl={r:0,b:0,g:0},ns=new rr,M1=new Zt;function E1(r,e,t,s,o,l){const u=new Pt(0);let f=o===!0?0:1,h,p,_=null,y=0,v=null;function M(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const P=C.backgroundBlurriness>0;D=e.get(D,P)}return D}function E(C){let D=!1;const P=M(C);P===null?x(u,f):P&&P.isColor&&(x(P,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(C,D){const P=M(D);P&&(P.isCubeTexture||P.mapping===uc)?(p===void 0&&(p=new ri(new co(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:na(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,k,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),ns.copy(D.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(M1.makeRotationFromEuler(ns)),p.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,(_!==P||y!==P.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,y=P.version,v=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ri(new us(2,2),new Fi({name:"BackgroundMaterial",uniforms:na(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||y!==P.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,_=P,y=P.version,v=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,D){C.getRGB(Gl,M0(r)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,D,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(C,D=1){u.set(C),f=D,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(u,f)},render:E,addToRenderList:A,dispose:S}}function w1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,u=!1;function f(F,q,te,re,J){let K=!1;const j=y(F,re,te,q);l!==j&&(l=j,p(l.object)),K=M(F,re,te,J),K&&E(F,re,te,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,P(F,q,te,re),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function h(){return r.createVertexArray()}function p(F){return r.bindVertexArray(F)}function _(F){return r.deleteVertexArray(F)}function y(F,q,te,re){const J=re.wireframe===!0;let K=s[q.id];K===void 0&&(K={},s[q.id]=K);const j=F.isInstancedMesh===!0?F.id:0;let $=K[j];$===void 0&&($={},K[j]=$);let ue=$[te.id];ue===void 0&&(ue={},$[te.id]=ue);let he=ue[J];return he===void 0&&(he=v(h()),ue[J]=he),he}function v(F){const q=[],te=[],re=[];for(let J=0;J<t;J++)q[J]=0,te[J]=0,re[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:re,object:F,attributes:{},index:null}}function M(F,q,te,re){const J=l.attributes,K=q.attributes;let j=0;const $=te.getAttributes();for(const ue in $)if($[ue].location>=0){const O=J[ue];let Z=K[ue];if(Z===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(Z=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(Z=F.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;j++}return l.attributesNum!==j||l.index!==re}function E(F,q,te,re){const J={},K=q.attributes;let j=0;const $=te.getAttributes();for(const ue in $)if($[ue].location>=0){let O=K[ue];O===void 0&&(ue==="instanceMatrix"&&F.instanceMatrix&&(O=F.instanceMatrix),ue==="instanceColor"&&F.instanceColor&&(O=F.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),J[ue]=Z,j++}l.attributes=J,l.attributesNum=j,l.index=re}function A(){const F=l.newAttributes;for(let q=0,te=F.length;q<te;q++)F[q]=0}function x(F){S(F,0)}function S(F,q){const te=l.newAttributes,re=l.enabledAttributes,J=l.attributeDivisors;te[F]=1,re[F]===0&&(r.enableVertexAttribArray(F),re[F]=1),J[F]!==q&&(r.vertexAttribDivisor(F,q),J[F]=q)}function C(){const F=l.newAttributes,q=l.enabledAttributes;for(let te=0,re=q.length;te<re;te++)q[te]!==F[te]&&(r.disableVertexAttribArray(te),q[te]=0)}function D(F,q,te,re,J,K,j){j===!0?r.vertexAttribIPointer(F,q,te,J,K):r.vertexAttribPointer(F,q,te,re,J,K)}function P(F,q,te,re){A();const J=re.attributes,K=te.getAttributes(),j=q.defaultAttributeValues;for(const $ in K){const ue=K[$];if(ue.location>=0){let he=J[$];if(he===void 0&&($==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),$==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){const O=he.normalized,Z=he.itemSize,Ce=e.get(he);if(Ce===void 0)continue;const Ge=Ce.buffer,Ke=Ce.type,oe=Ce.bytesPerElement,ve=Ke===r.INT||Ke===r.UNSIGNED_INT||he.gpuType===Bd;if(he.isInterleavedBufferAttribute){const ge=he.data,ke=ge.stride,He=he.offset;if(ge.isInstancedInterleavedBuffer){for(let nt=0;nt<ue.locationSize;nt++)S(ue.location+nt,ge.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let nt=0;nt<ue.locationSize;nt++)x(ue.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let nt=0;nt<ue.locationSize;nt++)D(ue.location+nt,Z/ue.locationSize,Ke,O,ke*oe,(He+Z/ue.locationSize*nt)*oe,ve)}else{if(he.isInstancedBufferAttribute){for(let ge=0;ge<ue.locationSize;ge++)S(ue.location+ge,he.meshPerAttribute);F.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ge=0;ge<ue.locationSize;ge++)x(ue.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ge=0;ge<ue.locationSize;ge++)D(ue.location+ge,Z/ue.locationSize,Ke,O,Z*oe,Z/ue.locationSize*ge*oe,ve)}}else if(j!==void 0){const O=j[$];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ue.location,O);break;case 3:r.vertexAttrib3fv(ue.location,O);break;case 4:r.vertexAttrib4fv(ue.location,O);break;default:r.vertexAttrib1fv(ue.location,O)}}}}C()}function B(){L();for(const F in s){const q=s[F];for(const te in q){const re=q[te];for(const J in re){const K=re[J];for(const j in K)_(K[j].object),delete K[j];delete re[J]}}delete s[F]}}function k(F){if(s[F.id]===void 0)return;const q=s[F.id];for(const te in q){const re=q[te];for(const J in re){const K=re[J];for(const j in K)_(K[j].object),delete K[j];delete re[J]}}delete s[F.id]}function z(F){for(const q in s){const te=s[q];for(const re in te){const J=te[re];if(J[F.id]===void 0)continue;const K=J[F.id];for(const j in K)_(K[j].object),delete K[j];delete J[F.id]}}}function T(F){for(const q in s){const te=s[q],re=F.isInstancedMesh===!0?F.id:0,J=te[re];if(J!==void 0){for(const K in J){const j=J[K];for(const $ in j)_(j[$].object),delete j[$];delete J[K]}delete te[re],Object.keys(te).length===0&&delete s[q]}}}function L(){Q(),u=!0,l!==o&&(l=o,p(l.object))}function Q(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:Q,dispose:B,releaseStatesOfGeometry:k,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:x,disableUnusedAttributes:C}}function T1(r,e,t){let s;function o(p){s=p}function l(p,_){r.drawArrays(s,p,_),t.update(_,s,1)}function u(p,_,y){y!==0&&(r.drawArraysInstanced(s,p,_,y),t.update(_,s,y))}function f(p,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,_,0,y);let M=0;for(let E=0;E<y;E++)M+=_[E];t.update(M,s,1)}function h(p,_,y,v){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)u(p[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,_,0,v,0,y);let E=0;for(let A=0;A<y;A++)E+=_[A]*v[A];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function A1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(z){const T=z===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ni&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==_i&&!T)}function h(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const _=h(p);_!==p&&(lt("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const y=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=r.getParameter(r.MAX_SAMPLES),k=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:P,maxSamples:B,samples:k}}function b1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new rs,f=new ht,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const M=y.length!==0||v||s!==0||o;return o=v,s=y.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,v){t=_(y,v,0)},this.setState=function(y,v,M){const E=y.clippingPlanes,A=y.clipIntersection,x=y.clipShadows,S=r.get(y);if(!o||E===null||E.length===0||l&&!x)l?_(null):p();else{const C=l?0:s,D=C*4;let P=S.clippingState||null;h.value=P,P=_(E,v,D,M);for(let B=0;B!==D;++B)P[B]=t[B];S.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(y,v,M,E){const A=y!==null?y.length:0;let x=null;if(A!==0){if(x=h.value,E!==!0||x===null){const S=M+A*4,C=v.matrixWorldInverse;f.getNormalMatrix(C),(x===null||x.length<S)&&(x=new Float32Array(S));for(let D=0,P=M;D!==A;++D,P+=4)u.copy(y[D]).applyMatrix4(C,f),u.normal.toArray(x,P),x[P+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const Ir=4,ig=[.125,.215,.35,.446,.526,.582],os=20,C1=256,Ya=new E0,rg=new Pt;let Pf=null,Lf=0,Df=0,Nf=!1;const R1=new ae;class sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:u=256,position:f=R1}=l;Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=og(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pf,Lf,Df),this._renderer.xr.enabled=Nf,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pf=this._renderer.getRenderTarget(),Lf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ui,format:ii,colorSpace:ta,depthBuffer:!1},o=ag(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ag(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P1(l)),this._blurMaterial=D1(l,e,t),this._ggxMaterial=L1(l,e,t)}return o}_compileMaterial(e){const t=new ri(new Ei,e);this._renderer.compile(t,Ya)}_sceneToCubeUV(e,t,s,o,l){const h=new gi(90,1,t,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,M=y.toneMapping;y.getClearColor(rg),y.toneMapping=Ni,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new co,new v0({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let S=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,S=!0):(x.color.copy(rg),S=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[D],l.y,l.z)):P===1?(h.up.set(0,0,p[D]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[D],l.z)):(h.up.set(0,p[D],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[D]));const B=this._cubeSize;qs(o,P*B,D>2?B:0,B,B),y.setRenderTarget(o),S&&y.render(A,h),y.render(e,h)}y.toneMapping=M,y.autoClear=v,e.background=C}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===fs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=og());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;qs(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,Ya)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[s];f.material=u;const h=u.uniforms,p=s/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-_*_),v=0+p*1.25,M=y*v,{_lodMax:E}=this,A=this._sizeLods[s],x=3*A*(s>E-Ir?s-E+Ir:0),S=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=E-t,qs(l,x,S,3*A,2*A),o.setRenderTarget(l),o.render(f,Ya),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=E-s,qs(e,x,S,3*A,2*A),o.setRenderTarget(e),o.render(f,Ya)}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,y=this._lodMeshes[o];y.material=p;const v=p.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*os-1),A=l/E,x=isFinite(l)?1+Math.floor(_*A):os;x>os&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${os}`);const S=[];let C=0;for(let z=0;z<os;++z){const T=z/A,L=Math.exp(-T*T/2);S.push(L),z===0?C+=L:z<x&&(C+=2*L)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;v.envMap.value=e.texture,v.samples.value=x,v.weights.value=S,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const P=this._sizeLods[o],B=3*P*(o>D-Ir?o-D+Ir:0),k=4*(this._cubeSize-P);qs(t,B,k,3*P,2*P),h.setRenderTarget(t),h.render(y,Ya)}}function P1(r){const e=[],t=[],s=[];let o=r;const l=r-Ir+1+ig.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>r-Ir?h=ig[u-r+Ir-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),_=-p,y=1+p,v=[_,_,y,_,y,y,_,_,y,y,_,y],M=6,E=6,A=3,x=2,S=1,C=new Float32Array(A*E*M),D=new Float32Array(x*E*M),P=new Float32Array(S*E*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,T=k>2?0:-1,L=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(L,A*E*k),D.set(v,x*E*k);const Q=[k,k,k,k,k,k];P.set(Q,S*E*k)}const B=new Ei;B.setAttribute("position",new yi(C,A)),B.setAttribute("uv",new yi(D,x)),B.setAttribute("faceIndex",new yi(P,S)),s.push(new ri(B,null)),o>Ir&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function ag(r,e,t){const s=new xi(r,e,t);return s.texture.mapping=uc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qs(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function L1(r,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:C1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function D1(r,e,t){const s=new Float32Array(os),o=new ae(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:dc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function og(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function lg(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function dc(){return`

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
	`}class T0 extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new y0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new co(5,5,5),l=new Fi({name:"CubemapFromEquirect",uniforms:na(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:er});l.uniforms.tEquirect.value=t;const u=new ri(o,l),f=t.minFilter;return t.minFilter===ls&&(t.minFilter=en),new kS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}function N1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(v,M=!1){return v==null?null:M?u(v):l(v)}function l(v){if(v&&v.isTexture){const M=v.mapping;if(M===tf||M===nf)if(e.has(v)){const E=e.get(v).texture;return f(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const A=new T0(E.height);return A.fromEquirectangularTexture(r,v),e.set(v,A),v.addEventListener("dispose",p),f(A.texture,v.mapping)}else return null}}return v}function u(v){if(v&&v.isTexture){const M=v.mapping,E=M===tf||M===nf,A=M===fs||M===Js;if(E||A){let x=t.get(v);const S=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new sg(r)),x=E?s.fromEquirectangular(v,x):s.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),x.texture;if(x!==void 0)return x.texture;{const C=v.image;return E&&C&&C.height>0||A&&C&&h(C)?(s===null&&(s=new sg(r)),x=E?s.fromEquirectangular(v):s.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),v.addEventListener("dispose",_),x.texture):null}}}return v}function f(v,M){return M===tf?v.mapping=fs:M===nf&&(v.mapping=Js),v}function h(v){let M=0;const E=6;for(let A=0;A<E;A++)v[A]!==void 0&&M++;return M===E}function p(v){const M=v.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function y(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:y}}function I1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&ic("WebGLRenderer: "+s+" extension not supported."),o}}}function U1(r,e,t,s){const o={},l=new WeakMap;function u(y){const v=y.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",u),delete o[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function f(y,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(y){const v=y.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function p(y){const v=[],M=y.index,E=y.attributes.position;let A=0;if(E===void 0)return;if(M!==null){const C=M.array;A=M.version;for(let D=0,P=C.length;D<P;D+=3){const B=C[D+0],k=C[D+1],z=C[D+2];v.push(B,k,k,z,z,B)}}else{const C=E.array;A=E.version;for(let D=0,P=C.length/3-1;D<P;D+=3){const B=D+0,k=D+1,z=D+2;v.push(B,k,k,z,z,B)}}const x=new(E.count>=65535?m0:p0)(v,1);x.version=A;const S=l.get(y);S&&e.remove(S),l.set(y,x)}function _(y){const v=l.get(y);if(v){const M=y.index;M!==null&&v.version<M.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:_}}function F1(r,e,t){let s;function o(v){s=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function h(v,M){r.drawElements(s,M,l,v*u),t.update(M,s,1)}function p(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,l,v*u,E),t.update(M,s,E))}function _(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,v,0,E);let x=0;for(let S=0;S<E;S++)x+=M[S];t.update(x,s,1)}function y(v,M,E,A){if(E===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<v.length;S++)p(v[S]/u,M[S],A[S]);else{x.multiDrawElementsInstancedWEBGL(s,M,0,l,v,0,A,0,E);let S=0;for(let C=0;C<E;C++)S+=M[C]*A[C];t.update(S,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=y}function O1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:Ct("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function k1(r,e,t){const s=new WeakMap,o=new $t;function l(u,f,h){const p=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=_!==void 0?_.length:0;let v=s.get(f);if(v===void 0||v.count!==y){let Q=function(){T.dispose(),s.delete(f),f.removeEventListener("dispose",Q)};var M=Q;v!==void 0&&v.texture.dispose();const E=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),A===!0&&(P=2),x===!0&&(P=3);let B=f.attributes.position.count*P,k=1;B>e.maxTextureSize&&(k=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const z=new Float32Array(B*k*4*y),T=new f0(z,B,k,y);T.type=_i,T.needsUpdate=!0;const L=P*4;for(let F=0;F<y;F++){const q=S[F],te=C[F],re=D[F],J=B*k*4*F;for(let K=0;K<q.count;K++){const j=K*L;E===!0&&(o.fromBufferAttribute(q,K),z[J+j+0]=o.x,z[J+j+1]=o.y,z[J+j+2]=o.z,z[J+j+3]=0),A===!0&&(o.fromBufferAttribute(te,K),z[J+j+4]=o.x,z[J+j+5]=o.y,z[J+j+6]=o.z,z[J+j+7]=0),x===!0&&(o.fromBufferAttribute(re,K),z[J+j+8]=o.x,z[J+j+9]=o.y,z[J+j+10]=o.z,z[J+j+11]=re.itemSize===4?o.w:1)}}v={count:y,texture:T,size:new ft(B,k)},s.set(f,v),f.addEventListener("dispose",Q)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const A=f.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function B1(r,e,t,s,o){let l=new WeakMap;function u(p){const _=o.render.frame,y=p.geometry,v=e.get(p,y);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==_&&(t.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return v}function f(){l=new WeakMap}function h(p){const _=p.target;_.removeEventListener("dispose",h),s.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:u,dispose:f}}const z1={[qg]:"LINEAR_TONE_MAPPING",[Kg]:"REINHARD_TONE_MAPPING",[Zg]:"CINEON_TONE_MAPPING",[Qg]:"ACES_FILMIC_TONE_MAPPING",[e0]:"AGX_TONE_MAPPING",[t0]:"NEUTRAL_TONE_MAPPING",[Jg]:"CUSTOM_TONE_MAPPING"};function V1(r,e,t,s,o){const l=new xi(e,t,{type:r,depthBuffer:s,stencilBuffer:o}),u=new xi(e,t,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),f=new Ei;f.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Si([0,2,0,0,2,0],2));const h=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ri(f,h),_=new E0(-1,1,1,-1,0,1);let y=null,v=null,M=!1,E,A=null,x=[],S=!1;this.setSize=function(C,D){l.setSize(C,D),u.setSize(C,D);for(let P=0;P<x.length;P++){const B=x[P];B.setSize&&B.setSize(C,D)}},this.setEffects=function(C){x=C,S=x.length>0&&x[0].isRenderPass===!0;const D=l.width,P=l.height;for(let B=0;B<x.length;B++){const k=x[B];k.setSize&&k.setSize(D,P)}},this.begin=function(C,D){if(M||C.toneMapping===Ni&&x.length===0)return!1;if(A=D,D!==null){const P=D.width,B=D.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return S===!1&&C.setRenderTarget(l),E=C.toneMapping,C.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(C,D){C.toneMapping=E,M=!0;let P=l,B=u;for(let k=0;k<x.length;k++){const z=x[k];if(z.enabled!==!1&&(z.render(C,B,P,D),z.needsSwap!==!1)){const T=P;P=B,B=T}}if(y!==C.outputColorSpace||v!==C.toneMapping){y=C.outputColorSpace,v=C.toneMapping,h.defines={},Tt.getTransfer(y)===Nt&&(h.defines.SRGB_TRANSFER="");const k=z1[v];k&&(h.defines[k]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(A),C.render(p,_),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),h.dispose()}}const A0=new Tn,Cd=new no(1,1),b0=new f0,C0=new dS,R0=new y0,cg=[],ug=[],fg=new Float32Array(16),dg=new Float32Array(9),hg=new Float32Array(4);function aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=cg[o];if(l===void 0&&(l=new Float32Array(o),cg[o]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function hc(r,e){let t=ug[e];t===void 0&&(t=new Int32Array(e),ug[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function H1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function j1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function X1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;hg.set(s),r.uniformMatrix2fv(this.addr,!1,hg),an(t,s)}}function $1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;dg.set(s),r.uniformMatrix3fv(this.addr,!1,dg),an(t,s)}}function Y1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;fg.set(s),r.uniformMatrix4fv(this.addr,!1,fg),an(t,s)}}function q1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function K1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function Z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function Q1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function J1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function iw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(Cd.compareFunction=t.isReversedDepthBuffer()?Xd:jd,l=Cd):l=A0,t.setTexture2D(e||l,o)}function rw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||C0,o)}function sw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||R0,o)}function aw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||b0,o)}function ow(r){switch(r){case 5126:return H1;case 35664:return G1;case 35665:return W1;case 35666:return j1;case 35674:return X1;case 35675:return $1;case 35676:return Y1;case 5124:case 35670:return q1;case 35667:case 35671:return K1;case 35668:case 35672:return Z1;case 35669:case 35673:return Q1;case 5125:return J1;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function lw(r,e){r.uniform1fv(this.addr,e)}function cw(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function uw(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function fw(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function dw(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hw(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pw(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mw(r,e){r.uniform1iv(this.addr,e)}function gw(r,e){r.uniform2iv(this.addr,e)}function vw(r,e){r.uniform3iv(this.addr,e)}function _w(r,e){r.uniform4iv(this.addr,e)}function xw(r,e){r.uniform1uiv(this.addr,e)}function yw(r,e){r.uniform2uiv(this.addr,e)}function Sw(r,e){r.uniform3uiv(this.addr,e)}function Mw(r,e){r.uniform4uiv(this.addr,e)}function Ew(r,e,t){const s=this.cache,o=e.length,l=hc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));let u;this.type===r.SAMPLER_2D_SHADOW?u=Cd:u=A0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function ww(r,e,t){const s=this.cache,o=e.length,l=hc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||C0,l[u])}function Tw(r,e,t){const s=this.cache,o=e.length,l=hc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||R0,l[u])}function Aw(r,e,t){const s=this.cache,o=e.length,l=hc(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||b0,l[u])}function bw(r){switch(r){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return fw;case 35674:return dw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return vw;case 35669:case 35673:return _w;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Aw}}class Cw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=ow(t.type)}}class Rw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bw(t.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],s)}}}const If=/(\w+)(\])?(\[|\.)?/g;function pg(r,e){r.seq.push(e),r.map[e.id]=e}function Lw(r,e,t){const s=r.name,o=s.length;for(If.lastIndex=0;;){const l=If.exec(s),u=If.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){pg(t,p===void 0?new Cw(f,r,e):new Rw(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new Pw(f),pg(t,y)),t=y}}}class Ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);Lw(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function mg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Dw=37297;let Nw=0;function Iw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const gg=new ht;function Uw(r){Tt._getMatrix(gg,Tt.workingColorSpace,r);const e=`mat3( ${gg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case ec:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function vg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+Iw(r.getShaderSource(e),f)}else return l}function Fw(r,e){const t=Uw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Ow={[qg]:"Linear",[Kg]:"Reinhard",[Zg]:"Cineon",[Qg]:"ACESFilmic",[e0]:"AgX",[t0]:"Neutral",[Jg]:"Custom"};function kw(r,e){const t=Ow[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new ae;function Bw(){Tt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function Vw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Hw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Qa(r){return r!==""}function _g(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(r){return r.replace(Gw,jw)}const Ww=new Map;function jw(r,e){let t=mt[e];if(t===void 0){const s=Ww.get(e);if(s!==void 0)t=mt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Rd(t)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yg(r){return r.replace(Xw,$w)}function $w(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Sg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const Yw={[$l]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function qw(r){return Yw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kw={[fs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function Zw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Kw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qw={[Js]:"ENVMAP_MODE_REFRACTION"};function Jw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eT={[Yg]:"ENVMAP_BLENDING_MULTIPLY",[Wy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function tT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":eT[r.combine]||"ENVMAP_BLENDING_NONE"}function nT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function iT(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=qw(t),p=Zw(t),_=Jw(t),y=tT(t),v=nT(t),M=zw(t),E=Vw(l),A=o.createProgram();let x,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),S.length>0&&(S+=`
`)):(x=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),S=[Sg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",t.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?kw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Fw("linearToOutputTexel",t.outputColorSpace),Bw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),u=Rd(u),u=_g(u,t),u=xg(u,t),f=Rd(f),f=_g(f,t),f=xg(f,t),u=yg(u),f=yg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Dm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=C+x+u,P=C+S+f,B=mg(o,o.VERTEX_SHADER,D),k=mg(o,o.FRAGMENT_SHADER,P);o.attachShader(A,B),o.attachShader(A,k),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(F){if(r.debug.checkShaderErrors){const q=o.getProgramInfoLog(A)||"",te=o.getShaderInfoLog(B)||"",re=o.getShaderInfoLog(k)||"",J=q.trim(),K=te.trim(),j=re.trim();let $=!0,ue=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,B,k);else{const he=vg(o,B,"vertex"),O=vg(o,k,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+he+`
`+O)}else J!==""?lt("WebGLProgram: Program Info Log:",J):(K===""||j==="")&&(ue=!1);ue&&(F.diagnostics={runnable:$,programLog:J,vertexShader:{log:K,prefix:x},fragmentShader:{log:j,prefix:S}})}o.deleteShader(B),o.deleteShader(k),T=new Ql(o,A),L=Hw(o,A)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let Q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Q===!1&&(Q=o.getProgramParameter(A,Dw)),Q},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=B,this.fragmentShader=k,this}let rT=0;class sT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new aT(e),t.set(e,s)),s}}class aT{constructor(e){this.id=rT++,this.code=e,this.usedTimes=0}}function oT(r,e,t,s,o,l){const u=new d0,f=new sT,h=new Set,p=[],_=new Map,y=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return h.add(T),T===0?"uv":`uv${T}`}function A(T,L,Q,F,q){const te=F.fog,re=q.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||J,K),$=j&&j.mapping===uc?j.image.height:null,ue=M[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const he=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,O=he!==void 0?he.length:0;let Z=0;re.morphAttributes.position!==void 0&&(Z=1),re.morphAttributes.normal!==void 0&&(Z=2),re.morphAttributes.color!==void 0&&(Z=3);let Ce,Ge,Ke,oe;if(ue){const Et=Li[ue];Ce=Et.vertexShader,Ge=Et.fragmentShader}else Ce=T.vertexShader,Ge=T.fragmentShader,f.update(T),Ke=f.getVertexShaderID(T),oe=f.getFragmentShaderID(T);const ve=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),ke=q.isInstancedMesh===!0,He=q.isBatchedMesh===!0,nt=!!T.map,Gt=!!T.matcap,pt=!!j,yt=!!T.aoMap,At=!!T.lightMap,ct=!!T.bumpMap,It=!!T.normalMap,V=!!T.displacementMap,Ut=!!T.emissiveMap,vt=!!T.metalnessMap,_t=!!T.roughnessMap,Be=T.anisotropy>0,R=T.clearcoat>0,g=T.dispersion>0,I=T.iridescence>0,Y=T.sheen>0,pe=T.transmission>0,le=Be&&!!T.anisotropyMap,Pe=R&&!!T.clearcoatMap,we=R&&!!T.clearcoatNormalMap,ze=R&&!!T.clearcoatRoughnessMap,et=I&&!!T.iridescenceMap,Se=I&&!!T.iridescenceThicknessMap,Ae=Y&&!!T.sheenColorMap,$e=Y&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ne=!!T.specularColorMap,ut=!!T.specularIntensityMap,G=pe&&!!T.transmissionMap,be=pe&&!!T.thicknessMap,Ee=!!T.gradientMap,Ie=!!T.alphaMap,Me=T.alphaTest>0,me=!!T.alphaHash,je=!!T.extensions;let st=Ni;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(st=r.toneMapping);const Dt={shaderID:ue,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ge,defines:T.defines,customVertexShaderID:Ke,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:He,batchingColor:He&&q._colorsTexture!==null,instancing:ke,instancingColor:ke&&q.instanceColor!==null,instancingMorph:ke&&q.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ta,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Gt,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:$,aoMap:yt,lightMap:At,bumpMap:ct,normalMap:It,displacementMap:V,emissiveMap:Ut,normalMapObjectSpace:It&&T.normalMapType===qy,normalMapTangentSpace:It&&T.normalMapType===Yy,metalnessMap:vt,roughnessMap:_t,anisotropy:Be,anisotropyMap:le,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:g,iridescence:I,iridescenceMap:et,iridescenceThicknessMap:Se,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:$e,specularMap:We,specularColorMap:Ne,specularIntensityMap:ut,transmission:pe,transmissionMap:G,thicknessMap:be,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Ks&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:me,combine:T.combine,mapUv:nt&&E(T.map.channel),aoMapUv:yt&&E(T.aoMap.channel),lightMapUv:At&&E(T.lightMap.channel),bumpMapUv:ct&&E(T.bumpMap.channel),normalMapUv:It&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Ut&&E(T.emissiveMap.channel),metalnessMapUv:vt&&E(T.metalnessMap.channel),roughnessMapUv:_t&&E(T.roughnessMap.channel),anisotropyMapUv:le&&E(T.anisotropyMap.channel),clearcoatMapUv:Pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(T.sheenRoughnessMap.channel),specularMapUv:We&&E(T.specularMap.channel),specularColorMapUv:Ne&&E(T.specularColorMap.channel),specularIntensityMapUv:ut&&E(T.specularIntensityMap.channel),transmissionMapUv:G&&E(T.transmissionMap.channel),thicknessMapUv:be&&E(T.thicknessMap.channel),alphaMapUv:Ie&&E(T.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(It||Be),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!re.attributes.uv&&(nt||Ie),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||re.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ge,skinning:q.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&Q.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ut&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Q in T.defines)L.push(Q),L.push(T.defines[Q]);return T.isRawShaderMaterial===!1&&(S(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),T.push(u.mask)}function D(T){const L=M[T.type];let Q;if(L){const F=Li[L];Q=NS.clone(F.uniforms)}else Q=T.uniforms;return Q}function P(T,L){let Q=_.get(L);return Q!==void 0?++Q.usedTimes:(Q=new iT(r,L,T,o),p.push(Q),_.set(L,Q)),Q}function B(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function k(T){f.remove(T)}function z(){f.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:D,acquireProgram:P,releaseProgram:B,releaseShaderCache:k,programs:p,dispose:z}}function lT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function o(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function cT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Eg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function f(v,M,E,A,x,S){let C=r[e];return C===void 0?(C={id:v.id,object:v,geometry:M,material:E,materialVariant:u(v),groupOrder:A,renderOrder:v.renderOrder,z:x,group:S},r[e]=C):(C.id=v.id,C.object=v,C.geometry=M,C.material=E,C.materialVariant=u(v),C.groupOrder=A,C.renderOrder=v.renderOrder,C.z=x,C.group=S),e++,C}function h(v,M,E,A,x,S){const C=f(v,M,E,A,x,S);E.transmission>0?s.push(C):E.transparent===!0?o.push(C):t.push(C)}function p(v,M,E,A,x,S){const C=f(v,M,E,A,x,S);E.transmission>0?s.unshift(C):E.transparent===!0?o.unshift(C):t.unshift(C)}function _(v,M){t.length>1&&t.sort(v||cT),s.length>1&&s.sort(M||Mg),o.length>1&&o.sort(M||Mg)}function y(){for(let v=e,M=r.length;v<M;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:h,unshift:p,finish:y,sort:_}}function uT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Eg,r.set(s,[u])):o>=l.length?(u=new Eg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function fT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ae,color:new Pt};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=t,t}}}function dT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hT=0;function pT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function mT(r){const e=new fT,t=dT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const o=new ae,l=new Zt,u=new Zt;function f(p){let _=0,y=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,E=0,A=0,x=0,S=0,C=0,D=0,P=0,B=0,k=0,z=0;p.sort(pT);for(let L=0,Q=p.length;L<Q;L++){const F=p[L],q=F.color,te=F.intensity,re=F.distance;let J=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ea?J=F.shadow.map.texture:J=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)_+=q.r*te,y+=q.g*te,v+=q.b*te;else if(F.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(F.sh.coefficients[K],te);z++}else if(F.isDirectionalLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const j=F.shadow,$=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.directionalShadow[M]=$,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=F.shadow.matrix,C++}s.directional[M]=K,M++}else if(F.isSpotLight){const K=e.get(F);K.position.setFromMatrixPosition(F.matrixWorld),K.color.copy(q).multiplyScalar(te),K.distance=re,K.coneCos=Math.cos(F.angle),K.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),K.decay=F.decay,s.spot[A]=K;const j=F.shadow;if(F.map&&(s.spotLightMap[B]=F.map,B++,j.updateMatrices(F),F.castShadow&&k++),s.spotLightMatrix[A]=j.matrix,F.castShadow){const $=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,s.spotShadow[A]=$,s.spotShadowMap[A]=J,P++}A++}else if(F.isRectAreaLight){const K=e.get(F);K.color.copy(q).multiplyScalar(te),K.halfWidth.set(F.width*.5,0,0),K.halfHeight.set(0,F.height*.5,0),s.rectArea[x]=K,x++}else if(F.isPointLight){const K=e.get(F);if(K.color.copy(F.color).multiplyScalar(F.intensity),K.distance=F.distance,K.decay=F.decay,F.castShadow){const j=F.shadow,$=t.get(F);$.shadowIntensity=j.intensity,$.shadowBias=j.bias,$.shadowNormalBias=j.normalBias,$.shadowRadius=j.radius,$.shadowMapSize=j.mapSize,$.shadowCameraNear=j.camera.near,$.shadowCameraFar=j.camera.far,s.pointShadow[E]=$,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=F.shadow.matrix,D++}s.point[E]=K,E++}else if(F.isHemisphereLight){const K=e.get(F);K.skyColor.copy(F.color).multiplyScalar(te),K.groundColor.copy(F.groundColor).multiplyScalar(te),s.hemi[S]=K,S++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=y,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==A||T.rectAreaLength!==x||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==D||T.numSpotShadows!==P||T.numSpotMaps!==B||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=x,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+B-k,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=k,s.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=A,T.rectAreaLength=x,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=D,T.numSpotShadows=P,T.numSpotMaps=B,T.numLightProbes=z,s.version=hT++)}function h(p,_){let y=0,v=0,M=0,E=0,A=0;const x=_.matrixWorldInverse;for(let S=0,C=p.length;S<C;S++){const D=p[S];if(D.isDirectionalLight){const P=s.directional[y];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),y++}else if(D.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),M++}else if(D.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),u.identity(),l.copy(D.matrixWorld),l.premultiply(x),u.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(u),P.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(x),v++}else if(D.isHemisphereLight){const P=s.hemi[A];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(x),A++}}}return{setup:f,setupView:h,state:s}}function wg(r){const e=new mT(r),t=[],s=[];function o(_){p.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function u(_){s.push(_)}function f(){e.setup(t)}function h(_){e.setupView(t,_)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function gT(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new wg(r),e.set(o,[f])):l>=u.length?(f=new wg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_T=`uniform sampler2D shadow_pass;
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
}`,xT=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],yT=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],Tg=new Zt,qa=new ae,Uf=new ae;function ST(r,e,t){let s=new x0;const o=new ft,l=new ft,u=new $t,f=new FS,h=new OS,p={},_=t.maxTextureSize,y={[Ur]:Un,[Un]:Ur,[Qi]:Qi},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:vT,fragmentShader:_T}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new ri(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let S=this.type;this.render=function(k,z,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;this.type===Ty&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);const L=r.getRenderTarget(),Q=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),q=r.state;q.setBlending(er),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const te=S!==this.type;te&&z.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(J=>J.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,J=k.length;re<J;re++){const K=k[re],j=K.shadow;if(j===void 0){lt("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const $=j.getFrameExtents();o.multiply($),l.copy(j.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/$.x),o.x=l.x*$.x,j.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/$.y),o.y=l.y*$.y,j.mapSize.y=l.y));const ue=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ue,j.map===null||te===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ka){if(K.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new xi(o.x,o.y,{format:ea,type:Ui,minFilter:en,magFilter:en,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new no(o.x,o.y,_i),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=ir,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn}else K.isPointLight?(j.map=new T0(o.x),j.map.depthTexture=new LS(o.x,Ii)):(j.map=new xi(o.x,o.y),j.map.depthTexture=new no(o.x,o.y,Ii)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=ir,this.type===$l?(j.map.depthTexture.compareFunction=ue?Xd:jd,j.map.depthTexture.minFilter=en,j.map.depthTexture.magFilter=en):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn);j.camera.updateProjectionMatrix()}const he=j.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<he;O++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,O),r.clear();else{O===0&&(r.setRenderTarget(j.map),r.clear());const Z=j.getViewport(O);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),q.viewport(u)}if(K.isPointLight){const Z=j.camera,Ce=j.matrix,Ge=K.distance||Z.far;Ge!==Z.far&&(Z.far=Ge,Z.updateProjectionMatrix()),qa.setFromMatrixPosition(K.matrixWorld),Z.position.copy(qa),Uf.copy(Z.position),Uf.add(xT[O]),Z.up.copy(yT[O]),Z.lookAt(Uf),Z.updateMatrixWorld(),Ce.makeTranslation(-qa.x,-qa.y,-qa.z),Tg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Tg,Z.coordinateSystem,Z.reversedDepth)}else j.updateMatrices(K);s=j.getFrustum(),P(z,T,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ka&&C(j,T),j.needsUpdate=!1}S=this.type,x.needsUpdate=!1,r.setRenderTarget(L,Q,F)};function C(k,z){const T=e.update(A);v.defines.VSM_SAMPLES!==k.blurSamples&&(v.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new xi(o.x,o.y,{format:ea,type:Ui})),v.uniforms.shadow_pass.value=k.map.depthTexture,v.uniforms.resolution.value=k.mapSize,v.uniforms.radius.value=k.radius,r.setRenderTarget(k.mapPass),r.clear(),r.renderBufferDirect(z,null,T,v,A,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,r.setRenderTarget(k.map),r.clear(),r.renderBufferDirect(z,null,T,M,A,null)}function D(k,z,T,L){let Q=null;const F=T.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(F!==void 0)Q=F;else if(Q=T.isPointLight===!0?h:f,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const q=Q.uuid,te=z.uuid;let re=p[q];re===void 0&&(re={},p[q]=re);let J=re[te];J===void 0&&(J=Q.clone(),re[te]=J,z.addEventListener("dispose",B)),Q=J}if(Q.visible=z.visible,Q.wireframe=z.wireframe,L===Ka?Q.side=z.shadowSide!==null?z.shadowSide:z.side:Q.side=z.shadowSide!==null?z.shadowSide:y[z.side],Q.alphaMap=z.alphaMap,Q.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,Q.map=z.map,Q.clipShadows=z.clipShadows,Q.clippingPlanes=z.clippingPlanes,Q.clipIntersection=z.clipIntersection,Q.displacementMap=z.displacementMap,Q.displacementScale=z.displacementScale,Q.displacementBias=z.displacementBias,Q.wireframeLinewidth=z.wireframeLinewidth,Q.linewidth=z.linewidth,T.isPointLight===!0&&Q.isMeshDistanceMaterial===!0){const q=r.properties.get(Q);q.light=T}return Q}function P(k,z,T,L,Q){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&Q===Ka)&&(!k.frustumCulled||s.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,k.matrixWorld);const te=e.update(k),re=k.material;if(Array.isArray(re)){const J=te.groups;for(let K=0,j=J.length;K<j;K++){const $=J[K],ue=re[$.materialIndex];if(ue&&ue.visible){const he=D(k,ue,L,Q);k.onBeforeShadow(r,k,z,T,te,he,$),r.renderBufferDirect(T,null,te,he,k,$),k.onAfterShadow(r,k,z,T,te,he,$)}}}else if(re.visible){const J=D(k,re,L,Q);k.onBeforeShadow(r,k,z,T,te,J,null),r.renderBufferDirect(T,null,te,J,k,null),k.onAfterShadow(r,k,z,T,te,J,null)}}const q=k.children;for(let te=0,re=q.length;te<re;te++)P(q[te],z,T,L,Q)}function B(k){k.target.removeEventListener("dispose",B);for(const T in p){const L=p[T],Q=k.target.uuid;Q in L&&(L[Q].dispose(),delete L[Q])}}}function MT(r,e){function t(){let G=!1;const be=new $t;let Ee=null;const Ie=new $t(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!G&&(r.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){G=Me},setClear:function(Me,me,je,st,Dt){Dt===!0&&(Me*=st,me*=st,je*=st),be.set(Me,me,je,st),Ie.equals(be)===!1&&(r.clearColor(Me,me,je,st),Ie.copy(be))},reset:function(){G=!1,Ee=null,Ie.set(-1,0,0,0)}}}function s(){let G=!1,be=!1,Ee=null,Ie=null,Me=null;return{setReversed:function(me){if(be!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),be=me;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(me){me?ve(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(me){Ee!==me&&!G&&(r.depthMask(me),Ee=me)},setFunc:function(me){if(be&&(me=sS[me]),Ie!==me){switch(me){case zf:r.depthFunc(r.NEVER);break;case Vf:r.depthFunc(r.ALWAYS);break;case Hf:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Gf:r.depthFunc(r.EQUAL);break;case Wf:r.depthFunc(r.GEQUAL);break;case jf:r.depthFunc(r.GREATER);break;case Xf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=me}},setLocked:function(me){G=me},setClear:function(me){Me!==me&&(Me=me,be&&(me=1-me),r.clearDepth(me))},reset:function(){G=!1,Ee=null,Ie=null,Me=null,be=!1}}}function o(){let G=!1,be=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Dt=null;return{setTest:function(Et){G||(Et?ve(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!G&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,jn,yn){(Ee!==Et||Ie!==jn||Me!==yn)&&(r.stencilFunc(Et,jn,yn),Ee=Et,Ie=jn,Me=yn)},setOp:function(Et,jn,yn){(me!==Et||je!==jn||st!==yn)&&(r.stencilOp(Et,jn,yn),me=Et,je=jn,st=yn)},setLocked:function(Et){G=Et},setClear:function(Et){Dt!==Et&&(r.clearStencil(Et),Dt=Et)},reset:function(){G=!1,be=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Dt=null}}}const l=new t,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let _={},y={},v=new WeakMap,M=[],E=null,A=!1,x=null,S=null,C=null,D=null,P=null,B=null,k=null,z=new Pt(0,0,0),T=0,L=!1,Q=null,F=null,q=null,te=null,re=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),K=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=j>=2);let ue=null,he={};const O=r.getParameter(r.SCISSOR_BOX),Z=r.getParameter(r.VIEWPORT),Ce=new $t().fromArray(O),Ge=new $t().fromArray(Z);function Ke(G,be,Ee,Ie){const Me=new Uint8Array(4),me=r.createTexture();r.bindTexture(G,me),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Ee;je++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(be+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return me}const oe={};oe[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),oe[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),oe[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ve(r.DEPTH_TEST),u.setFunc(Qs),ct(!1),It(bm),ve(r.CULL_FACE),yt(er);function ve(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function ge(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function ke(G,be){return y[G]!==be?(r.bindFramebuffer(G,be),y[G]=be,G===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=be),G===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=be),!0):!1}function He(G,be){let Ee=M,Ie=!1;if(G){Ee=v.get(be),Ee===void 0&&(Ee=[],v.set(be,Ee));const Me=G.textures;if(Ee.length!==Me.length||Ee[0]!==r.COLOR_ATTACHMENT0){for(let me=0,je=Me.length;me<je;me++)Ee[me]=r.COLOR_ATTACHMENT0+me;Ee.length=Me.length,Ie=!0}}else Ee[0]!==r.BACK&&(Ee[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ee)}function nt(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const Gt={[as]:r.FUNC_ADD,[by]:r.FUNC_SUBTRACT,[Cy]:r.FUNC_REVERSE_SUBTRACT};Gt[Ry]=r.MIN,Gt[Py]=r.MAX;const pt={[Ly]:r.ZERO,[Dy]:r.ONE,[Ny]:r.SRC_COLOR,[kf]:r.SRC_ALPHA,[By]:r.SRC_ALPHA_SATURATE,[Oy]:r.DST_COLOR,[Uy]:r.DST_ALPHA,[Iy]:r.ONE_MINUS_SRC_COLOR,[Bf]:r.ONE_MINUS_SRC_ALPHA,[ky]:r.ONE_MINUS_DST_COLOR,[Fy]:r.ONE_MINUS_DST_ALPHA,[zy]:r.CONSTANT_COLOR,[Vy]:r.ONE_MINUS_CONSTANT_COLOR,[Hy]:r.CONSTANT_ALPHA,[Gy]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(G,be,Ee,Ie,Me,me,je,st,Dt,Et){if(G===er){A===!0&&(ge(r.BLEND),A=!1);return}if(A===!1&&(ve(r.BLEND),A=!0),G!==Ay){if(G!==x||Et!==L){if((S!==as||P!==as)&&(r.blendEquation(r.FUNC_ADD),S=as,P=as),Et)switch(G){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Of:r.blendFunc(r.ONE,r.ONE);break;case Cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Of:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Cm:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",G);break}C=null,D=null,B=null,k=null,z.set(0,0,0),T=0,x=G,L=Et}return}Me=Me||be,me=me||Ee,je=je||Ie,(be!==S||Me!==P)&&(r.blendEquationSeparate(Gt[be],Gt[Me]),S=be,P=Me),(Ee!==C||Ie!==D||me!==B||je!==k)&&(r.blendFuncSeparate(pt[Ee],pt[Ie],pt[me],pt[je]),C=Ee,D=Ie,B=me,k=je),(st.equals(z)===!1||Dt!==T)&&(r.blendColor(st.r,st.g,st.b,Dt),z.copy(st),T=Dt),x=G,L=!1}function At(G,be){G.side===Qi?ge(r.CULL_FACE):ve(r.CULL_FACE);let Ee=G.side===Un;be&&(Ee=!Ee),ct(Ee),G.blending===Ks&&G.transparent===!1?yt(er):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ie=G.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ut(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(G){Q!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),Q=G)}function It(G){G!==Ey?(ve(r.CULL_FACE),G!==F&&(G===bm?r.cullFace(r.BACK):G===wy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),F=G}function V(G){G!==q&&(K&&r.lineWidth(G),q=G)}function Ut(G,be,Ee){G?(ve(r.POLYGON_OFFSET_FILL),(te!==be||re!==Ee)&&(te=be,re=Ee,u.getReversed()&&(be=-be),r.polygonOffset(be,Ee))):ge(r.POLYGON_OFFSET_FILL)}function vt(G){G?ve(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function _t(G){G===void 0&&(G=r.TEXTURE0+J-1),ue!==G&&(r.activeTexture(G),ue=G)}function Be(G,be,Ee){Ee===void 0&&(ue===null?Ee=r.TEXTURE0+J-1:Ee=ue);let Ie=he[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},he[Ee]=Ie),(Ie.type!==G||Ie.texture!==be)&&(ue!==Ee&&(r.activeTexture(Ee),ue=Ee),r.bindTexture(G,be||oe[G]),Ie.type=G,Ie.texture=be)}function R(){const G=he[ue];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Y(){try{r.texSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function pe(){try{r.texSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function le(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function we(){try{r.texStorage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function ze(){try{r.texStorage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function et(){try{r.texImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Se(){try{r.texImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Ae(G){Ce.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function $e(G){Ge.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function We(G,be){let Ee=p.get(be);Ee===void 0&&(Ee=new WeakMap,p.set(be,Ee));let Ie=Ee.get(G);Ie===void 0&&(Ie=r.getUniformBlockIndex(be,G.name),Ee.set(G,Ie))}function Ne(G,be){const Ie=p.get(be).get(G);h.get(be)!==Ie&&(r.uniformBlockBinding(be,Ie,G.__bindingPointIndex),h.set(be,Ie))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ue=null,he={},y={},v=new WeakMap,M=[],E=null,A=!1,x=null,S=null,C=null,D=null,P=null,B=null,k=null,z=new Pt(0,0,0),T=0,L=!1,Q=null,F=null,q=null,te=null,re=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:ve,disable:ge,bindFramebuffer:ke,drawBuffers:He,useProgram:nt,setBlending:yt,setMaterial:At,setFlipSided:ct,setCullFace:It,setLineWidth:V,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:_t,bindTexture:Be,unbindTexture:R,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:et,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:ze,texSubImage2D:Y,texSubImage3D:pe,compressedTexSubImage2D:le,compressedTexSubImage3D:Pe,scissor:Ae,viewport:$e,reset:ut}}function ET(r,e,t,s,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ft,_=new WeakMap;let y;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,g){return M?new OffscreenCanvas(R,g):nc("canvas")}function A(R,g,I){let Y=1;const pe=Be(R);if((pe.width>I||pe.height>I)&&(Y=I/Math.max(pe.width,pe.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(Y*pe.width),Pe=Math.floor(Y*pe.height);y===void 0&&(y=E(le,Pe));const we=g?E(le,Pe):y;return we.width=le,we.height=Pe,we.getContext("2d").drawImage(R,0,0,le,Pe),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+le+"x"+Pe+")."),we}else return"data"in R&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),R;return R}function x(R){return R.generateMipmaps}function S(R){r.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(R,g,I,Y,pe=!1){if(R!==null){if(r[R]!==void 0)return r[R];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le=g;if(g===r.RED&&(I===r.FLOAT&&(le=r.R32F),I===r.HALF_FLOAT&&(le=r.R16F),I===r.UNSIGNED_BYTE&&(le=r.R8)),g===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(le=r.R8UI),I===r.UNSIGNED_SHORT&&(le=r.R16UI),I===r.UNSIGNED_INT&&(le=r.R32UI),I===r.BYTE&&(le=r.R8I),I===r.SHORT&&(le=r.R16I),I===r.INT&&(le=r.R32I)),g===r.RG&&(I===r.FLOAT&&(le=r.RG32F),I===r.HALF_FLOAT&&(le=r.RG16F),I===r.UNSIGNED_BYTE&&(le=r.RG8)),g===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(le=r.RG8UI),I===r.UNSIGNED_SHORT&&(le=r.RG16UI),I===r.UNSIGNED_INT&&(le=r.RG32UI),I===r.BYTE&&(le=r.RG8I),I===r.SHORT&&(le=r.RG16I),I===r.INT&&(le=r.RG32I)),g===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(le=r.RGB8UI),I===r.UNSIGNED_SHORT&&(le=r.RGB16UI),I===r.UNSIGNED_INT&&(le=r.RGB32UI),I===r.BYTE&&(le=r.RGB8I),I===r.SHORT&&(le=r.RGB16I),I===r.INT&&(le=r.RGB32I)),g===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(le=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(le=r.RGBA16UI),I===r.UNSIGNED_INT&&(le=r.RGBA32UI),I===r.BYTE&&(le=r.RGBA8I),I===r.SHORT&&(le=r.RGBA16I),I===r.INT&&(le=r.RGBA32I)),g===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(le=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(le=r.R11F_G11F_B10F)),g===r.RGBA){const Pe=pe?ec:Tt.getTransfer(Y);I===r.FLOAT&&(le=r.RGBA32F),I===r.HALF_FLOAT&&(le=r.RGBA16F),I===r.UNSIGNED_BYTE&&(le=Pe===Nt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)}return(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(R,g){let I;return R?g===null||g===Ii||g===to?I=r.DEPTH24_STENCIL8:g===_i?I=r.DEPTH32F_STENCIL8:g===eo&&(I=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===to?I=r.DEPTH_COMPONENT24:g===_i?I=r.DEPTH_COMPONENT32F:g===eo&&(I=r.DEPTH_COMPONENT16),I}function B(R,g){return x(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function k(R){const g=R.target;g.removeEventListener("dispose",k),T(g),g.isVideoTexture&&_.delete(g)}function z(R){const g=R.target;g.removeEventListener("dispose",z),Q(g)}function T(R){const g=s.get(R);if(g.__webglInit===void 0)return;const I=R.source,Y=v.get(I);if(Y){const pe=Y[g.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&L(R),Object.keys(Y).length===0&&v.delete(I)}s.remove(R)}function L(R){const g=s.get(R);r.deleteTexture(g.__webglTexture);const I=R.source,Y=v.get(I);delete Y[g.__cacheKey],u.memory.textures--}function Q(R){const g=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(g.__webglFramebuffer[Y]))for(let pe=0;pe<g.__webglFramebuffer[Y].length;pe++)r.deleteFramebuffer(g.__webglFramebuffer[Y][pe]);else r.deleteFramebuffer(g.__webglFramebuffer[Y]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[Y])}else{if(Array.isArray(g.__webglFramebuffer))for(let Y=0;Y<g.__webglFramebuffer.length;Y++)r.deleteFramebuffer(g.__webglFramebuffer[Y]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Y=0;Y<g.__webglColorRenderbuffer.length;Y++)g.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[Y]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=R.textures;for(let Y=0,pe=I.length;Y<pe;Y++){const le=s.get(I[Y]);le.__webglTexture&&(r.deleteTexture(le.__webglTexture),u.memory.textures--),s.remove(I[Y])}s.remove(R)}let F=0;function q(){F=0}function te(){const R=F;return R>=o.maxTextures&&lt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),F+=1,R}function re(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function J(R,g){const I=s.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const Y=R.image;if(Y===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,R,g);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+g)}function K(R,g){const I=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){oe(I,R,g);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+g)}function j(R,g){const I=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){oe(I,R,g);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+g)}function $(R,g){const I=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){ve(I,R,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+g)}const ue={[$f]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[Yf]:r.MIRRORED_REPEAT},he={[hn]:r.NEAREST,[Xy]:r.NEAREST_MIPMAP_NEAREST,[yl]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[rf]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},O={[Ky]:r.NEVER,[tS]:r.ALWAYS,[Zy]:r.LESS,[jd]:r.LEQUAL,[Qy]:r.EQUAL,[Xd]:r.GEQUAL,[Jy]:r.GREATER,[eS]:r.NOTEQUAL};function Z(R,g){if(g.type===_i&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===rf||g.magFilter===yl||g.magFilter===ls||g.minFilter===en||g.minFilter===rf||g.minFilter===yl||g.minFilter===ls)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ue[g.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ue[g.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ue[g.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,he[g.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,he[g.minFilter]),g.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,O[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===hn||g.minFilter!==yl&&g.minFilter!==ls||g.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||s.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,o.getMaxAnisotropy())),s.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(R,g){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",k));const Y=g.source;let pe=v.get(Y);pe===void 0&&(pe={},v.set(Y,pe));const le=re(g);if(le!==R.__cacheKey){pe[le]===void 0&&(pe[le]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,I=!0),pe[le].usedTimes++;const Pe=pe[R.__cacheKey];Pe!==void 0&&(pe[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&L(g)),R.__cacheKey=le,R.__webglTexture=pe[le].texture}return I}function Ge(R,g,I){return Math.floor(Math.floor(R/I)/g)}function Ke(R,g,I,Y){const le=R.updateRanges;if(le.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,I,Y,g.data);else{le.sort((Se,Ae)=>Se.start-Ae.start);let Pe=0;for(let Se=1;Se<le.length;Se++){const Ae=le[Pe],$e=le[Se],We=Ae.start+Ae.count,Ne=Ge($e.start,g.width,4),ut=Ge(Ae.start,g.width,4);$e.start<=We+1&&Ne===ut&&Ge($e.start+$e.count-1,g.width,4)===Ne?Ae.count=Math.max(Ae.count,$e.start+$e.count-Ae.start):(++Pe,le[Pe]=$e)}le.length=Pe+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let Se=0,Ae=le.length;Se<Ae;Se++){const $e=le[Se],We=Math.floor($e.start/4),Ne=Math.ceil($e.count/4),ut=We%g.width,G=Math.floor(We/g.width),be=Ne,Ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,ut,G,be,Ee,I,Y,g.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function oe(R,g,I){let Y=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Y=r.TEXTURE_3D);const pe=Ce(R,g),le=g.source;t.bindTexture(Y,R.__webglTexture,r.TEXTURE0+I);const Pe=s.get(le);if(le.version!==Pe.__version||pe===!0){t.activeTexture(r.TEXTURE0+I);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),et=g.colorSpace===Nr||we===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Se=A(g.image,!1,o.maxTextureSize);Se=_t(g,Se);const Ae=l.convert(g.format,g.colorSpace),$e=l.convert(g.type);let We=D(g.internalFormat,Ae,$e,g.colorSpace,g.isVideoTexture);Z(Y,g);let Ne;const ut=g.mipmaps,G=g.isVideoTexture!==!0,be=Pe.__version===void 0||pe===!0,Ee=le.dataReady,Ie=B(g,Se);if(g.isDepthTexture)We=P(g.format===cs,g.type),be&&(G?t.texStorage2D(r.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,$e,null));else if(g.isDataTexture)if(ut.length>0){G&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ae,$e,Ne.data);g.generateMipmaps=!1}else G?(be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height),Ee&&Ke(g,Se,Ae,$e)):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,$e,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,ut[0].width,ut[0].height,Se.depth);for(let Me=0,me=ut.length;Me<me;Me++)if(Ne=ut[Me],g.format!==ii)if(Ae!==null)if(G){if(Ee)if(g.layerUpdates.size>0){const je=ng(Ne.width,Ne.height,g.format,g.type);for(const st of g.layerUpdates){const Dt=Ne.data.subarray(st*je/Ne.data.BYTES_PER_ELEMENT,(st+1)*je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,st,Ne.width,Ne.height,1,Ae,Dt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,Ae,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,Ae,$e,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,Ae,$e,Ne.data)}else{G&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ut[0].width,ut[0].height);for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],g.format!==ii?Ae!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ae,$e,Ne.data)}else if(g.isDataArrayTexture)if(G){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,Se.width,Se.height,Se.depth),Ee)if(g.layerUpdates.size>0){const Me=ng(Se.width,Se.height,g.format,g.type);for(const me of g.layerUpdates){const je=Se.data.subarray(me*Me/Se.data.BYTES_PER_ELEMENT,(me+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Ae,$e,je)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,$e,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,Ae,$e,Se.data);else if(g.isData3DTexture)G?(be&&t.texStorage3D(r.TEXTURE_3D,Ie,We,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,$e,Se.data)):t.texImage3D(r.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,Ae,$e,Se.data);else if(g.isFramebufferTexture){if(be)if(G)t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height);else{let Me=Se.width,me=Se.height;for(let je=0;je<Ie;je++)t.texImage2D(r.TEXTURE_2D,je,We,Me,me,0,Ae,$e,null),Me>>=1,me>>=1}}else if(ut.length>0){if(G&&be){const Me=Be(ut[0]);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}for(let Me=0,me=ut.length;Me<me;Me++)Ne=ut[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ae,$e,Ne):t.texImage2D(r.TEXTURE_2D,Me,We,Ae,$e,Ne);g.generateMipmaps=!1}else if(G){if(be){const Me=Be(Se);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,$e,Se)}else t.texImage2D(r.TEXTURE_2D,0,We,Ae,$e,Se);x(g)&&S(Y),Pe.__version=le.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ve(R,g,I){if(g.image.length!==6)return;const Y=Ce(R,g),pe=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+I);const le=s.get(pe);if(pe.version!==le.__version||Y===!0){t.activeTexture(r.TEXTURE0+I);const Pe=Tt.getPrimaries(Tt.workingColorSpace),we=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),ze=g.colorSpace===Nr||Pe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const et=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!et&&!Se?Ae[me]=A(g.image[me],!0,o.maxCubemapSize):Ae[me]=Se?g.image[me].image:g.image[me],Ae[me]=_t(g,Ae[me]);const $e=Ae[0],We=l.convert(g.format,g.colorSpace),Ne=l.convert(g.type),ut=D(g.internalFormat,We,Ne,g.colorSpace),G=g.isVideoTexture!==!0,be=le.__version===void 0||Y===!0,Ee=pe.dataReady;let Ie=B(g,$e);Z(r.TEXTURE_CUBE_MAP,g);let Me;if(et){G&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ut,$e.width,$e.height);for(let me=0;me<6;me++){Me=Ae[me].mipmaps;for(let je=0;je<Me.length;je++){const st=Me[je];g.format!==ii?We!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,Ne,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ut,st.width,st.height,0,We,Ne,st.data)}}}else{if(Me=g.mipmaps,G&&be){Me.length>0&&Ie++;const me=Be(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ut,me.width,me.height)}for(let me=0;me<6;me++)if(Se){G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,We,Ne,Ae[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,Ae[me].width,Ae[me].height,0,We,Ne,Ae[me].data);for(let je=0;je<Me.length;je++){const Dt=Me[je].image[me].image;G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Dt.width,Dt.height,We,Ne,Dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,Dt.width,Dt.height,0,We,Ne,Dt.data)}}else{G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Ne,Ae[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ut,We,Ne,Ae[me]);for(let je=0;je<Me.length;je++){const st=Me[je];G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,We,Ne,st.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ut,We,Ne,st.image[me])}}}x(g)&&S(r.TEXTURE_CUBE_MAP),le.__version=pe.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ge(R,g,I,Y,pe,le){const Pe=l.convert(I.format,I.colorSpace),we=l.convert(I.type),ze=D(I.internalFormat,Pe,we,I.colorSpace),et=s.get(g),Se=s.get(I);if(Se.__renderTarget=g,!et.__hasExternalTextures){const Ae=Math.max(1,g.width>>le),$e=Math.max(1,g.height>>le);pe===r.TEXTURE_3D||pe===r.TEXTURE_2D_ARRAY?t.texImage3D(pe,le,ze,Ae,$e,g.depth,0,Pe,we,null):t.texImage2D(pe,le,ze,Ae,$e,0,Pe,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ut(g)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,pe,Se.__webglTexture,0,V(g)):(pe===r.TEXTURE_2D||pe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,pe,Se.__webglTexture,le),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,g,I){if(r.bindRenderbuffer(r.RENDERBUFFER,R),g.depthBuffer){const Y=g.depthTexture,pe=Y&&Y.isDepthTexture?Y.type:null,le=P(g.stencilBuffer,pe),Pe=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ut(g)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),le,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),le,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,le,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,R)}else{const Y=g.textures;for(let pe=0;pe<Y.length;pe++){const le=Y[pe],Pe=l.convert(le.format,le.colorSpace),we=l.convert(le.type),ze=D(le.internalFormat,Pe,we,le.colorSpace);Ut(g)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),ze,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),ze,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ze,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(R,g,I){const Y=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=s.get(g.depthTexture);if(pe.__renderTarget=g,(!pe.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,g.depthTexture.addEventListener("dispose",k)),pe.__webglTexture===void 0){pe.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,pe.__webglTexture),Z(r.TEXTURE_CUBE_MAP,g.depthTexture);const et=l.convert(g.depthTexture.format),Se=l.convert(g.depthTexture.type);let Ae;g.depthTexture.format===ir?Ae=r.DEPTH_COMPONENT24:g.depthTexture.format===cs&&(Ae=r.DEPTH24_STENCIL8);for(let $e=0;$e<6;$e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,Ae,g.width,g.height,0,et,Se,null)}}else J(g.depthTexture,0);const le=pe.__webglTexture,Pe=V(g),we=Y?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,ze=g.depthTexture.format===cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(g.depthTexture.format===ir)Ut(g)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,le,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,le,0);else if(g.depthTexture.format===cs)Ut(g)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,le,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,le,0);else throw new Error("Unknown depthTexture format")}function nt(R){const g=s.get(R),I=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Y){const pe=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Y.removeEventListener("dispose",pe)};Y.addEventListener("dispose",pe),g.__depthDisposeCallback=pe}g.__boundDepthTexture=Y}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)He(g.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?He(g.__webglFramebuffer[0],R,0):He(g.__webglFramebuffer,R,0)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]===void 0)g.__webglDepthbuffer[Y]=r.createRenderbuffer(),ke(g.__webglDepthbuffer[Y],R,!1);else{const pe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,le)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),ke(g.__webglDepthbuffer,R,!1);else{const pe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,le=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,le),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,le)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(R,g,I){const Y=s.get(R);g!==void 0&&ge(Y.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&nt(R)}function pt(R){const g=R.texture,I=s.get(R),Y=s.get(g);R.addEventListener("dispose",z);const pe=R.textures,le=R.isWebGLCubeRenderTarget===!0,Pe=pe.length>1;if(Pe||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=g.version,u.memory.textures++),le){I.__webglFramebuffer=[];for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[we]=[];for(let ze=0;ze<g.mipmaps.length;ze++)I.__webglFramebuffer[we][ze]=r.createFramebuffer()}else I.__webglFramebuffer[we]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let we=0;we<g.mipmaps.length;we++)I.__webglFramebuffer[we]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let we=0,ze=pe.length;we<ze;we++){const et=s.get(pe[we]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),u.memory.textures++)}if(R.samples>0&&Ut(R)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let we=0;we<pe.length;we++){const ze=pe[we];I.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[we]);const et=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),Ae=D(ze.internalFormat,et,Se,ze.colorSpace,R.isXRRenderTarget===!0),$e=V(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,I.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(le){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),Z(r.TEXTURE_CUBE_MAP,g);for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[we][ze],R,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else ge(I.__webglFramebuffer[we],R,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);x(g)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let we=0,ze=pe.length;we<ze;we++){const et=pe[we],Se=s.get(et);let Ae=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Se.__webglTexture),Z(Ae,et),ge(I.__webglFramebuffer,R,et,r.COLOR_ATTACHMENT0+we,Ae,0),x(et)&&S(Ae)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,Y.__webglTexture),Z(we,g),g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[ze],R,g,r.COLOR_ATTACHMENT0,we,ze);else ge(I.__webglFramebuffer,R,g,r.COLOR_ATTACHMENT0,we,0);x(g)&&S(we),t.unbindTexture()}R.depthBuffer&&nt(R)}function yt(R){const g=R.textures;for(let I=0,Y=g.length;I<Y;I++){const pe=g[I];if(x(pe)){const le=C(R),Pe=s.get(pe).__webglTexture;t.bindTexture(le,Pe),S(le),t.unbindTexture()}}}const At=[],ct=[];function It(R){if(R.samples>0){if(Ut(R)===!1){const g=R.textures,I=R.width,Y=R.height;let pe=r.COLOR_BUFFER_BIT;const le=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(R),we=g.length>1;if(we)for(let et=0;et<g.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let et=0;et<g.length;et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(pe|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(pe|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,I,Y,0,0,I,Y,pe,r.NEAREST),h===!0&&(At.length=0,ct.length=0,At.push(r.COLOR_ATTACHMENT0+et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(At.push(le),ct.push(le),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<g.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&h){const g=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function V(R){return Math.min(o.maxSamples,R.samples)}function Ut(R){const g=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function vt(R){const g=u.render.frame;_.get(R)!==g&&(_.set(R,g),R.update())}function _t(R,g){const I=R.colorSpace,Y=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==ta&&I!==Nr&&(Tt.getTransfer(I)===Nt?(Y!==ii||pe!==ni)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",I)),g}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=$,this.rebindTextures=Gt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wT(r,e){function t(s,o=Nr){let l;const u=Tt.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===zd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===s0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===a0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===i0)return r.BYTE;if(s===r0)return r.SHORT;if(s===eo)return r.UNSIGNED_SHORT;if(s===Bd)return r.INT;if(s===Ii)return r.UNSIGNED_INT;if(s===_i)return r.FLOAT;if(s===Ui)return r.HALF_FLOAT;if(s===o0)return r.ALPHA;if(s===l0)return r.RGB;if(s===ii)return r.RGBA;if(s===ir)return r.DEPTH_COMPONENT;if(s===cs)return r.DEPTH_STENCIL;if(s===c0)return r.RED;if(s===Hd)return r.RED_INTEGER;if(s===ea)return r.RG;if(s===Gd)return r.RG_INTEGER;if(s===Wd)return r.RGBA_INTEGER;if(s===Yl||s===ql||s===Kl||s===Zl)if(u===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Yl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Yl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===Kf||s===Zf||s===Qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Zf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jf||s===ed||s===td||s===nd||s===id||s===rd||s===sd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Jf||s===ed)return u===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===td)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===nd)return l.COMPRESSED_R11_EAC;if(s===id)return l.COMPRESSED_SIGNED_R11_EAC;if(s===rd)return l.COMPRESSED_RG11_EAC;if(s===sd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===ad||s===od||s===ld||s===cd||s===ud||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d||s===xd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===ad)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===od)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ld)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===hd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===md)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===vd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===_d)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xd)return u===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===yd||s===Sd||s===Md)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===yd)return u===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Md)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ed||s===wd||s===Td||s===Ad)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Ed)return l.COMPRESSED_RED_RGTC1_EXT;if(s===wd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Td)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ad)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===to?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const TT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
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

}`;class bT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new S0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Fi({vertexShader:TT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new us(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends ra{constructor(e,t){super();const s=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,_=null,y=null,v=null,M=null,E=null;const A=typeof XRWebGLBinding<"u",x=new bT,S={},C=t.getContextAttributes();let D=null,P=null;const B=[],k=[],z=new ft;let T=null;const L=new gi;L.viewport=new $t;const Q=new gi;Q.viewport=new $t;const F=[L,Q],q=new BS;let te=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=B[oe];return ve===void 0&&(ve=new df,B[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=B[oe];return ve===void 0&&(ve=new df,B[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=B[oe];return ve===void 0&&(ve=new df,B[oe]=ve),ve.getHandSpace()};function J(oe){const ve=k.indexOf(oe.inputSource);if(ve===-1)return;const ge=B[ve];ge!==void 0&&(ge.update(oe.inputSource,oe.frame,p||u),ge.dispatchEvent({type:oe.type,data:oe.inputSource}))}function K(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let oe=0;oe<B.length;oe++){const ve=k[oe];ve!==null&&(k[oe]=null,B[oe].disconnect(ve))}te=null,re=null,x.reset();for(const oe in S)delete S[oe];e.setRenderTarget(D),M=null,v=null,y=null,o=null,P=null,Ke.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return y===null&&A&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,He=null;C.depth&&(He=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?cs:ir,ke=C.stencil?to:Ii);const nt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};y=this.getBinding(),v=y.createProjectionLayer(nt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new xi(v.textureWidth,v.textureHeight,{format:ii,type:ni,depthTexture:new no(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new xi(M.framebufferWidth,M.framebufferHeight,{format:ii,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),Ke.setContext(o),Ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(oe){for(let ve=0;ve<oe.removed.length;ve++){const ge=oe.removed[ve],ke=k.indexOf(ge);ke>=0&&(k[ke]=null,B[ke].disconnect(ge))}for(let ve=0;ve<oe.added.length;ve++){const ge=oe.added[ve];let ke=k.indexOf(ge);if(ke===-1){for(let nt=0;nt<B.length;nt++)if(nt>=k.length){k.push(ge),ke=nt;break}else if(k[nt]===null){k[nt]=ge,ke=nt;break}if(ke===-1)break}const He=B[ke];He&&He.connect(ge)}}const $=new ae,ue=new ae;function he(oe,ve,ge){$.setFromMatrixPosition(ve.matrixWorld),ue.setFromMatrixPosition(ge.matrixWorld);const ke=$.distanceTo(ue),He=ve.projectionMatrix.elements,nt=ge.projectionMatrix.elements,Gt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],At=(He[9]-1)/He[5],ct=(He[8]-1)/He[0],It=(nt[8]+1)/nt[0],V=Gt*ct,Ut=Gt*It,vt=ke/(-ct+It),_t=vt*-ct;if(ve.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(_t),oe.translateZ(vt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),He[10]===-1)oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Be=Gt+vt,R=pt+vt,g=V-_t,I=Ut+(ke-_t),Y=yt*pt/R*Be,pe=At*pt/R*Be;oe.projectionMatrix.makePerspective(g,I,Y,pe,Be,R),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function O(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let ve=oe.near,ge=oe.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),q.near=Q.near=L.near=ve,q.far=Q.far=L.far=ge,(te!==q.near||re!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),te=q.near,re=q.far),q.layers.mask=oe.layers.mask|6,L.layers.mask=q.layers.mask&-5,Q.layers.mask=q.layers.mask&-3;const ke=oe.parent,He=q.cameras;O(q,ke);for(let nt=0;nt<He.length;nt++)O(He[nt],ke);He.length===2?he(q,L,Q):q.projectionMatrix.copy(L.projectionMatrix),Z(oe,q,ke)};function Z(oe,ve,ge){ge===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(ge.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=bd*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(v===null&&M===null))return h},this.setFoveation=function(oe){h=oe,v!==null&&(v.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(oe){return S[oe]};let Ce=null;function Ge(oe,ve){if(_=ve.getViewerPose(p||u),E=ve,_!==null){const ge=_.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ke=!1;ge.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let pt=0;pt<ge.length;pt++){const yt=ge[pt];let At=null;if(M!==null)At=M.getViewport(yt);else{const It=y.getViewSubImage(v,yt);At=It.viewport,pt===0&&(e.setRenderTargetTextures(P,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(P))}let ct=F[pt];ct===void 0&&(ct=new gi,ct.layers.enable(pt),ct.viewport=new $t,F[pt]=ct),ct.matrix.fromArray(yt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(yt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(At.x,At.y,At.width,At.height),pt===0&&(q.matrix.copy(ct.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(ct)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){y=s.getBinding();const pt=y.getDepthInformation(ge[0]);pt&&pt.isValid&&pt.texture&&x.init(pt,o.renderState)}if(He&&He.includes("camera-access")&&A){e.state.unbindTexture(),y=s.getBinding();for(let pt=0;pt<ge.length;pt++){const yt=ge[pt].camera;if(yt){let At=S[yt];At||(At=new S0,S[yt]=At);const ct=y.getCameraImage(yt);At.sourceTexture=ct}}}}for(let ge=0;ge<B.length;ge++){const ke=k[ge],He=B[ge];ke!==null&&He!==void 0&&He.update(ke,ve,p||u)}Ce&&Ce(oe,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Ke=new w0;Ke.setAnimationLoop(Ge),this.setAnimationLoop=function(oe){Ce=oe},this.dispose=function(){}}}const is=new rr,RT=new Zt;function PT(r,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function s(x,S){S.color.getRGB(x.fogColor.value,M0(r)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function o(x,S,C,D,P){S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),y(x,S)):S.isMeshPhongMaterial?(l(x,S),_(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),v(x,S),S.isMeshPhysicalMaterial&&M(x,S,P)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),A(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&f(x,S)):S.isPointsMaterial?h(x,S,C,D):S.isSpriteMaterial?p(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===Un&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===Un&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const C=e.get(S),D=C.envMap,P=C.envMapRotation;D&&(x.envMap.value=D,is.copy(P),is.x*=-1,is.y*=-1,is.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),x.envMapRotation.value.setFromMatrix4(RT.makeRotationFromEuler(is)),x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function f(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function h(x,S,C,D){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*C,x.scale.value=D*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function p(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function _(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function y(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function v(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,C){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Un&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function A(x,S){const C=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function LT(r,e,t,s){let o={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,D){const P=D.program;s.uniformBlockBinding(C,P)}function p(C,D){let P=o[C.id];P===void 0&&(E(C),P=_(C),o[C.id]=P,C.addEventListener("dispose",x));const B=D.program;s.updateUBOMapping(C,B);const k=e.render.frame;l[C.id]!==k&&(v(C),l[C.id]=k)}function _(C){const D=y();C.__bindingPointIndex=D;const P=r.createBuffer(),B=C.__size,k=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,B,k),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,P),P}function y(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=o[C.id],P=C.uniforms,B=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let k=0,z=P.length;k<z;k++){const T=Array.isArray(P[k])?P[k]:[P[k]];for(let L=0,Q=T.length;L<Q;L++){const F=T[L];if(M(F,k,L,B)===!0){const q=F.__offset,te=Array.isArray(F.value)?F.value:[F.value];let re=0;for(let J=0;J<te.length;J++){const K=te[J],j=A(K);typeof K=="number"||typeof K=="boolean"?(F.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,q+re,F.__data)):K.isMatrix3?(F.__data[0]=K.elements[0],F.__data[1]=K.elements[1],F.__data[2]=K.elements[2],F.__data[3]=0,F.__data[4]=K.elements[3],F.__data[5]=K.elements[4],F.__data[6]=K.elements[5],F.__data[7]=0,F.__data[8]=K.elements[6],F.__data[9]=K.elements[7],F.__data[10]=K.elements[8],F.__data[11]=0):(K.toArray(F.__data,re),re+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,q,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,D,P,B){const k=C.value,z=D+"_"+P;if(B[z]===void 0)return typeof k=="number"||typeof k=="boolean"?B[z]=k:B[z]=k.clone(),!0;{const T=B[z];if(typeof k=="number"||typeof k=="boolean"){if(T!==k)return B[z]=k,!0}else if(T.equals(k)===!1)return T.copy(k),!0}return!1}function E(C){const D=C.uniforms;let P=0;const B=16;for(let z=0,T=D.length;z<T;z++){const L=Array.isArray(D[z])?D[z]:[D[z]];for(let Q=0,F=L.length;Q<F;Q++){const q=L[Q],te=Array.isArray(q.value)?q.value:[q.value];for(let re=0,J=te.length;re<J;re++){const K=te[re],j=A(K),$=P%B,ue=$%j.boundary,he=$+ue;P+=ue,he!==0&&B-he<j.storage&&(P+=B-he),q.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=j.storage}}}const k=P%B;return k>0&&(P+=B-k),C.__size=P,C.__cache={},this}function A(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",C),D}function x(C){const D=C.target;D.removeEventListener("dispose",x);const P=u.indexOf(D.__bindingPointIndex);u.splice(P,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function S(){for(const C in o)r.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:S}}const DT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function NT(){return Pi===null&&(Pi=new _0(DT,16,16,ea,Ui),Pi.name="DFG_LUT",Pi.minFilter=en,Pi.magFilter=en,Pi.wrapS=Wn,Pi.wrapT=Wn,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class IT{constructor(e={}){const{canvas:t=iS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ni}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=u;const A=M,x=new Set([Wd,Gd,Hd]),S=new Set([ni,Ii,eo,to,zd,Vd]),C=new Uint32Array(4),D=new Int32Array(4);let P=null,B=null;const k=[],z=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let Q=!1;this._outputColorSpace=ti;let F=0,q=0,te=null,re=-1,J=null;const K=new $t,j=new $t;let $=null;const ue=new Pt(0);let he=0,O=t.width,Z=t.height,Ce=1,Ge=null,Ke=null;const oe=new $t(0,0,O,Z),ve=new $t(0,0,O,Z);let ge=!1;const ke=new x0;let He=!1,nt=!1;const Gt=new Zt,pt=new ae,yt=new $t,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function It(){return te===null?Ce:1}let V=s;function Ut(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kd}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const X="webgl2";if(V=Ut(X,b),V===null)throw Ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Ct("WebGLRenderer: "+b.message),b}let vt,_t,Be,R,g,I,Y,pe,le,Pe,we,ze,et,Se,Ae,$e,We,Ne,ut,G,be,Ee,Ie;function Me(){vt=new I1(V),vt.init(),be=new wT(V,vt),_t=new A1(V,vt,e,be),Be=new MT(V,vt),_t.reversedDepthBuffer&&v&&Be.buffers.depth.setReversed(!0),R=new O1(V),g=new lT,I=new ET(V,vt,Be,g,_t,be,R),Y=new N1(L),pe=new HS(V),Ee=new w1(V,pe),le=new U1(V,pe,R,Ee),Pe=new B1(V,le,pe,Ee,R),Ne=new k1(V,_t,I),Ae=new b1(g),we=new oT(L,Y,vt,_t,Ee,Ae),ze=new PT(L,g),et=new uT,Se=new gT(vt),We=new E1(L,Y,Be,Pe,E,h),$e=new ST(L,Pe,_t),Ie=new LT(V,R,_t,Be),ut=new T1(V,vt,R),G=new F1(V,vt,R),R.programs=we.programs,L.capabilities=_t,L.extensions=vt,L.properties=g,L.renderLists=et,L.shadowMap=$e,L.state=Be,L.info=R}Me(),A!==ni&&(T=new V1(A,t.width,t.height,o,l));const me=new CT(L,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=vt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=vt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(b){b!==void 0&&(Ce=b,this.setSize(O,Z,!1))},this.getSize=function(b){return b.set(O,Z)},this.setSize=function(b,X,de=!0){if(me.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}O=b,Z=X,t.width=Math.floor(b*Ce),t.height=Math.floor(X*Ce),de===!0&&(t.style.width=b+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(O*Ce,Z*Ce).floor()},this.setDrawingBufferSize=function(b,X,de){O=b,Z=X,Ce=de,t.width=Math.floor(b*de),t.height=Math.floor(X*de),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(A===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(oe)},this.setViewport=function(b,X,de,se){b.isVector4?oe.set(b.x,b.y,b.z,b.w):oe.set(b,X,de,se),Be.viewport(K.copy(oe).multiplyScalar(Ce).round())},this.getScissor=function(b){return b.copy(ve)},this.setScissor=function(b,X,de,se){b.isVector4?ve.set(b.x,b.y,b.z,b.w):ve.set(b,X,de,se),Be.scissor(j.copy(ve).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){Be.setScissorTest(ge=b)},this.setOpaqueSort=function(b){Ge=b},this.setTransparentSort=function(b){Ke=b},this.getClearColor=function(b){return b.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,de=!0){let se=0;if(b){let ne=!1;if(te!==null){const Le=te.texture.format;ne=x.has(Le)}if(ne){const Le=te.texture.type,Oe=S.has(Le),Re=We.getClearColor(),Ue=We.getClearAlpha(),Qe=Re.r,tt=Re.g,dt=Re.b;Oe?(C[0]=Qe,C[1]=tt,C[2]=dt,C[3]=Ue,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=Qe,D[1]=tt,D[2]=dt,D[3]=Ue,V.clearBufferiv(V.COLOR,0,D))}else se|=V.COLOR_BUFFER_BIT}X&&(se|=V.DEPTH_BUFFER_BIT),de&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),We.dispose(),et.dispose(),Se.dispose(),g.dispose(),Y.dispose(),Pe.dispose(),Ee.dispose(),Ie.dispose(),we.dispose(),me.dispose(),me.removeEventListener("sessionstart",ar),me.removeEventListener("sessionend",Or),Xn.stop()};function je(b){b.preventDefault(),Im("WebGLRenderer: Context Lost."),Q=!0}function st(){Im("WebGLRenderer: Context Restored."),Q=!1;const b=R.autoReset,X=$e.enabled,de=$e.autoUpdate,se=$e.needsUpdate,ne=$e.type;Me(),R.autoReset=b,$e.enabled=X,$e.autoUpdate=de,$e.needsUpdate=se,$e.type=ne}function Dt(b){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Et(b){const X=b.target;X.removeEventListener("dispose",Et),jn(X)}function jn(b){yn(b),g.remove(b)}function yn(b){const X=g.get(b).programs;X!==void 0&&(X.forEach(function(de){we.releaseProgram(de)}),b.isShaderMaterial&&we.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,de,se,ne,Le){X===null&&(X=At);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Re=po(b,X,de,se,ne);Be.setMaterial(se,Oe);let Ue=de.index,Qe=1;if(se.wireframe===!0){if(Ue=le.getWireframeAttribute(de),Ue===void 0)return;Qe=2}const tt=de.drawRange,dt=de.attributes.position;let Je=tt.start*Qe,Lt=(tt.start+tt.count)*Qe;Le!==null&&(Je=Math.max(Je,Le.start*Qe),Lt=Math.min(Lt,(Le.start+Le.count)*Qe)),Ue!==null?(Je=Math.max(Je,0),Lt=Math.min(Lt,Ue.count)):dt!=null&&(Je=Math.max(Je,0),Lt=Math.min(Lt,dt.count));const Ot=Lt-Je;if(Ot<0||Ot===1/0)return;Ee.setup(ne,se,Re,de,Ue);let Ft,Mt=ut;if(Ue!==null&&(Ft=pe.get(Ue),Mt=G,Mt.setIndex(Ft)),ne.isMesh)se.wireframe===!0?(Be.setLineWidth(se.wireframeLinewidth*It()),Mt.setMode(V.LINES)):Mt.setMode(V.TRIANGLES);else if(ne.isLine){let Yt=se.linewidth;Yt===void 0&&(Yt=1),Be.setLineWidth(Yt*It()),ne.isLineSegments?Mt.setMode(V.LINES):ne.isLineLoop?Mt.setMode(V.LINE_LOOP):Mt.setMode(V.LINE_STRIP)}else ne.isPoints?Mt.setMode(V.POINTS):ne.isSprite&&Mt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)ic("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Yt=ne._multiDrawStarts,qe=ne._multiDrawCounts,Sn=ne._multiDrawCount,xt=Ue?pe.get(Ue).bytesPerElement:1,An=g.get(se).currentProgram.getUniforms();for(let bn=0;bn<Sn;bn++)An.setValue(V,"_gl_DrawID",bn),Mt.render(Yt[bn]/xt,qe[bn])}else if(ne.isInstancedMesh)Mt.renderInstances(Je,Ot,ne.count);else if(de.isInstancedBufferGeometry){const Yt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,qe=Math.min(de.instanceCount,Yt);Mt.renderInstances(Je,Ot,qe)}else Mt.render(Je,Ot)};function ds(b,X,de){b.transparent===!0&&b.side===Qi&&b.forceSinglePass===!1?(b.side=Un,b.needsUpdate=!0,Br(b,X,de),b.side=Ur,b.needsUpdate=!0,Br(b,X,de),b.side=Qi):Br(b,X,de)}this.compile=function(b,X,de=null){de===null&&(de=b),B=Se.get(de),B.init(X),z.push(B),de.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(B.pushLight(ne),ne.castShadow&&B.pushShadow(ne))}),b!==de&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(B.pushLight(ne),ne.castShadow&&B.pushShadow(ne))}),B.setupLights();const se=new Set;return b.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){const Re=Le[Oe];ds(Re,de,ne),se.add(Re)}else ds(Le,de,ne),se.add(Le)}),B=z.pop(),se},this.compileAsync=function(b,X,de=null){const se=this.compile(b,X,de);return new Promise(ne=>{function Le(){if(se.forEach(function(Oe){g.get(Oe).currentProgram.isReady()&&se.delete(Oe)}),se.size===0){ne(b);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Oi=null;function pc(b){Oi&&Oi(b)}function ar(){Xn.stop()}function Or(){Xn.start()}const Xn=new w0;Xn.setAnimationLoop(pc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(b){Oi=b,me.setAnimationLoop(b),b===null?Xn.stop():Xn.start()},me.addEventListener("sessionstart",ar),me.addEventListener("sessionend",Or),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Q===!0)return;const de=me.enabled===!0&&me.isPresenting===!0,se=T!==null&&(te===null||de)&&T.begin(L,te);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(X),X=me.getCamera()),b.isScene===!0&&b.onBeforeRender(L,b,X,te),B=Se.get(b,z.length),B.init(X),z.push(B),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(Gt,Di,X.reversedDepth),nt=this.localClippingEnabled,He=Ae.init(this.clippingPlanes,nt),P=et.get(b,k.length),P.init(),k.push(P),me.enabled===!0&&me.isPresenting===!0){const Oe=L.xr.getDepthSensingMesh();Oe!==null&&kr(Oe,X,-1/0,L.sortObjects)}kr(b,X,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(Ge,Ke),ct=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ct&&We.addToRenderList(P,b),this.info.render.frame++,He===!0&&Ae.beginShadows();const ne=B.state.shadowsArray;if($e.render(ne,b,X),He===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&T.hasRenderPass())===!1){const Oe=P.opaque,Re=P.transmissive;if(B.setupLights(),X.isArrayCamera){const Ue=X.cameras;if(Re.length>0)for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe];fo(Oe,Re,b,dt)}ct&&We.render(b);for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe];uo(P,b,dt,dt.viewport)}}else Re.length>0&&fo(Oe,Re,b,X),ct&&We.render(b),uo(P,b,X)}te!==null&&q===0&&(I.updateMultisampleRenderTarget(te),I.updateRenderTargetMipmap(te)),se&&T.end(L),b.isScene===!0&&b.onAfterRender(L,b,X),Ee.resetDefaultState(),re=-1,J=null,z.pop(),z.length>0?(B=z[z.length-1],He===!0&&Ae.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,k.pop(),k.length>0?P=k[k.length-1]:P=null};function kr(b,X,de,se){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)de=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)B.pushLight(b),b.castShadow&&B.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){se&&yt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Gt);const Oe=Pe.update(b),Re=b.material;Re.visible&&P.push(b,Oe,Re,de,yt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const Oe=Pe.update(b),Re=b.material;if(se&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),yt.copy(b.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),yt.copy(Oe.boundingSphere.center)),yt.applyMatrix4(b.matrixWorld).applyMatrix4(Gt)),Array.isArray(Re)){const Ue=Oe.groups;for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe],Je=Re[dt.materialIndex];Je&&Je.visible&&P.push(b,Oe,Je,de,yt.z,dt)}}else Re.visible&&P.push(b,Oe,Re,de,yt.z,null)}}const Le=b.children;for(let Oe=0,Re=Le.length;Oe<Re;Oe++)kr(Le[Oe],X,de,se)}function uo(b,X,de,se){const{opaque:ne,transmissive:Le,transparent:Oe}=b;B.setupLightsView(de),He===!0&&Ae.setGlobalState(L.clippingPlanes,de),se&&Be.viewport(K.copy(se)),ne.length>0&&hs(ne,X,de),Le.length>0&&hs(Le,X,de),Oe.length>0&&hs(Oe,X,de),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function fo(b,X,de,se){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[se.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[se.id]=new xi(1,1,{generateMipmaps:!0,type:Je?Ui:ni,minFilter:ls,samples:Math.max(4,_t.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=B.state.transmissionRenderTarget[se.id],Oe=se.viewport||K;Le.setSize(Oe.z*L.transmissionResolutionScale,Oe.w*L.transmissionResolutionScale);const Re=L.getRenderTarget(),Ue=L.getActiveCubeFace(),Qe=L.getActiveMipmapLevel();L.setRenderTarget(Le),L.getClearColor(ue),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),ct&&We.render(de);const tt=L.toneMapping;L.toneMapping=Ni;const dt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),B.setupLightsView(se),He===!0&&Ae.setGlobalState(L.clippingPlanes,se),hs(b,de,se),I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Lt=0,Ot=X.length;Lt<Ot;Lt++){const Ft=X[Lt],{object:Mt,geometry:Yt,material:qe,group:Sn}=Ft;if(qe.side===Qi&&Mt.layers.test(se.layers)){const xt=qe.side;qe.side=Un,qe.needsUpdate=!0,wi(Mt,de,se,Yt,qe,Sn),qe.side=xt,qe.needsUpdate=!0,Je=!0}}Je===!0&&(I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le))}L.setRenderTarget(Re,Ue,Qe),L.setClearColor(ue,he),dt!==void 0&&(se.viewport=dt),L.toneMapping=tt}function hs(b,X,de){const se=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const Oe=b[ne],{object:Re,geometry:Ue,group:Qe}=Oe;let tt=Oe.material;tt.allowOverride===!0&&se!==null&&(tt=se),Re.layers.test(de.layers)&&wi(Re,X,de,Ue,tt,Qe)}}function wi(b,X,de,se,ne,Le){b.onBeforeRender(L,X,de,se,ne,Le),b.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(L,X,de,se,b,Le),ne.transparent===!0&&ne.side===Qi&&ne.forceSinglePass===!1?(ne.side=Un,ne.needsUpdate=!0,L.renderBufferDirect(de,X,se,ne,b,Le),ne.side=Ur,ne.needsUpdate=!0,L.renderBufferDirect(de,X,se,ne,b,Le),ne.side=Qi):L.renderBufferDirect(de,X,se,ne,b,Le),b.onAfterRender(L,X,de,se,ne,Le)}function Br(b,X,de){X.isScene!==!0&&(X=At);const se=g.get(b),ne=B.state.lights,Le=B.state.shadowsArray,Oe=ne.state.version,Re=we.getParameters(b,ne.state,Le,X,de),Ue=we.getProgramCacheKey(Re);let Qe=se.programs;se.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,se.fog=X.fog;const tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;se.envMap=Y.get(b.envMap||se.environment,tt),se.envMapRotation=se.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Qe===void 0&&(b.addEventListener("dispose",Et),Qe=new Map,se.programs=Qe);let dt=Qe.get(Ue);if(dt!==void 0){if(se.currentProgram===dt&&se.lightsStateVersion===Oe)return ho(b,Re),dt}else Re.uniforms=we.getUniforms(b),b.onBeforeCompile(Re,L),dt=we.acquireProgram(Re,Ue),Qe.set(Ue,dt),se.uniforms=Re.uniforms;const Je=se.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=Ae.uniform),ho(b,Re),se.needsLights=go(b),se.lightsStateVersion=Oe,se.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),se.currentProgram=dt,se.uniformsList=null,dt}function oa(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Ql.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function ho(b,X){const de=g.get(b);de.outputColorSpace=X.outputColorSpace,de.batching=X.batching,de.batchingColor=X.batchingColor,de.instancing=X.instancing,de.instancingColor=X.instancingColor,de.instancingMorph=X.instancingMorph,de.skinning=X.skinning,de.morphTargets=X.morphTargets,de.morphNormals=X.morphNormals,de.morphColors=X.morphColors,de.morphTargetsCount=X.morphTargetsCount,de.numClippingPlanes=X.numClippingPlanes,de.numIntersection=X.numClipIntersection,de.vertexAlphas=X.vertexAlphas,de.vertexTangents=X.vertexTangents,de.toneMapping=X.toneMapping}function po(b,X,de,se,ne){X.isScene!==!0&&(X=At),I.resetTextureUnits();const Le=X.fog,Oe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?X.environment:null,Re=te===null?L.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ta,Ue=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Qe=Y.get(se.envMap||Oe,Ue),tt=se.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,dt=!!de.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Je=!!de.morphAttributes.position,Lt=!!de.morphAttributes.normal,Ot=!!de.morphAttributes.color;let Ft=Ni;se.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ft=L.toneMapping);const Mt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Yt=Mt!==void 0?Mt.length:0,qe=g.get(se),Sn=B.state.lights;if(He===!0&&(nt===!0||b!==J)){const qt=b===J&&se.id===re;Ae.setState(se,b,qt)}let xt=!1;se.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Sn.state.version||qe.outputColorSpace!==Re||ne.isBatchedMesh&&qe.batching===!1||!ne.isBatchedMesh&&qe.batching===!0||ne.isBatchedMesh&&qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&qe.instancing===!1||!ne.isInstancedMesh&&qe.instancing===!0||ne.isSkinnedMesh&&qe.skinning===!1||!ne.isSkinnedMesh&&qe.skinning===!0||ne.isInstancedMesh&&qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&qe.instancingMorph===!1&&ne.morphTexture!==null||qe.envMap!==Qe||se.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ae.numPlanes||qe.numIntersection!==Ae.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==dt||qe.morphTargets!==Je||qe.morphNormals!==Lt||qe.morphColors!==Ot||qe.toneMapping!==Ft||qe.morphTargetsCount!==Yt)&&(xt=!0):(xt=!0,qe.__version=se.version);let An=qe.currentProgram;xt===!0&&(An=Br(se,X,ne));let bn=!1,On=!1,or=!1;const Rt=An.getUniforms(),at=qe.uniforms;if(Be.useProgram(An.program)&&(bn=!0,On=!0,or=!0),se.id!==re&&(re=se.id,On=!0),bn||J!==b){Be.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",b.projectionMatrix),Rt.setValue(V,"viewMatrix",b.matrixWorldInverse);const $n=Rt.map.cameraPosition;$n!==void 0&&$n.setValue(V,pt.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),J!==b&&(J=b,On=!0,or=!0)}if(qe.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",Sn.state.directionalShadowMap,I),Sn.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",Sn.state.spotShadowMap,I),Sn.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",Sn.state.pointShadowMap,I)),ne.isSkinnedMesh){Rt.setOptional(V,ne,"bindMatrix"),Rt.setOptional(V,ne,"bindMatrixInverse");const qt=ne.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Rt.setValue(V,"boneTexture",qt.boneTexture,I))}ne.isBatchedMesh&&(Rt.setOptional(V,ne,"batchingTexture"),Rt.setValue(V,"batchingTexture",ne._matricesTexture,I),Rt.setOptional(V,ne,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",ne._indirectTexture,I),Rt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",ne._colorsTexture,I));const ai=de.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ne.update(ne,de,An),(On||qe.receiveShadow!==ne.receiveShadow)&&(qe.receiveShadow=ne.receiveShadow,Rt.setValue(V,"receiveShadow",ne.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=NT()),On&&(Rt.setValue(V,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&mo(at,or),Le&&se.fog===!0&&ze.refreshFogUniforms(at,Le),ze.refreshMaterialUniforms(at,se,Ce,Z,B.state.transmissionRenderTarget[b.id]),Ql.upload(V,oa(qe),at,I)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ql.upload(V,oa(qe),at,I),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Rt.setValue(V,"center",ne.center),Rt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Rt.setValue(V,"normalMatrix",ne.normalMatrix),Rt.setValue(V,"modelMatrix",ne.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const qt=se.uniformsGroups;for(let $n=0,ki=qt.length;$n<ki;$n++){const la=qt[$n];Ie.update(la,An),Ie.bind(la,An)}}return An}function mo(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function go(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(b,X,de){const se=g.get(b);se.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),g.get(b.texture).__webglTexture=X,g.get(b.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:de,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const de=g.get(b);de.__webglFramebuffer=X,de.__useDefaultFramebuffer=X===void 0};const vo=V.createFramebuffer();this.setRenderTarget=function(b,X=0,de=0){te=b,F=X,q=de;let se=null,ne=!1,Le=!1;if(b){const Re=g.get(b);if(Re.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(V.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(b.viewport),j.copy(b.scissor),$=b.scissorTest,Be.viewport(K),Be.scissor(j),Be.setScissorTest($),re=-1;return}else if(Re.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(Re.__hasExternalTextures)I.rebindTextures(b,g.get(b.texture).__webglTexture,g.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const tt=b.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&g.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Qe=g.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?se=Qe[X][de]:se=Qe[X],ne=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?se=g.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?se=Qe[de]:se=Qe,K.copy(b.viewport),j.copy(b.scissor),$=b.scissorTest}else K.copy(oe).multiplyScalar(Ce).floor(),j.copy(ve).multiplyScalar(Ce).floor(),$=ge;if(de!==0&&(se=vo),Be.bindFramebuffer(V.FRAMEBUFFER,se)&&Be.drawBuffers(b,se),Be.viewport(K),Be.scissor(j),Be.setScissorTest($),ne){const Re=g.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,de)}else if(Le){const Re=X;for(let Ue=0;Ue<b.textures.length;Ue++){const Qe=g.get(b.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,de,Re)}}else if(b!==null&&de!==0){const Re=g.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,de)}re=-1},this.readRenderTargetPixels=function(b,X,de,se,ne,Le,Oe,Re=0){if(!(b&&b.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Qe=b.textures[Re],tt=Qe.format,dt=Qe.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!_t.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-se&&de>=0&&de<=b.height-ne&&V.readPixels(X,de,se,ne,be.convert(tt),be.convert(dt),Le)}finally{const Qe=te!==null?g.get(te).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(b,X,de,se,ne,Le,Oe,Re=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue)if(X>=0&&X<=b.width-se&&de>=0&&de<=b.height-ne){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);const Qe=b.textures[Re],tt=Qe.format,dt=Qe.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!_t.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(X,de,se,ne,be.convert(tt),be.convert(dt),0);const Lt=te!==null?g.get(te).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Lt);const Ot=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await rS(V,Ot,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(Je),V.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,de=0){const se=Math.pow(2,-de),ne=Math.floor(b.image.width*se),Le=Math.floor(b.image.height*se),Oe=X!==null?X.x:0,Re=X!==null?X.y:0;I.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,de,0,0,Oe,Re,ne,Le),Be.unbindTexture()};const mc=V.createFramebuffer(),gc=V.createFramebuffer();this.copyTextureToTexture=function(b,X,de=null,se=null,ne=0,Le=0){let Oe,Re,Ue,Qe,tt,dt,Je,Lt,Ot;const Ft=b.isCompressedTexture?b.mipmaps[Le]:b.image;if(de!==null)Oe=de.max.x-de.min.x,Re=de.max.y-de.min.y,Ue=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,tt=de.min.y,dt=de.isBox3?de.min.z:0;else{const at=Math.pow(2,-ne);Oe=Math.floor(Ft.width*at),Re=Math.floor(Ft.height*at),b.isDataArrayTexture?Ue=Ft.depth:b.isData3DTexture?Ue=Math.floor(Ft.depth*at):Ue=1,Qe=0,tt=0,dt=0}se!==null?(Je=se.x,Lt=se.y,Ot=se.z):(Je=0,Lt=0,Ot=0);const Mt=be.convert(X.format),Yt=be.convert(X.type);let qe;X.isData3DTexture?(I.setTexture3D(X,0),qe=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),qe=V.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Sn=V.getParameter(V.UNPACK_ROW_LENGTH),xt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),An=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),On=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const or=b.isDataArrayTexture||b.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const at=g.get(b),ai=g.get(X),qt=g.get(at.__renderTarget),$n=g.get(ai.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,qt.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let ki=0;ki<Ue;ki++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(b).__webglTexture,ne,dt+ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(X).__webglTexture,Le,Ot+ki)),V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||b.isRenderTargetTexture||g.has(b)){const at=g.get(b),ai=g.get(X);Be.bindFramebuffer(V.READ_FRAMEBUFFER,mc),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,gc);for(let qt=0;qt<Ue;qt++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.__webglTexture,ne,dt+qt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,at.__webglTexture,ne),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,Le,Ot+qt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,Le),ne!==0?V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(qe,Le,Je,Lt,Ot+qt,Qe,tt,Oe,Re):V.copyTexSubImage2D(qe,Le,Je,Lt,Qe,tt,Oe,Re);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(qe,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,Yt,Ft.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(qe,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,Ft.data):V.texSubImage3D(qe,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,Yt,Ft):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,Yt,Ft.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Ft.width,Ft.height,Mt,Ft.data):V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,Yt,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,Sn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,An),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,On),Le===0&&X.generateMipmaps&&V.generateMipmap(qe),Be.unbindTexture()},this.initRenderTarget=function(b){g.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){F=0,q=0,te=null,Be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function UT({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:l=32,dt:u=.014,BFECC:f=!0,resolution:h=.5,isBounce:p=!1,colors:_=["#5227FF","#FF9FFC","#B497CF"],style:y={},className:v="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:A=2.2,takeoverDuration:x=.25,autoResumeDelay:S=1e3,autoRampDuration:C=.6}){const D=ce.useRef(null),P=ce.useRef(null),B=ce.useRef(null),k=ce.useRef(null),z=ce.useRef(null),T=ce.useRef(!0),L=ce.useRef(null);return ce.useEffect(()=>{if(!D.current)return;function Q(R){let g;Array.isArray(R)&&R.length>0?R.length===1?g=[R[0],R[0]]:g=R:g=["#ffffff","#ffffff"];const I=g.length,Y=new Uint8Array(I*4);for(let le=0;le<I;le++){const Pe=new Pt(g[le]);Y[le*4+0]=Math.round(Pe.r*255),Y[le*4+1]=Math.round(Pe.g*255),Y[le*4+2]=Math.round(Pe.b*255),Y[le*4+3]=255}const pe=new _0(Y,I,1,ii);return pe.magFilter=en,pe.minFilter=en,pe.wrapS=Wn,pe.wrapT=Wn,pe.generateMipmaps=!1,pe.needsUpdate=!0,pe}const F=Q(_),q=new $t(0,0,0,0);class te{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new IT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new zS,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const re=new te;class J{constructor(){this.mouseMoved=!1,this.coords=new ft,this.coords_old=new ft,this.diff=new ft,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ft,this.takeoverTo=new ft,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,I){if(!this.container)return!1;const Y=this.container.getBoundingClientRect();return Y.width===0||Y.height===0?!1:g>=Y.left&&g<=Y.right&&I>=Y.top&&I<=Y.bottom}updateHoverState(g,I){return this.isHoverInside=this.isPointInside(g,I),this.isHoverInside}setCoords(g,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const Y=this.container.getBoundingClientRect();if(Y.width===0||Y.height===0)return;const pe=(g-Y.left)/Y.width,le=(I-Y.top)/Y.height;this.coords.set(pe*2-1,-(le*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,I){this.coords.set(g,I),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const Y=(g.clientX-I.left)/I.width,pe=(g.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(Y*2-1,-(pe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const K=new J;class j{constructor(g,I,Y){this.mouse=g,this.manager=I,this.enabled=Y.enabled,this.speed=Y.speed,this.resumeDelay=Y.resumeDelay||3e3,this.rampDurationMs=(Y.rampDuration||0)*1e3,this.active=!1,this.current=new ft(0,0),this.target=new ft,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ft,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let Y=(g-this.lastTime)/1e3;this.lastTime=g,Y>.2&&(Y=.016);const pe=this._tmpDir.subVectors(this.target,this.current),le=pe.length();if(le<.01){this.pickNewTarget();return}pe.normalize();let Pe=1;if(this.rampDurationMs>0){const et=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pe=et*et*(3-2*et)}const we=this.speed*Y*Pe,ze=Math.min(we,le);this.current.addScaledVector(pe,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const $=`
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
`,oe=`
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
`;class ge{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new jm,this.camera=new ac,this.uniforms&&(this.material=new Za(this.props.material),this.geometry=new us(2,2),this.plane=new ri(this.geometry,this.material),this.scene.add(this.plane))}update(){re.renderer.setRenderTarget(this.props.output||null),re.renderer.render(this.scene,this.camera),re.renderer.setRenderTarget(null)}}class ke extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:O,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Ei,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new yi(I,3));const Y=new Za({vertexShader:ue,fragmentShader:O,uniforms:this.uniforms});this.line=new PS(g,Y),this.scene.add(this.line)}update({dt:g,isBounce:I,BFECC:Y}){this.uniforms.dt.value=g,this.line.visible=I,this.uniforms.isBFECC.value=Y,super.update()}}class He extends ge{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const I=new us(1,1),Y=new Za({vertexShader:he,fragmentShader:Ge,blending:Of,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ft(0,0)},center:{value:new ft(0,0)},scale:{value:new ft(g.cursor_size,g.cursor_size)}}});this.mouse=new ri(I,Y),this.scene.add(this.mouse)}update(g){const I=K.diff.x/2*g.mouse_force,Y=K.diff.y/2*g.mouse_force,pe=g.cursor_size*g.cellScale.x,le=g.cursor_size*g.cellScale.y,Pe=Math.min(Math.max(K.coords.x,-1+pe+g.cellScale.x*2),1-pe-g.cellScale.x*2),we=Math.min(Math.max(K.coords.y,-1+le+g.cellScale.y*2),1-le-g.cellScale.y*2),ze=this.mouse.material.uniforms;ze.force.value.set(I,Y),ze.center.value.set(Pe,we),ze.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class nt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:ve,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:I,dt:Y}){let pe,le;this.uniforms.v.value=g;for(let Pe=0;Pe<I;Pe++)Pe%2===0?(pe=this.props.output0,le=this.props.output1):(pe=this.props.output1,le=this.props.output0),this.uniforms.velocity_new.value=pe.texture,this.props.output=le,this.uniforms.dt.value=Y,super.update();return le}}class Gt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:Ce,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class pt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:Ke,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let I,Y;for(let pe=0;pe<g;pe++)pe%2===0?(I=this.props.output0,Y=this.props.output1):(I=this.props.output1,Y=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=Y,super.update();return Y}}class yt extends ge{constructor(g){super({material:{vertexShader:$,fragmentShader:oe,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:I}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=I.texture,super.update()}}class At{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ft,this.cellScale=new ft,this.boundarySpace=new ft,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ui:_i}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:en,magFilter:en,wrapS:Wn,wrapT:Wn};for(let Y in this.fbos)this.fbos[Y]=new xi(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new He({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*re.width)),I=Math.max(1,Math.round(this.options.resolution*re.height)),Y=1/g,pe=1/I;this.cellScale.set(Y,pe),this.fboSize.set(g,I)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:I})}}class ct{constructor(){this.init()}init(){this.simulation=new At,this.scene=new jm,this.camera=new ac,this.output=new ri(new us(2,2),new Za({vertexShader:$,fragmentShader:Z,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ft},palette:{value:F},bgColor:{value:q}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){re.renderer.setRenderTarget(null),re.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class It{constructor(g){this.props=g,re.init(g.$wrapper),K.init(g.$wrapper),K.autoIntensity=g.autoIntensity,K.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),K.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new j(K,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():T.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(re.renderer.domElement),this.output=new ct}resize(){re.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),K.update(),re.update(),this.output.update()}loop(){this.running&&(this.render(),k.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,k.current&&(cancelAnimationFrame(k.current),k.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),K.dispose(),re.renderer){const g=re.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),re.renderer.dispose(),re.renderer.forceContextLoss()}}catch{}}}const V=D.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const Ut=new It({$wrapper:V,autoDemo:M,autoSpeed:E,autoIntensity:A,takeoverDuration:x,autoResumeDelay:S,autoRampDuration:C});P.current=Ut,(()=>{if(!P.current)return;const R=P.current.output?.simulation;if(!R)return;const g=R.options.resolution;Object.assign(R.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:f,resolution:h,isBounce:p}),h!==g&&R.resize()})(),Ut.start();const _t=new IntersectionObserver(R=>{const g=R[0],I=g.isIntersecting&&g.intersectionRatio>0;T.current=I,P.current&&(I&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});_t.observe(V),z.current=_t;const Be=new ResizeObserver(()=>{P.current&&(L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Be.observe(V),B.current=Be,()=>{if(k.current&&cancelAnimationFrame(k.current),B.current)try{B.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[f,e,u,p,t,l,o,r,h,s,_,M,E,A,x,S,C]),ce.useEffect(()=>{const Q=P.current;if(!Q)return;const F=Q.output?.simulation;if(!F)return;const q=F.options.resolution;Object.assign(F.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:u,BFECC:f,resolution:h,isBounce:p}),Q.autoDriver&&(Q.autoDriver.enabled=M,Q.autoDriver.speed=E,Q.autoDriver.resumeDelay=S,Q.autoDriver.rampDurationMs=C*1e3,Q.autoDriver.mouse&&(Q.autoDriver.mouse.autoIntensity=A,Q.autoDriver.mouse.takeoverDuration=x)),h!==q&&F.resize()},[r,e,t,s,o,l,u,f,h,p,M,E,A,x,S,C]),N.jsx("div",{ref:D,className:`liquid-ether-container ${v||""}`,style:y})}const Ag=[{id:"home",label:"Home",index:4},{id:"projects",label:"Projects",index:9},{id:"hackathons",label:"Hackathons",index:14},{id:"skills",label:"Skills",index:19},{id:"exploration",label:"Exploration",index:24},{id:"internship",label:"Internship",index:29},{id:"contact",label:"Contact",index:34}],FT=39,OT=()=>{const[r,e]=ce.useState("home"),[t,s]=ce.useState(null);ce.useEffect(()=>{const l=()=>{const u=window.scrollY+window.innerHeight/3;let f="home";for(const h of Ag){const p=document.getElementById(h.id);p&&p.offsetTop<=u&&(f=h.id)}e(f)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const u=document.getElementById(l);u&&u.scrollIntoView({behavior:"smooth"})};return N.jsx("div",{className:"fixed right-0 top-0 h-screen flex flex-col justify-center items-end z-50 pointer-events-none",children:N.jsx("div",{className:"pointer-events-auto flex flex-col justify-center items-end group px-6 py-8",onMouseLeave:()=>s(null),children:Array.from({length:FT}).map((l,u)=>{const f=Ag.find(v=>v.index===u),h=f&&f.id===r;let p=8,_=.3;if(t!==null){const v=Math.abs(t-u),M=8;if(v<M){const E=(Math.cos(v/M*Math.PI)+1)/2;p=8+E*(f?32:20),_=.3+E*.7}f&&v===0&&(p=45)}else h&&(p=26,_=1);return f?N.jsxs("div",{className:"flex items-center justify-end cursor-pointer py-[3px] w-full group/item",onMouseEnter:()=>s(u),onClick:()=>o(f.id),children:[N.jsx("span",{className:`text-[10px] sm:text-xs font-bold tracking-widest text-[#3afeda] mr-4 transition-all duration-300 ease-out whitespace-nowrap translate-x-0 pointer-events-auto
                    ${t!==null||h?"opacity-100":"opacity-50"}
                    ${h?"drop-shadow-[0_0_8px_rgba(58,254,218,0.8)]":""}
                  `,children:f.label.toUpperCase()}),N.jsx("div",{className:"bg-[#3afeda] rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${p}px`,height:h?"3px":"2px",opacity:_,boxShadow:h&&t===null?"0 0 8px rgba(58,254,218,0.8)":"none"}})]},u):N.jsx("div",{className:"flex items-center justify-end py-[3px] w-full",onMouseEnter:()=>s(u),children:N.jsx("div",{className:"bg-cyan-200 rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${p}px`,height:"1px",opacity:_}})},u)})})})},kT=["#5227FF","#FF9FFC","#B497CF"];function BT(){const r=Fr();return ce.useEffect(()=>{if(r.hash){const e=r.hash.replace("#",""),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},[r]),null}function zT(){return N.jsxs(Fx,{children:[N.jsx(BT,{}),N.jsx(OT,{}),N.jsxs("div",{className:"min-h-screen bg-gray-900 text-white overflow-x-hidden relative",children:[N.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:N.jsx(UT,{colors:kT,mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),N.jsxs("div",{className:"relative z-10",children:[N.jsx("section",{id:"home",children:N.jsx(my,{})}),N.jsx("section",{id:"projects",children:N.jsx(gy,{})}),N.jsx("section",{id:"hackathons",children:N.jsx(vy,{})}),N.jsx("section",{id:"skills",children:N.jsx(xy,{})}),N.jsx("section",{id:"exploration",children:N.jsx(yy,{})}),N.jsx("section",{id:"internship",children:N.jsx(Sy,{})}),N.jsx("section",{id:"contact",children:N.jsx(My,{})})]})]})]})}g_.createRoot(document.getElementById("root")).render(N.jsx(ce.StrictMode,{children:N.jsx(zT,{})}));
