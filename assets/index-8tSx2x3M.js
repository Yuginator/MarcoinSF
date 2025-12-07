(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fu=window,mp=Fu.ShadowRoot&&(Fu.ShadyCSS===void 0||Fu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gp=Symbol(),Cx=new WeakMap;let ab=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==gp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(mp&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=Cx.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Cx.set(n,e))}return e}toString(){return this.cssText}};const iy=r=>new ab(typeof r=="string"?r:r+"",void 0,gp),ln=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new ab(n,r,gp)},ay=(r,e)=>{mp?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=Fu.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Dx=mp?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return iy(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sh;const ju=window,Ox=ju.trustedTypes,sy=Ox?Ox.emptyScript:"",Ux=ju.reactiveElementPolyfillSupport,m0={toAttribute(r,e){switch(e){case Boolean:r=r?sy:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},sb=(r,e)=>e!==r&&(e==e||r==r),Mh={attribute:!0,type:String,converter:m0,reflect:!1,hasChanged:sb},g0="finalized";let co=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Mh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Mh}static finalize(){if(this.hasOwnProperty(g0))return!1;this[g0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Dx(o))}else e!==void 0&&n.push(Dx(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ay(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Mh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:m0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:m0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||sb)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};co[g0]=!0,co.elementProperties=new Map,co.elementStyles=[],co.shadowRootOptions={mode:"open"},Ux==null||Ux({ReactiveElement:co}),((Sh=ju.reactiveElementVersions)!==null&&Sh!==void 0?Sh:ju.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Eh;const ku=window,ho=ku.trustedTypes,Lx=ho?ho.createPolicy("lit-html",{createHTML:r=>r}):void 0,_0="$lit$",Ts=`lit$${(Math.random()+"").slice(9)}$`,rb="?"+Ts,ry=`<${rb}>`,cr=document,Ul=()=>cr.createComment(""),Ll=r=>r===null||typeof r!="object"&&typeof r!="function",ob=Array.isArray,oy=r=>ob(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Th=`[ 	
\f\r]`,bl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nx=/-->/g,Px=/>/g,Zs=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zx=/'/g,Fx=/"/g,lb=/^(?:script|style|textarea|title)$/i,ly=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),on=ly(1),po=Symbol.for("lit-noChange"),Xn=Symbol.for("lit-nothing"),Ix=new WeakMap,rr=cr.createTreeWalker(cr,129,null,!1);function cb(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lx!==void 0?Lx.createHTML(e):e}const cy=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=bl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===bl?g[1]==="!--"?u=Nx:g[1]!==void 0?u=Px:g[2]!==void 0?(lb.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=Zs):g[3]!==void 0&&(u=Zs):u===Zs?g[0]===">"?(u=o??bl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?Zs:g[3]==='"'?Fx:zx):u===Fx||u===zx?u=Zs:u===Nx||u===Px?u=bl:(u=Zs,o=void 0);const y=u===Zs&&r[d+1].startsWith("/>")?" ":"";c+=u===bl?m+ry:_>=0?(a.push(p),m.slice(0,_)+_0+m.slice(_)+Ts+y):m+Ts+(_===-2?(a.push(void 0),d):y)}return[cb(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class Nl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=cy(e,n);if(this.el=Nl.createElement(p,a),rr.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=rr.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(_0)||x.startsWith(Ts)){const y=g[u++];if(_.push(x),y!==void 0){const M=o.getAttribute(y.toLowerCase()+_0).split(Ts),T=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:T[2],strings:M,ctor:T[1]==="."?fy:T[1]==="?"?hy:T[1]==="@"?py:nf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(lb.test(o.tagName)){const _=o.textContent.split(Ts),x=_.length-1;if(x>0){o.textContent=ho?ho.emptyScript:"";for(let y=0;y<x;y++)o.append(_[y],Ul()),rr.nextNode(),m.push({type:2,index:++c});o.append(_[x],Ul())}}}else if(o.nodeType===8)if(o.data===rb)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Ts,_+1))!==-1;)m.push({type:7,index:c}),_+=Ts.length-1}c++}}static createElement(e,n){const a=cr.createElement("template");return a.innerHTML=e,a}}function mo(r,e,n=r,a){var o,c,u,d;if(e===po)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Ll(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=mo(r,m._$AS(r,e.values),m,a)),e}class uy{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:cr).importNode(a,!0);rr.currentNode=c;let u=rr.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ql(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new my(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=rr.nextNode(),d++)}return rr.currentNode=cr,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ql{constructor(e,n,a,o){var c;this.type=2,this._$AH=Xn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=mo(this,e,n),Ll(e)?e===Xn||e==null||e===""?(this._$AH!==Xn&&this._$AR(),this._$AH=Xn):e!==this._$AH&&e!==po&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):oy(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Xn&&Ll(this._$AH)?this._$AA.nextSibling.data=e:this.$(cr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nl.createElement(cb(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new uy(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Ix.get(e.strings);return n===void 0&&Ix.set(e.strings,n=new Nl(e)),n}T(e){ob(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ql(this.k(Ul()),this.k(Ul()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class nf{constructor(e,n,a,o,c){this.type=1,this._$AH=Xn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Xn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=mo(this,e,n,0),u=!Ll(e)||e!==this._$AH&&e!==po,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=mo(this,d[a+m],n,m),p===po&&(p=this._$AH[m]),u||(u=!Ll(p)||p!==this._$AH[m]),p===Xn?e=Xn:e!==Xn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===Xn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fy extends nf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Xn?void 0:e}}const dy=ho?ho.emptyScript:"";class hy extends nf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Xn?this.element.setAttribute(this.name,dy):this.element.removeAttribute(this.name)}}class py extends nf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=mo(this,e,n,0))!==null&&a!==void 0?a:Xn)===po)return;const o=this._$AH,c=e===Xn&&o!==Xn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Xn&&(o===Xn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class my{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){mo(this,e)}}const Bx=ku.litHtmlPolyfillSupport;Bx==null||Bx(Nl,ql),((Eh=ku.litHtmlVersions)!==null&&Eh!==void 0?Eh:ku.litHtmlVersions=[]).push("2.8.0");const gy=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ql(e.insertBefore(Ul(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ah,Rh;class Ba extends co{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return po}}Ba.finalized=!0,Ba._$litElement$=!0,(Ah=globalThis.litElementHydrateSupport)===null||Ah===void 0||Ah.call(globalThis,{LitElement:Ba});const Hx=globalThis.litElementPolyfillSupport;Hx==null||Hx({LitElement:Ba});((Rh=globalThis.litElementVersions)!==null&&Rh!==void 0?Rh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _y=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},xy=(r,e,n)=>{e.constructor.createProperty(n,r)};function De(r){return(e,n)=>n!==void 0?xy(r,e,n):_y(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vy(r){return De({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const by=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fn(r,e){return by({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wh;((wh=window.HTMLSlotElement)===null||wh===void 0?void 0:wh.prototype.assignedElements)!=null;var yy=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Sy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const Mn=ln`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class En extends Ba{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){_p(this,e,n)}}yy([Fn("svg"),Sy("design:type",SVGSVGElement)],En.prototype,"svg",void 0);function My(){return Math.floor(Math.random()*2**31)}function _p(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function x0(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function Ey(r,e,n){const a=[];r.forEach(o=>a.push(...o)),x0(a,e,n)}function Ty(r,e){return r[0]===e[0]&&r[1]===e[1]}function Ay(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)x0(p,d,o);const m=Ry(u,c,a);if(o){for(const p of u)x0(p,d,-o);Ey(m,d,-o)}return m}function Ry(r,e,n){const a=[];for(const p of r){const g=[...p];Ty(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const y=Math.min(_[1],x[1]);c.push({ymin:y,ymax:Math.max(_[1],x[1]),x:y===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function ub(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Ay(r,o,a,c||1)}class wy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=ub(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Cy(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Dy extends wy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=ub(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)Cy([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Oy{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function fb(r,e,n,a,o){return{type:"path",ops:Xu(r,e,n,a,o)}}function Uy(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...Xu(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...Xu(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return fb(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function db(r,e){return Uy(r,!0,e)}function Ly(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return db(c,o)}function hb(r,e,n,a,o){const c=pb(n,a,o);return Ny(r,e,o,c).opset}function pb(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Ln(u*m,n),d+=Ln(d*m,n),{increment:c,rx:u,ry:d}}function Ny(r,e,n,a){const[o,c]=Vx(a.increment,r,e,a.rx,a.ry,1,a.increment*v0(.1,v0(.4,1,n),n),n);let u=Gx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=Vx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=Gx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function Py(r,e,n,a,o){return Xu(r,e,n,a,o,!0)}function mb(r){return r.randomizer||(r.randomizer=new Oy(r.seed||0)),r.randomizer.next()}function v0(r,e,n,a=1){return n.roughness*a*(mb(n)*(e-r)+r)}function Ln(r,e,n=1){return v0(-r,r,e,n)}function Xu(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=b0(r,e,n,a,o,!0,!1);if(u)return d;const m=b0(r,e,n,a,o,!0,!0);return d.concat(m)}function b0(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+mb(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,M=o.bowing*o.maxRandomnessOffset*(r-n)/200;y=Ln(y,o,p),M=Ln(M,o,p);const T=[],S=()=>Ln(_,o,p),v=()=>Ln(g,o,p),L=o.preserveVertices;return u?T.push({op:"move",data:[r+(L?0:S()),e+(L?0:S())]}):T.push({op:"move",data:[r+(L?0:Ln(g,o,p)),e+(L?0:Ln(g,o,p))]}),u?T.push({op:"bcurveTo",data:[y+r+(n-r)*x+S(),M+e+(a-e)*x+S(),y+r+2*(n-r)*x+S(),M+e+2*(a-e)*x+S(),n+(L?0:S()),a+(L?0:S())]}):T.push({op:"bcurveTo",data:[y+r+(n-r)*x+v(),M+e+(a-e)*x+v(),y+r+2*(n-r)*x+v(),M+e+2*(a-e)*x+v(),n+(L?0:v()),a+(L?0:v())]}),T}function Gx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...b0(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function Vx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=Ln(.5,d)-Math.PI/2;g.push([Ln(c,d)+e+.9*a*Math.cos(_-r),Ln(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let y=_;y<x;y=y+r){const M=[Ln(c,d)+e+a*Math.cos(y),Ln(c,d)+n+o*Math.sin(y)];p.push(M),g.push(M)}g.push([Ln(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),Ln(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([Ln(c,d)+e+.98*a*Math.cos(_+u),Ln(c,d)+n+.98*o*Math.sin(_+u)]),g.push([Ln(c,d)+e+.9*a*Math.cos(_+u*.5),Ln(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const zy={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return hb(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return Py(r,e,n,a,o)}};function To(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function Fy(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function go(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function Yl(r,e,n=!1){const a=go("path",{d:Fy(r,n)});return e&&e.appendChild(a),a}function xi(r,e,n,a,o,c){return Yl(Ly(e+2,n+2,a-4,o-4,To(c)),r)}function Sn(r,e,n,a,o,c){return Yl(fb(e,n,a,o,To(c)),r)}function Iy(r,e,n){return Yl(db(e,To(n)),r,!0)}function ur(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),Yl(hb(e,n,a,o,To(c)),r)}function af(r,e){const a=new Dy(zy).fillPolygon(r,To(e));return Yl(a,null)}function xp(r,e,n,a,o){const c=To(o),u=pb(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return af(d,o)}var sf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Pl=class extends En{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return on`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};xi(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};sf([De({type:Number}),rf("design:type",Object)],Pl.prototype,"elevation",void 0);sf([De({type:Boolean,reflect:!0}),rf("design:type",Object)],Pl.prototype,"disabled",void 0);sf([Fn("button"),rf("design:type",HTMLButtonElement)],Pl.prototype,"button",void 0);Pl=sf([fn("wired-button"),rf("design:paramtypes",[])],Pl);var vp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},bp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let zl=class extends En{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return on`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=af([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}xi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};vp([De({type:Number}),bp("design:type",Object)],zl.prototype,"elevation",void 0);vp([De({type:String}),bp("design:type",String)],zl.prototype,"fill",void 0);zl=vp([fn("wired-card"),bp("design:paramtypes",[])],zl);var $l=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},of=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let _o=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return on`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){xi(e,0,0,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck),Sn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),Sn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};$l([De({type:Boolean}),of("design:type",Object)],_o.prototype,"checked",void 0);$l([De({type:Boolean,reflect:!0}),of("design:type",Object)],_o.prototype,"disabled",void 0);$l([vy(),of("design:type",Object)],_o.prototype,"focused",void 0);$l([Fn("input"),of("design:type",HTMLInputElement)],_o.prototype,"input",void 0);_o=$l([fn("wired-checkbox")],_o);var lf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},yp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fl=class extends En{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return on`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=af([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};lf([De(),yp("design:type",Object)],Fl.prototype,"value",void 0);lf([De(),yp("design:type",Object)],Fl.prototype,"name",void 0);lf([De({type:Boolean}),yp("design:type",Object)],Fl.prototype,"selected",void 0);Fl=lf([fn("wired-item")],Fl);var Ao=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Zl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let fr=class extends Ba{constructor(){super(...arguments),this.disabled=!1,this.seed=My(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return ln`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return on`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",xi(n,0,0,o.width,o.height,this.seed);const c=o.width-4;xi(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=Iy(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){_p(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Ao([De({type:Object}),Zl("design:type",Object)],fr.prototype,"value",void 0);Ao([De({type:String,reflect:!0}),Zl("design:type",String)],fr.prototype,"selected",void 0);Ao([De({type:Boolean,reflect:!0}),Zl("design:type",Object)],fr.prototype,"disabled",void 0);Ao([Fn("svg"),Zl("design:type",SVGSVGElement)],fr.prototype,"svg",void 0);Ao([Fn("#card"),Zl("design:type",HTMLDivElement)],fr.prototype,"card",void 0);fr=Ao([fn("wired-combo")],fr);var cf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Sp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Il=class extends Ba{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return ln`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return on`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};cf([De({type:Number}),Sp("design:type",Object)],Il.prototype,"elevation",void 0);cf([De({type:Boolean,reflect:!0}),Sp("design:type",Object)],Il.prototype,"open",void 0);cf([Fn("wired-card"),Sp("design:type",zl)],Il.prototype,"card",void 0);Il=cf([fn("wired-dialog")],Il);var gb=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},By=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let y0=class extends En{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[Mn,ln`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return on`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)Sn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};gb([De({type:Number}),By("design:type",Object)],y0.prototype,"elevation",void 0);y0=gb([fn("wired-divider")],y0);var Mp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_b=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wu=class extends En{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return on`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=xp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Mp([De({type:Boolean,reflect:!0}),_b("design:type",Object)],Wu.prototype,"disabled",void 0);Mp([Fn("button"),_b("design:type",HTMLButtonElement)],Wu.prototype,"button",void 0);Wu=Mp([fn("wired-fab")],Wu);var Ep=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},xb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let qu=class extends En{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return on`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),ur(e,a/2,a/2,a,a,this.seed)}};Ep([De({type:Boolean,reflect:!0}),xb("design:type",Object)],qu.prototype,"disabled",void 0);Ep([Fn("button"),xb("design:type",HTMLButtonElement)],qu.prototype,"button",void 0);qu=Ep([fn("wired-icon-button")],qu);var Tp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ap=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const Hy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Yu=class extends En{constructor(){super(),this.elevation=1,this.src=Hy,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return on`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};xi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Tp([De({type:Number}),Ap("design:type",Object)],Yu.prototype,"elevation",void 0);Tp([De({type:String}),Ap("design:type",String)],Yu.prototype,"src",void 0);Yu=Tp([fn("wired-image"),Ap("design:paramtypes",[])],Yu);var qn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Yn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Nn=class extends En{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return on`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};qn([De({type:Boolean,reflect:!0}),Yn("design:type",Object)],Nn.prototype,"disabled",void 0);qn([De({type:String}),Yn("design:type",Object)],Nn.prototype,"placeholder",void 0);qn([De({type:String}),Yn("design:type",String)],Nn.prototype,"name",void 0);qn([De({type:String}),Yn("design:type",String)],Nn.prototype,"min",void 0);qn([De({type:String}),Yn("design:type",String)],Nn.prototype,"max",void 0);qn([De({type:String}),Yn("design:type",String)],Nn.prototype,"step",void 0);qn([De({type:String}),Yn("design:type",Object)],Nn.prototype,"type",void 0);qn([De({type:String}),Yn("design:type",Object)],Nn.prototype,"autocomplete",void 0);qn([De({type:String}),Yn("design:type",Object)],Nn.prototype,"autocapitalize",void 0);qn([De({type:String}),Yn("design:type",Object)],Nn.prototype,"autocorrect",void 0);qn([De({type:Boolean}),Yn("design:type",Object)],Nn.prototype,"required",void 0);qn([De({type:Boolean}),Yn("design:type",Object)],Nn.prototype,"autofocus",void 0);qn([De({type:Boolean}),Yn("design:type",Object)],Nn.prototype,"readonly",void 0);qn([De({type:Number}),Yn("design:type",Number)],Nn.prototype,"minlength",void 0);qn([De({type:Number}),Yn("design:type",Number)],Nn.prototype,"maxlength",void 0);qn([De({type:Number}),Yn("design:type",Number)],Nn.prototype,"size",void 0);qn([Fn("input"),Yn("design:type",HTMLInputElement)],Nn.prototype,"textInput",void 0);Nn=qn([fn("wired-input"),Yn("design:paramtypes",[])],Nn);var Kl=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},uf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let xo=class extends En{constructor(){super(...arguments),this.elevation=1}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return on`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)Sn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),Sn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};Kl([De({type:Number}),uf("design:type",Object)],xo.prototype,"elevation",void 0);Kl([De({type:String}),uf("design:type",String)],xo.prototype,"href",void 0);Kl([De({type:String}),uf("design:type",String)],xo.prototype,"target",void 0);Kl([Fn("a"),uf("design:type",HTMLAnchorElement)],xo.prototype,"anchor",void 0);xo=Kl([fn("wired-link")],xo);var ff=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Rp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Bl=class extends En{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return on`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,0,0,n[0],n[1],this.seed)}};ff([De({type:Object}),Rp("design:type",Object)],Bl.prototype,"value",void 0);ff([De({type:String}),Rp("design:type",String)],Bl.prototype,"selected",void 0);ff([De({type:Boolean}),Rp("design:type",Object)],Bl.prototype,"horizontal",void 0);Bl=ff([fn("wired-listbox")],Bl);var Ql=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},df=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let dr=class extends En{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return on`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=af([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Ql([De({type:Number}),df("design:type",Object)],dr.prototype,"value",void 0);Ql([De({type:Number}),df("design:type",Object)],dr.prototype,"min",void 0);Ql([De({type:Number}),df("design:type",Object)],dr.prototype,"max",void 0);Ql([De({type:Boolean}),df("design:type",Object)],dr.prototype,"percentage",void 0);dr=Ql([fn("wired-progress")],dr);var Ro=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Jl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let hr=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return on`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){ur(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);ur(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ro([De({type:Boolean}),Jl("design:type",Object)],hr.prototype,"checked",void 0);Ro([De({type:Boolean,reflect:!0}),Jl("design:type",Object)],hr.prototype,"disabled",void 0);Ro([De({type:String}),Jl("design:type",String)],hr.prototype,"name",void 0);Ro([De(),Jl("design:type",Object)],hr.prototype,"focused",void 0);Ro([Fn("input"),Jl("design:type",HTMLInputElement)],hr.prototype,"input",void 0);hr=Ro([fn("wired-radio")],hr);var vb=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Gy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let S0=class extends Ba{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return ln`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return on`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){_p(this,"selected",{selected:this.selected})}};vb([De({type:String}),Gy("design:type",String)],S0.prototype,"selected",void 0);S0=vb([fn("wired-radio-group")],S0);var gr=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wo=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ds=class extends En{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return on`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=go("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),ur(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),Sn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=go("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Sn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),Sn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};gr([De({type:Boolean,reflect:!0}),wo("design:type",Object)],Ds.prototype,"disabled",void 0);gr([De({type:String}),wo("design:type",Object)],Ds.prototype,"placeholder",void 0);gr([De({type:String}),wo("design:type",Object)],Ds.prototype,"autocomplete",void 0);gr([De({type:String}),wo("design:type",Object)],Ds.prototype,"autocorrect",void 0);gr([De({type:Boolean}),wo("design:type",Object)],Ds.prototype,"autofocus",void 0);gr([Fn("input"),wo("design:type",HTMLInputElement)],Ds.prototype,"textInput",void 0);Ds=gr([fn("wired-search-input")],Ds);var Co=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ec=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Os=class extends En{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return on`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);Sn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=ur(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};Co([De({type:Number}),ec("design:type",Object)],Os.prototype,"min",void 0);Co([De({type:Number}),ec("design:type",Object)],Os.prototype,"max",void 0);Co([De({type:Number}),ec("design:type",Object)],Os.prototype,"step",void 0);Co([De({type:Boolean,reflect:!0}),ec("design:type",Object)],Os.prototype,"disabled",void 0);Co([Fn("input"),ec("design:type",HTMLInputElement)],Os.prototype,"input",void 0);Os=Co([fn("wired-slider")],Os);var wp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},bb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let $u=class extends En{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return on`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){ur(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=xp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};wp([De({type:Boolean}),bb("design:type",Object)],$u.prototype,"spinning",void 0);wp([De({type:Number}),bb("design:type",Object)],$u.prototype,"duration",void 0);$u=wp([fn("wired-spinner")],$u);var Cp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Dp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Zu=class extends En{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return on`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-4,n[1]-4,this.seed)}};Cp([De({type:String}),Dp("design:type",Object)],Zu.prototype,"name",void 0);Cp([De({type:String}),Dp("design:type",Object)],Zu.prototype,"label",void 0);Zu=Cp([fn("wired-tab"),Dp("design:paramtypes",[])],Zu);var Op=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},yb=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ku=class extends Ba{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[Mn,ln`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return on`
    <div id="bar">
      ${this.pages.map(e=>on`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Op([De({type:String}),yb("design:type",String)],Ku.prototype,"selected",void 0);Op([Fn("slot"),yb("design:type",HTMLSlotElement)],Ku.prototype,"slotElement",void 0);Ku=Op([fn("wired-tabs")],Ku);var Oi=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ji=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let vi=class extends En{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return on`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Oi([De({type:Boolean,reflect:!0}),ji("design:type",Object)],vi.prototype,"disabled",void 0);Oi([De({type:Number}),ji("design:type",Object)],vi.prototype,"rows",void 0);Oi([De({type:Number}),ji("design:type",Object)],vi.prototype,"maxrows",void 0);Oi([De({type:String}),ji("design:type",Object)],vi.prototype,"autocomplete",void 0);Oi([De({type:Boolean}),ji("design:type",Object)],vi.prototype,"autofocus",void 0);Oi([De({type:String}),ji("design:type",Object)],vi.prototype,"inputmode",void 0);Oi([De({type:String}),ji("design:type",Object)],vi.prototype,"placeholder",void 0);Oi([De({type:Boolean}),ji("design:type",Object)],vi.prototype,"required",void 0);Oi([De({type:Boolean}),ji("design:type",Object)],vi.prototype,"readonly",void 0);Oi([De({type:Number}),ji("design:type",Number)],vi.prototype,"minlength",void 0);Oi([De({type:Number}),ji("design:type",Number)],vi.prototype,"maxlength",void 0);Oi([Fn("textarea"),ji("design:type",HTMLTextAreaElement)],vi.prototype,"textareaInput",void 0);vi=Oi([fn("wired-textarea")],vi);var hf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Up=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Hl=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[Mn,ln`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return on`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){xi(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=go("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=xp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),ur(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};hf([De({type:Boolean}),Up("design:type",Object)],Hl.prototype,"checked",void 0);hf([De({type:Boolean,reflect:!0}),Up("design:type",Object)],Hl.prototype,"disabled",void 0);hf([Fn("input"),Up("design:type",HTMLInputElement)],Hl.prototype,"input",void 0);Hl=hf([fn("wired-toggle")],Hl);var Ji=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ea=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Vi=class extends En{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,ln`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return on`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};Ji([De({type:String}),ea("design:type",Object)],Vi.prototype,"src",void 0);Ji([De({type:Boolean}),ea("design:type",Object)],Vi.prototype,"autoplay",void 0);Ji([De({type:Boolean}),ea("design:type",Object)],Vi.prototype,"loop",void 0);Ji([De({type:Boolean}),ea("design:type",Object)],Vi.prototype,"muted",void 0);Ji([De({type:Boolean}),ea("design:type",Object)],Vi.prototype,"playsinline",void 0);Ji([De(),ea("design:type",Object)],Vi.prototype,"playing",void 0);Ji([De(),ea("design:type",Object)],Vi.prototype,"timeDisplay",void 0);Ji([Fn("wired-progress"),ea("design:type",dr)],Vi.prototype,"progressBar",void 0);Ji([Fn("wired-slider"),ea("design:type",Os)],Vi.prototype,"slider",void 0);Ji([Fn("video"),ea("design:type",HTMLVideoElement)],Vi.prototype,"video",void 0);Vi=Ji([fn("wired-video"),ea("design:paramtypes",[])],Vi);function Sb(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ch={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jx;function Vy(){if(jx)return yl;jx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var kx;function jy(){return kx||(kx=1,Ch.exports=Vy()),Ch.exports}var le=jy(),Dh={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx;function ky(){if(Xx)return ut;Xx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,S={};function v(D,oe,Se){this.props=D,this.context=oe,this.refs=S,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,oe){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,oe,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=v.prototype;function U(D,oe,Se){this.props=D,this.context=oe,this.refs=S,this.updater=Se||M}var F=U.prototype=new L;F.constructor=U,T(F,v.prototype),F.isPureReactComponent=!0;var j=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(D,oe,Se){var Te=Se.ref;return{$$typeof:r,type:D,key:oe,ref:Te!==void 0?Te:null,props:Se}}function w(D,oe){return C(D.type,oe,D.props)}function G(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function ee(D){var oe={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return oe[Se]})}var de=/\/+/g;function _e(D,oe){return typeof D=="object"&&D!==null&&D.key!=null?ee(""+D.key):oe.toString(36)}function Q(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(oe){D.status==="pending"&&(D.status="fulfilled",D.value=oe)},function(oe){D.status==="pending"&&(D.status="rejected",D.reason=oe)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,oe,Se,Te,ze){var re=typeof D;(re==="undefined"||re==="boolean")&&(D=null);var he=!1;if(D===null)he=!0;else switch(re){case"bigint":case"string":case"number":he=!0;break;case"object":switch(D.$$typeof){case r:case e:he=!0;break;case g:return he=D._init,P(he(D._payload),oe,Se,Te,ze)}}if(he)return ze=ze(D),he=Te===""?"."+_e(D,0):Te,j(ze)?(Se="",he!=null&&(Se=he.replace(de,"$&/")+"/"),P(ze,oe,Se,"",function(We){return We})):ze!=null&&(G(ze)&&(ze=w(ze,Se+(ze.key==null||D&&D.key===ze.key?"":(""+ze.key).replace(de,"$&/")+"/")+he)),oe.push(ze)),1;he=0;var Ue=Te===""?".":Te+":";if(j(D))for(var Ve=0;Ve<D.length;Ve++)Te=D[Ve],re=Ue+_e(Te,Ve),he+=P(Te,oe,Se,re,ze);else if(Ve=y(D),typeof Ve=="function")for(D=Ve.call(D),Ve=0;!(Te=D.next()).done;)Te=Te.value,re=Ue+_e(Te,Ve++),he+=P(Te,oe,Se,re,ze);else if(re==="object"){if(typeof D.then=="function")return P(Q(D),oe,Se,Te,ze);throw oe=String(D),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.")}return he}function k(D,oe,Se){if(D==null)return D;var Te=[],ze=0;return P(D,Te,"","",function(re){return oe.call(Se,re,ze++)}),Te}function W(D){if(D._status===-1){var oe=D._result;oe=oe(),oe.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=oe)}if(D._status===1)return D._result.default;throw D._result}var fe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var oe=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(oe))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},pe={map:k,forEach:function(D,oe,Se){k(D,function(){oe.apply(this,arguments)},Se)},count:function(D){var oe=0;return k(D,function(){oe++}),oe},toArray:function(D){return k(D,function(oe){return oe})||[]},only:function(D){if(!G(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ut.Activity=_,ut.Children=pe,ut.Component=v,ut.Fragment=n,ut.Profiler=o,ut.PureComponent=U,ut.StrictMode=a,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ut.cache=function(D){return function(){return D.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(D,oe,Se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Te=T({},D.props),ze=D.key;if(oe!=null)for(re in oe.key!==void 0&&(ze=""+oe.key),oe)!K.call(oe,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&oe.ref===void 0||(Te[re]=oe[re]);var re=arguments.length-2;if(re===1)Te.children=Se;else if(1<re){for(var he=Array(re),Ue=0;Ue<re;Ue++)he[Ue]=arguments[Ue+2];Te.children=he}return C(D.type,ze,Te)},ut.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ut.createElement=function(D,oe,Se){var Te,ze={},re=null;if(oe!=null)for(Te in oe.key!==void 0&&(re=""+oe.key),oe)K.call(oe,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(ze[Te]=oe[Te]);var he=arguments.length-2;if(he===1)ze.children=Se;else if(1<he){for(var Ue=Array(he),Ve=0;Ve<he;Ve++)Ue[Ve]=arguments[Ve+2];ze.children=Ue}if(D&&D.defaultProps)for(Te in he=D.defaultProps,he)ze[Te]===void 0&&(ze[Te]=he[Te]);return C(D,re,ze)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(D){return{$$typeof:d,render:D}},ut.isValidElement=G,ut.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:W}},ut.memo=function(D,oe){return{$$typeof:p,type:D,compare:oe===void 0?null:oe}},ut.startTransition=function(D){var oe=z.T,Se={};z.T=Se;try{var Te=D(),ze=z.S;ze!==null&&ze(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,fe)}catch(re){fe(re)}finally{oe!==null&&Se.types!==null&&(oe.types=Se.types),z.T=oe}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(D){return z.H.use(D)},ut.useActionState=function(D,oe,Se){return z.H.useActionState(D,oe,Se)},ut.useCallback=function(D,oe){return z.H.useCallback(D,oe)},ut.useContext=function(D){return z.H.useContext(D)},ut.useDebugValue=function(){},ut.useDeferredValue=function(D,oe){return z.H.useDeferredValue(D,oe)},ut.useEffect=function(D,oe){return z.H.useEffect(D,oe)},ut.useEffectEvent=function(D){return z.H.useEffectEvent(D)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(D,oe,Se){return z.H.useImperativeHandle(D,oe,Se)},ut.useInsertionEffect=function(D,oe){return z.H.useInsertionEffect(D,oe)},ut.useLayoutEffect=function(D,oe){return z.H.useLayoutEffect(D,oe)},ut.useMemo=function(D,oe){return z.H.useMemo(D,oe)},ut.useOptimistic=function(D,oe){return z.H.useOptimistic(D,oe)},ut.useReducer=function(D,oe,Se){return z.H.useReducer(D,oe,Se)},ut.useRef=function(D){return z.H.useRef(D)},ut.useState=function(D){return z.H.useState(D)},ut.useSyncExternalStore=function(D,oe,Se){return z.H.useSyncExternalStore(D,oe,Se)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.1",ut}var Wx;function Lp(){return Wx||(Wx=1,Dh.exports=ky()),Dh.exports}var Ke=Lp();const Xy=Sb(Ke);var Oh={exports:{}},Sl={},Uh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qx;function Wy(){return qx||(qx=1,(function(r){function e(P,k){var W=P.length;P.push(k);e:for(;0<W;){var fe=W-1>>>1,pe=P[fe];if(0<o(pe,k))P[fe]=k,P[W]=pe,W=fe;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var k=P[0],W=P.pop();if(W!==k){P[0]=W;e:for(var fe=0,pe=P.length,D=pe>>>1;fe<D;){var oe=2*(fe+1)-1,Se=P[oe],Te=oe+1,ze=P[Te];if(0>o(Se,W))Te<pe&&0>o(ze,Se)?(P[fe]=ze,P[Te]=W,fe=Te):(P[fe]=Se,P[oe]=W,fe=oe);else if(Te<pe&&0>o(ze,W))P[fe]=ze,P[Te]=W,fe=Te;else break e}}return k}function o(P,k){var W=P.sortIndex-k.sortIndex;return W!==0?W:P.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,M=!1,T=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var k=n(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=P)a(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=n(p)}}function j(P){if(T=!1,F(P),!M)if(n(m)!==null)M=!0,N||(N=!0,ee());else{var k=n(p);k!==null&&Q(j,k.startTime-P)}}var N=!1,z=-1,K=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<K)}function G(){if(S=!1,N){var P=r.unstable_now();C=P;var k=!0;try{e:{M=!1,T&&(T=!1,L(z),z=-1),y=!0;var W=x;try{t:{for(F(P),_=n(m);_!==null&&!(_.expirationTime>P&&w());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,x=_.priorityLevel;var pe=fe(_.expirationTime<=P);if(P=r.unstable_now(),typeof pe=="function"){_.callback=pe,F(P),k=!0;break t}_===n(m)&&a(m),F(P)}else a(m);_=n(m)}if(_!==null)k=!0;else{var D=n(p);D!==null&&Q(j,D.startTime-P),k=!1}}break e}finally{_=null,x=W,y=!1}k=void 0}}finally{k?ee():N=!1}}}var ee;if(typeof U=="function")ee=function(){U(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,_e=de.port2;de.port1.onmessage=G,ee=function(){_e.postMessage(null)}}else ee=function(){v(G,0)};function Q(P,k){z=v(function(){P(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var W=x;x=k;try{return P()}finally{x=W}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=x;x=P;try{return k()}finally{x=W}},r.unstable_scheduleCallback=function(P,k,W){var fe=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?fe+W:fe):W=fe,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=W+pe,P={id:g++,callback:k,priorityLevel:P,startTime:W,expirationTime:pe,sortIndex:-1},W>fe?(P.sortIndex=W,e(p,P),n(m)===null&&P===n(p)&&(T?(L(z),z=-1):T=!0,Q(j,W-fe))):(P.sortIndex=pe,e(m,P),M||y||(M=!0,N||(N=!0,ee()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var k=x;return function(){var W=x;x=k;try{return P.apply(this,arguments)}finally{x=W}}}})(Lh)),Lh}var Yx;function qy(){return Yx||(Yx=1,Uh.exports=Wy()),Uh.exports}var Nh={exports:{}},ti={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x;function Yy(){if($x)return ti;$x=1;var r=Lp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ti.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ti.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},ti.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},ti.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},ti.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},ti.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ti.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},ti.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ti.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},ti.requestFormReset=function(m){a.d.r(m)},ti.unstable_batchedUpdates=function(m,p){return m(p)},ti.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},ti.useFormStatus=function(){return u.H.useHostTransitionStatus()},ti.version="19.2.1",ti}var Zx;function $y(){if(Zx)return Nh.exports;Zx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nh.exports=Yy(),Nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kx;function Zy(){if(Kx)return Sl;Kx=1;var r=qy(),e=Lp(),n=$y();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,A=f.child;A;){if(A===s){b=!0,s=f,l=h;break}if(A===l){b=!0,l=f,s=h;break}A=A.sibling}if(!b){for(A=h.child;A;){if(A===s){b=!0,s=h,l=f;break}if(A===l){b=!0,l=h,s=f;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case F:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case K:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}var Q=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function D(t){return{current:t}}function oe(t){0>pe||(t.current=fe[pe],fe[pe]=null,pe--)}function Se(t,i){pe++,fe[pe]=t.current,t.current=i}var Te=D(null),ze=D(null),re=D(null),he=D(null);function Ue(t,i){switch(Se(re,i),Se(ze,t),Se(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Q_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Q_(i),t=J_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}oe(Te),Se(Te,t)}function Ve(){oe(Te),oe(ze),oe(re)}function We(t){t.memoizedState!==null&&Se(he,t);var i=Te.current,s=J_(i,t.type);i!==s&&(Se(ze,t),Se(Te,s))}function dt(t){ze.current===t&&(oe(Te),oe(ze)),he.current===t&&(oe(he),gl._currentValue=W)}var dn,ht;function Rt(t){if(dn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);dn=i&&i[1]||"",ht=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+dn+t+ht}var B=!1;function pt(t,i){if(!t||B)return"";B=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ue){var se=ue}Reflect.construct(t,[],be)}else{try{be.call()}catch(ue){se=ue}t.call(be.prototype)}}else{try{throw Error()}catch(ue){se=ue}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ue){if(ue&&se&&typeof ue.stack=="string")return[ue.stack,se.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],A=h[1];if(b&&A){var I=b.split(`
`),ie=A.split(`
`);for(f=l=0;l<I.length&&!I[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ie.length&&!ie[f].includes("DetermineComponentFrameRoot");)f++;if(l===I.length||f===ie.length)for(l=I.length-1,f=ie.length-1;1<=l&&0<=f&&I[l]!==ie[f];)f--;for(;1<=l&&0<=f;l--,f--)if(I[l]!==ie[f]){if(l!==1||f!==1)do if(l--,f--,0>f||I[l]!==ie[f]){var me=`
`+I[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{B=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Rt(s):""}function mt(t,i){switch(t.tag){case 26:case 27:case 5:return Rt(t.type);case 16:return Rt("Lazy");case 13:return t.child!==i&&i!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return Rt("Activity");default:return""}}function Lt(t){try{var i="",s=null;do i+=mt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ke=Object.prototype.hasOwnProperty,kt=r.unstable_scheduleCallback,$e=r.unstable_cancelCallback,nt=r.unstable_shouldYield,O=r.unstable_requestPaint,E=r.unstable_now,te=r.unstable_getCurrentPriorityLevel,xe=r.unstable_ImmediatePriority,Z=r.unstable_UserBlockingPriority,q=r.unstable_NormalPriority,Ne=r.unstable_LowPriority,Ae=r.unstable_IdlePriority,qe=r.log,He=r.unstable_setDisableYieldValue,ye=null,Ee=null;function Ze(t){if(typeof qe=="function"&&He(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ye,t)}catch{}}var je=Math.clz32?Math.clz32:H,Fe=Math.log,at=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Fe(t)/at|0)|0}var Oe=256,we=262144,Ce=4194304;function Me(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~h,l!==0?f=Me(l):(b&=A,b!==0?f=Me(b):s||(s=A&~t,s!==0&&(f=Me(s))))):(A=l&~h,A!==0?f=Me(A):b!==0?f=Me(b):s||(s=l&~t,s!==0&&(f=Me(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Ie(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function rt(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),t}function Ut(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Dn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function In(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,I=t.expirationTimes,ie=t.hiddenUpdates;for(s=b&~s;0<s;){var me=31-je(s),be=1<<me;A[me]=0,I[me]=-1;var se=ie[me];if(se!==null)for(ie[me]=null,me=0;me<se.length;me++){var ue=se[me];ue!==null&&(ue.lane&=-536870913)}s&=~be}l!==0&&ki(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function ki(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-je(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Ls(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-je(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Wa(t,i){var s=i&-i;return s=(s&42)!==0?1:li(s),(s&(t.suspendedLanes|i))!==0?0:s}function li(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function na(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function qa(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Sx(t.type))}function Ya(t,i){var s=k.p;try{return k.p=t,i()}finally{k.p=s}}var lt=Math.random().toString(36).slice(2),ct="__reactFiber$"+lt,St="__reactProps$"+lt,an="__reactContainer$"+lt,hn="__reactEvents$"+lt,cn="__reactListeners$"+lt,Xt="__reactHandles$"+lt,Bn="__reactResources$"+lt,ot="__reactMarker$"+lt;function _t(t){delete t[ct],delete t[St],delete t[hn],delete t[cn],delete t[Xt]}function pn(t){var i=t[ct];if(i)return i;for(var s=t.parentNode;s;){if(i=s[an]||s[ct]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=rx(t);t!==null;){if(s=t[ct])return s;t=rx(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[ct]||t[an]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function X(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function ae(t){var i=t[Bn];return i||(i=t[Bn]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function J(t){t[ot]=!0}var $=new Set,Re={};function Le(t,i){Be(t,i),Be(t+"Capture",i)}function Be(t,i){for(Re[t]=i,t=0;t<i.length;t++)$.add(i[t])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tt={},st={};function Qe(t){return ke.call(st,t)?!0:ke.call(tt,t)?!1:Ge.test(t)?st[t]=!0:(tt[t]=!0,!1)}function xt(t,i,s){if(Qe(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Nt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function zt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function wt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jt(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Jt(t){if(!t._valueTracker){var i=jt(t)?"checked":"value";t._valueTracker=et(t,i,""+t[i])}}function Ct(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=jt(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Hn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var $a=/[\n"\\]/g;function tn(t){return t.replace($a,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function fa(t,i,s,l,f,h,b,A){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+wt(i)):t.value!==""+wt(i)&&(t.value=""+wt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Gn(t,b,wt(i)):s!=null?Gn(t,b,wt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+wt(A):t.removeAttribute("name")}function nn(t,i,s,l,f,h,b,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Jt(t);return}s=s!=null?""+wt(s):"",i=i!=null?""+wt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Jt(t)}function Gn(t,i,s){i==="number"&&Hn(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function On(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+wt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Vn(t,i,s){if(i!=null&&(i=""+wt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+wt(s):""}function $n(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(Q(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=wt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Jt(t)}function ia(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var da=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $p(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||da.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Zp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&$p(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&$p(t,h,i[h])}function xf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),e2=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(t){return e2.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ha(){}var vf=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,xr=null;function Kp(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[St]||null;e:switch(t=i.stateNode,i.type){case"input":if(fa(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+tn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[St]||null;if(!f)throw Error(a(90));fa(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ct(l)}break e;case"textarea":Vn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&On(t,!!s.multiple,i,!1)}}}var yf=!1;function Qp(t,i,s){if(yf)return t(i,s);yf=!0;try{var l=t(i);return l}finally{if(yf=!1,(_r!==null||xr!==null)&&(qc(),_r&&(i=_r,t=xr,xr=_r=null,Kp(i),t)))for(i=0;i<t.length;i++)Kp(t[i])}}function Lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[St]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(pa)try{var No={};Object.defineProperty(No,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Sf=!1}var Za=null,Mf=null,oc=null;function Jp(){if(oc)return oc;var t,i=Mf,s=i.length,l,f="value"in Za?Za.value:Za.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return oc=f.slice(t,1<l?1-l:void 0)}function lc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function em(){return!1}function ci(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cc:em,this.isPropagationStopped=em,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=ci(Ns),Po=_({},Ns,{view:0,detail:0}),t2=ci(Po),Ef,Tf,zo,fc=_({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Ef=t.screenX-zo.screenX,Tf=t.screenY-zo.screenY):Tf=Ef=0,zo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),tm=ci(fc),n2=_({},fc,{dataTransfer:0}),i2=ci(n2),a2=_({},Po,{relatedTarget:0}),Af=ci(a2),s2=_({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),r2=ci(s2),o2=_({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),l2=ci(o2),c2=_({},Ns,{data:0}),nm=ci(c2),u2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},f2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h2(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=d2[t])?!!i[t]:!1}function Rf(){return h2}var p2=_({},Po,{key:function(t){if(t.key){var i=u2[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?f2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),m2=ci(p2),g2=_({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=ci(g2),_2=_({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),x2=ci(_2),v2=_({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),b2=ci(v2),y2=_({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),S2=ci(y2),M2=_({},Ns,{newState:0,oldState:0}),E2=ci(M2),T2=[9,13,27,32],wf=pa&&"CompositionEvent"in window,Fo=null;pa&&"documentMode"in document&&(Fo=document.documentMode);var A2=pa&&"TextEvent"in window&&!Fo,am=pa&&(!wf||Fo&&8<Fo&&11>=Fo),sm=" ",rm=!1;function om(t,i){switch(t){case"keyup":return T2.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vr=!1;function R2(t,i){switch(t){case"compositionend":return lm(i);case"keypress":return i.which!==32?null:(rm=!0,sm);case"textInput":return t=i.data,t===sm&&rm?null:t;default:return null}}function w2(t,i){if(vr)return t==="compositionend"||!wf&&om(t,i)?(t=Jp(),oc=Mf=Za=null,vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return am&&i.locale!=="ko"?null:i.data;default:return null}}var C2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!C2[t.type]:i==="textarea"}function um(t,i,s,l){_r?xr?xr.push(l):xr=[l]:_r=l,i=eu(i,"onChange"),0<i.length&&(s=new uc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Io=null,Bo=null;function D2(t){W_(t,0)}function dc(t){var i=X(t);if(Ct(i))return t}function fm(t,i){if(t==="change")return i}var dm=!1;if(pa){var Cf;if(pa){var Df="oninput"in document;if(!Df){var hm=document.createElement("div");hm.setAttribute("oninput","return;"),Df=typeof hm.oninput=="function"}Cf=Df}else Cf=!1;dm=Cf&&(!document.documentMode||9<document.documentMode)}function pm(){Io&&(Io.detachEvent("onpropertychange",mm),Bo=Io=null)}function mm(t){if(t.propertyName==="value"&&dc(Bo)){var i=[];um(i,Bo,t,bf(t)),Qp(D2,i)}}function O2(t,i,s){t==="focusin"?(pm(),Io=i,Bo=s,Io.attachEvent("onpropertychange",mm)):t==="focusout"&&pm()}function U2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Bo)}function L2(t,i){if(t==="click")return dc(i)}function N2(t,i){if(t==="input"||t==="change")return dc(i)}function P2(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:P2;function Ho(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ke.call(i,f)||!bi(t[f],i[f]))return!1}return!0}function gm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _m(t,i){var s=gm(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gm(s)}}function xm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?xm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Hn(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Hn(t.document)}return i}function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var z2=pa&&"documentMode"in document&&11>=document.documentMode,br=null,Uf=null,Go=null,Lf=!1;function bm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lf||br==null||br!==Hn(l)||(l=br,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=eu(Uf,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=br)))}function Ps(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:Ps("Animation","AnimationEnd"),animationiteration:Ps("Animation","AnimationIteration"),animationstart:Ps("Animation","AnimationStart"),transitionrun:Ps("Transition","TransitionRun"),transitionstart:Ps("Transition","TransitionStart"),transitioncancel:Ps("Transition","TransitionCancel"),transitionend:Ps("Transition","TransitionEnd")},Nf={},ym={};pa&&(ym=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function zs(t){if(Nf[t])return Nf[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in ym)return Nf[t]=i[s];return t}var Sm=zs("animationend"),Mm=zs("animationiteration"),Em=zs("animationstart"),F2=zs("transitionrun"),I2=zs("transitionstart"),B2=zs("transitioncancel"),Tm=zs("transitionend"),Am=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Xi(t,i){Am.set(t,i),Le(i,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ui=[],Sr=0,zf=0;function pc(){for(var t=Sr,i=zf=Sr=0;i<t;){var s=Ui[i];Ui[i++]=null;var l=Ui[i];Ui[i++]=null;var f=Ui[i];Ui[i++]=null;var h=Ui[i];if(Ui[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Rm(s,f,h)}}function mc(t,i,s,l){Ui[Sr++]=t,Ui[Sr++]=i,Ui[Sr++]=s,Ui[Sr++]=l,zf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Ff(t,i,s,l){return mc(t,i,s,l),gc(t)}function Fs(t,i){return mc(t,null,null,i),gc(t)}function Rm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-je(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function gc(t){if(50<cl)throw cl=0,Wd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function H2(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,i,s,l){return new H2(t,i,s,l)}function If(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,i){var s=t.alternate;return s===null?(s=yi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function wm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function _c(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")If(t)&&(b=1);else if(typeof t=="string")b=X1(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=yi(31,s,i,f),t.elementType=C,t.lanes=h,t;case T:return Is(s.children,f,h,i);case S:b=8,f|=24;break;case v:return t=yi(12,s,i,f|2),t.elementType=v,t.lanes=h,t;case j:return t=yi(13,s,i,f),t.elementType=j,t.lanes=h,t;case N:return t=yi(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case L:b=9;break e;case F:b=11;break e;case z:b=14;break e;case K:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=yi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Is(t,i,s,l){return t=yi(7,t,l,i),t.lanes=s,t}function Bf(t,i,s){return t=yi(6,t,null,i),t.lanes=s,t}function Cm(t){var i=yi(18,null,null,0);return i.stateNode=t,i}function Hf(t,i,s){return i=yi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Dm=new WeakMap;function Li(t,i){if(typeof t=="object"&&t!==null){var s=Dm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Lt(i)},Dm.set(t,i),i)}return{value:t,source:i,stack:Lt(i)}}var Er=[],Tr=0,xc=null,Vo=0,Ni=[],Pi=0,Ka=null,aa=1,sa="";function ga(t,i){Er[Tr++]=Vo,Er[Tr++]=xc,xc=t,Vo=i}function Om(t,i,s){Ni[Pi++]=aa,Ni[Pi++]=sa,Ni[Pi++]=Ka,Ka=t;var l=aa;t=sa;var f=32-je(l)-1;l&=~(1<<f),s+=1;var h=32-je(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,aa=1<<32-je(i)+f|s<<f|l,sa=h+t}else aa=1<<h|s<<f|l,sa=t}function Gf(t){t.return!==null&&(ga(t,1),Om(t,1,0))}function Vf(t){for(;t===xc;)xc=Er[--Tr],Er[Tr]=null,Vo=Er[--Tr],Er[Tr]=null;for(;t===Ka;)Ka=Ni[--Pi],Ni[Pi]=null,sa=Ni[--Pi],Ni[Pi]=null,aa=Ni[--Pi],Ni[Pi]=null}function Um(t,i){Ni[Pi++]=aa,Ni[Pi++]=sa,Ni[Pi++]=Ka,aa=i.id,sa=i.overflow,Ka=t}var Zn=null,sn=null,Dt=!1,Qa=null,zi=!1,jf=Error(a(519));function Ja(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Li(i,t)),jf}function Lm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ct]=t,i[St]=l,s){case"dialog":Et("cancel",i),Et("close",i);break;case"iframe":case"object":case"embed":Et("load",i);break;case"video":case"audio":for(s=0;s<fl.length;s++)Et(fl[s],i);break;case"source":Et("error",i);break;case"img":case"image":case"link":Et("error",i),Et("load",i);break;case"details":Et("toggle",i);break;case"input":Et("invalid",i),nn(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Et("invalid",i);break;case"textarea":Et("invalid",i),$n(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Z_(i.textContent,s)?(l.popover!=null&&(Et("beforetoggle",i),Et("toggle",i)),l.onScroll!=null&&Et("scroll",i),l.onScrollEnd!=null&&Et("scrollend",i),l.onClick!=null&&(i.onclick=ha),i=!0):i=!1,i||Ja(t,!0)}function Nm(t){for(Zn=t.return;Zn;)switch(Zn.tag){case 5:case 31:case 13:zi=!1;return;case 27:case 3:zi=!0;return;default:Zn=Zn.return}}function Ar(t){if(t!==Zn)return!1;if(!Dt)return Nm(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||oh(t.type,t.memoizedProps)),s=!s),s&&sn&&Ja(t),Nm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));sn=sx(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));sn=sx(t)}else i===27?(i=sn,hs(t.type)?(t=dh,dh=null,sn=t):sn=i):sn=Zn?Ii(t.stateNode.nextSibling):null;return!0}function Bs(){sn=Zn=null,Dt=!1}function kf(){var t=Qa;return t!==null&&(hi===null?hi=t:hi.push.apply(hi,t),Qa=null),t}function jo(t){Qa===null?Qa=[t]:Qa.push(t)}var Xf=D(null),Hs=null,_a=null;function es(t,i,s){Se(Xf,i._currentValue),i._currentValue=s}function xa(t){t._currentValue=Xf.current,oe(Xf)}function Wf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function qf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=f;for(var I=0;I<i.length;I++)if(A.context===i[I]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Wf(h.return,s,t),l||(b=null);break e}h=A.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Wf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Rr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=f.type;bi(f.pendingProps.value,b.value)||(t!==null?t.push(A):t=[A])}}else if(f===he.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&qf(i,t,s,l),i.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!bi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Gs(t){Hs=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Kn(t){return Pm(Hs,t)}function bc(t,i){return Hs===null&&Gs(t),Pm(t,i)}function Pm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},_a===null){if(t===null)throw Error(a(308));_a=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else _a=_a.next=i;return s}var G2=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},V2=r.unstable_scheduleCallback,j2=r.unstable_NormalPriority,Tn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new G2,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&V2(j2,function(){t.controller.abort()})}var Xo=null,$f=0,wr=0,Cr=null;function k2(t,i){if(Xo===null){var s=Xo=[];$f=0,wr=Qd(),Cr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $f++,i.then(zm,zm),i}function zm(){if(--$f===0&&Xo!==null){Cr!==null&&(Cr.status="fulfilled");var t=Xo;Xo=null,wr=0,Cr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function X2(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Fm=P.S;P.S=function(t,i){b_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&k2(t,i),Fm!==null&&Fm(t,i)};var Vs=D(null);function Zf(){var t=Vs.current;return t!==null?t:en.pooledCache}function yc(t,i){i===null?Se(Vs,Vs.current):Se(Vs,i.pool)}function Im(){var t=Zf();return t===null?null:{parent:Tn._currentValue,pool:t}}var Dr=Error(a(460)),Kf=Error(a(474)),Sc=Error(a(542)),Mc={then:function(){}};function Bm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Hm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(ha,ha),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vm(t),t;default:if(typeof i.status=="string")i.then(ha,ha);else{if(t=en,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vm(t),t}throw ks=i,Dr}}function js(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ks=s,Dr):s}}var ks=null;function Gm(){if(ks===null)throw Error(a(459));var t=ks;return ks=null,t}function Vm(t){if(t===Dr||t===Sc)throw Error(a(483))}var Or=null,Wo=0;function Ec(t){var i=Wo;return Wo+=1,Or===null&&(Or=[]),Hm(Or,t,i)}function qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function jm(t){function i(Y,V){if(t){var ne=Y.deletions;ne===null?(Y.deletions=[V],Y.flags|=16):ne.push(V)}}function s(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function f(Y,V){return Y=ma(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,ne){return Y.index=ne,t?(ne=Y.alternate,ne!==null?(ne=ne.index,ne<V?(Y.flags|=67108866,V):ne):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,V,ne,ge){return V===null||V.tag!==6?(V=Bf(ne,Y.mode,ge),V.return=Y,V):(V=f(V,ne),V.return=Y,V)}function I(Y,V,ne,ge){var Je=ne.type;return Je===T?me(Y,V,ne.props.children,ge,ne.key):V!==null&&(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&js(Je)===V.type)?(V=f(V,ne.props),qo(V,ne),V.return=Y,V):(V=_c(ne.type,ne.key,ne.props,null,Y.mode,ge),qo(V,ne),V.return=Y,V)}function ie(Y,V,ne,ge){return V===null||V.tag!==4||V.stateNode.containerInfo!==ne.containerInfo||V.stateNode.implementation!==ne.implementation?(V=Hf(ne,Y.mode,ge),V.return=Y,V):(V=f(V,ne.children||[]),V.return=Y,V)}function me(Y,V,ne,ge,Je){return V===null||V.tag!==7?(V=Is(ne,Y.mode,ge,Je),V.return=Y,V):(V=f(V,ne),V.return=Y,V)}function be(Y,V,ne){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Bf(""+V,Y.mode,ne),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return ne=_c(V.type,V.key,V.props,null,Y.mode,ne),qo(ne,V),ne.return=Y,ne;case M:return V=Hf(V,Y.mode,ne),V.return=Y,V;case K:return V=js(V),be(Y,V,ne)}if(Q(V)||ee(V))return V=Is(V,Y.mode,ne,null),V.return=Y,V;if(typeof V.then=="function")return be(Y,Ec(V),ne);if(V.$$typeof===U)return be(Y,bc(Y,V),ne);Tc(Y,V)}return null}function se(Y,V,ne,ge){var Je=V!==null?V.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return Je!==null?null:A(Y,V,""+ne,ge);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:return ne.key===Je?I(Y,V,ne,ge):null;case M:return ne.key===Je?ie(Y,V,ne,ge):null;case K:return ne=js(ne),se(Y,V,ne,ge)}if(Q(ne)||ee(ne))return Je!==null?null:me(Y,V,ne,ge,null);if(typeof ne.then=="function")return se(Y,V,Ec(ne),ge);if(ne.$$typeof===U)return se(Y,V,bc(Y,ne),ge);Tc(Y,ne)}return null}function ue(Y,V,ne,ge,Je){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return Y=Y.get(ne)||null,A(V,Y,""+ge,Je);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return Y=Y.get(ge.key===null?ne:ge.key)||null,I(V,Y,ge,Je);case M:return Y=Y.get(ge.key===null?ne:ge.key)||null,ie(V,Y,ge,Je);case K:return ge=js(ge),ue(Y,V,ne,ge,Je)}if(Q(ge)||ee(ge))return Y=Y.get(ne)||null,me(V,Y,ge,Je,null);if(typeof ge.then=="function")return ue(Y,V,ne,Ec(ge),Je);if(ge.$$typeof===U)return ue(Y,V,ne,bc(V,ge),Je);Tc(V,ge)}return null}function Xe(Y,V,ne,ge){for(var Je=null,Ft=null,Ye=V,vt=V=0,At=null;Ye!==null&&vt<ne.length;vt++){Ye.index>vt?(At=Ye,Ye=null):At=Ye.sibling;var It=se(Y,Ye,ne[vt],ge);if(It===null){Ye===null&&(Ye=At);break}t&&Ye&&It.alternate===null&&i(Y,Ye),V=h(It,V,vt),Ft===null?Je=It:Ft.sibling=It,Ft=It,Ye=At}if(vt===ne.length)return s(Y,Ye),Dt&&ga(Y,vt),Je;if(Ye===null){for(;vt<ne.length;vt++)Ye=be(Y,ne[vt],ge),Ye!==null&&(V=h(Ye,V,vt),Ft===null?Je=Ye:Ft.sibling=Ye,Ft=Ye);return Dt&&ga(Y,vt),Je}for(Ye=l(Ye);vt<ne.length;vt++)At=ue(Ye,Y,vt,ne[vt],ge),At!==null&&(t&&At.alternate!==null&&Ye.delete(At.key===null?vt:At.key),V=h(At,V,vt),Ft===null?Je=At:Ft.sibling=At,Ft=At);return t&&Ye.forEach(function(xs){return i(Y,xs)}),Dt&&ga(Y,vt),Je}function it(Y,V,ne,ge){if(ne==null)throw Error(a(151));for(var Je=null,Ft=null,Ye=V,vt=V=0,At=null,It=ne.next();Ye!==null&&!It.done;vt++,It=ne.next()){Ye.index>vt?(At=Ye,Ye=null):At=Ye.sibling;var xs=se(Y,Ye,It.value,ge);if(xs===null){Ye===null&&(Ye=At);break}t&&Ye&&xs.alternate===null&&i(Y,Ye),V=h(xs,V,vt),Ft===null?Je=xs:Ft.sibling=xs,Ft=xs,Ye=At}if(It.done)return s(Y,Ye),Dt&&ga(Y,vt),Je;if(Ye===null){for(;!It.done;vt++,It=ne.next())It=be(Y,It.value,ge),It!==null&&(V=h(It,V,vt),Ft===null?Je=It:Ft.sibling=It,Ft=It);return Dt&&ga(Y,vt),Je}for(Ye=l(Ye);!It.done;vt++,It=ne.next())It=ue(Ye,Y,vt,It.value,ge),It!==null&&(t&&It.alternate!==null&&Ye.delete(It.key===null?vt:It.key),V=h(It,V,vt),Ft===null?Je=It:Ft.sibling=It,Ft=It);return t&&Ye.forEach(function(ny){return i(Y,ny)}),Dt&&ga(Y,vt),Je}function Kt(Y,V,ne,ge){if(typeof ne=="object"&&ne!==null&&ne.type===T&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case y:e:{for(var Je=ne.key;V!==null;){if(V.key===Je){if(Je=ne.type,Je===T){if(V.tag===7){s(Y,V.sibling),ge=f(V,ne.props.children),ge.return=Y,Y=ge;break e}}else if(V.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===K&&js(Je)===V.type){s(Y,V.sibling),ge=f(V,ne.props),qo(ge,ne),ge.return=Y,Y=ge;break e}s(Y,V);break}else i(Y,V);V=V.sibling}ne.type===T?(ge=Is(ne.props.children,Y.mode,ge,ne.key),ge.return=Y,Y=ge):(ge=_c(ne.type,ne.key,ne.props,null,Y.mode,ge),qo(ge,ne),ge.return=Y,Y=ge)}return b(Y);case M:e:{for(Je=ne.key;V!==null;){if(V.key===Je)if(V.tag===4&&V.stateNode.containerInfo===ne.containerInfo&&V.stateNode.implementation===ne.implementation){s(Y,V.sibling),ge=f(V,ne.children||[]),ge.return=Y,Y=ge;break e}else{s(Y,V);break}else i(Y,V);V=V.sibling}ge=Hf(ne,Y.mode,ge),ge.return=Y,Y=ge}return b(Y);case K:return ne=js(ne),Kt(Y,V,ne,ge)}if(Q(ne))return Xe(Y,V,ne,ge);if(ee(ne)){if(Je=ee(ne),typeof Je!="function")throw Error(a(150));return ne=Je.call(ne),it(Y,V,ne,ge)}if(typeof ne.then=="function")return Kt(Y,V,Ec(ne),ge);if(ne.$$typeof===U)return Kt(Y,V,bc(Y,ne),ge);Tc(Y,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint"?(ne=""+ne,V!==null&&V.tag===6?(s(Y,V.sibling),ge=f(V,ne),ge.return=Y,Y=ge):(s(Y,V),ge=Bf(ne,Y.mode,ge),ge.return=Y,Y=ge),b(Y)):s(Y,V)}return function(Y,V,ne,ge){try{Wo=0;var Je=Kt(Y,V,ne,ge);return Or=null,Je}catch(Ye){if(Ye===Dr||Ye===Sc)throw Ye;var Ft=yi(29,Ye,null,Y.mode);return Ft.lanes=ge,Ft.return=Y,Ft}finally{}}}var Xs=jm(!0),km=jm(!1),ts=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ns(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function is(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=gc(t),Rm(t,null,s),i}return mc(t,l,i,s),gc(t)}function Yo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ls(t,s)}}function ed(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var td=!1;function $o(){if(td){var t=Cr;if(t!==null)throw t}}function Zo(t,i,s,l){td=!1;var f=t.updateQueue;ts=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var I=A,ie=I.next;I.next=null,b===null?h=ie:b.next=ie,b=I;var me=t.alternate;me!==null&&(me=me.updateQueue,A=me.lastBaseUpdate,A!==b&&(A===null?me.firstBaseUpdate=ie:A.next=ie,me.lastBaseUpdate=I))}if(h!==null){var be=f.baseState;b=0,me=ie=I=null,A=h;do{var se=A.lane&-536870913,ue=se!==A.lane;if(ue?(Tt&se)===se:(l&se)===se){se!==0&&se===wr&&(td=!0),me!==null&&(me=me.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Xe=t,it=A;se=i;var Kt=s;switch(it.tag){case 1:if(Xe=it.payload,typeof Xe=="function"){be=Xe.call(Kt,be,se);break e}be=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=it.payload,se=typeof Xe=="function"?Xe.call(Kt,be,se):Xe,se==null)break e;be=_({},be,se);break e;case 2:ts=!0}}se=A.callback,se!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=f.callbacks,ue===null?f.callbacks=[se]:ue.push(se))}else ue={lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},me===null?(ie=me=ue,I=be):me=me.next=ue,b|=se;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;ue=A,A=ue.next,ue.next=null,f.lastBaseUpdate=ue,f.shared.pending=null}}while(!0);me===null&&(I=be),f.baseState=I,f.firstBaseUpdate=ie,f.lastBaseUpdate=me,h===null&&(f.shared.lanes=0),ls|=b,t.lanes=b,t.memoizedState=be}}function Xm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Wm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Xm(s[t],i)}var Ur=D(null),Ac=D(0);function qm(t,i){t=Ra,Se(Ac,t),Se(Ur,i),Ra=t|i.baseLanes}function nd(){Se(Ac,Ra),Se(Ur,Ur.current)}function id(){Ra=Ac.current,oe(Ur),oe(Ac)}var Si=D(null),Fi=null;function as(t){var i=t.alternate;Se(vn,vn.current&1),Se(Si,t),Fi===null&&(i===null||Ur.current!==null||i.memoizedState!==null)&&(Fi=t)}function ad(t){Se(vn,vn.current),Se(Si,t),Fi===null&&(Fi=t)}function Ym(t){t.tag===22?(Se(vn,vn.current),Se(Si,t),Fi===null&&(Fi=t)):ss()}function ss(){Se(vn,vn.current),Se(Si,Si.current)}function Mi(t){oe(Si),Fi===t&&(Fi=null),oe(vn)}var vn=D(0);function Rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||uh(s)||fh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var va=0,gt=null,$t=null,An=null,wc=!1,Lr=!1,Ws=!1,Cc=0,Ko=0,Nr=null,W2=0;function mn(){throw Error(a(321))}function sd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!bi(t[s],i[s]))return!1;return!0}function rd(t,i,s,l,f,h){return va=h,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Og:yd,Ws=!1,h=s(l,f),Ws=!1,Lr&&(h=Zm(i,s,l,f)),$m(t),h}function $m(t){P.H=el;var i=$t!==null&&$t.next!==null;if(va=0,An=$t=gt=null,wc=!1,Ko=0,Nr=null,i)throw Error(a(300));t===null||Rn||(t=t.dependencies,t!==null&&vc(t)&&(Rn=!0))}function Zm(t,i,s,l){gt=t;var f=0;do{if(Lr&&(Nr=null),Ko=0,Lr=!1,25<=f)throw Error(a(301));if(f+=1,An=$t=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Ug,h=i(s,l)}while(Lr);return h}function q2(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],($t!==null?$t.memoizedState:null)!==t&&(gt.flags|=1024),i}function od(){var t=Cc!==0;return Cc=0,t}function ld(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cd(t){if(wc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}wc=!1}va=0,An=$t=gt=null,Lr=!1,Ko=Cc=0,Nr=null}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return An===null?gt.memoizedState=An=t:An=An.next=t,An}function bn(){if($t===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=An===null?gt.memoizedState:An.next;if(i!==null)An=i,$t=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},An===null?gt.memoizedState=An=t:An=An.next=t}return An}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=Ko;return Ko+=1,Nr===null&&(Nr=[]),t=Hm(Nr,t,i),i=gt,(An===null?i.memoizedState:An.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Og:yd),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===U)return Kn(t)}throw Error(a(438,String(t)))}function ud(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Dc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function ba(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=bn();return fd(i,$t,t)}function fd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var A=b=null,I=null,ie=i,me=!1;do{var be=ie.lane&-536870913;if(be!==ie.lane?(Tt&be)===be:(va&be)===be){var se=ie.revertLane;if(se===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null}),be===wr&&(me=!0);else if((va&se)===se){ie=ie.next,se===wr&&(me=!0);continue}else be={lane:0,revertLane:ie.revertLane,gesture:null,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},I===null?(A=I=be,b=h):I=I.next=be,gt.lanes|=se,ls|=se;be=ie.action,Ws&&s(h,be),h=ie.hasEagerState?ie.eagerState:s(h,be)}else se={lane:be,revertLane:ie.revertLane,gesture:ie.gesture,action:ie.action,hasEagerState:ie.hasEagerState,eagerState:ie.eagerState,next:null},I===null?(A=I=se,b=h):I=I.next=se,gt.lanes|=be,ls|=be;ie=ie.next}while(ie!==null&&ie!==i);if(I===null?b=h:I.next=A,!bi(h,t.memoizedState)&&(Rn=!0,me&&(s=Cr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=I,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function dd(t){var i=bn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);bi(h,i.memoizedState)||(Rn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Km(t,i,s){var l=gt,f=bn(),h=Dt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!bi(($t||f).memoizedState,s);if(b&&(f.memoizedState=s,Rn=!0),f=f.queue,md(eg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||An!==null&&An.memoizedState.tag&1){if(l.flags|=2048,Pr(9,{destroy:void 0},Jm.bind(null,l,f,s,i),null),en===null)throw Error(a(349));h||(va&127)!==0||Qm(l,i,s)}return s}function Qm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=Dc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Jm(t,i,s,l){i.value=s,i.getSnapshot=l,tg(i)&&ng(t)}function eg(t,i,s){return s(function(){tg(i)&&ng(t)})}function tg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!bi(t,s)}catch{return!0}}function ng(t){var i=Fs(t,2);i!==null&&pi(i,t,2)}function hd(t){var i=ai();if(typeof t=="function"){var s=t;if(t=s(),Ws){Ze(!0);try{s()}finally{Ze(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},i}function ig(t,i,s,l){return t.baseState=s,fd(t,$t,typeof l=="function"?l:ba)}function Y2(t,i,s,l,f){if(Pc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,ag(i,h)):(h.next=s.next,i.pending=s.next=h)}}function ag(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=P.T,b={};P.T=b;try{var A=s(f,l),I=P.S;I!==null&&I(b,A),sg(t,i,A)}catch(ie){pd(t,i,ie)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=s(f,l),sg(t,i,h)}catch(ie){pd(t,i,ie)}}function sg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){rg(t,i,l)},function(l){return pd(t,i,l)}):rg(t,i,s)}function rg(t,i,s){i.status="fulfilled",i.value=s,og(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,ag(t,s)))}function pd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,og(i),i=i.next;while(i!==l)}t.action=null}function og(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function lg(t,i){return i}function cg(t,i){if(Dt){var s=en.formState;if(s!==null){e:{var l=gt;if(Dt){if(sn){t:{for(var f=sn,h=zi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ii(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){sn=Ii(f.nextSibling),l=f.data==="F!";break e}}Ja(l)}l=!1}l&&(i=s[0])}}return s=ai(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:i},s.queue=l,s=wg.bind(null,gt,l),l.dispatch=s,l=hd(!1),h=bd.bind(null,gt,!1,l.queue),l=ai(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=Y2.bind(null,gt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function ug(t){var i=bn();return fg(i,$t,t)}function fg(t,i,s){if(i=fd(t,i,lg)[0],t=Uc(ba)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(b){throw b===Dr?Sc:b}else l=i;i=bn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Pr(9,{destroy:void 0},$2.bind(null,f,s),null)),[l,h,t]}function $2(t,i){t.action=i}function dg(t){var i=bn(),s=$t;if(s!==null)return fg(i,s,t);bn(),i=i.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Pr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=gt.updateQueue,i===null&&(i=Dc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function hg(){return bn().memoizedState}function Lc(t,i,s,l){var f=ai();gt.flags|=t,f.memoizedState=Pr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Nc(t,i,s,l){var f=bn();l=l===void 0?null:l;var h=f.memoizedState.inst;$t!==null&&l!==null&&sd(l,$t.memoizedState.deps)?f.memoizedState=Pr(i,h,s,l):(gt.flags|=t,f.memoizedState=Pr(1|i,h,s,l))}function pg(t,i){Lc(8390656,8,t,i)}function md(t,i){Nc(2048,8,t,i)}function Z2(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=Dc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function mg(t){var i=bn().memoizedState;return Z2({ref:i,nextImpl:t}),function(){if((Gt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function gg(t,i){return Nc(4,2,t,i)}function _g(t,i){return Nc(4,4,t,i)}function xg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vg(t,i,s){s=s!=null?s.concat([t]):null,Nc(4,4,xg.bind(null,i,t),s)}function gd(){}function bg(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&sd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function yg(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&sd(i,l[1]))return l[0];if(l=t(),Ws){Ze(!0);try{t()}finally{Ze(!1)}}return s.memoizedState=[l,i],l}function _d(t,i,s){return s===void 0||(va&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=S_(),gt.lanes|=t,ls|=t,s)}function Sg(t,i,s,l){return bi(s,i)?s:Ur.current!==null?(t=_d(t,s,l),bi(t,i)||(Rn=!0),t):(va&42)===0||(va&1073741824)!==0&&(Tt&261930)===0?(Rn=!0,t.memoizedState=s):(t=S_(),gt.lanes|=t,ls|=t,i)}function Mg(t,i,s,l,f){var h=k.p;k.p=h!==0&&8>h?h:8;var b=P.T,A={};P.T=A,bd(t,!1,i,s);try{var I=f(),ie=P.S;if(ie!==null&&ie(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var me=X2(I,l);Jo(t,i,me,Ai(t))}else Jo(t,i,l,Ai(t))}catch(be){Jo(t,i,{then:function(){},status:"rejected",reason:be},Ai())}finally{k.p=h,b!==null&&A.types!==null&&(b.types=A.types),P.T=b}}function K2(){}function xd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Eg(t).queue;Mg(t,f,i,W,s===null?K2:function(){return Tg(t),s(l)})}function Eg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:W},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Tg(t){var i=Eg(t);i.next===null&&(i=t.alternate.memoizedState),Jo(t,i.next.queue,{},Ai())}function vd(){return Kn(gl)}function Ag(){return bn().memoizedState}function Rg(){return bn().memoizedState}function Q2(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ai();t=ns(s);var l=is(i,t,s);l!==null&&(pi(l,i,s),Yo(l,i,s)),i={cache:Yf()},t.payload=i;return}i=i.return}}function J2(t,i,s){var l=Ai();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?Cg(i,s):(s=Ff(t,i,s,l),s!==null&&(pi(s,t,l),Dg(s,i,l)))}function wg(t,i,s){var l=Ai();Jo(t,i,s,l)}function Jo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))Cg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,A=h(b,s);if(f.hasEagerState=!0,f.eagerState=A,bi(A,b))return mc(t,i,f,0),en===null&&pc(),!1}catch{}finally{}if(s=Ff(t,i,f,l),s!==null)return pi(s,t,l),Dg(s,i,l),!0}return!1}function bd(t,i,s,l){if(l={lane:2,revertLane:Qd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(i)throw Error(a(479))}else i=Ff(t,s,l,2),i!==null&&pi(i,t,2)}function Pc(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function Cg(t,i){Lr=wc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Dg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ls(t,s)}}var el={readContext:Kn,use:Oc,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useLayoutEffect:mn,useInsertionEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useSyncExternalStore:mn,useId:mn,useHostTransitionStatus:mn,useFormState:mn,useActionState:mn,useOptimistic:mn,useMemoCache:mn,useCacheRefresh:mn};el.useEffectEvent=mn;var Og={readContext:Kn,use:Oc,useCallback:function(t,i){return ai().memoizedState=[t,i===void 0?null:i],t},useContext:Kn,useEffect:pg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Lc(4194308,4,xg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Lc(4194308,4,t,i)},useInsertionEffect:function(t,i){Lc(4,2,t,i)},useMemo:function(t,i){var s=ai();i=i===void 0?null:i;var l=t();if(Ws){Ze(!0);try{t()}finally{Ze(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=ai();if(s!==void 0){var f=s(i);if(Ws){Ze(!0);try{s(i)}finally{Ze(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=J2.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var i=ai();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,s=wg.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:gd,useDeferredValue:function(t,i){var s=ai();return _d(s,t,i)},useTransition:function(){var t=hd(!1);return t=Mg.bind(null,gt,t.queue,!0,!1),ai().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=gt,f=ai();if(Dt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),en===null)throw Error(a(349));(Tt&127)!==0||Qm(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,pg(eg.bind(null,l,h,t),[t]),l.flags|=2048,Pr(9,{destroy:void 0},Jm.bind(null,l,h,s,i),null),s},useId:function(){var t=ai(),i=en.identifierPrefix;if(Dt){var s=sa,l=aa;s=(l&~(1<<32-je(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=W2++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:vd,useFormState:cg,useActionState:cg,useOptimistic:function(t){var i=ai();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=bd.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:ud,useCacheRefresh:function(){return ai().memoizedState=Q2.bind(null,gt)},useEffectEvent:function(t){var i=ai(),s={impl:t};return i.memoizedState=s,function(){if((Gt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yd={readContext:Kn,use:Oc,useCallback:bg,useContext:Kn,useEffect:md,useImperativeHandle:vg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:yg,useReducer:Uc,useRef:hg,useState:function(){return Uc(ba)},useDebugValue:gd,useDeferredValue:function(t,i){var s=bn();return Sg(s,$t.memoizedState,t,i)},useTransition:function(){var t=Uc(ba)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Km,useId:Ag,useHostTransitionStatus:vd,useFormState:ug,useActionState:ug,useOptimistic:function(t,i){var s=bn();return ig(s,$t,t,i)},useMemoCache:ud,useCacheRefresh:Rg};yd.useEffectEvent=mg;var Ug={readContext:Kn,use:Oc,useCallback:bg,useContext:Kn,useEffect:md,useImperativeHandle:vg,useInsertionEffect:gg,useLayoutEffect:_g,useMemo:yg,useReducer:dd,useRef:hg,useState:function(){return dd(ba)},useDebugValue:gd,useDeferredValue:function(t,i){var s=bn();return $t===null?_d(s,t,i):Sg(s,$t.memoizedState,t,i)},useTransition:function(){var t=dd(ba)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Km,useId:Ag,useHostTransitionStatus:vd,useFormState:dg,useActionState:dg,useOptimistic:function(t,i){var s=bn();return $t!==null?ig(s,$t,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Rg};Ug.useEffectEvent=mg;function Sd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Md={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=ns(l);f.payload=i,s!=null&&(f.callback=s),i=is(t,f,l),i!==null&&(pi(i,t,l),Yo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=ns(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=is(t,f,l),i!==null&&(pi(i,t,l),Yo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ai(),l=ns(s);l.tag=2,i!=null&&(l.callback=i),i=is(t,l,s),i!==null&&(pi(i,t,s),Yo(i,t,s))}};function Lg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function Ng(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Md.enqueueReplaceState(i,i.state,null)}function qs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Pg(t){hc(t)}function zg(t){console.error(t)}function Fg(t){hc(t)}function zc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Ig(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ed(t,i,s){return s=ns(s),s.tag=3,s.payload={element:null},s.callback=function(){zc(t,i)},s}function Bg(t){return t=ns(t),t.tag=3,t}function Hg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Ig(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Ig(i,s,l),typeof f!="function"&&(cs===null?cs=new Set([this]):cs.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function e1(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return Fi===null?Yc():s.alternate===null&&gn===0&&(gn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),$d(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),$d(t,l,f)),!1}throw Error(a(435,s.tag))}return $d(t,l,f),Yc(),!1}if(Dt)return i=Si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jf&&(t=Error(a(422),{cause:l}),jo(Li(t,s)))):(l!==jf&&(i=Error(a(423),{cause:l}),jo(Li(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Li(l,s),f=Ed(t.stateNode,l,f),ed(t,f),gn!==4&&(gn=2)),!1;var h=Error(a(520),{cause:l});if(h=Li(h,s),ll===null?ll=[h]:ll.push(h),gn!==4&&(gn=2),i===null)return!0;l=Li(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Ed(s.stateNode,l,t),ed(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cs===null||!cs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Bg(f),Hg(f,t,s,l),ed(s,f),!1}s=s.return}while(s!==null);return!1}var Td=Error(a(461)),Rn=!1;function Qn(t,i,s,l){i.child=t===null?km(i,null,s,l):Xs(i,t.child,s,l)}function Gg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var A in l)A!=="ref"&&(b[A]=l[A])}else b=l;return Gs(i),l=rd(t,i,s,b,h,f),A=od(),t!==null&&!Rn?(ld(t,i,f),ya(t,i,f)):(Dt&&A&&Gf(i),i.flags|=1,Qn(t,i,l,f),i.child)}function Vg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!If(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,jg(t,i,h,l,f)):(t=_c(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Ld(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(b,l)&&t.ref===i.ref)return ya(t,i,f)}return i.flags|=1,t=ma(h,l),t.ref=i.ref,t.return=i,i.child=t}function jg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===i.ref)if(Rn=!1,i.pendingProps=l=h,Ld(t,f))(t.flags&131072)!==0&&(Rn=!0);else return i.lanes=t.lanes,ya(t,i,f)}return Ad(t,i,s,l,f)}function kg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Xg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(i,h!==null?h.cachePool:null),h!==null?qm(i,h):nd(),Ym(i);else return l=i.lanes=536870912,Xg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(yc(i,h.cachePool),qm(i,h),ss(),i.memoizedState=null):(t!==null&&yc(i,null),nd(),ss());return Qn(t,i,f,s),i.child}function tl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Xg(t,i,s,l,f){var h=Zf();return h=h===null?null:{parent:Tn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&yc(i,null),nd(),Ym(i),t!==null&&Rr(t,i,l,!0),i.childLanes=f,null}function Fc(t,i){return i=Bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Wg(t,i,s){return Xs(i,t.child,null,s),t=Fc(i,i.pendingProps),t.flags|=2,Mi(i),i.memoizedState=null,t}function t1(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=Fc(i,l),i.lanes=536870912,tl(null,t);if(ad(i),(t=sn)?(t=ax(t,zi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=i,i.child=s,Zn=i,sn=null)):t=null,t===null)throw Ja(i);return i.lanes=536870912,null}return Fc(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(ad(i),f)if(i.flags&256)i.flags&=-257,i=Wg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Rn||Rr(t,i,s,!1),f=(s&t.childLanes)!==0,Rn||f){if(l=en,l!==null&&(b=Wa(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Fs(t,b),pi(l,t,b),Td;Yc(),i=Wg(t,i,s)}else t=h.treeContext,sn=Ii(b.nextSibling),Zn=i,Dt=!0,Qa=null,zi=!1,t!==null&&Um(i,t),i=Fc(i,l),i.flags|=4096;return i}return t=ma(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Ic(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ad(t,i,s,l,f){return Gs(i),s=rd(t,i,s,l,void 0,f),l=od(),t!==null&&!Rn?(ld(t,i,f),ya(t,i,f)):(Dt&&l&&Gf(i),i.flags|=1,Qn(t,i,s,f),i.child)}function qg(t,i,s,l,f,h){return Gs(i),i.updateQueue=null,s=Zm(i,l,s,f),$m(t),l=od(),t!==null&&!Rn?(ld(t,i,h),ya(t,i,h)):(Dt&&l&&Gf(i),i.flags|=1,Qn(t,i,s,h),i.child)}function Yg(t,i,s,l,f){if(Gs(i),i.stateNode===null){var h=Mr,b=s.contextType;typeof b=="object"&&b!==null&&(h=Kn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Md,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Qf(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?Kn(b):Mr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Sd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Md.enqueueReplaceState(h,h.state,null),Zo(i,l,h,f),$o(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var A=i.memoizedProps,I=qs(s,A);h.props=I;var ie=h.context,me=s.contextType;b=Mr,typeof me=="object"&&me!==null&&(b=Kn(me));var be=s.getDerivedStateFromProps;me=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ie!==b)&&Ng(i,h,l,b),ts=!1;var se=i.memoizedState;h.state=se,Zo(i,l,h,f),$o(),ie=i.memoizedState,A||se!==ie||ts?(typeof be=="function"&&(Sd(i,s,be,l),ie=i.memoizedState),(I=ts||Lg(i,s,I,l,se,ie,b))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ie),h.props=l,h.state=ie,h.context=b,l=I):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Jf(t,i),b=i.memoizedProps,me=qs(s,b),h.props=me,be=i.pendingProps,se=h.context,ie=s.contextType,I=Mr,typeof ie=="object"&&ie!==null&&(I=Kn(ie)),A=s.getDerivedStateFromProps,(ie=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==be||se!==I)&&Ng(i,h,l,I),ts=!1,se=i.memoizedState,h.state=se,Zo(i,l,h,f),$o();var ue=i.memoizedState;b!==be||se!==ue||ts||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof A=="function"&&(Sd(i,s,A,l),ue=i.memoizedState),(me=ts||Lg(i,s,me,l,se,ue,I)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(ie||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ue,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ue,I)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ue),h.props=l,h.state=ue,h.context=I,l=me):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Ic(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Xs(i,t.child,null,f),i.child=Xs(i,null,s,f)):Qn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ya(t,i,f),t}function $g(t,i,s,l){return Bs(),i.flags|=256,Qn(t,i,s,l),i.child}var Rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(t){return{baseLanes:t,cachePool:Im()}}function Cd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ti),t}function Zg(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(f?as(i):ss(),(t=sn)?(t=ax(t,zi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ka!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=Cm(t),s.return=i,i.child=s,Zn=i,sn=null)):t=null,t===null)throw Ja(i);return fh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(ss(),f=i.mode,A=Bc({mode:"hidden",children:A},f),l=Is(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(null,l)):(as(i),Dd(i,A))}var I=t.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)i.flags&256?(as(i),i.flags&=-257,i=Od(t,i,s)):i.memoizedState!==null?(ss(),i.child=t.child,i.flags|=128,i=null):(ss(),A=l.fallback,f=i.mode,l=Bc({mode:"visible",children:l.children},f),A=Is(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Xs(i,t.child,null,s),l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,i=tl(null,l));else if(as(i),fh(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var ie=b.dgst;b=ie,l=Error(a(419)),l.stack="",l.digest=b,jo({value:l,source:null,stack:null}),i=Od(t,i,s)}else if(Rn||Rr(t,i,s,!1),b=(s&t.childLanes)!==0,Rn||b){if(b=en,b!==null&&(l=Wa(b,s),l!==0&&l!==I.retryLane))throw I.retryLane=l,Fs(t,l),pi(b,t,l),Td;uh(A)||Yc(),i=Od(t,i,s)}else uh(A)?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,sn=Ii(A.nextSibling),Zn=i,Dt=!0,Qa=null,zi=!1,t!==null&&Um(i,t),i=Dd(i,l.children),i.flags|=4096);return i}return f?(ss(),A=l.fallback,f=i.mode,I=t.child,ie=I.sibling,l=ma(I,{mode:"hidden",children:l.children}),l.subtreeFlags=I.subtreeFlags&65011712,ie!==null?A=ma(ie,A):(A=Is(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,tl(null,l),l=i.child,A=t.child.memoizedState,A===null?A=wd(s):(f=A.cachePool,f!==null?(I=Tn._currentValue,f=f.parent!==I?{parent:I,pool:I}:f):f=Im(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(t.child,l)):(as(i),s=t.child,t=s.sibling,s=ma(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Dd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=yi(22,t,null,i),t.lanes=0,t}function Od(t,i,s){return Xs(i,t.child,null,s),t=Dd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Kg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Wf(t.return,i,s)}function Ud(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function Qg(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=vn.current,A=(b&2)!==0;if(A?(b=b&1|2,i.flags|=128):b&=1,Se(vn,b),Qn(t,i,l,s),l=Dt?Vo:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kg(t,s,i);else if(t.tag===19)Kg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ud(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ud(i,!0,s,null,h,l);break;case"together":Ud(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ya(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ls|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=ma(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=ma(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ld(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function n1(t,i,s){switch(i.tag){case 3:Ue(i,i.stateNode.containerInfo),es(i,Tn,t.memoizedState.cache),Bs();break;case 27:case 5:We(i);break;case 4:Ue(i,i.stateNode.containerInfo);break;case 10:es(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ad(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(as(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Zg(t,i,s):(as(i),t=ya(t,i,s),t!==null?t.sibling:null);as(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Rr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Qg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(vn,vn.current),l)break;return null;case 22:return i.lanes=0,kg(t,i,s,i.pendingProps);case 24:es(i,Tn,t.memoizedState.cache)}return ya(t,i,s)}function Jg(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Rn=!0;else{if(!Ld(t,s)&&(i.flags&128)===0)return Rn=!1,n1(t,i,s);Rn=(t.flags&131072)!==0}else Rn=!1,Dt&&(i.flags&1048576)!==0&&Om(i,Vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=js(i.elementType),i.type=t,typeof t=="function")If(t)?(l=qs(t,l),i.tag=1,i=Yg(null,i,t,l,s)):(i.tag=0,i=Ad(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===F){i.tag=11,i=Gg(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=Vg(null,i,t,l,s);break e}}throw i=_e(t)||t,Error(a(306,i,""))}}return i;case 0:return Ad(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=qs(l,i.pendingProps),Yg(t,i,l,f,s);case 3:e:{if(Ue(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Jf(t,i),Zo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,es(i,Tn,l),l!==h.cache&&qf(i,[Tn],s,!0),$o(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=$g(t,i,l,s);break e}else if(l!==f){f=Li(Error(a(424)),i),jo(f),i=$g(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(sn=Ii(t.firstChild),Zn=i,Dt=!0,Qa=null,zi=!0,s=km(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Bs(),l===f){i=ya(t,i,s);break e}Qn(t,i,l,s)}i=i.child}return i;case 26:return Ic(t,i),t===null?(s=ux(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,l=tu(re.current).createElement(s),l[ct]=i,l[St]=t,Jn(l,s,t),J(l),i.stateNode=l):i.memoizedState=ux(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return We(i),t===null&&Dt&&(l=i.stateNode=ox(i.type,i.pendingProps,re.current),Zn=i,zi=!0,f=sn,hs(i.type)?(dh=f,sn=Ii(l.firstChild)):sn=f),Qn(t,i,i.pendingProps.children,s),Ic(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((f=l=sn)&&(l=U1(l,i.type,i.pendingProps,zi),l!==null?(i.stateNode=l,Zn=i,sn=Ii(l.firstChild),zi=!1,f=!0):f=!1),f||Ja(i)),We(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,oh(f,h)?l=null:b!==null&&oh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=rd(t,i,q2,null,null,s),gl._currentValue=f),Ic(t,i),Qn(t,i,l,s),i.child;case 6:return t===null&&Dt&&((t=s=sn)&&(s=L1(s,i.pendingProps,zi),s!==null?(i.stateNode=s,Zn=i,sn=null,t=!0):t=!1),t||Ja(i)),null;case 13:return Zg(t,i,s);case 4:return Ue(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Xs(i,null,l,s):Qn(t,i,l,s),i.child;case 11:return Gg(t,i,i.type,i.pendingProps,s);case 7:return Qn(t,i,i.pendingProps,s),i.child;case 8:return Qn(t,i,i.pendingProps.children,s),i.child;case 12:return Qn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,es(i,i.type,l.value),Qn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Gs(i),f=Kn(f),l=l(f),i.flags|=1,Qn(t,i,l,s),i.child;case 14:return Vg(t,i,i.type,i.pendingProps,s);case 15:return jg(t,i,i.type,i.pendingProps,s);case 19:return Qg(t,i,s);case 31:return t1(t,i,s);case 22:return kg(t,i,s,i.pendingProps);case 24:return Gs(i),l=Kn(Tn),t===null?(f=Zf(),f===null&&(f=en,h=Yf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Qf(i),es(i,Tn,f)):((t.lanes&s)!==0&&(Jf(t,i),Zo(i,null,null,s),$o()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),es(i,Tn,l)):(l=h.cache,es(i,Tn,l),l!==f.cache&&qf(i,[Tn],s,!0))),Qn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Sa(t){t.flags|=4}function Nd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(A_())t.flags|=8192;else throw ks=Mc,Kf}else t.flags&=-16777217}function e_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!mx(i))if(A_())t.flags|=8192;else throw ks=Mc,Kf}function Hc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ht():536870912,t.lanes|=i,Br|=i)}function nl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function rn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function i1(t,i,s){var l=i.pendingProps;switch(Vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(i),null;case 1:return rn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),xa(Tn),Ve(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ar(i)?Sa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kf())),rn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Sa(i),h!==null?(rn(i),e_(i,h)):(rn(i),Nd(i,f,null,l,s))):h?h!==t.memoizedState?(Sa(i),rn(i),e_(i,h)):(rn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Sa(i),rn(i),Nd(i,f,t,l,s)),null;case 27:if(dt(i),s=re.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}t=Te.current,Ar(i)?Lm(i):(t=ox(f,l,s),i.stateNode=t,Sa(i))}return rn(i),null;case 5:if(dt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Sa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return rn(i),null}if(h=Te.current,Ar(i))Lm(i);else{var b=tu(re.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[ct]=i,h[St]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Jn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Sa(i)}}return rn(i),Nd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Sa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=re.current,Ar(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Zn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[ct]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Z_(t.nodeValue,s)),t||Ja(i,!0)}else t=tu(t).createTextNode(l),t[ct]=i,i.stateNode=t}return rn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ar(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[ct]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),t=!1}else s=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return rn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ar(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[ct]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;rn(i),f=!1}else f=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Hc(i,i.updateQueue),rn(i),null);case 4:return Ve(),t===null&&nh(i.stateNode.containerInfo),rn(i),null;case 10:return xa(i.type),rn(i),null;case 19:if(oe(vn),l=i.memoizedState,l===null)return rn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(gn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Rc(t),h!==null){for(i.flags|=128,nl(l,!1),t=h.updateQueue,i.updateQueue=t,Hc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)wm(s,t),s=s.sibling;return Se(vn,vn.current&1|2),Dt&&ga(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>Xc&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Rc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Hc(i,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Dt)return rn(i),null}else 2*E()-l.renderingStartTime>Xc&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=vn.current,Se(vn,f?s&1|2:s&1),Dt&&ga(i,l.treeForkCount),t):(rn(i),null);case 22:case 23:return Mi(i),id(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(rn(i),i.subtreeFlags&6&&(i.flags|=8192)):rn(i),s=i.updateQueue,s!==null&&Hc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&oe(Vs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),xa(Tn),rn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function a1(t,i){switch(Vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return xa(Tn),Ve(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Mi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return oe(vn),null;case 4:return Ve(),null;case 10:return xa(i.type),null;case 22:case 23:return Mi(i),id(),t!==null&&oe(Vs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return xa(Tn),null;case 25:return null;default:return null}}function t_(t,i){switch(Vf(i),i.tag){case 3:xa(Tn),Ve();break;case 26:case 27:case 5:dt(i);break;case 4:Ve();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:oe(vn);break;case 10:xa(i.type);break;case 22:case 23:Mi(i),id(),t!==null&&oe(Vs);break;case 24:xa(Tn)}}function il(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(A){qt(i,i.return,A)}}function rs(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,f=i;var I=s,ie=A;try{ie()}catch(me){qt(f,I,me)}}}l=l.next}while(l!==h)}}catch(me){qt(i,i.return,me)}}function n_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Wm(i,s)}catch(l){qt(t,t.return,l)}}}function i_(t,i,s){s.props=qs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){qt(t,i,l)}}function al(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){qt(t,i,f)}}function ra(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){qt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){qt(t,i,f)}else s.current=null}function a_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){qt(t,t.return,f)}}function Pd(t,i,s){try{var l=t.stateNode;A1(l,t.type,s,i),l[St]=i}catch(f){qt(t,t.return,f)}}function s_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&hs(t.type)||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&hs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=ha));else if(l!==4&&(l===27&&hs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Fd(t,i,s),t=t.sibling;t!==null;)Fd(t,i,s),t=t.sibling}function Gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&hs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Gc(t,i,s),t=t.sibling;t!==null;)Gc(t,i,s),t=t.sibling}function r_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Jn(i,l,s),i[ct]=t,i[St]=s}catch(h){qt(t,t.return,h)}}var Ma=!1,wn=!1,Id=!1,o_=typeof WeakSet=="function"?WeakSet:Set,jn=null;function s1(t,i){if(t=t.containerInfo,sh=lu,t=vm(t),Of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,A=-1,I=-1,ie=0,me=0,be=t,se=null;t:for(;;){for(var ue;be!==s||f!==0&&be.nodeType!==3||(A=b+f),be!==h||l!==0&&be.nodeType!==3||(I=b+l),be.nodeType===3&&(b+=be.nodeValue.length),(ue=be.firstChild)!==null;)se=be,be=ue;for(;;){if(be===t)break t;if(se===s&&++ie===f&&(A=b),se===h&&++me===l&&(I=b),(ue=be.nextSibling)!==null)break;be=se,se=be.parentNode}be=ue}s=A===-1||I===-1?null:{start:A,end:I}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},lu=!1,jn=i;jn!==null;)if(i=jn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,jn=t;else for(;jn!==null;){switch(i=jn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Xe=qs(s.type,f);t=l.getSnapshotBeforeUpdate(Xe,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(it){qt(s,s.return,it)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ch(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,jn=t;break}jn=i.return}}function l_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ta(t,s),l&4&&il(5,s);break;case 1:if(Ta(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){qt(s,s.return,b)}else{var f=qs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){qt(s,s.return,b)}}l&64&&n_(s),l&512&&al(s,s.return);break;case 3:if(Ta(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Wm(t,i)}catch(b){qt(s,s.return,b)}}break;case 27:i===null&&l&4&&r_(s);case 26:case 5:Ta(t,s),i===null&&l&4&&a_(s),l&512&&al(s,s.return);break;case 12:Ta(t,s);break;case 31:Ta(t,s),l&4&&f_(t,s);break;case 13:Ta(t,s),l&4&&d_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=p1.bind(null,s),N1(t,s))));break;case 22:if(l=s.memoizedState!==null||Ma,!l){i=i!==null&&i.memoizedState!==null||wn,f=Ma;var h=wn;Ma=l,(wn=i)&&!h?Aa(t,s,(s.subtreeFlags&8772)!==0):Ta(t,s),Ma=f,wn=h}break;case 30:break;default:Ta(t,s)}}function c_(t){var i=t.alternate;i!==null&&(t.alternate=null,c_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&_t(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var un=null,ui=!1;function Ea(t,i,s){for(s=s.child;s!==null;)u_(t,i,s),s=s.sibling}function u_(t,i,s){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ye,s)}catch{}switch(s.tag){case 26:wn||ra(s,i),Ea(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:wn||ra(s,i);var l=un,f=ui;hs(s.type)&&(un=s.stateNode,ui=!1),Ea(t,i,s),hl(s.stateNode),un=l,ui=f;break;case 5:wn||ra(s,i);case 6:if(l=un,f=ui,un=null,Ea(t,i,s),un=l,ui=f,un!==null)if(ui)try{(un.nodeType===9?un.body:un.nodeName==="HTML"?un.ownerDocument.body:un).removeChild(s.stateNode)}catch(h){qt(s,i,h)}else try{un.removeChild(s.stateNode)}catch(h){qt(s,i,h)}break;case 18:un!==null&&(ui?(t=un,nx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),qr(t)):nx(un,s.stateNode));break;case 4:l=un,f=ui,un=s.stateNode.containerInfo,ui=!0,Ea(t,i,s),un=l,ui=f;break;case 0:case 11:case 14:case 15:rs(2,s,i),wn||rs(4,s,i),Ea(t,i,s);break;case 1:wn||(ra(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&i_(s,i,l)),Ea(t,i,s);break;case 21:Ea(t,i,s);break;case 22:wn=(l=wn)||s.memoizedState!==null,Ea(t,i,s),wn=l;break;default:Ea(t,i,s)}}function f_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(s){qt(i,i.return,s)}}}function d_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(s){qt(i,i.return,s)}}function r1(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new o_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new o_),i;default:throw Error(a(435,t.tag))}}function Vc(t,i){var s=r1(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=m1.bind(null,t,l);l.then(f,f)}})}function fi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(hs(A.type)){un=A.stateNode,ui=!1;break e}break;case 5:un=A.stateNode,ui=!1;break e;case 3:case 4:un=A.stateNode.containerInfo,ui=!0;break e}A=A.return}if(un===null)throw Error(a(160));u_(h,b,f),un=null,ui=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)h_(i,t),i=i.sibling}var Wi=null;function h_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:fi(i,t),di(t),l&4&&(rs(3,t,t.return),il(3,t),rs(5,t,t.return));break;case 1:fi(i,t),di(t),l&512&&(wn||s===null||ra(s,s.return)),l&64&&Ma&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Wi;if(fi(i,t),di(t),l&512&&(wn||s===null||ra(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[ot]||h[ct]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Jn(h,l,s),h[ct]=t,J(h),l=h;break e;case"link":var b=hx("link","href",f).get(l+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(h=b[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}h=f.createElement(l),Jn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=hx("meta","content",f).get(l+(s.content||""))){for(A=0;A<b.length;A++)if(h=b[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}h=f.createElement(l),Jn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[ct]=t,J(h),l=h}t.stateNode=l}else px(f,t.type,t.stateNode);else t.stateNode=dx(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?px(f,t.type,t.stateNode):dx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps)}break;case 27:fi(i,t),di(t),l&512&&(wn||s===null||ra(s,s.return)),s!==null&&l&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(fi(i,t),di(t),l&512&&(wn||s===null||ra(s,s.return)),t.flags&32){f=t.stateNode;try{ia(f,"")}catch(Xe){qt(t,t.return,Xe)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Id=!0);break;case 6:if(fi(i,t),di(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Xe){qt(t,t.return,Xe)}}break;case 3:if(au=null,f=Wi,Wi=nu(i.containerInfo),fi(i,t),Wi=f,di(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(i.containerInfo)}catch(Xe){qt(t,t.return,Xe)}Id&&(Id=!1,p_(t));break;case 4:l=Wi,Wi=nu(t.stateNode.containerInfo),fi(i,t),di(t),Wi=l;break;case 12:fi(i,t),di(t);break;case 31:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:fi(i,t),di(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var I=s!==null&&s.memoizedState!==null,ie=Ma,me=wn;if(Ma=ie||f,wn=me||I,fi(i,t),wn=me,Ma=ie,di(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||I||Ma||wn||Ys(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){I=s=i;try{if(h=I.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=I.stateNode;var be=I.memoizedProps.style,se=be!=null&&be.hasOwnProperty("display")?be.display:null;A.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Xe){qt(I,I.return,Xe)}}}else if(i.tag===6){if(s===null){I=i;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(Xe){qt(I,I.return,Xe)}}}else if(i.tag===18){if(s===null){I=i;try{var ue=I.stateNode;f?ix(ue,!0):ix(I.stateNode,!1)}catch(Xe){qt(I,I.return,Xe)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:fi(i,t),di(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:fi(i,t),di(t)}}function di(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(s_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=zd(t);Gc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(ia(b,""),s.flags&=-33);var A=zd(t);Gc(t,A,b);break;case 3:case 4:var I=s.stateNode.containerInfo,ie=zd(t);Fd(t,ie,I);break;default:throw Error(a(161))}}catch(me){qt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function p_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;p_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ta(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)l_(t,i.alternate,i),i=i.sibling}function Ys(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:rs(4,i,i.return),Ys(i);break;case 1:ra(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&i_(i,i.return,s),Ys(i);break;case 27:hl(i.stateNode);case 26:case 5:ra(i,i.return),Ys(i);break;case 22:i.memoizedState===null&&Ys(i);break;case 30:Ys(i);break;default:Ys(i)}t=t.sibling}}function Aa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Aa(f,h,s),il(4,h);break;case 1:if(Aa(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ie){qt(l,l.return,ie)}if(l=h,f=l.updateQueue,f!==null){var A=l.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)Xm(I[f],A)}catch(ie){qt(l,l.return,ie)}}s&&b&64&&n_(h),al(h,h.return);break;case 27:r_(h);case 26:case 5:Aa(f,h,s),s&&l===null&&b&4&&a_(h),al(h,h.return);break;case 12:Aa(f,h,s);break;case 31:Aa(f,h,s),s&&b&4&&f_(f,h);break;case 13:Aa(f,h,s),s&&b&4&&d_(f,h);break;case 22:h.memoizedState===null&&Aa(f,h,s),al(h,h.return);break;case 30:break;default:Aa(f,h,s)}i=i.sibling}}function Bd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ko(s))}function Hd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t))}function qi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)m_(t,i,s,l),i=i.sibling}function m_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:qi(t,i,s,l),f&2048&&il(9,i);break;case 1:qi(t,i,s,l);break;case 3:qi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t)));break;case 12:if(f&2048){qi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,A=h.onPostCommit;typeof A=="function"&&A(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){qt(i,i.return,I)}}else qi(t,i,s,l);break;case 31:qi(t,i,s,l);break;case 13:qi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?qi(t,i,s,l):sl(t,i):h._visibility&2?qi(t,i,s,l):(h._visibility|=2,zr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Bd(b,i);break;case 24:qi(t,i,s,l),f&2048&&Hd(i.alternate,i);break;default:qi(t,i,s,l)}}function zr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,A=s,I=l,ie=b.flags;switch(b.tag){case 0:case 11:case 15:zr(h,b,A,I,f),il(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?zr(h,b,A,I,f):sl(h,b):(me._visibility|=2,zr(h,b,A,I,f)),f&&ie&2048&&Bd(b.alternate,b);break;case 24:zr(h,b,A,I,f),f&&ie&2048&&Hd(b.alternate,b);break;default:zr(h,b,A,I,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Bd(l.alternate,l);break;case 24:sl(s,l),f&2048&&Hd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Fr(t,i,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)g_(t,i,s),t=t.sibling}function g_(t,i,s){switch(t.tag){case 26:Fr(t,i,s),t.flags&rl&&t.memoizedState!==null&&W1(s,Wi,t.memoizedState,t.memoizedProps);break;case 5:Fr(t,i,s);break;case 3:case 4:var l=Wi;Wi=nu(t.stateNode.containerInfo),Fr(t,i,s),Wi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Fr(t,i,s),rl=l):Fr(t,i,s));break;default:Fr(t,i,s)}}function __(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ol(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];jn=l,v_(l,t)}__(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x_(t),t=t.sibling}function x_(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&rs(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,jc(t)):ol(t);break;default:ol(t)}}function jc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];jn=l,v_(l,t)}__(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:rs(8,i,i.return),jc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,jc(i));break;default:jc(i)}t=t.sibling}}function v_(t,i){for(;jn!==null;){var s=jn;switch(s.tag){case 0:case 11:case 15:rs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,jn=l;else e:for(s=t;jn!==null;){l=jn;var f=l.sibling,h=l.return;if(c_(l),l===s){jn=null;break e}if(f!==null){f.return=h,jn=f;break e}jn=h}}}var o1={getCacheForType:function(t){var i=Kn(Tn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Kn(Tn).controller.signal}},l1=typeof WeakMap=="function"?WeakMap:Map,Gt=0,en=null,Mt=null,Tt=0,Wt=0,Ei=null,os=!1,Ir=!1,Gd=!1,Ra=0,gn=0,ls=0,$s=0,Vd=0,Ti=0,Br=0,ll=null,hi=null,jd=!1,kc=0,b_=0,Xc=1/0,Wc=null,cs=null,Un=0,us=null,Hr=null,wa=0,kd=0,Xd=null,y_=null,cl=0,Wd=null;function Ai(){return(Gt&2)!==0&&Tt!==0?Tt&-Tt:P.T!==null?Qd():qa()}function S_(){if(Ti===0)if((Tt&536870912)===0||Dt){var t=we;we<<=1,(we&3932160)===0&&(we=262144),Ti=t}else Ti=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ti}function pi(t,i,s){(t===en&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),fs(t,Tt,Ti,!1)),Dn(t,s),((Gt&2)===0||t!==en)&&(t===en&&((Gt&2)===0&&($s|=s),gn===4&&fs(t,Tt,Ti,!1)),oa(t))}function M_(t,i,s){if((Gt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Ie(t,i),f=l?f1(t,i):Yd(t,i,!0),h=l;do{if(f===0){Ir&&!l&&fs(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!c1(s)){f=Yd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var A=t;f=ll;var I=A.current.memoizedState.isDehydrated;if(I&&(Gr(A,b).flags|=256),b=Yd(A,b,!1),b!==2){if(Gd&&!I){A.errorRecoveryDisabledLanes|=h,$s|=h,f=4;break e}h=hi,hi=f,h!==null&&(hi===null?hi=h:hi.push.apply(hi,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Gr(t,0),fs(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:fs(l,i,Ti,!os);break e;case 2:hi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kc+300-E(),10<f)){if(fs(l,i,Ti,!os),ve(l,0,!0)!==0)break e;wa=i,l.timeoutHandle=ex(E_.bind(null,l,s,hi,Wc,jd,i,Ti,$s,Br,os,h,"Throttled",-0,0),f);break e}E_(l,s,hi,Wc,jd,i,Ti,$s,Br,os,h,null,-0,0)}}break}while(!0);oa(t)}function E_(t,i,s,l,f,h,b,A,I,ie,me,be,se,ue){if(t.timeoutHandle=-1,be=i.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ha},g_(i,h,be);var Xe=(h&62914560)===h?kc-E():(h&4194048)===h?b_-E():0;if(Xe=q1(be,Xe),Xe!==null){wa=h,t.cancelPendingCommit=Xe(U_.bind(null,t,i,h,s,l,f,b,A,I,me,be,null,se,ue)),fs(t,h,b,!ie);return}}U_(t,i,h,s,l,f,b,A,I)}function c1(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!bi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fs(t,i,s,l){i&=~Vd,i&=~$s,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-je(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&ki(t,s,i)}function qc(){return(Gt&6)===0?(ul(0),!1):!0}function qd(){if(Mt!==null){if(Wt===0)var t=Mt.return;else t=Mt,_a=Hs=null,cd(t),Or=null,Wo=0,t=Mt;for(;t!==null;)t_(t.alternate,t),t=t.return;Mt=null}}function Gr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,C1(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),wa=0,qd(),en=t,Mt=s=ma(t.current,null),Tt=i,Wt=0,Ei=null,os=!1,Ir=Ie(t,i),Gd=!1,Br=Ti=Vd=$s=ls=gn=0,hi=ll=null,jd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-je(l),h=1<<f;i|=t[f],l&=~h}return Ra=i,pc(),s}function T_(t,i){gt=null,P.H=el,i===Dr||i===Sc?(i=Gm(),Wt=3):i===Kf?(i=Gm(),Wt=4):Wt=i===Td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ei=i,Mt===null&&(gn=1,zc(t,Li(i,t.current)))}function A_(){var t=Si.current;return t===null?!0:(Tt&4194048)===Tt?Fi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===Fi:!1}function R_(){var t=P.H;return P.H=el,t===null?el:t}function w_(){var t=P.A;return P.A=o1,t}function Yc(){gn=4,os||(Tt&4194048)!==Tt&&Si.current!==null||(Ir=!0),(ls&134217727)===0&&($s&134217727)===0||en===null||fs(en,Tt,Ti,!1)}function Yd(t,i,s){var l=Gt;Gt|=2;var f=R_(),h=w_();(en!==t||Tt!==i)&&(Wc=null,Gr(t,i)),i=!1;var b=gn;e:do try{if(Wt!==0&&Mt!==null){var A=Mt,I=Ei;switch(Wt){case 8:qd(),b=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(i=!0);var ie=Wt;if(Wt=0,Ei=null,Vr(t,A,I,ie),s&&Ir){b=0;break e}break;default:ie=Wt,Wt=0,Ei=null,Vr(t,A,I,ie)}}u1(),b=gn;break}catch(me){T_(t,me)}while(!0);return i&&t.shellSuspendCounter++,_a=Hs=null,Gt=l,P.H=f,P.A=h,Mt===null&&(en=null,Tt=0,pc()),b}function u1(){for(;Mt!==null;)C_(Mt)}function f1(t,i){var s=Gt;Gt|=2;var l=R_(),f=w_();en!==t||Tt!==i?(Wc=null,Xc=E()+500,Gr(t,i)):Ir=Ie(t,i);e:do try{if(Wt!==0&&Mt!==null){i=Mt;var h=Ei;t:switch(Wt){case 1:Wt=0,Ei=null,Vr(t,i,h,1);break;case 2:case 9:if(Bm(h)){Wt=0,Ei=null,D_(i);break}i=function(){Wt!==2&&Wt!==9||en!==t||(Wt=7),oa(t)},h.then(i,i);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Bm(h)?(Wt=0,Ei=null,D_(i)):(Wt=0,Ei=null,Vr(t,i,h,7));break;case 5:var b=null;switch(Mt.tag){case 26:b=Mt.memoizedState;case 5:case 27:var A=Mt;if(b?mx(b):A.stateNode.complete){Wt=0,Ei=null;var I=A.sibling;if(I!==null)Mt=I;else{var ie=A.return;ie!==null?(Mt=ie,$c(ie)):Mt=null}break t}}Wt=0,Ei=null,Vr(t,i,h,5);break;case 6:Wt=0,Ei=null,Vr(t,i,h,6);break;case 8:qd(),gn=6;break e;default:throw Error(a(462))}}d1();break}catch(me){T_(t,me)}while(!0);return _a=Hs=null,P.H=l,P.A=f,Gt=s,Mt!==null?0:(en=null,Tt=0,pc(),gn)}function d1(){for(;Mt!==null&&!nt();)C_(Mt)}function C_(t){var i=Jg(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,i===null?$c(t):Mt=i}function D_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=qg(s,i,i.pendingProps,i.type,void 0,Tt);break;case 11:i=qg(s,i,i.pendingProps,i.type.render,i.ref,Tt);break;case 5:cd(i);default:t_(s,i),i=Mt=wm(i,Ra),i=Jg(s,i,Ra)}t.memoizedProps=t.pendingProps,i===null?$c(t):Mt=i}function Vr(t,i,s,l){_a=Hs=null,cd(i),Or=null,Wo=0;var f=i.return;try{if(e1(t,f,i,s,Tt)){gn=1,zc(t,Li(s,t.current)),Mt=null;return}}catch(h){if(f!==null)throw Mt=f,h;gn=1,zc(t,Li(s,t.current)),Mt=null;return}i.flags&32768?(Dt||l===1?t=!0:Ir||(Tt&536870912)!==0?t=!1:(os=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),O_(i,t)):$c(i)}function $c(t){var i=t;do{if((i.flags&32768)!==0){O_(i,os);return}t=i.return;var s=i1(i.alternate,i,Ra);if(s!==null){Mt=s;return}if(i=i.sibling,i!==null){Mt=i;return}Mt=i=t}while(i!==null);gn===0&&(gn=5)}function O_(t,i){do{var s=a1(t.alternate,t);if(s!==null){s.flags&=32767,Mt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=s}while(t!==null);gn=6,Mt=null}function U_(t,i,s,l,f,h,b,A,I){t.cancelPendingCommit=null;do Zc();while(Un!==0);if((Gt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=zf,In(t,s,h,b,A,I),t===en&&(Mt=en=null,Tt=0),Hr=i,us=t,wa=s,kd=h,Xd=f,y_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,g1(q,function(){return F_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=k.p,k.p=2,b=Gt,Gt|=4;try{s1(t,i,s)}finally{Gt=b,k.p=f,P.T=l}}Un=1,L_(),N_(),P_()}}function L_(){if(Un===1){Un=0;var t=us,i=Hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=k.p;k.p=2;var f=Gt;Gt|=4;try{h_(i,t);var h=rh,b=vm(t.containerInfo),A=h.focusedElem,I=h.selectionRange;if(b!==A&&A&&A.ownerDocument&&xm(A.ownerDocument.documentElement,A)){if(I!==null&&Of(A)){var ie=I.start,me=I.end;if(me===void 0&&(me=ie),"selectionStart"in A)A.selectionStart=ie,A.selectionEnd=Math.min(me,A.value.length);else{var be=A.ownerDocument||document,se=be&&be.defaultView||window;if(se.getSelection){var ue=se.getSelection(),Xe=A.textContent.length,it=Math.min(I.start,Xe),Kt=I.end===void 0?it:Math.min(I.end,Xe);!ue.extend&&it>Kt&&(b=Kt,Kt=it,it=b);var Y=_m(A,it),V=_m(A,Kt);if(Y&&V&&(ue.rangeCount!==1||ue.anchorNode!==Y.node||ue.anchorOffset!==Y.offset||ue.focusNode!==V.node||ue.focusOffset!==V.offset)){var ne=be.createRange();ne.setStart(Y.node,Y.offset),ue.removeAllRanges(),it>Kt?(ue.addRange(ne),ue.extend(V.node,V.offset)):(ne.setEnd(V.node,V.offset),ue.addRange(ne))}}}}for(be=[],ue=A;ue=ue.parentNode;)ue.nodeType===1&&be.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<be.length;A++){var ge=be[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}lu=!!sh,rh=sh=null}finally{Gt=f,k.p=l,P.T=s}}t.current=i,Un=2}}function N_(){if(Un===2){Un=0;var t=us,i=Hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=k.p;k.p=2;var f=Gt;Gt|=4;try{l_(t,i.alternate,i)}finally{Gt=f,k.p=l,P.T=s}}Un=3}}function P_(){if(Un===4||Un===3){Un=0,O();var t=us,i=Hr,s=wa,l=y_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Un=5:(Un=0,Hr=us=null,z_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(cs=null),na(s),i=i.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=k.p,k.p=2,P.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var A=l[b];h(A.value,{componentStack:A.stack})}}finally{P.T=i,k.p=f}}(wa&3)!==0&&Zc(),oa(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Wd?cl++:(cl=0,Wd=t):cl=0,ul(0)}}function z_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ko(i)))}function Zc(){return L_(),N_(),P_(),F_()}function F_(){if(Un!==5)return!1;var t=us,i=kd;kd=0;var s=na(wa),l=P.T,f=k.p;try{k.p=32>s?32:s,P.T=null,s=Xd,Xd=null;var h=us,b=wa;if(Un=0,Hr=us=null,wa=0,(Gt&6)!==0)throw Error(a(331));var A=Gt;if(Gt|=4,x_(h.current),m_(h,h.current,b,s),Gt=A,ul(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ye,h)}catch{}return!0}finally{k.p=f,P.T=l,z_(t,i)}}function I_(t,i,s){i=Li(s,i),i=Ed(t.stateNode,i,2),t=is(t,i,2),t!==null&&(Dn(t,2),oa(t))}function qt(t,i,s){if(t.tag===3)I_(t,t,s);else for(;i!==null;){if(i.tag===3){I_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cs===null||!cs.has(l))){t=Li(s,t),s=Bg(2),l=is(i,s,2),l!==null&&(Hg(s,l,i,t),Dn(l,2),oa(l));break}}i=i.return}}function $d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new l1;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Gd=!0,f.add(s),t=h1.bind(null,t,i,s),i.then(t,t))}function h1(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,en===t&&(Tt&s)===s&&(gn===4||gn===3&&(Tt&62914560)===Tt&&300>E()-kc?(Gt&2)===0&&Gr(t,0):Vd|=s,Br===Tt&&(Br=0)),oa(t)}function B_(t,i){i===0&&(i=Ht()),t=Fs(t,i),t!==null&&(Dn(t,i),oa(t))}function p1(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),B_(t,s)}function m1(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),B_(t,s)}function g1(t,i){return kt(t,i)}var Kc=null,jr=null,Zd=!1,Qc=!1,Kd=!1,ds=0;function oa(t){t!==jr&&t.next===null&&(jr===null?Kc=jr=t:jr=jr.next=t),Qc=!0,Zd||(Zd=!0,x1())}function ul(t,i){if(!Kd&&Qc){Kd=!0;do for(var s=!1,l=Kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,A=l.pingedLanes;h=(1<<31-je(42|t)+1)-1,h&=f&~(b&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,j_(l,h))}else h=Tt,h=ve(l,l===en?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Ie(l,h)||(s=!0,j_(l,h));l=l.next}while(s);Kd=!1}}function _1(){H_()}function H_(){Qc=Zd=!1;var t=0;ds!==0&&w1()&&(t=ds);for(var i=E(),s=null,l=Kc;l!==null;){var f=l.next,h=G_(l,i);h===0?(l.next=null,s===null?Kc=f:s.next=f,f===null&&(jr=s)):(s=l,(t!==0||(h&3)!==0)&&(Qc=!0)),l=f}Un!==0&&Un!==5||ul(t),ds!==0&&(ds=0)}function G_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-je(h),A=1<<b,I=f[b];I===-1?((A&s)===0||(A&l)!==0)&&(f[b]=rt(A,i)):I<=i&&(t.expiredLanes|=A),h&=~A}if(i=en,s=Tt,s=ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&$e(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Ie(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&$e(l),na(s)){case 2:case 8:s=Z;break;case 32:s=q;break;case 268435456:s=Ae;break;default:s=q}return l=V_.bind(null,t),s=kt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&$e(l),t.callbackPriority=2,t.callbackNode=null,2}function V_(t,i){if(Un!==0&&Un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Zc()&&t.callbackNode!==s)return null;var l=Tt;return l=ve(t,t===en?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(M_(t,l,i),G_(t,E()),t.callbackNode!=null&&t.callbackNode===s?V_.bind(null,t):null)}function j_(t,i){if(Zc())return null;M_(t,i,!0)}function x1(){D1(function(){(Gt&6)!==0?kt(xe,_1):H_()})}function Qd(){if(ds===0){var t=wr;t===0&&(t=Oe,Oe<<=1,(Oe&261888)===0&&(Oe=256)),ds=t}return ds}function k_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rc(""+t)}function X_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function v1(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=k_((f[St]||null).action),b=l.submitter;b&&(i=(i=b[St]||null)?k_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var A=new uc("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ds!==0){var I=b?X_(f,b):new FormData(f);xd(s,{pending:!0,data:I,method:f.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=b?X_(f,b):new FormData(f),xd(s,{pending:!0,data:I,method:f.method,action:h},h,I))},currentTarget:f}]})}}for(var Jd=0;Jd<Pf.length;Jd++){var eh=Pf[Jd],b1=eh.toLowerCase(),y1=eh[0].toUpperCase()+eh.slice(1);Xi(b1,"on"+y1)}Xi(Sm,"onAnimationEnd"),Xi(Mm,"onAnimationIteration"),Xi(Em,"onAnimationStart"),Xi("dblclick","onDoubleClick"),Xi("focusin","onFocus"),Xi("focusout","onBlur"),Xi(F2,"onTransitionRun"),Xi(I2,"onTransitionStart"),Xi(B2,"onTransitionCancel"),Xi(Tm,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function W_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var A=l[b],I=A.instance,ie=A.currentTarget;if(A=A.listener,I!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ie;try{h(f)}catch(me){hc(me)}f.currentTarget=null,h=I}else for(b=0;b<l.length;b++){if(A=l[b],I=A.instance,ie=A.currentTarget,A=A.listener,I!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ie;try{h(f)}catch(me){hc(me)}f.currentTarget=null,h=I}}}}function Et(t,i){var s=i[hn];s===void 0&&(s=i[hn]=new Set);var l=t+"__bubble";s.has(l)||(q_(i,t,2,!1),s.add(l))}function th(t,i,s){var l=0;i&&(l|=4),q_(s,t,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function nh(t){if(!t[Jc]){t[Jc]=!0,$.forEach(function(s){s!=="selectionchange"&&(S1.has(s)||th(s,!1,t),th(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,th("selectionchange",!1,i))}}function q_(t,i,s,l){switch(Sx(i)){case 2:var f=Z1;break;case 8:f=K1;break;default:f=_h}s=f.bind(null,i,s,t),f=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function ih(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var A=l.stateNode.containerInfo;if(A===f)break;if(b===4)for(b=l.return;b!==null;){var I=b.tag;if((I===3||I===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;A!==null;){if(b=pn(A),b===null)return;if(I=b.tag,I===5||I===6||I===26||I===27){l=h=b;continue e}A=A.parentNode}}l=l.return}Qp(function(){var ie=h,me=bf(s),be=[];e:{var se=Am.get(t);if(se!==void 0){var ue=uc,Xe=t;switch(t){case"keypress":if(lc(s)===0)break e;case"keydown":case"keyup":ue=m2;break;case"focusin":Xe="focus",ue=Af;break;case"focusout":Xe="blur",ue=Af;break;case"beforeblur":case"afterblur":ue=Af;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=i2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=x2;break;case Sm:case Mm:case Em:ue=r2;break;case Tm:ue=b2;break;case"scroll":case"scrollend":ue=t2;break;case"wheel":ue=S2;break;case"copy":case"cut":case"paste":ue=l2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=im;break;case"toggle":case"beforetoggle":ue=E2}var it=(i&4)!==0,Kt=!it&&(t==="scroll"||t==="scrollend"),Y=it?se!==null?se+"Capture":null:se;it=[];for(var V=ie,ne;V!==null;){var ge=V;if(ne=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||ne===null||Y===null||(ge=Lo(V,Y),ge!=null&&it.push(dl(V,ge,ne))),Kt)break;V=V.return}0<it.length&&(se=new ue(se,Xe,null,s,me),be.push({event:se,listeners:it}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",se&&s!==vf&&(Xe=s.relatedTarget||s.fromElement)&&(pn(Xe)||Xe[an]))break e;if((ue||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,ue?(Xe=s.relatedTarget||s.toElement,ue=ie,Xe=Xe?pn(Xe):null,Xe!==null&&(Kt=c(Xe),it=Xe.tag,Xe!==Kt||it!==5&&it!==27&&it!==6)&&(Xe=null)):(ue=null,Xe=ie),ue!==Xe)){if(it=tm,ge="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(it=im,ge="onPointerLeave",Y="onPointerEnter",V="pointer"),Kt=ue==null?se:X(ue),ne=Xe==null?se:X(Xe),se=new it(ge,V+"leave",ue,s,me),se.target=Kt,se.relatedTarget=ne,ge=null,pn(me)===ie&&(it=new it(Y,V+"enter",Xe,s,me),it.target=ne,it.relatedTarget=Kt,ge=it),Kt=ge,ue&&Xe)t:{for(it=M1,Y=ue,V=Xe,ne=0,ge=Y;ge;ge=it(ge))ne++;ge=0;for(var Je=V;Je;Je=it(Je))ge++;for(;0<ne-ge;)Y=it(Y),ne--;for(;0<ge-ne;)V=it(V),ge--;for(;ne--;){if(Y===V||V!==null&&Y===V.alternate){it=Y;break t}Y=it(Y),V=it(V)}it=null}else it=null;ue!==null&&Y_(be,se,ue,it,!1),Xe!==null&&Kt!==null&&Y_(be,Kt,Xe,it,!0)}}e:{if(se=ie?X(ie):window,ue=se.nodeName&&se.nodeName.toLowerCase(),ue==="select"||ue==="input"&&se.type==="file")var Ft=fm;else if(cm(se))if(dm)Ft=N2;else{Ft=U2;var Ye=O2}else ue=se.nodeName,!ue||ue.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?ie&&xf(ie.elementType)&&(Ft=fm):Ft=L2;if(Ft&&(Ft=Ft(t,ie))){um(be,Ft,s,me);break e}Ye&&Ye(t,se,ie),t==="focusout"&&ie&&se.type==="number"&&ie.memoizedProps.value!=null&&Gn(se,"number",se.value)}switch(Ye=ie?X(ie):window,t){case"focusin":(cm(Ye)||Ye.contentEditable==="true")&&(br=Ye,Uf=ie,Go=null);break;case"focusout":Go=Uf=br=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,bm(be,s,me);break;case"selectionchange":if(z2)break;case"keydown":case"keyup":bm(be,s,me)}var vt;if(wf)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else vr?om(t,s)&&(At="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(At="onCompositionStart");At&&(am&&s.locale!=="ko"&&(vr||At!=="onCompositionStart"?At==="onCompositionEnd"&&vr&&(vt=Jp()):(Za=me,Mf="value"in Za?Za.value:Za.textContent,vr=!0)),Ye=eu(ie,At),0<Ye.length&&(At=new nm(At,t,null,s,me),be.push({event:At,listeners:Ye}),vt?At.data=vt:(vt=lm(s),vt!==null&&(At.data=vt)))),(vt=A2?R2(t,s):w2(t,s))&&(At=eu(ie,"onBeforeInput"),0<At.length&&(Ye=new nm("onBeforeInput","beforeinput",null,s,me),be.push({event:Ye,listeners:At}),Ye.data=vt)),v1(be,t,ie,s,me)}W_(be,i)})}function dl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Lo(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Lo(t,i),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function M1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Y_(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var A=s,I=A.alternate,ie=A.stateNode;if(A=A.tag,I!==null&&I===l)break;A!==5&&A!==26&&A!==27||ie===null||(I=ie,f?(ie=Lo(s,h),ie!=null&&b.unshift(dl(s,ie,I))):f||(ie=Lo(s,h),ie!=null&&b.push(dl(s,ie,I)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var E1=/\r\n?/g,T1=/\u0000|\uFFFD/g;function $_(t){return(typeof t=="string"?t:""+t).replace(E1,`
`).replace(T1,"")}function Z_(t,i){return i=$_(i),$_(t)===i}function Zt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||ia(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&ia(t,""+l);break;case"className":Nt(t,"class",l);break;case"tabIndex":Nt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Nt(t,s,l);break;case"style":Zp(t,l,h);break;case"data":if(i!=="object"){Nt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Zt(t,i,"name",f.name,f,null),Zt(t,i,"formEncType",f.formEncType,f,null),Zt(t,i,"formMethod",f.formMethod,f,null),Zt(t,i,"formTarget",f.formTarget,f,null)):(Zt(t,i,"encType",f.encType,f,null),Zt(t,i,"method",f.method,f,null),Zt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=ha);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=rc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Et("beforetoggle",t),Et("toggle",t),xt(t,"popover",l);break;case"xlinkActuate":zt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":zt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":zt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":zt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":zt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":zt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":zt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":zt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":zt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xt(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Jb.get(s)||s,xt(t,s,l))}}function ah(t,i,s,l,f,h){switch(s){case"style":Zp(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?ia(t,l):(typeof l=="number"||typeof l=="bigint")&&ia(t,""+l);break;case"onScroll":l!=null&&Et("scroll",t);break;case"onScrollEnd":l!=null&&Et("scrollend",t);break;case"onClick":l!=null&&(t.onclick=ha);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[St]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):xt(t,s,l)}}}function Jn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,h,b,s,null)}}f&&Zt(t,i,"srcSet",s.srcSet,s,null),l&&Zt(t,i,"src",s.src,s,null);return;case"input":Et("invalid",t);var A=h=b=f=null,I=null,ie=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":b=me;break;case"checked":I=me;break;case"defaultChecked":ie=me;break;case"value":h=me;break;case"defaultValue":A=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:Zt(t,i,l,me,s,null)}}nn(t,h,A,I,ie,b,f,!1);return;case"select":Et("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":h=A;break;case"defaultValue":b=A;break;case"multiple":l=A;default:Zt(t,i,f,A,s,null)}i=h,s=b,t.multiple=!!l,i!=null?On(t,!!l,i,!1):s!=null&&On(t,!!l,s,!0);return;case"textarea":Et("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":l=A;break;case"defaultValue":f=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Zt(t,i,b,A,s,null)}$n(t,l,f,h);return;case"option":for(I in s)if(s.hasOwnProperty(I)&&(l=s[I],l!=null))switch(I){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Zt(t,i,I,l,s,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)Et(fl[l],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ie in s)if(s.hasOwnProperty(ie)&&(l=s[ie],l!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Zt(t,i,ie,l,s,null)}return;default:if(xf(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&ah(t,i,me,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Zt(t,i,A,l,s,null))}function A1(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,A=null,I=null,ie=null,me=null;for(ue in s){var be=s[ue];if(s.hasOwnProperty(ue)&&be!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":I=be;default:l.hasOwnProperty(ue)||Zt(t,i,ue,null,l,be)}}for(var se in l){var ue=l[se];if(be=s[se],l.hasOwnProperty(se)&&(ue!=null||be!=null))switch(se){case"type":h=ue;break;case"name":f=ue;break;case"checked":ie=ue;break;case"defaultChecked":me=ue;break;case"value":b=ue;break;case"defaultValue":A=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(a(137,i));break;default:ue!==be&&Zt(t,i,se,ue,l,be)}}fa(t,b,A,I,ie,me,h,f);return;case"select":ue=b=A=se=null;for(h in s)if(I=s[h],s.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ue=I;default:l.hasOwnProperty(h)||Zt(t,i,h,null,l,I)}for(f in l)if(h=l[f],I=s[f],l.hasOwnProperty(f)&&(h!=null||I!=null))switch(f){case"value":se=h;break;case"defaultValue":A=h;break;case"multiple":b=h;default:h!==I&&Zt(t,i,f,h,l,I)}i=A,s=b,l=ue,se!=null?On(t,!!s,se,!1):!!l!=!!s&&(i!=null?On(t,!!s,i,!0):On(t,!!s,s?[]:"",!1));return;case"textarea":ue=se=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Zt(t,i,A,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":se=f;break;case"defaultValue":ue=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Zt(t,i,b,f,l,h)}Vn(t,se,ue);return;case"option":for(var Xe in s)if(se=s[Xe],s.hasOwnProperty(Xe)&&se!=null&&!l.hasOwnProperty(Xe))switch(Xe){case"selected":t.selected=!1;break;default:Zt(t,i,Xe,null,l,se)}for(I in l)if(se=l[I],ue=s[I],l.hasOwnProperty(I)&&se!==ue&&(se!=null||ue!=null))switch(I){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Zt(t,i,I,se,l,ue)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in s)se=s[it],s.hasOwnProperty(it)&&se!=null&&!l.hasOwnProperty(it)&&Zt(t,i,it,null,l,se);for(ie in l)if(se=l[ie],ue=s[ie],l.hasOwnProperty(ie)&&se!==ue&&(se!=null||ue!=null))switch(ie){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:Zt(t,i,ie,se,l,ue)}return;default:if(xf(i)){for(var Kt in s)se=s[Kt],s.hasOwnProperty(Kt)&&se!==void 0&&!l.hasOwnProperty(Kt)&&ah(t,i,Kt,void 0,l,se);for(me in l)se=l[me],ue=s[me],!l.hasOwnProperty(me)||se===ue||se===void 0&&ue===void 0||ah(t,i,me,se,l,ue);return}}for(var Y in s)se=s[Y],s.hasOwnProperty(Y)&&se!=null&&!l.hasOwnProperty(Y)&&Zt(t,i,Y,null,l,se);for(be in l)se=l[be],ue=s[be],!l.hasOwnProperty(be)||se===ue||se==null&&ue==null||Zt(t,i,be,se,l,ue)}function K_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function R1(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,A=f.duration;if(h&&A&&K_(b)){for(b=0,A=f.responseEnd,l+=1;l<s.length;l++){var I=s[l],ie=I.startTime;if(ie>A)break;var me=I.transferSize,be=I.initiatorType;me&&K_(be)&&(I=I.responseEnd,b+=me*(I<A?1:(A-ie)/(I-ie)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,rh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function Q_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function J_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function w1(){var t=window.event;return t&&t.type==="popstate"?t===lh?!1:(lh=t,!0):(lh=null,!1)}var ex=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,tx=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof tx<"u"?function(t){return tx.resolve(null).then(t).catch(O1)}:ex;function O1(t){setTimeout(function(){throw t})}function hs(t){return t==="head"}function nx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,A=h.nodeName;h[ot]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);qr(i)}function ix(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ch(s),_t(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function U1(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[ot])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ii(t.nextSibling),t===null)break}return null}function L1(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ii(t.nextSibling),t===null))return null;return t}function ax(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ii(t.nextSibling),t===null))return null;return t}function uh(t){return t.data==="$?"||t.data==="$~"}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function N1(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ii(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var dh=null;function sx(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ii(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function rx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function ox(t,i,s){switch(i=tu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);_t(t)}var Bi=new Map,lx=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=k.d;k.d={f:P1,r:z1,D:F1,C:I1,L:B1,m:H1,X:V1,S:G1,M:j1};function P1(){var t=Ca.f(),i=qc();return t||i}function z1(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?Tg(i):Ca.r(t)}var kr=typeof document>"u"?null:document;function cx(t,i,s){var l=kr;if(l&&typeof i=="string"&&i){var f=tn(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),lx.has(f)||(lx.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Jn(i,"link",t),J(i),l.head.appendChild(i)))}}function F1(t){Ca.D(t),cx("dns-prefetch",t,null)}function I1(t,i){Ca.C(t,i),cx("preconnect",t,i)}function B1(t,i,s){Ca.L(t,i,s);var l=kr;if(l&&t&&i){var f='link[rel="preload"][as="'+tn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+tn(s.imageSizes)+'"]')):f+='[href="'+tn(t)+'"]';var h=f;switch(i){case"style":h=Xr(t);break;case"script":h=Wr(t)}Bi.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Bi.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(h))||i==="script"&&l.querySelector(ml(h))||(i=l.createElement("link"),Jn(i,"link",t),J(i),l.head.appendChild(i)))}}function H1(t,i){Ca.m(t,i);var s=kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+tn(l)+'"][href="'+tn(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wr(t)}if(!Bi.has(h)&&(t=_({rel:"modulepreload",href:t},i),Bi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),Jn(l,"link",t),J(l),s.head.appendChild(l)}}}function G1(t,i,s){Ca.S(t,i,s);var l=kr;if(l&&t){var f=ae(l).hoistableStyles,h=Xr(t);i=i||"default";var b=f.get(h);if(!b){var A={loading:0,preload:null};if(b=l.querySelector(pl(h)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Bi.get(h))&&hh(t,s);var I=b=l.createElement("link");J(I),Jn(I,"link",t),I._p=new Promise(function(ie,me){I.onload=ie,I.onerror=me}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,iu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:A},f.set(h,b)}}}function V1(t,i){Ca.X(t,i);var s=kr;if(s&&t){var l=ae(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0},i),(i=Bi.get(f))&&ph(t,i),h=s.createElement("script"),J(h),Jn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function j1(t,i){Ca.M(t,i);var s=kr;if(s&&t){var l=ae(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=Bi.get(f))&&ph(t,i),h=s.createElement("script"),J(h),Jn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function ux(t,i,s,l){var f=(f=re.current)?nu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Xr(s.href),s=ae(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Xr(s.href);var h=ae(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(pl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Bi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Bi.set(t,s),h||k1(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wr(s),s=ae(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Xr(t){return'href="'+tn(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function fx(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function k1(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Jn(i,"link",s),J(i),t.head.appendChild(i))}function Wr(t){return'[src="'+tn(t)+'"]'}function ml(t){return"script[async]"+t}function dx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+tn(s.href)+'"]');if(l)return i.instance=l,J(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),J(l),Jn(l,"style",f),iu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Xr(s.href);var h=t.querySelector(pl(f));if(h)return i.state.loading|=4,i.instance=h,J(h),h;l=fx(s),(f=Bi.get(f))&&hh(l,f),h=(t.ownerDocument||t).createElement("link"),J(h);var b=h;return b._p=new Promise(function(A,I){b.onload=A,b.onerror=I}),Jn(h,"link",l),i.state.loading|=4,iu(h,s.precedence,t),i.instance=h;case"script":return h=Wr(s.src),(f=t.querySelector(ml(h)))?(i.instance=f,J(f),f):(l=s,(f=Bi.get(h))&&(l=_({},s),ph(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),J(f),Jn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,iu(l,s.precedence,t));return i.instance}function iu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var A=l[b];if(A.dataset.precedence===i)h=A;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ph(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var au=null;function hx(t,i,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[ot]||h[ct]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var A=l.get(b);A?A.push(h):l.set(b,[h])}}return l}function px(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function X1(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function W1(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Xr(l.href),h=i.querySelector(pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=su.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,J(h);return}h=i.ownerDocument||i,l=fx(l),(f=Bi.get(f))&&hh(l,f),h=h.createElement("link"),J(h);var b=h;b._p=new Promise(function(A,I){b.onload=A,b.onerror=I}),Jn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=su.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var mh=0;function q1(t,i){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&mh===0&&(mh=62500*R1());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>mh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function ou(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,i.forEach(Y1,t),ru=null,su.call(t))}function Y1(t,i){if(!(i.state.loading&4)){var s=ru.get(t);if(s)var l=s.get(null);else{s=new Map,ru.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var gl={$$typeof:U,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function $1(t,i,s,l,f,h,b,A,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ut(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ut(0),this.hiddenUpdates=Ut(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function gx(t,i,s,l,f,h,b,A,I,ie,me,be){return t=new $1(t,i,s,b,I,ie,me,be,A),i=1,h===!0&&(i|=24),h=yi(3,null,null,i),t.current=h,h.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Qf(h),t}function _x(t){return t?(t=Mr,t):Mr}function xx(t,i,s,l,f,h){f=_x(f),l.context===null?l.context=f:l.pendingContext=f,l=ns(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=is(t,l,i),s!==null&&(pi(s,t,i),Yo(s,t,i))}function vx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gh(t,i){vx(t,i),(t=t.alternate)&&vx(t,i)}function bx(t){if(t.tag===13||t.tag===31){var i=Fs(t,67108864);i!==null&&pi(i,t,67108864),gh(t,67108864)}}function yx(t){if(t.tag===13||t.tag===31){var i=Ai();i=li(i);var s=Fs(t,i);s!==null&&pi(s,t,i),gh(t,i)}}var lu=!0;function Z1(t,i,s,l){var f=P.T;P.T=null;var h=k.p;try{k.p=2,_h(t,i,s,l)}finally{k.p=h,P.T=f}}function K1(t,i,s,l){var f=P.T;P.T=null;var h=k.p;try{k.p=8,_h(t,i,s,l)}finally{k.p=h,P.T=f}}function _h(t,i,s,l){if(lu){var f=xh(l);if(f===null)ih(t,i,l,cu,s),Mx(t,l);else if(J1(f,t,i,s,l))l.stopPropagation();else if(Mx(t,l),i&4&&-1<Q1.indexOf(t)){for(;f!==null;){var h=R(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Me(h.pendingLanes);if(b!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var I=1<<31-je(b);A.entanglements[1]|=I,b&=~I}oa(h),(Gt&6)===0&&(Xc=E()+500,ul(0))}}break;case 31:case 13:A=Fs(h,2),A!==null&&pi(A,h,2),qc(),gh(h,2)}if(h=xh(l),h===null&&ih(t,i,l,cu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else ih(t,i,l,null,s)}}function xh(t){return t=bf(t),vh(t)}var cu=null;function vh(t){if(cu=null,t=pn(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cu=t,null}function Sx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(te()){case xe:return 2;case Z:return 8;case q:case Ne:return 32;case Ae:return 268435456;default:return 32}default:return 32}}var bh=!1,ps=null,ms=null,gs=null,_l=new Map,xl=new Map,_s=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mx(t,i){switch(t){case"focusin":case"focusout":ps=null;break;case"dragenter":case"dragleave":ms=null;break;case"mouseover":case"mouseout":gs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function vl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&bx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function J1(t,i,s,l,f){switch(i){case"focusin":return ps=vl(ps,t,i,s,l,f),!0;case"dragenter":return ms=vl(ms,t,i,s,l,f),!0;case"mouseover":return gs=vl(gs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return _l.set(h,vl(_l.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xl.set(h,vl(xl.get(h)||null,t,i,s,l,f)),!0}return!1}function Ex(t){var i=pn(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ya(t.priority,function(){yx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Ya(t.priority,function(){yx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=R(s),i!==null&&bx(i),t.blockedOn=s,!1;i.shift()}return!0}function Tx(t,i,s){uu(t)&&s.delete(i)}function ey(){bh=!1,ps!==null&&uu(ps)&&(ps=null),ms!==null&&uu(ms)&&(ms=null),gs!==null&&uu(gs)&&(gs=null),_l.forEach(Tx),xl.forEach(Tx)}function fu(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ey)))}var du=null;function Ax(t){du!==t&&(du=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===t&&(du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(vh(l||s)===null)continue;break}var h=R(s);h!==null&&(t.splice(i,3),i-=3,xd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function qr(t){function i(I){return fu(I,t)}ps!==null&&fu(ps,t),ms!==null&&fu(ms,t),gs!==null&&fu(gs,t),_l.forEach(i),xl.forEach(i);for(var s=0;s<_s.length;s++){var l=_s[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<_s.length&&(s=_s[0],s.blockedOn===null);)Ex(s),s.blockedOn===null&&_s.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[St]||null;if(typeof h=="function")b||Ax(s);else if(b){var A=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[St]||null)A=b.formAction;else if(vh(f)!==null)continue}else A=b.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Ax(s)}}}function Rx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yh(t){this._internalRoot=t}hu.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Ai();xx(s,l,t,i,null,null)},hu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;xx(t.current,2,null,t,null,null),qc(),i[an]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var i=qa();t={blockedOn:null,target:t,priority:i};for(var s=0;s<_s.length&&i!==0&&i<_s[s].priority;s++);_s.splice(s,0,t),s===0&&Ex(t)}};var wx=e.version;if(wx!=="19.2.1")throw Error(a(527,wx,"19.2.1"));k.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ty={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ye=pu.inject(ty),Ee=pu}catch{}}return Sl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Pg,h=zg,b=Fg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=gx(t,1,!1,null,null,s,l,null,f,h,b,Rx),t[an]=i.current,nh(t),new yh(i)},Sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=Pg,b=zg,A=Fg,I=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(I=s.formState)),i=gx(t,1,!0,i,s??null,l,f,I,h,b,A,Rx),i.context=_x(null),s=i.current,l=Ai(),l=li(l),f=ns(l),f.callback=null,is(s,f,l),s=l,i.current.lanes=s,Dn(i,s),oa(i),t[an]=i.current,nh(t),new hu(i)},Sl.version="19.2.1",Sl}var Qx;function Ky(){if(Qx)return Oh.exports;Qx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oh.exports=Zy(),Oh.exports}var Qy=Ky();const Jy=Sb(Qy);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Np="181",eS=0,Jx=1,tS=2,Mb=1,nS=2,za=3,Us=0,gi=1,Fa=2,Ha=0,uo=1,ev=2,tv=3,nv=4,iS=5,ar=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,M0=204,E0=205,dS=206,hS=207,pS=208,mS=209,gS=210,_S=211,xS=212,vS=213,bS=214,T0=0,A0=1,R0=2,vo=3,w0=4,C0=5,D0=6,O0=7,Eb=0,yS=1,SS=2,Cs=0,MS=1,ES=2,TS=3,AS=4,RS=5,wS=6,CS=7,Tb=300,bo=301,yo=302,U0=303,L0=304,pf=306,N0=1e3,oi=1001,P0=1002,Di=1003,DS=1004,mu=1005,ei=1006,Ph=1007,or=1008,ja=1009,Ab=1010,Rb=1011,Gl=1012,Pp=1013,pr=1014,Ia=1015,Do=1016,zp=1017,Fp=1018,Vl=1020,wb=35902,Cb=35899,Db=1021,Ob=1022,Qi=1023,jl=1026,kl=1027,Ub=1028,Ip=1029,Bp=1030,Hp=1031,Gp=1033,Iu=33776,Bu=33777,Hu=33778,Gu=33779,z0=35840,F0=35841,I0=35842,B0=35843,H0=36196,G0=37492,V0=37496,j0=37808,k0=37809,X0=37810,W0=37811,q0=37812,Y0=37813,$0=37814,Z0=37815,K0=37816,Q0=37817,J0=37818,ep=37819,tp=37820,np=37821,ip=36492,ap=36494,sp=36495,rp=36283,op=36284,lp=36285,cp=36286,OS=3200,US=3201,LS=0,NS=1,As="",ri="srgb",So="srgb-linear",Qu="linear",Qt="srgb",Yr=7680,iv=519,PS=512,zS=513,FS=514,Lb=515,IS=516,BS=517,HS=518,GS=519,av=35044,sv="300 es",ca=2e3,Ju=2001;function Nb(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function VS(){const r=Xl("canvas");return r.style.display="block",r}const rv={};function ov(...r){const e="THREE."+r.shift();console.log(e,...r)}function ft(...r){const e="THREE."+r.shift();console.warn(e,...r)}function _n(...r){const e="THREE."+r.shift();console.error(e,...r)}function Wl(...r){const e=r.join(" ");e in rv||(rv[e]=!0,ft(...r))}function jS(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Oo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ni=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=Math.PI/180,up=180/Math.PI;function tc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ni[r&255]+ni[r>>8&255]+ni[r>>16&255]+ni[r>>24&255]+"-"+ni[e&255]+ni[e>>8&255]+"-"+ni[e>>16&15|64]+ni[e>>24&255]+"-"+ni[n&63|128]+ni[n>>8&255]+"-"+ni[n>>16&255]+ni[n>>24&255]+ni[a&255]+ni[a>>8&255]+ni[a>>16&255]+ni[a>>24&255]).toLowerCase()}function Ot(r,e,n){return Math.max(e,Math.min(n,r))}function kS(r,e){return(r%e+e)%e}function Fh(r,e,n){return(1-n)*r+n*e}function Ml(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function mi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(e=0,n=0){Yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],y=c[u+1],M=c[u+2],T=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=M,e[n+3]=T;return}if(_!==T||m!==x||p!==y||g!==M){let S=m*x+p*y+g*M+_*T;S<0&&(x=-x,y=-y,M=-M,T=-T,S=-S);let v=1-d;if(S<.9995){const L=Math.acos(S),U=Math.sin(L);v=Math.sin(v*L)/U,d=Math.sin(d*L)/U,m=m*v+x*d,p=p*v+y*d,g=g*v+M*d,_=_*v+T*d}else{m=m*v+x*d,p=p*v+y*d,g=g*v+M*d,_=_*v+T*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+g*_+m*y-p*x,e[n+1]=m*M+g*x+p*_-d*y,e[n+2]=p*M+g*y+d*x-m*_,e[n+3]=g*M-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),y=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"YXZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"ZXY":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"ZYX":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"YZX":this._x=x*g*_+p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_-x*y*M;break;case"XZY":this._x=x*g*_-p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_+x*y*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>_){const y=2*Math.sqrt(1+a-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-a-_);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,a=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ih.copy(this).projectOnVector(e),this.sub(Ih)}reflect(e){return this.sub(Ih.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ih=new ce,lv=new nc;class bt{constructor(e,n,a,o,c,u,d,m,p){bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],y=a[5],M=a[8],T=o[0],S=o[3],v=o[6],L=o[1],U=o[4],F=o[7],j=o[2],N=o[5],z=o[8];return c[0]=u*T+d*L+m*j,c[3]=u*S+d*U+m*N,c[6]=u*v+d*F+m*z,c[1]=p*T+g*L+_*j,c[4]=p*S+g*U+_*N,c[7]=p*v+g*F+_*z,c[2]=x*T+y*L+M*j,c[5]=x*S+y*U+M*N,c[8]=x*v+y*F+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,y=p*c-u*m,M=n*_+a*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*p-g*a)*T,e[2]=(d*a-o*u)*T,e[3]=x*T,e[4]=(g*n-o*m)*T,e[5]=(o*c-d*n)*T,e[6]=y*T,e[7]=(a*m-p*n)*T,e[8]=(u*n-a*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new bt,cv=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uv=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XS(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Qt&&(o.r=Ga(o.r),o.g=Ga(o.g),o.b=Ga(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Qt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===As?Qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[So]:{primaries:e,whitePoint:a,transfer:Qu,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:a,transfer:Qt,toXYZ:cv,fromXYZ:uv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Bt=XS();function Ga(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $r;class WS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{$r===void 0&&($r=Xl("canvas")),$r.width=e.width,$r.height=e.height;const o=$r.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=$r}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ga(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ga(n[a]/255)*255):n[a]=Ga(n[a]);return{data:n,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class Vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=tc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Hh(o[u].image)):c.push(Hh(o[u]))}else c=Hh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?WS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let YS=0;const Gh=new ce;class Wn extends Oo{constructor(e=Wn.DEFAULT_IMAGE,n=Wn.DEFAULT_MAPPING,a=oi,o=oi,c=ei,u=or,d=Qi,m=ja,p=Wn.DEFAULT_ANISOTROPY,g=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=tc(),this.name="",this.source=new Vp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ft(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case N0:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case P0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case N0:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case P0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Tb;Wn.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,a=0,o=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],M=m[9],T=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-T)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+T)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,F=(y+1)/2,j=(v+1)/2,N=(g+x)/4,z=(_+T)/4,K=(M+S)/4;return U>F&&U>j?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=z/a):F>j?F<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(F),a=N/o,c=K/o):j<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(j),a=z/c,o=K/c),this.set(a,o,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(_-T)*(_-T)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(_-T)/L,this.z=(x-g)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this.w=Ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this.w=Ot(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends Oo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Wn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:ei,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Vp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends $S{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class Pb extends Wn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Di,this.minFilter=Di,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends Wn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Di,this.minFilter=Di,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Yi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Yi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Yi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Yi):Yi.fromBufferAttribute(c,u),Yi.applyMatrix4(e.matrixWorld),this.expandByPoint(Yi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gu.copy(a.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),_u.subVectors(this.max,El),Zr.subVectors(e.a,El),Kr.subVectors(e.b,El),Qr.subVectors(e.c,El),vs.subVectors(Kr,Zr),bs.subVectors(Qr,Kr),Ks.subVectors(Zr,Qr);let n=[0,-vs.z,vs.y,0,-bs.z,bs.y,0,-Ks.z,Ks.y,vs.z,0,-vs.x,bs.z,0,-bs.x,Ks.z,0,-Ks.x,-vs.y,vs.x,0,-bs.y,bs.x,0,-Ks.y,Ks.x,0];return!Vh(n,Zr,Kr,Qr,_u)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,Zr,Kr,Qr,_u))?!1:(xu.crossVectors(vs,bs),n=[xu.x,xu.y,xu.z],Vh(n,Zr,Kr,Qr,_u))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Da[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Da[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Da[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Da[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Da[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Da[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Da[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Da[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Da),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Da=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Yi=new ce,gu=new ic,Zr=new ce,Kr=new ce,Qr=new ce,vs=new ce,bs=new ce,Ks=new ce,El=new ce,_u=new ce,xu=new ce,Qs=new ce;function Vh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){Qs.fromArray(r,c);const d=o.x*Math.abs(Qs.x)+o.y*Math.abs(Qs.y)+o.z*Math.abs(Qs.z),m=e.dot(Qs),p=n.dot(Qs),g=a.dot(Qs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const KS=new ic,Tl=new ce,jh=new ce;class mf{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):KS.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const n=Tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Tl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(jh)),this.expandByPoint(Tl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oa=new ce,kh=new ce,vu=new ce,ys=new ce,Xh=new ce,bu=new ce,Wh=new ce;class jp{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oa.copy(this.origin).addScaledVector(this.direction,n),Oa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){kh.copy(e).add(n).multiplyScalar(.5),vu.copy(n).sub(e).normalize(),ys.copy(this.origin).sub(kh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(vu),d=ys.dot(this.direction),m=-ys.dot(vu),p=ys.lengthSq(),g=Math.abs(1-u*u);let _,x,y,M;if(g>0)if(_=u*m-d,x=u*d-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const T=1/g;_*=T,x*=T,y=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(kh).addScaledVector(vu,x),y}intersectSphere(e,n){Oa.subVectors(e.center,this.origin);const a=Oa.dot(this.direction),o=Oa.dot(Oa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Oa)!==null}intersectTriangle(e,n,a,o,c){Xh.subVectors(n,e),bu.subVectors(a,e),Wh.crossVectors(Xh,bu);let u=this.direction.dot(Wh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;ys.subVectors(this.origin,e);const m=d*this.direction.dot(bu.crossVectors(ys,bu));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(ys));if(p<0||m+p>u)return null;const g=-d*ys.dot(Wh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xn{constructor(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S){xn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S)}set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,T,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=M,v[11]=T,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Jr.setFromMatrixColumn(e,0).length(),c=1/Jr.setFromMatrixColumn(e,1).length(),u=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,y=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+M*p,n[5]=x-T*p,n[9]=-d*m,n[2]=T-x*p,n[6]=M+y*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,M=p*g,T=p*_;n[0]=x+T*d,n[4]=M*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=y*d-M,n[6]=T+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,M=p*g,T=p*_;n[0]=x-T*d,n[4]=-u*_,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*g,n[9]=T-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,y=u*_,M=d*g,T=d*_;n[0]=m*g,n[4]=M*p-y,n[8]=x*p+T,n[1]=m*_,n[5]=T*p+x,n[9]=y*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,y=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=T-x*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*_+M,n[10]=x-T*_}else if(e.order==="XZY"){const x=u*m,y=u*p,M=d*m,T=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+T,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=d*g,n[10]=T*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Ss.crossVectors(a,Ri),Ss.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Ss.crossVectors(a,Ri)),Ss.normalize(),yu.crossVectors(Ri,Ss),o[0]=Ss.x,o[4]=yu.x,o[8]=Ri.x,o[1]=Ss.y,o[5]=yu.y,o[9]=Ri.y,o[2]=Ss.z,o[6]=yu.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],y=a[13],M=a[2],T=a[6],S=a[10],v=a[14],L=a[3],U=a[7],F=a[11],j=a[15],N=o[0],z=o[4],K=o[8],C=o[12],w=o[1],G=o[5],ee=o[9],de=o[13],_e=o[2],Q=o[6],P=o[10],k=o[14],W=o[3],fe=o[7],pe=o[11],D=o[15];return c[0]=u*N+d*w+m*_e+p*W,c[4]=u*z+d*G+m*Q+p*fe,c[8]=u*K+d*ee+m*P+p*pe,c[12]=u*C+d*de+m*k+p*D,c[1]=g*N+_*w+x*_e+y*W,c[5]=g*z+_*G+x*Q+y*fe,c[9]=g*K+_*ee+x*P+y*pe,c[13]=g*C+_*de+x*k+y*D,c[2]=M*N+T*w+S*_e+v*W,c[6]=M*z+T*G+S*Q+v*fe,c[10]=M*K+T*ee+S*P+v*pe,c[14]=M*C+T*de+S*k+v*D,c[3]=L*N+U*w+F*_e+j*W,c[7]=L*z+U*G+F*Q+j*fe,c[11]=L*K+U*ee+F*P+j*pe,c[15]=L*C+U*de+F*k+j*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],M=e[3],T=e[7],S=e[11],v=e[15];return M*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*y-a*m*y)+T*(+n*m*y-n*p*x+c*u*x-o*u*y+o*p*g-c*m*g)+S*(+n*p*_-n*d*y-c*u*_+a*u*y+c*d*g-a*p*g)+v*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],M=e[12],T=e[13],S=e[14],v=e[15],L=_*S*p-T*x*p+T*m*y-d*S*y-_*m*v+d*x*v,U=M*x*p-g*S*p-M*m*y+u*S*y+g*m*v-u*x*v,F=g*T*p-M*_*p+M*d*y-u*T*y-g*d*v+u*_*v,j=M*_*m-g*T*m-M*d*x+u*T*x+g*d*S-u*_*S,N=n*L+a*U+o*F+c*j;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=L*z,e[1]=(T*x*c-_*S*c-T*o*y+a*S*y+_*o*v-a*x*v)*z,e[2]=(d*S*c-T*m*c+T*o*p-a*S*p-d*o*v+a*m*v)*z,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*y-a*m*y)*z,e[4]=U*z,e[5]=(g*S*c-M*x*c+M*o*y-n*S*y-g*o*v+n*x*v)*z,e[6]=(M*m*c-u*S*c-M*o*p+n*S*p+u*o*v-n*m*v)*z,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*y+n*m*y)*z,e[8]=F*z,e[9]=(M*_*c-g*T*c-M*a*y+n*T*y+g*a*v-n*_*v)*z,e[10]=(u*T*c-M*d*c+M*a*p-n*T*p-u*a*v+n*d*v)*z,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*y-n*d*y)*z,e[12]=j*z,e[13]=(g*T*o-M*_*o+M*a*x-n*T*x-g*a*S+n*_*S)*z,e[14]=(M*d*o-u*T*o-M*a*m+n*T*m+u*a*S-n*d*S)*z,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,y=c*g,M=c*_,T=u*g,S=u*_,v=d*_,L=m*p,U=m*g,F=m*_,j=a.x,N=a.y,z=a.z;return o[0]=(1-(T+v))*j,o[1]=(y+F)*j,o[2]=(M-U)*j,o[3]=0,o[4]=(y-F)*N,o[5]=(1-(x+v))*N,o[6]=(S+L)*N,o[7]=0,o[8]=(M+U)*z,o[9]=(S-L)*z,o[10]=(1-(x+T))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Jr.set(o[0],o[1],o[2]).length();const u=Jr.set(o[4],o[5],o[6]).length(),d=Jr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],$i.copy(this);const p=1/c,g=1/u,_=1/d;return $i.elements[0]*=p,$i.elements[1]*=p,$i.elements[2]*=p,$i.elements[4]*=g,$i.elements[5]*=g,$i.elements[6]*=g,$i.elements[8]*=_,$i.elements[9]*=_,$i.elements[10]*=_,n.setFromRotationMatrix($i),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=ca,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),y=(a+o)/(a-o);let M,T;if(m)M=c/(u-c),T=u*c/(u-c);else if(d===ca)M=-(u+c)/(u-c),T=-2*u*c/(u-c);else if(d===Ju)M=-u/(u-c),T=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=ca,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),y=-(a+o)/(a-o);let M,T;if(m)M=1/(u-c),T=u/(u-c);else if(d===ca)M=-2/(u-c),T=-(u+c)/(u-c);else if(d===Ju)M=-1/(u-c),T=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Jr=new ce,$i=new xn,QS=new ce(0,0,0),JS=new ce(1,1,1),Ss=new ce,yu=new ce,Ri=new ce,fv=new xn,dv=new nc;class ka{constructor(e=0,n=0,a=0,o=ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return fv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dv.setFromEuler(this),this.setFromQuaternion(dv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ka.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const hv=new ce,eo=new nc,Ua=new xn,Su=new ce,Al=new ce,tM=new ce,nM=new nc,pv=new ce(1,0,0),mv=new ce(0,1,0),gv=new ce(0,0,1),_v={type:"added"},iM={type:"removed"},to={type:"childadded",child:null},qh={type:"childremoved",child:null};class _i extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=tc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const e=new ce,n=new ka,a=new nc,o=new ce(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new xn},normalMatrix:{value:new bt}}),this.matrix=new xn,this.matrixWorld=new xn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(pv,e)}rotateY(e){return this.rotateOnAxis(mv,e)}rotateZ(e){return this.rotateOnAxis(gv,e)}translateOnAxis(e,n){return hv.copy(e).applyQuaternion(this.quaternion),this.position.add(hv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(pv,e)}translateY(e){return this.translateOnAxis(mv,e)}translateZ(e){return this.translateOnAxis(gv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Su.copy(e):Su.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(Al,Su,this.up):Ua.lookAt(Su,Al,this.up),this.quaternion.setFromRotationMatrix(Ua),o&&(Ua.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Ua),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_n("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_v),to.child=e,this.dispatchEvent(to),to.child=null):_n("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iM),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_v),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}_i.DEFAULT_UP=new ce(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new ce,La=new ce,Yh=new ce,Na=new ce,no=new ce,io=new ce,xv=new ce,$h=new ce,Zh=new ce,Kh=new ce,Qh=new yn,Jh=new yn,e0=new yn;class Ki{constructor(e=new ce,n=new ce,a=new ce){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Zi.subVectors(e,n),o.cross(Zi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Zi.subVectors(o,n),La.subVectors(a,n),Yh.subVectors(e,n);const u=Zi.dot(Zi),d=Zi.dot(La),m=Zi.dot(Yh),p=La.dot(La),g=La.dot(Yh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,M=(u*g-d*m)*x;return c.set(1-y-M,M,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,Na)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Na.x),m.addScaledVector(u,Na.y),m.addScaledVector(d,Na.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Qh.setScalar(0),Jh.setScalar(0),e0.setScalar(0),Qh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,a),e0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qh,c.x),u.addScaledVector(Jh,c.y),u.addScaledVector(e0,c.z),u}static isFrontFacing(e,n,a,o){return Zi.subVectors(a,n),La.subVectors(e,n),Zi.cross(La).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),La.subVectors(this.a,this.b),Zi.cross(La).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ki.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Ki.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;no.subVectors(o,a),io.subVectors(c,a),$h.subVectors(e,a);const m=no.dot($h),p=io.dot($h);if(m<=0&&p<=0)return n.copy(a);Zh.subVectors(e,o);const g=no.dot(Zh),_=io.dot(Zh);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(no,u);Kh.subVectors(e,c);const y=no.dot(Kh),M=io.dot(Kh);if(M>=0&&y<=M)return n.copy(c);const T=y*p-m*M;if(T<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(io,d);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return xv.subVectors(c,o),d=(_-g)/(_-g+(y-M)),n.copy(o).addScaledVector(xv,d);const v=1/(S+T+x);return u=T*v,d=x*v,n.copy(a).addScaledVector(no,u).addScaledVector(io,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function t0(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Vt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Bt.workingColorSpace){return this.r=e,this.g=n,this.b=a,Bt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Bt.workingColorSpace){if(e=kS(e,1),n=Ot(n,0,1),a=Ot(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=t0(u,c,e+1/3),this.g=t0(u,c,e),this.b=t0(u,c,e-1/3)}return Bt.colorSpaceToWorking(this,o),this}setStyle(e,n=ri){function a(c){c!==void 0&&parseFloat(c)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const a=zb[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Bt.workingToColorSpace(ii.copy(this),e),Math.round(Ot(ii.r*255,0,255))*65536+Math.round(Ot(ii.g*255,0,255))*256+Math.round(Ot(ii.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Bt.workingColorSpace){Bt.workingToColorSpace(ii.copy(this),n);const a=ii.r,o=ii.g,c=ii.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Bt.workingColorSpace){return Bt.workingToColorSpace(ii.copy(this),n),e.r=ii.r,e.g=ii.g,e.b=ii.b,e}getStyle(e=ri){Bt.workingToColorSpace(ii.copy(this),e);const n=ii.r,a=ii.g,o=ii.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ms),this.setHSL(Ms.h+e,Ms.s+n,Ms.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ms),e.getHSL(Mu);const a=Fh(Ms.h,Mu.h,n),o=Fh(Ms.s,Mu.s,n),c=Fh(Ms.l,Mu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ii=new Vt;Vt.NAMES=zb;let aM=0;class ac extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=tc(),this.name="",this.type="Material",this.blending=uo,this.side=Us,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=M0,this.blendDst=E0,this.blendEquation=ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=iv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ft(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ft(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(a.blending=this.blending),this.side!==Us&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==M0&&(a.blendSrc=this.blendSrc),this.blendDst!==E0&&(a.blendDst=this.blendDst),this.blendEquation!==ar&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==iv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ka,this.combine=Eb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cn=new ce,Eu=new Yt;let sM=0;class ua{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=av,this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix3(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyMatrix4(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.applyNormalMatrix(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Cn.fromBufferAttribute(this,n),Cn.transformDirection(e),this.setXYZ(n,Cn.x,Cn.y,Cn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=mi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=mi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),a=mi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),a=mi(a,this.array),o=mi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=mi(n,this.array),a=mi(a,this.array),o=mi(o,this.array),c=mi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==av&&(e.usage=this.usage),e}}class Fb extends ua{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Ib extends ua{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Va extends ua{constructor(e,n,a){super(new Float32Array(e),n,a)}}let rM=0;const Hi=new xn,n0=new _i,ao=new ce,wi=new ic,Rl=new ic,kn=new ce;class ta extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=tc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nb(e)?Ib:Fb)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new bt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,n,a){return Hi.makeTranslation(e,n,a),this.applyMatrix4(Hi),this}scale(e,n,a){return Hi.makeScale(e,n,a),this.applyMatrix4(Hi),this}lookAt(e){return n0.lookAt(e),n0.updateMatrix(),this.applyMatrix4(n0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Va(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_n("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(kn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(kn),kn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(kn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_n('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_n("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const a=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(kn.addVectors(wi.min,Rl.min),wi.expandByPoint(kn),kn.addVectors(wi.max,Rl.max),wi.expandByPoint(kn)):(wi.expandByPoint(Rl.min),wi.expandByPoint(Rl.max))}wi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)kn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(kn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)kn.fromBufferAttribute(d,p),m&&(ao.fromBufferAttribute(e,p),kn.add(ao)),o=Math.max(o,a.distanceToSquared(kn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&_n('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_n("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<a.count;K++)d[K]=new ce,m[K]=new ce;const p=new ce,g=new ce,_=new ce,x=new Yt,y=new Yt,M=new Yt,T=new ce,S=new ce;function v(K,C,w){p.fromBufferAttribute(a,K),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),x.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(x),M.sub(x);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(G),d[K].add(T),d[C].add(T),d[w].add(T),m[K].add(S),m[C].add(S),m[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let K=0,C=L.length;K<C;++K){const w=L[K],G=w.start,ee=w.count;for(let de=G,_e=G+ee;de<_e;de+=3)v(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const U=new ce,F=new ce,j=new ce,N=new ce;function z(K){j.fromBufferAttribute(o,K),N.copy(j);const C=d[K];U.copy(C),U.sub(j.multiplyScalar(j.dot(C))).normalize(),F.crossVectors(N,C);const G=F.dot(m[K])<0?-1:1;u.setXYZW(K,U.x,U.y,U.z,G)}for(let K=0,C=L.length;K<C;++K){const w=L[K],G=w.start,ee=w.count;for(let de=G,_e=G+ee;de<_e;de+=3)z(e.getX(de+0)),z(e.getX(de+1)),z(e.getX(de+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ua(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new ce,c=new ce,u=new ce,d=new ce,m=new ce,p=new ce,g=new ce,_=new ce;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),T=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,T),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,T),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(T,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)kn.fromBufferAttribute(e,n),kn.normalize(),e.setXYZ(n,kn.x,kn.y,kn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,M=0;for(let T=0,S=m.length;T<S;T++){d.isInterleavedBufferAttribute?y=m[T]*d.data.stride+d.offset:y=m[T]*g;for(let v=0;v<g;v++)x[M++]=p[y++]}return new ua(x,g,_)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ta,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vv=new xn,Js=new jp,Tu=new mf,bv=new ce,Au=new ce,Ru=new ce,wu=new ce,i0=new ce,Cu=new ce,yv=new ce,Du=new ce;class Ci extends _i{constructor(e=new ta,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(i0.fromBufferAttribute(_,e),u?Cu.addScaledVector(i0,g):Cu.addScaledVector(i0.sub(n),g))}n.add(Cu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(c),Js.copy(e.ray).recast(e.near),!(Tu.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Tu,bv)===null||Js.origin.distanceToSquared(bv)>(e.far-e.near)**2))&&(vv.copy(c).invert(),Js.copy(e.ray).applyMatrix4(vv),!(a.boundingBox!==null&&Js.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Js)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const S=x[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let F=L,j=U;F<j;F+=3){const N=d.getX(F),z=d.getX(F+1),K=d.getX(F+2);o=Ou(this,v,e,a,p,g,_,N,z,K),o&&(o.faceIndex=Math.floor(F/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let S=M,v=T;S<v;S+=3){const L=d.getX(S),U=d.getX(S+1),F=d.getX(S+2);o=Ou(this,u,e,a,p,g,_,L,U,F),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,T=x.length;M<T;M++){const S=x[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let F=L,j=U;F<j;F+=3){const N=F,z=F+1,K=F+2;o=Ou(this,v,e,a,p,g,_,N,z,K),o&&(o.faceIndex=Math.floor(F/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let S=M,v=T;S<v;S+=3){const L=S,U=S+1,F=S+2;o=Ou(this,u,e,a,p,g,_,L,U,F),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function oM(r,e,n,a,o,c,u,d){let m;if(e.side===gi?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Us,d),m===null)return null;Du.copy(d),Du.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Du);return p<n.near||p>n.far?null:{distance:p,point:Du.clone(),object:r}}function Ou(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Au),r.getVertexPosition(m,Ru),r.getVertexPosition(p,wu);const g=oM(r,e,n,a,Au,Ru,wu,yv);if(g){const _=new ce;Ki.getBarycoord(yv,Au,Ru,wu,_),o&&(g.uv=Ki.getInterpolatedAttribute(o,d,m,p,_,new Yt)),c&&(g.uv1=Ki.getInterpolatedAttribute(c,d,m,p,_,new Yt)),u&&(g.normal=Ki.getInterpolatedAttribute(u,d,m,p,_,new ce),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new ce,materialIndex:0};Ki.getNormal(Au,Ru,wu,x.normal),g.face=x,g.barycoord=_}return g}class sc extends ta{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Va(p,3)),this.setAttribute("normal",new Va(g,3)),this.setAttribute("uv",new Va(_,2));function M(T,S,v,L,U,F,j,N,z,K,C){const w=F/z,G=j/K,ee=F/2,de=j/2,_e=N/2,Q=z+1,P=K+1;let k=0,W=0;const fe=new ce;for(let pe=0;pe<P;pe++){const D=pe*G-de;for(let oe=0;oe<Q;oe++){const Se=oe*w-ee;fe[T]=Se*L,fe[S]=D*U,fe[v]=_e,p.push(fe.x,fe.y,fe.z),fe[T]=0,fe[S]=0,fe[v]=N>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(oe/z),_.push(1-pe/K),k+=1}}for(let pe=0;pe<K;pe++)for(let D=0;D<z;D++){const oe=x+D+Q*pe,Se=x+D+Q*(pe+1),Te=x+(D+1)+Q*(pe+1),ze=x+(D+1)+Q*pe;m.push(oe,Se,ze),m.push(Se,Te,ze),W+=6}d.addGroup(y,W,C),y+=W,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function si(r){const e={};for(let n=0;n<r.length;n++){const a=Mo(r[n]);for(const o in a)e[o]=a[o]}return e}function lM(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Bb(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const cM={clone:Mo,merge:si};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=lM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Hb extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xn,this.projectionMatrix=new xn,this.projectionMatrixInverse=new xn,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Es=new ce,Sv=new Yt,Mv=new Yt;class Gi extends Hb{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=up*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return up*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Es.x,Es.y).multiplyScalar(-e/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Es.x,Es.y).multiplyScalar(-e/Es.z)}getViewSize(e,n){return this.getViewBounds(e,Sv,Mv),n.subVectors(Mv,Sv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const so=-90,ro=1;class dM extends _i{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gi(so,ro,e,n);o.layers=this.layers,this.add(o);const c=new Gi(so,ro,e,n);c.layers=this.layers,this.add(c);const u=new Gi(so,ro,e,n);u.layers=this.layers,this.add(u);const d=new Gi(so,ro,e,n);d.layers=this.layers,this.add(d);const m=new Gi(so,ro,e,n);m.layers=this.layers,this.add(m);const p=new Gi(so,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===ca)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ju)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Gb extends Wn{constructor(e=[],n=bo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new Gb(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Mo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:gi,blending:Ha});c.uniforms.tEquirect.value=n;const u=new Ci(o,c),d=n.minFilter;return n.minFilter===or&&(n.minFilter=ei),new dM(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class lr extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class a0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const T of e.hand.values()){const S=n.getJointPose(T,a),v=this._getHandJoint(p,T);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new lr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class Xp{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Vt(e),this.near=n,this.far=a}clone(){return new Xp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mM extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ka,this.environmentIntensity=1,this.environmentRotation=new ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class gM extends Wn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Di,g=Di,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s0=new ce,_M=new ce,xM=new bt;class ir{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=s0.subVectors(a,n).cross(_M.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(s0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||xM.getNormalMatrix(e),o=this.coplanarPoint(s0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new mf,vM=new Yt(.5,.5),Uu=new ce;class Wp{constructor(e=new ir,n=new ir,a=new ir,o=new ir,c=new ir,u=new ir){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ca,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],M=c[8],T=c[9],S=c[10],v=c[11],L=c[12],U=c[13],F=c[14],j=c[15];if(o[0].setComponents(p-u,y-g,v-M,j-L).normalize(),o[1].setComponents(p+u,y+g,v+M,j+L).normalize(),o[2].setComponents(p+d,y+_,v+T,j+U).normalize(),o[3].setComponents(p-d,y-_,v-T,j-U).normalize(),a)o[4].setComponents(m,x,S,F).normalize(),o[5].setComponents(p-m,y-x,v-S,j-F).normalize();else if(o[4].setComponents(p-m,y-x,v-S,j-F).normalize(),n===ca)o[5].setComponents(p+m,y+x,v+S,j+F).normalize();else if(n===Ju)o[5].setComponents(m,x,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){er.center.set(0,0,0);const n=vM.distanceTo(e.center);return er.radius=.7071067811865476+n,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Uu.x=o.normal.x>0?e.max.x:e.min.x,Uu.y=o.normal.y>0?e.max.y:e.min.y,Uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fp extends ac{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new ce,tf=new ce,Ev=new xn,wl=new jp,Lu=new mf,r0=new ce,Tv=new ce;class bM extends _i{constructor(e=new ta,n=new fp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ef.fromBufferAttribute(n,o-1),tf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new Va(a,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Lu.copy(a.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=c,e.ray.intersectsSphere(Lu)===!1)return;Ev.copy(o).invert(),wl.copy(e.ray).applyMatrix4(Ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=p){const v=g.getX(T),L=g.getX(T+1),U=Nu(this,e,wl,m,v,L,T);U&&n.push(U)}if(this.isLineLoop){const T=g.getX(M-1),S=g.getX(y),v=Nu(this,e,wl,m,T,S,M-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let T=y,S=M-1;T<S;T+=p){const v=Nu(this,e,wl,m,T,T+1,T);v&&n.push(v)}if(this.isLineLoop){const T=Nu(this,e,wl,m,M-1,y,M-1);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(ef.fromBufferAttribute(d,o),tf.fromBufferAttribute(d,c),n.distanceSqToSegment(ef,tf,r0,Tv)>a)return;r0.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(r0);if(!(p<e.near||p>e.far))return{distance:p,point:Tv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Av=new ce,Rv=new ce;class wv extends bM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Av.fromBufferAttribute(n,o),Rv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Av.distanceTo(Rv);e.setAttribute("lineDistance",new Va(a,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yM extends Wn{constructor(e,n,a,o,c=ei,u=ei,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class SM extends Wn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Vb extends Wn{constructor(e,n,a=pr,o,c,u,d=Di,m=Di,p,g=jl,_=1){if(g!==jl&&g!==kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jb extends Wn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends ta{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,y=[],M=[],T=[],S=[];for(let v=0;v<g;v++){const L=v*x-u;for(let U=0;U<p;U++){const F=U*_-c;M.push(F,-L,0),T.push(0,0,1),S.push(U/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const U=L+p*v,F=L+p*(v+1),j=L+1+p*(v+1),N=L+1+p*v;y.push(U,F,N),y.push(F,j,N)}this.setIndex(y),this.setAttribute("position",new Va(M,3)),this.setAttribute("normal",new Va(T,3)),this.setAttribute("uv",new Va(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class MM extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EM extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class TM{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],M=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const AM=new TM;class qp{constructor(e){this.manager=e!==void 0?e:AM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qp.DEFAULT_MATERIAL_NAME="__DEFAULT";const oo=new WeakMap;class RM extends qp{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=o0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=oo.get(u);_===void 0&&(_=[],oo.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Xl("img");function m(){g(),n&&n(this);const _=oo.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}oo.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),o0.remove(`image:${e}`);const x=oo.get(this)||[];for(let y=0;y<x.length;y++){const M=x[y];M.onError&&M.onError(_)}oo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),o0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class wM extends qp{constructor(e){super(e)}load(e,n,a,o){const c=new Wn,u=new RM(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class CM extends Hb{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DM extends Gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cv=new xn;class OM{constructor(e,n,a=0,o=1/0){this.ray=new jp(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):_n("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Cv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cv),this}intersectObject(e,n=!0,a=[]){return dp(e,this,a,n),a.sort(Dv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)dp(e[o],this,a,n);return a.sort(Dv),a}}function Dv(r,e){return r.distance-e.distance}function dp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)dp(c[u],e,n,!0)}}function Ov(r,e,n,a){const o=UM(a);switch(n){case Db:return r*e;case Ub:return r*e/o.components*o.byteLength;case Ip:return r*e/o.components*o.byteLength;case Bp:return r*e*2/o.components*o.byteLength;case Hp:return r*e*2/o.components*o.byteLength;case Ob:return r*e*3/o.components*o.byteLength;case Qi:return r*e*4/o.components*o.byteLength;case Gp:return r*e*4/o.components*o.byteLength;case Iu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case F0:case B0:return Math.max(r,16)*Math.max(e,8)/4;case z0:case I0:return Math.max(r,8)*Math.max(e,8)/2;case H0:case G0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case V0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case j0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case k0:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case X0:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case W0:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case q0:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Y0:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case $0:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Z0:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case K0:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Q0:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case J0:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case tp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case np:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ip:case ap:case sp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case rp:case op:return Math.ceil(r/4)*Math.ceil(e/4)*8;case lp:case cp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function UM(r){switch(r){case ja:case Ab:return{byteLength:1,components:1};case Gl:case Rb:case Do:return{byteLength:2,components:1};case zp:case Fp:return{byteLength:2,components:4};case pr:case Pp:case Ia:return{byteLength:4,components:1};case wb:case Cb:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Np}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Np);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kb(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function LM(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],T=_[y];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++x,_[x]=T)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const T=_[y];r.bufferSubData(p,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var NM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
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
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qM=`#ifdef USE_IRIDESCENCE
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
#endif`,YM=`#ifdef USE_BUMPMAP
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
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,t3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,n3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,i3=`#define PI 3.141592653589793
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
} // validated`,a3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s3=`vec3 transformedNormal = objectNormal;
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
#endif`,r3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u3="gl_FragColor = linearToOutputTexel( gl_FragColor );",f3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d3=`#ifdef USE_ENVMAP
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
#endif`,h3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,p3=`#ifdef USE_ENVMAP
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
#endif`,m3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,g3=`#ifdef USE_ENVMAP
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
#endif`,_3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y3=`#ifdef USE_GRADIENTMAP
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
}`,S3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T3=`uniform bool receiveShadow;
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
#endif`,A3=`#ifdef USE_ENVMAP
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
#endif`,R3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,D3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O3=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,U3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,L3=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,N3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,P3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j3=`#if defined( USE_POINTS_UV )
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
#endif`,k3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$3=`#ifdef USE_MORPHTARGETS
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
#endif`,Z3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
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
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,vE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,yE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
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
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NE=`uniform sampler2D t2D;
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`#include <common>
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
}`,HE=`#if DEPTH_PACKING == 3200
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
}`,GE=`#define DISTANCE
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
}`,VE=`#define DISTANCE
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
	gl_FragColor = packDepthToRGBA( dist );
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
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
}`,WE=`uniform vec3 diffuse;
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
}`,qE=`#include <common>
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
}`,YE=`uniform vec3 diffuse;
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
}`,$E=`#define LAMBERT
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
}`,ZE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,KE=`#define MATCAP
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
}`,QE=`#define MATCAP
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
}`,JE=`#define NORMAL
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
}`,eT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tT=`#define PHONG
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
}`,nT=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,iT=`#define STANDARD
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
}`,aT=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,sT=`#define TOON
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
}`,rT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,oT=`uniform float size;
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#include <common>
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
}`,uT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fT=`uniform float rotation;
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
}`,dT=`uniform vec3 diffuse;
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
}`,yt={alphahash_fragment:NM,alphahash_pars_fragment:PM,alphamap_fragment:zM,alphamap_pars_fragment:FM,alphatest_fragment:IM,alphatest_pars_fragment:BM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:VM,batching_vertex:jM,begin_vertex:kM,beginnormal_vertex:XM,bsdfs:WM,iridescence_fragment:qM,bumpmap_pars_fragment:YM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:ZM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:QM,color_fragment:JM,color_pars_fragment:e3,color_pars_vertex:t3,color_vertex:n3,common:i3,cube_uv_reflection_fragment:a3,defaultnormal_vertex:s3,displacementmap_pars_vertex:r3,displacementmap_vertex:o3,emissivemap_fragment:l3,emissivemap_pars_fragment:c3,colorspace_fragment:u3,colorspace_pars_fragment:f3,envmap_fragment:d3,envmap_common_pars_fragment:h3,envmap_pars_fragment:p3,envmap_pars_vertex:m3,envmap_physical_pars_fragment:A3,envmap_vertex:g3,fog_vertex:_3,fog_pars_vertex:x3,fog_fragment:v3,fog_pars_fragment:b3,gradientmap_pars_fragment:y3,lightmap_pars_fragment:S3,lights_lambert_fragment:M3,lights_lambert_pars_fragment:E3,lights_pars_begin:T3,lights_toon_fragment:R3,lights_toon_pars_fragment:w3,lights_phong_fragment:C3,lights_phong_pars_fragment:D3,lights_physical_fragment:O3,lights_physical_pars_fragment:U3,lights_fragment_begin:L3,lights_fragment_maps:N3,lights_fragment_end:P3,logdepthbuf_fragment:z3,logdepthbuf_pars_fragment:F3,logdepthbuf_pars_vertex:I3,logdepthbuf_vertex:B3,map_fragment:H3,map_pars_fragment:G3,map_particle_fragment:V3,map_particle_pars_fragment:j3,metalnessmap_fragment:k3,metalnessmap_pars_fragment:X3,morphinstance_vertex:W3,morphcolor_vertex:q3,morphnormal_vertex:Y3,morphtarget_pars_vertex:$3,morphtarget_vertex:Z3,normal_fragment_begin:K3,normal_fragment_maps:Q3,normal_pars_fragment:J3,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:aE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:rE,opaque_fragment:oE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:_E,shadowmask_pars_fragment:xE,skinbase_vertex:vE,skinning_pars_vertex:bE,skinning_vertex:yE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:RE,transmission_pars_fragment:wE,uv_pars_fragment:CE,uv_pars_vertex:DE,uv_vertex:OE,worldpos_vertex:UE,background_vert:LE,background_frag:NE,backgroundCube_vert:PE,backgroundCube_frag:zE,cube_vert:FE,cube_frag:IE,depth_vert:BE,depth_frag:HE,distanceRGBA_vert:GE,distanceRGBA_frag:VE,equirect_vert:jE,equirect_frag:kE,linedashed_vert:XE,linedashed_frag:WE,meshbasic_vert:qE,meshbasic_frag:YE,meshlambert_vert:$E,meshlambert_frag:ZE,meshmatcap_vert:KE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:eT,meshphong_vert:tT,meshphong_frag:nT,meshphysical_vert:iT,meshphysical_frag:aT,meshtoon_vert:sT,meshtoon_frag:rT,points_vert:oT,points_frag:lT,shadow_vert:cT,shadow_frag:uT,sprite_vert:fT,sprite_frag:dT},Pe={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},la={basic:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:si([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:si([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:si([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Vt(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:si([Pe.points,Pe.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:si([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:si([Pe.common,Pe.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:si([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:si([Pe.sprite,Pe.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distanceRGBA:{uniforms:si([Pe.common,Pe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distanceRGBA_vert,fragmentShader:yt.distanceRGBA_frag},shadow:{uniforms:si([Pe.lights,Pe.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};la.physical={uniforms:si([la.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};const Pu={r:0,b:0,g:0},tr=new ka,hT=new xn;function pT(r,e,n,a,o,c,u){const d=new Vt(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function M(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?n:e).get(F)),F}function T(U){let F=!1;const j=M(U);j===null?v(d,m):j&&j.isColor&&(v(j,1),F=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||F)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,F){const j=M(F);j&&(j.isCubeTexture||j.mapping===pf)?(g===void 0&&(g=new Ci(new sc(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Mo(la.backgroundCube.uniforms),vertexShader:la.backgroundCube.vertexShader,fragmentShader:la.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),tr.copy(F.backgroundRotation),tr.x*=-1,tr.y*=-1,tr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(tr.y*=-1,tr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(hT.makeRotationFromEuler(tr)),g.material.toneMapped=Bt.getTransfer(j.colorSpace)!==Qt,(_!==j||x!==j.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Ci(new Rs(2,2),new Xa({name:"BackgroundMaterial",uniforms:Mo(la.background.uniforms),vertexShader:la.background.vertexShader,fragmentShader:la.background.fragmentShader,side:Us,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Bt.getTransfer(j.colorSpace)!==Qt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||x!==j.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(Pu,Bb(r)),a.buffers.color.setClear(Pu.r,Pu.g,Pu.b,F,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,F=1){d.set(U),m=F,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:T,addToRenderList:S,dispose:L}}function mT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(w,G,ee,de,_e){let Q=!1;const P=_(de,ee,G);c!==P&&(c=P,p(c.object)),Q=y(w,de,ee,_e),Q&&M(w,de,ee,_e),_e!==null&&e.update(_e,r.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,F(w,G,ee,de),_e!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,ee){const de=ee.wireframe===!0;let _e=a[w.id];_e===void 0&&(_e={},a[w.id]=_e);let Q=_e[G.id];Q===void 0&&(Q={},_e[G.id]=Q);let P=Q[de];return P===void 0&&(P=x(m()),Q[de]=P),P}function x(w){const G=[],ee=[],de=[];for(let _e=0;_e<n;_e++)G[_e]=0,ee[_e]=0,de[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:de,object:w,attributes:{},index:null}}function y(w,G,ee,de){const _e=c.attributes,Q=G.attributes;let P=0;const k=ee.getAttributes();for(const W in k)if(k[W].location>=0){const pe=_e[W];let D=Q[W];if(D===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),pe===void 0||pe.attribute!==D||D&&pe.data!==D.data)return!0;P++}return c.attributesNum!==P||c.index!==de}function M(w,G,ee,de){const _e={},Q=G.attributes;let P=0;const k=ee.getAttributes();for(const W in k)if(k[W].location>=0){let pe=Q[W];pe===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const D={};D.attribute=pe,pe&&pe.data&&(D.data=pe.data),_e[W]=D,P++}c.attributes=_e,c.attributesNum=P,c.index=de}function T(){const w=c.newAttributes;for(let G=0,ee=w.length;G<ee;G++)w[G]=0}function S(w){v(w,0)}function v(w,G){const ee=c.newAttributes,de=c.enabledAttributes,_e=c.attributeDivisors;ee[w]=1,de[w]===0&&(r.enableVertexAttribArray(w),de[w]=1),_e[w]!==G&&(r.vertexAttribDivisor(w,G),_e[w]=G)}function L(){const w=c.newAttributes,G=c.enabledAttributes;for(let ee=0,de=G.length;ee<de;ee++)G[ee]!==w[ee]&&(r.disableVertexAttribArray(ee),G[ee]=0)}function U(w,G,ee,de,_e,Q,P){P===!0?r.vertexAttribIPointer(w,G,ee,_e,Q):r.vertexAttribPointer(w,G,ee,de,_e,Q)}function F(w,G,ee,de){T();const _e=de.attributes,Q=ee.getAttributes(),P=G.defaultAttributeValues;for(const k in Q){const W=Q[k];if(W.location>=0){let fe=_e[k];if(fe===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(fe=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(fe=w.instanceColor)),fe!==void 0){const pe=fe.normalized,D=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const Se=oe.buffer,Te=oe.type,ze=oe.bytesPerElement,re=Te===r.INT||Te===r.UNSIGNED_INT||fe.gpuType===Pp;if(fe.isInterleavedBufferAttribute){const he=fe.data,Ue=he.stride,Ve=fe.offset;if(he.isInstancedInterleavedBuffer){for(let We=0;We<W.locationSize;We++)v(W.location+We,he.meshPerAttribute);w.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let We=0;We<W.locationSize;We++)S(W.location+We);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let We=0;We<W.locationSize;We++)U(W.location+We,D/W.locationSize,Te,pe,Ue*ze,(Ve+D/W.locationSize*We)*ze,re)}else{if(fe.isInstancedBufferAttribute){for(let he=0;he<W.locationSize;he++)v(W.location+he,fe.meshPerAttribute);w.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let he=0;he<W.locationSize;he++)S(W.location+he);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let he=0;he<W.locationSize;he++)U(W.location+he,D/W.locationSize,Te,pe,D*ze,D/W.locationSize*he*ze,re)}}else if(P!==void 0){const pe=P[k];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(W.location,pe);break;case 3:r.vertexAttrib3fv(W.location,pe);break;case 4:r.vertexAttrib4fv(W.location,pe);break;default:r.vertexAttrib1fv(W.location,pe)}}}}L()}function j(){K();for(const w in a){const G=a[w];for(const ee in G){const de=G[ee];for(const _e in de)g(de[_e].object),delete de[_e];delete G[ee]}delete a[w]}}function N(w){if(a[w.id]===void 0)return;const G=a[w.id];for(const ee in G){const de=G[ee];for(const _e in de)g(de[_e].object),delete de[_e];delete G[ee]}delete a[w.id]}function z(w){for(const G in a){const ee=a[G];if(ee[w.id]===void 0)continue;const de=ee[w.id];for(const _e in de)g(de[_e].object),delete de[_e];delete ee[w.id]}}function K(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:S,disableUnusedAttributes:L}}function gT(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T]*x[T];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _T(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==Qi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const K=z===Do&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ja&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ia&&!K)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(ft("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),F=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:j,maxSamples:N}}function xT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new ir,d=new bt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||a!==0||o;return o=x,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,T=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||c&&!S)c?g(null):p();else{const L=c?0:a,U=L*4;let F=v.clippingState||null;m.value=F,F=g(M,x,U,y);for(let j=0;j!==U;++j)F[j]=n[j];v.clippingState=F,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,y,M){const T=_!==null?_.length:0;let S=null;if(T!==0){if(S=m.value,M!==!0||S===null){const v=y+T*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,F=y;U!==T;++U,F+=4)u.copy(_[U]).applyMatrix4(L,d),u.normal.toArray(S,F),S[F+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}function vT(r){let e=new WeakMap;function n(u,d){return d===U0?u.mapping=bo:d===L0&&(u.mapping=yo),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===U0||d===L0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new hM(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const ws=4,Uv=[.125,.215,.35,.446,.526,.582],sr=20,bT=256,Cl=new CM,Lv=new Vt;let l0=null,c0=0,u0=0,f0=!1;const yT=new ce;class Nv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=yT}=c;l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(l0,c0,u0),this._renderer.xr.enabled=f0,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Do,format:Qi,colorSpace:So,depthBuffer:!1},o=Pv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(c)),this._blurMaterial=ET(c,e,n),this._ggxMaterial=MT(c,e,n)}return o}_compileMaterial(e){const n=new Ci(new ta,e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,a,o,c){const m=new Gi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Lv),_.toneMapping=Cs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new sc,new Ol({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(Lv),v=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const j=this._cubeSize;lo(o,F*j,U>2?j:0,j,j),_.setRenderTarget(o),v&&_.render(T,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===bo||e.mapping===yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;lo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Cl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,y=_*x,{_lodMax:M}=this,T=this._sizeLods[a],S=3*T*(a>M-ws?a-M+ws:0),v=4*(this._cubeSize-T);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-n,lo(c,S,v,3*T,2*T),o.setRenderTarget(c),o.render(d,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,lo(e,S,v,3*T,2*T),o.setRenderTarget(e),o.render(d,Cl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&_n("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*sr-1),T=c/M,S=isFinite(c)?1+Math.floor(g*T):sr;S>sr&&ft(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${sr}`);const v=[];let L=0;for(let z=0;z<sr;++z){const K=z/T,C=Math.exp(-K*K/2);v.push(C),z===0?L+=C:z<S&&(L+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-a;const F=this._sizeLods[o],j=3*F*(o>U-ws?o-U+ws:0),N=4*(this._cubeSize-F);lo(n,j,N,3*F,2*F),m.setRenderTarget(n),m.render(_,Cl)}}function ST(r){const e=[],n=[],a=[];let o=r;const c=r-ws+1+Uv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-ws?m=Uv[u-r+ws-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,T=3,S=2,v=1,L=new Float32Array(T*M*y),U=new Float32Array(S*M*y),F=new Float32Array(v*M*y);for(let N=0;N<y;N++){const z=N%3*2/3-1,K=N>2?0:-1,C=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];L.set(C,T*M*N),U.set(x,S*M*N);const w=[N,N,N,N,N,N];F.set(w,v*M*N)}const j=new ta;j.setAttribute("position",new ua(L,T)),j.setAttribute("uv",new ua(U,S)),j.setAttribute("faceIndex",new ua(F,v)),a.push(new Ci(j,null)),o>ws&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Pv(r,e,n){const a=new mr(r,e,n);return a.texture.mapping=pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lo(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function MT(r,e,n){return new Xa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function ET(r,e,n){const a=new Float32Array(sr),o=new ce(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function zv(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function Fv(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ha,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function TT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===U0||m===L0,g=m===bo||m===yo;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Nv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Nv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function AT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Wl("WebGLRenderer: "+a+" extension not supported."),o}}}function RT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let T=0;if(y!==null){const L=y.array;T=y.version;for(let U=0,F=L.length;U<F;U+=3){const j=L[U+0],N=L[U+1],z=L[U+2];x.push(j,N,N,z,z,j)}}else if(M!==void 0){const L=M.array;T=M.version;for(let U=0,F=L.length/3-1;U<F;U+=3){const j=U+0,N=U+1,z=U+2;x.push(j,N,N,z,z,j)}}else return;const S=new(Nb(x)?Ib:Fb)(x,1);S.version=T;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function wT(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*u),n.update(y,a,1)}function p(x,y,M){M!==0&&(r.drawElementsInstanced(a,y,c,x*u,M),n.update(y,a,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];n.update(S,a,1)}function _(x,y,M,T){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/u,y[v],T[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,T,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*T[L];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function CT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:_n("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function DT(r,e,n){const a=new WeakMap,o=new yn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let w=function(){K.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let F=0;M===!0&&(F=1),T===!0&&(F=2),S===!0&&(F=3);let j=d.attributes.position.count*F,N=1;j>e.maxTextureSize&&(N=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const z=new Float32Array(j*N*4*_),K=new Pb(z,j,N,_);K.type=Ia,K.needsUpdate=!0;const C=F*4;for(let G=0;G<_;G++){const ee=v[G],de=L[G],_e=U[G],Q=j*N*4*G;for(let P=0;P<ee.count;P++){const k=P*C;M===!0&&(o.fromBufferAttribute(ee,P),z[Q+k+0]=o.x,z[Q+k+1]=o.y,z[Q+k+2]=o.z,z[Q+k+3]=0),T===!0&&(o.fromBufferAttribute(de,P),z[Q+k+4]=o.x,z[Q+k+5]=o.y,z[Q+k+6]=o.z,z[Q+k+7]=0),S===!0&&(o.fromBufferAttribute(_e,P),z[Q+k+8]=o.x,z[Q+k+9]=o.y,z[Q+k+10]=o.z,z[Q+k+11]=_e.itemSize===4?o.w:1)}}x={count:_,texture:K,size:new Yt(j,N)},a.set(d,x),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",T),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function OT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const Xb=new Wn,Iv=new Vb(1,1),Wb=new Pb,qb=new ZS,Yb=new Gb,Bv=[],Hv=[],Gv=new Float32Array(16),Vv=new Float32Array(9),jv=new Float32Array(4);function Uo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Bv[o];if(c===void 0&&(c=new Float32Array(o),Bv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Pn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function zn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function _f(r,e){let n=Hv[e];n===void 0&&(n=new Int32Array(e),Hv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function UT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function LT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;r.uniform2fv(this.addr,e),zn(n,e)}}function NT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pn(n,e))return;r.uniform3fv(this.addr,e),zn(n,e)}}function PT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;r.uniform4fv(this.addr,e),zn(n,e)}}function zT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Pn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,a))return;jv.set(a),r.uniformMatrix2fv(this.addr,!1,jv),zn(n,a)}}function FT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Pn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,a))return;Vv.set(a),r.uniformMatrix3fv(this.addr,!1,Vv),zn(n,a)}}function IT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Pn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),zn(n,e)}else{if(Pn(n,a))return;Gv.set(a),r.uniformMatrix4fv(this.addr,!1,Gv),zn(n,a)}}function BT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function HT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;r.uniform2iv(this.addr,e),zn(n,e)}}function GT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;r.uniform3iv(this.addr,e),zn(n,e)}}function VT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;r.uniform4iv(this.addr,e),zn(n,e)}}function jT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function kT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pn(n,e))return;r.uniform2uiv(this.addr,e),zn(n,e)}}function XT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pn(n,e))return;r.uniform3uiv(this.addr,e),zn(n,e)}}function WT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pn(n,e))return;r.uniform4uiv(this.addr,e),zn(n,e)}}function qT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Iv.compareFunction=Lb,c=Iv):c=Xb,n.setTexture2D(e||c,o)}function YT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||qb,o)}function $T(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||Yb,o)}function ZT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Wb,o)}function KT(r){switch(r){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return PT;case 35674:return zT;case 35675:return FT;case 35676:return IT;case 5124:case 35670:return BT;case 35667:case 35671:return HT;case 35668:case 35672:return GT;case 35669:case 35673:return VT;case 5125:return jT;case 36294:return kT;case 36295:return XT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return $T;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(r,e){r.uniform1fv(this.addr,e)}function JT(r,e){const n=Uo(e,this.size,2);r.uniform2fv(this.addr,n)}function eA(r,e){const n=Uo(e,this.size,3);r.uniform3fv(this.addr,n)}function tA(r,e){const n=Uo(e,this.size,4);r.uniform4fv(this.addr,n)}function nA(r,e){const n=Uo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function iA(r,e){const n=Uo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function aA(r,e){const n=Uo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function sA(r,e){r.uniform1iv(this.addr,e)}function rA(r,e){r.uniform2iv(this.addr,e)}function oA(r,e){r.uniform3iv(this.addr,e)}function lA(r,e){r.uniform4iv(this.addr,e)}function cA(r,e){r.uniform1uiv(this.addr,e)}function uA(r,e){r.uniform2uiv(this.addr,e)}function fA(r,e){r.uniform3uiv(this.addr,e)}function dA(r,e){r.uniform4uiv(this.addr,e)}function hA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Pn(a,c)||(r.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Xb,c[u])}function pA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Pn(a,c)||(r.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||qb,c[u])}function mA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Pn(a,c)||(r.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Yb,c[u])}function gA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Pn(a,c)||(r.uniform1iv(this.addr,c),zn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Wb,c[u])}function _A(r){switch(r){case 5126:return QT;case 35664:return JT;case 35665:return eA;case 35666:return tA;case 35674:return nA;case 35675:return iA;case 35676:return aA;case 5124:case 35670:return sA;case 35667:case 35671:return rA;case 35668:case 35672:return oA;case 35669:case 35673:return lA;case 5125:return cA;case 36294:return uA;case 36295:return fA;case 36296:return dA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return pA;case 35680:case 36300:case 36308:case 36293:return mA;case 36289:case 36303:case 36311:case 36292:return gA}}class xA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=KT(n.type)}}class vA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_A(n.type)}}class bA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const d0=/(\w+)(\])?(\[|\.)?/g;function kv(r,e){r.seq.push(e),r.map[e.id]=e}function yA(r,e,n){const a=r.name,o=a.length;for(d0.lastIndex=0;;){const c=d0.exec(a),u=d0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){kv(n,p===void 0?new xA(d,r,e):new vA(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new bA(d),kv(n,_)),n=_}}}class Vu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);yA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function Xv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const SA=37297;let MA=0;function EA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const Wv=new bt;function TA(r){Bt._getMatrix(Wv,Bt.workingColorSpace,r);const e=`mat3( ${Wv.elements.map(n=>n.toFixed(4))} )`;switch(Bt.getTransfer(r)){case Qu:return[e,"LinearTransferOETF"];case Qt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function qv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+EA(r.getShaderSource(e),d)}else return c}function AA(r,e){const n=TA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function RA(r,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case TS:n="Cineon";break;case AS:n="ACESFilmic";break;case wS:n="AgX";break;case CS:n="Neutral";break;case RS:n="Custom";break;default:ft("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new ce;function wA(){Bt.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),e=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function DA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function OA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Dl(r){return r!==""}function Yv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UA=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(r){return r.replace(UA,NA)}const LA=new Map;function NA(r,e){let n=yt[e];if(n===void 0){const a=LA.get(e);if(a!==void 0)n=yt[a],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return hp(n)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zv(r){return r.replace(PA,zA)}function zA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Kv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function FA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mb?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===nS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===za&&(e="SHADOWMAP_TYPE_VSM"),e}function IA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bo:case yo:e="ENVMAP_TYPE_CUBE";break;case pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function HA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Eb:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function GA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function VA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=FA(n),p=IA(n),g=BA(n),_=HA(n),x=GA(n),y=CA(n),M=DA(c),T=o.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),v.length>0&&(v+=`
`)):(S=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),v=[Kv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Cs?"#define TONE_MAPPING":"",n.toneMapping!==Cs?yt.tonemapping_pars_fragment:"",n.toneMapping!==Cs?RA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,AA("linearToOutputTexel",n.outputColorSpace),wA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),u=hp(u),u=Yv(u,n),u=$v(u,n),d=hp(d),d=Yv(d,n),d=$v(d,n),u=Zv(u),d=Zv(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+S+u,F=L+v+d,j=Xv(o,o.VERTEX_SHADER,U),N=Xv(o,o.FRAGMENT_SHADER,F);o.attachShader(T,j),o.attachShader(T,N),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function z(G){if(r.debug.checkShaderErrors){const ee=o.getProgramInfoLog(T)||"",de=o.getShaderInfoLog(j)||"",_e=o.getShaderInfoLog(N)||"",Q=ee.trim(),P=de.trim(),k=_e.trim();let W=!0,fe=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,T,j,N);else{const pe=qv(o,j,"vertex"),D=qv(o,N,"fragment");_n("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+pe+`
`+D)}else Q!==""?ft("WebGLProgram: Program Info Log:",Q):(P===""||k==="")&&(fe=!1);fe&&(G.diagnostics={runnable:W,programLog:Q,vertexShader:{log:P,prefix:S},fragmentShader:{log:k,prefix:v}})}o.deleteShader(j),o.deleteShader(N),K=new Vu(o,T),C=OA(o,T)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(T,SA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=N,this}let jA=0;class kA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new XA(e),n.set(e,a)),a}}class XA{constructor(e){this.id=jA++,this.code=e,this.usedTimes=0}}function WA(r,e,n,a,o,c,u){const d=new kp,m=new kA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,G,ee,de){const _e=ee.fog,Q=de.geometry,P=C.isMeshStandardMaterial?ee.environment:null,k=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),W=k&&k.mapping===pf?k.image.height:null,fe=M[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&ft("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const pe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,D=pe!==void 0?pe.length:0;let oe=0;Q.morphAttributes.position!==void 0&&(oe=1),Q.morphAttributes.normal!==void 0&&(oe=2),Q.morphAttributes.color!==void 0&&(oe=3);let Se,Te,ze,re;if(fe){const Ut=la[fe];Se=Ut.vertexShader,Te=Ut.fragmentShader}else Se=C.vertexShader,Te=C.fragmentShader,m.update(C),ze=m.getVertexShaderID(C),re=m.getFragmentShaderID(C);const he=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Ve=de.isInstancedMesh===!0,We=de.isBatchedMesh===!0,dt=!!C.map,dn=!!C.matcap,ht=!!k,Rt=!!C.aoMap,B=!!C.lightMap,pt=!!C.bumpMap,mt=!!C.normalMap,Lt=!!C.displacementMap,ke=!!C.emissiveMap,kt=!!C.metalnessMap,$e=!!C.roughnessMap,nt=C.anisotropy>0,O=C.clearcoat>0,E=C.dispersion>0,te=C.iridescence>0,xe=C.sheen>0,Z=C.transmission>0,q=nt&&!!C.anisotropyMap,Ne=O&&!!C.clearcoatMap,Ae=O&&!!C.clearcoatNormalMap,qe=O&&!!C.clearcoatRoughnessMap,He=te&&!!C.iridescenceMap,ye=te&&!!C.iridescenceThicknessMap,Ee=xe&&!!C.sheenColorMap,Ze=xe&&!!C.sheenRoughnessMap,je=!!C.specularMap,Fe=!!C.specularColorMap,at=!!C.specularIntensityMap,H=Z&&!!C.transmissionMap,Oe=Z&&!!C.thicknessMap,we=!!C.gradientMap,Ce=!!C.alphaMap,Me=C.alphaTest>0,ve=!!C.alphaHash,Ie=!!C.extensions;let rt=Cs;C.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(rt=r.toneMapping);const Ht={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Te,defines:C.defines,customVertexShaderID:ze,customFragmentShaderID:re,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:We,batchingColor:We&&de._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&de.instanceColor!==null,instancingMorph:Ve&&de.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:he===null?r.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:So,alphaToCoverage:!!C.alphaToCoverage,map:dt,matcap:dn,envMap:ht,envMapMode:ht&&k.mapping,envMapCubeUVHeight:W,aoMap:Rt,lightMap:B,bumpMap:pt,normalMap:mt,displacementMap:x&&Lt,emissiveMap:ke,normalMapObjectSpace:mt&&C.normalMapType===NS,normalMapTangentSpace:mt&&C.normalMapType===LS,metalnessMap:kt,roughnessMap:$e,anisotropy:nt,anisotropyMap:q,clearcoat:O,clearcoatMap:Ne,clearcoatNormalMap:Ae,clearcoatRoughnessMap:qe,dispersion:E,iridescence:te,iridescenceMap:He,iridescenceThicknessMap:ye,sheen:xe,sheenColorMap:Ee,sheenRoughnessMap:Ze,specularMap:je,specularColorMap:Fe,specularIntensityMap:at,transmission:Z,transmissionMap:H,thicknessMap:Oe,gradientMap:we,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Me,alphaHash:ve,combine:C.combine,mapUv:dt&&T(C.map.channel),aoMapUv:Rt&&T(C.aoMap.channel),lightMapUv:B&&T(C.lightMap.channel),bumpMapUv:pt&&T(C.bumpMap.channel),normalMapUv:mt&&T(C.normalMap.channel),displacementMapUv:Lt&&T(C.displacementMap.channel),emissiveMapUv:ke&&T(C.emissiveMap.channel),metalnessMapUv:kt&&T(C.metalnessMap.channel),roughnessMapUv:$e&&T(C.roughnessMap.channel),anisotropyMapUv:q&&T(C.anisotropyMap.channel),clearcoatMapUv:Ne&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&T(C.sheenRoughnessMap.channel),specularMapUv:je&&T(C.specularMap.channel),specularColorMapUv:Fe&&T(C.specularColorMap.channel),specularIntensityMapUv:at&&T(C.specularIntensityMap.channel),transmissionMapUv:H&&T(C.transmissionMap.channel),thicknessMapUv:Oe&&T(C.thicknessMap.channel),alphaMapUv:Ce&&T(C.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(mt||nt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:de.isPoints===!0&&!!Q.attributes.uv&&(dt||Ce),fog:!!_e,useFog:C.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:de.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&C.map.isVideoTexture===!0&&Bt.getTransfer(C.map.colorSpace)===Qt,decodeVideoTextureEmissive:ke&&C.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(C.emissiveMap.colorSpace)===Qt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Fa,flipSided:C.side===gi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ie&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&C.extensions.multiDraw===!0||We)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(w,C),U(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function F(C){const w=M[C.type];let G;if(w){const ee=la[w];G=cM.clone(ee.uniforms)}else G=C.uniforms;return G}function j(C,w){let G;for(let ee=0,de=g.length;ee<de;ee++){const _e=g[ee];if(_e.cacheKey===w){G=_e,++G.usedTimes;break}}return G===void 0&&(G=new VA(r,w,C,c),g.push(G)),G}function N(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function K(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:F,acquireProgram:j,releaseProgram:N,releaseShaderCache:z,programs:g,dispose:K}}function qA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function YA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Jv(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,y,M,T,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:T,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=T,v.group=S),e++,v}function d(_,x,y,M,T,S){const v=u(_,x,y,M,T,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,x,y,M,T,S){const v=u(_,x,y,M,T,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||YA),a.length>1&&a.sort(x||Qv),o.length>1&&o.sort(x||Qv)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function $A(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new Jv,r.set(a,[u])):o>=c.length?(u=new Jv,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function ZA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new Vt};break;case"SpotLight":n={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":n={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return r[e.id]=n,n}}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let QA=0;function JA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eR(r){const e=new ZA,n=KA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ce);const o=new ce,c=new xn,u=new xn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,M=0,T=0,S=0,v=0,L=0,U=0,F=0,j=0,N=0,z=0;p.sort(JA);for(let C=0,w=p.length;C<w;C++){const G=p[C],ee=G.color,de=G.intensity,_e=G.distance,Q=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ee.r*de,_+=ee.g*de,x+=ee.b*de;else if(G.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(G.sh.coefficients[P],de);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,W=n.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,a.directionalShadow[y]=W,a.directionalShadowMap[y]=Q,a.directionalShadowMatrix[y]=G.shadow.matrix,L++}a.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ee).multiplyScalar(de),P.distance=_e,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,a.spot[T]=P;const k=G.shadow;if(G.map&&(a.spotLightMap[j]=G.map,j++,k.updateMatrices(G),G.castShadow&&N++),a.spotLightMatrix[T]=k.matrix,G.castShadow){const W=n.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,a.spotShadow[T]=W,a.spotShadowMap[T]=Q,F++}T++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ee).multiplyScalar(de),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const k=G.shadow,W=n.get(G);W.shadowIntensity=k.intensity,W.shadowBias=k.bias,W.shadowNormalBias=k.normalBias,W.shadowRadius=k.radius,W.shadowMapSize=k.mapSize,W.shadowCameraNear=k.camera.near,W.shadowCameraFar=k.camera.far,a.pointShadow[M]=W,a.pointShadowMap[M]=Q,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=P,M++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(de),P.groundColor.copy(G.groundColor).multiplyScalar(de),a.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Pe.LTC_FLOAT_1,a.rectAreaLTC2=Pe.LTC_FLOAT_2):(a.rectAreaLTC1=Pe.LTC_HALF_1,a.rectAreaLTC2=Pe.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const K=a.hash;(K.directionalLength!==y||K.pointLength!==M||K.spotLength!==T||K.rectAreaLength!==S||K.hemiLength!==v||K.numDirectionalShadows!==L||K.numPointShadows!==U||K.numSpotShadows!==F||K.numSpotMaps!==j||K.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=T,a.rectArea.length=S,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=F,a.spotShadowMap.length=F,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=F+j-N,a.spotLightMap.length=j,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=z,K.directionalLength=y,K.pointLength=M,K.spotLength=T,K.rectAreaLength=S,K.hemiLength=v,K.numDirectionalShadows=L,K.numPointShadows=U,K.numSpotShadows=F,K.numSpotMaps=j,K.numLightProbes=z,a.version=QA++)}function m(p,g){let _=0,x=0,y=0,M=0,T=0;const S=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const U=p[v];if(U.isDirectionalLight){const F=a.directional[_];F.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(S),_++}else if(U.isSpotLight){const F=a.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(o),F.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const F=a.rectArea[M];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(u),F.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const F=a.point[x];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const F=a.hemi[T];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(S),T++}}}return{setup:d,setupView:m,state:a}}function eb(r){const e=new eR(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function tR(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new eb(r),e.set(o,[d])):c>=u.length?(d=new eb(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
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
}`;function aR(r,e,n){let a=new Wp;const o=new Yt,c=new Yt,u=new yn,d=new MM({depthPacking:US}),m=new EM,p={},g=n.maxTextureSize,_={[Us]:gi,[gi]:Us,[Fa]:Fa},x=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new ta;M.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ci(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mb;let v=this.type;this.render=function(N,z,K){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ee=r.state;ee.setBlending(Ha),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const de=v!==za&&this.type===za,_e=v===za&&this.type!==za;for(let Q=0,P=N.length;Q<P;Q++){const k=N[Q],W=k.shadow;if(W===void 0){ft("WebGLShadowMap:",k,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const fe=W.getFrameExtents();if(o.multiply(fe),c.copy(W.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/fe.x),o.x=c.x*fe.x,W.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/fe.y),o.y=c.y*fe.y,W.mapSize.y=c.y)),W.map===null||de===!0||_e===!0){const D=this.type!==za?{minFilter:Di,magFilter:Di}:{};W.map!==null&&W.map.dispose(),W.map=new mr(o.x,o.y,D),W.map.texture.name=k.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const pe=W.getViewportCount();for(let D=0;D<pe;D++){const oe=W.getViewport(D);u.set(c.x*oe.x,c.y*oe.y,c.x*oe.z,c.y*oe.w),ee.viewport(u),W.updateMatrices(k,D),a=W.getFrustum(),F(z,K,W.camera,k,this.type)}W.isPointLightShadow!==!0&&this.type===za&&L(W,K),W.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,G)};function L(N,z){const K=e.update(T);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new mr(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,K,x,T,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,K,y,T,null)}function U(N,z,K,C){let w=null;const G=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)w=G;else if(w=K.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ee=w.uuid,de=z.uuid;let _e=p[ee];_e===void 0&&(_e={},p[ee]=_e);let Q=_e[de];Q===void 0&&(Q=w.clone(),_e[de]=Q,z.addEventListener("dispose",j)),w=Q}if(w.visible=z.visible,w.wireframe=z.wireframe,C===za?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ee=r.properties.get(w);ee.light=K}return w}function F(N,z,K,C,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===za)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const de=e.update(N),_e=N.material;if(Array.isArray(_e)){const Q=de.groups;for(let P=0,k=Q.length;P<k;P++){const W=Q[P],fe=_e[W.materialIndex];if(fe&&fe.visible){const pe=U(N,fe,C,w);N.onBeforeShadow(r,N,z,K,de,pe,W),r.renderBufferDirect(K,null,de,pe,N,W),N.onAfterShadow(r,N,z,K,de,pe,W)}}}else if(_e.visible){const Q=U(N,_e,C,w);N.onBeforeShadow(r,N,z,K,de,Q,null),r.renderBufferDirect(K,null,de,Q,N,null),N.onAfterShadow(r,N,z,K,de,Q,null)}}const ee=N.children;for(let de=0,_e=ee.length;de<_e;de++)F(ee[de],z,K,C,w)}function j(N){N.target.removeEventListener("dispose",j);for(const K in p){const C=p[K],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const sR={[T0]:A0,[R0]:D0,[w0]:O0,[vo]:C0,[A0]:T0,[D0]:R0,[O0]:w0,[C0]:vo};function rR(r,e){function n(){let H=!1;const Oe=new yn;let we=null;const Ce=new yn(0,0,0,0);return{setMask:function(Me){we!==Me&&!H&&(r.colorMask(Me,Me,Me,Me),we=Me)},setLocked:function(Me){H=Me},setClear:function(Me,ve,Ie,rt,Ht){Ht===!0&&(Me*=rt,ve*=rt,Ie*=rt),Oe.set(Me,ve,Ie,rt),Ce.equals(Oe)===!1&&(r.clearColor(Me,ve,Ie,rt),Ce.copy(Oe))},reset:function(){H=!1,we=null,Ce.set(-1,0,0,0)}}}function a(){let H=!1,Oe=!1,we=null,Ce=null,Me=null;return{setReversed:function(ve){if(Oe!==ve){const Ie=e.get("EXT_clip_control");ve?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Oe=ve;const rt=Me;Me=null,this.setClear(rt)}},getReversed:function(){return Oe},setTest:function(ve){ve?he(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(ve){we!==ve&&!H&&(r.depthMask(ve),we=ve)},setFunc:function(ve){if(Oe&&(ve=sR[ve]),Ce!==ve){switch(ve){case T0:r.depthFunc(r.NEVER);break;case A0:r.depthFunc(r.ALWAYS);break;case R0:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case w0:r.depthFunc(r.EQUAL);break;case C0:r.depthFunc(r.GEQUAL);break;case D0:r.depthFunc(r.GREATER);break;case O0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ce=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Me!==ve&&(Oe&&(ve=1-ve),r.clearDepth(ve),Me=ve)},reset:function(){H=!1,we=null,Ce=null,Me=null,Oe=!1}}}function o(){let H=!1,Oe=null,we=null,Ce=null,Me=null,ve=null,Ie=null,rt=null,Ht=null;return{setTest:function(Ut){H||(Ut?he(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Ut){Oe!==Ut&&!H&&(r.stencilMask(Ut),Oe=Ut)},setFunc:function(Ut,Dn,In){(we!==Ut||Ce!==Dn||Me!==In)&&(r.stencilFunc(Ut,Dn,In),we=Ut,Ce=Dn,Me=In)},setOp:function(Ut,Dn,In){(ve!==Ut||Ie!==Dn||rt!==In)&&(r.stencilOp(Ut,Dn,In),ve=Ut,Ie=Dn,rt=In)},setLocked:function(Ut){H=Ut},setClear:function(Ut){Ht!==Ut&&(r.clearStencil(Ut),Ht=Ut)},reset:function(){H=!1,Oe=null,we=null,Ce=null,Me=null,ve=null,Ie=null,rt=null,Ht=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,v=null,L=null,U=null,F=null,j=null,N=null,z=new Vt(0,0,0),K=0,C=!1,w=null,G=null,ee=null,de=null,_e=null;const Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=k>=1):W.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=k>=2);let fe=null,pe={};const D=r.getParameter(r.SCISSOR_BOX),oe=r.getParameter(r.VIEWPORT),Se=new yn().fromArray(D),Te=new yn().fromArray(oe);function ze(H,Oe,we,Ce){const Me=new Uint8Array(4),ve=r.createTexture();r.bindTexture(H,ve),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ie=0;Ie<we;Ie++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Oe,0,r.RGBA,1,1,Ce,0,r.RGBA,r.UNSIGNED_BYTE,Me):r.texImage2D(Oe+Ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Me);return ve}const re={};re[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(r.DEPTH_TEST),u.setFunc(vo),pt(!1),mt(Jx),he(r.CULL_FACE),Rt(Ha);function he(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Ue(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function Ve(H,Oe){return _[H]!==Oe?(r.bindFramebuffer(H,Oe),_[H]=Oe,H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Oe),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Oe),!0):!1}function We(H,Oe){let we=y,Ce=!1;if(H){we=x.get(Oe),we===void 0&&(we=[],x.set(Oe,we));const Me=H.textures;if(we.length!==Me.length||we[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,Ie=Me.length;ve<Ie;ve++)we[ve]=r.COLOR_ATTACHMENT0+ve;we.length=Me.length,Ce=!0}}else we[0]!==r.BACK&&(we[0]=r.BACK,Ce=!0);Ce&&r.drawBuffers(we)}function dt(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const dn={[ar]:r.FUNC_ADD,[aS]:r.FUNC_SUBTRACT,[sS]:r.FUNC_REVERSE_SUBTRACT};dn[rS]=r.MIN,dn[oS]=r.MAX;const ht={[lS]:r.ZERO,[cS]:r.ONE,[uS]:r.SRC_COLOR,[M0]:r.SRC_ALPHA,[gS]:r.SRC_ALPHA_SATURATE,[pS]:r.DST_COLOR,[dS]:r.DST_ALPHA,[fS]:r.ONE_MINUS_SRC_COLOR,[E0]:r.ONE_MINUS_SRC_ALPHA,[mS]:r.ONE_MINUS_DST_COLOR,[hS]:r.ONE_MINUS_DST_ALPHA,[_S]:r.CONSTANT_COLOR,[xS]:r.ONE_MINUS_CONSTANT_COLOR,[vS]:r.CONSTANT_ALPHA,[bS]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(H,Oe,we,Ce,Me,ve,Ie,rt,Ht,Ut){if(H===Ha){T===!0&&(Ue(r.BLEND),T=!1);return}if(T===!1&&(he(r.BLEND),T=!0),H!==iS){if(H!==S||Ut!==C){if((v!==ar||F!==ar)&&(r.blendEquation(r.FUNC_ADD),v=ar,F=ar),Ut)switch(H){case uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ev:r.blendFunc(r.ONE,r.ONE);break;case tv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:_n("WebGLState: Invalid blending: ",H);break}else switch(H){case uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ev:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tv:_n("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nv:_n("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_n("WebGLState: Invalid blending: ",H);break}L=null,U=null,j=null,N=null,z.set(0,0,0),K=0,S=H,C=Ut}return}Me=Me||Oe,ve=ve||we,Ie=Ie||Ce,(Oe!==v||Me!==F)&&(r.blendEquationSeparate(dn[Oe],dn[Me]),v=Oe,F=Me),(we!==L||Ce!==U||ve!==j||Ie!==N)&&(r.blendFuncSeparate(ht[we],ht[Ce],ht[ve],ht[Ie]),L=we,U=Ce,j=ve,N=Ie),(rt.equals(z)===!1||Ht!==K)&&(r.blendColor(rt.r,rt.g,rt.b,Ht),z.copy(rt),K=Ht),S=H,C=!1}function B(H,Oe){H.side===Fa?Ue(r.CULL_FACE):he(r.CULL_FACE);let we=H.side===gi;Oe&&(we=!we),pt(we),H.blending===uo&&H.transparent===!1?Rt(Ha):Rt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ce=H.stencilWrite;d.setTest(Ce),Ce&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ke(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){w!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),w=H)}function mt(H){H!==eS?(he(r.CULL_FACE),H!==G&&(H===Jx?r.cullFace(r.BACK):H===tS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),G=H}function Lt(H){H!==ee&&(P&&r.lineWidth(H),ee=H)}function ke(H,Oe,we){H?(he(r.POLYGON_OFFSET_FILL),(de!==Oe||_e!==we)&&(r.polygonOffset(Oe,we),de=Oe,_e=we)):Ue(r.POLYGON_OFFSET_FILL)}function kt(H){H?he(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function $e(H){H===void 0&&(H=r.TEXTURE0+Q-1),fe!==H&&(r.activeTexture(H),fe=H)}function nt(H,Oe,we){we===void 0&&(fe===null?we=r.TEXTURE0+Q-1:we=fe);let Ce=pe[we];Ce===void 0&&(Ce={type:void 0,texture:void 0},pe[we]=Ce),(Ce.type!==H||Ce.texture!==Oe)&&(fe!==we&&(r.activeTexture(we),fe=we),r.bindTexture(H,Oe||re[H]),Ce.type=H,Ce.texture=Oe)}function O(){const H=pe[fe];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function te(){try{r.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function xe(){try{r.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Z(){try{r.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ne(){try{r.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ae(){try{r.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qe(){try{r.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function He(){try{r.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{r.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){Se.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function Ze(H){Te.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function je(H,Oe){let we=p.get(Oe);we===void 0&&(we=new WeakMap,p.set(Oe,we));let Ce=we.get(H);Ce===void 0&&(Ce=r.getUniformBlockIndex(Oe,H.name),we.set(H,Ce))}function Fe(H,Oe){const Ce=p.get(Oe).get(H);m.get(Oe)!==Ce&&(r.uniformBlockBinding(Oe,Ce,H.__bindingPointIndex),m.set(Oe,Ce))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},fe=null,pe={},_={},x=new WeakMap,y=[],M=null,T=!1,S=null,v=null,L=null,U=null,F=null,j=null,N=null,z=new Vt(0,0,0),K=0,C=!1,w=null,G=null,ee=null,de=null,_e=null,Se.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:he,disable:Ue,bindFramebuffer:Ve,drawBuffers:We,useProgram:dt,setBlending:Rt,setMaterial:B,setFlipSided:pt,setCullFace:mt,setLineWidth:Lt,setPolygonOffset:ke,setScissorTest:kt,activeTexture:$e,bindTexture:nt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:te,texImage2D:He,texImage3D:ye,updateUBOMapping:je,uniformBlockBinding:Fe,texStorage2D:Ae,texStorage3D:qe,texSubImage2D:xe,texSubImage3D:Z,compressedTexSubImage2D:q,compressedTexSubImage3D:Ne,scissor:Ee,viewport:Ze,reset:at}}function oR(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return y?new OffscreenCanvas(O,E):Xl("canvas")}function T(O,E,te){let xe=1;const Z=nt(O);if((Z.width>te||Z.height>te)&&(xe=te/Math.max(Z.width,Z.height)),xe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const q=Math.floor(xe*Z.width),Ne=Math.floor(xe*Z.height);_===void 0&&(_=M(q,Ne));const Ae=E?M(q,Ne):_;return Ae.width=q,Ae.height=Ne,Ae.getContext("2d").drawImage(O,0,0,q,Ne),ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+q+"x"+Ne+")."),Ae}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),O;return O}function S(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,E,te,xe,Z=!1){if(O!==null){if(r[O]!==void 0)return r[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let q=E;if(E===r.RED&&(te===r.FLOAT&&(q=r.R32F),te===r.HALF_FLOAT&&(q=r.R16F),te===r.UNSIGNED_BYTE&&(q=r.R8)),E===r.RED_INTEGER&&(te===r.UNSIGNED_BYTE&&(q=r.R8UI),te===r.UNSIGNED_SHORT&&(q=r.R16UI),te===r.UNSIGNED_INT&&(q=r.R32UI),te===r.BYTE&&(q=r.R8I),te===r.SHORT&&(q=r.R16I),te===r.INT&&(q=r.R32I)),E===r.RG&&(te===r.FLOAT&&(q=r.RG32F),te===r.HALF_FLOAT&&(q=r.RG16F),te===r.UNSIGNED_BYTE&&(q=r.RG8)),E===r.RG_INTEGER&&(te===r.UNSIGNED_BYTE&&(q=r.RG8UI),te===r.UNSIGNED_SHORT&&(q=r.RG16UI),te===r.UNSIGNED_INT&&(q=r.RG32UI),te===r.BYTE&&(q=r.RG8I),te===r.SHORT&&(q=r.RG16I),te===r.INT&&(q=r.RG32I)),E===r.RGB_INTEGER&&(te===r.UNSIGNED_BYTE&&(q=r.RGB8UI),te===r.UNSIGNED_SHORT&&(q=r.RGB16UI),te===r.UNSIGNED_INT&&(q=r.RGB32UI),te===r.BYTE&&(q=r.RGB8I),te===r.SHORT&&(q=r.RGB16I),te===r.INT&&(q=r.RGB32I)),E===r.RGBA_INTEGER&&(te===r.UNSIGNED_BYTE&&(q=r.RGBA8UI),te===r.UNSIGNED_SHORT&&(q=r.RGBA16UI),te===r.UNSIGNED_INT&&(q=r.RGBA32UI),te===r.BYTE&&(q=r.RGBA8I),te===r.SHORT&&(q=r.RGBA16I),te===r.INT&&(q=r.RGBA32I)),E===r.RGB&&(te===r.UNSIGNED_INT_5_9_9_9_REV&&(q=r.RGB9_E5),te===r.UNSIGNED_INT_10F_11F_11F_REV&&(q=r.R11F_G11F_B10F)),E===r.RGBA){const Ne=Z?Qu:Bt.getTransfer(xe);te===r.FLOAT&&(q=r.RGBA32F),te===r.HALF_FLOAT&&(q=r.RGBA16F),te===r.UNSIGNED_BYTE&&(q=Ne===Qt?r.SRGB8_ALPHA8:r.RGBA8),te===r.UNSIGNED_SHORT_4_4_4_4&&(q=r.RGBA4),te===r.UNSIGNED_SHORT_5_5_5_1&&(q=r.RGB5_A1)}return(q===r.R16F||q===r.R32F||q===r.RG16F||q===r.RG32F||q===r.RGBA16F||q===r.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function F(O,E){let te;return O?E===null||E===pr||E===Vl?te=r.DEPTH24_STENCIL8:E===Ia?te=r.DEPTH32F_STENCIL8:E===Gl&&(te=r.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===pr||E===Vl?te=r.DEPTH_COMPONENT24:E===Ia?te=r.DEPTH_COMPONENT32F:E===Gl&&(te=r.DEPTH_COMPONENT16),te}function j(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Di&&O.minFilter!==ei?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function N(O){const E=O.target;E.removeEventListener("dispose",N),K(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),w(E)}function K(O){const E=a.get(O);if(E.__webglInit===void 0)return;const te=O.source,xe=x.get(te);if(xe){const Z=xe[E.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(O),Object.keys(xe).length===0&&x.delete(te)}a.remove(O)}function C(O){const E=a.get(O);r.deleteTexture(E.__webglTexture);const te=O.source,xe=x.get(te);delete xe[E.__cacheKey],u.memory.textures--}function w(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(E.__webglFramebuffer[xe]))for(let Z=0;Z<E.__webglFramebuffer[xe].length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[xe][Z]);else r.deleteFramebuffer(E.__webglFramebuffer[xe]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[xe])}else{if(Array.isArray(E.__webglFramebuffer))for(let xe=0;xe<E.__webglFramebuffer.length;xe++)r.deleteFramebuffer(E.__webglFramebuffer[xe]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let xe=0;xe<E.__webglColorRenderbuffer.length;xe++)E.__webglColorRenderbuffer[xe]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[xe]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=O.textures;for(let xe=0,Z=te.length;xe<Z;xe++){const q=a.get(te[xe]);q.__webglTexture&&(r.deleteTexture(q.__webglTexture),u.memory.textures--),a.remove(te[xe])}a.remove(O)}let G=0;function ee(){G=0}function de(){const O=G;return O>=o.maxTextures&&ft("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),G+=1,O}function _e(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const te=a.get(O);if(O.isVideoTexture&&kt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&te.__version!==O.version){const xe=O.image;if(xe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{re(te,O,E);return}}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,te.__webglTexture,r.TEXTURE0+E)}function P(O,E){const te=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){re(te,O,E);return}else O.isExternalTexture&&(te.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,te.__webglTexture,r.TEXTURE0+E)}function k(O,E){const te=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&te.__version!==O.version){re(te,O,E);return}n.bindTexture(r.TEXTURE_3D,te.__webglTexture,r.TEXTURE0+E)}function W(O,E){const te=a.get(O);if(O.version>0&&te.__version!==O.version){he(te,O,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture,r.TEXTURE0+E)}const fe={[N0]:r.REPEAT,[oi]:r.CLAMP_TO_EDGE,[P0]:r.MIRRORED_REPEAT},pe={[Di]:r.NEAREST,[DS]:r.NEAREST_MIPMAP_NEAREST,[mu]:r.NEAREST_MIPMAP_LINEAR,[ei]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[or]:r.LINEAR_MIPMAP_LINEAR},D={[PS]:r.NEVER,[GS]:r.ALWAYS,[zS]:r.LESS,[Lb]:r.LEQUAL,[FS]:r.EQUAL,[HS]:r.GEQUAL,[IS]:r.GREATER,[BS]:r.NOTEQUAL};function oe(O,E){if(E.type===Ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ei||E.magFilter===Ph||E.magFilter===mu||E.magFilter===or||E.minFilter===ei||E.minFilter===Ph||E.minFilter===mu||E.minFilter===or)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,fe[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,fe[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,fe[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,pe[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Di||E.minFilter!==mu&&E.minFilter!==or||E.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Se(O,E){let te=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",N));const xe=E.source;let Z=x.get(xe);Z===void 0&&(Z={},x.set(xe,Z));const q=_e(E);if(q!==O.__cacheKey){Z[q]===void 0&&(Z[q]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,te=!0),Z[q].usedTimes++;const Ne=Z[O.__cacheKey];Ne!==void 0&&(Z[O.__cacheKey].usedTimes--,Ne.usedTimes===0&&C(E)),O.__cacheKey=q,O.__webglTexture=Z[q].texture}return te}function Te(O,E,te){return Math.floor(Math.floor(O/te)/E)}function ze(O,E,te,xe){const q=O.updateRanges;if(q.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,te,xe,E.data);else{q.sort((ye,Ee)=>ye.start-Ee.start);let Ne=0;for(let ye=1;ye<q.length;ye++){const Ee=q[Ne],Ze=q[ye],je=Ee.start+Ee.count,Fe=Te(Ze.start,E.width,4),at=Te(Ee.start,E.width,4);Ze.start<=je+1&&Fe===at&&Te(Ze.start+Ze.count-1,E.width,4)===Fe?Ee.count=Math.max(Ee.count,Ze.start+Ze.count-Ee.start):(++Ne,q[Ne]=Ze)}q.length=Ne+1;const Ae=r.getParameter(r.UNPACK_ROW_LENGTH),qe=r.getParameter(r.UNPACK_SKIP_PIXELS),He=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Ee=q.length;ye<Ee;ye++){const Ze=q[ye],je=Math.floor(Ze.start/4),Fe=Math.ceil(Ze.count/4),at=je%E.width,H=Math.floor(je/E.width),Oe=Fe,we=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),n.texSubImage2D(r.TEXTURE_2D,0,at,H,Oe,we,te,xe,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ae),r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,He)}}function re(O,E,te){let xe=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xe=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xe=r.TEXTURE_3D);const Z=Se(O,E),q=E.source;n.bindTexture(xe,O.__webglTexture,r.TEXTURE0+te);const Ne=a.get(q);if(q.version!==Ne.__version||Z===!0){n.activeTexture(r.TEXTURE0+te);const Ae=Bt.getPrimaries(Bt.workingColorSpace),qe=E.colorSpace===As?null:Bt.getPrimaries(E.colorSpace),He=E.colorSpace===As||Ae===qe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let ye=T(E.image,!1,o.maxTextureSize);ye=$e(E,ye);const Ee=c.convert(E.format,E.colorSpace),Ze=c.convert(E.type);let je=U(E.internalFormat,Ee,Ze,E.colorSpace,E.isVideoTexture);oe(xe,E);let Fe;const at=E.mipmaps,H=E.isVideoTexture!==!0,Oe=Ne.__version===void 0||Z===!0,we=q.dataReady,Ce=j(E,ye);if(E.isDepthTexture)je=F(E.format===kl,E.type),Oe&&(H?n.texStorage2D(r.TEXTURE_2D,1,je,ye.width,ye.height):n.texImage2D(r.TEXTURE_2D,0,je,ye.width,ye.height,0,Ee,Ze,null));else if(E.isDataTexture)if(at.length>0){H&&Oe&&n.texStorage2D(r.TEXTURE_2D,Ce,je,at[0].width,at[0].height);for(let Me=0,ve=at.length;Me<ve;Me++)Fe=at[Me],H?we&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ee,Ze,Fe.data):n.texImage2D(r.TEXTURE_2D,Me,je,Fe.width,Fe.height,0,Ee,Ze,Fe.data);E.generateMipmaps=!1}else H?(Oe&&n.texStorage2D(r.TEXTURE_2D,Ce,je,ye.width,ye.height),we&&ze(E,ye,Ee,Ze)):n.texImage2D(r.TEXTURE_2D,0,je,ye.width,ye.height,0,Ee,Ze,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Oe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,je,at[0].width,at[0].height,ye.depth);for(let Me=0,ve=at.length;Me<ve;Me++)if(Fe=at[Me],E.format!==Qi)if(Ee!==null)if(H){if(we)if(E.layerUpdates.size>0){const Ie=Ov(Fe.width,Fe.height,E.format,E.type);for(const rt of E.layerUpdates){const Ht=Fe.data.subarray(rt*Ie/Fe.data.BYTES_PER_ELEMENT,(rt+1)*Ie/Fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,rt,Fe.width,Fe.height,1,Ee,Ht)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,ye.depth,Ee,Fe.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Me,je,Fe.width,Fe.height,ye.depth,0,Fe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Me,0,0,0,Fe.width,Fe.height,ye.depth,Ee,Ze,Fe.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Me,je,Fe.width,Fe.height,ye.depth,0,Ee,Ze,Fe.data)}else{H&&Oe&&n.texStorage2D(r.TEXTURE_2D,Ce,je,at[0].width,at[0].height);for(let Me=0,ve=at.length;Me<ve;Me++)Fe=at[Me],E.format!==Qi?Ee!==null?H?we&&n.compressedTexSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ee,Fe.data):n.compressedTexImage2D(r.TEXTURE_2D,Me,je,Fe.width,Fe.height,0,Fe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Fe.width,Fe.height,Ee,Ze,Fe.data):n.texImage2D(r.TEXTURE_2D,Me,je,Fe.width,Fe.height,0,Ee,Ze,Fe.data)}else if(E.isDataArrayTexture)if(H){if(Oe&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,je,ye.width,ye.height,ye.depth),we)if(E.layerUpdates.size>0){const Me=Ov(ye.width,ye.height,E.format,E.type);for(const ve of E.layerUpdates){const Ie=ye.data.subarray(ve*Me/ye.data.BYTES_PER_ELEMENT,(ve+1)*Me/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Ee,Ze,Ie)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ze,ye.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,je,ye.width,ye.height,ye.depth,0,Ee,Ze,ye.data);else if(E.isData3DTexture)H?(Oe&&n.texStorage3D(r.TEXTURE_3D,Ce,je,ye.width,ye.height,ye.depth),we&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ee,Ze,ye.data)):n.texImage3D(r.TEXTURE_3D,0,je,ye.width,ye.height,ye.depth,0,Ee,Ze,ye.data);else if(E.isFramebufferTexture){if(Oe)if(H)n.texStorage2D(r.TEXTURE_2D,Ce,je,ye.width,ye.height);else{let Me=ye.width,ve=ye.height;for(let Ie=0;Ie<Ce;Ie++)n.texImage2D(r.TEXTURE_2D,Ie,je,Me,ve,0,Ee,Ze,null),Me>>=1,ve>>=1}}else if(at.length>0){if(H&&Oe){const Me=nt(at[0]);n.texStorage2D(r.TEXTURE_2D,Ce,je,Me.width,Me.height)}for(let Me=0,ve=at.length;Me<ve;Me++)Fe=at[Me],H?we&&n.texSubImage2D(r.TEXTURE_2D,Me,0,0,Ee,Ze,Fe):n.texImage2D(r.TEXTURE_2D,Me,je,Ee,Ze,Fe);E.generateMipmaps=!1}else if(H){if(Oe){const Me=nt(ye);n.texStorage2D(r.TEXTURE_2D,Ce,je,Me.width,Me.height)}we&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Ze,ye)}else n.texImage2D(r.TEXTURE_2D,0,je,Ee,Ze,ye);S(E)&&v(xe),Ne.__version=q.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function he(O,E,te){if(E.image.length!==6)return;const xe=Se(O,E),Z=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+te);const q=a.get(Z);if(Z.version!==q.__version||xe===!0){n.activeTexture(r.TEXTURE0+te);const Ne=Bt.getPrimaries(Bt.workingColorSpace),Ae=E.colorSpace===As?null:Bt.getPrimaries(E.colorSpace),qe=E.colorSpace===As||Ne===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const He=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let ve=0;ve<6;ve++)!He&&!ye?Ee[ve]=T(E.image[ve],!0,o.maxCubemapSize):Ee[ve]=ye?E.image[ve].image:E.image[ve],Ee[ve]=$e(E,Ee[ve]);const Ze=Ee[0],je=c.convert(E.format,E.colorSpace),Fe=c.convert(E.type),at=U(E.internalFormat,je,Fe,E.colorSpace),H=E.isVideoTexture!==!0,Oe=q.__version===void 0||xe===!0,we=Z.dataReady;let Ce=j(E,Ze);oe(r.TEXTURE_CUBE_MAP,E);let Me;if(He){H&&Oe&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,at,Ze.width,Ze.height);for(let ve=0;ve<6;ve++){Me=Ee[ve].mipmaps;for(let Ie=0;Ie<Me.length;Ie++){const rt=Me[Ie];E.format!==Qi?je!==null?H?we&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,rt.width,rt.height,je,rt.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,at,rt.width,rt.height,0,rt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,rt.width,rt.height,je,Fe,rt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,at,rt.width,rt.height,0,je,Fe,rt.data)}}}else{if(Me=E.mipmaps,H&&Oe){Me.length>0&&Ce++;const ve=nt(Ee[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ce,at,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){H?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ee[ve].width,Ee[ve].height,je,Fe,Ee[ve].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,Ee[ve].width,Ee[ve].height,0,je,Fe,Ee[ve].data);for(let Ie=0;Ie<Me.length;Ie++){const Ht=Me[Ie].image[ve].image;H?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,Ht.width,Ht.height,je,Fe,Ht.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,at,Ht.width,Ht.height,0,je,Fe,Ht.data)}}else{H?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,je,Fe,Ee[ve]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,at,je,Fe,Ee[ve]);for(let Ie=0;Ie<Me.length;Ie++){const rt=Me[Ie];H?we&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,je,Fe,rt.image[ve]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,at,je,Fe,rt.image[ve])}}}S(E)&&v(r.TEXTURE_CUBE_MAP),q.__version=Z.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ue(O,E,te,xe,Z,q){const Ne=c.convert(te.format,te.colorSpace),Ae=c.convert(te.type),qe=U(te.internalFormat,Ne,Ae,te.colorSpace),He=a.get(E),ye=a.get(te);if(ye.__renderTarget=E,!He.__hasExternalTextures){const Ee=Math.max(1,E.width>>q),Ze=Math.max(1,E.height>>q);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?n.texImage3D(Z,q,qe,Ee,Ze,E.depth,0,Ne,Ae,null):n.texImage2D(Z,q,qe,Ee,Ze,0,Ne,Ae,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,xe,Z,ye.__webglTexture,0,Lt(E)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,xe,Z,ye.__webglTexture,q),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(O,E,te){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const xe=E.depthTexture,Z=xe&&xe.isDepthTexture?xe.type:null,q=F(E.stencilBuffer,Z),Ne=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=Lt(E);ke(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ae,q,E.width,E.height):te?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ae,q,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,q,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ne,r.RENDERBUFFER,O)}else{const xe=E.textures;for(let Z=0;Z<xe.length;Z++){const q=xe[Z],Ne=c.convert(q.format,q.colorSpace),Ae=c.convert(q.type),qe=U(q.internalFormat,Ne,Ae,q.colorSpace),He=Lt(E);te&&ke(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,qe,E.width,E.height):ke(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,qe,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,qe,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=a.get(E.depthTexture);xe.__renderTarget=E,(!xe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q(E.depthTexture,0);const Z=xe.__webglTexture,q=Lt(E);if(E.depthTexture.format===jl)ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===kl)ke(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function dt(O){const E=a.get(O),te=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const xe=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),xe){const Z=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,xe.removeEventListener("dispose",Z)};xe.addEventListener("dispose",Z),E.__depthDisposeCallback=Z}E.__boundDepthTexture=xe}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");const xe=O.texture.mipmaps;xe&&xe.length>0?We(E.__webglFramebuffer[0],O):We(E.__webglFramebuffer,O)}else if(te){E.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[xe]),E.__webglDepthbuffer[xe]===void 0)E.__webglDepthbuffer[xe]=r.createRenderbuffer(),Ve(E.__webglDepthbuffer[xe],O,!1);else{const Z=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer[xe];r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}else{const xe=O.texture.mipmaps;if(xe&&xe.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ve(E.__webglDepthbuffer,O,!1);else{const Z=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,q=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,q),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,q)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function dn(O,E,te){const xe=a.get(O);E!==void 0&&Ue(xe.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),te!==void 0&&dt(O)}function ht(O){const E=O.texture,te=a.get(O),xe=a.get(E);O.addEventListener("dispose",z);const Z=O.textures,q=O.isWebGLCubeRenderTarget===!0,Ne=Z.length>1;if(Ne||(xe.__webglTexture===void 0&&(xe.__webglTexture=r.createTexture()),xe.__version=E.version,u.memory.textures++),q){te.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[Ae]=[];for(let qe=0;qe<E.mipmaps.length;qe++)te.__webglFramebuffer[Ae][qe]=r.createFramebuffer()}else te.__webglFramebuffer[Ae]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)te.__webglFramebuffer[Ae]=r.createFramebuffer()}else te.__webglFramebuffer=r.createFramebuffer();if(Ne)for(let Ae=0,qe=Z.length;Ae<qe;Ae++){const He=a.get(Z[Ae]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&ke(O)===!1){te.__webglMultisampledFramebuffer=r.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let Ae=0;Ae<Z.length;Ae++){const qe=Z[Ae];te.__webglColorRenderbuffer[Ae]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,te.__webglColorRenderbuffer[Ae]);const He=c.convert(qe.format,qe.colorSpace),ye=c.convert(qe.type),Ee=U(qe.internalFormat,He,ye,qe.colorSpace,O.isXRRenderTarget===!0),Ze=Lt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ze,Ee,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,te.__webglColorRenderbuffer[Ae])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(te.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(te.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(q){n.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),oe(r.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)Ue(te.__webglFramebuffer[Ae][qe],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,qe);else Ue(te.__webglFramebuffer[Ae],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(E)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ne){for(let Ae=0,qe=Z.length;Ae<qe;Ae++){const He=Z[Ae],ye=a.get(He);let Ee=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ee,ye.__webglTexture),oe(Ee,He),Ue(te.__webglFramebuffer,O,He,r.COLOR_ATTACHMENT0+Ae,Ee,0),S(He)&&v(Ee)}n.unbindTexture()}else{let Ae=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ae,xe.__webglTexture),oe(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)Ue(te.__webglFramebuffer[qe],O,E,r.COLOR_ATTACHMENT0,Ae,qe);else Ue(te.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,Ae,0);S(E)&&v(Ae),n.unbindTexture()}O.depthBuffer&&dt(O)}function Rt(O){const E=O.textures;for(let te=0,xe=E.length;te<xe;te++){const Z=E[te];if(S(Z)){const q=L(O),Ne=a.get(Z).__webglTexture;n.bindTexture(q,Ne),v(q),n.unbindTexture()}}}const B=[],pt=[];function mt(O){if(O.samples>0){if(ke(O)===!1){const E=O.textures,te=O.width,xe=O.height;let Z=r.COLOR_BUFFER_BIT;const q=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ne=a.get(O),Ae=E.length>1;if(Ae)for(let He=0;He<E.length;He++)n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const qe=O.texture.mipmaps;qe&&qe.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let He=0;He<E.length;He++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),Ae){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[He]);const ye=a.get(E[He]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,te,xe,0,0,te,xe,Z,r.NEAREST),m===!0&&(B.length=0,pt.length=0,B.push(r.COLOR_ATTACHMENT0+He),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(q),pt.push(q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ae)for(let He=0;He<E.length;He++){n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.RENDERBUFFER,Ne.__webglColorRenderbuffer[He]);const ye=a.get(E[He]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+He,r.TEXTURE_2D,ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Lt(O){return Math.min(o.maxSamples,O.samples)}function ke(O){const E=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function kt(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function $e(O,E){const te=O.colorSpace,xe=O.format,Z=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||te!==So&&te!==As&&(Bt.getTransfer(te)===Qt?(xe!==Qi||Z!==ja)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_n("WebGLTextures: Unsupported texture color space:",te)),E}function nt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=de,this.resetTextureUnits=ee,this.setTexture2D=Q,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=dn,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ke}function lR(r,e){function n(a,o=As){let c;const u=Bt.getTransfer(o);if(a===ja)return r.UNSIGNED_BYTE;if(a===zp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Fp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===wb)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===Cb)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ab)return r.BYTE;if(a===Rb)return r.SHORT;if(a===Gl)return r.UNSIGNED_SHORT;if(a===Pp)return r.INT;if(a===pr)return r.UNSIGNED_INT;if(a===Ia)return r.FLOAT;if(a===Do)return r.HALF_FLOAT;if(a===Db)return r.ALPHA;if(a===Ob)return r.RGB;if(a===Qi)return r.RGBA;if(a===jl)return r.DEPTH_COMPONENT;if(a===kl)return r.DEPTH_STENCIL;if(a===Ub)return r.RED;if(a===Ip)return r.RED_INTEGER;if(a===Bp)return r.RG;if(a===Hp)return r.RG_INTEGER;if(a===Gp)return r.RGBA_INTEGER;if(a===Iu||a===Bu||a===Hu||a===Gu)if(u===Qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Iu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Iu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===z0||a===F0||a===I0||a===B0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===z0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===F0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===I0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===B0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===H0||a===G0||a===V0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===H0||a===G0)return u===Qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===V0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===j0||a===k0||a===X0||a===W0||a===q0||a===Y0||a===$0||a===Z0||a===K0||a===Q0||a===J0||a===ep||a===tp||a===np)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===j0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===k0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===X0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===W0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===q0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Y0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Z0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===K0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Q0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===J0)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ep)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===tp)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===np)return u===Qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ip||a===ap||a===sp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ip)return u===Qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ap)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===rp||a===op||a===lp||a===cp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===rp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===op)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===lp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===cp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const cR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uR=`
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

}`;class fR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new jb(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Xa({vertexShader:cR,fragmentShader:uR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new Rs(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dR extends Oo{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,M=null;const T=typeof XRWebGLBinding<"u",S=new fR,v={},L=n.getContextAttributes();let U=null,F=null;const j=[],N=[],z=new Yt;let K=null;const C=new Gi;C.viewport=new yn;const w=new Gi;w.viewport=new yn;const G=[C,w],ee=new DM;let de=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=j[re];return he===void 0&&(he=new a0,j[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=j[re];return he===void 0&&(he=new a0,j[re]=he),he.getGripSpace()},this.getHand=function(re){let he=j[re];return he===void 0&&(he=new a0,j[re]=he),he.getHandSpace()};function Q(re){const he=N.indexOf(re.inputSource);if(he===-1)return;const Ue=j[he];Ue!==void 0&&(Ue.update(re.inputSource,re.frame,p||u),Ue.dispatchEvent({type:re.type,data:re.inputSource}))}function P(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",k);for(let re=0;re<j.length;re++){const he=N[re];he!==null&&(N[re]=null,j[re].disconnect(he))}de=null,_e=null,S.reset();for(const re in v)delete v[re];e.setRenderTarget(U),y=null,x=null,_=null,o=null,F=null,ze.stop(),a.isPresenting=!1,e.setPixelRatio(K),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,a.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,a.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",P),o.addEventListener("inputsourceschange",k),L.xrCompatible!==!0&&await n.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Ve=null,We=null;L.depth&&(We=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=L.stencil?kl:jl,Ve=L.stencil?Vl:pr);const dt={colorFormat:n.RGBA8,depthFormat:We,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(dt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new mr(x.textureWidth,x.textureHeight,{format:Qi,type:ja,depthTexture:new Vb(x.textureWidth,x.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ue={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ue),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new mr(y.framebufferWidth,y.framebufferHeight,{format:Qi,type:ja,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),ze.setContext(o),ze.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function k(re){for(let he=0;he<re.removed.length;he++){const Ue=re.removed[he],Ve=N.indexOf(Ue);Ve>=0&&(N[Ve]=null,j[Ve].disconnect(Ue))}for(let he=0;he<re.added.length;he++){const Ue=re.added[he];let Ve=N.indexOf(Ue);if(Ve===-1){for(let dt=0;dt<j.length;dt++)if(dt>=N.length){N.push(Ue),Ve=dt;break}else if(N[dt]===null){N[dt]=Ue,Ve=dt;break}if(Ve===-1)break}const We=j[Ve];We&&We.connect(Ue)}}const W=new ce,fe=new ce;function pe(re,he,Ue){W.setFromMatrixPosition(he.matrixWorld),fe.setFromMatrixPosition(Ue.matrixWorld);const Ve=W.distanceTo(fe),We=he.projectionMatrix.elements,dt=Ue.projectionMatrix.elements,dn=We[14]/(We[10]-1),ht=We[14]/(We[10]+1),Rt=(We[9]+1)/We[5],B=(We[9]-1)/We[5],pt=(We[8]-1)/We[0],mt=(dt[8]+1)/dt[0],Lt=dn*pt,ke=dn*mt,kt=Ve/(-pt+mt),$e=kt*-pt;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX($e),re.translateZ(kt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),We[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const nt=dn+kt,O=ht+kt,E=Lt-$e,te=ke+(Ve-$e),xe=Rt*ht/O*nt,Z=B*ht/O*nt;re.projectionMatrix.makePerspective(E,te,xe,Z,nt,O),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function D(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,Ue=re.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Ue=S.depthFar)),ee.near=w.near=C.near=he,ee.far=w.far=C.far=Ue,(de!==ee.near||_e!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),de=ee.near,_e=ee.far),ee.layers.mask=re.layers.mask|6,C.layers.mask=ee.layers.mask&3,w.layers.mask=ee.layers.mask&5;const Ve=re.parent,We=ee.cameras;D(ee,Ve);for(let dt=0;dt<We.length;dt++)D(We[dt],Ve);We.length===2?pe(ee,C,w):ee.projectionMatrix.copy(C.projectionMatrix),oe(re,ee,Ve)};function oe(re,he,Ue){Ue===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(Ue.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=up*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(re){m=re,x!==null&&(x.fixedFoveation=re),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=re)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ee)},this.getCameraTexture=function(re){return v[re]};let Se=null;function Te(re,he){if(g=he.getViewerPose(p||u),M=he,g!==null){const Ue=g.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let Ve=!1;Ue.length!==ee.cameras.length&&(ee.cameras.length=0,Ve=!0);for(let ht=0;ht<Ue.length;ht++){const Rt=Ue[ht];let B=null;if(y!==null)B=y.getViewport(Rt);else{const mt=_.getViewSubImage(x,Rt);B=mt.viewport,ht===0&&(e.setRenderTargetTextures(F,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(F))}let pt=G[ht];pt===void 0&&(pt=new Gi,pt.layers.enable(ht),pt.viewport=new yn,G[ht]=pt),pt.matrix.fromArray(Rt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(B.x,B.y,B.width,B.height),ht===0&&(ee.matrix.copy(pt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ve===!0&&ee.cameras.push(pt)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=a.getBinding();const ht=_.getDepthInformation(Ue[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,o.renderState)}if(We&&We.includes("camera-access")&&T){e.state.unbindTexture(),_=a.getBinding();for(let ht=0;ht<Ue.length;ht++){const Rt=Ue[ht].camera;if(Rt){let B=v[Rt];B||(B=new jb,v[Rt]=B);const pt=_.getCameraImage(Rt);B.sourceTexture=pt}}}}for(let Ue=0;Ue<j.length;Ue++){const Ve=N[Ue],We=j[Ue];Ve!==null&&We!==void 0&&We.update(Ve,he,p||u)}Se&&Se(re,he),he.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:he}),M=null}const ze=new kb;ze.setAnimationLoop(Te),this.setAnimationLoop=function(re){Se=re},this.dispose=function(){}}}const nr=new ka,hR=new xn;function pR(r,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,Bb(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,U,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,F)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),T(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,L,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===gi&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===gi&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,F=L.envMapRotation;U&&(S.envMap.value=U,nr.copy(F),nr.x*=-1,nr.y*=-1,nr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),S.envMapRotation.value.setFromMatrix4(hR.makeRotationFromEuler(nr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=U*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===gi&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function T(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function mR(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const F=U.program;a.uniformBlockBinding(L,F)}function p(L,U){let F=o[L.id];F===void 0&&(M(L),F=g(L),o[L.id]=F,L.addEventListener("dispose",S));const j=U.program;a.updateUBOMapping(L,j);const N=e.render.frame;c[L.id]!==N&&(x(L),c[L.id]=N)}function g(L){const U=_();L.__bindingPointIndex=U;const F=r.createBuffer(),j=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,F),r.bufferData(r.UNIFORM_BUFFER,j,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,F),F}function _(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return _n("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=o[L.id],F=L.uniforms,j=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let N=0,z=F.length;N<z;N++){const K=Array.isArray(F[N])?F[N]:[F[N]];for(let C=0,w=K.length;C<w;C++){const G=K[C];if(y(G,N,C,j)===!0){const ee=G.__offset,de=Array.isArray(G.value)?G.value:[G.value];let _e=0;for(let Q=0;Q<de.length;Q++){const P=de[Q],k=T(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ee+_e,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,_e),_e+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ee,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(L,U,F,j){const N=L.value,z=U+"_"+F;if(j[z]===void 0)return typeof N=="number"||typeof N=="boolean"?j[z]=N:j[z]=N.clone(),!0;{const K=j[z];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return j[z]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function M(L){const U=L.uniforms;let F=0;const j=16;for(let z=0,K=U.length;z<K;z++){const C=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,G=C.length;w<G;w++){const ee=C[w],de=Array.isArray(ee.value)?ee.value:[ee.value];for(let _e=0,Q=de.length;_e<Q;_e++){const P=de[_e],k=T(P),W=F%j,fe=W%k.boundary,pe=W+fe;F+=fe,pe!==0&&j-pe<k.storage&&(F+=j-pe),ee.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=F,F+=k.storage}}}const N=F%j;return N>0&&(F+=j-N),L.__size=F,L.__cache={},this}function T(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const F=u.indexOf(U.__bindingPointIndex);u.splice(F,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const gR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Pa=null;function _R(){return Pa===null&&(Pa=new gM(gR,32,32,Bp,Do),Pa.minFilter=ei,Pa.magFilter=ei,Pa.wrapS=oi,Pa.wrapT=oi,Pa.generateMipmaps=!1,Pa.needsUpdate=!0),Pa}class xR{constructor(e={}){const{canvas:n=VS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([Gp,Hp,Ip]),T=new Set([ja,pr,Gl,Vl,zp,Fp]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,U=null;const F=[],j=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=ri;let K=0,C=0,w=null,G=-1,ee=null;const de=new yn,_e=new yn;let Q=null;const P=new Vt(0);let k=0,W=n.width,fe=n.height,pe=1,D=null,oe=null;const Se=new yn(0,0,W,fe),Te=new yn(0,0,W,fe);let ze=!1;const re=new Wp;let he=!1,Ue=!1;const Ve=new xn,We=new ce,dt=new yn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Rt(){return w===null?pe:1}let B=a;function pt(R,X){return n.getContext(R,X)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Np}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),B===null){const X="webgl2";if(B=pt(X,R),B===null)throw pt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let mt,Lt,ke,kt,$e,nt,O,E,te,xe,Z,q,Ne,Ae,qe,He,ye,Ee,Ze,je,Fe,at,H,Oe;function we(){mt=new AT(B),mt.init(),at=new lR(B,mt),Lt=new _T(B,mt,e,at),ke=new rR(B,mt),Lt.reversedDepthBuffer&&x&&ke.buffers.depth.setReversed(!0),kt=new CT(B),$e=new qA,nt=new oR(B,mt,ke,$e,Lt,at,kt),O=new vT(N),E=new TT(N),te=new LM(B),H=new mT(B,te),xe=new RT(B,te,kt,H),Z=new OT(B,xe,te,kt),Ze=new DT(B,Lt,nt),He=new xT($e),q=new WA(N,O,E,mt,Lt,H,He),Ne=new pR(N,$e),Ae=new $A,qe=new tR(mt),Ee=new pT(N,O,E,ke,Z,y,m),ye=new aR(N,Z,Lt),Oe=new mR(B,kt,Lt,ke),je=new gT(B,mt,kt),Fe=new wT(B,mt,kt),kt.programs=q.programs,N.capabilities=Lt,N.extensions=mt,N.properties=$e,N.renderLists=Ae,N.shadowMap=ye,N.state=ke,N.info=kt}we();const Ce=new dR(N,B);this.xr=Ce,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=mt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=mt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(W,fe,!1))},this.getSize=function(R){return R.set(W,fe)},this.setSize=function(R,X,ae=!0){if(Ce.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,fe=X,n.width=Math.floor(R*pe),n.height=Math.floor(X*pe),ae===!0&&(n.style.width=R+"px",n.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(W*pe,fe*pe).floor()},this.setDrawingBufferSize=function(R,X,ae){W=R,fe=X,pe=ae,n.width=Math.floor(R*ae),n.height=Math.floor(X*ae),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(de)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,X,ae,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,X,ae,J),ke.viewport(de.copy(Se).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Te)},this.setScissor=function(R,X,ae,J){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,X,ae,J),ke.scissor(_e.copy(Te).multiplyScalar(pe).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(R){ke.setScissorTest(ze=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){oe=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,ae=!0){let J=0;if(R){let $=!1;if(w!==null){const Re=w.texture.format;$=M.has(Re)}if($){const Re=w.texture.type,Le=T.has(Re),Be=Ee.getClearColor(),Ge=Ee.getClearAlpha(),tt=Be.r,st=Be.g,Qe=Be.b;Le?(S[0]=tt,S[1]=st,S[2]=Qe,S[3]=Ge,B.clearBufferuiv(B.COLOR,0,S)):(v[0]=tt,v[1]=st,v[2]=Qe,v[3]=Ge,B.clearBufferiv(B.COLOR,0,v))}else J|=B.COLOR_BUFFER_BIT}X&&(J|=B.DEPTH_BUFFER_BIT),ae&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),Ee.dispose(),Ae.dispose(),qe.dispose(),$e.dispose(),O.dispose(),E.dispose(),Z.dispose(),H.dispose(),Oe.dispose(),q.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ls),Ce.removeEventListener("sessionend",Wa),li.stop()};function Me(R){R.preventDefault(),ov("WebGLRenderer: Context Lost."),z=!0}function ve(){ov("WebGLRenderer: Context Restored."),z=!1;const R=kt.autoReset,X=ye.enabled,ae=ye.autoUpdate,J=ye.needsUpdate,$=ye.type;we(),kt.autoReset=R,ye.enabled=X,ye.autoUpdate=ae,ye.needsUpdate=J,ye.type=$}function Ie(R){_n("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function rt(R){const X=R.target;X.removeEventListener("dispose",rt),Ht(X)}function Ht(R){Ut(R),$e.remove(R)}function Ut(R){const X=$e.get(R).programs;X!==void 0&&(X.forEach(function(ae){q.releaseProgram(ae)}),R.isShaderMaterial&&q.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,ae,J,$,Re){X===null&&(X=dn);const Le=$.isMesh&&$.matrixWorld.determinant()<0,Be=cn(R,X,ae,J,$);ke.setMaterial(J,Le);let Ge=ae.index,tt=1;if(J.wireframe===!0){if(Ge=xe.getWireframeAttribute(ae),Ge===void 0)return;tt=2}const st=ae.drawRange,Qe=ae.attributes.position;let xt=st.start*tt,Nt=(st.start+st.count)*tt;Re!==null&&(xt=Math.max(xt,Re.start*tt),Nt=Math.min(Nt,(Re.start+Re.count)*tt)),Ge!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,Ge.count)):Qe!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,Qe.count));const zt=Nt-xt;if(zt<0||zt===1/0)return;H.setup($,J,Be,ae,Ge);let wt,jt=je;if(Ge!==null&&(wt=te.get(Ge),jt=Fe,jt.setIndex(wt)),$.isMesh)J.wireframe===!0?(ke.setLineWidth(J.wireframeLinewidth*Rt()),jt.setMode(B.LINES)):jt.setMode(B.TRIANGLES);else if($.isLine){let et=J.linewidth;et===void 0&&(et=1),ke.setLineWidth(et*Rt()),$.isLineSegments?jt.setMode(B.LINES):$.isLineLoop?jt.setMode(B.LINE_LOOP):jt.setMode(B.LINE_STRIP)}else $.isPoints?jt.setMode(B.POINTS):$.isSprite&&jt.setMode(B.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),jt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))jt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const et=$._multiDrawStarts,Jt=$._multiDrawCounts,Ct=$._multiDrawCount,Hn=Ge?te.get(Ge).bytesPerElement:1,$a=$e.get(J).currentProgram.getUniforms();for(let tn=0;tn<Ct;tn++)$a.setValue(B,"_gl_DrawID",tn),jt.render(et[tn]/Hn,Jt[tn])}else if($.isInstancedMesh)jt.renderInstances(xt,zt,$.count);else if(ae.isInstancedBufferGeometry){const et=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Jt=Math.min(ae.instanceCount,et);jt.renderInstances(xt,zt,Jt)}else jt.render(xt,zt)};function Dn(R,X,ae){R.transparent===!0&&R.side===Fa&&R.forceSinglePass===!1?(R.side=gi,R.needsUpdate=!0,St(R,X,ae),R.side=Us,R.needsUpdate=!0,St(R,X,ae),R.side=Fa):St(R,X,ae)}this.compile=function(R,X,ae=null){ae===null&&(ae=R),U=qe.get(ae),U.init(X),j.push(U),ae.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),R!==ae&&R.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(U.pushLight($),$.castShadow&&U.pushShadow($))}),U.setupLights();const J=new Set;return R.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Be=Re[Le];Dn(Be,ae,$),J.add(Be)}else Dn(Re,ae,$),J.add(Re)}),U=j.pop(),J},this.compileAsync=function(R,X,ae=null){const J=this.compile(R,X,ae);return new Promise($=>{function Re(){if(J.forEach(function(Le){$e.get(Le).currentProgram.isReady()&&J.delete(Le)}),J.size===0){$(R);return}setTimeout(Re,10)}mt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let In=null;function ki(R){In&&In(R)}function Ls(){li.stop()}function Wa(){li.start()}const li=new kb;li.setAnimationLoop(ki),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(R){In=R,Ce.setAnimationLoop(R),R===null?li.stop():li.start()},Ce.addEventListener("sessionstart",Ls),Ce.addEventListener("sessionend",Wa),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){_n("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,X,w),U=qe.get(R,j.length),U.init(X),j.push(U),Ve.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),re.setFromProjectionMatrix(Ve,ca,X.reversedDepth),Ue=this.localClippingEnabled,he=He.init(this.clippingPlanes,Ue),L=Ae.get(R,F.length),L.init(),F.push(L),Ce.enabled===!0&&Ce.isPresenting===!0){const Re=N.xr.getDepthSensingMesh();Re!==null&&na(Re,X,-1/0,N.sortObjects)}na(R,X,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(D,oe),ht=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ht&&Ee.addToRenderList(L,R),this.info.render.frame++,he===!0&&He.beginShadows();const ae=U.state.shadowsArray;ye.render(ae,R,X),he===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=L.opaque,$=L.transmissive;if(U.setupLights(),X.isArrayCamera){const Re=X.cameras;if($.length>0)for(let Le=0,Be=Re.length;Le<Be;Le++){const Ge=Re[Le];Ya(J,$,R,Ge)}ht&&Ee.render(R);for(let Le=0,Be=Re.length;Le<Be;Le++){const Ge=Re[Le];qa(L,R,Ge,Ge.viewport)}}else $.length>0&&Ya(J,$,R,X),ht&&Ee.render(R),qa(L,R,X);w!==null&&C===0&&(nt.updateMultisampleRenderTarget(w),nt.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(N,R,X),H.resetDefaultState(),G=-1,ee=null,j.pop(),j.length>0?(U=j[j.length-1],he===!0&&He.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function na(R,X,ae,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)ae=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||re.intersectsSprite(R)){J&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Le=Z.update(R),Be=R.material;Be.visible&&L.push(R,Le,Be,ae,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||re.intersectsObject(R))){const Le=Z.update(R),Be=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),dt.copy(Le.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Be)){const Ge=Le.groups;for(let tt=0,st=Ge.length;tt<st;tt++){const Qe=Ge[tt],xt=Be[Qe.materialIndex];xt&&xt.visible&&L.push(R,Le,xt,ae,dt.z,Qe)}}else Be.visible&&L.push(R,Le,Be,ae,dt.z,null)}}const Re=R.children;for(let Le=0,Be=Re.length;Le<Be;Le++)na(Re[Le],X,ae,J)}function qa(R,X,ae,J){const{opaque:$,transmissive:Re,transparent:Le}=R;U.setupLightsView(ae),he===!0&&He.setGlobalState(N.clippingPlanes,ae),J&&ke.viewport(de.copy(J)),$.length>0&&lt($,X,ae),Re.length>0&&lt(Re,X,ae),Le.length>0&&lt(Le,X,ae),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Ya(R,X,ae,J){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new mr(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Do:ja,minFilter:or,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace}));const Re=U.state.transmissionRenderTarget[J.id],Le=J.viewport||de;Re.setSize(Le.z*N.transmissionResolutionScale,Le.w*N.transmissionResolutionScale);const Be=N.getRenderTarget(),Ge=N.getActiveCubeFace(),tt=N.getActiveMipmapLevel();N.setRenderTarget(Re),N.getClearColor(P),k=N.getClearAlpha(),k<1&&N.setClearColor(16777215,.5),N.clear(),ht&&Ee.render(ae);const st=N.toneMapping;N.toneMapping=Cs;const Qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),he===!0&&He.setGlobalState(N.clippingPlanes,J),lt(R,ae,J),nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re),mt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,zt=X.length;Nt<zt;Nt++){const wt=X[Nt],{object:jt,geometry:et,material:Jt,group:Ct}=wt;if(Jt.side===Fa&&jt.layers.test(J.layers)){const Hn=Jt.side;Jt.side=gi,Jt.needsUpdate=!0,ct(jt,ae,J,et,Jt,Ct),Jt.side=Hn,Jt.needsUpdate=!0,xt=!0}}xt===!0&&(nt.updateMultisampleRenderTarget(Re),nt.updateRenderTargetMipmap(Re))}N.setRenderTarget(Be,Ge,tt),N.setClearColor(P,k),Qe!==void 0&&(J.viewport=Qe),N.toneMapping=st}function lt(R,X,ae){const J=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Re=R.length;$<Re;$++){const Le=R[$],{object:Be,geometry:Ge,group:tt}=Le;let st=Le.material;st.allowOverride===!0&&J!==null&&(st=J),Be.layers.test(ae.layers)&&ct(Be,X,ae,Ge,st,tt)}}function ct(R,X,ae,J,$,Re){R.onBeforeRender(N,X,ae,J,$,Re),R.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.onBeforeRender(N,X,ae,J,R,Re),$.transparent===!0&&$.side===Fa&&$.forceSinglePass===!1?($.side=gi,$.needsUpdate=!0,N.renderBufferDirect(ae,X,J,$,R,Re),$.side=Us,$.needsUpdate=!0,N.renderBufferDirect(ae,X,J,$,R,Re),$.side=Fa):N.renderBufferDirect(ae,X,J,$,R,Re),R.onAfterRender(N,X,ae,J,$,Re)}function St(R,X,ae){X.isScene!==!0&&(X=dn);const J=$e.get(R),$=U.state.lights,Re=U.state.shadowsArray,Le=$.state.version,Be=q.getParameters(R,$.state,Re,X,ae),Ge=q.getProgramCacheKey(Be);let tt=J.programs;J.environment=R.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(R.isMeshStandardMaterial?E:O).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,tt===void 0&&(R.addEventListener("dispose",rt),tt=new Map,J.programs=tt);let st=tt.get(Ge);if(st!==void 0){if(J.currentProgram===st&&J.lightsStateVersion===Le)return hn(R,Be),st}else Be.uniforms=q.getUniforms(R),R.onBeforeCompile(Be,N),st=q.acquireProgram(Be,Ge),tt.set(Ge,st),J.uniforms=Be.uniforms;const Qe=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qe.clippingPlanes=He.uniform),hn(R,Be),J.needsLights=Bn(R),J.lightsStateVersion=Le,J.needsLights&&(Qe.ambientLightColor.value=$.state.ambient,Qe.lightProbe.value=$.state.probe,Qe.directionalLights.value=$.state.directional,Qe.directionalLightShadows.value=$.state.directionalShadow,Qe.spotLights.value=$.state.spot,Qe.spotLightShadows.value=$.state.spotShadow,Qe.rectAreaLights.value=$.state.rectArea,Qe.ltc_1.value=$.state.rectAreaLTC1,Qe.ltc_2.value=$.state.rectAreaLTC2,Qe.pointLights.value=$.state.point,Qe.pointLightShadows.value=$.state.pointShadow,Qe.hemisphereLights.value=$.state.hemi,Qe.directionalShadowMap.value=$.state.directionalShadowMap,Qe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Qe.spotShadowMap.value=$.state.spotShadowMap,Qe.spotLightMatrix.value=$.state.spotLightMatrix,Qe.spotLightMap.value=$.state.spotLightMap,Qe.pointShadowMap.value=$.state.pointShadowMap,Qe.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=st,J.uniformsList=null,st}function an(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=Vu.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function hn(R,X){const ae=$e.get(R);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function cn(R,X,ae,J,$){X.isScene!==!0&&(X=dn),nt.resetTextureUnits();const Re=X.fog,Le=J.isMeshStandardMaterial?X.environment:null,Be=w===null?N.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:So,Ge=(J.isMeshStandardMaterial?E:O).get(J.envMap||Le),tt=J.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,st=!!ae.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Qe=!!ae.morphAttributes.position,xt=!!ae.morphAttributes.normal,Nt=!!ae.morphAttributes.color;let zt=Cs;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(zt=N.toneMapping);const wt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,jt=wt!==void 0?wt.length:0,et=$e.get(J),Jt=U.state.lights;if(he===!0&&(Ue===!0||R!==ee)){const Vn=R===ee&&J.id===G;He.setState(J,R,Vn)}let Ct=!1;J.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Jt.state.version||et.outputColorSpace!==Be||$.isBatchedMesh&&et.batching===!1||!$.isBatchedMesh&&et.batching===!0||$.isBatchedMesh&&et.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&et.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&et.instancing===!1||!$.isInstancedMesh&&et.instancing===!0||$.isSkinnedMesh&&et.skinning===!1||!$.isSkinnedMesh&&et.skinning===!0||$.isInstancedMesh&&et.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&et.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&et.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&et.instancingMorph===!1&&$.morphTexture!==null||et.envMap!==Ge||J.fog===!0&&et.fog!==Re||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==He.numPlanes||et.numIntersection!==He.numIntersection)||et.vertexAlphas!==tt||et.vertexTangents!==st||et.morphTargets!==Qe||et.morphNormals!==xt||et.morphColors!==Nt||et.toneMapping!==zt||et.morphTargetsCount!==jt)&&(Ct=!0):(Ct=!0,et.__version=J.version);let Hn=et.currentProgram;Ct===!0&&(Hn=St(J,X,$));let $a=!1,tn=!1,fa=!1;const nn=Hn.getUniforms(),Gn=et.uniforms;if(ke.useProgram(Hn.program)&&($a=!0,tn=!0,fa=!0),J.id!==G&&(G=J.id,tn=!0),$a||ee!==R){ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),nn.setValue(B,"projectionMatrix",R.projectionMatrix),nn.setValue(B,"viewMatrix",R.matrixWorldInverse);const $n=nn.map.cameraPosition;$n!==void 0&&$n.setValue(B,We.setFromMatrixPosition(R.matrixWorld)),Lt.logarithmicDepthBuffer&&nn.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&nn.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,tn=!0,fa=!0)}if($.isSkinnedMesh){nn.setOptional(B,$,"bindMatrix"),nn.setOptional(B,$,"bindMatrixInverse");const Vn=$.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),nn.setValue(B,"boneTexture",Vn.boneTexture,nt))}$.isBatchedMesh&&(nn.setOptional(B,$,"batchingTexture"),nn.setValue(B,"batchingTexture",$._matricesTexture,nt),nn.setOptional(B,$,"batchingIdTexture"),nn.setValue(B,"batchingIdTexture",$._indirectTexture,nt),nn.setOptional(B,$,"batchingColorTexture"),$._colorsTexture!==null&&nn.setValue(B,"batchingColorTexture",$._colorsTexture,nt));const On=ae.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ze.update($,ae,Hn),(tn||et.receiveShadow!==$.receiveShadow)&&(et.receiveShadow=$.receiveShadow,nn.setValue(B,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Gn.envMap.value=Ge,Gn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Gn.envMapIntensity.value=X.environmentIntensity),Gn.dfgLUT!==void 0&&(Gn.dfgLUT.value=_R()),tn&&(nn.setValue(B,"toneMappingExposure",N.toneMappingExposure),et.needsLights&&Xt(Gn,fa),Re&&J.fog===!0&&Ne.refreshFogUniforms(Gn,Re),Ne.refreshMaterialUniforms(Gn,J,pe,fe,U.state.transmissionRenderTarget[R.id]),Vu.upload(B,an(et),Gn,nt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Vu.upload(B,an(et),Gn,nt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&nn.setValue(B,"center",$.center),nn.setValue(B,"modelViewMatrix",$.modelViewMatrix),nn.setValue(B,"normalMatrix",$.normalMatrix),nn.setValue(B,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Vn=J.uniformsGroups;for(let $n=0,ia=Vn.length;$n<ia;$n++){const da=Vn[$n];Oe.update(da,Hn),Oe.bind(da,Hn)}}return Hn}function Xt(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Bn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,X,ae){const J=$e.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),$e.get(R.texture).__webglTexture=X,$e.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ae,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,X){const ae=$e.get(R);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0};const ot=B.createFramebuffer();this.setRenderTarget=function(R,X=0,ae=0){w=R,K=X,C=ae;let J=!0,$=null,Re=!1,Le=!1;if(R){const Ge=$e.get(R);if(Ge.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Ge.__webglFramebuffer===void 0)nt.setupRenderTarget(R);else if(Ge.__hasExternalTextures)nt.rebindTextures(R,$e.get(R.texture).__webglTexture,$e.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qe=R.depthTexture;if(Ge.__boundDepthTexture!==Qe){if(Qe!==null&&$e.has(Qe)&&(R.width!==Qe.image.width||R.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Le=!0);const st=$e.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[X])?$=st[X][ae]:$=st[X],Re=!0):R.samples>0&&nt.useMultisampledRTT(R)===!1?$=$e.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?$=st[ae]:$=st,de.copy(R.viewport),_e.copy(R.scissor),Q=R.scissorTest}else de.copy(Se).multiplyScalar(pe).floor(),_e.copy(Te).multiplyScalar(pe).floor(),Q=ze;if(ae!==0&&($=ot),ke.bindFramebuffer(B.FRAMEBUFFER,$)&&J&&ke.drawBuffers(R,$),ke.viewport(de),ke.scissor(_e),ke.setScissorTest(Q),Re){const Ge=$e.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,ae)}else if(Le){const Ge=X;for(let tt=0;tt<R.textures.length;tt++){const st=$e.get(R.textures[tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tt,st.__webglTexture,ae,Ge)}}else if(R!==null&&ae!==0){const Ge=$e.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ge.__webglTexture,ae)}G=-1},this.readRenderTargetPixels=function(R,X,ae,J,$,Re,Le,Be=0){if(!(R&&R.isWebGLRenderTarget)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge){ke.bindFramebuffer(B.FRAMEBUFFER,Ge);try{const tt=R.textures[Be],st=tt.format,Qe=tt.type;if(!Lt.textureFormatReadable(st)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Qe)){_n("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&ae>=0&&ae<=R.height-$&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Be),B.readPixels(X,ae,J,$,at.convert(st),at.convert(Qe),Re))}finally{const tt=w!==null?$e.get(w).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(R,X,ae,J,$,Re,Le,Be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=$e.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Le!==void 0&&(Ge=Ge[Le]),Ge)if(X>=0&&X<=R.width-J&&ae>=0&&ae<=R.height-$){ke.bindFramebuffer(B.FRAMEBUFFER,Ge);const tt=R.textures[Be],st=tt.format,Qe=tt.type;if(!Lt.textureFormatReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.bufferData(B.PIXEL_PACK_BUFFER,Re.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Be),B.readPixels(X,ae,J,$,at.convert(st),at.convert(Qe),0);const Nt=w!==null?$e.get(w).__webglFramebuffer:null;ke.bindFramebuffer(B.FRAMEBUFFER,Nt);const zt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await jS(B,zt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Re),B.deleteBuffer(xt),B.deleteSync(zt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,X=null,ae=0){const J=Math.pow(2,-ae),$=Math.floor(R.image.width*J),Re=Math.floor(R.image.height*J),Le=X!==null?X.x:0,Be=X!==null?X.y:0;nt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Le,Be,$,Re),ke.unbindTexture()};const _t=B.createFramebuffer(),pn=B.createFramebuffer();this.copyTextureToTexture=function(R,X,ae=null,J=null,$=0,Re=null){Re===null&&($!==0?(Wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=$,$=0):Re=0);let Le,Be,Ge,tt,st,Qe,xt,Nt,zt;const wt=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(ae!==null)Le=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Ge=ae.isBox3?ae.max.z-ae.min.z:1,tt=ae.min.x,st=ae.min.y,Qe=ae.isBox3?ae.min.z:0;else{const On=Math.pow(2,-$);Le=Math.floor(wt.width*On),Be=Math.floor(wt.height*On),R.isDataArrayTexture?Ge=wt.depth:R.isData3DTexture?Ge=Math.floor(wt.depth*On):Ge=1,tt=0,st=0,Qe=0}J!==null?(xt=J.x,Nt=J.y,zt=J.z):(xt=0,Nt=0,zt=0);const jt=at.convert(X.format),et=at.convert(X.type);let Jt;X.isData3DTexture?(nt.setTexture3D(X,0),Jt=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(nt.setTexture2DArray(X,0),Jt=B.TEXTURE_2D_ARRAY):(nt.setTexture2D(X,0),Jt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Ct=B.getParameter(B.UNPACK_ROW_LENGTH),Hn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$a=B.getParameter(B.UNPACK_SKIP_PIXELS),tn=B.getParameter(B.UNPACK_SKIP_ROWS),fa=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,wt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tt),B.pixelStorei(B.UNPACK_SKIP_ROWS,st),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Qe);const nn=R.isDataArrayTexture||R.isData3DTexture,Gn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const On=$e.get(R),Vn=$e.get(X),$n=$e.get(On.__renderTarget),ia=$e.get(Vn.__renderTarget);ke.bindFramebuffer(B.READ_FRAMEBUFFER,$n.__webglFramebuffer),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,ia.__webglFramebuffer);for(let da=0;da<Ge;da++)nn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(R).__webglTexture,$,Qe+da),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$e.get(X).__webglTexture,Re,zt+da)),B.blitFramebuffer(tt,st,Le,Be,xt,Nt,Le,Be,B.DEPTH_BUFFER_BIT,B.NEAREST);ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if($!==0||R.isRenderTargetTexture||$e.has(R)){const On=$e.get(R),Vn=$e.get(X);ke.bindFramebuffer(B.READ_FRAMEBUFFER,_t),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,pn);for(let $n=0;$n<Ge;$n++)nn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,On.__webglTexture,$,Qe+$n):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,On.__webglTexture,$),Gn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vn.__webglTexture,Re,zt+$n):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vn.__webglTexture,Re),$!==0?B.blitFramebuffer(tt,st,Le,Be,xt,Nt,Le,Be,B.COLOR_BUFFER_BIT,B.NEAREST):Gn?B.copyTexSubImage3D(Jt,Re,xt,Nt,zt+$n,tt,st,Le,Be):B.copyTexSubImage2D(Jt,Re,xt,Nt,tt,st,Le,Be);ke.bindFramebuffer(B.READ_FRAMEBUFFER,null),ke.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Gn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Jt,Re,xt,Nt,zt,Le,Be,Ge,jt,et,wt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Jt,Re,xt,Nt,zt,Le,Be,Ge,jt,wt.data):B.texSubImage3D(Jt,Re,xt,Nt,zt,Le,Be,Ge,jt,et,wt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Re,xt,Nt,Le,Be,jt,et,wt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Re,xt,Nt,wt.width,wt.height,jt,wt.data):B.texSubImage2D(B.TEXTURE_2D,Re,xt,Nt,Le,Be,jt,et,wt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ct),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Hn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$a),B.pixelStorei(B.UNPACK_SKIP_ROWS,tn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,fa),Re===0&&X.generateMipmaps&&B.generateMipmap(Jt),ke.unbindTexture()},this.initRenderTarget=function(R){$e.get(R).__webglFramebuffer===void 0&&nt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?nt.setTextureCube(R,0):R.isData3DTexture?nt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?nt.setTexture2DArray(R,0):nt.setTexture2D(R,0),ke.unbindTexture()},this.resetState=function(){K=0,C=0,w=null,ke.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Bt._getUnpackColorSpace()}}const vR="/MarcoinSF/assets/2021-10-31-CDuc_qmG.JPG",bR=Object.freeze(Object.defineProperty({__proto__:null,default:vR},Symbol.toStringTag,{value:"Module"})),yR="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",SR=Object.freeze(Object.defineProperty({__proto__:null,default:yR},Symbol.toStringTag,{value:"Module"})),MR="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",ER=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),TR="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",AR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),RR="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",wR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),CR="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",DR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),OR="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",UR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),LR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",NR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),PR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",zR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),FR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",IR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),BR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",HR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"})),GR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",VR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),jR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",kR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),XR="/MarcoinSF/assets/2024-05-14-KI90_q1g.jpeg",WR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"})),qR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",YR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),$R="/MarcoinSF/assets/2024-07-28-BON0UAU4.mp4",ZR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),KR="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",ew=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tw="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",nw=Object.freeze(Object.defineProperty({__proto__:null,default:tw},Symbol.toStringTag,{value:"Module"})),iw="/MarcoinSF/assets/2024-08-23-1-BMj95jfC.jpg",aw=Object.freeze(Object.defineProperty({__proto__:null,default:iw},Symbol.toStringTag,{value:"Module"})),sw="/MarcoinSF/assets/2024-08-23-3-DkddrKGM.jpg",rw=Object.freeze(Object.defineProperty({__proto__:null,default:sw},Symbol.toStringTag,{value:"Module"})),ow="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",lw=Object.freeze(Object.defineProperty({__proto__:null,default:ow},Symbol.toStringTag,{value:"Module"})),cw="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),fw="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",dw=Object.freeze(Object.defineProperty({__proto__:null,default:fw},Symbol.toStringTag,{value:"Module"})),hw="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",pw=Object.freeze(Object.defineProperty({__proto__:null,default:hw},Symbol.toStringTag,{value:"Module"})),mw="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",gw=Object.freeze(Object.defineProperty({__proto__:null,default:mw},Symbol.toStringTag,{value:"Module"})),_w="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",xw=Object.freeze(Object.defineProperty({__proto__:null,default:_w},Symbol.toStringTag,{value:"Module"})),vw="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",bw=Object.freeze(Object.defineProperty({__proto__:null,default:vw},Symbol.toStringTag,{value:"Module"})),yw="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",Sw=Object.freeze(Object.defineProperty({__proto__:null,default:yw},Symbol.toStringTag,{value:"Module"})),Mw="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",Ew=Object.freeze(Object.defineProperty({__proto__:null,default:Mw},Symbol.toStringTag,{value:"Module"})),Tw="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",Aw=Object.freeze(Object.defineProperty({__proto__:null,default:Tw},Symbol.toStringTag,{value:"Module"})),Rw="/MarcoinSF/assets/2024-09-25-BXZ-JE61.jpeg",ww=Object.freeze(Object.defineProperty({__proto__:null,default:Rw},Symbol.toStringTag,{value:"Module"})),Cw="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",Dw=Object.freeze(Object.defineProperty({__proto__:null,default:Cw},Symbol.toStringTag,{value:"Module"})),Ow="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",Uw=Object.freeze(Object.defineProperty({__proto__:null,default:Ow},Symbol.toStringTag,{value:"Module"})),Lw="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Lw},Symbol.toStringTag,{value:"Module"})),Pw="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",zw=Object.freeze(Object.defineProperty({__proto__:null,default:Pw},Symbol.toStringTag,{value:"Module"})),Fw="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",Iw=Object.freeze(Object.defineProperty({__proto__:null,default:Fw},Symbol.toStringTag,{value:"Module"})),Bw="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",Hw=Object.freeze(Object.defineProperty({__proto__:null,default:Bw},Symbol.toStringTag,{value:"Module"})),Gw="/MarcoinSF/assets/2024-10-20-Bd_4AOPQ.MOV",Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Gw},Symbol.toStringTag,{value:"Module"})),jw="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",kw=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Xw="/MarcoinSF/assets/2024-10-22-CiL1HWjJ.JPG",Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),qw="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",Yw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),$w="/MarcoinSF/assets/2024-11-01-D3nPOt8k.MOV",Zw=Object.freeze(Object.defineProperty({__proto__:null,default:$w},Symbol.toStringTag,{value:"Module"})),Kw="/MarcoinSF/assets/2024-11-03-BYcppjdM.MOV",Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Jw="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",eC=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),tC="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"})),iC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",aC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),sC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",rC=Object.freeze(Object.defineProperty({__proto__:null,default:sC},Symbol.toStringTag,{value:"Module"})),oC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",lC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),cC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),fC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",dC=Object.freeze(Object.defineProperty({__proto__:null,default:fC},Symbol.toStringTag,{value:"Module"})),hC="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",pC=Object.freeze(Object.defineProperty({__proto__:null,default:hC},Symbol.toStringTag,{value:"Module"})),mC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"})),_C="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",xC=Object.freeze(Object.defineProperty({__proto__:null,default:_C},Symbol.toStringTag,{value:"Module"})),vC="/MarcoinSF/assets/2025-02-26-weniPF9W.JPG",bC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),TC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",AC=Object.freeze(Object.defineProperty({__proto__:null,default:TC},Symbol.toStringTag,{value:"Module"})),RC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",wC=Object.freeze(Object.defineProperty({__proto__:null,default:RC},Symbol.toStringTag,{value:"Module"})),CC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",DC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"})),OC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",UC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"})),LC="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",NC=Object.freeze(Object.defineProperty({__proto__:null,default:LC},Symbol.toStringTag,{value:"Module"})),PC="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",zC=Object.freeze(Object.defineProperty({__proto__:null,default:PC},Symbol.toStringTag,{value:"Module"})),FC="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",IC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),BC="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",HC=Object.freeze(Object.defineProperty({__proto__:null,default:BC},Symbol.toStringTag,{value:"Module"})),GC="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",VC=Object.freeze(Object.defineProperty({__proto__:null,default:GC},Symbol.toStringTag,{value:"Module"})),jC="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",kC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),XC="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",WC=Object.freeze(Object.defineProperty({__proto__:null,default:XC},Symbol.toStringTag,{value:"Module"})),qC="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",YC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),$C="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",ZC=Object.freeze(Object.defineProperty({__proto__:null,default:$C},Symbol.toStringTag,{value:"Module"})),KC="/MarcoinSF/assets/2025-06-09-StP8uvDz.mp4",QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),JC="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",eD=Object.freeze(Object.defineProperty({__proto__:null,default:JC},Symbol.toStringTag,{value:"Module"})),tD="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),iD="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",aD=Object.freeze(Object.defineProperty({__proto__:null,default:iD},Symbol.toStringTag,{value:"Module"})),sD="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",rD=Object.freeze(Object.defineProperty({__proto__:null,default:sD},Symbol.toStringTag,{value:"Module"})),oD="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",lD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),cD="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",uD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),fD="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",dD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",pD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),mD="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",gD=Object.freeze(Object.defineProperty({__proto__:null,default:mD},Symbol.toStringTag,{value:"Module"})),_D="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",xD=Object.freeze(Object.defineProperty({__proto__:null,default:_D},Symbol.toStringTag,{value:"Module"})),vD="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",bD=Object.freeze(Object.defineProperty({__proto__:null,default:vD},Symbol.toStringTag,{value:"Module"})),yD="/MarcoinSF/assets/2025-08-16-CQmSO3ij.mp4",SD=Object.freeze(Object.defineProperty({__proto__:null,default:yD},Symbol.toStringTag,{value:"Module"})),MD="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",ED=Object.freeze(Object.defineProperty({__proto__:null,default:MD},Symbol.toStringTag,{value:"Module"})),TD="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",AD=Object.freeze(Object.defineProperty({__proto__:null,default:TD},Symbol.toStringTag,{value:"Module"})),RD="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",wD=Object.freeze(Object.defineProperty({__proto__:null,default:RD},Symbol.toStringTag,{value:"Module"})),CD="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",DD=Object.freeze(Object.defineProperty({__proto__:null,default:CD},Symbol.toStringTag,{value:"Module"})),OD="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",UD=Object.freeze(Object.defineProperty({__proto__:null,default:OD},Symbol.toStringTag,{value:"Module"})),LD="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",ND=Object.freeze(Object.defineProperty({__proto__:null,default:LD},Symbol.toStringTag,{value:"Module"})),PD="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",zD=Object.freeze(Object.defineProperty({__proto__:null,default:PD},Symbol.toStringTag,{value:"Module"})),FD="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",ID=Object.freeze(Object.defineProperty({__proto__:null,default:FD},Symbol.toStringTag,{value:"Module"})),BD="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",HD=Object.freeze(Object.defineProperty({__proto__:null,default:BD},Symbol.toStringTag,{value:"Module"})),GD="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",VD=Object.freeze(Object.defineProperty({__proto__:null,default:GD},Symbol.toStringTag,{value:"Module"})),jD="/MarcoinSF/assets/2025-11-09-BxC_sGgm.mp4",kD=Object.freeze(Object.defineProperty({__proto__:null,default:jD},Symbol.toStringTag,{value:"Module"})),XD="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",WD=Object.freeze(Object.defineProperty({__proto__:null,default:XD},Symbol.toStringTag,{value:"Module"})),qD="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",YD=Object.freeze(Object.defineProperty({__proto__:null,default:qD},Symbol.toStringTag,{value:"Module"})),$D="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",ZD=Object.freeze(Object.defineProperty({__proto__:null,default:$D},Symbol.toStringTag,{value:"Module"})),KD="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",QD=Object.freeze(Object.defineProperty({__proto__:null,default:KD},Symbol.toStringTag,{value:"Module"})),JD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",e4=Object.freeze(Object.defineProperty({__proto__:null,default:JD},Symbol.toStringTag,{value:"Module"})),t4="/MarcoinSF/assets/2025-12-04-5-CxajqofK.jpeg",n4=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),i4="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",a4=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),s4="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",r4=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),o4="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",l4=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),$b="/MarcoinSF/assets/Ignore_2024-08-23-5-CqrWweLB.png",c4=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),Zb="/MarcoinSF/assets/Ignore_2025-05-10-06-YgLAOf2q.png",u4=Object.freeze(Object.defineProperty({__proto__:null,default:Zb},Symbol.toStringTag,{value:"Module"})),f4="/MarcoinSF/assets/BeggingBuddha-DxMsry8J.mp3",d4="/MarcoinSF/assets/FujiMt-BYVdz5Xz.mp3",h4="/MarcoinSF/assets/Handbeaten-fishball-BjZAOLT5.mp3",p4="/MarcoinSF/assets/LouMei-BIkjNDVS.mp3",h0=[{title:"Handbeaten Fishball",src:h4},{title:"Begging Buddha",src:f4},{title:"Fuji Mt",src:d4},{title:"Lou Mei",src:p4}],m4=Object.assign({"./assets/media/2021-10-31.JPG":bR,"./assets/media/2021-10-31.jpeg":SR,"./assets/media/2021-12-10.jpg":ER,"./assets/media/2022-05-13.JPG":AR,"./assets/media/2022-06-13.jpeg":wR,"./assets/media/2022-07-06-2.jpeg":DR,"./assets/media/2022-08-14.JPG":UR,"./assets/media/2022-10-29 Large.jpeg":NR,"./assets/media/2023-01-01.jpeg":zR,"./assets/media/2023-03-01.jpeg":IR,"./assets/media/2024-03-09-1.jpeg":HR,"./assets/media/2024-03-09.jpeg":VR,"./assets/media/2024-05-05.jpeg":kR,"./assets/media/2024-05-14.jpeg":WR,"./assets/media/2024-07-21.mp4":YR,"./assets/media/2024-07-28.mp4":ZR,"./assets/media/2024-07-31.jpeg":QR,"./assets/media/2024-08-10-1.mp4":ew,"./assets/media/2024-08-10.jpeg":nw,"./assets/media/2024-08-23-1.jpg":aw,"./assets/media/2024-08-23-3.jpg":rw,"./assets/media/2024-08-23-4.jpg":lw,"./assets/media/2024-08-23.jpg":uw,"./assets/media/2024-08-23.mp4":dw,"./assets/media/2024-08-25.mp4":pw,"./assets/media/2024-09-01.jpeg":gw,"./assets/media/2024-09-02.jpeg":xw,"./assets/media/2024-09-08.jpeg":bw,"./assets/media/2024-09-19-02.JPG":Sw,"./assets/media/2024-09-19-03.mp4":Ew,"./assets/media/2024-09-19.jpg":Aw,"./assets/media/2024-09-25.jpeg":ww,"./assets/media/2024-10-15.jpeg":Dw,"./assets/media/2024-10-20-1.jpeg":Uw,"./assets/media/2024-10-20-2.jpeg":Nw,"./assets/media/2024-10-20-3.jpeg":zw,"./assets/media/2024-10-20-4.mp4":Iw,"./assets/media/2024-10-20-7 Large.jpeg":Hw,"./assets/media/2024-10-20.MOV":Vw,"./assets/media/2024-10-20.jpeg":kw,"./assets/media/2024-10-22.JPG":Ww,"./assets/media/2024-10-26.jpeg":Yw,"./assets/media/2024-11-01.MOV":Zw,"./assets/media/2024-11-03.MOV":Qw,"./assets/media/2024-11-08.jpeg":eC,"./assets/media/2024-11-17-1.jpeg":nC,"./assets/media/2024-11-17-2.jpeg":aC,"./assets/media/2024-11-17-2.mp4":rC,"./assets/media/2024-11-17-3.jpg":lC,"./assets/media/2024-11-17.jpeg":uC,"./assets/media/2024-12-07.jpeg":dC,"./assets/media/2024-12-11.JPG":pC,"./assets/media/2025-02-12-1.mp4":gC,"./assets/media/2025-02-12.jpeg":xC,"./assets/media/2025-02-26.JPG":bC,"./assets/media/2025-03-07.jpeg":SC,"./assets/media/2025-03-08-1.jpeg":EC,"./assets/media/2025-03-08.jpeg":AC,"./assets/media/2025-03-08.mp4":wC,"./assets/media/2025-03-12.jpeg":DC,"./assets/media/2025-04-20-02.jpeg":UC,"./assets/media/2025-04-20.jpeg":NC,"./assets/media/2025-04-24.jpeg":zC,"./assets/media/2025-05-09.jpeg":IC,"./assets/media/2025-05-10-01.jpeg":HC,"./assets/media/2025-05-10-03.jpeg":VC,"./assets/media/2025-05-10-04.jpeg":kC,"./assets/media/2025-05-10-05.jpg":WC,"./assets/media/2025-05-23.mp4":YC,"./assets/media/2025-05-30.jpeg":ZC,"./assets/media/2025-06-09.mp4":QC,"./assets/media/2025-06-16.jpg":eD,"./assets/media/2025-06-17.jpeg":nD,"./assets/media/2025-06-19.jpeg":aD,"./assets/media/2025-06-20.jpeg":rD,"./assets/media/2025-06-29.JPG":lD,"./assets/media/2025-07-02.jpeg":uD,"./assets/media/2025-07-04.jpeg":dD,"./assets/media/2025-07-19.jpg":pD,"./assets/media/2025-07-23.jpeg":gD,"./assets/media/2025-08-02.jpeg":xD,"./assets/media/2025-08-15.jpeg":bD,"./assets/media/2025-08-16.mp4":SD,"./assets/media/2025-10-04.mp4":ED,"./assets/media/2025-10-08-2.jpeg":AD,"./assets/media/2025-10-08.jpeg":wD,"./assets/media/2025-10-09.JPG":DD,"./assets/media/2025-10-10.jpeg":UD,"./assets/media/2025-10-11.jpeg":ND,"./assets/media/2025-10-31-2.jpeg":zD,"./assets/media/2025-10-31-3.mp4":ID,"./assets/media/2025-10-31.jpeg":HD,"./assets/media/2025-11-09.jpeg":VD,"./assets/media/2025-11-09.mp4":kD,"./assets/media/2025-11-29.jpeg":WD,"./assets/media/2025-12-03.JPG":YD,"./assets/media/2025-12-03.jpeg":ZD,"./assets/media/2025-12-04-02.jpeg":QD,"./assets/media/2025-12-04-10.mp4":e4,"./assets/media/2025-12-04-5.jpeg":n4,"./assets/media/2025-12-04.jpeg":a4,"./assets/media/2025-12-05-01.mp4":r4,"./assets/media/2025-12-05-02.mp4":l4,"./assets/media/Ignore_2024-08-23-5.png":c4,"./assets/media/Ignore_2025-05-10-06.png":u4}),pp=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},g4="ignore_",_4={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},Yp=Object.entries(m4).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(g4))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=pp(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>!!r);Yp.push({filename:"2025-05-10-vimeo",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:Zb,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});Yp.push({filename:"2024-08-23-vimeo",src:"https://vimeo.com/1144210034",previewSrc:$b,embedUrl:"https://player.vimeo.com/video/1144210034",type:"embed",sortKey:"2024-08-23",dateOverride:"2024-08-23",titleOverride:"2024-08-23",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const Eo=Yp.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,timelineLabel:r.timelineLabel,title:r.dateOverride||pp(r.filename),description:r.description??_4[r.filename]??"",date:r.dateOverride||pp(r.filename)})),x4="/MarcoinSF/assets/cover-D6yBNHiu.mp4",v4="/MarcoinSF/assets/Balloon-C59jG2U_.wav",b4="/MarcoinSF/assets/Typing-K6XFAZpo.mp3",y4="/MarcoinSF/assets/curtain-D_OCfkhx.wav",Kb=r=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(r)}%3C/text%3E%3C/svg%3E") 16 16, auto`,S4=Kb("❤️"),M4=Kb("🌸"),E4=({onStartTransition:r})=>{const[e,n]=Ke.useState(0),[a,o]=Ke.useState(!1),[c,u]=Ke.useState(!1),[d,m]=Ke.useState(null),[p,g]=Ke.useState([]),_="Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds, 成功者...",[x,y]=Ke.useState(""),M=Ke.useRef(0),T=Ke.useRef(!1),S=Ke.useRef(null),v=Ke.useRef(null),L=Ke.useRef(null),U=Ke.useRef(!1),F=(Q,P,k)=>{M.current+=1;const W=M.current;g(fe=>[...fe,{id:W,x:Q,y:P,scale:k}])};Ke.useEffect(()=>{let Q=0;const P=Eo.length,k=fe=>new Promise(pe=>{const D=new Image;D.src=fe,D.onload=()=>pe(),D.onerror=()=>pe()});(async()=>{const fe=Eo.map(pe=>k(pe.previewSrc||pe.src).then(()=>{Q++,n(Math.floor(Q/P*100))}));await Promise.all(fe),setTimeout(()=>o(!0),500)})()},[]),Ke.useEffect(()=>{var W;if(!v.current){const fe=new Audio(b4);fe.loop=!0,fe.volume=.4,v.current=fe}(W=v.current)==null||W.play().catch(()=>{});let Q=0;const k=setInterval(()=>{var fe;Q+=1,y(_.slice(0,Q)),Q>=_.length&&((fe=v.current)==null||fe.pause(),v.current&&(v.current.currentTime=0),clearInterval(k))},30);return()=>{var fe;clearInterval(k),(fe=v.current)==null||fe.pause(),v.current&&(v.current.currentTime=0)}},[_]);const j=()=>{var Q;u(!0),U.current=!0,T.current=!1,m(null),g(P=>P.map(k=>({...k,fading:!0}))),setTimeout(()=>g([]),250),S.current&&(S.current.pause(),S.current.currentTime=0),L.current||(L.current=new Audio(y4)),(Q=L.current)==null||Q.play().catch(()=>{}),setTimeout(()=>{r()},100)},N=.6,z=3,K=2,C=4;Ke.useEffect(()=>{let Q=0,P=performance.now();const k=W=>{const fe=(W-P)/1e3;P=W,m(pe=>{if(!pe)return null;let D=pe.scale;return pe.growing?(D=Math.min(z,D+K*fe),D>=z&&S.current?(S.current.pause(),F(pe.x,pe.y,D),T.current=!1,{...pe,growing:!1,scale:D}):{...pe,scale:D}):(D=Math.max(N,D-C*fe),D<=N+.01?null:{...pe,scale:D})}),Q=requestAnimationFrame(k)};return Q=requestAnimationFrame(k),()=>cancelAnimationFrame(Q)},[]);const w=(Q,P)=>{M.current+=1;const k=M.current;m({id:k,x:Q,y:P,scale:N,growing:!0})},G=()=>{T.current=!1,m(Q=>Q&&Q.growing?(F(Q.x,Q.y,Q.scale),{...Q,growing:!1}):Q),S.current&&(S.current.pause(),S.current.currentTime=0)},ee=Q=>{var fe;if(c||U.current)return;const P=Q.currentTarget.getBoundingClientRect(),k=Q.clientX-P.left,W=Q.clientY-P.top;if(T.current=!0,!S.current){const pe=new Audio(v4);pe.loop=!0,pe.playbackRate=1.2,S.current=pe}(fe=S.current)==null||fe.play().catch(()=>{}),w(k,W)},de=()=>{G()},_e=()=>{G()};return e<100&&!a?le.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[le.jsxs("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:[le.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}}),le.jsxs("div",{className:"absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-600 pointer-events-none mix-blend-multiply",children:[e,"%"]})]}),le.jsx("p",{className:"mt-4 font-bold text-gray-400 animate-pulse",children:"Loading Gallery..."})]}):le.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:ee,onMouseUp:de,onMouseLeave:_e,style:{cursor:S4},children:[le.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map(Q=>le.jsx("div",{style:{position:"absolute",left:Q.x,top:Q.y,transform:`translate(-50%, -50%) scale(${Q.scale})`,opacity:Q.fading?0:1,transition:Q.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},Q.id)),d&&le.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),le.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out ${c?"opacity-0 scale-95":"hover:scale-105"}`,children:le.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[le.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[le.jsx("video",{src:x4,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),le.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),le.jsx("h1",{className:"text-3xl text-center font-bold mb-1",children:"The Secret Life of Warco Mu"}),le.jsx("p",{className:"text-gray-500 text-sm text-center mb-6",children:"2021.8-2025.12"}),le.jsxs("p",{className:"text-gray-800 text-m text-center mb-6",children:[x,x.length<_.length&&le.jsx("span",{className:"animate-pulse",children:"|"})]}),le.jsx("wired-button",{elevation:2,onClick:j,className:"bg-black text-white font-bold tracking-widest cursor-pointer",style:{cursor:M4},children:"PAY RESPECT"})]})})]})},T4=({onCovered:r,onComplete:e})=>{const[n,a]=Ke.useState([]),o=Ke.useRef("raining"),c=Ke.useRef(0),u=Ke.useRef(null),d=40,m=1,p=1.5,g=80;Ke.useEffect(()=>{const x=window.innerWidth,y=Math.ceil(x/d),M=()=>{if(o.current==="clearing")return;const v=[];for(let L=0;L<y;L++)v.push({id:c.current++,colIndex:L,left:L/y*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(L=>[...L,...v])};u.current=window.setInterval(M,g);const T=m*1e3+200,S=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},T);return()=>{u.current&&clearInterval(u.current),clearTimeout(S)}},[r]);const _=x=>{a(y=>{const M=y.filter(T=>T.id!==x);return o.current==="clearing"&&M.length===0&&setTimeout(e,0),M})};return le.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[le.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>le.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},A4="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",Pt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:8,FOG_COLOR:16579577,FADE_START:12,FADE_END:32,HIGHLIGHT_RANGE:4,AUDIO_MAX_DISTANCE:12,AUDIO_QUICK_FADE_BEHIND:1.2,BGM_FADE_ZONE:25,BGM_SILENCE_RADIUS:6,MAX_SCROLL_SPEED:.15,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4},R4=()=>Eo.map((r,e)=>{const n=e===Eo.length-1,a=Math.random();let o=1;return a<.3?o=0:a>.7&&(o=2),n?{...r,z:-e*Pt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2}:{...r,z:-e*Pt.Z_SPACING,x:(e%2===0?-1:1)*Pt.X_OFFSET,y:(Math.random()-.5)*.5,rotationY:(e%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.05,borderIntensity:o}}),tb=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,y,M)=>{const T=y-_,S=M-x,v=Math.sqrt(T*T+S*S),L=T/v,U=S/v,F=_-L*(Math.random()*m),j=x-U*(Math.random()*m),N=y+L*(Math.random()*m),z=M+U*(Math.random()*m);a.push(new ce(F,j,0));const K=(F+N)/2+(Math.random()-.5)*d,C=(j+z)/2+(Math.random()-.5)*d;a.push(new ce(K,C,0)),a.push(new ce(N,z,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new ta().setFromPoints(a)},w4=()=>{const r=[],n=(M,T,S,v,L=.2)=>{let F=M,j=T;const N=(S-M)/6,z=(v-T)/6;for(let K=0;K<6;K++){const C=M+N*(K+1),w=T+z*(K+1);r.push(new ce(F,j,0));const G=K===5?0:(Math.random()-.5)*L,ee=K===5?0:(Math.random()-.5)*L;r.push(new ce(C+G,w+ee,0)),F=C+G,j=w+ee}};let a=0;for(let M=-120/2;M<=120/2;M+=2){const T=Math.sin(M*.05)*5+Math.sin(M*.15)*2-5;M>-120/2&&(n(M-2,a,M,T,.4),n(M-2,a-.2,M,T-.2,.6)),a=T}const o=15,c=Math.sin(o*.05)*5+Math.sin(o*.15)*2-5;n(o-4,c,o,c+18,.3),n(o+4,c,o,c+18,.3),n(o-3.8,c+2,o+3.8,c+2,.2),n(o-2.5,c+12,o+2.5,c+12,.2);const u=-25,d=Math.sin(u*.05)*5-5;n(u,d,u,d+12,.3),n(u+1,d,u+1,d+12,.3),n(u-.5,d+10,u+1.5,d+10,.1),n(u-15,d-2,u-15,d+10,.3);let m=u-15,p=d+10;for(let M=u-15;M<=u;M+=2){const T=d+10-Math.sin((M-(u-15))/15*Math.PI)*4;n(m,p,M,T,.1),m=M,p=T}const g=(M,T,S)=>{let L=M+Math.cos(0)*S,U=T+Math.sin(0)*S*.6;for(let F=1;F<=13;F++){const j=F/12*Math.PI*2,N=S+(Math.random()-.5)*(S*.4),z=M+Math.cos(j)*N,K=T+Math.sin(j)*(N*.6);n(L,U,z,K,.5),L=z,U=K}};g(-30,15,6),g(-10,20,4),g(25,18,7);const _=35,x=22;g(_,x,3);for(let M=0;M<8;M++){const T=M/8*Math.PI*2,S=_+Math.cos(T)*4,v=x+Math.sin(T)*4,L=_+Math.cos(T)*6,U=x+Math.sin(T)*6;n(S,v,L,U,.2)}return new ta().setFromPoints(r)},C4=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new SM(e);return a.minFilter=ei,a},D4=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("path",{d:"M9 18V5l12-2v13"}),le.jsx("circle",{cx:"6",cy:"18",r:"3"}),le.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),O4=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("circle",{cx:"12",cy:"12",r:"3"}),le.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),U4=()=>le.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[le.jsx("circle",{cx:"12",cy:"12",r:"10"}),le.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),le.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),nb=()=>le.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),le.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),ib=()=>le.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),le.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),L4=()=>le.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:le.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),N4=()=>le.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[le.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),le.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),p0=()=>le.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[le.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),le.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),P4=()=>{const r=Ke.useRef(null),e=Ke.useRef(null),[n]=Ke.useState(R4),[a,o]=Ke.useState(null),[c,u]=Ke.useState(!1),[d,m]=Ke.useState(!1),[p,g]=Ke.useState(!1),[_,x]=Ke.useState(null),y=Ke.useRef(null),[M,T]=Ke.useState(!1),[S,v]=Ke.useState(!0),[L,U]=Ke.useState(0),[F,j]=Ke.useState(!1),[N,z]=Ke.useState(5),K=Ke.useRef(0),C=Ke.useRef(1),[w,G]=Ke.useState(null),ee=Ke.useRef(null),[de,_e]=Ke.useState(0),Q=Ke.useRef([]),P=Ke.useRef({}),k=Ke.useRef({}),W=Ke.useRef(!1),fe=Ke.useRef(!1),pe=Ke.useRef(0),D=Ke.useRef(0),oe=Ke.useRef(null),Se=Ke.useRef(null),Te=Ke.useRef(!1),ze=Ke.useRef(1);Ke.useEffect(()=>{W.current=c,c?(document.body.style.overflow="hidden",Object.values(k.current).forEach(Z=>Z.pause())):d&&(document.body.style.overflow="auto")},[c,d]),Ke.useEffect(()=>{fe.current=d,d?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[d]),Ke.useEffect(()=>{K.current=N},[N]),Ke.useEffect(()=>{Te.current=F},[F]),Ke.useEffect(()=>{y.current&&(M&&S?y.current.play().catch(Z=>console.error("Audio playback failed:",Z)):y.current.pause())},[M,S,L]);const re=Z=>{y.current&&(y.current.volume=Math.max(0,Math.min(1,Z)))},he=()=>T(!M),Ue=Z=>{U(Z),T(!0),v(!0)},Ve=()=>{window.scrollTo({top:0,behavior:"auto"}),pe.current=0,D.current=0,g(!0)},We=()=>{m(!0),T(!0),z(5),Object.values(k.current).forEach(Z=>{Z.muted=!1,Z.volume=0})},dt=()=>{g(!1)},dn=Z=>{const q=Z.currentTarget.getBoundingClientRect(),Ne=Math.min(Math.max((Z.clientX-q.left)/q.width,0),1);_e(Z.clientX);const Ae=Eo.length,qe=Math.floor(Ne*(Ae-1)),He=Eo[qe];He&&G(He.date)},ht=()=>{G(null)};Ke.useEffect(()=>{if(!r.current)return;const Z=new mM;Z.background=new Vt(Pt.FOG_COLOR),Z.fog=new Xp(Pt.FOG_COLOR,10,60);const q=new Gi(50,window.innerWidth/window.innerHeight,.1,2e3);q.position.set(0,0,Pt.CAMERA_START_Z),oe.current=q;const Ne=new xR({canvas:r.current,antialias:!0,alpha:!1});Ne.setSize(window.innerWidth,window.innerHeight),Ne.setPixelRatio(Math.min(window.devicePixelRatio,2));const Ae=new wM;Ae.crossOrigin="Anonymous";const qe=3.2,He=3.2,ye=new Rs(3.2,2.4),Ee=new Ol({color:16777215}),Ze=2,je=.5,Fe=new Rs(Ze,je),at=new fp({color:2236962,linewidth:2,opacity:.8,transparent:!0}),H=w4(),Oe=new wv(H,new fp({color:8947848,opacity:.6,transparent:!0,fog:!1})),we=n[n.length-1].z,Ce=Math.abs(we-Pt.CAMERA_START_Z)+20;Oe.position.set(0,0,we-10);const Me=Math.max(1.5,Ce/50);Oe.scale.set(Me,Me,1),Z.add(Oe),Q.current=[],P.current={},n.forEach(lt=>{const ct=new lr;ct.position.set(lt.x,lt.y,lt.z),ct.rotation.y=lt.rotationY,ct.rotation.z=lt.rotationZ;const St=new Ci(ye.clone(),new Ol({transparent:!0,opacity:0}));St.position.z=.1,St.position.y=.15;const an=new Ci(ye.clone(),Ee.clone());an.position.z=0;const hn=tb(3.5,2.7,lt.borderIntensity),cn=new wv(hn,at.clone());cn.position.z=.15,P.current[lt.id]=cn;const Xt=(ot,_t)=>{const pn=ot/_t;let R=qe,X=qe/pn;X>He&&(X=He,R=He*pn),St.geometry.dispose(),St.geometry=new Rs(R,X);const ae=R+.3,J=X+.8;an.geometry.dispose(),an.geometry=new Rs(ae,J);const $=tb(ae+.05,J+.05,lt.borderIntensity);cn.geometry.dispose(),cn.geometry=$;const Re=-(J/2)+.4,Le=ct.children.find(Be=>Be.userData.isDate);Le&&(Le.position.y=Re)};if(lt.type==="video"){const ot=document.createElement("video");ot.src=lt.src,ot.crossOrigin="Anonymous",ot.muted=!0,ot.loop=!0,ot.playsInline=!0,ot.preload="auto",k.current[lt.id]=ot,ot.onloadedmetadata=()=>{Xt(ot.videoWidth,ot.videoHeight)};const _t=new yM(ot);_t.minFilter=ei,_t.magFilter=ei,_t.wrapS=oi,_t.wrapT=oi,_t.colorSpace=ri,St.material.map=_t,St.material.needsUpdate=!0}else if(lt.type==="embed"){const ot=lt.previewSrc||lt.src;Ae.load(ot,_t=>{_t.colorSpace=ri,_t.wrapS=oi,_t.wrapT=oi,St.material.map=_t,St.material.needsUpdate=!0,_t.image&&Xt(_t.image.width,_t.image.height)})}else Ae.load(lt.src,ot=>{ot.colorSpace=ri,ot.wrapS=oi,ot.wrapT=oi,St.material.map=ot,St.material.needsUpdate=!0,ot.image&&Xt(ot.image.width,ot.image.height)});const Bn=C4(lt.date);if(Bn){const ot=new Ol({map:Bn,transparent:!0,opacity:.8}),_t=new Ci(Fe,ot);_t.userData={isDate:!0},_t.position.y=-1.3,_t.position.z=.11,ct.add(_t)}ct.add(an),ct.add(St),ct.add(cn),ct.userData={id:lt.id},Z.add(ct),Q.current.push(St)});const ve=Pt.CAMERA_START_Z,Ie=n[n.length-1].z,rt=Ie+5,Ht=ve-rt,Ut=Ht*250+window.innerHeight;document.body.style.height=`${Ut}px`;const Dn=()=>{if(W.current||!fe.current)return;const lt=document.body.scrollHeight-window.innerHeight;lt>0&&(D.current=Math.max(0,Math.min(1,window.scrollY/lt)))};window.addEventListener("scroll",Dn);const In=new OM,ki=new Yt,Ls=lt=>{const ct=Math.abs(q.position.z-lt.position.z);return ct<=Pt.FADE_START?1:ct>=Pt.FADE_END?0:1-(ct-Pt.FADE_START)/(Pt.FADE_END-Pt.FADE_START)},Wa=lt=>{var Xt,Bn;if(W.current||!fe.current)return;if(Se.current){const ot=n.find(_t=>_t.id===Se.current);if(ot){o(ot),u(!0);return}}ki.x=lt.clientX/window.innerWidth*2-1,ki.y=-(lt.clientY/window.innerHeight)*2+1,Z.updateMatrixWorld(!0),In.setFromCamera(ki,q);const ct=Z.children.filter(ot=>ot instanceof lr&&ot.userData.id),St=In.intersectObjects(ct,!0).filter(ot=>ot.object instanceof Ci),an=new Wp,hn=new xn;hn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),an.setFromProjectionMatrix(hn);const cn=q.getWorldDirection(new ce);for(const ot of St){let _t=ot.object;for(;_t.parent&&!((Xt=_t.userData)!=null&&Xt.id);)_t=_t.parent;const pn=(Bn=_t.userData)==null?void 0:Bn.id;if(!pn)continue;const R=_t.getWorldPosition(new ce);if(!an.containsPoint(R)||R.clone().sub(q.position).dot(cn)<=0||Ls(_t)<.1)continue;const J=n.find($=>$.id===pn);if(J){o(J),u(!0);break}}};r.current.addEventListener("click",Wa);const li=lt=>{var hn,cn;if(W.current||!fe.current)return;ki.x=lt.clientX/window.innerWidth*2-1,ki.y=-(lt.clientY/window.innerHeight)*2+1,In.setFromCamera(ki,q);const ct=Z.children.filter(Xt=>Xt instanceof lr&&Xt.userData.id),an=In.intersectObjects(ct,!0).find(Xt=>Xt.object instanceof Ci);if(an){let Xt=an.object;for(;Xt.parent&&!((hn=Xt.userData)!=null&&hn.id);)Xt=Xt.parent;Se.current=(cn=Xt.userData)==null?void 0:cn.id,document.body.style.cursor="pointer"}else Se.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",li);let na;const qa=()=>{if(na=requestAnimationFrame(qa),!W.current&&fe.current){const an=Se.current?Pt.HOVER_MIN_SPEED_FACTOR:1;if(C.current+=(an-C.current)*.1,K.current>0){const Xt=K.current*C.current;Xt>.01&&window.scrollBy(0,Xt)}const hn=D.current-pe.current,cn=Math.max(-.15*.1,Math.min(Pt.MAX_SCROLL_SPEED*.1,hn));pe.current+=cn*.05+hn*.01,q.position.z=ve-pe.current*Ht,e.current&&(e.current.style.width=`${pe.current*100}%`)}const lt=Math.abs(q.position.z-Ie),ct=Math.max(0,lt-Pt.BGM_SILENCE_RADIUS);let St=1;ct<Pt.BGM_FADE_ZONE&&(St=Math.max(0,Math.min(1,ct/Pt.BGM_FADE_ZONE))),ze.current+=(St-ze.current)*.05,re(ze.current),Q.current.forEach(an=>{const hn=an.parent,cn=Math.abs(q.position.z-hn.position.z),Xt=hn.userData.id,Bn=P.current[Xt];Bn&&(Se.current===Xt?(Bn.material.color.setHex(0),Bn.material.opacity=1,Bn.scale.setScalar(1.02)):(Bn.material.color.setHex(2236962),Bn.material.opacity=.8,Bn.scale.setScalar(1)));let ot=0;cn<=Pt.FADE_START?ot=1:cn>=Pt.FADE_END?ot=0:ot=1-(cn-Pt.FADE_START)/(Pt.FADE_END-Pt.FADE_START),an.material.opacity=ot;let _t=1;if(cn<Pt.HIGHLIGHT_RANGE&&(_t=1+(1-cn/Pt.HIGHLIGHT_RANGE)*.15),hn.scale.set(_t,_t,1),k.current[Xt]){const pn=k.current[Xt];if(!W.current&&fe.current)if(Te.current)pn.volume=0;else if(cn<Pt.AUDIO_MAX_DISTANCE){const R=q.position.z<hn.position.z-2;let X=0;if(R){const ae=Math.abs(q.position.z-hn.position.z);X=Math.max(0,1-ae/Pt.AUDIO_QUICK_FADE_BEHIND)}else X=Math.max(0,1-cn/Pt.AUDIO_MAX_DISTANCE);pn.volume=X,pn.paused&&pn.play().catch(()=>{})}else pn.volume>0&&(pn.volume=0),pn.paused||pn.pause()}}),Ne.render(Z,q)};qa();const Ya=()=>{q.aspect=window.innerWidth/window.innerHeight,q.updateProjectionMatrix(),Ne.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ya),()=>{var lt;window.removeEventListener("scroll",Dn),window.removeEventListener("resize",Ya),window.removeEventListener("mousemove",li),(lt=r.current)==null||lt.removeEventListener("click",Wa),cancelAnimationFrame(na),ee.current&&cancelAnimationFrame(ee.current),Ne.dispose(),document.body.style.height="auto",Object.values(k.current).forEach(ct=>{ct.pause(),ct.src="",ct.load()})}},[n]);const Rt=()=>{u(!1),o(null)},B=Z=>{const q=document.body.scrollHeight-window.innerHeight,Ne=Z*q;D.current=Z,ee.current&&cancelAnimationFrame(ee.current);const Ae=Pt.MAX_SCROLL_SPEED*window.innerHeight,qe=()=>{const He=window.scrollY,ye=Ne-He;if(Math.abs(ye)<1){window.scrollTo({top:Ne,behavior:"auto"}),ee.current=null;return}const Ee=Math.sign(ye)*Math.min(Math.abs(ye),Ae);window.scrollTo({top:He+Ee,behavior:"auto"}),ee.current=requestAnimationFrame(qe)};ee.current=requestAnimationFrame(qe)},pt=Z=>{if(c||!d)return;const q=Z.currentTarget.getBoundingClientRect(),Ne=Math.min(Math.max((Z.clientX-q.left)/q.width,0),1);B(E(Ne))},mt=Z=>{x(_===Z?null:Z)},Lt=Pt.CAMERA_START_Z,kt=n[n.length-1].z+5,$e=Lt-kt||1,nt=Z=>Math.min(Math.max((Lt-Z)/$e,0),1),O=Z=>Lt-Z*$e,E=Z=>nt(O(Z)+Pt.TIMELINE_FOCUS_OFFSET),te=(()=>{const Z={};return n.forEach(q=>{const Ne=q.date.match(/(\d{4})/),Ae=Ne?Ne[1]:"Year";Z[Ae]||(Z[Ae]=q)}),Object.entries(Z).map(([q,Ne])=>({id:`year-${q}`,label:q,pct:nt(Ne.z),focusPct:nt(Ne.z+Pt.TIMELINE_FOCUS_OFFSET)})).sort((q,Ne)=>parseInt(q.label,10)-parseInt(Ne.label,10))})(),xe=n.filter(Z=>Z.timelineLabel).map(Z=>({id:Z.id,label:Z.timelineLabel,pct:nt(Z.z),focusPct:nt(Z.z+Pt.TIMELINE_FOCUS_OFFSET),z:Z.z}));return le.jsxs(le.Fragment,{children:[le.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),le.jsx("audio",{ref:y,src:h0[L].src,onEnded:()=>Ue((L+1)%h0.length)}),!d&&le.jsx(E4,{onStartTransition:Ve}),p&&le.jsx(T4,{onCovered:We,onComplete:dt}),le.jsx("div",{className:`fixed top-6 left-16 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 ${d?"opacity-100":"opacity-0"}`,children:le.jsxs("h1",{className:"text-4xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg]",children:["The secret life of ",le.jsx("span",{className:"text-blue-600",children:"Warco Mu"})]})}),le.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${d?"opacity-100":"opacity-0 pointer-events-none"}`,children:[le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>mt("audio"),children:le.jsx(D4,{})}),_==="audio"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[le.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[le.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),le.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:le.jsx(p0,{})})]}),le.jsx("div",{className:"mb-4",children:le.jsxs("div",{className:"flex justify-between items-center mb-1",children:[le.jsx("label",{className:"text-xs text-gray-500",children:"3D Video Sound"}),le.jsx("button",{onClick:()=>j(!F),className:"p-1 rounded hover:bg-gray-100",title:F?"Unmute Videos":"Mute Videos",children:F?le.jsx(ib,{}):le.jsx(nb,{})})]})}),le.jsxs("div",{children:[le.jsxs("div",{className:"flex justify-between items-center mb-2",children:[le.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),le.jsx("div",{className:"flex items-center gap-2",children:le.jsx("button",{onClick:()=>v(!S),className:"p-1 rounded hover:bg-gray-100",title:S?"Disable BGM":"Enable BGM",children:S?le.jsx(nb,{}):le.jsx(ib,{})})})]}),le.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"}`,children:le.jsx("button",{onClick:he,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:M?le.jsx(N4,{}):le.jsx(L4,{})})}),le.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"}`,children:h0.map((Z,q)=>le.jsxs("div",{onClick:()=>Ue(q),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${L===q?"bg-blue-50 font-bold text-blue-700":"text-gray-600"}`,children:[q+1,". ",Z.title]},q))})]})]})})]}),le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>mt("general"),children:le.jsx(O4,{})}),_==="general"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[le.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[le.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),le.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:le.jsx(p0,{})})]}),le.jsxs("div",{children:[le.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),le.jsxs("div",{className:"flex items-center gap-2",children:[le.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),le.jsx("input",{type:"range",min:"0",max:"10",step:"1",value:N,onChange:Z=>z(Number(Z.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),le.jsx("span",{className:"text-xs font-bold w-4 text-center",children:N})]})]})]})})]}),le.jsxs("div",{className:"relative flex flex-col items-end",children:[le.jsx("wired-icon-button",{class:"bg-white text-gray-800",onClick:()=>mt("credit"),children:le.jsx(U4,{})}),_==="credit"&&le.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:le.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[le.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[le.jsx("span",{className:"font-bold text-sm",children:"Credits"}),le.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:le.jsx(p0,{})})]}),le.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[le.jsx("p",{className:"mb-2",children:le.jsx("strong",{children:"Coming Soon"})}),le.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",le.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),le.jsx("br",{}),le.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),le.jsx("br",{}),le.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),d&&le.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto"},onClick:pt,onMouseMove:dn,onMouseLeave:ht,children:[te.map(Z=>le.jsxs("button",{onClick:q=>{q.stopPropagation(),B(Z.focusPct)},className:"absolute flex flex-col items-center group/year transition-transform duration-150",style:{left:`calc(${Z.pct*100}% - 6px)`,bottom:"20px",zIndex:12},title:Z.label,children:[le.jsx("span",{className:"text-[10px] font-semibold text-gray-700 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:Z.label}),le.jsx("span",{className:"w-2 h-2 rounded-full bg-gray-700 mt-1"})]},Z.id)),xe.map(Z=>le.jsxs("button",{onClick:q=>{q.stopPropagation(),B(Z.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${Z.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:Z.label,children:[le.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:Z.label}),le.jsx("img",{src:A4,alt:Z.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},Z.id)),le.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),w&&le.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:de},children:[w,le.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),c&&a&&le.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[le.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:Rt}),le.jsx("div",{className:"relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center",children:le.jsx("wired-card",{elevation:4,className:"w-full bg-white p-2",children:le.jsxs("div",{className:"p-4 flex flex-col items-center",children:[le.jsx("div",{className:"w-full flex justify-end mb-2",children:le.jsx("wired-button",{onClick:Rt,elevation:2,children:"Close [X]"})}),le.jsxs("div",{className:"w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-2 border-black rounded-sm shadow-inner",children:[a.type==="video"&&le.jsx("video",{src:a.src,className:"w-full h-full object-contain",controls:!0,autoPlay:!0}),a.type==="embed"&&le.jsx("iframe",{src:(()=>{const Z=a.embedUrl||a.src,q=Z.includes("?")?"&":"?";return`${Z}${q}autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:a.title}),a.type==="image"&&le.jsx("img",{src:a.src,alt:a.title,className:"w-full h-full object-contain"})]}),le.jsxs("div",{className:"mt-6 text-center",children:[le.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:a.title}),a.description&&le.jsx("p",{className:"text-gray-600 text-lg font-light",children:a.description})]})]})})})]})]})},Qb=document.getElementById("root");if(!Qb)throw new Error("Could not find root element to mount to");const z4=Jy.createRoot(Qb);z4.render(le.jsx(Xy.StrictMode,{children:le.jsx(P4,{})}));
