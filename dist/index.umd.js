(function(f,b){typeof exports=="object"&&typeof module<"u"?b(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],b):(f=typeof globalThis<"u"?globalThis:f||self,b(f.HrnetModal={},f.React))})(this,function(f,b){"use strict";var T={exports:{}},E={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w;function q(){if(w)return E;w=1;var s=Symbol.for("react.transitional.element"),d=Symbol.for("react.fragment");function m(R,a,i){var v=null;if(i!==void 0&&(v=""+i),a.key!==void 0&&(v=""+a.key),"key"in a){i={};for(var _ in a)_!=="key"&&(i[_]=a[_])}else i=a;return a=i.ref,{$$typeof:s,type:R,key:v,ref:a!==void 0?a:null,props:i}}return E.Fragment=d,E.jsx=m,E.jsxs=m,E}var x={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A;function W(){return A||(A=1,process.env.NODE_ENV!=="production"&&function(){function s(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case Z:return"Profiler";case B:return"StrictMode";case re:return"Suspense";case te:return"SuspenseList";case oe:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case H:return"Portal";case K:return(e.displayName||"Context")+".Provider";case Q:return(e._context.displayName||"Context")+".Consumer";case ee:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ne:return r=e.displayName||null,r!==null?r:s(e.type)||"Memo";case M:r=e._payload,e=e._init;try{return s(e(r))}catch{}}return null}function d(e){return""+e}function m(e){try{d(e);var r=!1}catch{r=!0}if(r){r=console;var t=r.error,n=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(r,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",n),d(e)}}function R(e){if(e===k)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===M)return"<...>";try{var r=s(e);return r?"<"+r+">":"<...>"}catch{return"<...>"}}function a(){var e=g.A;return e===null?null:e.getOwner()}function i(){return Error("react-stack-top-frame")}function v(e){if(F.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function _(e,r){function t(){I||(I=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",r))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function G(){var e=s(this.type);return D[e]||(D[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function X(e,r,t,n,u,l,j,S){return t=l.ref,e={$$typeof:Y,type:e,key:r,props:l,_owner:u},(t!==void 0?t:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:G}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:j}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:S}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function N(e,r,t,n,u,l,j,S){var o=r.children;if(o!==void 0)if(n)if(se(o)){for(n=0;n<o.length;n++)C(o[n]);Object.freeze&&Object.freeze(o)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else C(o);if(F.call(r,"key")){o=s(e);var p=Object.keys(r).filter(function(ie){return ie!=="key"});n=0<p.length?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}",z[o+n]||(p=0<p.length?"{"+p.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,n,o,p,o),z[o+n]=!0)}if(o=null,t!==void 0&&(m(t),o=""+t),v(r)&&(m(r.key),o=""+r.key),"key"in r){t={};for(var O in r)O!=="key"&&(t[O]=r[O])}else t=r;return o&&_(t,typeof e=="function"?e.displayName||e.name||"Unknown":e),X(e,o,l,u,a(),t,j,S)}function C(e){typeof e=="object"&&e!==null&&e.$$typeof===Y&&e._store&&(e._store.validated=1)}var h=b,Y=Symbol.for("react.transitional.element"),H=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),K=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),oe=Symbol.for("react.activity"),ae=Symbol.for("react.client.reference"),g=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=Object.prototype.hasOwnProperty,se=Array.isArray,y=console.createTask?console.createTask:function(){return null};h={"react-stack-bottom-frame":function(e){return e()}};var I,D={},L=h["react-stack-bottom-frame"].bind(h,i)(),$=y(R(i)),z={};x.Fragment=k,x.jsx=function(e,r,t,n,u){var l=1e4>g.recentlyCreatedOwnerStacks++;return N(e,r,t,!1,n,u,l?Error("react-stack-top-frame"):L,l?y(R(e)):$)},x.jsxs=function(e,r,t,n,u){var l=1e4>g.recentlyCreatedOwnerStacks++;return N(e,r,t,!0,n,u,l?Error("react-stack-top-frame"):L,l?y(R(e)):$)}}()),x}var P;function U(){return P||(P=1,process.env.NODE_ENV==="production"?T.exports=q():T.exports=W()),T.exports}var c=U();const J=()=>{const s=document.querySelector(".modal"),d=document.querySelector(".modal-container");document.querySelector(".close").addEventListener("click",()=>{d.style.filter="none",s.style.display="none",s.classList.remove("modal-showed")})},V=()=>c.jsxs(c.Fragment,{children:[c.jsx("div",{className:"modal-container",children:c.jsxs("div",{className:"modal",children:[c.jsx("div",{className:"cross-container",onClick:J,children:c.jsx("span",{className:"close",children:"×"})}),c.jsx("div",{className:"modal-content",children:c.jsx("h2",{children:"Employee Created!"})})]})}),c.jsx("style",{children:`

                    .modal-container {
                    display: none;
                    justify-content: center;
                    align-items: center;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 999;
                    filter: blur(2px);
                    transition: filter 0.3s ease;
                    }

                    .modal {
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
                    border-radius: 10px;
                    padding: 15px 70px;
                    position: relative;
                    width: 154px;
                    display: none;
                    background-color: #fff;
                    z-index: 1000;
                    }

                    .modal-content {
                        display: flex;;
                        flex-direction: column;
                        align-items: center;
                    }

                    .modal-showed {
                    top: 50%;
                    position: fixed;
                    transform: translate(-50%, -50%);
                    left: 50%;
                    z-index: 1000 !important;
                    display: block;
                    }

                    .cross-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        padding: 5px 5px;
                        background-color: #000;
                        border-radius: 50px;
                        height: 15px;
                        width: 15px;
                    }

                    .close {
                        position: absolute;
                        font-size: 16px;
                        cursor: pointer;
                        color: #fff;
                    }

                    .modal h2 {
                        font-size: 16px;
                        padding: 0;
                        margin: 0;
                    }
                `})]});f.Modal=V,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
