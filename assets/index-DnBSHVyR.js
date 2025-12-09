(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ju=window,Sp=ju.ShadowRoot&&(ju.ShadyCSS===void 0||ju.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Mp=Symbol(),Nx=new WeakMap;let u2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==Mp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Sp&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=Nx.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Nx.set(n,e))}return e}toString(){return this.cssText}};const oy=r=>new u2(typeof r=="string"?r:r+"",void 0,Mp),cn=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new u2(n,r,Mp)},ly=(r,e)=>{Sp?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=ju.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Px=Sp?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return oy(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rh;const Zu=window,zx=Zu.trustedTypes,cy=zx?zx.emptyScript:"",Ix=Zu.reactiveElementPolyfillSupport,S0={toAttribute(r,e){switch(e){case Boolean:r=r?cy:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},f2=(r,e)=>e!==r&&(e==e||r==r),wh={attribute:!0,type:String,converter:S0,reflect:!1,hasChanged:f2},M0="finalized";let xo=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=wh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wh}static finalize(){if(this.hasOwnProperty(M0))return!1;this[M0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Px(o))}else e!==void 0&&n.push(Px(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ly(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=wh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:S0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:S0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||f2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};xo[M0]=!0,xo.elementProperties=new Map,xo.elementStyles=[],xo.shadowRootOptions={mode:"open"},Ix==null||Ix({ReactiveElement:xo}),((Rh=Zu.reactiveElementVersions)!==null&&Rh!==void 0?Rh:Zu.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ch;const Ku=window,yo=Ku.trustedTypes,Fx=yo?yo.createPolicy("lit-html",{createHTML:r=>r}):void 0,E0="$lit$",Rs=`lit$${(Math.random()+"").slice(9)}$`,d2="?"+Rs,uy=`<${d2}>`,dr=document,Bl=()=>dr.createComment(""),Hl=r=>r===null||typeof r!="object"&&typeof r!="function",h2=Array.isArray,fy=r=>h2(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Dh=`[ 	
\f\r]`,Rl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bx=/-->/g,Hx=/>/g,Js=RegExp(`>|${Dh}(?:([^\\s"'>=/]+)(${Dh}*=${Dh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gx=/'/g,Vx=/"/g,p2=/^(?:script|style|textarea|title)$/i,dy=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),ln=dy(1),So=Symbol.for("lit-noChange"),Bn=Symbol.for("lit-nothing"),jx=new WeakMap,cr=dr.createTreeWalker(dr,129,null,!1);function m2(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Fx!==void 0?Fx.createHTML(e):e}const hy=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=Rl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===Rl?g[1]==="!--"?u=Bx:g[1]!==void 0?u=Hx:g[2]!==void 0?(p2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=Js):g[3]!==void 0&&(u=Js):u===Js?g[0]===">"?(u=o??Rl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?Js:g[3]==='"'?Vx:Gx):u===Vx||u===Gx?u=Js:u===Bx||u===Hx?u=Rl:(u=Js,o=void 0);const S=u===Js&&r[d+1].startsWith("/>")?" ":"";c+=u===Rl?m+uy:_>=0?(a.push(p),m.slice(0,_)+E0+m.slice(_)+Rs+S):m+Rs+(_===-2?(a.push(void 0),d):S)}return[m2(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class Gl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=hy(e,n);if(this.el=Gl.createElement(p,a),cr.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=cr.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(E0)||x.startsWith(Rs)){const S=g[u++];if(_.push(x),S!==void 0){const M=o.getAttribute(S.toLowerCase()+E0).split(Rs),E=/([.?@])?(.*)/.exec(S);m.push({type:1,index:c,name:E[2],strings:M,ctor:E[1]==="."?my:E[1]==="?"?_y:E[1]==="@"?xy:uf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(p2.test(o.tagName)){const _=o.textContent.split(Rs),x=_.length-1;if(x>0){o.textContent=yo?yo.emptyScript:"";for(let S=0;S<x;S++)o.append(_[S],Bl()),cr.nextNode(),m.push({type:2,index:++c});o.append(_[x],Bl())}}}else if(o.nodeType===8)if(o.data===d2)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Rs,_+1))!==-1;)m.push({type:7,index:c}),_+=Rs.length-1}c++}}static createElement(e,n){const a=dr.createElement("template");return a.innerHTML=e,a}}function Mo(r,e,n=r,a){var o,c,u,d;if(e===So)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Hl(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=Mo(r,m._$AS(r,e.values),m,a)),e}class py{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:dr).importNode(a,!0);cr.currentNode=c;let u=cr.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ec(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new vy(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=cr.nextNode(),d++)}return cr.currentNode=dr,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ec{constructor(e,n,a,o){var c;this.type=2,this._$AH=Bn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Mo(this,e,n),Hl(e)?e===Bn||e==null||e===""?(this._$AH!==Bn&&this._$AR(),this._$AH=Bn):e!==this._$AH&&e!==So&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):fy(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Bn&&Hl(this._$AH)?this._$AA.nextSibling.data=e:this.$(dr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Gl.createElement(m2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new py(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=jx.get(e.strings);return n===void 0&&jx.set(e.strings,n=new Gl(e)),n}T(e){h2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ec(this.k(Bl()),this.k(Bl()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class uf{constructor(e,n,a,o,c){this.type=1,this._$AH=Bn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Bn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=Mo(this,e,n,0),u=!Hl(e)||e!==this._$AH&&e!==So,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=Mo(this,d[a+m],n,m),p===So&&(p=this._$AH[m]),u||(u=!Hl(p)||p!==this._$AH[m]),p===Bn?e=Bn:e!==Bn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===Bn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class my extends uf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bn?void 0:e}}const gy=yo?yo.emptyScript:"";class _y extends uf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Bn?this.element.setAttribute(this.name,gy):this.element.removeAttribute(this.name)}}class xy extends uf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=Mo(this,e,n,0))!==null&&a!==void 0?a:Bn)===So)return;const o=this._$AH,c=e===Bn&&o!==Bn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Bn&&(o===Bn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class vy{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Mo(this,e)}}const kx=Ku.litHtmlPolyfillSupport;kx==null||kx(Gl,ec),((Ch=Ku.litHtmlVersions)!==null&&Ch!==void 0?Ch:Ku.litHtmlVersions=[]).push("2.8.0");const by=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ec(e.insertBefore(Bl(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Oh,Uh;class ja extends xo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=by(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return So}}ja.finalized=!0,ja._$litElement$=!0,(Oh=globalThis.litElementHydrateSupport)===null||Oh===void 0||Oh.call(globalThis,{LitElement:ja});const Xx=globalThis.litElementPolyfillSupport;Xx==null||Xx({LitElement:ja});((Uh=globalThis.litElementVersions)!==null&&Uh!==void 0?Uh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yy=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},Sy=(r,e,n)=>{e.constructor.createProperty(n,r)};function Pe(r){return(e,n)=>n!==void 0?Sy(r,e,n):yy(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function My(r){return Pe({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ey=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zn(r,e){return Ey({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lh;((Lh=window.HTMLSlotElement)===null||Lh===void 0?void 0:Lh.prototype.assignedElements)!=null;var Ty=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ay=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const Mn=cn`
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
`;class En extends ja{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){Ep(this,e,n)}}Ty([zn("svg"),Ay("design:type",SVGSVGElement)],En.prototype,"svg",void 0);function Ry(){return Math.floor(Math.random()*2**31)}function Ep(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function T0(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function wy(r,e,n){const a=[];r.forEach(o=>a.push(...o)),T0(a,e,n)}function Cy(r,e){return r[0]===e[0]&&r[1]===e[1]}function Dy(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)T0(p,d,o);const m=Oy(u,c,a);if(o){for(const p of u)T0(p,d,-o);wy(m,d,-o)}return m}function Oy(r,e,n){const a=[];for(const p of r){const g=[...p];Cy(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const S=Math.min(_[1],x[1]);c.push({ymin:S,ymax:Math.max(_[1],x[1]),x:S===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function g2(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Dy(r,o,a,c||1)}class Uy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=g2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Ly(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Ny extends Uy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=g2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)Ly([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Py{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function _2(r,e,n,a,o){return{type:"path",ops:Qu(r,e,n,a,o)}}function zy(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...Qu(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...Qu(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return _2(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function x2(r,e){return zy(r,!0,e)}function Iy(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return x2(c,o)}function v2(r,e,n,a,o){const c=b2(n,a,o);return Fy(r,e,o,c).opset}function b2(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Un(u*m,n),d+=Un(d*m,n),{increment:c,rx:u,ry:d}}function Fy(r,e,n,a){const[o,c]=qx(a.increment,r,e,a.rx,a.ry,1,a.increment*A0(.1,A0(.4,1,n),n),n);let u=Wx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=qx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=Wx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function By(r,e,n,a,o){return Qu(r,e,n,a,o,!0)}function y2(r){return r.randomizer||(r.randomizer=new Py(r.seed||0)),r.randomizer.next()}function A0(r,e,n,a=1){return n.roughness*a*(y2(n)*(e-r)+r)}function Un(r,e,n=1){return A0(-r,r,e,n)}function Qu(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=R0(r,e,n,a,o,!0,!1);if(u)return d;const m=R0(r,e,n,a,o,!0,!0);return d.concat(m)}function R0(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+y2(o)*.2;let S=o.bowing*o.maxRandomnessOffset*(a-e)/200,M=o.bowing*o.maxRandomnessOffset*(r-n)/200;S=Un(S,o,p),M=Un(M,o,p);const E=[],y=()=>Un(_,o,p),v=()=>Un(g,o,p),L=o.preserveVertices;return u?E.push({op:"move",data:[r+(L?0:y()),e+(L?0:y())]}):E.push({op:"move",data:[r+(L?0:Un(g,o,p)),e+(L?0:Un(g,o,p))]}),u?E.push({op:"bcurveTo",data:[S+r+(n-r)*x+y(),M+e+(a-e)*x+y(),S+r+2*(n-r)*x+y(),M+e+2*(a-e)*x+y(),n+(L?0:y()),a+(L?0:y())]}):E.push({op:"bcurveTo",data:[S+r+(n-r)*x+v(),M+e+(a-e)*x+v(),S+r+2*(n-r)*x+v(),M+e+2*(a-e)*x+v(),n+(L?0:v()),a+(L?0:v())]}),E}function Wx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...R0(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function qx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=Un(.5,d)-Math.PI/2;g.push([Un(c,d)+e+.9*a*Math.cos(_-r),Un(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let S=_;S<x;S=S+r){const M=[Un(c,d)+e+a*Math.cos(S),Un(c,d)+n+o*Math.sin(S)];p.push(M),g.push(M)}g.push([Un(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),Un(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([Un(c,d)+e+.98*a*Math.cos(_+u),Un(c,d)+n+.98*o*Math.sin(_+u)]),g.push([Un(c,d)+e+.9*a*Math.cos(_+u*.5),Un(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const Hy={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return v2(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return By(r,e,n,a,o)}};function Uo(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function Gy(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function Eo(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function tc(r,e,n=!1){const a=Eo("path",{d:Gy(r,n)});return e&&e.appendChild(a),a}function _i(r,e,n,a,o,c){return tc(Iy(e+2,n+2,a-4,o-4,Uo(c)),r)}function Sn(r,e,n,a,o,c){return tc(_2(e,n,a,o,Uo(c)),r)}function Vy(r,e,n){return tc(x2(e,Uo(n)),r,!0)}function hr(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),tc(v2(e,n,a,o,Uo(c)),r)}function ff(r,e){const a=new Ny(Hy).fillPolygon(r,Uo(e));return tc(a,null)}function Tp(r,e,n,a,o){const c=Uo(o),u=b2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return ff(d,o)}var df=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},hf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Vl=class extends En{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};_i(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,Sn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};df([Pe({type:Number}),hf("design:type",Object)],Vl.prototype,"elevation",void 0);df([Pe({type:Boolean,reflect:!0}),hf("design:type",Object)],Vl.prototype,"disabled",void 0);df([zn("button"),hf("design:type",HTMLButtonElement)],Vl.prototype,"button",void 0);Vl=df([dn("wired-button"),hf("design:paramtypes",[])],Vl);var Ap=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Rp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let jl=class extends En{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=ff([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}_i(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Ap([Pe({type:Number}),Rp("design:type",Object)],jl.prototype,"elevation",void 0);Ap([Pe({type:String}),Rp("design:type",String)],jl.prototype,"fill",void 0);jl=Ap([dn("wired-card"),Rp("design:paramtypes",[])],jl);var nc=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},pf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let To=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Mn,cn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return ln`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){_i(e,0,0,n[0],n[1],this.seed),this.svgCheck=Eo("g"),e.appendChild(this.svgCheck),Sn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),Sn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};nc([Pe({type:Boolean}),pf("design:type",Object)],To.prototype,"checked",void 0);nc([Pe({type:Boolean,reflect:!0}),pf("design:type",Object)],To.prototype,"disabled",void 0);nc([My(),pf("design:type",Object)],To.prototype,"focused",void 0);nc([zn("input"),pf("design:type",HTMLInputElement)],To.prototype,"input",void 0);To=nc([dn("wired-checkbox")],To);var mf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let kl=class extends En{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=ff([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};mf([Pe(),wp("design:type",Object)],kl.prototype,"value",void 0);mf([Pe(),wp("design:type",Object)],kl.prototype,"name",void 0);mf([Pe({type:Boolean}),wp("design:type",Object)],kl.prototype,"selected",void 0);kl=mf([dn("wired-item")],kl);var Lo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ic=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let pr=class extends ja{constructor(){super(...arguments),this.disabled=!1,this.seed=Ry(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return cn`
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
    `}render(){return ln`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",_i(n,0,0,o.width,o.height,this.seed);const c=o.width-4;_i(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=Vy(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Ep(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Lo([Pe({type:Object}),ic("design:type",Object)],pr.prototype,"value",void 0);Lo([Pe({type:String,reflect:!0}),ic("design:type",String)],pr.prototype,"selected",void 0);Lo([Pe({type:Boolean,reflect:!0}),ic("design:type",Object)],pr.prototype,"disabled",void 0);Lo([zn("svg"),ic("design:type",SVGSVGElement)],pr.prototype,"svg",void 0);Lo([zn("#card"),ic("design:type",HTMLDivElement)],pr.prototype,"card",void 0);pr=Lo([dn("wired-combo")],pr);var gf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Cp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Xl=class extends ja{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return cn`
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
    `}render(){return ln`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};gf([Pe({type:Number}),Cp("design:type",Object)],Xl.prototype,"elevation",void 0);gf([Pe({type:Boolean,reflect:!0}),Cp("design:type",Object)],Xl.prototype,"open",void 0);gf([zn("wired-card"),Cp("design:type",jl)],Xl.prototype,"card",void 0);Xl=gf([dn("wired-dialog")],Xl);var S2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},jy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let w0=class extends En{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[Mn,cn`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return ln`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)Sn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};S2([Pe({type:Number}),jy("design:type",Object)],w0.prototype,"elevation",void 0);w0=S2([dn("wired-divider")],w0);var Dp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ju=class extends En{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=Tp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Dp([Pe({type:Boolean,reflect:!0}),M2("design:type",Object)],Ju.prototype,"disabled",void 0);Dp([zn("button"),M2("design:type",HTMLButtonElement)],Ju.prototype,"button",void 0);Ju=Dp([dn("wired-fab")],Ju);var Op=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},E2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ef=class extends En{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),hr(e,a/2,a/2,a,a,this.seed)}};Op([Pe({type:Boolean,reflect:!0}),E2("design:type",Object)],ef.prototype,"disabled",void 0);Op([zn("button"),E2("design:type",HTMLButtonElement)],ef.prototype,"button",void 0);ef=Op([dn("wired-icon-button")],ef);var Up=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Lp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const ky="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let tf=class extends En{constructor(){super(),this.elevation=1,this.src=ky,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};_i(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,Sn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Up([Pe({type:Number}),Lp("design:type",Object)],tf.prototype,"elevation",void 0);Up([Pe({type:String}),Lp("design:type",String)],tf.prototype,"src",void 0);tf=Up([dn("wired-image"),Lp("design:paramtypes",[])],tf);var Gn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Vn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ln=class extends En{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Gn([Pe({type:Boolean,reflect:!0}),Vn("design:type",Object)],Ln.prototype,"disabled",void 0);Gn([Pe({type:String}),Vn("design:type",Object)],Ln.prototype,"placeholder",void 0);Gn([Pe({type:String}),Vn("design:type",String)],Ln.prototype,"name",void 0);Gn([Pe({type:String}),Vn("design:type",String)],Ln.prototype,"min",void 0);Gn([Pe({type:String}),Vn("design:type",String)],Ln.prototype,"max",void 0);Gn([Pe({type:String}),Vn("design:type",String)],Ln.prototype,"step",void 0);Gn([Pe({type:String}),Vn("design:type",Object)],Ln.prototype,"type",void 0);Gn([Pe({type:String}),Vn("design:type",Object)],Ln.prototype,"autocomplete",void 0);Gn([Pe({type:String}),Vn("design:type",Object)],Ln.prototype,"autocapitalize",void 0);Gn([Pe({type:String}),Vn("design:type",Object)],Ln.prototype,"autocorrect",void 0);Gn([Pe({type:Boolean}),Vn("design:type",Object)],Ln.prototype,"required",void 0);Gn([Pe({type:Boolean}),Vn("design:type",Object)],Ln.prototype,"autofocus",void 0);Gn([Pe({type:Boolean}),Vn("design:type",Object)],Ln.prototype,"readonly",void 0);Gn([Pe({type:Number}),Vn("design:type",Number)],Ln.prototype,"minlength",void 0);Gn([Pe({type:Number}),Vn("design:type",Number)],Ln.prototype,"maxlength",void 0);Gn([Pe({type:Number}),Vn("design:type",Number)],Ln.prototype,"size",void 0);Gn([zn("input"),Vn("design:type",HTMLInputElement)],Ln.prototype,"textInput",void 0);Ln=Gn([dn("wired-input"),Vn("design:paramtypes",[])],Ln);var ac=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_f=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ao=class extends En{constructor(){super(...arguments),this.elevation=1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)Sn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),Sn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};ac([Pe({type:Number}),_f("design:type",Object)],Ao.prototype,"elevation",void 0);ac([Pe({type:String}),_f("design:type",String)],Ao.prototype,"href",void 0);ac([Pe({type:String}),_f("design:type",String)],Ao.prototype,"target",void 0);ac([zn("a"),_f("design:type",HTMLAnchorElement)],Ao.prototype,"anchor",void 0);Ao=ac([dn("wired-link")],Ao);var xf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Np=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wl=class extends En{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,0,0,n[0],n[1],this.seed)}};xf([Pe({type:Object}),Np("design:type",Object)],Wl.prototype,"value",void 0);xf([Pe({type:String}),Np("design:type",String)],Wl.prototype,"selected",void 0);xf([Pe({type:Boolean}),Np("design:type",Object)],Wl.prototype,"horizontal",void 0);Wl=xf([dn("wired-listbox")],Wl);var sc=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},vf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let mr=class extends En{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=ff([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};sc([Pe({type:Number}),vf("design:type",Object)],mr.prototype,"value",void 0);sc([Pe({type:Number}),vf("design:type",Object)],mr.prototype,"min",void 0);sc([Pe({type:Number}),vf("design:type",Object)],mr.prototype,"max",void 0);sc([Pe({type:Boolean}),vf("design:type",Object)],mr.prototype,"percentage",void 0);mr=sc([dn("wired-progress")],mr);var No=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rc=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let gr=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[Mn,cn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return ln`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){hr(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=Eo("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);hr(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};No([Pe({type:Boolean}),rc("design:type",Object)],gr.prototype,"checked",void 0);No([Pe({type:Boolean,reflect:!0}),rc("design:type",Object)],gr.prototype,"disabled",void 0);No([Pe({type:String}),rc("design:type",String)],gr.prototype,"name",void 0);No([Pe(),rc("design:type",Object)],gr.prototype,"focused",void 0);No([zn("input"),rc("design:type",HTMLInputElement)],gr.prototype,"input",void 0);gr=No([dn("wired-radio")],gr);var T2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Xy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let C0=class extends ja{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return cn`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return ln`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){Ep(this,"selected",{selected:this.selected})}};T2([Pe({type:String}),Xy("design:type",String)],C0.prototype,"selected",void 0);C0=T2([dn("wired-radio-group")],C0);var vr=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Po=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Os=class extends En{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=Eo("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),hr(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),Sn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=Eo("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Sn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),Sn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};vr([Pe({type:Boolean,reflect:!0}),Po("design:type",Object)],Os.prototype,"disabled",void 0);vr([Pe({type:String}),Po("design:type",Object)],Os.prototype,"placeholder",void 0);vr([Pe({type:String}),Po("design:type",Object)],Os.prototype,"autocomplete",void 0);vr([Pe({type:String}),Po("design:type",Object)],Os.prototype,"autocorrect",void 0);vr([Pe({type:Boolean}),Po("design:type",Object)],Os.prototype,"autofocus",void 0);vr([zn("input"),Po("design:type",HTMLInputElement)],Os.prototype,"textInput",void 0);Os=vr([dn("wired-search-input")],Os);var zo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},oc=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Us=class extends En{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[Mn,cn`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return ln`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);Sn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=hr(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};zo([Pe({type:Number}),oc("design:type",Object)],Us.prototype,"min",void 0);zo([Pe({type:Number}),oc("design:type",Object)],Us.prototype,"max",void 0);zo([Pe({type:Number}),oc("design:type",Object)],Us.prototype,"step",void 0);zo([Pe({type:Boolean,reflect:!0}),oc("design:type",Object)],Us.prototype,"disabled",void 0);zo([zn("input"),oc("design:type",HTMLInputElement)],Us.prototype,"input",void 0);Us=zo([dn("wired-slider")],Us);var Pp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},A2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let nf=class extends En{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){hr(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=Tp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Pp([Pe({type:Boolean}),A2("design:type",Object)],nf.prototype,"spinning",void 0);Pp([Pe({type:Number}),A2("design:type",Object)],nf.prototype,"duration",void 0);nf=Pp([dn("wired-spinner")],nf);var zp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ip=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let af=class extends En{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,cn`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return ln`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-4,n[1]-4,this.seed)}};zp([Pe({type:String}),Ip("design:type",Object)],af.prototype,"name",void 0);zp([Pe({type:String}),Ip("design:type",Object)],af.prototype,"label",void 0);af=zp([dn("wired-tab"),Ip("design:paramtypes",[])],af);var Fp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let sf=class extends ja{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <div id="bar">
      ${this.pages.map(e=>ln`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Fp([Pe({type:String}),R2("design:type",String)],sf.prototype,"selected",void 0);Fp([zn("slot"),R2("design:type",HTMLSlotElement)],sf.prototype,"slotElement",void 0);sf=Fp([dn("wired-tabs")],sf);var Ui=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Xi=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let xi=class extends En{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ui([Pe({type:Boolean,reflect:!0}),Xi("design:type",Object)],xi.prototype,"disabled",void 0);Ui([Pe({type:Number}),Xi("design:type",Object)],xi.prototype,"rows",void 0);Ui([Pe({type:Number}),Xi("design:type",Object)],xi.prototype,"maxrows",void 0);Ui([Pe({type:String}),Xi("design:type",Object)],xi.prototype,"autocomplete",void 0);Ui([Pe({type:Boolean}),Xi("design:type",Object)],xi.prototype,"autofocus",void 0);Ui([Pe({type:String}),Xi("design:type",Object)],xi.prototype,"inputmode",void 0);Ui([Pe({type:String}),Xi("design:type",Object)],xi.prototype,"placeholder",void 0);Ui([Pe({type:Boolean}),Xi("design:type",Object)],xi.prototype,"required",void 0);Ui([Pe({type:Boolean}),Xi("design:type",Object)],xi.prototype,"readonly",void 0);Ui([Pe({type:Number}),Xi("design:type",Number)],xi.prototype,"minlength",void 0);Ui([Pe({type:Number}),Xi("design:type",Number)],xi.prototype,"maxlength",void 0);Ui([zn("textarea"),Xi("design:type",HTMLTextAreaElement)],xi.prototype,"textareaInput",void 0);xi=Ui([dn("wired-textarea")],xi);var bf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Bp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ql=class extends En{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){_i(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Eo("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=Tp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),hr(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};bf([Pe({type:Boolean}),Bp("design:type",Object)],ql.prototype,"checked",void 0);bf([Pe({type:Boolean,reflect:!0}),Bp("design:type",Object)],ql.prototype,"disabled",void 0);bf([zn("input"),Bp("design:type",HTMLInputElement)],ql.prototype,"input",void 0);ql=bf([dn("wired-toggle")],ql);var na=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ia=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ki=class extends En{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[Mn,cn`
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
      `]}render(){return ln`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){_i(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};na([Pe({type:String}),ia("design:type",Object)],ki.prototype,"src",void 0);na([Pe({type:Boolean}),ia("design:type",Object)],ki.prototype,"autoplay",void 0);na([Pe({type:Boolean}),ia("design:type",Object)],ki.prototype,"loop",void 0);na([Pe({type:Boolean}),ia("design:type",Object)],ki.prototype,"muted",void 0);na([Pe({type:Boolean}),ia("design:type",Object)],ki.prototype,"playsinline",void 0);na([Pe(),ia("design:type",Object)],ki.prototype,"playing",void 0);na([Pe(),ia("design:type",Object)],ki.prototype,"timeDisplay",void 0);na([zn("wired-progress"),ia("design:type",mr)],ki.prototype,"progressBar",void 0);na([zn("wired-slider"),ia("design:type",Us)],ki.prototype,"slider",void 0);na([zn("video"),ia("design:type",HTMLVideoElement)],ki.prototype,"video",void 0);ki=na([dn("wired-video"),ia("design:paramtypes",[])],ki);function w2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Nh={exports:{}},wl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function Wy(){if(Yx)return wl;Yx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return wl.Fragment=e,wl.jsx=n,wl.jsxs=n,wl}var $x;function qy(){return $x||($x=1,Nh.exports=Wy()),Nh.exports}var re=qy(),Ph={exports:{}},xt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx;function Yy(){if(Zx)return xt;Zx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function S(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function v(O,ie,Se){this.props=O,this.context=ie,this.refs=y,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function L(){}L.prototype=v.prototype;function D(O,ie,Se){this.props=O,this.context=ie,this.refs=y,this.updater=Se||M}var I=D.prototype=new L;I.constructor=D,E(I,v.prototype),I.isPureReactComponent=!0;var V=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(O,ie,Se){var Ee=Se.ref;return{$$typeof:r,type:O,key:ie,ref:Ee!==void 0?Ee:null,props:Se}}function w(O,ie){return C(O.type,ie,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function ee(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Se){return ie[Se]})}var ce=/\/+/g;function xe(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?ee(""+O.key):ie.toString(36)}function $(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(N,N):(O.status="pending",O.then(function(ie){O.status==="pending"&&(O.status="fulfilled",O.value=ie)},function(ie){O.status==="pending"&&(O.status="rejected",O.reason=ie)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function P(O,ie,Se,Ee,Oe){var Q=typeof O;(Q==="undefined"||Q==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(Q){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case r:case e:ue=!0;break;case g:return ue=O._init,P(ue(O._payload),ie,Se,Ee,Oe)}}if(ue)return Oe=Oe(O),ue=Ee===""?"."+xe(O,0):Ee,V(Oe)?(Se="",ue!=null&&(Se=ue.replace(ce,"$&/")+"/"),P(Oe,ie,Se,"",function(Ye){return Ye})):Oe!=null&&(G(Oe)&&(Oe=w(Oe,Se+(Oe.key==null||O&&O.key===Oe.key?"":(""+Oe.key).replace(ce,"$&/")+"/")+ue)),ie.push(Oe)),1;ue=0;var Ne=Ee===""?".":Ee+":";if(V(O))for(var Ze=0;Ze<O.length;Ze++)Ee=O[Ze],Q=Ne+xe(Ee,Ze),ue+=P(Ee,ie,Se,Q,Oe);else if(Ze=S(O),typeof Ze=="function")for(O=Ze.call(O),Ze=0;!(Ee=O.next()).done;)Ee=Ee.value,Q=Ne+xe(Ee,Ze++),ue+=P(Ee,ie,Se,Q,Oe);else if(Q==="object"){if(typeof O.then=="function")return P($(O),ie,Se,Ee,Oe);throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function k(O,ie,Se){if(O==null)return O;var Ee=[],Oe=0;return P(O,Ee,"","",function(Q){return ie.call(Se,Q,Oe++)}),Ee}function X(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Se){(O._status===0||O._status===-1)&&(O._status=1,O._result=Se)},function(Se){(O._status===0||O._status===-1)&&(O._status=2,O._result=Se)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var de=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},me={map:k,forEach:function(O,ie,Se){k(O,function(){ie.apply(this,arguments)},Se)},count:function(O){var ie=0;return k(O,function(){ie++}),ie},toArray:function(O){return k(O,function(ie){return ie})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return xt.Activity=_,xt.Children=me,xt.Component=v,xt.Fragment=n,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=a,xt.Suspense=m,xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,xt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return z.H.useMemoCache(O)}},xt.cache=function(O){return function(){return O.apply(null,arguments)}},xt.cacheSignal=function(){return null},xt.cloneElement=function(O,ie,Se){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var Ee=E({},O.props),Oe=O.key;if(ie!=null)for(Q in ie.key!==void 0&&(Oe=""+ie.key),ie)!K.call(ie,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&ie.ref===void 0||(Ee[Q]=ie[Q]);var Q=arguments.length-2;if(Q===1)Ee.children=Se;else if(1<Q){for(var ue=Array(Q),Ne=0;Ne<Q;Ne++)ue[Ne]=arguments[Ne+2];Ee.children=ue}return C(O.type,Oe,Ee)},xt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},xt.createElement=function(O,ie,Se){var Ee,Oe={},Q=null;if(ie!=null)for(Ee in ie.key!==void 0&&(Q=""+ie.key),ie)K.call(ie,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Oe[Ee]=ie[Ee]);var ue=arguments.length-2;if(ue===1)Oe.children=Se;else if(1<ue){for(var Ne=Array(ue),Ze=0;Ze<ue;Ze++)Ne[Ze]=arguments[Ze+2];Oe.children=Ne}if(O&&O.defaultProps)for(Ee in ue=O.defaultProps,ue)Oe[Ee]===void 0&&(Oe[Ee]=ue[Ee]);return C(O,Q,Oe)},xt.createRef=function(){return{current:null}},xt.forwardRef=function(O){return{$$typeof:d,render:O}},xt.isValidElement=G,xt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:X}},xt.memo=function(O,ie){return{$$typeof:p,type:O,compare:ie===void 0?null:ie}},xt.startTransition=function(O){var ie=z.T,Se={};z.T=Se;try{var Ee=O(),Oe=z.S;Oe!==null&&Oe(Se,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(N,de)}catch(Q){de(Q)}finally{ie!==null&&Se.types!==null&&(ie.types=Se.types),z.T=ie}},xt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},xt.use=function(O){return z.H.use(O)},xt.useActionState=function(O,ie,Se){return z.H.useActionState(O,ie,Se)},xt.useCallback=function(O,ie){return z.H.useCallback(O,ie)},xt.useContext=function(O){return z.H.useContext(O)},xt.useDebugValue=function(){},xt.useDeferredValue=function(O,ie){return z.H.useDeferredValue(O,ie)},xt.useEffect=function(O,ie){return z.H.useEffect(O,ie)},xt.useEffectEvent=function(O){return z.H.useEffectEvent(O)},xt.useId=function(){return z.H.useId()},xt.useImperativeHandle=function(O,ie,Se){return z.H.useImperativeHandle(O,ie,Se)},xt.useInsertionEffect=function(O,ie){return z.H.useInsertionEffect(O,ie)},xt.useLayoutEffect=function(O,ie){return z.H.useLayoutEffect(O,ie)},xt.useMemo=function(O,ie){return z.H.useMemo(O,ie)},xt.useOptimistic=function(O,ie){return z.H.useOptimistic(O,ie)},xt.useReducer=function(O,ie,Se){return z.H.useReducer(O,ie,Se)},xt.useRef=function(O){return z.H.useRef(O)},xt.useState=function(O){return z.H.useState(O)},xt.useSyncExternalStore=function(O,ie,Se){return z.H.useSyncExternalStore(O,ie,Se)},xt.useTransition=function(){return z.H.useTransition()},xt.version="19.2.1",xt}var Kx;function Hp(){return Kx||(Kx=1,Ph.exports=Yy()),Ph.exports}var He=Hp();const $y=w2(He);var zh={exports:{}},Cl={},Ih={exports:{}},Fh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx;function Zy(){return Qx||(Qx=1,(function(r){function e(P,k){var X=P.length;P.push(k);e:for(;0<X;){var de=X-1>>>1,me=P[de];if(0<o(me,k))P[de]=k,P[X]=me,X=de;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var k=P[0],X=P.pop();if(X!==k){P[0]=X;e:for(var de=0,me=P.length,O=me>>>1;de<O;){var ie=2*(de+1)-1,Se=P[ie],Ee=ie+1,Oe=P[Ee];if(0>o(Se,X))Ee<me&&0>o(Oe,Se)?(P[de]=Oe,P[Ee]=X,de=Ee):(P[de]=Se,P[ie]=X,de=ie);else if(Ee<me&&0>o(Oe,X))P[de]=Oe,P[Ee]=X,de=Ee;else break e}}return k}function o(P,k){var X=P.sortIndex-k.sortIndex;return X!==0?X:P.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,S=!1,M=!1,E=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var k=n(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=P)a(p),k.sortIndex=k.expirationTime,e(m,k);else break;k=n(p)}}function V(P){if(E=!1,I(P),!M)if(n(m)!==null)M=!0,N||(N=!0,ee());else{var k=n(p);k!==null&&$(V,k.startTime-P)}}var N=!1,z=-1,K=5,C=-1;function w(){return y?!0:!(r.unstable_now()-C<K)}function G(){if(y=!1,N){var P=r.unstable_now();C=P;var k=!0;try{e:{M=!1,E&&(E=!1,L(z),z=-1),S=!0;var X=x;try{t:{for(I(P),_=n(m);_!==null&&!(_.expirationTime>P&&w());){var de=_.callback;if(typeof de=="function"){_.callback=null,x=_.priorityLevel;var me=de(_.expirationTime<=P);if(P=r.unstable_now(),typeof me=="function"){_.callback=me,I(P),k=!0;break t}_===n(m)&&a(m),I(P)}else a(m);_=n(m)}if(_!==null)k=!0;else{var O=n(p);O!==null&&$(V,O.startTime-P),k=!1}}break e}finally{_=null,x=X,S=!1}k=void 0}}finally{k?ee():N=!1}}}var ee;if(typeof D=="function")ee=function(){D(G)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,xe=ce.port2;ce.port1.onmessage=G,ee=function(){xe.postMessage(null)}}else ee=function(){v(G,0)};function $(P,k){z=v(function(){P(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var k=3;break;default:k=x}var X=x;x=k;try{return P()}finally{x=X}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var X=x;x=P;try{return k()}finally{x=X}},r.unstable_scheduleCallback=function(P,k,X){var de=r.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,P){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,P={id:g++,callback:k,priorityLevel:P,startTime:X,expirationTime:me,sortIndex:-1},X>de?(P.sortIndex=X,e(p,P),n(m)===null&&P===n(p)&&(E?(L(z),z=-1):E=!0,$(V,X-de))):(P.sortIndex=me,e(m,P),M||S||(M=!0,N||(N=!0,ee()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var k=x;return function(){var X=x;x=k;try{return P.apply(this,arguments)}finally{x=X}}}})(Fh)),Fh}var Jx;function Ky(){return Jx||(Jx=1,Ih.exports=Zy()),Ih.exports}var Bh={exports:{}},Qn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function Qy(){if(ev)return Qn;ev=1;var r=Hp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Qn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Qn.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},Qn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Qn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Qn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:S}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Qn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Qn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Qn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Qn.requestFormReset=function(m){a.d.r(m)},Qn.unstable_batchedUpdates=function(m,p){return m(p)},Qn.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},Qn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Qn.version="19.2.1",Qn}var tv;function Jy(){if(tv)return Bh.exports;tv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Bh.exports=Qy(),Bh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function eS(){if(nv)return Cl;nv=1;var r=Ky(),e=Hp(),n=Jy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,A=f.child;A;){if(A===s){b=!0,s=f,l=h;break}if(A===l){b=!0,l=f,s=h;break}A=A.sibling}if(!b){for(A=h.child;A;){if(A===s){b=!0,s=h,l=f;break}if(A===l){b=!0,l=h,s=f;break}A=A.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ee(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case V:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:xe(t.type)||"Memo";case K:i=t._payload,t=t._init;try{return xe(t(i))}catch{}}return null}var $=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},de=[],me=-1;function O(t){return{current:t}}function ie(t){0>me||(t.current=de[me],de[me]=null,me--)}function Se(t,i){me++,de[me]=t.current,t.current=i}var Ee=O(null),Oe=O(null),Q=O(null),ue=O(null);function Ne(t,i){switch(Se(Q,i),Se(Oe,t),Se(Ee,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?ix(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=ix(i),t=ax(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Ee),Se(Ee,t)}function Ze(){ie(Ee),ie(Oe),ie(Q)}function Ye(t){t.memoizedState!==null&&Se(ue,t);var i=Ee.current,s=ax(i,t.type);i!==s&&(Se(Oe,t),Se(Ee,s))}function gt(t){Oe.current===t&&(ie(Ee),ie(Oe)),ue.current===t&&(ie(ue),Ml._currentValue=X)}var Ct,ft;function mt(t){if(Ct===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ct=i&&i[1]||"",ft=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+ft}var B=!1;function _t(t,i){if(!t||B)return"";B=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(le){var ae=le}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(le){ae=le}t.call(ye.prototype)}}else{try{throw Error()}catch(le){ae=le}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(le){if(le&&ae&&typeof le.stack=="string")return[le.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],A=h[1];if(b&&A){var F=b.split(`
`),ne=A.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<ne.length&&!ne[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===ne.length)for(l=F.length-1,f=ne.length-1;1<=l&&0<=f&&F[l]!==ne[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==ne[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==ne[f]){var ge=`
`+F[l].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=l&&0<=f);break}}}finally{B=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?mt(s):""}function yt(t,i){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==i&&i!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return mt("Activity");default:return""}}function Gt(t){try{var i="",s=null;do i+=yt(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var $e=Object.prototype.hasOwnProperty,Wt=r.unstable_scheduleCallback,it=r.unstable_cancelCallback,pt=r.unstable_shouldYield,U=r.unstable_requestPaint,T=r.unstable_now,Z=r.unstable_getCurrentPriorityLevel,ve=r.unstable_ImmediatePriority,Te=r.unstable_UserBlockingPriority,fe=r.unstable_NormalPriority,Je=r.unstable_LowPriority,Ie=r.unstable_IdlePriority,at=r.log,Qe=r.unstable_setDisableYieldValue,Ae=null,we=null;function tt(t){if(typeof at=="function"&&Qe(t),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Ae,t)}catch{}}var We=Math.clz32?Math.clz32:H,ke=Math.log,dt=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(ke(t)/dt|0)|0}var ze=256,Ue=262144,Le=4194304;function Re(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~h,l!==0?f=Re(l):(b&=A,b!==0?f=Re(b):s||(s=A&~t,s!==0&&(f=Re(s))))):(A=l&~h,A!==0?f=Re(A):b!==0?f=Re(b):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function Xe(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function pe(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ge(){var t=Le;return Le<<=1,(Le&62914560)===0&&(Le=4194304),t}function ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function nn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qt(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,F=t.expirationTimes,ne=t.hiddenUpdates;for(s=b&~s;0<s;){var ge=31-We(s),ye=1<<ge;A[ge]=0,F[ge]=-1;var ae=ne[ge];if(ae!==null)for(ne[ge]=null,ge=0;ge<ae.length;ge++){var le=ae[ge];le!==null&&(le.lane&=-536870913)}s&=~ye}l!==0&&ti(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function ti(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-We(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function vi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-We(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function aa(t,i){var s=i&-i;return s=(s&42)!==0?1:Zn(s),(s&(t.suspendedLanes|i))!==0?0:s}function Zn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function qi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ga(){var t=k.p;return t!==0?t:(t=window.event,t===void 0?32:Rx(t.type))}function Ns(t,i){var s=k.p;try{return k.p=t,i()}finally{k.p=s}}var jn=Math.random().toString(36).slice(2),un="__reactFiber$"+jn,xn="__reactProps$"+jn,ni="__reactContainer$"+jn,Za="__reactEvents$"+jn,Ka="__reactListeners$"+jn,_a="__reactHandles$"+jn,br="__reactResources$"+jn,sa="__reactMarker$"+jn;function ra(t){delete t[un],delete t[xn],delete t[Za],delete t[Ka],delete t[_a]}function ii(t){var i=t[un];if(i)return i;for(var s=t.parentNode;s;){if(i=s[ni]||s[un]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=fx(t);t!==null;){if(s=t[un])return s;t=fx(t)}return i}t=s,s=t.parentNode}return null}function R(t){if(t=t[un]||t[ni]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function W(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function se(t){var i=t[br];return i||(i=t[br]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function J(t){t[sa]=!0}var Y=new Set,De={};function he(t,i){Me(t,i),Me(t+"Capture",i)}function Me(t,i){for(De[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var Ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Be={},qe={};function Ve(t){return $e.call(qe,t)?!0:$e.call(Be,t)?!1:Ce.test(t)?qe[t]=!0:(Be[t]=!0,!1)}function et(t,i,s){if(Ve(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function bt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ht(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function At(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fe(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function st(t){if(!t._valueTracker){var i=At(t)?"checked":"value";t._valueTracker=Fe(t,i,""+t[i])}}function ot(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=At(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Xt=/[\n"\\]/g;function Vt(t){return t.replace(Xt,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ai(t,i,s,l,f,h,b,A){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+lt(i)):t.value!==""+lt(i)&&(t.value=""+lt(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Kt(t,b,lt(i)):s!=null?Kt(t,b,lt(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+lt(A):t.removeAttribute("name")}function zt(t,i,s,l,f,h,b,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){st(t);return}s=s!=null?""+lt(s):"",i=i!=null?""+lt(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),st(t)}function Kt(t,i,s){i==="number"&&Ut(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Pt(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+lt(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function an(t,i,s){if(i!=null&&(i=""+lt(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+lt(s):""}function hn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if($(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=lt(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),st(t)}function kn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Kn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yr(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||Kn.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Sr(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&yr(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&yr(t,h,i[h])}function Ps(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tn=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mr(t){return Tf.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Li(){}var Er=null;function zs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,Ar=null;function nm(t){var i=R(t);if(i&&(t=i.stateNode)){var s=t[xn]||null;e:switch(t=i.stateNode,i.type){case"input":if(ai(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Vt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[xn]||null;if(!f)throw Error(a(90));ai(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&ot(l)}break e;case"textarea":an(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Pt(t,!!s.multiple,i,!1)}}}var Af=!1;function im(t,i,s){if(Af)return t(i,s);Af=!0;try{var l=t(i);return l}finally{if(Af=!1,(Tr!==null||Ar!==null)&&(Jc(),Tr&&(i=Tr,t=Ar,Ar=Tr=null,nm(i),t)))for(i=0;i<t.length;i++)nm(t[i])}}function Ho(t,i){var s=t.stateNode;if(s===null)return null;var l=s[xn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=!1;if(xa)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Rf=!1}var Qa=null,wf=null,hc=null;function am(){if(hc)return hc;var t,i=wf,s=i.length,l,f="value"in Qa?Qa.value:Qa.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return hc=f.slice(t,1<l?1-l:void 0)}function pc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function mc(){return!0}function sm(){return!1}function oi(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?mc:sm,this.isPropagationStopped=sm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=mc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=mc)},persist:function(){},isPersistent:mc}),i}var Is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=oi(Is),Vo=_({},Is,{view:0,detail:0}),s1=oi(Vo),Cf,Df,jo,_c=_({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jo&&(jo&&t.type==="mousemove"?(Cf=t.screenX-jo.screenX,Df=t.screenY-jo.screenY):Df=Cf=0,jo=t),Cf)},movementY:function(t){return"movementY"in t?t.movementY:Df}}),rm=oi(_c),r1=_({},_c,{dataTransfer:0}),o1=oi(r1),l1=_({},Vo,{relatedTarget:0}),Of=oi(l1),c1=_({},Is,{animationName:0,elapsedTime:0,pseudoElement:0}),u1=oi(c1),f1=_({},Is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d1=oi(f1),h1=_({},Is,{data:0}),om=oi(h1),p1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=g1[t])?!!i[t]:!1}function Uf(){return _1}var x1=_({},Vo,{key:function(t){if(t.key){var i=p1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?pc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v1=oi(x1),b1=_({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lm=oi(b1),y1=_({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),S1=oi(y1),M1=_({},Is,{propertyName:0,elapsedTime:0,pseudoElement:0}),E1=oi(M1),T1=_({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),A1=oi(T1),R1=_({},Is,{newState:0,oldState:0}),w1=oi(R1),C1=[9,13,27,32],Lf=xa&&"CompositionEvent"in window,ko=null;xa&&"documentMode"in document&&(ko=document.documentMode);var D1=xa&&"TextEvent"in window&&!ko,cm=xa&&(!Lf||ko&&8<ko&&11>=ko),um=" ",fm=!1;function dm(t,i){switch(t){case"keyup":return C1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rr=!1;function O1(t,i){switch(t){case"compositionend":return hm(i);case"keypress":return i.which!==32?null:(fm=!0,um);case"textInput":return t=i.data,t===um&&fm?null:t;default:return null}}function U1(t,i){if(Rr)return t==="compositionend"||!Lf&&dm(t,i)?(t=am(),hc=wf=Qa=null,Rr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cm&&i.locale!=="ko"?null:i.data;default:return null}}var L1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!L1[t.type]:i==="textarea"}function mm(t,i,s,l){Tr?Ar?Ar.push(l):Ar=[l]:Tr=l,i=ru(i,"onChange"),0<i.length&&(s=new gc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Xo=null,Wo=null;function N1(t){K_(t,0)}function xc(t){var i=W(t);if(ot(i))return t}function gm(t,i){if(t==="change")return i}var _m=!1;if(xa){var Nf;if(xa){var Pf="oninput"in document;if(!Pf){var xm=document.createElement("div");xm.setAttribute("oninput","return;"),Pf=typeof xm.oninput=="function"}Nf=Pf}else Nf=!1;_m=Nf&&(!document.documentMode||9<document.documentMode)}function vm(){Xo&&(Xo.detachEvent("onpropertychange",bm),Wo=Xo=null)}function bm(t){if(t.propertyName==="value"&&xc(Wo)){var i=[];mm(i,Wo,t,zs(t)),im(N1,i)}}function P1(t,i,s){t==="focusin"?(vm(),Xo=i,Wo=s,Xo.attachEvent("onpropertychange",bm)):t==="focusout"&&vm()}function z1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(Wo)}function I1(t,i){if(t==="click")return xc(i)}function F1(t,i){if(t==="input"||t==="change")return xc(i)}function B1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var bi=typeof Object.is=="function"?Object.is:B1;function qo(t,i){if(bi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!$e.call(i,f)||!bi(t[f],i[f]))return!1}return!0}function ym(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,i){var s=ym(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ym(s)}}function Mm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Em(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Ut(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Ut(t.document)}return i}function zf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var H1=xa&&"documentMode"in document&&11>=document.documentMode,wr=null,If=null,Yo=null,Ff=!1;function Tm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Ff||wr==null||wr!==Ut(l)||(l=wr,"selectionStart"in l&&zf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yo&&qo(Yo,l)||(Yo=l,l=ru(If,"onSelect"),0<l.length&&(i=new gc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=wr)))}function Fs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Cr={animationend:Fs("Animation","AnimationEnd"),animationiteration:Fs("Animation","AnimationIteration"),animationstart:Fs("Animation","AnimationStart"),transitionrun:Fs("Transition","TransitionRun"),transitionstart:Fs("Transition","TransitionStart"),transitioncancel:Fs("Transition","TransitionCancel"),transitionend:Fs("Transition","TransitionEnd")},Bf={},Am={};xa&&(Am=document.createElement("div").style,"AnimationEvent"in window||(delete Cr.animationend.animation,delete Cr.animationiteration.animation,delete Cr.animationstart.animation),"TransitionEvent"in window||delete Cr.transitionend.transition);function Bs(t){if(Bf[t])return Bf[t];if(!Cr[t])return t;var i=Cr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Am)return Bf[t]=i[s];return t}var Rm=Bs("animationend"),wm=Bs("animationiteration"),Cm=Bs("animationstart"),G1=Bs("transitionrun"),V1=Bs("transitionstart"),j1=Bs("transitioncancel"),Dm=Bs("transitionend"),Om=new Map,Hf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hf.push("scrollEnd");function Yi(t,i){Om.set(t,i),he(i,[t])}var vc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ni=[],Dr=0,Gf=0;function bc(){for(var t=Dr,i=Gf=Dr=0;i<t;){var s=Ni[i];Ni[i++]=null;var l=Ni[i];Ni[i++]=null;var f=Ni[i];Ni[i++]=null;var h=Ni[i];if(Ni[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Um(s,f,h)}}function yc(t,i,s,l){Ni[Dr++]=t,Ni[Dr++]=i,Ni[Dr++]=s,Ni[Dr++]=l,Gf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function Vf(t,i,s,l){return yc(t,i,s,l),Sc(t)}function Hs(t,i){return yc(t,null,null,i),Sc(t)}function Um(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-We(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function Sc(t){if(50<gl)throw gl=0,Kd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Or={};function k1(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(t,i,s,l){return new k1(t,i,s,l)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function va(t,i){var s=t.alternate;return s===null?(s=yi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Lm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Mc(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")jf(t)&&(b=1);else if(typeof t=="string")b=$b(t,s,Ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=yi(31,s,i,f),t.elementType=C,t.lanes=h,t;case E:return Gs(s.children,f,h,i);case y:b=8,f|=24;break;case v:return t=yi(12,s,i,f|2),t.elementType=v,t.lanes=h,t;case V:return t=yi(13,s,i,f),t.elementType=V,t.lanes=h,t;case N:return t=yi(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:b=10;break e;case L:b=9;break e;case I:b=11;break e;case z:b=14;break e;case K:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=yi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Gs(t,i,s,l){return t=yi(7,t,l,i),t.lanes=s,t}function kf(t,i,s){return t=yi(6,t,null,i),t.lanes=s,t}function Nm(t){var i=yi(18,null,null,0);return i.stateNode=t,i}function Xf(t,i,s){return i=yi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Pm=new WeakMap;function Pi(t,i){if(typeof t=="object"&&t!==null){var s=Pm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Gt(i)},Pm.set(t,i),i)}return{value:t,source:i,stack:Gt(i)}}var Ur=[],Lr=0,Ec=null,$o=0,zi=[],Ii=0,Ja=null,oa=1,la="";function ba(t,i){Ur[Lr++]=$o,Ur[Lr++]=Ec,Ec=t,$o=i}function zm(t,i,s){zi[Ii++]=oa,zi[Ii++]=la,zi[Ii++]=Ja,Ja=t;var l=oa;t=la;var f=32-We(l)-1;l&=~(1<<f),s+=1;var h=32-We(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,oa=1<<32-We(i)+f|s<<f|l,la=h+t}else oa=1<<h|s<<f|l,la=t}function Wf(t){t.return!==null&&(ba(t,1),zm(t,1,0))}function qf(t){for(;t===Ec;)Ec=Ur[--Lr],Ur[Lr]=null,$o=Ur[--Lr],Ur[Lr]=null;for(;t===Ja;)Ja=zi[--Ii],zi[Ii]=null,la=zi[--Ii],zi[Ii]=null,oa=zi[--Ii],zi[Ii]=null}function Im(t,i){zi[Ii++]=oa,zi[Ii++]=la,zi[Ii++]=Ja,oa=i.id,la=i.overflow,Ja=t}var Xn=null,rn=null,Lt=!1,es=null,Fi=!1,Yf=Error(a(519));function ts(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zo(Pi(i,t)),Yf}function Fm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[un]=t,i[xn]=l,s){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(s=0;s<xl.length;s++)wt(xl[s],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":wt("invalid",i),zt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":wt("invalid",i);break;case"textarea":wt("invalid",i),hn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||tx(i.textContent,s)?(l.popover!=null&&(wt("beforetoggle",i),wt("toggle",i)),l.onScroll!=null&&wt("scroll",i),l.onScrollEnd!=null&&wt("scrollend",i),l.onClick!=null&&(i.onclick=Li),i=!0):i=!1,i||ts(t,!0)}function Bm(t){for(Xn=t.return;Xn;)switch(Xn.tag){case 5:case 31:case 13:Fi=!1;return;case 27:case 3:Fi=!0;return;default:Xn=Xn.return}}function Nr(t){if(t!==Xn)return!1;if(!Lt)return Bm(t),Lt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||dh(t.type,t.memoizedProps)),s=!s),s&&rn&&ts(t),Bm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));rn=ux(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));rn=ux(t)}else i===27?(i=rn,ms(t.type)?(t=_h,_h=null,rn=t):rn=i):rn=Xn?Hi(t.stateNode.nextSibling):null;return!0}function Vs(){rn=Xn=null,Lt=!1}function $f(){var t=es;return t!==null&&(fi===null?fi=t:fi.push.apply(fi,t),es=null),t}function Zo(t){es===null?es=[t]:es.push(t)}var Zf=O(null),js=null,ya=null;function ns(t,i,s){Se(Zf,i._currentValue),i._currentValue=s}function Sa(t){t._currentValue=Zf.current,ie(Zf)}function Kf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function Qf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=f;for(var F=0;F<i.length;F++)if(A.context===i[F]){h.lanes|=s,A=h.alternate,A!==null&&(A.lanes|=s),Kf(h.return,s,t),l||(b=null);break e}h=A.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Kf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Pr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var A=f.type;bi(f.pendingProps.value,b.value)||(t!==null?t.push(A):t=[A])}}else if(f===ue.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Ml):t=[Ml])}f=f.return}t!==null&&Qf(i,t,s,l),i.flags|=262144}function Tc(t){for(t=t.firstContext;t!==null;){if(!bi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ks(t){js=t,ya=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wn(t){return Hm(js,t)}function Ac(t,i){return js===null&&ks(t),Hm(t,i)}function Hm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ya===null){if(t===null)throw Error(a(308));ya=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ya=ya.next=i;return s}var X1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},W1=r.unstable_scheduleCallback,q1=r.unstable_NormalPriority,An={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Jf(){return{controller:new X1,data:new Map,refCount:0}}function Ko(t){t.refCount--,t.refCount===0&&W1(q1,function(){t.controller.abort()})}var Qo=null,ed=0,zr=0,Ir=null;function Y1(t,i){if(Qo===null){var s=Qo=[];ed=0,zr=ih(),Ir={status:"pending",value:void 0,then:function(l){s.push(l)}}}return ed++,i.then(Gm,Gm),i}function Gm(){if(--ed===0&&Qo!==null){Ir!==null&&(Ir.status="fulfilled");var t=Qo;Qo=null,zr=0,Ir=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function $1(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Vm=P.S;P.S=function(t,i){T_=T(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Y1(t,i),Vm!==null&&Vm(t,i)};var Xs=O(null);function td(){var t=Xs.current;return t!==null?t:sn.pooledCache}function Rc(t,i){i===null?Se(Xs,Xs.current):Se(Xs,i.pool)}function jm(){var t=td();return t===null?null:{parent:An._currentValue,pool:t}}var Fr=Error(a(460)),nd=Error(a(474)),wc=Error(a(542)),Cc={then:function(){}};function km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Li,Li),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,qm(t),t;default:if(typeof i.status=="string")i.then(Li,Li);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,qm(t),t}throw qs=i,Fr}}function Ws(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(qs=s,Fr):s}}var qs=null;function Wm(){if(qs===null)throw Error(a(459));var t=qs;return qs=null,t}function qm(t){if(t===Fr||t===wc)throw Error(a(483))}var Br=null,Jo=0;function Dc(t){var i=Jo;return Jo+=1,Br===null&&(Br=[]),Xm(Br,t,i)}function el(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Oc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Ym(t){function i(q,j){if(t){var te=q.deletions;te===null?(q.deletions=[j],q.flags|=16):te.push(j)}}function s(q,j){if(!t)return null;for(;j!==null;)i(q,j),j=j.sibling;return null}function l(q){for(var j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function f(q,j){return q=va(q,j),q.index=0,q.sibling=null,q}function h(q,j,te){return q.index=te,t?(te=q.alternate,te!==null?(te=te.index,te<j?(q.flags|=67108866,j):te):(q.flags|=67108866,j)):(q.flags|=1048576,j)}function b(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function A(q,j,te,_e){return j===null||j.tag!==6?(j=kf(te,q.mode,_e),j.return=q,j):(j=f(j,te),j.return=q,j)}function F(q,j,te,_e){var rt=te.type;return rt===E?ge(q,j,te.props.children,_e,te.key):j!==null&&(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===K&&Ws(rt)===j.type)?(j=f(j,te.props),el(j,te),j.return=q,j):(j=Mc(te.type,te.key,te.props,null,q.mode,_e),el(j,te),j.return=q,j)}function ne(q,j,te,_e){return j===null||j.tag!==4||j.stateNode.containerInfo!==te.containerInfo||j.stateNode.implementation!==te.implementation?(j=Xf(te,q.mode,_e),j.return=q,j):(j=f(j,te.children||[]),j.return=q,j)}function ge(q,j,te,_e,rt){return j===null||j.tag!==7?(j=Gs(te,q.mode,_e,rt),j.return=q,j):(j=f(j,te),j.return=q,j)}function ye(q,j,te){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=kf(""+j,q.mode,te),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case S:return te=Mc(j.type,j.key,j.props,null,q.mode,te),el(te,j),te.return=q,te;case M:return j=Xf(j,q.mode,te),j.return=q,j;case K:return j=Ws(j),ye(q,j,te)}if($(j)||ee(j))return j=Gs(j,q.mode,te,null),j.return=q,j;if(typeof j.then=="function")return ye(q,Dc(j),te);if(j.$$typeof===D)return ye(q,Ac(q,j),te);Oc(q,j)}return null}function ae(q,j,te,_e){var rt=j!==null?j.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return rt!==null?null:A(q,j,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===rt?F(q,j,te,_e):null;case M:return te.key===rt?ne(q,j,te,_e):null;case K:return te=Ws(te),ae(q,j,te,_e)}if($(te)||ee(te))return rt!==null?null:ge(q,j,te,_e,null);if(typeof te.then=="function")return ae(q,j,Dc(te),_e);if(te.$$typeof===D)return ae(q,j,Ac(q,te),_e);Oc(q,te)}return null}function le(q,j,te,_e,rt){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return q=q.get(te)||null,A(j,q,""+_e,rt);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case S:return q=q.get(_e.key===null?te:_e.key)||null,F(j,q,_e,rt);case M:return q=q.get(_e.key===null?te:_e.key)||null,ne(j,q,_e,rt);case K:return _e=Ws(_e),le(q,j,te,_e,rt)}if($(_e)||ee(_e))return q=q.get(te)||null,ge(j,q,_e,rt,null);if(typeof _e.then=="function")return le(q,j,te,Dc(_e),rt);if(_e.$$typeof===D)return le(q,j,te,Ac(j,_e),rt);Oc(j,_e)}return null}function Ke(q,j,te,_e){for(var rt=null,Ft=null,nt=j,Mt=j=0,Ot=null;nt!==null&&Mt<te.length;Mt++){nt.index>Mt?(Ot=nt,nt=null):Ot=nt.sibling;var Bt=ae(q,nt,te[Mt],_e);if(Bt===null){nt===null&&(nt=Ot);break}t&&nt&&Bt.alternate===null&&i(q,nt),j=h(Bt,j,Mt),Ft===null?rt=Bt:Ft.sibling=Bt,Ft=Bt,nt=Ot}if(Mt===te.length)return s(q,nt),Lt&&ba(q,Mt),rt;if(nt===null){for(;Mt<te.length;Mt++)nt=ye(q,te[Mt],_e),nt!==null&&(j=h(nt,j,Mt),Ft===null?rt=nt:Ft.sibling=nt,Ft=nt);return Lt&&ba(q,Mt),rt}for(nt=l(nt);Mt<te.length;Mt++)Ot=le(nt,q,Mt,te[Mt],_e),Ot!==null&&(t&&Ot.alternate!==null&&nt.delete(Ot.key===null?Mt:Ot.key),j=h(Ot,j,Mt),Ft===null?rt=Ot:Ft.sibling=Ot,Ft=Ot);return t&&nt.forEach(function(bs){return i(q,bs)}),Lt&&ba(q,Mt),rt}function ut(q,j,te,_e){if(te==null)throw Error(a(151));for(var rt=null,Ft=null,nt=j,Mt=j=0,Ot=null,Bt=te.next();nt!==null&&!Bt.done;Mt++,Bt=te.next()){nt.index>Mt?(Ot=nt,nt=null):Ot=nt.sibling;var bs=ae(q,nt,Bt.value,_e);if(bs===null){nt===null&&(nt=Ot);break}t&&nt&&bs.alternate===null&&i(q,nt),j=h(bs,j,Mt),Ft===null?rt=bs:Ft.sibling=bs,Ft=bs,nt=Ot}if(Bt.done)return s(q,nt),Lt&&ba(q,Mt),rt;if(nt===null){for(;!Bt.done;Mt++,Bt=te.next())Bt=ye(q,Bt.value,_e),Bt!==null&&(j=h(Bt,j,Mt),Ft===null?rt=Bt:Ft.sibling=Bt,Ft=Bt);return Lt&&ba(q,Mt),rt}for(nt=l(nt);!Bt.done;Mt++,Bt=te.next())Bt=le(nt,q,Mt,Bt.value,_e),Bt!==null&&(t&&Bt.alternate!==null&&nt.delete(Bt.key===null?Mt:Bt.key),j=h(Bt,j,Mt),Ft===null?rt=Bt:Ft.sibling=Bt,Ft=Bt);return t&&nt.forEach(function(ry){return i(q,ry)}),Lt&&ba(q,Mt),rt}function en(q,j,te,_e){if(typeof te=="object"&&te!==null&&te.type===E&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var rt=te.key;j!==null;){if(j.key===rt){if(rt=te.type,rt===E){if(j.tag===7){s(q,j.sibling),_e=f(j,te.props.children),_e.return=q,q=_e;break e}}else if(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===K&&Ws(rt)===j.type){s(q,j.sibling),_e=f(j,te.props),el(_e,te),_e.return=q,q=_e;break e}s(q,j);break}else i(q,j);j=j.sibling}te.type===E?(_e=Gs(te.props.children,q.mode,_e,te.key),_e.return=q,q=_e):(_e=Mc(te.type,te.key,te.props,null,q.mode,_e),el(_e,te),_e.return=q,q=_e)}return b(q);case M:e:{for(rt=te.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===te.containerInfo&&j.stateNode.implementation===te.implementation){s(q,j.sibling),_e=f(j,te.children||[]),_e.return=q,q=_e;break e}else{s(q,j);break}else i(q,j);j=j.sibling}_e=Xf(te,q.mode,_e),_e.return=q,q=_e}return b(q);case K:return te=Ws(te),en(q,j,te,_e)}if($(te))return Ke(q,j,te,_e);if(ee(te)){if(rt=ee(te),typeof rt!="function")throw Error(a(150));return te=rt.call(te),ut(q,j,te,_e)}if(typeof te.then=="function")return en(q,j,Dc(te),_e);if(te.$$typeof===D)return en(q,j,Ac(q,te),_e);Oc(q,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,j!==null&&j.tag===6?(s(q,j.sibling),_e=f(j,te),_e.return=q,q=_e):(s(q,j),_e=kf(te,q.mode,_e),_e.return=q,q=_e),b(q)):s(q,j)}return function(q,j,te,_e){try{Jo=0;var rt=en(q,j,te,_e);return Br=null,rt}catch(nt){if(nt===Fr||nt===wc)throw nt;var Ft=yi(29,nt,null,q.mode);return Ft.lanes=_e,Ft.return=q,Ft}finally{}}}var Ys=Ym(!0),$m=Ym(!1),is=!1;function id(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ad(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function as(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ss(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(jt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Sc(t),Um(t,null,s),i}return yc(t,l,i,s),Sc(t)}function tl(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,vi(t,s)}}function sd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var rd=!1;function nl(){if(rd){var t=Ir;if(t!==null)throw t}}function il(t,i,s,l){rd=!1;var f=t.updateQueue;is=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var F=A,ne=F.next;F.next=null,b===null?h=ne:b.next=ne,b=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,A=ge.lastBaseUpdate,A!==b&&(A===null?ge.firstBaseUpdate=ne:A.next=ne,ge.lastBaseUpdate=F))}if(h!==null){var ye=f.baseState;b=0,ge=ne=F=null,A=h;do{var ae=A.lane&-536870913,le=ae!==A.lane;if(le?(Dt&ae)===ae:(l&ae)===ae){ae!==0&&ae===zr&&(rd=!0),ge!==null&&(ge=ge.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Ke=t,ut=A;ae=i;var en=s;switch(ut.tag){case 1:if(Ke=ut.payload,typeof Ke=="function"){ye=Ke.call(en,ye,ae);break e}ye=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ut.payload,ae=typeof Ke=="function"?Ke.call(en,ye,ae):Ke,ae==null)break e;ye=_({},ye,ae);break e;case 2:is=!0}}ae=A.callback,ae!==null&&(t.flags|=64,le&&(t.flags|=8192),le=f.callbacks,le===null?f.callbacks=[ae]:le.push(ae))}else le={lane:ae,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ge===null?(ne=ge=le,F=ye):ge=ge.next=le,b|=ae;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;le=A,A=le.next,le.next=null,f.lastBaseUpdate=le,f.shared.pending=null}}while(!0);ge===null&&(F=ye),f.baseState=F,f.firstBaseUpdate=ne,f.lastBaseUpdate=ge,h===null&&(f.shared.lanes=0),us|=b,t.lanes=b,t.memoizedState=ye}}function Zm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Km(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Zm(s[t],i)}var Hr=O(null),Uc=O(0);function Qm(t,i){t=Oa,Se(Uc,t),Se(Hr,i),Oa=t|i.baseLanes}function od(){Se(Uc,Oa),Se(Hr,Hr.current)}function ld(){Oa=Uc.current,ie(Hr),ie(Uc)}var Si=O(null),Bi=null;function rs(t){var i=t.alternate;Se(vn,vn.current&1),Se(Si,t),Bi===null&&(i===null||Hr.current!==null||i.memoizedState!==null)&&(Bi=t)}function cd(t){Se(vn,vn.current),Se(Si,t),Bi===null&&(Bi=t)}function Jm(t){t.tag===22?(Se(vn,vn.current),Se(Si,t),Bi===null&&(Bi=t)):os()}function os(){Se(vn,vn.current),Se(Si,Si.current)}function Mi(t){ie(Si),Bi===t&&(Bi=null),ie(vn)}var vn=O(0);function Lc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||mh(s)||gh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ma=0,St=null,Qt=null,Rn=null,Nc=!1,Gr=!1,$s=!1,Pc=0,al=0,Vr=null,Z1=0;function pn(){throw Error(a(321))}function ud(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!bi(t[s],i[s]))return!1;return!0}function fd(t,i,s,l,f,h){return Ma=h,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?zg:Ad,$s=!1,h=s(l,f),$s=!1,Gr&&(h=tg(i,s,l,f)),eg(t),h}function eg(t){P.H=ol;var i=Qt!==null&&Qt.next!==null;if(Ma=0,Rn=Qt=St=null,Nc=!1,al=0,Vr=null,i)throw Error(a(300));t===null||wn||(t=t.dependencies,t!==null&&Tc(t)&&(wn=!0))}function tg(t,i,s,l){St=t;var f=0;do{if(Gr&&(Vr=null),al=0,Gr=!1,25<=f)throw Error(a(301));if(f+=1,Rn=Qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Ig,h=i(s,l)}while(Gr);return h}function K1(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?sl(i):i,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(St.flags|=1024),i}function dd(){var t=Pc!==0;return Pc=0,t}function hd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function pd(t){if(Nc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Nc=!1}Ma=0,Rn=Qt=St=null,Gr=!1,al=Pc=0,Vr=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?St.memoizedState=Rn=t:Rn=Rn.next=t,Rn}function bn(){if(Qt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=Rn===null?St.memoizedState:Rn.next;if(i!==null)Rn=i,Qt=t;else{if(t===null)throw St.alternate===null?Error(a(467)):Error(a(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Rn===null?St.memoizedState=Rn=t:Rn=Rn.next=t}return Rn}function zc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function sl(t){var i=al;return al+=1,Vr===null&&(Vr=[]),t=Xm(Vr,t,i),i=St,(Rn===null?i.memoizedState:Rn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?zg:Ad),t}function Ic(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return sl(t);if(t.$$typeof===D)return Wn(t)}throw Error(a(438,String(t)))}function md(t){var i=null,s=St.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=St.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=zc(),St.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function Ea(t,i){return typeof i=="function"?i(t):i}function Fc(t){var i=bn();return gd(i,Qt,t)}function gd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var A=b=null,F=null,ne=i,ge=!1;do{var ye=ne.lane&-536870913;if(ye!==ne.lane?(Dt&ye)===ye:(Ma&ye)===ye){var ae=ne.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ye===zr&&(ge=!0);else if((Ma&ae)===ae){ne=ne.next,ae===zr&&(ge=!0);continue}else ye={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(A=F=ye,b=h):F=F.next=ye,St.lanes|=ae,us|=ae;ye=ne.action,$s&&s(h,ye),h=ne.hasEagerState?ne.eagerState:s(h,ye)}else ae={lane:ye,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(A=F=ae,b=h):F=F.next=ae,St.lanes|=ye,us|=ye;ne=ne.next}while(ne!==null&&ne!==i);if(F===null?b=h:F.next=A,!bi(h,t.memoizedState)&&(wn=!0,ge&&(s=Ir,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=F,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function _d(t){var i=bn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);bi(h,i.memoizedState)||(wn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function ng(t,i,s){var l=St,f=bn(),h=Lt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!bi((Qt||f).memoizedState,s);if(b&&(f.memoizedState=s,wn=!0),f=f.queue,bd(sg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Rn!==null&&Rn.memoizedState.tag&1){if(l.flags|=2048,jr(9,{destroy:void 0},ag.bind(null,l,f,s,i),null),sn===null)throw Error(a(349));h||(Ma&127)!==0||ig(l,i,s)}return s}function ig(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=St.updateQueue,i===null?(i=zc(),St.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function ag(t,i,s,l){i.value=s,i.getSnapshot=l,rg(i)&&og(t)}function sg(t,i,s){return s(function(){rg(i)&&og(t)})}function rg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!bi(t,s)}catch{return!0}}function og(t){var i=Hs(t,2);i!==null&&di(i,t,2)}function xd(t){var i=si();if(typeof t=="function"){var s=t;if(t=s(),$s){tt(!0);try{s()}finally{tt(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},i}function lg(t,i,s,l){return t.baseState=s,gd(t,Qt,typeof l=="function"?l:Ea)}function Q1(t,i,s,l,f){if(Gc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,cg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function cg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=P.T,b={};P.T=b;try{var A=s(f,l),F=P.S;F!==null&&F(b,A),ug(t,i,A)}catch(ne){vd(t,i,ne)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=s(f,l),ug(t,i,h)}catch(ne){vd(t,i,ne)}}function ug(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){fg(t,i,l)},function(l){return vd(t,i,l)}):fg(t,i,s)}function fg(t,i,s){i.status="fulfilled",i.value=s,dg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,cg(t,s)))}function vd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,dg(i),i=i.next;while(i!==l)}t.action=null}function dg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function hg(t,i){return i}function pg(t,i){if(Lt){var s=sn.formState;if(s!==null){e:{var l=St;if(Lt){if(rn){t:{for(var f=rn,h=Fi;f.nodeType!==8;){if(!h){f=null;break t}if(f=Hi(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){rn=Hi(f.nextSibling),l=f.data==="F!";break e}}ts(l)}l=!1}l&&(i=s[0])}}return s=si(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hg,lastRenderedState:i},s.queue=l,s=Lg.bind(null,St,l),l.dispatch=s,l=xd(!1),h=Td.bind(null,St,!1,l.queue),l=si(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=Q1.bind(null,St,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function mg(t){var i=bn();return gg(i,Qt,t)}function gg(t,i,s){if(i=gd(t,i,hg)[0],t=Fc(Ea)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=sl(i)}catch(b){throw b===Fr?wc:b}else l=i;i=bn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(St.flags|=2048,jr(9,{destroy:void 0},J1.bind(null,f,s),null)),[l,h,t]}function J1(t,i){t.action=i}function _g(t){var i=bn(),s=Qt;if(s!==null)return gg(i,s,t);bn(),i=i.memoizedState,s=bn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function jr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=St.updateQueue,i===null&&(i=zc(),St.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function xg(){return bn().memoizedState}function Bc(t,i,s,l){var f=si();St.flags|=t,f.memoizedState=jr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Hc(t,i,s,l){var f=bn();l=l===void 0?null:l;var h=f.memoizedState.inst;Qt!==null&&l!==null&&ud(l,Qt.memoizedState.deps)?f.memoizedState=jr(i,h,s,l):(St.flags|=t,f.memoizedState=jr(1|i,h,s,l))}function vg(t,i){Bc(8390656,8,t,i)}function bd(t,i){Hc(2048,8,t,i)}function eb(t){St.flags|=4;var i=St.updateQueue;if(i===null)i=zc(),St.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function bg(t){var i=bn().memoizedState;return eb({ref:i,nextImpl:t}),function(){if((jt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function yg(t,i){return Hc(4,2,t,i)}function Sg(t,i){return Hc(4,4,t,i)}function Mg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Eg(t,i,s){s=s!=null?s.concat([t]):null,Hc(4,4,Mg.bind(null,i,t),s)}function yd(){}function Tg(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&ud(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ag(t,i){var s=bn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&ud(i,l[1]))return l[0];if(l=t(),$s){tt(!0);try{t()}finally{tt(!1)}}return s.memoizedState=[l,i],l}function Sd(t,i,s){return s===void 0||(Ma&1073741824)!==0&&(Dt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=R_(),St.lanes|=t,us|=t,s)}function Rg(t,i,s,l){return bi(s,i)?s:Hr.current!==null?(t=Sd(t,s,l),bi(t,i)||(wn=!0),t):(Ma&42)===0||(Ma&1073741824)!==0&&(Dt&261930)===0?(wn=!0,t.memoizedState=s):(t=R_(),St.lanes|=t,us|=t,i)}function wg(t,i,s,l,f){var h=k.p;k.p=h!==0&&8>h?h:8;var b=P.T,A={};P.T=A,Td(t,!1,i,s);try{var F=f(),ne=P.S;if(ne!==null&&ne(A,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=$1(F,l);rl(t,i,ge,Ai(t))}else rl(t,i,l,Ai(t))}catch(ye){rl(t,i,{then:function(){},status:"rejected",reason:ye},Ai())}finally{k.p=h,b!==null&&A.types!==null&&(b.types=A.types),P.T=b}}function tb(){}function Md(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Cg(t).queue;wg(t,f,i,X,s===null?tb:function(){return Dg(t),s(l)})}function Cg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Dg(t){var i=Cg(t);i.next===null&&(i=t.alternate.memoizedState),rl(t,i.next.queue,{},Ai())}function Ed(){return Wn(Ml)}function Og(){return bn().memoizedState}function Ug(){return bn().memoizedState}function nb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=Ai();t=as(s);var l=ss(i,t,s);l!==null&&(di(l,i,s),tl(l,i,s)),i={cache:Jf()},t.payload=i;return}i=i.return}}function ib(t,i,s){var l=Ai();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Gc(t)?Ng(i,s):(s=Vf(t,i,s,l),s!==null&&(di(s,t,l),Pg(s,i,l)))}function Lg(t,i,s){var l=Ai();rl(t,i,s,l)}function rl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Gc(t))Ng(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,A=h(b,s);if(f.hasEagerState=!0,f.eagerState=A,bi(A,b))return yc(t,i,f,0),sn===null&&bc(),!1}catch{}finally{}if(s=Vf(t,i,f,l),s!==null)return di(s,t,l),Pg(s,i,l),!0}return!1}function Td(t,i,s,l){if(l={lane:2,revertLane:ih(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Gc(t)){if(i)throw Error(a(479))}else i=Vf(t,s,l,2),i!==null&&di(i,t,2)}function Gc(t){var i=t.alternate;return t===St||i!==null&&i===St}function Ng(t,i){Gr=Nc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Pg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,vi(t,s)}}var ol={readContext:Wn,use:Ic,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn};ol.useEffectEvent=pn;var zg={readContext:Wn,use:Ic,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:Wn,useEffect:vg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Bc(4194308,4,Mg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Bc(4194308,4,t,i)},useInsertionEffect:function(t,i){Bc(4,2,t,i)},useMemo:function(t,i){var s=si();i=i===void 0?null:i;var l=t();if($s){tt(!0);try{t()}finally{tt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=si();if(s!==void 0){var f=s(i);if($s){tt(!0);try{s(i)}finally{tt(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=ib.bind(null,St,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:function(t){t=xd(t);var i=t.queue,s=Lg.bind(null,St,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:yd,useDeferredValue:function(t,i){var s=si();return Sd(s,t,i)},useTransition:function(){var t=xd(!1);return t=wg.bind(null,St,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=St,f=si();if(Lt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),sn===null)throw Error(a(349));(Dt&127)!==0||ig(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,vg(sg.bind(null,l,h,t),[t]),l.flags|=2048,jr(9,{destroy:void 0},ag.bind(null,l,h,s,i),null),s},useId:function(){var t=si(),i=sn.identifierPrefix;if(Lt){var s=la,l=oa;s=(l&~(1<<32-We(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Pc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Z1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Ed,useFormState:pg,useActionState:pg,useOptimistic:function(t){var i=si();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Td.bind(null,St,!0,s),s.dispatch=i,[t,i]},useMemoCache:md,useCacheRefresh:function(){return si().memoizedState=nb.bind(null,St)},useEffectEvent:function(t){var i=si(),s={impl:t};return i.memoizedState=s,function(){if((jt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Ad={readContext:Wn,use:Ic,useCallback:Tg,useContext:Wn,useEffect:bd,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Ag,useReducer:Fc,useRef:xg,useState:function(){return Fc(Ea)},useDebugValue:yd,useDeferredValue:function(t,i){var s=bn();return Rg(s,Qt.memoizedState,t,i)},useTransition:function(){var t=Fc(Ea)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:sl(t),i]},useSyncExternalStore:ng,useId:Og,useHostTransitionStatus:Ed,useFormState:mg,useActionState:mg,useOptimistic:function(t,i){var s=bn();return lg(s,Qt,t,i)},useMemoCache:md,useCacheRefresh:Ug};Ad.useEffectEvent=bg;var Ig={readContext:Wn,use:Ic,useCallback:Tg,useContext:Wn,useEffect:bd,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Ag,useReducer:_d,useRef:xg,useState:function(){return _d(Ea)},useDebugValue:yd,useDeferredValue:function(t,i){var s=bn();return Qt===null?Sd(s,t,i):Rg(s,Qt.memoizedState,t,i)},useTransition:function(){var t=_d(Ea)[0],i=bn().memoizedState;return[typeof t=="boolean"?t:sl(t),i]},useSyncExternalStore:ng,useId:Og,useHostTransitionStatus:Ed,useFormState:_g,useActionState:_g,useOptimistic:function(t,i){var s=bn();return Qt!==null?lg(s,Qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:md,useCacheRefresh:Ug};Ig.useEffectEvent=bg;function Rd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wd={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=as(l);f.payload=i,s!=null&&(f.callback=s),i=ss(t,f,l),i!==null&&(di(i,t,l),tl(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=Ai(),f=as(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ss(t,f,l),i!==null&&(di(i,t,l),tl(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=Ai(),l=as(s);l.tag=2,i!=null&&(l.callback=i),i=ss(t,l,s),i!==null&&(di(i,t,s),tl(i,t,s))}};function Fg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!qo(s,l)||!qo(f,h):!0}function Bg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wd.enqueueReplaceState(i,i.state,null)}function Zs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Hg(t){vc(t)}function Gg(t){console.error(t)}function Vg(t){vc(t)}function Vc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function jg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Cd(t,i,s){return s=as(s),s.tag=3,s.payload={element:null},s.callback=function(){Vc(t,i)},s}function kg(t){return t=as(t),t.tag=3,t}function Xg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){jg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){jg(i,s,l),typeof f!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function ab(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Pr(i,s,f,!0),s=Si.current,s!==null){switch(s.tag){case 31:case 13:return Bi===null?eu():s.alternate===null&&mn===0&&(mn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Cc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),eh(t,l,f)),!1;case 22:return s.flags|=65536,l===Cc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),eh(t,l,f)),!1}throw Error(a(435,s.tag))}return eh(t,l,f),eu(),!1}if(Lt)return i=Si.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Yf&&(t=Error(a(422),{cause:l}),Zo(Pi(t,s)))):(l!==Yf&&(i=Error(a(423),{cause:l}),Zo(Pi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Pi(l,s),f=Cd(t.stateNode,l,f),sd(t,f),mn!==4&&(mn=2)),!1;var h=Error(a(520),{cause:l});if(h=Pi(h,s),ml===null?ml=[h]:ml.push(h),mn!==4&&(mn=2),i===null)return!0;l=Pi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Cd(s.stateNode,l,t),sd(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(fs===null||!fs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=kg(f),Xg(f,t,s,l),sd(s,f),!1}s=s.return}while(s!==null);return!1}var Dd=Error(a(461)),wn=!1;function qn(t,i,s,l){i.child=t===null?$m(i,null,s,l):Ys(i,t.child,s,l)}function Wg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var A in l)A!=="ref"&&(b[A]=l[A])}else b=l;return ks(i),l=fd(t,i,s,b,h,f),A=dd(),t!==null&&!wn?(hd(t,i,f),Ta(t,i,f)):(Lt&&A&&Wf(i),i.flags|=1,qn(t,i,l,f),i.child)}function qg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!jf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Yg(t,i,h,l,f)):(t=Mc(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Fd(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:qo,s(b,l)&&t.ref===i.ref)return Ta(t,i,f)}return i.flags|=1,t=va(h,l),t.ref=i.ref,t.return=i,i.child=t}function Yg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(qo(h,l)&&t.ref===i.ref)if(wn=!1,i.pendingProps=l=h,Fd(t,f))(t.flags&131072)!==0&&(wn=!0);else return i.lanes=t.lanes,Ta(t,i,f)}return Od(t,i,s,l,f)}function $g(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Zg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rc(i,h!==null?h.cachePool:null),h!==null?Qm(i,h):od(),Jm(i);else return l=i.lanes=536870912,Zg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Rc(i,h.cachePool),Qm(i,h),os(),i.memoizedState=null):(t!==null&&Rc(i,null),od(),os());return qn(t,i,f,s),i.child}function ll(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Zg(t,i,s,l,f){var h=td();return h=h===null?null:{parent:An._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Rc(i,null),od(),Jm(i),t!==null&&Pr(t,i,l,!0),i.childLanes=f,null}function jc(t,i){return i=Xc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function Kg(t,i,s){return Ys(i,t.child,null,s),t=jc(i,i.pendingProps),t.flags|=2,Mi(i),i.memoizedState=null,t}function sb(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Lt){if(l.mode==="hidden")return t=jc(i,l),i.lanes=536870912,ll(null,t);if(cd(i),(t=rn)?(t=cx(t,Fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=Nm(t),s.return=i,i.child=s,Xn=i,rn=null)):t=null,t===null)throw ts(i);return i.lanes=536870912,null}return jc(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(cd(i),f)if(i.flags&256)i.flags&=-257,i=Kg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(wn||Pr(t,i,s,!1),f=(s&t.childLanes)!==0,wn||f){if(l=sn,l!==null&&(b=aa(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Hs(t,b),di(l,t,b),Dd;eu(),i=Kg(t,i,s)}else t=h.treeContext,rn=Hi(b.nextSibling),Xn=i,Lt=!0,es=null,Fi=!1,t!==null&&Im(i,t),i=jc(i,l),i.flags|=4096;return i}return t=va(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function kc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Od(t,i,s,l,f){return ks(i),s=fd(t,i,s,l,void 0,f),l=dd(),t!==null&&!wn?(hd(t,i,f),Ta(t,i,f)):(Lt&&l&&Wf(i),i.flags|=1,qn(t,i,s,f),i.child)}function Qg(t,i,s,l,f,h){return ks(i),i.updateQueue=null,s=tg(i,l,s,f),eg(t),l=dd(),t!==null&&!wn?(hd(t,i,h),Ta(t,i,h)):(Lt&&l&&Wf(i),i.flags|=1,qn(t,i,s,h),i.child)}function Jg(t,i,s,l,f){if(ks(i),i.stateNode===null){var h=Or,b=s.contextType;typeof b=="object"&&b!==null&&(h=Wn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wd,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},id(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?Wn(b):Or,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Rd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&wd.enqueueReplaceState(h,h.state,null),il(i,l,h,f),nl(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var A=i.memoizedProps,F=Zs(s,A);h.props=F;var ne=h.context,ge=s.contextType;b=Or,typeof ge=="object"&&ge!==null&&(b=Wn(ge));var ye=s.getDerivedStateFromProps;ge=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||ne!==b)&&Bg(i,h,l,b),is=!1;var ae=i.memoizedState;h.state=ae,il(i,l,h,f),nl(),ne=i.memoizedState,A||ae!==ne||is?(typeof ye=="function"&&(Rd(i,s,ye,l),ne=i.memoizedState),(F=is||Fg(i,s,F,l,ae,ne,b))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=ne),h.props=l,h.state=ne,h.context=b,l=F):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,ad(t,i),b=i.memoizedProps,ge=Zs(s,b),h.props=ge,ye=i.pendingProps,ae=h.context,ne=s.contextType,F=Or,typeof ne=="object"&&ne!==null&&(F=Wn(ne)),A=s.getDerivedStateFromProps,(ne=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==ye||ae!==F)&&Bg(i,h,l,F),is=!1,ae=i.memoizedState,h.state=ae,il(i,l,h,f),nl();var le=i.memoizedState;b!==ye||ae!==le||is||t!==null&&t.dependencies!==null&&Tc(t.dependencies)?(typeof A=="function"&&(Rd(i,s,A,l),le=i.memoizedState),(ge=is||Fg(i,s,ge,l,ae,le,F)||t!==null&&t.dependencies!==null&&Tc(t.dependencies))?(ne||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,le,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,le,F)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=le),h.props=l,h.state=le,h.context=F,l=ge):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,kc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Ys(i,t.child,null,f),i.child=Ys(i,null,s,f)):qn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=Ta(t,i,f),t}function e_(t,i,s,l){return Vs(),i.flags|=256,qn(t,i,s,l),i.child}var Ud={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ld(t){return{baseLanes:t,cachePool:jm()}}function Nd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ti),t}function t_(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(vn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Lt){if(f?rs(i):os(),(t=rn)?(t=cx(t,Fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ja!==null?{id:oa,overflow:la}:null,retryLane:536870912,hydrationErrors:null},s=Nm(t),s.return=i,i.child=s,Xn=i,rn=null)):t=null,t===null)throw ts(i);return gh(t)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,f?(os(),f=i.mode,A=Xc({mode:"hidden",children:A},f),l=Gs(l,f,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Ld(s),l.childLanes=Nd(t,b,s),i.memoizedState=Ud,ll(null,l)):(rs(i),Pd(i,A))}var F=t.memoizedState;if(F!==null&&(A=F.dehydrated,A!==null)){if(h)i.flags&256?(rs(i),i.flags&=-257,i=zd(t,i,s)):i.memoizedState!==null?(os(),i.child=t.child,i.flags|=128,i=null):(os(),A=l.fallback,f=i.mode,l=Xc({mode:"visible",children:l.children},f),A=Gs(A,f,s,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Ys(i,t.child,null,s),l=i.child,l.memoizedState=Ld(s),l.childLanes=Nd(t,b,s),i.memoizedState=Ud,i=ll(null,l));else if(rs(i),gh(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var ne=b.dgst;b=ne,l=Error(a(419)),l.stack="",l.digest=b,Zo({value:l,source:null,stack:null}),i=zd(t,i,s)}else if(wn||Pr(t,i,s,!1),b=(s&t.childLanes)!==0,wn||b){if(b=sn,b!==null&&(l=aa(b,s),l!==0&&l!==F.retryLane))throw F.retryLane=l,Hs(t,l),di(b,t,l),Dd;mh(A)||eu(),i=zd(t,i,s)}else mh(A)?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,rn=Hi(A.nextSibling),Xn=i,Lt=!0,es=null,Fi=!1,t!==null&&Im(i,t),i=Pd(i,l.children),i.flags|=4096);return i}return f?(os(),A=l.fallback,f=i.mode,F=t.child,ne=F.sibling,l=va(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,ne!==null?A=va(ne,A):(A=Gs(A,f,s,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,ll(null,l),l=i.child,A=t.child.memoizedState,A===null?A=Ld(s):(f=A.cachePool,f!==null?(F=An._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=jm(),A={baseLanes:A.baseLanes|s,cachePool:f}),l.memoizedState=A,l.childLanes=Nd(t,b,s),i.memoizedState=Ud,ll(t.child,l)):(rs(i),s=t.child,t=s.sibling,s=va(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Pd(t,i){return i=Xc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Xc(t,i){return t=yi(22,t,null,i),t.lanes=0,t}function zd(t,i,s){return Ys(i,t.child,null,s),t=Pd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function n_(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Kf(t.return,i,s)}function Id(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function i_(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=vn.current,A=(b&2)!==0;if(A?(b=b&1|2,i.flags|=128):b&=1,Se(vn,b),qn(t,i,l,s),l=Lt?$o:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n_(t,s,i);else if(t.tag===19)n_(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Lc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Id(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Lc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Id(i,!0,s,null,h,l);break;case"together":Id(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Ta(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),us|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Pr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=va(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=va(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Fd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Tc(t)))}function rb(t,i,s){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),ns(i,An,t.memoizedState.cache),Vs();break;case 27:case 5:Ye(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:ns(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,cd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(rs(i),i.flags|=128,null):(s&i.child.childLanes)!==0?t_(t,i,s):(rs(i),t=Ta(t,i,s),t!==null?t.sibling:null);rs(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Pr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return i_(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(vn,vn.current),l)break;return null;case 22:return i.lanes=0,$g(t,i,s,i.pendingProps);case 24:ns(i,An,t.memoizedState.cache)}return Ta(t,i,s)}function a_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)wn=!0;else{if(!Fd(t,s)&&(i.flags&128)===0)return wn=!1,rb(t,i,s);wn=(t.flags&131072)!==0}else wn=!1,Lt&&(i.flags&1048576)!==0&&zm(i,$o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ws(i.elementType),i.type=t,typeof t=="function")jf(t)?(l=Zs(t,l),i.tag=1,i=Jg(null,i,t,l,s)):(i.tag=0,i=Od(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===I){i.tag=11,i=Wg(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=qg(null,i,t,l,s);break e}}throw i=xe(t)||t,Error(a(306,i,""))}}return i;case 0:return Od(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Zs(l,i.pendingProps),Jg(t,i,l,f,s);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,ad(t,i),il(i,l,null,s);var b=i.memoizedState;if(l=b.cache,ns(i,An,l),l!==h.cache&&Qf(i,[An],s,!0),nl(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=e_(t,i,l,s);break e}else if(l!==f){f=Pi(Error(a(424)),i),Zo(f),i=e_(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(rn=Hi(t.firstChild),Xn=i,Lt=!0,es=null,Fi=!0,s=$m(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Vs(),l===f){i=Ta(t,i,s);break e}qn(t,i,l,s)}i=i.child}return i;case 26:return kc(t,i),t===null?(s=mx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Lt||(s=i.type,t=i.pendingProps,l=ou(Q.current).createElement(s),l[un]=i,l[xn]=t,Yn(l,s,t),J(l),i.stateNode=l):i.memoizedState=mx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Ye(i),t===null&&Lt&&(l=i.stateNode=dx(i.type,i.pendingProps,Q.current),Xn=i,Fi=!0,f=rn,ms(i.type)?(_h=f,rn=Hi(l.firstChild)):rn=f),qn(t,i,i.pendingProps.children,s),kc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Lt&&((f=l=rn)&&(l=zb(l,i.type,i.pendingProps,Fi),l!==null?(i.stateNode=l,Xn=i,rn=Hi(l.firstChild),Fi=!1,f=!0):f=!1),f||ts(i)),Ye(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,dh(f,h)?l=null:b!==null&&dh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=fd(t,i,K1,null,null,s),Ml._currentValue=f),kc(t,i),qn(t,i,l,s),i.child;case 6:return t===null&&Lt&&((t=s=rn)&&(s=Ib(s,i.pendingProps,Fi),s!==null?(i.stateNode=s,Xn=i,rn=null,t=!0):t=!1),t||ts(i)),null;case 13:return t_(t,i,s);case 4:return Ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ys(i,null,l,s):qn(t,i,l,s),i.child;case 11:return Wg(t,i,i.type,i.pendingProps,s);case 7:return qn(t,i,i.pendingProps,s),i.child;case 8:return qn(t,i,i.pendingProps.children,s),i.child;case 12:return qn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,ns(i,i.type,l.value),qn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,ks(i),f=Wn(f),l=l(f),i.flags|=1,qn(t,i,l,s),i.child;case 14:return qg(t,i,i.type,i.pendingProps,s);case 15:return Yg(t,i,i.type,i.pendingProps,s);case 19:return i_(t,i,s);case 31:return sb(t,i,s);case 22:return $g(t,i,s,i.pendingProps);case 24:return ks(i),l=Wn(An),t===null?(f=td(),f===null&&(f=sn,h=Jf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},id(i),ns(i,An,f)):((t.lanes&s)!==0&&(ad(t,i),il(i,null,null,s),nl()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),ns(i,An,l)):(l=h.cache,ns(i,An,l),l!==f.cache&&Qf(i,[An],s,!0))),qn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Aa(t){t.flags|=4}function Bd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(O_())t.flags|=8192;else throw qs=Cc,nd}else t.flags&=-16777217}function s_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!bx(i))if(O_())t.flags|=8192;else throw qs=Cc,nd}function Wc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Ge():536870912,t.lanes|=i,qr|=i)}function cl(t,i){if(!Lt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function on(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function ob(t,i,s){var l=i.pendingProps;switch(qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(i),null;case 1:return on(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Sa(An),Ze(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Nr(i)?Aa(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$f())),on(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Aa(i),h!==null?(on(i),s_(i,h)):(on(i),Bd(i,f,null,l,s))):h?h!==t.memoizedState?(Aa(i),on(i),s_(i,h)):(on(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Aa(i),on(i),Bd(i,f,t,l,s)),null;case 27:if(gt(i),s=Q.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return on(i),null}t=Ee.current,Nr(i)?Fm(i):(t=dx(f,l,s),i.stateNode=t,Aa(i))}return on(i),null;case 5:if(gt(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return on(i),null}if(h=Ee.current,Nr(i))Fm(i);else{var b=ou(Q.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[un]=i,h[xn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Yn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Aa(i)}}return on(i),Bd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Aa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=Q.current,Nr(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Xn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[un]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||tx(t.nodeValue,s)),t||ts(i,!0)}else t=ou(t).createTextNode(l),t[un]=i,i.stateNode=t}return on(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Nr(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[un]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;on(i),t=!1}else s=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Mi(i),i):(Mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return on(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Nr(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[un]=i}else Vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;on(i),f=!1}else f=$f(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Mi(i),i):(Mi(i),null)}return Mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Wc(i,i.updateQueue),on(i),null);case 4:return Ze(),t===null&&oh(i.stateNode.containerInfo),on(i),null;case 10:return Sa(i.type),on(i),null;case 19:if(ie(vn),l=i.memoizedState,l===null)return on(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)cl(l,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Lc(t),h!==null){for(i.flags|=128,cl(l,!1),t=h.updateQueue,i.updateQueue=t,Wc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Lm(s,t),s=s.sibling;return Se(vn,vn.current&1|2),Lt&&ba(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&T()>Kc&&(i.flags|=128,f=!0,cl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Lc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Wc(i,t),cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Lt)return on(i),null}else 2*T()-l.renderingStartTime>Kc&&s!==536870912&&(i.flags|=128,f=!0,cl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=T(),t.sibling=null,s=vn.current,Se(vn,f?s&1|2:s&1),Lt&&ba(i,l.treeForkCount),t):(on(i),null);case 22:case 23:return Mi(i),ld(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(on(i),i.subtreeFlags&6&&(i.flags|=8192)):on(i),s=i.updateQueue,s!==null&&Wc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Xs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Sa(An),on(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function lb(t,i){switch(qf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Sa(An),Ze(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return gt(i),null;case 31:if(i.memoizedState!==null){if(Mi(i),i.alternate===null)throw Error(a(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Mi(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));Vs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(vn),null;case 4:return Ze(),null;case 10:return Sa(i.type),null;case 22:case 23:return Mi(i),ld(),t!==null&&ie(Xs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Sa(An),null;case 25:return null;default:return null}}function r_(t,i){switch(qf(i),i.tag){case 3:Sa(An),Ze();break;case 26:case 27:case 5:gt(i);break;case 4:Ze();break;case 31:i.memoizedState!==null&&Mi(i);break;case 13:Mi(i);break;case 19:ie(vn);break;case 10:Sa(i.type);break;case 22:case 23:Mi(i),ld(),t!==null&&ie(Xs);break;case 24:Sa(An)}}function ul(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(A){$t(i,i.return,A)}}function ls(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,f=i;var F=s,ne=A;try{ne()}catch(ge){$t(f,F,ge)}}}l=l.next}while(l!==h)}}catch(ge){$t(i,i.return,ge)}}function o_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Km(i,s)}catch(l){$t(t,t.return,l)}}}function l_(t,i,s){s.props=Zs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){$t(t,i,l)}}function fl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){$t(t,i,f)}}function ca(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){$t(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){$t(t,i,f)}else s.current=null}function c_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){$t(t,t.return,f)}}function Hd(t,i,s){try{var l=t.stateNode;Db(l,t.type,s,i),l[xn]=i}catch(f){$t(t,t.return,f)}}function u_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ms(t.type)||t.tag===4}function Gd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||u_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ms(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Li));else if(l!==4&&(l===27&&ms(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Vd(t,i,s),t=t.sibling;t!==null;)Vd(t,i,s),t=t.sibling}function qc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&ms(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(qc(t,i,s),t=t.sibling;t!==null;)qc(t,i,s),t=t.sibling}function f_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Yn(i,l,s),i[un]=t,i[xn]=s}catch(h){$t(t,t.return,h)}}var Ra=!1,Cn=!1,jd=!1,d_=typeof WeakSet=="function"?WeakSet:Set,In=null;function cb(t,i){if(t=t.containerInfo,uh=pu,t=Em(t),zf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,A=-1,F=-1,ne=0,ge=0,ye=t,ae=null;t:for(;;){for(var le;ye!==s||f!==0&&ye.nodeType!==3||(A=b+f),ye!==h||l!==0&&ye.nodeType!==3||(F=b+l),ye.nodeType===3&&(b+=ye.nodeValue.length),(le=ye.firstChild)!==null;)ae=ye,ye=le;for(;;){if(ye===t)break t;if(ae===s&&++ne===f&&(A=b),ae===h&&++ge===l&&(F=b),(le=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=le}s=A===-1||F===-1?null:{start:A,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(fh={focusedElem:t,selectionRange:s},pu=!1,In=i;In!==null;)if(i=In,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,In=t;else for(;In!==null;){switch(i=In,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Ke=Zs(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(ut){$t(s,s.return,ut)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ph(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ph(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,In=t;break}In=i.return}}function h_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ca(t,s),l&4&&ul(5,s);break;case 1:if(Ca(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){$t(s,s.return,b)}else{var f=Zs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){$t(s,s.return,b)}}l&64&&o_(s),l&512&&fl(s,s.return);break;case 3:if(Ca(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Km(t,i)}catch(b){$t(s,s.return,b)}}break;case 27:i===null&&l&4&&f_(s);case 26:case 5:Ca(t,s),i===null&&l&4&&c_(s),l&512&&fl(s,s.return);break;case 12:Ca(t,s);break;case 31:Ca(t,s),l&4&&g_(t,s);break;case 13:Ca(t,s),l&4&&__(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=xb.bind(null,s),Fb(t,s))));break;case 22:if(l=s.memoizedState!==null||Ra,!l){i=i!==null&&i.memoizedState!==null||Cn,f=Ra;var h=Cn;Ra=l,(Cn=i)&&!h?Da(t,s,(s.subtreeFlags&8772)!==0):Ca(t,s),Ra=f,Cn=h}break;case 30:break;default:Ca(t,s)}}function p_(t){var i=t.alternate;i!==null&&(t.alternate=null,p_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ra(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var fn=null,li=!1;function wa(t,i,s){for(s=s.child;s!==null;)m_(t,i,s),s=s.sibling}function m_(t,i,s){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Ae,s)}catch{}switch(s.tag){case 26:Cn||ca(s,i),wa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Cn||ca(s,i);var l=fn,f=li;ms(s.type)&&(fn=s.stateNode,li=!1),wa(t,i,s),bl(s.stateNode),fn=l,li=f;break;case 5:Cn||ca(s,i);case 6:if(l=fn,f=li,fn=null,wa(t,i,s),fn=l,li=f,fn!==null)if(li)try{(fn.nodeType===9?fn.body:fn.nodeName==="HTML"?fn.ownerDocument.body:fn).removeChild(s.stateNode)}catch(h){$t(s,i,h)}else try{fn.removeChild(s.stateNode)}catch(h){$t(s,i,h)}break;case 18:fn!==null&&(li?(t=fn,ox(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),to(t)):ox(fn,s.stateNode));break;case 4:l=fn,f=li,fn=s.stateNode.containerInfo,li=!0,wa(t,i,s),fn=l,li=f;break;case 0:case 11:case 14:case 15:ls(2,s,i),Cn||ls(4,s,i),wa(t,i,s);break;case 1:Cn||(ca(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&l_(s,i,l)),wa(t,i,s);break;case 21:wa(t,i,s);break;case 22:Cn=(l=Cn)||s.memoizedState!==null,wa(t,i,s),Cn=l;break;default:wa(t,i,s)}}function g_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{to(t)}catch(s){$t(i,i.return,s)}}}function __(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{to(t)}catch(s){$t(i,i.return,s)}}function ub(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new d_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new d_),i;default:throw Error(a(435,t.tag))}}function Yc(t,i){var s=ub(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=vb.bind(null,t,l);l.then(f,f)}})}function ci(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(ms(A.type)){fn=A.stateNode,li=!1;break e}break;case 5:fn=A.stateNode,li=!1;break e;case 3:case 4:fn=A.stateNode.containerInfo,li=!0;break e}A=A.return}if(fn===null)throw Error(a(160));m_(h,b,f),fn=null,li=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)x_(i,t),i=i.sibling}var $i=null;function x_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ci(i,t),ui(t),l&4&&(ls(3,t,t.return),ul(3,t),ls(5,t,t.return));break;case 1:ci(i,t),ui(t),l&512&&(Cn||s===null||ca(s,s.return)),l&64&&Ra&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=$i;if(ci(i,t),ui(t),l&512&&(Cn||s===null||ca(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[sa]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Yn(h,l,s),h[un]=t,J(h),l=h;break e;case"link":var b=xx("link","href",f).get(l+(s.href||""));if(b){for(var A=0;A<b.length;A++)if(h=b[A],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(A,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=xx("meta","content",f).get(l+(s.content||""))){for(A=0;A<b.length;A++)if(h=b[A],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(A,1);break t}}h=f.createElement(l),Yn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[un]=t,J(h),l=h}t.stateNode=l}else vx(f,t.type,t.stateNode);else t.stateNode=_x(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?vx(f,t.type,t.stateNode):_x(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Hd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ci(i,t),ui(t),l&512&&(Cn||s===null||ca(s,s.return)),s!==null&&l&4&&Hd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ci(i,t),ui(t),l&512&&(Cn||s===null||ca(s,s.return)),t.flags&32){f=t.stateNode;try{kn(f,"")}catch(Ke){$t(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Hd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(jd=!0);break;case 6:if(ci(i,t),ui(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){$t(t,t.return,Ke)}}break;case 3:if(uu=null,f=$i,$i=lu(i.containerInfo),ci(i,t),$i=f,ui(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{to(i.containerInfo)}catch(Ke){$t(t,t.return,Ke)}jd&&(jd=!1,v_(t));break;case 4:l=$i,$i=lu(t.stateNode.containerInfo),ci(i,t),ui(t),$i=l;break;case 12:ci(i,t),ui(t);break;case 31:ci(i,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Yc(t,l)));break;case 13:ci(i,t),ui(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zc=T()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Yc(t,l)));break;case 22:f=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,ne=Ra,ge=Cn;if(Ra=ne||f,Cn=ge||F,ci(i,t),Cn=ge,Ra=ne,ui(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||Ra||Cn||Ks(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(h=F.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=F.stateNode;var ye=F.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;A.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ke){$t(F,F.return,Ke)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Ke){$t(F,F.return,Ke)}}}else if(i.tag===18){if(s===null){F=i;try{var le=F.stateNode;f?lx(le,!0):lx(F.stateNode,!1)}catch(Ke){$t(F,F.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Yc(t,s))));break;case 19:ci(i,t),ui(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Yc(t,l)));break;case 30:break;case 21:break;default:ci(i,t),ui(t)}}function ui(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(u_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=Gd(t);qc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(kn(b,""),s.flags&=-33);var A=Gd(t);qc(t,A,b);break;case 3:case 4:var F=s.stateNode.containerInfo,ne=Gd(t);Vd(t,ne,F);break;default:throw Error(a(161))}}catch(ge){$t(t,t.return,ge)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;v_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ca(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)h_(t,i.alternate,i),i=i.sibling}function Ks(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:ls(4,i,i.return),Ks(i);break;case 1:ca(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&l_(i,i.return,s),Ks(i);break;case 27:bl(i.stateNode);case 26:case 5:ca(i,i.return),Ks(i);break;case 22:i.memoizedState===null&&Ks(i);break;case 30:Ks(i);break;default:Ks(i)}t=t.sibling}}function Da(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Da(f,h,s),ul(4,h);break;case 1:if(Da(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(ne){$t(l,l.return,ne)}if(l=h,f=l.updateQueue,f!==null){var A=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)Zm(F[f],A)}catch(ne){$t(l,l.return,ne)}}s&&b&64&&o_(h),fl(h,h.return);break;case 27:f_(h);case 26:case 5:Da(f,h,s),s&&l===null&&b&4&&c_(h),fl(h,h.return);break;case 12:Da(f,h,s);break;case 31:Da(f,h,s),s&&b&4&&g_(f,h);break;case 13:Da(f,h,s),s&&b&4&&__(f,h);break;case 22:h.memoizedState===null&&Da(f,h,s),fl(h,h.return);break;case 30:break;default:Da(f,h,s)}i=i.sibling}}function kd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&Ko(s))}function Xd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ko(t))}function Zi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)b_(t,i,s,l),i=i.sibling}function b_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Zi(t,i,s,l),f&2048&&ul(9,i);break;case 1:Zi(t,i,s,l);break;case 3:Zi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Ko(t)));break;case 12:if(f&2048){Zi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,A=h.onPostCommit;typeof A=="function"&&A(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){$t(i,i.return,F)}}else Zi(t,i,s,l);break;case 31:Zi(t,i,s,l);break;case 13:Zi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?Zi(t,i,s,l):dl(t,i):h._visibility&2?Zi(t,i,s,l):(h._visibility|=2,kr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&kd(b,i);break;case 24:Zi(t,i,s,l),f&2048&&Xd(i.alternate,i);break;default:Zi(t,i,s,l)}}function kr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,A=s,F=l,ne=b.flags;switch(b.tag){case 0:case 11:case 15:kr(h,b,A,F,f),ul(8,b);break;case 23:break;case 22:var ge=b.stateNode;b.memoizedState!==null?ge._visibility&2?kr(h,b,A,F,f):dl(h,b):(ge._visibility|=2,kr(h,b,A,F,f)),f&&ne&2048&&kd(b.alternate,b);break;case 24:kr(h,b,A,F,f),f&&ne&2048&&Xd(b.alternate,b);break;default:kr(h,b,A,F,f)}i=i.sibling}}function dl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:dl(s,l),f&2048&&kd(l.alternate,l);break;case 24:dl(s,l),f&2048&&Xd(l.alternate,l);break;default:dl(s,l)}i=i.sibling}}var hl=8192;function Xr(t,i,s){if(t.subtreeFlags&hl)for(t=t.child;t!==null;)y_(t,i,s),t=t.sibling}function y_(t,i,s){switch(t.tag){case 26:Xr(t,i,s),t.flags&hl&&t.memoizedState!==null&&Zb(s,$i,t.memoizedState,t.memoizedProps);break;case 5:Xr(t,i,s);break;case 3:case 4:var l=$i;$i=lu(t.stateNode.containerInfo),Xr(t,i,s),$i=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=hl,hl=16777216,Xr(t,i,s),hl=l):Xr(t,i,s));break;default:Xr(t,i,s)}}function S_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function pl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,E_(l,t)}S_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M_(t),t=t.sibling}function M_(t){switch(t.tag){case 0:case 11:case 15:pl(t),t.flags&2048&&ls(9,t,t.return);break;case 3:pl(t);break;case 12:pl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,$c(t)):pl(t);break;default:pl(t)}}function $c(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,E_(l,t)}S_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:ls(8,i,i.return),$c(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,$c(i));break;default:$c(i)}t=t.sibling}}function E_(t,i){for(;In!==null;){var s=In;switch(s.tag){case 0:case 11:case 15:ls(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,In=l;else e:for(s=t;In!==null;){l=In;var f=l.sibling,h=l.return;if(p_(l),l===s){In=null;break e}if(f!==null){f.return=h,In=f;break e}In=h}}}var fb={getCacheForType:function(t){var i=Wn(An),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Wn(An).controller.signal}},db=typeof WeakMap=="function"?WeakMap:Map,jt=0,sn=null,Rt=null,Dt=0,Yt=0,Ei=null,cs=!1,Wr=!1,Wd=!1,Oa=0,mn=0,us=0,Qs=0,qd=0,Ti=0,qr=0,ml=null,fi=null,Yd=!1,Zc=0,T_=0,Kc=1/0,Qc=null,fs=null,On=0,ds=null,Yr=null,Ua=0,$d=0,Zd=null,A_=null,gl=0,Kd=null;function Ai(){return(jt&2)!==0&&Dt!==0?Dt&-Dt:P.T!==null?ih():ga()}function R_(){if(Ti===0)if((Dt&536870912)===0||Lt){var t=Ue;Ue<<=1,(Ue&3932160)===0&&(Ue=262144),Ti=t}else Ti=536870912;return t=Si.current,t!==null&&(t.flags|=32),Ti}function di(t,i,s){(t===sn&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)&&($r(t,0),hs(t,Dt,Ti,!1)),nn(t,s),((jt&2)===0||t!==sn)&&(t===sn&&((jt&2)===0&&(Qs|=s),mn===4&&hs(t,Dt,Ti,!1)),ua(t))}function w_(t,i,s){if((jt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||Xe(t,i),f=l?mb(t,i):Jd(t,i,!0),h=l;do{if(f===0){Wr&&!l&&hs(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!hb(s)){f=Jd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var A=t;f=ml;var F=A.current.memoizedState.isDehydrated;if(F&&($r(A,b).flags|=256),b=Jd(A,b,!1),b!==2){if(Wd&&!F){A.errorRecoveryDisabledLanes|=h,Qs|=h,f=4;break e}h=fi,fi=f,h!==null&&(fi===null?fi=h:fi.push.apply(fi,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){$r(t,0),hs(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:hs(l,i,Ti,!cs);break e;case 2:fi=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Zc+300-T(),10<f)){if(hs(l,i,Ti,!cs),be(l,0,!0)!==0)break e;Ua=i,l.timeoutHandle=sx(C_.bind(null,l,s,fi,Qc,Yd,i,Ti,Qs,qr,cs,h,"Throttled",-0,0),f);break e}C_(l,s,fi,Qc,Yd,i,Ti,Qs,qr,cs,h,null,-0,0)}}break}while(!0);ua(t)}function C_(t,i,s,l,f,h,b,A,F,ne,ge,ye,ae,le){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},y_(i,h,ye);var Ke=(h&62914560)===h?Zc-T():(h&4194048)===h?T_-T():0;if(Ke=Kb(ye,Ke),Ke!==null){Ua=h,t.cancelPendingCommit=Ke(I_.bind(null,t,i,h,s,l,f,b,A,F,ge,ye,null,ae,le)),hs(t,h,b,!ne);return}}I_(t,i,h,s,l,f,b,A,F)}function hb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!bi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hs(t,i,s,l){i&=~qd,i&=~Qs,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-We(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&ti(t,s,i)}function Jc(){return(jt&6)===0?(_l(0),!1):!0}function Qd(){if(Rt!==null){if(Yt===0)var t=Rt.return;else t=Rt,ya=js=null,pd(t),Br=null,Jo=0,t=Rt;for(;t!==null;)r_(t.alternate,t),t=t.return;Rt=null}}function $r(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Lb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ua=0,Qd(),sn=t,Rt=s=va(t.current,null),Dt=i,Yt=0,Ei=null,cs=!1,Wr=Xe(t,i),Wd=!1,qr=Ti=qd=Qs=us=mn=0,fi=ml=null,Yd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-We(l),h=1<<f;i|=t[f],l&=~h}return Oa=i,bc(),s}function D_(t,i){St=null,P.H=ol,i===Fr||i===wc?(i=Wm(),Yt=3):i===nd?(i=Wm(),Yt=4):Yt=i===Dd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ei=i,Rt===null&&(mn=1,Vc(t,Pi(i,t.current)))}function O_(){var t=Si.current;return t===null?!0:(Dt&4194048)===Dt?Bi===null:(Dt&62914560)===Dt||(Dt&536870912)!==0?t===Bi:!1}function U_(){var t=P.H;return P.H=ol,t===null?ol:t}function L_(){var t=P.A;return P.A=fb,t}function eu(){mn=4,cs||(Dt&4194048)!==Dt&&Si.current!==null||(Wr=!0),(us&134217727)===0&&(Qs&134217727)===0||sn===null||hs(sn,Dt,Ti,!1)}function Jd(t,i,s){var l=jt;jt|=2;var f=U_(),h=L_();(sn!==t||Dt!==i)&&(Qc=null,$r(t,i)),i=!1;var b=mn;e:do try{if(Yt!==0&&Rt!==null){var A=Rt,F=Ei;switch(Yt){case 8:Qd(),b=6;break e;case 3:case 2:case 9:case 6:Si.current===null&&(i=!0);var ne=Yt;if(Yt=0,Ei=null,Zr(t,A,F,ne),s&&Wr){b=0;break e}break;default:ne=Yt,Yt=0,Ei=null,Zr(t,A,F,ne)}}pb(),b=mn;break}catch(ge){D_(t,ge)}while(!0);return i&&t.shellSuspendCounter++,ya=js=null,jt=l,P.H=f,P.A=h,Rt===null&&(sn=null,Dt=0,bc()),b}function pb(){for(;Rt!==null;)N_(Rt)}function mb(t,i){var s=jt;jt|=2;var l=U_(),f=L_();sn!==t||Dt!==i?(Qc=null,Kc=T()+500,$r(t,i)):Wr=Xe(t,i);e:do try{if(Yt!==0&&Rt!==null){i=Rt;var h=Ei;t:switch(Yt){case 1:Yt=0,Ei=null,Zr(t,i,h,1);break;case 2:case 9:if(km(h)){Yt=0,Ei=null,P_(i);break}i=function(){Yt!==2&&Yt!==9||sn!==t||(Yt=7),ua(t)},h.then(i,i);break e;case 3:Yt=7;break e;case 4:Yt=5;break e;case 7:km(h)?(Yt=0,Ei=null,P_(i)):(Yt=0,Ei=null,Zr(t,i,h,7));break;case 5:var b=null;switch(Rt.tag){case 26:b=Rt.memoizedState;case 5:case 27:var A=Rt;if(b?bx(b):A.stateNode.complete){Yt=0,Ei=null;var F=A.sibling;if(F!==null)Rt=F;else{var ne=A.return;ne!==null?(Rt=ne,tu(ne)):Rt=null}break t}}Yt=0,Ei=null,Zr(t,i,h,5);break;case 6:Yt=0,Ei=null,Zr(t,i,h,6);break;case 8:Qd(),mn=6;break e;default:throw Error(a(462))}}gb();break}catch(ge){D_(t,ge)}while(!0);return ya=js=null,P.H=l,P.A=f,jt=s,Rt!==null?0:(sn=null,Dt=0,bc(),mn)}function gb(){for(;Rt!==null&&!pt();)N_(Rt)}function N_(t){var i=a_(t.alternate,t,Oa);t.memoizedProps=t.pendingProps,i===null?tu(t):Rt=i}function P_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Qg(s,i,i.pendingProps,i.type,void 0,Dt);break;case 11:i=Qg(s,i,i.pendingProps,i.type.render,i.ref,Dt);break;case 5:pd(i);default:r_(s,i),i=Rt=Lm(i,Oa),i=a_(s,i,Oa)}t.memoizedProps=t.pendingProps,i===null?tu(t):Rt=i}function Zr(t,i,s,l){ya=js=null,pd(i),Br=null,Jo=0;var f=i.return;try{if(ab(t,f,i,s,Dt)){mn=1,Vc(t,Pi(s,t.current)),Rt=null;return}}catch(h){if(f!==null)throw Rt=f,h;mn=1,Vc(t,Pi(s,t.current)),Rt=null;return}i.flags&32768?(Lt||l===1?t=!0:Wr||(Dt&536870912)!==0?t=!1:(cs=t=!0,(l===2||l===9||l===3||l===6)&&(l=Si.current,l!==null&&l.tag===13&&(l.flags|=16384))),z_(i,t)):tu(i)}function tu(t){var i=t;do{if((i.flags&32768)!==0){z_(i,cs);return}t=i.return;var s=ob(i.alternate,i,Oa);if(s!==null){Rt=s;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=t}while(i!==null);mn===0&&(mn=5)}function z_(t,i){do{var s=lb(t.alternate,t);if(s!==null){s.flags&=32767,Rt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Rt=t;return}Rt=t=s}while(t!==null);mn=6,Rt=null}function I_(t,i,s,l,f,h,b,A,F){t.cancelPendingCommit=null;do nu();while(On!==0);if((jt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Gf,qt(t,s,h,b,A,F),t===sn&&(Rt=sn=null,Dt=0),Yr=i,ds=t,Ua=s,$d=h,Zd=f,A_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,bb(fe,function(){return V_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=k.p,k.p=2,b=jt,jt|=4;try{cb(t,i,s)}finally{jt=b,k.p=f,P.T=l}}On=1,F_(),B_(),H_()}}function F_(){if(On===1){On=0;var t=ds,i=Yr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=k.p;k.p=2;var f=jt;jt|=4;try{x_(i,t);var h=fh,b=Em(t.containerInfo),A=h.focusedElem,F=h.selectionRange;if(b!==A&&A&&A.ownerDocument&&Mm(A.ownerDocument.documentElement,A)){if(F!==null&&zf(A)){var ne=F.start,ge=F.end;if(ge===void 0&&(ge=ne),"selectionStart"in A)A.selectionStart=ne,A.selectionEnd=Math.min(ge,A.value.length);else{var ye=A.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var le=ae.getSelection(),Ke=A.textContent.length,ut=Math.min(F.start,Ke),en=F.end===void 0?ut:Math.min(F.end,Ke);!le.extend&&ut>en&&(b=en,en=ut,ut=b);var q=Sm(A,ut),j=Sm(A,en);if(q&&j&&(le.rangeCount!==1||le.anchorNode!==q.node||le.anchorOffset!==q.offset||le.focusNode!==j.node||le.focusOffset!==j.offset)){var te=ye.createRange();te.setStart(q.node,q.offset),le.removeAllRanges(),ut>en?(le.addRange(te),le.extend(j.node,j.offset)):(te.setEnd(j.node,j.offset),le.addRange(te))}}}}for(ye=[],le=A;le=le.parentNode;)le.nodeType===1&&ye.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ye.length;A++){var _e=ye[A];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}pu=!!uh,fh=uh=null}finally{jt=f,k.p=l,P.T=s}}t.current=i,On=2}}function B_(){if(On===2){On=0;var t=ds,i=Yr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=k.p;k.p=2;var f=jt;jt|=4;try{h_(t,i.alternate,i)}finally{jt=f,k.p=l,P.T=s}}On=3}}function H_(){if(On===4||On===3){On=0,U();var t=ds,i=Yr,s=Ua,l=A_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?On=5:(On=0,Yr=ds=null,G_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(fs=null),qi(s),i=i.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=k.p,k.p=2,P.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var A=l[b];h(A.value,{componentStack:A.stack})}}finally{P.T=i,k.p=f}}(Ua&3)!==0&&nu(),ua(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Kd?gl++:(gl=0,Kd=t):gl=0,_l(0)}}function G_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Ko(i)))}function nu(){return F_(),B_(),H_(),V_()}function V_(){if(On!==5)return!1;var t=ds,i=$d;$d=0;var s=qi(Ua),l=P.T,f=k.p;try{k.p=32>s?32:s,P.T=null,s=Zd,Zd=null;var h=ds,b=Ua;if(On=0,Yr=ds=null,Ua=0,(jt&6)!==0)throw Error(a(331));var A=jt;if(jt|=4,M_(h.current),b_(h,h.current,b,s),jt=A,_l(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Ae,h)}catch{}return!0}finally{k.p=f,P.T=l,G_(t,i)}}function j_(t,i,s){i=Pi(s,i),i=Cd(t.stateNode,i,2),t=ss(t,i,2),t!==null&&(nn(t,2),ua(t))}function $t(t,i,s){if(t.tag===3)j_(t,t,s);else for(;i!==null;){if(i.tag===3){j_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(fs===null||!fs.has(l))){t=Pi(s,t),s=kg(2),l=ss(i,s,2),l!==null&&(Xg(s,l,i,t),nn(l,2),ua(l));break}}i=i.return}}function eh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new db;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Wd=!0,f.add(s),t=_b.bind(null,t,i,s),i.then(t,t))}function _b(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,sn===t&&(Dt&s)===s&&(mn===4||mn===3&&(Dt&62914560)===Dt&&300>T()-Zc?(jt&2)===0&&$r(t,0):qd|=s,qr===Dt&&(qr=0)),ua(t)}function k_(t,i){i===0&&(i=Ge()),t=Hs(t,i),t!==null&&(nn(t,i),ua(t))}function xb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),k_(t,s)}function vb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),k_(t,s)}function bb(t,i){return Wt(t,i)}var iu=null,Kr=null,th=!1,au=!1,nh=!1,ps=0;function ua(t){t!==Kr&&t.next===null&&(Kr===null?iu=Kr=t:Kr=Kr.next=t),au=!0,th||(th=!0,Sb())}function _l(t,i){if(!nh&&au){nh=!0;do for(var s=!1,l=iu;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,A=l.pingedLanes;h=(1<<31-We(42|t)+1)-1,h&=f&~(b&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,Y_(l,h))}else h=Dt,h=be(l,l===sn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||Xe(l,h)||(s=!0,Y_(l,h));l=l.next}while(s);nh=!1}}function yb(){X_()}function X_(){au=th=!1;var t=0;ps!==0&&Ub()&&(t=ps);for(var i=T(),s=null,l=iu;l!==null;){var f=l.next,h=W_(l,i);h===0?(l.next=null,s===null?iu=f:s.next=f,f===null&&(Kr=s)):(s=l,(t!==0||(h&3)!==0)&&(au=!0)),l=f}On!==0&&On!==5||_l(t),ps!==0&&(ps=0)}function W_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-We(h),A=1<<b,F=f[b];F===-1?((A&s)===0||(A&l)!==0)&&(f[b]=pe(A,i)):F<=i&&(t.expiredLanes|=A),h&=~A}if(i=sn,s=Dt,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Yt===2||Yt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&it(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Xe(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&it(l),qi(s)){case 2:case 8:s=Te;break;case 32:s=fe;break;case 268435456:s=Ie;break;default:s=fe}return l=q_.bind(null,t),s=Wt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&it(l),t.callbackPriority=2,t.callbackNode=null,2}function q_(t,i){if(On!==0&&On!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(nu()&&t.callbackNode!==s)return null;var l=Dt;return l=be(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(w_(t,l,i),W_(t,T()),t.callbackNode!=null&&t.callbackNode===s?q_.bind(null,t):null)}function Y_(t,i){if(nu())return null;w_(t,i,!0)}function Sb(){Nb(function(){(jt&6)!==0?Wt(ve,yb):X_()})}function ih(){if(ps===0){var t=zr;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),ps=t}return ps}function $_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mr(""+t)}function Z_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Mb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=$_((f[xn]||null).action),b=l.submitter;b&&(i=(i=b[xn]||null)?$_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var A=new gc("action","action",null,l,f);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ps!==0){var F=b?Z_(f,b):new FormData(f);Md(s,{pending:!0,data:F,method:f.method,action:h},null,F)}}else typeof h=="function"&&(A.preventDefault(),F=b?Z_(f,b):new FormData(f),Md(s,{pending:!0,data:F,method:f.method,action:h},h,F))},currentTarget:f}]})}}for(var ah=0;ah<Hf.length;ah++){var sh=Hf[ah],Eb=sh.toLowerCase(),Tb=sh[0].toUpperCase()+sh.slice(1);Yi(Eb,"on"+Tb)}Yi(Rm,"onAnimationEnd"),Yi(wm,"onAnimationIteration"),Yi(Cm,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(G1,"onTransitionRun"),Yi(V1,"onTransitionStart"),Yi(j1,"onTransitionCancel"),Yi(Dm,"onTransitionEnd"),Me("onMouseEnter",["mouseout","mouseover"]),Me("onMouseLeave",["mouseout","mouseover"]),Me("onPointerEnter",["pointerout","pointerover"]),Me("onPointerLeave",["pointerout","pointerover"]),he("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),he("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),he("onBeforeInput",["compositionend","keypress","textInput","paste"]),he("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xl));function K_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var A=l[b],F=A.instance,ne=A.currentTarget;if(A=A.listener,F!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ne;try{h(f)}catch(ge){vc(ge)}f.currentTarget=null,h=F}else for(b=0;b<l.length;b++){if(A=l[b],F=A.instance,ne=A.currentTarget,A=A.listener,F!==h&&f.isPropagationStopped())break e;h=A,f.currentTarget=ne;try{h(f)}catch(ge){vc(ge)}f.currentTarget=null,h=F}}}}function wt(t,i){var s=i[Za];s===void 0&&(s=i[Za]=new Set);var l=t+"__bubble";s.has(l)||(Q_(i,t,2,!1),s.add(l))}function rh(t,i,s){var l=0;i&&(l|=4),Q_(s,t,l,i)}var su="_reactListening"+Math.random().toString(36).slice(2);function oh(t){if(!t[su]){t[su]=!0,Y.forEach(function(s){s!=="selectionchange"&&(Ab.has(s)||rh(s,!1,t),rh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[su]||(i[su]=!0,rh("selectionchange",!1,i))}}function Q_(t,i,s,l){switch(Rx(i)){case 2:var f=ey;break;case 8:f=ty;break;default:f=Sh}s=f.bind(null,i,s,t),f=void 0,!Rf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function lh(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var A=l.stateNode.containerInfo;if(A===f)break;if(b===4)for(b=l.return;b!==null;){var F=b.tag;if((F===3||F===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;A!==null;){if(b=ii(A),b===null)return;if(F=b.tag,F===5||F===6||F===26||F===27){l=h=b;continue e}A=A.parentNode}}l=l.return}im(function(){var ne=h,ge=zs(s),ye=[];e:{var ae=Om.get(t);if(ae!==void 0){var le=gc,Ke=t;switch(t){case"keypress":if(pc(s)===0)break e;case"keydown":case"keyup":le=v1;break;case"focusin":Ke="focus",le=Of;break;case"focusout":Ke="blur",le=Of;break;case"beforeblur":case"afterblur":le=Of;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=o1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=S1;break;case Rm:case wm:case Cm:le=u1;break;case Dm:le=E1;break;case"scroll":case"scrollend":le=s1;break;case"wheel":le=A1;break;case"copy":case"cut":case"paste":le=d1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=lm;break;case"toggle":case"beforetoggle":le=w1}var ut=(i&4)!==0,en=!ut&&(t==="scroll"||t==="scrollend"),q=ut?ae!==null?ae+"Capture":null:ae;ut=[];for(var j=ne,te;j!==null;){var _e=j;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||q===null||(_e=Ho(j,q),_e!=null&&ut.push(vl(j,_e,te))),en)break;j=j.return}0<ut.length&&(ae=new le(ae,Ke,null,s,ge),ye.push({event:ae,listeners:ut}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",ae&&s!==Er&&(Ke=s.relatedTarget||s.fromElement)&&(ii(Ke)||Ke[ni]))break e;if((le||ae)&&(ae=ge.window===ge?ge:(ae=ge.ownerDocument)?ae.defaultView||ae.parentWindow:window,le?(Ke=s.relatedTarget||s.toElement,le=ne,Ke=Ke?ii(Ke):null,Ke!==null&&(en=c(Ke),ut=Ke.tag,Ke!==en||ut!==5&&ut!==27&&ut!==6)&&(Ke=null)):(le=null,Ke=ne),le!==Ke)){if(ut=rm,_e="onMouseLeave",q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ut=lm,_e="onPointerLeave",q="onPointerEnter",j="pointer"),en=le==null?ae:W(le),te=Ke==null?ae:W(Ke),ae=new ut(_e,j+"leave",le,s,ge),ae.target=en,ae.relatedTarget=te,_e=null,ii(ge)===ne&&(ut=new ut(q,j+"enter",Ke,s,ge),ut.target=te,ut.relatedTarget=en,_e=ut),en=_e,le&&Ke)t:{for(ut=Rb,q=le,j=Ke,te=0,_e=q;_e;_e=ut(_e))te++;_e=0;for(var rt=j;rt;rt=ut(rt))_e++;for(;0<te-_e;)q=ut(q),te--;for(;0<_e-te;)j=ut(j),_e--;for(;te--;){if(q===j||j!==null&&q===j.alternate){ut=q;break t}q=ut(q),j=ut(j)}ut=null}else ut=null;le!==null&&J_(ye,ae,le,ut,!1),Ke!==null&&en!==null&&J_(ye,en,Ke,ut,!0)}}e:{if(ae=ne?W(ne):window,le=ae.nodeName&&ae.nodeName.toLowerCase(),le==="select"||le==="input"&&ae.type==="file")var Ft=gm;else if(pm(ae))if(_m)Ft=F1;else{Ft=z1;var nt=P1}else le=ae.nodeName,!le||le.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ne&&Ps(ne.elementType)&&(Ft=gm):Ft=I1;if(Ft&&(Ft=Ft(t,ne))){mm(ye,Ft,s,ge);break e}nt&&nt(t,ae,ne),t==="focusout"&&ne&&ae.type==="number"&&ne.memoizedProps.value!=null&&Kt(ae,"number",ae.value)}switch(nt=ne?W(ne):window,t){case"focusin":(pm(nt)||nt.contentEditable==="true")&&(wr=nt,If=ne,Yo=null);break;case"focusout":Yo=If=wr=null;break;case"mousedown":Ff=!0;break;case"contextmenu":case"mouseup":case"dragend":Ff=!1,Tm(ye,s,ge);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":Tm(ye,s,ge)}var Mt;if(Lf)e:{switch(t){case"compositionstart":var Ot="onCompositionStart";break e;case"compositionend":Ot="onCompositionEnd";break e;case"compositionupdate":Ot="onCompositionUpdate";break e}Ot=void 0}else Rr?dm(t,s)&&(Ot="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ot="onCompositionStart");Ot&&(cm&&s.locale!=="ko"&&(Rr||Ot!=="onCompositionStart"?Ot==="onCompositionEnd"&&Rr&&(Mt=am()):(Qa=ge,wf="value"in Qa?Qa.value:Qa.textContent,Rr=!0)),nt=ru(ne,Ot),0<nt.length&&(Ot=new om(Ot,t,null,s,ge),ye.push({event:Ot,listeners:nt}),Mt?Ot.data=Mt:(Mt=hm(s),Mt!==null&&(Ot.data=Mt)))),(Mt=D1?O1(t,s):U1(t,s))&&(Ot=ru(ne,"onBeforeInput"),0<Ot.length&&(nt=new om("onBeforeInput","beforeinput",null,s,ge),ye.push({event:nt,listeners:Ot}),nt.data=Mt)),Mb(ye,t,ne,s,ge)}K_(ye,i)})}function vl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ru(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Ho(t,s),f!=null&&l.unshift(vl(t,f,h)),f=Ho(t,i),f!=null&&l.push(vl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Rb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function J_(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var A=s,F=A.alternate,ne=A.stateNode;if(A=A.tag,F!==null&&F===l)break;A!==5&&A!==26&&A!==27||ne===null||(F=ne,f?(ne=Ho(s,h),ne!=null&&b.unshift(vl(s,ne,F))):f||(ne=Ho(s,h),ne!=null&&b.push(vl(s,ne,F)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var wb=/\r\n?/g,Cb=/\u0000|\uFFFD/g;function ex(t){return(typeof t=="string"?t:""+t).replace(wb,`
`).replace(Cb,"")}function tx(t,i){return i=ex(i),ex(t)===i}function Jt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||kn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&kn(t,""+l);break;case"className":bt(t,"class",l);break;case"tabIndex":bt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":bt(t,s,l);break;case"style":Sr(t,l,h);break;case"data":if(i!=="object"){bt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Mr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Jt(t,i,"name",f.name,f,null),Jt(t,i,"formEncType",f.formEncType,f,null),Jt(t,i,"formMethod",f.formMethod,f,null),Jt(t,i,"formTarget",f.formTarget,f,null)):(Jt(t,i,"encType",f.encType,f,null),Jt(t,i,"method",f.method,f,null),Jt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Mr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Li);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Mr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":wt("beforetoggle",t),wt("toggle",t),et(t,"popover",l);break;case"xlinkActuate":ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ht(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ht(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ht(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ht(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":et(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Tn.get(s)||s,et(t,s,l))}}function ch(t,i,s,l,f,h){switch(s){case"style":Sr(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?kn(t,l):(typeof l=="number"||typeof l=="bigint")&&kn(t,""+l);break;case"onScroll":l!=null&&wt("scroll",t);break;case"onScrollEnd":l!=null&&wt("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!De.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[xn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):et(t,s,l)}}}function Yn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":wt("error",t),wt("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,h,b,s,null)}}f&&Jt(t,i,"srcSet",s.srcSet,s,null),l&&Jt(t,i,"src",s.src,s,null);return;case"input":wt("invalid",t);var A=h=b=f=null,F=null,ne=null;for(l in s)if(s.hasOwnProperty(l)){var ge=s[l];if(ge!=null)switch(l){case"name":f=ge;break;case"type":b=ge;break;case"checked":F=ge;break;case"defaultChecked":ne=ge;break;case"value":h=ge;break;case"defaultValue":A=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,i));break;default:Jt(t,i,l,ge,s,null)}}zt(t,h,A,F,ne,b,f,!1);return;case"select":wt("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(A=s[f],A!=null))switch(f){case"value":h=A;break;case"defaultValue":b=A;break;case"multiple":l=A;default:Jt(t,i,f,A,s,null)}i=h,s=b,t.multiple=!!l,i!=null?Pt(t,!!l,i,!1):s!=null&&Pt(t,!!l,s,!0);return;case"textarea":wt("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(A=s[b],A!=null))switch(b){case"value":l=A;break;case"defaultValue":f=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:Jt(t,i,b,A,s,null)}hn(t,l,f,h);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(t,i,F,l,s,null)}return;case"dialog":wt("beforetoggle",t),wt("toggle",t),wt("cancel",t),wt("close",t);break;case"iframe":case"object":wt("load",t);break;case"video":case"audio":for(l=0;l<xl.length;l++)wt(xl[l],t);break;case"image":wt("error",t),wt("load",t);break;case"details":wt("toggle",t);break;case"embed":case"source":case"link":wt("error",t),wt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in s)if(s.hasOwnProperty(ne)&&(l=s[ne],l!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,ne,l,s,null)}return;default:if(Ps(i)){for(ge in s)s.hasOwnProperty(ge)&&(l=s[ge],l!==void 0&&ch(t,i,ge,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&Jt(t,i,A,l,s,null))}function Db(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,A=null,F=null,ne=null,ge=null;for(le in s){var ye=s[le];if(s.hasOwnProperty(le)&&ye!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=ye;default:l.hasOwnProperty(le)||Jt(t,i,le,null,l,ye)}}for(var ae in l){var le=l[ae];if(ye=s[ae],l.hasOwnProperty(ae)&&(le!=null||ye!=null))switch(ae){case"type":h=le;break;case"name":f=le;break;case"checked":ne=le;break;case"defaultChecked":ge=le;break;case"value":b=le;break;case"defaultValue":A=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(a(137,i));break;default:le!==ye&&Jt(t,i,ae,le,l,ye)}}ai(t,b,A,F,ne,ge,h,f);return;case"select":le=b=A=ae=null;for(h in s)if(F=s[h],s.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":le=F;default:l.hasOwnProperty(h)||Jt(t,i,h,null,l,F)}for(f in l)if(h=l[f],F=s[f],l.hasOwnProperty(f)&&(h!=null||F!=null))switch(f){case"value":ae=h;break;case"defaultValue":A=h;break;case"multiple":b=h;default:h!==F&&Jt(t,i,f,h,l,F)}i=A,s=b,l=le,ae!=null?Pt(t,!!s,ae,!1):!!l!=!!s&&(i!=null?Pt(t,!!s,i,!0):Pt(t,!!s,s?[]:"",!1));return;case"textarea":le=ae=null;for(A in s)if(f=s[A],s.hasOwnProperty(A)&&f!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Jt(t,i,A,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":ae=f;break;case"defaultValue":le=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Jt(t,i,b,f,l,h)}an(t,ae,le);return;case"option":for(var Ke in s)if(ae=s[Ke],s.hasOwnProperty(Ke)&&ae!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Jt(t,i,Ke,null,l,ae)}for(F in l)if(ae=l[F],le=s[F],l.hasOwnProperty(F)&&ae!==le&&(ae!=null||le!=null))switch(F){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Jt(t,i,F,ae,l,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ut in s)ae=s[ut],s.hasOwnProperty(ut)&&ae!=null&&!l.hasOwnProperty(ut)&&Jt(t,i,ut,null,l,ae);for(ne in l)if(ae=l[ne],le=s[ne],l.hasOwnProperty(ne)&&ae!==le&&(ae!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:Jt(t,i,ne,ae,l,le)}return;default:if(Ps(i)){for(var en in s)ae=s[en],s.hasOwnProperty(en)&&ae!==void 0&&!l.hasOwnProperty(en)&&ch(t,i,en,void 0,l,ae);for(ge in l)ae=l[ge],le=s[ge],!l.hasOwnProperty(ge)||ae===le||ae===void 0&&le===void 0||ch(t,i,ge,ae,l,le);return}}for(var q in s)ae=s[q],s.hasOwnProperty(q)&&ae!=null&&!l.hasOwnProperty(q)&&Jt(t,i,q,null,l,ae);for(ye in l)ae=l[ye],le=s[ye],!l.hasOwnProperty(ye)||ae===le||ae==null&&le==null||Jt(t,i,ye,ae,l,le)}function nx(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ob(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,A=f.duration;if(h&&A&&nx(b)){for(b=0,A=f.responseEnd,l+=1;l<s.length;l++){var F=s[l],ne=F.startTime;if(ne>A)break;var ge=F.transferSize,ye=F.initiatorType;ge&&nx(ye)&&(F=F.responseEnd,b+=ge*(F<A?1:(A-ne)/(F-ne)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var uh=null,fh=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function ix(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ax(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function dh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var hh=null;function Ub(){var t=window.event;return t&&t.type==="popstate"?t===hh?!1:(hh=t,!0):(hh=null,!1)}var sx=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,rx=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof rx<"u"?function(t){return rx.resolve(null).then(t).catch(Pb)}:sx;function Pb(t){setTimeout(function(){throw t})}function ms(t){return t==="head"}function ox(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),to(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")bl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,bl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,A=h.nodeName;h[sa]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&bl(t.ownerDocument.body);s=f}while(s);to(i)}function lx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ph(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ph(s),ra(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function zb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[sa])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Hi(t.nextSibling),t===null)break}return null}function Ib(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Hi(t.nextSibling),t===null))return null;return t}function cx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Hi(t.nextSibling),t===null))return null;return t}function mh(t){return t.data==="$?"||t.data==="$~"}function gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fb(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Hi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var _h=null;function ux(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Hi(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function fx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function dx(t,i,s){switch(i=ou(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function bl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ra(t)}var Gi=new Map,hx=new Set;function lu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var La=k.d;k.d={f:Bb,r:Hb,D:Gb,C:Vb,L:jb,m:kb,X:Wb,S:Xb,M:qb};function Bb(){var t=La.f(),i=Jc();return t||i}function Hb(t){var i=R(t);i!==null&&i.tag===5&&i.type==="form"?Dg(i):La.r(t)}var Qr=typeof document>"u"?null:document;function px(t,i,s){var l=Qr;if(l&&typeof i=="string"&&i){var f=Vt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),hx.has(f)||(hx.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Yn(i,"link",t),J(i),l.head.appendChild(i)))}}function Gb(t){La.D(t),px("dns-prefetch",t,null)}function Vb(t,i){La.C(t,i),px("preconnect",t,i)}function jb(t,i,s){La.L(t,i,s);var l=Qr;if(l&&t&&i){var f='link[rel="preload"][as="'+Vt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Vt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Vt(s.imageSizes)+'"]')):f+='[href="'+Vt(t)+'"]';var h=f;switch(i){case"style":h=Jr(t);break;case"script":h=eo(t)}Gi.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Gi.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(yl(h))||i==="script"&&l.querySelector(Sl(h))||(i=l.createElement("link"),Yn(i,"link",t),J(i),l.head.appendChild(i)))}}function kb(t,i){La.m(t,i);var s=Qr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Vt(l)+'"][href="'+Vt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=eo(t)}if(!Gi.has(h)&&(t=_({rel:"modulepreload",href:t},i),Gi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Sl(h)))return}l=s.createElement("link"),Yn(l,"link",t),J(l),s.head.appendChild(l)}}}function Xb(t,i,s){La.S(t,i,s);var l=Qr;if(l&&t){var f=se(l).hoistableStyles,h=Jr(t);i=i||"default";var b=f.get(h);if(!b){var A={loading:0,preload:null};if(b=l.querySelector(yl(h)))A.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Gi.get(h))&&xh(t,s);var F=b=l.createElement("link");J(F),Yn(F,"link",t),F._p=new Promise(function(ne,ge){F.onload=ne,F.onerror=ge}),F.addEventListener("load",function(){A.loading|=1}),F.addEventListener("error",function(){A.loading|=2}),A.loading|=4,cu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:A},f.set(h,b)}}}function Wb(t,i){La.X(t,i);var s=Qr;if(s&&t){var l=se(s).hoistableScripts,f=eo(t),h=l.get(f);h||(h=s.querySelector(Sl(f)),h||(t=_({src:t,async:!0},i),(i=Gi.get(f))&&vh(t,i),h=s.createElement("script"),J(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function qb(t,i){La.M(t,i);var s=Qr;if(s&&t){var l=se(s).hoistableScripts,f=eo(t),h=l.get(f);h||(h=s.querySelector(Sl(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=Gi.get(f))&&vh(t,i),h=s.createElement("script"),J(h),Yn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function mx(t,i,s,l){var f=(f=Q.current)?lu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Jr(s.href),s=se(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Jr(s.href);var h=se(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(yl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),h||Yb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=eo(s),s=se(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Jr(t){return'href="'+Vt(t)+'"'}function yl(t){return'link[rel="stylesheet"]['+t+"]"}function gx(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Yb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Yn(i,"link",s),J(i),t.head.appendChild(i))}function eo(t){return'[src="'+Vt(t)+'"]'}function Sl(t){return"script[async]"+t}function _x(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Vt(s.href)+'"]');if(l)return i.instance=l,J(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),J(l),Yn(l,"style",f),cu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Jr(s.href);var h=t.querySelector(yl(f));if(h)return i.state.loading|=4,i.instance=h,J(h),h;l=gx(s),(f=Gi.get(f))&&xh(l,f),h=(t.ownerDocument||t).createElement("link"),J(h);var b=h;return b._p=new Promise(function(A,F){b.onload=A,b.onerror=F}),Yn(h,"link",l),i.state.loading|=4,cu(h,s.precedence,t),i.instance=h;case"script":return h=eo(s.src),(f=t.querySelector(Sl(h)))?(i.instance=f,J(f),f):(l=s,(f=Gi.get(h))&&(l=_({},s),vh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),J(f),Yn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,cu(l,s.precedence,t));return i.instance}function cu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var A=l[b];if(A.dataset.precedence===i)h=A;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function xh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function vh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var uu=null;function xx(t,i,s){if(uu===null){var l=new Map,f=uu=new Map;f.set(s,l)}else f=uu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[sa]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var A=l.get(b);A?A.push(h):l.set(b,[h])}}return l}function vx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function $b(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function bx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Zb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Jr(l.href),h=i.querySelector(yl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=fu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,J(h);return}h=i.ownerDocument||i,l=gx(l),(f=Gi.get(f))&&xh(l,f),h=h.createElement("link"),J(h);var b=h;b._p=new Promise(function(A,F){b.onload=A,b.onerror=F}),Yn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=fu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var bh=0;function Kb(t,i){return t.stylesheets&&t.count===0&&hu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&hu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&bh===0&&(bh=62500*Ob());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&hu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>bh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function fu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var du=null;function hu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,du=new Map,i.forEach(Qb,t),du=null,fu.call(t))}function Qb(t,i){if(!(i.state.loading&4)){var s=du.get(t);if(s)var l=s.get(null);else{s=new Map,du.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=fu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Ml={$$typeof:D,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function Jb(t,i,s,l,f,h,b,A,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ct(0),this.hiddenUpdates=ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function yx(t,i,s,l,f,h,b,A,F,ne,ge,ye){return t=new Jb(t,i,s,b,F,ne,ge,ye,A),i=1,h===!0&&(i|=24),h=yi(3,null,null,i),t.current=h,h.stateNode=t,i=Jf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},id(h),t}function Sx(t){return t?(t=Or,t):Or}function Mx(t,i,s,l,f,h){f=Sx(f),l.context===null?l.context=f:l.pendingContext=f,l=as(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=ss(t,l,i),s!==null&&(di(s,t,i),tl(s,t,i))}function Ex(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function yh(t,i){Ex(t,i),(t=t.alternate)&&Ex(t,i)}function Tx(t){if(t.tag===13||t.tag===31){var i=Hs(t,67108864);i!==null&&di(i,t,67108864),yh(t,67108864)}}function Ax(t){if(t.tag===13||t.tag===31){var i=Ai();i=Zn(i);var s=Hs(t,i);s!==null&&di(s,t,i),yh(t,i)}}var pu=!0;function ey(t,i,s,l){var f=P.T;P.T=null;var h=k.p;try{k.p=2,Sh(t,i,s,l)}finally{k.p=h,P.T=f}}function ty(t,i,s,l){var f=P.T;P.T=null;var h=k.p;try{k.p=8,Sh(t,i,s,l)}finally{k.p=h,P.T=f}}function Sh(t,i,s,l){if(pu){var f=Mh(l);if(f===null)lh(t,i,l,mu,s),wx(t,l);else if(iy(f,t,i,s,l))l.stopPropagation();else if(wx(t,l),i&4&&-1<ny.indexOf(t)){for(;f!==null;){var h=R(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Re(h.pendingLanes);if(b!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var F=1<<31-We(b);A.entanglements[1]|=F,b&=~F}ua(h),(jt&6)===0&&(Kc=T()+500,_l(0))}}break;case 31:case 13:A=Hs(h,2),A!==null&&di(A,h,2),Jc(),yh(h,2)}if(h=Mh(l),h===null&&lh(t,i,l,mu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else lh(t,i,l,null,s)}}function Mh(t){return t=zs(t),Eh(t)}var mu=null;function Eh(t){if(mu=null,t=ii(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return mu=t,null}function Rx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Z()){case ve:return 2;case Te:return 8;case fe:case Je:return 32;case Ie:return 268435456;default:return 32}default:return 32}}var Th=!1,gs=null,_s=null,xs=null,El=new Map,Tl=new Map,vs=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wx(t,i){switch(t){case"focusin":case"focusout":gs=null;break;case"dragenter":case"dragleave":_s=null;break;case"mouseover":case"mouseout":xs=null;break;case"pointerover":case"pointerout":El.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tl.delete(i.pointerId)}}function Al(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=R(i),i!==null&&Tx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function iy(t,i,s,l,f){switch(i){case"focusin":return gs=Al(gs,t,i,s,l,f),!0;case"dragenter":return _s=Al(_s,t,i,s,l,f),!0;case"mouseover":return xs=Al(xs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return El.set(h,Al(El.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Tl.set(h,Al(Tl.get(h)||null,t,i,s,l,f)),!0}return!1}function Cx(t){var i=ii(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ns(t.priority,function(){Ax(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Ns(t.priority,function(){Ax(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function gu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Mh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Er=l,s.target.dispatchEvent(l),Er=null}else return i=R(s),i!==null&&Tx(i),t.blockedOn=s,!1;i.shift()}return!0}function Dx(t,i,s){gu(t)&&s.delete(i)}function ay(){Th=!1,gs!==null&&gu(gs)&&(gs=null),_s!==null&&gu(_s)&&(_s=null),xs!==null&&gu(xs)&&(xs=null),El.forEach(Dx),Tl.forEach(Dx)}function _u(t,i){t.blockedOn===i&&(t.blockedOn=null,Th||(Th=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ay)))}var xu=null;function Ox(t){xu!==t&&(xu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){xu===t&&(xu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Eh(l||s)===null)continue;break}var h=R(s);h!==null&&(t.splice(i,3),i-=3,Md(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function to(t){function i(F){return _u(F,t)}gs!==null&&_u(gs,t),_s!==null&&_u(_s,t),xs!==null&&_u(xs,t),El.forEach(i),Tl.forEach(i);for(var s=0;s<vs.length;s++){var l=vs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<vs.length&&(s=vs[0],s.blockedOn===null);)Cx(s),s.blockedOn===null&&vs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[xn]||null;if(typeof h=="function")b||Ox(s);else if(b){var A=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[xn]||null)A=b.formAction;else if(Eh(f)!==null)continue}else A=b.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),Ox(s)}}}function Ux(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Ah(t){this._internalRoot=t}vu.prototype.render=Ah.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=Ai();Mx(s,l,t,i,null,null)},vu.prototype.unmount=Ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Mx(t.current,2,null,t,null,null),Jc(),i[ni]=null}};function vu(t){this._internalRoot=t}vu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ga();t={blockedOn:null,target:t,priority:i};for(var s=0;s<vs.length&&i!==0&&i<vs[s].priority;s++);vs.splice(s,0,t),s===0&&Cx(t)}};var Lx=e.version;if(Lx!=="19.2.1")throw Error(a(527,Lx,"19.2.1"));k.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var sy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{Ae=bu.inject(sy),we=bu}catch{}}return Cl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Hg,h=Gg,b=Vg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=yx(t,1,!1,null,null,s,l,null,f,h,b,Ux),t[ni]=i.current,oh(t),new Ah(i)},Cl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=Hg,b=Gg,A=Vg,F=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=yx(t,1,!0,i,s??null,l,f,F,h,b,A,Ux),i.context=Sx(null),s=i.current,l=Ai(),l=Zn(l),f=as(l),f.callback=null,ss(s,f,l),s=l,i.current.lanes=s,nn(i,s),ua(i),t[ni]=i.current,oh(t),new vu(i)},Cl.version="19.2.1",Cl}var iv;function tS(){if(iv)return zh.exports;iv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zh.exports=eS(),zh.exports}var nS=tS();const iS=w2(nS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gp="181",aS=0,av=1,sS=2,C2=1,rS=2,Ha=3,Ls=0,mi=1,Ga=2,ka=0,vo=1,sv=2,rv=3,ov=4,oS=5,or=100,lS=101,cS=102,uS=103,fS=104,dS=200,hS=201,pS=202,mS=203,D0=204,O0=205,gS=206,_S=207,xS=208,vS=209,bS=210,yS=211,SS=212,MS=213,ES=214,U0=0,L0=1,N0=2,Ro=3,P0=4,z0=5,I0=6,F0=7,D2=0,TS=1,AS=2,Ds=0,RS=1,wS=2,CS=3,DS=4,OS=5,US=6,LS=7,O2=300,wo=301,Co=302,B0=303,H0=304,yf=306,G0=1e3,Di=1001,V0=1002,Oi=1003,NS=1004,yu=1005,$n=1006,Hh=1007,ur=1008,qa=1009,U2=1010,L2=1011,Yl=1012,Vp=1013,_r=1014,Va=1015,Io=1016,jp=1017,kp=1018,$l=1020,N2=35902,P2=35899,z2=1021,I2=1022,ta=1023,Zl=1026,Kl=1027,F2=1028,Xp=1029,Wp=1030,qp=1031,Yp=1033,ku=33776,Xu=33777,Wu=33778,qu=33779,j0=35840,k0=35841,X0=35842,W0=35843,q0=36196,Y0=37492,$0=37496,Z0=37808,K0=37809,Q0=37810,J0=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,PS=3200,zS=3201,IS=0,FS=1,ws="",pi="srgb",Do="srgb-linear",rf="linear",tn="srgb",no=7680,lv=519,BS=512,HS=513,GS=514,B2=515,VS=516,jS=517,kS=518,XS=519,cv=35044,uv="300 es",pa=2e3,of=2001;function H2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ql(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function WS(){const r=Ql("canvas");return r.style.display="block",r}const fv={};function dv(...r){const e="THREE."+r.shift();console.log(e,...r)}function vt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function gn(...r){const e="THREE."+r.shift();console.error(e,...r)}function Jl(...r){const e=r.join(" ");e in fv||(fv[e]=!0,vt(...r))}function qS(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=Math.PI/180,_p=180/Math.PI;function lc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Jn[r&255]+Jn[r>>8&255]+Jn[r>>16&255]+Jn[r>>24&255]+"-"+Jn[e&255]+Jn[e>>8&255]+"-"+Jn[e>>16&15|64]+Jn[e>>24&255]+"-"+Jn[n&63|128]+Jn[n>>8&255]+"-"+Jn[n>>16&255]+Jn[n>>24&255]+Jn[a&255]+Jn[a>>8&255]+Jn[a>>16&255]+Jn[a>>24&255]).toLowerCase()}function Nt(r,e,n){return Math.max(e,Math.min(n,r))}function YS(r,e){return(r%e+e)%e}function Vh(r,e,n){return(1-n)*r+n*e}function Dl(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function hi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Zt{constructor(e=0,n=0){Zt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],S=c[u+1],M=c[u+2],E=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=S,e[n+2]=M,e[n+3]=E;return}if(_!==E||m!==x||p!==S||g!==M){let y=m*x+p*S+g*M+_*E;y<0&&(x=-x,S=-S,M=-M,E=-E,y=-y);let v=1-d;if(y<.9995){const L=Math.acos(y),D=Math.sin(L);v=Math.sin(v*L)/D,d=Math.sin(d*L)/D,m=m*v+x*d,p=p*v+S*d,g=g*v+M*d,_=_*v+E*d}else{m=m*v+x*d,p=p*v+S*d,g=g*v+M*d,_=_*v+E*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],S=c[u+2],M=c[u+3];return e[n]=d*M+g*_+m*S-p*x,e[n+1]=m*M+g*x+p*_-d*S,e[n+2]=p*M+g*S+d*x-m*_,e[n+3]=g*M-d*_-m*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),S=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"YXZ":this._x=x*g*_+p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"ZXY":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_-x*S*M;break;case"ZYX":this._x=x*g*_-p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_+x*S*M;break;case"YZX":this._x=x*g*_+p*S*M,this._y=p*S*_+x*g*M,this._z=p*g*M-x*S*_,this._w=p*g*_-x*S*M;break;case"XZY":this._x=x*g*_-p*S*M,this._y=p*S*_-x*g*M,this._z=p*g*M+x*S*_,this._w=p*g*_+x*S*M;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(u-o)*S}else if(a>d&&a>_){const S=2*Math.sqrt(1+a-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-a-_);this._w=(c-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-a-d);this._w=(u-o)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,a=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Nt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jh=new oe,hv=new cc;class Et{constructor(e,n,a,o,c,u,d,m,p){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],S=a[5],M=a[8],E=o[0],y=o[3],v=o[6],L=o[1],D=o[4],I=o[7],V=o[2],N=o[5],z=o[8];return c[0]=u*E+d*L+m*V,c[3]=u*y+d*D+m*N,c[6]=u*v+d*I+m*z,c[1]=p*E+g*L+_*V,c[4]=p*y+g*D+_*N,c[7]=p*v+g*I+_*z,c[2]=x*E+S*L+M*V,c[5]=x*y+S*D+M*N,c[8]=x*v+S*I+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,S=p*c-u*m,M=n*_+a*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(o*p-g*a)*E,e[2]=(d*a-o*u)*E,e[3]=x*E,e[4]=(g*n-o*m)*E,e[5]=(o*c-d*n)*E,e[6]=S*E,e[7]=(a*m-p*n)*E,e[8]=(u*n-a*c)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(kh.makeScale(e,n)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,n){return this.premultiply(kh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kh=new Et,pv=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $S(){const r={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===tn&&(o.r=Xa(o.r),o.g=Xa(o.g),o.b=Xa(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===tn&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ws?rf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Jl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Jl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Do]:{primaries:e,whitePoint:a,transfer:rf,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:a,transfer:tn,toXYZ:pv,fromXYZ:mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),r}const Ht=$S();function Xa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function bo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let io;class ZS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{io===void 0&&(io=Ql("canvas")),io.width=e.width,io.height=e.height;const o=io.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=io}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Xa(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Xa(n[a]/255)*255):n[a]=Xa(n[a]);return{data:n,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class $p{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=lc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Xh(o[u].image)):c.push(Xh(o[u]))}else c=Xh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Xh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ZS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let QS=0;const Wh=new oe;class Hn extends Fo{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Di,o=Di,c=$n,u=ur,d=ta,m=qa,p=Hn.DEFAULT_ANISOTROPY,g=ws){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=lc(),this.name="",this.source=new $p(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Zt(0,0),this.repeat=new Zt(1,1),this.center=new Zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wh).x}get height(){return this.source.getSize(Wh).y}get depth(){return this.source.getSize(Wh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){vt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case G0:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case V0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case G0:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case V0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=O2;Hn.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,a=0,o=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],S=m[5],M=m[9],E=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,I=(S+1)/2,V=(v+1)/2,N=(g+x)/4,z=(_+E)/4,K=(M+y)/4;return D>I&&D>V?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=N/a,c=z/a):I>V?I<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),a=N/o,c=K/o):V<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),a=z/c,o=K/c),this.set(a,o,c,n),this}let L=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-M)/L,this.y=(_-E)/L,this.z=(x-g)/L,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Nt(this.x,e.x,n.x),this.y=Nt(this.y,e.y,n.y),this.z=Nt(this.z,e.z,n.z),this.w=Nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Nt(this.x,e,n),this.y=Nt(this.y,e,n),this.z=Nt(this.z,e,n),this.w=Nt(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Nt(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends Fo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Hn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new $p(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends JS{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class G2 extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class e3 extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uc{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(Ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(Ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=Ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ki):Ki.fromBufferAttribute(c,u),Ki.applyMatrix4(e.matrixWorld),this.expandByPoint(Ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Su.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Su.copy(a.boundingBox)),Su.applyMatrix4(e.matrixWorld),this.union(Su)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ki),Ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ol),Mu.subVectors(this.max,Ol),ao.subVectors(e.a,Ol),so.subVectors(e.b,Ol),ro.subVectors(e.c,Ol),ys.subVectors(so,ao),Ss.subVectors(ro,so),er.subVectors(ao,ro);let n=[0,-ys.z,ys.y,0,-Ss.z,Ss.y,0,-er.z,er.y,ys.z,0,-ys.x,Ss.z,0,-Ss.x,er.z,0,-er.x,-ys.y,ys.x,0,-Ss.y,Ss.x,0,-er.y,er.x,0];return!qh(n,ao,so,ro,Mu)||(n=[1,0,0,0,1,0,0,0,1],!qh(n,ao,so,ro,Mu))?!1:(Eu.crossVectors(ys,Ss),n=[Eu.x,Eu.y,Eu.z],qh(n,ao,so,ro,Mu))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Na),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Na=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],Ki=new oe,Su=new uc,ao=new oe,so=new oe,ro=new oe,ys=new oe,Ss=new oe,er=new oe,Ol=new oe,Mu=new oe,Eu=new oe,tr=new oe;function qh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){tr.fromArray(r,c);const d=o.x*Math.abs(tr.x)+o.y*Math.abs(tr.y)+o.z*Math.abs(tr.z),m=e.dot(tr),p=n.dot(tr),g=a.dot(tr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const t3=new uc,Ul=new oe,Yh=new oe;class Sf{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):t3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ul.subVectors(e,this.center);const n=Ul.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Ul,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ul.copy(e.center).add(Yh)),this.expandByPoint(Ul.copy(e.center).sub(Yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Pa=new oe,$h=new oe,Tu=new oe,Ms=new oe,Zh=new oe,Au=new oe,Kh=new oe;class Zp{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pa)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Pa.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Pa.copy(this.origin).addScaledVector(this.direction,n),Pa.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){$h.copy(e).add(n).multiplyScalar(.5),Tu.copy(n).sub(e).normalize(),Ms.copy(this.origin).sub($h);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Tu),d=Ms.dot(this.direction),m=-Ms.dot(Tu),p=Ms.lengthSq(),g=Math.abs(1-u*u);let _,x,S,M;if(g>0)if(_=u*m-d,x=u*d-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const E=1/g;_*=E,x*=E,S=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),S=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),S=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy($h).addScaledVector(Tu,x),S}intersectSphere(e,n){Pa.subVectors(e.center,this.origin);const a=Pa.dot(this.direction),o=Pa.dot(Pa)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Pa)!==null}intersectTriangle(e,n,a,o,c){Zh.subVectors(n,e),Au.subVectors(a,e),Kh.crossVectors(Zh,Au);let u=this.direction.dot(Kh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Ms.subVectors(this.origin,e);const m=d*this.direction.dot(Au.crossVectors(Ms,Au));if(m<0)return null;const p=d*this.direction.dot(Zh.cross(Ms));if(p<0||m+p>u)return null;const g=-d*Ms.dot(Kh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _n{constructor(e,n,a,o,c,u,d,m,p,g,_,x,S,M,E,y){_n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,S,M,E,y)}set(e,n,a,o,c,u,d,m,p,g,_,x,S,M,E,y){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=M,v[11]=E,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _n().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),c=1/oo.setFromMatrixColumn(e,1).length(),u=1/oo.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,S=u*_,M=d*g,E=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=S+M*p,n[5]=x-E*p,n[9]=-d*m,n[2]=E-x*p,n[6]=M+S*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,S=m*_,M=p*g,E=p*_;n[0]=x+E*d,n[4]=M*d-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=S*d-M,n[6]=E+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,S=m*_,M=p*g,E=p*_;n[0]=x-E*d,n[4]=-u*_,n[8]=M+S*d,n[1]=S+M*d,n[5]=u*g,n[9]=E-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,S=u*_,M=d*g,E=d*_;n[0]=m*g,n[4]=M*p-S,n[8]=x*p+E,n[1]=m*_,n[5]=E*p+x,n[9]=S*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,S=u*p,M=d*m,E=d*p;n[0]=m*g,n[4]=E-x*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=S*_+M,n[10]=x-E*_}else if(e.order==="XZY"){const x=u*m,S=u*p,M=d*m,E=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+E,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=d*g,n[10]=E*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(n3,e,i3)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Es.crossVectors(a,Ri),Es.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Es.crossVectors(a,Ri)),Es.normalize(),Ru.crossVectors(Ri,Es),o[0]=Es.x,o[4]=Ru.x,o[8]=Ri.x,o[1]=Es.y,o[5]=Ru.y,o[9]=Ri.y,o[2]=Es.z,o[6]=Ru.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],S=a[13],M=a[2],E=a[6],y=a[10],v=a[14],L=a[3],D=a[7],I=a[11],V=a[15],N=o[0],z=o[4],K=o[8],C=o[12],w=o[1],G=o[5],ee=o[9],ce=o[13],xe=o[2],$=o[6],P=o[10],k=o[14],X=o[3],de=o[7],me=o[11],O=o[15];return c[0]=u*N+d*w+m*xe+p*X,c[4]=u*z+d*G+m*$+p*de,c[8]=u*K+d*ee+m*P+p*me,c[12]=u*C+d*ce+m*k+p*O,c[1]=g*N+_*w+x*xe+S*X,c[5]=g*z+_*G+x*$+S*de,c[9]=g*K+_*ee+x*P+S*me,c[13]=g*C+_*ce+x*k+S*O,c[2]=M*N+E*w+y*xe+v*X,c[6]=M*z+E*G+y*$+v*de,c[10]=M*K+E*ee+y*P+v*me,c[14]=M*C+E*ce+y*k+v*O,c[3]=L*N+D*w+I*xe+V*X,c[7]=L*z+D*G+I*$+V*de,c[11]=L*K+D*ee+I*P+V*me,c[15]=L*C+D*ce+I*k+V*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],M=e[3],E=e[7],y=e[11],v=e[15];return M*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*S-a*m*S)+E*(+n*m*S-n*p*x+c*u*x-o*u*S+o*p*g-c*m*g)+y*(+n*p*_-n*d*S-c*u*_+a*u*S+c*d*g-a*p*g)+v*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],M=e[12],E=e[13],y=e[14],v=e[15],L=_*y*p-E*x*p+E*m*S-d*y*S-_*m*v+d*x*v,D=M*x*p-g*y*p-M*m*S+u*y*S+g*m*v-u*x*v,I=g*E*p-M*_*p+M*d*S-u*E*S-g*d*v+u*_*v,V=M*_*m-g*E*m-M*d*x+u*E*x+g*d*y-u*_*y,N=n*L+a*D+o*I+c*V;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=L*z,e[1]=(E*x*c-_*y*c-E*o*S+a*y*S+_*o*v-a*x*v)*z,e[2]=(d*y*c-E*m*c+E*o*p-a*y*p-d*o*v+a*m*v)*z,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*S-a*m*S)*z,e[4]=D*z,e[5]=(g*y*c-M*x*c+M*o*S-n*y*S-g*o*v+n*x*v)*z,e[6]=(M*m*c-u*y*c-M*o*p+n*y*p+u*o*v-n*m*v)*z,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*S+n*m*S)*z,e[8]=I*z,e[9]=(M*_*c-g*E*c-M*a*S+n*E*S+g*a*v-n*_*v)*z,e[10]=(u*E*c-M*d*c+M*a*p-n*E*p-u*a*v+n*d*v)*z,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*S-n*d*S)*z,e[12]=V*z,e[13]=(g*E*o-M*_*o+M*a*x-n*E*x-g*a*y+n*_*y)*z,e[14]=(M*d*o-u*E*o-M*a*m+n*E*m+u*a*y-n*d*y)*z,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,S=c*g,M=c*_,E=u*g,y=u*_,v=d*_,L=m*p,D=m*g,I=m*_,V=a.x,N=a.y,z=a.z;return o[0]=(1-(E+v))*V,o[1]=(S+I)*V,o[2]=(M-D)*V,o[3]=0,o[4]=(S-I)*N,o[5]=(1-(x+v))*N,o[6]=(y+L)*N,o[7]=0,o[8]=(M+D)*z,o[9]=(y-L)*z,o[10]=(1-(x+E))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=oo.set(o[0],o[1],o[2]).length();const u=oo.set(o[4],o[5],o[6]).length(),d=oo.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],Qi.copy(this);const p=1/c,g=1/u,_=1/d;return Qi.elements[0]*=p,Qi.elements[1]*=p,Qi.elements[2]*=p,Qi.elements[4]*=g,Qi.elements[5]*=g,Qi.elements[6]*=g,Qi.elements[8]*=_,Qi.elements[9]*=_,Qi.elements[10]*=_,n.setFromRotationMatrix(Qi),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=pa,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),S=(a+o)/(a-o);let M,E;if(m)M=c/(u-c),E=u*c/(u-c);else if(d===pa)M=-(u+c)/(u-c),E=-2*u*c/(u-c);else if(d===of)M=-u/(u-c),E=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=pa,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),S=-(a+o)/(a-o);let M,E;if(m)M=1/(u-c),E=u/(u-c);else if(d===pa)M=-2/(u-c),E=-(u+c)/(u-c);else if(d===of)M=-1/(u-c),E=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const oo=new oe,Qi=new _n,n3=new oe(0,0,0),i3=new oe(1,1,1),Es=new oe,Ru=new oe,Ri=new oe,gv=new _n,_v=new cc;class Ya{constructor(e=0,n=0,a=0,o=Ya.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return _v.setFromEuler(this),this.setFromQuaternion(_v,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ya.DEFAULT_ORDER="XYZ";class Kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let a3=0;const xv=new oe,lo=new cc,za=new _n,wu=new oe,Ll=new oe,s3=new oe,r3=new cc,vv=new oe(1,0,0),bv=new oe(0,1,0),yv=new oe(0,0,1),Sv={type:"added"},o3={type:"removed"},co={type:"childadded",child:null},Qh={type:"childremoved",child:null};class gi extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a3++}),this.uuid=lc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gi.DEFAULT_UP.clone();const e=new oe,n=new Ya,a=new cc,o=new oe(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new _n},normalMatrix:{value:new Et}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=gi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.multiply(lo),this}rotateOnWorldAxis(e,n){return lo.setFromAxisAngle(e,n),this.quaternion.premultiply(lo),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(bv,e)}rotateZ(e){return this.rotateOnAxis(yv,e)}translateOnAxis(e,n){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(bv,e)}translateZ(e){return this.translateOnAxis(yv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(za.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?wu.copy(e):wu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?za.lookAt(Ll,wu,this.up):za.lookAt(wu,Ll,this.up),this.quaternion.setFromRotationMatrix(za),o&&(za.extractRotation(o.matrixWorld),lo.setFromRotationMatrix(za),this.quaternion.premultiply(lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(gn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sv),co.child=e,this.dispatchEvent(co),co.child=null):gn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(o3),Qh.child=e,this.dispatchEvent(Qh),Qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),za.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),za.multiply(e.parent.matrixWorld)),e.applyMatrix4(za),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sv),co.child=e,this.dispatchEvent(co),co.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,e,s3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,r3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),S=u(e.animations),M=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}gi.DEFAULT_UP=new oe(0,1,0);gi.DEFAULT_MATRIX_AUTO_UPDATE=!0;gi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new oe,Ia=new oe,Jh=new oe,Fa=new oe,uo=new oe,fo=new oe,Mv=new oe,e0=new oe,t0=new oe,n0=new oe,i0=new yn,a0=new yn,s0=new yn;class ea{constructor(e=new oe,n=new oe,a=new oe){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Ji.subVectors(e,n),o.cross(Ji);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Ji.subVectors(o,n),Ia.subVectors(a,n),Jh.subVectors(e,n);const u=Ji.dot(Ji),d=Ji.dot(Ia),m=Ji.dot(Jh),p=Ia.dot(Ia),g=Ia.dot(Jh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(p*m-d*g)*x,M=(u*g-d*m)*x;return c.set(1-S-M,M,S)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,Fa)===null?!1:Fa.x>=0&&Fa.y>=0&&Fa.x+Fa.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,Fa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Fa.x),m.addScaledVector(u,Fa.y),m.addScaledVector(d,Fa.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return i0.setScalar(0),a0.setScalar(0),s0.setScalar(0),i0.fromBufferAttribute(e,n),a0.fromBufferAttribute(e,a),s0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(i0,c.x),u.addScaledVector(a0,c.y),u.addScaledVector(s0,c.z),u}static isFrontFacing(e,n,a,o){return Ji.subVectors(a,n),Ia.subVectors(e,n),Ji.cross(Ia).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ji.subVectors(this.c,this.b),Ia.subVectors(this.a,this.b),Ji.cross(Ia).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ea.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ea.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return ea.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return ea.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ea.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;uo.subVectors(o,a),fo.subVectors(c,a),e0.subVectors(e,a);const m=uo.dot(e0),p=fo.dot(e0);if(m<=0&&p<=0)return n.copy(a);t0.subVectors(e,o);const g=uo.dot(t0),_=fo.dot(t0);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(uo,u);n0.subVectors(e,c);const S=uo.dot(n0),M=fo.dot(n0);if(M>=0&&S<=M)return n.copy(c);const E=S*p-m*M;if(E<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(fo,d);const y=g*M-S*_;if(y<=0&&_-g>=0&&S-M>=0)return Mv.subVectors(c,o),d=(_-g)/(_-g+(S-M)),n.copy(o).addScaledVector(Mv,d);const v=1/(y+E+x);return u=E*v,d=x*v,n.copy(a).addScaledVector(uo,u).addScaledVector(fo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Cu={h:0,s:0,l:0};function r0(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class kt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ht.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=Ht.workingColorSpace){return this.r=e,this.g=n,this.b=a,Ht.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=Ht.workingColorSpace){if(e=YS(e,1),n=Nt(n,0,1),a=Nt(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=r0(u,c,e+1/3),this.g=r0(u,c,e),this.b=r0(u,c,e-1/3)}return Ht.colorSpaceToWorking(this,o),this}setStyle(e,n=pi){function a(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pi){const a=V2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xa(e.r),this.g=Xa(e.g),this.b=Xa(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ht.workingToColorSpace(ei.copy(this),e),Math.round(Nt(ei.r*255,0,255))*65536+Math.round(Nt(ei.g*255,0,255))*256+Math.round(Nt(ei.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ht.workingColorSpace){Ht.workingToColorSpace(ei.copy(this),n);const a=ei.r,o=ei.g,c=ei.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=Ht.workingColorSpace){return Ht.workingToColorSpace(ei.copy(this),n),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=pi){Ht.workingToColorSpace(ei.copy(this),e);const n=ei.r,a=ei.g,o=ei.b;return e!==pi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+n,Ts.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(Ts),e.getHSL(Cu);const a=Vh(Ts.h,Cu.h,n),o=Vh(Ts.s,Cu.s,n),c=Vh(Ts.l,Cu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new kt;kt.NAMES=V2;let l3=0;class fc extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=lc(),this.name="",this.type="Material",this.blending=vo,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=D0,this.blendDst=O0,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=no,this.stencilZFail=no,this.stencilZPass=no,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){vt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){vt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(a.blending=this.blending),this.side!==Ls&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==D0&&(a.blendSrc=this.blendSrc),this.blendDst!==O0&&(a.blendDst=this.blendDst),this.blendEquation!==or&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==no&&(a.stencilFail=this.stencilFail),this.stencilZFail!==no&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==no&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fl extends fc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ya,this.combine=D2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dn=new oe,Du=new Zt;let c3=0;class ma{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=cv,this.updateRanges=[],this.gpuType=Va,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Du.fromBufferAttribute(this,n),Du.applyMatrix3(e),this.setXY(n,Du.x,Du.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix3(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyMatrix4(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.applyNormalMatrix(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Dn.fromBufferAttribute(this,n),Dn.transformDirection(e),this.setXYZ(n,Dn.x,Dn.y,Dn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Dl(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=hi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Dl(n,this.array)),n}setX(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Dl(n,this.array)),n}setY(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Dl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Dl(n,this.array)),n}setW(e,n){return this.normalized&&(n=hi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array),o=hi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=hi(n,this.array),a=hi(a,this.array),o=hi(o,this.array),c=hi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cv&&(e.usage=this.usage),e}}class j2 extends ma{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class k2 extends ma{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Wa extends ma{constructor(e,n,a){super(new Float32Array(e),n,a)}}let u3=0;const Vi=new _n,o0=new gi,ho=new oe,wi=new uc,Nl=new uc,Fn=new oe;class Wi extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=lc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H2(e)?k2:j2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new Et().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vi.makeRotationFromQuaternion(e),this.applyMatrix4(Vi),this}rotateX(e){return Vi.makeRotationX(e),this.applyMatrix4(Vi),this}rotateY(e){return Vi.makeRotationY(e),this.applyMatrix4(Vi),this}rotateZ(e){return Vi.makeRotationZ(e),this.applyMatrix4(Vi),this}translate(e,n,a){return Vi.makeTranslation(e,n,a),this.applyMatrix4(Vi),this}scale(e,n,a){return Vi.makeScale(e,n,a),this.applyMatrix4(Vi),this}lookAt(e){return o0.lookAt(e),o0.updateMatrix(),this.applyMatrix4(o0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Wa(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];wi.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const a=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Nl.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(wi.min,Nl.min),wi.expandByPoint(Fn),Fn.addVectors(wi.max,Nl.max),wi.expandByPoint(Fn)):(wi.expandByPoint(Nl.min),wi.expandByPoint(Nl.max))}wi.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Fn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Fn.fromBufferAttribute(d,p),m&&(ho.fromBufferAttribute(e,p),Fn.add(ho)),o=Math.max(o,a.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&gn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){gn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ma(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let K=0;K<a.count;K++)d[K]=new oe,m[K]=new oe;const p=new oe,g=new oe,_=new oe,x=new Zt,S=new Zt,M=new Zt,E=new oe,y=new oe;function v(K,C,w){p.fromBufferAttribute(a,K),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),x.fromBufferAttribute(c,K),S.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),g.sub(p),_.sub(p),S.sub(x),M.sub(x);const G=1/(S.x*M.y-M.x*S.y);isFinite(G)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(G),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(G),d[K].add(E),d[C].add(E),d[w].add(E),m[K].add(y),m[C].add(y),m[w].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let K=0,C=L.length;K<C;++K){const w=L[K],G=w.start,ee=w.count;for(let ce=G,xe=G+ee;ce<xe;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const D=new oe,I=new oe,V=new oe,N=new oe;function z(K){V.fromBufferAttribute(o,K),N.copy(V);const C=d[K];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),I.crossVectors(N,C);const G=I.dot(m[K])<0?-1:1;u.setXYZW(K,D.x,D.y,D.z,G)}for(let K=0,C=L.length;K<C;++K){const w=L[K],G=w.start,ee=w.count;for(let ce=G,xe=G+ee;ce<xe;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new ma(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,S=a.count;x<S;x++)a.setXYZ(x,0,0,0);const o=new oe,c=new oe,u=new oe,d=new oe,m=new oe,p=new oe,g=new oe,_=new oe;if(e)for(let x=0,S=e.count;x<S;x+=3){const M=e.getX(x+0),E=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,E),p.fromBufferAttribute(a,y),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(E,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=n.count;x<S;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Fn.fromBufferAttribute(e,n),Fn.normalize(),e.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let S=0,M=0;for(let E=0,y=m.length;E<y;E++){d.isInterleavedBufferAttribute?S=m[E]*d.data.stride+d.offset:S=m[E]*g;for(let v=0;v<g;v++)x[M++]=p[S++]}return new ma(x,g,_)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,a);m.push(S)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new _n,nr=new Zp,Ou=new Sf,Tv=new oe,Uu=new oe,Lu=new oe,Nu=new oe,l0=new oe,Pu=new oe,Av=new oe,zu=new oe;class Ci extends gi{constructor(e=new Wi,n=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Pu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(l0.fromBufferAttribute(_,e),u?Pu.addScaledVector(l0,g):Pu.addScaledVector(l0.sub(n),g))}n.add(Pu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Ou.copy(a.boundingSphere),Ou.applyMatrix4(c),nr.copy(e.ray).recast(e.near),!(Ou.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Ou,Tv)===null||nr.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(c).invert(),nr.copy(e.ray).applyMatrix4(Ev),!(a.boundingBox!==null&&nr.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,nr)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=u[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let I=L,V=D;I<V;I+=3){const N=d.getX(I),z=d.getX(I+1),K=d.getX(I+2);o=Iu(this,v,e,a,p,g,_,N,z,K),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=d.getX(y),D=d.getX(y+1),I=d.getX(y+2);o=Iu(this,u,e,a,p,g,_,L,D,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,E=x.length;M<E;M++){const y=x[M],v=u[y.materialIndex],L=Math.max(y.start,S.start),D=Math.min(m.count,Math.min(y.start+y.count,S.start+S.count));for(let I=L,V=D;I<V;I+=3){const N=I,z=I+1,K=I+2;o=Iu(this,v,e,a,p,g,_,N,z,K),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const M=Math.max(0,S.start),E=Math.min(m.count,S.start+S.count);for(let y=M,v=E;y<v;y+=3){const L=y,D=y+1,I=y+2;o=Iu(this,u,e,a,p,g,_,L,D,I),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function f3(r,e,n,a,o,c,u,d){let m;if(e.side===mi?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Ls,d),m===null)return null;zu.copy(d),zu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(zu);return p<n.near||p>n.far?null:{distance:p,point:zu.clone(),object:r}}function Iu(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Uu),r.getVertexPosition(m,Lu),r.getVertexPosition(p,Nu);const g=f3(r,e,n,a,Uu,Lu,Nu,Av);if(g){const _=new oe;ea.getBarycoord(Av,Uu,Lu,Nu,_),o&&(g.uv=ea.getInterpolatedAttribute(o,d,m,p,_,new Zt)),c&&(g.uv1=ea.getInterpolatedAttribute(c,d,m,p,_,new Zt)),u&&(g.normal=ea.getInterpolatedAttribute(u,d,m,p,_,new oe),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new oe,materialIndex:0};ea.getNormal(Uu,Lu,Nu,x.normal),g.face=x,g.barycoord=_}return g}class dc extends Wi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,S=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Wa(p,3)),this.setAttribute("normal",new Wa(g,3)),this.setAttribute("uv",new Wa(_,2));function M(E,y,v,L,D,I,V,N,z,K,C){const w=I/z,G=V/K,ee=I/2,ce=V/2,xe=N/2,$=z+1,P=K+1;let k=0,X=0;const de=new oe;for(let me=0;me<P;me++){const O=me*G-ce;for(let ie=0;ie<$;ie++){const Se=ie*w-ee;de[E]=Se*L,de[y]=O*D,de[v]=xe,p.push(de.x,de.y,de.z),de[E]=0,de[y]=0,de[v]=N>0?1:-1,g.push(de.x,de.y,de.z),_.push(ie/z),_.push(1-me/K),k+=1}}for(let me=0;me<K;me++)for(let O=0;O<z;O++){const ie=x+O+$*me,Se=x+O+$*(me+1),Ee=x+(O+1)+$*(me+1),Oe=x+(O+1)+$*me;m.push(ie,Se,Oe),m.push(Se,Ee,Oe),X+=6}d.addGroup(S,X,C),S+=X,x+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function ri(r){const e={};for(let n=0;n<r.length;n++){const a=Oo(r[n]);for(const o in a)e[o]=a[o]}return e}function d3(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function X2(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ht.workingColorSpace}const h3={clone:Oo,merge:ri};var p3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,m3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $a extends fc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=p3,this.fragmentShader=m3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=d3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class W2 extends gi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const As=new oe,Rv=new Zt,wv=new Zt;class ji extends W2{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_p*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _p*2*Math.atan(Math.tan(Gh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,n){return this.getViewBounds(e,Rv,wv),n.subVectors(wv,Rv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const po=-90,mo=1;class g3 extends gi{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ji(po,mo,e,n);o.layers=this.layers,this.add(o);const c=new ji(po,mo,e,n);c.layers=this.layers,this.add(c);const u=new ji(po,mo,e,n);u.layers=this.layers,this.add(u);const d=new ji(po,mo,e,n);d.layers=this.layers,this.add(d);const m=new ji(po,mo,e,n);m.layers=this.layers,this.add(m);const p=new ji(po,mo,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===pa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===of)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=E,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,S),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class q2 extends Hn{constructor(e=[],n=wo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _3 extends xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new q2(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new dc(5,5,5),c=new $a({name:"CubemapFromEquirect",uniforms:Oo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:mi,blending:ka});c.uniforms.tEquirect.value=n;const u=new Ci(o,c),d=n.minFilter;return n.minFilter===ur&&(n.minFilter=$n),new g3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class fr extends gi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const x3={type:"move"};class c0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const y=n.getJointPose(E,a),v=this._getHandJoint(p,E);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&x>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(x3)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new fr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class Qp{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new kt(e),this.near=n,this.far=a}clone(){return new Qp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class v3 extends gi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ya,this.environmentIntensity=1,this.environmentRotation=new Ya,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class b3 extends Hn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Oi,g=Oi,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const u0=new oe,y3=new oe,S3=new Et;class rr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=u0.subVectors(a,n).cross(y3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(u0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||S3.getNormalMatrix(e),o=this.coplanarPoint(u0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ir=new Sf,M3=new Zt(.5,.5),Fu=new oe;class Jp{constructor(e=new rr,n=new rr,a=new rr,o=new rr,c=new rr,u=new rr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=pa,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],S=c[7],M=c[8],E=c[9],y=c[10],v=c[11],L=c[12],D=c[13],I=c[14],V=c[15];if(o[0].setComponents(p-u,S-g,v-M,V-L).normalize(),o[1].setComponents(p+u,S+g,v+M,V+L).normalize(),o[2].setComponents(p+d,S+_,v+E,V+D).normalize(),o[3].setComponents(p-d,S-_,v-E,V-D).normalize(),a)o[4].setComponents(m,x,y,I).normalize(),o[5].setComponents(p-m,S-x,v-y,V-I).normalize();else if(o[4].setComponents(p-m,S-x,v-y,V-I).normalize(),n===pa)o[5].setComponents(p+m,S+x,v+y,V+I).normalize();else if(n===of)o[5].setComponents(m,x,y,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);const n=M3.distanceTo(e.center);return ir.radius=.7071067811865476+n,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Fu.x=o.normal.x>0?e.max.x:e.min.x,Fu.y=o.normal.y>0?e.max.y:e.min.y,Fu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yu extends fc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const lf=new oe,cf=new oe,Cv=new _n,Pl=new Zp,Bu=new Sf,f0=new oe,Dv=new oe;class E3 extends gi{constructor(e=new Wi,n=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)lf.fromBufferAttribute(n,o-1),cf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=lf.distanceTo(cf);e.setAttribute("lineDistance",new Wa(a,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Bu.copy(a.boundingSphere),Bu.applyMatrix4(o),Bu.radius+=c,e.ray.intersectsSphere(Bu)===!1)return;Cv.copy(o).invert(),Pl.copy(e.ray).applyMatrix4(Cv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const S=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let E=S,y=M-1;E<y;E+=p){const v=g.getX(E),L=g.getX(E+1),D=Hu(this,e,Pl,m,v,L,E);D&&n.push(D)}if(this.isLineLoop){const E=g.getX(M-1),y=g.getX(S),v=Hu(this,e,Pl,m,E,y,M-1);v&&n.push(v)}}else{const S=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let E=S,y=M-1;E<y;E+=p){const v=Hu(this,e,Pl,m,E,E+1,E);v&&n.push(v)}if(this.isLineLoop){const E=Hu(this,e,Pl,m,M-1,S,M-1);E&&n.push(E)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(lf.fromBufferAttribute(d,o),cf.fromBufferAttribute(d,c),n.distanceSqToSegment(lf,cf,f0,Dv)>a)return;f0.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(f0);if(!(p<e.near||p>e.far))return{distance:p,point:Dv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Ov=new oe,Uv=new oe;class d0 extends E3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Ov.fromBufferAttribute(n,o),Uv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Ov.distanceTo(Uv);e.setAttribute("lineDistance",new Wa(a,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class T3 extends Hn{constructor(e,n,a,o,c=$n,u=$n,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class A3 extends Hn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Y2 extends Hn{constructor(e,n,a=_r,o,c,u,d=Oi,m=Oi,p,g=Zl,_=1){if(g!==Zl&&g!==Kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $p(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $2 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class fa extends Wi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,S=[],M=[],E=[],y=[];for(let v=0;v<g;v++){const L=v*x-u;for(let D=0;D<p;D++){const I=D*_-c;M.push(I,-L,0),E.push(0,0,1),y.push(D/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const D=L+p*v,I=L+p*(v+1),V=L+1+p*(v+1),N=L+1+p*v;S.push(D,I,N),S.push(I,V,N)}this.setIndex(S),this.setAttribute("position",new Wa(M,3)),this.setAttribute("normal",new Wa(E,3)),this.setAttribute("uv",new Wa(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class R3 extends fc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w3 extends fc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const h0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class C3{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const S=p[_],M=p[_+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const D3=new C3;class em{constructor(e){this.manager=e!==void 0?e:D3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}em.DEFAULT_MATERIAL_NAME="__DEFAULT";const go=new WeakMap;class O3 extends em{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=h0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=go.get(u);_===void 0&&(_=[],go.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Ql("img");function m(){g(),n&&n(this);const _=go.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onLoad&&S.onLoad(this)}go.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),h0.remove(`image:${e}`);const x=go.get(this)||[];for(let S=0;S<x.length;S++){const M=x[S];M.onError&&M.onError(_)}go.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),h0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class U3 extends em{constructor(e){super(e)}load(e,n,a,o){const c=new Hn,u=new O3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class L3 extends W2{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class N3 extends ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lv=new _n;class P3{constructor(e,n,a=0,o=1/0){this.ray=new Zp(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new Kp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):gn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Lv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lv),this}intersectObject(e,n=!0,a=[]){return xp(e,this,a,n),a.sort(Nv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)xp(e[o],this,a,n);return a.sort(Nv),a}}function Nv(r,e){return r.distance-e.distance}function xp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)xp(c[u],e,n,!0)}}function Pv(r,e,n,a){const o=z3(a);switch(n){case z2:return r*e;case F2:return r*e/o.components*o.byteLength;case Xp:return r*e/o.components*o.byteLength;case Wp:return r*e*2/o.components*o.byteLength;case qp:return r*e*2/o.components*o.byteLength;case I2:return r*e*3/o.components*o.byteLength;case ta:return r*e*4/o.components*o.byteLength;case Yp:return r*e*4/o.components*o.byteLength;case ku:case Xu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Wu:case qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case k0:case W0:return Math.max(r,16)*Math.max(e,8)/4;case j0:case X0:return Math.max(r,8)*Math.max(e,8)/2;case q0:case Y0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Z0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case K0:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Q0:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case J0:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function z3(r){switch(r){case qa:case U2:return{byteLength:1,components:1};case Yl:case L2:case Io:return{byteLength:2,components:1};case jp:case kp:return{byteLength:2,components:4};case _r:case Vp:case Va:return{byteLength:4,components:1};case N2:case P2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gp}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Z2(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function I3(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((S,M)=>S.start-M.start);let x=0;for(let S=1;S<_.length;S++){const M=_[x],E=_[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++x,_[x]=E)}_.length=x+1;for(let S=0,M=_.length;S<M;S++){const E=_[S];r.bufferSubData(p,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var F3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B3=`#ifdef USE_ALPHAHASH
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
#endif`,H3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k3=`#ifdef USE_AOMAP
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
#endif`,X3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W3=`#ifdef USE_BATCHING
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
#endif`,q3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K3=`#ifdef USE_IRIDESCENCE
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
#endif`,Q3=`#ifdef USE_BUMPMAP
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
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,oM=`#define PI 3.141592653589793
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
} // validated`,lM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cM=`vec3 transformedNormal = objectNormal;
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
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pM="gl_FragColor = linearToOutputTexel( gl_FragColor );",mM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,EM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,PM=`PhysicalMaterial material;
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
#endif`,zM=`uniform sampler2D dfgLUT;
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
}`,IM=`
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
#endif`,FM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,YM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,eE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rE=`#ifdef USE_NORMALMAP
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
#endif`,oE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SE=`float getShadowMask() {
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
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,TE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
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
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
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
}`,kE=`#if DEPTH_PACKING == 3200
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
}`,XE=`#define DISTANCE
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
}`,WE=`#define DISTANCE
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,YE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,JE=`#define LAMBERT
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define MATCAP
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
}`,nT=`#define MATCAP
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
}`,iT=`#define NORMAL
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
}`,aT=`#define NORMAL
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
}`,sT=`#define PHONG
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
}`,rT=`#define PHONG
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
}`,oT=`#define STANDARD
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
}`,lT=`#define STANDARD
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
}`,cT=`#define TOON
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
}`,uT=`#define TOON
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
}`,fT=`uniform float size;
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
}`,dT=`uniform vec3 diffuse;
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
}`,hT=`#include <common>
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
}`,pT=`uniform vec3 color;
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
}`,mT=`uniform float rotation;
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
}`,gT=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:F3,alphahash_pars_fragment:B3,alphamap_fragment:H3,alphamap_pars_fragment:G3,alphatest_fragment:V3,alphatest_pars_fragment:j3,aomap_fragment:k3,aomap_pars_fragment:X3,batching_pars_vertex:W3,batching_vertex:q3,begin_vertex:Y3,beginnormal_vertex:$3,bsdfs:Z3,iridescence_fragment:K3,bumpmap_pars_fragment:Q3,clipping_planes_fragment:J3,clipping_planes_pars_fragment:eM,clipping_planes_pars_vertex:tM,clipping_planes_vertex:nM,color_fragment:iM,color_pars_fragment:aM,color_pars_vertex:sM,color_vertex:rM,common:oM,cube_uv_reflection_fragment:lM,defaultnormal_vertex:cM,displacementmap_pars_vertex:uM,displacementmap_vertex:fM,emissivemap_fragment:dM,emissivemap_pars_fragment:hM,colorspace_fragment:pM,colorspace_pars_fragment:mM,envmap_fragment:gM,envmap_common_pars_fragment:_M,envmap_pars_fragment:xM,envmap_pars_vertex:vM,envmap_physical_pars_fragment:DM,envmap_vertex:bM,fog_vertex:yM,fog_pars_vertex:SM,fog_fragment:MM,fog_pars_fragment:EM,gradientmap_pars_fragment:TM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:wM,lights_pars_begin:CM,lights_toon_fragment:OM,lights_toon_pars_fragment:UM,lights_phong_fragment:LM,lights_phong_pars_fragment:NM,lights_physical_fragment:PM,lights_physical_pars_fragment:zM,lights_fragment_begin:IM,lights_fragment_maps:FM,lights_fragment_end:BM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:VM,logdepthbuf_vertex:jM,map_fragment:kM,map_pars_fragment:XM,map_particle_fragment:WM,map_particle_pars_fragment:qM,metalnessmap_fragment:YM,metalnessmap_pars_fragment:$M,morphinstance_vertex:ZM,morphcolor_vertex:KM,morphnormal_vertex:QM,morphtarget_pars_vertex:JM,morphtarget_vertex:eE,normal_fragment_begin:tE,normal_fragment_maps:nE,normal_pars_fragment:iE,normal_pars_vertex:aE,normal_vertex:sE,normalmap_pars_fragment:rE,clearcoat_normal_fragment_begin:oE,clearcoat_normal_fragment_maps:lE,clearcoat_pars_fragment:cE,iridescence_pars_fragment:uE,opaque_fragment:fE,packing:dE,premultiplied_alpha_fragment:hE,project_vertex:pE,dithering_fragment:mE,dithering_pars_fragment:gE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:bE,shadowmap_vertex:yE,shadowmask_pars_fragment:SE,skinbase_vertex:ME,skinning_pars_vertex:EE,skinning_vertex:TE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:wE,tonemapping_fragment:CE,tonemapping_pars_fragment:DE,transmission_fragment:OE,transmission_pars_fragment:UE,uv_pars_fragment:LE,uv_pars_vertex:NE,uv_vertex:PE,worldpos_vertex:zE,background_vert:IE,background_frag:FE,backgroundCube_vert:BE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:VE,depth_vert:jE,depth_frag:kE,distanceRGBA_vert:XE,distanceRGBA_frag:WE,equirect_vert:qE,equirect_frag:YE,linedashed_vert:$E,linedashed_frag:ZE,meshbasic_vert:KE,meshbasic_frag:QE,meshlambert_vert:JE,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:aT,meshphong_vert:sT,meshphong_frag:rT,meshphysical_vert:oT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:dT,shadow_vert:hT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},je={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},da={basic:{uniforms:ri([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ri([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ri([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ri([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ri([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new kt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ri([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ri([je.points,je.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ri([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ri([je.common,je.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ri([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ri([je.sprite,je.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:ri([je.common,je.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:ri([je.lights,je.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};da.physical={uniforms:ri([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Gu={r:0,b:0,g:0},ar=new Ya,_T=new _n;function xT(r,e,n,a,o,c,u){const d=new kt(0);let m=c===!0?0:1,p,g,_=null,x=0,S=null;function M(D){let I=D.isScene===!0?D.background:null;return I&&I.isTexture&&(I=(D.backgroundBlurriness>0?n:e).get(I)),I}function E(D){let I=!1;const V=M(D);V===null?v(d,m):V&&V.isColor&&(v(V,1),I=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||I)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(D,I){const V=M(I);V&&(V.isCubeTexture||V.mapping===yf)?(g===void 0&&(g=new Ci(new dc(1,1,1),new $a({name:"BackgroundCubeMaterial",uniforms:Oo(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ar.copy(I.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(_T.makeRotationFromEuler(ar)),g.material.toneMapped=Ht.getTransfer(V.colorSpace)!==tn,(_!==V||x!==V.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,_=V,x=V.version,S=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ci(new fa(2,2),new $a({name:"BackgroundMaterial",uniforms:Oo(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Ht.getTransfer(V.colorSpace)!==tn,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||x!==V.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,_=V,x=V.version,S=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,I){D.getRGB(Gu,X2(r)),a.buffers.color.setClear(Gu.r,Gu.g,Gu.b,I,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,I=1){d.set(D),m=I,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:E,addToRenderList:y,dispose:L}}function vT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(w,G,ee,ce,xe){let $=!1;const P=_(ce,ee,G);c!==P&&(c=P,p(c.object)),$=S(w,ce,ee,xe),$&&M(w,ce,ee,xe),xe!==null&&e.update(xe,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,I(w,G,ee,ce),xe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,ee){const ce=ee.wireframe===!0;let xe=a[w.id];xe===void 0&&(xe={},a[w.id]=xe);let $=xe[G.id];$===void 0&&($={},xe[G.id]=$);let P=$[ce];return P===void 0&&(P=x(m()),$[ce]=P),P}function x(w){const G=[],ee=[],ce=[];for(let xe=0;xe<n;xe++)G[xe]=0,ee[xe]=0,ce[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:ce,object:w,attributes:{},index:null}}function S(w,G,ee,ce){const xe=c.attributes,$=G.attributes;let P=0;const k=ee.getAttributes();for(const X in k)if(k[X].location>=0){const me=xe[X];let O=$[X];if(O===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),me===void 0||me.attribute!==O||O&&me.data!==O.data)return!0;P++}return c.attributesNum!==P||c.index!==ce}function M(w,G,ee,ce){const xe={},$=G.attributes;let P=0;const k=ee.getAttributes();for(const X in k)if(k[X].location>=0){let me=$[X];me===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(me=w.instanceColor));const O={};O.attribute=me,me&&me.data&&(O.data=me.data),xe[X]=O,P++}c.attributes=xe,c.attributesNum=P,c.index=ce}function E(){const w=c.newAttributes;for(let G=0,ee=w.length;G<ee;G++)w[G]=0}function y(w){v(w,0)}function v(w,G){const ee=c.newAttributes,ce=c.enabledAttributes,xe=c.attributeDivisors;ee[w]=1,ce[w]===0&&(r.enableVertexAttribArray(w),ce[w]=1),xe[w]!==G&&(r.vertexAttribDivisor(w,G),xe[w]=G)}function L(){const w=c.newAttributes,G=c.enabledAttributes;for(let ee=0,ce=G.length;ee<ce;ee++)G[ee]!==w[ee]&&(r.disableVertexAttribArray(ee),G[ee]=0)}function D(w,G,ee,ce,xe,$,P){P===!0?r.vertexAttribIPointer(w,G,ee,xe,$):r.vertexAttribPointer(w,G,ee,ce,xe,$)}function I(w,G,ee,ce){E();const xe=ce.attributes,$=ee.getAttributes(),P=G.defaultAttributeValues;for(const k in $){const X=$[k];if(X.location>=0){let de=xe[k];if(de===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(de=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(de=w.instanceColor)),de!==void 0){const me=de.normalized,O=de.itemSize,ie=e.get(de);if(ie===void 0)continue;const Se=ie.buffer,Ee=ie.type,Oe=ie.bytesPerElement,Q=Ee===r.INT||Ee===r.UNSIGNED_INT||de.gpuType===Vp;if(de.isInterleavedBufferAttribute){const ue=de.data,Ne=ue.stride,Ze=de.offset;if(ue.isInstancedInterleavedBuffer){for(let Ye=0;Ye<X.locationSize;Ye++)v(X.location+Ye,ue.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ye=0;Ye<X.locationSize;Ye++)y(X.location+Ye);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Ye=0;Ye<X.locationSize;Ye++)D(X.location+Ye,O/X.locationSize,Ee,me,Ne*Oe,(Ze+O/X.locationSize*Ye)*Oe,Q)}else{if(de.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)v(X.location+ue,de.meshPerAttribute);w.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ue=0;ue<X.locationSize;ue++)y(X.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let ue=0;ue<X.locationSize;ue++)D(X.location+ue,O/X.locationSize,Ee,me,O*Oe,O/X.locationSize*ue*Oe,Q)}}else if(P!==void 0){const me=P[k];if(me!==void 0)switch(me.length){case 2:r.vertexAttrib2fv(X.location,me);break;case 3:r.vertexAttrib3fv(X.location,me);break;case 4:r.vertexAttrib4fv(X.location,me);break;default:r.vertexAttrib1fv(X.location,me)}}}}L()}function V(){K();for(const w in a){const G=a[w];for(const ee in G){const ce=G[ee];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete G[ee]}delete a[w]}}function N(w){if(a[w.id]===void 0)return;const G=a[w.id];for(const ee in G){const ce=G[ee];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete G[ee]}delete a[w.id]}function z(w){for(const G in a){const ee=a[G];if(ee[w.id]===void 0)continue;const ce=ee[w.id];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete ee[w.id]}}function K(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:y,disableUnusedAttributes:L}}function bT(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}function m(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],x[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*x[E];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function yT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ta&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const K=z===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==qa&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Va&&!K)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(vt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:L,maxVaryings:D,maxFragmentUniforms:I,vertexTextures:V,maxSamples:N}}function ST(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new rr,d=new Et,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||a!==0||o;return o=x,a=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,S){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||c&&!y)c?g(null):p();else{const L=c?0:a,D=L*4;let I=v.clippingState||null;m.value=I,I=g(M,x,D,S);for(let V=0;V!==D;++V)I[V]=n[V];v.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,S,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=m.value,M!==!0||y===null){const v=S+E*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,I=S;D!==E;++D,I+=4)u.copy(_[D]).applyMatrix4(L,d),u.normal.toArray(y,I),y[I+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function MT(r){let e=new WeakMap;function n(u,d){return d===B0?u.mapping=wo:d===H0&&(u.mapping=Co),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===B0||d===H0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new _3(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Cs=4,zv=[.125,.215,.35,.446,.526,.582],lr=20,ET=256,zl=new L3,Iv=new kt;let p0=null,m0=0,g0=0,_0=!1;const TT=new oe;class Fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=TT}=c;p0=this._renderer.getRenderTarget(),m0=this._renderer.getActiveCubeFace(),g0=this._renderer.getActiveMipmapLevel(),_0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(p0,m0,g0),this._renderer.xr.enabled=_0,e.scissorTest=!1,_o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===wo||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),p0=this._renderer.getRenderTarget(),m0=this._renderer.getActiveCubeFace(),g0=this._renderer.getActiveMipmapLevel(),_0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Io,format:ta,colorSpace:Do,depthBuffer:!1},o=Bv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AT(c)),this._blurMaterial=wT(c,e,n),this._ggxMaterial=RT(c,e,n)}return o}_compileMaterial(e){const n=new Ci(new Wi,e);this._renderer.compile(n,zl)}_sceneToCubeUV(e,n,a,o,c){const m=new ji(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(Iv),_.toneMapping=Ds,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ci(new dc,new Fl({name:"PMREM.Background",side:mi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let v=!1;const L=e.background;L?L.isColor&&(y.color.copy(L),e.background=null,v=!0):(y.color.copy(Iv),v=!0);for(let D=0;D<6;D++){const I=D%3;I===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):I===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const V=this._cubeSize;_o(o,I*V,D>2?V:0,V,V),_.setRenderTarget(o),v&&_.render(E,m),_.render(e,m)}_.toneMapping=S,_.autoClear=x,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===wo||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;_o(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,zl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,S=_*x,{_lodMax:M}=this,E=this._sizeLods[a],y=3*E*(a>M-Cs?a-M+Cs:0),v=4*(this._cubeSize-E);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=M-n,_o(c,y,v,3*E,2*E),o.setRenderTarget(c),o.render(d,zl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,_o(e,y,v,3*E,2*E),o.setRenderTarget(e),o.render(d,zl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&gn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*lr-1),E=c/M,y=isFinite(c)?1+Math.floor(g*E):lr;y>lr&&vt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${lr}`);const v=[];let L=0;for(let z=0;z<lr;++z){const K=z/E,C=Math.exp(-K*K/2);v.push(C),z===0?L+=C:z<y&&(L+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=M,x.mipInt.value=D-a;const I=this._sizeLods[o],V=3*I*(o>D-Cs?o-D+Cs:0),N=4*(this._cubeSize-I);_o(n,V,N,3*I,2*I),m.setRenderTarget(n),m.render(_,zl)}}function AT(r){const e=[],n=[],a=[];let o=r;const c=r-Cs+1+zv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Cs?m=zv[u-r+Cs-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,E=3,y=2,v=1,L=new Float32Array(E*M*S),D=new Float32Array(y*M*S),I=new Float32Array(v*M*S);for(let N=0;N<S;N++){const z=N%3*2/3-1,K=N>2?0:-1,C=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];L.set(C,E*M*N),D.set(x,y*M*N);const w=[N,N,N,N,N,N];I.set(w,v*M*N)}const V=new Wi;V.setAttribute("position",new ma(L,E)),V.setAttribute("uv",new ma(D,y)),V.setAttribute("faceIndex",new ma(I,v)),a.push(new Ci(V,null)),o>Cs&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function Bv(r,e,n){const a=new xr(r,e,n);return a.texture.mapping=yf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function _o(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function RT(r,e,n){return new $a({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ET,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function wT(r,e,n){const a=new Float32Array(lr),o=new oe(0,1,0);return new $a({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Hv(){return new $a({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mf(),fragmentShader:`

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
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Gv(){return new $a({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ka,depthTest:!1,depthWrite:!1})}function Mf(){return`

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
	`}function CT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===B0||m===H0,g=m===wo||m===Co;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Fv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&o(S)?(n===null&&(n=new Fv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function DT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Jl("WebGLRenderer: "+a+" extension not supported."),o}}}function OT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const S in x)e.update(x[S],r.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,M=_.attributes.position;let E=0;if(S!==null){const L=S.array;E=S.version;for(let D=0,I=L.length;D<I;D+=3){const V=L[D+0],N=L[D+1],z=L[D+2];x.push(V,N,N,z,z,V)}}else if(M!==void 0){const L=M.array;E=M.version;for(let D=0,I=L.length/3-1;D<I;D+=3){const V=D+0,N=D+1,z=D+2;x.push(V,N,N,z,z,V)}}else return;const y=new(H2(x)?k2:j2)(x,1);y.version=E;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function UT(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,S){r.drawElements(a,S,c,x*u),n.update(S,a,1)}function p(x,S,M){M!==0&&(r.drawElementsInstanced(a,S,c,x*u,M),n.update(S,a,M))}function g(x,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,c,x,0,M);let y=0;for(let v=0;v<M;v++)y+=S[v];n.update(y,a,1)}function _(x,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/u,S[v],E[v]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,c,x,0,E,0,M);let v=0;for(let L=0;L<M;L++)v+=S[L]*E[L];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function LT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:gn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function NT(r,e,n){const a=new WeakMap,o=new yn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let w=function(){K.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),y===!0&&(I=3);let V=d.attributes.position.count*I,N=1;V>e.maxTextureSize&&(N=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*N*4*_),K=new G2(z,V,N,_);K.type=Va,K.needsUpdate=!0;const C=I*4;for(let G=0;G<_;G++){const ee=v[G],ce=L[G],xe=D[G],$=V*N*4*G;for(let P=0;P<ee.count;P++){const k=P*C;M===!0&&(o.fromBufferAttribute(ee,P),z[$+k+0]=o.x,z[$+k+1]=o.y,z[$+k+2]=o.z,z[$+k+3]=0),E===!0&&(o.fromBufferAttribute(ce,P),z[$+k+4]=o.x,z[$+k+5]=o.y,z[$+k+6]=o.z,z[$+k+7]=0),y===!0&&(o.fromBufferAttribute(xe,P),z[$+k+8]=o.x,z[$+k+9]=o.y,z[$+k+10]=o.z,z[$+k+11]=xe.itemSize===4?o.w:1)}}x={count:_,texture:K,size:new Zt(V,N)},a.set(d,x),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const E=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",E),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function PT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const K2=new Hn,Vv=new Y2(1,1),Q2=new G2,J2=new e3,e1=new q2,jv=[],kv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function Bo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=jv[o];if(c===void 0&&(c=new Float32Array(o),jv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Nn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Pn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Ef(r,e){let n=kv[e];n===void 0&&(n=new Int32Array(e),kv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function zT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function IT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2fv(this.addr,e),Pn(n,e)}}function FT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nn(n,e))return;r.uniform3fv(this.addr,e),Pn(n,e)}}function BT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4fv(this.addr,e),Pn(n,e)}}function HT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pn(n,e)}else{if(Nn(n,a))return;qv.set(a),r.uniformMatrix2fv(this.addr,!1,qv),Pn(n,a)}}function GT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pn(n,e)}else{if(Nn(n,a))return;Wv.set(a),r.uniformMatrix3fv(this.addr,!1,Wv),Pn(n,a)}}function VT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Nn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pn(n,e)}else{if(Nn(n,a))return;Xv.set(a),r.uniformMatrix4fv(this.addr,!1,Xv),Pn(n,a)}}function jT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function kT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2iv(this.addr,e),Pn(n,e)}}function XT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;r.uniform3iv(this.addr,e),Pn(n,e)}}function WT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4iv(this.addr,e),Pn(n,e)}}function qT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function YT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nn(n,e))return;r.uniform2uiv(this.addr,e),Pn(n,e)}}function $T(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nn(n,e))return;r.uniform3uiv(this.addr,e),Pn(n,e)}}function ZT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nn(n,e))return;r.uniform4uiv(this.addr,e),Pn(n,e)}}function KT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Vv.compareFunction=B2,c=Vv):c=K2,n.setTexture2D(e||c,o)}function QT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||J2,o)}function JT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||e1,o)}function eA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||Q2,o)}function tA(r){switch(r){case 5126:return zT;case 35664:return IT;case 35665:return FT;case 35666:return BT;case 35674:return HT;case 35675:return GT;case 35676:return VT;case 5124:case 35670:return jT;case 35667:case 35671:return kT;case 35668:case 35672:return XT;case 35669:case 35673:return WT;case 5125:return qT;case 36294:return YT;case 36295:return $T;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return QT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return eA}}function nA(r,e){r.uniform1fv(this.addr,e)}function iA(r,e){const n=Bo(e,this.size,2);r.uniform2fv(this.addr,n)}function aA(r,e){const n=Bo(e,this.size,3);r.uniform3fv(this.addr,n)}function sA(r,e){const n=Bo(e,this.size,4);r.uniform4fv(this.addr,n)}function rA(r,e){const n=Bo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function oA(r,e){const n=Bo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function lA(r,e){const n=Bo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function cA(r,e){r.uniform1iv(this.addr,e)}function uA(r,e){r.uniform2iv(this.addr,e)}function fA(r,e){r.uniform3iv(this.addr,e)}function dA(r,e){r.uniform4iv(this.addr,e)}function hA(r,e){r.uniform1uiv(this.addr,e)}function pA(r,e){r.uniform2uiv(this.addr,e)}function mA(r,e){r.uniform3uiv(this.addr,e)}function gA(r,e){r.uniform4uiv(this.addr,e)}function _A(r,e,n){const a=this.cache,o=e.length,c=Ef(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||K2,c[u])}function xA(r,e,n){const a=this.cache,o=e.length,c=Ef(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||J2,c[u])}function vA(r,e,n){const a=this.cache,o=e.length,c=Ef(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||e1,c[u])}function bA(r,e,n){const a=this.cache,o=e.length,c=Ef(n,o);Nn(a,c)||(r.uniform1iv(this.addr,c),Pn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||Q2,c[u])}function yA(r){switch(r){case 5126:return nA;case 35664:return iA;case 35665:return aA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return lA;case 5124:case 35670:return cA;case 35667:case 35671:return uA;case 35668:case 35672:return fA;case 35669:case 35673:return dA;case 5125:return hA;case 36294:return pA;case 36295:return mA;case 36296:return gA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return bA}}class SA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=tA(n.type)}}class MA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yA(n.type)}}class EA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const x0=/(\w+)(\])?(\[|\.)?/g;function Yv(r,e){r.seq.push(e),r.map[e.id]=e}function TA(r,e,n){const a=r.name,o=a.length;for(x0.lastIndex=0;;){const c=x0.exec(a),u=x0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){Yv(n,p===void 0?new SA(d,r,e):new MA(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new EA(d),Yv(n,_)),n=_}}}class $u{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);TA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function $v(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const AA=37297;let RA=0;function wA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const Zv=new Et;function CA(r){Ht._getMatrix(Zv,Ht.workingColorSpace,r);const e=`mat3( ${Zv.elements.map(n=>n.toFixed(4))} )`;switch(Ht.getTransfer(r)){case rf:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Kv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+wA(r.getShaderSource(e),d)}else return c}function DA(r,e){const n=CA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function OA(r,e){let n;switch(e){case RS:n="Linear";break;case wS:n="Reinhard";break;case CS:n="Cineon";break;case DS:n="ACESFilmic";break;case US:n="AgX";break;case LS:n="Neutral";break;case OS:n="Custom";break;default:vt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Vu=new oe;function UA(){Ht.getLuminanceCoefficients(Vu);const r=Vu.x.toFixed(4),e=Vu.y.toFixed(4),n=Vu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function NA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function PA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Il(r){return r!==""}function Qv(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(zA,FA)}const IA=new Map;function FA(r,e){let n=Tt[e];if(n===void 0){const a=IA.get(e);if(a!==void 0)n=Tt[a],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return vp(n)}const BA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function e2(r){return r.replace(BA,HA)}function HA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function t2(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function GA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===C2?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===rS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ha&&(e="SHADOWMAP_TYPE_VSM"),e}function VA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case wo:case Co:e="ENVMAP_TYPE_CUBE";break;case yf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function kA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case D2:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case AS:e="ENVMAP_BLENDING_ADD";break}return e}function XA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function WA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=GA(n),p=VA(n),g=jA(n),_=kA(n),x=XA(n),S=LA(n),M=NA(c),E=o.createProgram();let y,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Il).join(`
`),v.length>0&&(v+=`
`)):(y=[t2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),v=[t2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ds?"#define TONE_MAPPING":"",n.toneMapping!==Ds?Tt.tonemapping_pars_fragment:"",n.toneMapping!==Ds?OA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,DA("linearToOutputTexel",n.outputColorSpace),UA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Il).join(`
`)),u=vp(u),u=Qv(u,n),u=Jv(u,n),d=vp(d),d=Qv(d,n),d=Jv(d,n),u=e2(u),d=e2(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",n.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+y+u,I=L+v+d,V=$v(o,o.VERTEX_SHADER,D),N=$v(o,o.FRAGMENT_SHADER,I);o.attachShader(E,V),o.attachShader(E,N),n.index0AttributeName!==void 0?o.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function z(G){if(r.debug.checkShaderErrors){const ee=o.getProgramInfoLog(E)||"",ce=o.getShaderInfoLog(V)||"",xe=o.getShaderInfoLog(N)||"",$=ee.trim(),P=ce.trim(),k=xe.trim();let X=!0,de=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,E,V,N);else{const me=Kv(o,V,"vertex"),O=Kv(o,N,"fragment");gn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+me+`
`+O)}else $!==""?vt("WebGLProgram: Program Info Log:",$):(P===""||k==="")&&(de=!1);de&&(G.diagnostics={runnable:X,programLog:$,vertexShader:{log:P,prefix:y},fragmentShader:{log:k,prefix:v}})}o.deleteShader(V),o.deleteShader(N),K=new $u(o,E),C=PA(o,E)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(E,AA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=RA++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=N,this}let qA=0;class YA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new $A(e),n.set(e,a)),a}}class $A{constructor(e){this.id=qA++,this.code=e,this.usedTimes=0}}function ZA(r,e,n,a,o,c,u){const d=new Kp,m=new YA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(C){return p.add(C),C===0?"uv":`uv${C}`}function y(C,w,G,ee,ce){const xe=ee.fog,$=ce.geometry,P=C.isMeshStandardMaterial?ee.environment:null,k=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),X=k&&k.mapping===yf?k.image.height:null,de=M[C.type];C.precision!==null&&(S=o.getMaxPrecision(C.precision),S!==C.precision&&vt("WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=me!==void 0?me.length:0;let ie=0;$.morphAttributes.position!==void 0&&(ie=1),$.morphAttributes.normal!==void 0&&(ie=2),$.morphAttributes.color!==void 0&&(ie=3);let Se,Ee,Oe,Q;if(de){const ct=da[de];Se=ct.vertexShader,Ee=ct.fragmentShader}else Se=C.vertexShader,Ee=C.fragmentShader,m.update(C),Oe=m.getVertexShaderID(C),Q=m.getFragmentShaderID(C);const ue=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Ze=ce.isInstancedMesh===!0,Ye=ce.isBatchedMesh===!0,gt=!!C.map,Ct=!!C.matcap,ft=!!k,mt=!!C.aoMap,B=!!C.lightMap,_t=!!C.bumpMap,yt=!!C.normalMap,Gt=!!C.displacementMap,$e=!!C.emissiveMap,Wt=!!C.metalnessMap,it=!!C.roughnessMap,pt=C.anisotropy>0,U=C.clearcoat>0,T=C.dispersion>0,Z=C.iridescence>0,ve=C.sheen>0,Te=C.transmission>0,fe=pt&&!!C.anisotropyMap,Je=U&&!!C.clearcoatMap,Ie=U&&!!C.clearcoatNormalMap,at=U&&!!C.clearcoatRoughnessMap,Qe=Z&&!!C.iridescenceMap,Ae=Z&&!!C.iridescenceThicknessMap,we=ve&&!!C.sheenColorMap,tt=ve&&!!C.sheenRoughnessMap,We=!!C.specularMap,ke=!!C.specularColorMap,dt=!!C.specularIntensityMap,H=Te&&!!C.transmissionMap,ze=Te&&!!C.thicknessMap,Ue=!!C.gradientMap,Le=!!C.alphaMap,Re=C.alphaTest>0,be=!!C.alphaHash,Xe=!!C.extensions;let pe=Ds;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(pe=r.toneMapping);const Ge={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Ee,defines:C.defines,customVertexShaderID:Oe,customFragmentShaderID:Q,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Ye,batchingColor:Ye&&ce._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&ce.instanceColor!==null,instancingMorph:Ze&&ce.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Do,alphaToCoverage:!!C.alphaToCoverage,map:gt,matcap:Ct,envMap:ft,envMapMode:ft&&k.mapping,envMapCubeUVHeight:X,aoMap:mt,lightMap:B,bumpMap:_t,normalMap:yt,displacementMap:x&&Gt,emissiveMap:$e,normalMapObjectSpace:yt&&C.normalMapType===FS,normalMapTangentSpace:yt&&C.normalMapType===IS,metalnessMap:Wt,roughnessMap:it,anisotropy:pt,anisotropyMap:fe,clearcoat:U,clearcoatMap:Je,clearcoatNormalMap:Ie,clearcoatRoughnessMap:at,dispersion:T,iridescence:Z,iridescenceMap:Qe,iridescenceThicknessMap:Ae,sheen:ve,sheenColorMap:we,sheenRoughnessMap:tt,specularMap:We,specularColorMap:ke,specularIntensityMap:dt,transmission:Te,transmissionMap:H,thicknessMap:ze,gradientMap:Ue,opaque:C.transparent===!1&&C.blending===vo&&C.alphaToCoverage===!1,alphaMap:Le,alphaTest:Re,alphaHash:be,combine:C.combine,mapUv:gt&&E(C.map.channel),aoMapUv:mt&&E(C.aoMap.channel),lightMapUv:B&&E(C.lightMap.channel),bumpMapUv:_t&&E(C.bumpMap.channel),normalMapUv:yt&&E(C.normalMap.channel),displacementMapUv:Gt&&E(C.displacementMap.channel),emissiveMapUv:$e&&E(C.emissiveMap.channel),metalnessMapUv:Wt&&E(C.metalnessMap.channel),roughnessMapUv:it&&E(C.roughnessMap.channel),anisotropyMapUv:fe&&E(C.anisotropyMap.channel),clearcoatMapUv:Je&&E(C.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&E(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&E(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&E(C.iridescenceThicknessMap.channel),sheenColorMapUv:we&&E(C.sheenColorMap.channel),sheenRoughnessMapUv:tt&&E(C.sheenRoughnessMap.channel),specularMapUv:We&&E(C.specularMap.channel),specularColorMapUv:ke&&E(C.specularColorMap.channel),specularIntensityMapUv:dt&&E(C.specularIntensityMap.channel),transmissionMapUv:H&&E(C.transmissionMap.channel),thicknessMapUv:ze&&E(C.thicknessMap.channel),alphaMapUv:Le&&E(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(yt||pt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!$.attributes.uv&&(gt||Le),fog:!!xe,useFog:C.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:ce.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:gt&&C.map.isVideoTexture===!0&&Ht.getTransfer(C.map.colorSpace)===tn,decodeVideoTextureEmissive:$e&&C.emissiveMap.isVideoTexture===!0&&Ht.getTransfer(C.emissiveMap.colorSpace)===tn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ga,flipSided:C.side===mi,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Xe&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&C.extensions.multiDraw===!0||Ye)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ge.vertexUv1s=p.has(1),Ge.vertexUv2s=p.has(2),Ge.vertexUv3s=p.has(3),p.clear(),Ge}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(w,C),D(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function D(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function I(C){const w=M[C.type];let G;if(w){const ee=da[w];G=h3.clone(ee.uniforms)}else G=C.uniforms;return G}function V(C,w){let G;for(let ee=0,ce=g.length;ee<ce;ee++){const xe=g[ee];if(xe.cacheKey===w){G=xe,++G.usedTimes;break}}return G===void 0&&(G=new WA(r,w,C,c),g.push(G)),G}function N(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function K(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:I,acquireProgram:V,releaseProgram:N,releaseShaderCache:z,programs:g,dispose:K}}function KA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function QA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function n2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function i2(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,S,M,E,y){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:M,renderOrder:_.renderOrder,z:E,group:y},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=E,v.group=y),e++,v}function d(_,x,S,M,E,y){const v=u(_,x,S,M,E,y);S.transmission>0?a.push(v):S.transparent===!0?o.push(v):n.push(v)}function m(_,x,S,M,E,y){const v=u(_,x,S,M,E,y);S.transmission>0?a.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||QA),a.length>1&&a.sort(x||n2),o.length>1&&o.sort(x||n2)}function g(){for(let _=e,x=r.length;_<x;_++){const S=r[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function JA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new i2,r.set(a,[u])):o>=c.length?(u=new i2,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function eR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new kt};break;case"SpotLight":n={position:new oe,direction:new oe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":n={color:new kt,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=n,n}}}function tR(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let nR=0;function iR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function aR(r){const e=new eR,n=tR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new oe);const o=new oe,c=new _n,u=new _n;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let S=0,M=0,E=0,y=0,v=0,L=0,D=0,I=0,V=0,N=0,z=0;p.sort(iR);for(let C=0,w=p.length;C<w;C++){const G=p[C],ee=G.color,ce=G.intensity,xe=G.distance,$=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ee.r*ce,_+=ee.g*ce,x+=ee.b*ce;else if(G.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(G.sh.coefficients[P],ce);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const k=G.shadow,X=n.get(G);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,a.directionalShadow[S]=X,a.directionalShadowMap[S]=$,a.directionalShadowMatrix[S]=G.shadow.matrix,L++}a.directional[S]=P,S++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ee).multiplyScalar(ce),P.distance=xe,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,a.spot[E]=P;const k=G.shadow;if(G.map&&(a.spotLightMap[V]=G.map,V++,k.updateMatrices(G),G.castShadow&&N++),a.spotLightMatrix[E]=k.matrix,G.castShadow){const X=n.get(G);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,a.spotShadow[E]=X,a.spotShadowMap[E]=$,I++}E++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ee).multiplyScalar(ce),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),a.rectArea[y]=P,y++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const k=G.shadow,X=n.get(G);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,a.pointShadow[M]=X,a.pointShadowMap[M]=$,a.pointShadowMatrix[M]=G.shadow.matrix,D++}a.point[M]=P,M++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(ce),P.groundColor.copy(G.groundColor).multiplyScalar(ce),a.hemi[v]=P,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=je.LTC_FLOAT_1,a.rectAreaLTC2=je.LTC_FLOAT_2):(a.rectAreaLTC1=je.LTC_HALF_1,a.rectAreaLTC2=je.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const K=a.hash;(K.directionalLength!==S||K.pointLength!==M||K.spotLength!==E||K.rectAreaLength!==y||K.hemiLength!==v||K.numDirectionalShadows!==L||K.numPointShadows!==D||K.numSpotShadows!==I||K.numSpotMaps!==V||K.numLightProbes!==z)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=y,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=I+V-N,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=z,K.directionalLength=S,K.pointLength=M,K.spotLength=E,K.rectAreaLength=y,K.hemiLength=v,K.numDirectionalShadows=L,K.numPointShadows=D,K.numSpotShadows=I,K.numSpotMaps=V,K.numLightProbes=z,a.version=nR++)}function m(p,g){let _=0,x=0,S=0,M=0,E=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const D=p[v];if(D.isDirectionalLight){const I=a.directional[_];I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),_++}else if(D.isSpotLight){const I=a.spot[S];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const I=a.rectArea[M];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),u.identity(),c.copy(D.matrixWorld),c.premultiply(y),u.extractRotation(c),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),M++}else if(D.isPointLight){const I=a.point[x];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const I=a.hemi[E];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(y),E++}}}return{setup:d,setupView:m,state:a}}function a2(r){const e=new aR(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function sR(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new a2(r),e.set(o,[d])):c>=u.length?(d=new a2(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const rR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oR=`uniform sampler2D shadow_pass;
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
}`;function lR(r,e,n){let a=new Jp;const o=new Zt,c=new Zt,u=new yn,d=new R3({depthPacking:zS}),m=new w3,p={},g=n.maxTextureSize,_={[Ls]:mi,[mi]:Ls,[Ga]:Ga},x=new $a({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:rR,fragmentShader:oR}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const M=new Wi;M.setAttribute("position",new ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ci(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=C2;let v=this.type;this.render=function(N,z,K){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ee=r.state;ee.setBlending(ka),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ce=v!==Ha&&this.type===Ha,xe=v===Ha&&this.type!==Ha;for(let $=0,P=N.length;$<P;$++){const k=N[$],X=k.shadow;if(X===void 0){vt("WebGLShadowMap:",k,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const de=X.getFrameExtents();if(o.multiply(de),c.copy(X.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/de.x),o.x=c.x*de.x,X.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/de.y),o.y=c.y*de.y,X.mapSize.y=c.y)),X.map===null||ce===!0||xe===!0){const O=this.type!==Ha?{minFilter:Oi,magFilter:Oi}:{};X.map!==null&&X.map.dispose(),X.map=new xr(o.x,o.y,O),X.map.texture.name=k.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const me=X.getViewportCount();for(let O=0;O<me;O++){const ie=X.getViewport(O);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ee.viewport(u),X.updateMatrices(k,O),a=X.getFrustum(),I(z,K,X.camera,k,this.type)}X.isPointLightShadow!==!0&&this.type===Ha&&L(X,K),X.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(C,w,G)};function L(N,z){const K=e.update(E);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new xr(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,K,x,E,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,K,S,E,null)}function D(N,z,K,C){let w=null;const G=K.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)w=G;else if(w=K.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ee=w.uuid,ce=z.uuid;let xe=p[ee];xe===void 0&&(xe={},p[ee]=xe);let $=xe[ce];$===void 0&&($=w.clone(),xe[ce]=$,z.addEventListener("dispose",V)),w=$}if(w.visible=z.visible,w.wireframe=z.wireframe,C===Ha?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ee=r.properties.get(w);ee.light=K}return w}function I(N,z,K,C,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===Ha)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,N.matrixWorld);const ce=e.update(N),xe=N.material;if(Array.isArray(xe)){const $=ce.groups;for(let P=0,k=$.length;P<k;P++){const X=$[P],de=xe[X.materialIndex];if(de&&de.visible){const me=D(N,de,C,w);N.onBeforeShadow(r,N,z,K,ce,me,X),r.renderBufferDirect(K,null,ce,me,N,X),N.onAfterShadow(r,N,z,K,ce,me,X)}}}else if(xe.visible){const $=D(N,xe,C,w);N.onBeforeShadow(r,N,z,K,ce,$,null),r.renderBufferDirect(K,null,ce,$,N,null),N.onAfterShadow(r,N,z,K,ce,$,null)}}const ee=N.children;for(let ce=0,xe=ee.length;ce<xe;ce++)I(ee[ce],z,K,C,w)}function V(N){N.target.removeEventListener("dispose",V);for(const K in p){const C=p[K],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const cR={[U0]:L0,[N0]:I0,[P0]:F0,[Ro]:z0,[L0]:U0,[I0]:N0,[F0]:P0,[z0]:Ro};function uR(r,e){function n(){let H=!1;const ze=new yn;let Ue=null;const Le=new yn(0,0,0,0);return{setMask:function(Re){Ue!==Re&&!H&&(r.colorMask(Re,Re,Re,Re),Ue=Re)},setLocked:function(Re){H=Re},setClear:function(Re,be,Xe,pe,Ge){Ge===!0&&(Re*=pe,be*=pe,Xe*=pe),ze.set(Re,be,Xe,pe),Le.equals(ze)===!1&&(r.clearColor(Re,be,Xe,pe),Le.copy(ze))},reset:function(){H=!1,Ue=null,Le.set(-1,0,0,0)}}}function a(){let H=!1,ze=!1,Ue=null,Le=null,Re=null;return{setReversed:function(be){if(ze!==be){const Xe=e.get("EXT_clip_control");be?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),ze=be;const pe=Re;Re=null,this.setClear(pe)}},getReversed:function(){return ze},setTest:function(be){be?ue(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(be){Ue!==be&&!H&&(r.depthMask(be),Ue=be)},setFunc:function(be){if(ze&&(be=cR[be]),Le!==be){switch(be){case U0:r.depthFunc(r.NEVER);break;case L0:r.depthFunc(r.ALWAYS);break;case N0:r.depthFunc(r.LESS);break;case Ro:r.depthFunc(r.LEQUAL);break;case P0:r.depthFunc(r.EQUAL);break;case z0:r.depthFunc(r.GEQUAL);break;case I0:r.depthFunc(r.GREATER);break;case F0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Le=be}},setLocked:function(be){H=be},setClear:function(be){Re!==be&&(ze&&(be=1-be),r.clearDepth(be),Re=be)},reset:function(){H=!1,Ue=null,Le=null,Re=null,ze=!1}}}function o(){let H=!1,ze=null,Ue=null,Le=null,Re=null,be=null,Xe=null,pe=null,Ge=null;return{setTest:function(ct){H||(ct?ue(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(ct){ze!==ct&&!H&&(r.stencilMask(ct),ze=ct)},setFunc:function(ct,nn,qt){(Ue!==ct||Le!==nn||Re!==qt)&&(r.stencilFunc(ct,nn,qt),Ue=ct,Le=nn,Re=qt)},setOp:function(ct,nn,qt){(be!==ct||Xe!==nn||pe!==qt)&&(r.stencilOp(ct,nn,qt),be=ct,Xe=nn,pe=qt)},setLocked:function(ct){H=ct},setClear:function(ct){Ge!==ct&&(r.clearStencil(ct),Ge=ct)},reset:function(){H=!1,ze=null,Ue=null,Le=null,Re=null,be=null,Xe=null,pe=null,Ge=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,D=null,I=null,V=null,N=null,z=new kt(0,0,0),K=0,C=!1,w=null,G=null,ee=null,ce=null,xe=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,k=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),P=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),P=k>=2);let de=null,me={};const O=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Se=new yn().fromArray(O),Ee=new yn().fromArray(ie);function Oe(H,ze,Ue,Le){const Re=new Uint8Array(4),be=r.createTexture();r.bindTexture(H,be),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xe=0;Xe<Ue;Xe++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,Le,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(ze+Xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return be}const Q={};Q[r.TEXTURE_2D]=Oe(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Oe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Oe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Oe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),u.setFunc(Ro),_t(!1),yt(av),ue(r.CULL_FACE),mt(ka);function ue(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function Ze(H,ze){return _[H]!==ze?(r.bindFramebuffer(H,ze),_[H]=ze,H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=ze),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function Ye(H,ze){let Ue=S,Le=!1;if(H){Ue=x.get(ze),Ue===void 0&&(Ue=[],x.set(ze,Ue));const Re=H.textures;if(Ue.length!==Re.length||Ue[0]!==r.COLOR_ATTACHMENT0){for(let be=0,Xe=Re.length;be<Xe;be++)Ue[be]=r.COLOR_ATTACHMENT0+be;Ue.length=Re.length,Le=!0}}else Ue[0]!==r.BACK&&(Ue[0]=r.BACK,Le=!0);Le&&r.drawBuffers(Ue)}function gt(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const Ct={[or]:r.FUNC_ADD,[lS]:r.FUNC_SUBTRACT,[cS]:r.FUNC_REVERSE_SUBTRACT};Ct[uS]=r.MIN,Ct[fS]=r.MAX;const ft={[dS]:r.ZERO,[hS]:r.ONE,[pS]:r.SRC_COLOR,[D0]:r.SRC_ALPHA,[bS]:r.SRC_ALPHA_SATURATE,[xS]:r.DST_COLOR,[gS]:r.DST_ALPHA,[mS]:r.ONE_MINUS_SRC_COLOR,[O0]:r.ONE_MINUS_SRC_ALPHA,[vS]:r.ONE_MINUS_DST_COLOR,[_S]:r.ONE_MINUS_DST_ALPHA,[yS]:r.CONSTANT_COLOR,[SS]:r.ONE_MINUS_CONSTANT_COLOR,[MS]:r.CONSTANT_ALPHA,[ES]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(H,ze,Ue,Le,Re,be,Xe,pe,Ge,ct){if(H===ka){E===!0&&(Ne(r.BLEND),E=!1);return}if(E===!1&&(ue(r.BLEND),E=!0),H!==oS){if(H!==y||ct!==C){if((v!==or||I!==or)&&(r.blendEquation(r.FUNC_ADD),v=or,I=or),ct)switch(H){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sv:r.blendFunc(r.ONE,r.ONE);break;case rv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ov:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:gn("WebGLState: Invalid blending: ",H);break}else switch(H){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case sv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case rv:gn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ov:gn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gn("WebGLState: Invalid blending: ",H);break}L=null,D=null,V=null,N=null,z.set(0,0,0),K=0,y=H,C=ct}return}Re=Re||ze,be=be||Ue,Xe=Xe||Le,(ze!==v||Re!==I)&&(r.blendEquationSeparate(Ct[ze],Ct[Re]),v=ze,I=Re),(Ue!==L||Le!==D||be!==V||Xe!==N)&&(r.blendFuncSeparate(ft[Ue],ft[Le],ft[be],ft[Xe]),L=Ue,D=Le,V=be,N=Xe),(pe.equals(z)===!1||Ge!==K)&&(r.blendColor(pe.r,pe.g,pe.b,Ge),z.copy(pe),K=Ge),y=H,C=!1}function B(H,ze){H.side===Ga?Ne(r.CULL_FACE):ue(r.CULL_FACE);let Ue=H.side===mi;ze&&(Ue=!Ue),_t(Ue),H.blending===vo&&H.transparent===!1?mt(ka):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const Le=H.stencilWrite;d.setTest(Le),Le&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),$e(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(H){w!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),w=H)}function yt(H){H!==aS?(ue(r.CULL_FACE),H!==G&&(H===av?r.cullFace(r.BACK):H===sS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),G=H}function Gt(H){H!==ee&&(P&&r.lineWidth(H),ee=H)}function $e(H,ze,Ue){H?(ue(r.POLYGON_OFFSET_FILL),(ce!==ze||xe!==Ue)&&(r.polygonOffset(ze,Ue),ce=ze,xe=Ue)):Ne(r.POLYGON_OFFSET_FILL)}function Wt(H){H?ue(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function it(H){H===void 0&&(H=r.TEXTURE0+$-1),de!==H&&(r.activeTexture(H),de=H)}function pt(H,ze,Ue){Ue===void 0&&(de===null?Ue=r.TEXTURE0+$-1:Ue=de);let Le=me[Ue];Le===void 0&&(Le={type:void 0,texture:void 0},me[Ue]=Le),(Le.type!==H||Le.texture!==ze)&&(de!==Ue&&(r.activeTexture(Ue),de=Ue),r.bindTexture(H,ze||Q[H]),Le.type=H,Le.texture=ze)}function U(){const H=me[de];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ve(){try{r.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Te(){try{r.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function fe(){try{r.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Je(){try{r.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ie(){try{r.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function at(){try{r.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Qe(){try{r.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ae(){try{r.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function we(H){Se.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function tt(H){Ee.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Ee.copy(H))}function We(H,ze){let Ue=p.get(ze);Ue===void 0&&(Ue=new WeakMap,p.set(ze,Ue));let Le=Ue.get(H);Le===void 0&&(Le=r.getUniformBlockIndex(ze,H.name),Ue.set(H,Le))}function ke(H,ze){const Le=p.get(ze).get(H);m.get(ze)!==Le&&(r.uniformBlockBinding(ze,Le,H.__bindingPointIndex),m.set(ze,Le))}function dt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},de=null,me={},_={},x=new WeakMap,S=[],M=null,E=!1,y=null,v=null,L=null,D=null,I=null,V=null,N=null,z=new kt(0,0,0),K=0,C=!1,w=null,G=null,ee=null,ce=null,xe=null,Se.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ue,disable:Ne,bindFramebuffer:Ze,drawBuffers:Ye,useProgram:gt,setBlending:mt,setMaterial:B,setFlipSided:_t,setCullFace:yt,setLineWidth:Gt,setPolygonOffset:$e,setScissorTest:Wt,activeTexture:it,bindTexture:pt,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:Z,texImage2D:Qe,texImage3D:Ae,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:Ie,texStorage3D:at,texSubImage2D:ve,texSubImage3D:Te,compressedTexSubImage2D:fe,compressedTexSubImage3D:Je,scissor:we,viewport:tt,reset:dt}}function fR(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Zt,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,T){return S?new OffscreenCanvas(U,T):Ql("canvas")}function E(U,T,Z){let ve=1;const Te=pt(U);if((Te.width>Z||Te.height>Z)&&(ve=Z/Math.max(Te.width,Te.height)),ve<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const fe=Math.floor(ve*Te.width),Je=Math.floor(ve*Te.height);_===void 0&&(_=M(fe,Je));const Ie=T?M(fe,Je):_;return Ie.width=fe,Ie.height=Je,Ie.getContext("2d").drawImage(U,0,0,fe,Je),vt("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+fe+"x"+Je+")."),Ie}else return"data"in U&&vt("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,T,Z,ve,Te=!1){if(U!==null){if(r[U]!==void 0)return r[U];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let fe=T;if(T===r.RED&&(Z===r.FLOAT&&(fe=r.R32F),Z===r.HALF_FLOAT&&(fe=r.R16F),Z===r.UNSIGNED_BYTE&&(fe=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.R8UI),Z===r.UNSIGNED_SHORT&&(fe=r.R16UI),Z===r.UNSIGNED_INT&&(fe=r.R32UI),Z===r.BYTE&&(fe=r.R8I),Z===r.SHORT&&(fe=r.R16I),Z===r.INT&&(fe=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(fe=r.RG32F),Z===r.HALF_FLOAT&&(fe=r.RG16F),Z===r.UNSIGNED_BYTE&&(fe=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RG8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RG16UI),Z===r.UNSIGNED_INT&&(fe=r.RG32UI),Z===r.BYTE&&(fe=r.RG8I),Z===r.SHORT&&(fe=r.RG16I),Z===r.INT&&(fe=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),Z===r.UNSIGNED_INT&&(fe=r.RGB32UI),Z===r.BYTE&&(fe=r.RGB8I),Z===r.SHORT&&(fe=r.RGB16I),Z===r.INT&&(fe=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),Z===r.UNSIGNED_INT&&(fe=r.RGBA32UI),Z===r.BYTE&&(fe=r.RGBA8I),Z===r.SHORT&&(fe=r.RGBA16I),Z===r.INT&&(fe=r.RGBA32I)),T===r.RGB&&(Z===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),Z===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),T===r.RGBA){const Je=Te?rf:Ht.getTransfer(ve);Z===r.FLOAT&&(fe=r.RGBA32F),Z===r.HALF_FLOAT&&(fe=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(fe=Je===tn?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(U,T){let Z;return U?T===null||T===_r||T===$l?Z=r.DEPTH24_STENCIL8:T===Va?Z=r.DEPTH32F_STENCIL8:T===Yl&&(Z=r.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===_r||T===$l?Z=r.DEPTH_COMPONENT24:T===Va?Z=r.DEPTH_COMPONENT32F:T===Yl&&(Z=r.DEPTH_COMPONENT16),Z}function V(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oi&&U.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function N(U){const T=U.target;T.removeEventListener("dispose",N),K(T),T.isVideoTexture&&g.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),w(T)}function K(U){const T=a.get(U);if(T.__webglInit===void 0)return;const Z=U.source,ve=x.get(Z);if(ve){const Te=ve[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&C(U),Object.keys(ve).length===0&&x.delete(Z)}a.remove(U)}function C(U){const T=a.get(U);r.deleteTexture(T.__webglTexture);const Z=U.source,ve=x.get(Z);delete ve[T.__cacheKey],u.memory.textures--}function w(U){const T=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ve=0;ve<6;ve++){if(Array.isArray(T.__webglFramebuffer[ve]))for(let Te=0;Te<T.__webglFramebuffer[ve].length;Te++)r.deleteFramebuffer(T.__webglFramebuffer[ve][Te]);else r.deleteFramebuffer(T.__webglFramebuffer[ve]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[ve])}else{if(Array.isArray(T.__webglFramebuffer))for(let ve=0;ve<T.__webglFramebuffer.length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[ve]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ve=0;ve<T.__webglColorRenderbuffer.length;ve++)T.__webglColorRenderbuffer[ve]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[ve]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=U.textures;for(let ve=0,Te=Z.length;ve<Te;ve++){const fe=a.get(Z[ve]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),u.memory.textures--),a.remove(Z[ve])}a.remove(U)}let G=0;function ee(){G=0}function ce(){const U=G;return U>=o.maxTextures&&vt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),G+=1,U}function xe(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function $(U,T){const Z=a.get(U);if(U.isVideoTexture&&Wt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const ve=U.image;if(ve===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,U,T);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function P(U,T){const Z=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Q(Z,U,T);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function k(U,T){const Z=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Q(Z,U,T);return}n.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function X(U,T){const Z=a.get(U);if(U.version>0&&Z.__version!==U.version){ue(Z,U,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const de={[G0]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[V0]:r.MIRRORED_REPEAT},me={[Oi]:r.NEAREST,[NS]:r.NEAREST_MIPMAP_NEAREST,[yu]:r.NEAREST_MIPMAP_LINEAR,[$n]:r.LINEAR,[Hh]:r.LINEAR_MIPMAP_NEAREST,[ur]:r.LINEAR_MIPMAP_LINEAR},O={[BS]:r.NEVER,[XS]:r.ALWAYS,[HS]:r.LESS,[B2]:r.LEQUAL,[GS]:r.EQUAL,[kS]:r.GEQUAL,[VS]:r.GREATER,[jS]:r.NOTEQUAL};function ie(U,T){if(T.type===Va&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===$n||T.magFilter===Hh||T.magFilter===yu||T.magFilter===ur||T.minFilter===$n||T.minFilter===Hh||T.minFilter===yu||T.minFilter===ur)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,de[T.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,de[T.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,de[T.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,me[T.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,me[T.minFilter]),T.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oi||T.minFilter!==yu&&T.minFilter!==ur||T.type===Va&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||a.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),a.get(T).__currentAnisotropy=T.anisotropy}}}function Se(U,T){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",N));const ve=T.source;let Te=x.get(ve);Te===void 0&&(Te={},x.set(ve,Te));const fe=xe(T);if(fe!==U.__cacheKey){Te[fe]===void 0&&(Te[fe]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),Te[fe].usedTimes++;const Je=Te[U.__cacheKey];Je!==void 0&&(Te[U.__cacheKey].usedTimes--,Je.usedTimes===0&&C(T)),U.__cacheKey=fe,U.__webglTexture=Te[fe].texture}return Z}function Ee(U,T,Z){return Math.floor(Math.floor(U/Z)/T)}function Oe(U,T,Z,ve){const fe=U.updateRanges;if(fe.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,Z,ve,T.data);else{fe.sort((Ae,we)=>Ae.start-we.start);let Je=0;for(let Ae=1;Ae<fe.length;Ae++){const we=fe[Je],tt=fe[Ae],We=we.start+we.count,ke=Ee(tt.start,T.width,4),dt=Ee(we.start,T.width,4);tt.start<=We+1&&ke===dt&&Ee(tt.start+tt.count-1,T.width,4)===ke?we.count=Math.max(we.count,tt.start+tt.count-we.start):(++Je,fe[Je]=tt)}fe.length=Je+1;const Ie=r.getParameter(r.UNPACK_ROW_LENGTH),at=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ae=0,we=fe.length;Ae<we;Ae++){const tt=fe[Ae],We=Math.floor(tt.start/4),ke=Math.ceil(tt.count/4),dt=We%T.width,H=Math.floor(We/T.width),ze=ke,Ue=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,dt),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),n.texSubImage2D(r.TEXTURE_2D,0,dt,H,ze,Ue,Z,ve,T.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ie),r.pixelStorei(r.UNPACK_SKIP_PIXELS,at),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function Q(U,T,Z){let ve=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=r.TEXTURE_3D);const Te=Se(U,T),fe=T.source;n.bindTexture(ve,U.__webglTexture,r.TEXTURE0+Z);const Je=a.get(fe);if(fe.version!==Je.__version||Te===!0){n.activeTexture(r.TEXTURE0+Z);const Ie=Ht.getPrimaries(Ht.workingColorSpace),at=T.colorSpace===ws?null:Ht.getPrimaries(T.colorSpace),Qe=T.colorSpace===ws||Ie===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Ae=E(T.image,!1,o.maxTextureSize);Ae=it(T,Ae);const we=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let We=D(T.internalFormat,we,tt,T.colorSpace,T.isVideoTexture);ie(ve,T);let ke;const dt=T.mipmaps,H=T.isVideoTexture!==!0,ze=Je.__version===void 0||Te===!0,Ue=fe.dataReady,Le=V(T,Ae);if(T.isDepthTexture)We=I(T.format===Kl,T.type),ze&&(H?n.texStorage2D(r.TEXTURE_2D,1,We,Ae.width,Ae.height):n.texImage2D(r.TEXTURE_2D,0,We,Ae.width,Ae.height,0,we,tt,null));else if(T.isDataTexture)if(dt.length>0){H&&ze&&n.texStorage2D(r.TEXTURE_2D,Le,We,dt[0].width,dt[0].height);for(let Re=0,be=dt.length;Re<be;Re++)ke=dt[Re],H?Ue&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,ke.width,ke.height,we,tt,ke.data):n.texImage2D(r.TEXTURE_2D,Re,We,ke.width,ke.height,0,we,tt,ke.data);T.generateMipmaps=!1}else H?(ze&&n.texStorage2D(r.TEXTURE_2D,Le,We,Ae.width,Ae.height),Ue&&Oe(T,Ae,we,tt)):n.texImage2D(r.TEXTURE_2D,0,We,Ae.width,Ae.height,0,we,tt,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,We,dt[0].width,dt[0].height,Ae.depth);for(let Re=0,be=dt.length;Re<be;Re++)if(ke=dt[Re],T.format!==ta)if(we!==null)if(H){if(Ue)if(T.layerUpdates.size>0){const Xe=Pv(ke.width,ke.height,T.format,T.type);for(const pe of T.layerUpdates){const Ge=ke.data.subarray(pe*Xe/ke.data.BYTES_PER_ELEMENT,(pe+1)*Xe/ke.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,pe,ke.width,ke.height,1,we,Ge)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,Ae.depth,we,ke.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,We,ke.width,ke.height,Ae.depth,0,ke.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ue&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,ke.width,ke.height,Ae.depth,we,tt,ke.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Re,We,ke.width,ke.height,Ae.depth,0,we,tt,ke.data)}else{H&&ze&&n.texStorage2D(r.TEXTURE_2D,Le,We,dt[0].width,dt[0].height);for(let Re=0,be=dt.length;Re<be;Re++)ke=dt[Re],T.format!==ta?we!==null?H?Ue&&n.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,ke.width,ke.height,we,ke.data):n.compressedTexImage2D(r.TEXTURE_2D,Re,We,ke.width,ke.height,0,ke.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ue&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,ke.width,ke.height,we,tt,ke.data):n.texImage2D(r.TEXTURE_2D,Re,We,ke.width,ke.height,0,we,tt,ke.data)}else if(T.isDataArrayTexture)if(H){if(ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Le,We,Ae.width,Ae.height,Ae.depth),Ue)if(T.layerUpdates.size>0){const Re=Pv(Ae.width,Ae.height,T.format,T.type);for(const be of T.layerUpdates){const Xe=Ae.data.subarray(be*Re/Ae.data.BYTES_PER_ELEMENT,(be+1)*Re/Ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Ae.width,Ae.height,1,we,tt,Xe)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,we,tt,Ae.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,We,Ae.width,Ae.height,Ae.depth,0,we,tt,Ae.data);else if(T.isData3DTexture)H?(ze&&n.texStorage3D(r.TEXTURE_3D,Le,We,Ae.width,Ae.height,Ae.depth),Ue&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,we,tt,Ae.data)):n.texImage3D(r.TEXTURE_3D,0,We,Ae.width,Ae.height,Ae.depth,0,we,tt,Ae.data);else if(T.isFramebufferTexture){if(ze)if(H)n.texStorage2D(r.TEXTURE_2D,Le,We,Ae.width,Ae.height);else{let Re=Ae.width,be=Ae.height;for(let Xe=0;Xe<Le;Xe++)n.texImage2D(r.TEXTURE_2D,Xe,We,Re,be,0,we,tt,null),Re>>=1,be>>=1}}else if(dt.length>0){if(H&&ze){const Re=pt(dt[0]);n.texStorage2D(r.TEXTURE_2D,Le,We,Re.width,Re.height)}for(let Re=0,be=dt.length;Re<be;Re++)ke=dt[Re],H?Ue&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,we,tt,ke):n.texImage2D(r.TEXTURE_2D,Re,We,we,tt,ke);T.generateMipmaps=!1}else if(H){if(ze){const Re=pt(Ae);n.texStorage2D(r.TEXTURE_2D,Le,We,Re.width,Re.height)}Ue&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,we,tt,Ae)}else n.texImage2D(r.TEXTURE_2D,0,We,we,tt,Ae);y(T)&&v(ve),Je.__version=fe.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ue(U,T,Z){if(T.image.length!==6)return;const ve=Se(U,T),Te=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const fe=a.get(Te);if(Te.version!==fe.__version||ve===!0){n.activeTexture(r.TEXTURE0+Z);const Je=Ht.getPrimaries(Ht.workingColorSpace),Ie=T.colorSpace===ws?null:Ht.getPrimaries(T.colorSpace),at=T.colorSpace===ws||Je===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const Qe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,we=[];for(let be=0;be<6;be++)!Qe&&!Ae?we[be]=E(T.image[be],!0,o.maxCubemapSize):we[be]=Ae?T.image[be].image:T.image[be],we[be]=it(T,we[be]);const tt=we[0],We=c.convert(T.format,T.colorSpace),ke=c.convert(T.type),dt=D(T.internalFormat,We,ke,T.colorSpace),H=T.isVideoTexture!==!0,ze=fe.__version===void 0||ve===!0,Ue=Te.dataReady;let Le=V(T,tt);ie(r.TEXTURE_CUBE_MAP,T);let Re;if(Qe){H&&ze&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,dt,tt.width,tt.height);for(let be=0;be<6;be++){Re=we[be].mipmaps;for(let Xe=0;Xe<Re.length;Xe++){const pe=Re[Xe];T.format!==ta?We!==null?H?Ue&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,pe.width,pe.height,We,pe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,dt,pe.width,pe.height,0,pe.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ue&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,0,0,pe.width,pe.height,We,ke,pe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe,dt,pe.width,pe.height,0,We,ke,pe.data)}}}else{if(Re=T.mipmaps,H&&ze){Re.length>0&&Le++;const be=pt(we[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Le,dt,be.width,be.height)}for(let be=0;be<6;be++)if(Ae){H?Ue&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,we[be].width,we[be].height,We,ke,we[be].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,dt,we[be].width,we[be].height,0,We,ke,we[be].data);for(let Xe=0;Xe<Re.length;Xe++){const Ge=Re[Xe].image[be].image;H?Ue&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,Ge.width,Ge.height,We,ke,Ge.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,dt,Ge.width,Ge.height,0,We,ke,Ge.data)}}else{H?Ue&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,We,ke,we[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,dt,We,ke,we[be]);for(let Xe=0;Xe<Re.length;Xe++){const pe=Re[Xe];H?Ue&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,0,0,We,ke,pe.image[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,Xe+1,dt,We,ke,pe.image[be])}}}y(T)&&v(r.TEXTURE_CUBE_MAP),fe.__version=Te.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Ne(U,T,Z,ve,Te,fe){const Je=c.convert(Z.format,Z.colorSpace),Ie=c.convert(Z.type),at=D(Z.internalFormat,Je,Ie,Z.colorSpace),Qe=a.get(T),Ae=a.get(Z);if(Ae.__renderTarget=T,!Qe.__hasExternalTextures){const we=Math.max(1,T.width>>fe),tt=Math.max(1,T.height>>fe);Te===r.TEXTURE_3D||Te===r.TEXTURE_2D_ARRAY?n.texImage3D(Te,fe,at,we,tt,T.depth,0,Je,Ie,null):n.texImage2D(Te,fe,at,we,tt,0,Je,Ie,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ve,Te,Ae.__webglTexture,0,Gt(T)):(Te===r.TEXTURE_2D||Te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ve,Te,Ae.__webglTexture,fe),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ze(U,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),T.depthBuffer){const ve=T.depthTexture,Te=ve&&ve.isDepthTexture?ve.type:null,fe=I(T.stencilBuffer,Te),Je=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=Gt(T);$e(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ie,fe,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ie,fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,fe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Je,r.RENDERBUFFER,U)}else{const ve=T.textures;for(let Te=0;Te<ve.length;Te++){const fe=ve[Te],Je=c.convert(fe.format,fe.colorSpace),Ie=c.convert(fe.type),at=D(fe.internalFormat,Je,Ie,fe.colorSpace),Qe=Gt(T);Z&&$e(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,at,T.width,T.height):$e(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,at,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,at,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ye(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=a.get(T.depthTexture);ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Te=ve.__webglTexture,fe=Gt(T);if(T.depthTexture.format===Zl)$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Te,0);else if(T.depthTexture.format===Kl)$e(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function gt(U){const T=a.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const ve=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ve){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ve.removeEventListener("dispose",Te)};ve.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=ve}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const ve=U.texture.mipmaps;ve&&ve.length>0?Ye(T.__webglFramebuffer[0],U):Ye(T.__webglFramebuffer,U)}else if(Z){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]===void 0)T.__webglDepthbuffer[ve]=r.createRenderbuffer(),Ze(T.__webglDepthbuffer[ve],U,!1);else{const Te=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[ve];r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,fe)}}else{const ve=U.texture.mipmaps;if(ve&&ve.length>0?n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ze(T.__webglDepthbuffer,U,!1);else{const Te=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,fe),r.framebufferRenderbuffer(r.FRAMEBUFFER,Te,r.RENDERBUFFER,fe)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(U,T,Z){const ve=a.get(U);T!==void 0&&Ne(ve.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&gt(U)}function ft(U){const T=U.texture,Z=a.get(U),ve=a.get(T);U.addEventListener("dispose",z);const Te=U.textures,fe=U.isWebGLCubeRenderTarget===!0,Je=Te.length>1;if(Je||(ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture()),ve.__version=T.version,u.memory.textures++),fe){Z.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ie]=[];for(let at=0;at<T.mipmaps.length;at++)Z.__webglFramebuffer[Ie][at]=r.createFramebuffer()}else Z.__webglFramebuffer[Ie]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)Z.__webglFramebuffer[Ie]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Je)for(let Ie=0,at=Te.length;Ie<at;Ie++){const Qe=a.get(Te[Ie]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&$e(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Te.length;Ie++){const at=Te[Ie];Z.__webglColorRenderbuffer[Ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie]);const Qe=c.convert(at.format,at.colorSpace),Ae=c.convert(at.type),we=D(at.internalFormat,Qe,Ae,at.colorSpace,U.isXRRenderTarget===!0),tt=Gt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,we,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ie,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),Ze(Z.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(fe){n.bindTexture(r.TEXTURE_CUBE_MAP,ve.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let Ie=0;Ie<6;Ie++)if(T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Ne(Z.__webglFramebuffer[Ie][at],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,at);else Ne(Z.__webglFramebuffer[Ie],U,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);y(T)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Je){for(let Ie=0,at=Te.length;Ie<at;Ie++){const Qe=Te[Ie],Ae=a.get(Qe);let we=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(we=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(we,Ae.__webglTexture),ie(we,Qe),Ne(Z.__webglFramebuffer,U,Qe,r.COLOR_ATTACHMENT0+Ie,we,0),y(Qe)&&v(we)}n.unbindTexture()}else{let Ie=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ve.__webglTexture),ie(Ie,T),T.mipmaps&&T.mipmaps.length>0)for(let at=0;at<T.mipmaps.length;at++)Ne(Z.__webglFramebuffer[at],U,T,r.COLOR_ATTACHMENT0,Ie,at);else Ne(Z.__webglFramebuffer,U,T,r.COLOR_ATTACHMENT0,Ie,0);y(T)&&v(Ie),n.unbindTexture()}U.depthBuffer&&gt(U)}function mt(U){const T=U.textures;for(let Z=0,ve=T.length;Z<ve;Z++){const Te=T[Z];if(y(Te)){const fe=L(U),Je=a.get(Te).__webglTexture;n.bindTexture(fe,Je),v(fe),n.unbindTexture()}}}const B=[],_t=[];function yt(U){if(U.samples>0){if($e(U)===!1){const T=U.textures,Z=U.width,ve=U.height;let Te=r.COLOR_BUFFER_BIT;const fe=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Je=a.get(U),Ie=T.length>1;if(Ie)for(let Qe=0;Qe<T.length;Qe++)n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const at=U.texture.mipmaps;at&&at.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let Qe=0;Qe<T.length;Qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=r.STENCIL_BUFFER_BIT)),Ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Je.__webglColorRenderbuffer[Qe]);const Ae=a.get(T[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ae,0)}r.blitFramebuffer(0,0,Z,ve,0,0,Z,ve,Te,r.NEAREST),m===!0&&(B.length=0,_t.length=0,B.push(r.COLOR_ATTACHMENT0+Qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(B.push(fe),_t.push(fe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,_t)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ie)for(let Qe=0;Qe<T.length;Qe++){n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,Je.__webglColorRenderbuffer[Qe]);const Ae=a.get(T[Qe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Je.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Ae,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const T=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Gt(U){return Math.min(o.maxSamples,U.samples)}function $e(U){const T=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(U){const T=u.render.frame;g.get(U)!==T&&(g.set(U,T),U.update())}function it(U,T){const Z=U.colorSpace,ve=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==Do&&Z!==ws&&(Ht.getTransfer(Z)===tn?(ve!==ta||Te!==qa)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gn("WebGLTextures: Unsupported texture color space:",Z)),T}function pt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ce,this.resetTextureUnits=ee,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=Ct,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=$e}function dR(r,e){function n(a,o=ws){let c;const u=Ht.getTransfer(o);if(a===qa)return r.UNSIGNED_BYTE;if(a===jp)return r.UNSIGNED_SHORT_4_4_4_4;if(a===kp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===N2)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===P2)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===U2)return r.BYTE;if(a===L2)return r.SHORT;if(a===Yl)return r.UNSIGNED_SHORT;if(a===Vp)return r.INT;if(a===_r)return r.UNSIGNED_INT;if(a===Va)return r.FLOAT;if(a===Io)return r.HALF_FLOAT;if(a===z2)return r.ALPHA;if(a===I2)return r.RGB;if(a===ta)return r.RGBA;if(a===Zl)return r.DEPTH_COMPONENT;if(a===Kl)return r.DEPTH_STENCIL;if(a===F2)return r.RED;if(a===Xp)return r.RED_INTEGER;if(a===Wp)return r.RG;if(a===qp)return r.RG_INTEGER;if(a===Yp)return r.RGBA_INTEGER;if(a===ku||a===Xu||a===Wu||a===qu)if(u===tn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ku)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Xu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ku)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Xu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===qu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===j0||a===k0||a===X0||a===W0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===j0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===k0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===X0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===W0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===q0||a===Y0||a===$0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===q0||a===Y0)return u===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===$0)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Z0||a===K0||a===Q0||a===J0||a===ep||a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Z0)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===K0)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Q0)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===J0)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===ep)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===tp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===np)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===ip)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ap)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===sp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===rp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===op)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===cp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===up||a===fp||a===dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===up)return u===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===hp||a===pp||a===mp||a===gp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$l?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pR=`
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

}`;class mR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new $2(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new $a({vertexShader:hR,fragmentShader:pR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new fa(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gR extends Fo{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,S=null,M=null;const E=typeof XRWebGLBinding<"u",y=new mR,v={},L=n.getContextAttributes();let D=null,I=null;const V=[],N=[],z=new Zt;let K=null;const C=new ji;C.viewport=new yn;const w=new ji;w.viewport=new yn;const G=[C,w],ee=new N3;let ce=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ue=V[Q];return ue===void 0&&(ue=new c0,V[Q]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Q){let ue=V[Q];return ue===void 0&&(ue=new c0,V[Q]=ue),ue.getGripSpace()},this.getHand=function(Q){let ue=V[Q];return ue===void 0&&(ue=new c0,V[Q]=ue),ue.getHandSpace()};function $(Q){const ue=N.indexOf(Q.inputSource);if(ue===-1)return;const Ne=V[ue];Ne!==void 0&&(Ne.update(Q.inputSource,Q.frame,p||u),Ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function P(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",k);for(let Q=0;Q<V.length;Q++){const ue=N[Q];ue!==null&&(N[Q]=null,V[Q].disconnect(ue))}ce=null,xe=null,y.reset();for(const Q in v)delete v[Q];e.setRenderTarget(D),S=null,x=null,_=null,o=null,I=null,Oe.stop(),a.isPresenting=!1,e.setPixelRatio(K),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,a.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,a.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",P),o.addEventListener("inputsourceschange",k),L.xrCompatible!==!0&&await n.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(z),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Ze=null,Ye=null;L.depth&&(Ye=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=L.stencil?Kl:Zl,Ze=L.stencil?$l:_r);const gt={colorFormat:n.RGBA8,depthFormat:Ye,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(gt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new xr(x.textureWidth,x.textureHeight,{format:ta,type:qa,depthTexture:new Y2(x.textureWidth,x.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Ne),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new xr(S.framebufferWidth,S.framebufferHeight,{format:ta,type:qa,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Oe.setContext(o),Oe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(Q){for(let ue=0;ue<Q.removed.length;ue++){const Ne=Q.removed[ue],Ze=N.indexOf(Ne);Ze>=0&&(N[Ze]=null,V[Ze].disconnect(Ne))}for(let ue=0;ue<Q.added.length;ue++){const Ne=Q.added[ue];let Ze=N.indexOf(Ne);if(Ze===-1){for(let gt=0;gt<V.length;gt++)if(gt>=N.length){N.push(Ne),Ze=gt;break}else if(N[gt]===null){N[gt]=Ne,Ze=gt;break}if(Ze===-1)break}const Ye=V[Ze];Ye&&Ye.connect(Ne)}}const X=new oe,de=new oe;function me(Q,ue,Ne){X.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(Ne.matrixWorld);const Ze=X.distanceTo(de),Ye=ue.projectionMatrix.elements,gt=Ne.projectionMatrix.elements,Ct=Ye[14]/(Ye[10]-1),ft=Ye[14]/(Ye[10]+1),mt=(Ye[9]+1)/Ye[5],B=(Ye[9]-1)/Ye[5],_t=(Ye[8]-1)/Ye[0],yt=(gt[8]+1)/gt[0],Gt=Ct*_t,$e=Ct*yt,Wt=Ze/(-_t+yt),it=Wt*-_t;if(ue.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(it),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ye[10]===-1)Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const pt=Ct+Wt,U=ft+Wt,T=Gt-it,Z=$e+(Ze-it),ve=mt*ft/U*pt,Te=B*ft/U*pt;Q.projectionMatrix.makePerspective(T,Z,ve,Te,pt,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function O(Q,ue){ue===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ue.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ue=Q.near,Ne=Q.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Ne=y.depthFar)),ee.near=w.near=C.near=ue,ee.far=w.far=C.far=Ne,(ce!==ee.near||xe!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),ce=ee.near,xe=ee.far),ee.layers.mask=Q.layers.mask|6,C.layers.mask=ee.layers.mask&3,w.layers.mask=ee.layers.mask&5;const Ze=Q.parent,Ye=ee.cameras;O(ee,Ze);for(let gt=0;gt<Ye.length;gt++)O(Ye[gt],Ze);Ye.length===2?me(ee,C,w):ee.projectionMatrix.copy(C.projectionMatrix),ie(Q,ee,Ze)};function ie(Q,ue,Ne){Ne===null?Q.matrix.copy(ue.matrixWorld):(Q.matrix.copy(Ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ue.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ue.projectionMatrix),Q.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_p*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(x===null&&S===null))return m},this.setFoveation=function(Q){m=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(Q){return v[Q]};let Se=null;function Ee(Q,ue){if(g=ue.getViewerPose(p||u),M=ue,g!==null){const Ne=g.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let Ze=!1;Ne.length!==ee.cameras.length&&(ee.cameras.length=0,Ze=!0);for(let ft=0;ft<Ne.length;ft++){const mt=Ne[ft];let B=null;if(S!==null)B=S.getViewport(mt);else{const yt=_.getViewSubImage(x,mt);B=yt.viewport,ft===0&&(e.setRenderTargetTextures(I,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(I))}let _t=G[ft];_t===void 0&&(_t=new ji,_t.layers.enable(ft),_t.viewport=new yn,G[ft]=_t),_t.matrix.fromArray(mt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(mt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(B.x,B.y,B.width,B.height),ft===0&&(ee.matrix.copy(_t.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ze===!0&&ee.cameras.push(_t)}const Ye=o.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){_=a.getBinding();const ft=_.getDepthInformation(Ne[0]);ft&&ft.isValid&&ft.texture&&y.init(ft,o.renderState)}if(Ye&&Ye.includes("camera-access")&&E){e.state.unbindTexture(),_=a.getBinding();for(let ft=0;ft<Ne.length;ft++){const mt=Ne[ft].camera;if(mt){let B=v[mt];B||(B=new $2,v[mt]=B);const _t=_.getCameraImage(mt);B.sourceTexture=_t}}}}for(let Ne=0;Ne<V.length;Ne++){const Ze=N[Ne],Ye=V[Ne];Ze!==null&&Ye!==void 0&&Ye.update(Ze,ue,p||u)}Se&&Se(Q,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Oe=new Z2;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(Q){Se=Q},this.dispose=function(){}}}const sr=new Ya,_R=new _n;function xR(r,e){function n(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function a(y,v){v.color.getRGB(y.fogColor.value,X2(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,L,D,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,I)):v.isMeshMatcapMaterial?(c(y,v),M(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),E(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,L,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,n(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===mi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,n(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===mi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,n(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,n(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,I=L.envMapRotation;D&&(y.envMap.value=D,sr.copy(I),sr.x*=-1,sr.y*=-1,sr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),y.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(sr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=D*.5,v.map&&(y.map.value=v.map,n(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,n(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,n(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===mi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function E(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function vR(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const I=D.program;a.uniformBlockBinding(L,I)}function p(L,D){let I=o[L.id];I===void 0&&(M(L),I=g(L),o[L.id]=I,L.addEventListener("dispose",y));const V=D.program;a.updateUBOMapping(L,V);const N=e.render.frame;c[L.id]!==N&&(x(L),c[L.id]=N)}function g(L){const D=_();L.__bindingPointIndex=D;const I=r.createBuffer(),V=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,V,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,I),I}function _(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return gn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=o[L.id],I=L.uniforms,V=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let N=0,z=I.length;N<z;N++){const K=Array.isArray(I[N])?I[N]:[I[N]];for(let C=0,w=K.length;C<w;C++){const G=K[C];if(S(G,N,C,V)===!0){const ee=G.__offset,ce=Array.isArray(G.value)?G.value:[G.value];let xe=0;for(let $=0;$<ce.length;$++){const P=ce[$],k=E(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ee+xe,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,xe),xe+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ee,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,D,I,V){const N=L.value,z=D+"_"+I;if(V[z]===void 0)return typeof N=="number"||typeof N=="boolean"?V[z]=N:V[z]=N.clone(),!0;{const K=V[z];if(typeof N=="number"||typeof N=="boolean"){if(K!==N)return V[z]=N,!0}else if(K.equals(N)===!1)return K.copy(N),!0}return!1}function M(L){const D=L.uniforms;let I=0;const V=16;for(let z=0,K=D.length;z<K;z++){const C=Array.isArray(D[z])?D[z]:[D[z]];for(let w=0,G=C.length;w<G;w++){const ee=C[w],ce=Array.isArray(ee.value)?ee.value:[ee.value];for(let xe=0,$=ce.length;xe<$;xe++){const P=ce[xe],k=E(P),X=I%V,de=X%k.boundary,me=X+de;I+=de,me!==0&&V-me<k.storage&&(I+=V-me),ee.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=I,I+=k.storage}}}const N=I%V;return N>0&&(I+=V-N),L.__size=I,L.__cache={},this}function E(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const I=u.indexOf(D.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const bR=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Ba=null;function yR(){return Ba===null&&(Ba=new b3(bR,32,32,Wp,Io),Ba.minFilter=$n,Ba.magFilter=$n,Ba.wrapS=Di,Ba.wrapT=Di,Ba.generateMipmaps=!1,Ba.needsUpdate=!0),Ba}class SR{constructor(e={}){const{canvas:n=WS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=a.getContextAttributes().alpha}else S=u;const M=new Set([Yp,qp,Xp]),E=new Set([qa,_r,Yl,$l,jp,kp]),y=new Uint32Array(4),v=new Int32Array(4);let L=null,D=null;const I=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ds,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=pi;let K=0,C=0,w=null,G=-1,ee=null;const ce=new yn,xe=new yn;let $=null;const P=new kt(0);let k=0,X=n.width,de=n.height,me=1,O=null,ie=null;const Se=new yn(0,0,X,de),Ee=new yn(0,0,X,de);let Oe=!1;const Q=new Jp;let ue=!1,Ne=!1;const Ze=new _n,Ye=new oe,gt=new yn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function mt(){return w===null?me:1}let B=a;function _t(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gp}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",Xe,!1),B===null){const W="webgl2";if(B=_t(W,R),B===null)throw _t(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}let yt,Gt,$e,Wt,it,pt,U,T,Z,ve,Te,fe,Je,Ie,at,Qe,Ae,we,tt,We,ke,dt,H,ze;function Ue(){yt=new DT(B),yt.init(),dt=new dR(B,yt),Gt=new yT(B,yt,e,dt),$e=new uR(B,yt),Gt.reversedDepthBuffer&&x&&$e.buffers.depth.setReversed(!0),Wt=new LT(B),it=new KA,pt=new fR(B,yt,$e,it,Gt,dt,Wt),U=new MT(N),T=new CT(N),Z=new I3(B),H=new vT(B,Z),ve=new OT(B,Z,Wt,H),Te=new PT(B,ve,Z,Wt),tt=new NT(B,Gt,pt),Qe=new ST(it),fe=new ZA(N,U,T,yt,Gt,H,Qe),Je=new xR(N,it),Ie=new JA,at=new sR(yt),we=new xT(N,U,T,$e,Te,S,m),Ae=new lR(N,Te,Gt),ze=new vR(B,Wt,Gt,$e),We=new bT(B,yt,Wt),ke=new UT(B,yt,Wt),Wt.programs=fe.programs,N.capabilities=Gt,N.extensions=yt,N.properties=it,N.renderLists=Ie,N.shadowMap=Ae,N.state=$e,N.info=Wt}Ue();const Le=new gR(N,B);this.xr=Le,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=yt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=yt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(R){R!==void 0&&(me=R,this.setSize(X,de,!1))},this.getSize=function(R){return R.set(X,de)},this.setSize=function(R,W,se=!0){if(Le.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,de=W,n.width=Math.floor(R*me),n.height=Math.floor(W*me),se===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(X*me,de*me).floor()},this.setDrawingBufferSize=function(R,W,se){X=R,de=W,me=se,n.width=Math.floor(R*se),n.height=Math.floor(W*se),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(ce)},this.getViewport=function(R){return R.copy(Se)},this.setViewport=function(R,W,se,J){R.isVector4?Se.set(R.x,R.y,R.z,R.w):Se.set(R,W,se,J),$e.viewport(ce.copy(Se).multiplyScalar(me).round())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,W,se,J){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,W,se,J),$e.scissor(xe.copy(Ee).multiplyScalar(me).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(R){$e.setScissorTest(Oe=R)},this.setOpaqueSort=function(R){O=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,se=!0){let J=0;if(R){let Y=!1;if(w!==null){const De=w.texture.format;Y=M.has(De)}if(Y){const De=w.texture.type,he=E.has(De),Me=we.getClearColor(),Ce=we.getClearAlpha(),Be=Me.r,qe=Me.g,Ve=Me.b;he?(y[0]=Be,y[1]=qe,y[2]=Ve,y[3]=Ce,B.clearBufferuiv(B.COLOR,0,y)):(v[0]=Be,v[1]=qe,v[2]=Ve,v[3]=Ce,B.clearBufferiv(B.COLOR,0,v))}else J|=B.COLOR_BUFFER_BIT}W&&(J|=B.DEPTH_BUFFER_BIT),se&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",Xe,!1),we.dispose(),Ie.dispose(),at.dispose(),it.dispose(),U.dispose(),T.dispose(),Te.dispose(),H.dispose(),ze.dispose(),fe.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",vi),Le.removeEventListener("sessionend",aa),Zn.stop()};function Re(R){R.preventDefault(),dv("WebGLRenderer: Context Lost."),z=!0}function be(){dv("WebGLRenderer: Context Restored."),z=!1;const R=Wt.autoReset,W=Ae.enabled,se=Ae.autoUpdate,J=Ae.needsUpdate,Y=Ae.type;Ue(),Wt.autoReset=R,Ae.enabled=W,Ae.autoUpdate=se,Ae.needsUpdate=J,Ae.type=Y}function Xe(R){gn("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const W=R.target;W.removeEventListener("dispose",pe),Ge(W)}function Ge(R){ct(R),it.remove(R)}function ct(R){const W=it.get(R).programs;W!==void 0&&(W.forEach(function(se){fe.releaseProgram(se)}),R.isShaderMaterial&&fe.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,se,J,Y,De){W===null&&(W=Ct);const he=Y.isMesh&&Y.matrixWorld.determinant()<0,Me=Ka(R,W,se,J,Y);$e.setMaterial(J,he);let Ce=se.index,Be=1;if(J.wireframe===!0){if(Ce=ve.getWireframeAttribute(se),Ce===void 0)return;Be=2}const qe=se.drawRange,Ve=se.attributes.position;let et=qe.start*Be,bt=(qe.start+qe.count)*Be;De!==null&&(et=Math.max(et,De.start*Be),bt=Math.min(bt,(De.start+De.count)*Be)),Ce!==null?(et=Math.max(et,0),bt=Math.min(bt,Ce.count)):Ve!=null&&(et=Math.max(et,0),bt=Math.min(bt,Ve.count));const ht=bt-et;if(ht<0||ht===1/0)return;H.setup(Y,J,Me,se,Ce);let lt,At=We;if(Ce!==null&&(lt=Z.get(Ce),At=ke,At.setIndex(lt)),Y.isMesh)J.wireframe===!0?($e.setLineWidth(J.wireframeLinewidth*mt()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(Y.isLine){let Fe=J.linewidth;Fe===void 0&&(Fe=1),$e.setLineWidth(Fe*mt()),Y.isLineSegments?At.setMode(B.LINES):Y.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else Y.isPoints?At.setMode(B.POINTS):Y.isSprite&&At.setMode(B.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Jl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))At.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Fe=Y._multiDrawStarts,st=Y._multiDrawCounts,ot=Y._multiDrawCount,Ut=Ce?Z.get(Ce).bytesPerElement:1,Xt=it.get(J).currentProgram.getUniforms();for(let Vt=0;Vt<ot;Vt++)Xt.setValue(B,"_gl_DrawID",Vt),At.render(Fe[Vt]/Ut,st[Vt])}else if(Y.isInstancedMesh)At.renderInstances(et,ht,Y.count);else if(se.isInstancedBufferGeometry){const Fe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,st=Math.min(se.instanceCount,Fe);At.renderInstances(et,ht,st)}else At.render(et,ht)};function nn(R,W,se){R.transparent===!0&&R.side===Ga&&R.forceSinglePass===!1?(R.side=mi,R.needsUpdate=!0,xn(R,W,se),R.side=Ls,R.needsUpdate=!0,xn(R,W,se),R.side=Ga):xn(R,W,se)}this.compile=function(R,W,se=null){se===null&&(se=R),D=at.get(se),D.init(W),V.push(D),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),R!==se&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),D.setupLights();const J=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const De=Y.material;if(De)if(Array.isArray(De))for(let he=0;he<De.length;he++){const Me=De[he];nn(Me,se,Y),J.add(Me)}else nn(De,se,Y),J.add(De)}),D=V.pop(),J},this.compileAsync=function(R,W,se=null){const J=this.compile(R,W,se);return new Promise(Y=>{function De(){if(J.forEach(function(he){it.get(he).currentProgram.isReady()&&J.delete(he)}),J.size===0){Y(R);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let qt=null;function ti(R){qt&&qt(R)}function vi(){Zn.stop()}function aa(){Zn.start()}const Zn=new Z2;Zn.setAnimationLoop(ti),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(R){qt=R,Le.setAnimationLoop(R),R===null?Zn.stop():Zn.start()},Le.addEventListener("sessionstart",vi),Le.addEventListener("sessionend",aa),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){gn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(W),W=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(N,R,W,w),D=at.get(R,V.length),D.init(W),V.push(D),Ze.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ze,pa,W.reversedDepth),Ne=this.localClippingEnabled,ue=Qe.init(this.clippingPlanes,Ne),L=Ie.get(R,I.length),L.init(),I.push(L),Le.enabled===!0&&Le.isPresenting===!0){const De=N.xr.getDepthSensingMesh();De!==null&&qi(De,W,-1/0,N.sortObjects)}qi(R,W,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(O,ie),ft=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,ft&&we.addToRenderList(L,R),this.info.render.frame++,ue===!0&&Qe.beginShadows();const se=D.state.shadowsArray;Ae.render(se,R,W),ue===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=L.opaque,Y=L.transmissive;if(D.setupLights(),W.isArrayCamera){const De=W.cameras;if(Y.length>0)for(let he=0,Me=De.length;he<Me;he++){const Ce=De[he];Ns(J,Y,R,Ce)}ft&&we.render(R);for(let he=0,Me=De.length;he<Me;he++){const Ce=De[he];ga(L,R,Ce,Ce.viewport)}}else Y.length>0&&Ns(J,Y,R,W),ft&&we.render(R),ga(L,R,W);w!==null&&C===0&&(pt.updateMultisampleRenderTarget(w),pt.updateRenderTargetMipmap(w)),R.isScene===!0&&R.onAfterRender(N,R,W),H.resetDefaultState(),G=-1,ee=null,V.pop(),V.length>0?(D=V[V.length-1],ue===!0&&Qe.setGlobalState(N.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function qi(R,W,se,J){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)se=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){J&&gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ze);const he=Te.update(R),Me=R.material;Me.visible&&L.push(R,he,Me,se,gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const he=Te.update(R),Me=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),gt.copy(R.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),gt.copy(he.boundingSphere.center)),gt.applyMatrix4(R.matrixWorld).applyMatrix4(Ze)),Array.isArray(Me)){const Ce=he.groups;for(let Be=0,qe=Ce.length;Be<qe;Be++){const Ve=Ce[Be],et=Me[Ve.materialIndex];et&&et.visible&&L.push(R,he,et,se,gt.z,Ve)}}else Me.visible&&L.push(R,he,Me,se,gt.z,null)}}const De=R.children;for(let he=0,Me=De.length;he<Me;he++)qi(De[he],W,se,J)}function ga(R,W,se,J){const{opaque:Y,transmissive:De,transparent:he}=R;D.setupLightsView(se),ue===!0&&Qe.setGlobalState(N.clippingPlanes,se),J&&$e.viewport(ce.copy(J)),Y.length>0&&jn(Y,W,se),De.length>0&&jn(De,W,se),he.length>0&&jn(he,W,se),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Ns(R,W,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[J.id]===void 0&&(D.state.transmissionRenderTarget[J.id]=new xr(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Io:qa,minFilter:ur,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ht.workingColorSpace}));const De=D.state.transmissionRenderTarget[J.id],he=J.viewport||ce;De.setSize(he.z*N.transmissionResolutionScale,he.w*N.transmissionResolutionScale);const Me=N.getRenderTarget(),Ce=N.getActiveCubeFace(),Be=N.getActiveMipmapLevel();N.setRenderTarget(De),N.getClearColor(P),k=N.getClearAlpha(),k<1&&N.setClearColor(16777215,.5),N.clear(),ft&&we.render(se);const qe=N.toneMapping;N.toneMapping=Ds;const Ve=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),ue===!0&&Qe.setGlobalState(N.clippingPlanes,J),jn(R,se,J),pt.updateMultisampleRenderTarget(De),pt.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let bt=0,ht=W.length;bt<ht;bt++){const lt=W[bt],{object:At,geometry:Fe,material:st,group:ot}=lt;if(st.side===Ga&&At.layers.test(J.layers)){const Ut=st.side;st.side=mi,st.needsUpdate=!0,un(At,se,J,Fe,st,ot),st.side=Ut,st.needsUpdate=!0,et=!0}}et===!0&&(pt.updateMultisampleRenderTarget(De),pt.updateRenderTargetMipmap(De))}N.setRenderTarget(Me,Ce,Be),N.setClearColor(P,k),Ve!==void 0&&(J.viewport=Ve),N.toneMapping=qe}function jn(R,W,se){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,De=R.length;Y<De;Y++){const he=R[Y],{object:Me,geometry:Ce,group:Be}=he;let qe=he.material;qe.allowOverride===!0&&J!==null&&(qe=J),Me.layers.test(se.layers)&&un(Me,W,se,Ce,qe,Be)}}function un(R,W,se,J,Y,De){R.onBeforeRender(N,W,se,J,Y,De),R.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(N,W,se,J,R,De),Y.transparent===!0&&Y.side===Ga&&Y.forceSinglePass===!1?(Y.side=mi,Y.needsUpdate=!0,N.renderBufferDirect(se,W,J,Y,R,De),Y.side=Ls,Y.needsUpdate=!0,N.renderBufferDirect(se,W,J,Y,R,De),Y.side=Ga):N.renderBufferDirect(se,W,J,Y,R,De),R.onAfterRender(N,W,se,J,Y,De)}function xn(R,W,se){W.isScene!==!0&&(W=Ct);const J=it.get(R),Y=D.state.lights,De=D.state.shadowsArray,he=Y.state.version,Me=fe.getParameters(R,Y.state,De,W,se),Ce=fe.getProgramCacheKey(Me);let Be=J.programs;J.environment=R.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(R.isMeshStandardMaterial?T:U).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Be===void 0&&(R.addEventListener("dispose",pe),Be=new Map,J.programs=Be);let qe=Be.get(Ce);if(qe!==void 0){if(J.currentProgram===qe&&J.lightsStateVersion===he)return Za(R,Me),qe}else Me.uniforms=fe.getUniforms(R),R.onBeforeCompile(Me,N),qe=fe.acquireProgram(Me,Ce),Be.set(Ce,qe),J.uniforms=Me.uniforms;const Ve=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=Qe.uniform),Za(R,Me),J.needsLights=br(R),J.lightsStateVersion=he,J.needsLights&&(Ve.ambientLightColor.value=Y.state.ambient,Ve.lightProbe.value=Y.state.probe,Ve.directionalLights.value=Y.state.directional,Ve.directionalLightShadows.value=Y.state.directionalShadow,Ve.spotLights.value=Y.state.spot,Ve.spotLightShadows.value=Y.state.spotShadow,Ve.rectAreaLights.value=Y.state.rectArea,Ve.ltc_1.value=Y.state.rectAreaLTC1,Ve.ltc_2.value=Y.state.rectAreaLTC2,Ve.pointLights.value=Y.state.point,Ve.pointLightShadows.value=Y.state.pointShadow,Ve.hemisphereLights.value=Y.state.hemi,Ve.directionalShadowMap.value=Y.state.directionalShadowMap,Ve.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ve.spotShadowMap.value=Y.state.spotShadowMap,Ve.spotLightMatrix.value=Y.state.spotLightMatrix,Ve.spotLightMap.value=Y.state.spotLightMap,Ve.pointShadowMap.value=Y.state.pointShadowMap,Ve.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=qe,J.uniformsList=null,qe}function ni(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=$u.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Za(R,W){const se=it.get(R);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Ka(R,W,se,J,Y){W.isScene!==!0&&(W=Ct),pt.resetTextureUnits();const De=W.fog,he=J.isMeshStandardMaterial?W.environment:null,Me=w===null?N.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Do,Ce=(J.isMeshStandardMaterial?T:U).get(J.envMap||he),Be=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,qe=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ve=!!se.morphAttributes.position,et=!!se.morphAttributes.normal,bt=!!se.morphAttributes.color;let ht=Ds;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ht=N.toneMapping);const lt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,At=lt!==void 0?lt.length:0,Fe=it.get(J),st=D.state.lights;if(ue===!0&&(Ne===!0||R!==ee)){const an=R===ee&&J.id===G;Qe.setState(J,R,an)}let ot=!1;J.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==st.state.version||Fe.outputColorSpace!==Me||Y.isBatchedMesh&&Fe.batching===!1||!Y.isBatchedMesh&&Fe.batching===!0||Y.isBatchedMesh&&Fe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Fe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Fe.instancing===!1||!Y.isInstancedMesh&&Fe.instancing===!0||Y.isSkinnedMesh&&Fe.skinning===!1||!Y.isSkinnedMesh&&Fe.skinning===!0||Y.isInstancedMesh&&Fe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Fe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Fe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Fe.instancingMorph===!1&&Y.morphTexture!==null||Fe.envMap!==Ce||J.fog===!0&&Fe.fog!==De||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Qe.numPlanes||Fe.numIntersection!==Qe.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==qe||Fe.morphTargets!==Ve||Fe.morphNormals!==et||Fe.morphColors!==bt||Fe.toneMapping!==ht||Fe.morphTargetsCount!==At)&&(ot=!0):(ot=!0,Fe.__version=J.version);let Ut=Fe.currentProgram;ot===!0&&(Ut=xn(J,W,Y));let Xt=!1,Vt=!1,ai=!1;const zt=Ut.getUniforms(),Kt=Fe.uniforms;if($e.useProgram(Ut.program)&&(Xt=!0,Vt=!0,ai=!0),J.id!==G&&(G=J.id,Vt=!0),Xt||ee!==R){$e.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",R.projectionMatrix),zt.setValue(B,"viewMatrix",R.matrixWorldInverse);const hn=zt.map.cameraPosition;hn!==void 0&&hn.setValue(B,Ye.setFromMatrixPosition(R.matrixWorld)),Gt.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zt.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,Vt=!0,ai=!0)}if(Y.isSkinnedMesh){zt.setOptional(B,Y,"bindMatrix"),zt.setOptional(B,Y,"bindMatrixInverse");const an=Y.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),zt.setValue(B,"boneTexture",an.boneTexture,pt))}Y.isBatchedMesh&&(zt.setOptional(B,Y,"batchingTexture"),zt.setValue(B,"batchingTexture",Y._matricesTexture,pt),zt.setOptional(B,Y,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",Y._indirectTexture,pt),zt.setOptional(B,Y,"batchingColorTexture"),Y._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",Y._colorsTexture,pt));const Pt=se.morphAttributes;if((Pt.position!==void 0||Pt.normal!==void 0||Pt.color!==void 0)&&tt.update(Y,se,Ut),(Vt||Fe.receiveShadow!==Y.receiveShadow)&&(Fe.receiveShadow=Y.receiveShadow,zt.setValue(B,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Kt.envMap.value=Ce,Kt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Kt.envMapIntensity.value=W.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=yR()),Vt&&(zt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Fe.needsLights&&_a(Kt,ai),De&&J.fog===!0&&Je.refreshFogUniforms(Kt,De),Je.refreshMaterialUniforms(Kt,J,me,de,D.state.transmissionRenderTarget[R.id]),$u.upload(B,ni(Fe),Kt,pt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($u.upload(B,ni(Fe),Kt,pt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zt.setValue(B,"center",Y.center),zt.setValue(B,"modelViewMatrix",Y.modelViewMatrix),zt.setValue(B,"normalMatrix",Y.normalMatrix),zt.setValue(B,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const an=J.uniformsGroups;for(let hn=0,kn=an.length;hn<kn;hn++){const Kn=an[hn];ze.update(Kn,Ut),ze.bind(Kn,Ut)}}return Ut}function _a(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function br(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(R,W,se){const J=it.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),it.get(R.texture).__webglTexture=W,it.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const se=it.get(R);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const sa=B.createFramebuffer();this.setRenderTarget=function(R,W=0,se=0){w=R,K=W,C=se;let J=!0,Y=null,De=!1,he=!1;if(R){const Ce=it.get(R);if(Ce.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(B.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)pt.setupRenderTarget(R);else if(Ce.__hasExternalTextures)pt.rebindTextures(R,it.get(R.texture).__webglTexture,it.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ve=R.depthTexture;if(Ce.__boundDepthTexture!==Ve){if(Ve!==null&&it.has(Ve)&&(R.width!==Ve.image.width||R.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(R)}}const Be=R.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);const qe=it.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?Y=qe[W][se]:Y=qe[W],De=!0):R.samples>0&&pt.useMultisampledRTT(R)===!1?Y=it.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?Y=qe[se]:Y=qe,ce.copy(R.viewport),xe.copy(R.scissor),$=R.scissorTest}else ce.copy(Se).multiplyScalar(me).floor(),xe.copy(Ee).multiplyScalar(me).floor(),$=Oe;if(se!==0&&(Y=sa),$e.bindFramebuffer(B.FRAMEBUFFER,Y)&&J&&$e.drawBuffers(R,Y),$e.viewport(ce),$e.scissor(xe),$e.setScissorTest($),De){const Ce=it.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,se)}else if(he){const Ce=W;for(let Be=0;Be<R.textures.length;Be++){const qe=it.get(R.textures[Be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Be,qe.__webglTexture,se,Ce)}}else if(R!==null&&se!==0){const Ce=it.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ce.__webglTexture,se)}G=-1},this.readRenderTargetPixels=function(R,W,se,J,Y,De,he,Me=0){if(!(R&&R.isWebGLRenderTarget)){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he]),Ce){$e.bindFramebuffer(B.FRAMEBUFFER,Ce);try{const Be=R.textures[Me],qe=Be.format,Ve=Be.type;if(!Gt.textureFormatReadable(qe)){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ve)){gn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-J&&se>=0&&se<=R.height-Y&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),B.readPixels(W,se,J,Y,dt.convert(qe),dt.convert(Ve),De))}finally{const Be=w!==null?it.get(w).__webglFramebuffer:null;$e.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(R,W,se,J,Y,De,he,Me=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he]),Ce)if(W>=0&&W<=R.width-J&&se>=0&&se<=R.height-Y){$e.bindFramebuffer(B.FRAMEBUFFER,Ce);const Be=R.textures[Me],qe=Be.format,Ve=Be.type;if(!Gt.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.bufferData(B.PIXEL_PACK_BUFFER,De.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me),B.readPixels(W,se,J,Y,dt.convert(qe),dt.convert(Ve),0);const bt=w!==null?it.get(w).__webglFramebuffer:null;$e.bindFramebuffer(B.FRAMEBUFFER,bt);const ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qS(B,ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,De),B.deleteBuffer(et),B.deleteSync(ht),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,se=0){const J=Math.pow(2,-se),Y=Math.floor(R.image.width*J),De=Math.floor(R.image.height*J),he=W!==null?W.x:0,Me=W!==null?W.y:0;pt.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,se,0,0,he,Me,Y,De),$e.unbindTexture()};const ra=B.createFramebuffer(),ii=B.createFramebuffer();this.copyTextureToTexture=function(R,W,se=null,J=null,Y=0,De=null){De===null&&(Y!==0?(Jl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Y,Y=0):De=0);let he,Me,Ce,Be,qe,Ve,et,bt,ht;const lt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(se!==null)he=se.max.x-se.min.x,Me=se.max.y-se.min.y,Ce=se.isBox3?se.max.z-se.min.z:1,Be=se.min.x,qe=se.min.y,Ve=se.isBox3?se.min.z:0;else{const Pt=Math.pow(2,-Y);he=Math.floor(lt.width*Pt),Me=Math.floor(lt.height*Pt),R.isDataArrayTexture?Ce=lt.depth:R.isData3DTexture?Ce=Math.floor(lt.depth*Pt):Ce=1,Be=0,qe=0,Ve=0}J!==null?(et=J.x,bt=J.y,ht=J.z):(et=0,bt=0,ht=0);const At=dt.convert(W.format),Fe=dt.convert(W.type);let st;W.isData3DTexture?(pt.setTexture3D(W,0),st=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(pt.setTexture2DArray(W,0),st=B.TEXTURE_2D_ARRAY):(pt.setTexture2D(W,0),st=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const ot=B.getParameter(B.UNPACK_ROW_LENGTH),Ut=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Xt=B.getParameter(B.UNPACK_SKIP_PIXELS),Vt=B.getParameter(B.UNPACK_SKIP_ROWS),ai=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),B.pixelStorei(B.UNPACK_SKIP_ROWS,qe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve);const zt=R.isDataArrayTexture||R.isData3DTexture,Kt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Pt=it.get(R),an=it.get(W),hn=it.get(Pt.__renderTarget),kn=it.get(an.__renderTarget);$e.bindFramebuffer(B.READ_FRAMEBUFFER,hn.__webglFramebuffer),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Kn=0;Kn<Ce;Kn++)zt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,it.get(R).__webglTexture,Y,Ve+Kn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,it.get(W).__webglTexture,De,ht+Kn)),B.blitFramebuffer(Be,qe,he,Me,et,bt,he,Me,B.DEPTH_BUFFER_BIT,B.NEAREST);$e.bindFramebuffer(B.READ_FRAMEBUFFER,null),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||it.has(R)){const Pt=it.get(R),an=it.get(W);$e.bindFramebuffer(B.READ_FRAMEBUFFER,ra),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,ii);for(let hn=0;hn<Ce;hn++)zt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Pt.__webglTexture,Y,Ve+hn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pt.__webglTexture,Y),Kt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,De,ht+hn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,De),Y!==0?B.blitFramebuffer(Be,qe,he,Me,et,bt,he,Me,B.COLOR_BUFFER_BIT,B.NEAREST):Kt?B.copyTexSubImage3D(st,De,et,bt,ht+hn,Be,qe,he,Me):B.copyTexSubImage2D(st,De,et,bt,Be,qe,he,Me);$e.bindFramebuffer(B.READ_FRAMEBUFFER,null),$e.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Kt?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(st,De,et,bt,ht,he,Me,Ce,At,Fe,lt.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(st,De,et,bt,ht,he,Me,Ce,At,lt.data):B.texSubImage3D(st,De,et,bt,ht,he,Me,Ce,At,Fe,lt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,De,et,bt,he,Me,At,Fe,lt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,De,et,bt,lt.width,lt.height,At,lt.data):B.texSubImage2D(B.TEXTURE_2D,De,et,bt,he,Me,At,Fe,lt);B.pixelStorei(B.UNPACK_ROW_LENGTH,ot),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Vt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ai),De===0&&W.generateMipmaps&&B.generateMipmap(st),$e.unbindTexture()},this.initRenderTarget=function(R){it.get(R).__webglFramebuffer===void 0&&pt.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?pt.setTextureCube(R,0):R.isData3DTexture?pt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?pt.setTexture2DArray(R,0):pt.setTexture2D(R,0),$e.unbindTexture()},this.resetState=function(){K=0,C=0,w=null,$e.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ht._getUnpackColorSpace()}}const MR="/MarcoinSF/assets/2021-10-31-P_JYddXs.JPG",ER=Object.freeze(Object.defineProperty({__proto__:null,default:MR},Symbol.toStringTag,{value:"Module"})),TR="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",AR=Object.freeze(Object.defineProperty({__proto__:null,default:TR},Symbol.toStringTag,{value:"Module"})),RR="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",wR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),CR="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",DR=Object.freeze(Object.defineProperty({__proto__:null,default:CR},Symbol.toStringTag,{value:"Module"})),OR="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",UR=Object.freeze(Object.defineProperty({__proto__:null,default:OR},Symbol.toStringTag,{value:"Module"})),LR="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",NR=Object.freeze(Object.defineProperty({__proto__:null,default:LR},Symbol.toStringTag,{value:"Module"})),PR="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",zR=Object.freeze(Object.defineProperty({__proto__:null,default:PR},Symbol.toStringTag,{value:"Module"})),IR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",FR=Object.freeze(Object.defineProperty({__proto__:null,default:IR},Symbol.toStringTag,{value:"Module"})),BR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",HR=Object.freeze(Object.defineProperty({__proto__:null,default:BR},Symbol.toStringTag,{value:"Module"})),GR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",VR=Object.freeze(Object.defineProperty({__proto__:null,default:GR},Symbol.toStringTag,{value:"Module"})),jR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",kR=Object.freeze(Object.defineProperty({__proto__:null,default:jR},Symbol.toStringTag,{value:"Module"})),XR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",WR=Object.freeze(Object.defineProperty({__proto__:null,default:XR},Symbol.toStringTag,{value:"Module"})),qR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",YR=Object.freeze(Object.defineProperty({__proto__:null,default:qR},Symbol.toStringTag,{value:"Module"})),$R="/MarcoinSF/assets/2024-05-14-Dirs4CkQ.jpeg",ZR=Object.freeze(Object.defineProperty({__proto__:null,default:$R},Symbol.toStringTag,{value:"Module"})),KR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",QR=Object.freeze(Object.defineProperty({__proto__:null,default:KR},Symbol.toStringTag,{value:"Module"})),JR="/MarcoinSF/assets/2024-07-28-DoG5eYmo.mp4",ew=Object.freeze(Object.defineProperty({__proto__:null,default:JR},Symbol.toStringTag,{value:"Module"})),tw="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",nw=Object.freeze(Object.defineProperty({__proto__:null,default:tw},Symbol.toStringTag,{value:"Module"})),iw="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",aw=Object.freeze(Object.defineProperty({__proto__:null,default:iw},Symbol.toStringTag,{value:"Module"})),sw="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",rw=Object.freeze(Object.defineProperty({__proto__:null,default:sw},Symbol.toStringTag,{value:"Module"})),ow="/MarcoinSF/assets/2024-08-23-1-zHKGYiam.jpeg",lw=Object.freeze(Object.defineProperty({__proto__:null,default:ow},Symbol.toStringTag,{value:"Module"})),cw="/MarcoinSF/assets/2024-08-23-3-DZL7AOVs.jpeg",uw=Object.freeze(Object.defineProperty({__proto__:null,default:cw},Symbol.toStringTag,{value:"Module"})),fw="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",dw=Object.freeze(Object.defineProperty({__proto__:null,default:fw},Symbol.toStringTag,{value:"Module"})),hw="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",pw=Object.freeze(Object.defineProperty({__proto__:null,default:hw},Symbol.toStringTag,{value:"Module"})),mw="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",gw=Object.freeze(Object.defineProperty({__proto__:null,default:mw},Symbol.toStringTag,{value:"Module"})),_w="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",xw=Object.freeze(Object.defineProperty({__proto__:null,default:_w},Symbol.toStringTag,{value:"Module"})),vw="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",bw=Object.freeze(Object.defineProperty({__proto__:null,default:vw},Symbol.toStringTag,{value:"Module"})),yw="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",Sw=Object.freeze(Object.defineProperty({__proto__:null,default:yw},Symbol.toStringTag,{value:"Module"})),Mw="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",Ew=Object.freeze(Object.defineProperty({__proto__:null,default:Mw},Symbol.toStringTag,{value:"Module"})),Tw="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",Aw=Object.freeze(Object.defineProperty({__proto__:null,default:Tw},Symbol.toStringTag,{value:"Module"})),Rw="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",ww=Object.freeze(Object.defineProperty({__proto__:null,default:Rw},Symbol.toStringTag,{value:"Module"})),Cw="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",Dw=Object.freeze(Object.defineProperty({__proto__:null,default:Cw},Symbol.toStringTag,{value:"Module"})),Ow="/MarcoinSF/assets/2024-09-25-BtbmW8ns.jpeg",Uw=Object.freeze(Object.defineProperty({__proto__:null,default:Ow},Symbol.toStringTag,{value:"Module"})),Lw="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",Nw=Object.freeze(Object.defineProperty({__proto__:null,default:Lw},Symbol.toStringTag,{value:"Module"})),Pw="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",zw=Object.freeze(Object.defineProperty({__proto__:null,default:Pw},Symbol.toStringTag,{value:"Module"})),Iw="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",Fw=Object.freeze(Object.defineProperty({__proto__:null,default:Iw},Symbol.toStringTag,{value:"Module"})),Bw="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",Hw=Object.freeze(Object.defineProperty({__proto__:null,default:Bw},Symbol.toStringTag,{value:"Module"})),Gw="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",Vw=Object.freeze(Object.defineProperty({__proto__:null,default:Gw},Symbol.toStringTag,{value:"Module"})),jw="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",kw=Object.freeze(Object.defineProperty({__proto__:null,default:jw},Symbol.toStringTag,{value:"Module"})),Xw="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",Ww=Object.freeze(Object.defineProperty({__proto__:null,default:Xw},Symbol.toStringTag,{value:"Module"})),qw="/MarcoinSF/assets/2024-10-20-3nGD_4Ej.mp4",Yw=Object.freeze(Object.defineProperty({__proto__:null,default:qw},Symbol.toStringTag,{value:"Module"})),$w="/MarcoinSF/assets/2024-10-22-Bfi-n3YD.JPG",Zw=Object.freeze(Object.defineProperty({__proto__:null,default:$w},Symbol.toStringTag,{value:"Module"})),Kw="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",Qw=Object.freeze(Object.defineProperty({__proto__:null,default:Kw},Symbol.toStringTag,{value:"Module"})),Jw="/MarcoinSF/assets/2024-11-01-B0vPq0V1.mp4",eC=Object.freeze(Object.defineProperty({__proto__:null,default:Jw},Symbol.toStringTag,{value:"Module"})),tC="/MarcoinSF/assets/2024-11-03-C4k0HJqk.mp4",nC=Object.freeze(Object.defineProperty({__proto__:null,default:tC},Symbol.toStringTag,{value:"Module"})),iC="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",aC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),sC="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",rC=Object.freeze(Object.defineProperty({__proto__:null,default:sC},Symbol.toStringTag,{value:"Module"})),oC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",lC=Object.freeze(Object.defineProperty({__proto__:null,default:oC},Symbol.toStringTag,{value:"Module"})),cC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",uC=Object.freeze(Object.defineProperty({__proto__:null,default:cC},Symbol.toStringTag,{value:"Module"})),fC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",dC=Object.freeze(Object.defineProperty({__proto__:null,default:fC},Symbol.toStringTag,{value:"Module"})),hC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",pC=Object.freeze(Object.defineProperty({__proto__:null,default:hC},Symbol.toStringTag,{value:"Module"})),mC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",gC=Object.freeze(Object.defineProperty({__proto__:null,default:mC},Symbol.toStringTag,{value:"Module"})),_C="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",xC=Object.freeze(Object.defineProperty({__proto__:null,default:_C},Symbol.toStringTag,{value:"Module"})),vC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",bC=Object.freeze(Object.defineProperty({__proto__:null,default:vC},Symbol.toStringTag,{value:"Module"})),yC="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",SC=Object.freeze(Object.defineProperty({__proto__:null,default:yC},Symbol.toStringTag,{value:"Module"})),MC="/MarcoinSF/assets/2025-02-26-weniPF9W.JPG",EC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),TC="/MarcoinSF/assets/2025-02-26-CsXnUoPc.jpeg",AC=Object.freeze(Object.defineProperty({__proto__:null,default:TC},Symbol.toStringTag,{value:"Module"})),RC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",wC=Object.freeze(Object.defineProperty({__proto__:null,default:RC},Symbol.toStringTag,{value:"Module"})),CC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",DC=Object.freeze(Object.defineProperty({__proto__:null,default:CC},Symbol.toStringTag,{value:"Module"})),OC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",UC=Object.freeze(Object.defineProperty({__proto__:null,default:OC},Symbol.toStringTag,{value:"Module"})),LC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",NC=Object.freeze(Object.defineProperty({__proto__:null,default:LC},Symbol.toStringTag,{value:"Module"})),PC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",zC=Object.freeze(Object.defineProperty({__proto__:null,default:PC},Symbol.toStringTag,{value:"Module"})),IC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",FC=Object.freeze(Object.defineProperty({__proto__:null,default:IC},Symbol.toStringTag,{value:"Module"})),BC="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",HC=Object.freeze(Object.defineProperty({__proto__:null,default:BC},Symbol.toStringTag,{value:"Module"})),GC="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",VC=Object.freeze(Object.defineProperty({__proto__:null,default:GC},Symbol.toStringTag,{value:"Module"})),jC="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",kC=Object.freeze(Object.defineProperty({__proto__:null,default:jC},Symbol.toStringTag,{value:"Module"})),XC="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",WC=Object.freeze(Object.defineProperty({__proto__:null,default:XC},Symbol.toStringTag,{value:"Module"})),qC="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",YC=Object.freeze(Object.defineProperty({__proto__:null,default:qC},Symbol.toStringTag,{value:"Module"})),$C="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",ZC=Object.freeze(Object.defineProperty({__proto__:null,default:$C},Symbol.toStringTag,{value:"Module"})),KC="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",QC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),JC="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",e4=Object.freeze(Object.defineProperty({__proto__:null,default:JC},Symbol.toStringTag,{value:"Module"})),t4="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",n4=Object.freeze(Object.defineProperty({__proto__:null,default:t4},Symbol.toStringTag,{value:"Module"})),i4="/MarcoinSF/assets/2025-06-09-xDmcrKNe.mp4",a4=Object.freeze(Object.defineProperty({__proto__:null,default:i4},Symbol.toStringTag,{value:"Module"})),s4="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",r4=Object.freeze(Object.defineProperty({__proto__:null,default:s4},Symbol.toStringTag,{value:"Module"})),o4="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",l4=Object.freeze(Object.defineProperty({__proto__:null,default:o4},Symbol.toStringTag,{value:"Module"})),c4="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",u4=Object.freeze(Object.defineProperty({__proto__:null,default:c4},Symbol.toStringTag,{value:"Module"})),f4="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",d4=Object.freeze(Object.defineProperty({__proto__:null,default:f4},Symbol.toStringTag,{value:"Module"})),h4="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",p4=Object.freeze(Object.defineProperty({__proto__:null,default:h4},Symbol.toStringTag,{value:"Module"})),m4="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",g4=Object.freeze(Object.defineProperty({__proto__:null,default:m4},Symbol.toStringTag,{value:"Module"})),_4="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",x4=Object.freeze(Object.defineProperty({__proto__:null,default:_4},Symbol.toStringTag,{value:"Module"})),v4="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",b4=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),y4="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",S4=Object.freeze(Object.defineProperty({__proto__:null,default:y4},Symbol.toStringTag,{value:"Module"})),M4="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",E4=Object.freeze(Object.defineProperty({__proto__:null,default:M4},Symbol.toStringTag,{value:"Module"})),T4="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",A4=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),R4="/MarcoinSF/assets/2025-08-16-BOeyTKzo.mp4",w4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),C4="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",D4=Object.freeze(Object.defineProperty({__proto__:null,default:C4},Symbol.toStringTag,{value:"Module"})),O4="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",U4=Object.freeze(Object.defineProperty({__proto__:null,default:O4},Symbol.toStringTag,{value:"Module"})),L4="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",N4=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),P4="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",z4=Object.freeze(Object.defineProperty({__proto__:null,default:P4},Symbol.toStringTag,{value:"Module"})),I4="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",F4=Object.freeze(Object.defineProperty({__proto__:null,default:I4},Symbol.toStringTag,{value:"Module"})),B4="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",H4=Object.freeze(Object.defineProperty({__proto__:null,default:B4},Symbol.toStringTag,{value:"Module"})),G4="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",V4=Object.freeze(Object.defineProperty({__proto__:null,default:G4},Symbol.toStringTag,{value:"Module"})),j4="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",k4=Object.freeze(Object.defineProperty({__proto__:null,default:j4},Symbol.toStringTag,{value:"Module"})),X4="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",W4=Object.freeze(Object.defineProperty({__proto__:null,default:X4},Symbol.toStringTag,{value:"Module"})),q4="/MarcoinSF/assets/2025-11-04-CxajqofK.jpeg",Y4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),$4="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",Z4=Object.freeze(Object.defineProperty({__proto__:null,default:$4},Symbol.toStringTag,{value:"Module"})),K4="/MarcoinSF/assets/2025-11-09-B-v5Ulwz.mp4",Q4=Object.freeze(Object.defineProperty({__proto__:null,default:K4},Symbol.toStringTag,{value:"Module"})),J4="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",eD=Object.freeze(Object.defineProperty({__proto__:null,default:J4},Symbol.toStringTag,{value:"Module"})),tD="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",nD=Object.freeze(Object.defineProperty({__proto__:null,default:tD},Symbol.toStringTag,{value:"Module"})),iD="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",aD=Object.freeze(Object.defineProperty({__proto__:null,default:iD},Symbol.toStringTag,{value:"Module"})),sD="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",rD=Object.freeze(Object.defineProperty({__proto__:null,default:sD},Symbol.toStringTag,{value:"Module"})),oD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",lD=Object.freeze(Object.defineProperty({__proto__:null,default:oD},Symbol.toStringTag,{value:"Module"})),cD="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",uD=Object.freeze(Object.defineProperty({__proto__:null,default:cD},Symbol.toStringTag,{value:"Module"})),fD="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",dD=Object.freeze(Object.defineProperty({__proto__:null,default:fD},Symbol.toStringTag,{value:"Module"})),hD="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",pD=Object.freeze(Object.defineProperty({__proto__:null,default:hD},Symbol.toStringTag,{value:"Module"})),t1="/MarcoinSF/assets/Ignore_2024-08-23-5-CqrWweLB.png",mD=Object.freeze(Object.defineProperty({__proto__:null,default:t1},Symbol.toStringTag,{value:"Module"})),n1="/MarcoinSF/assets/Ignore_2025-05-10-06-CBdoQwmN.png",gD=Object.freeze(Object.defineProperty({__proto__:null,default:n1},Symbol.toStringTag,{value:"Module"})),_D="/MarcoinSF/assets/BeggingBuddha-CATTcvPs.mp3",xD="/MarcoinSF/assets/FujiMt-CkmfackC.mp3",vD="/MarcoinSF/assets/Handbeaten-fishball-55E7UMtG.mp3",bD="/MarcoinSF/assets/LouMei-B79Jap0g.mp3",v0=[{title:"Handbeaten Fishball",src:vD},{title:"Begging Buddha",src:_D},{title:"Fuji Mt",src:xD},{title:"Lou Mei",src:bD}],yD=Object.assign({"./assets/media/2021-10-31.JPG":ER,"./assets/media/2021-10-31.jpeg":AR,"./assets/media/2021-12-10.jpg":wR,"./assets/media/2022-05-13.JPG":DR,"./assets/media/2022-06-13.jpeg":UR,"./assets/media/2022-07-06-2.jpeg":NR,"./assets/media/2022-08-14.JPG":zR,"./assets/media/2022-10-29 Large.jpeg":FR,"./assets/media/2023-01-01.jpeg":HR,"./assets/media/2023-03-01.jpeg":VR,"./assets/media/2024-03-09-1.jpeg":kR,"./assets/media/2024-03-09.jpeg":WR,"./assets/media/2024-05-05.jpeg":YR,"./assets/media/2024-05-14.jpeg":ZR,"./assets/media/2024-07-21.mp4":QR,"./assets/media/2024-07-28.mp4":ew,"./assets/media/2024-07-31.jpeg":nw,"./assets/media/2024-08-10-1.mp4":aw,"./assets/media/2024-08-10.jpeg":rw,"./assets/media/2024-08-23-1.jpeg":lw,"./assets/media/2024-08-23-3.jpeg":uw,"./assets/media/2024-08-23-4.jpg":dw,"./assets/media/2024-08-23.jpg":pw,"./assets/media/2024-08-23.mp4":gw,"./assets/media/2024-08-25.mp4":xw,"./assets/media/2024-09-01.jpeg":bw,"./assets/media/2024-09-02.jpeg":Sw,"./assets/media/2024-09-08.jpeg":Ew,"./assets/media/2024-09-19-02.JPG":Aw,"./assets/media/2024-09-19-03.mp4":ww,"./assets/media/2024-09-19.jpg":Dw,"./assets/media/2024-09-25.jpeg":Uw,"./assets/media/2024-10-15.jpeg":Nw,"./assets/media/2024-10-20-1.jpeg":zw,"./assets/media/2024-10-20-2.jpeg":Fw,"./assets/media/2024-10-20-3.jpeg":Hw,"./assets/media/2024-10-20-4.mp4":Vw,"./assets/media/2024-10-20-7 Large.jpeg":kw,"./assets/media/2024-10-20.jpeg":Ww,"./assets/media/2024-10-20.mp4":Yw,"./assets/media/2024-10-22.JPG":Zw,"./assets/media/2024-10-26.jpeg":Qw,"./assets/media/2024-11-01.mp4":eC,"./assets/media/2024-11-03.mp4":nC,"./assets/media/2024-11-08.jpeg":aC,"./assets/media/2024-11-17-1.jpeg":rC,"./assets/media/2024-11-17-2.jpeg":lC,"./assets/media/2024-11-17-2.mp4":uC,"./assets/media/2024-11-17-3.jpg":dC,"./assets/media/2024-11-17.jpeg":pC,"./assets/media/2024-12-07.jpeg":gC,"./assets/media/2024-12-11.JPG":xC,"./assets/media/2025-02-12-1.mp4":bC,"./assets/media/2025-02-12.jpeg":SC,"./assets/media/2025-02-26.JPG":EC,"./assets/media/2025-02-26.jpeg":AC,"./assets/media/2025-03-07.jpeg":wC,"./assets/media/2025-03-08-1.jpeg":DC,"./assets/media/2025-03-08.jpeg":UC,"./assets/media/2025-03-08.mp4":NC,"./assets/media/2025-03-12.jpeg":zC,"./assets/media/2025-04-20-02.jpeg":FC,"./assets/media/2025-04-20.jpeg":HC,"./assets/media/2025-04-24.jpeg":VC,"./assets/media/2025-05-09.jpeg":kC,"./assets/media/2025-05-10-01.jpeg":WC,"./assets/media/2025-05-10-03.jpeg":YC,"./assets/media/2025-05-10-04.jpeg":ZC,"./assets/media/2025-05-10-05.jpg":QC,"./assets/media/2025-05-23.mp4":e4,"./assets/media/2025-05-30.jpeg":n4,"./assets/media/2025-06-09.mp4":a4,"./assets/media/2025-06-16.jpg":r4,"./assets/media/2025-06-17.jpeg":l4,"./assets/media/2025-06-19.jpeg":u4,"./assets/media/2025-06-20.jpeg":d4,"./assets/media/2025-06-29.JPG":p4,"./assets/media/2025-07-02.jpeg":g4,"./assets/media/2025-07-04.jpeg":x4,"./assets/media/2025-07-19.jpg":b4,"./assets/media/2025-07-23.jpeg":S4,"./assets/media/2025-08-02.jpeg":E4,"./assets/media/2025-08-15.jpeg":A4,"./assets/media/2025-08-16.mp4":w4,"./assets/media/2025-10-04.mp4":D4,"./assets/media/2025-10-08-2.jpeg":U4,"./assets/media/2025-10-08.jpeg":N4,"./assets/media/2025-10-09.JPG":z4,"./assets/media/2025-10-10.jpeg":F4,"./assets/media/2025-10-11.jpeg":H4,"./assets/media/2025-10-31-2.jpeg":V4,"./assets/media/2025-10-31-3.mp4":k4,"./assets/media/2025-10-31.jpeg":W4,"./assets/media/2025-11-04.jpeg":Y4,"./assets/media/2025-11-09.jpeg":Z4,"./assets/media/2025-11-09.mp4":Q4,"./assets/media/2025-11-29.jpeg":eD,"./assets/media/2025-12-03.JPG":nD,"./assets/media/2025-12-03.jpeg":aD,"./assets/media/2025-12-04-02.jpeg":rD,"./assets/media/2025-12-04-10.mp4":lD,"./assets/media/2025-12-04.jpeg":uD,"./assets/media/2025-12-05-01.mp4":dD,"./assets/media/2025-12-05-02.mp4":pD,"./assets/media/Ignore_2024-08-23-5.png":mD,"./assets/media/Ignore_2025-05-10-06.png":gD}),bp=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},SD="ignore_",MD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},ED={"2023-03-01.jpeg":"399开张","2024-10-20-1.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-10-31.jpeg":"Halloween","2025-12-04.jpeg":"Last Day"},tm=Object.entries(yD).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(SD))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=bp(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>r!==null);tm.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:n1,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});tm.push({filename:"2024-10-20.mp4",type:"video",sortKey:"2024-10-20",dateOverride:"2024-10-20",src:"https://vimeo.com/1144210034",previewSrc:t1,embedUrl:"https://player.vimeo.com/video/1144210034",titleOverride:"2024-10-20",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const ha=tm.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,timelineLabel:r.timelineLabel||ED[r.filename],title:r.dateOverride||bp(r.filename),description:r.description??MD[r.filename]??"",date:r.dateOverride||bp(r.filename),filename:r.filename})),yp={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},b0="/MarcoinSF/assets/cover-BrcYv754.mp4",s2="/MarcoinSF/assets/Balloon-C59jG2U_.wav",TD="/MarcoinSF/assets/Typing-K6XFAZpo.mp3",AD="/MarcoinSF/assets/curtain-D_OCfkhx.wav",i1=r=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(r)}%3C/text%3E%3C/svg%3E") 16 16, auto`,RD=i1("❤️"),wD=i1("🌸"),CD=({onStartTransition:r})=>{const[e,n]=He.useState(0),[a,o]=He.useState(!1),[c,u]=He.useState(!1),[d,m]=He.useState(null),[p,g]=He.useState([]),_="Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[x,S]=He.useState(""),M=He.useRef(0),E=He.useRef(!1),y=He.useRef(null),v=He.useRef(null),L=He.useRef(null),D=He.useRef(!1),I=($,P,k)=>{M.current+=1;const X=M.current;g(de=>[...de,{id:X,x:$,y:P,scale:k}])};He.useEffect(()=>{let $=0;const P=ha.slice(0,4),k=[{src:b0,previewSrc:b0,type:"video"},...ha.filter(Ee=>Ee.type==="image"),...P],X=new Set,de=k.filter(Ee=>{const Oe=Ee.previewSrc||Ee.src;return X.has(Oe)?!1:(X.add(Oe),!0)}),me=de.length||1,O=Ee=>new Promise(Oe=>{const Q=new Image;Q.src=Ee,Q.onload=()=>Oe(),Q.onerror=()=>Oe()}),ie=async()=>{const Ee=de.map(Oe=>O(Oe.previewSrc||Oe.src).then(()=>{$++,n(Math.floor($/me*100))}));await Promise.all(Ee),setTimeout(()=>o(!0),300)},Se=setTimeout(()=>{n(100),o(!0)},6e3);ie().finally(()=>clearTimeout(Se))},[]),He.useEffect(()=>{var X;if(!v.current){const de=new Audio(TD);de.loop=!0,de.volume=.4,v.current=de}(X=v.current)==null||X.play().catch(()=>{});let $=0;const k=setInterval(()=>{var de;$+=1,S(_.slice(0,$)),$>=_.length&&((de=v.current)==null||de.pause(),v.current&&(v.current.currentTime=0),clearInterval(k))},30);return()=>{var de;clearInterval(k),(de=v.current)==null||de.pause(),v.current&&(v.current.currentTime=0)}},[_]);const V=()=>{var $;u(!0),D.current=!0,E.current=!1,m(null),g(P=>P.map(k=>({...k,fading:!0}))),setTimeout(()=>g([]),250),y.current&&(y.current.pause(),y.current.currentTime=0),L.current||(L.current=new Audio(AD)),($=L.current)==null||$.play().catch(()=>{}),setTimeout(()=>{r()},100)},N=.6,z=3,K=2,C=4;He.useEffect(()=>{let $=0,P=performance.now();const k=X=>{const de=(X-P)/1e3;P=X,m(me=>{if(!me)return null;let O=me.scale;return me.growing?(O=Math.min(z,O+K*de),O>=z&&y.current?(y.current.pause(),I(me.x,me.y,O),E.current=!1,{...me,growing:!1,scale:O}):{...me,scale:O}):(O=Math.max(N,O-C*de),O<=N+.01?null:{...me,scale:O})}),$=requestAnimationFrame(k)};return $=requestAnimationFrame(k),()=>cancelAnimationFrame($)},[]);const w=($,P)=>{M.current+=1;const k=M.current;m({id:k,x:$,y:P,scale:N,growing:!0})},G=()=>{E.current=!1,m($=>$&&$.growing?(I($.x,$.y,$.scale),{...$,growing:!1}):$),y.current&&(y.current.pause(),y.current.currentTime=0)},ee=$=>{var de;if(c||D.current)return;const P=$.currentTarget.getBoundingClientRect(),k=$.clientX-P.left,X=$.clientY-P.top;if(E.current=!0,!y.current){const me=new Audio(s2);me.loop=!0,me.playbackRate=1.2,y.current=me}(de=y.current)==null||de.play().catch(()=>{}),w(k,X)},ce=()=>{G()},xe=()=>{G()};return e<100&&!a?re.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[re.jsx("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:re.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),re.jsxs("div",{className:"mt-2 text-xs font-bold text-gray-400 font-mono",children:[e,"%"]}),re.jsx("p",{className:"mt-1 font-bold text-gray-400 animate-pulse text-sm",children:"Loading Gallery..."})]}):re.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:ee,onMouseUp:ce,onMouseLeave:xe,onTouchStart:$=>{var me;if($.target.closest("wired-button")||c||D.current)return;const P=$.touches[0],k=$.currentTarget.getBoundingClientRect(),X=P.clientX-k.left,de=P.clientY-k.top;if(E.current=!0,!y.current){const O=new Audio(s2);O.loop=!0,O.playbackRate=1.2,y.current=O}(me=y.current)==null||me.play().catch(()=>{}),w(X,de)},onTouchEnd:()=>{G()},onTouchMove:$=>E.current&&$.preventDefault(),style:{cursor:RD},children:[re.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map($=>re.jsx("div",{style:{position:"absolute",left:$.x,top:$.y,transform:`translate(-50%, -50%) scale(${$.scale})`,opacity:$.fading?0:1,transition:$.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},$.id)),d&&re.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),re.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out 
            ${c?"opacity-0 scale-95":"md:hover:scale-105 active:scale-100"}
        `,children:re.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[re.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[re.jsx("video",{src:b0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),re.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),re.jsx("h1",{className:"text-3xl text-center font-bold mb-1 select-none pointer-events-none",children:"The Secret Life of Warco Mu"}),re.jsx("p",{className:"text-gray-500 text-sm text-center mb-6 select-none pointer-events-none",children:"2021.8-2025.12"}),re.jsxs("p",{className:"text-gray-800 text-m text-center mb-6 select-none pointer-events-none",children:[x,x.length<_.length&&re.jsx("span",{className:"animate-pulse",children:"|"})]}),re.jsx("wired-button",{elevation:2,onClick:V,className:"bg-black text-white font-bold tracking-widest cursor-pointer select-none",style:{cursor:wD},children:"PAY RESPECT"})]})})]})},DD=({onCovered:r,onComplete:e})=>{const[n,a]=He.useState([]),o=He.useRef("raining"),c=He.useRef(0),u=He.useRef(null),d=40,m=1,p=1.5,g=80;He.useEffect(()=>{const x=window.innerWidth,S=Math.ceil(x/d),M=()=>{if(o.current==="clearing")return;const v=[];for(let L=0;L<S;L++)v.push({id:c.current++,colIndex:L,left:L/S*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(L=>[...L,...v])};u.current=window.setInterval(M,g);const E=m*1e3+200,y=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},E);return()=>{u.current&&clearInterval(u.current),clearTimeout(y)}},[r]);const _=x=>{a(S=>{const M=S.filter(E=>E.id!==x);return o.current==="clearing"&&M.length===0&&setTimeout(e,0),M})};return re.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[re.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>re.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},OD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",It={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:8,FOG_COLOR:16579577,FADE_START:12,FADE_END:24,HIGHLIGHT_RANGE:4,BGM_FADE_ZONE:25,BGM_SILENCE_RADIUS:5,MAX_SCROLL_SPEED:20,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4},r2=r=>{const e=r?1.9:It.X_OFFSET;return ha.map((n,a)=>{let o=3.2,c=2.4;const u=yp[n.filename];if(u){const g=u.aspectRatio;g>1?(o=Math.min(u.width,3.2),c=o/g,c>3.2&&(c=3.2,o=c*g)):(c=Math.min(u.height,3.2),o=c*g,o>3.2&&(o=3.2,c=o/g))}return a===ha.length-1?{...n,z:-a*It.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:o,initialHeight:c}:{...n,z:-a*It.Z_SPACING,x:(Math.random()-.5)*2+(a%2===0?-e:e),y:(Math.random()-.5)*.5,rotationY:(a%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:o,initialHeight:c}})},o2=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,S,M)=>{const E=S-_,y=M-x,v=Math.sqrt(E*E+y*y),L=E/v,D=y/v,I=_-L*(Math.random()*m),V=x-D*(Math.random()*m),N=S+L*(Math.random()*m),z=M+D*(Math.random()*m);a.push(new oe(I,V,0));const K=(I+N)/2+(Math.random()-.5)*d,C=(V+z)/2+(Math.random()-.5)*d;a.push(new oe(K,C,0)),a.push(new oe(N,z,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new Wi().setFromPoints(a)},UD=()=>{const r=[],n=(M,E,y,v,L=.2)=>{let I=M,V=E;const N=(y-M)/6,z=(v-E)/6;for(let K=0;K<6;K++){const C=M+N*(K+1),w=E+z*(K+1);r.push(new oe(I,V,0));const G=K===5?0:(Math.random()-.5)*L,ee=K===5?0:(Math.random()-.5)*L;r.push(new oe(C+G,w+ee,0)),I=C+G,V=w+ee}};let a=0;for(let M=-120/2;M<=120/2;M+=2){const E=Math.sin(M*.05)*5+Math.sin(M*.15)*2-5;M>-120/2&&(n(M-2,a,M,E,.4),n(M-2,a-.2,M,E-.2,.6)),a=E}const o=15,c=Math.sin(o*.05)*5+Math.sin(o*.15)*2-5;n(o-4,c,o,c+18,.3),n(o+4,c,o,c+18,.3),n(o-3.8,c+2,o+3.8,c+2,.2),n(o-2.5,c+12,o+2.5,c+12,.2);const u=-25,d=Math.sin(u*.05)*5-5;n(u,d,u,d+12,.3),n(u+1,d,u+1,d+12,.3),n(u-.5,d+10,u+1.5,d+10,.1),n(u-15,d-2,u-15,d+10,.3);let m=u-15,p=d+10;for(let M=u-15;M<=u;M+=2){const E=d+10-Math.sin((M-(u-15))/15*Math.PI)*4;n(m,p,M,E,.1),m=M,p=E}const g=(M,E,y)=>{let L=M+Math.cos(0)*y,D=E+Math.sin(0)*y*.6;for(let I=1;I<=13;I++){const V=I/12*Math.PI*2,N=y+(Math.random()-.5)*(y*.4),z=M+Math.cos(V)*N,K=E+Math.sin(V)*(N*.6);n(L,D,z,K,.5),L=z,D=K}};g(-30,15,6),g(-10,20,4),g(25,18,7);const _=35,x=22;g(_,x,3);for(let M=0;M<8;M++){const E=M/8*Math.PI*2,y=_+Math.cos(E)*4,v=x+Math.sin(E)*4,L=_+Math.cos(E)*6,D=x+Math.sin(E)*6;n(y,v,L,D,.2)}return new Wi().setFromPoints(r)},LD=()=>{const r=[],e=(c,u,d,m,p=.2)=>{let _=c,x=u;const S=(d-c)/6,M=(m-u)/6;for(let E=0;E<6;E++){const y=c+S*(E+1),v=u+M*(E+1);r.push(new oe(_,x,0));const L=E===5?0:(Math.random()-.5)*p,D=E===5?0:(Math.random()-.5)*p;r.push(new oe(y+L,v+D,0)),_=y+L,x=v+D}},n=(c,u,d,m="down")=>{const p=d*.15,g=8;let _=c+p,x=u+d-p;for(let v=1;v<=g;v++){const L=v/g*Math.PI*2,D=c+Math.cos(L)*p,I=u+d-p+Math.sin(L)*p;e(_,x,D,I,.1),_=D,x=I}const S=u+d-p*2,M=u+d*.4;e(c,S,c,M,.1),e(c,M,c-d*.2,u,.1),e(c,M,c+d*.2,u,.1);const E=S-d*.1,y=d*.25;m==="up"?(e(c,E,c-y,E+y,.1),e(c,E,c+y,E+y,.1)):m==="wave"?(e(c,E,c-y,E-y,.1),e(c,E,c+y,E+y,.1)):(e(c,E,c-y,E-d*.1,.1),e(c,E,c+y,E-d*.1,.1))},a=(c,u,d)=>{e(c,u-d,c-d,u+d*.5,.1),e(c-d,u+d*.5,c,u+d*.2,.1),e(c,u-d,c+d,u+d*.5,.1),e(c+d,u+d*.5,c,u+d*.2,.1)};return n(-2,0,4,"up"),n(2,0,4,"up"),a(0,3,1),n(-8,0,3.5,"wave"),a(-6,3,.5),n(7,0,3.8,"wave"),n(10,0,3.2,"down"),a(8.5,3.5,.6),a(-5,5,.5),a(5,6,.4),a(0,7,.8),new Wi().setFromPoints(r)},ND=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new A3(e);return a.minFilter=$n,a},PD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("path",{d:"M9 18V5l12-2v13"}),re.jsx("circle",{cx:"6",cy:"18",r:"3"}),re.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),zD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"3"}),re.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),ID=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"10"}),re.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),re.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),l2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),re.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),c2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),re.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),FD=()=>re.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:re.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),BD=()=>re.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[re.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),re.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),y0=()=>re.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),HD=()=>{var be,Xe;const r=He.useRef(null),e=He.useRef(null),[n,a]=He.useState(()=>r2(window.innerWidth<768));He.useEffect(()=>{const pe=()=>{const Ge=window.innerWidth<768;a(r2(Ge))};return window.addEventListener("resize",pe),()=>window.removeEventListener("resize",pe)},[]);const[o,c]=He.useState(!1);He.useEffect(()=>{const pe=()=>c(window.innerWidth<768);return pe(),window.addEventListener("resize",pe),()=>window.removeEventListener("resize",pe)},[]);const[u,d]=He.useState(null),[m,p]=He.useState(!1),[g,_]=He.useState(!1),[x,S]=He.useState(!1),[M,E]=He.useState(null),y=He.useRef(null),[v,L]=He.useState(!1),[D,I]=He.useState(!0),[V,N]=He.useState(0),[z,K]=He.useState(!1),[C,w]=He.useState(5),G=He.useRef(0),ee=He.useRef(1),[ce,xe]=He.useState(1),$=He.useRef(1),[P,k]=He.useState(null),X=He.useRef(null),[de,me]=He.useState(0),O=He.useRef([]),ie=He.useRef({}),Se=He.useRef({}),Ee=He.useRef([]),Oe=He.useRef(!1),Q=He.useRef(!1),ue=He.useRef(0),Ne=He.useRef(0),Ze=He.useRef(null),Ye=He.useRef(null),gt=He.useRef(!1);He.useRef(1);const Ct=He.useRef(0),ft=He.useRef(0),mt=He.useRef(0),B=He.useRef(!1),_t=He.useRef(0),yt=He.useRef(0);He.useEffect(()=>{Oe.current=m,m?(document.body.style.overflow="hidden",Object.values(Se.current).forEach(pe=>pe.pause())):g&&(document.body.style.overflow="auto")},[m,g]),He.useEffect(()=>{Q.current=g,g?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[g]),He.useEffect(()=>{G.current=C},[C]),He.useEffect(()=>{gt.current=z},[z]),He.useEffect(()=>{$.current=ce},[ce]),He.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&xe(1.8)},[]),He.useEffect(()=>{y.current&&(v&&D?y.current.play().catch(pe=>console.error("Audio playback failed:",pe)):y.current.pause())},[v,D,V]);const Gt=()=>L(!v),$e=pe=>{N(pe),L(!0),I(!0)},Wt=()=>{window.scrollTo({top:0,behavior:"auto"}),ue.current=0,Ne.current=0,Ct.current=0,mt.current=0,S(!0)},it=()=>{_(!0),L(!0),w(5),Object.values(Se.current).forEach(pe=>{pe.muted=!1,pe.volume=0})},pt=()=>{S(!1)},U=pe=>{const Ge=pe.currentTarget.getBoundingClientRect(),ct=Math.min(Math.max((pe.clientX-Ge.left)/Ge.width,0),1);me(pe.clientX);const nn=ha.length,qt=Math.floor(ct*(nn-1)),ti=ha[qt];ti&&k(ti.date)},T=()=>{k(null)},[Z,ve]=He.useState(()=>window.innerWidth<768?14:It.CAMERA_START_Z);He.useEffect(()=>{const pe=()=>{const Ge=window.innerWidth<768?14:It.CAMERA_START_Z;ve(ct=>ct!==Ge?Ge:ct)};return window.addEventListener("resize",pe),()=>window.removeEventListener("resize",pe)},[]);const Te=Z,fe=n[n.length-1].z,Je=Te-(fe+5),Ie=250/ce;He.useEffect(()=>{ft.current=Je*Ie},[Je,Ie]),He.useEffect(()=>{const pe=qt=>{Oe.current||!Q.current||(Ct.current+=qt.deltaY,Ct.current=Math.max(0,Math.min(Ct.current,ft.current)),mt.current=0)},Ge=qt=>{qt.target.closest("button, wired-slider, input, .wired-rendered")||(B.current=!0,mt.current=0,_t.current=qt.touches[0].clientY,yt.current=performance.now())},ct=qt=>{if(qt.target.closest("button, wired-slider, input, .wired-rendered")||Oe.current||!Q.current)return;qt.preventDefault();const vi=qt.touches[0].clientY,aa=_t.current-vi;_t.current=vi,Ct.current+=aa,Ct.current=Math.max(0,Math.min(Ct.current,ft.current));const Zn=performance.now(),qi=Zn-yt.current;if(yt.current=Zn,qi>0){const ga=aa;mt.current=mt.current*.5+ga*.5}},nn=()=>{B.current=!1};return window.addEventListener("wheel",pe,{passive:!1}),window.addEventListener("touchstart",Ge,{passive:!1}),window.addEventListener("touchmove",ct,{passive:!1}),window.addEventListener("touchend",nn),()=>{window.removeEventListener("wheel",pe),window.removeEventListener("touchstart",Ge),window.removeEventListener("touchmove",ct),window.removeEventListener("touchend",nn)}},[]),He.useEffect(()=>{const pe=()=>{window.audioContext||(window.audioContext=new(window.AudioContext||window.webkitAudioContext)),window.audioContext.state==="suspended"&&window.audioContext.resume()};return window.addEventListener("touchstart",pe,{once:!0}),window.addEventListener("click",pe,{once:!0}),window.addEventListener("keydown",pe,{once:!0}),()=>{window.removeEventListener("touchstart",pe),window.removeEventListener("click",pe),window.removeEventListener("keydown",pe)}},[]),He.useEffect(()=>{if(!r.current)return;const pe=new v3;pe.background=new kt(It.FOG_COLOR),pe.fog=new Qp(It.FOG_COLOR,10,30);const Ge=new ji(50,window.innerWidth/window.innerHeight,.1,2e3);Ge.position.set(0,0,Z),Ze.current=Ge;const ct=new SR({canvas:r.current,antialias:!0,alpha:!1});ct.setSize(window.innerWidth,window.innerHeight),ct.setPixelRatio(Math.min(window.devicePixelRatio,2));const nn=new U3;nn.crossOrigin="Anonymous";const qt=3.2,ti=3.2;new fa(3.2,2.4);const vi=new Fl({color:16777215,transparent:!0}),aa=2,Zn=.5,qi=new fa(aa,Zn),ga=new Yu({color:2236962,linewidth:2,opacity:.8,transparent:!0}),Ns=UD(),jn=new d0(Ns,new Yu({color:8947848,opacity:.6,transparent:!0,fog:!1})),un=n[n.length-1].z,xn=LD(),ni=new d0(xn,new Yu({color:5592405,opacity:0,transparent:!0,fog:!1})),Za=Math.abs(un-It.CAMERA_START_Z)+20;jn.position.set(0,0,un-10);const Ka=Math.max(1.5,Za/50);jn.scale.set(Ka,Ka,1),ni.position.set(0,0,un-9),ni.scale.set(Ka,Ka,1),pe.add(jn),pe.add(ni),O.current=[],ie.current={},Ee.current=[],n.forEach(he=>{const Me=new fr;Me.position.set(he.x,he.y,he.z),Me.rotation.y=he.rotationY,Me.rotation.z=he.rotationZ;const Ce=he.initialWidth,Be=he.initialHeight,qe=new fa(Ce,Be),Ve=new Ci(qe,new Fl({transparent:!0,opacity:0}));Ve.position.z=.1,Ve.position.y=.15;const et=Ce+.3,bt=Be+.8,ht=new fa(et,bt),lt=new Ci(ht,vi.clone());lt.position.z=0;const At=o2(et+.05,bt+.05,he.borderIntensity),Fe=new d0(At,ga.clone());Fe.position.z=.15,ie.current[he.id]=Fe;const st=(Ut,Xt)=>{const Vt=Ut/Xt;let ai=qt,zt=qt/Vt;zt>ti&&(zt=ti,ai=ti*Vt),Ve.geometry.dispose(),Ve.geometry=new fa(ai,zt);const Kt=ai+.3,Pt=zt+.8;lt.geometry.dispose(),lt.geometry=new fa(Kt,Pt);const an=o2(Kt+.05,Pt+.05,he.borderIntensity);Fe.geometry.dispose(),Fe.geometry=an;const hn=-(Pt/2)+.4,kn=Me.children.find(Kn=>Kn.userData.isDate);kn&&(kn.position.y=hn)};Ee.current.push({item:he,contentMesh:Ve,updateGeometry:st,loadedOpacity:0,targetLoadedOpacity:0});const ot=ND(he.date);if(ot){const Ut=new Fl({map:ot,transparent:!0,opacity:.8}),Xt=new Ci(qi,Ut);Xt.userData={isDate:!0},Xt.position.y=-(bt/2)+.4,Xt.position.z=.11,Me.add(Xt)}Me.add(lt),Me.add(Ve),Me.add(Fe),Me.userData={id:he.id},pe.add(Me),O.current.push(Ve)});const _a={},br=he=>{const Me=he.item;if(!_a[Me.id]){if(Me.type==="video"){const Ce=document.createElement("video");Ce.src=Me.src,Ce.crossOrigin="Anonymous",Ce.muted=!0,Ce.loop=!0,Ce.playsInline=!0,Ce.preload="auto",Se.current[Me.id]=Ce,he.video=Ce,Ce.onloadedmetadata=()=>{he.updateGeometry(Ce.videoWidth,Ce.videoHeight),he.targetLoadedOpacity=1,Ce.play().catch(()=>{})};let Be=null;if(window.audioContext)try{const Ve=window.audioContext.createMediaElementSource(Ce);Be=window.audioContext.createGain(),Ve.connect(Be),Be.connect(window.audioContext.destination),Be.gain.value=0}catch(Ve){console.error(Ve)}Be&&(he.gainNode=Be);const qe=new T3(Ce);qe.minFilter=$n,qe.magFilter=$n,qe.wrapS=Di,qe.wrapT=Di,qe.colorSpace=pi,he.texture=qe,he.contentMesh.material.map=qe,he.contentMesh.material.needsUpdate=!0}else{const Ce=Me.type==="embed"&&Me.previewSrc||Me.src;nn.load(Ce,Be=>{Be.colorSpace=pi,Be.wrapS=Di,Be.wrapT=Di,he.texture=Be,he.contentMesh.material.map=Be,he.contentMesh.material.needsUpdate=!0,Be.image&&he.updateGeometry(Be.image.width,Be.image.height),he.targetLoadedOpacity=1})}_a[Me.id]=!0}},sa=he=>{const Me=he.item.id;_a[Me]&&(he.loadedOpacity=0,he.targetLoadedOpacity=0,he.texture&&(he.texture.dispose(),he.contentMesh.material.map=null,he.contentMesh.material.needsUpdate=!0,he.texture=void 0),he.video&&(he.video.pause(),he.video.src="",he.video.load(),delete Se.current[Me],he.video=void 0),delete _a[Me])};n[n.length-1].z;const ra=new P3,ii=new Zt,R=he=>{const Me=Math.abs(Ge.position.z-he.position.z);return Me<=It.FADE_START?1:Me>=It.FADE_END?0:1-(Me-It.FADE_START)/(It.FADE_END-It.FADE_START)},W=he=>{var et,bt;if(Oe.current||!Q.current)return;if(Ye.current){const ht=n.find(lt=>lt.id===Ye.current);if(ht){d(ht),p(!0);return}}ii.x=he.clientX/window.innerWidth*2-1,ii.y=-(he.clientY/window.innerHeight)*2+1,pe.updateMatrixWorld(!0),ra.setFromCamera(ii,Ge);const Me=pe.children.filter(ht=>ht instanceof fr&&ht.userData.id),Ce=ra.intersectObjects(Me,!0).filter(ht=>ht.object instanceof Ci),Be=new Jp,qe=new _n;qe.multiplyMatrices(Ge.projectionMatrix,Ge.matrixWorldInverse),Be.setFromProjectionMatrix(qe);const Ve=Ge.getWorldDirection(new oe);for(const ht of Ce){let lt=ht.object;for(;lt.parent&&!((et=lt.userData)!=null&&et.id);)lt=lt.parent;const At=(bt=lt.userData)==null?void 0:bt.id;if(!At)continue;const Fe=lt.getWorldPosition(new oe);if(!Be.containsPoint(Fe)||Fe.clone().sub(Ge.position).dot(Ve)<=0||R(lt)<.1)continue;const Ut=n.find(Xt=>Xt.id===At);if(Ut){d(Ut),p(!0);break}}};r.current.addEventListener("click",W);const se=he=>{var qe,Ve;if(Oe.current||!Q.current)return;ii.x=he.clientX/window.innerWidth*2-1,ii.y=-(he.clientY/window.innerHeight)*2+1,ra.setFromCamera(ii,Ge);const Me=pe.children.filter(et=>et instanceof fr&&et.userData.id),Be=ra.intersectObjects(Me,!0).find(et=>et.object instanceof Ci);if(Be){let et=Be.object;for(;et.parent&&!((qe=et.userData)!=null&&qe.id);)et=et.parent;Ye.current=(Ve=et.userData)==null?void 0:Ve.id,document.body.style.cursor="pointer"}else Ye.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",se);let J;window.matchMedia("(pointer: coarse)").matches;const Y=()=>{if(J=requestAnimationFrame(Y),!Oe.current&&Q.current){const Fe=Ye.current?It.HOVER_MIN_SPEED_FACTOR:1;if(ee.current+=(Fe-ee.current)*.1,!B.current){let Ut=0;if(G.current>0){const Xt=250/$.current;Ut=G.current*.8*(Xt/200)*ee.current}mt.current+=(Ut-mt.current)*.05,Math.abs(Ut)<.01&&Math.abs(mt.current)<.01&&(mt.current=0),Ct.current+=mt.current,Ct.current<0?(Ct.current=0,mt.current=0):Ct.current>ft.current&&(Ct.current=ft.current,mt.current=0)}ft.current>0&&(Ne.current=Ct.current/ft.current);const st=Ne.current-ue.current,ot=Math.max(-20*.2,Math.min(It.MAX_SCROLL_SPEED*.2,st));if(ue.current+=ot*.1+st*.05,Ge.position.z=Z-ue.current*Je,e.current&&(e.current.style.width=`${ue.current*100}% `),ni){const Ut=Math.max(0,Math.min(1,(ue.current-.5)*2));ni.material.opacity=Ut}}Object.keys(_a).forEach(Fe=>{const st=Ee.current.find(ot=>ot.item.id===Fe);if(st){const ot=st.contentMesh.parent;Math.abs(Ge.position.z-ot.position.z)>32&&sa(st)}});const he=Math.max(0,Math.floor(-Ge.position.z/It.Z_SPACING)),Me=8,Ce=Math.max(0,he-Me),Be=Math.min(Ee.current.length-1,he+Me),qe=Z-Ge.position.z,Ve=Math.min(ha.length-1,Math.max(0,Math.round(qe/It.Z_SPACING))),et=ha[Ve];let bt=null,ht=0;et&&et.type==="video"&&(bt=et.id,ht=-(Ve*It.Z_SPACING)+Z+0);const lt=It.Z_SPACING/2;let At=0;for(let Fe=Ce;Fe<=Be;Fe++){const st=Ee.current[Fe],ot=st.contentMesh.parent,Ut=st.contentMesh,Xt=Math.abs(Ge.position.z-ot.position.z),Vt=22,ai=32,zt=Fe===Ee.current.length-1;Xt<Vt?br(st):Xt>ai&&!zt&&sa(st);const Kt=st.item.id,Pt=ie.current[Kt];Pt&&(Ye.current===Kt?(Pt.material.color.setHex(0),Pt.material.opacity=1,Pt.scale.setScalar(1.02)):(Pt.material.color.setHex(2236962),Pt.material.opacity=.8,Pt.scale.setScalar(1)));let an=0;const hn=4,kn=.5;Xt<kn?an=0:Xt<hn?an=(Xt-kn)/(hn-kn):Xt<=It.FADE_START?an=1:Xt>=It.FADE_END?an=0:an=1-(Xt-It.FADE_START)/(It.FADE_END-It.FADE_START),st.loadedOpacity+=(st.targetLoadedOpacity-st.loadedOpacity)*.05;const Kn=an*st.loadedOpacity;Ut.material.opacity=Kn;const yr=ot.children.find(Tn=>Tn.isMesh&&Tn!==Ut&&!Tn.userData.isDate);if(yr&&yr.material&&(yr.material.opacity=Kn),Pt){const Tn=Ye.current===Kt?1:.8;Pt.material.opacity=Tn*Kn,Pt.material.transparent=!0}const Sr=ot.children.find(Tn=>Tn.userData.isDate);Sr&&Sr.material&&(Sr.material.opacity=.8*Kn);let Ps=1;if(Xt<It.HIGHLIGHT_RANGE&&(Ps=1+(1-Xt/It.HIGHLIGHT_RANGE)*.15),ot.scale.set(Ps,Ps,1),Se.current[Kt]){const Tn=Se.current[Kt];if(!Oe.current&&Q.current){const Tf=window.innerWidth<768,Mr=Kt===bt,Li=Fe===Ee.current.length-1;if(gt.current||Tf&&!Li)Tn.muted||(Tn.muted=!0),st.gainNode&&st.gainNode.gain.value>0&&(st.gainNode.gain.cancelScheduledValues(0),st.gainNode.gain.value=0);else if(Mr){Tn.muted=!1;let Er=Math.abs(Ge.position.z-ht);Li&&Ge.position.z<ht&&(Er=0);let zs=Math.max(0,1-Er/lt);st.gainNode?st.gainNode.gain.setTargetAtTime(zs,window.audioContext.currentTime,.1):Tn.volume=zs,At=Math.max(At,zs),Tn.paused&&Tn.play().catch(()=>{})}else Tn.muted||(Tn.muted=!0),Tn.paused&&Tn.play().catch(()=>{})}}}if(y.current&&D){let Fe=1;const st=Math.abs(Ge.position.z-n[n.length-1].z);At>.1?Fe=.1:st<It.BGM_FADE_ZONE&&(Fe=Math.max(0,(st-It.BGM_SILENCE_RADIUS)/(It.BGM_FADE_ZONE-It.BGM_SILENCE_RADIUS))),v&&y.current.paused&&Fe>.01&&y.current.play().catch(()=>{});const ot=y.current.volume;Math.abs(ot-Fe)>.005?y.current.volume+=(Fe-ot)*.05:y.current.volume=Fe}ct.render(pe,Ge)};Y();const De=()=>{Ge.aspect=window.innerWidth/window.innerHeight,Ge.updateProjectionMatrix(),ct.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",De),()=>{var he;window.removeEventListener("resize",De),window.removeEventListener("mousemove",se),(he=r.current)==null||he.removeEventListener("click",W),cancelAnimationFrame(J),X.current&&cancelAnimationFrame(X.current),ct.dispose(),document.body.style.height="auto",Object.values(Se.current).forEach(Me=>{Me.pause(),Me.src="",Me.load()})}},[n,Z,Je]);const at=()=>{p(!1),d(null)},Qe=pe=>{mt.current=0,Ne.current=Math.max(0,Math.min(1,pe)),ft.current>0&&(Ct.current=Ne.current*ft.current)},Ae=pe=>{const Ge=pe.currentTarget.getBoundingClientRect(),ct=pe.touches[0],nn=Math.min(Math.max((ct.clientX-Ge.left)/Ge.width,0),1);me(ct.clientX);const qt=ha.length,ti=Math.floor(nn*(qt-1)),vi=ha[ti];vi&&k(vi.date),Qe(nn)},we=pe=>{if(m||!g)return;const Ge=pe.currentTarget.getBoundingClientRect(),ct=Math.min(Math.max((pe.clientX-Ge.left)/Ge.width,0),1);Qe(Le(ct))},tt=pe=>{E(M===pe?null:pe)},We=It.CAMERA_START_Z,dt=n[n.length-1].z+5,H=We-dt||1,ze=pe=>Math.min(Math.max((We-pe)/H,0),1),Ue=pe=>We-pe*H,Le=pe=>ze(Ue(pe)+It.TIMELINE_FOCUS_OFFSET),Re=n.filter(pe=>pe.timelineLabel).map(pe=>({id:pe.id,label:pe.timelineLabel,pct:ze(pe.z),focusPct:ze(pe.z+It.TIMELINE_FOCUS_OFFSET),z:pe.z}));return re.jsxs(re.Fragment,{children:[re.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),re.jsx("audio",{ref:y,src:v0[V].src,onEnded:()=>$e((V+1)%v0.length)}),!g&&re.jsx(CD,{onStartTransition:Wt}),x&&re.jsx(DD,{onCovered:it,onComplete:pt}),re.jsx("div",{className:`fixed top-6 left-0 right-6 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 flex justify-center ${g?"opacity-100":"opacity-0"} `,children:re.jsxs("h1",{className:"text-1xl md:text-3xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg] text-center px-4",children:["The secret life of ",re.jsx("span",{className:"text-gray-600",children:"Warco Mu"})]})}),re.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${g?"opacity-100":"opacity-0 pointer-events-none"} `,children:[re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("audio"),children:re.jsx(PD,{})}),M==="audio"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),re.jsx("button",{onClick:()=>E(null),className:"text-gray-500 hover:text-black",children:re.jsx(y0,{})})]}),re.jsxs("div",{className:"mb-4",children:[re.jsxs("div",{className:"flex justify-between items-center mb-1",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"Video Sound"}),re.jsx("button",{onClick:()=>K(!z),className:"p-1 rounded hover:bg-gray-100",title:z?"Unmute Videos":"Mute Videos",children:z?re.jsx(c2,{}):re.jsx(l2,{})})]}),o&&re.jsxs("div",{className:"text-[10px] text-amber-700 bg-amber-50 p-2 rounded mb-2 border border-amber-200 leading-tight",children:["Video sound is disabled on mobile devices. ",re.jsx("br",{}),"(Except for the finale!)"]})]}),re.jsxs("div",{children:[re.jsxs("div",{className:"flex justify-between items-center mb-2",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),re.jsx("div",{className:"flex items-center gap-2",children:re.jsx("button",{onClick:()=>I(!D),className:"p-1 rounded hover:bg-gray-100",title:D?"Disable BGM":"Enable BGM",children:D?re.jsx(l2,{}):re.jsx(c2,{})})})]}),re.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:re.jsx("button",{onClick:Gt,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:v?re.jsx(BD,{}):re.jsx(FD,{})})}),re.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:v0.map((pe,Ge)=>re.jsxs("div",{onClick:()=>$e(Ge),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${V===Ge?"bg-blue-50 font-bold text-blue-700":"text-gray-600"} `,children:[Ge+1,". ",pe.title]},Ge))})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("general"),children:re.jsx(zD,{})}),M==="general"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),re.jsx("button",{onClick:()=>E(null),className:"text-gray-500 hover:text-black",children:re.jsx(y0,{})})]}),re.jsxs("div",{children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),re.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:C,onChange:pe=>w(Number(pe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs font-bold w-4 text-center",children:C})]})]}),re.jsxs("div",{className:"mt-4",children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),re.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:ce,onChange:pe=>xe(Number(pe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("credit"),children:re.jsx(ID,{})}),M==="credit"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Credits"}),re.jsx("button",{onClick:()=>E(null),className:"text-gray-500 hover:text-black",children:re.jsx(y0,{})})]}),re.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[re.jsx("p",{className:"mb-2",children:re.jsx("strong",{children:"Coming Soon"})}),re.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",re.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),re.jsx("br",{}),re.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),re.jsx("br",{}),re.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),g&&re.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:we,onMouseMove:U,onMouseLeave:T,onTouchStart:Ae,onTouchMove:Ae,onTouchEnd:T,children:[Re.map(pe=>re.jsxs("button",{onClick:Ge=>{Ge.stopPropagation(),Qe(pe.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${pe.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:pe.label,children:[re.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:pe.label}),re.jsx("img",{src:OD,alt:pe.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},pe.id)),re.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),P&&re.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:de},children:[P,re.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),m&&u&&re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[re.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:at}),re.jsx("div",{className:"relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center",children:re.jsx("wired-card",{elevation:4,className:"bg-white p-2 max-w-5xl",children:re.jsxs("div",{className:"p-4 flex flex-col items-center",children:[re.jsx("div",{className:"w-full flex justify-end mb-2",children:re.jsx("wired-button",{onClick:at,elevation:2,children:"Close [X]"})}),re.jsxs("div",{className:"relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden",style:{maxHeight:"65vh",maxWidth:"90vw",aspectRatio:u.type==="embed"?((be=yp[u.filename])==null?void 0:be.aspectRatio)||16/9:void 0,width:u.type==="embed"?`min(100%, calc(65vh * ${((Xe=yp[u.filename])==null?void 0:Xe.aspectRatio)||1.777}))`:"auto"},children:[u.type==="video"&&re.jsx("video",{src:u.src,className:"block max-w-full max-h-[65vh] w-auto h-auto object-contain",controls:!0,autoPlay:!0}),u.type==="embed"&&re.jsx("iframe",{src:(()=>{const pe=u.embedUrl||u.src,Ge=pe.includes("?")?"&":"?";return`${pe}${Ge} autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:u.title}),u.type==="image"&&re.jsx("img",{src:u.src,alt:u.title,className:"block max-w-full max-h-[65vh] w-auto h-auto object-contain"})]}),re.jsxs("div",{className:"mt-6 text-center",children:[re.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:u.title}),u.description&&re.jsx("p",{className:"text-gray-600 text-lg font-light",children:u.description})]})]})})})]})]})},a1=document.getElementById("root");if(!a1)throw new Error("Could not find root element to mount to");const GD=iS.createRoot(a1);GD.render(re.jsx($y.StrictMode,{children:re.jsx(HD,{})}));
