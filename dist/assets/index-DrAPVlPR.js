(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Xc={exports:{}},za={},$c={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function o_(){if(cm)return gt;cm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=x&&F[x]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,b={};function y(F,q,Ce){this.props=F,this.context=q,this.refs=b,this.updater=Ce||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(F,q,Ce){this.props=F,this.context=q,this.refs=b,this.updater=Ce||M}var D=C.prototype=new S;D.constructor=C,E(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function T(F,q,Ce){var Ge,Ke={},ae=null,ve=null;if(q!=null)for(Ge in q.ref!==void 0&&(ve=q.ref),q.key!==void 0&&(ae=""+q.key),q)k.call(q,Ge)&&!z.hasOwnProperty(Ge)&&(Ke[Ge]=q[Ge]);var ge=arguments.length-2;if(ge===1)Ke.children=Ce;else if(1<ge){for(var ke=Array(ge),He=0;He<ge;He++)ke[He]=arguments[He+2];Ke.children=ke}if(F&&F.defaultProps)for(Ge in ge=F.defaultProps,ge)Ke[Ge]===void 0&&(Ke[Ge]=ge[Ge]);return{$$typeof:r,type:F,key:ae,ref:ve,props:Ke,_owner:O.current}}function L(F,q){return{$$typeof:r,type:F.type,key:q,ref:F.ref,props:F.props,_owner:F._owner}}function de(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function B(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ce){return q[Ce]})}var ne=/\/+/g;function ee(F,q){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):q.toString(36)}function se(F,q,Ce,Ge,Ke){var ae=typeof F;(ae==="undefined"||ae==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ae){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case r:case e:ve=!0}}if(ve)return ve=F,Ke=Ke(ve),F=Ge===""?"."+ee(ve,0):Ge,P(Ke)?(Ce="",F!=null&&(Ce=F.replace(ne,"$&/")+"/"),se(Ke,q,Ce,"",function(He){return He})):Ke!=null&&(de(Ke)&&(Ke=L(Ke,Ce+(!Ke.key||ve&&ve.key===Ke.key?"":(""+Ke.key).replace(ne,"$&/")+"/")+F)),q.push(Ke)),1;if(ve=0,Ge=Ge===""?".":Ge+":",P(F))for(var ge=0;ge<F.length;ge++){ae=F[ge];var ke=Ge+ee(ae,ge);ve+=se(ae,q,Ce,ke,Ke)}else if(ke=v(F),typeof ke=="function")for(F=ke.call(F),ge=0;!(ae=F.next()).done;)ae=ae.value,ke=Ge+ee(ae,ge++),ve+=se(ae,q,Ce,ke,Ke);else if(ae==="object")throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return ve}function J(F,q,Ce){if(F==null)return F;var Ge=[],Ke=0;return se(F,Ge,"","",function(ae){return q.call(Ce,ae,Ke++)}),Ge}function K(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(Ce){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ce)},function(Ce){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ce)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var j={current:null},Y={transition:null},ce={ReactCurrentDispatcher:j,ReactCurrentBatchConfig:Y,ReactCurrentOwner:O};function pe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:J,forEach:function(F,q,Ce){J(F,function(){q.apply(this,arguments)},Ce)},count:function(F){var q=0;return J(F,function(){q++}),q},toArray:function(F){return J(F,function(q){return q})||[]},only:function(F){if(!de(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=C,gt.StrictMode=s,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,gt.act=pe,gt.cloneElement=function(F,q,Ce){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ge=E({},F.props),Ke=F.key,ae=F.ref,ve=F._owner;if(q!=null){if(q.ref!==void 0&&(ae=q.ref,ve=O.current),q.key!==void 0&&(Ke=""+q.key),F.type&&F.type.defaultProps)var ge=F.type.defaultProps;for(ke in q)k.call(q,ke)&&!z.hasOwnProperty(ke)&&(Ge[ke]=q[ke]===void 0&&ge!==void 0?ge[ke]:q[ke])}var ke=arguments.length-2;if(ke===1)Ge.children=Ce;else if(1<ke){ge=Array(ke);for(var He=0;He<ke;He++)ge[He]=arguments[He+2];Ge.children=ge}return{$$typeof:r,type:F.type,key:Ke,ref:ae,props:Ge,_owner:ve}},gt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=T,gt.createFactory=function(F){var q=T.bind(null,F);return q.type=F,q},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:d,render:F}},gt.isValidElement=de,gt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:K}},gt.memo=function(F,q){return{$$typeof:h,type:F,compare:q===void 0?null:q}},gt.startTransition=function(F){var q=Y.transition;Y.transition={};try{F()}finally{Y.transition=q}},gt.unstable_act=pe,gt.useCallback=function(F,q){return j.current.useCallback(F,q)},gt.useContext=function(F){return j.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return j.current.useDeferredValue(F)},gt.useEffect=function(F,q){return j.current.useEffect(F,q)},gt.useId=function(){return j.current.useId()},gt.useImperativeHandle=function(F,q,Ce){return j.current.useImperativeHandle(F,q,Ce)},gt.useInsertionEffect=function(F,q){return j.current.useInsertionEffect(F,q)},gt.useLayoutEffect=function(F,q){return j.current.useLayoutEffect(F,q)},gt.useMemo=function(F,q){return j.current.useMemo(F,q)},gt.useReducer=function(F,q,Ce){return j.current.useReducer(F,q,Ce)},gt.useRef=function(F){return j.current.useRef(F)},gt.useState=function(F){return j.current.useState(F)},gt.useSyncExternalStore=function(F,q,Ce){return j.current.useSyncExternalStore(F,q,Ce)},gt.useTransition=function(){return j.current.useTransition()},gt.version="18.3.1",gt}var fm;function Rd(){return fm||(fm=1,$c.exports=o_()),$c.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function l_(){if(dm)return za;dm=1;var r=Rd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,h){var _,x={},v=null,M=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(M=p.ref);for(_ in p)s.call(p,_)&&!l.hasOwnProperty(_)&&(x[_]=p[_]);if(d&&d.defaultProps)for(_ in p=d.defaultProps,p)x[_]===void 0&&(x[_]=p[_]);return{$$typeof:e,type:d,key:v,ref:M,props:x,_owner:o.current}}return za.Fragment=t,za.jsx=c,za.jsxs=c,za}var hm;function u_(){return hm||(hm=1,Xc.exports=l_()),Xc.exports}var N=u_(),le=Rd(),_l={},qc={exports:{}},Nn={},Yc={exports:{}},Kc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function c_(){return pm||(pm=1,function(r){function e(Y,ce){var pe=Y.length;Y.push(ce);e:for(;0<pe;){var F=pe-1>>>1,q=Y[F];if(0<o(q,ce))Y[F]=ce,Y[pe]=q,pe=F;else break e}}function t(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var ce=Y[0],pe=Y.pop();if(pe!==ce){Y[0]=pe;e:for(var F=0,q=Y.length,Ce=q>>>1;F<Ce;){var Ge=2*(F+1)-1,Ke=Y[Ge],ae=Ge+1,ve=Y[ae];if(0>o(Ke,pe))ae<q&&0>o(ve,Ke)?(Y[F]=ve,Y[ae]=pe,F=ae):(Y[F]=Ke,Y[Ge]=pe,F=Ge);else if(ae<q&&0>o(ve,pe))Y[F]=ve,Y[ae]=pe,F=ae;else break e}}return ce}function o(Y,ce){var pe=Y.sortIndex-ce.sortIndex;return pe!==0?pe:Y.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();r.unstable_now=function(){return c.now()-d}}var p=[],h=[],_=1,x=null,v=3,M=!1,E=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(Y){for(var ce=t(h);ce!==null;){if(ce.callback===null)s(h);else if(ce.startTime<=Y)s(h),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(h)}}function P(Y){if(b=!1,D(Y),!E)if(t(p)!==null)E=!0,K(k);else{var ce=t(h);ce!==null&&j(P,ce.startTime-Y)}}function k(Y,ce){E=!1,b&&(b=!1,S(T),T=-1),M=!0;var pe=v;try{for(D(ce),x=t(p);x!==null&&(!(x.expirationTime>ce)||Y&&!B());){var F=x.callback;if(typeof F=="function"){x.callback=null,v=x.priorityLevel;var q=F(x.expirationTime<=ce);ce=r.unstable_now(),typeof q=="function"?x.callback=q:x===t(p)&&s(p),D(ce)}else s(p);x=t(p)}if(x!==null)var Ce=!0;else{var Ge=t(h);Ge!==null&&j(P,Ge.startTime-ce),Ce=!1}return Ce}finally{x=null,v=pe,M=!1}}var O=!1,z=null,T=-1,L=5,de=-1;function B(){return!(r.unstable_now()-de<L)}function ne(){if(z!==null){var Y=r.unstable_now();de=Y;var ce=!0;try{ce=z(!0,Y)}finally{ce?ee():(O=!1,z=null)}}else O=!1}var ee;if(typeof C=="function")ee=function(){C(ne)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,J=se.port2;se.port1.onmessage=ne,ee=function(){J.postMessage(null)}}else ee=function(){y(ne,0)};function K(Y){z=Y,O||(O=!0,ee())}function j(Y,ce){T=y(function(){Y(r.unstable_now())},ce)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(Y){Y.callback=null},r.unstable_continueExecution=function(){E||M||(E=!0,K(k))},r.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var ce=3;break;default:ce=v}var pe=v;v=ce;try{return Y()}finally{v=pe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(Y,ce){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var pe=v;v=Y;try{return ce()}finally{v=pe}},r.unstable_scheduleCallback=function(Y,ce,pe){var F=r.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?F+pe:F):pe=F,Y){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=pe+q,Y={id:_++,callback:ce,priorityLevel:Y,startTime:pe,expirationTime:q,sortIndex:-1},pe>F?(Y.sortIndex=pe,e(h,Y),t(p)===null&&Y===t(h)&&(b?(S(T),T=-1):b=!0,j(P,pe-F))):(Y.sortIndex=q,e(p,Y),E||M||(E=!0,K(k))),Y},r.unstable_shouldYield=B,r.unstable_wrapCallback=function(Y){var ce=v;return function(){var pe=v;v=ce;try{return Y.apply(this,arguments)}finally{v=pe}}}}(Kc)),Kc}var mm;function f_(){return mm||(mm=1,Yc.exports=c_()),Yc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function d_(){if(gm)return Nn;gm=1;var r=Rd(),e=f_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function v(n){return p.call(x,n)?!0:p.call(_,n)?!1:h.test(n)?x[n]=!0:(_[n]=!0,!1)}function M(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||M(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,u,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,C);y[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,u){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,u)&&(a=null),u||f===null?v(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),O=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),de=Symbol.for("react.provider"),B=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),j=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var pe=Object.assign,F;function q(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ce=!1;function Ge(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){u=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}n()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var f=ue.stack.split(`
`),m=u.stack.split(`
`),w=f.length-1,U=m.length-1;1<=w&&0<=U&&f[w]!==m[U];)U--;for(;1<=w&&0<=U;w--,U--)if(f[w]!==m[U]){if(w!==1||U!==1)do if(w--,U--,0>U||f[w]!==m[U]){var H=`
`+f[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=U);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?q(n):""}function Ke(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case O:return"Portal";case L:return"Profiler";case T:return"StrictMode";case ee:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case de:return(n._context.displayName||"Context")+".Provider";case ne:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case J:return i=n.displayName||null,i!==null?i:ae(n.type)||"Memo";case K:i=n._payload,n=n._init;try{return ae(n(i))}catch{}}return null}function ve(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=ke(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=He(n))}function Gt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=ke(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function yt(n,i){var a=i.checked;return pe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function At(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=ge(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function It(n,i){ut(n,i);var a=ge(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ut(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ut(n,i.type,ge(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function V(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ut(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var vt=Array.isArray;function _t(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+ge(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function Be(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return pe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function R(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(vt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ge(a)}}function g(n,i){var a=ge(i.value),u=ge(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function I(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function $(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?$(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,Pe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},et=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){et.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=Se(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var $e=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if($e[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ct=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Ee=null,Ie=null;function Me(n){if(n=Ta(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=No(i),be(n.stateNode,n.type,i))}}function me(n){Ee?Ie?Ie.push(n):Ie=[n]:Ee=n}function je(){if(Ee){var n=Ee,i=Ie;if(Ie=Ee=null,Me(n),i)for(n=0;n<i.length;n++)Me(i[n])}}function st(n,i){return n(i)}function Dt(){}var Et=!1;function jn(n,i,a){if(Et)return n(i,a);Et=!0;try{return st(n,i,a)}finally{Et=!1,(Ee!==null||Ie!==null)&&(Dt(),je())}}function yn(n,i){var a=n.stateNode;if(a===null)return null;var u=No(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var fs=!1;if(d)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){fs=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{fs=!1}function pu(n,i,a,u,f,m,w,U,H){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(xe){this.onError(xe)}}var ar=!1,Or=null,Xn=!1,kr=null,co={onError:function(n){ar=!0,Or=n}};function fo(n,i,a,u,f,m,w,U,H){ar=!1,Or=null,pu.apply(co,arguments)}function ds(n,i,a,u,f,m,w,U,H){if(fo.apply(this,arguments),ar){if(ar){var ue=Or;ar=!1,Or=null}else throw Error(t(198));Xn||(Xn=!0,kr=ue)}}function wi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Br(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function oa(n){if(wi(n)!==n)throw Error(t(188))}function ho(n){var i=n.alternate;if(!i){if(i=wi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return oa(f),n;if(m===u)return oa(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=m;else{for(var w=!1,U=f.child;U;){if(U===a){w=!0,a=f,u=m;break}if(U===u){w=!0,u=f,a=m;break}U=U.sibling}if(!w){for(U=m.child;U;){if(U===a){w=!0,a=m,u=f;break}if(U===u){w=!0,u=m,a=f;break}U=U.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function po(n){return n=ho(n),n!==null?mo(n):null}function mo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=mo(n);if(i!==null)return i;n=n.sibling}return null}var go=e.unstable_scheduleCallback,vo=e.unstable_cancelCallback,mu=e.unstable_shouldYield,gu=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,Q=e.unstable_NormalPriority,Le=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,Re=null,Ue=null;function Qe(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Re,n,void 0,(n.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:Lt,dt=Math.log,Je=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(dt(n)/Je|0)|0}var Ot=64,Ft=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var U=w&~f;U!==0?u=Mt(U):(m&=w,m!==0&&(u=Mt(m)))}else w=a&~f,w!==0?u=Mt(w):m!==0&&(u=Mt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-tt(i),f=1<<a,u|=n[a],i&=~f;return u}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-tt(m),U=1<<w,H=f[w];H===-1?((U&a)===0||(U&u)!==0)&&(f[w]=Ye(U,i)):H<=i&&(n.expiredLanes|=U),m&=~U}}function xt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Ot;return Ot<<=1,(Ot&4194240)===0&&(Ot=64),n}function bn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function On(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-tt(i),n[i]=a}function or(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-tt(a),m=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~m}}function Rt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-tt(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var at=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Yt,$n,ki,la,Xd,vu=!1,_o=[],lr=null,ur=null,cr=null,ua=new Map,ca=new Map,fr=[],R0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $d(n,i){switch(n){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ca.delete(i.pointerId)}}function fa(n,i,a,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&$n(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function P0(n,i,a,u,f){switch(i){case"focusin":return lr=fa(lr,n,i,a,u,f),!0;case"dragenter":return ur=fa(ur,n,i,a,u,f),!0;case"mouseover":return cr=fa(cr,n,i,a,u,f),!0;case"pointerover":var m=f.pointerId;return ua.set(m,fa(ua.get(m)||null,n,i,a,u,f)),!0;case"gotpointercapture":return m=f.pointerId,ca.set(m,fa(ca.get(m)||null,n,i,a,u,f)),!0}return!1}function qd(n){var i=zr(n.target);if(i!==null){var a=wi(i);if(a!==null){if(i=a.tag,i===13){if(i=Br(a),i!==null){n.blockedOn=i,Xd(n.priority,function(){ki(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=xu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ct=u,a.target.dispatchEvent(u),ct=null}else return i=Ta(a),i!==null&&$n(i),n.blockedOn=a,!1;i.shift()}return!0}function Yd(n,i,a){xo(n)&&a.delete(i)}function L0(){vu=!1,lr!==null&&xo(lr)&&(lr=null),ur!==null&&xo(ur)&&(ur=null),cr!==null&&xo(cr)&&(cr=null),ua.forEach(Yd),ca.forEach(Yd)}function da(n,i){n.blockedOn===i&&(n.blockedOn=null,vu||(vu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,L0)))}function ha(n){function i(f){return da(f,n)}if(0<_o.length){da(_o[0],n);for(var a=1;a<_o.length;a++){var u=_o[a];u.blockedOn===n&&(u.blockedOn=null)}}for(lr!==null&&da(lr,n),ur!==null&&da(ur,n),cr!==null&&da(cr,n),ua.forEach(i),ca.forEach(i),a=0;a<fr.length;a++)u=fr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<fr.length&&(a=fr[0],a.blockedOn===null);)qd(a),a.blockedOn===null&&fr.shift()}var hs=P.ReactCurrentBatchConfig,yo=!0;function D0(n,i,a,u){var f=at,m=hs.transition;hs.transition=null;try{at=1,_u(n,i,a,u)}finally{at=f,hs.transition=m}}function N0(n,i,a,u){var f=at,m=hs.transition;hs.transition=null;try{at=4,_u(n,i,a,u)}finally{at=f,hs.transition=m}}function _u(n,i,a,u){if(yo){var f=xu(n,i,a,u);if(f===null)Fu(n,i,u,So,a),$d(n,u);else if(P0(f,n,i,a,u))u.stopPropagation();else if($d(n,u),i&4&&-1<R0.indexOf(n)){for(;f!==null;){var m=Ta(f);if(m!==null&&Yt(m),m=xu(n,i,a,u),m===null&&Fu(n,i,u,So,a),m===f)break;f=m}f!==null&&u.stopPropagation()}else Fu(n,i,u,null,a)}}var So=null;function xu(n,i,a,u){if(So=null,n=G(u),n=zr(n),n!==null)if(i=wi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Br(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return So=n,null}function Kd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case fe:return 1;case ie:return 4;case Q:case Le:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var dr=null,yu=null,Mo=null;function Zd(){if(Mo)return Mo;var n,i=yu,a=i.length,u,f="value"in dr?dr.value:dr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===f[m-u];u++);return Mo=f.slice(n,1<u?1-u:void 0)}function Eo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Qd(){return!1}function kn(n){function i(a,u,f,m,w){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(a=n[U],this[U]=a?a(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wo:Qd,this.isPropagationStopped=Qd,this}return pe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Su=kn(ps),pa=pe({},ps,{view:0,detail:0}),I0=kn(pa),Mu,Eu,ma,To=pe({},pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Tu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ma&&(ma&&n.type==="mousemove"?(Mu=n.screenX-ma.screenX,Eu=n.screenY-ma.screenY):Eu=Mu=0,ma=n),Mu)},movementY:function(n){return"movementY"in n?n.movementY:Eu}}),Jd=kn(To),U0=pe({},To,{dataTransfer:0}),F0=kn(U0),O0=pe({},pa,{relatedTarget:0}),wu=kn(O0),k0=pe({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),B0=kn(k0),z0=pe({},ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),V0=kn(z0),H0=pe({},ps,{data:0}),eh=kn(H0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j0[n])?!!i[n]:!1}function Tu(){return X0}var $0=pe({},pa,{key:function(n){if(n.key){var i=G0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Eo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Tu,charCode:function(n){return n.type==="keypress"?Eo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Eo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q0=kn($0),Y0=pe({},To,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),th=kn(Y0),K0=pe({},pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Tu}),Z0=kn(K0),Q0=pe({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=kn(Q0),ev=pe({},To,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=kn(ev),nv=[9,13,27,32],Au=d&&"CompositionEvent"in window,ga=null;d&&"documentMode"in document&&(ga=document.documentMode);var iv=d&&"TextEvent"in window&&!ga,nh=d&&(!Au||ga&&8<ga&&11>=ga),ih=" ",rh=!1;function sh(n,i){switch(n){case"keyup":return nv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ah(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ms=!1;function rv(n,i){switch(n){case"compositionend":return ah(i);case"keypress":return i.which!==32?null:(rh=!0,ih);case"textInput":return n=i.data,n===ih&&rh?null:n;default:return null}}function sv(n,i){if(ms)return n==="compositionend"||!Au&&sh(n,i)?(n=Zd(),Mo=yu=dr=null,ms=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nh&&i.locale!=="ko"?null:i.data;default:return null}}var av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!av[n.type]:i==="textarea"}function lh(n,i,a,u){me(u),i=Po(i,"onChange"),0<i.length&&(a=new Su("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var va=null,_a=null;function ov(n){Ah(n,0)}function Ao(n){var i=ys(n);if(Gt(i))return n}function lv(n,i){if(n==="change")return i}var uh=!1;if(d){var bu;if(d){var Cu="oninput"in document;if(!Cu){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),Cu=typeof ch.oninput=="function"}bu=Cu}else bu=!1;uh=bu&&(!document.documentMode||9<document.documentMode)}function fh(){va&&(va.detachEvent("onpropertychange",dh),_a=va=null)}function dh(n){if(n.propertyName==="value"&&Ao(_a)){var i=[];lh(i,_a,n,G(n)),jn(ov,i)}}function uv(n,i,a){n==="focusin"?(fh(),va=i,_a=a,va.attachEvent("onpropertychange",dh)):n==="focusout"&&fh()}function cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(_a)}function fv(n,i){if(n==="click")return Ao(i)}function dv(n,i){if(n==="input"||n==="change")return Ao(i)}function hv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:hv;function xa(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!p.call(i,f)||!oi(n[f],i[f]))return!1}return!0}function hh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ph(n,i){var a=hh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=hh(a)}}function mh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?mh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function Ru(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function pv(n){var i=gh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&mh(a.ownerDocument.documentElement,a)){if(u!==null&&Ru(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(u.start,f);u=u.end===void 0?m:Math.min(u.end,f),!n.extend&&m>u&&(f=u,u=m,m=f),f=ph(a,m);var w=ph(a,u);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mv=d&&"documentMode"in document&&11>=document.documentMode,gs=null,Pu=null,ya=null,Lu=!1;function vh(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||gs==null||gs!==pt(u)||(u=gs,"selectionStart"in u&&Ru(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ya&&xa(ya,u)||(ya=u,u=Po(Pu,"onSelect"),0<u.length&&(i=new Su("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=gs)))}function bo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var vs={animationend:bo("Animation","AnimationEnd"),animationiteration:bo("Animation","AnimationIteration"),animationstart:bo("Animation","AnimationStart"),transitionend:bo("Transition","TransitionEnd")},Du={},_h={};d&&(_h=document.createElement("div").style,"AnimationEvent"in window||(delete vs.animationend.animation,delete vs.animationiteration.animation,delete vs.animationstart.animation),"TransitionEvent"in window||delete vs.transitionend.transition);function Co(n){if(Du[n])return Du[n];if(!vs[n])return n;var i=vs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in _h)return Du[n]=i[a];return n}var xh=Co("animationend"),yh=Co("animationiteration"),Sh=Co("animationstart"),Mh=Co("transitionend"),Eh=new Map,wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(n,i){Eh.set(n,i),l(i,[n])}for(var Nu=0;Nu<wh.length;Nu++){var Iu=wh[Nu],gv=Iu.toLowerCase(),vv=Iu[0].toUpperCase()+Iu.slice(1);hr(gv,"on"+vv)}hr(xh,"onAnimationEnd"),hr(yh,"onAnimationIteration"),hr(Sh,"onAnimationStart"),hr("dblclick","onDoubleClick"),hr("focusin","onFocus"),hr("focusout","onBlur"),hr(Mh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function Th(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ds(u,i,void 0,n),n.currentTarget=null}function Ah(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var U=u[w],H=U.instance,ue=U.currentTarget;if(U=U.listener,H!==m&&f.isPropagationStopped())break e;Th(f,U,ue),m=H}else for(w=0;w<u.length;w++){if(U=u[w],H=U.instance,ue=U.currentTarget,U=U.listener,H!==m&&f.isPropagationStopped())break e;Th(f,U,ue),m=H}}}if(Xn)throw n=kr,Xn=!1,kr=null,n}function Bt(n,i){var a=i[Hu];a===void 0&&(a=i[Hu]=new Set);var u=n+"__bubble";a.has(u)||(bh(i,n,2,!1),a.add(u))}function Uu(n,i,a){var u=0;i&&(u|=4),bh(a,n,u,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ma(n){if(!n[Ro]){n[Ro]=!0,s.forEach(function(a){a!=="selectionchange"&&(_v.has(a)||Uu(a,!1,n),Uu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,Uu("selectionchange",!1,i))}}function bh(n,i,a,u){switch(Kd(i)){case 1:var f=D0;break;case 4:f=N0;break;default:f=_u}a=f.bind(null,i,a,n),f=void 0,!fs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Fu(n,i,a,u,f){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var U=u.stateNode.containerInfo;if(U===f||U.nodeType===8&&U.parentNode===f)break;if(w===4)for(w=u.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;w=w.return}for(;U!==null;){if(w=zr(U),w===null)return;if(H=w.tag,H===5||H===6){u=m=w;continue e}U=U.parentNode}}u=u.return}jn(function(){var ue=m,xe=G(a),ye=[];e:{var _e=Eh.get(n);if(_e!==void 0){var Fe=Su,Xe=n;switch(n){case"keypress":if(Eo(a)===0)break e;case"keydown":case"keyup":Fe=q0;break;case"focusin":Xe="focus",Fe=wu;break;case"focusout":Xe="blur",Fe=wu;break;case"beforeblur":case"afterblur":Fe=wu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Z0;break;case xh:case yh:case Sh:Fe=B0;break;case Mh:Fe=J0;break;case"scroll":Fe=I0;break;case"wheel":Fe=tv;break;case"copy":case"cut":case"paste":Fe=V0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=th}var qe=(i&4)!==0,Kt=!qe&&n==="scroll",Z=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var W=ue,te;W!==null;){te=W;var Te=te.stateNode;if(te.tag===5&&Te!==null&&(te=Te,Z!==null&&(Te=yn(W,Z),Te!=null&&qe.push(Ea(W,Te,te)))),Kt)break;W=W.return}0<qe.length&&(_e=new Fe(_e,Xe,null,a,xe),ye.push({event:_e,listeners:qe}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Fe=n==="mouseout"||n==="pointerout",_e&&a!==ct&&(Xe=a.relatedTarget||a.fromElement)&&(zr(Xe)||Xe[Bi]))break e;if((Fe||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Fe?(Xe=a.relatedTarget||a.toElement,Fe=ue,Xe=Xe?zr(Xe):null,Xe!==null&&(Kt=wi(Xe),Xe!==Kt||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Fe=null,Xe=ue),Fe!==Xe)){if(qe=Jd,Te="onMouseLeave",Z="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(qe=th,Te="onPointerLeave",Z="onPointerEnter",W="pointer"),Kt=Fe==null?_e:ys(Fe),te=Xe==null?_e:ys(Xe),_e=new qe(Te,W+"leave",Fe,a,xe),_e.target=Kt,_e.relatedTarget=te,Te=null,zr(xe)===ue&&(qe=new qe(Z,W+"enter",Xe,a,xe),qe.target=te,qe.relatedTarget=Kt,Te=qe),Kt=Te,Fe&&Xe)t:{for(qe=Fe,Z=Xe,W=0,te=qe;te;te=_s(te))W++;for(te=0,Te=Z;Te;Te=_s(Te))te++;for(;0<W-te;)qe=_s(qe),W--;for(;0<te-W;)Z=_s(Z),te--;for(;W--;){if(qe===Z||Z!==null&&qe===Z.alternate)break t;qe=_s(qe),Z=_s(Z)}qe=null}else qe=null;Fe!==null&&Ch(ye,_e,Fe,qe,!1),Xe!==null&&Kt!==null&&Ch(ye,Kt,Xe,qe,!0)}}e:{if(_e=ue?ys(ue):window,Fe=_e.nodeName&&_e.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&_e.type==="file")var Ze=lv;else if(oh(_e))if(uh)Ze=dv;else{Ze=cv;var it=uv}else(Fe=_e.nodeName)&&Fe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ze=fv);if(Ze&&(Ze=Ze(n,ue))){lh(ye,Ze,a,xe);break e}it&&it(n,_e,ue),n==="focusout"&&(it=_e._wrapperState)&&it.controlled&&_e.type==="number"&&Ut(_e,"number",_e.value)}switch(it=ue?ys(ue):window,n){case"focusin":(oh(it)||it.contentEditable==="true")&&(gs=it,Pu=ue,ya=null);break;case"focusout":ya=Pu=gs=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,vh(ye,a,xe);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":vh(ye,a,xe)}var rt;if(Au)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ms?sh(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(nh&&a.locale!=="ko"&&(ms||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ms&&(rt=Zd()):(dr=xe,yu="value"in dr?dr.value:dr.textContent,ms=!0)),it=Po(ue,ot),0<it.length&&(ot=new eh(ot,n,null,a,xe),ye.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=ah(a),rt!==null&&(ot.data=rt)))),(rt=iv?rv(n,a):sv(n,a))&&(ue=Po(ue,"onBeforeInput"),0<ue.length&&(xe=new eh("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:ue}),xe.data=rt))}Ah(ye,i)})}function Ea(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=yn(n,a),m!=null&&u.unshift(Ea(n,m,f)),m=yn(n,i),m!=null&&u.push(Ea(n,m,f))),n=n.return}return u}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ch(n,i,a,u,f){for(var m=i._reactName,w=[];a!==null&&a!==u;){var U=a,H=U.alternate,ue=U.stateNode;if(H!==null&&H===u)break;U.tag===5&&ue!==null&&(U=ue,f?(H=yn(a,m),H!=null&&w.unshift(Ea(a,H,U))):f||(H=yn(a,m),H!=null&&w.push(Ea(a,H,U)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var xv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function Rh(n){return(typeof n=="string"?n:""+n).replace(xv,`
`).replace(yv,"")}function Lo(n,i,a){if(i=Rh(i),Rh(n)!==i&&a)throw Error(t(425))}function Do(){}var Ou=null,ku=null;function Bu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zu=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,Ph=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Ph<"u"?function(n){return Ph.resolve(null).then(n).catch(Ev)}:zu;function Ev(n){setTimeout(function(){throw n})}function Vu(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),ha(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);ha(i)}function pr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Lh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Ti="__reactFiber$"+xs,wa="__reactProps$"+xs,Bi="__reactContainer$"+xs,Hu="__reactEvents$"+xs,wv="__reactListeners$"+xs,Tv="__reactHandles$"+xs;function zr(n){var i=n[Ti];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Bi]||a[Ti]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Lh(n);n!==null;){if(a=n[Ti])return a;n=Lh(n)}return i}n=a,a=n.parentNode}return null}function Ta(n){return n=n[Ti]||n[Bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function No(n){return n[wa]||null}var Gu=[],Ss=-1;function mr(n){return{current:n}}function zt(n){0>Ss||(n.current=Gu[Ss],Gu[Ss]=null,Ss--)}function kt(n,i){Ss++,Gu[Ss]=n.current,n.current=i}var gr={},pn=mr(gr),Cn=mr(!1),Vr=gr;function Ms(n,i){var a=n.type.contextTypes;if(!a)return gr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Rn(n){return n=n.childContextTypes,n!=null}function Io(){zt(Cn),zt(pn)}function Dh(n,i,a){if(pn.current!==gr)throw Error(t(168));kt(pn,i),kt(Cn,a)}function Nh(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ve(n)||"Unknown",f));return pe({},a,u)}function Uo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||gr,Vr=pn.current,kt(pn,n),kt(Cn,Cn.current),!0}function Ih(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Nh(n,i,Vr),u.__reactInternalMemoizedMergedChildContext=n,zt(Cn),zt(pn),kt(pn,n)):zt(Cn),kt(Cn,a)}var zi=null,Fo=!1,Wu=!1;function Uh(n){zi===null?zi=[n]:zi.push(n)}function Av(n){Fo=!0,Uh(n)}function vr(){if(!Wu&&zi!==null){Wu=!0;var n=0,i=at;try{var a=zi;for(at=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}zi=null,Fo=!1}catch(f){throw zi!==null&&(zi=zi.slice(n+1)),go(fe,vr),f}finally{at=i,Wu=!1}}return null}var Es=[],ws=0,Oo=null,ko=0,qn=[],Yn=0,Hr=null,Vi=1,Hi="";function Gr(n,i){Es[ws++]=ko,Es[ws++]=Oo,Oo=n,ko=i}function Fh(n,i,a){qn[Yn++]=Vi,qn[Yn++]=Hi,qn[Yn++]=Hr,Hr=n;var u=Vi;n=Hi;var f=32-tt(u)-1;u&=~(1<<f),a+=1;var m=32-tt(i)+f;if(30<m){var w=f-f%5;m=(u&(1<<w)-1).toString(32),u>>=w,f-=w,Vi=1<<32-tt(i)+f|a<<f|u,Hi=m+n}else Vi=1<<m|a<<f|u,Hi=n}function ju(n){n.return!==null&&(Gr(n,1),Fh(n,1,0))}function Xu(n){for(;n===Oo;)Oo=Es[--ws],Es[ws]=null,ko=Es[--ws],Es[ws]=null;for(;n===Hr;)Hr=qn[--Yn],qn[Yn]=null,Hi=qn[--Yn],qn[Yn]=null,Vi=qn[--Yn],qn[Yn]=null}var Bn=null,zn=null,Ht=!1,li=null;function Oh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function kh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,zn=pr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,zn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Vi,overflow:Hi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Bn=n,zn=null,!0):!1;default:return!1}}function $u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qu(n){if(Ht){var i=zn;if(i){var a=i;if(!kh(n,i)){if($u(n))throw Error(t(418));i=pr(a.nextSibling);var u=Bn;i&&kh(n,i)?Oh(u,a):(n.flags=n.flags&-4097|2,Ht=!1,Bn=n)}}else{if($u(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Bn=n}}}function Bh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Bo(n){if(n!==Bn)return!1;if(!Ht)return Bh(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Bu(n.type,n.memoizedProps)),i&&(i=zn)){if($u(n))throw zh(),Error(t(418));for(;i;)Oh(n,i),i=pr(i.nextSibling)}if(Bh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){zn=pr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}zn=null}}else zn=Bn?pr(n.stateNode.nextSibling):null;return!0}function zh(){for(var n=zn;n;)n=pr(n.nextSibling)}function Ts(){zn=Bn=null,Ht=!1}function Yu(n){li===null?li=[n]:li.push(n)}var bv=P.ReactCurrentBatchConfig;function Aa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var U=f.refs;w===null?delete U[m]:U[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Vh(n){var i=n._init;return i(n._payload)}function Hh(n){function i(Z,W){if(n){var te=Z.deletions;te===null?(Z.deletions=[W],Z.flags|=16):te.push(W)}}function a(Z,W){if(!n)return null;for(;W!==null;)i(Z,W),W=W.sibling;return null}function u(Z,W){for(Z=new Map;W!==null;)W.key!==null?Z.set(W.key,W):Z.set(W.index,W),W=W.sibling;return Z}function f(Z,W){return Z=Tr(Z,W),Z.index=0,Z.sibling=null,Z}function m(Z,W,te){return Z.index=te,n?(te=Z.alternate,te!==null?(te=te.index,te<W?(Z.flags|=2,W):te):(Z.flags|=2,W)):(Z.flags|=1048576,W)}function w(Z){return n&&Z.alternate===null&&(Z.flags|=2),Z}function U(Z,W,te,Te){return W===null||W.tag!==6?(W=zc(te,Z.mode,Te),W.return=Z,W):(W=f(W,te),W.return=Z,W)}function H(Z,W,te,Te){var Ze=te.type;return Ze===z?xe(Z,W,te.props.children,Te,te.key):W!==null&&(W.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Vh(Ze)===W.type)?(Te=f(W,te.props),Te.ref=Aa(Z,W,te),Te.return=Z,Te):(Te=cl(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=Aa(Z,W,te),Te.return=Z,Te)}function ue(Z,W,te,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=Vc(te,Z.mode,Te),W.return=Z,W):(W=f(W,te.children||[]),W.return=Z,W)}function xe(Z,W,te,Te,Ze){return W===null||W.tag!==7?(W=Zr(te,Z.mode,Te,Ze),W.return=Z,W):(W=f(W,te),W.return=Z,W)}function ye(Z,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=zc(""+W,Z.mode,te),W.return=Z,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case k:return te=cl(W.type,W.key,W.props,null,Z.mode,te),te.ref=Aa(Z,null,W),te.return=Z,te;case O:return W=Vc(W,Z.mode,te),W.return=Z,W;case K:var Te=W._init;return ye(Z,Te(W._payload),te)}if(vt(W)||ce(W))return W=Zr(W,Z.mode,te,null),W.return=Z,W;zo(Z,W)}return null}function _e(Z,W,te,Te){var Ze=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return Ze!==null?null:U(Z,W,""+te,Te);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case k:return te.key===Ze?H(Z,W,te,Te):null;case O:return te.key===Ze?ue(Z,W,te,Te):null;case K:return Ze=te._init,_e(Z,W,Ze(te._payload),Te)}if(vt(te)||ce(te))return Ze!==null?null:xe(Z,W,te,Te,null);zo(Z,te)}return null}function Fe(Z,W,te,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Z=Z.get(te)||null,U(W,Z,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return Z=Z.get(Te.key===null?te:Te.key)||null,H(W,Z,Te,Ze);case O:return Z=Z.get(Te.key===null?te:Te.key)||null,ue(W,Z,Te,Ze);case K:var it=Te._init;return Fe(Z,W,te,it(Te._payload),Ze)}if(vt(Te)||ce(Te))return Z=Z.get(te)||null,xe(W,Z,Te,Ze,null);zo(W,Te)}return null}function Xe(Z,W,te,Te){for(var Ze=null,it=null,rt=W,ot=W=0,un=null;rt!==null&&ot<te.length;ot++){rt.index>ot?(un=rt,rt=null):un=rt.sibling;var bt=_e(Z,rt,te[ot],Te);if(bt===null){rt===null&&(rt=un);break}n&&rt&&bt.alternate===null&&i(Z,rt),W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt,rt=un}if(ot===te.length)return a(Z,rt),Ht&&Gr(Z,ot),Ze;if(rt===null){for(;ot<te.length;ot++)rt=ye(Z,te[ot],Te),rt!==null&&(W=m(rt,W,ot),it===null?Ze=rt:it.sibling=rt,it=rt);return Ht&&Gr(Z,ot),Ze}for(rt=u(Z,rt);ot<te.length;ot++)un=Fe(rt,Z,ot,te[ot],Te),un!==null&&(n&&un.alternate!==null&&rt.delete(un.key===null?ot:un.key),W=m(un,W,ot),it===null?Ze=un:it.sibling=un,it=un);return n&&rt.forEach(function(Ar){return i(Z,Ar)}),Ht&&Gr(Z,ot),Ze}function qe(Z,W,te,Te){var Ze=ce(te);if(typeof Ze!="function")throw Error(t(150));if(te=Ze.call(te),te==null)throw Error(t(151));for(var it=Ze=null,rt=W,ot=W=0,un=null,bt=te.next();rt!==null&&!bt.done;ot++,bt=te.next()){rt.index>ot?(un=rt,rt=null):un=rt.sibling;var Ar=_e(Z,rt,bt.value,Te);if(Ar===null){rt===null&&(rt=un);break}n&&rt&&Ar.alternate===null&&i(Z,rt),W=m(Ar,W,ot),it===null?Ze=Ar:it.sibling=Ar,it=Ar,rt=un}if(bt.done)return a(Z,rt),Ht&&Gr(Z,ot),Ze;if(rt===null){for(;!bt.done;ot++,bt=te.next())bt=ye(Z,bt.value,Te),bt!==null&&(W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt);return Ht&&Gr(Z,ot),Ze}for(rt=u(Z,rt);!bt.done;ot++,bt=te.next())bt=Fe(rt,Z,ot,bt.value,Te),bt!==null&&(n&&bt.alternate!==null&&rt.delete(bt.key===null?ot:bt.key),W=m(bt,W,ot),it===null?Ze=bt:it.sibling=bt,it=bt);return n&&rt.forEach(function(a_){return i(Z,a_)}),Ht&&Gr(Z,ot),Ze}function Kt(Z,W,te,Te){if(typeof te=="object"&&te!==null&&te.type===z&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case k:e:{for(var Ze=te.key,it=W;it!==null;){if(it.key===Ze){if(Ze=te.type,Ze===z){if(it.tag===7){a(Z,it.sibling),W=f(it,te.props.children),W.return=Z,Z=W;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===K&&Vh(Ze)===it.type){a(Z,it.sibling),W=f(it,te.props),W.ref=Aa(Z,it,te),W.return=Z,Z=W;break e}a(Z,it);break}else i(Z,it);it=it.sibling}te.type===z?(W=Zr(te.props.children,Z.mode,Te,te.key),W.return=Z,Z=W):(Te=cl(te.type,te.key,te.props,null,Z.mode,Te),Te.ref=Aa(Z,W,te),Te.return=Z,Z=Te)}return w(Z);case O:e:{for(it=te.key;W!==null;){if(W.key===it)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(Z,W.sibling),W=f(W,te.children||[]),W.return=Z,Z=W;break e}else{a(Z,W);break}else i(Z,W);W=W.sibling}W=Vc(te,Z.mode,Te),W.return=Z,Z=W}return w(Z);case K:return it=te._init,Kt(Z,W,it(te._payload),Te)}if(vt(te))return Xe(Z,W,te,Te);if(ce(te))return qe(Z,W,te,Te);zo(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(Z,W.sibling),W=f(W,te),W.return=Z,Z=W):(a(Z,W),W=zc(te,Z.mode,Te),W.return=Z,Z=W),w(Z)):a(Z,W)}return Kt}var As=Hh(!0),Gh=Hh(!1),Vo=mr(null),Ho=null,bs=null,Ku=null;function Zu(){Ku=bs=Ho=null}function Qu(n){var i=Vo.current;zt(Vo),n._currentValue=i}function Ju(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){Ho=n,Ku=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Pn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Ku!==n)if(n={context:n,memoizedValue:i,next:null},bs===null){if(Ho===null)throw Error(t(308));bs=n,Ho.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return i}var Wr=null;function ec(n){Wr===null?Wr=[n]:Wr.push(n)}function Wh(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,ec(i)):(a.next=f.next,f.next=a),i.interleaved=a,Gi(n,u)}function Gi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var _r=!1;function tc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function xr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(wt&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Gi(n,a)}return f=u.interleaved,f===null?(i.next=i,ec(u)):(i.next=f.next,f.next=i),u.interleaved=i,Gi(n,a)}function Go(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rt(n,a)}}function Xh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wo(n,i,a,u){var f=n.updateQueue;_r=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,U=f.shared.pending;if(U!==null){f.shared.pending=null;var H=U,ue=H.next;H.next=null,w===null?m=ue:w.next=ue,w=H;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==w&&(U===null?xe.firstBaseUpdate=ue:U.next=ue,xe.lastBaseUpdate=H))}if(m!==null){var ye=f.baseState;w=0,xe=ue=H=null,U=m;do{var _e=U.lane,Fe=U.eventTime;if((u&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Xe=n,qe=U;switch(_e=i,Fe=a,qe.tag){case 1:if(Xe=qe.payload,typeof Xe=="function"){ye=Xe.call(Fe,ye,_e);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=qe.payload,_e=typeof Xe=="function"?Xe.call(Fe,ye,_e):Xe,_e==null)break e;ye=pe({},ye,_e);break e;case 2:_r=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,_e=f.effects,_e===null?f.effects=[U]:_e.push(U))}else Fe={eventTime:Fe,lane:_e,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ue=xe=Fe,H=ye):xe=xe.next=Fe,w|=_e;if(U=U.next,U===null){if(U=f.shared.pending,U===null)break;_e=U,U=_e.next,_e.next=null,f.lastBaseUpdate=_e,f.shared.pending=null}}while(!0);if(xe===null&&(H=ye),f.baseState=H,f.firstBaseUpdate=ue,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);$r|=w,n.lanes=w,n.memoizedState=ye}}function $h(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var ba={},Ai=mr(ba),Ca=mr(ba),Ra=mr(ba);function jr(n){if(n===ba)throw Error(t(174));return n}function nc(n,i){switch(kt(Ra,i),kt(Ca,n),kt(Ai,ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:he(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=he(i,n)}zt(Ai),kt(Ai,i)}function Rs(){zt(Ai),zt(Ca),zt(Ra)}function qh(n){jr(Ra.current);var i=jr(Ai.current),a=he(i,n.type);i!==a&&(kt(Ca,n),kt(Ai,a))}function ic(n){Ca.current===n&&(zt(Ai),zt(Ca))}var Wt=mr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var rc=[];function sc(){for(var n=0;n<rc.length;n++)rc[n]._workInProgressVersionPrimary=null;rc.length=0}var Xo=P.ReactCurrentDispatcher,ac=P.ReactCurrentBatchConfig,Xr=0,jt=null,tn=null,on=null,$o=!1,Pa=!1,La=0,Cv=0;function mn(){throw Error(t(321))}function oc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function lc(n,i,a,u,f,m){if(Xr=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=n===null||n.memoizedState===null?Dv:Nv,n=a(u,f),Pa){m=0;do{if(Pa=!1,La=0,25<=m)throw Error(t(301));m+=1,on=tn=null,i.updateQueue=null,Xo.current=Iv,n=a(u,f)}while(Pa)}if(Xo.current=Ko,i=tn!==null&&tn.next!==null,Xr=0,on=tn=jt=null,$o=!1,i)throw Error(t(300));return n}function uc(){var n=La!==0;return La=0,n}function bi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?jt.memoizedState=on=n:on=on.next=n,on}function Zn(){if(tn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=on===null?jt.memoizedState:on.next;if(i!==null)on=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},on===null?jt.memoizedState=on=n:on=on.next=n}return on}function Da(n,i){return typeof i=="function"?i(n):i}function cc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=tn,f=u.baseQueue,m=a.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}u.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,u=u.baseState;var U=w=null,H=null,ue=m;do{var xe=ue.lane;if((Xr&xe)===xe)H!==null&&(H=H.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:n(u,ue.action);else{var ye={lane:xe,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};H===null?(U=H=ye,w=u):H=H.next=ye,jt.lanes|=xe,$r|=xe}ue=ue.next}while(ue!==null&&ue!==m);H===null?w=u:H.next=U,oi(u,i.memoizedState)||(Pn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=H,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do m=f.lane,jt.lanes|=m,$r|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function fc(n){var i=Zn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);oi(m,i.memoizedState)||(Pn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Yh(){}function Kh(n,i){var a=jt,u=Zn(),f=i(),m=!oi(u.memoizedState,f);if(m&&(u.memoizedState=f,Pn=!0),u=u.queue,dc(Jh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||on!==null&&on.memoizedState.tag&1){if(a.flags|=2048,Na(9,Qh.bind(null,a,u,f,i),void 0,null),ln===null)throw Error(t(349));(Xr&30)!==0||Zh(a,i,f)}return f}function Zh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Qh(n,i,a,u){i.value=a,i.getSnapshot=u,ep(i)&&tp(n)}function Jh(n,i,a){return a(function(){ep(i)&&tp(n)})}function ep(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function tp(n){var i=Gi(n,1);i!==null&&di(i,n,1,-1)}function np(n){var i=bi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:n},i.queue=n,n=n.dispatch=Lv.bind(null,jt,n),[i.memoizedState,n]}function Na(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function ip(){return Zn().memoizedState}function qo(n,i,a,u){var f=bi();jt.flags|=n,f.memoizedState=Na(1|i,a,void 0,u===void 0?null:u)}function Yo(n,i,a,u){var f=Zn();u=u===void 0?null:u;var m=void 0;if(tn!==null){var w=tn.memoizedState;if(m=w.destroy,u!==null&&oc(u,w.deps)){f.memoizedState=Na(i,a,m,u);return}}jt.flags|=n,f.memoizedState=Na(1|i,a,m,u)}function rp(n,i){return qo(8390656,8,n,i)}function dc(n,i){return Yo(2048,8,n,i)}function sp(n,i){return Yo(4,2,n,i)}function ap(n,i){return Yo(4,4,n,i)}function op(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lp(n,i,a){return a=a!=null?a.concat([n]):null,Yo(4,4,op.bind(null,i,n),a)}function hc(){}function up(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&oc(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=Zn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&oc(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function fp(n,i,a){return(Xr&21)===0?(n.baseState&&(n.baseState=!1,Pn=!0),n.memoizedState=a):(oi(a,i)||(a=An(),jt.lanes|=a,$r|=a,n.baseState=!0),i)}function Rv(n,i){var a=at;at=a!==0&&4>a?a:4,n(!0);var u=ac.transition;ac.transition={};try{n(!1),i()}finally{at=a,ac.transition=u}}function dp(){return Zn().memoizedState}function Pv(n,i,a){var u=Er(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},hp(n))pp(i,a);else if(a=Wh(n,i,a,u),a!==null){var f=En();di(a,n,u,f),mp(a,i,u)}}function Lv(n,i,a){var u=Er(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(hp(n))pp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,U=m(w,a);if(f.hasEagerState=!0,f.eagerState=U,oi(U,w)){var H=i.interleaved;H===null?(f.next=f,ec(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}a=Wh(n,i,f,u),a!==null&&(f=En(),di(a,n,u,f),mp(a,i,u))}}function hp(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function pp(n,i){Pa=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function mp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rt(n,a)}}var Ko={readContext:Kn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},Dv={readContext:Kn,useCallback:function(n,i){return bi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,qo(4194308,4,op.bind(null,i,n),a)},useLayoutEffect:function(n,i){return qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return qo(4,2,n,i)},useMemo:function(n,i){var a=bi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=bi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Pv.bind(null,jt,n),[u.memoizedState,n]},useRef:function(n){var i=bi();return n={current:n},i.memoizedState=n},useState:np,useDebugValue:hc,useDeferredValue:function(n){return bi().memoizedState=n},useTransition:function(){var n=np(!1),i=n[0];return n=Rv.bind(null,n[1]),bi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=jt,f=bi();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),ln===null)throw Error(t(349));(Xr&30)!==0||Zh(u,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,rp(Jh.bind(null,u,m,n),[n]),u.flags|=2048,Na(9,Qh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=bi(),i=ln.identifierPrefix;if(Ht){var a=Hi,u=Vi;a=(u&~(1<<32-tt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Cv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nv={readContext:Kn,useCallback:up,useContext:Kn,useEffect:dc,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:ap,useMemo:cp,useReducer:cc,useRef:ip,useState:function(){return cc(Da)},useDebugValue:hc,useDeferredValue:function(n){var i=Zn();return fp(i,tn.memoizedState,n)},useTransition:function(){var n=cc(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:Kh,useId:dp,unstable_isNewReconciler:!1},Iv={readContext:Kn,useCallback:up,useContext:Kn,useEffect:dc,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:ap,useMemo:cp,useReducer:fc,useRef:ip,useState:function(){return fc(Da)},useDebugValue:hc,useDeferredValue:function(n){var i=Zn();return tn===null?i.memoizedState=n:fp(i,tn.memoizedState,n)},useTransition:function(){var n=fc(Da)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:Kh,useId:dp,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=pe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function pc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:pe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Zo={isMounted:function(n){return(n=n._reactInternals)?wi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=En(),f=Er(n),m=Wi(u,f);m.payload=i,a!=null&&(m.callback=a),i=xr(n,m,f),i!==null&&(di(i,n,f,u),Go(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=En(),f=Er(n),m=Wi(u,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=xr(n,m,f),i!==null&&(di(i,n,f,u),Go(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=En(),u=Er(n),f=Wi(a,u);f.tag=2,i!=null&&(f.callback=i),i=xr(n,f,u),i!==null&&(di(i,n,u,a),Go(i,n,u))}};function gp(n,i,a,u,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!xa(a,u)||!xa(f,m):!0}function vp(n,i,a){var u=!1,f=gr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(f=Rn(i)?Vr:pn.current,u=i.contextTypes,m=(u=u!=null)?Ms(n,f):gr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function _p(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Zo.enqueueReplaceState(i,i.state,null)}function mc(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},tc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Kn(m):(m=Rn(i)?Vr:pn.current,f.context=Ms(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(pc(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Zo.enqueueReplaceState(f,f.state,null),Wo(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ps(n,i){try{var a="",u=i;do a+=Ke(u),u=u.return;while(u);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function gc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function vc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Uv=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,a){a=Wi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){rl||(rl=!0,Dc=u),vc(n,i)},a}function yp(n,i,a){a=Wi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){vc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){vc(n,i),typeof u!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Sp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Uv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=Yv.bind(null,n,i,a),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ep(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Wi(-1,1),i.tag=2,xr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Fv=P.ReactCurrentOwner,Pn=!1;function Mn(n,i,a,u){i.child=n===null?Gh(i,null,a,u):As(i,n.child,a,u)}function wp(n,i,a,u,f){a=a.render;var m=i.ref;return Cs(i,f),u=lc(n,i,a,u,m,f),a=uc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Ht&&a&&ju(i),i.flags|=1,Mn(n,i,u,f),i.child)}function Tp(n,i,a,u,f){if(n===null){var m=a.type;return typeof m=="function"&&!Bc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Ap(n,i,m,u,f)):(n=cl(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:xa,a(w,u)&&n.ref===i.ref)return ji(n,i,f)}return i.flags|=1,n=Tr(m,u),n.ref=i.ref,n.return=i,i.child=n}function Ap(n,i,a,u,f){if(n!==null){var m=n.memoizedProps;if(xa(m,u)&&n.ref===i.ref)if(Pn=!1,i.pendingProps=u=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Pn=!0);else return i.lanes=n.lanes,ji(n,i,f)}return _c(n,i,a,u,f)}function bp(n,i,a){var u=i.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Ds,Vn),Vn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,kt(Ds,Vn),Vn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,kt(Ds,Vn),Vn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,kt(Ds,Vn),Vn|=u;return Mn(n,i,f,a),i.child}function Cp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function _c(n,i,a,u,f){var m=Rn(a)?Vr:pn.current;return m=Ms(i,m),Cs(i,f),a=lc(n,i,a,u,m,f),u=uc(),n!==null&&!Pn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ji(n,i,f)):(Ht&&u&&ju(i),i.flags|=1,Mn(n,i,a,f),i.child)}function Rp(n,i,a,u,f){if(Rn(a)){var m=!0;Uo(i)}else m=!1;if(Cs(i,f),i.stateNode===null)Jo(n,i),vp(i,a,u),mc(i,a,u,f),u=!0;else if(n===null){var w=i.stateNode,U=i.memoizedProps;w.props=U;var H=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=Kn(ue):(ue=Rn(a)?Vr:pn.current,ue=Ms(i,ue));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==u||H!==ue)&&_p(i,w,u,ue),_r=!1;var _e=i.memoizedState;w.state=_e,Wo(i,u,w,f),H=i.memoizedState,U!==u||_e!==H||Cn.current||_r?(typeof xe=="function"&&(pc(i,a,xe,u),H=i.memoizedState),(U=_r||gp(i,a,U,u,_e,H,ue))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=H),w.props=u,w.state=H,w.context=ue,u=U):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,jh(n,i),U=i.memoizedProps,ue=i.type===i.elementType?U:ui(i.type,U),w.props=ue,ye=i.pendingProps,_e=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=Rn(a)?Vr:pn.current,H=Ms(i,H));var Fe=a.getDerivedStateFromProps;(xe=typeof Fe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(U!==ye||_e!==H)&&_p(i,w,u,H),_r=!1,_e=i.memoizedState,w.state=_e,Wo(i,u,w,f);var Xe=i.memoizedState;U!==ye||_e!==Xe||Cn.current||_r?(typeof Fe=="function"&&(pc(i,a,Fe,u),Xe=i.memoizedState),(ue=_r||gp(i,a,ue,u,_e,Xe,H)||!1)?(xe||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Xe,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Xe,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Xe),w.props=u,w.state=Xe,w.context=H,u=ue):(typeof w.componentDidUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),u=!1)}return xc(n,i,a,u,m,f)}function xc(n,i,a,u,f,m){Cp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return f&&Ih(i,a,!1),ji(n,i,m);u=i.stateNode,Fv.current=i;var U=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=As(i,n.child,null,m),i.child=As(i,null,U,m)):Mn(n,i,U,m),i.memoizedState=u.state,f&&Ih(i,a,!0),i.child}function Pp(n){var i=n.stateNode;i.pendingContext?Dh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Dh(n,i.context,!1),nc(n,i.containerInfo)}function Lp(n,i,a,u,f){return Ts(),Yu(f),i.flags|=256,Mn(n,i,a,u),i.child}var yc={dehydrated:null,treeContext:null,retryLane:0};function Sc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dp(n,i,a){var u=i.pendingProps,f=Wt.current,m=!1,w=(i.flags&128)!==0,U;if((U=w)||(U=n!==null&&n.memoizedState===null?!1:(f&2)!==0),U?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),kt(Wt,f&1),n===null)return qu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=fl(w,u,0,null),n=Zr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Sc(a),i.memoizedState=yc,n):Mc(i,w));if(f=n.memoizedState,f!==null&&(U=f.dehydrated,U!==null))return Ov(n,i,w,u,U,f,a);if(m){m=u.fallback,w=i.mode,f=n.child,U=f.sibling;var H={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=H,i.deletions=null):(u=Tr(f,H),u.subtreeFlags=f.subtreeFlags&14680064),U!==null?m=Tr(U,m):(m=Zr(m,w,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?Sc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=yc,u}return m=n.child,n=m.sibling,u=Tr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Mc(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,u){return u!==null&&Yu(u),As(i,n.child,null,a),n=Mc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ov(n,i,a,u,f,m,w){if(a)return i.flags&256?(i.flags&=-257,u=gc(Error(t(422))),Qo(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,f=i.mode,u=fl({mode:"visible",children:u.children},f,0,null),m=Zr(m,f,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&As(i,n.child,null,w),i.child.memoizedState=Sc(w),i.memoizedState=yc,m);if((i.mode&1)===0)return Qo(n,i,w,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var U=u.dgst;return u=U,m=Error(t(419)),u=gc(m,u,void 0),Qo(n,i,w,u)}if(U=(w&n.childLanes)!==0,Pn||U){if(u=ln,u!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Gi(n,f),di(u,n,f,-1))}return kc(),u=gc(Error(t(421))),Qo(n,i,w,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Kv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,zn=pr(f.nextSibling),Bn=i,Ht=!0,li=null,n!==null&&(qn[Yn++]=Vi,qn[Yn++]=Hi,qn[Yn++]=Hr,Vi=n.id,Hi=n.overflow,Hr=i),i=Mc(i,u.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Ju(n.return,i,a)}function Ec(n,i,a,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=f)}function Ip(n,i,a){var u=i.pendingProps,f=u.revealOrder,m=u.tail;if(Mn(n,i,u.children,a),u=Wt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(kt(Wt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Ec(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&jo(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Ec(i,!0,a,null,m);break;case"together":Ec(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ji(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),$r|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Tr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Tr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function kv(n,i,a){switch(i.tag){case 3:Pp(i),Ts();break;case 5:qh(i);break;case 1:Rn(i.type)&&Uo(i);break;case 4:nc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;kt(Vo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(kt(Wt,Wt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Dp(n,i,a):(kt(Wt,Wt.current&1),n=ji(n,i,a),n!==null?n.sibling:null);kt(Wt,Wt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Ip(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),kt(Wt,Wt.current),u)break;return null;case 22:case 23:return i.lanes=0,bp(n,i,a)}return ji(n,i,a)}var Up,wc,Fp,Op;Up=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},wc=function(){},Fp=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,jr(Ai.current);var m=null;switch(a){case"input":f=yt(n,f),u=yt(n,u),m=[];break;case"select":f=pe({},f,{value:void 0}),u=pe({},u,{value:void 0}),m=[];break;case"textarea":f=Be(n,f),u=Be(n,u),m=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Do)}We(a,u);var w;a=null;for(ue in f)if(!u.hasOwnProperty(ue)&&f.hasOwnProperty(ue)&&f[ue]!=null)if(ue==="style"){var U=f[ue];for(w in U)U.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in u){var H=u[ue];if(U=f?.[ue],u.hasOwnProperty(ue)&&H!==U&&(H!=null||U!=null))if(ue==="style")if(U){for(w in U)!U.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&U[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(m||(m=[]),m.push(ue,a)),a=H;else ue==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,U=U?U.__html:void 0,H!=null&&U!==H&&(m=m||[]).push(ue,H)):ue==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(ue,""+H):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(H!=null&&ue==="onScroll"&&Bt("scroll",n),m||U===H||(m=[])):(m=m||[]).push(ue,H))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Op=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ia(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Bv(n,i,a){var u=i.pendingProps;switch(Xu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Rn(i.type)&&Io(),gn(i),null;case 3:return u=i.stateNode,Rs(),zt(Cn),zt(pn),sc(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Bo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,li!==null&&(Uc(li),li=null))),wc(n,i),gn(i),null;case 5:ic(i);var f=jr(Ra.current);if(a=i.type,n!==null&&i.stateNode!=null)Fp(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return gn(i),null}if(n=jr(Ai.current),Bo(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[Ti]=i,u[wa]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",u),Bt("close",u);break;case"iframe":case"object":case"embed":Bt("load",u);break;case"video":case"audio":for(f=0;f<Sa.length;f++)Bt(Sa[f],u);break;case"source":Bt("error",u);break;case"img":case"image":case"link":Bt("error",u),Bt("load",u);break;case"details":Bt("toggle",u);break;case"input":At(u,m),Bt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",u);break;case"textarea":R(u,m),Bt("invalid",u)}We(a,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var U=m[w];w==="children"?typeof U=="string"?u.textContent!==U&&(m.suppressHydrationWarning!==!0&&Lo(u.textContent,U,n),f=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(m.suppressHydrationWarning!==!0&&Lo(u.textContent,U,n),f=["children",""+U]):o.hasOwnProperty(w)&&U!=null&&w==="onScroll"&&Bt("scroll",u)}switch(a){case"input":nt(u),V(u,m,!0);break;case"textarea":nt(u),I(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Do)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=$(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[Ti]=i,n[wa]=u,Up(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,u),a){case"dialog":Bt("cancel",n),Bt("close",n),f=u;break;case"iframe":case"object":case"embed":Bt("load",n),f=u;break;case"video":case"audio":for(f=0;f<Sa.length;f++)Bt(Sa[f],n);f=u;break;case"source":Bt("error",n),f=u;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=u;break;case"details":Bt("toggle",n),f=u;break;case"input":At(n,u),f=yt(n,u),Bt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=pe({},u,{value:void 0}),Bt("invalid",n);break;case"textarea":R(n,u),f=Be(n,u),Bt("invalid",n);break;default:f=u}We(a,f),U=f;for(m in U)if(U.hasOwnProperty(m)){var H=U[m];m==="style"?Ae(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Pe(n,H)):m==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&we(n,H):typeof H=="number"&&we(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?H!=null&&m==="onScroll"&&Bt("scroll",n):H!=null&&D(n,m,H,w))}switch(a){case"input":nt(n),V(n,u,!1);break;case"textarea":nt(n),I(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ge(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?_t(n,!!u.multiple,m,!1):u.defaultValue!=null&&_t(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Do)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ra.current),jr(Ai.current),Bo(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ti]=i,(m=u.nodeValue!==a)&&(n=Bn,n!==null))switch(n.tag){case 3:Lo(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Lo(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ti]=i,i.stateNode=u}return gn(i),null;case 13:if(zt(Wt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&zn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)zh(),Ts(),i.flags|=98560,m=!1;else if(m=Bo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Ti]=i}else Ts(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),m=!1}else li!==null&&(Uc(li),li=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?nn===0&&(nn=3):kc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return Rs(),wc(n,i),n===null&&Ma(i.stateNode.containerInfo),gn(i),null;case 10:return Qu(i.type._context),gn(i),null;case 17:return Rn(i.type)&&Io(),gn(i),null;case 19:if(zt(Wt),m=i.memoizedState,m===null)return gn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Ia(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=jo(n),w!==null){for(i.flags|=128,Ia(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return kt(Wt,Wt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>Ns&&(i.flags|=128,u=!0,Ia(m,!1),i.lanes=4194304)}else{if(!u)if(n=jo(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Ht)return gn(i),null}else 2*A()-m.renderingStartTime>Ns&&a!==1073741824&&(i.flags|=128,u=!0,Ia(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=Wt.current,kt(Wt,u?a&1|2:a&1),i):(gn(i),null);case 22:case 23:return Oc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Vn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function zv(n,i){switch(Xu(i),i.tag){case 1:return Rn(i.type)&&Io(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),zt(Cn),zt(pn),sc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return ic(i),null;case 13:if(zt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return Rs(),null;case 10:return Qu(i.type._context),null;case 22:case 23:return Oc(),null;case 24:return null;default:return null}}var el=!1,vn=!1,Vv=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Ls(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Xt(n,i,u)}else a.current=null}function Tc(n,i,a){try{a()}catch(u){Xt(n,i,u)}}var kp=!1;function Hv(n,i){if(Ou=yo,n=gh(),Ru(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,U=-1,H=-1,ue=0,xe=0,ye=n,_e=null;t:for(;;){for(var Fe;ye!==a||f!==0&&ye.nodeType!==3||(U=w+f),ye!==m||u!==0&&ye.nodeType!==3||(H=w+u),ye.nodeType===3&&(w+=ye.nodeValue.length),(Fe=ye.firstChild)!==null;)_e=ye,ye=Fe;for(;;){if(ye===n)break t;if(_e===a&&++ue===f&&(U=w),_e===m&&++xe===u&&(H=w),(Fe=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Fe}a=U===-1||H===-1?null:{start:U,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(ku={focusedElem:n,selectionRange:a},yo=!1,Ve=i;Ve!==null;)if(i=Ve,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ve=n;else for(;Ve!==null;){i=Ve;try{var Xe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var qe=Xe.memoizedProps,Kt=Xe.memoizedState,Z=i.stateNode,W=Z.getSnapshotBeforeUpdate(i.elementType===i.type?qe:ui(i.type,qe),Kt);Z.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ve=n;break}Ve=i.return}return Xe=kp,kp=!1,Xe}function Ua(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Tc(i,a,m)}f=f.next}while(f!==u)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Ac(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Bp(n){var i=n.alternate;i!==null&&(n.alternate=null,Bp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ti],delete i[wa],delete i[Hu],delete i[wv],delete i[Tv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function zp(n){return n.tag===5||n.tag===3||n.tag===4}function Vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||zp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Do));else if(u!==4&&(n=n.child,n!==null))for(bc(n,i,a),n=n.sibling;n!==null;)bc(n,i,a),n=n.sibling}function Cc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Cc(n,i,a),n=n.sibling;n!==null;)Cc(n,i,a),n=n.sibling}var fn=null,ci=!1;function yr(n,i,a){for(a=a.child;a!==null;)Hp(n,i,a),a=a.sibling}function Hp(n,i,a){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 5:vn||Ls(a,i);case 6:var u=fn,f=ci;fn=null,yr(n,i,a),fn=u,ci=f,fn!==null&&(ci?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(ci?(n=fn,a=a.stateNode,n.nodeType===8?Vu(n.parentNode,a):n.nodeType===1&&Vu(n,a),ha(n)):Vu(fn,a.stateNode));break;case 4:u=fn,f=ci,fn=a.stateNode.containerInfo,ci=!0,yr(n,i,a),fn=u,ci=f;break;case 0:case 11:case 14:case 15:if(!vn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&Tc(a,i,w),f=f.next}while(f!==u)}yr(n,i,a);break;case 1:if(!vn&&(Ls(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(U){Xt(a,i,U)}yr(n,i,a);break;case 21:yr(n,i,a);break;case 22:a.mode&1?(vn=(u=vn)||a.memoizedState!==null,yr(n,i,a),vn=u):yr(n,i,a);break;default:yr(n,i,a)}}function Gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Vv),i.forEach(function(u){var f=Zv.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function fi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var m=n,w=i,U=w;e:for(;U!==null;){switch(U.tag){case 5:fn=U.stateNode,ci=!1;break e;case 3:fn=U.stateNode.containerInfo,ci=!0;break e;case 4:fn=U.stateNode.containerInfo,ci=!0;break e}U=U.return}if(fn===null)throw Error(t(160));Hp(m,w,f),fn=null,ci=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ue){Xt(f,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,n),i=i.sibling}function Wp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(fi(i,n),Ci(n),u&4){try{Ua(3,n,n.return),tl(3,n)}catch(qe){Xt(n,n.return,qe)}try{Ua(5,n,n.return)}catch(qe){Xt(n,n.return,qe)}}break;case 1:fi(i,n),Ci(n),u&512&&a!==null&&Ls(a,a.return);break;case 5:if(fi(i,n),Ci(n),u&512&&a!==null&&Ls(a,a.return),n.flags&32){var f=n.stateNode;try{we(f,"")}catch(qe){Xt(n,n.return,qe)}}if(u&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,U=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{U==="input"&&m.type==="radio"&&m.name!=null&&ut(f,m),Ne(U,w);var ue=Ne(U,m);for(w=0;w<H.length;w+=2){var xe=H[w],ye=H[w+1];xe==="style"?Ae(f,ye):xe==="dangerouslySetInnerHTML"?Pe(f,ye):xe==="children"?we(f,ye):D(f,xe,ye,ue)}switch(U){case"input":It(f,m);break;case"textarea":g(f,m);break;case"select":var _e=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Fe=m.value;Fe!=null?_t(f,!!m.multiple,Fe,!1):_e!==!!m.multiple&&(m.defaultValue!=null?_t(f,!!m.multiple,m.defaultValue,!0):_t(f,!!m.multiple,m.multiple?[]:"",!1))}f[wa]=m}catch(qe){Xt(n,n.return,qe)}}break;case 6:if(fi(i,n),Ci(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(qe){Xt(n,n.return,qe)}}break;case 3:if(fi(i,n),Ci(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{ha(i.containerInfo)}catch(qe){Xt(n,n.return,qe)}break;case 4:fi(i,n),Ci(n);break;case 13:fi(i,n),Ci(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Lc=A())),u&4&&Gp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(vn=(ue=vn)||xe,fi(i,n),vn=ue):fi(i,n),Ci(n),u&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!xe&&(n.mode&1)!==0)for(Ve=n,xe=n.child;xe!==null;){for(ye=Ve=xe;Ve!==null;){switch(_e=Ve,Fe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ua(4,_e,_e.return);break;case 1:Ls(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,Xe.props=i.memoizedProps,Xe.state=i.memoizedState,Xe.componentWillUnmount()}catch(qe){Xt(u,a,qe)}}break;case 5:Ls(_e,_e.return);break;case 22:if(_e.memoizedState!==null){$p(ye);continue}}Fe!==null?(Fe.return=_e,Ve=Fe):$p(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,ue?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(U=ye.stateNode,H=ye.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,U.style.display=Se("display",w))}catch(qe){Xt(n,n.return,qe)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=ue?"":ye.memoizedProps}catch(qe){Xt(n,n.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:fi(i,n),Ci(n),u&4&&Gp(n);break;case 21:break;default:fi(i,n),Ci(n)}}function Ci(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(zp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(we(f,""),u.flags&=-33);var m=Vp(n);Cc(n,m,f);break;case 3:case 4:var w=u.stateNode.containerInfo,U=Vp(n);bc(n,U,w);break;default:throw Error(t(161))}}catch(H){Xt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gv(n,i,a){Ve=n,jp(n)}function jp(n,i,a){for(var u=(n.mode&1)!==0;Ve!==null;){var f=Ve,m=f.child;if(f.tag===22&&u){var w=f.memoizedState!==null||el;if(!w){var U=f.alternate,H=U!==null&&U.memoizedState!==null||vn;U=el;var ue=vn;if(el=w,(vn=H)&&!ue)for(Ve=f;Ve!==null;)w=Ve,H=w.child,w.tag===22&&w.memoizedState!==null?qp(f):H!==null?(H.return=w,Ve=H):qp(f);for(;m!==null;)Ve=m,jp(m),m=m.sibling;Ve=f,el=U,vn=ue}Xp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Ve=m):Xp(n)}}function Xp(n){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:vn||tl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!vn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ui(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&$h(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$h(i,w,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var xe=ue.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&ha(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vn||i.flags&512&&Ac(i)}catch(_e){Xt(i,i.return,_e)}}if(i===n){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function $p(n){for(;Ve!==null;){var i=Ve;if(i===n){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function qp(n){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(H){Xt(i,a,H)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(H){Xt(i,f,H)}}var m=i.return;try{Ac(i)}catch(H){Xt(i,m,H)}break;case 5:var w=i.return;try{Ac(i)}catch(H){Xt(i,w,H)}}}catch(H){Xt(i,i.return,H)}if(i===n){Ve=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Ve=U;break}Ve=i.return}}var Wv=Math.ceil,nl=P.ReactCurrentDispatcher,Rc=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,wt=0,ln=null,Qt=null,dn=0,Vn=0,Ds=mr(0),nn=0,Fa=null,$r=0,il=0,Pc=0,Oa=null,Ln=null,Lc=0,Ns=1/0,Xi=null,rl=!1,Dc=null,Sr=null,sl=!1,Mr=null,al=0,ka=0,Nc=null,ol=-1,ll=0;function En(){return(wt&6)!==0?A():ol!==-1?ol:ol=A()}function Er(n){return(n.mode&1)===0?1:(wt&2)!==0&&dn!==0?dn&-dn:bv.transition!==null?(ll===0&&(ll=An()),ll):(n=at,n!==0||(n=window.event,n=n===void 0?16:Kd(n.type)),n)}function di(n,i,a,u){if(50<ka)throw ka=0,Nc=null,Error(t(185));On(n,a,u),((wt&2)===0||n!==ln)&&(n===ln&&((wt&2)===0&&(il|=a),nn===4&&wr(n,dn)),Dn(n,u),a===1&&wt===0&&(i.mode&1)===0&&(Ns=A()+500,Fo&&vr()))}function Dn(n,i){var a=n.callbackNode;Sn(n,i);var u=qt(n,n===ln?dn:0);if(u===0)a!==null&&vo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&vo(a),i===1)n.tag===0?Av(Kp.bind(null,n)):Uh(Kp.bind(null,n)),Mv(function(){(wt&6)===0&&vr()}),a=null;else{switch(ai(u)){case 1:a=fe;break;case 4:a=ie;break;case 16:a=Q;break;case 536870912:a=Oe;break;default:a=Q}a=rm(a,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Yp(n,i){if(ol=-1,ll=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Is()&&n.callbackNode!==a)return null;var u=qt(n,n===ln?dn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ul(n,u);else{i=u;var f=wt;wt|=2;var m=Qp();(ln!==n||dn!==i)&&(Xi=null,Ns=A()+500,Yr(n,i));do try{$v();break}catch(U){Zp(n,U)}while(!0);Zu(),nl.current=m,wt=f,Qt!==null?i=0:(ln=null,dn=0,i=nn)}if(i!==0){if(i===2&&(f=xt(n),f!==0&&(u=f,i=Ic(n,f))),i===1)throw a=Fa,Yr(n,0),wr(n,u),Dn(n,A()),a;if(i===6)wr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!jv(f)&&(i=ul(n,u),i===2&&(m=xt(n),m!==0&&(u=m,i=Ic(n,m))),i===1))throw a=Fa,Yr(n,0),wr(n,u),Dn(n,A()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Kr(n,Ln,Xi);break;case 3:if(wr(n,u),(u&130023424)===u&&(i=Lc+500-A(),10<i)){if(qt(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=zu(Kr.bind(null,n,Ln,Xi),i);break}Kr(n,Ln,Xi);break;case 4:if(wr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var w=31-tt(u);m=1<<w,w=i[w],w>f&&(f=w),u&=~m}if(u=f,u=A()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Wv(u/1960))-u,10<u){n.timeoutHandle=zu(Kr.bind(null,n,Ln,Xi),u);break}Kr(n,Ln,Xi);break;case 5:Kr(n,Ln,Xi);break;default:throw Error(t(329))}}}return Dn(n,A()),n.callbackNode===a?Yp.bind(null,n):null}function Ic(n,i){var a=Oa;return n.current.memoizedState.isDehydrated&&(Yr(n,i).flags|=256),n=ul(n,i),n!==2&&(i=Ln,Ln=a,i!==null&&Uc(i)),n}function Uc(n){Ln===null?Ln=n:Ln.push.apply(Ln,n)}function jv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],m=f.getSnapshot;f=f.value;try{if(!oi(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function wr(n,i){for(i&=~Pc,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-tt(i),u=1<<a;n[a]=-1,i&=~u}}function Kp(n){if((wt&6)!==0)throw Error(t(327));Is();var i=qt(n,0);if((i&1)===0)return Dn(n,A()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var u=xt(n);u!==0&&(i=u,a=Ic(n,u))}if(a===1)throw a=Fa,Yr(n,0),wr(n,i),Dn(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Kr(n,Ln,Xi),Dn(n,A()),null}function Fc(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Ns=A()+500,Fo&&vr())}}function qr(n){Mr!==null&&Mr.tag===0&&(wt&6)===0&&Is();var i=wt;wt|=1;var a=Qn.transition,u=at;try{if(Qn.transition=null,at=1,n)return n()}finally{at=u,Qn.transition=a,wt=i,(wt&6)===0&&vr()}}function Oc(){Vn=Ds.current,zt(Ds)}function Yr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sv(a)),Qt!==null)for(a=Qt.return;a!==null;){var u=a;switch(Xu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Io();break;case 3:Rs(),zt(Cn),zt(pn),sc();break;case 5:ic(u);break;case 4:Rs();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:Qu(u.type._context);break;case 22:case 23:Oc()}a=a.return}if(ln=n,Qt=n=Tr(n.current,null),dn=Vn=i,nn=0,Fa=null,Pc=il=$r=0,Ln=Oa=null,Wr!==null){for(i=0;i<Wr.length;i++)if(a=Wr[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,m=a.pending;if(m!==null){var w=m.next;m.next=f,u.next=w}a.pending=u}Wr=null}return n}function Zp(n,i){do{var a=Qt;try{if(Zu(),Xo.current=Ko,$o){for(var u=jt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}$o=!1}if(Xr=0,on=tn=jt=null,Pa=!1,La=0,Rc.current=null,a===null||a.return===null){nn=1,Fa=i,Qt=null;break}e:{var m=n,w=a.return,U=a,H=i;if(i=dn,U.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ue=H,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Fe=Mp(w);if(Fe!==null){Fe.flags&=-257,Ep(Fe,w,U,m,i),Fe.mode&1&&Sp(m,ue,i),i=Fe,H=ue;var Xe=i.updateQueue;if(Xe===null){var qe=new Set;qe.add(H),i.updateQueue=qe}else Xe.add(H);break e}else{if((i&1)===0){Sp(m,ue,i),kc();break e}H=Error(t(426))}}else if(Ht&&U.mode&1){var Kt=Mp(w);if(Kt!==null){(Kt.flags&65536)===0&&(Kt.flags|=256),Ep(Kt,w,U,m,i),Yu(Ps(H,U));break e}}m=H=Ps(H,U),nn!==4&&(nn=2),Oa===null?Oa=[m]:Oa.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Z=xp(m,H,i);Xh(m,Z);break e;case 1:U=H;var W=m.type,te=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Sr===null||!Sr.has(te)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=yp(m,U,i);Xh(m,Te);break e}}m=m.return}while(m!==null)}em(a)}catch(Ze){i=Ze,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Qp(){var n=nl.current;return nl.current=Ko,n===null?Ko:n}function kc(){(nn===0||nn===3||nn===2)&&(nn=4),ln===null||($r&268435455)===0&&(il&268435455)===0||wr(ln,dn)}function ul(n,i){var a=wt;wt|=2;var u=Qp();(ln!==n||dn!==i)&&(Xi=null,Yr(n,i));do try{Xv();break}catch(f){Zp(n,f)}while(!0);if(Zu(),wt=a,nl.current=u,Qt!==null)throw Error(t(261));return ln=null,dn=0,nn}function Xv(){for(;Qt!==null;)Jp(Qt)}function $v(){for(;Qt!==null&&!mu();)Jp(Qt)}function Jp(n){var i=im(n.alternate,n,Vn);n.memoizedProps=n.pendingProps,i===null?em(n):Qt=i,Rc.current=null}function em(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Bv(a,i,Vn),a!==null){Qt=a;return}}else{if(a=zv(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);nn===0&&(nn=5)}function Kr(n,i,a){var u=at,f=Qn.transition;try{Qn.transition=null,at=1,qv(n,i,a,u)}finally{Qn.transition=f,at=u}return null}function qv(n,i,a,u){do Is();while(Mr!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(or(n,m),n===ln&&(Qt=ln=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,rm(Q,function(){return Is(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=at;at=1;var U=wt;wt|=4,Rc.current=null,Hv(n,a),Wp(a,n),pv(ku),yo=!!Ou,ku=Ou=null,n.current=a,Gv(a),gu(),wt=U,at=w,Qn.transition=m}else n.current=a;if(sl&&(sl=!1,Mr=n,al=f),m=n.pendingLanes,m===0&&(Sr=null),Qe(a.stateNode),Dn(n,A()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=Dc,Dc=null,n;return(al&1)!==0&&n.tag!==0&&Is(),m=n.pendingLanes,(m&1)!==0?n===Nc?ka++:(ka=0,Nc=n):ka=0,vr(),null}function Is(){if(Mr!==null){var n=ai(al),i=Qn.transition,a=at;try{if(Qn.transition=null,at=16>n?16:n,Mr===null)var u=!1;else{if(n=Mr,Mr=null,al=0,(wt&6)!==0)throw Error(t(331));var f=wt;for(wt|=4,Ve=n.current;Ve!==null;){var m=Ve,w=m.child;if((Ve.flags&16)!==0){var U=m.deletions;if(U!==null){for(var H=0;H<U.length;H++){var ue=U[H];for(Ve=ue;Ve!==null;){var xe=Ve;switch(xe.tag){case 0:case 11:case 15:Ua(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Ve=ye;else for(;Ve!==null;){xe=Ve;var _e=xe.sibling,Fe=xe.return;if(Bp(xe),xe===ue){Ve=null;break}if(_e!==null){_e.return=Fe,Ve=_e;break}Ve=Fe}}}var Xe=m.alternate;if(Xe!==null){var qe=Xe.child;if(qe!==null){Xe.child=null;do{var Kt=qe.sibling;qe.sibling=null,qe=Kt}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Ve=w;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ua(9,m,m.return)}var Z=m.sibling;if(Z!==null){Z.return=m.return,Ve=Z;break e}Ve=m.return}}var W=n.current;for(Ve=W;Ve!==null;){w=Ve;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Ve=te;else e:for(w=W;Ve!==null;){if(U=Ve,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:tl(9,U)}}catch(Ze){Xt(U,U.return,Ze)}if(U===w){Ve=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Ve=Te;break e}Ve=U.return}}if(wt=f,vr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Re,n)}catch{}u=!0}return u}finally{at=a,Qn.transition=i}}return!1}function tm(n,i,a){i=Ps(a,i),i=xp(n,i,1),n=xr(n,i,1),i=En(),n!==null&&(On(n,1,i),Dn(n,i))}function Xt(n,i,a){if(n.tag===3)tm(n,n,a);else for(;i!==null;){if(i.tag===3){tm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Sr===null||!Sr.has(u))){n=Ps(a,n),n=yp(i,n,1),i=xr(i,n,1),n=En(),i!==null&&(On(i,1,n),Dn(i,n));break}}i=i.return}}function Yv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&a,ln===n&&(dn&a)===a&&(nn===4||nn===3&&(dn&130023424)===dn&&500>A()-Lc?Yr(n,0):Pc|=a),Dn(n,i)}function nm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var a=En();n=Gi(n,i),n!==null&&(On(n,i,a),Dn(n,a))}function Kv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),nm(n,a)}function Zv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),nm(n,a)}var im;im=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Cn.current)Pn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Pn=!1,kv(n,i,a);Pn=(n.flags&131072)!==0}else Pn=!1,Ht&&(i.flags&1048576)!==0&&Fh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Jo(n,i),n=i.pendingProps;var f=Ms(i,pn.current);Cs(i,a),f=lc(null,i,u,n,f,a);var m=uc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Rn(u)?(m=!0,Uo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,tc(i),f.updater=Zo,i.stateNode=f,f._reactInternals=i,mc(i,u,n,a),i=xc(null,i,u,!0,m,a)):(i.tag=0,Ht&&m&&ju(i),Mn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Jo(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=Jv(u),n=ui(u,n),f){case 0:i=_c(null,i,u,n,a);break e;case 1:i=Rp(null,i,u,n,a);break e;case 11:i=wp(null,i,u,n,a);break e;case 14:i=Tp(null,i,u,ui(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),_c(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),Rp(n,i,u,f,a);case 3:e:{if(Pp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,f=m.element,jh(n,i),Wo(i,u,null,a);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ps(Error(t(423)),i),i=Lp(n,i,u,a,f);break e}else if(u!==f){f=Ps(Error(t(424)),i),i=Lp(n,i,u,a,f);break e}else for(zn=pr(i.stateNode.containerInfo.firstChild),Bn=i,Ht=!0,li=null,a=Gh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),u===f){i=ji(n,i,a);break e}Mn(n,i,u,a)}i=i.child}return i;case 5:return qh(i),n===null&&qu(i),u=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,Bu(u,f)?w=null:m!==null&&Bu(u,m)&&(i.flags|=32),Cp(n,i),Mn(n,i,w,a),i.child;case 6:return n===null&&qu(i),null;case 13:return Dp(n,i,a);case 4:return nc(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=As(i,null,u,a):Mn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),wp(n,i,u,f,a);case 7:return Mn(n,i,i.pendingProps,a),i.child;case 8:return Mn(n,i,i.pendingProps.children,a),i.child;case 12:return Mn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,kt(Vo,u._currentValue),u._currentValue=w,m!==null)if(oi(m.value,w)){if(m.children===f.children&&!Cn.current){i=ji(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var U=m.dependencies;if(U!==null){w=m.child;for(var H=U.firstContext;H!==null;){if(H.context===u){if(m.tag===1){H=Wi(-1,a&-a),H.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var xe=ue.pending;xe===null?H.next=H:(H.next=xe.next,xe.next=H),ue.pending=H}}m.lanes|=a,H=m.alternate,H!==null&&(H.lanes|=a),Ju(m.return,a,i),U.lanes|=a;break}H=H.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,U=w.alternate,U!==null&&(U.lanes|=a),Ju(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Mn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Cs(i,a),f=Kn(f),u=u(f),i.flags|=1,Mn(n,i,u,a),i.child;case 14:return u=i.type,f=ui(u,i.pendingProps),f=ui(u.type,f),Tp(n,i,u,f,a);case 15:return Ap(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:ui(u,f),Jo(n,i),i.tag=1,Rn(u)?(n=!0,Uo(i)):n=!1,Cs(i,a),vp(i,u,f),mc(i,u,f,a),xc(null,i,u,!0,n,a);case 19:return Ip(n,i,a);case 22:return bp(n,i,a)}throw Error(t(156,i.tag))};function rm(n,i){return go(n,i)}function Qv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new Qv(n,i,a,u)}function Bc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jv(n){if(typeof n=="function")return Bc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ne)return 11;if(n===J)return 14}return 2}function Tr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,u,f,m){var w=2;if(u=n,typeof n=="function")Bc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case z:return Zr(a.children,f,m,i);case T:w=8,f|=8;break;case L:return n=Jn(12,a,i,f|2),n.elementType=L,n.lanes=m,n;case ee:return n=Jn(13,a,i,f),n.elementType=ee,n.lanes=m,n;case se:return n=Jn(19,a,i,f),n.elementType=se,n.lanes=m,n;case j:return fl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case de:w=10;break e;case B:w=9;break e;case ne:w=11;break e;case J:w=14;break e;case K:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,a,i,f),i.elementType=n,i.type=u,i.lanes=m,i}function Zr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function fl(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=j,n.lanes=a,n.stateNode={isHidden:!1},n}function zc(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function Vc(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function e_(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hc(n,i,a,u,f,m,w,U,H){return n=new e_(n,i,a,U,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},tc(m),n}function t_(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function sm(n){if(!n)return gr;n=n._reactInternals;e:{if(wi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Rn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Rn(a))return Nh(n,a,i)}return i}function am(n,i,a,u,f,m,w,U,H){return n=Hc(a,u,!0,n,f,m,w,U,H),n.context=sm(null),a=n.current,u=En(),f=Er(a),m=Wi(u,f),m.callback=i??null,xr(a,m,f),n.current.lanes=f,On(n,f,u),Dn(n,u),n}function dl(n,i,a,u){var f=i.current,m=En(),w=Er(f);return a=sm(a),i.context===null?i.context=a:i.pendingContext=a,i=Wi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=xr(f,i,w),n!==null&&(di(n,f,w,m),Go(n,f,w)),w}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function om(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Gc(n,i){om(n,i),(n=n.alternate)&&om(n,i)}function n_(){return null}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wc(n){this._internalRoot=n}pl.prototype.render=Wc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},pl.prototype.unmount=Wc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){dl(null,n,null,null)}),i[Bi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=la();n={blockedOn:null,target:n,priority:i};for(var a=0;a<fr.length&&i!==0&&i<fr[a].priority;a++);fr.splice(a,0,n),a===0&&qd(n)}};function jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function um(){}function i_(n,i,a,u,f){if(f){if(typeof u=="function"){var m=u;u=function(){var ue=hl(w);m.call(ue)}}var w=am(i,u,n,0,null,!1,!1,"",um);return n._reactRootContainer=w,n[Bi]=w.current,Ma(n.nodeType===8?n.parentNode:n),qr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var U=u;u=function(){var ue=hl(H);U.call(ue)}}var H=Hc(n,0,!1,null,null,!1,!1,"",um);return n._reactRootContainer=H,n[Bi]=H.current,Ma(n.nodeType===8?n.parentNode:n),qr(function(){dl(i,H,a,u)}),H}function gl(n,i,a,u,f){var m=a._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var U=f;f=function(){var H=hl(w);U.call(H)}}dl(i,w,n,f)}else w=i_(a,i,n,f,u);return hl(w)}Yt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(Rt(i,a|1),Dn(i,A()),(wt&6)===0&&(Ns=A()+500,vr()))}break;case 13:qr(function(){var u=Gi(n,1);if(u!==null){var f=En();di(u,n,1,f)}}),Gc(n,1)}},$n=function(n){if(n.tag===13){var i=Gi(n,134217728);if(i!==null){var a=En();di(i,n,134217728,a)}Gc(n,134217728)}},ki=function(n){if(n.tag===13){var i=Er(n),a=Gi(n,i);if(a!==null){var u=En();di(a,n,i,u)}Gc(n,i)}},la=function(){return at},Xd=function(n,i){var a=at;try{return at=n,i()}finally{at=a}},be=function(n,i,a){switch(i){case"input":if(It(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=No(u);if(!f)throw Error(t(90));Gt(u),It(u,f)}}}break;case"textarea":g(n,a);break;case"select":i=a.value,i!=null&&_t(n,!!a.multiple,i,!1)}},st=Fc,Dt=qr;var r_={usingClientEntryPoint:!1,Events:[Ta,ys,No,me,je,Fc]},Ba={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s_={bundleType:Ba.bundleType,version:Ba.version,rendererPackageName:Ba.rendererPackageName,rendererConfig:Ba.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=po(n),n===null?null:n.stateNode},findFiberByHostInstance:Ba.findFiberByHostInstance||n_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Re=vl.inject(s_),Ue=vl}catch{}}return Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r_,Nn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jc(i))throw Error(t(200));return t_(n,i,null,a)},Nn.createRoot=function(n,i){if(!jc(n))throw Error(t(299));var a=!1,u="",f=lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hc(n,1,!1,null,null,a,!1,u,f),n[Bi]=i.current,Ma(n.nodeType===8?n.parentNode:n),new Wc(i)},Nn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=po(i),n=n===null?null:n.stateNode,n},Nn.flushSync=function(n){return qr(n)},Nn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Nn.hydrateRoot=function(n,i,a){if(!jc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,m="",w=lm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=am(i,null,n,1,a??null,f,!1,m,w),n[Bi]=i.current,Ma(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new pl(i)},Nn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Nn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Bi]=null})}),!0):!1},Nn.unstable_batchedUpdates=Fc,Nn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,u)},Nn.version="18.3.1-next-f1338f8080-20240426",Nn}var vm;function h_(){if(vm)return qc.exports;vm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),qc.exports=d_(),qc.exports}var _m;function p_(){if(_m)return _l;_m=1;var r=h_();return _l.createRoot=r.createRoot,_l.hydrateRoot=r.hydrateRoot,_l}var m_=p_();/**
 * react-router v7.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xm="popstate";function g_(r={}){function e(s,o){let{pathname:l,search:c,hash:d}=s.location;return Uf("",{pathname:l,search:c,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ja(o)}return __(e,t,null,r)}function rn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Mi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function v_(){return Math.random().toString(36).substring(2,10)}function ym(r,e){return{usr:r.state,key:r.key,idx:e}}function Uf(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?io(e):e,state:t,key:e&&e.key||s||v_()}}function Ja({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function io(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function __(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,c=o.history,d="POP",p=null,h=_();h==null&&(h=0,c.replaceState({...c.state,idx:h},""));function _(){return(c.state||{idx:null}).idx}function x(){d="POP";let y=_(),S=y==null?null:y-h;h=y,p&&p({action:d,location:b.location,delta:S})}function v(y,S){d="PUSH";let C=Uf(b.location,y,S);h=_()+1;let D=ym(C,h),P=b.createHref(C);try{c.pushState(D,"",P)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;o.location.assign(P)}l&&p&&p({action:d,location:b.location,delta:1})}function M(y,S){d="REPLACE";let C=Uf(b.location,y,S);h=_();let D=ym(C,h),P=b.createHref(C);c.replaceState(D,"",P),l&&p&&p({action:d,location:b.location,delta:0})}function E(y){return x_(y)}let b={get action(){return d},get location(){return r(o,c)},listen(y){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(xm,x),p=y,()=>{o.removeEventListener(xm,x),p=null}},createHref(y){return e(o,y)},createURL:E,encodeLocation(y){let S=E(y);return{pathname:S.pathname,search:S.search,hash:S.hash}},push:v,replace:M,go(y){return c.go(y)}};return b}function x_(r,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),rn(t,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:Ja(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=t+s),new URL(s,t)}function Tg(r,e,t="/"){return y_(r,e,t,!1)}function y_(r,e,t,s){let o=typeof e=="string"?io(e):e,l=nr(o.pathname||"/",t);if(l==null)return null;let c=Ag(r);S_(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let h=D_(l);d=P_(c[p],h,s)}return d}function Ag(r,e=[],t=[],s="",o=!1){let l=(c,d,p=o,h)=>{let _={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:d,route:c};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&p)return;rn(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let x=Ji([s,_.relativePath]),v=t.concat(_);c.children&&c.children.length>0&&(rn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${x}".`),Ag(c.children,e,v,x,p)),!(c.path==null&&!c.index)&&e.push({path:x,score:C_(x,c.index),routesMeta:v})};return r.forEach((c,d)=>{if(c.path===""||!c.path?.includes("?"))l(c,d);else for(let p of bg(c.path))l(c,d,!0,p)}),e}function bg(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let c=bg(s.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...c),d.map(p=>r.startsWith("/")&&p===""?"/":p)}function S_(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:R_(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var M_=/^:[\w-]+$/,E_=3,w_=2,T_=1,A_=10,b_=-2,Sm=r=>r==="*";function C_(r,e){let t=r.split("/"),s=t.length;return t.some(Sm)&&(s+=b_),e&&(s+=w_),t.filter(o=>!Sm(o)).reduce((o,l)=>o+(M_.test(l)?E_:l===""?T_:A_),s)}function R_(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function P_(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",c=[];for(let d=0;d<s.length;++d){let p=s[d],h=d===s.length-1,_=l==="/"?e:e.slice(l.length)||"/",x=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},_),v=p.route;if(!x&&h&&t&&!s[s.length-1].route.index&&(x=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!x)return null;Object.assign(o,x.params),c.push({params:o,pathname:Ji([l,x.pathname]),pathnameBase:F_(Ji([l,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(l=Ji([l,x.pathnameBase]))}return c}function Jl(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=L_(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],c=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((h,{paramName:_,isOptional:x},v)=>{if(_==="*"){let E=d[v]||"";c=l.slice(0,l.length-E.length).replace(/(.)\/+$/,"$1")}const M=d[v];return x&&!M?h[_]=void 0:h[_]=(M||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:c,pattern:r}}function L_(r,e=!1,t=!0){Mi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(s.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function D_(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function nr(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}var Cg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,N_=r=>Cg.test(r);function I_(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?io(r):r,l;if(t)if(N_(t))l=t;else{if(t.includes("//")){let c=t;t=t.replace(/\/\/+/g,"/"),Mi(!1,`Pathnames cannot have embedded double slashes - normalizing ${c} -> ${t}`)}t.startsWith("/")?l=Mm(t.substring(1),"/"):l=Mm(t,e)}else l=e;return{pathname:l,search:O_(s),hash:k_(o)}}function Mm(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function Zc(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function U_(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rg(r){let e=U_(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Pg(r,e,t,s=!1){let o;typeof r=="string"?o=io(r):(o={...r},rn(!o.pathname||!o.pathname.includes("?"),Zc("?","pathname","search",o)),rn(!o.pathname||!o.pathname.includes("#"),Zc("#","pathname","hash",o)),rn(!o.search||!o.search.includes("#"),Zc("#","search","hash",o)));let l=r===""||o.pathname==="",c=l?"/":o.pathname,d;if(c==null)d=t;else{let x=e.length-1;if(!s&&c.startsWith("..")){let v=c.split("/");for(;v[0]==="..";)v.shift(),x-=1;o.pathname=v.join("/")}d=x>=0?e[x]:"/"}let p=I_(o,d),h=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(h||_)&&(p.pathname+="/"),p}var Ji=r=>r.join("/").replace(/\/\/+/g,"/"),F_=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),O_=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,k_=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,B_=class{constructor(r,e,t,s=!1){this.status=r,this.statusText=e||"",this.internal=s,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function z_(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function V_(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var Lg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Dg(r,e){let t=r;if(typeof t!="string"||!Cg.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let s=t,o=!1;if(Lg)try{let l=new URL(window.location.href),c=t.startsWith("//")?new URL(l.protocol+t):new URL(t),d=nr(c.pathname,e);c.origin===l.origin&&d!=null?t=d+c.search+c.hash:o=!0}catch{Mi(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:o,to:t}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ng=["POST","PUT","PATCH","DELETE"];new Set(Ng);var H_=["GET",...Ng];new Set(H_);var ia=le.createContext(null);ia.displayName="DataRouter";var ou=le.createContext(null);ou.displayName="DataRouterState";var G_=le.createContext(!1),Ig=le.createContext({isTransitioning:!1});Ig.displayName="ViewTransition";var W_=le.createContext(new Map);W_.displayName="Fetchers";var j_=le.createContext(null);j_.displayName="Await";var si=le.createContext(null);si.displayName="Navigation";var lu=le.createContext(null);lu.displayName="Location";var sr=le.createContext({outlet:null,matches:[],isDataRoute:!1});sr.displayName="Route";var Pd=le.createContext(null);Pd.displayName="RouteError";var Ug="REACT_ROUTER_ERROR",X_="REDIRECT",$_="ROUTE_ERROR_RESPONSE";function q_(r){if(r.startsWith(`${Ug}:${X_}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function Y_(r){if(r.startsWith(`${Ug}:${$_}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new B_(e.status,e.statusText,e.data)}catch{}}function K_(r,{relative:e}={}){rn(ro(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=le.useContext(si),{hash:o,pathname:l,search:c}=so(r,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Ji([t,l])),s.createHref({pathname:d,search:c,hash:o})}function ro(){return le.useContext(lu)!=null}function Fr(){return rn(ro(),"useLocation() may be used only in the context of a <Router> component."),le.useContext(lu).location}var Fg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Og(r){le.useContext(si).static||le.useLayoutEffect(r)}function kg(){let{isDataRoute:r}=le.useContext(sr);return r?ux():Z_()}function Z_(){rn(ro(),"useNavigate() may be used only in the context of a <Router> component.");let r=le.useContext(ia),{basename:e,navigator:t}=le.useContext(si),{matches:s}=le.useContext(sr),{pathname:o}=Fr(),l=JSON.stringify(Rg(s)),c=le.useRef(!1);return Og(()=>{c.current=!0}),le.useCallback((p,h={})=>{if(Mi(c.current,Fg),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=Pg(p,JSON.parse(l),o,h.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Ji([e,_.pathname])),(h.replace?t.replace:t.push)(_,h.state,h)},[e,t,l,o,r])}le.createContext(null);function so(r,{relative:e}={}){let{matches:t}=le.useContext(sr),{pathname:s}=Fr(),o=JSON.stringify(Rg(t));return le.useMemo(()=>Pg(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function Q_(r,e,t,s,o){rn(ro(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=le.useContext(si),{matches:c}=le.useContext(sr),d=c[c.length-1],p=d?d.params:{},h=d?d.pathname:"/",_=d?d.pathnameBase:"/",x=d&&d.route;{let C=x&&x.path||"";zg(h,!x||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let v=Fr(),M;M=v;let E=M.pathname||"/",b=E;if(_!=="/"){let C=_.replace(/^\//,"").split("/");b="/"+E.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=Tg(r,{pathname:b});return Mi(x||y!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Mi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),ix(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:Ji([_,l.encodeLocation?l.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?_:Ji([_,l.encodeLocation?l.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),c,t,s,o)}function J_(){let r=lx(),e=z_(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},c=null;return console.error("Error handled by React Router default ErrorBoundary:",r),c=le.createElement(le.Fragment,null,le.createElement("p",null,"💿 Hey developer 👋"),le.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",le.createElement("code",{style:l},"ErrorBoundary")," or"," ",le.createElement("code",{style:l},"errorElement")," prop on your route.")),le.createElement(le.Fragment,null,le.createElement("h2",null,"Unexpected Application Error!"),le.createElement("h3",{style:{fontStyle:"italic"}},e),t?le.createElement("pre",{style:o},t):null,c)}var ex=le.createElement(J_,null),Bg=class extends le.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const t=Y_(r.digest);t&&(r=t)}let e=r!==void 0?le.createElement(sr.Provider,{value:this.props.routeContext},le.createElement(Pd.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?le.createElement(tx,{error:r},e):e}};Bg.contextType=G_;var Qc=new WeakMap;function tx({children:r,error:e}){let{basename:t}=le.useContext(si);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=q_(e.digest);if(s){let o=Qc.get(e);if(o)throw o;let l=Dg(s.location,t);if(Lg&&!Qc.get(e))if(l.isExternal||s.reloadDocument)window.location.href=l.absoluteURL||l.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:s.replace}));throw Qc.set(e,c),c}return le.createElement("meta",{httpEquiv:"refresh",content:`0;url=${l.absoluteURL||l.to}`})}}return r}function nx({routeContext:r,match:e,children:t}){let s=le.useContext(ia);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),le.createElement(sr.Provider,{value:r},t)}function ix(r,e=[],t=null,s=null,o=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let l=r,c=t?.errors;if(c!=null){let _=l.findIndex(x=>x.route.id&&c?.[x.route.id]!==void 0);rn(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,_+1))}let d=!1,p=-1;if(t)for(let _=0;_<l.length;_++){let x=l[_];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(p=_),x.route.id){let{loaderData:v,errors:M}=t,E=x.route.loader&&!v.hasOwnProperty(x.route.id)&&(!M||M[x.route.id]===void 0);if(x.route.lazy||E){d=!0,p>=0?l=l.slice(0,p+1):l=[l[0]];break}}}let h=t&&s?(_,x)=>{s(_,{location:t.location,params:t.matches?.[0]?.params??{},unstable_pattern:V_(t.matches),errorInfo:x})}:void 0;return l.reduceRight((_,x,v)=>{let M,E=!1,b=null,y=null;t&&(M=c&&x.route.id?c[x.route.id]:void 0,b=x.route.errorElement||ex,d&&(p<0&&v===0?(zg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,y=null):p===v&&(E=!0,y=x.route.hydrateFallbackElement||null)));let S=e.concat(l.slice(0,v+1)),C=()=>{let D;return M?D=b:E?D=y:x.route.Component?D=le.createElement(x.route.Component,null):x.route.element?D=x.route.element:D=_,le.createElement(nx,{match:x,routeContext:{outlet:_,matches:S,isDataRoute:t!=null},children:D})};return t&&(x.route.ErrorBoundary||x.route.errorElement||v===0)?le.createElement(Bg,{location:t.location,revalidation:t.revalidation,component:b,error:M,children:C(),routeContext:{outlet:null,matches:S,isDataRoute:!0},onError:h}):C()},null)}function Ld(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function rx(r){let e=le.useContext(ia);return rn(e,Ld(r)),e}function sx(r){let e=le.useContext(ou);return rn(e,Ld(r)),e}function ax(r){let e=le.useContext(sr);return rn(e,Ld(r)),e}function Dd(r){let e=ax(r),t=e.matches[e.matches.length-1];return rn(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function ox(){return Dd("useRouteId")}function lx(){let r=le.useContext(Pd),e=sx("useRouteError"),t=Dd("useRouteError");return r!==void 0?r:e.errors?.[t]}function ux(){let{router:r}=rx("useNavigate"),e=Dd("useNavigate"),t=le.useRef(!1);return Og(()=>{t.current=!0}),le.useCallback(async(o,l={})=>{Mi(t.current,Fg),t.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var Em={};function zg(r,e,t){!e&&!Em[r]&&(Em[r]=!0,Mi(!1,t))}le.memo(cx);function cx({routes:r,future:e,state:t,onError:s}){return Q_(r,void 0,t,s,e)}function fx({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1,unstable_useTransitions:c}){rn(!ro(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),p=le.useMemo(()=>({basename:d,navigator:o,static:l,unstable_useTransitions:c,future:{}}),[d,o,l,c]);typeof t=="string"&&(t=io(t));let{pathname:h="/",search:_="",hash:x="",state:v=null,key:M="default"}=t,E=le.useMemo(()=>{let b=nr(h,d);return b==null?null:{location:{pathname:b,search:_,hash:x,state:v,key:M},navigationType:s}},[d,h,_,x,v,M,s]);return Mi(E!=null,`<Router basename="${d}"> is not able to match the URL "${h}${_}${x}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:le.createElement(si.Provider,{value:p},le.createElement(lu.Provider,{children:e,value:E}))}var jl="get",Xl="application/x-www-form-urlencoded";function uu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function dx(r){return uu(r)&&r.tagName.toLowerCase()==="button"}function hx(r){return uu(r)&&r.tagName.toLowerCase()==="form"}function px(r){return uu(r)&&r.tagName.toLowerCase()==="input"}function mx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function gx(r,e){return r.button===0&&(!e||e==="_self")&&!mx(r)}var xl=null;function vx(){if(xl===null)try{new FormData(document.createElement("form"),0),xl=!1}catch{xl=!0}return xl}var _x=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Jc(r){return r!=null&&!_x.has(r)?(Mi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Xl}"`),null):r}function xx(r,e){let t,s,o,l,c;if(hx(r)){let d=r.getAttribute("action");s=d?nr(d,e):null,t=r.getAttribute("method")||jl,o=Jc(r.getAttribute("enctype"))||Xl,l=new FormData(r)}else if(dx(r)||px(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||d.getAttribute("action");if(s=p?nr(p,e):null,t=r.getAttribute("formmethod")||d.getAttribute("method")||jl,o=Jc(r.getAttribute("formenctype"))||Jc(d.getAttribute("enctype"))||Xl,l=new FormData(d,r),!vx()){let{name:h,type:_,value:x}=r;if(_==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,x)}}else{if(uu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=jl,s=null,o=Xl,c=r}return l&&o==="text/plain"&&(c=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Nd(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function yx(r,e,t){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname=`_root.${t}`:e&&nr(s.pathname,e)==="/"?s.pathname=`${e.replace(/\/$/,"")}/_root.${t}`:s.pathname=`${s.pathname.replace(/\/$/,"")}.${t}`,s}async function Sx(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mx(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Ex(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let c=await Sx(l,t);return c.links?c.links():[]}return[]}));return bx(s.flat(1).filter(Mx).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function wm(r,e,t,s,o,l){let c=(p,h)=>t[h]?p.route.id!==t[h].route.id:!0,d=(p,h)=>t[h].pathname!==p.pathname||t[h].route.path?.endsWith("*")&&t[h].params["*"]!==p.params["*"];return l==="assets"?e.filter((p,h)=>c(p,h)||d(p,h)):l==="data"?e.filter((p,h)=>{let _=s.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,h)||d(p,h))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:t[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function wx(r,e,{includeHydrateFallback:t}={}){return Tx(r.map(s=>{let o=e.routes[s.route.id];if(!o)return[];let l=[o.module];return o.clientActionModule&&(l=l.concat(o.clientActionModule)),o.clientLoaderModule&&(l=l.concat(o.clientLoaderModule)),t&&o.hydrateFallbackModule&&(l=l.concat(o.hydrateFallbackModule)),o.imports&&(l=l.concat(o.imports)),l}).flat(1))}function Tx(r){return[...new Set(r)]}function Ax(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function bx(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(Ax(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function Vg(){let r=le.useContext(ia);return Nd(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Cx(){let r=le.useContext(ou);return Nd(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Id=le.createContext(void 0);Id.displayName="FrameworkContext";function Hg(){let r=le.useContext(Id);return Nd(r,"You must render this element inside a <HydratedRouter> element"),r}function Rx(r,e){let t=le.useContext(Id),[s,o]=le.useState(!1),[l,c]=le.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:h,onMouseLeave:_,onTouchStart:x}=e,v=le.useRef(null);le.useEffect(()=>{if(r==="render"&&c(!0),r==="viewport"){let b=S=>{S.forEach(C=>{c(C.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[r]),le.useEffect(()=>{if(s){let b=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(b)}}},[s]);let M=()=>{o(!0)},E=()=>{o(!1),c(!1)};return t?r!=="intent"?[l,v,{}]:[l,v,{onFocus:Va(d,M),onBlur:Va(p,E),onMouseEnter:Va(h,M),onMouseLeave:Va(_,E),onTouchStart:Va(x,M)}]:[!1,v,{}]}function Va(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function Px({page:r,...e}){let{router:t}=Vg(),s=le.useMemo(()=>Tg(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?le.createElement(Dx,{page:r,matches:s,...e}):null}function Lx(r){let{manifest:e,routeModules:t}=Hg(),[s,o]=le.useState([]);return le.useEffect(()=>{let l=!1;return Ex(r,e,t).then(c=>{l||o(c)}),()=>{l=!0}},[r,e,t]),s}function Dx({page:r,matches:e,...t}){let s=Fr(),{manifest:o,routeModules:l}=Hg(),{basename:c}=Vg(),{loaderData:d,matches:p}=Cx(),h=le.useMemo(()=>wm(r,e,p,o,s,"data"),[r,e,p,o,s]),_=le.useMemo(()=>wm(r,e,p,o,s,"assets"),[r,e,p,o,s]),x=le.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let E=new Set,b=!1;if(e.forEach(S=>{let C=o.routes[S.route.id];!C||!C.hasLoader||(!h.some(D=>D.route.id===S.route.id)&&S.route.id in d&&l[S.route.id]?.shouldRevalidate||C.hasClientLoader?b=!0:E.add(S.route.id))}),E.size===0)return[];let y=yx(r,c,"data");return b&&E.size>0&&y.searchParams.set("_routes",e.filter(S=>E.has(S.route.id)).map(S=>S.route.id).join(",")),[y.pathname+y.search]},[c,d,s,o,h,e,r,l]),v=le.useMemo(()=>wx(_,o),[_,o]),M=Lx(_);return le.createElement(le.Fragment,null,x.map(E=>le.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...t})),v.map(E=>le.createElement("link",{key:E,rel:"modulepreload",href:E,...t})),M.map(({key:E,link:b})=>le.createElement("link",{key:E,nonce:t.nonce,...b})))}function Nx(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Ix=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ix&&(window.__reactRouterVersion="7.11.0")}catch{}function Ux({basename:r,children:e,unstable_useTransitions:t,window:s}){let o=le.useRef();o.current==null&&(o.current=g_({window:s,v5Compat:!0}));let l=o.current,[c,d]=le.useState({action:l.action,location:l.location}),p=le.useCallback(h=>{t===!1?d(h):le.startTransition(()=>d(h))},[t]);return le.useLayoutEffect(()=>l.listen(p),[l,p]),le.createElement(fx,{basename:r,children:e,location:c.location,navigationType:c.action,navigator:l,unstable_useTransitions:t})}var Gg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wg=le.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:c,state:d,target:p,to:h,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:v,...M},E){let{basename:b,unstable_useTransitions:y}=le.useContext(si),S=typeof h=="string"&&Gg.test(h),C=Dg(h,b);h=C.to;let D=K_(h,{relative:o}),[P,k,O]=Rx(s,M),z=Bx(h,{replace:c,state:d,target:p,preventScrollReset:_,relative:o,viewTransition:x,unstable_defaultShouldRevalidate:v,unstable_useTransitions:y});function T(de){e&&e(de),de.defaultPrevented||z(de)}let L=le.createElement("a",{...M,...O,href:C.absoluteURL||D,onClick:C.isExternal||l?e:T,ref:Nx(E,k),target:p,"data-discover":!S&&t==="render"?"true":void 0});return P&&!S?le.createElement(le.Fragment,null,L,le.createElement(Px,{page:D})):L});Wg.displayName="Link";var Fx=le.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:c,viewTransition:d,children:p,...h},_){let x=so(c,{relative:h.relative}),v=Fr(),M=le.useContext(ou),{navigator:E,basename:b}=le.useContext(si),y=M!=null&&Wx(x)&&d===!0,S=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,C=v.pathname,D=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;t||(C=C.toLowerCase(),D=D?D.toLowerCase():null,S=S.toLowerCase()),D&&b&&(D=nr(D,b)||D);const P=S!=="/"&&S.endsWith("/")?S.length-1:S.length;let k=C===S||!o&&C.startsWith(S)&&C.charAt(P)==="/",O=D!=null&&(D===S||!o&&D.startsWith(S)&&D.charAt(S.length)==="/"),z={isActive:k,isPending:O,isTransitioning:y},T=k?e:void 0,L;typeof s=="function"?L=s(z):L=[s,k?"active":null,O?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let de=typeof l=="function"?l(z):l;return le.createElement(Wg,{...h,"aria-current":T,className:L,ref:_,style:de,to:c,viewTransition:d},typeof p=="function"?p(z):p)});Fx.displayName="NavLink";var Ox=le.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:c=jl,action:d,onSubmit:p,relative:h,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:v,...M},E)=>{let{unstable_useTransitions:b}=le.useContext(si),y=Hx(),S=Gx(d,{relative:h}),C=c.toLowerCase()==="get"?"get":"post",D=typeof d=="string"&&Gg.test(d),P=k=>{if(p&&p(k),k.defaultPrevented)return;k.preventDefault();let O=k.nativeEvent.submitter,z=O?.getAttribute("formmethod")||c,T=()=>y(O||k.currentTarget,{fetcherKey:e,method:z,navigate:t,replace:o,state:l,relative:h,preventScrollReset:_,viewTransition:x,unstable_defaultShouldRevalidate:v});b&&t!==!1?le.startTransition(()=>T()):T()};return le.createElement("form",{ref:E,method:C,action:S,onSubmit:s?p:P,...M,"data-discover":!D&&r==="render"?"true":void 0})});Ox.displayName="Form";function kx(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function jg(r){let e=le.useContext(ia);return rn(e,kx(r)),e}function Bx(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:d,unstable_useTransitions:p}={}){let h=kg(),_=Fr(),x=so(r,{relative:l});return le.useCallback(v=>{if(gx(v,e)){v.preventDefault();let M=t!==void 0?t:Ja(_)===Ja(x),E=()=>h(r,{replace:M,state:s,preventScrollReset:o,relative:l,viewTransition:c,unstable_defaultShouldRevalidate:d});p?le.startTransition(()=>E()):E()}},[_,h,x,t,s,e,r,o,l,c,d,p])}var zx=0,Vx=()=>`__${String(++zx)}__`;function Hx(){let{router:r}=jg("useSubmit"),{basename:e}=le.useContext(si),t=ox(),s=r.fetch,o=r.navigate;return le.useCallback(async(l,c={})=>{let{action:d,method:p,encType:h,formData:_,body:x}=xx(l,e);if(c.navigate===!1){let v=c.fetcherKey||Vx();await s(v,t,c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:x,formMethod:c.method||p,formEncType:c.encType||h,flushSync:c.flushSync})}else await o(c.action||d,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:_,body:x,formMethod:c.method||p,formEncType:c.encType||h,replace:c.replace,state:c.state,fromRouteId:t,flushSync:c.flushSync,viewTransition:c.viewTransition})},[s,o,e,t])}function Gx(r,{relative:e}={}){let{basename:t}=le.useContext(si),s=le.useContext(sr);rn(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...so(r||".",{relative:e})},c=Fr();if(r==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let _=d.toString();l.search=_?`?${_}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Ji([t,l.pathname])),Ja(l)}function Wx(r,{relative:e}={}){let t=le.useContext(Ig);rn(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=jg("useViewTransitionState"),o=so(r,{relative:e});if(!t.isTransitioning)return!1;let l=nr(t.currentLocation.pathname,s)||t.currentLocation.pathname,c=nr(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Jl(o.pathname,c)!=null||Jl(o.pathname,l)!=null}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Vt=(r,e)=>{const t=le.forwardRef(({color:s="currentColor",size:o=24,strokeWidth:l=2,absoluteStrokeWidth:c,className:d="",children:p,...h},_)=>le.createElement("svg",{ref:_,...jx,width:o,height:o,stroke:s,strokeWidth:c?Number(l)*24/Number(o):l,className:["lucide",`lucide-${Xx(r)}`,d].join(" "),...h},[...e.map(([x,v])=>le.createElement(x,v)),...Array.isArray(p)?p:[p]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Vt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Vt("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Vt("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=Vt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Vt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Vt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Vt("Dumbbell",[["path",{d:"m6.5 6.5 11 11",key:"f7oqzb"}],["path",{d:"m21 21-1-1",key:"cpc6if"}],["path",{d:"m3 3 1 1",key:"d3rpuf"}],["path",{d:"m18 22 4-4",key:"1e32o6"}],["path",{d:"m2 6 4-4",key:"189tqz"}],["path",{d:"m3 10 7-7",key:"1bxui2"}],["path",{d:"m14 21 7-7",key:"16x78n"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Vt("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=Vt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Vt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Vt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Vt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Vt("Medal",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Vt("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Vt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Vt("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Vt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Vt("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Vt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Vt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Vt("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Vt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Vt("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Vt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=Vt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),my=()=>{const[r,e]=le.useState(""),t="Transforming ideas into intelligent solutions",s=kg(),o=l=>{s(`/#${l}`)};return le.useEffect(()=>{let l=0;const c=()=>{l<t.length&&(e(t.slice(0,l+1)),l++,setTimeout(c,100))};setTimeout(c,1e3)},[]),N.jsx("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:N.jsxs("div",{className:"relative z-10 text-center px-4 max-w-4xl mx-auto",children:[N.jsxs("div",{className:"mb-8",children:[N.jsx("h3",{className:"text-5xl md:text-7xl font-bold mb-4 gradient-text",children:"KIAH MANDALIYA"}),N.jsx("div",{className:"h-12 flex items-center justify-center",children:N.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 font-light",children:[r,N.jsx("span",{className:"inline-block w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"})]})})]}),N.jsxs("div",{className:"flex justify-center gap-8 mb-12",children:[N.jsxs("div",{className:"flex items-center gap-2 text-cyan-400",children:[N.jsx(Ud,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Developer"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-purple-400",children:[N.jsx(Kx,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Engineer"})]}),N.jsxs("div",{className:"flex items-center gap-2 text-green-400",children:[N.jsx(Ys,{className:"w-6 h-6"}),N.jsx("span",{className:"hidden md:inline",children:"Innovator"})]})]}),N.jsxs("div",{className:"flex justify-center gap-4",children:[N.jsx("button",{className:"glow-button bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105",onClick:()=>{const l=document.createElement("a");l.href="/Kiah_Resume.pdf",l.download="Kiah_Resume.pdf",l.click()},children:"Download Resume"}),N.jsx("button",{className:"glow-button border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300",onClick:()=>o("contact"),children:"Get In Touch"})]})]})})},gy=()=>{const r=le.useRef(null);le.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".project-item").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Truck Routing Optimization Web App",description:"A full-stack web application designed to solve the Vehicle Routing Problem using machine learning and routing algorithms.",image:"https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800",icon:ry,techStack:["ReactJS","Python (FastAPI)","PostgreSQL","OR-Tools","KMeans","OSRM"],features:["Uses KMeans clustering to strategically group destinations","Integrates OSRM for accurate real-world distances","Solves the complex Vehicle Routing Problem utilizing OR-Tools"],color:"cyan",github:"#",live:"#"},{id:2,title:"Numerology Calculator",description:"A logic-based calculator that computes various numerological numbers based on Chaldean numerology principles.",image:"https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",icon:$x,techStack:["C"],features:["Calculates Birth Number securely and instantly","Generates Life Path Number based on exact date inputs","Computes Personality Number adhering to Chaldean numerology"],color:"purple",github:"#",live:"#"},{id:3,title:"Shopping Website",description:"A responsive clothing e-commerce website with a strong focus on navigation and highly interactive UI/UX elements.",image:"https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",icon:uy,techStack:["HTML","CSS","JavaScript"],features:["Fully responsive clothing showcase layout","Interactive sign-in and sign-up toggle system","Optimized UI/UX tailored for smooth intuitive navigation"],color:"green",github:"#",live:"#"},{id:4,title:"Fitness Tracking Website",description:"A workout planning platform enabling users to track metrics and plan their fitness journeys seamlessly.",image:"https://images.pexels.com/photos/4162491/pexels-photo-4162491.jpeg?auto=compress&cs=tinysrgb&w=800",icon:Qx,techStack:["HTML","CSS","JavaScript"],features:["Comprehensive workout planning and tracking platform","Integrated BMI calculator for personalized metric monitoring","Secure user authentication feature"],color:"orange",github:"#",live:"#"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"};case"purple":return{border:"border-purple-400",text:"text-purple-400",check:"bg-purple-400",btn:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400"};case"green":return{border:"border-green-400",text:"text-green-400",check:"bg-green-400",btn:"bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400"};case"orange":return{border:"border-orange-400",text:"text-orange-400",check:"bg-orange-400",btn:"bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400"};default:return{border:"border-cyan-400",text:"text-cyan-400",check:"bg-cyan-400",btn:"bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"}}};return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Featured Projects"}),N.jsx("div",{className:"grid gap-8 md:gap-12",children:e.map((s,o)=>{const l=t(s.color);return N.jsxs("div",{className:`project-item fade-up grid md:grid-cols-2 gap-8 items-center ${o%2===1?"md:grid-flow-dense":""}`,style:{animationDelay:`${o*.2}s`},children:[N.jsxs("div",{className:`relative overflow-hidden rounded-2xl ${o%2===1?"md:col-start-2":""}`,children:[N.jsx("img",{src:s.image,alt:s.title,className:"w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-110"}),N.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"}),N.jsx("div",{className:"absolute bottom-4 left-4 right-4",children:N.jsxs("div",{className:"flex items-center gap-2 text-white mb-2",children:[N.jsx(s.icon,{className:"w-5 h-5"}),N.jsx("span",{className:"font-semibold",children:s.title})]})})]}),N.jsxs("div",{className:`space-y-6 ${o%2===1?"md:col-start-1":""}`,children:[N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl md:text-3xl font-bold text-white mb-4",children:s.title}),N.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description})]}),N.jsxs("div",{children:[N.jsx("h4",{className:`text-lg font-semibold ${l.text} mb-3`,children:"Tech Stack"}),N.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map((c,d)=>N.jsx("span",{className:`px-3 py-1 rounded-full text-sm border ${l.border} ${l.text}`,children:c},d))})]}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-lg font-semibold text-white mb-3",children:"Key Features"}),N.jsx("ul",{className:"space-y-2",children:s.features.map((c,d)=>N.jsxs("li",{className:"text-gray-300 flex items-start",children:[N.jsx("span",{className:`w-2 h-2 ${l.check} rounded-full mr-3 mt-2 flex-shrink-0`}),N.jsx("span",{children:c})]},d))})]}),N.jsxs("div",{className:"flex gap-4",children:[N.jsxs("a",{href:s.github,className:"glow-button flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300",children:[N.jsx(Xg,{className:"w-5 h-5"}),"Code"]}),N.jsxs("a",{href:s.live,className:`glow-button flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${l.btn} text-white`,children:[N.jsx(Jx,{className:"w-5 h-5"}),"Live Demo"]})]})]})]},s.id)})})]})})},vy=()=>{const r=le.useRef(null);le.useEffect(()=>{const s=new IntersectionObserver(o=>{o.forEach(l=>{l.isIntersecting&&l.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".hackathon-card").forEach(l=>s.observe(l)),()=>s.disconnect()},[]);const e=[{id:1,title:"Innovate Bharat Hackathon",year:"2026",result:"Finalist",description:"Built an AI-powered mobile app to deeply analyze product labels for ingredient safety and insights.",icon:hy,contributions:["Implemented robust ingredient extraction and safety insights generation","Enabled personalized analysis targeting explicit allergies and sensitivities","Developed harmful ingredient detection, claim verifications, and safer alternatives","Integrated a responsive conversational chatbot with TTS/STT capabilities"],technologies:["Flutter","FastAPI","AI","TTS/STT"],color:"cyan"},{id:2,title:"HackaMined",year:"2026",result:"Participant",description:"Pioneered a smart job market analytics platform leveraging live scraping and actionable insights.",icon:Yx,contributions:["Scraped rich live data from LinkedIn and Naukri utilizing BeautifulSoup","Generated crucial insights including market trends, skills gaps, and AI risks","Built a sophisticated RAG-based intelligent chatbot powered by the Ollama API"],technologies:["Python","FastAPI","PostgreSQL","BeautifulSoup","RAG"],color:"purple"},{id:3,title:"Smart India Hackathon",year:"2025",result:"Internal Finalist",description:"Developed an accessible conversational RASA chatbot crafted specifically to empower rural communities.",icon:iy,contributions:["Designed custom RASA conversational models tailored for regional context","Successfully integrated the bot with Twilio for widespread SMS and WhatsApp access"],technologies:["Python","FastAPI","RASA","Twilio"],color:"green"}],t=s=>{switch(s){case"cyan":return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"};case"purple":return{border:"border-purple-400",text:"text-purple-400",bg:"bg-purple-500/20 text-purple-400",iconBg:"bg-gradient-to-br from-purple-500 to-pink-500"};case"green":return{border:"border-green-400",text:"text-green-400",bg:"bg-green-500/20 text-green-400",iconBg:"bg-gradient-to-br from-green-500 to-emerald-500"};default:return{border:"border-cyan-400",text:"text-cyan-400",bg:"bg-cyan-500/20 text-cyan-400",iconBg:"bg-gradient-to-br from-cyan-500 to-blue-500"}}};return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-4xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Hackathons & Achievements"}),N.jsx("div",{className:"space-y-8",children:e.map((s,o)=>{const l=t(s.color);return N.jsx("div",{className:"hackathon-card fade-up bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group",style:{animationDelay:`${o*.15}s`},children:N.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[N.jsx("div",{className:"flex-shrink-0",children:N.jsx("div",{className:`w-16 h-16 rounded-xl flex items-center justify-center ${l.iconBg} shadow-lg`,children:N.jsx(s.icon,{className:"w-8 h-8 text-white"})})}),N.jsxs("div",{className:"flex-grow space-y-4",children:[N.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2",children:N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white flex items-center gap-3",children:s.title}),N.jsxs("div",{className:"flex flex-wrap gap-3 mt-2",children:[N.jsx("span",{className:"text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full text-sm font-semibold",children:s.year}),N.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-semibold border ${l.border} ${l.text}`,children:s.result})]})]})}),N.jsx("p",{className:"text-gray-300 text-lg leading-relaxed",children:s.description}),N.jsxs("div",{children:[N.jsx("h4",{className:"text-sm font-semibold text-white mb-3 uppercase tracking-wider",children:"Key Contributions"}),N.jsx("ul",{className:"space-y-2",children:s.contributions.map((c,d)=>N.jsxs("li",{className:"text-gray-300 flex items-start text-sm md:text-base",children:[N.jsx(fy,{className:`w-4 h-4 ${l.text} mr-3 mt-1 flex-shrink-0`}),N.jsx("span",{children:c})]},d))})]}),N.jsx("div",{className:"pt-2 border-t border-gray-700 border-dashed",children:N.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:s.technologies.map((c,d)=>N.jsx("span",{className:`px-3 py-1 rounded-full text-xs font-semibold ${l.bg}`,children:c},d))})})]})]})},s.id)})})]})})},_y=()=>{const r=le.useRef(null),[e,t]=le.useState(!1),s=[{name:"C Programming",level:85,color:"#00D4FF"},{name:"HTML/CSS",level:90,color:"#8B5CF6"},{name:"JavaScript",level:80,color:"#00FF94"},{name:"React.js",level:85,color:"#F97316"},{name:"Python",level:75,color:"#EF4444"},{name:"Machine Learning",level:70,color:"#10B981"},{name:"Git/GitHub",level:85,color:"#3B82F6"},{name:"Node.js",level:65,color:"#8B5CF6"}];return le.useEffect(()=>{const o=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&t(!0)})},{threshold:.3});return r.current&&o.observe(r.current),()=>o.disconnect()},[]),N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Technical Arsenal"}),N.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[N.jsx("div",{className:"relative flex items-center justify-center",children:N.jsxs("div",{className:"relative w-80 h-80",children:[N.jsx("div",{className:"absolute inset-0 rounded-full border-2 border-gray-700 opacity-30"}),N.jsx("div",{className:"absolute inset-4 rounded-full border border-gray-700 opacity-20"}),N.jsx("div",{className:"absolute inset-8 rounded-full border border-gray-700 opacity-10"}),N.jsx("div",{className:"absolute inset-0 rounded-full overflow-hidden",children:N.jsx("div",{className:"absolute top-1/2 left-1/2 w-1 h-1/2 bg-gradient-to-t from-cyan-400 to-transparent origin-bottom radar-sweep",style:{transform:"translate(-50%, -100%)"}})}),N.jsx("div",{className:"absolute top-1/2 left-1/2 w-3 h-3 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 pulse-glow"})]})}),N.jsx("div",{className:"space-y-6",children:s.map((o,l)=>N.jsxs("div",{className:"skill-item",children:[N.jsxs("div",{className:"flex justify-between items-center mb-2",children:[N.jsx("h3",{className:"text-lg font-semibold text-white",children:o.name}),N.jsxs("span",{className:"text-sm text-gray-400",children:[o.level,"%"]})]}),N.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2 overflow-hidden",children:N.jsx("div",{className:"h-full rounded-full transition-all duration-1000 ease-out",style:{width:e?`${o.level}%`:"0%",background:`linear-gradient(90deg, ${o.color}, ${o.color}80)`,transitionDelay:`${l*.1}s`}})})]},l))})]}),N.jsx("div",{className:"mt-16 grid grid-cols-2 md:grid-cols-4 gap-6",children:s.map((o,l)=>N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 text-center hover-lift border border-gray-700 hover:border-cyan-400 transition-all duration-300",style:{animationDelay:`${l*.1}s`},children:[N.jsx("div",{className:"w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-xl font-bold",style:{backgroundColor:`${o.color}20`,color:o.color},children:o.name.charAt(0)}),N.jsx("h4",{className:"text-sm font-medium text-white",children:o.name})]},l))})]})})},xy=()=>{const r=le.useRef(null);le.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".explore-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:cy,title:"React Native",description:"Building cross-platform mobile applications with native performance",status:"Learning",color:"cyan",progress:60},{icon:ly,title:"Backend APIs",description:"Developing robust REST APIs with Node.js and Express",status:"Practicing",color:"purple",progress:70},{icon:Zx,title:"Database Design",description:"Mastering SQL and NoSQL database optimization",status:"Exploring",color:"green",progress:50},{icon:qx,title:"Cloud Computing",description:"Learning AWS services and cloud architecture patterns",status:"Starting",color:"orange",progress:30},{icon:Ys,title:"GraphQL",description:"Modern API query language for efficient data fetching",status:"Interested",color:"pink",progress:20},{icon:Ud,title:"TypeScript",description:"Adding type safety to JavaScript applications",status:"Practicing",color:"blue",progress:75}];return N.jsx("section",{ref:r,className:"py-20 px-4 bg-gray-900",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Current Explorations"}),N.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"The journey never stops. Here's what I'm diving into next to expand my technical horizons."})]}),N.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:e.map((t,s)=>N.jsxs("div",{className:"explore-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover-lift group",style:{animationDelay:`${s*.1}s`},children:[N.jsxs("div",{className:"flex items-center justify-between mb-4",children:[N.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:N.jsx(t.icon,{className:"w-6 h-6"})}),N.jsx("span",{className:`text-xs font-semibold px-3 py-1 rounded-full ${t.color==="cyan"?"bg-cyan-500/20 text-cyan-400":t.color==="purple"?"bg-purple-500/20 text-purple-400":t.color==="green"?"bg-green-500/20 text-green-400":t.color==="orange"?"bg-orange-500/20 text-orange-400":t.color==="pink"?"bg-pink-500/20 text-pink-400":"bg-blue-500/20 text-blue-400"}`,children:t.status})]}),N.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:t.title}),N.jsx("p",{className:"text-gray-300 text-sm mb-4",children:t.description}),N.jsxs("div",{className:"space-y-2",children:[N.jsxs("div",{className:"flex justify-between items-center",children:[N.jsx("span",{className:"text-xs text-gray-400",children:"Progress"}),N.jsxs("span",{className:"text-xs text-gray-400",children:[t.progress,"%"]})]}),N.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2",children:N.jsx("div",{className:`h-full rounded-full transition-all duration-1000 ease-out ${t.color==="cyan"?"bg-gradient-to-r from-cyan-500 to-cyan-400":t.color==="purple"?"bg-gradient-to-r from-purple-500 to-purple-400":t.color==="green"?"bg-gradient-to-r from-green-500 to-green-400":t.color==="orange"?"bg-gradient-to-r from-orange-500 to-orange-400":t.color==="pink"?"bg-gradient-to-r from-pink-500 to-pink-400":"bg-gradient-to-r from-blue-500 to-blue-400"}`,style:{width:`${t.progress}%`}})})]})]},s))}),N.jsx("div",{className:"mt-16 text-center",children:N.jsxs("div",{className:"inline-flex items-center gap-4 bg-gray-800/60 backdrop-blur-sm rounded-full px-8 py-4 border border-gray-700",children:[N.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),N.jsx("span",{className:"text-gray-300",children:"Currently learning React Native & Backend APIs"})]})})]})})},yy=()=>{const[r,e]=le.useState(0),[t,s]=le.useState(""),[o,l]=le.useState(!0),c=le.useRef(null),d=["$ cd /career/internships","$ ls -la","ScaleTech-2024/","$ cd ScaleTech-2024","$ cat experience.txt","Software Development Intern","Technologies: React, Node.js, MongoDB","Duration: 3 months","Impact: Improved application performance by 40%","$ git log --oneline","a1b2c3d Feature: User authentication system","e4f5g6h Fix: Database optimization","i7j8k9l Feature: Real-time notifications","$ exit"];le.useEffect(()=>{const h=new IntersectionObserver(_=>{_.forEach(x=>{x.isIntersecting&&p()})},{threshold:.5});return c.current&&h.observe(c.current),()=>h.disconnect()},[]);const p=()=>{let h=0,_=0;const x=()=>{if(h<d.length){const v=d[h];_<v.length?(s(v.slice(0,_+1)),_++,setTimeout(x,50)):setTimeout(()=>{h++,_=0,e(h),h<d.length&&x()},1e3)}};x()};return le.useEffect(()=>{const h=setInterval(()=>{l(_=>!_)},500);return()=>clearInterval(h)},[]),N.jsx("section",{ref:c,className:"py-20 px-4 bg-gray-800/50",children:N.jsxs("div",{className:"max-w-6xl mx-auto",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-center mb-16 gradient-text",children:"Professional Experience"}),N.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[N.jsxs("div",{className:"terminal",children:[N.jsxs("div",{className:"terminal-header",children:[N.jsx("div",{className:"terminal-dot red"}),N.jsx("div",{className:"terminal-dot yellow"}),N.jsx("div",{className:"terminal-dot green"}),N.jsx("span",{className:"text-gray-400 text-sm ml-4",children:"kiah@scaletech:~"})]}),N.jsxs("div",{className:"p-6 font-mono text-sm space-y-2 min-h-96",children:[d.slice(0,r).map((h,_)=>N.jsx("div",{className:"flex items-center",children:h.startsWith("$")?N.jsx("span",{className:"text-green-400",children:h}):N.jsx("span",{className:"text-gray-300 pl-2",children:h})},_)),N.jsx("div",{className:"flex items-center",children:N.jsxs("span",{className:"text-green-400",children:[t,o&&N.jsx("span",{className:"text-cyan-400",children:"|"})]})})]})]}),N.jsxs("div",{className:"space-y-8",children:[N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700",children:[N.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[N.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center",children:N.jsx(dy,{className:"w-8 h-8 text-white"})}),N.jsxs("div",{children:[N.jsx("h3",{className:"text-2xl font-bold text-white",children:"ScaleTech"}),N.jsx("p",{className:"text-cyan-400 font-semibold",children:"Software Development Intern"})]})]}),N.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-6",children:[N.jsxs("div",{className:"bg-gray-700/50 rounded-lg p-4",children:[N.jsx(Ud,{className:"w-6 h-6 text-cyan-400 mb-2"}),N.jsx("p",{className:"text-white font-semibold",children:"Technologies"}),N.jsx("p",{className:"text-gray-300 text-sm",children:"React, Node.js, MongoDB"})]}),N.jsxs("div",{className:"bg-gray-700/50 rounded-lg p-4",children:[N.jsx(py,{className:"w-6 h-6 text-purple-400 mb-2"}),N.jsx("p",{className:"text-white font-semibold",children:"Team Size"}),N.jsx("p",{className:"text-gray-300 text-sm",children:"5 developers"})]})]}),N.jsxs("div",{className:"space-y-4",children:[N.jsx("h4",{className:"text-lg font-semibold text-white",children:"Key Achievements"}),N.jsxs("ul",{className:"space-y-2",children:[N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(Ys,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Improved application performance by 40% through code optimization"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(Ys,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Implemented user authentication system with JWT tokens"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(Ys,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Developed real-time notification system using WebSockets"})]}),N.jsxs("li",{className:"flex items-start gap-3",children:[N.jsx(Ys,{className:"w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0"}),N.jsx("span",{className:"text-gray-300",children:"Collaborated with cross-functional teams using Agile methodology"})]})]})]})]}),N.jsx("div",{className:"text-center",children:N.jsxs("div",{className:"inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold",children:[N.jsx(ay,{className:"w-5 h-5"}),"3 Months of Real-World Experience"]})})]})]})]})})},Sy=()=>{const r=le.useRef(null);le.useEffect(()=>{const t=new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1,rootMargin:"50px"});return r.current&&r.current.querySelectorAll(".contact-item").forEach(o=>t.observe(o)),()=>t.disconnect()},[]);const e=[{icon:Xg,name:"GitHub",url:"https://github.com/kiahcodes",color:"text-gray-400 hover:text-white",bgColor:"hover:bg-gray-800"},{icon:ey,name:"LinkedIn",url:"https://www.linkedin.com/in/kiah-mandaliya/",color:"text-blue-400 hover:text-blue-300",bgColor:"hover:bg-blue-500/20"}];return N.jsxs("section",{ref:r,className:"py-20 px-4 bg-gray-900 relative overflow-hidden",children:[N.jsxs("div",{className:"absolute inset-0 opacity-10",children:[N.jsx("div",{className:"absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full blur-3xl animate-pulse"}),N.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse",style:{animationDelay:"1s"}})]}),N.jsxs("div",{className:"max-w-6xl mx-auto relative z-10",children:[N.jsxs("div",{className:"text-center mb-16",children:[N.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-4 gradient-text",children:"Let's Connect"}),N.jsx("p",{className:"text-xl text-gray-300 max-w-2xl mx-auto",children:"Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!"})]}),N.jsxs("div",{className:"grid md:grid-cols-2 gap-12 items-center",children:[N.jsxs("div",{className:"contact-item fade-up bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Send a Message"}),N.jsxs("form",{action:"https://api.web3forms.com/submit",method:"POST",className:"space-y-6",children:[N.jsx("input",{type:"hidden",name:"access_key",value:"ca4286d4-dc11-425f-9662-7d08345193af"}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Your Name"}),N.jsx("input",{type:"text",name:"name",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your name"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Email Address"}),N.jsx("input",{type:"email",name:"email",required:!0,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white",placeholder:"Enter your email"})]}),N.jsxs("div",{children:[N.jsx("label",{className:"block text-sm font-medium text-gray-300 mb-2",children:"Message"}),N.jsx("textarea",{name:"message",required:!0,rows:4,className:"w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors text-white resize-none",placeholder:"Write your message..."})]}),N.jsxs("button",{type:"submit",className:"glow-button w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2",children:[N.jsx(oy,{className:"w-5 h-5"}),"Send Message"]})]})]}),N.jsxs("div",{className:"contact-item fade-up space-y-8",style:{animationDelay:"0.2s"},children:[N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700",children:[N.jsx("h3",{className:"text-2xl font-bold text-white mb-6",children:"Get in Touch"}),N.jsxs("div",{className:"space-y-4",children:[N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center",children:N.jsx(ty,{className:"w-6 h-6 text-cyan-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Email"}),N.jsx("p",{className:"text-white font-semibold",children:"kiahdmandaliya@gmail.com"})]})]}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center",children:N.jsx(sy,{className:"w-6 h-6 text-green-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Phone"}),N.jsx("p",{className:"text-white font-semibold",children:"+91 8140800042"})]})]}),N.jsxs("div",{className:"flex items-center gap-4",children:[N.jsx("div",{className:"w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center",children:N.jsx(ny,{className:"w-6 h-6 text-purple-400"})}),N.jsxs("div",{children:[N.jsx("p",{className:"text-gray-300",children:"Location"}),N.jsx("p",{className:"text-white font-semibold",children:"Ahmedabad, India"})]})]})]})]}),N.jsxs("div",{className:"bg-gray-800/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-700",children:[N.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"Find me Online"}),N.jsx("div",{className:"flex gap-4",children:e.map((t,s)=>N.jsx("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 rounded-xl border border-gray-600 flex items-center justify-center transition-all duration-300 ${t.color} ${t.bgColor} hover:border-opacity-0 hover:scale-110`,children:N.jsx(t.icon,{className:"w-5 h-5"})},s))})]}),N.jsx("div",{className:"text-center",children:N.jsxs("div",{className:"inline-flex items-center gap-3 bg-green-500/20 text-green-400 px-6 py-3 rounded-full font-semibold",children:[N.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full animate-pulse"}),"Available for opportunities"]})})]})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="183",My=0,Tm=1,Ey=2,$l=1,wy=2,Ka=3,Ur=0,Un=1,Qi=2,er=0,Ks=1,Ff=2,Am=3,bm=4,Ty=5,ss=100,Ay=101,by=102,Cy=103,Ry=104,Py=200,Ly=201,Dy=202,Ny=203,Of=204,kf=205,Iy=206,Uy=207,Fy=208,Oy=209,ky=210,By=211,zy=212,Vy=213,Hy=214,Bf=0,zf=1,Vf=2,Qs=3,Hf=4,Gf=5,Wf=6,jf=7,$g=0,Gy=1,Wy=2,Ni=0,qg=1,Yg=2,Kg=3,Zg=4,Qg=5,Jg=6,e0=7,t0=300,cs=301,Js=302,ef=303,tf=304,cu=306,Xf=1e3,Wn=1001,$f=1002,hn=1003,jy=1004,yl=1005,en=1006,nf=1007,os=1008,ni=1009,n0=1010,i0=1011,eo=1012,Od=1013,Ii=1014,_i=1015,Ui=1016,kd=1017,Bd=1018,to=1020,r0=35902,s0=35899,a0=1021,o0=1022,ii=1023,ir=1026,ls=1027,l0=1028,zd=1029,ea=1030,Vd=1031,Hd=1033,ql=33776,Yl=33777,Kl=33778,Zl=33779,qf=35840,Yf=35841,Kf=35842,Zf=35843,Qf=36196,Jf=37492,ed=37496,td=37488,nd=37489,id=37490,rd=37491,sd=37808,ad=37809,od=37810,ld=37811,ud=37812,cd=37813,fd=37814,dd=37815,hd=37816,pd=37817,md=37818,gd=37819,vd=37820,_d=37821,xd=36492,yd=36494,Sd=36495,Md=36283,Ed=36284,wd=36285,Td=36286,Xy=3200,$y=0,qy=1,Nr="",ti="srgb",ta="srgb-linear",eu="linear",Nt="srgb",Us=7680,Cm=519,Yy=512,Ky=513,Zy=514,Gd=515,Qy=516,Jy=517,Wd=518,eS=519,Rm=35044,Pm="300 es",Di=2e3,tu=2001;function tS(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function nS(){const r=nu("canvas");return r.style.display="block",r}const Lm={};function Dm(...r){const e="THREE."+r.shift();console.log(e,...r)}function u0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function lt(...r){r=u0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ct(...r){r=u0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function iu(...r){const e=r.join(" ");e in Lm||(Lm[e]=!0,lt(...r))}function iS(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}const rS={[Bf]:zf,[Vf]:Wf,[Hf]:jf,[Qs]:Gf,[zf]:Bf,[Wf]:Vf,[jf]:Hf,[Gf]:Qs};class ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const o=s[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rf=Math.PI/180,Ad=180/Math.PI;function ao(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[s&255]+_n[s>>8&255]+_n[s>>16&255]+_n[s>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function sS(r,e){return(r%e+e)%e}function sf(r,e,t){return(1-t)*r+t*e}function Ha(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function In(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*s-c*o+e.x,this.y=l*o+c*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sa{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,c,d){let p=s[o+0],h=s[o+1],_=s[o+2],x=s[o+3],v=l[c+0],M=l[c+1],E=l[c+2],b=l[c+3];if(x!==b||p!==v||h!==M||_!==E){let y=p*v+h*M+_*E+x*b;y<0&&(v=-v,M=-M,E=-E,b=-b,y=-y);let S=1-d;if(y<.9995){const C=Math.acos(y),D=Math.sin(C);S=Math.sin(S*C)/D,d=Math.sin(d*C)/D,p=p*S+v*d,h=h*S+M*d,_=_*S+E*d,x=x*S+b*d}else{p=p*S+v*d,h=h*S+M*d,_=_*S+E*d,x=x*S+b*d;const C=1/Math.sqrt(p*p+h*h+_*_+x*x);p*=C,h*=C,_*=C,x*=C}}e[t]=p,e[t+1]=h,e[t+2]=_,e[t+3]=x}static multiplyQuaternionsFlat(e,t,s,o,l,c){const d=s[o],p=s[o+1],h=s[o+2],_=s[o+3],x=l[c],v=l[c+1],M=l[c+2],E=l[c+3];return e[t]=d*E+_*x+p*M-h*v,e[t+1]=p*E+_*v+h*x-d*M,e[t+2]=h*E+_*M+d*v-p*x,e[t+3]=_*E-d*x-p*v-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,p=Math.sin,h=d(s/2),_=d(o/2),x=d(l/2),v=p(s/2),M=p(o/2),E=p(l/2);switch(c){case"XYZ":this._x=v*_*x+h*M*E,this._y=h*M*x-v*_*E,this._z=h*_*E+v*M*x,this._w=h*_*x-v*M*E;break;case"YXZ":this._x=v*_*x+h*M*E,this._y=h*M*x-v*_*E,this._z=h*_*E-v*M*x,this._w=h*_*x+v*M*E;break;case"ZXY":this._x=v*_*x-h*M*E,this._y=h*M*x+v*_*E,this._z=h*_*E+v*M*x,this._w=h*_*x-v*M*E;break;case"ZYX":this._x=v*_*x-h*M*E,this._y=h*M*x+v*_*E,this._z=h*_*E-v*M*x,this._w=h*_*x+v*M*E;break;case"YZX":this._x=v*_*x+h*M*E,this._y=h*M*x+v*_*E,this._z=h*_*E-v*M*x,this._w=h*_*x-v*M*E;break;case"XZY":this._x=v*_*x-h*M*E,this._y=h*M*x-v*_*E,this._z=h*_*E+v*M*x,this._w=h*_*x+v*M*E;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],c=t[1],d=t[5],p=t[9],h=t[2],_=t[6],x=t[10],v=s+d+x;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(_-p)*M,this._y=(l-h)*M,this._z=(c-o)*M}else if(s>d&&s>x){const M=2*Math.sqrt(1+s-d-x);this._w=(_-p)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(l+h)/M}else if(d>x){const M=2*Math.sqrt(1+d-s-x);this._w=(l-h)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(p+_)/M}else{const M=2*Math.sqrt(1+x-s-d);this._w=(c-o)/M,this._x=(l+h)/M,this._y=(p+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,c=e._w,d=t._x,p=t._y,h=t._z,_=t._w;return this._x=s*_+c*d+o*h-l*p,this._y=o*_+c*p+l*d-s*h,this._z=l*_+c*h+s*p-o*d,this._w=c*_-s*d-o*p-l*h,this._onChangeCallback(),this}slerp(e,t){let s=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(s=-s,o=-o,l=-l,c=-c,d=-d);let p=1-t;if(d<.9995){const h=Math.acos(d),_=Math.sin(h);p=Math.sin(p*h)/_,t=Math.sin(t*h)/_,this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+s*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,t=0,s=0){re.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,c=e.y,d=e.z,p=e.w,h=2*(c*o-d*s),_=2*(d*t-l*o),x=2*(l*s-c*t);return this.x=t+p*h+c*x-d*_,this.y=s+p*_+d*h-l*x,this.z=o+p*x+l*_-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,c=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*c-s*p,this.z=s*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(St(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new re,Nm=new sa;class ht{constructor(e,t,s,o,l,c,d,p,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,h)}set(e,t,s,o,l,c,d,p,h){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=t,_[4]=l,_[5]=p,_[6]=s,_[7]=c,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[3],p=s[6],h=s[1],_=s[4],x=s[7],v=s[2],M=s[5],E=s[8],b=o[0],y=o[3],S=o[6],C=o[1],D=o[4],P=o[7],k=o[2],O=o[5],z=o[8];return l[0]=c*b+d*C+p*k,l[3]=c*y+d*D+p*O,l[6]=c*S+d*P+p*z,l[1]=h*b+_*C+x*k,l[4]=h*y+_*D+x*O,l[7]=h*S+_*P+x*z,l[2]=v*b+M*C+E*k,l[5]=v*y+M*D+E*O,l[8]=v*S+M*P+E*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],_=e[8];return t*c*_-t*d*h-s*l*_+s*d*p+o*l*h-o*c*p}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],_=e[8],x=_*c-d*h,v=d*p-_*l,M=h*l-c*p,E=t*x+s*v+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(o*h-_*s)*b,e[2]=(d*s-o*c)*b,e[3]=v*b,e[4]=(_*t-o*p)*b,e[5]=(o*l-d*t)*b,e[6]=M*b,e[7]=(s*p-h*t)*b,e[8]=(c*t-s*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,c,d){const p=Math.cos(l),h=Math.sin(l);return this.set(s*p,s*h,-s*(p*c+h*d)+c+e,-o*h,o*p,-o*(-h*c+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(of.makeScale(e,t)),this}rotate(e){return this.premultiply(of.makeRotation(-e)),this}translate(e,t){return this.premultiply(of.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const of=new ht,Im=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Um=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aS(){const r={enabled:!0,workingColorSpace:ta,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Nt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Zs(o.r),o.g=Zs(o.g),o.b=Zs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?eu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return iu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return iu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[ta]:{primaries:e,whitePoint:s,transfer:eu,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:s,transfer:Nt,toXYZ:Im,fromXYZ:Um,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),r}const Tt=aS();function tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Fs;class oS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Fs===void 0&&(Fs=nu("canvas")),Fs.width=e.width,Fs.height=e.height;const o=Fs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),s=Fs}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nu("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=tr(l[c]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(tr(t[s]/255)*255):t[s]=tr(t[s]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lS=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(lf(o[c].image)):l.push(lf(o[c]))}else l=lf(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function lf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?oS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let uS=0;const uf=new re;class Tn extends ra{constructor(e=Tn.DEFAULT_IMAGE,t=Tn.DEFAULT_MAPPING,s=Wn,o=Wn,l=en,c=os,d=ii,p=ni,h=Tn.DEFAULT_ANISOTROPY,_=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=ao(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uf).x}get height(){return this.source.getSize(uf).y}get depth(){return this.source.getSize(uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==t0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xf:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case $f:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xf:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case $f:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tn.DEFAULT_IMAGE=null;Tn.DEFAULT_MAPPING=t0;Tn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,s=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*s+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*s+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*s+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*s+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const p=e.elements,h=p[0],_=p[4],x=p[8],v=p[1],M=p[5],E=p[9],b=p[2],y=p[6],S=p[10];if(Math.abs(_-v)<.01&&Math.abs(x-b)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+b)<.1&&Math.abs(E+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,P=(M+1)/2,k=(S+1)/2,O=(_+v)/4,z=(x+b)/4,T=(E+y)/4;return D>P&&D>k?D<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(D),o=O/s,l=z/s):P>k?P<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),s=O/o,l=T/o):k<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),s=z/l,o=T/l),this.set(s,o,l,t),this}let C=Math.sqrt((y-E)*(y-E)+(x-b)*(x-b)+(v-_)*(v-_));return Math.abs(C)<.001&&(C=1),this.x=(y-E)/C,this.y=(x-b)/C,this.z=(v-_)/C,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(St(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cS extends ra{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:s.depth},l=new Tn(o),c=s.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new jd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xi extends cS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class c0 extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fS extends Tn{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=hn,this.minFilter=hn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e,t,s,o,l,c,d,p,h,_,x,v,M,E,b,y){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,c,d,p,h,_,x,v,M,E,b,y)}set(e,t,s,o,l,c,d,p,h,_,x,v,M,E,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=s,S[12]=o,S[1]=l,S[5]=c,S[9]=d,S[13]=p,S[2]=h,S[6]=_,S[10]=x,S[14]=v,S[3]=M,S[7]=E,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,s=e.elements,o=1/Os.setFromMatrixColumn(e,0).length(),l=1/Os.setFromMatrixColumn(e,1).length(),c=1/Os.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*c,t[9]=s[9]*c,t[10]=s[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,c=Math.cos(s),d=Math.sin(s),p=Math.cos(o),h=Math.sin(o),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const v=c*_,M=c*x,E=d*_,b=d*x;t[0]=p*_,t[4]=-p*x,t[8]=h,t[1]=M+E*h,t[5]=v-b*h,t[9]=-d*p,t[2]=b-v*h,t[6]=E+M*h,t[10]=c*p}else if(e.order==="YXZ"){const v=p*_,M=p*x,E=h*_,b=h*x;t[0]=v+b*d,t[4]=E*d-M,t[8]=c*h,t[1]=c*x,t[5]=c*_,t[9]=-d,t[2]=M*d-E,t[6]=b+v*d,t[10]=c*p}else if(e.order==="ZXY"){const v=p*_,M=p*x,E=h*_,b=h*x;t[0]=v-b*d,t[4]=-c*x,t[8]=E+M*d,t[1]=M+E*d,t[5]=c*_,t[9]=b-v*d,t[2]=-c*h,t[6]=d,t[10]=c*p}else if(e.order==="ZYX"){const v=c*_,M=c*x,E=d*_,b=d*x;t[0]=p*_,t[4]=E*h-M,t[8]=v*h+b,t[1]=p*x,t[5]=b*h+v,t[9]=M*h-E,t[2]=-h,t[6]=d*p,t[10]=c*p}else if(e.order==="YZX"){const v=c*p,M=c*h,E=d*p,b=d*h;t[0]=p*_,t[4]=b-v*x,t[8]=E*x+M,t[1]=x,t[5]=c*_,t[9]=-d*_,t[2]=-h*_,t[6]=M*x+E,t[10]=v-b*x}else if(e.order==="XZY"){const v=c*p,M=c*h,E=d*p,b=d*h;t[0]=p*_,t[4]=-x,t[8]=h*_,t[1]=v*x+b,t[5]=c*_,t[9]=M*x-E,t[2]=E*x-M,t[6]=d*_,t[10]=b*x+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dS,e,hS)}lookAt(e,t,s){const o=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),br.crossVectors(s,Hn),br.lengthSq()===0&&(Math.abs(s.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),br.crossVectors(s,Hn)),br.normalize(),Sl.crossVectors(Hn,br),o[0]=br.x,o[4]=Sl.x,o[8]=Hn.x,o[1]=br.y,o[5]=Sl.y,o[9]=Hn.y,o[2]=br.z,o[6]=Sl.z,o[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,c=s[0],d=s[4],p=s[8],h=s[12],_=s[1],x=s[5],v=s[9],M=s[13],E=s[2],b=s[6],y=s[10],S=s[14],C=s[3],D=s[7],P=s[11],k=s[15],O=o[0],z=o[4],T=o[8],L=o[12],de=o[1],B=o[5],ne=o[9],ee=o[13],se=o[2],J=o[6],K=o[10],j=o[14],Y=o[3],ce=o[7],pe=o[11],F=o[15];return l[0]=c*O+d*de+p*se+h*Y,l[4]=c*z+d*B+p*J+h*ce,l[8]=c*T+d*ne+p*K+h*pe,l[12]=c*L+d*ee+p*j+h*F,l[1]=_*O+x*de+v*se+M*Y,l[5]=_*z+x*B+v*J+M*ce,l[9]=_*T+x*ne+v*K+M*pe,l[13]=_*L+x*ee+v*j+M*F,l[2]=E*O+b*de+y*se+S*Y,l[6]=E*z+b*B+y*J+S*ce,l[10]=E*T+b*ne+y*K+S*pe,l[14]=E*L+b*ee+y*j+S*F,l[3]=C*O+D*de+P*se+k*Y,l[7]=C*z+D*B+P*J+k*ce,l[11]=C*T+D*ne+P*K+k*pe,l[15]=C*L+D*ee+P*j+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],c=e[1],d=e[5],p=e[9],h=e[13],_=e[2],x=e[6],v=e[10],M=e[14],E=e[3],b=e[7],y=e[11],S=e[15],C=p*M-h*v,D=d*M-h*x,P=d*v-p*x,k=c*M-h*_,O=c*v-p*_,z=c*x-d*_;return t*(b*C-y*D+S*P)-s*(E*C-y*k+S*O)+o*(E*D-b*k+S*z)-l*(E*P-b*O+y*z)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],c=e[4],d=e[5],p=e[6],h=e[7],_=e[8],x=e[9],v=e[10],M=e[11],E=e[12],b=e[13],y=e[14],S=e[15],C=t*d-s*c,D=t*p-o*c,P=t*h-l*c,k=s*p-o*d,O=s*h-l*d,z=o*h-l*p,T=_*b-x*E,L=_*y-v*E,de=_*S-M*E,B=x*y-v*b,ne=x*S-M*b,ee=v*S-M*y,se=C*ee-D*ne+P*B+k*de-O*L+z*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/se;return e[0]=(d*ee-p*ne+h*B)*J,e[1]=(o*ne-s*ee-l*B)*J,e[2]=(b*z-y*O+S*k)*J,e[3]=(v*O-x*z-M*k)*J,e[4]=(p*de-c*ee-h*L)*J,e[5]=(t*ee-o*de+l*L)*J,e[6]=(y*P-E*z-S*D)*J,e[7]=(_*z-v*P+M*D)*J,e[8]=(c*ne-d*de+h*T)*J,e[9]=(s*de-t*ne-l*T)*J,e[10]=(E*O-b*P+S*C)*J,e[11]=(x*P-_*O-M*C)*J,e[12]=(d*L-c*B-p*T)*J,e[13]=(t*B-s*L+o*T)*J,e[14]=(b*D-E*k-y*C)*J,e[15]=(_*k-x*D+v*C)*J,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,c=e.x,d=e.y,p=e.z,h=l*c,_=l*d;return this.set(h*c+s,h*d-o*p,h*p+o*d,0,h*d+o*p,_*d+s,_*p-o*c,0,h*p-o*d,_*p+o*c,l*p*p+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,c){return this.set(1,s,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,c=t._y,d=t._z,p=t._w,h=l+l,_=c+c,x=d+d,v=l*h,M=l*_,E=l*x,b=c*_,y=c*x,S=d*x,C=p*h,D=p*_,P=p*x,k=s.x,O=s.y,z=s.z;return o[0]=(1-(b+S))*k,o[1]=(M+P)*k,o[2]=(E-D)*k,o[3]=0,o[4]=(M-P)*O,o[5]=(1-(v+S))*O,o[6]=(y+C)*O,o[7]=0,o[8]=(E+D)*z,o[9]=(y-C)*z,o[10]=(1-(v+b))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return s.set(1,1,1),t.identity(),this;let c=Os.set(o[0],o[1],o[2]).length();const d=Os.set(o[4],o[5],o[6]).length(),p=Os.set(o[8],o[9],o[10]).length();l<0&&(c=-c),hi.copy(this);const h=1/c,_=1/d,x=1/p;return hi.elements[0]*=h,hi.elements[1]*=h,hi.elements[2]*=h,hi.elements[4]*=_,hi.elements[5]*=_,hi.elements[6]*=_,hi.elements[8]*=x,hi.elements[9]*=x,hi.elements[10]*=x,t.setFromRotationMatrix(hi),s.x=c,s.y=d,s.z=p,this}makePerspective(e,t,s,o,l,c,d=Di,p=!1){const h=this.elements,_=2*l/(t-e),x=2*l/(s-o),v=(t+e)/(t-e),M=(s+o)/(s-o);let E,b;if(p)E=l/(c-l),b=c*l/(c-l);else if(d===Di)E=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(d===tu)E=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=x,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,c,d=Di,p=!1){const h=this.elements,_=2/(t-e),x=2/(s-o),v=-(t+e)/(t-e),M=-(s+o)/(s-o);let E,b;if(p)E=1/(c-l),b=c/(c-l);else if(d===Di)E=-2/(c-l),b=-(c+l)/(c-l);else if(d===tu)E=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=_,h[4]=0,h[8]=0,h[12]=v,h[1]=0,h[5]=x,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=E,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Os=new re,hi=new Zt,dS=new re(0,0,0),hS=new re(1,1,1),br=new re,Sl=new re,Hn=new re,Fm=new Zt,Om=new sa;class rr{constructor(e=0,t=0,s=0,o=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],p=o[1],h=o[5],_=o[9],x=o[2],v=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,h),this._z=0);break;case"YXZ":this._x=Math.asin(-St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(St(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,h),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Fm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class f0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pS=0;const km=new re,ks=new sa,$i=new Zt,Ml=new re,Ga=new re,mS=new re,gS=new sa,Bm=new re(1,0,0),zm=new re(0,1,0),Vm=new re(0,0,1),Hm={type:"added"},vS={type:"removed"},Bs={type:"childadded",child:null},cf={type:"childremoved",child:null};class Fn extends ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new re,t=new rr,s=new sa,o=new re(1,1,1);function l(){s.setFromEuler(t,!1)}function c(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ht}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new f0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Vm,e)}translateOnAxis(e,t){return km.copy(e).applyQuaternion(this.quaternion),this.position.add(km.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Vm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Ml.copy(e):Ml.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Ga,Ml,this.up):$i.lookAt(Ml,Ga,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),ks.setFromRotationMatrix($i),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vS),cf.child=e,this.dispatchEvent(cf),cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hm),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const c=this.children[s].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,mS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,gS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,s=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*s-l[8]*o,l[13]+=s-l[1]*t-l[5]*s-l[9]*o,l[14]+=o-l[2]*t-l[6]*s-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let h=0,_=p.length;h<_;h++){const x=p[h];l(e.shapes,x)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,h=this.material.length;p<h;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=c(e.geometries),p=c(e.materials),h=c(e.textures),_=c(e.images),x=c(e.shapes),v=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),h.length>0&&(s.textures=h),_.length>0&&(s.images=_),x.length>0&&(s.shapes=x),v.length>0&&(s.skeletons=v),M.length>0&&(s.animations=M),E.length>0&&(s.nodes=E)}return s.object=o,s;function c(d){const p=[];for(const h in d){const _=d[h];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Fn.DEFAULT_UP=new re(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class El extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _S={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,c=null;const d=this._targetRay,p=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,s),S=this._getHandJoint(h,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],v=_.position.distanceTo(x.position),M=.02,E=.005;h.inputState.pinching&&v>M+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&v<=M-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_S)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new El;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const d0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function df(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Pt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,s,o=Tt.workingColorSpace){if(e=sS(e,1),t=St(t,0,1),s=St(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,c=2*s-l;this.r=df(c,l,e+1/3),this.g=df(c,l,e),this.b=df(c,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=d0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Tt.workingToColorSpace(xn.copy(this),e),Math.round(St(xn.r*255,0,255))*65536+Math.round(St(xn.g*255,0,255))*256+Math.round(St(xn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(xn.copy(this),t);const s=xn.r,o=xn.g,l=xn.b,c=Math.max(s,o,l),d=Math.min(s,o,l);let p,h;const _=(d+c)/2;if(d===c)p=0,h=0;else{const x=c-d;switch(h=_<=.5?x/(c+d):x/(2-c-d),c){case s:p=(o-l)/x+(o<l?6:0);break;case o:p=(l-s)/x+2;break;case l:p=(s-o)/x+4;break}p/=6}return e.h=p,e.s=h,e.l=_,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ti){Tt.workingToColorSpace(xn.copy(this),e);const t=xn.r,s=xn.g,o=xn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(wl);const s=sf(Cr.h,wl.h,t),o=sf(Cr.s,wl.s,t),l=sf(Cr.l,wl.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Pt;Pt.NAMES=d0;class Gm extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const pi=new re,qi=new re,hf=new re,Yi=new re,zs=new re,Vs=new re,Wm=new re,pf=new re,mf=new re,gf=new re,vf=new $t,_f=new $t,xf=new $t;class vi{constructor(e=new re,t=new re,s=new re){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),pi.subVectors(e,t),o.cross(pi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){pi.subVectors(o,t),qi.subVectors(s,t),hf.subVectors(e,t);const c=pi.dot(pi),d=pi.dot(qi),p=pi.dot(hf),h=qi.dot(qi),_=qi.dot(hf),x=c*h-d*d;if(x===0)return l.set(0,0,0),null;const v=1/x,M=(h*p-d*_)*v,E=(c*_-d*p)*v;return l.set(1-M-E,E,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,s,o,l,c,d,p){return this.getBarycoord(e,t,s,o,Yi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Yi.x),p.addScaledVector(c,Yi.y),p.addScaledVector(d,Yi.z),p)}static getInterpolatedAttribute(e,t,s,o,l,c){return vf.setScalar(0),_f.setScalar(0),xf.setScalar(0),vf.fromBufferAttribute(e,t),_f.fromBufferAttribute(e,s),xf.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(vf,l.x),c.addScaledVector(_f,l.y),c.addScaledVector(xf,l.z),c}static isFrontFacing(e,t,s,o){return pi.subVectors(s,t),qi.subVectors(e,t),pi.cross(qi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),pi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let c,d;zs.subVectors(o,s),Vs.subVectors(l,s),pf.subVectors(e,s);const p=zs.dot(pf),h=Vs.dot(pf);if(p<=0&&h<=0)return t.copy(s);mf.subVectors(e,o);const _=zs.dot(mf),x=Vs.dot(mf);if(_>=0&&x<=_)return t.copy(o);const v=p*x-_*h;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),t.copy(s).addScaledVector(zs,c);gf.subVectors(e,l);const M=zs.dot(gf),E=Vs.dot(gf);if(E>=0&&M<=E)return t.copy(l);const b=M*h-p*E;if(b<=0&&h>=0&&E<=0)return d=h/(h-E),t.copy(s).addScaledVector(Vs,d);const y=_*E-M*x;if(y<=0&&x-_>=0&&M-E>=0)return Wm.subVectors(l,o),d=(x-_)/(x-_+(M-E)),t.copy(o).addScaledVector(Wm,d);const S=1/(y+b+v);return c=b*S,d=v*S,t.copy(s).addScaledVector(zs,c).addScaledVector(Vs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,mi):mi.fromBufferAttribute(l,c),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tl.copy(s.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wa),Al.subVectors(this.max,Wa),Hs.subVectors(e.a,Wa),Gs.subVectors(e.b,Wa),Ws.subVectors(e.c,Wa),Rr.subVectors(Gs,Hs),Pr.subVectors(Ws,Gs),Qr.subVectors(Hs,Ws);let t=[0,-Rr.z,Rr.y,0,-Pr.z,Pr.y,0,-Qr.z,Qr.y,Rr.z,0,-Rr.x,Pr.z,0,-Pr.x,Qr.z,0,-Qr.x,-Rr.y,Rr.x,0,-Pr.y,Pr.x,0,-Qr.y,Qr.x,0];return!yf(t,Hs,Gs,Ws,Al)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,Hs,Gs,Ws,Al))?!1:(bl.crossVectors(Rr,Pr),t=[bl.x,bl.y,bl.z],yf(t,Hs,Gs,Ws,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new re,new re,new re,new re,new re,new re,new re,new re],mi=new re,Tl=new oo,Hs=new re,Gs=new re,Ws=new re,Rr=new re,Pr=new re,Qr=new re,Wa=new re,Al=new re,bl=new re,Jr=new re;function yf(r,e,t,s,o){for(let l=0,c=r.length-3;l<=c;l+=3){Jr.fromArray(r,l);const d=o.x*Math.abs(Jr.x)+o.y*Math.abs(Jr.y)+o.z*Math.abs(Jr.z),p=e.dot(Jr),h=t.dot(Jr),_=s.dot(Jr);if(Math.max(-Math.max(p,h,_),Math.min(p,h,_))>d)return!1}return!0}const Jt=new re,Cl=new ft;let xS=0;class yi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Rm,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ha(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=In(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ha(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ha(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ha(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ha(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),s=In(s,this.array),o=In(o,this.array),l=In(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rm&&(e.usage=this.usage),e}}class h0 extends yi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class p0 extends yi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class Si extends yi{constructor(e,t,s){super(new Float32Array(e),t,s)}}const yS=new oo,ja=new re,Sf=new re;class fu{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):yS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ja.subVectors(e,this.center);const t=ja.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(ja,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ja.copy(e.center).add(Sf)),this.expandByPoint(ja.copy(e.center).sub(Sf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let SS=0;const ei=new Zt,Mf=new Fn,js=new re,Gn=new oo,Xa=new oo,cn=new re;class Ei extends ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SS++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tS(e)?p0:h0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ht().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,s){return ei.makeTranslation(e,t,s),this.applyMatrix4(ei),this}scale(e,t,s){return ei.makeScale(e,t,s),this.applyMatrix4(ei),this}lookAt(e){return Mf.lookAt(e),Mf.updateMatrix(),this.applyMatrix4(Mf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,t.count);for(let o=0;o<s;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Gn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const s=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];Xa.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(Gn.min,Xa.min),Gn.expandByPoint(cn),cn.addVectors(Gn.max,Xa.max),Gn.expandByPoint(cn)):(Gn.expandByPoint(Xa.min),Gn.expandByPoint(Xa.max))}Gn.getCenter(s);let o=0;for(let l=0,c=e.count;l<c;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(cn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],p=this.morphTargetsRelative;for(let h=0,_=d.count;h<_;h++)cn.fromBufferAttribute(d,h),p&&(js.fromBufferAttribute(e,h),cn.add(js)),o=Math.max(o,s.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*s.count),4));const c=this.getAttribute("tangent"),d=[],p=[];for(let T=0;T<s.count;T++)d[T]=new re,p[T]=new re;const h=new re,_=new re,x=new re,v=new ft,M=new ft,E=new ft,b=new re,y=new re;function S(T,L,de){h.fromBufferAttribute(s,T),_.fromBufferAttribute(s,L),x.fromBufferAttribute(s,de),v.fromBufferAttribute(l,T),M.fromBufferAttribute(l,L),E.fromBufferAttribute(l,de),_.sub(h),x.sub(h),M.sub(v),E.sub(v);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(x,-M.y).multiplyScalar(B),y.copy(x).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(B),d[T].add(b),d[L].add(b),d[de].add(b),p[T].add(y),p[L].add(y),p[de].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const de=C[T],B=de.start,ne=de.count;for(let ee=B,se=B+ne;ee<se;ee+=3)S(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const D=new re,P=new re,k=new re,O=new re;function z(T){k.fromBufferAttribute(o,T),O.copy(k);const L=d[T];D.copy(L),D.sub(k.multiplyScalar(k.dot(L))).normalize(),P.crossVectors(O,L);const B=P.dot(p[T])<0?-1:1;c.setXYZW(T,D.x,D.y,D.z,B)}for(let T=0,L=C.length;T<L;++T){const de=C[T],B=de.start,ne=de.count;for(let ee=B,se=B+ne;ee<se;ee+=3)z(e.getX(ee+0)),z(e.getX(ee+1)),z(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let v=0,M=s.count;v<M;v++)s.setXYZ(v,0,0,0);const o=new re,l=new re,c=new re,d=new re,p=new re,h=new re,_=new re,x=new re;if(e)for(let v=0,M=e.count;v<M;v+=3){const E=e.getX(v+0),b=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,y),_.subVectors(c,l),x.subVectors(o,l),_.cross(x),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),h.fromBufferAttribute(s,y),d.add(_),p.add(_),h.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let v=0,M=t.count;v<M;v+=3)o.fromBufferAttribute(t,v+0),l.fromBufferAttribute(t,v+1),c.fromBufferAttribute(t,v+2),_.subVectors(c,l),x.subVectors(o,l),_.cross(x),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,p){const h=d.array,_=d.itemSize,x=d.normalized,v=new h.constructor(p.length*_);let M=0,E=0;for(let b=0,y=p.length;b<y;b++){d.isInterleavedBufferAttribute?M=p[b]*d.data.stride+d.offset:M=p[b]*_;for(let S=0;S<_;S++)v[E++]=h[M++]}return new yi(v,_,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ei,s=this.index.array,o=this.attributes;for(const d in o){const p=o[d],h=e(p,s);t.setAttribute(d,h)}const l=this.morphAttributes;for(const d in l){const p=[],h=l[d];for(let _=0,x=h.length;_<x;_++){const v=h[_],M=e(v,s);p.push(M)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const h=c[d];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const h in p)p[h]!==void 0&&(e[h]=p[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const p in s){const h=s[p];e.data.attributes[p]=h.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const h=this.morphAttributes[p],_=[];for(let x=0,v=h.length;x<v;x++){const M=h[x];_.push(M.toJSON(e.data))}_.length>0&&(o[p]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const o=e.attributes;for(const h in o){const _=o[h];this.setAttribute(h,_.clone(t))}const l=e.morphAttributes;for(const h in l){const _=[],x=l[h];for(let v=0,M=x.length;v<M;v++)_.push(x[v].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,_=c.length;h<_;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MS=0;class lo extends ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Ks,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Of&&(s.blendSrc=this.blendSrc),this.blendDst!==kf&&(s.blendDst=this.blendDst),this.blendEquation!==ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const c=[];for(const d in l){const p=l[d];delete p.metadata,c.push(p)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(s.textures=l),c.length>0&&(s.images=c)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new re,Ef=new re,Rl=new re,Lr=new re,wf=new re,Pl=new re,Tf=new re;class m0{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){Ef.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Ef);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Rl),d=Lr.dot(this.direction),p=-Lr.dot(Rl),h=Lr.lengthSq(),_=Math.abs(1-c*c);let x,v,M,E;if(_>0)if(x=c*p-d,v=c*d-p,E=l*_,x>=0)if(v>=-E)if(v<=E){const b=1/_;x*=b,v*=b,M=x*(x+c*v+2*d)+v*(c*x+v+2*p)+h}else v=l,x=Math.max(0,-(c*v+d)),M=-x*x+v*(v+2*p)+h;else v=-l,x=Math.max(0,-(c*v+d)),M=-x*x+v*(v+2*p)+h;else v<=-E?(x=Math.max(0,-(-c*l+d)),v=x>0?-l:Math.min(Math.max(-l,-p),l),M=-x*x+v*(v+2*p)+h):v<=E?(x=0,v=Math.min(Math.max(-l,-p),l),M=v*(v+2*p)+h):(x=Math.max(0,-(c*l+d)),v=x>0?l:Math.min(Math.max(-l,-p),l),M=-x*x+v*(v+2*p)+h);else v=c>0?-l:l,x=Math.max(0,-(c*v+d)),M=-x*x+v*(v+2*p)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Ef).addScaledVector(Rl,v),M}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),o=Zi.dot(Zi)-s*s,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=s-c,p=s+c;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,c,d,p;const h=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return h>=0?(s=(e.min.x-v.x)*h,o=(e.max.x-v.x)*h):(s=(e.max.x-v.x)*h,o=(e.min.x-v.x)*h),_>=0?(l=(e.min.y-v.y)*_,c=(e.max.y-v.y)*_):(l=(e.max.y-v.y)*_,c=(e.min.y-v.y)*_),s>c||l>o||((l>s||isNaN(s))&&(s=l),(c<o||isNaN(o))&&(o=c),x>=0?(d=(e.min.z-v.z)*x,p=(e.max.z-v.z)*x):(d=(e.max.z-v.z)*x,p=(e.min.z-v.z)*x),s>p||d>o)||((d>s||s!==s)&&(s=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,s,o,l){wf.subVectors(t,e),Pl.subVectors(s,e),Tf.crossVectors(wf,Pl);let c=this.direction.dot(Tf),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Lr.subVectors(this.origin,e);const p=d*this.direction.dot(Pl.crossVectors(Lr,Pl));if(p<0)return null;const h=d*this.direction.dot(wf.cross(Lr));if(h<0||p+h>c)return null;const _=-d*Lr.dot(Tf);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class g0 extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=$g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jm=new Zt,es=new m0,Ll=new fu,Xm=new re,Dl=new re,Nl=new re,Il=new re,Af=new re,Ul=new re,$m=new re,Fl=new re;class ri extends Fn{constructor(e=new Ei,t=new g0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,c=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Ul.set(0,0,0);for(let p=0,h=l.length;p<h;p++){const _=d[p],x=l[p];_!==0&&(Af.fromBufferAttribute(x,e),c?Ul.addScaledVector(Af,_):Ul.addScaledVector(Af.sub(t),_))}t.add(Ul)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ll.copy(s.boundingSphere),Ll.applyMatrix4(l),es.copy(e.ray).recast(e.near),!(Ll.containsPoint(es.origin)===!1&&(es.intersectSphere(Ll,Xm)===null||es.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(jm.copy(l).invert(),es.copy(e.ray).applyMatrix4(jm),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,s){let o;const l=this.geometry,c=this.material,d=l.index,p=l.attributes.position,h=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,v=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,b=v.length;E<b;E++){const y=v[E],S=c[y.materialIndex],C=Math.max(y.start,M.start),D=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,k=D;P<k;P+=3){const O=d.getX(P),z=d.getX(P+1),T=d.getX(P+2);o=Ol(this,S,e,s,h,_,x,O,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=E,S=b;y<S;y+=3){const C=d.getX(y),D=d.getX(y+1),P=d.getX(y+2);o=Ol(this,c,e,s,h,_,x,C,D,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let E=0,b=v.length;E<b;E++){const y=v[E],S=c[y.materialIndex],C=Math.max(y.start,M.start),D=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,k=D;P<k;P+=3){const O=P,z=P+1,T=P+2;o=Ol(this,S,e,s,h,_,x,O,z,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),b=Math.min(p.count,M.start+M.count);for(let y=E,S=b;y<S;y+=3){const C=y,D=y+1,P=y+2;o=Ol(this,c,e,s,h,_,x,C,D,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ES(r,e,t,s,o,l,c,d){let p;if(e.side===Un?p=s.intersectTriangle(c,l,o,!0,d):p=s.intersectTriangle(o,l,c,e.side===Ur,d),p===null)return null;Fl.copy(d),Fl.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(Fl);return h<t.near||h>t.far?null:{distance:h,point:Fl.clone(),object:r}}function Ol(r,e,t,s,o,l,c,d,p,h){r.getVertexPosition(d,Dl),r.getVertexPosition(p,Nl),r.getVertexPosition(h,Il);const _=ES(r,e,t,s,Dl,Nl,Il,$m);if(_){const x=new re;vi.getBarycoord($m,Dl,Nl,Il,x),o&&(_.uv=vi.getInterpolatedAttribute(o,d,p,h,x,new ft)),l&&(_.uv1=vi.getInterpolatedAttribute(l,d,p,h,x,new ft)),c&&(_.normal=vi.getInterpolatedAttribute(c,d,p,h,x,new re),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:p,c:h,normal:new re,materialIndex:0};vi.getNormal(Dl,Nl,Il,v.normal),_.face=v,_.barycoord=x}return _}class v0 extends Tn{constructor(e=null,t=1,s=1,o,l,c,d,p,h=hn,_=hn,x,v){super(null,c,d,p,h,_,o,l,x,v),this.isDataTexture=!0,this.image={data:e,width:t,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bf=new re,wS=new re,TS=new ht;class rs{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=bf.subVectors(s,t).cross(wS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(bf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||TS.getNormalMatrix(e),o=this.coplanarPoint(bf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new fu,AS=new ft(.5,.5),kl=new re;class _0{constructor(e=new rs,t=new rs,s=new rs,o=new rs,l=new rs,c=new rs){this.planes=[e,t,s,o,l,c]}set(e,t,s,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Di,s=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],p=l[2],h=l[3],_=l[4],x=l[5],v=l[6],M=l[7],E=l[8],b=l[9],y=l[10],S=l[11],C=l[12],D=l[13],P=l[14],k=l[15];if(o[0].setComponents(h-c,M-_,S-E,k-C).normalize(),o[1].setComponents(h+c,M+_,S+E,k+C).normalize(),o[2].setComponents(h+d,M+x,S+b,k+D).normalize(),o[3].setComponents(h-d,M-x,S-b,k-D).normalize(),s)o[4].setComponents(p,v,y,P).normalize(),o[5].setComponents(h-p,M-v,S-y,k-P).normalize();else if(o[4].setComponents(h-p,M-v,S-y,k-P).normalize(),t===Di)o[5].setComponents(h+p,M+v,S+y,k+P).normalize();else if(t===tu)o[5].setComponents(p,v,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){ts.center.set(0,0,0);const t=AS.distanceTo(e.center);return ts.radius=.7071067811865476+t,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bS extends lo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new re,su=new re,qm=new Zt,$a=new m0,Bl=new fu,Cf=new re,Ym=new re;class CS extends Fn{constructor(e=new Ei,t=new bS){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[0];for(let o=1,l=t.count;o<l;o++)ru.fromBufferAttribute(t,o-1),su.fromBufferAttribute(t,o),s[o]=s[o-1],s[o]+=ru.distanceTo(su);e.setAttribute("lineDistance",new Si(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const s=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bl.copy(s.boundingSphere),Bl.applyMatrix4(o),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;qm.copy(o).invert(),$a.copy(e.ray).applyMatrix4(qm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,h=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const M=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let b=M,y=E-1;b<y;b+=h){const S=_.getX(b),C=_.getX(b+1),D=zl(this,e,$a,p,S,C,b);D&&t.push(D)}if(this.isLineLoop){const b=_.getX(E-1),y=_.getX(M),S=zl(this,e,$a,p,b,y,E-1);S&&t.push(S)}}else{const M=Math.max(0,c.start),E=Math.min(v.count,c.start+c.count);for(let b=M,y=E-1;b<y;b+=h){const S=zl(this,e,$a,p,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=zl(this,e,$a,p,E-1,M,E-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function zl(r,e,t,s,o,l,c){const d=r.geometry.attributes.position;if(ru.fromBufferAttribute(d,o),su.fromBufferAttribute(d,l),t.distanceSqToSegment(ru,su,Cf,Ym)>s)return;Cf.applyMatrix4(r.matrixWorld);const h=e.ray.origin.distanceTo(Cf);if(!(h<e.near||h>e.far))return{distance:h,point:Ym.clone().applyMatrix4(r.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:r}}const Km=new re,Zm=new re;class RS extends CS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,s=[];for(let o=0,l=t.count;o<l;o+=2)Km.fromBufferAttribute(t,o),Zm.fromBufferAttribute(t,o+1),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+Km.distanceTo(Zm);e.setAttribute("lineDistance",new Si(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class x0 extends Tn{constructor(e=[],t=cs,s,o,l,c,d,p,h,_){super(e,t,s,o,l,c,d,p,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class no extends Tn{constructor(e,t,s=Ii,o,l,c,d=hn,p=hn,h,_=ir,x=1){if(_!==ir&&_!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:x};super(v,o,l,c,d,p,_,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class PS extends no{constructor(e,t=Ii,s=cs,o,l,c=hn,d=hn,p,h=ir){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,t,s,o,l,c,d,p,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class y0 extends Tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class uo extends Ei{constructor(e=1,t=1,s=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],h=[],_=[],x=[];let v=0,M=0;E("z","y","x",-1,-1,s,t,e,c,l,0),E("z","y","x",1,-1,s,t,-e,c,l,1),E("x","z","y",1,1,e,s,t,o,c,2),E("x","z","y",1,-1,e,s,-t,o,c,3),E("x","y","z",1,-1,e,t,s,o,l,4),E("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(p),this.setAttribute("position",new Si(h,3)),this.setAttribute("normal",new Si(_,3)),this.setAttribute("uv",new Si(x,2));function E(b,y,S,C,D,P,k,O,z,T,L){const de=P/z,B=k/T,ne=P/2,ee=k/2,se=O/2,J=z+1,K=T+1;let j=0,Y=0;const ce=new re;for(let pe=0;pe<K;pe++){const F=pe*B-ee;for(let q=0;q<J;q++){const Ce=q*de-ne;ce[b]=Ce*C,ce[y]=F*D,ce[S]=se,h.push(ce.x,ce.y,ce.z),ce[b]=0,ce[y]=0,ce[S]=O>0?1:-1,_.push(ce.x,ce.y,ce.z),x.push(q/z),x.push(1-pe/T),j+=1}}for(let pe=0;pe<T;pe++)for(let F=0;F<z;F++){const q=v+F+J*pe,Ce=v+F+J*(pe+1),Ge=v+(F+1)+J*(pe+1),Ke=v+(F+1)+J*pe;p.push(q,Ce,Ke),p.push(Ce,Ge,Ke),Y+=6}d.addGroup(M,Y,L),M+=Y,v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class us extends Ei{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(s),p=Math.floor(o),h=d+1,_=p+1,x=e/d,v=t/p,M=[],E=[],b=[],y=[];for(let S=0;S<_;S++){const C=S*v-c;for(let D=0;D<h;D++){const P=D*x-l;E.push(P,-C,0),b.push(0,0,1),y.push(D/d),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let C=0;C<d;C++){const D=C+h*S,P=C+h*(S+1),k=C+1+h*(S+1),O=C+1+h*S;M.push(D,P,O),M.push(P,k,O)}this.setIndex(M),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(b,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new us(e.width,e.height,e.widthSegments,e.heightSegments)}}function na(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function wn(r){const e={};for(let t=0;t<r.length;t++){const s=na(r[t]);for(const o in s)e[o]=s[o]}return e}function LS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function S0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const DS={clone:na,merge:wn};var NS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NS,this.fragmentShader=IS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=na(e.uniforms),this.uniformsGroups=LS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class Za extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class US extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vl=new re,Hl=new sa,Ri=new re;class au extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Hl,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Dr=new re,Qm=new ft,Jm=new ft;class gi extends au{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ad*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ad*2*Math.atan(Math.tan(rf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z),Dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Dr.x,Dr.y).multiplyScalar(-e/Dr.z)}getViewSize(e,t){return this.getViewBounds(e,Qm,Jm),t.subVectors(Jm,Qm)}setViewOffset(e,t,s,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(rf*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/p,t-=c.offsetY*s/h,o*=c.width/p,s*=c.height/h}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class M0 extends au{constructor(e=-1,t=1,s=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,c=s+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xs=-90,$s=1;class OS extends Fn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new gi(Xs,$s,e,t);o.layers=this.layers,this.add(o);const l=new gi(Xs,$s,e,t);l.layers=this.layers,this.add(l);const c=new gi(Xs,$s,e,t);c.layers=this.layers,this.add(c);const d=new gi(Xs,$s,e,t);d.layers=this.layers,this.add(d);const p=new gi(Xs,$s,e,t);p.layers=this.layers,this.add(p);const h=new gi(Xs,$s,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,c,d,p]=t;for(const h of t)this.remove(h);if(e===Di)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tu)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,p,h,_]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(s,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(s,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(s,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(s,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(x,v,M),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class kS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class BS{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function eg(r,e,t,s){const o=zS(s);switch(t){case a0:return r*e;case l0:return r*e/o.components*o.byteLength;case zd:return r*e/o.components*o.byteLength;case ea:return r*e*2/o.components*o.byteLength;case Vd:return r*e*2/o.components*o.byteLength;case o0:return r*e*3/o.components*o.byteLength;case ii:return r*e*4/o.components*o.byteLength;case Hd:return r*e*4/o.components*o.byteLength;case ql:case Yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yf:case Zf:return Math.max(r,16)*Math.max(e,8)/4;case qf:case Kf:return Math.max(r,8)*Math.max(e,8)/2;case Qf:case Jf:case td:case nd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ed:case id:case rd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ad:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case od:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ld:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ud:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case fd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case pd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case md:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case gd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case vd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _d:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case xd:case yd:case Sd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Md:case Ed:return Math.ceil(r/4)*Math.ceil(e/4)*8;case wd:case Td:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zS(r){switch(r){case ni:case n0:return{byteLength:1,components:1};case eo:case i0:case Ui:return{byteLength:2,components:1};case kd:case Bd:return{byteLength:2,components:4};case Ii:case Od:case _i:return{byteLength:4,components:1};case r0:case s0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function E0(){let r=null,e=!1,t=null,s=null;function o(l,c){t(l,c),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function VS(r){const e=new WeakMap;function t(d,p){const h=d.array,_=d.usage,x=h.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,h,_),d.onUploadCallback();let M;if(h instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=r.HALF_FLOAT;else if(h instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=r.SHORT;else if(h instanceof Uint32Array)M=r.UNSIGNED_INT;else if(h instanceof Int32Array)M=r.INT;else if(h instanceof Int8Array)M=r.BYTE;else if(h instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:v,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:d.version,size:x}}function s(d,p,h){const _=p.array,x=p.updateRanges;if(r.bindBuffer(h,d),x.length===0)r.bufferSubData(h,0,_);else{x.sort((M,E)=>M.start-E.start);let v=0;for(let M=1;M<x.length;M++){const E=x[v],b=x[M];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++v,x[v]=b)}x.length=v+1;for(let M=0,E=x.length;M<E;M++){const b=x[M];r.bufferSubData(h,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const h=e.get(d);if(h===void 0)e.set(d,t(d,p));else if(h.version<d.version){if(h.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,d,p),h.version=d.version}}return{get:o,remove:l,update:c}}var HS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
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
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
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
#endif`,ZS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,dM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NM=`uniform bool receiveShadow;
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
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,UM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,zM=`uniform sampler2D dfgLUT;
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
}`,VM=`
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
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
#endif`,GM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
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
#endif`,cE=`#ifdef USE_NORMALMAP
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
#endif`,fE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AE=`float getShadowMask() {
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
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CE=`#ifdef USE_SKINNING
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
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PE=`#ifdef USE_SKINNING
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
#endif`,LE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#ifdef USE_TRANSMISSION
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,YE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,e1=`uniform vec3 diffuse;
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
}`,t1=`#include <common>
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
}`,n1=`uniform vec3 diffuse;
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
}`,i1=`#define LAMBERT
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
}`,r1=`#define LAMBERT
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
}`,s1=`#define MATCAP
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
}`,a1=`#define MATCAP
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
}`,o1=`#define NORMAL
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
}`,l1=`#define NORMAL
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
}`,c1=`#define PHONG
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
}`,f1=`#define STANDARD
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
}`,d1=`#define STANDARD
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
}`,h1=`#define TOON
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
}`,p1=`#define TOON
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
}`,m1=`uniform float size;
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
}`,g1=`uniform vec3 diffuse;
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
}`,v1=`#include <common>
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
}`,_1=`uniform vec3 color;
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
}`,x1=`uniform float rotation;
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
}`,y1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:HS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:jS,alphatest_fragment:XS,alphatest_pars_fragment:$S,aomap_fragment:qS,aomap_pars_fragment:YS,batching_pars_vertex:KS,batching_vertex:ZS,begin_vertex:QS,beginnormal_vertex:JS,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:aM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:uM,color_vertex:cM,common:fM,cube_uv_reflection_fragment:dM,defaultnormal_vertex:hM,displacementmap_pars_vertex:pM,displacementmap_vertex:mM,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:xM,envmap_fragment:yM,envmap_common_pars_fragment:SM,envmap_pars_fragment:MM,envmap_pars_vertex:EM,envmap_physical_pars_fragment:IM,envmap_vertex:wM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:bM,fog_pars_fragment:CM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:PM,lights_lambert_fragment:LM,lights_lambert_pars_fragment:DM,lights_pars_begin:NM,lights_toon_fragment:UM,lights_toon_pars_fragment:FM,lights_phong_fragment:OM,lights_phong_pars_fragment:kM,lights_physical_fragment:BM,lights_physical_pars_fragment:zM,lights_fragment_begin:VM,lights_fragment_maps:HM,lights_fragment_end:GM,logdepthbuf_fragment:WM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:$M,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:KM,map_particle_pars_fragment:ZM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:JM,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:aE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:uE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:fE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:hE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:vE,project_vertex:_E,dithering_fragment:xE,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:wE,shadowmap_vertex:TE,shadowmask_pars_fragment:AE,skinbase_vertex:bE,skinning_pars_vertex:CE,skinning_vertex:RE,skinnormal_vertex:PE,specularmap_fragment:LE,specularmap_pars_fragment:DE,tonemapping_fragment:NE,tonemapping_pars_fragment:IE,transmission_fragment:UE,transmission_pars_fragment:FE,uv_pars_fragment:OE,uv_pars_vertex:kE,uv_vertex:BE,worldpos_vertex:zE,background_vert:VE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:WE,cube_vert:jE,cube_frag:XE,depth_vert:$E,depth_frag:qE,distance_vert:YE,distance_frag:KE,equirect_vert:ZE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:e1,meshbasic_vert:t1,meshbasic_frag:n1,meshlambert_vert:i1,meshlambert_frag:r1,meshmatcap_vert:s1,meshmatcap_frag:a1,meshnormal_vert:o1,meshnormal_frag:l1,meshphong_vert:u1,meshphong_frag:c1,meshphysical_vert:f1,meshphysical_frag:d1,meshtoon_vert:h1,meshtoon_frag:p1,points_vert:m1,points_frag:g1,shadow_vert:v1,shadow_frag:_1,sprite_vert:x1,sprite_frag:y1},De={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Li={basic:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Pt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([De.points,De.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([De.common,De.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([De.sprite,De.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:wn([De.common,De.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:wn([De.lights,De.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Li.physical={uniforms:wn([Li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Gl={r:0,b:0,g:0},ns=new rr,S1=new Zt;function M1(r,e,t,s,o,l){const c=new Pt(0);let d=o===!0?0:1,p,h,_=null,x=0,v=null;function M(C){let D=C.isScene===!0?C.background:null;if(D&&D.isTexture){const P=C.backgroundBlurriness>0;D=e.get(D,P)}return D}function E(C){let D=!1;const P=M(C);P===null?y(c,d):P&&P.isColor&&(y(P,1),D=!0);const k=r.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(r.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(C,D){const P=M(D);P&&(P.isCubeTexture||P.mapping===cu)?(h===void 0&&(h=new ri(new uo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:na(Li.backgroundCube.uniforms),vertexShader:Li.backgroundCube.vertexShader,fragmentShader:Li.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(k,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ns.copy(D.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S1.makeRotationFromEuler(ns)),h.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,(_!==P||x!==P.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,_=P,x=P.version,v=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new ri(new us(2,2),new Fi({name:"BackgroundMaterial",uniforms:na(Li.background.uniforms),vertexShader:Li.background.vertexShader,fragmentShader:Li.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(P.colorSpace)!==Nt,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(_!==P||x!==P.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=P,x=P.version,v=r.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function y(C,D){C.getRGB(Gl,S0(r)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,D,l)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,D=1){c.set(C),d=D,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(C){d=C,y(c,d)},render:E,addToRenderList:b,dispose:S}}function E1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=v(null);let l=o,c=!1;function d(B,ne,ee,se,J){let K=!1;const j=x(B,se,ee,ne);l!==j&&(l=j,h(l.object)),K=M(B,se,ee,J),K&&E(B,se,ee,J),J!==null&&e.update(J,r.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,P(B,ne,ee,se),J!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function p(){return r.createVertexArray()}function h(B){return r.bindVertexArray(B)}function _(B){return r.deleteVertexArray(B)}function x(B,ne,ee,se){const J=se.wireframe===!0;let K=s[ne.id];K===void 0&&(K={},s[ne.id]=K);const j=B.isInstancedMesh===!0?B.id:0;let Y=K[j];Y===void 0&&(Y={},K[j]=Y);let ce=Y[ee.id];ce===void 0&&(ce={},Y[ee.id]=ce);let pe=ce[J];return pe===void 0&&(pe=v(p()),ce[J]=pe),pe}function v(B){const ne=[],ee=[],se=[];for(let J=0;J<t;J++)ne[J]=0,ee[J]=0,se[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ne,enabledAttributes:ee,attributeDivisors:se,object:B,attributes:{},index:null}}function M(B,ne,ee,se){const J=l.attributes,K=ne.attributes;let j=0;const Y=ee.getAttributes();for(const ce in Y)if(Y[ce].location>=0){const F=J[ce];let q=K[ce];if(q===void 0&&(ce==="instanceMatrix"&&B.instanceMatrix&&(q=B.instanceMatrix),ce==="instanceColor"&&B.instanceColor&&(q=B.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;j++}return l.attributesNum!==j||l.index!==se}function E(B,ne,ee,se){const J={},K=ne.attributes;let j=0;const Y=ee.getAttributes();for(const ce in Y)if(Y[ce].location>=0){let F=K[ce];F===void 0&&(ce==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),ce==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),J[ce]=q,j++}l.attributes=J,l.attributesNum=j,l.index=se}function b(){const B=l.newAttributes;for(let ne=0,ee=B.length;ne<ee;ne++)B[ne]=0}function y(B){S(B,0)}function S(B,ne){const ee=l.newAttributes,se=l.enabledAttributes,J=l.attributeDivisors;ee[B]=1,se[B]===0&&(r.enableVertexAttribArray(B),se[B]=1),J[B]!==ne&&(r.vertexAttribDivisor(B,ne),J[B]=ne)}function C(){const B=l.newAttributes,ne=l.enabledAttributes;for(let ee=0,se=ne.length;ee<se;ee++)ne[ee]!==B[ee]&&(r.disableVertexAttribArray(ee),ne[ee]=0)}function D(B,ne,ee,se,J,K,j){j===!0?r.vertexAttribIPointer(B,ne,ee,J,K):r.vertexAttribPointer(B,ne,ee,se,J,K)}function P(B,ne,ee,se){b();const J=se.attributes,K=ee.getAttributes(),j=ne.defaultAttributeValues;for(const Y in K){const ce=K[Y];if(ce.location>=0){let pe=J[Y];if(pe===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(pe=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(pe=B.instanceColor)),pe!==void 0){const F=pe.normalized,q=pe.itemSize,Ce=e.get(pe);if(Ce===void 0)continue;const Ge=Ce.buffer,Ke=Ce.type,ae=Ce.bytesPerElement,ve=Ke===r.INT||Ke===r.UNSIGNED_INT||pe.gpuType===Od;if(pe.isInterleavedBufferAttribute){const ge=pe.data,ke=ge.stride,He=pe.offset;if(ge.isInstancedInterleavedBuffer){for(let nt=0;nt<ce.locationSize;nt++)S(ce.location+nt,ge.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let nt=0;nt<ce.locationSize;nt++)y(ce.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let nt=0;nt<ce.locationSize;nt++)D(ce.location+nt,q/ce.locationSize,Ke,F,ke*ae,(He+q/ce.locationSize*nt)*ae,ve)}else{if(pe.isInstancedBufferAttribute){for(let ge=0;ge<ce.locationSize;ge++)S(ce.location+ge,pe.meshPerAttribute);B.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ge=0;ge<ce.locationSize;ge++)y(ce.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ge);for(let ge=0;ge<ce.locationSize;ge++)D(ce.location+ge,q/ce.locationSize,Ke,F,q*ae,q/ce.locationSize*ge*ae,ve)}}else if(j!==void 0){const F=j[Y];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(ce.location,F);break;case 3:r.vertexAttrib3fv(ce.location,F);break;case 4:r.vertexAttrib4fv(ce.location,F);break;default:r.vertexAttrib1fv(ce.location,F)}}}}C()}function k(){L();for(const B in s){const ne=s[B];for(const ee in ne){const se=ne[ee];for(const J in se){const K=se[J];for(const j in K)_(K[j].object),delete K[j];delete se[J]}}delete s[B]}}function O(B){if(s[B.id]===void 0)return;const ne=s[B.id];for(const ee in ne){const se=ne[ee];for(const J in se){const K=se[J];for(const j in K)_(K[j].object),delete K[j];delete se[J]}}delete s[B.id]}function z(B){for(const ne in s){const ee=s[ne];for(const se in ee){const J=ee[se];if(J[B.id]===void 0)continue;const K=J[B.id];for(const j in K)_(K[j].object),delete K[j];delete J[B.id]}}}function T(B){for(const ne in s){const ee=s[ne],se=B.isInstancedMesh===!0?B.id:0,J=ee[se];if(J!==void 0){for(const K in J){const j=J[K];for(const Y in j)_(j[Y].object),delete j[Y];delete J[K]}delete ee[se],Object.keys(ee).length===0&&delete s[ne]}}}function L(){de(),c=!0,l!==o&&(l=o,h(l.object))}function de(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:de,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:C}}function w1(r,e,t){let s;function o(h){s=h}function l(h,_){r.drawArrays(s,h,_),t.update(_,s,1)}function c(h,_,x){x!==0&&(r.drawArraysInstanced(s,h,_,x),t.update(_,s,x))}function d(h,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,_,0,x);let M=0;for(let E=0;E<x;E++)M+=_[E];t.update(M,s,1)}function p(h,_,x,v){if(x===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<h.length;E++)c(h[E],_[E],v[E]);else{M.multiDrawArraysInstancedWEBGL(s,h,0,_,0,v,0,x);let E=0;for(let b=0;b<x;b++)E+=_[b]*v[b];t.update(E,s,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function T1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(z){return!(z!==ii&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ni&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==_i&&!T)}function p(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=p(h);_!==h&&(lt("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const x=t.logarithmicDepthBuffer===!0,v=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),C=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),P=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),k=r.getParameter(r.MAX_SAMPLES),O=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:P,maxSamples:k,samples:O}}function A1(r){const e=this;let t=null,s=0,o=!1,l=!1;const c=new rs,d=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const M=x.length!==0||v||s!==0||o;return o=v,s=x.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,v){t=_(x,v,0)},this.setState=function(x,v,M){const E=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=r.get(x);if(!o||E===null||E.length===0||l&&!y)l?_(null):h();else{const C=l?0:s,D=C*4;let P=S.clippingState||null;p.value=P,P=_(E,v,D,M);for(let k=0;k!==D;++k)P[k]=t[k];S.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function h(){p.value!==t&&(p.value=t,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(x,v,M,E){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=p.value,E!==!0||y===null){const S=M+b*4,C=v.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let D=0,P=M;D!==b;++D,P+=4)c.copy(x[D]).applyMatrix4(C,d),c.normal.toArray(y,P),y[P+3]=c.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Ir=4,tg=[.125,.215,.35,.446,.526,.582],as=20,b1=256,qa=new M0,ng=new Pt;let Rf=null,Pf=0,Lf=0,Df=!1;const C1=new re;class ig{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,s=.1,o=100,l={}){const{size:c=256,position:d=C1}=l;Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf,Pf,Lf),this._renderer.xr.enabled=Df,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget(),Pf=this._renderer.getActiveCubeFace(),Lf=this._renderer.getActiveMipmapLevel(),Df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:en,minFilter:en,generateMipmaps:!1,type:Ui,format:ii,colorSpace:ta,depthBuffer:!1},o=rg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rg(e,t,s);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=R1(l)),this._blurMaterial=L1(l,e,t),this._ggxMaterial=P1(l,e,t)}return o}_compileMaterial(e){const t=new ri(new Ei,e);this._renderer.compile(t,qa)}_sceneToCubeUV(e,t,s,o,l){const p=new gi(90,1,t,s),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,M=x.toneMapping;x.getClearColor(ng),x.toneMapping=Ni,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new uo,new g0({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(ng),S=!0);for(let D=0;D<6;D++){const P=D%3;P===0?(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[D],l.y,l.z)):P===1?(p.up.set(0,0,h[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[D],l.z)):(p.up.set(0,h[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[D]));const k=this._cubeSize;qs(o,P*k,D>2?k:0,k,k),x.setRenderTarget(o),S&&x.render(b,p),x.render(e,p)}x.toneMapping=M,x.autoClear=v,e.background=C}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===cs||e.mapping===Js;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ag()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sg());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;qs(t,0,0,3*p,2*p),s.setRenderTarget(t),s.render(c,qa)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=s}_applyGGXFilter(e,t,s){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[s];d.material=c;const p=c.uniforms,h=s/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-_*_),v=0+h*1.25,M=x*v,{_lodMax:E}=this,b=this._sizeLods[s],y=3*b*(s>E-Ir?s-E+Ir:0),S=4*(this._cubeSize-b);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=E-t,qs(l,y,S,3*b,2*b),o.setRenderTarget(l),o.render(d,qa),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-s,qs(e,y,S,3*b,2*b),o.setRenderTarget(e),o.render(d,qa)}_blur(e,t,s,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,s,o,"latitudinal",l),this._halfBlur(c,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,c,d){const p=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[o];x.material=h;const v=h.uniforms,M=this._sizeLods[s]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*as-1),b=l/E,y=isFinite(l)?1+Math.floor(_*b):as;y>as&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${as}`);const S=[];let C=0;for(let z=0;z<as;++z){const T=z/b,L=Math.exp(-T*T/2);S.push(L),z===0?C+=L:z<y&&(C+=2*L)}for(let z=0;z<S.length;z++)S[z]=S[z]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=S,v.latitudinal.value=c==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-s;const P=this._sizeLods[o],k=3*P*(o>D-Ir?o-D+Ir:0),O=4*(this._cubeSize-P);qs(t,k,O,3*P,2*P),p.setRenderTarget(t),p.render(x,qa)}}function R1(r){const e=[],t=[],s=[];let o=r;const l=r-Ir+1+tg.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);e.push(d);let p=1/d;c>r-Ir?p=tg[c-r+Ir-1]:c===0&&(p=0),t.push(p);const h=1/(d-2),_=-h,x=1+h,v=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,E=6,b=3,y=2,S=1,C=new Float32Array(b*E*M),D=new Float32Array(y*E*M),P=new Float32Array(S*E*M);for(let O=0;O<M;O++){const z=O%3*2/3-1,T=O>2?0:-1,L=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];C.set(L,b*E*O),D.set(v,y*E*O);const de=[O,O,O,O,O,O];P.set(de,S*E*O)}const k=new Ei;k.setAttribute("position",new yi(C,b)),k.setAttribute("uv",new yi(D,y)),k.setAttribute("faceIndex",new yi(P,S)),s.push(new ri(k,null)),o>Ir&&o--}return{lodMeshes:s,sizeLods:e,sigmas:t}}function rg(r,e,t){const s=new xi(r,e,t);return s.texture.mapping=cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qs(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function P1(r,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:du(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function L1(r,e,t){const s=new Float32Array(as),o=new re(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:du(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function sg(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function ag(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}class w0 extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new x0(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new uo(5,5,5),l=new Fi({name:"CubemapFromEquirect",uniforms:na(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Un,blending:er});l.uniforms.tEquirect.value=t;const c=new ri(o,l),d=t.minFilter;return t.minFilter===os&&(t.minFilter=en),new OS(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,s=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,s,o);e.setRenderTarget(l)}}function D1(r){let e=new WeakMap,t=new WeakMap,s=null;function o(v,M=!1){return v==null?null:M?c(v):l(v)}function l(v){if(v&&v.isTexture){const M=v.mapping;if(M===ef||M===tf)if(e.has(v)){const E=e.get(v).texture;return d(E,v.mapping)}else{const E=v.image;if(E&&E.height>0){const b=new w0(E.height);return b.fromEquirectangularTexture(r,v),e.set(v,b),v.addEventListener("dispose",h),d(b.texture,v.mapping)}else return null}}return v}function c(v){if(v&&v.isTexture){const M=v.mapping,E=M===ef||M===tf,b=M===cs||M===Js;if(E||b){let y=t.get(v);const S=y!==void 0?y.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==S)return s===null&&(s=new ig(r)),y=E?s.fromEquirectangular(v,y):s.fromCubemap(v,y),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),y.texture;if(y!==void 0)return y.texture;{const C=v.image;return E&&C&&C.height>0||b&&C&&p(C)?(s===null&&(s=new ig(r)),y=E?s.fromEquirectangular(v):s.fromCubemap(v),y.texture.pmremVersion=v.pmremVersion,t.set(v,y),v.addEventListener("dispose",_),y.texture):null}}}return v}function d(v,M){return M===ef?v.mapping=cs:M===tf&&(v.mapping=Js),v}function p(v){let M=0;const E=6;for(let b=0;b<E;b++)v[b]!==void 0&&M++;return M===E}function h(v){const M=v.target;M.removeEventListener("dispose",h);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function _(v){const M=v.target;M.removeEventListener("dispose",_);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function x(){e=new WeakMap,t=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:o,dispose:x}}function N1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];const o=r.getExtension(s);return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&iu("WebGLRenderer: "+s+" extension not supported."),o}}}function I1(r,e,t,s){const o={},l=new WeakMap;function c(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const E in v.attributes)e.remove(v.attributes[E]);v.removeEventListener("dispose",c),delete o[v.id];const M=l.get(v);M&&(e.remove(M),l.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(x,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,t.memory.geometries++),v}function p(x){const v=x.attributes;for(const M in v)e.update(v[M],r.ARRAY_BUFFER)}function h(x){const v=[],M=x.index,E=x.attributes.position;let b=0;if(E===void 0)return;if(M!==null){const C=M.array;b=M.version;for(let D=0,P=C.length;D<P;D+=3){const k=C[D+0],O=C[D+1],z=C[D+2];v.push(k,O,O,z,z,k)}}else{const C=E.array;b=E.version;for(let D=0,P=C.length/3-1;D<P;D+=3){const k=D+0,O=D+1,z=D+2;v.push(k,O,O,z,z,k)}}const y=new(E.count>=65535?p0:h0)(v,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function _(x){const v=l.get(x);if(v){const M=x.index;M!==null&&v.version<M.version&&h(x)}else h(x);return l.get(x)}return{get:d,update:p,getWireframeAttribute:_}}function U1(r,e,t){let s;function o(v){s=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function p(v,M){r.drawElements(s,M,l,v*c),t.update(M,s,1)}function h(v,M,E){E!==0&&(r.drawElementsInstanced(s,M,l,v*c,E),t.update(M,s,E))}function _(v,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,v,0,E);let y=0;for(let S=0;S<E;S++)y+=M[S];t.update(y,s,1)}function x(v,M,E,b){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<v.length;S++)h(v[S]/c,M[S],b[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,l,v,0,b,0,E);let S=0;for(let C=0;C<E;C++)S+=M[C]*b[C];t.update(S,s,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=h,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function F1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,c,d){switch(t.calls++,c){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function O1(r,e,t){const s=new WeakMap,o=new $t;function l(c,d,p){const h=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==x){let de=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",de)};var M=de;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let P=0;E===!0&&(P=1),b===!0&&(P=2),y===!0&&(P=3);let k=d.attributes.position.count*P,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const z=new Float32Array(k*O*4*x),T=new c0(z,k,O,x);T.type=_i,T.needsUpdate=!0;const L=P*4;for(let B=0;B<x;B++){const ne=S[B],ee=C[B],se=D[B],J=k*O*4*B;for(let K=0;K<ne.count;K++){const j=K*L;E===!0&&(o.fromBufferAttribute(ne,K),z[J+j+0]=o.x,z[J+j+1]=o.y,z[J+j+2]=o.z,z[J+j+3]=0),b===!0&&(o.fromBufferAttribute(ee,K),z[J+j+4]=o.x,z[J+j+5]=o.y,z[J+j+6]=o.z,z[J+j+7]=0),y===!0&&(o.fromBufferAttribute(se,K),z[J+j+8]=o.x,z[J+j+9]=o.y,z[J+j+10]=o.z,z[J+j+11]=se.itemSize===4?o.w:1)}}v={count:x,texture:T,size:new ft(k,O)},s.set(d,v),d.addEventListener("dispose",de)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let E=0;for(let y=0;y<h.length;y++)E+=h[y];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",b),p.getUniforms().setValue(r,"morphTargetInfluences",h)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function k1(r,e,t,s,o){let l=new WeakMap;function c(h){const _=o.render.frame,x=h.geometry,v=e.get(h,x);if(l.get(v)!==_&&(e.update(v),l.set(v,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",p)===!1&&h.addEventListener("dispose",p),l.get(h)!==_&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),l.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return v}function d(){l=new WeakMap}function p(h){const _=h.target;_.removeEventListener("dispose",p),s.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:c,dispose:d}}const B1={[qg]:"LINEAR_TONE_MAPPING",[Yg]:"REINHARD_TONE_MAPPING",[Kg]:"CINEON_TONE_MAPPING",[Zg]:"ACES_FILMIC_TONE_MAPPING",[Jg]:"AGX_TONE_MAPPING",[e0]:"NEUTRAL_TONE_MAPPING",[Qg]:"CUSTOM_TONE_MAPPING"};function z1(r,e,t,s,o){const l=new xi(e,t,{type:r,depthBuffer:s,stencilBuffer:o}),c=new xi(e,t,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),d=new Ei;d.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Si([0,2,0,0,2,0],2));const p=new Za({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new ri(d,p),_=new M0(-1,1,1,-1,0,1);let x=null,v=null,M=!1,E,b=null,y=[],S=!1;this.setSize=function(C,D){l.setSize(C,D),c.setSize(C,D);for(let P=0;P<y.length;P++){const k=y[P];k.setSize&&k.setSize(C,D)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const D=l.width,P=l.height;for(let k=0;k<y.length;k++){const O=y[k];O.setSize&&O.setSize(D,P)}},this.begin=function(C,D){if(M||C.toneMapping===Ni&&y.length===0)return!1;if(b=D,D!==null){const P=D.width,k=D.height;(l.width!==P||l.height!==k)&&this.setSize(P,k)}return S===!1&&C.setRenderTarget(l),E=C.toneMapping,C.toneMapping=Ni,!0},this.hasRenderPass=function(){return S},this.end=function(C,D){C.toneMapping=E,M=!0;let P=l,k=c;for(let O=0;O<y.length;O++){const z=y[O];if(z.enabled!==!1&&(z.render(C,k,P,D),z.needsSwap!==!1)){const T=P;P=k,k=T}}if(x!==C.outputColorSpace||v!==C.toneMapping){x=C.outputColorSpace,v=C.toneMapping,p.defines={},Tt.getTransfer(x)===Nt&&(p.defines.SRGB_TRANSFER="");const O=B1[v];O&&(p.defines[O]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(b),C.render(h,_),b=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),c.dispose(),d.dispose(),p.dispose()}}const T0=new Tn,bd=new no(1,1),A0=new c0,b0=new fS,C0=new x0,og=[],lg=[],ug=new Float32Array(16),cg=new Float32Array(9),fg=new Float32Array(4);function aa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=og[o];if(l===void 0&&(l=new Float32Array(o),og[o]=l),e!==0){s.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,r[c].toArray(l,d)}return l}function sn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function an(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function hu(r,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function V1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function H1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2fv(this.addr,e),an(t,e)}}function G1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;r.uniform3fv(this.addr,e),an(t,e)}}function W1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4fv(this.addr,e),an(t,e)}}function j1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;fg.set(s),r.uniformMatrix2fv(this.addr,!1,fg),an(t,s)}}function X1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;cg.set(s),r.uniformMatrix3fv(this.addr,!1,cg),an(t,s)}}function $1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(sn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(sn(t,s))return;ug.set(s),r.uniformMatrix4fv(this.addr,!1,ug),an(t,s)}}function q1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2iv(this.addr,e),an(t,e)}}function K1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3iv(this.addr,e),an(t,e)}}function Z1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4iv(this.addr,e),an(t,e)}}function Q1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function J1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;r.uniform2uiv(this.addr,e),an(t,e)}}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;r.uniform3uiv(this.addr,e),an(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;r.uniform4uiv(this.addr,e),an(t,e)}}function nw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(bd.compareFunction=t.isReversedDepthBuffer()?Wd:Gd,l=bd):l=T0,t.setTexture2D(e||l,o)}function iw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||b0,o)}function rw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||C0,o)}function sw(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||A0,o)}function aw(r){switch(r){case 5126:return V1;case 35664:return H1;case 35665:return G1;case 35666:return W1;case 35674:return j1;case 35675:return X1;case 35676:return $1;case 5124:case 35670:return q1;case 35667:case 35671:return Y1;case 35668:case 35672:return K1;case 35669:case 35673:return Z1;case 5125:return Q1;case 36294:return J1;case 36295:return ew;case 36296:return tw;case 35678:case 36198:case 36298:case 36306:case 35682:return nw;case 35679:case 36299:case 36307:return iw;case 35680:case 36300:case 36308:case 36293:return rw;case 36289:case 36303:case 36311:case 36292:return sw}}function ow(r,e){r.uniform1fv(this.addr,e)}function lw(r,e){const t=aa(e,this.size,2);r.uniform2fv(this.addr,t)}function uw(r,e){const t=aa(e,this.size,3);r.uniform3fv(this.addr,t)}function cw(r,e){const t=aa(e,this.size,4);r.uniform4fv(this.addr,t)}function fw(r,e){const t=aa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dw(r,e){const t=aa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function hw(r,e){const t=aa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function pw(r,e){r.uniform1iv(this.addr,e)}function mw(r,e){r.uniform2iv(this.addr,e)}function gw(r,e){r.uniform3iv(this.addr,e)}function vw(r,e){r.uniform4iv(this.addr,e)}function _w(r,e){r.uniform1uiv(this.addr,e)}function xw(r,e){r.uniform2uiv(this.addr,e)}function yw(r,e){r.uniform3uiv(this.addr,e)}function Sw(r,e){r.uniform4uiv(this.addr,e)}function Mw(r,e,t){const s=this.cache,o=e.length,l=hu(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=bd:c=T0;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||c,l[d])}function Ew(r,e,t){const s=this.cache,o=e.length,l=hu(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||b0,l[c])}function ww(r,e,t){const s=this.cache,o=e.length,l=hu(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||C0,l[c])}function Tw(r,e,t){const s=this.cache,o=e.length,l=hu(t,o);sn(s,l)||(r.uniform1iv(this.addr,l),an(s,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||A0,l[c])}function Aw(r){switch(r){case 5126:return ow;case 35664:return lw;case 35665:return uw;case 35666:return cw;case 35674:return fw;case 35675:return dw;case 35676:return hw;case 5124:case 35670:return pw;case 35667:case 35671:return mw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return xw;case 36295:return yw;case 36296:return Sw;case 35678:case 36198:case 36298:case 36306:case 35682:return Mw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Tw}}class bw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=aw(t.type)}}class Cw{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Aw(t.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Nf=/(\w+)(\])?(\[|\.)?/g;function dg(r,e){r.seq.push(e),r.map[e.id]=e}function Pw(r,e,t){const s=r.name,o=s.length;for(Nf.lastIndex=0;;){const l=Nf.exec(s),c=Nf.lastIndex;let d=l[1];const p=l[2]==="]",h=l[3];if(p&&(d=d|0),h===void 0||h==="["&&c+2===o){dg(t,h===void 0?new bw(d,r,e):new Cw(d,r,e));break}else{let x=t.map[d];x===void 0&&(x=new Rw(d),dg(t,x)),t=x}}}class Ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const d=e.getActiveUniform(t,c),p=e.getUniformLocation(t,d.name);Pw(d,p,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&s.push(c)}return s}}function hg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const Lw=37297;let Dw=0;function Nw(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;s.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return s.join(`
`)}const pg=new ht;function Iw(r){Tt._getMatrix(pg,Tt.workingColorSpace,r);const e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case eu:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),l=(r.getShaderInfoLog(e)||"").trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+Nw(r.getShaderSource(e),d)}else return l}function Uw(r,e){const t=Iw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fw={[qg]:"Linear",[Yg]:"Reinhard",[Kg]:"Cineon",[Zg]:"ACESFilmic",[Jg]:"AgX",[e0]:"Neutral",[Qg]:"Custom"};function Ow(r,e){const t=Fw[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new re;function kw(){Tt.getLuminanceCoefficients(Wl);const r=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function zw(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Vw(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),c=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:r.getAttribLocation(e,c),locationSize:d}}return t}function Qa(r){return r!==""}function gg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(r){return r.replace(Hw,Ww)}const Gw=new Map;function Ww(r,e){let t=mt[e];if(t===void 0){const s=Gw.get(e);if(s!==void 0)t=mt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(r){return r.replace(jw,Xw)}function Xw(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function xg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const $w={[$l]:"SHADOWMAP_TYPE_PCF",[Ka]:"SHADOWMAP_TYPE_VSM"};function qw(r){return $w[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[cs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[cu]:"ENVMAP_TYPE_CUBE_UV"};function Kw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Zw={[Js]:"ENVMAP_MODE_REFRACTION"};function Qw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Zw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[$g]:"ENVMAP_BLENDING_MULTIPLY",[Gy]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function eT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[r.combine]||"ENVMAP_BLENDING_NONE"}function tT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function nT(r,e,t,s){const o=r.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const p=qw(t),h=Kw(t),_=Qw(t),x=eT(t),v=tT(t),M=Bw(t),E=zw(l),b=o.createProgram();let y,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Qa).join(`
`),S.length>0&&(S+=`
`)):(y=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),S=[xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Ow("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Uw("linearToOutputTexel",t.outputColorSpace),kw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),c=Cd(c),c=gg(c,t),c=vg(c,t),d=Cd(d),d=gg(d,t),d=vg(d,t),c=_g(c),d=_g(d),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const D=C+y+c,P=C+S+d,k=hg(o,o.VERTEX_SHADER,D),O=hg(o,o.FRAGMENT_SHADER,P);o.attachShader(b,k),o.attachShader(b,O),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function z(B){if(r.debug.checkShaderErrors){const ne=o.getProgramInfoLog(b)||"",ee=o.getShaderInfoLog(k)||"",se=o.getShaderInfoLog(O)||"",J=ne.trim(),K=ee.trim(),j=se.trim();let Y=!0,ce=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,b,k,O);else{const pe=mg(o,k,"vertex"),F=mg(o,O,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+J+`
`+pe+`
`+F)}else J!==""?lt("WebGLProgram: Program Info Log:",J):(K===""||j==="")&&(ce=!1);ce&&(B.diagnostics={runnable:Y,programLog:J,vertexShader:{log:K,prefix:y},fragmentShader:{log:j,prefix:S}})}o.deleteShader(k),o.deleteShader(O),T=new Ql(o,b),L=Vw(o,b)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let de=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return de===!1&&(de=o.getProgramParameter(b,Lw)),de},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=k,this.fragmentShader=O,this}let iT=0;class rT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new sT(e),t.set(e,s)),s}}class sT{constructor(e){this.id=iT++,this.code=e,this.usedTimes=0}}function aT(r,e,t,s,o,l){const c=new f0,d=new rT,p=new Set,h=[],_=new Map,x=s.logarithmicDepthBuffer;let v=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return p.add(T),T===0?"uv":`uv${T}`}function b(T,L,de,B,ne){const ee=B.fog,se=ne.geometry,J=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||J,K),Y=j&&j.mapping===cu?j.image.height:null,ce=M[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const pe=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=pe!==void 0?pe.length:0;let q=0;se.morphAttributes.position!==void 0&&(q=1),se.morphAttributes.normal!==void 0&&(q=2),se.morphAttributes.color!==void 0&&(q=3);let Ce,Ge,Ke,ae;if(ce){const Et=Li[ce];Ce=Et.vertexShader,Ge=Et.fragmentShader}else Ce=T.vertexShader,Ge=T.fragmentShader,d.update(T),Ke=d.getVertexShaderID(T),ae=d.getFragmentShaderID(T);const ve=r.getRenderTarget(),ge=r.state.buffers.depth.getReversed(),ke=ne.isInstancedMesh===!0,He=ne.isBatchedMesh===!0,nt=!!T.map,Gt=!!T.matcap,pt=!!j,yt=!!T.aoMap,At=!!T.lightMap,ut=!!T.bumpMap,It=!!T.normalMap,V=!!T.displacementMap,Ut=!!T.emissiveMap,vt=!!T.metalnessMap,_t=!!T.roughnessMap,Be=T.anisotropy>0,R=T.clearcoat>0,g=T.dispersion>0,I=T.iridescence>0,$=T.sheen>0,he=T.transmission>0,oe=Be&&!!T.anisotropyMap,Pe=R&&!!T.clearcoatMap,we=R&&!!T.clearcoatNormalMap,ze=R&&!!T.clearcoatRoughnessMap,et=I&&!!T.iridescenceMap,Se=I&&!!T.iridescenceThicknessMap,Ae=$&&!!T.sheenColorMap,$e=$&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ne=!!T.specularColorMap,ct=!!T.specularIntensityMap,G=he&&!!T.transmissionMap,be=he&&!!T.thicknessMap,Ee=!!T.gradientMap,Ie=!!T.alphaMap,Me=T.alphaTest>0,me=!!T.alphaHash,je=!!T.extensions;let st=Ni;T.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(st=r.toneMapping);const Dt={shaderID:ce,shaderType:T.type,shaderName:T.name,vertexShader:Ce,fragmentShader:Ge,defines:T.defines,customVertexShaderID:Ke,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:He,batchingColor:He&&ne._colorsTexture!==null,instancing:ke,instancingColor:ke&&ne.instanceColor!==null,instancingMorph:ke&&ne.morphTexture!==null,outputColorSpace:ve===null?r.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:ta,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Gt,envMap:pt,envMapMode:pt&&j.mapping,envMapCubeUVHeight:Y,aoMap:yt,lightMap:At,bumpMap:ut,normalMap:It,displacementMap:V,emissiveMap:Ut,normalMapObjectSpace:It&&T.normalMapType===qy,normalMapTangentSpace:It&&T.normalMapType===$y,metalnessMap:vt,roughnessMap:_t,anisotropy:Be,anisotropyMap:oe,clearcoat:R,clearcoatMap:Pe,clearcoatNormalMap:we,clearcoatRoughnessMap:ze,dispersion:g,iridescence:I,iridescenceMap:et,iridescenceThicknessMap:Se,sheen:$,sheenColorMap:Ae,sheenRoughnessMap:$e,specularMap:We,specularColorMap:Ne,specularIntensityMap:ct,transmission:he,transmissionMap:G,thicknessMap:be,gradientMap:Ee,opaque:T.transparent===!1&&T.blending===Ks&&T.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Me,alphaHash:me,combine:T.combine,mapUv:nt&&E(T.map.channel),aoMapUv:yt&&E(T.aoMap.channel),lightMapUv:At&&E(T.lightMap.channel),bumpMapUv:ut&&E(T.bumpMap.channel),normalMapUv:It&&E(T.normalMap.channel),displacementMapUv:V&&E(T.displacementMap.channel),emissiveMapUv:Ut&&E(T.emissiveMap.channel),metalnessMapUv:vt&&E(T.metalnessMap.channel),roughnessMapUv:_t&&E(T.roughnessMap.channel),anisotropyMapUv:oe&&E(T.anisotropyMap.channel),clearcoatMapUv:Pe&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:$e&&E(T.sheenRoughnessMap.channel),specularMapUv:We&&E(T.specularMap.channel),specularColorMapUv:Ne&&E(T.specularColorMap.channel),specularIntensityMapUv:ct&&E(T.specularIntensityMap.channel),transmissionMapUv:G&&E(T.transmissionMap.channel),thicknessMapUv:be&&E(T.thicknessMap.channel),alphaMapUv:Ie&&E(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(It||Be),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:ne.isPoints===!0&&!!se.attributes.uv&&(nt||Ie),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||se.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ge,skinning:ne.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&de.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ut&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qi,flipSided:T.side===Un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Dt.vertexUv1s=p.has(1),Dt.vertexUv2s=p.has(2),Dt.vertexUv3s=p.has(3),p.clear(),Dt}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const de in T.defines)L.push(de),L.push(T.defines[de]);return T.isRawShaderMaterial===!1&&(S(L,T),C(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),T.push(c.mask)}function D(T){const L=M[T.type];let de;if(L){const B=Li[L];de=DS.clone(B.uniforms)}else de=T.uniforms;return de}function P(T,L){let de=_.get(L);return de!==void 0?++de.usedTimes:(de=new nT(r,L,T,o),h.push(de),_.set(L,de)),de}function k(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){d.remove(T)}function z(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:D,acquireProgram:P,releaseProgram:k,releaseShaderCache:O,programs:h,dispose:z}}function oT(){let r=new WeakMap;function e(c){return r.has(c)}function t(c){let d=r.get(c);return d===void 0&&(d={},r.set(c,d)),d}function s(c){r.delete(c)}function o(c,d,p){r.get(c)[d]=p}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function lT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function yg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function c(v){let M=0;return v.isInstancedMesh&&(M+=2),v.isSkinnedMesh&&(M+=1),M}function d(v,M,E,b,y,S){let C=r[e];return C===void 0?(C={id:v.id,object:v,geometry:M,material:E,materialVariant:c(v),groupOrder:b,renderOrder:v.renderOrder,z:y,group:S},r[e]=C):(C.id=v.id,C.object=v,C.geometry=M,C.material=E,C.materialVariant=c(v),C.groupOrder=b,C.renderOrder=v.renderOrder,C.z=y,C.group=S),e++,C}function p(v,M,E,b,y,S){const C=d(v,M,E,b,y,S);E.transmission>0?s.push(C):E.transparent===!0?o.push(C):t.push(C)}function h(v,M,E,b,y,S){const C=d(v,M,E,b,y,S);E.transmission>0?s.unshift(C):E.transparent===!0?o.unshift(C):t.unshift(C)}function _(v,M){t.length>1&&t.sort(v||lT),s.length>1&&s.sort(M||yg),o.length>1&&o.sort(M||yg)}function x(){for(let v=e,M=r.length;v<M;v++){const E=r[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:p,unshift:h,finish:x,sort:_}}function uT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let c;return l===void 0?(c=new Sg,r.set(s,[c])):o>=l.length?(c=new Sg,l.push(c)):c=l[o],c}function t(){r=new WeakMap}return{get:e,dispose:t}}function cT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Pt};break;case"SpotLight":t={position:new re,direction:new re,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new re,halfWidth:new re,halfHeight:new re};break}return r[e.id]=t,t}}}function fT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dT=0;function hT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pT(r){const e=new cT,t=fT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new re);const o=new re,l=new Zt,c=new Zt;function d(h){let _=0,x=0,v=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,E=0,b=0,y=0,S=0,C=0,D=0,P=0,k=0,O=0,z=0;h.sort(hT);for(let L=0,de=h.length;L<de;L++){const B=h[L],ne=B.color,ee=B.intensity,se=B.distance;let J=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ea?J=B.shadow.map.texture:J=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=ne.r*ee,x+=ne.g*ee,v+=ne.b*ee;else if(B.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(B.sh.coefficients[K],ee);z++}else if(B.isDirectionalLight){const K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const j=B.shadow,Y=t.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.directionalShadow[M]=Y,s.directionalShadowMap[M]=J,s.directionalShadowMatrix[M]=B.shadow.matrix,C++}s.directional[M]=K,M++}else if(B.isSpotLight){const K=e.get(B);K.position.setFromMatrixPosition(B.matrixWorld),K.color.copy(ne).multiplyScalar(ee),K.distance=se,K.coneCos=Math.cos(B.angle),K.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),K.decay=B.decay,s.spot[b]=K;const j=B.shadow;if(B.map&&(s.spotLightMap[k]=B.map,k++,j.updateMatrices(B),B.castShadow&&O++),s.spotLightMatrix[b]=j.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,s.spotShadow[b]=Y,s.spotShadowMap[b]=J,P++}b++}else if(B.isRectAreaLight){const K=e.get(B);K.color.copy(ne).multiplyScalar(ee),K.halfWidth.set(B.width*.5,0,0),K.halfHeight.set(0,B.height*.5,0),s.rectArea[y]=K,y++}else if(B.isPointLight){const K=e.get(B);if(K.color.copy(B.color).multiplyScalar(B.intensity),K.distance=B.distance,K.decay=B.decay,B.castShadow){const j=B.shadow,Y=t.get(B);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,s.pointShadow[E]=Y,s.pointShadowMap[E]=J,s.pointShadowMatrix[E]=B.shadow.matrix,D++}s.point[E]=K,E++}else if(B.isHemisphereLight){const K=e.get(B);K.skyColor.copy(B.color).multiplyScalar(ee),K.groundColor.copy(B.groundColor).multiplyScalar(ee),s.hemi[S]=K,S++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=De.LTC_FLOAT_1,s.rectAreaLTC2=De.LTC_FLOAT_2):(s.rectAreaLTC1=De.LTC_HALF_1,s.rectAreaLTC2=De.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=x,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==M||T.pointLength!==E||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==D||T.numSpotShadows!==P||T.numSpotMaps!==k||T.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=b,s.rectArea.length=y,s.point.length=E,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=P+k-O,s.spotLightMap.length=k,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=z,T.directionalLength=M,T.pointLength=E,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=D,T.numSpotShadows=P,T.numSpotMaps=k,T.numLightProbes=z,s.version=dT++)}function p(h,_){let x=0,v=0,M=0,E=0,b=0;const y=_.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const D=h[S];if(D.isDirectionalLight){const P=s.directional[x];P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(D.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const P=s.rectArea[E];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(D.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const P=s.point[v];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const P=s.hemi[b];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),b++}}}return{setup:d,setupView:p,state:s}}function Mg(r){const e=new pT(r),t=[],s=[];function o(_){h.camera=_,t.length=0,s.length=0}function l(_){t.push(_)}function c(_){s.push(_)}function d(){e.setup(t)}function p(_){e.setupView(t,_)}const h={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:c}}function mT(r){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Mg(r),e.set(o,[d])):l>=c.length?(d=new Mg(r),c.push(d)):d=c[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}const gT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vT=`uniform sampler2D shadow_pass;
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
}`,_T=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],xT=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],Eg=new Zt,Ya=new re,If=new re;function yT(r,e,t){let s=new _0;const o=new ft,l=new ft,c=new $t,d=new US,p=new FS,h={},_=t.maxTextureSize,x={[Ur]:Un,[Un]:Ur,[Qi]:Qi},v=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:gT,fragmentShader:vT}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ei;E.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ri(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let S=this.type;this.render=function(O,z,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===wy&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=$l);const L=r.getRenderTarget(),de=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(er),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const ee=S!==this.type;ee&&z.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(J=>J.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,J=O.length;se<J;se++){const K=O[se],j=K.shadow;if(j===void 0){lt("WebGLShadowMap:",K,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;o.copy(j.mapSize);const Y=j.getFrameExtents();o.multiply(Y),l.copy(j.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Y.x),o.x=l.x*Y.x,j.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Y.y),o.y=l.y*Y.y,j.mapSize.y=l.y));const ce=r.state.buffers.depth.getReversed();if(j.camera._reversedDepth=ce,j.map===null||ee===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ka){if(K.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new xi(o.x,o.y,{format:ea,type:Ui,minFilter:en,magFilter:en,generateMipmaps:!1}),j.map.texture.name=K.name+".shadowMap",j.map.depthTexture=new no(o.x,o.y,_i),j.map.depthTexture.name=K.name+".shadowMapDepth",j.map.depthTexture.format=ir,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn}else K.isPointLight?(j.map=new w0(o.x),j.map.depthTexture=new PS(o.x,Ii)):(j.map=new xi(o.x,o.y),j.map.depthTexture=new no(o.x,o.y,Ii)),j.map.depthTexture.name=K.name+".shadowMap",j.map.depthTexture.format=ir,this.type===$l?(j.map.depthTexture.compareFunction=ce?Wd:Gd,j.map.depthTexture.minFilter=en,j.map.depthTexture.magFilter=en):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=hn,j.map.depthTexture.magFilter=hn);j.camera.updateProjectionMatrix()}const pe=j.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<pe;F++){if(j.map.isWebGLCubeRenderTarget)r.setRenderTarget(j.map,F),r.clear();else{F===0&&(r.setRenderTarget(j.map),r.clear());const q=j.getViewport(F);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),ne.viewport(c)}if(K.isPointLight){const q=j.camera,Ce=j.matrix,Ge=K.distance||q.far;Ge!==q.far&&(q.far=Ge,q.updateProjectionMatrix()),Ya.setFromMatrixPosition(K.matrixWorld),q.position.copy(Ya),If.copy(q.position),If.add(_T[F]),q.up.copy(xT[F]),q.lookAt(If),q.updateMatrixWorld(),Ce.makeTranslation(-Ya.x,-Ya.y,-Ya.z),Eg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Eg,q.coordinateSystem,q.reversedDepth)}else j.updateMatrices(K);s=j.getFrustum(),P(z,T,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ka&&C(j,T),j.needsUpdate=!1}S=this.type,y.needsUpdate=!1,r.setRenderTarget(L,de,B)};function C(O,z){const T=e.update(b);v.defines.VSM_SAMPLES!==O.blurSamples&&(v.defines.VSM_SAMPLES=O.blurSamples,M.defines.VSM_SAMPLES=O.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new xi(o.x,o.y,{format:ea,type:Ui})),v.uniforms.shadow_pass.value=O.map.depthTexture,v.uniforms.resolution.value=O.mapSize,v.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(z,null,T,v,b,null),M.uniforms.shadow_pass.value=O.mapPass.texture,M.uniforms.resolution.value=O.mapSize,M.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(z,null,T,M,b,null)}function D(O,z,T,L){let de=null;const B=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)de=B;else if(de=T.isPointLight===!0?p:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=de.uuid,ee=z.uuid;let se=h[ne];se===void 0&&(se={},h[ne]=se);let J=se[ee];J===void 0&&(J=de.clone(),se[ee]=J,z.addEventListener("dispose",k)),de=J}if(de.visible=z.visible,de.wireframe=z.wireframe,L===Ka?de.side=z.shadowSide!==null?z.shadowSide:z.side:de.side=z.shadowSide!==null?z.shadowSide:x[z.side],de.alphaMap=z.alphaMap,de.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,de.map=z.map,de.clipShadows=z.clipShadows,de.clippingPlanes=z.clippingPlanes,de.clipIntersection=z.clipIntersection,de.displacementMap=z.displacementMap,de.displacementScale=z.displacementScale,de.displacementBias=z.displacementBias,de.wireframeLinewidth=z.wireframeLinewidth,de.linewidth=z.linewidth,T.isPointLight===!0&&de.isMeshDistanceMaterial===!0){const ne=r.properties.get(de);ne.light=T}return de}function P(O,z,T,L,de){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&de===Ka)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const ee=e.update(O),se=O.material;if(Array.isArray(se)){const J=ee.groups;for(let K=0,j=J.length;K<j;K++){const Y=J[K],ce=se[Y.materialIndex];if(ce&&ce.visible){const pe=D(O,ce,L,de);O.onBeforeShadow(r,O,z,T,ee,pe,Y),r.renderBufferDirect(T,null,ee,pe,O,Y),O.onAfterShadow(r,O,z,T,ee,pe,Y)}}}else if(se.visible){const J=D(O,se,L,de);O.onBeforeShadow(r,O,z,T,ee,J,null),r.renderBufferDirect(T,null,ee,J,O,null),O.onAfterShadow(r,O,z,T,ee,J,null)}}const ne=O.children;for(let ee=0,se=ne.length;ee<se;ee++)P(ne[ee],z,T,L,de)}function k(O){O.target.removeEventListener("dispose",k);for(const T in h){const L=h[T],de=O.target.uuid;de in L&&(L[de].dispose(),delete L[de])}}}function ST(r,e){function t(){let G=!1;const be=new $t;let Ee=null;const Ie=new $t(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!G&&(r.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){G=Me},setClear:function(Me,me,je,st,Dt){Dt===!0&&(Me*=st,me*=st,je*=st),be.set(Me,me,je,st),Ie.equals(be)===!1&&(r.clearColor(Me,me,je,st),Ie.copy(be))},reset:function(){G=!1,Ee=null,Ie.set(-1,0,0,0)}}}function s(){let G=!1,be=!1,Ee=null,Ie=null,Me=null;return{setReversed:function(me){if(be!==me){const je=e.get("EXT_clip_control");me?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),be=me;const st=Me;Me=null,this.setClear(st)}},getReversed:function(){return be},setTest:function(me){me?ve(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(me){Ee!==me&&!G&&(r.depthMask(me),Ee=me)},setFunc:function(me){if(be&&(me=rS[me]),Ie!==me){switch(me){case Bf:r.depthFunc(r.NEVER);break;case zf:r.depthFunc(r.ALWAYS);break;case Vf:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Hf:r.depthFunc(r.EQUAL);break;case Gf:r.depthFunc(r.GEQUAL);break;case Wf:r.depthFunc(r.GREATER);break;case jf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=me}},setLocked:function(me){G=me},setClear:function(me){Me!==me&&(Me=me,be&&(me=1-me),r.clearDepth(me))},reset:function(){G=!1,Ee=null,Ie=null,Me=null,be=!1}}}function o(){let G=!1,be=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Dt=null;return{setTest:function(Et){G||(Et?ve(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(Et){be!==Et&&!G&&(r.stencilMask(Et),be=Et)},setFunc:function(Et,jn,yn){(Ee!==Et||Ie!==jn||Me!==yn)&&(r.stencilFunc(Et,jn,yn),Ee=Et,Ie=jn,Me=yn)},setOp:function(Et,jn,yn){(me!==Et||je!==jn||st!==yn)&&(r.stencilOp(Et,jn,yn),me=Et,je=jn,st=yn)},setLocked:function(Et){G=Et},setClear:function(Et){Dt!==Et&&(r.clearStencil(Et),Dt=Et)},reset:function(){G=!1,be=null,Ee=null,Ie=null,Me=null,me=null,je=null,st=null,Dt=null}}}const l=new t,c=new s,d=new o,p=new WeakMap,h=new WeakMap;let _={},x={},v=new WeakMap,M=[],E=null,b=!1,y=null,S=null,C=null,D=null,P=null,k=null,O=null,z=new Pt(0,0,0),T=0,L=!1,de=null,B=null,ne=null,ee=null,se=null;const J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=j>=2);let ce=null,pe={};const F=r.getParameter(r.SCISSOR_BOX),q=r.getParameter(r.VIEWPORT),Ce=new $t().fromArray(F),Ge=new $t().fromArray(q);function Ke(G,be,Ee,Ie){const Me=new Uint8Array(4),me=r.createTexture();r.bindTexture(G,me),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Ee;je++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(be+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return me}const ae={};ae[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(r.DEPTH_TEST),c.setFunc(Qs),ut(!1),It(Tm),ve(r.CULL_FACE),yt(er);function ve(G){_[G]!==!0&&(r.enable(G),_[G]=!0)}function ge(G){_[G]!==!1&&(r.disable(G),_[G]=!1)}function ke(G,be){return x[G]!==be?(r.bindFramebuffer(G,be),x[G]=be,G===r.DRAW_FRAMEBUFFER&&(x[r.FRAMEBUFFER]=be),G===r.FRAMEBUFFER&&(x[r.DRAW_FRAMEBUFFER]=be),!0):!1}function He(G,be){let Ee=M,Ie=!1;if(G){Ee=v.get(be),Ee===void 0&&(Ee=[],v.set(be,Ee));const Me=G.textures;if(Ee.length!==Me.length||Ee[0]!==r.COLOR_ATTACHMENT0){for(let me=0,je=Me.length;me<je;me++)Ee[me]=r.COLOR_ATTACHMENT0+me;Ee.length=Me.length,Ie=!0}}else Ee[0]!==r.BACK&&(Ee[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Ee)}function nt(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const Gt={[ss]:r.FUNC_ADD,[Ay]:r.FUNC_SUBTRACT,[by]:r.FUNC_REVERSE_SUBTRACT};Gt[Cy]=r.MIN,Gt[Ry]=r.MAX;const pt={[Py]:r.ZERO,[Ly]:r.ONE,[Dy]:r.SRC_COLOR,[Of]:r.SRC_ALPHA,[ky]:r.SRC_ALPHA_SATURATE,[Fy]:r.DST_COLOR,[Iy]:r.DST_ALPHA,[Ny]:r.ONE_MINUS_SRC_COLOR,[kf]:r.ONE_MINUS_SRC_ALPHA,[Oy]:r.ONE_MINUS_DST_COLOR,[Uy]:r.ONE_MINUS_DST_ALPHA,[By]:r.CONSTANT_COLOR,[zy]:r.ONE_MINUS_CONSTANT_COLOR,[Vy]:r.CONSTANT_ALPHA,[Hy]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(G,be,Ee,Ie,Me,me,je,st,Dt,Et){if(G===er){b===!0&&(ge(r.BLEND),b=!1);return}if(b===!1&&(ve(r.BLEND),b=!0),G!==Ty){if(G!==y||Et!==L){if((S!==ss||P!==ss)&&(r.blendEquation(r.FUNC_ADD),S=ss,P=ss),Et)switch(G){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFunc(r.ONE,r.ONE);break;case Am:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ct("WebGLState: Invalid blending: ",G);break}else switch(G){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ff:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Am:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",G);break}C=null,D=null,k=null,O=null,z.set(0,0,0),T=0,y=G,L=Et}return}Me=Me||be,me=me||Ee,je=je||Ie,(be!==S||Me!==P)&&(r.blendEquationSeparate(Gt[be],Gt[Me]),S=be,P=Me),(Ee!==C||Ie!==D||me!==k||je!==O)&&(r.blendFuncSeparate(pt[Ee],pt[Ie],pt[me],pt[je]),C=Ee,D=Ie,k=me,O=je),(st.equals(z)===!1||Dt!==T)&&(r.blendColor(st.r,st.g,st.b,Dt),z.copy(st),T=Dt),y=G,L=!1}function At(G,be){G.side===Qi?ge(r.CULL_FACE):ve(r.CULL_FACE);let Ee=G.side===Un;be&&(Ee=!Ee),ut(Ee),G.blending===Ks&&G.transparent===!1?yt(er):yt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),l.setMask(G.colorWrite);const Ie=G.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ut(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function ut(G){de!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),de=G)}function It(G){G!==My?(ve(r.CULL_FACE),G!==B&&(G===Tm?r.cullFace(r.BACK):G===Ey?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),B=G}function V(G){G!==ne&&(K&&r.lineWidth(G),ne=G)}function Ut(G,be,Ee){G?(ve(r.POLYGON_OFFSET_FILL),(ee!==be||se!==Ee)&&(ee=be,se=Ee,c.getReversed()&&(be=-be),r.polygonOffset(be,Ee))):ge(r.POLYGON_OFFSET_FILL)}function vt(G){G?ve(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function _t(G){G===void 0&&(G=r.TEXTURE0+J-1),ce!==G&&(r.activeTexture(G),ce=G)}function Be(G,be,Ee){Ee===void 0&&(ce===null?Ee=r.TEXTURE0+J-1:Ee=ce);let Ie=pe[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},pe[Ee]=Ie),(Ie.type!==G||Ie.texture!==be)&&(ce!==Ee&&(r.activeTexture(Ee),ce=Ee),r.bindTexture(G,be||ae[G]),Ie.type=G,Ie.texture=be)}function R(){const G=pe[ce];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function g(){try{r.compressedTexImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function $(){try{r.texSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function he(){try{r.texSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function oe(){try{r.compressedTexSubImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Pe(){try{r.compressedTexSubImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function we(){try{r.texStorage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function ze(){try{r.texStorage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function et(){try{r.texImage2D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Se(){try{r.texImage3D(...arguments)}catch(G){Ct("WebGLState:",G)}}function Ae(G){Ce.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function $e(G){Ge.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Ge.copy(G))}function We(G,be){let Ee=h.get(be);Ee===void 0&&(Ee=new WeakMap,h.set(be,Ee));let Ie=Ee.get(G);Ie===void 0&&(Ie=r.getUniformBlockIndex(be,G.name),Ee.set(G,Ie))}function Ne(G,be){const Ie=h.get(be).get(G);p.get(be)!==Ie&&(r.uniformBlockBinding(be,Ie,G.__bindingPointIndex),p.set(be,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},ce=null,pe={},x={},v=new WeakMap,M=[],E=null,b=!1,y=null,S=null,C=null,D=null,P=null,k=null,O=null,z=new Pt(0,0,0),T=0,L=!1,de=null,B=null,ne=null,ee=null,se=null,Ce.set(0,0,r.canvas.width,r.canvas.height),Ge.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ve,disable:ge,bindFramebuffer:ke,drawBuffers:He,useProgram:nt,setBlending:yt,setMaterial:At,setFlipSided:ut,setCullFace:It,setLineWidth:V,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:_t,bindTexture:Be,unbindTexture:R,compressedTexImage2D:g,compressedTexImage3D:I,texImage2D:et,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:we,texStorage3D:ze,texSubImage2D:$,texSubImage3D:he,compressedTexSubImage2D:oe,compressedTexSubImage3D:Pe,scissor:Ae,viewport:$e,reset:ct}}function MT(r,e,t,s,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ft,_=new WeakMap;let x;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(R,g){return M?new OffscreenCanvas(R,g):nu("canvas")}function b(R,g,I){let $=1;const he=Be(R);if((he.width>I||he.height>I)&&($=I/Math.max(he.width,he.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const oe=Math.floor($*he.width),Pe=Math.floor($*he.height);x===void 0&&(x=E(oe,Pe));const we=g?E(oe,Pe):x;return we.width=oe,we.height=Pe,we.getContext("2d").drawImage(R,0,0,oe,Pe),lt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+oe+"x"+Pe+")."),we}else return"data"in R&&lt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),R;return R}function y(R){return R.generateMipmaps}function S(R){r.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(R,g,I,$,he=!1){if(R!==null){if(r[R]!==void 0)return r[R];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let oe=g;if(g===r.RED&&(I===r.FLOAT&&(oe=r.R32F),I===r.HALF_FLOAT&&(oe=r.R16F),I===r.UNSIGNED_BYTE&&(oe=r.R8)),g===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(oe=r.R8UI),I===r.UNSIGNED_SHORT&&(oe=r.R16UI),I===r.UNSIGNED_INT&&(oe=r.R32UI),I===r.BYTE&&(oe=r.R8I),I===r.SHORT&&(oe=r.R16I),I===r.INT&&(oe=r.R32I)),g===r.RG&&(I===r.FLOAT&&(oe=r.RG32F),I===r.HALF_FLOAT&&(oe=r.RG16F),I===r.UNSIGNED_BYTE&&(oe=r.RG8)),g===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(oe=r.RG8UI),I===r.UNSIGNED_SHORT&&(oe=r.RG16UI),I===r.UNSIGNED_INT&&(oe=r.RG32UI),I===r.BYTE&&(oe=r.RG8I),I===r.SHORT&&(oe=r.RG16I),I===r.INT&&(oe=r.RG32I)),g===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(oe=r.RGB8UI),I===r.UNSIGNED_SHORT&&(oe=r.RGB16UI),I===r.UNSIGNED_INT&&(oe=r.RGB32UI),I===r.BYTE&&(oe=r.RGB8I),I===r.SHORT&&(oe=r.RGB16I),I===r.INT&&(oe=r.RGB32I)),g===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(oe=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(oe=r.RGBA16UI),I===r.UNSIGNED_INT&&(oe=r.RGBA32UI),I===r.BYTE&&(oe=r.RGBA8I),I===r.SHORT&&(oe=r.RGBA16I),I===r.INT&&(oe=r.RGBA32I)),g===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(oe=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(oe=r.R11F_G11F_B10F)),g===r.RGBA){const Pe=he?eu:Tt.getTransfer($);I===r.FLOAT&&(oe=r.RGBA32F),I===r.HALF_FLOAT&&(oe=r.RGBA16F),I===r.UNSIGNED_BYTE&&(oe=Pe===Nt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(oe=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(oe=r.RGB5_A1)}return(oe===r.R16F||oe===r.R32F||oe===r.RG16F||oe===r.RG32F||oe===r.RGBA16F||oe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function P(R,g){let I;return R?g===null||g===Ii||g===to?I=r.DEPTH24_STENCIL8:g===_i?I=r.DEPTH32F_STENCIL8:g===eo&&(I=r.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===to?I=r.DEPTH_COMPONENT24:g===_i?I=r.DEPTH_COMPONENT32F:g===eo&&(I=r.DEPTH_COMPONENT16),I}function k(R,g){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?g.mipmaps.length:1}function O(R){const g=R.target;g.removeEventListener("dispose",O),T(g),g.isVideoTexture&&_.delete(g)}function z(R){const g=R.target;g.removeEventListener("dispose",z),de(g)}function T(R){const g=s.get(R);if(g.__webglInit===void 0)return;const I=R.source,$=v.get(I);if($){const he=$[g.__cacheKey];he.usedTimes--,he.usedTimes===0&&L(R),Object.keys($).length===0&&v.delete(I)}s.remove(R)}function L(R){const g=s.get(R);r.deleteTexture(g.__webglTexture);const I=R.source,$=v.get(I);delete $[g.__cacheKey],c.memory.textures--}function de(R){const g=s.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),s.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(g.__webglFramebuffer[$]))for(let he=0;he<g.__webglFramebuffer[$].length;he++)r.deleteFramebuffer(g.__webglFramebuffer[$][he]);else r.deleteFramebuffer(g.__webglFramebuffer[$]);g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer[$])}else{if(Array.isArray(g.__webglFramebuffer))for(let $=0;$<g.__webglFramebuffer.length;$++)r.deleteFramebuffer(g.__webglFramebuffer[$]);else r.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&r.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&r.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let $=0;$<g.__webglColorRenderbuffer.length;$++)g.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);g.__webglDepthRenderbuffer&&r.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const I=R.textures;for(let $=0,he=I.length;$<he;$++){const oe=s.get(I[$]);oe.__webglTexture&&(r.deleteTexture(oe.__webglTexture),c.memory.textures--),s.remove(I[$])}s.remove(R)}let B=0;function ne(){B=0}function ee(){const R=B;return R>=o.maxTextures&&lt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),B+=1,R}function se(R){const g=[];return g.push(R.wrapS),g.push(R.wrapT),g.push(R.wrapR||0),g.push(R.magFilter),g.push(R.minFilter),g.push(R.anisotropy),g.push(R.internalFormat),g.push(R.format),g.push(R.type),g.push(R.generateMipmaps),g.push(R.premultiplyAlpha),g.push(R.flipY),g.push(R.unpackAlignment),g.push(R.colorSpace),g.join()}function J(R,g){const I=s.get(R);if(R.isVideoTexture&&vt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&I.__version!==R.version){const $=R.image;if($===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(I,R,g);return}}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+g)}function K(R,g){const I=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ae(I,R,g);return}else R.isExternalTexture&&(I.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+g)}function j(R,g){const I=s.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&I.__version!==R.version){ae(I,R,g);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+g)}function Y(R,g){const I=s.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&I.__version!==R.version){ve(I,R,g);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+g)}const ce={[Xf]:r.REPEAT,[Wn]:r.CLAMP_TO_EDGE,[$f]:r.MIRRORED_REPEAT},pe={[hn]:r.NEAREST,[jy]:r.NEAREST_MIPMAP_NEAREST,[yl]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[nf]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},F={[Yy]:r.NEVER,[eS]:r.ALWAYS,[Ky]:r.LESS,[Gd]:r.LEQUAL,[Zy]:r.EQUAL,[Wd]:r.GEQUAL,[Qy]:r.GREATER,[Jy]:r.NOTEQUAL};function q(R,g){if(g.type===_i&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===nf||g.magFilter===yl||g.magFilter===os||g.minFilter===en||g.minFilter===nf||g.minFilter===yl||g.minFilter===os)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ce[g.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ce[g.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ce[g.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,pe[g.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,F[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===hn||g.minFilter!==yl&&g.minFilter!==os||g.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||s.get(g).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,o.getMaxAnisotropy())),s.get(g).__currentAnisotropy=g.anisotropy}}}function Ce(R,g){let I=!1;R.__webglInit===void 0&&(R.__webglInit=!0,g.addEventListener("dispose",O));const $=g.source;let he=v.get($);he===void 0&&(he={},v.set($,he));const oe=se(g);if(oe!==R.__cacheKey){he[oe]===void 0&&(he[oe]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,I=!0),he[oe].usedTimes++;const Pe=he[R.__cacheKey];Pe!==void 0&&(he[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&L(g)),R.__cacheKey=oe,R.__webglTexture=he[oe].texture}return I}function Ge(R,g,I){return Math.floor(Math.floor(R/I)/g)}function Ke(R,g,I,$){const oe=R.updateRanges;if(oe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,g.width,g.height,I,$,g.data);else{oe.sort((Se,Ae)=>Se.start-Ae.start);let Pe=0;for(let Se=1;Se<oe.length;Se++){const Ae=oe[Pe],$e=oe[Se],We=Ae.start+Ae.count,Ne=Ge($e.start,g.width,4),ct=Ge(Ae.start,g.width,4);$e.start<=We+1&&Ne===ct&&Ge($e.start+$e.count-1,g.width,4)===Ne?Ae.count=Math.max(Ae.count,$e.start+$e.count-Ae.start):(++Pe,oe[Pe]=$e)}oe.length=Pe+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),ze=r.getParameter(r.UNPACK_SKIP_PIXELS),et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,g.width);for(let Se=0,Ae=oe.length;Se<Ae;Se++){const $e=oe[Se],We=Math.floor($e.start/4),Ne=Math.ceil($e.count/4),ct=We%g.width,G=Math.floor(We/g.width),be=Ne,Ee=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),t.texSubImage2D(r.TEXTURE_2D,0,ct,G,be,Ee,I,$,g.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,et)}}function ae(R,g,I){let $=r.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),g.isData3DTexture&&($=r.TEXTURE_3D);const he=Ce(R,g),oe=g.source;t.bindTexture($,R.__webglTexture,r.TEXTURE0+I);const Pe=s.get(oe);if(oe.version!==Pe.__version||he===!0){t.activeTexture(r.TEXTURE0+I);const we=Tt.getPrimaries(Tt.workingColorSpace),ze=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),et=g.colorSpace===Nr||we===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Se=b(g.image,!1,o.maxTextureSize);Se=_t(g,Se);const Ae=l.convert(g.format,g.colorSpace),$e=l.convert(g.type);let We=D(g.internalFormat,Ae,$e,g.colorSpace,g.isVideoTexture);q($,g);let Ne;const ct=g.mipmaps,G=g.isVideoTexture!==!0,be=Pe.__version===void 0||he===!0,Ee=oe.dataReady,Ie=k(g,Se);if(g.isDepthTexture)We=P(g.format===ls,g.type),be&&(G?t.texStorage2D(r.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,$e,null));else if(g.isDataTexture)if(ct.length>0){G&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ct[0].width,ct[0].height);for(let Me=0,me=ct.length;Me<me;Me++)Ne=ct[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ae,$e,Ne.data);g.generateMipmaps=!1}else G?(be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height),Ee&&Ke(g,Se,Ae,$e)):t.texImage2D(r.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,$e,Se.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){G&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,ct[0].width,ct[0].height,Se.depth);for(let Me=0,me=ct.length;Me<me;Me++)if(Ne=ct[Me],g.format!==ii)if(Ae!==null)if(G){if(Ee)if(g.layerUpdates.size>0){const je=eg(Ne.width,Ne.height,g.format,g.type);for(const st of g.layerUpdates){const Dt=Ne.data.subarray(st*je/Ne.data.BYTES_PER_ELEMENT,(st+1)*je/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,st,Ne.width,Ne.height,1,Ae,Dt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,Ae,Ne.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Ne.width,Ne.height,Se.depth,Ae,$e,Ne.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Me,We,Ne.width,Ne.height,Se.depth,0,Ae,$e,Ne.data)}else{G&&be&&t.texStorage2D(r.TEXTURE_2D,Ie,We,ct[0].width,ct[0].height);for(let Me=0,me=ct.length;Me<me;Me++)Ne=ct[Me],g.format!==ii?Ae!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ne.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ne.width,Ne.height,Ae,$e,Ne.data):t.texImage2D(r.TEXTURE_2D,Me,We,Ne.width,Ne.height,0,Ae,$e,Ne.data)}else if(g.isDataArrayTexture)if(G){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,We,Se.width,Se.height,Se.depth),Ee)if(g.layerUpdates.size>0){const Me=eg(Se.width,Se.height,g.format,g.type);for(const me of g.layerUpdates){const je=Se.data.subarray(me*Me/Se.data.BYTES_PER_ELEMENT,(me+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Ae,$e,je)}g.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,$e,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,Ae,$e,Se.data);else if(g.isData3DTexture)G?(be&&t.texStorage3D(r.TEXTURE_3D,Ie,We,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,$e,Se.data)):t.texImage3D(r.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,Ae,$e,Se.data);else if(g.isFramebufferTexture){if(be)if(G)t.texStorage2D(r.TEXTURE_2D,Ie,We,Se.width,Se.height);else{let Me=Se.width,me=Se.height;for(let je=0;je<Ie;je++)t.texImage2D(r.TEXTURE_2D,je,We,Me,me,0,Ae,$e,null),Me>>=1,me>>=1}}else if(ct.length>0){if(G&&be){const Me=Be(ct[0]);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}for(let Me=0,me=ct.length;Me<me;Me++)Ne=ct[Me],G?Ee&&t.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ae,$e,Ne):t.texImage2D(r.TEXTURE_2D,Me,We,Ae,$e,Ne);g.generateMipmaps=!1}else if(G){if(be){const Me=Be(Se);t.texStorage2D(r.TEXTURE_2D,Ie,We,Me.width,Me.height)}Ee&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,$e,Se)}else t.texImage2D(r.TEXTURE_2D,0,We,Ae,$e,Se);y(g)&&S($),Pe.__version=oe.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ve(R,g,I){if(g.image.length!==6)return;const $=Ce(R,g),he=g.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+I);const oe=s.get(he);if(he.version!==oe.__version||$===!0){t.activeTexture(r.TEXTURE0+I);const Pe=Tt.getPrimaries(Tt.workingColorSpace),we=g.colorSpace===Nr?null:Tt.getPrimaries(g.colorSpace),ze=g.colorSpace===Nr||Pe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,g.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,g.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const et=g.isCompressedTexture||g.image[0].isCompressedTexture,Se=g.image[0]&&g.image[0].isDataTexture,Ae=[];for(let me=0;me<6;me++)!et&&!Se?Ae[me]=b(g.image[me],!0,o.maxCubemapSize):Ae[me]=Se?g.image[me].image:g.image[me],Ae[me]=_t(g,Ae[me]);const $e=Ae[0],We=l.convert(g.format,g.colorSpace),Ne=l.convert(g.type),ct=D(g.internalFormat,We,Ne,g.colorSpace),G=g.isVideoTexture!==!0,be=oe.__version===void 0||$===!0,Ee=he.dataReady;let Ie=k(g,$e);q(r.TEXTURE_CUBE_MAP,g);let Me;if(et){G&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,$e.width,$e.height);for(let me=0;me<6;me++){Me=Ae[me].mipmaps;for(let je=0;je<Me.length;je++){const st=Me[je];g.format!==ii?We!==null?G?Ee&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,st.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ct,st.width,st.height,0,st.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,0,0,st.width,st.height,We,Ne,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je,ct,st.width,st.height,0,We,Ne,st.data)}}}else{if(Me=g.mipmaps,G&&be){Me.length>0&&Ie++;const me=Be(Ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,me.width,me.height)}for(let me=0;me<6;me++)if(Se){G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae[me].width,Ae[me].height,We,Ne,Ae[me].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,Ae[me].width,Ae[me].height,0,We,Ne,Ae[me].data);for(let je=0;je<Me.length;je++){const Dt=Me[je].image[me].image;G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,Dt.width,Dt.height,We,Ne,Dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ct,Dt.width,Dt.height,0,We,Ne,Dt.data)}}else{G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,Ne,Ae[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ct,We,Ne,Ae[me]);for(let je=0;je<Me.length;je++){const st=Me[je];G?Ee&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,0,0,We,Ne,st.image[me]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+me,je+1,ct,We,Ne,st.image[me])}}}y(g)&&S(r.TEXTURE_CUBE_MAP),oe.__version=he.version,g.onUpdate&&g.onUpdate(g)}R.__version=g.version}function ge(R,g,I,$,he,oe){const Pe=l.convert(I.format,I.colorSpace),we=l.convert(I.type),ze=D(I.internalFormat,Pe,we,I.colorSpace),et=s.get(g),Se=s.get(I);if(Se.__renderTarget=g,!et.__hasExternalTextures){const Ae=Math.max(1,g.width>>oe),$e=Math.max(1,g.height>>oe);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?t.texImage3D(he,oe,ze,Ae,$e,g.depth,0,Pe,we,null):t.texImage2D(he,oe,ze,Ae,$e,0,Pe,we,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ut(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,he,Se.__webglTexture,0,V(g)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,he,Se.__webglTexture,oe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,g,I){if(r.bindRenderbuffer(r.RENDERBUFFER,R),g.depthBuffer){const $=g.depthTexture,he=$&&$.isDepthTexture?$.type:null,oe=P(g.stencilBuffer,he),Pe=g.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ut(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),oe,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),oe,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,oe,g.width,g.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Pe,r.RENDERBUFFER,R)}else{const $=g.textures;for(let he=0;he<$.length;he++){const oe=$[he],Pe=l.convert(oe.format,oe.colorSpace),we=l.convert(oe.type),ze=D(oe.internalFormat,Pe,we,oe.colorSpace);Ut(g)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(g),ze,g.width,g.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(g),ze,g.width,g.height):r.renderbufferStorage(r.RENDERBUFFER,ze,g.width,g.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function He(R,g,I){const $=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(g.depthTexture);if(he.__renderTarget=g,(!he.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$){if(he.__webglInit===void 0&&(he.__webglInit=!0,g.depthTexture.addEventListener("dispose",O)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),q(r.TEXTURE_CUBE_MAP,g.depthTexture);const et=l.convert(g.depthTexture.format),Se=l.convert(g.depthTexture.type);let Ae;g.depthTexture.format===ir?Ae=r.DEPTH_COMPONENT24:g.depthTexture.format===ls&&(Ae=r.DEPTH24_STENCIL8);for(let $e=0;$e<6;$e++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$e,0,Ae,g.width,g.height,0,et,Se,null)}}else J(g.depthTexture,0);const oe=he.__webglTexture,Pe=V(g),we=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,ze=g.depthTexture.format===ls?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(g.depthTexture.format===ir)Ut(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,oe,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,oe,0);else if(g.depthTexture.format===ls)Ut(g)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ze,we,oe,0,Pe):r.framebufferTexture2D(r.FRAMEBUFFER,ze,we,oe,0);else throw new Error("Unknown depthTexture format")}function nt(R){const g=s.get(R),I=R.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),$){const he=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,$.removeEventListener("dispose",he)};$.addEventListener("dispose",he),g.__depthDisposeCallback=he}g.__boundDepthTexture=$}if(R.depthTexture&&!g.__autoAllocateDepthBuffer)if(I)for(let $=0;$<6;$++)He(g.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?He(g.__webglFramebuffer[0],R,0):He(g.__webglFramebuffer,R,0)}else if(I){g.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[$]),g.__webglDepthbuffer[$]===void 0)g.__webglDepthbuffer[$]=r.createRenderbuffer(),ke(g.__webglDepthbuffer[$],R,!1);else{const he=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,oe)}}else{const $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=r.createRenderbuffer(),ke(g.__webglDepthbuffer,R,!1);else{const he=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=g.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,oe),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,oe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(R,g,I){const $=s.get(R);g!==void 0&&ge($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&nt(R)}function pt(R){const g=R.texture,I=s.get(R),$=s.get(g);R.addEventListener("dispose",z);const he=R.textures,oe=R.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=g.version,c.memory.textures++),oe){I.__webglFramebuffer=[];for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer[we]=[];for(let ze=0;ze<g.mipmaps.length;ze++)I.__webglFramebuffer[we][ze]=r.createFramebuffer()}else I.__webglFramebuffer[we]=r.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){I.__webglFramebuffer=[];for(let we=0;we<g.mipmaps.length;we++)I.__webglFramebuffer[we]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(Pe)for(let we=0,ze=he.length;we<ze;we++){const et=s.get(he[we]);et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture(),c.memory.textures++)}if(R.samples>0&&Ut(R)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let we=0;we<he.length;we++){const ze=he[we];I.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[we]);const et=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),Ae=D(ze.internalFormat,et,Se,ze.colorSpace,R.isXRRenderTarget===!0),$e=V(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Ae,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,I.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(I.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(oe){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),q(r.TEXTURE_CUBE_MAP,g);for(let we=0;we<6;we++)if(g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[we][ze],R,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,ze);else ge(I.__webglFramebuffer[we],R,g,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(g)&&S(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let we=0,ze=he.length;we<ze;we++){const et=he[we],Se=s.get(et);let Ae=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ae=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Se.__webglTexture),q(Ae,et),ge(I.__webglFramebuffer,R,et,r.COLOR_ATTACHMENT0+we,Ae,0),y(et)&&S(Ae)}t.unbindTexture()}else{let we=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(we=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(we,$.__webglTexture),q(we,g),g.mipmaps&&g.mipmaps.length>0)for(let ze=0;ze<g.mipmaps.length;ze++)ge(I.__webglFramebuffer[ze],R,g,r.COLOR_ATTACHMENT0,we,ze);else ge(I.__webglFramebuffer,R,g,r.COLOR_ATTACHMENT0,we,0);y(g)&&S(we),t.unbindTexture()}R.depthBuffer&&nt(R)}function yt(R){const g=R.textures;for(let I=0,$=g.length;I<$;I++){const he=g[I];if(y(he)){const oe=C(R),Pe=s.get(he).__webglTexture;t.bindTexture(oe,Pe),S(oe),t.unbindTexture()}}}const At=[],ut=[];function It(R){if(R.samples>0){if(Ut(R)===!1){const g=R.textures,I=R.width,$=R.height;let he=r.COLOR_BUFFER_BIT;const oe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pe=s.get(R),we=g.length>1;if(we)for(let et=0;et<g.length;et++)t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let et=0;et<g.length;et++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Se,0)}r.blitFramebuffer(0,0,I,$,0,0,I,$,he,r.NEAREST),p===!0&&(At.length=0,ut.length=0,At.push(r.COLOR_ATTACHMENT0+et),R.depthBuffer&&R.resolveDepthBuffer===!1&&(At.push(oe),ut.push(oe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let et=0;et<g.length;et++){t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,Pe.__webglColorRenderbuffer[et]);const Se=s.get(g[et]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.TEXTURE_2D,Se,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&p){const g=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[g])}}}function V(R){return Math.min(o.maxSamples,R.samples)}function Ut(R){const g=s.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function vt(R){const g=c.render.frame;_.get(R)!==g&&(_.set(R,g),R.update())}function _t(R,g){const I=R.colorSpace,$=R.format,he=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||I!==ta&&I!==Nr&&(Tt.getTransfer(I)===Nt?($!==ii||he!==ni)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",I)),g}function Be(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=ne,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=Gt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ET(r,e){function t(s,o=Nr){let l;const c=Tt.getTransfer(o);if(s===ni)return r.UNSIGNED_BYTE;if(s===kd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===r0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===s0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===n0)return r.BYTE;if(s===i0)return r.SHORT;if(s===eo)return r.UNSIGNED_SHORT;if(s===Od)return r.INT;if(s===Ii)return r.UNSIGNED_INT;if(s===_i)return r.FLOAT;if(s===Ui)return r.HALF_FLOAT;if(s===a0)return r.ALPHA;if(s===o0)return r.RGB;if(s===ii)return r.RGBA;if(s===ir)return r.DEPTH_COMPONENT;if(s===ls)return r.DEPTH_STENCIL;if(s===l0)return r.RED;if(s===zd)return r.RED_INTEGER;if(s===ea)return r.RG;if(s===Vd)return r.RG_INTEGER;if(s===Hd)return r.RGBA_INTEGER;if(s===ql||s===Yl||s===Kl||s===Zl)if(c===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qf||s===Yf||s===Kf||s===Zf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qf||s===Jf||s===ed||s===td||s===nd||s===id||s===rd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qf||s===Jf)return c===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ed)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(s===td)return l.COMPRESSED_R11_EAC;if(s===nd)return l.COMPRESSED_SIGNED_R11_EAC;if(s===id)return l.COMPRESSED_RG11_EAC;if(s===rd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===sd||s===ad||s===od||s===ld||s===ud||s===cd||s===fd||s===dd||s===hd||s===pd||s===md||s===gd||s===vd||s===_d)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===sd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ad)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===od)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ld)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ud)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===cd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===pd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===md)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===gd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vd)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_d)return c===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xd||s===yd||s===Sd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===xd)return c===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Sd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Md||s===Ed||s===wd||s===Td)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Md)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ed)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Td)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===to?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
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

}`;class AT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const s=new y0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Fi({vertexShader:wT,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new us(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends ra{constructor(e,t){super();const s=this;let o=null,l=1,c=null,d="local-floor",p=1,h=null,_=null,x=null,v=null,M=null,E=null;const b=typeof XRWebGLBinding<"u",y=new AT,S={},C=t.getContextAttributes();let D=null,P=null;const k=[],O=[],z=new ft;let T=null;const L=new gi;L.viewport=new $t;const de=new gi;de.viewport=new $t;const B=[L,de],ne=new kS;let ee=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=k[ae];return ve===void 0&&(ve=new ff,k[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=k[ae];return ve===void 0&&(ve=new ff,k[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=k[ae];return ve===void 0&&(ve=new ff,k[ae]=ve),ve.getHandSpace()};function J(ae){const ve=O.indexOf(ae.inputSource);if(ve===-1)return;const ge=k[ve];ge!==void 0&&(ge.update(ae.inputSource,ae.frame,h||c),ge.dispatchEvent({type:ae.type,data:ae.inputSource}))}function K(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",K),o.removeEventListener("inputsourceschange",j);for(let ae=0;ae<k.length;ae++){const ve=O[ae];ve!==null&&(O[ae]=null,k[ae].disconnect(ve))}ee=null,se=null,y.reset();for(const ae in S)delete S[ae];e.setRenderTarget(D),M=null,v=null,x=null,o=null,P=null,Ke.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",K),o.addEventListener("inputsourceschange",j),C.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ke=null,He=null;C.depth&&(He=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=C.stencil?ls:ir,ke=C.stencil?to:Ii);const nt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};x=this.getBinding(),v=x.createProjectionLayer(nt),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),P=new xi(v.textureWidth,v.textureHeight,{format:ii,type:ni,depthTexture:new no(v.textureWidth,v.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const ge={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ge),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new xi(M.framebufferWidth,M.framebufferHeight,{format:ii,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),h=null,c=await o.requestReferenceSpace(d),Ke.setContext(o),Ke.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ae){for(let ve=0;ve<ae.removed.length;ve++){const ge=ae.removed[ve],ke=O.indexOf(ge);ke>=0&&(O[ke]=null,k[ke].disconnect(ge))}for(let ve=0;ve<ae.added.length;ve++){const ge=ae.added[ve];let ke=O.indexOf(ge);if(ke===-1){for(let nt=0;nt<k.length;nt++)if(nt>=O.length){O.push(ge),ke=nt;break}else if(O[nt]===null){O[nt]=ge,ke=nt;break}if(ke===-1)break}const He=k[ke];He&&He.connect(ge)}}const Y=new re,ce=new re;function pe(ae,ve,ge){Y.setFromMatrixPosition(ve.matrixWorld),ce.setFromMatrixPosition(ge.matrixWorld);const ke=Y.distanceTo(ce),He=ve.projectionMatrix.elements,nt=ge.projectionMatrix.elements,Gt=He[14]/(He[10]-1),pt=He[14]/(He[10]+1),yt=(He[9]+1)/He[5],At=(He[9]-1)/He[5],ut=(He[8]-1)/He[0],It=(nt[8]+1)/nt[0],V=Gt*ut,Ut=Gt*It,vt=ke/(-ut+It),_t=vt*-ut;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(_t),ae.translateZ(vt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),He[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Be=Gt+vt,R=pt+vt,g=V-_t,I=Ut+(ke-_t),$=yt*pt/R*Be,he=At*pt/R*Be;ae.projectionMatrix.makePerspective(g,I,$,he,Be,R),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function F(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ve=ae.near,ge=ae.far;y.texture!==null&&(y.depthNear>0&&(ve=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),ne.near=de.near=L.near=ve,ne.far=de.far=L.far=ge,(ee!==ne.near||se!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),ee=ne.near,se=ne.far),ne.layers.mask=ae.layers.mask|6,L.layers.mask=ne.layers.mask&-5,de.layers.mask=ne.layers.mask&-3;const ke=ae.parent,He=ne.cameras;F(ne,ke);for(let nt=0;nt<He.length;nt++)F(He[nt],ke);He.length===2?pe(ne,L,de):ne.projectionMatrix.copy(L.projectionMatrix),q(ae,ne,ke)};function q(ae,ve,ge){ge===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(ge.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ad*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(v===null&&M===null))return p},this.setFoveation=function(ae){p=ae,v!==null&&(v.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(ae){return S[ae]};let Ce=null;function Ge(ae,ve){if(_=ve.getViewerPose(h||c),E=ve,_!==null){const ge=_.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ke=!1;ge.length!==ne.cameras.length&&(ne.cameras.length=0,ke=!0);for(let pt=0;pt<ge.length;pt++){const yt=ge[pt];let At=null;if(M!==null)At=M.getViewport(yt);else{const It=x.getViewSubImage(v,yt);At=It.viewport,pt===0&&(e.setRenderTargetTextures(P,It.colorTexture,It.depthStencilTexture),e.setRenderTarget(P))}let ut=B[pt];ut===void 0&&(ut=new gi,ut.layers.enable(pt),ut.viewport=new $t,B[pt]=ut),ut.matrix.fromArray(yt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(yt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(At.x,At.y,At.width,At.height),pt===0&&(ne.matrix.copy(ut.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),ke===!0&&ne.cameras.push(ut)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){x=s.getBinding();const pt=x.getDepthInformation(ge[0]);pt&&pt.isValid&&pt.texture&&y.init(pt,o.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),x=s.getBinding();for(let pt=0;pt<ge.length;pt++){const yt=ge[pt].camera;if(yt){let At=S[yt];At||(At=new y0,S[yt]=At);const ut=x.getCameraImage(yt);At.sourceTexture=ut}}}}for(let ge=0;ge<k.length;ge++){const ke=O[ge],He=k[ge];ke!==null&&He!==void 0&&He.update(ke,ve,h||c)}Ce&&Ce(ae,ve),ve.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Ke=new E0;Ke.setAnimationLoop(Ge),this.setAnimationLoop=function(ae){Ce=ae},this.dispose=function(){}}}const is=new rr,CT=new Zt;function RT(r,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,S0(r)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,D,P){S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),v(y,S),S.isMeshPhysicalMaterial&&M(y,S,P)):S.isMeshMatcapMaterial?(l(y,S),E(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?p(y,S,C,D):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Un&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Un&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),D=C.envMap,P=C.envMapRotation;D&&(y.envMap.value=D,is.copy(P),is.x*=-1,is.y*=-1,is.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),y.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(is)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,C,D){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=D*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function v(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Un&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function PT(r,e,t,s){let o={},l={},c=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const P=D.program;s.uniformBlockBinding(C,P)}function h(C,D){let P=o[C.id];P===void 0&&(E(C),P=_(C),o[C.id]=P,C.addEventListener("dispose",y));const k=D.program;s.updateUBOMapping(C,k);const O=e.render.frame;l[C.id]!==O&&(v(C),l[C.id]=O)}function _(C){const D=x();C.__bindingPointIndex=D;const P=r.createBuffer(),k=C.__size,O=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,P),r.bufferData(r.UNIFORM_BUFFER,k,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,P),P}function x(){for(let C=0;C<d;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const D=o[C.id],P=C.uniforms,k=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let O=0,z=P.length;O<z;O++){const T=Array.isArray(P[O])?P[O]:[P[O]];for(let L=0,de=T.length;L<de;L++){const B=T[L];if(M(B,O,L,k)===!0){const ne=B.__offset,ee=Array.isArray(B.value)?B.value:[B.value];let se=0;for(let J=0;J<ee.length;J++){const K=ee[J],j=b(K);typeof K=="number"||typeof K=="boolean"?(B.__data[0]=K,r.bufferSubData(r.UNIFORM_BUFFER,ne+se,B.__data)):K.isMatrix3?(B.__data[0]=K.elements[0],B.__data[1]=K.elements[1],B.__data[2]=K.elements[2],B.__data[3]=0,B.__data[4]=K.elements[3],B.__data[5]=K.elements[4],B.__data[6]=K.elements[5],B.__data[7]=0,B.__data[8]=K.elements[6],B.__data[9]=K.elements[7],B.__data[10]=K.elements[8],B.__data[11]=0):(K.toArray(B.__data,se),se+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(C,D,P,k){const O=C.value,z=D+"_"+P;if(k[z]===void 0)return typeof O=="number"||typeof O=="boolean"?k[z]=O:k[z]=O.clone(),!0;{const T=k[z];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return k[z]=O,!0}else if(T.equals(O)===!1)return T.copy(O),!0}return!1}function E(C){const D=C.uniforms;let P=0;const k=16;for(let z=0,T=D.length;z<T;z++){const L=Array.isArray(D[z])?D[z]:[D[z]];for(let de=0,B=L.length;de<B;de++){const ne=L[de],ee=Array.isArray(ne.value)?ne.value:[ne.value];for(let se=0,J=ee.length;se<J;se++){const K=ee[se],j=b(K),Y=P%k,ce=Y%j.boundary,pe=Y+ce;P+=ce,pe!==0&&k-pe<j.storage&&(P+=k-pe),ne.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=P,P+=j.storage}}}const O=P%k;return O>0&&(P+=k-O),C.__size=P,C.__cache={},this}function b(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",C),D}function y(C){const D=C.target;D.removeEventListener("dispose",y);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function S(){for(const C in o)r.deleteBuffer(o[C]);c=[],o={},l={}}return{bind:p,update:h,dispose:S}}const LT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function DT(){return Pi===null&&(Pi=new v0(LT,16,16,ea,Ui),Pi.name="DFG_LUT",Pi.minFilter=en,Pi.magFilter=en,Pi.wrapS=Wn,Pi.wrapT=Wn,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class NT{constructor(e={}){const{canvas:t=nS(),context:s=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1,outputBufferType:M=ni}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=c;const b=M,y=new Set([Hd,Vd,zd]),S=new Set([ni,Ii,eo,to,kd,Bd]),C=new Uint32Array(4),D=new Int32Array(4);let P=null,k=null;const O=[],z=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let de=!1;this._outputColorSpace=ti;let B=0,ne=0,ee=null,se=-1,J=null;const K=new $t,j=new $t;let Y=null;const ce=new Pt(0);let pe=0,F=t.width,q=t.height,Ce=1,Ge=null,Ke=null;const ae=new $t(0,0,F,q),ve=new $t(0,0,F,q);let ge=!1;const ke=new _0;let He=!1,nt=!1;const Gt=new Zt,pt=new re,yt=new $t,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function It(){return ee===null?Ce:1}let V=s;function Ut(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const X="webgl2";if(V=Ut(X,A),V===null)throw Ut(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Ct("WebGLRenderer: "+A.message),A}let vt,_t,Be,R,g,I,$,he,oe,Pe,we,ze,et,Se,Ae,$e,We,Ne,ct,G,be,Ee,Ie;function Me(){vt=new N1(V),vt.init(),be=new ET(V,vt),_t=new T1(V,vt,e,be),Be=new ST(V,vt),_t.reversedDepthBuffer&&v&&Be.buffers.depth.setReversed(!0),R=new F1(V),g=new oT,I=new MT(V,vt,Be,g,_t,be,R),$=new D1(L),he=new VS(V),Ee=new E1(V,he),oe=new I1(V,he,R,Ee),Pe=new k1(V,oe,he,Ee,R),Ne=new O1(V,_t,I),Ae=new A1(g),we=new aT(L,$,vt,_t,Ee,Ae),ze=new RT(L,g),et=new uT,Se=new mT(vt),We=new M1(L,$,Be,Pe,E,p),$e=new yT(L,Pe,_t),Ie=new PT(V,R,_t,Be),ct=new w1(V,vt,R),G=new U1(V,vt,R),R.programs=we.programs,L.capabilities=_t,L.extensions=vt,L.properties=g,L.renderLists=et,L.shadowMap=$e,L.state=Be,L.info=R}Me(),b!==ni&&(T=new z1(b,t.width,t.height,o,l));const me=new bT(L,V);this.xr=me,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(A){A!==void 0&&(Ce=A,this.setSize(F,q,!1))},this.getSize=function(A){return A.set(F,q)},this.setSize=function(A,X,fe=!0){if(me.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,q=X,t.width=Math.floor(A*Ce),t.height=Math.floor(X*Ce),fe===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(F*Ce,q*Ce).floor()},this.setDrawingBufferSize=function(A,X,fe){F=A,q=X,Ce=fe,t.width=Math.floor(A*fe),t.height=Math.floor(X*fe),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(ae)},this.setViewport=function(A,X,fe,ie){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,X,fe,ie),Be.viewport(K.copy(ae).multiplyScalar(Ce).round())},this.getScissor=function(A){return A.copy(ve)},this.setScissor=function(A,X,fe,ie){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,X,fe,ie),Be.scissor(j.copy(ve).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Be.setScissorTest(ge=A)},this.setOpaqueSort=function(A){Ge=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,fe=!0){let ie=0;if(A){let Q=!1;if(ee!==null){const Le=ee.texture.format;Q=y.has(Le)}if(Q){const Le=ee.texture.type,Oe=S.has(Le),Re=We.getClearColor(),Ue=We.getClearAlpha(),Qe=Re.r,tt=Re.g,dt=Re.b;Oe?(C[0]=Qe,C[1]=tt,C[2]=dt,C[3]=Ue,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=Qe,D[1]=tt,D[2]=dt,D[3]=Ue,V.clearBufferiv(V.COLOR,0,D))}else ie|=V.COLOR_BUFFER_BIT}X&&(ie|=V.DEPTH_BUFFER_BIT),fe&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),We.dispose(),et.dispose(),Se.dispose(),g.dispose(),$.dispose(),Pe.dispose(),Ee.dispose(),Ie.dispose(),we.dispose(),me.dispose(),me.removeEventListener("sessionstart",ar),me.removeEventListener("sessionend",Or),Xn.stop()};function je(A){A.preventDefault(),Dm("WebGLRenderer: Context Lost."),de=!0}function st(){Dm("WebGLRenderer: Context Restored."),de=!1;const A=R.autoReset,X=$e.enabled,fe=$e.autoUpdate,ie=$e.needsUpdate,Q=$e.type;Me(),R.autoReset=A,$e.enabled=X,$e.autoUpdate=fe,$e.needsUpdate=ie,$e.type=Q}function Dt(A){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Et(A){const X=A.target;X.removeEventListener("dispose",Et),jn(X)}function jn(A){yn(A),g.remove(A)}function yn(A){const X=g.get(A).programs;X!==void 0&&(X.forEach(function(fe){we.releaseProgram(fe)}),A.isShaderMaterial&&we.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,fe,ie,Q,Le){X===null&&(X=At);const Oe=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=po(A,X,fe,ie,Q);Be.setMaterial(ie,Oe);let Ue=fe.index,Qe=1;if(ie.wireframe===!0){if(Ue=oe.getWireframeAttribute(fe),Ue===void 0)return;Qe=2}const tt=fe.drawRange,dt=fe.attributes.position;let Je=tt.start*Qe,Lt=(tt.start+tt.count)*Qe;Le!==null&&(Je=Math.max(Je,Le.start*Qe),Lt=Math.min(Lt,(Le.start+Le.count)*Qe)),Ue!==null?(Je=Math.max(Je,0),Lt=Math.min(Lt,Ue.count)):dt!=null&&(Je=Math.max(Je,0),Lt=Math.min(Lt,dt.count));const Ot=Lt-Je;if(Ot<0||Ot===1/0)return;Ee.setup(Q,ie,Re,fe,Ue);let Ft,Mt=ct;if(Ue!==null&&(Ft=he.get(Ue),Mt=G,Mt.setIndex(Ft)),Q.isMesh)ie.wireframe===!0?(Be.setLineWidth(ie.wireframeLinewidth*It()),Mt.setMode(V.LINES)):Mt.setMode(V.TRIANGLES);else if(Q.isLine){let qt=ie.linewidth;qt===void 0&&(qt=1),Be.setLineWidth(qt*It()),Q.isLineSegments?Mt.setMode(V.LINES):Q.isLineLoop?Mt.setMode(V.LINE_LOOP):Mt.setMode(V.LINE_STRIP)}else Q.isPoints?Mt.setMode(V.POINTS):Q.isSprite&&Mt.setMode(V.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)iu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Mt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const qt=Q._multiDrawStarts,Ye=Q._multiDrawCounts,Sn=Q._multiDrawCount,xt=Ue?he.get(Ue).bytesPerElement:1,An=g.get(ie).currentProgram.getUniforms();for(let bn=0;bn<Sn;bn++)An.setValue(V,"_gl_DrawID",bn),Mt.render(qt[bn]/xt,Ye[bn])}else if(Q.isInstancedMesh)Mt.renderInstances(Je,Ot,Q.count);else if(fe.isInstancedBufferGeometry){const qt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,qt);Mt.renderInstances(Je,Ot,Ye)}else Mt.render(Je,Ot)};function fs(A,X,fe){A.transparent===!0&&A.side===Qi&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Br(A,X,fe),A.side=Ur,A.needsUpdate=!0,Br(A,X,fe),A.side=Qi):Br(A,X,fe)}this.compile=function(A,X,fe=null){fe===null&&(fe=A),k=Se.get(fe),k.init(X),z.push(k),fe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(k.pushLight(Q),Q.castShadow&&k.pushShadow(Q))}),A!==fe&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(k.pushLight(Q),Q.castShadow&&k.pushShadow(Q))}),k.setupLights();const ie=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Le=Q.material;if(Le)if(Array.isArray(Le))for(let Oe=0;Oe<Le.length;Oe++){const Re=Le[Oe];fs(Re,fe,Q),ie.add(Re)}else fs(Le,fe,Q),ie.add(Le)}),k=z.pop(),ie},this.compileAsync=function(A,X,fe=null){const ie=this.compile(A,X,fe);return new Promise(Q=>{function Le(){if(ie.forEach(function(Oe){g.get(Oe).currentProgram.isReady()&&ie.delete(Oe)}),ie.size===0){Q(A);return}setTimeout(Le,10)}vt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Oi=null;function pu(A){Oi&&Oi(A)}function ar(){Xn.stop()}function Or(){Xn.start()}const Xn=new E0;Xn.setAnimationLoop(pu),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Oi=A,me.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},me.addEventListener("sessionstart",ar),me.addEventListener("sessionend",Or),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(de===!0)return;const fe=me.enabled===!0&&me.isPresenting===!0,ie=T!==null&&(ee===null||fe)&&T.begin(L,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(X),X=me.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,X,ee),k=Se.get(A,z.length),k.init(X),z.push(k),Gt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(Gt,Di,X.reversedDepth),nt=this.localClippingEnabled,He=Ae.init(this.clippingPlanes,nt),P=et.get(A,O.length),P.init(),O.push(P),me.enabled===!0&&me.isPresenting===!0){const Oe=L.xr.getDepthSensingMesh();Oe!==null&&kr(Oe,X,-1/0,L.sortObjects)}kr(A,X,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(Ge,Ke),ut=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,ut&&We.addToRenderList(P,A),this.info.render.frame++,He===!0&&Ae.beginShadows();const Q=k.state.shadowsArray;if($e.render(Q,A,X),He===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const Oe=P.opaque,Re=P.transmissive;if(k.setupLights(),X.isArrayCamera){const Ue=X.cameras;if(Re.length>0)for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe];fo(Oe,Re,A,dt)}ut&&We.render(A);for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe];co(P,A,dt,dt.viewport)}}else Re.length>0&&fo(Oe,Re,A,X),ut&&We.render(A),co(P,A,X)}ee!==null&&ne===0&&(I.updateMultisampleRenderTarget(ee),I.updateRenderTargetMipmap(ee)),ie&&T.end(L),A.isScene===!0&&A.onAfterRender(L,A,X),Ee.resetDefaultState(),se=-1,J=null,z.pop(),z.length>0?(k=z[z.length-1],He===!0&&Ae.setGlobalState(L.clippingPlanes,k.state.camera)):k=null,O.pop(),O.length>0?P=O[O.length-1]:P=null};function kr(A,X,fe,ie){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)fe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)k.pushLight(A),A.castShadow&&k.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ie&&yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Gt);const Oe=Pe.update(A),Re=A.material;Re.visible&&P.push(A,Oe,Re,fe,yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Oe=Pe.update(A),Re=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),yt.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),yt.copy(Oe.boundingSphere.center)),yt.applyMatrix4(A.matrixWorld).applyMatrix4(Gt)),Array.isArray(Re)){const Ue=Oe.groups;for(let Qe=0,tt=Ue.length;Qe<tt;Qe++){const dt=Ue[Qe],Je=Re[dt.materialIndex];Je&&Je.visible&&P.push(A,Oe,Je,fe,yt.z,dt)}}else Re.visible&&P.push(A,Oe,Re,fe,yt.z,null)}}const Le=A.children;for(let Oe=0,Re=Le.length;Oe<Re;Oe++)kr(Le[Oe],X,fe,ie)}function co(A,X,fe,ie){const{opaque:Q,transmissive:Le,transparent:Oe}=A;k.setupLightsView(fe),He===!0&&Ae.setGlobalState(L.clippingPlanes,fe),ie&&Be.viewport(K.copy(ie)),Q.length>0&&ds(Q,X,fe),Le.length>0&&ds(Le,X,fe),Oe.length>0&&ds(Oe,X,fe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function fo(A,X,fe,ie){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ie.id]===void 0){const Je=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ie.id]=new xi(1,1,{generateMipmaps:!0,type:Je?Ui:ni,minFilter:os,samples:Math.max(4,_t.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Le=k.state.transmissionRenderTarget[ie.id],Oe=ie.viewport||K;Le.setSize(Oe.z*L.transmissionResolutionScale,Oe.w*L.transmissionResolutionScale);const Re=L.getRenderTarget(),Ue=L.getActiveCubeFace(),Qe=L.getActiveMipmapLevel();L.setRenderTarget(Le),L.getClearColor(ce),pe=L.getClearAlpha(),pe<1&&L.setClearColor(16777215,.5),L.clear(),ut&&We.render(fe);const tt=L.toneMapping;L.toneMapping=Ni;const dt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),k.setupLightsView(ie),He===!0&&Ae.setGlobalState(L.clippingPlanes,ie),ds(A,fe,ie),I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Lt=0,Ot=X.length;Lt<Ot;Lt++){const Ft=X[Lt],{object:Mt,geometry:qt,material:Ye,group:Sn}=Ft;if(Ye.side===Qi&&Mt.layers.test(ie.layers)){const xt=Ye.side;Ye.side=Un,Ye.needsUpdate=!0,wi(Mt,fe,ie,qt,Ye,Sn),Ye.side=xt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(I.updateMultisampleRenderTarget(Le),I.updateRenderTargetMipmap(Le))}L.setRenderTarget(Re,Ue,Qe),L.setClearColor(ce,pe),dt!==void 0&&(ie.viewport=dt),L.toneMapping=tt}function ds(A,X,fe){const ie=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Le=A.length;Q<Le;Q++){const Oe=A[Q],{object:Re,geometry:Ue,group:Qe}=Oe;let tt=Oe.material;tt.allowOverride===!0&&ie!==null&&(tt=ie),Re.layers.test(fe.layers)&&wi(Re,X,fe,Ue,tt,Qe)}}function wi(A,X,fe,ie,Q,Le){A.onBeforeRender(L,X,fe,ie,Q,Le),A.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(L,X,fe,ie,A,Le),Q.transparent===!0&&Q.side===Qi&&Q.forceSinglePass===!1?(Q.side=Un,Q.needsUpdate=!0,L.renderBufferDirect(fe,X,ie,Q,A,Le),Q.side=Ur,Q.needsUpdate=!0,L.renderBufferDirect(fe,X,ie,Q,A,Le),Q.side=Qi):L.renderBufferDirect(fe,X,ie,Q,A,Le),A.onAfterRender(L,X,fe,ie,Q,Le)}function Br(A,X,fe){X.isScene!==!0&&(X=At);const ie=g.get(A),Q=k.state.lights,Le=k.state.shadowsArray,Oe=Q.state.version,Re=we.getParameters(A,Q.state,Le,X,fe),Ue=we.getProgramCacheKey(Re);let Qe=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const tt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=$.get(A.envMap||ie.environment,tt),ie.envMapRotation=ie.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Et),Qe=new Map,ie.programs=Qe);let dt=Qe.get(Ue);if(dt!==void 0){if(ie.currentProgram===dt&&ie.lightsStateVersion===Oe)return ho(A,Re),dt}else Re.uniforms=we.getUniforms(A),A.onBeforeCompile(Re,L),dt=we.acquireProgram(Re,Ue),Qe.set(Ue,dt),ie.uniforms=Re.uniforms;const Je=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Je.clippingPlanes=Ae.uniform),ho(A,Re),ie.needsLights=go(A),ie.lightsStateVersion=Oe,ie.needsLights&&(Je.ambientLightColor.value=Q.state.ambient,Je.lightProbe.value=Q.state.probe,Je.directionalLights.value=Q.state.directional,Je.directionalLightShadows.value=Q.state.directionalShadow,Je.spotLights.value=Q.state.spot,Je.spotLightShadows.value=Q.state.spotShadow,Je.rectAreaLights.value=Q.state.rectArea,Je.ltc_1.value=Q.state.rectAreaLTC1,Je.ltc_2.value=Q.state.rectAreaLTC2,Je.pointLights.value=Q.state.point,Je.pointLightShadows.value=Q.state.pointShadow,Je.hemisphereLights.value=Q.state.hemi,Je.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Je.spotLightMatrix.value=Q.state.spotLightMatrix,Je.spotLightMap.value=Q.state.spotLightMap,Je.pointShadowMatrix.value=Q.state.pointShadowMatrix),ie.currentProgram=dt,ie.uniformsList=null,dt}function oa(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ql.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ho(A,X){const fe=g.get(A);fe.outputColorSpace=X.outputColorSpace,fe.batching=X.batching,fe.batchingColor=X.batchingColor,fe.instancing=X.instancing,fe.instancingColor=X.instancingColor,fe.instancingMorph=X.instancingMorph,fe.skinning=X.skinning,fe.morphTargets=X.morphTargets,fe.morphNormals=X.morphNormals,fe.morphColors=X.morphColors,fe.morphTargetsCount=X.morphTargetsCount,fe.numClippingPlanes=X.numClippingPlanes,fe.numIntersection=X.numClipIntersection,fe.vertexAlphas=X.vertexAlphas,fe.vertexTangents=X.vertexTangents,fe.toneMapping=X.toneMapping}function po(A,X,fe,ie,Q){X.isScene!==!0&&(X=At),I.resetTextureUnits();const Le=X.fog,Oe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Re=ee===null?L.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:ta,Ue=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Qe=$.get(ie.envMap||Oe,Ue),tt=ie.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,dt=!!fe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Je=!!fe.morphAttributes.position,Lt=!!fe.morphAttributes.normal,Ot=!!fe.morphAttributes.color;let Ft=Ni;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ft=L.toneMapping);const Mt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,qt=Mt!==void 0?Mt.length:0,Ye=g.get(ie),Sn=k.state.lights;if(He===!0&&(nt===!0||A!==J)){const Yt=A===J&&ie.id===se;Ae.setState(ie,A,Yt)}let xt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Sn.state.version||Ye.outputColorSpace!==Re||Q.isBatchedMesh&&Ye.batching===!1||!Q.isBatchedMesh&&Ye.batching===!0||Q.isBatchedMesh&&Ye.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ye.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ye.instancing===!1||!Q.isInstancedMesh&&Ye.instancing===!0||Q.isSkinnedMesh&&Ye.skinning===!1||!Q.isSkinnedMesh&&Ye.skinning===!0||Q.isInstancedMesh&&Ye.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ye.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ye.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ye.instancingMorph===!1&&Q.morphTexture!==null||Ye.envMap!==Qe||ie.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ae.numPlanes||Ye.numIntersection!==Ae.numIntersection)||Ye.vertexAlphas!==tt||Ye.vertexTangents!==dt||Ye.morphTargets!==Je||Ye.morphNormals!==Lt||Ye.morphColors!==Ot||Ye.toneMapping!==Ft||Ye.morphTargetsCount!==qt)&&(xt=!0):(xt=!0,Ye.__version=ie.version);let An=Ye.currentProgram;xt===!0&&(An=Br(ie,X,Q));let bn=!1,On=!1,or=!1;const Rt=An.getUniforms(),at=Ye.uniforms;if(Be.useProgram(An.program)&&(bn=!0,On=!0,or=!0),ie.id!==se&&(se=ie.id,On=!0),bn||J!==A){Be.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(V,"projectionMatrix",A.projectionMatrix),Rt.setValue(V,"viewMatrix",A.matrixWorldInverse);const $n=Rt.map.cameraPosition;$n!==void 0&&$n.setValue(V,pt.setFromMatrixPosition(A.matrixWorld)),_t.logarithmicDepthBuffer&&Rt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Rt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,On=!0,or=!0)}if(Ye.needsLights&&(Sn.state.directionalShadowMap.length>0&&Rt.setValue(V,"directionalShadowMap",Sn.state.directionalShadowMap,I),Sn.state.spotShadowMap.length>0&&Rt.setValue(V,"spotShadowMap",Sn.state.spotShadowMap,I),Sn.state.pointShadowMap.length>0&&Rt.setValue(V,"pointShadowMap",Sn.state.pointShadowMap,I)),Q.isSkinnedMesh){Rt.setOptional(V,Q,"bindMatrix"),Rt.setOptional(V,Q,"bindMatrixInverse");const Yt=Q.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Rt.setValue(V,"boneTexture",Yt.boneTexture,I))}Q.isBatchedMesh&&(Rt.setOptional(V,Q,"batchingTexture"),Rt.setValue(V,"batchingTexture",Q._matricesTexture,I),Rt.setOptional(V,Q,"batchingIdTexture"),Rt.setValue(V,"batchingIdTexture",Q._indirectTexture,I),Rt.setOptional(V,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Rt.setValue(V,"batchingColorTexture",Q._colorsTexture,I));const ai=fe.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Ne.update(Q,fe,An),(On||Ye.receiveShadow!==Q.receiveShadow)&&(Ye.receiveShadow=Q.receiveShadow,Rt.setValue(V,"receiveShadow",Q.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(at.envMapIntensity.value=X.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=DT()),On&&(Rt.setValue(V,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&mo(at,or),Le&&ie.fog===!0&&ze.refreshFogUniforms(at,Le),ze.refreshMaterialUniforms(at,ie,Ce,q,k.state.transmissionRenderTarget[A.id]),Ql.upload(V,oa(Ye),at,I)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ql.upload(V,oa(Ye),at,I),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Rt.setValue(V,"center",Q.center),Rt.setValue(V,"modelViewMatrix",Q.modelViewMatrix),Rt.setValue(V,"normalMatrix",Q.normalMatrix),Rt.setValue(V,"modelMatrix",Q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let $n=0,ki=Yt.length;$n<ki;$n++){const la=Yt[$n];Ie.update(la,An),Ie.bind(la,An)}}return An}function mo(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function go(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,X,fe){const ie=g.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),g.get(A.texture).__webglTexture=X,g.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:fe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const fe=g.get(A);fe.__webglFramebuffer=X,fe.__useDefaultFramebuffer=X===void 0};const vo=V.createFramebuffer();this.setRenderTarget=function(A,X=0,fe=0){ee=A,B=X,ne=fe;let ie=null,Q=!1,Le=!1;if(A){const Re=g.get(A);if(Re.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(V.FRAMEBUFFER,Re.__webglFramebuffer),K.copy(A.viewport),j.copy(A.scissor),Y=A.scissorTest,Be.viewport(K),Be.scissor(j),Be.setScissorTest(Y),se=-1;return}else if(Re.__webglFramebuffer===void 0)I.setupRenderTarget(A);else if(Re.__hasExternalTextures)I.rebindTextures(A,g.get(A.texture).__webglTexture,g.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const tt=A.depthTexture;if(Re.__boundDepthTexture!==tt){if(tt!==null&&g.has(tt)&&(A.width!==tt.image.width||A.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(A)}}const Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Qe=g.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[X])?ie=Qe[X][fe]:ie=Qe[X],Q=!0):A.samples>0&&I.useMultisampledRTT(A)===!1?ie=g.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ie=Qe[fe]:ie=Qe,K.copy(A.viewport),j.copy(A.scissor),Y=A.scissorTest}else K.copy(ae).multiplyScalar(Ce).floor(),j.copy(ve).multiplyScalar(Ce).floor(),Y=ge;if(fe!==0&&(ie=vo),Be.bindFramebuffer(V.FRAMEBUFFER,ie)&&Be.drawBuffers(A,ie),Be.viewport(K),Be.scissor(j),Be.setScissorTest(Y),Q){const Re=g.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,fe)}else if(Le){const Re=X;for(let Ue=0;Ue<A.textures.length;Ue++){const Qe=g.get(A.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,Qe.__webglTexture,fe,Re)}}else if(A!==null&&fe!==0){const Re=g.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,fe)}se=-1},this.readRenderTargetPixels=function(A,X,fe,ie,Q,Le,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Qe=A.textures[Re],tt=Qe.format,dt=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!_t.textureFormatReadable(tt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_t.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ie&&fe>=0&&fe<=A.height-Q&&V.readPixels(X,fe,ie,Q,be.convert(tt),be.convert(dt),Le)}finally{const Qe=ee!==null?g.get(ee).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,X,fe,ie,Q,Le,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=g.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue)if(X>=0&&X<=A.width-ie&&fe>=0&&fe<=A.height-Q){Be.bindFramebuffer(V.FRAMEBUFFER,Ue);const Qe=A.textures[Re],tt=Qe.format,dt=Qe.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!_t.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_t.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(X,fe,ie,Q,be.convert(tt),be.convert(dt),0);const Lt=ee!==null?g.get(ee).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Lt);const Ot=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await iS(V,Ot,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(Je),V.deleteSync(Ot),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,fe=0){const ie=Math.pow(2,-fe),Q=Math.floor(A.image.width*ie),Le=Math.floor(A.image.height*ie),Oe=X!==null?X.x:0,Re=X!==null?X.y:0;I.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,fe,0,0,Oe,Re,Q,Le),Be.unbindTexture()};const mu=V.createFramebuffer(),gu=V.createFramebuffer();this.copyTextureToTexture=function(A,X,fe=null,ie=null,Q=0,Le=0){let Oe,Re,Ue,Qe,tt,dt,Je,Lt,Ot;const Ft=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(fe!==null)Oe=fe.max.x-fe.min.x,Re=fe.max.y-fe.min.y,Ue=fe.isBox3?fe.max.z-fe.min.z:1,Qe=fe.min.x,tt=fe.min.y,dt=fe.isBox3?fe.min.z:0;else{const at=Math.pow(2,-Q);Oe=Math.floor(Ft.width*at),Re=Math.floor(Ft.height*at),A.isDataArrayTexture?Ue=Ft.depth:A.isData3DTexture?Ue=Math.floor(Ft.depth*at):Ue=1,Qe=0,tt=0,dt=0}ie!==null?(Je=ie.x,Lt=ie.y,Ot=ie.z):(Je=0,Lt=0,Ot=0);const Mt=be.convert(X.format),qt=be.convert(X.type);let Ye;X.isData3DTexture?(I.setTexture3D(X,0),Ye=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(I.setTexture2DArray(X,0),Ye=V.TEXTURE_2D_ARRAY):(I.setTexture2D(X,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Sn=V.getParameter(V.UNPACK_ROW_LENGTH),xt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),An=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),On=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qe),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,dt);const or=A.isDataArrayTexture||A.isData3DTexture,Rt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const at=g.get(A),ai=g.get(X),Yt=g.get(at.__renderTarget),$n=g.get(ai.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Yt.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let ki=0;ki<Ue;ki++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(A).__webglTexture,Q,dt+ki),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,g.get(X).__webglTexture,Le,Ot+ki)),V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.DEPTH_BUFFER_BIT,V.NEAREST);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||g.has(A)){const at=g.get(A),ai=g.get(X);Be.bindFramebuffer(V.READ_FRAMEBUFFER,mu),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,gu);for(let Yt=0;Yt<Ue;Yt++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,at.__webglTexture,Q,dt+Yt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,at.__webglTexture,Q),Rt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,Le,Ot+Yt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,Le),Q!==0?V.blitFramebuffer(Qe,tt,Oe,Re,Je,Lt,Oe,Re,V.COLOR_BUFFER_BIT,V.NEAREST):Rt?V.copyTexSubImage3D(Ye,Le,Je,Lt,Ot+Yt,Qe,tt,Oe,Re):V.copyTexSubImage2D(Ye,Le,Je,Lt,Qe,tt,Oe,Re);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ye,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,qt,Ft.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,Ft.data):V.texSubImage3D(Ye,Le,Je,Lt,Ot,Oe,Re,Ue,Mt,qt,Ft):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,qt,Ft.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Ft.width,Ft.height,Mt,Ft.data):V.texSubImage2D(V.TEXTURE_2D,Le,Je,Lt,Oe,Re,Mt,qt,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,Sn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,xt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,An),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,On),Le===0&&X.generateMipmaps&&V.generateMipmap(Ye),Be.unbindTexture()},this.initRenderTarget=function(A){g.get(A).__webglFramebuffer===void 0&&I.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?I.setTextureCube(A,0):A.isData3DTexture?I.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?I.setTexture2DArray(A,0):I.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){B=0,ne=0,ee=null,Be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function IT({mouseForce:r=20,cursorSize:e=100,isViscous:t=!1,viscous:s=30,iterationsViscous:o=32,iterationsPoisson:l=32,dt:c=.014,BFECC:d=!0,resolution:p=.5,isBounce:h=!1,colors:_=["#5227FF","#FF9FFC","#B497CF"],style:x={},className:v="",autoDemo:M=!0,autoSpeed:E=.5,autoIntensity:b=2.2,takeoverDuration:y=.25,autoResumeDelay:S=1e3,autoRampDuration:C=.6}){const D=le.useRef(null),P=le.useRef(null),k=le.useRef(null),O=le.useRef(null),z=le.useRef(null),T=le.useRef(!0),L=le.useRef(null);return le.useEffect(()=>{if(!D.current)return;function de(R){let g;Array.isArray(R)&&R.length>0?R.length===1?g=[R[0],R[0]]:g=R:g=["#ffffff","#ffffff"];const I=g.length,$=new Uint8Array(I*4);for(let oe=0;oe<I;oe++){const Pe=new Pt(g[oe]);$[oe*4+0]=Math.round(Pe.r*255),$[oe*4+1]=Math.round(Pe.g*255),$[oe*4+2]=Math.round(Pe.b*255),$[oe*4+3]=255}const he=new v0($,I,1,ii);return he.magFilter=en,he.minFilter=en,he.wrapS=Wn,he.wrapT=Wn,he.generateMipmaps=!1,he.needsUpdate=!0,he}const B=de(_),ne=new $t(0,0,0,0);class ee{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(g){this.container=g,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new NT({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new Pt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new BS,this.clock.start()}resize(){if(!this.container)return;const g=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(g.width)),this.height=Math.max(1,Math.floor(g.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const se=new ee;class J{constructor(){this.mouseMoved=!1,this.coords=new ft,this.coords_old=new ft,this.diff=new ft,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new ft,this.takeoverTo=new ft,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(g){this.container=g,this.docTarget=g.ownerDocument||null;const I=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);I&&(this.listenerTarget=I,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(g,I){if(!this.container)return!1;const $=this.container.getBoundingClientRect();return $.width===0||$.height===0?!1:g>=$.left&&g<=$.right&&I>=$.top&&I<=$.bottom}updateHoverState(g,I){return this.isHoverInside=this.isPointInside(g,I),this.isHoverInside}setCoords(g,I){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const $=this.container.getBoundingClientRect();if($.width===0||$.height===0)return;const he=(g-$.left)/$.width,oe=(I-$.top)/$.height;this.coords.set(he*2-1,-(oe*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(g,I){this.coords.set(g,I),this.mouseMoved=!0}onDocumentMouseMove(g){if(this.updateHoverState(g.clientX,g.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const I=this.container.getBoundingClientRect();if(I.width===0||I.height===0)return;const $=(g.clientX-I.left)/I.width,he=(g.clientY-I.top)/I.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set($*2-1,-(he*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(g.clientX,g.clientY),this.hasUserControl=!0}}onDocumentTouchStart(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY),this.hasUserControl=!0)}onDocumentTouchMove(g){if(g.touches.length!==1)return;const I=g.touches[0];this.updateHoverState(I.clientX,I.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(I.clientX,I.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const g=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(g>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const I=g*g*(3-2*g);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,I)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const K=new J;class j{constructor(g,I,$){this.mouse=g,this.manager=I,this.enabled=$.enabled,this.speed=$.speed,this.resumeDelay=$.resumeDelay||3e3,this.rampDurationMs=($.rampDuration||0)*1e3,this.active=!1,this.current=new ft(0,0),this.target=new ft,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new ft,this.pickNewTarget()}pickNewTarget(){const g=Math.random;this.target.set((g()*2-1)*(1-this.margin),(g()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const g=performance.now();if(g-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=g,this.activationTime=g),!this.active)return;this.mouse.isAutoActive=!0;let $=(g-this.lastTime)/1e3;this.lastTime=g,$>.2&&($=.016);const he=this._tmpDir.subVectors(this.target,this.current),oe=he.length();if(oe<.01){this.pickNewTarget();return}he.normalize();let Pe=1;if(this.rampDurationMs>0){const et=Math.min(1,(g-this.activationTime)/this.rampDurationMs);Pe=et*et*(3-2*et)}const we=this.speed*$*Pe,ze=Math.min(we,oe);this.current.addScaledVector(he,ze),this.mouse.setNormalized(this.current.x,this.current.y)}}const Y=`
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
`,ce=`
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
`,pe=`
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
`,F=`
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
`,q=`
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
`,ae=`
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
`;class ge{constructor(g){this.props=g||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Gm,this.camera=new au,this.uniforms&&(this.material=new Za(this.props.material),this.geometry=new us(2,2),this.plane=new ri(this.geometry,this.material),this.scene.add(this.plane))}update(){se.renderer.setRenderTarget(this.props.output||null),se.renderer.render(this.scene,this.camera),se.renderer.setRenderTarget(null)}}class ke extends ge{constructor(g){super({material:{vertexShader:Y,fragmentShader:F,uniforms:{boundarySpace:{value:g.cellScale},px:{value:g.cellScale},fboSize:{value:g.fboSize},velocity:{value:g.src.texture},dt:{value:g.dt},isBFECC:{value:!0}}},output:g.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const g=new Ei,I=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);g.setAttribute("position",new yi(I,3));const $=new Za({vertexShader:ce,fragmentShader:F,uniforms:this.uniforms});this.line=new RS(g,$),this.scene.add(this.line)}update({dt:g,isBounce:I,BFECC:$}){this.uniforms.dt.value=g,this.line.visible=I,this.uniforms.isBFECC.value=$,super.update()}}class He extends ge{constructor(g){super({output:g.dst}),this.init(g)}init(g){super.init();const I=new us(1,1),$=new Za({vertexShader:pe,fragmentShader:Ge,blending:Ff,depthWrite:!1,uniforms:{px:{value:g.cellScale},force:{value:new ft(0,0)},center:{value:new ft(0,0)},scale:{value:new ft(g.cursor_size,g.cursor_size)}}});this.mouse=new ri(I,$),this.scene.add(this.mouse)}update(g){const I=K.diff.x/2*g.mouse_force,$=K.diff.y/2*g.mouse_force,he=g.cursor_size*g.cellScale.x,oe=g.cursor_size*g.cellScale.y,Pe=Math.min(Math.max(K.coords.x,-1+he+g.cellScale.x*2),1-he-g.cellScale.x*2),we=Math.min(Math.max(K.coords.y,-1+oe+g.cellScale.y*2),1-oe-g.cellScale.y*2),ze=this.mouse.material.uniforms;ze.force.value.set(I,$),ze.center.value.set(Pe,we),ze.scale.value.set(g.cursor_size,g.cursor_size),super.update()}}class nt extends ge{constructor(g){super({material:{vertexShader:Y,fragmentShader:ve,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},velocity_new:{value:g.dst_.texture},v:{value:g.viscous},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({viscous:g,iterations:I,dt:$}){let he,oe;this.uniforms.v.value=g;for(let Pe=0;Pe<I;Pe++)Pe%2===0?(he=this.props.output0,oe=this.props.output1):(he=this.props.output1,oe=this.props.output0),this.uniforms.velocity_new.value=he.texture,this.props.output=oe,this.uniforms.dt.value=$,super.update();return oe}}class Gt extends ge{constructor(g){super({material:{vertexShader:Y,fragmentShader:Ce,uniforms:{boundarySpace:{value:g.boundarySpace},velocity:{value:g.src.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g}){this.uniforms.velocity.value=g.texture,super.update()}}class pt extends ge{constructor(g){super({material:{vertexShader:Y,fragmentShader:Ke,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.dst_.texture},divergence:{value:g.src.texture},px:{value:g.cellScale}}},output:g.dst,output0:g.dst_,output1:g.dst}),this.init()}update({iterations:g}){let I,$;for(let he=0;he<g;he++)he%2===0?(I=this.props.output0,$=this.props.output1):(I=this.props.output1,$=this.props.output0),this.uniforms.pressure.value=I.texture,this.props.output=$,super.update();return $}}class yt extends ge{constructor(g){super({material:{vertexShader:Y,fragmentShader:ae,uniforms:{boundarySpace:{value:g.boundarySpace},pressure:{value:g.src_p.texture},velocity:{value:g.src_v.texture},px:{value:g.cellScale},dt:{value:g.dt}}},output:g.dst}),this.init()}update({vel:g,pressure:I}){this.uniforms.velocity.value=g.texture,this.uniforms.pressure.value=I.texture,super.update()}}class At{constructor(g){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...g},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new ft,this.cellScale=new ft,this.boundarySpace=new ft,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Ui:_i}createAllFBO(){const I={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:en,magFilter:en,wrapS:Wn,wrapT:Wn};for(let $ in this.fbos)this.fbos[$]=new xi(this.fboSize.x,this.fboSize.y,I)}createShaderPass(){this.advection=new ke({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new He({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new nt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const g=Math.max(1,Math.round(this.options.resolution*se.width)),I=Math.max(1,Math.round(this.options.resolution*se.height)),$=1/g,he=1/I;this.cellScale.set($,he),this.fboSize.set(g,I)}resize(){this.calcSize();for(let g in this.fbos)this.fbos[g].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let g=this.fbos.vel_1;this.options.isViscous&&(g=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:g});const I=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:g,pressure:I})}}class ut{constructor(){this.init()}init(){this.simulation=new At,this.scene=new Gm,this.camera=new au,this.output=new ri(new us(2,2),new Za({vertexShader:Y,fragmentShader:q,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new ft},palette:{value:B},bgColor:{value:ne}}})),this.scene.add(this.output)}addScene(g){this.scene.add(g)}resize(){this.simulation.resize()}render(){se.renderer.setRenderTarget(null),se.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class It{constructor(g){this.props=g,se.init(g.$wrapper),K.init(g.$wrapper),K.autoIntensity=g.autoIntensity,K.takeoverDuration=g.takeoverDuration,this.lastUserInteraction=performance.now(),K.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new j(K,this,{enabled:g.autoDemo,speed:g.autoSpeed,resumeDelay:g.autoResumeDelay,rampDuration:g.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():T.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(se.renderer.domElement),this.output=new ut}resize(){se.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),K.update(),se.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),K.dispose(),se.renderer){const g=se.renderer.domElement;g&&g.parentNode&&g.parentNode.removeChild(g),se.renderer.dispose(),se.renderer.forceContextLoss()}}catch{}}}const V=D.current;V.style.position=V.style.position||"relative",V.style.overflow=V.style.overflow||"hidden";const Ut=new It({$wrapper:V,autoDemo:M,autoSpeed:E,autoIntensity:b,takeoverDuration:y,autoResumeDelay:S,autoRampDuration:C});P.current=Ut,(()=>{if(!P.current)return;const R=P.current.output?.simulation;if(!R)return;const g=R.options.resolution;Object.assign(R.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:c,BFECC:d,resolution:p,isBounce:h}),p!==g&&R.resize()})(),Ut.start();const _t=new IntersectionObserver(R=>{const g=R[0],I=g.isIntersecting&&g.intersectionRatio>0;T.current=I,P.current&&(I&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});_t.observe(V),z.current=_t;const Be=new ResizeObserver(()=>{P.current&&(L.current&&cancelAnimationFrame(L.current),L.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Be.observe(V),k.current=Be,()=>{if(O.current&&cancelAnimationFrame(O.current),k.current)try{k.current.disconnect()}catch{}if(z.current)try{z.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[d,e,c,h,t,l,o,r,p,s,_,M,E,b,y,S,C]),le.useEffect(()=>{const de=P.current;if(!de)return;const B=de.output?.simulation;if(!B)return;const ne=B.options.resolution;Object.assign(B.options,{mouse_force:r,cursor_size:e,isViscous:t,viscous:s,iterations_viscous:o,iterations_poisson:l,dt:c,BFECC:d,resolution:p,isBounce:h}),de.autoDriver&&(de.autoDriver.enabled=M,de.autoDriver.speed=E,de.autoDriver.resumeDelay=S,de.autoDriver.rampDurationMs=C*1e3,de.autoDriver.mouse&&(de.autoDriver.mouse.autoIntensity=b,de.autoDriver.mouse.takeoverDuration=y)),p!==ne&&B.resize()},[r,e,t,s,o,l,c,d,p,h,M,E,b,y,S,C]),N.jsx("div",{ref:D,className:`liquid-ether-container ${v||""}`,style:x})}const wg=[{id:"home",label:"Home",index:4},{id:"projects",label:"Projects",index:9},{id:"hackathons",label:"Hackathons",index:14},{id:"skills",label:"Skills",index:19},{id:"exploration",label:"Exploration",index:24},{id:"internship",label:"Internship",index:29},{id:"contact",label:"Contact",index:34}],UT=39,FT=()=>{const[r,e]=le.useState("home"),[t,s]=le.useState(null);le.useEffect(()=>{const l=()=>{const c=window.scrollY+window.innerHeight/3;let d="home";for(const p of wg){const h=document.getElementById(p.id);h&&h.offsetTop<=c&&(d=p.id)}e(d)};return window.addEventListener("scroll",l),l(),()=>window.removeEventListener("scroll",l)},[]);const o=l=>{const c=document.getElementById(l);c&&c.scrollIntoView({behavior:"smooth"})};return N.jsx("div",{className:"fixed right-0 top-0 h-screen flex flex-col justify-center items-end z-50 pointer-events-none",children:N.jsx("div",{className:"pointer-events-auto flex flex-col justify-center items-end group px-6 py-8",onMouseLeave:()=>s(null),children:Array.from({length:UT}).map((l,c)=>{const d=wg.find(v=>v.index===c),p=d&&d.id===r;let h=8,_=.3;if(t!==null){const v=Math.abs(t-c),M=8;if(v<M){const E=(Math.cos(v/M*Math.PI)+1)/2;h=8+E*(d?32:20),_=.3+E*.7}d&&v===0&&(h=45)}else p&&(h=26,_=1);return d?N.jsxs("div",{className:"flex items-center justify-end cursor-pointer py-[3px] w-full group/item",onMouseEnter:()=>s(c),onClick:()=>o(d.id),children:[N.jsx("span",{className:`text-[10px] sm:text-xs font-bold tracking-widest text-[#3afeda] mr-4 transition-all duration-300 ease-out whitespace-nowrap translate-x-0 pointer-events-auto
                    ${t!==null||p?"opacity-100":"opacity-50"}
                    ${p?"drop-shadow-[0_0_8px_rgba(58,254,218,0.8)]":""}
                  `,children:d.label.toUpperCase()}),N.jsx("div",{className:"bg-[#3afeda] rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${h}px`,height:p?"3px":"2px",opacity:_,boxShadow:p&&t===null?"0 0 8px rgba(58,254,218,0.8)":"none"}})]},c):N.jsx("div",{className:"flex items-center justify-end py-[3px] w-full",onMouseEnter:()=>s(c),children:N.jsx("div",{className:"bg-cyan-200 rounded-full transition-all duration-300 ease-out origin-right",style:{width:`${h}px`,height:"1px",opacity:_}})},c)})})})},OT=["#5227FF","#FF9FFC","#B497CF"];function kT(){const r=Fr();return le.useEffect(()=>{if(r.hash){const e=r.hash.replace("#",""),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}},[r]),null}function BT(){return N.jsxs(Ux,{children:[N.jsx(kT,{}),N.jsx(FT,{}),N.jsxs("div",{className:"min-h-screen bg-gray-900 text-white overflow-x-hidden relative",children:[N.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:N.jsx(IT,{colors:OT,mouseForce:20,cursorSize:100,isViscous:!1,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6})}),N.jsxs("div",{className:"relative z-10",children:[N.jsx("section",{id:"home",children:N.jsx(my,{})}),N.jsx("section",{id:"projects",children:N.jsx(gy,{})}),N.jsx("section",{id:"hackathons",children:N.jsx(vy,{})}),N.jsx("section",{id:"skills",children:N.jsx(_y,{})}),N.jsx("section",{id:"exploration",children:N.jsx(xy,{})}),N.jsx("section",{id:"internship",children:N.jsx(yy,{})}),N.jsx("section",{id:"contact",children:N.jsx(Sy,{})})]})]})]})}m_.createRoot(document.getElementById("root")).render(N.jsx(le.StrictMode,{children:N.jsx(BT,{})}));
