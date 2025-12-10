(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yu=window,Rp=Yu.ShadowRoot&&(Yu.ShadyCSS===void 0||Yu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Cp=Symbol(),Bx=new WeakMap;let x2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==Cp)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Rp&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=Bx.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Bx.set(n,e))}return e}toString(){return this.cssText}};const xy=r=>new x2(typeof r=="string"?r:r+"",void 0,Cp),dn=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new x2(n,r,Cp)},vy=(r,e)=>{Rp?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=Yu.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Hx=Rp?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return xy(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Uh;const ef=window,Gx=ef.trustedTypes,by=Gx?Gx.emptyScript:"",Vx=ef.reactiveElementPolyfillSupport,w0={toAttribute(r,e){switch(e){case Boolean:r=r?by:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},v2=(r,e)=>e!==r&&(e==e||r==r),Oh={attribute:!0,type:String,converter:w0,reflect:!1,hasChanged:v2},R0="finalized";let _o=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Oh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Oh}static finalize(){if(this.hasOwnProperty(R0))return!1;this[R0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Hx(o))}else e!==void 0&&n.push(Hx(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return vy(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Oh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:w0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:w0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||v2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};_o[R0]=!0,_o.elementProperties=new Map,_o.elementStyles=[],_o.shadowRootOptions={mode:"open"},Vx==null||Vx({ReactiveElement:_o}),((Uh=ef.reactiveElementVersions)!==null&&Uh!==void 0?Uh:ef.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Nh;const tf=window,yo=tf.trustedTypes,jx=yo?yo.createPolicy("lit-html",{createHTML:r=>r}):void 0,C0="$lit$",Rs=`lit$${(Math.random()+"").slice(9)}$`,b2="?"+Rs,yy=`<${b2}>`,hr=document,Vl=()=>hr.createComment(""),jl=r=>r===null||typeof r!="object"&&typeof r!="function",y2=Array.isArray,Sy=r=>y2(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Ph=`[ 	
\f\r]`,Dl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kx=/-->/g,Xx=/>/g,tr=RegExp(`>|${Ph}(?:([^\\s"'>=/]+)(${Ph}*=${Ph}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wx=/'/g,qx=/"/g,S2=/^(?:script|style|textarea|title)$/i,My=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),fn=My(1),So=Symbol.for("lit-noChange"),kn=Symbol.for("lit-nothing"),Yx=new WeakMap,fr=hr.createTreeWalker(hr,129,null,!1);function M2(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return jx!==void 0?jx.createHTML(e):e}const Ey=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=Dl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===Dl?g[1]==="!--"?u=kx:g[1]!==void 0?u=Xx:g[2]!==void 0?(S2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=tr):g[3]!==void 0&&(u=tr):u===tr?g[0]===">"?(u=o??Dl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?tr:g[3]==='"'?qx:Wx):u===qx||u===Wx?u=tr:u===kx||u===Xx?u=Dl:(u=tr,o=void 0);const y=u===tr&&r[d+1].startsWith("/>")?" ":"";c+=u===Dl?m+yy:_>=0?(a.push(p),m.slice(0,_)+C0+m.slice(_)+Rs+y):m+Rs+(_===-2?(a.push(void 0),d):y)}return[M2(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class kl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=Ey(e,n);if(this.el=kl.createElement(p,a),fr.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=fr.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(C0)||x.startsWith(Rs)){const y=g[u++];if(_.push(x),y!==void 0){const E=o.getAttribute(y.toLowerCase()+C0).split(Rs),A=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:A[2],strings:E,ctor:A[1]==="."?Ay:A[1]==="?"?Ry:A[1]==="@"?Cy:mf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(S2.test(o.tagName)){const _=o.textContent.split(Rs),x=_.length-1;if(x>0){o.textContent=yo?yo.emptyScript:"";for(let y=0;y<x;y++)o.append(_[y],Vl()),fr.nextNode(),m.push({type:2,index:++c});o.append(_[x],Vl())}}}else if(o.nodeType===8)if(o.data===b2)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Rs,_+1))!==-1;)m.push({type:7,index:c}),_+=Rs.length-1}c++}}static createElement(e,n){const a=hr.createElement("template");return a.innerHTML=e,a}}function Mo(r,e,n=r,a){var o,c,u,d;if(e===So)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=jl(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=Mo(r,m._$AS(r,e.values),m,a)),e}class Ty{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:hr).importNode(a,!0);fr.currentNode=c;let u=fr.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ic(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new Dy(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=fr.nextNode(),d++)}return fr.currentNode=hr,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ic{constructor(e,n,a,o){var c;this.type=2,this._$AH=kn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Mo(this,e,n),jl(e)?e===kn||e==null||e===""?(this._$AH!==kn&&this._$AR(),this._$AH=kn):e!==this._$AH&&e!==So&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Sy(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==kn&&jl(this._$AH)?this._$AA.nextSibling.data=e:this.$(hr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=kl.createElement(M2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new Ty(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Yx.get(e.strings);return n===void 0&&Yx.set(e.strings,n=new kl(e)),n}T(e){y2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ic(this.k(Vl()),this.k(Vl()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class mf{constructor(e,n,a,o,c){this.type=1,this._$AH=kn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=kn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=Mo(this,e,n,0),u=!jl(e)||e!==this._$AH&&e!==So,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=Mo(this,d[a+m],n,m),p===So&&(p=this._$AH[m]),u||(u=!jl(p)||p!==this._$AH[m]),p===kn?e=kn:e!==kn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===kn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ay extends mf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===kn?void 0:e}}const wy=yo?yo.emptyScript:"";class Ry extends mf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==kn?this.element.setAttribute(this.name,wy):this.element.removeAttribute(this.name)}}class Cy extends mf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=Mo(this,e,n,0))!==null&&a!==void 0?a:kn)===So)return;const o=this._$AH,c=e===kn&&o!==kn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==kn&&(o===kn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class Dy{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){Mo(this,e)}}const $x=tf.litHtmlPolyfillSupport;$x==null||$x(kl,ic),((Nh=tf.litHtmlVersions)!==null&&Nh!==void 0?Nh:tf.litHtmlVersions=[]).push("2.8.0");const Ly=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ic(e.insertBefore(Vl(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zh,Ih;class Ya extends _o{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ly(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return So}}Ya.finalized=!0,Ya._$litElement$=!0,(zh=globalThis.litElementHydrateSupport)===null||zh===void 0||zh.call(globalThis,{LitElement:Ya});const Zx=globalThis.litElementPolyfillSupport;Zx==null||Zx({LitElement:Ya});((Ih=globalThis.litElementVersions)!==null&&Ih!==void 0?Ih:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uy=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},Oy=(r,e,n)=>{e.constructor.createProperty(n,r)};function Pe(r){return(e,n)=>n!==void 0?Oy(r,e,n):Uy(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ny(r){return Pe({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Py=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gn(r,e){return Py({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Fh;((Fh=window.HTMLSlotElement)===null||Fh===void 0?void 0:Fh.prototype.assignedElements)!=null;var zy=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Iy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const wn=dn`
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
`;class Rn extends Ya{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){Dp(this,e,n)}}zy([Gn("svg"),Iy("design:type",SVGSVGElement)],Rn.prototype,"svg",void 0);function Fy(){return Math.floor(Math.random()*2**31)}function Dp(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function D0(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function By(r,e,n){const a=[];r.forEach(o=>a.push(...o)),D0(a,e,n)}function Hy(r,e){return r[0]===e[0]&&r[1]===e[1]}function Gy(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)D0(p,d,o);const m=Vy(u,c,a);if(o){for(const p of u)D0(p,d,-o);By(m,d,-o)}return m}function Vy(r,e,n){const a=[];for(const p of r){const g=[...p];Hy(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const y=Math.min(_[1],x[1]);c.push({ymin:y,ymax:Math.max(_[1],x[1]),x:y===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function E2(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Gy(r,o,a,c||1)}class jy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=E2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function ky(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Xy extends jy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=E2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)ky([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Wy{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function T2(r,e,n,a,o){return{type:"path",ops:nf(r,e,n,a,o)}}function qy(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...nf(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...nf(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return T2(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function A2(r,e){return qy(r,!0,e)}function Yy(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return A2(c,o)}function w2(r,e,n,a,o){const c=R2(n,a,o);return $y(r,e,o,c).opset}function R2(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=zn(u*m,n),d+=zn(d*m,n),{increment:c,rx:u,ry:d}}function $y(r,e,n,a){const[o,c]=Qx(a.increment,r,e,a.rx,a.ry,1,a.increment*L0(.1,L0(.4,1,n),n),n);let u=Kx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=Qx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=Kx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function Zy(r,e,n,a,o){return nf(r,e,n,a,o,!0)}function C2(r){return r.randomizer||(r.randomizer=new Wy(r.seed||0)),r.randomizer.next()}function L0(r,e,n,a=1){return n.roughness*a*(C2(n)*(e-r)+r)}function zn(r,e,n=1){return L0(-r,r,e,n)}function nf(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=U0(r,e,n,a,o,!0,!1);if(u)return d;const m=U0(r,e,n,a,o,!0,!0);return d.concat(m)}function U0(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+C2(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,E=o.bowing*o.maxRandomnessOffset*(r-n)/200;y=zn(y,o,p),E=zn(E,o,p);const A=[],S=()=>zn(_,o,p),v=()=>zn(g,o,p),N=o.preserveVertices;return u?A.push({op:"move",data:[r+(N?0:S()),e+(N?0:S())]}):A.push({op:"move",data:[r+(N?0:zn(g,o,p)),e+(N?0:zn(g,o,p))]}),u?A.push({op:"bcurveTo",data:[y+r+(n-r)*x+S(),E+e+(a-e)*x+S(),y+r+2*(n-r)*x+S(),E+e+2*(a-e)*x+S(),n+(N?0:S()),a+(N?0:S())]}):A.push({op:"bcurveTo",data:[y+r+(n-r)*x+v(),E+e+(a-e)*x+v(),y+r+2*(n-r)*x+v(),E+e+2*(a-e)*x+v(),n+(N?0:v()),a+(N?0:v())]}),A}function Kx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...U0(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function Qx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=zn(.5,d)-Math.PI/2;g.push([zn(c,d)+e+.9*a*Math.cos(_-r),zn(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let y=_;y<x;y=y+r){const E=[zn(c,d)+e+a*Math.cos(y),zn(c,d)+n+o*Math.sin(y)];p.push(E),g.push(E)}g.push([zn(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),zn(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([zn(c,d)+e+.98*a*Math.cos(_+u),zn(c,d)+n+.98*o*Math.sin(_+u)]),g.push([zn(c,d)+e+.9*a*Math.cos(_+u*.5),zn(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const Ky={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return w2(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return Zy(r,e,n,a,o)}};function Uo(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function Qy(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function Eo(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function ac(r,e,n=!1){const a=Eo("path",{d:Qy(r,n)});return e&&e.appendChild(a),a}function xi(r,e,n,a,o,c){return ac(Yy(e+2,n+2,a-4,o-4,Uo(c)),r)}function An(r,e,n,a,o,c){return ac(T2(e,n,a,o,Uo(c)),r)}function Jy(r,e,n){return ac(A2(e,Uo(n)),r,!0)}function pr(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),ac(w2(e,n,a,o,Uo(c)),r)}function gf(r,e){const a=new Xy(Ky).fillPolygon(r,Uo(e));return ac(a,null)}function Lp(r,e,n,a,o){const c=Uo(o),u=R2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return gf(d,o)}var _f=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},xf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Xl=class extends Rn{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};xi(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)An(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,An(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,An(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,An(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};_f([Pe({type:Number}),xf("design:type",Object)],Xl.prototype,"elevation",void 0);_f([Pe({type:Boolean,reflect:!0}),xf("design:type",Object)],Xl.prototype,"disabled",void 0);_f([Gn("button"),xf("design:type",HTMLButtonElement)],Xl.prototype,"button",void 0);Xl=_f([mn("wired-button"),xf("design:paramtypes",[])],Xl);var Up=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Op=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wl=class extends Rn{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=gf([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}xi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)An(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Up([Pe({type:Number}),Op("design:type",Object)],Wl.prototype,"elevation",void 0);Up([Pe({type:String}),Op("design:type",String)],Wl.prototype,"fill",void 0);Wl=Up([mn("wired-card"),Op("design:paramtypes",[])],Wl);var sc=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},vf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let To=class extends Rn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[wn,dn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return fn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){xi(e,0,0,n[0],n[1],this.seed),this.svgCheck=Eo("g"),e.appendChild(this.svgCheck),An(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),An(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};sc([Pe({type:Boolean}),vf("design:type",Object)],To.prototype,"checked",void 0);sc([Pe({type:Boolean,reflect:!0}),vf("design:type",Object)],To.prototype,"disabled",void 0);sc([Ny(),vf("design:type",Object)],To.prototype,"focused",void 0);sc([Gn("input"),vf("design:type",HTMLInputElement)],To.prototype,"input",void 0);To=sc([mn("wired-checkbox")],To);var bf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Np=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ql=class extends Rn{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=gf([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};bf([Pe(),Np("design:type",Object)],ql.prototype,"value",void 0);bf([Pe(),Np("design:type",Object)],ql.prototype,"name",void 0);bf([Pe({type:Boolean}),Np("design:type",Object)],ql.prototype,"selected",void 0);ql=bf([mn("wired-item")],ql);var Oo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rc=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let mr=class extends Ya{constructor(){super(...arguments),this.disabled=!1,this.seed=Fy(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return dn`
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
    `}render(){return fn`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",xi(n,0,0,o.width,o.height,this.seed);const c=o.width-4;xi(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=Jy(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Dp(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Oo([Pe({type:Object}),rc("design:type",Object)],mr.prototype,"value",void 0);Oo([Pe({type:String,reflect:!0}),rc("design:type",String)],mr.prototype,"selected",void 0);Oo([Pe({type:Boolean,reflect:!0}),rc("design:type",Object)],mr.prototype,"disabled",void 0);Oo([Gn("svg"),rc("design:type",SVGSVGElement)],mr.prototype,"svg",void 0);Oo([Gn("#card"),rc("design:type",HTMLDivElement)],mr.prototype,"card",void 0);mr=Oo([mn("wired-combo")],mr);var yf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Pp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Yl=class extends Ya{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return dn`
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
    `}render(){return fn`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};yf([Pe({type:Number}),Pp("design:type",Object)],Yl.prototype,"elevation",void 0);yf([Pe({type:Boolean,reflect:!0}),Pp("design:type",Object)],Yl.prototype,"open",void 0);yf([Gn("wired-card"),Pp("design:type",Wl)],Yl.prototype,"card",void 0);Yl=yf([mn("wired-dialog")],Yl);var D2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},eS=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let O0=class extends Rn{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[wn,dn`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return fn`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)An(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};D2([Pe({type:Number}),eS("design:type",Object)],O0.prototype,"elevation",void 0);O0=D2([mn("wired-divider")],O0);var zp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},L2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let af=class extends Rn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=Lp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};zp([Pe({type:Boolean,reflect:!0}),L2("design:type",Object)],af.prototype,"disabled",void 0);zp([Gn("button"),L2("design:type",HTMLButtonElement)],af.prototype,"button",void 0);af=zp([mn("wired-fab")],af);var Ip=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},U2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let sf=class extends Rn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),pr(e,a/2,a/2,a,a,this.seed)}};Ip([Pe({type:Boolean,reflect:!0}),U2("design:type",Object)],sf.prototype,"disabled",void 0);Ip([Gn("button"),U2("design:type",HTMLButtonElement)],sf.prototype,"button",void 0);sf=Ip([mn("wired-icon-button")],sf);var Fp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Bp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const tS="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let rf=class extends Rn{constructor(){super(),this.elevation=1,this.src=tS,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};xi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)An(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,An(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Fp([Pe({type:Number}),Bp("design:type",Object)],rf.prototype,"elevation",void 0);Fp([Pe({type:String}),Bp("design:type",String)],rf.prototype,"src",void 0);rf=Fp([mn("wired-image"),Bp("design:paramtypes",[])],rf);var Wn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},qn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fn=class extends Rn{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Wn([Pe({type:Boolean,reflect:!0}),qn("design:type",Object)],Fn.prototype,"disabled",void 0);Wn([Pe({type:String}),qn("design:type",Object)],Fn.prototype,"placeholder",void 0);Wn([Pe({type:String}),qn("design:type",String)],Fn.prototype,"name",void 0);Wn([Pe({type:String}),qn("design:type",String)],Fn.prototype,"min",void 0);Wn([Pe({type:String}),qn("design:type",String)],Fn.prototype,"max",void 0);Wn([Pe({type:String}),qn("design:type",String)],Fn.prototype,"step",void 0);Wn([Pe({type:String}),qn("design:type",Object)],Fn.prototype,"type",void 0);Wn([Pe({type:String}),qn("design:type",Object)],Fn.prototype,"autocomplete",void 0);Wn([Pe({type:String}),qn("design:type",Object)],Fn.prototype,"autocapitalize",void 0);Wn([Pe({type:String}),qn("design:type",Object)],Fn.prototype,"autocorrect",void 0);Wn([Pe({type:Boolean}),qn("design:type",Object)],Fn.prototype,"required",void 0);Wn([Pe({type:Boolean}),qn("design:type",Object)],Fn.prototype,"autofocus",void 0);Wn([Pe({type:Boolean}),qn("design:type",Object)],Fn.prototype,"readonly",void 0);Wn([Pe({type:Number}),qn("design:type",Number)],Fn.prototype,"minlength",void 0);Wn([Pe({type:Number}),qn("design:type",Number)],Fn.prototype,"maxlength",void 0);Wn([Pe({type:Number}),qn("design:type",Number)],Fn.prototype,"size",void 0);Wn([Gn("input"),qn("design:type",HTMLInputElement)],Fn.prototype,"textInput",void 0);Fn=Wn([mn("wired-input"),qn("design:paramtypes",[])],Fn);var oc=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Sf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ao=class extends Rn{constructor(){super(...arguments),this.elevation=1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)An(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),An(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};oc([Pe({type:Number}),Sf("design:type",Object)],Ao.prototype,"elevation",void 0);oc([Pe({type:String}),Sf("design:type",String)],Ao.prototype,"href",void 0);oc([Pe({type:String}),Sf("design:type",String)],Ao.prototype,"target",void 0);oc([Gn("a"),Sf("design:type",HTMLAnchorElement)],Ao.prototype,"anchor",void 0);Ao=oc([mn("wired-link")],Ao);var Mf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Hp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let $l=class extends Rn{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,0,0,n[0],n[1],this.seed)}};Mf([Pe({type:Object}),Hp("design:type",Object)],$l.prototype,"value",void 0);Mf([Pe({type:String}),Hp("design:type",String)],$l.prototype,"selected",void 0);Mf([Pe({type:Boolean}),Hp("design:type",Object)],$l.prototype,"horizontal",void 0);$l=Mf([mn("wired-listbox")],$l);var lc=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ef=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let gr=class extends Rn{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=gf([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};lc([Pe({type:Number}),Ef("design:type",Object)],gr.prototype,"value",void 0);lc([Pe({type:Number}),Ef("design:type",Object)],gr.prototype,"min",void 0);lc([Pe({type:Number}),Ef("design:type",Object)],gr.prototype,"max",void 0);lc([Pe({type:Boolean}),Ef("design:type",Object)],gr.prototype,"percentage",void 0);gr=lc([mn("wired-progress")],gr);var No=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},cc=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let _r=class extends Rn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[wn,dn`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return fn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){pr(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=Eo("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);pr(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};No([Pe({type:Boolean}),cc("design:type",Object)],_r.prototype,"checked",void 0);No([Pe({type:Boolean,reflect:!0}),cc("design:type",Object)],_r.prototype,"disabled",void 0);No([Pe({type:String}),cc("design:type",String)],_r.prototype,"name",void 0);No([Pe(),cc("design:type",Object)],_r.prototype,"focused",void 0);No([Gn("input"),cc("design:type",HTMLInputElement)],_r.prototype,"input",void 0);_r=No([mn("wired-radio")],_r);var O2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},nS=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let N0=class extends Ya{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return dn`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return fn`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){Dp(this,"selected",{selected:this.selected})}};O2([Pe({type:String}),nS("design:type",String)],N0.prototype,"selected",void 0);N0=O2([mn("wired-radio-group")],N0);var br=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Po=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Os=class extends Rn{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=Eo("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),pr(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),An(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=Eo("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),An(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),An(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};br([Pe({type:Boolean,reflect:!0}),Po("design:type",Object)],Os.prototype,"disabled",void 0);br([Pe({type:String}),Po("design:type",Object)],Os.prototype,"placeholder",void 0);br([Pe({type:String}),Po("design:type",Object)],Os.prototype,"autocomplete",void 0);br([Pe({type:String}),Po("design:type",Object)],Os.prototype,"autocorrect",void 0);br([Pe({type:Boolean}),Po("design:type",Object)],Os.prototype,"autofocus",void 0);br([Gn("input"),Po("design:type",HTMLInputElement)],Os.prototype,"textInput",void 0);Os=br([mn("wired-search-input")],Os);var zo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},uc=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ns=class extends Rn{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[wn,dn`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return fn`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);An(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=pr(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};zo([Pe({type:Number}),uc("design:type",Object)],Ns.prototype,"min",void 0);zo([Pe({type:Number}),uc("design:type",Object)],Ns.prototype,"max",void 0);zo([Pe({type:Number}),uc("design:type",Object)],Ns.prototype,"step",void 0);zo([Pe({type:Boolean,reflect:!0}),uc("design:type",Object)],Ns.prototype,"disabled",void 0);zo([Gn("input"),uc("design:type",HTMLInputElement)],Ns.prototype,"input",void 0);Ns=zo([mn("wired-slider")],Ns);var Gp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},N2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let of=class extends Rn{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[wn,dn`
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
      `]}render(){return fn`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){pr(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=Lp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Gp([Pe({type:Boolean}),N2("design:type",Object)],of.prototype,"spinning",void 0);Gp([Pe({type:Number}),N2("design:type",Object)],of.prototype,"duration",void 0);of=Gp([mn("wired-spinner")],of);var Vp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},jp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let lf=class extends Rn{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[wn,dn`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return fn`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-4,n[1]-4,this.seed)}};Vp([Pe({type:String}),jp("design:type",Object)],lf.prototype,"name",void 0);Vp([Pe({type:String}),jp("design:type",Object)],lf.prototype,"label",void 0);lf=Vp([mn("wired-tab"),jp("design:paramtypes",[])],lf);var kp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let cf=class extends Ya{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <div id="bar">
      ${this.pages.map(e=>fn`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};kp([Pe({type:String}),P2("design:type",String)],cf.prototype,"selected",void 0);kp([Gn("slot"),P2("design:type",HTMLSlotElement)],cf.prototype,"slotElement",void 0);cf=kp([mn("wired-tabs")],cf);var Ni=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Yi=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let vi=class extends Rn{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ni([Pe({type:Boolean,reflect:!0}),Yi("design:type",Object)],vi.prototype,"disabled",void 0);Ni([Pe({type:Number}),Yi("design:type",Object)],vi.prototype,"rows",void 0);Ni([Pe({type:Number}),Yi("design:type",Object)],vi.prototype,"maxrows",void 0);Ni([Pe({type:String}),Yi("design:type",Object)],vi.prototype,"autocomplete",void 0);Ni([Pe({type:Boolean}),Yi("design:type",Object)],vi.prototype,"autofocus",void 0);Ni([Pe({type:String}),Yi("design:type",Object)],vi.prototype,"inputmode",void 0);Ni([Pe({type:String}),Yi("design:type",Object)],vi.prototype,"placeholder",void 0);Ni([Pe({type:Boolean}),Yi("design:type",Object)],vi.prototype,"required",void 0);Ni([Pe({type:Boolean}),Yi("design:type",Object)],vi.prototype,"readonly",void 0);Ni([Pe({type:Number}),Yi("design:type",Number)],vi.prototype,"minlength",void 0);Ni([Pe({type:Number}),Yi("design:type",Number)],vi.prototype,"maxlength",void 0);Ni([Gn("textarea"),Yi("design:type",HTMLTextAreaElement)],vi.prototype,"textareaInput",void 0);vi=Ni([mn("wired-textarea")],vi);var Tf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Xp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Zl=class extends Rn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){xi(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Eo("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=Lp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),pr(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Tf([Pe({type:Boolean}),Xp("design:type",Object)],Zl.prototype,"checked",void 0);Tf([Pe({type:Boolean,reflect:!0}),Xp("design:type",Object)],Zl.prototype,"disabled",void 0);Tf([Gn("input"),Xp("design:type",HTMLInputElement)],Zl.prototype,"input",void 0);Zl=Tf([mn("wired-toggle")],Zl);var la=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ca=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let qi=class extends Rn{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[wn,dn`
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
      `]}render(){return fn`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){xi(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};la([Pe({type:String}),ca("design:type",Object)],qi.prototype,"src",void 0);la([Pe({type:Boolean}),ca("design:type",Object)],qi.prototype,"autoplay",void 0);la([Pe({type:Boolean}),ca("design:type",Object)],qi.prototype,"loop",void 0);la([Pe({type:Boolean}),ca("design:type",Object)],qi.prototype,"muted",void 0);la([Pe({type:Boolean}),ca("design:type",Object)],qi.prototype,"playsinline",void 0);la([Pe(),ca("design:type",Object)],qi.prototype,"playing",void 0);la([Pe(),ca("design:type",Object)],qi.prototype,"timeDisplay",void 0);la([Gn("wired-progress"),ca("design:type",gr)],qi.prototype,"progressBar",void 0);la([Gn("wired-slider"),ca("design:type",Ns)],qi.prototype,"slider",void 0);la([Gn("video"),ca("design:type",HTMLVideoElement)],qi.prototype,"video",void 0);qi=la([mn("wired-video"),ca("design:paramtypes",[])],qi);function z2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bh={exports:{}},Ll={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jx;function iS(){if(Jx)return Ll;Jx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Ll.Fragment=e,Ll.jsx=n,Ll.jsxs=n,Ll}var ev;function aS(){return ev||(ev=1,Bh.exports=iS()),Bh.exports}var re=aS(),Hh={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function sS(){if(tv)return bt;tv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function v(L,ie,Se){this.props=L,this.context=ie,this.refs=S,this.updater=Se||E}v.prototype.isReactComponent={},v.prototype.setState=function(L,ie){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ie,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function N(){}N.prototype=v.prototype;function D(L,ie,Se){this.props=L,this.context=ie,this.refs=S,this.updater=Se||E}var I=D.prototype=new N;I.constructor=D,A(I,v.prototype),I.isPureReactComponent=!0;var V=Array.isArray;function O(){}var z={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function C(L,ie,Se){var Me=Se.ref;return{$$typeof:r,type:L,key:ie,ref:Me!==void 0?Me:null,props:Se}}function R(L,ie){return C(L.type,ie,L.props)}function B(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Z(L){var ie={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Se){return ie[Se]})}var le=/\/+/g;function ge(L,ie){return typeof L=="object"&&L!==null&&L.key!=null?Z(""+L.key):ie.toString(36)}function $(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(O,O):(L.status="pending",L.then(function(ie){L.status==="pending"&&(L.status="fulfilled",L.value=ie)},function(ie){L.status==="pending"&&(L.status="rejected",L.reason=ie)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,ie,Se,Me,Ue){var K=typeof L;(K==="undefined"||K==="boolean")&&(L=null);var ue=!1;if(L===null)ue=!0;else switch(K){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(L.$$typeof){case r:case e:ue=!0;break;case g:return ue=L._init,P(ue(L._payload),ie,Se,Me,Ue)}}if(ue)return Ue=Ue(L),ue=Me===""?"."+ge(L,0):Me,V(Ue)?(Se="",ue!=null&&(Se=ue.replace(le,"$&/")+"/"),P(Ue,ie,Se,"",function(We){return We})):Ue!=null&&(B(Ue)&&(Ue=R(Ue,Se+(Ue.key==null||L&&L.key===Ue.key?"":(""+Ue.key).replace(le,"$&/")+"/")+ue)),ie.push(Ue)),1;ue=0;var Ne=Me===""?".":Me+":";if(V(L))for(var qe=0;qe<L.length;qe++)Me=L[qe],K=Ne+ge(Me,qe),ue+=P(Me,ie,Se,K,Ue);else if(qe=y(L),typeof qe=="function")for(L=qe.call(L),qe=0;!(Me=L.next()).done;)Me=Me.value,K=Ne+ge(Me,qe++),ue+=P(Me,ie,Se,K,Ue);else if(K==="object"){if(typeof L.then=="function")return P($(L),ie,Se,Me,Ue);throw ie=String(L),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function X(L,ie,Se){if(L==null)return L;var Me=[],Ue=0;return P(L,Me,"","",function(K){return ie.call(Se,K,Ue++)}),Me}function k(L){if(L._status===-1){var ie=L._result;ie=ie(),ie.then(function(Se){(L._status===0||L._status===-1)&&(L._status=1,L._result=Se)},function(Se){(L._status===0||L._status===-1)&&(L._status=2,L._result=Se)}),L._status===-1&&(L._status=0,L._result=ie)}if(L._status===1)return L._result.default;throw L._result}var fe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},pe={map:X,forEach:function(L,ie,Se){X(L,function(){ie.apply(this,arguments)},Se)},count:function(L){var ie=0;return X(L,function(){ie++}),ie},toArray:function(L){return X(L,function(ie){return ie})||[]},only:function(L){if(!B(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return bt.Activity=_,bt.Children=pe,bt.Component=v,bt.Fragment=n,bt.Profiler=o,bt.PureComponent=D,bt.StrictMode=a,bt.Suspense=m,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,bt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},bt.cache=function(L){return function(){return L.apply(null,arguments)}},bt.cacheSignal=function(){return null},bt.cloneElement=function(L,ie,Se){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Me=A({},L.props),Ue=L.key;if(ie!=null)for(K in ie.key!==void 0&&(Ue=""+ie.key),ie)!ne.call(ie,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&ie.ref===void 0||(Me[K]=ie[K]);var K=arguments.length-2;if(K===1)Me.children=Se;else if(1<K){for(var ue=Array(K),Ne=0;Ne<K;Ne++)ue[Ne]=arguments[Ne+2];Me.children=ue}return C(L.type,Ue,Me)},bt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},bt.createElement=function(L,ie,Se){var Me,Ue={},K=null;if(ie!=null)for(Me in ie.key!==void 0&&(K=""+ie.key),ie)ne.call(ie,Me)&&Me!=="key"&&Me!=="__self"&&Me!=="__source"&&(Ue[Me]=ie[Me]);var ue=arguments.length-2;if(ue===1)Ue.children=Se;else if(1<ue){for(var Ne=Array(ue),qe=0;qe<ue;qe++)Ne[qe]=arguments[qe+2];Ue.children=Ne}if(L&&L.defaultProps)for(Me in ue=L.defaultProps,ue)Ue[Me]===void 0&&(Ue[Me]=ue[Me]);return C(L,K,Ue)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(L){return{$$typeof:d,render:L}},bt.isValidElement=B,bt.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:k}},bt.memo=function(L,ie){return{$$typeof:p,type:L,compare:ie===void 0?null:ie}},bt.startTransition=function(L){var ie=z.T,Se={};z.T=Se;try{var Me=L(),Ue=z.S;Ue!==null&&Ue(Se,Me),typeof Me=="object"&&Me!==null&&typeof Me.then=="function"&&Me.then(O,fe)}catch(K){fe(K)}finally{ie!==null&&Se.types!==null&&(ie.types=Se.types),z.T=ie}},bt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},bt.use=function(L){return z.H.use(L)},bt.useActionState=function(L,ie,Se){return z.H.useActionState(L,ie,Se)},bt.useCallback=function(L,ie){return z.H.useCallback(L,ie)},bt.useContext=function(L){return z.H.useContext(L)},bt.useDebugValue=function(){},bt.useDeferredValue=function(L,ie){return z.H.useDeferredValue(L,ie)},bt.useEffect=function(L,ie){return z.H.useEffect(L,ie)},bt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},bt.useId=function(){return z.H.useId()},bt.useImperativeHandle=function(L,ie,Se){return z.H.useImperativeHandle(L,ie,Se)},bt.useInsertionEffect=function(L,ie){return z.H.useInsertionEffect(L,ie)},bt.useLayoutEffect=function(L,ie){return z.H.useLayoutEffect(L,ie)},bt.useMemo=function(L,ie){return z.H.useMemo(L,ie)},bt.useOptimistic=function(L,ie){return z.H.useOptimistic(L,ie)},bt.useReducer=function(L,ie,Se){return z.H.useReducer(L,ie,Se)},bt.useRef=function(L){return z.H.useRef(L)},bt.useState=function(L){return z.H.useState(L)},bt.useSyncExternalStore=function(L,ie,Se){return z.H.useSyncExternalStore(L,ie,Se)},bt.useTransition=function(){return z.H.useTransition()},bt.version="19.2.1",bt}var nv;function Wp(){return nv||(nv=1,Hh.exports=sS()),Hh.exports}var Be=Wp();const rS=z2(Be);var Gh={exports:{}},Ul={},Vh={exports:{}},jh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function oS(){return iv||(iv=1,(function(r){function e(P,X){var k=P.length;P.push(X);e:for(;0<k;){var fe=k-1>>>1,pe=P[fe];if(0<o(pe,X))P[fe]=X,P[k]=pe,k=fe;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var X=P[0],k=P.pop();if(k!==X){P[0]=k;e:for(var fe=0,pe=P.length,L=pe>>>1;fe<L;){var ie=2*(fe+1)-1,Se=P[ie],Me=ie+1,Ue=P[Me];if(0>o(Se,k))Me<pe&&0>o(Ue,Se)?(P[fe]=Ue,P[Me]=k,fe=Me):(P[fe]=Se,P[ie]=k,fe=ie);else if(Me<pe&&0>o(Ue,k))P[fe]=Ue,P[Me]=k,fe=Me;else break e}}return X}function o(P,X){var k=P.sortIndex-X.sortIndex;return k!==0?k:P.id-X.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,E=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var X=n(p);X!==null;){if(X.callback===null)a(p);else if(X.startTime<=P)a(p),X.sortIndex=X.expirationTime,e(m,X);else break;X=n(p)}}function V(P){if(A=!1,I(P),!E)if(n(m)!==null)E=!0,O||(O=!0,Z());else{var X=n(p);X!==null&&$(V,X.startTime-P)}}var O=!1,z=-1,ne=5,C=-1;function R(){return S?!0:!(r.unstable_now()-C<ne)}function B(){if(S=!1,O){var P=r.unstable_now();C=P;var X=!0;try{e:{E=!1,A&&(A=!1,N(z),z=-1),y=!0;var k=x;try{t:{for(I(P),_=n(m);_!==null&&!(_.expirationTime>P&&R());){var fe=_.callback;if(typeof fe=="function"){_.callback=null,x=_.priorityLevel;var pe=fe(_.expirationTime<=P);if(P=r.unstable_now(),typeof pe=="function"){_.callback=pe,I(P),X=!0;break t}_===n(m)&&a(m),I(P)}else a(m);_=n(m)}if(_!==null)X=!0;else{var L=n(p);L!==null&&$(V,L.startTime-P),X=!1}}break e}finally{_=null,x=k,y=!1}X=void 0}}finally{X?Z():O=!1}}}var Z;if(typeof D=="function")Z=function(){D(B)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ge=le.port2;le.port1.onmessage=B,Z=function(){ge.postMessage(null)}}else Z=function(){v(B,0)};function $(P,X){z=v(function(){P(r.unstable_now())},X)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var X=3;break;default:X=x}var k=x;x=X;try{return P()}finally{x=k}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,X){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var k=x;x=P;try{return X()}finally{x=k}},r.unstable_scheduleCallback=function(P,X,k){var fe=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?fe+k:fe):k=fe,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=k+pe,P={id:g++,callback:X,priorityLevel:P,startTime:k,expirationTime:pe,sortIndex:-1},k>fe?(P.sortIndex=k,e(p,P),n(m)===null&&P===n(p)&&(A?(N(z),z=-1):A=!0,$(V,k-fe))):(P.sortIndex=pe,e(m,P),E||y||(E=!0,O||(O=!0,Z()))),P},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(P){var X=x;return function(){var k=x;x=X;try{return P.apply(this,arguments)}finally{x=k}}}})(jh)),jh}var av;function lS(){return av||(av=1,Vh.exports=oS()),Vh.exports}var kh={exports:{}},ei={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function cS(){if(sv)return ei;sv=1;var r=Wp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return ei.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,ei.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},ei.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},ei.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},ei.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},ei.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},ei.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},ei.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},ei.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},ei.requestFormReset=function(m){a.d.r(m)},ei.unstable_batchedUpdates=function(m,p){return m(p)},ei.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},ei.useFormStatus=function(){return u.H.useHostTransitionStatus()},ei.version="19.2.1",ei}var rv;function uS(){if(rv)return kh.exports;rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),kh.exports=cS(),kh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function fS(){if(ov)return Ul;ov=1;var r=lS(),e=Wp(),n=uS();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,T=f.child;T;){if(T===s){b=!0,s=f,l=h;break}if(T===l){b=!0,l=f,s=h;break}T=T.sibling}if(!b){for(T=h.child;T;){if(T===s){b=!0,s=h,l=f;break}if(T===l){b=!0,l=h,s=f;break}T=T.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),D=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case V:return"Suspense";case O:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case D:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}var $=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function L(t){return{current:t}}function ie(t){0>pe||(t.current=fe[pe],fe[pe]=null,pe--)}function Se(t,i){pe++,fe[pe]=t.current,t.current=i}var Me=L(null),Ue=L(null),K=L(null),ue=L(null);function Ne(t,i){switch(Se(K,i),Se(Ue,t),Se(Me,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?lx(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=lx(i),t=cx(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Me),Se(Me,t)}function qe(){ie(Me),ie(Ue),ie(K)}function We(t){t.memoizedState!==null&&Se(ue,t);var i=Me.current,s=cx(i,t.type);i!==s&&(Se(Ue,t),Se(Me,s))}function _t(t){Ue.current===t&&(ie(Me),ie(Ue)),ue.current===t&&(ie(ue),Al._currentValue=k)}var Ot,ct;function gt(t){if(Ot===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);Ot=i&&i[1]||"",ct=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ot+t+ct}var H=!1;function xt(t,i){if(!t||H)return"";H=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var ye=function(){throw Error()};if(Object.defineProperty(ye.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ye,[])}catch(ce){var ae=ce}Reflect.construct(t,[],ye)}else{try{ye.call()}catch(ce){ae=ce}t.call(ye.prototype)}}else{try{throw Error()}catch(ce){ae=ce}(ye=t())&&typeof ye.catch=="function"&&ye.catch(function(){})}}catch(ce){if(ce&&ae&&typeof ce.stack=="string")return[ce.stack,ae.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],T=h[1];if(b&&T){var F=b.split(`
`),te=T.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===te.length)for(l=F.length-1,f=te.length-1;1<=l&&0<=f&&F[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==te[f]){var me=`
`+F[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{H=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?gt(s):""}function St(t,i){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==i&&i!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return xt(t.type,!1);case 11:return xt(t.type.render,!1);case 1:return xt(t.type,!0);case 31:return gt("Activity");default:return""}}function kt(t){try{var i="",s=null;do i+=St(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ye=Object.prototype.hasOwnProperty,$t=r.unstable_scheduleCallback,at=r.unstable_cancelCallback,pt=r.unstable_shouldYield,U=r.unstable_requestPaint,M=r.unstable_now,Q=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,Ae=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,nt=r.unstable_LowPriority,ze=r.unstable_IdlePriority,st=r.log,Qe=r.unstable_setDisableYieldValue,Te=null,Re=null;function it(t){if(typeof st=="function"&&Qe(t),Re&&typeof Re.setStrictMode=="function")try{Re.setStrictMode(Te,t)}catch{}}var ke=Math.clz32?Math.clz32:G,Ve=Math.log,ut=Math.LN2;function G(t){return t>>>=0,t===0?32:31-(Ve(t)/ut|0)|0}var Ie=256,Le=262144,Oe=4194304;function we(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var T=l&134217727;return T!==0?(l=T&~h,l!==0?f=we(l):(b&=T,b!==0?f=we(b):s||(s=T&~t,s!==0&&(f=we(s))))):(T=l&~h,T!==0?f=we(T):b!==0?f=we(b):s||(s=l&~t,s!==0&&(f=we(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function je(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function ft(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var t=Oe;return Oe<<=1,(Oe&62914560)===0&&(Oe=4194304),t}function tt(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Xt(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gn(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var T=t.entanglements,F=t.expirationTimes,te=t.hiddenUpdates;for(s=b&~s;0<s;){var me=31-ke(s),ye=1<<me;T[me]=0,F[me]=-1;var ae=te[me];if(ae!==null)for(te[me]=null,me=0;me<ae.length;me++){var ce=ae[me];ce!==null&&(ce.lane&=-536870913)}s&=~ye}l!==0&&nn(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function nn(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-ke(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function oi(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-ke(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function Bt(t,i){var s=i&-i;return s=(s&42)!==0?1:Cn(s),(s&(t.suspendedLanes|i))!==0?0:s}function Cn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function bi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ua(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Ux(t.type))}function $i(t,i){var s=X.p;try{return X.p=t,i()}finally{X.p=s}}var ii=Math.random().toString(36).slice(2),_n="__reactFiber$"+ii,Sn="__reactProps$"+ii,Zi="__reactContainer$"+ii,Qa="__reactEvents$"+ii,Ma="__reactListeners$"+ii,Go="__reactHandles$"+ii,zs="__reactResources$"+ii,Pi="__reactMarker$"+ii;function zi(t){delete t[_n],delete t[Sn],delete t[Qa],delete t[Ma],delete t[Go]}function fa(t){var i=t[_n];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Zi]||s[_n]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=gx(t);t!==null;){if(s=t[_n])return s;t=gx(t)}return i}t=s,s=t.parentNode}return null}function w(t){if(t=t[_n]||t[Zi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function W(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function se(t){var i=t[zs];return i||(i=t[zs]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function J(t){t[Pi]=!0}var Y=new Set,De={};function he(t,i){Ee(t,i),Ee(t+"Capture",i)}function Ee(t,i){for(De[t]=i,t=0;t<i.length;t++)Y.add(i[t])}var Ce=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fe={},Xe={};function He(t){return Ye.call(Xe,t)?!0:Ye.call(Fe,t)?!1:Ce.test(t)?Xe[t]=!0:(Fe[t]=!0,!1)}function Je(t,i,s){if(He(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function vt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function ht(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ot(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ct(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function dt(t){if(!t._valueTracker){var i=Ct(t)?"checked":"value";t._valueTracker=$e(t,i,""+t[i])}}function Ze(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Ct(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rn=/[\n"\\]/g;function mt(t){return t.replace(rn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function hn(t,i,s,l,f,h,b,T){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ot(i)):t.value!==""+ot(i)&&(t.value=""+ot(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?an(t,b,ot(i)):s!=null?an(t,b,ot(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ot(T):t.removeAttribute("name")}function wt(t,i,s,l,f,h,b,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){dt(t);return}s=s!=null?""+ot(s):"",i=i!=null?""+ot(i):s,T||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=T?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),dt(t)}function an(t,i,s){i==="number"&&Dt(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Ht(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ot(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ft(t,i,s){if(i!=null&&(i=""+ot(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ot(s):""}function on(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if($(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ot(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),dt(t)}function Jn(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var ai=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Is(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||ai.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function yr(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Is(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Is(t,h,i[h])}function Fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vo=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sr(t){return Mn.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Mr=null;function Er(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,Tr=null;function om(t){var i=w(t);if(i&&(t=i.stateNode)){var s=t[Sn]||null;e:switch(t=i.stateNode,i.type){case"input":if(hn(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+mt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[Sn]||null;if(!f)throw Error(a(90));hn(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Ze(l)}break e;case"textarea":Ft(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ht(t,!!s.multiple,i,!1)}}}var Lf=!1;function lm(t,i,s){if(Lf)return t(i,s);Lf=!0;try{var l=t(i);return l}finally{if(Lf=!1,(da!==null||Tr!==null)&&(nu(),da&&(i=da,t=Tr,Tr=da=null,om(i),t)))for(i=0;i<t.length;i++)om(t[i])}}function jo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[Sn]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(Ea)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Uf=!1}var Ja=null,Of=null,gc=null;function cm(){if(gc)return gc;var t,i=Of,s=i.length,l,f="value"in Ja?Ja.value:Ja.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return gc=f.slice(t,1<l?1-l:void 0)}function _c(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xc(){return!0}function um(){return!1}function li(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(s=t[T],this[T]=s?s(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xc:um,this.isPropagationStopped=um,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=xc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=xc)},persist:function(){},isPersistent:xc}),i}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=li(Bs),Xo=_({},Bs,{view:0,detail:0}),g1=li(Xo),Nf,Pf,Wo,bc=_({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wo&&(Wo&&t.type==="mousemove"?(Nf=t.screenX-Wo.screenX,Pf=t.screenY-Wo.screenY):Pf=Nf=0,Wo=t),Nf)},movementY:function(t){return"movementY"in t?t.movementY:Pf}}),fm=li(bc),_1=_({},bc,{dataTransfer:0}),x1=li(_1),v1=_({},Xo,{relatedTarget:0}),zf=li(v1),b1=_({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=li(b1),S1=_({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),M1=li(S1),E1=_({},Bs,{data:0}),dm=li(E1),T1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=w1[t])?!!i[t]:!1}function If(){return R1}var C1=_({},Xo,{key:function(t){if(t.key){var i=T1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=_c(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(t){return t.type==="keypress"?_c(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_c(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),D1=li(C1),L1=_({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=li(L1),U1=_({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),O1=li(U1),N1=_({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),P1=li(N1),z1=_({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),I1=li(z1),F1=_({},Bs,{newState:0,oldState:0}),B1=li(F1),H1=[9,13,27,32],Ff=Ea&&"CompositionEvent"in window,qo=null;Ea&&"documentMode"in document&&(qo=document.documentMode);var G1=Ea&&"TextEvent"in window&&!qo,pm=Ea&&(!Ff||qo&&8<qo&&11>=qo),mm=" ",gm=!1;function _m(t,i){switch(t){case"keyup":return H1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function V1(t,i){switch(t){case"compositionend":return xm(i);case"keypress":return i.which!==32?null:(gm=!0,mm);case"textInput":return t=i.data,t===mm&&gm?null:t;default:return null}}function j1(t,i){if(Ar)return t==="compositionend"||!Ff&&_m(t,i)?(t=cm(),gc=Of=Ja=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return pm&&i.locale!=="ko"?null:i.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!k1[t.type]:i==="textarea"}function bm(t,i,s,l){da?Tr?Tr.push(l):Tr=[l]:da=l,i=cu(i,"onChange"),0<i.length&&(s=new vc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Yo=null,$o=null;function X1(t){nx(t,0)}function yc(t){var i=W(t);if(Ze(i))return t}function ym(t,i){if(t==="change")return i}var Sm=!1;if(Ea){var Bf;if(Ea){var Hf="oninput"in document;if(!Hf){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),Hf=typeof Mm.oninput=="function"}Bf=Hf}else Bf=!1;Sm=Bf&&(!document.documentMode||9<document.documentMode)}function Em(){Yo&&(Yo.detachEvent("onpropertychange",Tm),$o=Yo=null)}function Tm(t){if(t.propertyName==="value"&&yc($o)){var i=[];bm(i,$o,t,Er(t)),lm(X1,i)}}function W1(t,i,s){t==="focusin"?(Em(),Yo=i,$o=s,Yo.attachEvent("onpropertychange",Tm)):t==="focusout"&&Em()}function q1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc($o)}function Y1(t,i){if(t==="click")return yc(i)}function $1(t,i){if(t==="input"||t==="change")return yc(i)}function Z1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var yi=typeof Object.is=="function"?Object.is:Z1;function Zo(t,i){if(yi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ye.call(i,f)||!yi(t[f],i[f]))return!1}return!0}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wm(t,i){var s=Am(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Am(s)}}function Rm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Rm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=Dt(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Dt(t.document)}return i}function Gf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var K1=Ea&&"documentMode"in document&&11>=document.documentMode,wr=null,Vf=null,Ko=null,jf=!1;function Dm(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;jf||wr==null||wr!==Dt(l)||(l=wr,"selectionStart"in l&&Gf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ko&&Zo(Ko,l)||(Ko=l,l=cu(Vf,"onSelect"),0<l.length&&(i=new vc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=wr)))}function Hs(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Rr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionrun:Hs("Transition","TransitionRun"),transitionstart:Hs("Transition","TransitionStart"),transitioncancel:Hs("Transition","TransitionCancel"),transitionend:Hs("Transition","TransitionEnd")},kf={},Lm={};Ea&&(Lm=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function Gs(t){if(kf[t])return kf[t];if(!Rr[t])return t;var i=Rr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Lm)return kf[t]=i[s];return t}var Um=Gs("animationend"),Om=Gs("animationiteration"),Nm=Gs("animationstart"),Q1=Gs("transitionrun"),J1=Gs("transitionstart"),eb=Gs("transitioncancel"),Pm=Gs("transitionend"),zm=new Map,Xf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xf.push("scrollEnd");function Qi(t,i){zm.set(t,i),he(i,[t])}var Sc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ii=[],Cr=0,Wf=0;function Mc(){for(var t=Cr,i=Wf=Cr=0;i<t;){var s=Ii[i];Ii[i++]=null;var l=Ii[i];Ii[i++]=null;var f=Ii[i];Ii[i++]=null;var h=Ii[i];if(Ii[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&Im(s,f,h)}}function Ec(t,i,s,l){Ii[Cr++]=t,Ii[Cr++]=i,Ii[Cr++]=s,Ii[Cr++]=l,Wf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function qf(t,i,s,l){return Ec(t,i,s,l),Tc(t)}function Vs(t,i){return Ec(t,null,null,i),Tc(t)}function Im(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-ke(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function Tc(t){if(50<vl)throw vl=0,nh=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Dr={};function tb(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Si(t,i,s,l){return new tb(t,i,s,l)}function Yf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ta(t,i){var s=t.alternate;return s===null?(s=Si(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Fm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Ac(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")Yf(t)&&(b=1);else if(typeof t=="string")b=ry(t,s,Me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Si(31,s,i,f),t.elementType=C,t.lanes=h,t;case A:return js(s.children,f,h,i);case S:b=8,f|=24;break;case v:return t=Si(12,s,i,f|2),t.elementType=v,t.lanes=h,t;case V:return t=Si(13,s,i,f),t.elementType=V,t.lanes=h,t;case O:return t=Si(19,s,i,f),t.elementType=O,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:b=10;break e;case N:b=9;break e;case I:b=11;break e;case z:b=14;break e;case ne:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=Si(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function js(t,i,s,l){return t=Si(7,t,l,i),t.lanes=s,t}function $f(t,i,s){return t=Si(6,t,null,i),t.lanes=s,t}function Bm(t){var i=Si(18,null,null,0);return i.stateNode=t,i}function Zf(t,i,s){return i=Si(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Hm=new WeakMap;function Fi(t,i){if(typeof t=="object"&&t!==null){var s=Hm.get(t);return s!==void 0?s:(i={value:t,source:i,stack:kt(i)},Hm.set(t,i),i)}return{value:t,source:i,stack:kt(i)}}var Lr=[],Ur=0,wc=null,Qo=0,Bi=[],Hi=0,es=null,ha=1,pa="";function Aa(t,i){Lr[Ur++]=Qo,Lr[Ur++]=wc,wc=t,Qo=i}function Gm(t,i,s){Bi[Hi++]=ha,Bi[Hi++]=pa,Bi[Hi++]=es,es=t;var l=ha;t=pa;var f=32-ke(l)-1;l&=~(1<<f),s+=1;var h=32-ke(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,ha=1<<32-ke(i)+f|s<<f|l,pa=h+t}else ha=1<<h|s<<f|l,pa=t}function Kf(t){t.return!==null&&(Aa(t,1),Gm(t,1,0))}function Qf(t){for(;t===wc;)wc=Lr[--Ur],Lr[Ur]=null,Qo=Lr[--Ur],Lr[Ur]=null;for(;t===es;)es=Bi[--Hi],Bi[Hi]=null,pa=Bi[--Hi],Bi[Hi]=null,ha=Bi[--Hi],Bi[Hi]=null}function Vm(t,i){Bi[Hi++]=ha,Bi[Hi++]=pa,Bi[Hi++]=es,ha=i.id,pa=i.overflow,es=t}var Yn=null,ln=null,zt=!1,ts=null,Gi=!1,Jf=Error(a(519));function ns(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(Fi(i,t)),Jf}function jm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[_n]=t,i[Sn]=l,s){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(s=0;s<yl.length;s++)Ut(yl[s],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":Ut("invalid",i),wt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ut("invalid",i);break;case"textarea":Ut("invalid",i),on(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||rx(i.textContent,s)?(l.popover!=null&&(Ut("beforetoggle",i),Ut("toggle",i)),l.onScroll!=null&&Ut("scroll",i),l.onScrollEnd!=null&&Ut("scrollend",i),l.onClick!=null&&(i.onclick=Ki),i=!0):i=!1,i||ns(t,!0)}function km(t){for(Yn=t.return;Yn;)switch(Yn.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Yn=Yn.return}}function Or(t){if(t!==Yn)return!1;if(!zt)return km(t),zt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||_h(t.type,t.memoizedProps)),s=!s),s&&ln&&ns(t),km(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ln=mx(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));ln=mx(t)}else i===27?(i=ln,gs(t.type)?(t=Sh,Sh=null,ln=t):ln=i):ln=Yn?ji(t.stateNode.nextSibling):null;return!0}function ks(){ln=Yn=null,zt=!1}function ed(){var t=ts;return t!==null&&(di===null?di=t:di.push.apply(di,t),ts=null),t}function Jo(t){ts===null?ts=[t]:ts.push(t)}var td=L(null),Xs=null,wa=null;function is(t,i,s){Se(td,i._currentValue),i._currentValue=s}function Ra(t){t._currentValue=td.current,ie(td)}function nd(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function id(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=f;for(var F=0;F<i.length;F++)if(T.context===i[F]){h.lanes|=s,T=h.alternate,T!==null&&(T.lanes|=s),nd(h.return,s,t),l||(b=null);break e}h=T.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),nd(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Nr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var T=f.type;yi(f.pendingProps.value,b.value)||(t!==null?t.push(T):t=[T])}}else if(f===ue.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(Al):t=[Al])}f=f.return}t!==null&&id(i,t,s,l),i.flags|=262144}function Rc(t){for(t=t.firstContext;t!==null;){if(!yi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ws(t){Xs=t,wa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function $n(t){return Xm(Xs,t)}function Cc(t,i){return Xs===null&&Ws(t),Xm(t,i)}function Xm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},wa===null){if(t===null)throw Error(a(308));wa=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else wa=wa.next=i;return s}var nb=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},ib=r.unstable_scheduleCallback,ab=r.unstable_NormalPriority,Dn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ad(){return{controller:new nb,data:new Map,refCount:0}}function el(t){t.refCount--,t.refCount===0&&ib(ab,function(){t.controller.abort()})}var tl=null,sd=0,Pr=0,zr=null;function sb(t,i){if(tl===null){var s=tl=[];sd=0,Pr=lh(),zr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return sd++,i.then(Wm,Wm),i}function Wm(){if(--sd===0&&tl!==null){zr!==null&&(zr.status="fulfilled");var t=tl;tl=null,Pr=0,zr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function rb(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var qm=P.S;P.S=function(t,i){D_=M(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&sb(t,i),qm!==null&&qm(t,i)};var qs=L(null);function rd(){var t=qs.current;return t!==null?t:sn.pooledCache}function Dc(t,i){i===null?Se(qs,qs.current):Se(qs,i.pool)}function Ym(){var t=rd();return t===null?null:{parent:Dn._currentValue,pool:t}}var Ir=Error(a(460)),od=Error(a(474)),Lc=Error(a(542)),Uc={then:function(){}};function $m(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Zm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(Ki,Ki),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qm(t),t;default:if(typeof i.status=="string")i.then(Ki,Ki);else{if(t=sn,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Qm(t),t}throw $s=i,Ir}}function Ys(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?($s=s,Ir):s}}var $s=null;function Km(){if($s===null)throw Error(a(459));var t=$s;return $s=null,t}function Qm(t){if(t===Ir||t===Lc)throw Error(a(483))}var Fr=null,nl=0;function Oc(t){var i=nl;return nl+=1,Fr===null&&(Fr=[]),Zm(Fr,t,i)}function il(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Nc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function Jm(t){function i(q,j){if(t){var ee=q.deletions;ee===null?(q.deletions=[j],q.flags|=16):ee.push(j)}}function s(q,j){if(!t)return null;for(;j!==null;)i(q,j),j=j.sibling;return null}function l(q){for(var j=new Map;q!==null;)q.key!==null?j.set(q.key,q):j.set(q.index,q),q=q.sibling;return j}function f(q,j){return q=Ta(q,j),q.index=0,q.sibling=null,q}function h(q,j,ee){return q.index=ee,t?(ee=q.alternate,ee!==null?(ee=ee.index,ee<j?(q.flags|=67108866,j):ee):(q.flags|=67108866,j)):(q.flags|=1048576,j)}function b(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function T(q,j,ee,ve){return j===null||j.tag!==6?(j=$f(ee,q.mode,ve),j.return=q,j):(j=f(j,ee),j.return=q,j)}function F(q,j,ee,ve){var rt=ee.type;return rt===A?me(q,j,ee.props.children,ve,ee.key):j!==null&&(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ne&&Ys(rt)===j.type)?(j=f(j,ee.props),il(j,ee),j.return=q,j):(j=Ac(ee.type,ee.key,ee.props,null,q.mode,ve),il(j,ee),j.return=q,j)}function te(q,j,ee,ve){return j===null||j.tag!==4||j.stateNode.containerInfo!==ee.containerInfo||j.stateNode.implementation!==ee.implementation?(j=Zf(ee,q.mode,ve),j.return=q,j):(j=f(j,ee.children||[]),j.return=q,j)}function me(q,j,ee,ve,rt){return j===null||j.tag!==7?(j=js(ee,q.mode,ve,rt),j.return=q,j):(j=f(j,ee),j.return=q,j)}function ye(q,j,ee){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=$f(""+j,q.mode,ee),j.return=q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case y:return ee=Ac(j.type,j.key,j.props,null,q.mode,ee),il(ee,j),ee.return=q,ee;case E:return j=Zf(j,q.mode,ee),j.return=q,j;case ne:return j=Ys(j),ye(q,j,ee)}if($(j)||Z(j))return j=js(j,q.mode,ee,null),j.return=q,j;if(typeof j.then=="function")return ye(q,Oc(j),ee);if(j.$$typeof===D)return ye(q,Cc(q,j),ee);Nc(q,j)}return null}function ae(q,j,ee,ve){var rt=j!==null?j.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return rt!==null?null:T(q,j,""+ee,ve);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===rt?F(q,j,ee,ve):null;case E:return ee.key===rt?te(q,j,ee,ve):null;case ne:return ee=Ys(ee),ae(q,j,ee,ve)}if($(ee)||Z(ee))return rt!==null?null:me(q,j,ee,ve,null);if(typeof ee.then=="function")return ae(q,j,Oc(ee),ve);if(ee.$$typeof===D)return ae(q,j,Cc(q,ee),ve);Nc(q,ee)}return null}function ce(q,j,ee,ve,rt){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return q=q.get(ee)||null,T(j,q,""+ve,rt);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case y:return q=q.get(ve.key===null?ee:ve.key)||null,F(j,q,ve,rt);case E:return q=q.get(ve.key===null?ee:ve.key)||null,te(j,q,ve,rt);case ne:return ve=Ys(ve),ce(q,j,ee,ve,rt)}if($(ve)||Z(ve))return q=q.get(ee)||null,me(j,q,ve,rt,null);if(typeof ve.then=="function")return ce(q,j,ee,Oc(ve),rt);if(ve.$$typeof===D)return ce(q,j,ee,Cc(j,ve),rt);Nc(j,ve)}return null}function Ke(q,j,ee,ve){for(var rt=null,Gt=null,et=j,Tt=j=0,Pt=null;et!==null&&Tt<ee.length;Tt++){et.index>Tt?(Pt=et,et=null):Pt=et.sibling;var Vt=ae(q,et,ee[Tt],ve);if(Vt===null){et===null&&(et=Pt);break}t&&et&&Vt.alternate===null&&i(q,et),j=h(Vt,j,Tt),Gt===null?rt=Vt:Gt.sibling=Vt,Gt=Vt,et=Pt}if(Tt===ee.length)return s(q,et),zt&&Aa(q,Tt),rt;if(et===null){for(;Tt<ee.length;Tt++)et=ye(q,ee[Tt],ve),et!==null&&(j=h(et,j,Tt),Gt===null?rt=et:Gt.sibling=et,Gt=et);return zt&&Aa(q,Tt),rt}for(et=l(et);Tt<ee.length;Tt++)Pt=ce(et,q,Tt,ee[Tt],ve),Pt!==null&&(t&&Pt.alternate!==null&&et.delete(Pt.key===null?Tt:Pt.key),j=h(Pt,j,Tt),Gt===null?rt=Pt:Gt.sibling=Pt,Gt=Pt);return t&&et.forEach(function(ys){return i(q,ys)}),zt&&Aa(q,Tt),rt}function lt(q,j,ee,ve){if(ee==null)throw Error(a(151));for(var rt=null,Gt=null,et=j,Tt=j=0,Pt=null,Vt=ee.next();et!==null&&!Vt.done;Tt++,Vt=ee.next()){et.index>Tt?(Pt=et,et=null):Pt=et.sibling;var ys=ae(q,et,Vt.value,ve);if(ys===null){et===null&&(et=Pt);break}t&&et&&ys.alternate===null&&i(q,et),j=h(ys,j,Tt),Gt===null?rt=ys:Gt.sibling=ys,Gt=ys,et=Pt}if(Vt.done)return s(q,et),zt&&Aa(q,Tt),rt;if(et===null){for(;!Vt.done;Tt++,Vt=ee.next())Vt=ye(q,Vt.value,ve),Vt!==null&&(j=h(Vt,j,Tt),Gt===null?rt=Vt:Gt.sibling=Vt,Gt=Vt);return zt&&Aa(q,Tt),rt}for(et=l(et);!Vt.done;Tt++,Vt=ee.next())Vt=ce(et,q,Tt,Vt.value,ve),Vt!==null&&(t&&Vt.alternate!==null&&et.delete(Vt.key===null?Tt:Vt.key),j=h(Vt,j,Tt),Gt===null?rt=Vt:Gt.sibling=Vt,Gt=Vt);return t&&et.forEach(function(_y){return i(q,_y)}),zt&&Aa(q,Tt),rt}function en(q,j,ee,ve){if(typeof ee=="object"&&ee!==null&&ee.type===A&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var rt=ee.key;j!==null;){if(j.key===rt){if(rt=ee.type,rt===A){if(j.tag===7){s(q,j.sibling),ve=f(j,ee.props.children),ve.return=q,q=ve;break e}}else if(j.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===ne&&Ys(rt)===j.type){s(q,j.sibling),ve=f(j,ee.props),il(ve,ee),ve.return=q,q=ve;break e}s(q,j);break}else i(q,j);j=j.sibling}ee.type===A?(ve=js(ee.props.children,q.mode,ve,ee.key),ve.return=q,q=ve):(ve=Ac(ee.type,ee.key,ee.props,null,q.mode,ve),il(ve,ee),ve.return=q,q=ve)}return b(q);case E:e:{for(rt=ee.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===ee.containerInfo&&j.stateNode.implementation===ee.implementation){s(q,j.sibling),ve=f(j,ee.children||[]),ve.return=q,q=ve;break e}else{s(q,j);break}else i(q,j);j=j.sibling}ve=Zf(ee,q.mode,ve),ve.return=q,q=ve}return b(q);case ne:return ee=Ys(ee),en(q,j,ee,ve)}if($(ee))return Ke(q,j,ee,ve);if(Z(ee)){if(rt=Z(ee),typeof rt!="function")throw Error(a(150));return ee=rt.call(ee),lt(q,j,ee,ve)}if(typeof ee.then=="function")return en(q,j,Oc(ee),ve);if(ee.$$typeof===D)return en(q,j,Cc(q,ee),ve);Nc(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,j!==null&&j.tag===6?(s(q,j.sibling),ve=f(j,ee),ve.return=q,q=ve):(s(q,j),ve=$f(ee,q.mode,ve),ve.return=q,q=ve),b(q)):s(q,j)}return function(q,j,ee,ve){try{nl=0;var rt=en(q,j,ee,ve);return Fr=null,rt}catch(et){if(et===Ir||et===Lc)throw et;var Gt=Si(29,et,null,q.mode);return Gt.lanes=ve,Gt.return=q,Gt}finally{}}}var Zs=Jm(!0),eg=Jm(!1),as=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function cd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ss(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function rs(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Wt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=Tc(t),Im(t,null,s),i}return Ec(t,l,i,s),Tc(t)}function al(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,oi(t,s)}}function ud(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var fd=!1;function sl(){if(fd){var t=zr;if(t!==null)throw t}}function rl(t,i,s,l){fd=!1;var f=t.updateQueue;as=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,T=f.shared.pending;if(T!==null){f.shared.pending=null;var F=T,te=F.next;F.next=null,b===null?h=te:b.next=te,b=F;var me=t.alternate;me!==null&&(me=me.updateQueue,T=me.lastBaseUpdate,T!==b&&(T===null?me.firstBaseUpdate=te:T.next=te,me.lastBaseUpdate=F))}if(h!==null){var ye=f.baseState;b=0,me=te=F=null,T=h;do{var ae=T.lane&-536870913,ce=ae!==T.lane;if(ce?(Nt&ae)===ae:(l&ae)===ae){ae!==0&&ae===Pr&&(fd=!0),me!==null&&(me=me.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ke=t,lt=T;ae=i;var en=s;switch(lt.tag){case 1:if(Ke=lt.payload,typeof Ke=="function"){ye=Ke.call(en,ye,ae);break e}ye=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=lt.payload,ae=typeof Ke=="function"?Ke.call(en,ye,ae):Ke,ae==null)break e;ye=_({},ye,ae);break e;case 2:as=!0}}ae=T.callback,ae!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[ae]:ce.push(ae))}else ce={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},me===null?(te=me=ce,F=ye):me=me.next=ce,b|=ae;if(T=T.next,T===null){if(T=f.shared.pending,T===null)break;ce=T,T=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);me===null&&(F=ye),f.baseState=F,f.firstBaseUpdate=te,f.lastBaseUpdate=me,h===null&&(f.shared.lanes=0),fs|=b,t.lanes=b,t.memoizedState=ye}}function tg(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function ng(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)tg(s[t],i)}var Br=L(null),Pc=L(0);function ig(t,i){t=Ia,Se(Pc,t),Se(Br,i),Ia=t|i.baseLanes}function dd(){Se(Pc,Ia),Se(Br,Br.current)}function hd(){Ia=Pc.current,ie(Br),ie(Pc)}var Mi=L(null),Vi=null;function os(t){var i=t.alternate;Se(En,En.current&1),Se(Mi,t),Vi===null&&(i===null||Br.current!==null||i.memoizedState!==null)&&(Vi=t)}function pd(t){Se(En,En.current),Se(Mi,t),Vi===null&&(Vi=t)}function ag(t){t.tag===22?(Se(En,En.current),Se(Mi,t),Vi===null&&(Vi=t)):ls()}function ls(){Se(En,En.current),Se(Mi,Mi.current)}function Ei(t){ie(Mi),Vi===t&&(Vi=null),ie(En)}var En=L(0);function zc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||bh(s)||yh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ca=0,Mt=null,Qt=null,Ln=null,Ic=!1,Hr=!1,Ks=!1,Fc=0,ol=0,Gr=null,ob=0;function xn(){throw Error(a(321))}function md(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!yi(t[s],i[s]))return!1;return!0}function gd(t,i,s,l,f,h){return Ca=h,Mt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Gg:Ld,Ks=!1,h=s(l,f),Ks=!1,Hr&&(h=rg(i,s,l,f)),sg(t),h}function sg(t){P.H=ul;var i=Qt!==null&&Qt.next!==null;if(Ca=0,Ln=Qt=Mt=null,Ic=!1,ol=0,Gr=null,i)throw Error(a(300));t===null||Un||(t=t.dependencies,t!==null&&Rc(t)&&(Un=!0))}function rg(t,i,s,l){Mt=t;var f=0;do{if(Hr&&(Gr=null),ol=0,Hr=!1,25<=f)throw Error(a(301));if(f+=1,Ln=Qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Vg,h=i(s,l)}while(Hr);return h}function lb(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?ll(i):i,t=t.useState()[0],(Qt!==null?Qt.memoizedState:null)!==t&&(Mt.flags|=1024),i}function _d(){var t=Fc!==0;return Fc=0,t}function xd(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function vd(t){if(Ic){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Ic=!1}Ca=0,Ln=Qt=Mt=null,Hr=!1,ol=Fc=0,Gr=null}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?Mt.memoizedState=Ln=t:Ln=Ln.next=t,Ln}function Tn(){if(Qt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Qt.next;var i=Ln===null?Mt.memoizedState:Ln.next;if(i!==null)Ln=i,Qt=t;else{if(t===null)throw Mt.alternate===null?Error(a(467)):Error(a(310));Qt=t,t={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},Ln===null?Mt.memoizedState=Ln=t:Ln=Ln.next=t}return Ln}function Bc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ll(t){var i=ol;return ol+=1,Gr===null&&(Gr=[]),t=Zm(Gr,t,i),i=Mt,(Ln===null?i.memoizedState:Ln.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Gg:Ld),t}function Hc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ll(t);if(t.$$typeof===D)return $n(t)}throw Error(a(438,String(t)))}function bd(t){var i=null,s=Mt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Mt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Bc(),Mt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=R;return i.index++,s}function Da(t,i){return typeof i=="function"?i(t):i}function Gc(t){var i=Tn();return yd(i,Qt,t)}function yd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var T=b=null,F=null,te=i,me=!1;do{var ye=te.lane&-536870913;if(ye!==te.lane?(Nt&ye)===ye:(Ca&ye)===ye){var ae=te.revertLane;if(ae===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),ye===Pr&&(me=!0);else if((Ca&ae)===ae){te=te.next,ae===Pr&&(me=!0);continue}else ye={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(T=F=ye,b=h):F=F.next=ye,Mt.lanes|=ae,fs|=ae;ye=te.action,Ks&&s(h,ye),h=te.hasEagerState?te.eagerState:s(h,ye)}else ae={lane:ye,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(T=F=ae,b=h):F=F.next=ae,Mt.lanes|=ye,fs|=ye;te=te.next}while(te!==null&&te!==i);if(F===null?b=h:F.next=T,!yi(h,t.memoizedState)&&(Un=!0,me&&(s=zr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=F,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Sd(t){var i=Tn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);yi(h,i.memoizedState)||(Un=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function og(t,i,s){var l=Mt,f=Tn(),h=zt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!yi((Qt||f).memoizedState,s);if(b&&(f.memoizedState=s,Un=!0),f=f.queue,Td(ug.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Ln!==null&&Ln.memoizedState.tag&1){if(l.flags|=2048,Vr(9,{destroy:void 0},cg.bind(null,l,f,s,i),null),sn===null)throw Error(a(349));h||(Ca&127)!==0||lg(l,i,s)}return s}function lg(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Mt.updateQueue,i===null?(i=Bc(),Mt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function cg(t,i,s,l){i.value=s,i.getSnapshot=l,fg(i)&&dg(t)}function ug(t,i,s){return s(function(){fg(i)&&dg(t)})}function fg(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!yi(t,s)}catch{return!0}}function dg(t){var i=Vs(t,2);i!==null&&hi(i,t,2)}function Md(t){var i=si();if(typeof t=="function"){var s=t;if(t=s(),Ks){it(!0);try{s()}finally{it(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},i}function hg(t,i,s,l){return t.baseState=s,yd(t,Qt,typeof l=="function"?l:Da)}function cb(t,i,s,l,f){if(kc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,pg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function pg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=P.T,b={};P.T=b;try{var T=s(f,l),F=P.S;F!==null&&F(b,T),mg(t,i,T)}catch(te){Ed(t,i,te)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=s(f,l),mg(t,i,h)}catch(te){Ed(t,i,te)}}function mg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){gg(t,i,l)},function(l){return Ed(t,i,l)}):gg(t,i,s)}function gg(t,i,s){i.status="fulfilled",i.value=s,_g(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,pg(t,s)))}function Ed(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,_g(i),i=i.next;while(i!==l)}t.action=null}function _g(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function xg(t,i){return i}function vg(t,i){if(zt){var s=sn.formState;if(s!==null){e:{var l=Mt;if(zt){if(ln){t:{for(var f=ln,h=Gi;f.nodeType!==8;){if(!h){f=null;break t}if(f=ji(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){ln=ji(f.nextSibling),l=f.data==="F!";break e}}ns(l)}l=!1}l&&(i=s[0])}}return s=si(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xg,lastRenderedState:i},s.queue=l,s=Fg.bind(null,Mt,l),l.dispatch=s,l=Md(!1),h=Dd.bind(null,Mt,!1,l.queue),l=si(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=cb.bind(null,Mt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function bg(t){var i=Tn();return yg(i,Qt,t)}function yg(t,i,s){if(i=yd(t,i,xg)[0],t=Gc(Da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ll(i)}catch(b){throw b===Ir?Lc:b}else l=i;i=Tn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(Mt.flags|=2048,Vr(9,{destroy:void 0},ub.bind(null,f,s),null)),[l,h,t]}function ub(t,i){t.action=i}function Sg(t){var i=Tn(),s=Qt;if(s!==null)return yg(i,s,t);Tn(),i=i.memoizedState,s=Tn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Vr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=Mt.updateQueue,i===null&&(i=Bc(),Mt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function Mg(){return Tn().memoizedState}function Vc(t,i,s,l){var f=si();Mt.flags|=t,f.memoizedState=Vr(1|i,{destroy:void 0},s,l===void 0?null:l)}function jc(t,i,s,l){var f=Tn();l=l===void 0?null:l;var h=f.memoizedState.inst;Qt!==null&&l!==null&&md(l,Qt.memoizedState.deps)?f.memoizedState=Vr(i,h,s,l):(Mt.flags|=t,f.memoizedState=Vr(1|i,h,s,l))}function Eg(t,i){Vc(8390656,8,t,i)}function Td(t,i){jc(2048,8,t,i)}function fb(t){Mt.flags|=4;var i=Mt.updateQueue;if(i===null)i=Bc(),Mt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function Tg(t){var i=Tn().memoizedState;return fb({ref:i,nextImpl:t}),function(){if((Wt&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function Ag(t,i){return jc(4,2,t,i)}function wg(t,i){return jc(4,4,t,i)}function Rg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Cg(t,i,s){s=s!=null?s.concat([t]):null,jc(4,4,Rg.bind(null,i,t),s)}function Ad(){}function Dg(t,i){var s=Tn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&md(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Lg(t,i){var s=Tn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&md(i,l[1]))return l[0];if(l=t(),Ks){it(!0);try{t()}finally{it(!1)}}return s.memoizedState=[l,i],l}function wd(t,i,s){return s===void 0||(Ca&1073741824)!==0&&(Nt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=U_(),Mt.lanes|=t,fs|=t,s)}function Ug(t,i,s,l){return yi(s,i)?s:Br.current!==null?(t=wd(t,s,l),yi(t,i)||(Un=!0),t):(Ca&42)===0||(Ca&1073741824)!==0&&(Nt&261930)===0?(Un=!0,t.memoizedState=s):(t=U_(),Mt.lanes|=t,fs|=t,i)}function Og(t,i,s,l,f){var h=X.p;X.p=h!==0&&8>h?h:8;var b=P.T,T={};P.T=T,Dd(t,!1,i,s);try{var F=f(),te=P.S;if(te!==null&&te(T,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=rb(F,l);cl(t,i,me,wi(t))}else cl(t,i,l,wi(t))}catch(ye){cl(t,i,{then:function(){},status:"rejected",reason:ye},wi())}finally{X.p=h,b!==null&&T.types!==null&&(b.types=T.types),P.T=b}}function db(){}function Rd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Ng(t).queue;Og(t,f,i,k,s===null?db:function(){return Pg(t),s(l)})}function Ng(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:k},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Pg(t){var i=Ng(t);i.next===null&&(i=t.alternate.memoizedState),cl(t,i.next.queue,{},wi())}function Cd(){return $n(Al)}function zg(){return Tn().memoizedState}function Ig(){return Tn().memoizedState}function hb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=wi();t=ss(s);var l=rs(i,t,s);l!==null&&(hi(l,i,s),al(l,i,s)),i={cache:ad()},t.payload=i;return}i=i.return}}function pb(t,i,s){var l=wi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},kc(t)?Bg(i,s):(s=qf(t,i,s,l),s!==null&&(hi(s,t,l),Hg(s,i,l)))}function Fg(t,i,s){var l=wi();cl(t,i,s,l)}function cl(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(kc(t))Bg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,T=h(b,s);if(f.hasEagerState=!0,f.eagerState=T,yi(T,b))return Ec(t,i,f,0),sn===null&&Mc(),!1}catch{}finally{}if(s=qf(t,i,f,l),s!==null)return hi(s,t,l),Hg(s,i,l),!0}return!1}function Dd(t,i,s,l){if(l={lane:2,revertLane:lh(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},kc(t)){if(i)throw Error(a(479))}else i=qf(t,s,l,2),i!==null&&hi(i,t,2)}function kc(t){var i=t.alternate;return t===Mt||i!==null&&i===Mt}function Bg(t,i){Hr=Ic=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Hg(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,oi(t,s)}}var ul={readContext:$n,use:Hc,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useLayoutEffect:xn,useInsertionEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useSyncExternalStore:xn,useId:xn,useHostTransitionStatus:xn,useFormState:xn,useActionState:xn,useOptimistic:xn,useMemoCache:xn,useCacheRefresh:xn};ul.useEffectEvent=xn;var Gg={readContext:$n,use:Hc,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:$n,useEffect:Eg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Vc(4194308,4,Rg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Vc(4194308,4,t,i)},useInsertionEffect:function(t,i){Vc(4,2,t,i)},useMemo:function(t,i){var s=si();i=i===void 0?null:i;var l=t();if(Ks){it(!0);try{t()}finally{it(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=si();if(s!==void 0){var f=s(i);if(Ks){it(!0);try{s(i)}finally{it(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=pb.bind(null,Mt,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:function(t){t=Md(t);var i=t.queue,s=Fg.bind(null,Mt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Ad,useDeferredValue:function(t,i){var s=si();return wd(s,t,i)},useTransition:function(){var t=Md(!1);return t=Og.bind(null,Mt,t.queue,!0,!1),si().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=Mt,f=si();if(zt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),sn===null)throw Error(a(349));(Nt&127)!==0||lg(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,Eg(ug.bind(null,l,h,t),[t]),l.flags|=2048,Vr(9,{destroy:void 0},cg.bind(null,l,h,s,i),null),s},useId:function(){var t=si(),i=sn.identifierPrefix;if(zt){var s=pa,l=ha;s=(l&~(1<<32-ke(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Fc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=ob++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:Cd,useFormState:vg,useActionState:vg,useOptimistic:function(t){var i=si();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Dd.bind(null,Mt,!0,s),s.dispatch=i,[t,i]},useMemoCache:bd,useCacheRefresh:function(){return si().memoizedState=hb.bind(null,Mt)},useEffectEvent:function(t){var i=si(),s={impl:t};return i.memoizedState=s,function(){if((Wt&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},Ld={readContext:$n,use:Hc,useCallback:Dg,useContext:$n,useEffect:Td,useImperativeHandle:Cg,useInsertionEffect:Ag,useLayoutEffect:wg,useMemo:Lg,useReducer:Gc,useRef:Mg,useState:function(){return Gc(Da)},useDebugValue:Ad,useDeferredValue:function(t,i){var s=Tn();return Ug(s,Qt.memoizedState,t,i)},useTransition:function(){var t=Gc(Da)[0],i=Tn().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:og,useId:zg,useHostTransitionStatus:Cd,useFormState:bg,useActionState:bg,useOptimistic:function(t,i){var s=Tn();return hg(s,Qt,t,i)},useMemoCache:bd,useCacheRefresh:Ig};Ld.useEffectEvent=Tg;var Vg={readContext:$n,use:Hc,useCallback:Dg,useContext:$n,useEffect:Td,useImperativeHandle:Cg,useInsertionEffect:Ag,useLayoutEffect:wg,useMemo:Lg,useReducer:Sd,useRef:Mg,useState:function(){return Sd(Da)},useDebugValue:Ad,useDeferredValue:function(t,i){var s=Tn();return Qt===null?wd(s,t,i):Ug(s,Qt.memoizedState,t,i)},useTransition:function(){var t=Sd(Da)[0],i=Tn().memoizedState;return[typeof t=="boolean"?t:ll(t),i]},useSyncExternalStore:og,useId:zg,useHostTransitionStatus:Cd,useFormState:Sg,useActionState:Sg,useOptimistic:function(t,i){var s=Tn();return Qt!==null?hg(s,Qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:bd,useCacheRefresh:Ig};Vg.useEffectEvent=Tg;function Ud(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Od={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=wi(),f=ss(l);f.payload=i,s!=null&&(f.callback=s),i=rs(t,f,l),i!==null&&(hi(i,t,l),al(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=wi(),f=ss(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=rs(t,f,l),i!==null&&(hi(i,t,l),al(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=wi(),l=ss(s);l.tag=2,i!=null&&(l.callback=i),i=rs(t,l,s),i!==null&&(hi(i,t,s),al(i,t,s))}};function jg(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Zo(s,l)||!Zo(f,h):!0}function kg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Od.enqueueReplaceState(i,i.state,null)}function Qs(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function Xg(t){Sc(t)}function Wg(t){console.error(t)}function qg(t){Sc(t)}function Xc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Yg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Nd(t,i,s){return s=ss(s),s.tag=3,s.payload={element:null},s.callback=function(){Xc(t,i)},s}function $g(t){return t=ss(t),t.tag=3,t}function Zg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Yg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Yg(i,s,l),typeof f!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function mb(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Nr(i,s,f,!0),s=Mi.current,s!==null){switch(s.tag){case 31:case 13:return Vi===null?iu():s.alternate===null&&vn===0&&(vn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Uc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),sh(t,l,f)),!1;case 22:return s.flags|=65536,l===Uc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),sh(t,l,f)),!1}throw Error(a(435,s.tag))}return sh(t,l,f),iu(),!1}if(zt)return i=Mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==Jf&&(t=Error(a(422),{cause:l}),Jo(Fi(t,s)))):(l!==Jf&&(i=Error(a(423),{cause:l}),Jo(Fi(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Fi(l,s),f=Nd(t.stateNode,l,f),ud(t,f),vn!==4&&(vn=2)),!1;var h=Error(a(520),{cause:l});if(h=Fi(h,s),xl===null?xl=[h]:xl.push(h),vn!==4&&(vn=2),i===null)return!0;l=Fi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Nd(s.stateNode,l,t),ud(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ds===null||!ds.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=$g(f),Zg(f,t,s,l),ud(s,f),!1}s=s.return}while(s!==null);return!1}var Pd=Error(a(461)),Un=!1;function Zn(t,i,s,l){i.child=t===null?eg(i,null,s,l):Zs(i,t.child,s,l)}function Kg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var T in l)T!=="ref"&&(b[T]=l[T])}else b=l;return Ws(i),l=gd(t,i,s,b,h,f),T=_d(),t!==null&&!Un?(xd(t,i,f),La(t,i,f)):(zt&&T&&Kf(i),i.flags|=1,Zn(t,i,l,f),i.child)}function Qg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Yf(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,Jg(t,i,h,l,f)):(t=Ac(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!jd(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Zo,s(b,l)&&t.ref===i.ref)return La(t,i,f)}return i.flags|=1,t=Ta(h,l),t.ref=i.ref,t.return=i,i.child=t}function Jg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Zo(h,l)&&t.ref===i.ref)if(Un=!1,i.pendingProps=l=h,jd(t,f))(t.flags&131072)!==0&&(Un=!0);else return i.lanes=t.lanes,La(t,i,f)}return zd(t,i,s,l,f)}function e_(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return t_(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dc(i,h!==null?h.cachePool:null),h!==null?ig(i,h):dd(),ag(i);else return l=i.lanes=536870912,t_(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(Dc(i,h.cachePool),ig(i,h),ls(),i.memoizedState=null):(t!==null&&Dc(i,null),dd(),ls());return Zn(t,i,f,s),i.child}function fl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function t_(t,i,s,l,f){var h=rd();return h=h===null?null:{parent:Dn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Dc(i,null),dd(),ag(i),t!==null&&Nr(t,i,l,!0),i.childLanes=f,null}function Wc(t,i){return i=Yc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function n_(t,i,s){return Zs(i,t.child,null,s),t=Wc(i,i.pendingProps),t.flags|=2,Ei(i),i.memoizedState=null,t}function gb(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(zt){if(l.mode==="hidden")return t=Wc(i,l),i.lanes=536870912,fl(null,t);if(pd(i),(t=ln)?(t=px(t,Gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Bm(t),s.return=i,i.child=s,Yn=i,ln=null)):t=null,t===null)throw ns(i);return i.lanes=536870912,null}return Wc(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(pd(i),f)if(i.flags&256)i.flags&=-257,i=n_(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(Un||Nr(t,i,s,!1),f=(s&t.childLanes)!==0,Un||f){if(l=sn,l!==null&&(b=Bt(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Vs(t,b),hi(l,t,b),Pd;iu(),i=n_(t,i,s)}else t=h.treeContext,ln=ji(b.nextSibling),Yn=i,zt=!0,ts=null,Gi=!1,t!==null&&Vm(i,t),i=Wc(i,l),i.flags|=4096;return i}return t=Ta(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function qc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function zd(t,i,s,l,f){return Ws(i),s=gd(t,i,s,l,void 0,f),l=_d(),t!==null&&!Un?(xd(t,i,f),La(t,i,f)):(zt&&l&&Kf(i),i.flags|=1,Zn(t,i,s,f),i.child)}function i_(t,i,s,l,f,h){return Ws(i),i.updateQueue=null,s=rg(i,l,s,f),sg(t),l=_d(),t!==null&&!Un?(xd(t,i,h),La(t,i,h)):(zt&&l&&Kf(i),i.flags|=1,Zn(t,i,s,h),i.child)}function a_(t,i,s,l,f){if(Ws(i),i.stateNode===null){var h=Dr,b=s.contextType;typeof b=="object"&&b!==null&&(h=$n(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Od,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},ld(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?$n(b):Dr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Ud(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Od.enqueueReplaceState(h,h.state,null),rl(i,l,h,f),sl(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var T=i.memoizedProps,F=Qs(s,T);h.props=F;var te=h.context,me=s.contextType;b=Dr,typeof me=="object"&&me!==null&&(b=$n(me));var ye=s.getDerivedStateFromProps;me=typeof ye=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||te!==b)&&kg(i,h,l,b),as=!1;var ae=i.memoizedState;h.state=ae,rl(i,l,h,f),sl(),te=i.memoizedState,T||ae!==te||as?(typeof ye=="function"&&(Ud(i,s,ye,l),te=i.memoizedState),(F=as||jg(i,s,F,l,ae,te,b))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),h.props=l,h.state=te,h.context=b,l=F):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,cd(t,i),b=i.memoizedProps,me=Qs(s,b),h.props=me,ye=i.pendingProps,ae=h.context,te=s.contextType,F=Dr,typeof te=="object"&&te!==null&&(F=$n(te)),T=s.getDerivedStateFromProps,(te=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==ye||ae!==F)&&kg(i,h,l,F),as=!1,ae=i.memoizedState,h.state=ae,rl(i,l,h,f),sl();var ce=i.memoizedState;b!==ye||ae!==ce||as||t!==null&&t.dependencies!==null&&Rc(t.dependencies)?(typeof T=="function"&&(Ud(i,s,T,l),ce=i.memoizedState),(me=as||jg(i,s,me,l,ae,ce,F)||t!==null&&t.dependencies!==null&&Rc(t.dependencies))?(te||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ce,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ce,F)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),h.props=l,h.state=ce,h.context=F,l=me):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&ae===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,qc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Zs(i,t.child,null,f),i.child=Zs(i,null,s,f)):Zn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=La(t,i,f),t}function s_(t,i,s,l){return ks(),i.flags|=256,Zn(t,i,s,l),i.child}var Id={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fd(t){return{baseLanes:t,cachePool:Ym()}}function Bd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Ai),t}function r_(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(En.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(zt){if(f?os(i):ls(),(t=ln)?(t=px(t,Gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:es!==null?{id:ha,overflow:pa}:null,retryLane:536870912,hydrationErrors:null},s=Bm(t),s.return=i,i.child=s,Yn=i,ln=null)):t=null,t===null)throw ns(i);return yh(t)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,f?(ls(),f=i.mode,T=Yc({mode:"hidden",children:T},f),l=js(l,f,s,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=Fd(s),l.childLanes=Bd(t,b,s),i.memoizedState=Id,fl(null,l)):(os(i),Hd(i,T))}var F=t.memoizedState;if(F!==null&&(T=F.dehydrated,T!==null)){if(h)i.flags&256?(os(i),i.flags&=-257,i=Gd(t,i,s)):i.memoizedState!==null?(ls(),i.child=t.child,i.flags|=128,i=null):(ls(),T=l.fallback,f=i.mode,l=Yc({mode:"visible",children:l.children},f),T=js(T,f,s,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,Zs(i,t.child,null,s),l=i.child,l.memoizedState=Fd(s),l.childLanes=Bd(t,b,s),i.memoizedState=Id,i=fl(null,l));else if(os(i),yh(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var te=b.dgst;b=te,l=Error(a(419)),l.stack="",l.digest=b,Jo({value:l,source:null,stack:null}),i=Gd(t,i,s)}else if(Un||Nr(t,i,s,!1),b=(s&t.childLanes)!==0,Un||b){if(b=sn,b!==null&&(l=Bt(b,s),l!==0&&l!==F.retryLane))throw F.retryLane=l,Vs(t,l),hi(b,t,l),Pd;bh(T)||iu(),i=Gd(t,i,s)}else bh(T)?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,ln=ji(T.nextSibling),Yn=i,zt=!0,ts=null,Gi=!1,t!==null&&Vm(i,t),i=Hd(i,l.children),i.flags|=4096);return i}return f?(ls(),T=l.fallback,f=i.mode,F=t.child,te=F.sibling,l=Ta(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,te!==null?T=Ta(te,T):(T=js(T,f,s,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,fl(null,l),l=i.child,T=t.child.memoizedState,T===null?T=Fd(s):(f=T.cachePool,f!==null?(F=Dn._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=Ym(),T={baseLanes:T.baseLanes|s,cachePool:f}),l.memoizedState=T,l.childLanes=Bd(t,b,s),i.memoizedState=Id,fl(t.child,l)):(os(i),s=t.child,t=s.sibling,s=Ta(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Hd(t,i){return i=Yc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Yc(t,i){return t=Si(22,t,null,i),t.lanes=0,t}function Gd(t,i,s){return Zs(i,t.child,null,s),t=Hd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function o_(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),nd(t.return,i,s)}function Vd(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function l_(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=En.current,T=(b&2)!==0;if(T?(b=b&1|2,i.flags|=128):b&=1,Se(En,b),Zn(t,i,l,s),l=zt?Qo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o_(t,s,i);else if(t.tag===19)o_(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&zc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Vd(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&zc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Vd(i,!0,s,null,h,l);break;case"together":Vd(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function La(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),fs|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Nr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=Ta(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=Ta(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function jd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Rc(t)))}function _b(t,i,s){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),is(i,Dn,t.memoizedState.cache),ks();break;case 27:case 5:We(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:is(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,pd(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(os(i),i.flags|=128,null):(s&i.child.childLanes)!==0?r_(t,i,s):(os(i),t=La(t,i,s),t!==null?t.sibling:null);os(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Nr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return l_(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(En,En.current),l)break;return null;case 22:return i.lanes=0,e_(t,i,s,i.pendingProps);case 24:is(i,Dn,t.memoizedState.cache)}return La(t,i,s)}function c_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)Un=!0;else{if(!jd(t,s)&&(i.flags&128)===0)return Un=!1,_b(t,i,s);Un=(t.flags&131072)!==0}else Un=!1,zt&&(i.flags&1048576)!==0&&Gm(i,Qo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Ys(i.elementType),i.type=t,typeof t=="function")Yf(t)?(l=Qs(t,l),i.tag=1,i=a_(null,i,t,l,s)):(i.tag=0,i=zd(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===I){i.tag=11,i=Kg(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=Qg(null,i,t,l,s);break e}}throw i=ge(t)||t,Error(a(306,i,""))}}return i;case 0:return zd(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=Qs(l,i.pendingProps),a_(t,i,l,f,s);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,cd(t,i),rl(i,l,null,s);var b=i.memoizedState;if(l=b.cache,is(i,Dn,l),l!==h.cache&&id(i,[Dn],s,!0),sl(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=s_(t,i,l,s);break e}else if(l!==f){f=Fi(Error(a(424)),i),Jo(f),i=s_(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ln=ji(t.firstChild),Yn=i,zt=!0,ts=null,Gi=!0,s=eg(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ks(),l===f){i=La(t,i,s);break e}Zn(t,i,l,s)}i=i.child}return i;case 26:return qc(t,i),t===null?(s=bx(i.type,null,i.pendingProps,null))?i.memoizedState=s:zt||(s=i.type,t=i.pendingProps,l=uu(K.current).createElement(s),l[_n]=i,l[Sn]=t,Kn(l,s,t),J(l),i.stateNode=l):i.memoizedState=bx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return We(i),t===null&&zt&&(l=i.stateNode=_x(i.type,i.pendingProps,K.current),Yn=i,Gi=!0,f=ln,gs(i.type)?(Sh=f,ln=ji(l.firstChild)):ln=f),Zn(t,i,i.pendingProps.children,s),qc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&zt&&((f=l=ln)&&(l=qb(l,i.type,i.pendingProps,Gi),l!==null?(i.stateNode=l,Yn=i,ln=ji(l.firstChild),Gi=!1,f=!0):f=!1),f||ns(i)),We(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,_h(f,h)?l=null:b!==null&&_h(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=gd(t,i,lb,null,null,s),Al._currentValue=f),qc(t,i),Zn(t,i,l,s),i.child;case 6:return t===null&&zt&&((t=s=ln)&&(s=Yb(s,i.pendingProps,Gi),s!==null?(i.stateNode=s,Yn=i,ln=null,t=!0):t=!1),t||ns(i)),null;case 13:return r_(t,i,s);case 4:return Ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Zs(i,null,l,s):Zn(t,i,l,s),i.child;case 11:return Kg(t,i,i.type,i.pendingProps,s);case 7:return Zn(t,i,i.pendingProps,s),i.child;case 8:return Zn(t,i,i.pendingProps.children,s),i.child;case 12:return Zn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,is(i,i.type,l.value),Zn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Ws(i),f=$n(f),l=l(f),i.flags|=1,Zn(t,i,l,s),i.child;case 14:return Qg(t,i,i.type,i.pendingProps,s);case 15:return Jg(t,i,i.type,i.pendingProps,s);case 19:return l_(t,i,s);case 31:return gb(t,i,s);case 22:return e_(t,i,s,i.pendingProps);case 24:return Ws(i),l=$n(Dn),t===null?(f=rd(),f===null&&(f=sn,h=ad(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},ld(i),is(i,Dn,f)):((t.lanes&s)!==0&&(cd(t,i),rl(i,null,null,s),sl()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),is(i,Dn,l)):(l=h.cache,is(i,Dn,l),l!==f.cache&&id(i,[Dn],s,!0))),Zn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Ua(t){t.flags|=4}function kd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(z_())t.flags|=8192;else throw $s=Uc,od}else t.flags&=-16777217}function u_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Tx(i))if(z_())t.flags|=8192;else throw $s=Uc,od}function $c(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?xe():536870912,t.lanes|=i,Wr|=i)}function dl(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function xb(t,i,s){var l=i.pendingProps;switch(Qf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return cn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Ra(Dn),qe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Or(i)?Ua(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ed())),cn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(Ua(i),h!==null?(cn(i),u_(i,h)):(cn(i),kd(i,f,null,l,s))):h?h!==t.memoizedState?(Ua(i),cn(i),u_(i,h)):(cn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&Ua(i),cn(i),kd(i,f,t,l,s)),null;case 27:if(_t(i),s=K.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return cn(i),null}t=Me.current,Or(i)?jm(i):(t=_x(f,l,s),i.stateNode=t,Ua(i))}return cn(i),null;case 5:if(_t(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return cn(i),null}if(h=Me.current,Or(i))jm(i);else{var b=uu(K.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[_n]=i,h[Sn]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(Kn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Ua(i)}}return cn(i),kd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&Ua(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=K.current,Or(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=Yn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[_n]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||rx(t.nodeValue,s)),t||ns(i,!0)}else t=uu(t).createTextNode(l),t[_n]=i,i.stateNode=t}return cn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Or(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[_n]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),t=!1}else s=ed(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(Ei(i),i):(Ei(i),null);if((i.flags&128)!==0)throw Error(a(558))}return cn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Or(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[_n]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),f=!1}else f=ed(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Ei(i),i):(Ei(i),null)}return Ei(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),$c(i,i.updateQueue),cn(i),null);case 4:return qe(),t===null&&dh(i.stateNode.containerInfo),cn(i),null;case 10:return Ra(i.type),cn(i),null;case 19:if(ie(En),l=i.memoizedState,l===null)return cn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)dl(l,!1);else{if(vn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=zc(t),h!==null){for(i.flags|=128,dl(l,!1),t=h.updateQueue,i.updateQueue=t,$c(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Fm(s,t),s=s.sibling;return Se(En,En.current&1|2),zt&&Aa(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&M()>eu&&(i.flags|=128,f=!0,dl(l,!1),i.lanes=4194304)}else{if(!f)if(t=zc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,$c(i,t),dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!zt)return cn(i),null}else 2*M()-l.renderingStartTime>eu&&s!==536870912&&(i.flags|=128,f=!0,dl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=M(),t.sibling=null,s=En.current,Se(En,f?s&1|2:s&1),zt&&Aa(i,l.treeForkCount),t):(cn(i),null);case 22:case 23:return Ei(i),hd(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),s=i.updateQueue,s!==null&&$c(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(qs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ra(Dn),cn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function vb(t,i){switch(Qf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ra(Dn),qe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return _t(i),null;case 31:if(i.memoizedState!==null){if(Ei(i),i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(Ei(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(En),null;case 4:return qe(),null;case 10:return Ra(i.type),null;case 22:case 23:return Ei(i),hd(),t!==null&&ie(qs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ra(Dn),null;case 25:return null;default:return null}}function f_(t,i){switch(Qf(i),i.tag){case 3:Ra(Dn),qe();break;case 26:case 27:case 5:_t(i);break;case 4:qe();break;case 31:i.memoizedState!==null&&Ei(i);break;case 13:Ei(i);break;case 19:ie(En);break;case 10:Ra(i.type);break;case 22:case 23:Ei(i),hd(),t!==null&&ie(qs);break;case 24:Ra(Dn)}}function hl(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(T){Kt(i,i.return,T)}}function cs(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,f=i;var F=s,te=T;try{te()}catch(me){Kt(f,F,me)}}}l=l.next}while(l!==h)}}catch(me){Kt(i,i.return,me)}}function d_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{ng(i,s)}catch(l){Kt(t,t.return,l)}}}function h_(t,i,s){s.props=Qs(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Kt(t,i,l)}}function pl(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Kt(t,i,f)}}function ma(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Kt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Kt(t,i,f)}else s.current=null}function p_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Kt(t,t.return,f)}}function Xd(t,i,s){try{var l=t.stateNode;Gb(l,t.type,s,i),l[Sn]=i}catch(f){Kt(t,t.return,f)}}function m_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&gs(t.type)||t.tag===4}function Wd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&gs(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qd(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ki));else if(l!==4&&(l===27&&gs(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(qd(t,i,s),t=t.sibling;t!==null;)qd(t,i,s),t=t.sibling}function Zc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&gs(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Zc(t,i,s),t=t.sibling;t!==null;)Zc(t,i,s),t=t.sibling}function g_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);Kn(i,l,s),i[_n]=t,i[Sn]=s}catch(h){Kt(t,t.return,h)}}var Oa=!1,On=!1,Yd=!1,__=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function bb(t,i){if(t=t.containerInfo,mh=_u,t=Cm(t),Gf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,T=-1,F=-1,te=0,me=0,ye=t,ae=null;t:for(;;){for(var ce;ye!==s||f!==0&&ye.nodeType!==3||(T=b+f),ye!==h||l!==0&&ye.nodeType!==3||(F=b+l),ye.nodeType===3&&(b+=ye.nodeValue.length),(ce=ye.firstChild)!==null;)ae=ye,ye=ce;for(;;){if(ye===t)break t;if(ae===s&&++te===f&&(T=b),ae===h&&++me===l&&(F=b),(ce=ye.nextSibling)!==null)break;ye=ae,ae=ye.parentNode}ye=ce}s=T===-1||F===-1?null:{start:T,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(gh={focusedElem:t,selectionRange:s},_u=!1,Vn=i;Vn!==null;)if(i=Vn,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Vn=t;else for(;Vn!==null;){switch(i=Vn,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Ke=Qs(s.type,f);t=l.getSnapshotBeforeUpdate(Ke,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(lt){Kt(s,s.return,lt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)vh(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":vh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,Vn=t;break}Vn=i.return}}function x_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Pa(t,s),l&4&&hl(5,s);break;case 1:if(Pa(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Kt(s,s.return,b)}else{var f=Qs(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Kt(s,s.return,b)}}l&64&&d_(s),l&512&&pl(s,s.return);break;case 3:if(Pa(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{ng(t,i)}catch(b){Kt(s,s.return,b)}}break;case 27:i===null&&l&4&&g_(s);case 26:case 5:Pa(t,s),i===null&&l&4&&p_(s),l&512&&pl(s,s.return);break;case 12:Pa(t,s);break;case 31:Pa(t,s),l&4&&y_(t,s);break;case 13:Pa(t,s),l&4&&S_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=Cb.bind(null,s),$b(t,s))));break;case 22:if(l=s.memoizedState!==null||Oa,!l){i=i!==null&&i.memoizedState!==null||On,f=Oa;var h=On;Oa=l,(On=i)&&!h?za(t,s,(s.subtreeFlags&8772)!==0):Pa(t,s),Oa=f,On=h}break;case 30:break;default:Pa(t,s)}}function v_(t){var i=t.alternate;i!==null&&(t.alternate=null,v_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&zi(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var pn=null,ci=!1;function Na(t,i,s){for(s=s.child;s!==null;)b_(t,i,s),s=s.sibling}function b_(t,i,s){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Te,s)}catch{}switch(s.tag){case 26:On||ma(s,i),Na(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:On||ma(s,i);var l=pn,f=ci;gs(s.type)&&(pn=s.stateNode,ci=!1),Na(t,i,s),Ml(s.stateNode),pn=l,ci=f;break;case 5:On||ma(s,i);case 6:if(l=pn,f=ci,pn=null,Na(t,i,s),pn=l,ci=f,pn!==null)if(ci)try{(pn.nodeType===9?pn.body:pn.nodeName==="HTML"?pn.ownerDocument.body:pn).removeChild(s.stateNode)}catch(h){Kt(s,i,h)}else try{pn.removeChild(s.stateNode)}catch(h){Kt(s,i,h)}break;case 18:pn!==null&&(ci?(t=pn,dx(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),eo(t)):dx(pn,s.stateNode));break;case 4:l=pn,f=ci,pn=s.stateNode.containerInfo,ci=!0,Na(t,i,s),pn=l,ci=f;break;case 0:case 11:case 14:case 15:cs(2,s,i),On||cs(4,s,i),Na(t,i,s);break;case 1:On||(ma(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&h_(s,i,l)),Na(t,i,s);break;case 21:Na(t,i,s);break;case 22:On=(l=On)||s.memoizedState!==null,Na(t,i,s),On=l;break;default:Na(t,i,s)}}function y_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{eo(t)}catch(s){Kt(i,i.return,s)}}}function S_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{eo(t)}catch(s){Kt(i,i.return,s)}}function yb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new __),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new __),i;default:throw Error(a(435,t.tag))}}function Kc(t,i){var s=yb(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=Db.bind(null,t,l);l.then(f,f)}})}function ui(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(gs(T.type)){pn=T.stateNode,ci=!1;break e}break;case 5:pn=T.stateNode,ci=!1;break e;case 3:case 4:pn=T.stateNode.containerInfo,ci=!0;break e}T=T.return}if(pn===null)throw Error(a(160));b_(h,b,f),pn=null,ci=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)M_(i,t),i=i.sibling}var Ji=null;function M_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ui(i,t),fi(t),l&4&&(cs(3,t,t.return),hl(3,t),cs(5,t,t.return));break;case 1:ui(i,t),fi(t),l&512&&(On||s===null||ma(s,s.return)),l&64&&Oa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Ji;if(ui(i,t),fi(t),l&512&&(On||s===null||ma(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Pi]||h[_n]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),Kn(h,l,s),h[_n]=t,J(h),l=h;break e;case"link":var b=Mx("link","href",f).get(l+(s.href||""));if(b){for(var T=0;T<b.length;T++)if(h=b[T],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(T,1);break t}}h=f.createElement(l),Kn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=Mx("meta","content",f).get(l+(s.content||""))){for(T=0;T<b.length;T++)if(h=b[T],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(T,1);break t}}h=f.createElement(l),Kn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[_n]=t,J(h),l=h}t.stateNode=l}else Ex(f,t.type,t.stateNode);else t.stateNode=Sx(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?Ex(f,t.type,t.stateNode):Sx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Xd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ui(i,t),fi(t),l&512&&(On||s===null||ma(s,s.return)),s!==null&&l&4&&Xd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ui(i,t),fi(t),l&512&&(On||s===null||ma(s,s.return)),t.flags&32){f=t.stateNode;try{Jn(f,"")}catch(Ke){Kt(t,t.return,Ke)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Xd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Yd=!0);break;case 6:if(ui(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ke){Kt(t,t.return,Ke)}}break;case 3:if(hu=null,f=Ji,Ji=fu(i.containerInfo),ui(i,t),Ji=f,fi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{eo(i.containerInfo)}catch(Ke){Kt(t,t.return,Ke)}Yd&&(Yd=!1,E_(t));break;case 4:l=Ji,Ji=fu(t.stateNode.containerInfo),ui(i,t),fi(t),Ji=l;break;case 12:ui(i,t),fi(t);break;case 31:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kc(t,l)));break;case 13:ui(i,t),fi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Jc=M()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kc(t,l)));break;case 22:f=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,te=Oa,me=On;if(Oa=te||f,On=me||F,ui(i,t),On=me,Oa=te,fi(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||Oa||On||Js(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(h=F.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=F.stateNode;var ye=F.memoizedProps.style,ae=ye!=null&&ye.hasOwnProperty("display")?ye.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ke){Kt(F,F.return,Ke)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Ke){Kt(F,F.return,Ke)}}}else if(i.tag===18){if(s===null){F=i;try{var ce=F.stateNode;f?hx(ce,!0):hx(F.stateNode,!1)}catch(Ke){Kt(F,F.return,Ke)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Kc(t,s))));break;case 19:ui(i,t),fi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Kc(t,l)));break;case 30:break;case 21:break;default:ui(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(m_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=Wd(t);Zc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(Jn(b,""),s.flags&=-33);var T=Wd(t);Zc(t,T,b);break;case 3:case 4:var F=s.stateNode.containerInfo,te=Wd(t);qd(t,te,F);break;default:throw Error(a(161))}}catch(me){Kt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function E_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;E_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Pa(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)x_(t,i.alternate,i),i=i.sibling}function Js(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:cs(4,i,i.return),Js(i);break;case 1:ma(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&h_(i,i.return,s),Js(i);break;case 27:Ml(i.stateNode);case 26:case 5:ma(i,i.return),Js(i);break;case 22:i.memoizedState===null&&Js(i);break;case 30:Js(i);break;default:Js(i)}t=t.sibling}}function za(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:za(f,h,s),hl(4,h);break;case 1:if(za(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Kt(l,l.return,te)}if(l=h,f=l.updateQueue,f!==null){var T=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)tg(F[f],T)}catch(te){Kt(l,l.return,te)}}s&&b&64&&d_(h),pl(h,h.return);break;case 27:g_(h);case 26:case 5:za(f,h,s),s&&l===null&&b&4&&p_(h),pl(h,h.return);break;case 12:za(f,h,s);break;case 31:za(f,h,s),s&&b&4&&y_(f,h);break;case 13:za(f,h,s),s&&b&4&&S_(f,h);break;case 22:h.memoizedState===null&&za(f,h,s),pl(h,h.return);break;case 30:break;default:za(f,h,s)}i=i.sibling}}function $d(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&el(s))}function Zd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&el(t))}function ea(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)T_(t,i,s,l),i=i.sibling}function T_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:ea(t,i,s,l),f&2048&&hl(9,i);break;case 1:ea(t,i,s,l);break;case 3:ea(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&el(t)));break;case 12:if(f&2048){ea(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,T=h.onPostCommit;typeof T=="function"&&T(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Kt(i,i.return,F)}}else ea(t,i,s,l);break;case 31:ea(t,i,s,l);break;case 13:ea(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?ea(t,i,s,l):ml(t,i):h._visibility&2?ea(t,i,s,l):(h._visibility|=2,jr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&$d(b,i);break;case 24:ea(t,i,s,l),f&2048&&Zd(i.alternate,i);break;default:ea(t,i,s,l)}}function jr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,T=s,F=l,te=b.flags;switch(b.tag){case 0:case 11:case 15:jr(h,b,T,F,f),hl(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?jr(h,b,T,F,f):ml(h,b):(me._visibility|=2,jr(h,b,T,F,f)),f&&te&2048&&$d(b.alternate,b);break;case 24:jr(h,b,T,F,f),f&&te&2048&&Zd(b.alternate,b);break;default:jr(h,b,T,F,f)}i=i.sibling}}function ml(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:ml(s,l),f&2048&&$d(l.alternate,l);break;case 24:ml(s,l),f&2048&&Zd(l.alternate,l);break;default:ml(s,l)}i=i.sibling}}var gl=8192;function kr(t,i,s){if(t.subtreeFlags&gl)for(t=t.child;t!==null;)A_(t,i,s),t=t.sibling}function A_(t,i,s){switch(t.tag){case 26:kr(t,i,s),t.flags&gl&&t.memoizedState!==null&&oy(s,Ji,t.memoizedState,t.memoizedProps);break;case 5:kr(t,i,s);break;case 3:case 4:var l=Ji;Ji=fu(t.stateNode.containerInfo),kr(t,i,s),Ji=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,kr(t,i,s),gl=l):kr(t,i,s));break;default:kr(t,i,s)}}function w_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function _l(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Vn=l,C_(l,t)}w_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)R_(t),t=t.sibling}function R_(t){switch(t.tag){case 0:case 11:case 15:_l(t),t.flags&2048&&cs(9,t,t.return);break;case 3:_l(t);break;case 12:_l(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,Qc(t)):_l(t);break;default:_l(t)}}function Qc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];Vn=l,C_(l,t)}w_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:cs(8,i,i.return),Qc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Qc(i));break;default:Qc(i)}t=t.sibling}}function C_(t,i){for(;Vn!==null;){var s=Vn;switch(s.tag){case 0:case 11:case 15:cs(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:el(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,Vn=l;else e:for(s=t;Vn!==null;){l=Vn;var f=l.sibling,h=l.return;if(v_(l),l===s){Vn=null;break e}if(f!==null){f.return=h,Vn=f;break e}Vn=h}}}var Sb={getCacheForType:function(t){var i=$n(Dn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return $n(Dn).controller.signal}},Mb=typeof WeakMap=="function"?WeakMap:Map,Wt=0,sn=null,Lt=null,Nt=0,Zt=0,Ti=null,us=!1,Xr=!1,Kd=!1,Ia=0,vn=0,fs=0,er=0,Qd=0,Ai=0,Wr=0,xl=null,di=null,Jd=!1,Jc=0,D_=0,eu=1/0,tu=null,ds=null,Pn=0,hs=null,qr=null,Fa=0,eh=0,th=null,L_=null,vl=0,nh=null;function wi(){return(Wt&2)!==0&&Nt!==0?Nt&-Nt:P.T!==null?lh():ua()}function U_(){if(Ai===0)if((Nt&536870912)===0||zt){var t=Le;Le<<=1,(Le&3932160)===0&&(Le=262144),Ai=t}else Ai=536870912;return t=Mi.current,t!==null&&(t.flags|=32),Ai}function hi(t,i,s){(t===sn&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)&&(Yr(t,0),ps(t,Nt,Ai,!1)),Xt(t,s),((Wt&2)===0||t!==sn)&&(t===sn&&((Wt&2)===0&&(er|=s),vn===4&&ps(t,Nt,Ai,!1)),ga(t))}function O_(t,i,s){if((Wt&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||je(t,i),f=l?Ab(t,i):ah(t,i,!0),h=l;do{if(f===0){Xr&&!l&&ps(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!Eb(s)){f=ah(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var T=t;f=xl;var F=T.current.memoizedState.isDehydrated;if(F&&(Yr(T,b).flags|=256),b=ah(T,b,!1),b!==2){if(Kd&&!F){T.errorRecoveryDisabledLanes|=h,er|=h,f=4;break e}h=di,di=f,h!==null&&(di===null?di=h:di.push.apply(di,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Yr(t,0),ps(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ps(l,i,Ai,!us);break e;case 2:di=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=Jc+300-M(),10<f)){if(ps(l,i,Ai,!us),be(l,0,!0)!==0)break e;Fa=i,l.timeoutHandle=ux(N_.bind(null,l,s,di,tu,Jd,i,Ai,er,Wr,us,h,"Throttled",-0,0),f);break e}N_(l,s,di,tu,Jd,i,Ai,er,Wr,us,h,null,-0,0)}}break}while(!0);ga(t)}function N_(t,i,s,l,f,h,b,T,F,te,me,ye,ae,ce){if(t.timeoutHandle=-1,ye=i.subtreeFlags,ye&8192||(ye&16785408)===16785408){ye={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},A_(i,h,ye);var Ke=(h&62914560)===h?Jc-M():(h&4194048)===h?D_-M():0;if(Ke=ly(ye,Ke),Ke!==null){Fa=h,t.cancelPendingCommit=Ke(V_.bind(null,t,i,h,s,l,f,b,T,F,me,ye,null,ae,ce)),ps(t,h,b,!te);return}}V_(t,i,h,s,l,f,b,T,F)}function Eb(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!yi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ps(t,i,s,l){i&=~Qd,i&=~er,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-ke(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&nn(t,s,i)}function nu(){return(Wt&6)===0?(bl(0),!1):!0}function ih(){if(Lt!==null){if(Zt===0)var t=Lt.return;else t=Lt,wa=Xs=null,vd(t),Fr=null,nl=0,t=Lt;for(;t!==null;)f_(t.alternate,t),t=t.return;Lt=null}}function Yr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,kb(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Fa=0,ih(),sn=t,Lt=s=Ta(t.current,null),Nt=i,Zt=0,Ti=null,us=!1,Xr=je(t,i),Kd=!1,Wr=Ai=Qd=er=fs=vn=0,di=xl=null,Jd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-ke(l),h=1<<f;i|=t[f],l&=~h}return Ia=i,Mc(),s}function P_(t,i){Mt=null,P.H=ul,i===Ir||i===Lc?(i=Km(),Zt=3):i===od?(i=Km(),Zt=4):Zt=i===Pd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Ti=i,Lt===null&&(vn=1,Xc(t,Fi(i,t.current)))}function z_(){var t=Mi.current;return t===null?!0:(Nt&4194048)===Nt?Vi===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?t===Vi:!1}function I_(){var t=P.H;return P.H=ul,t===null?ul:t}function F_(){var t=P.A;return P.A=Sb,t}function iu(){vn=4,us||(Nt&4194048)!==Nt&&Mi.current!==null||(Xr=!0),(fs&134217727)===0&&(er&134217727)===0||sn===null||ps(sn,Nt,Ai,!1)}function ah(t,i,s){var l=Wt;Wt|=2;var f=I_(),h=F_();(sn!==t||Nt!==i)&&(tu=null,Yr(t,i)),i=!1;var b=vn;e:do try{if(Zt!==0&&Lt!==null){var T=Lt,F=Ti;switch(Zt){case 8:ih(),b=6;break e;case 3:case 2:case 9:case 6:Mi.current===null&&(i=!0);var te=Zt;if(Zt=0,Ti=null,$r(t,T,F,te),s&&Xr){b=0;break e}break;default:te=Zt,Zt=0,Ti=null,$r(t,T,F,te)}}Tb(),b=vn;break}catch(me){P_(t,me)}while(!0);return i&&t.shellSuspendCounter++,wa=Xs=null,Wt=l,P.H=f,P.A=h,Lt===null&&(sn=null,Nt=0,Mc()),b}function Tb(){for(;Lt!==null;)B_(Lt)}function Ab(t,i){var s=Wt;Wt|=2;var l=I_(),f=F_();sn!==t||Nt!==i?(tu=null,eu=M()+500,Yr(t,i)):Xr=je(t,i);e:do try{if(Zt!==0&&Lt!==null){i=Lt;var h=Ti;t:switch(Zt){case 1:Zt=0,Ti=null,$r(t,i,h,1);break;case 2:case 9:if($m(h)){Zt=0,Ti=null,H_(i);break}i=function(){Zt!==2&&Zt!==9||sn!==t||(Zt=7),ga(t)},h.then(i,i);break e;case 3:Zt=7;break e;case 4:Zt=5;break e;case 7:$m(h)?(Zt=0,Ti=null,H_(i)):(Zt=0,Ti=null,$r(t,i,h,7));break;case 5:var b=null;switch(Lt.tag){case 26:b=Lt.memoizedState;case 5:case 27:var T=Lt;if(b?Tx(b):T.stateNode.complete){Zt=0,Ti=null;var F=T.sibling;if(F!==null)Lt=F;else{var te=T.return;te!==null?(Lt=te,au(te)):Lt=null}break t}}Zt=0,Ti=null,$r(t,i,h,5);break;case 6:Zt=0,Ti=null,$r(t,i,h,6);break;case 8:ih(),vn=6;break e;default:throw Error(a(462))}}wb();break}catch(me){P_(t,me)}while(!0);return wa=Xs=null,P.H=l,P.A=f,Wt=s,Lt!==null?0:(sn=null,Nt=0,Mc(),vn)}function wb(){for(;Lt!==null&&!pt();)B_(Lt)}function B_(t){var i=c_(t.alternate,t,Ia);t.memoizedProps=t.pendingProps,i===null?au(t):Lt=i}function H_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=i_(s,i,i.pendingProps,i.type,void 0,Nt);break;case 11:i=i_(s,i,i.pendingProps,i.type.render,i.ref,Nt);break;case 5:vd(i);default:f_(s,i),i=Lt=Fm(i,Ia),i=c_(s,i,Ia)}t.memoizedProps=t.pendingProps,i===null?au(t):Lt=i}function $r(t,i,s,l){wa=Xs=null,vd(i),Fr=null,nl=0;var f=i.return;try{if(mb(t,f,i,s,Nt)){vn=1,Xc(t,Fi(s,t.current)),Lt=null;return}}catch(h){if(f!==null)throw Lt=f,h;vn=1,Xc(t,Fi(s,t.current)),Lt=null;return}i.flags&32768?(zt||l===1?t=!0:Xr||(Nt&536870912)!==0?t=!1:(us=t=!0,(l===2||l===9||l===3||l===6)&&(l=Mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),G_(i,t)):au(i)}function au(t){var i=t;do{if((i.flags&32768)!==0){G_(i,us);return}t=i.return;var s=xb(i.alternate,i,Ia);if(s!==null){Lt=s;return}if(i=i.sibling,i!==null){Lt=i;return}Lt=i=t}while(i!==null);vn===0&&(vn=5)}function G_(t,i){do{var s=vb(t.alternate,t);if(s!==null){s.flags&=32767,Lt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Lt=t;return}Lt=t=s}while(t!==null);vn=6,Lt=null}function V_(t,i,s,l,f,h,b,T,F){t.cancelPendingCommit=null;do su();while(Pn!==0);if((Wt&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=Wf,gn(t,s,h,b,T,F),t===sn&&(Lt=sn=null,Nt=0),qr=i,hs=t,Fa=s,eh=h,th=f,L_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Lb(de,function(){return q_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=X.p,X.p=2,b=Wt,Wt|=4;try{bb(t,i,s)}finally{Wt=b,X.p=f,P.T=l}}Pn=1,j_(),k_(),X_()}}function j_(){if(Pn===1){Pn=0;var t=hs,i=qr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=X.p;X.p=2;var f=Wt;Wt|=4;try{M_(i,t);var h=gh,b=Cm(t.containerInfo),T=h.focusedElem,F=h.selectionRange;if(b!==T&&T&&T.ownerDocument&&Rm(T.ownerDocument.documentElement,T)){if(F!==null&&Gf(T)){var te=F.start,me=F.end;if(me===void 0&&(me=te),"selectionStart"in T)T.selectionStart=te,T.selectionEnd=Math.min(me,T.value.length);else{var ye=T.ownerDocument||document,ae=ye&&ye.defaultView||window;if(ae.getSelection){var ce=ae.getSelection(),Ke=T.textContent.length,lt=Math.min(F.start,Ke),en=F.end===void 0?lt:Math.min(F.end,Ke);!ce.extend&&lt>en&&(b=en,en=lt,lt=b);var q=wm(T,lt),j=wm(T,en);if(q&&j&&(ce.rangeCount!==1||ce.anchorNode!==q.node||ce.anchorOffset!==q.offset||ce.focusNode!==j.node||ce.focusOffset!==j.offset)){var ee=ye.createRange();ee.setStart(q.node,q.offset),ce.removeAllRanges(),lt>en?(ce.addRange(ee),ce.extend(j.node,j.offset)):(ee.setEnd(j.node,j.offset),ce.addRange(ee))}}}}for(ye=[],ce=T;ce=ce.parentNode;)ce.nodeType===1&&ye.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ye.length;T++){var ve=ye[T];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}_u=!!mh,gh=mh=null}finally{Wt=f,X.p=l,P.T=s}}t.current=i,Pn=2}}function k_(){if(Pn===2){Pn=0;var t=hs,i=qr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=X.p;X.p=2;var f=Wt;Wt|=4;try{x_(t,i.alternate,i)}finally{Wt=f,X.p=l,P.T=s}}Pn=3}}function X_(){if(Pn===4||Pn===3){Pn=0,U();var t=hs,i=qr,s=Fa,l=L_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Pn=5:(Pn=0,qr=hs=null,W_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(ds=null),bi(s),i=i.stateNode,Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Te,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=X.p,X.p=2,P.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var T=l[b];h(T.value,{componentStack:T.stack})}}finally{P.T=i,X.p=f}}(Fa&3)!==0&&su(),ga(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===nh?vl++:(vl=0,nh=t):vl=0,bl(0)}}function W_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,el(i)))}function su(){return j_(),k_(),X_(),q_()}function q_(){if(Pn!==5)return!1;var t=hs,i=eh;eh=0;var s=bi(Fa),l=P.T,f=X.p;try{X.p=32>s?32:s,P.T=null,s=th,th=null;var h=hs,b=Fa;if(Pn=0,qr=hs=null,Fa=0,(Wt&6)!==0)throw Error(a(331));var T=Wt;if(Wt|=4,R_(h.current),T_(h,h.current,b,s),Wt=T,bl(0,!1),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Te,h)}catch{}return!0}finally{X.p=f,P.T=l,W_(t,i)}}function Y_(t,i,s){i=Fi(s,i),i=Nd(t.stateNode,i,2),t=rs(t,i,2),t!==null&&(Xt(t,2),ga(t))}function Kt(t,i,s){if(t.tag===3)Y_(t,t,s);else for(;i!==null;){if(i.tag===3){Y_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ds===null||!ds.has(l))){t=Fi(s,t),s=$g(2),l=rs(i,s,2),l!==null&&(Zg(s,l,i,t),Xt(l,2),ga(l));break}}i=i.return}}function sh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new Mb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Kd=!0,f.add(s),t=Rb.bind(null,t,i,s),i.then(t,t))}function Rb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,sn===t&&(Nt&s)===s&&(vn===4||vn===3&&(Nt&62914560)===Nt&&300>M()-Jc?(Wt&2)===0&&Yr(t,0):Qd|=s,Wr===Nt&&(Wr=0)),ga(t)}function $_(t,i){i===0&&(i=xe()),t=Vs(t,i),t!==null&&(Xt(t,i),ga(t))}function Cb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),$_(t,s)}function Db(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),$_(t,s)}function Lb(t,i){return $t(t,i)}var ru=null,Zr=null,rh=!1,ou=!1,oh=!1,ms=0;function ga(t){t!==Zr&&t.next===null&&(Zr===null?ru=Zr=t:Zr=Zr.next=t),ou=!0,rh||(rh=!0,Ob())}function bl(t,i){if(!oh&&ou){oh=!0;do for(var s=!1,l=ru;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,T=l.pingedLanes;h=(1<<31-ke(42|t)+1)-1,h&=f&~(b&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,J_(l,h))}else h=Nt,h=be(l,l===sn?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||je(l,h)||(s=!0,J_(l,h));l=l.next}while(s);oh=!1}}function Ub(){Z_()}function Z_(){ou=rh=!1;var t=0;ms!==0&&jb()&&(t=ms);for(var i=M(),s=null,l=ru;l!==null;){var f=l.next,h=K_(l,i);h===0?(l.next=null,s===null?ru=f:s.next=f,f===null&&(Zr=s)):(s=l,(t!==0||(h&3)!==0)&&(ou=!0)),l=f}Pn!==0&&Pn!==5||bl(t),ms!==0&&(ms=0)}function K_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-ke(h),T=1<<b,F=f[b];F===-1?((T&s)===0||(T&l)!==0)&&(f[b]=ft(T,i)):F<=i&&(t.expiredLanes|=T),h&=~T}if(i=sn,s=Nt,s=be(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Zt===2||Zt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&at(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||je(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&at(l),bi(s)){case 2:case 8:s=Ae;break;case 32:s=de;break;case 268435456:s=ze;break;default:s=de}return l=Q_.bind(null,t),s=$t(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&at(l),t.callbackPriority=2,t.callbackNode=null,2}function Q_(t,i){if(Pn!==0&&Pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(su()&&t.callbackNode!==s)return null;var l=Nt;return l=be(t,t===sn?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(O_(t,l,i),K_(t,M()),t.callbackNode!=null&&t.callbackNode===s?Q_.bind(null,t):null)}function J_(t,i){if(su())return null;O_(t,i,!0)}function Ob(){Xb(function(){(Wt&6)!==0?$t(_e,Ub):Z_()})}function lh(){if(ms===0){var t=Pr;t===0&&(t=Ie,Ie<<=1,(Ie&261888)===0&&(Ie=256)),ms=t}return ms}function ex(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sr(""+t)}function tx(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function Nb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=ex((f[Sn]||null).action),b=l.submitter;b&&(i=(i=b[Sn]||null)?ex(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var T=new vc("action","action",null,l,f);t.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ms!==0){var F=b?tx(f,b):new FormData(f);Rd(s,{pending:!0,data:F,method:f.method,action:h},null,F)}}else typeof h=="function"&&(T.preventDefault(),F=b?tx(f,b):new FormData(f),Rd(s,{pending:!0,data:F,method:f.method,action:h},h,F))},currentTarget:f}]})}}for(var ch=0;ch<Xf.length;ch++){var uh=Xf[ch],Pb=uh.toLowerCase(),zb=uh[0].toUpperCase()+uh.slice(1);Qi(Pb,"on"+zb)}Qi(Um,"onAnimationEnd"),Qi(Om,"onAnimationIteration"),Qi(Nm,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Q1,"onTransitionRun"),Qi(J1,"onTransitionStart"),Qi(eb,"onTransitionCancel"),Qi(Pm,"onTransitionEnd"),Ee("onMouseEnter",["mouseout","mouseover"]),Ee("onMouseLeave",["mouseout","mouseover"]),Ee("onPointerEnter",["pointerout","pointerover"]),Ee("onPointerLeave",["pointerout","pointerover"]),he("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),he("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),he("onBeforeInput",["compositionend","keypress","textInput","paste"]),he("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),he("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ib=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(yl));function nx(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var T=l[b],F=T.instance,te=T.currentTarget;if(T=T.listener,F!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=te;try{h(f)}catch(me){Sc(me)}f.currentTarget=null,h=F}else for(b=0;b<l.length;b++){if(T=l[b],F=T.instance,te=T.currentTarget,T=T.listener,F!==h&&f.isPropagationStopped())break e;h=T,f.currentTarget=te;try{h(f)}catch(me){Sc(me)}f.currentTarget=null,h=F}}}}function Ut(t,i){var s=i[Qa];s===void 0&&(s=i[Qa]=new Set);var l=t+"__bubble";s.has(l)||(ix(i,t,2,!1),s.add(l))}function fh(t,i,s){var l=0;i&&(l|=4),ix(s,t,l,i)}var lu="_reactListening"+Math.random().toString(36).slice(2);function dh(t){if(!t[lu]){t[lu]=!0,Y.forEach(function(s){s!=="selectionchange"&&(Ib.has(s)||fh(s,!1,t),fh(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[lu]||(i[lu]=!0,fh("selectionchange",!1,i))}}function ix(t,i,s,l){switch(Ux(i)){case 2:var f=fy;break;case 8:f=dy;break;default:f=wh}s=f.bind(null,i,s,t),f=void 0,!Uf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function hh(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var T=l.stateNode.containerInfo;if(T===f)break;if(b===4)for(b=l.return;b!==null;){var F=b.tag;if((F===3||F===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;T!==null;){if(b=fa(T),b===null)return;if(F=b.tag,F===5||F===6||F===26||F===27){l=h=b;continue e}T=T.parentNode}}l=l.return}lm(function(){var te=h,me=Er(s),ye=[];e:{var ae=zm.get(t);if(ae!==void 0){var ce=vc,Ke=t;switch(t){case"keypress":if(_c(s)===0)break e;case"keydown":case"keyup":ce=D1;break;case"focusin":Ke="focus",ce=zf;break;case"focusout":Ke="blur",ce=zf;break;case"beforeblur":case"afterblur":ce=zf;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=fm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=x1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=O1;break;case Um:case Om:case Nm:ce=y1;break;case Pm:ce=P1;break;case"scroll":case"scrollend":ce=g1;break;case"wheel":ce=I1;break;case"copy":case"cut":case"paste":ce=M1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=hm;break;case"toggle":case"beforetoggle":ce=B1}var lt=(i&4)!==0,en=!lt&&(t==="scroll"||t==="scrollend"),q=lt?ae!==null?ae+"Capture":null:ae;lt=[];for(var j=te,ee;j!==null;){var ve=j;if(ee=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||ee===null||q===null||(ve=jo(j,q),ve!=null&&lt.push(Sl(j,ve,ee))),en)break;j=j.return}0<lt.length&&(ae=new ce(ae,Ke,null,s,me),ye.push({event:ae,listeners:lt}))}}if((i&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",ae&&s!==Mr&&(Ke=s.relatedTarget||s.fromElement)&&(fa(Ke)||Ke[Zi]))break e;if((ce||ae)&&(ae=me.window===me?me:(ae=me.ownerDocument)?ae.defaultView||ae.parentWindow:window,ce?(Ke=s.relatedTarget||s.toElement,ce=te,Ke=Ke?fa(Ke):null,Ke!==null&&(en=c(Ke),lt=Ke.tag,Ke!==en||lt!==5&&lt!==27&&lt!==6)&&(Ke=null)):(ce=null,Ke=te),ce!==Ke)){if(lt=fm,ve="onMouseLeave",q="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(lt=hm,ve="onPointerLeave",q="onPointerEnter",j="pointer"),en=ce==null?ae:W(ce),ee=Ke==null?ae:W(Ke),ae=new lt(ve,j+"leave",ce,s,me),ae.target=en,ae.relatedTarget=ee,ve=null,fa(me)===te&&(lt=new lt(q,j+"enter",Ke,s,me),lt.target=ee,lt.relatedTarget=en,ve=lt),en=ve,ce&&Ke)t:{for(lt=Fb,q=ce,j=Ke,ee=0,ve=q;ve;ve=lt(ve))ee++;ve=0;for(var rt=j;rt;rt=lt(rt))ve++;for(;0<ee-ve;)q=lt(q),ee--;for(;0<ve-ee;)j=lt(j),ve--;for(;ee--;){if(q===j||j!==null&&q===j.alternate){lt=q;break t}q=lt(q),j=lt(j)}lt=null}else lt=null;ce!==null&&ax(ye,ae,ce,lt,!1),Ke!==null&&en!==null&&ax(ye,en,Ke,lt,!0)}}e:{if(ae=te?W(te):window,ce=ae.nodeName&&ae.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ae.type==="file")var Gt=ym;else if(vm(ae))if(Sm)Gt=$1;else{Gt=q1;var et=W1}else ce=ae.nodeName,!ce||ce.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?te&&Fs(te.elementType)&&(Gt=ym):Gt=Y1;if(Gt&&(Gt=Gt(t,te))){bm(ye,Gt,s,me);break e}et&&et(t,ae,te),t==="focusout"&&te&&ae.type==="number"&&te.memoizedProps.value!=null&&an(ae,"number",ae.value)}switch(et=te?W(te):window,t){case"focusin":(vm(et)||et.contentEditable==="true")&&(wr=et,Vf=te,Ko=null);break;case"focusout":Ko=Vf=wr=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,Dm(ye,s,me);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":Dm(ye,s,me)}var Tt;if(Ff)e:{switch(t){case"compositionstart":var Pt="onCompositionStart";break e;case"compositionend":Pt="onCompositionEnd";break e;case"compositionupdate":Pt="onCompositionUpdate";break e}Pt=void 0}else Ar?_m(t,s)&&(Pt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Pt="onCompositionStart");Pt&&(pm&&s.locale!=="ko"&&(Ar||Pt!=="onCompositionStart"?Pt==="onCompositionEnd"&&Ar&&(Tt=cm()):(Ja=me,Of="value"in Ja?Ja.value:Ja.textContent,Ar=!0)),et=cu(te,Pt),0<et.length&&(Pt=new dm(Pt,t,null,s,me),ye.push({event:Pt,listeners:et}),Tt?Pt.data=Tt:(Tt=xm(s),Tt!==null&&(Pt.data=Tt)))),(Tt=G1?V1(t,s):j1(t,s))&&(Pt=cu(te,"onBeforeInput"),0<Pt.length&&(et=new dm("onBeforeInput","beforeinput",null,s,me),ye.push({event:et,listeners:Pt}),et.data=Tt)),Nb(ye,t,te,s,me)}nx(ye,i)})}function Sl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function cu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=jo(t,s),f!=null&&l.unshift(Sl(t,f,h)),f=jo(t,i),f!=null&&l.push(Sl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Fb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ax(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var T=s,F=T.alternate,te=T.stateNode;if(T=T.tag,F!==null&&F===l)break;T!==5&&T!==26&&T!==27||te===null||(F=te,f?(te=jo(s,h),te!=null&&b.unshift(Sl(s,te,F))):f||(te=jo(s,h),te!=null&&b.push(Sl(s,te,F)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var Bb=/\r\n?/g,Hb=/\u0000|\uFFFD/g;function sx(t){return(typeof t=="string"?t:""+t).replace(Bb,`
`).replace(Hb,"")}function rx(t,i){return i=sx(i),sx(t)===i}function Jt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Jn(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Jn(t,""+l);break;case"className":vt(t,"class",l);break;case"tabIndex":vt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vt(t,s,l);break;case"style":yr(t,l,h);break;case"data":if(i!=="object"){vt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sr(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Jt(t,i,"name",f.name,f,null),Jt(t,i,"formEncType",f.formEncType,f,null),Jt(t,i,"formMethod",f.formMethod,f,null),Jt(t,i,"formTarget",f.formTarget,f,null)):(Jt(t,i,"encType",f.encType,f,null),Jt(t,i,"method",f.method,f,null),Jt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sr(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=Ki);break;case"onScroll":l!=null&&Ut("scroll",t);break;case"onScrollEnd":l!=null&&Ut("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Sr(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Ut("beforetoggle",t),Ut("toggle",t),Je(t,"popover",l);break;case"xlinkActuate":ht(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ht(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ht(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ht(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ht(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ht(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ht(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ht(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ht(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Je(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Vo.get(s)||s,Je(t,s,l))}}function ph(t,i,s,l,f,h){switch(s){case"style":yr(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Jn(t,l):(typeof l=="number"||typeof l=="bigint")&&Jn(t,""+l);break;case"onScroll":l!=null&&Ut("scroll",t);break;case"onScrollEnd":l!=null&&Ut("scrollend",t);break;case"onClick":l!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!De.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[Sn]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Je(t,s,l)}}}function Kn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ut("error",t),Ut("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,h,b,s,null)}}f&&Jt(t,i,"srcSet",s.srcSet,s,null),l&&Jt(t,i,"src",s.src,s,null);return;case"input":Ut("invalid",t);var T=h=b=f=null,F=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":b=me;break;case"checked":F=me;break;case"defaultChecked":te=me;break;case"value":h=me;break;case"defaultValue":T=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:Jt(t,i,l,me,s,null)}}wt(t,h,T,F,te,b,f,!1);return;case"select":Ut("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(T=s[f],T!=null))switch(f){case"value":h=T;break;case"defaultValue":b=T;break;case"multiple":l=T;default:Jt(t,i,f,T,s,null)}i=h,s=b,t.multiple=!!l,i!=null?Ht(t,!!l,i,!1):s!=null&&Ht(t,!!l,s,!0);return;case"textarea":Ut("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(T=s[b],T!=null))switch(b){case"value":l=T;break;case"defaultValue":f=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(a(91));break;default:Jt(t,i,b,T,s,null)}on(t,l,f,h);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Jt(t,i,F,l,s,null)}return;case"dialog":Ut("beforetoggle",t),Ut("toggle",t),Ut("cancel",t),Ut("close",t);break;case"iframe":case"object":Ut("load",t);break;case"video":case"audio":for(l=0;l<yl.length;l++)Ut(yl[l],t);break;case"image":Ut("error",t),Ut("load",t);break;case"details":Ut("toggle",t);break;case"embed":case"source":case"link":Ut("error",t),Ut("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Jt(t,i,te,l,s,null)}return;default:if(Fs(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&ph(t,i,me,l,s,void 0));return}}for(T in s)s.hasOwnProperty(T)&&(l=s[T],l!=null&&Jt(t,i,T,l,s,null))}function Gb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,T=null,F=null,te=null,me=null;for(ce in s){var ye=s[ce];if(s.hasOwnProperty(ce)&&ye!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=ye;default:l.hasOwnProperty(ce)||Jt(t,i,ce,null,l,ye)}}for(var ae in l){var ce=l[ae];if(ye=s[ae],l.hasOwnProperty(ae)&&(ce!=null||ye!=null))switch(ae){case"type":h=ce;break;case"name":f=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":b=ce;break;case"defaultValue":T=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==ye&&Jt(t,i,ae,ce,l,ye)}}hn(t,b,T,F,te,me,h,f);return;case"select":ce=b=T=ae=null;for(h in s)if(F=s[h],s.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ce=F;default:l.hasOwnProperty(h)||Jt(t,i,h,null,l,F)}for(f in l)if(h=l[f],F=s[f],l.hasOwnProperty(f)&&(h!=null||F!=null))switch(f){case"value":ae=h;break;case"defaultValue":T=h;break;case"multiple":b=h;default:h!==F&&Jt(t,i,f,h,l,F)}i=T,s=b,l=ce,ae!=null?Ht(t,!!s,ae,!1):!!l!=!!s&&(i!=null?Ht(t,!!s,i,!0):Ht(t,!!s,s?[]:"",!1));return;case"textarea":ce=ae=null;for(T in s)if(f=s[T],s.hasOwnProperty(T)&&f!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Jt(t,i,T,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":ae=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Jt(t,i,b,f,l,h)}Ft(t,ae,ce);return;case"option":for(var Ke in s)if(ae=s[Ke],s.hasOwnProperty(Ke)&&ae!=null&&!l.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Jt(t,i,Ke,null,l,ae)}for(F in l)if(ae=l[F],ce=s[F],l.hasOwnProperty(F)&&ae!==ce&&(ae!=null||ce!=null))switch(F){case"selected":t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol";break;default:Jt(t,i,F,ae,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var lt in s)ae=s[lt],s.hasOwnProperty(lt)&&ae!=null&&!l.hasOwnProperty(lt)&&Jt(t,i,lt,null,l,ae);for(te in l)if(ae=l[te],ce=s[te],l.hasOwnProperty(te)&&ae!==ce&&(ae!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(a(137,i));break;default:Jt(t,i,te,ae,l,ce)}return;default:if(Fs(i)){for(var en in s)ae=s[en],s.hasOwnProperty(en)&&ae!==void 0&&!l.hasOwnProperty(en)&&ph(t,i,en,void 0,l,ae);for(me in l)ae=l[me],ce=s[me],!l.hasOwnProperty(me)||ae===ce||ae===void 0&&ce===void 0||ph(t,i,me,ae,l,ce);return}}for(var q in s)ae=s[q],s.hasOwnProperty(q)&&ae!=null&&!l.hasOwnProperty(q)&&Jt(t,i,q,null,l,ae);for(ye in l)ae=l[ye],ce=s[ye],!l.hasOwnProperty(ye)||ae===ce||ae==null&&ce==null||Jt(t,i,ye,ae,l,ce)}function ox(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Vb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,T=f.duration;if(h&&T&&ox(b)){for(b=0,T=f.responseEnd,l+=1;l<s.length;l++){var F=s[l],te=F.startTime;if(te>T)break;var me=F.transferSize,ye=F.initiatorType;me&&ox(ye)&&(F=F.responseEnd,b+=me*(F<T?1:(T-te)/(F-te)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var mh=null,gh=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function lx(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function cx(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function _h(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xh=null;function jb(){var t=window.event;return t&&t.type==="popstate"?t===xh?!1:(xh=t,!0):(xh=null,!1)}var ux=typeof setTimeout=="function"?setTimeout:void 0,kb=typeof clearTimeout=="function"?clearTimeout:void 0,fx=typeof Promise=="function"?Promise:void 0,Xb=typeof queueMicrotask=="function"?queueMicrotask:typeof fx<"u"?function(t){return fx.resolve(null).then(t).catch(Wb)}:ux;function Wb(t){setTimeout(function(){throw t})}function gs(t){return t==="head"}function dx(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),eo(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Ml(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,Ml(s);for(var h=s.firstChild;h;){var b=h.nextSibling,T=h.nodeName;h[Pi]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&Ml(t.ownerDocument.body);s=f}while(s);eo(i)}function hx(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function vh(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":vh(s),zi(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function qb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Pi])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=ji(t.nextSibling),t===null)break}return null}function Yb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=ji(t.nextSibling),t===null))return null;return t}function px(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=ji(t.nextSibling),t===null))return null;return t}function bh(t){return t.data==="$?"||t.data==="$~"}function yh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function $b(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Sh=null;function mx(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return ji(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function gx(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function _x(t,i,s){switch(i=uu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Ml(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);zi(t)}var ki=new Map,xx=new Set;function fu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ba=X.d;X.d={f:Zb,r:Kb,D:Qb,C:Jb,L:ey,m:ty,X:iy,S:ny,M:ay};function Zb(){var t=Ba.f(),i=nu();return t||i}function Kb(t){var i=w(t);i!==null&&i.tag===5&&i.type==="form"?Pg(i):Ba.r(t)}var Kr=typeof document>"u"?null:document;function vx(t,i,s){var l=Kr;if(l&&typeof i=="string"&&i){var f=mt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),xx.has(f)||(xx.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),Kn(i,"link",t),J(i),l.head.appendChild(i)))}}function Qb(t){Ba.D(t),vx("dns-prefetch",t,null)}function Jb(t,i){Ba.C(t,i),vx("preconnect",t,i)}function ey(t,i,s){Ba.L(t,i,s);var l=Kr;if(l&&t&&i){var f='link[rel="preload"][as="'+mt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+mt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+mt(s.imageSizes)+'"]')):f+='[href="'+mt(t)+'"]';var h=f;switch(i){case"style":h=Qr(t);break;case"script":h=Jr(t)}ki.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),ki.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(El(h))||i==="script"&&l.querySelector(Tl(h))||(i=l.createElement("link"),Kn(i,"link",t),J(i),l.head.appendChild(i)))}}function ty(t,i){Ba.m(t,i);var s=Kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Jr(t)}if(!ki.has(h)&&(t=_({rel:"modulepreload",href:t},i),ki.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Tl(h)))return}l=s.createElement("link"),Kn(l,"link",t),J(l),s.head.appendChild(l)}}}function ny(t,i,s){Ba.S(t,i,s);var l=Kr;if(l&&t){var f=se(l).hoistableStyles,h=Qr(t);i=i||"default";var b=f.get(h);if(!b){var T={loading:0,preload:null};if(b=l.querySelector(El(h)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=ki.get(h))&&Mh(t,s);var F=b=l.createElement("link");J(F),Kn(F,"link",t),F._p=new Promise(function(te,me){F.onload=te,F.onerror=me}),F.addEventListener("load",function(){T.loading|=1}),F.addEventListener("error",function(){T.loading|=2}),T.loading|=4,du(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:T},f.set(h,b)}}}function iy(t,i){Ba.X(t,i);var s=Kr;if(s&&t){var l=se(s).hoistableScripts,f=Jr(t),h=l.get(f);h||(h=s.querySelector(Tl(f)),h||(t=_({src:t,async:!0},i),(i=ki.get(f))&&Eh(t,i),h=s.createElement("script"),J(h),Kn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function ay(t,i){Ba.M(t,i);var s=Kr;if(s&&t){var l=se(s).hoistableScripts,f=Jr(t),h=l.get(f);h||(h=s.querySelector(Tl(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=ki.get(f))&&Eh(t,i),h=s.createElement("script"),J(h),Kn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function bx(t,i,s,l){var f=(f=K.current)?fu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Qr(s.href),s=se(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Qr(s.href);var h=se(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(El(t)))&&!h._p&&(b.instance=h,b.state.loading=5),ki.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},ki.set(t,s),h||sy(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Jr(s),s=se(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Qr(t){return'href="'+mt(t)+'"'}function El(t){return'link[rel="stylesheet"]['+t+"]"}function yx(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function sy(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Kn(i,"link",s),J(i),t.head.appendChild(i))}function Jr(t){return'[src="'+mt(t)+'"]'}function Tl(t){return"script[async]"+t}function Sx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+mt(s.href)+'"]');if(l)return i.instance=l,J(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),J(l),Kn(l,"style",f),du(l,s.precedence,t),i.instance=l;case"stylesheet":f=Qr(s.href);var h=t.querySelector(El(f));if(h)return i.state.loading|=4,i.instance=h,J(h),h;l=yx(s),(f=ki.get(f))&&Mh(l,f),h=(t.ownerDocument||t).createElement("link"),J(h);var b=h;return b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Kn(h,"link",l),i.state.loading|=4,du(h,s.precedence,t),i.instance=h;case"script":return h=Jr(s.src),(f=t.querySelector(Tl(h)))?(i.instance=f,J(f),f):(l=s,(f=ki.get(h))&&(l=_({},s),Eh(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),J(f),Kn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,du(l,s.precedence,t));return i.instance}function du(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var T=l[b];if(T.dataset.precedence===i)h=T;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Mh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Eh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var hu=null;function Mx(t,i,s){if(hu===null){var l=new Map,f=hu=new Map;f.set(s,l)}else f=hu,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Pi]||h[_n]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var T=l.get(b);T?T.push(h):l.set(b,[h])}}return l}function Ex(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function ry(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Tx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function oy(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Qr(l.href),h=i.querySelector(El(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=pu.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,J(h);return}h=i.ownerDocument||i,l=yx(l),(f=ki.get(f))&&Mh(l,f),h=h.createElement("link"),J(h);var b=h;b._p=new Promise(function(T,F){b.onload=T,b.onerror=F}),Kn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=pu.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var Th=0;function ly(t,i){return t.stylesheets&&t.count===0&&gu(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&Th===0&&(Th=62500*Vb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gu(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Th?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function pu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mu=null;function gu(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mu=new Map,i.forEach(cy,t),mu=null,pu.call(t))}function cy(t,i){if(!(i.state.loading&4)){var s=mu.get(t);if(s)var l=s.get(null);else{s=new Map,mu.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=pu.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var Al={$$typeof:D,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function uy(t,i,s,l,f,h,b,T,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function Ax(t,i,s,l,f,h,b,T,F,te,me,ye){return t=new uy(t,i,s,b,F,te,me,ye,T),i=1,h===!0&&(i|=24),h=Si(3,null,null,i),t.current=h,h.stateNode=t,i=ad(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},ld(h),t}function wx(t){return t?(t=Dr,t):Dr}function Rx(t,i,s,l,f,h){f=wx(f),l.context===null?l.context=f:l.pendingContext=f,l=ss(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=rs(t,l,i),s!==null&&(hi(s,t,i),al(s,t,i))}function Cx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function Ah(t,i){Cx(t,i),(t=t.alternate)&&Cx(t,i)}function Dx(t){if(t.tag===13||t.tag===31){var i=Vs(t,67108864);i!==null&&hi(i,t,67108864),Ah(t,67108864)}}function Lx(t){if(t.tag===13||t.tag===31){var i=wi();i=Cn(i);var s=Vs(t,i);s!==null&&hi(s,t,i),Ah(t,i)}}var _u=!0;function fy(t,i,s,l){var f=P.T;P.T=null;var h=X.p;try{X.p=2,wh(t,i,s,l)}finally{X.p=h,P.T=f}}function dy(t,i,s,l){var f=P.T;P.T=null;var h=X.p;try{X.p=8,wh(t,i,s,l)}finally{X.p=h,P.T=f}}function wh(t,i,s,l){if(_u){var f=Rh(l);if(f===null)hh(t,i,l,xu,s),Ox(t,l);else if(py(f,t,i,s,l))l.stopPropagation();else if(Ox(t,l),i&4&&-1<hy.indexOf(t)){for(;f!==null;){var h=w(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=we(h.pendingLanes);if(b!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var F=1<<31-ke(b);T.entanglements[1]|=F,b&=~F}ga(h),(Wt&6)===0&&(eu=M()+500,bl(0))}}break;case 31:case 13:T=Vs(h,2),T!==null&&hi(T,h,2),nu(),Ah(h,2)}if(h=Rh(l),h===null&&hh(t,i,l,xu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else hh(t,i,l,null,s)}}function Rh(t){return t=Er(t),Ch(t)}var xu=null;function Ch(t){if(xu=null,t=fa(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return xu=t,null}function Ux(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Q()){case _e:return 2;case Ae:return 8;case de:case nt:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Dh=!1,_s=null,xs=null,vs=null,wl=new Map,Rl=new Map,bs=[],hy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ox(t,i){switch(t){case"focusin":case"focusout":_s=null;break;case"dragenter":case"dragleave":xs=null;break;case"mouseover":case"mouseout":vs=null;break;case"pointerover":case"pointerout":wl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function Cl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=w(i),i!==null&&Dx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function py(t,i,s,l,f){switch(i){case"focusin":return _s=Cl(_s,t,i,s,l,f),!0;case"dragenter":return xs=Cl(xs,t,i,s,l,f),!0;case"mouseover":return vs=Cl(vs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return wl.set(h,Cl(wl.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,Rl.set(h,Cl(Rl.get(h)||null,t,i,s,l,f)),!0}return!1}function Nx(t){var i=fa(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,$i(t.priority,function(){Lx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,$i(t.priority,function(){Lx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Rh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Mr=l,s.target.dispatchEvent(l),Mr=null}else return i=w(s),i!==null&&Dx(i),t.blockedOn=s,!1;i.shift()}return!0}function Px(t,i,s){vu(t)&&s.delete(i)}function my(){Dh=!1,_s!==null&&vu(_s)&&(_s=null),xs!==null&&vu(xs)&&(xs=null),vs!==null&&vu(vs)&&(vs=null),wl.forEach(Px),Rl.forEach(Px)}function bu(t,i){t.blockedOn===i&&(t.blockedOn=null,Dh||(Dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,my)))}var yu=null;function zx(t){yu!==t&&(yu=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yu===t&&(yu=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(Ch(l||s)===null)continue;break}var h=w(s);h!==null&&(t.splice(i,3),i-=3,Rd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function eo(t){function i(F){return bu(F,t)}_s!==null&&bu(_s,t),xs!==null&&bu(xs,t),vs!==null&&bu(vs,t),wl.forEach(i),Rl.forEach(i);for(var s=0;s<bs.length;s++){var l=bs[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<bs.length&&(s=bs[0],s.blockedOn===null);)Nx(s),s.blockedOn===null&&bs.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[Sn]||null;if(typeof h=="function")b||zx(s);else if(b){var T=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[Sn]||null)T=b.formAction;else if(Ch(f)!==null)continue}else T=b.action;typeof T=="function"?s[l+1]=T:(s.splice(l,3),l-=3),zx(s)}}}function Ix(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Lh(t){this._internalRoot=t}Su.prototype.render=Lh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=wi();Rx(s,l,t,i,null,null)},Su.prototype.unmount=Lh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Rx(t.current,2,null,t,null,null),nu(),i[Zi]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var i=ua();t={blockedOn:null,target:t,priority:i};for(var s=0;s<bs.length&&i!==0&&i<bs[s].priority;s++);bs.splice(s,0,t),s===0&&Nx(t)}};var Fx=e.version;if(Fx!=="19.2.1")throw Error(a(527,Fx,"19.2.1"));X.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var gy={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Te=Mu.inject(gy),Re=Mu}catch{}}return Ul.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=Xg,h=Wg,b=qg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Ax(t,1,!1,null,null,s,l,null,f,h,b,Ix),t[Zi]=i.current,dh(t),new Lh(i)},Ul.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=Xg,b=Wg,T=qg,F=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=Ax(t,1,!0,i,s??null,l,f,F,h,b,T,Ix),i.context=wx(null),s=i.current,l=wi(),l=Cn(l),f=ss(l),f.callback=null,rs(s,f,l),s=l,i.current.lanes=s,Xt(i,s),ga(i),t[Zi]=i.current,dh(t),new Su(i)},Ul.version="19.2.1",Ul}var lv;function dS(){if(lv)return Gh.exports;lv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Gh.exports=fS(),Gh.exports}var hS=dS();const pS=z2(hS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qp="181",mS=0,cv=1,gS=2,I2=1,_S=2,Wa=3,Ps=0,_i=1,va=2,$a=0,xo=1,Gl=2,uv=3,fv=4,xS=5,cr=100,vS=101,bS=102,yS=103,SS=104,MS=200,ES=201,TS=202,AS=203,P0=204,z0=205,wS=206,RS=207,CS=208,DS=209,LS=210,US=211,OS=212,NS=213,PS=214,I0=0,F0=1,B0=2,wo=3,H0=4,G0=5,V0=6,j0=7,F2=0,zS=1,IS=2,Us=0,FS=1,BS=2,HS=3,GS=4,VS=5,jS=6,kS=7,B2=300,Ro=301,Co=302,k0=303,X0=304,Af=306,W0=1e3,Di=1001,q0=1002,Li=1003,XS=1004,Eu=1005,Qn=1006,Xh=1007,dr=1008,ya=1009,H2=1010,G2=1011,Kl=1012,Yp=1013,xr=1014,qa=1015,Io=1016,$p=1017,Zp=1018,Ql=1020,V2=35902,j2=35899,k2=1021,X2=1022,ra=1023,Jl=1026,ec=1027,W2=1028,Kp=1029,Qp=1030,Jp=1031,em=1033,$u=33776,Zu=33777,Ku=33778,Qu=33779,Y0=35840,$0=35841,Z0=35842,K0=35843,Q0=36196,J0=37492,ep=37496,tp=37808,np=37809,ip=37810,ap=37811,sp=37812,rp=37813,op=37814,lp=37815,cp=37816,up=37817,fp=37818,dp=37819,hp=37820,pp=37821,mp=36492,gp=36494,_p=36495,xp=36283,vp=36284,bp=36285,yp=36286,WS=3200,qS=3201,YS=0,$S=1,Cs="",mi="srgb",Do="srgb-linear",uf="linear",tn="srgb",to=7680,dv=519,ZS=512,KS=513,QS=514,q2=515,JS=516,e3=517,t3=518,n3=519,hv=35044,pv="300 es",ba=2e3,ff=2001;function Y2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function tc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function i3(){const r=tc("canvas");return r.style.display="block",r}const mv={};function gv(...r){const e="THREE."+r.shift();console.log(e,...r)}function yt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function bn(...r){const e="THREE."+r.shift();console.error(e,...r)}function nc(...r){const e=r.join(" ");e in mv||(mv[e]=!0,yt(...r))}function a3(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Fo{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=Math.PI/180,Sp=180/Math.PI;function fc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[n&63|128]+ti[n>>8&255]+"-"+ti[n>>16&255]+ti[n>>24&255]+ti[a&255]+ti[a>>8&255]+ti[a>>16&255]+ti[a>>24&255]).toLowerCase()}function It(r,e,n){return Math.max(e,Math.min(n,r))}function s3(r,e){return(r%e+e)%e}function qh(r,e,n){return(1-n)*r+n*e}function Ol(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function pi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Yt{constructor(e=0,n=0){Yt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=It(this.x,e.x,n.x),this.y=It(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=It(this.x,e,n),this.y=It(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(It(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],y=c[u+1],E=c[u+2],A=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=E,e[n+3]=A;return}if(_!==A||m!==x||p!==y||g!==E){let S=m*x+p*y+g*E+_*A;S<0&&(x=-x,y=-y,E=-E,A=-A,S=-S);let v=1-d;if(S<.9995){const N=Math.acos(S),D=Math.sin(N);v=Math.sin(v*N)/D,d=Math.sin(d*N)/D,m=m*v+x*d,p=p*v+y*d,g=g*v+E*d,_=_*v+A*d}else{m=m*v+x*d,p=p*v+y*d,g=g*v+E*d,_=_*v+A*d;const N=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=N,p*=N,g*=N,_*=N}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],y=c[u+2],E=c[u+3];return e[n]=d*E+g*_+m*y-p*x,e[n+1]=m*E+g*x+p*_-d*y,e[n+2]=p*E+g*y+d*x-m*_,e[n+3]=g*E-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),y=m(o/2),E=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"YXZ":this._x=x*g*_+p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"ZXY":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_-x*y*E;break;case"ZYX":this._x=x*g*_-p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_+x*y*E;break;case"YZX":this._x=x*g*_+p*y*E,this._y=p*y*_+x*g*E,this._z=p*g*E-x*y*_,this._w=p*g*_-x*y*E;break;case"XZY":this._x=x*g*_-p*y*E,this._y=p*y*_-x*g*E,this._z=p*g*E+x*y*_,this._w=p*g*_+x*y*E;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>_){const y=2*Math.sqrt(1+a-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-a-_);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class oe{constructor(e=0,n=0,a=0){oe.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_v.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_v.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=It(this.x,e.x,n.x),this.y=It(this.y,e.y,n.y),this.z=It(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=It(this.x,e,n),this.y=It(this.y,e,n),this.z=It(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Yh.copy(this).projectOnVector(e),this.sub(Yh)}reflect(e){return this.sub(Yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(It(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yh=new oe,_v=new dc;class At{constructor(e,n,a,o,c,u,d,m,p){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],y=a[5],E=a[8],A=o[0],S=o[3],v=o[6],N=o[1],D=o[4],I=o[7],V=o[2],O=o[5],z=o[8];return c[0]=u*A+d*N+m*V,c[3]=u*S+d*D+m*O,c[6]=u*v+d*I+m*z,c[1]=p*A+g*N+_*V,c[4]=p*S+g*D+_*O,c[7]=p*v+g*I+_*z,c[2]=x*A+y*N+E*V,c[5]=x*S+y*D+E*O,c[8]=x*v+y*I+E*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,y=p*c-u*m,E=n*_+a*x+o*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(o*p-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=x*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply($h.makeScale(e,n)),this}rotate(e){return this.premultiply($h.makeRotation(-e)),this}translate(e,n){return this.premultiply($h.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $h=new At,xv=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vv=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r3(){const r={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===tn&&(o.r=Za(o.r),o.g=Za(o.g),o.b=Za(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===tn&&(o.r=vo(o.r),o.g=vo(o.g),o.b=vo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Cs?uf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return nc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return nc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Do]:{primaries:e,whitePoint:a,transfer:uf,toXYZ:xv,fromXYZ:vv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:a,transfer:tn,toXYZ:xv,fromXYZ:vv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const jt=r3();function Za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let no;class o3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{no===void 0&&(no=tc("canvas")),no.width=e.width,no.height=e.height;const o=no.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=no}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=tc("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Za(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Za(n[a]/255)*255):n[a]=Za(n[a]);return{data:n,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let l3=0;class tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=fc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Zh(o[u].image)):c.push(Zh(o[u]))}else c=Zh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Zh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?o3.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let c3=0;const Kh=new oe;class Xn extends Fo{constructor(e=Xn.DEFAULT_IMAGE,n=Xn.DEFAULT_MAPPING,a=Di,o=Di,c=Qn,u=dr,d=ra,m=ya,p=Xn.DEFAULT_ANISOTROPY,g=Cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=fc(),this.name="",this.source=new tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Yt(0,0),this.repeat=new Yt(1,1),this.center=new Yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kh).x}get height(){return this.source.getSize(Kh).y}get depth(){return this.source.getSize(Kh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){yt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){yt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==B2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case W0:e.x=e.x-Math.floor(e.x);break;case Di:e.x=e.x<0?0:1;break;case q0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case W0:e.y=e.y-Math.floor(e.y);break;case Di:e.y=e.y<0?0:1;break;case q0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=B2;Xn.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,n=0,a=0,o=1){yn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],E=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(p+1)/2,I=(y+1)/2,V=(v+1)/2,O=(g+x)/4,z=(_+A)/4,ne=(E+S)/4;return D>I&&D>V?D<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(D),o=O/a,c=z/a):I>V?I<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),a=O/o,c=ne/o):V<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(V),a=z/c,o=ne/c),this.set(a,o,c,n),this}let N=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-E)/N,this.y=(_-A)/N,this.z=(x-g)/N,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=It(this.x,e.x,n.x),this.y=It(this.y,e.y,n.y),this.z=It(this.z,e.z,n.z),this.w=It(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=It(this.x,e,n),this.y=It(this.y,e,n),this.z=It(this.z,e,n),this.w=It(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(It(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class u3 extends Fo{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new yn(0,0,e,n),this.scissorTest=!1,this.viewport=new yn(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Xn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new tm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends u3{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class $2 extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Li,this.minFilter=Li,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class f3 extends Xn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Li,this.minFilter=Li,this.wrapR=Di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc{constructor(e=new oe(1/0,1/0,1/0),n=new oe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ta.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ta.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ta.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ta):ta.fromBufferAttribute(c,u),ta.applyMatrix4(e.matrixWorld),this.expandByPoint(ta);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Tu.copy(a.boundingBox)),Tu.applyMatrix4(e.matrixWorld),this.union(Tu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ta),ta.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nl),Au.subVectors(this.max,Nl),io.subVectors(e.a,Nl),ao.subVectors(e.b,Nl),so.subVectors(e.c,Nl),Ss.subVectors(ao,io),Ms.subVectors(so,ao),nr.subVectors(io,so);let n=[0,-Ss.z,Ss.y,0,-Ms.z,Ms.y,0,-nr.z,nr.y,Ss.z,0,-Ss.x,Ms.z,0,-Ms.x,nr.z,0,-nr.x,-Ss.y,Ss.x,0,-Ms.y,Ms.x,0,-nr.y,nr.x,0];return!Qh(n,io,ao,so,Au)||(n=[1,0,0,0,1,0,0,0,1],!Qh(n,io,ao,so,Au))?!1:(wu.crossVectors(Ss,Ms),n=[wu.x,wu.y,wu.z],Qh(n,io,ao,so,Au))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ta).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ta).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ha=[new oe,new oe,new oe,new oe,new oe,new oe,new oe,new oe],ta=new oe,Tu=new hc,io=new oe,ao=new oe,so=new oe,Ss=new oe,Ms=new oe,nr=new oe,Nl=new oe,Au=new oe,wu=new oe,ir=new oe;function Qh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){ir.fromArray(r,c);const d=o.x*Math.abs(ir.x)+o.y*Math.abs(ir.y)+o.z*Math.abs(ir.z),m=e.dot(ir),p=n.dot(ir),g=a.dot(ir);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const d3=new hc,Pl=new oe,Jh=new oe;class pc{constructor(e=new oe,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):d3.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pl.subVectors(e,this.center);const n=Pl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Pl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pl.copy(e.center).add(Jh)),this.expandByPoint(Pl.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ga=new oe,e0=new oe,Ru=new oe,Es=new oe,t0=new oe,Cu=new oe,n0=new oe;class wf{constructor(e=new oe,n=new oe(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ga)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ga.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ga.copy(this.origin).addScaledVector(this.direction,n),Ga.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){e0.copy(e).add(n).multiplyScalar(.5),Ru.copy(n).sub(e).normalize(),Es.copy(this.origin).sub(e0);const c=e.distanceTo(n)*.5,u=-this.direction.dot(Ru),d=Es.dot(this.direction),m=-Es.dot(Ru),p=Es.lengthSq(),g=Math.abs(1-u*u);let _,x,y,E;if(g>0)if(_=u*m-d,x=u*d-m,E=c*g,_>=0)if(x>=-E)if(x<=E){const A=1/g;_*=A,x*=A,y=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-E?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=E?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(e0).addScaledVector(Ru,x),y}intersectSphere(e,n){Ga.subVectors(e.center,this.origin);const a=Ga.dot(this.direction),o=Ga.dot(Ga)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Ga)!==null}intersectTriangle(e,n,a,o,c){t0.subVectors(n,e),Cu.subVectors(a,e),n0.crossVectors(t0,Cu);let u=this.direction.dot(n0),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Es.subVectors(this.origin,e);const m=d*this.direction.dot(Cu.crossVectors(Es,Cu));if(m<0)return null;const p=d*this.direction.dot(t0.cross(Es));if(p<0||m+p>u)return null;const g=-d*Es.dot(n0);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class un{constructor(e,n,a,o,c,u,d,m,p,g,_,x,y,E,A,S){un.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,y,E,A,S)}set(e,n,a,o,c,u,d,m,p,g,_,x,y,E,A,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new un().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/ro.setFromMatrixColumn(e,0).length(),c=1/ro.setFromMatrixColumn(e,1).length(),u=1/ro.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,y=u*_,E=d*g,A=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+E*p,n[5]=x-A*p,n[9]=-d*m,n[2]=A-x*p,n[6]=E+y*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,E=p*g,A=p*_;n[0]=x+A*d,n[4]=E*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=y*d-E,n[6]=A+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,E=p*g,A=p*_;n[0]=x-A*d,n[4]=-u*_,n[8]=E+y*d,n[1]=y+E*d,n[5]=u*g,n[9]=A-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,y=u*_,E=d*g,A=d*_;n[0]=m*g,n[4]=E*p-y,n[8]=x*p+A,n[1]=m*_,n[5]=A*p+x,n[9]=y*p-E,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=A-x*_,n[8]=E*_+y,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*_+E,n[10]=x-A*_}else if(e.order==="XZY"){const x=u*m,y=u*p,E=d*m,A=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+A,n[5]=u*g,n[9]=y*_-E,n[2]=E*_-y,n[6]=d*g,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h3,e,p3)}lookAt(e,n,a){const o=this.elements;return Ri.subVectors(e,n),Ri.lengthSq()===0&&(Ri.z=1),Ri.normalize(),Ts.crossVectors(a,Ri),Ts.lengthSq()===0&&(Math.abs(a.z)===1?Ri.x+=1e-4:Ri.z+=1e-4,Ri.normalize(),Ts.crossVectors(a,Ri)),Ts.normalize(),Du.crossVectors(Ri,Ts),o[0]=Ts.x,o[4]=Du.x,o[8]=Ri.x,o[1]=Ts.y,o[5]=Du.y,o[9]=Ri.y,o[2]=Ts.z,o[6]=Du.z,o[10]=Ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],y=a[13],E=a[2],A=a[6],S=a[10],v=a[14],N=a[3],D=a[7],I=a[11],V=a[15],O=o[0],z=o[4],ne=o[8],C=o[12],R=o[1],B=o[5],Z=o[9],le=o[13],ge=o[2],$=o[6],P=o[10],X=o[14],k=o[3],fe=o[7],pe=o[11],L=o[15];return c[0]=u*O+d*R+m*ge+p*k,c[4]=u*z+d*B+m*$+p*fe,c[8]=u*ne+d*Z+m*P+p*pe,c[12]=u*C+d*le+m*X+p*L,c[1]=g*O+_*R+x*ge+y*k,c[5]=g*z+_*B+x*$+y*fe,c[9]=g*ne+_*Z+x*P+y*pe,c[13]=g*C+_*le+x*X+y*L,c[2]=E*O+A*R+S*ge+v*k,c[6]=E*z+A*B+S*$+v*fe,c[10]=E*ne+A*Z+S*P+v*pe,c[14]=E*C+A*le+S*X+v*L,c[3]=N*O+D*R+I*ge+V*k,c[7]=N*z+D*B+I*$+V*fe,c[11]=N*ne+D*Z+I*P+V*pe,c[15]=N*C+D*le+I*X+V*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],E=e[3],A=e[7],S=e[11],v=e[15];return E*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*y-a*m*y)+A*(+n*m*y-n*p*x+c*u*x-o*u*y+o*p*g-c*m*g)+S*(+n*p*_-n*d*y-c*u*_+a*u*y+c*d*g-a*p*g)+v*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],E=e[12],A=e[13],S=e[14],v=e[15],N=_*S*p-A*x*p+A*m*y-d*S*y-_*m*v+d*x*v,D=E*x*p-g*S*p-E*m*y+u*S*y+g*m*v-u*x*v,I=g*A*p-E*_*p+E*d*y-u*A*y-g*d*v+u*_*v,V=E*_*m-g*A*m-E*d*x+u*A*x+g*d*S-u*_*S,O=n*N+a*D+o*I+c*V;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/O;return e[0]=N*z,e[1]=(A*x*c-_*S*c-A*o*y+a*S*y+_*o*v-a*x*v)*z,e[2]=(d*S*c-A*m*c+A*o*p-a*S*p-d*o*v+a*m*v)*z,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*y-a*m*y)*z,e[4]=D*z,e[5]=(g*S*c-E*x*c+E*o*y-n*S*y-g*o*v+n*x*v)*z,e[6]=(E*m*c-u*S*c-E*o*p+n*S*p+u*o*v-n*m*v)*z,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*y+n*m*y)*z,e[8]=I*z,e[9]=(E*_*c-g*A*c-E*a*y+n*A*y+g*a*v-n*_*v)*z,e[10]=(u*A*c-E*d*c+E*a*p-n*A*p-u*a*v+n*d*v)*z,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*y-n*d*y)*z,e[12]=V*z,e[13]=(g*A*o-E*_*o+E*a*x-n*A*x-g*a*S+n*_*S)*z,e[14]=(E*d*o-u*A*o-E*a*m+n*A*m+u*a*S-n*d*S)*z,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,y=c*g,E=c*_,A=u*g,S=u*_,v=d*_,N=m*p,D=m*g,I=m*_,V=a.x,O=a.y,z=a.z;return o[0]=(1-(A+v))*V,o[1]=(y+I)*V,o[2]=(E-D)*V,o[3]=0,o[4]=(y-I)*O,o[5]=(1-(x+v))*O,o[6]=(S+N)*O,o[7]=0,o[8]=(E+D)*z,o[9]=(S-N)*z,o[10]=(1-(x+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=ro.set(o[0],o[1],o[2]).length();const u=ro.set(o[4],o[5],o[6]).length(),d=ro.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],na.copy(this);const p=1/c,g=1/u,_=1/d;return na.elements[0]*=p,na.elements[1]*=p,na.elements[2]*=p,na.elements[4]*=g,na.elements[5]*=g,na.elements[6]*=g,na.elements[8]*=_,na.elements[9]*=_,na.elements[10]*=_,n.setFromRotationMatrix(na),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=ba,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),y=(a+o)/(a-o);let E,A;if(m)E=c/(u-c),A=u*c/(u-c);else if(d===ba)E=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===ff)E=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=ba,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),y=-(a+o)/(a-o);let E,A;if(m)E=1/(u-c),A=u/(u-c);else if(d===ba)E=-2/(u-c),A=-(u+c)/(u-c);else if(d===ff)E=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const ro=new oe,na=new un,h3=new oe(0,0,0),p3=new oe(1,1,1),Ts=new oe,Du=new oe,Ri=new oe,bv=new un,yv=new dc;class Ka{constructor(e=0,n=0,a=0,o=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-It(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-It(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return bv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return yv.setFromEuler(this),this.setFromQuaternion(yv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class nm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let m3=0;const Sv=new oe,oo=new dc,Va=new un,Lu=new oe,zl=new oe,g3=new oe,_3=new dc,Mv=new oe(1,0,0),Ev=new oe(0,1,0),Tv=new oe(0,0,1),Av={type:"added"},x3={type:"removed"},lo={type:"childadded",child:null},i0={type:"childremoved",child:null};class In extends Fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m3++}),this.uuid=fc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new oe,n=new Ka,a=new dc,o=new oe(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new At}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(Mv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(Tv,e)}translateOnAxis(e,n){return Sv.copy(e).applyQuaternion(this.quaternion),this.position.add(Sv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(Tv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Lu.copy(e):Lu.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),zl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(zl,Lu,this.up):Va.lookAt(Lu,zl,this.up),this.quaternion.setFromRotationMatrix(Va),o&&(Va.extractRotation(o.matrixWorld),oo.setFromRotationMatrix(Va),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(bn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Av),lo.child=e,this.dispatchEvent(lo),lo.child=null):bn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(x3),i0.child=e,this.dispatchEvent(i0),i0.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Va.multiply(e.parent.matrixWorld)),e.applyMatrix4(Va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Av),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,e,g3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zl,_3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),E=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),E.length>0&&(a.nodes=E)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}In.DEFAULT_UP=new oe(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ia=new oe,ja=new oe,a0=new oe,ka=new oe,co=new oe,uo=new oe,wv=new oe,s0=new oe,r0=new oe,o0=new oe,l0=new yn,c0=new yn,u0=new yn;class sa{constructor(e=new oe,n=new oe,a=new oe){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),ia.subVectors(e,n),o.cross(ia);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){ia.subVectors(o,n),ja.subVectors(a,n),a0.subVectors(e,n);const u=ia.dot(ia),d=ia.dot(ja),m=ia.dot(a0),p=ja.dot(ja),g=ja.dot(a0),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,E=(u*g-d*m)*x;return c.set(1-y-E,E,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,ka)===null?!1:ka.x>=0&&ka.y>=0&&ka.x+ka.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,ka)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ka.x),m.addScaledVector(u,ka.y),m.addScaledVector(d,ka.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return l0.setScalar(0),c0.setScalar(0),u0.setScalar(0),l0.fromBufferAttribute(e,n),c0.fromBufferAttribute(e,a),u0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(l0,c.x),u.addScaledVector(c0,c.y),u.addScaledVector(u0,c.z),u}static isFrontFacing(e,n,a,o){return ia.subVectors(a,n),ja.subVectors(e,n),ia.cross(ja).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ia.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),ia.cross(ja).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sa.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return sa.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return sa.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return sa.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sa.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;co.subVectors(o,a),uo.subVectors(c,a),s0.subVectors(e,a);const m=co.dot(s0),p=uo.dot(s0);if(m<=0&&p<=0)return n.copy(a);r0.subVectors(e,o);const g=co.dot(r0),_=uo.dot(r0);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(co,u);o0.subVectors(e,c);const y=co.dot(o0),E=uo.dot(o0);if(E>=0&&y<=E)return n.copy(c);const A=y*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),n.copy(a).addScaledVector(uo,d);const S=g*E-y*_;if(S<=0&&_-g>=0&&y-E>=0)return wv.subVectors(c,o),d=(_-g)/(_-g+(y-E)),n.copy(o).addScaledVector(wv,d);const v=1/(S+A+x);return u=A*v,d=x*v,n.copy(a).addScaledVector(co,u).addScaledVector(uo,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function f0(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Et{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=jt.workingColorSpace){return this.r=e,this.g=n,this.b=a,jt.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=jt.workingColorSpace){if(e=s3(e,1),n=It(n,0,1),a=It(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=f0(u,c,e+1/3),this.g=f0(u,c,e),this.b=f0(u,c,e-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(e,n=mi){function a(c){c!==void 0&&parseFloat(c)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=mi){const a=Z2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return jt.workingToColorSpace(ni.copy(this),e),Math.round(It(ni.r*255,0,255))*65536+Math.round(It(ni.g*255,0,255))*256+Math.round(It(ni.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=jt.workingColorSpace){jt.workingToColorSpace(ni.copy(this),n);const a=ni.r,o=ni.g,c=ni.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=jt.workingColorSpace){return jt.workingToColorSpace(ni.copy(this),n),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=mi){jt.workingToColorSpace(ni.copy(this),e);const n=ni.r,a=ni.g,o=ni.b;return e!==mi?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(As),this.setHSL(As.h+e,As.s+n,As.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(As),e.getHSL(Uu);const a=qh(As.h,Uu.h,n),o=qh(As.s,Uu.s,n),c=qh(As.l,Uu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new Et;Et.NAMES=Z2;let v3=0;class Bo extends Fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v3++}),this.uuid=fc(),this.name="",this.type="Material",this.blending=xo,this.side=Ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=P0,this.blendDst=z0,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=to,this.stencilZFail=to,this.stencilZPass=to,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){yt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){yt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(a.blending=this.blending),this.side!==Ps&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==P0&&(a.blendSrc=this.blendSrc),this.blendDst!==z0&&(a.blendDst=this.blendDst),this.blendEquation!==cr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==wo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==to&&(a.stencilFail=this.stencilFail),this.stencilZFail!==to&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==to&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bo extends Bo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ka,this.combine=F2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nn=new oe,Ou=new Yt;let b3=0;class Ui{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=hv,this.updateRanges=[],this.gpuType=qa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Ou.fromBufferAttribute(this,n),Ou.applyMatrix3(e),this.setXY(n,Ou.x,Ou.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix3(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)Nn.fromBufferAttribute(this,n),Nn.applyMatrix4(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)Nn.fromBufferAttribute(this,n),Nn.applyNormalMatrix(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)Nn.fromBufferAttribute(this,n),Nn.transformDirection(e),this.setXYZ(n,Nn.x,Nn.y,Nn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ol(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=pi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ol(n,this.array)),n}setX(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ol(n,this.array)),n}setY(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ol(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ol(n,this.array)),n}setW(e,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array),o=pi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=pi(n,this.array),a=pi(a,this.array),o=pi(o,this.array),c=pi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hv&&(e.usage=this.usage),e}}class K2 extends Ui{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class Q2 extends Ui{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class oa extends Ui{constructor(e,n,a){super(new Float32Array(e),n,a)}}let y3=0;const Xi=new un,d0=new In,fo=new oe,Ci=new hc,Il=new hc,jn=new oe;class Oi extends Fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y3++}),this.uuid=fc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y2(e)?Q2:K2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new At().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xi.makeRotationFromQuaternion(e),this.applyMatrix4(Xi),this}rotateX(e){return Xi.makeRotationX(e),this.applyMatrix4(Xi),this}rotateY(e){return Xi.makeRotationY(e),this.applyMatrix4(Xi),this}rotateZ(e){return Xi.makeRotationZ(e),this.applyMatrix4(Xi),this}translate(e,n,a){return Xi.makeTranslation(e,n,a),this.applyMatrix4(Xi),this}scale(e,n,a){return Xi.makeScale(e,n,a),this.applyMatrix4(Xi),this}lookAt(e){return d0.lookAt(e),d0.updateMatrix(),this.applyMatrix4(d0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fo).negate(),this.translate(fo.x,fo.y,fo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new oa(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new oe(-1/0,-1/0,-1/0),new oe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Ci.setFromBufferAttribute(c),this.morphTargetsRelative?(jn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(jn),jn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(jn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&bn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){bn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new oe,1/0);return}if(e){const a=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Il.setFromBufferAttribute(d),this.morphTargetsRelative?(jn.addVectors(Ci.min,Il.min),Ci.expandByPoint(jn),jn.addVectors(Ci.max,Il.max),Ci.expandByPoint(jn)):(Ci.expandByPoint(Il.min),Ci.expandByPoint(Il.max))}Ci.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)jn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(jn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)jn.fromBufferAttribute(d,p),m&&(fo.fromBufferAttribute(e,p),jn.add(fo)),o=Math.max(o,a.distanceToSquared(jn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&bn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){bn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let ne=0;ne<a.count;ne++)d[ne]=new oe,m[ne]=new oe;const p=new oe,g=new oe,_=new oe,x=new Yt,y=new Yt,E=new Yt,A=new oe,S=new oe;function v(ne,C,R){p.fromBufferAttribute(a,ne),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,R),x.fromBufferAttribute(c,ne),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,R),g.sub(p),_.sub(p),y.sub(x),E.sub(x);const B=1/(y.x*E.y-E.x*y.y);isFinite(B)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-y.y).multiplyScalar(B),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(B),d[ne].add(A),d[C].add(A),d[R].add(A),m[ne].add(S),m[C].add(S),m[R].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let ne=0,C=N.length;ne<C;++ne){const R=N[ne],B=R.start,Z=R.count;for(let le=B,ge=B+Z;le<ge;le+=3)v(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const D=new oe,I=new oe,V=new oe,O=new oe;function z(ne){V.fromBufferAttribute(o,ne),O.copy(V);const C=d[ne];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),I.crossVectors(O,C);const B=I.dot(m[ne])<0?-1:1;u.setXYZW(ne,D.x,D.y,D.z,B)}for(let ne=0,C=N.length;ne<C;++ne){const R=N[ne],B=R.start,Z=R.count;for(let le=B,ge=B+Z;le<ge;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Ui(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new oe,c=new oe,u=new oe,d=new oe,m=new oe,p=new oe,g=new oe,_=new oe;if(e)for(let x=0,y=e.count;x<y;x+=3){const E=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,E),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(E,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)jn.fromBufferAttribute(e,n),jn.normalize(),e.setXYZ(n,jn.x,jn.y,jn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,E=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)x[E++]=p[y++]}return new Ui(x,g,_)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Oi,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rv=new un,ar=new wf,Nu=new pc,Cv=new oe,Pu=new oe,zu=new oe,Iu=new oe,h0=new oe,Fu=new oe,Dv=new oe,Bu=new oe;class gi extends In{constructor(e=new Oi,n=new bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Fu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(h0.fromBufferAttribute(_,e),u?Fu.addScaledVector(h0,g):Fu.addScaledVector(h0.sub(n),g))}n.add(Fu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nu.copy(a.boundingSphere),Nu.applyMatrix4(c),ar.copy(e.ray).recast(e.near),!(Nu.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Nu,Cv)===null||ar.origin.distanceToSquared(Cv)>(e.far-e.near)**2))&&(Rv.copy(c).invert(),ar.copy(e.ray).applyMatrix4(Rv),!(a.boundingBox!==null&&ar.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,A=x.length;E<A;E++){const S=x[E],v=u[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,V=D;I<V;I+=3){const O=d.getX(I),z=d.getX(I+1),ne=d.getX(I+2);o=Hu(this,v,e,a,p,g,_,O,z,ne),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const N=d.getX(S),D=d.getX(S+1),I=d.getX(S+2);o=Hu(this,u,e,a,p,g,_,N,D,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,A=x.length;E<A;E++){const S=x[E],v=u[S.materialIndex],N=Math.max(S.start,y.start),D=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,V=D;I<V;I+=3){const O=I,z=I+1,ne=I+2;o=Hu(this,v,e,a,p,g,_,O,z,ne),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const E=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=E,v=A;S<v;S+=3){const N=S,D=S+1,I=S+2;o=Hu(this,u,e,a,p,g,_,N,D,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function S3(r,e,n,a,o,c,u,d){let m;if(e.side===_i?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Ps,d),m===null)return null;Bu.copy(d),Bu.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Bu);return p<n.near||p>n.far?null:{distance:p,point:Bu.clone(),object:r}}function Hu(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Pu),r.getVertexPosition(m,zu),r.getVertexPosition(p,Iu);const g=S3(r,e,n,a,Pu,zu,Iu,Dv);if(g){const _=new oe;sa.getBarycoord(Dv,Pu,zu,Iu,_),o&&(g.uv=sa.getInterpolatedAttribute(o,d,m,p,_,new Yt)),c&&(g.uv1=sa.getInterpolatedAttribute(c,d,m,p,_,new Yt)),u&&(g.normal=sa.getInterpolatedAttribute(u,d,m,p,_,new oe),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new oe,materialIndex:0};sa.getNormal(Pu,zu,Iu,x.normal),g.face=x,g.barycoord=_}return g}class mc extends Oi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,y=0;E("z","y","x",-1,-1,a,n,e,u,c,0),E("z","y","x",1,-1,a,n,-e,u,c,1),E("x","z","y",1,1,e,a,n,o,u,2),E("x","z","y",1,-1,e,a,-n,o,u,3),E("x","y","z",1,-1,e,n,a,o,c,4),E("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new oa(p,3)),this.setAttribute("normal",new oa(g,3)),this.setAttribute("uv",new oa(_,2));function E(A,S,v,N,D,I,V,O,z,ne,C){const R=I/z,B=V/ne,Z=I/2,le=V/2,ge=O/2,$=z+1,P=ne+1;let X=0,k=0;const fe=new oe;for(let pe=0;pe<P;pe++){const L=pe*B-le;for(let ie=0;ie<$;ie++){const Se=ie*R-Z;fe[A]=Se*N,fe[S]=L*D,fe[v]=ge,p.push(fe.x,fe.y,fe.z),fe[A]=0,fe[S]=0,fe[v]=O>0?1:-1,g.push(fe.x,fe.y,fe.z),_.push(ie/z),_.push(1-pe/ne),X+=1}}for(let pe=0;pe<ne;pe++)for(let L=0;L<z;L++){const ie=x+L+$*pe,Se=x+L+$*(pe+1),Me=x+(L+1)+$*(pe+1),Ue=x+(L+1)+$*pe;m.push(ie,Se,Ue),m.push(Se,Me,Ue),k+=6}d.addGroup(y,k,C),y+=k,x+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function ri(r){const e={};for(let n=0;n<r.length;n++){const a=Lo(r[n]);for(const o in a)e[o]=a[o]}return e}function M3(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function J2(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const E3={clone:Lo,merge:ri};var T3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,A3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends Bo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=T3,this.fragmentShader=A3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=M3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class e1 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ba,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ws=new oe,Lv=new Yt,Uv=new Yt;class Wi extends e1{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Sp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sp*2*Math.atan(Math.tan(Wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ws.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ws.x,ws.y).multiplyScalar(-e/ws.z),ws.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ws.x,ws.y).multiplyScalar(-e/ws.z)}getViewSize(e,n){return this.getViewBounds(e,Lv,Uv),n.subVectors(Uv,Lv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Wh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ho=-90,po=1;class w3 extends In{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wi(ho,po,e,n);o.layers=this.layers,this.add(o);const c=new Wi(ho,po,e,n);c.layers=this.layers,this.add(c);const u=new Wi(ho,po,e,n);u.layers=this.layers,this.add(u);const d=new Wi(ho,po,e,n);d.layers=this.layers,this.add(d);const m=new Wi(ho,po,e,n);m.layers=this.layers,this.add(m);const p=new Wi(ho,po,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===ba)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===ff)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=E,a.texture.needsPMREMUpdate=!0}}class t1 extends Xn{constructor(e=[],n=Ro,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class R3 extends vr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new t1(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new mc(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Lo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:_i,blending:$a});c.uniforms.tEquirect.value=n;const u=new gi(o,c),d=n.minFilter;return n.minFilter===dr&&(n.minFilter=Qn),new w3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class Ds extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const C3={type:"move"};class p0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new oe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new oe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new oe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new oe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,a),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,E=.005;p.inputState.pinching&&x>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(C3)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new Ds;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class df{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Et(e),this.near=n,this.far=a}clone(){return new df(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class D3 extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ka,this.environmentIntensity=1,this.environmentRotation=new Ka,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class L3 extends Xn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Li,g=Li,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const m0=new oe,U3=new oe,O3=new At;class lr{constructor(e=new oe(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=m0.subVectors(a,n).cross(U3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(m0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||O3.getNormalMatrix(e),o=this.coplanarPoint(m0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new pc,N3=new Yt(.5,.5),Gu=new oe;class Rf{constructor(e=new lr,n=new lr,a=new lr,o=new lr,c=new lr,u=new lr){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ba,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],E=c[8],A=c[9],S=c[10],v=c[11],N=c[12],D=c[13],I=c[14],V=c[15];if(o[0].setComponents(p-u,y-g,v-E,V-N).normalize(),o[1].setComponents(p+u,y+g,v+E,V+N).normalize(),o[2].setComponents(p+d,y+_,v+A,V+D).normalize(),o[3].setComponents(p-d,y-_,v-A,V-D).normalize(),a)o[4].setComponents(m,x,S,I).normalize(),o[5].setComponents(p-m,y-x,v-S,V-I).normalize();else if(o[4].setComponents(p-m,y-x,v-S,V-I).normalize(),n===ba)o[5].setComponents(p+m,y+x,v+S,V+I).normalize();else if(n===ff)o[5].setComponents(m,x,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){sr.center.set(0,0,0);const n=N3.distanceTo(e.center);return sr.radius=.7071067811865476+n,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Gu.x=o.normal.x>0?e.max.x:e.min.x,Gu.y=o.normal.y>0?e.max.y:e.min.y,Gu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class im extends Bo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hf=new oe,pf=new oe,Ov=new un,Fl=new wf,Vu=new pc,g0=new oe,Nv=new oe;class P3 extends In{constructor(e=new Oi,n=new im){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)hf.fromBufferAttribute(n,o-1),pf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=hf.distanceTo(pf);e.setAttribute("lineDistance",new oa(a,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Vu.copy(a.boundingSphere),Vu.applyMatrix4(o),Vu.radius+=c,e.ray.intersectsSphere(Vu)===!1)return;Ov.copy(o).invert(),Fl.copy(e.ray).applyMatrix4(Ov);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=g.getX(A),N=g.getX(A+1),D=ju(this,e,Fl,m,v,N,A);D&&n.push(D)}if(this.isLineLoop){const A=g.getX(E-1),S=g.getX(y),v=ju(this,e,Fl,m,A,S,E-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let A=y,S=E-1;A<S;A+=p){const v=ju(this,e,Fl,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=ju(this,e,Fl,m,E-1,y,E-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ju(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(hf.fromBufferAttribute(d,o),pf.fromBufferAttribute(d,c),n.distanceSqToSegment(hf,pf,g0,Nv)>a)return;g0.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(g0);if(!(p<e.near||p>e.far))return{distance:p,point:Nv.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Pv=new oe,zv=new oe;class n1 extends P3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Pv.fromBufferAttribute(n,o),zv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Pv.distanceTo(zv);e.setAttribute("lineDistance",new oa(a,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class z3 extends Bo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iv=new un,Mp=new wf,ku=new pc,Xu=new oe;class I3 extends In{constructor(e=new Oi,n=new z3){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),ku.copy(a.boundingSphere),ku.applyMatrix4(o),ku.radius+=c,e.ray.intersectsSphere(ku)===!1)return;Iv.copy(o).invert(),Mp.copy(e.ray).applyMatrix4(Iv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=a.index,_=a.attributes.position;if(p!==null){const x=Math.max(0,u.start),y=Math.min(p.count,u.start+u.count);for(let E=x,A=y;E<A;E++){const S=p.getX(E);Xu.fromBufferAttribute(_,S),Fv(Xu,S,m,o,e,n,this)}}else{const x=Math.max(0,u.start),y=Math.min(_.count,u.start+u.count);for(let E=x,A=y;E<A;E++)Xu.fromBufferAttribute(_,E),Fv(Xu,E,m,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fv(r,e,n,a,o,c,u){const d=Mp.distanceSqToPoint(r);if(d<n){const m=new oe;Mp.closestPointToPoint(r,m),m.applyMatrix4(a);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class F3 extends Xn{constructor(e,n,a,o,c=Qn,u=Qn,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class B3 extends Xn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class i1 extends Xn{constructor(e,n,a=xr,o,c,u,d=Li,m=Li,p,g=Jl,_=1){if(g!==Jl&&g!==ec)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class a1 extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class aa extends Oi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,y=[],E=[],A=[],S=[];for(let v=0;v<g;v++){const N=v*x-u;for(let D=0;D<p;D++){const I=D*_-c;E.push(I,-N,0),A.push(0,0,1),S.push(D/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let N=0;N<d;N++){const D=N+p*v,I=N+p*(v+1),V=N+1+p*(v+1),O=N+1+p*v;y.push(D,I,O),y.push(I,V,O)}this.setIndex(y),this.setAttribute("position",new oa(E,3)),this.setAttribute("normal",new oa(A,3)),this.setAttribute("uv",new oa(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class H3 extends Bo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=WS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class G3 extends Bo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class V3{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],E=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const j3=new V3;class am{constructor(e){this.manager=e!==void 0?e:j3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}am.DEFAULT_MATERIAL_NAME="__DEFAULT";const mo=new WeakMap;class k3 extends am{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=_0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=mo.get(u);_===void 0&&(_=[],mo.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=tc("img");function m(){g(),n&&n(this);const _=mo.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}mo.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),_0.remove(`image:${e}`);const x=mo.get(this)||[];for(let y=0;y<x.length;y++){const E=x[y];E.onError&&E.onError(_)}mo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),_0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class X3 extends am{constructor(e){super(e)}load(e,n,a,o){const c=new Xn,u=new k3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class sm extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class W3 extends sm{constructor(e,n,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const x0=new un,Bv=new oe,Hv=new oe;class q3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Yt(512,512),this.mapType=ya,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rf,this._frameExtents=new Yt(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,a=this.matrix;Bv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bv),Hv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Hv),n.updateMatrixWorld(),x0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(x0,n.coordinateSystem,n.reversedDepth),n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(x0)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s1 extends e1{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Y3 extends q3{constructor(){super(new s1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $3 extends sm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new Y3}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Z3 extends sm{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class K3 extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Gv=new un;class Q3{constructor(e,n,a=0,o=1/0){this.ray=new wf(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new nm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):bn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Gv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gv),this}intersectObject(e,n=!0,a=[]){return Ep(e,this,a,n),a.sort(Vv),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)Ep(e[o],this,a,n);return a.sort(Vv),a}}function Vv(r,e){return r.distance-e.distance}function Ep(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)Ep(c[u],e,n,!0)}}function jv(r,e,n,a){const o=J3(a);switch(n){case k2:return r*e;case W2:return r*e/o.components*o.byteLength;case Kp:return r*e/o.components*o.byteLength;case Qp:return r*e*2/o.components*o.byteLength;case Jp:return r*e*2/o.components*o.byteLength;case X2:return r*e*3/o.components*o.byteLength;case ra:return r*e*4/o.components*o.byteLength;case em:return r*e*4/o.components*o.byteLength;case $u:case Zu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ku:case Qu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $0:case K0:return Math.max(r,16)*Math.max(e,8)/4;case Y0:case Z0:return Math.max(r,8)*Math.max(e,8)/2;case Q0:case J0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ep:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ip:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case sp:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case up:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case fp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case dp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case pp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case mp:case gp:case _p:return Math.ceil(r/4)*Math.ceil(e/4)*16;case xp:case vp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bp:case yp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function J3(r){switch(r){case ya:case H2:return{byteLength:1,components:1};case Kl:case G2:case Io:return{byteLength:2,components:1};case $p:case Zp:return{byteLength:2,components:4};case xr:case Yp:case qa:return{byteLength:4,components:1};case V2:case j2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qp}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r1(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function eM(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<_.length;y++){const E=_[x],A=_[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,E=_.length;y<E;y++){const A=_[y];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var tM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nM=`#ifdef USE_ALPHAHASH
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
#endif`,iM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oM=`#ifdef USE_AOMAP
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
#endif`,lM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cM=`#ifdef USE_BATCHING
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
#endif`,uM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pM=`#ifdef USE_IRIDESCENCE
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
#endif`,mM=`#ifdef USE_BUMPMAP
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
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,MM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,EM=`#define PI 3.141592653589793
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
} // validated`,TM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AM=`vec3 transformedNormal = objectNormal;
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
#endif`,wM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LM="gl_FragColor = linearToOutputTexel( gl_FragColor );",UM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,zM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,HM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VM=`#ifdef USE_GRADIENTMAP
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
}`,jM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#endif`,qM=`#ifdef USE_ENVMAP
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
#endif`,YM=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QM=`PhysicalMaterial material;
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
#endif`,JM=`uniform sampler2D dfgLUT;
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
}`,eE=`
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
#endif`,tE=`#if defined( RE_IndirectDiffuse )
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
#endif`,nE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,iE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uE=`#if defined( USE_POINTS_UV )
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
#endif`,fE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gE=`#ifdef USE_MORPHTARGETS
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
#endif`,_E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,bE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ME=`#ifdef USE_NORMALMAP
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
#endif`,EE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,AE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,RE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,DE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,BE=`float getShadowMask() {
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
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
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
#endif`,VE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
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
#endif`,kE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,XE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YE=`#ifdef USE_TRANSMISSION
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
#endif`,ZE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tT=`uniform sampler2D t2D;
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
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
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
}`,oT=`#if DEPTH_PACKING == 3200
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
}`,lT=`#define DISTANCE
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
}`,cT=`#define DISTANCE
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
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 diffuse;
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
}`,gT=`#define LAMBERT
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
}`,_T=`#define LAMBERT
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
}`,xT=`#define MATCAP
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
}`,vT=`#define MATCAP
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
}`,bT=`#define NORMAL
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
}`,yT=`#define NORMAL
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
}`,ST=`#define PHONG
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
}`,MT=`#define PHONG
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
}`,ET=`#define STANDARD
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
}`,TT=`#define STANDARD
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
}`,AT=`#define TOON
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
}`,wT=`#define TOON
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
}`,RT=`uniform float size;
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
}`,CT=`uniform vec3 diffuse;
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
}`,DT=`#include <common>
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
}`,LT=`uniform vec3 color;
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
}`,UT=`uniform float rotation;
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
}`,OT=`uniform vec3 diffuse;
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
}`,Rt={alphahash_fragment:tM,alphahash_pars_fragment:nM,alphamap_fragment:iM,alphamap_pars_fragment:aM,alphatest_fragment:sM,alphatest_pars_fragment:rM,aomap_fragment:oM,aomap_pars_fragment:lM,batching_pars_vertex:cM,batching_vertex:uM,begin_vertex:fM,beginnormal_vertex:dM,bsdfs:hM,iridescence_fragment:pM,bumpmap_pars_fragment:mM,clipping_planes_fragment:gM,clipping_planes_pars_fragment:_M,clipping_planes_pars_vertex:xM,clipping_planes_vertex:vM,color_fragment:bM,color_pars_fragment:yM,color_pars_vertex:SM,color_vertex:MM,common:EM,cube_uv_reflection_fragment:TM,defaultnormal_vertex:AM,displacementmap_pars_vertex:wM,displacementmap_vertex:RM,emissivemap_fragment:CM,emissivemap_pars_fragment:DM,colorspace_fragment:LM,colorspace_pars_fragment:UM,envmap_fragment:OM,envmap_common_pars_fragment:NM,envmap_pars_fragment:PM,envmap_pars_vertex:zM,envmap_physical_pars_fragment:qM,envmap_vertex:IM,fog_vertex:FM,fog_pars_vertex:BM,fog_fragment:HM,fog_pars_fragment:GM,gradientmap_pars_fragment:VM,lightmap_pars_fragment:jM,lights_lambert_fragment:kM,lights_lambert_pars_fragment:XM,lights_pars_begin:WM,lights_toon_fragment:YM,lights_toon_pars_fragment:$M,lights_phong_fragment:ZM,lights_phong_pars_fragment:KM,lights_physical_fragment:QM,lights_physical_pars_fragment:JM,lights_fragment_begin:eE,lights_fragment_maps:tE,lights_fragment_end:nE,logdepthbuf_fragment:iE,logdepthbuf_pars_fragment:aE,logdepthbuf_pars_vertex:sE,logdepthbuf_vertex:rE,map_fragment:oE,map_pars_fragment:lE,map_particle_fragment:cE,map_particle_pars_fragment:uE,metalnessmap_fragment:fE,metalnessmap_pars_fragment:dE,morphinstance_vertex:hE,morphcolor_vertex:pE,morphnormal_vertex:mE,morphtarget_pars_vertex:gE,morphtarget_vertex:_E,normal_fragment_begin:xE,normal_fragment_maps:vE,normal_pars_fragment:bE,normal_pars_vertex:yE,normal_vertex:SE,normalmap_pars_fragment:ME,clearcoat_normal_fragment_begin:EE,clearcoat_normal_fragment_maps:TE,clearcoat_pars_fragment:AE,iridescence_pars_fragment:wE,opaque_fragment:RE,packing:CE,premultiplied_alpha_fragment:DE,project_vertex:LE,dithering_fragment:UE,dithering_pars_fragment:OE,roughnessmap_fragment:NE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:zE,shadowmap_pars_vertex:IE,shadowmap_vertex:FE,shadowmask_pars_fragment:BE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:VE,skinnormal_vertex:jE,specularmap_fragment:kE,specularmap_pars_fragment:XE,tonemapping_fragment:WE,tonemapping_pars_fragment:qE,transmission_fragment:YE,transmission_pars_fragment:$E,uv_pars_fragment:ZE,uv_pars_vertex:KE,uv_vertex:QE,worldpos_vertex:JE,background_vert:eT,background_frag:tT,backgroundCube_vert:nT,backgroundCube_frag:iT,cube_vert:aT,cube_frag:sT,depth_vert:rT,depth_frag:oT,distanceRGBA_vert:lT,distanceRGBA_frag:cT,equirect_vert:uT,equirect_frag:fT,linedashed_vert:dT,linedashed_frag:hT,meshbasic_vert:pT,meshbasic_frag:mT,meshlambert_vert:gT,meshlambert_frag:_T,meshmatcap_vert:xT,meshmatcap_frag:vT,meshnormal_vert:bT,meshnormal_frag:yT,meshphong_vert:ST,meshphong_frag:MT,meshphysical_vert:ET,meshphysical_frag:TT,meshtoon_vert:AT,meshtoon_frag:wT,points_vert:RT,points_frag:CT,shadow_vert:DT,shadow_frag:LT,sprite_vert:UT,sprite_frag:OT},Ge={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},_a={basic:{uniforms:ri([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:ri([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:ri([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:ri([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:ri([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Et(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:ri([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:ri([Ge.points,Ge.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:ri([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:ri([Ge.common,Ge.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:ri([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:ri([Ge.sprite,Ge.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:ri([Ge.common,Ge.displacementmap,{referencePosition:{value:new oe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:ri([Ge.lights,Ge.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};_a.physical={uniforms:ri([_a.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Wu={r:0,b:0,g:0},rr=new Ka,NT=new un;function PT(r,e,n,a,o,c,u){const d=new Et(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function E(D){let I=D.isScene===!0?D.background:null;return I&&I.isTexture&&(I=(D.backgroundBlurriness>0?n:e).get(I)),I}function A(D){let I=!1;const V=E(D);V===null?v(d,m):V&&V.isColor&&(v(V,1),I=!0);const O=r.xr.getEnvironmentBlendMode();O==="additive"?a.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||I)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,I){const V=E(I);V&&(V.isCubeTexture||V.mapping===Af)?(g===void 0&&(g=new gi(new mc(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Lo(_a.backgroundCube.uniforms),vertexShader:_a.backgroundCube.vertexShader,fragmentShader:_a.backgroundCube.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(O,z,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),rr.copy(I.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(NT.makeRotationFromEuler(rr)),g.material.toneMapped=jt.getTransfer(V.colorSpace)!==tn,(_!==V||x!==V.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=V,x=V.version,y=r.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new gi(new aa(2,2),new Sa({name:"BackgroundMaterial",uniforms:Lo(_a.background.uniforms),vertexShader:_a.background.vertexShader,fragmentShader:_a.background.fragmentShader,side:Ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=jt.getTransfer(V.colorSpace)!==tn,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||x!==V.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=V,x=V.version,y=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null))}function v(D,I){D.getRGB(Wu,J2(r)),a.buffers.color.setClear(Wu.r,Wu.g,Wu.b,I,u)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,I=1){d.set(D),m=I,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(D){m=D,v(d,m)},render:A,addToRenderList:S,dispose:N}}function zT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(R,B,Z,le,ge){let $=!1;const P=_(le,Z,B);c!==P&&(c=P,p(c.object)),$=y(R,le,Z,ge),$&&E(R,le,Z,ge),ge!==null&&e.update(ge,r.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,I(R,B,Z,le),ge!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function g(R){return r.deleteVertexArray(R)}function _(R,B,Z){const le=Z.wireframe===!0;let ge=a[R.id];ge===void 0&&(ge={},a[R.id]=ge);let $=ge[B.id];$===void 0&&($={},ge[B.id]=$);let P=$[le];return P===void 0&&(P=x(m()),$[le]=P),P}function x(R){const B=[],Z=[],le=[];for(let ge=0;ge<n;ge++)B[ge]=0,Z[ge]=0,le[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:le,object:R,attributes:{},index:null}}function y(R,B,Z,le){const ge=c.attributes,$=B.attributes;let P=0;const X=Z.getAttributes();for(const k in X)if(X[k].location>=0){const pe=ge[k];let L=$[k];if(L===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),pe===void 0||pe.attribute!==L||L&&pe.data!==L.data)return!0;P++}return c.attributesNum!==P||c.index!==le}function E(R,B,Z,le){const ge={},$=B.attributes;let P=0;const X=Z.getAttributes();for(const k in X)if(X[k].location>=0){let pe=$[k];pe===void 0&&(k==="instanceMatrix"&&R.instanceMatrix&&(pe=R.instanceMatrix),k==="instanceColor"&&R.instanceColor&&(pe=R.instanceColor));const L={};L.attribute=pe,pe&&pe.data&&(L.data=pe.data),ge[k]=L,P++}c.attributes=ge,c.attributesNum=P,c.index=le}function A(){const R=c.newAttributes;for(let B=0,Z=R.length;B<Z;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const Z=c.newAttributes,le=c.enabledAttributes,ge=c.attributeDivisors;Z[R]=1,le[R]===0&&(r.enableVertexAttribArray(R),le[R]=1),ge[R]!==B&&(r.vertexAttribDivisor(R,B),ge[R]=B)}function N(){const R=c.newAttributes,B=c.enabledAttributes;for(let Z=0,le=B.length;Z<le;Z++)B[Z]!==R[Z]&&(r.disableVertexAttribArray(Z),B[Z]=0)}function D(R,B,Z,le,ge,$,P){P===!0?r.vertexAttribIPointer(R,B,Z,ge,$):r.vertexAttribPointer(R,B,Z,le,ge,$)}function I(R,B,Z,le){A();const ge=le.attributes,$=Z.getAttributes(),P=B.defaultAttributeValues;for(const X in $){const k=$[X];if(k.location>=0){let fe=ge[X];if(fe===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const pe=fe.normalized,L=fe.itemSize,ie=e.get(fe);if(ie===void 0)continue;const Se=ie.buffer,Me=ie.type,Ue=ie.bytesPerElement,K=Me===r.INT||Me===r.UNSIGNED_INT||fe.gpuType===Yp;if(fe.isInterleavedBufferAttribute){const ue=fe.data,Ne=ue.stride,qe=fe.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<k.locationSize;We++)v(k.location+We,ue.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<k.locationSize;We++)S(k.location+We);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let We=0;We<k.locationSize;We++)D(k.location+We,L/k.locationSize,Me,pe,Ne*Ue,(qe+L/k.locationSize*We)*Ue,K)}else{if(fe.isInstancedBufferAttribute){for(let ue=0;ue<k.locationSize;ue++)v(k.location+ue,fe.meshPerAttribute);R.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ue=0;ue<k.locationSize;ue++)S(k.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let ue=0;ue<k.locationSize;ue++)D(k.location+ue,L/k.locationSize,Me,pe,L*Ue,L/k.locationSize*ue*Ue,K)}}else if(P!==void 0){const pe=P[X];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(k.location,pe);break;case 3:r.vertexAttrib3fv(k.location,pe);break;case 4:r.vertexAttrib4fv(k.location,pe);break;default:r.vertexAttrib1fv(k.location,pe)}}}}N()}function V(){ne();for(const R in a){const B=a[R];for(const Z in B){const le=B[Z];for(const ge in le)g(le[ge].object),delete le[ge];delete B[Z]}delete a[R]}}function O(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const Z in B){const le=B[Z];for(const ge in le)g(le[ge].object),delete le[ge];delete B[Z]}delete a[R.id]}function z(R){for(const B in a){const Z=a[B];if(Z[R.id]===void 0)continue;const le=Z[R.id];for(const ge in le)g(le[ge].object),delete le[ge];delete Z[R.id]}}function ne(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:O,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:N}}function IT(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let E=0;E<_;E++)y+=g[E];n.update(y,a,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)u(p[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*x[A];n.update(E,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function FT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==ra&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const ne=z===Io&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==ya&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==qa&&!ne)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(yt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,O=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:N,maxVaryings:D,maxFragmentUniforms:I,vertexTextures:V,maxSamples:O}}function BT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new lr,d=new At,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||a!==0||o;return o=x,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||E===null||E.length===0||c&&!S)c?g(null):p();else{const N=c?0:a,D=N*4;let I=v.clippingState||null;m.value=I,I=g(E,x,D,y);for(let V=0;V!==D;++V)I[V]=n[V];v.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,y,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,E!==!0||S===null){const v=y+A*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,I=y;D!==A;++D,I+=4)u.copy(_[D]).applyMatrix4(N,d),u.normal.toArray(S,I),S[I+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function HT(r){let e=new WeakMap;function n(u,d){return d===k0?u.mapping=Ro:d===X0&&(u.mapping=Co),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===k0||d===X0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new R3(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ls=4,kv=[.125,.215,.35,.446,.526,.582],ur=20,GT=256,Bl=new s1,Xv=new Et;let v0=null,b0=0,y0=0,S0=!1;const VT=new oe;class Wv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=VT}=c;v0=this._renderer.getRenderTarget(),b0=this._renderer.getActiveCubeFace(),y0=this._renderer.getActiveMipmapLevel(),S0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(v0,b0,y0),this._renderer.xr.enabled=S0,e.scissorTest=!1,go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ro||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),v0=this._renderer.getRenderTarget(),b0=this._renderer.getActiveCubeFace(),y0=this._renderer.getActiveMipmapLevel(),S0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:Io,format:ra,colorSpace:Do,depthBuffer:!1},o=qv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jT(c)),this._blurMaterial=XT(c,e,n),this._ggxMaterial=kT(c,e,n)}return o}_compileMaterial(e){const n=new gi(new Oi,e);this._renderer.compile(n,Bl)}_sceneToCubeUV(e,n,a,o,c){const m=new Wi(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Xv),_.toneMapping=Us,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gi(new mc,new bo({name:"PMREM.Background",side:_i,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,v=!0):(S.color.copy(Xv),v=!0);for(let D=0;D<6;D++){const I=D%3;I===0?(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[D],c.y,c.z)):I===1?(m.up.set(0,0,p[D]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[D],c.z)):(m.up.set(0,p[D],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[D]));const V=this._cubeSize;go(o,I*V,D>2?V:0,V,V),_.setRenderTarget(o),v&&_.render(A,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=N}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===Ro||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=$v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;go(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Bl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,y=_*x,{_lodMax:E}=this,A=this._sizeLods[a],S=3*A*(a>E-Ls?a-E+Ls:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=E-n,go(c,S,v,3*A,2*A),o.setRenderTarget(c),o.render(d,Bl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-a,go(e,S,v,3*A,2*A),o.setRenderTarget(e),o.render(d,Bl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&bn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,y=this._sizeLods[a]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*ur-1),A=c/E,S=isFinite(c)?1+Math.floor(g*A):ur;S>ur&&yt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ur}`);const v=[];let N=0;for(let z=0;z<ur;++z){const ne=z/A,C=Math.exp(-ne*ne/2);v.push(C),z===0?N+=C:z<S&&(N+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-a;const I=this._sizeLods[o],V=3*I*(o>D-Ls?o-D+Ls:0),O=4*(this._cubeSize-I);go(n,V,O,3*I,2*I),m.setRenderTarget(n),m.render(_,Bl)}}function jT(r){const e=[],n=[],a=[];let o=r;const c=r-Ls+1+kv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Ls?m=kv[u-r+Ls-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,E=6,A=3,S=2,v=1,N=new Float32Array(A*E*y),D=new Float32Array(S*E*y),I=new Float32Array(v*E*y);for(let O=0;O<y;O++){const z=O%3*2/3-1,ne=O>2?0:-1,C=[z,ne,0,z+2/3,ne,0,z+2/3,ne+1,0,z,ne,0,z+2/3,ne+1,0,z,ne+1,0];N.set(C,A*E*O),D.set(x,S*E*O);const R=[O,O,O,O,O,O];I.set(R,v*E*O)}const V=new Oi;V.setAttribute("position",new Ui(N,A)),V.setAttribute("uv",new Ui(D,S)),V.setAttribute("faceIndex",new Ui(I,v)),a.push(new gi(V,null)),o>Ls&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function qv(r,e,n){const a=new vr(r,e,n);return a.texture.mapping=Af,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function go(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function kT(r,e,n){return new Sa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:GT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function XT(r,e,n){const a=new Float32Array(ur),o=new oe(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Yv(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:$a,depthTest:!1,depthWrite:!1})}function $v(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Cf(){return`

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
	`}function WT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===k0||m===X0,g=m===Ro||m===Co;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Wv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Wv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function qT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&nc("WebGLRenderer: "+a+" extension not supported."),o}}}function YT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,E=_.attributes.position;let A=0;if(y!==null){const N=y.array;A=y.version;for(let D=0,I=N.length;D<I;D+=3){const V=N[D+0],O=N[D+1],z=N[D+2];x.push(V,O,O,z,z,V)}}else if(E!==void 0){const N=E.array;A=E.version;for(let D=0,I=N.length/3-1;D<I;D+=3){const V=D+0,O=D+1,z=D+2;x.push(V,O,O,z,z,V)}}else return;const S=new(Y2(x)?Q2:K2)(x,1);S.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function $T(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*u),n.update(y,a,1)}function p(x,y,E){E!==0&&(r.drawElementsInstanced(a,y,c,x*u,E),n.update(y,a,E))}function g(x,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,E);let S=0;for(let v=0;v<E;v++)S+=y[v];n.update(S,a,1)}function _(x,y,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/u,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,A,0,E);let v=0;for(let N=0;N<E;N++)v+=y[N]*A[N];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function ZT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:bn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function KT(r,e,n){const a=new WeakMap,o=new yn;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let R=function(){ne.dispose(),a.delete(d),d.removeEventListener("dispose",R)};var y=R;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let I=0;E===!0&&(I=1),A===!0&&(I=2),S===!0&&(I=3);let V=d.attributes.position.count*I,O=1;V>e.maxTextureSize&&(O=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*O*4*_),ne=new $2(z,V,O,_);ne.type=qa,ne.needsUpdate=!0;const C=I*4;for(let B=0;B<_;B++){const Z=v[B],le=N[B],ge=D[B],$=V*O*4*B;for(let P=0;P<Z.count;P++){const X=P*C;E===!0&&(o.fromBufferAttribute(Z,P),z[$+X+0]=o.x,z[$+X+1]=o.y,z[$+X+2]=o.z,z[$+X+3]=0),A===!0&&(o.fromBufferAttribute(le,P),z[$+X+4]=o.x,z[$+X+5]=o.y,z[$+X+6]=o.z,z[$+X+7]=0),S===!0&&(o.fromBufferAttribute(ge,P),z[$+X+8]=o.x,z[$+X+9]=o.y,z[$+X+10]=o.z,z[$+X+11]=ge.itemSize===4?o.w:1)}}x={count:_,texture:ne,size:new Yt(V,O)},a.set(d,x),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function QT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const o1=new Xn,Zv=new i1(1,1),l1=new $2,c1=new f3,u1=new t1,Kv=[],Qv=[],Jv=new Float32Array(16),e2=new Float32Array(9),t2=new Float32Array(4);function Ho(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Kv[o];if(c===void 0&&(c=new Float32Array(o),Kv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Bn(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Hn(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function Df(r,e){let n=Qv[e];n===void 0&&(n=new Int32Array(e),Qv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function JT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function eA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bn(n,e))return;r.uniform2fv(this.addr,e),Hn(n,e)}}function tA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bn(n,e))return;r.uniform3fv(this.addr,e),Hn(n,e)}}function nA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bn(n,e))return;r.uniform4fv(this.addr,e),Hn(n,e)}}function iA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Bn(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Hn(n,e)}else{if(Bn(n,a))return;t2.set(a),r.uniformMatrix2fv(this.addr,!1,t2),Hn(n,a)}}function aA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Bn(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Hn(n,e)}else{if(Bn(n,a))return;e2.set(a),r.uniformMatrix3fv(this.addr,!1,e2),Hn(n,a)}}function sA(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Bn(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Hn(n,e)}else{if(Bn(n,a))return;Jv.set(a),r.uniformMatrix4fv(this.addr,!1,Jv),Hn(n,a)}}function rA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function oA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bn(n,e))return;r.uniform2iv(this.addr,e),Hn(n,e)}}function lA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bn(n,e))return;r.uniform3iv(this.addr,e),Hn(n,e)}}function cA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bn(n,e))return;r.uniform4iv(this.addr,e),Hn(n,e)}}function uA(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function fA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bn(n,e))return;r.uniform2uiv(this.addr,e),Hn(n,e)}}function dA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bn(n,e))return;r.uniform3uiv(this.addr,e),Hn(n,e)}}function hA(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bn(n,e))return;r.uniform4uiv(this.addr,e),Hn(n,e)}}function pA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Zv.compareFunction=q2,c=Zv):c=o1,n.setTexture2D(e||c,o)}function mA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||c1,o)}function gA(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||u1,o)}function _A(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||l1,o)}function xA(r){switch(r){case 5126:return JT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return aA;case 35676:return sA;case 5124:case 35670:return rA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return _A}}function vA(r,e){r.uniform1fv(this.addr,e)}function bA(r,e){const n=Ho(e,this.size,2);r.uniform2fv(this.addr,n)}function yA(r,e){const n=Ho(e,this.size,3);r.uniform3fv(this.addr,n)}function SA(r,e){const n=Ho(e,this.size,4);r.uniform4fv(this.addr,n)}function MA(r,e){const n=Ho(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function EA(r,e){const n=Ho(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function TA(r,e){const n=Ho(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function AA(r,e){r.uniform1iv(this.addr,e)}function wA(r,e){r.uniform2iv(this.addr,e)}function RA(r,e){r.uniform3iv(this.addr,e)}function CA(r,e){r.uniform4iv(this.addr,e)}function DA(r,e){r.uniform1uiv(this.addr,e)}function LA(r,e){r.uniform2uiv(this.addr,e)}function UA(r,e){r.uniform3uiv(this.addr,e)}function OA(r,e){r.uniform4uiv(this.addr,e)}function NA(r,e,n){const a=this.cache,o=e.length,c=Df(n,o);Bn(a,c)||(r.uniform1iv(this.addr,c),Hn(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||o1,c[u])}function PA(r,e,n){const a=this.cache,o=e.length,c=Df(n,o);Bn(a,c)||(r.uniform1iv(this.addr,c),Hn(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||c1,c[u])}function zA(r,e,n){const a=this.cache,o=e.length,c=Df(n,o);Bn(a,c)||(r.uniform1iv(this.addr,c),Hn(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||u1,c[u])}function IA(r,e,n){const a=this.cache,o=e.length,c=Df(n,o);Bn(a,c)||(r.uniform1iv(this.addr,c),Hn(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||l1,c[u])}function FA(r){switch(r){case 5126:return vA;case 35664:return bA;case 35665:return yA;case 35666:return SA;case 35674:return MA;case 35675:return EA;case 35676:return TA;case 5124:case 35670:return AA;case 35667:case 35671:return wA;case 35668:case 35672:return RA;case 35669:case 35673:return CA;case 5125:return DA;case 36294:return LA;case 36295:return UA;case 36296:return OA;case 35678:case 36198:case 36298:case 36306:case 35682:return NA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return IA}}class BA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=xA(n.type)}}class HA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FA(n.type)}}class GA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const M0=/(\w+)(\])?(\[|\.)?/g;function n2(r,e){r.seq.push(e),r.map[e.id]=e}function VA(r,e,n){const a=r.name,o=a.length;for(M0.lastIndex=0;;){const c=M0.exec(a),u=M0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){n2(n,p===void 0?new BA(d,r,e):new HA(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new GA(d),n2(n,_)),n=_}}}class Ju{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);VA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function i2(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const jA=37297;let kA=0;function XA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const a2=new At;function WA(r){jt._getMatrix(a2,jt.workingColorSpace,r);const e=`mat3( ${a2.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(r)){case uf:return[e,"LinearTransferOETF"];case tn:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function s2(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+XA(r.getShaderSource(e),d)}else return c}function qA(r,e){const n=WA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function YA(r,e){let n;switch(e){case FS:n="Linear";break;case BS:n="Reinhard";break;case HS:n="Cineon";break;case GS:n="ACESFilmic";break;case jS:n="AgX";break;case kS:n="Neutral";break;case VS:n="Custom";break;default:yt("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qu=new oe;function $A(){jt.getLuminanceCoefficients(qu);const r=qu.x.toFixed(4),e=qu.y.toFixed(4),n=qu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function KA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function QA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Hl(r){return r!==""}function r2(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o2(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(r){return r.replace(JA,tw)}const ew=new Map;function tw(r,e){let n=Rt[e];if(n===void 0){const a=ew.get(e);if(a!==void 0)n=Rt[a],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return Tp(n)}const nw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l2(r){return r.replace(nw,iw)}function iw(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function c2(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function aw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===I2?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===_S?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wa&&(e="SHADOWMAP_TYPE_VSM"),e}function sw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ro:case Co:e="ENVMAP_TYPE_CUBE";break;case Af:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function ow(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case F2:e="ENVMAP_BLENDING_MULTIPLY";break;case zS:e="ENVMAP_BLENDING_MIX";break;case IS:e="ENVMAP_BLENDING_ADD";break}return e}function lw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function cw(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=aw(n),p=sw(n),g=rw(n),_=ow(n),x=lw(n),y=ZA(n),E=KA(c),A=o.createProgram();let S,v,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Hl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Hl).join(`
`),v.length>0&&(v+=`
`)):(S=[c2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),v=[c2(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Us?"#define TONE_MAPPING":"",n.toneMapping!==Us?Rt.tonemapping_pars_fragment:"",n.toneMapping!==Us?YA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,qA("linearToOutputTexel",n.outputColorSpace),$A(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Hl).join(`
`)),u=Tp(u),u=r2(u,n),u=o2(u,n),d=Tp(d),d=r2(d,n),d=o2(d,n),u=l2(u),d=l2(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===pv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=N+S+u,I=N+v+d,V=i2(o,o.VERTEX_SHADER,D),O=i2(o,o.FRAGMENT_SHADER,I);o.attachShader(A,V),o.attachShader(A,O),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(B){if(r.debug.checkShaderErrors){const Z=o.getProgramInfoLog(A)||"",le=o.getShaderInfoLog(V)||"",ge=o.getShaderInfoLog(O)||"",$=Z.trim(),P=le.trim(),X=ge.trim();let k=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,V,O);else{const pe=s2(o,V,"vertex"),L=s2(o,O,"fragment");bn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+pe+`
`+L)}else $!==""?yt("WebGLProgram: Program Info Log:",$):(P===""||X==="")&&(fe=!1);fe&&(B.diagnostics={runnable:k,programLog:$,vertexShader:{log:P,prefix:S},fragmentShader:{log:X,prefix:v}})}o.deleteShader(V),o.deleteShader(O),ne=new Ju(o,A),C=QA(o,A)}let ne;this.getUniforms=function(){return ne===void 0&&z(this),ne};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,jA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=O,this}let uw=0;class fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new dw(e),n.set(e,a)),a}}class dw{constructor(e){this.id=uw++,this.code=e,this.usedTimes=0}}function hw(r,e,n,a,o,c,u){const d=new nm,m=new fw,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,R,B,Z,le){const ge=Z.fog,$=le.geometry,P=C.isMeshStandardMaterial?Z.environment:null,X=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),k=X&&X.mapping===Af?X.image.height:null,fe=E[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&yt("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,L=pe!==void 0?pe.length:0;let ie=0;$.morphAttributes.position!==void 0&&(ie=1),$.morphAttributes.normal!==void 0&&(ie=2),$.morphAttributes.color!==void 0&&(ie=3);let Se,Me,Ue,K;if(fe){const tt=_a[fe];Se=tt.vertexShader,Me=tt.fragmentShader}else Se=C.vertexShader,Me=C.fragmentShader,m.update(C),Ue=m.getVertexShaderID(C),K=m.getFragmentShaderID(C);const ue=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),qe=le.isInstancedMesh===!0,We=le.isBatchedMesh===!0,_t=!!C.map,Ot=!!C.matcap,ct=!!X,gt=!!C.aoMap,H=!!C.lightMap,xt=!!C.bumpMap,St=!!C.normalMap,kt=!!C.displacementMap,Ye=!!C.emissiveMap,$t=!!C.metalnessMap,at=!!C.roughnessMap,pt=C.anisotropy>0,U=C.clearcoat>0,M=C.dispersion>0,Q=C.iridescence>0,_e=C.sheen>0,Ae=C.transmission>0,de=pt&&!!C.anisotropyMap,nt=U&&!!C.clearcoatMap,ze=U&&!!C.clearcoatNormalMap,st=U&&!!C.clearcoatRoughnessMap,Qe=Q&&!!C.iridescenceMap,Te=Q&&!!C.iridescenceThicknessMap,Re=_e&&!!C.sheenColorMap,it=_e&&!!C.sheenRoughnessMap,ke=!!C.specularMap,Ve=!!C.specularColorMap,ut=!!C.specularIntensityMap,G=Ae&&!!C.transmissionMap,Ie=Ae&&!!C.thicknessMap,Le=!!C.gradientMap,Oe=!!C.alphaMap,we=C.alphaTest>0,be=!!C.alphaHash,je=!!C.extensions;let ft=Us;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ft=r.toneMapping);const xe={shaderID:fe,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Me,defines:C.defines,customVertexShaderID:Ue,customFragmentShaderID:K,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:We,batchingColor:We&&le._colorsTexture!==null,instancing:qe,instancingColor:qe&&le.instanceColor!==null,instancingMorph:qe&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Do,alphaToCoverage:!!C.alphaToCoverage,map:_t,matcap:Ot,envMap:ct,envMapMode:ct&&X.mapping,envMapCubeUVHeight:k,aoMap:gt,lightMap:H,bumpMap:xt,normalMap:St,displacementMap:x&&kt,emissiveMap:Ye,normalMapObjectSpace:St&&C.normalMapType===$S,normalMapTangentSpace:St&&C.normalMapType===YS,metalnessMap:$t,roughnessMap:at,anisotropy:pt,anisotropyMap:de,clearcoat:U,clearcoatMap:nt,clearcoatNormalMap:ze,clearcoatRoughnessMap:st,dispersion:M,iridescence:Q,iridescenceMap:Qe,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Re,sheenRoughnessMap:it,specularMap:ke,specularColorMap:Ve,specularIntensityMap:ut,transmission:Ae,transmissionMap:G,thicknessMap:Ie,gradientMap:Le,opaque:C.transparent===!1&&C.blending===xo&&C.alphaToCoverage===!1,alphaMap:Oe,alphaTest:we,alphaHash:be,combine:C.combine,mapUv:_t&&A(C.map.channel),aoMapUv:gt&&A(C.aoMap.channel),lightMapUv:H&&A(C.lightMap.channel),bumpMapUv:xt&&A(C.bumpMap.channel),normalMapUv:St&&A(C.normalMap.channel),displacementMapUv:kt&&A(C.displacementMap.channel),emissiveMapUv:Ye&&A(C.emissiveMap.channel),metalnessMapUv:$t&&A(C.metalnessMap.channel),roughnessMapUv:at&&A(C.roughnessMap.channel),anisotropyMapUv:de&&A(C.anisotropyMap.channel),clearcoatMapUv:nt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:ze&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:it&&A(C.sheenRoughnessMap.channel),specularMapUv:ke&&A(C.specularMap.channel),specularColorMapUv:Ve&&A(C.specularColorMap.channel),specularIntensityMapUv:ut&&A(C.specularIntensityMap.channel),transmissionMapUv:G&&A(C.transmissionMap.channel),thicknessMapUv:Ie&&A(C.thicknessMap.channel),alphaMapUv:Oe&&A(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(St||pt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!$.attributes.uv&&(_t||Oe),fog:!!ge,useFog:C.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:le.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:_t&&C.map.isVideoTexture===!0&&jt.getTransfer(C.map.colorSpace)===tn,decodeVideoTextureEmissive:Ye&&C.emissiveMap.isVideoTexture===!0&&jt.getTransfer(C.emissiveMap.colorSpace)===tn,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===va,flipSided:C.side===_i,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:je&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&C.extensions.multiDraw===!0||We)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return xe.vertexUv1s=p.has(1),xe.vertexUv2s=p.has(2),xe.vertexUv3s=p.has(3),p.clear(),xe}function v(C){const R=[];if(C.shaderID?R.push(C.shaderID):(R.push(C.customVertexShaderID),R.push(C.customFragmentShaderID)),C.defines!==void 0)for(const B in C.defines)R.push(B),R.push(C.defines[B]);return C.isRawShaderMaterial===!1&&(N(R,C),D(R,C),R.push(r.outputColorSpace)),R.push(C.customProgramCacheKey),R.join()}function N(C,R){C.push(R.precision),C.push(R.outputColorSpace),C.push(R.envMapMode),C.push(R.envMapCubeUVHeight),C.push(R.mapUv),C.push(R.alphaMapUv),C.push(R.lightMapUv),C.push(R.aoMapUv),C.push(R.bumpMapUv),C.push(R.normalMapUv),C.push(R.displacementMapUv),C.push(R.emissiveMapUv),C.push(R.metalnessMapUv),C.push(R.roughnessMapUv),C.push(R.anisotropyMapUv),C.push(R.clearcoatMapUv),C.push(R.clearcoatNormalMapUv),C.push(R.clearcoatRoughnessMapUv),C.push(R.iridescenceMapUv),C.push(R.iridescenceThicknessMapUv),C.push(R.sheenColorMapUv),C.push(R.sheenRoughnessMapUv),C.push(R.specularMapUv),C.push(R.specularColorMapUv),C.push(R.specularIntensityMapUv),C.push(R.transmissionMapUv),C.push(R.thicknessMapUv),C.push(R.combine),C.push(R.fogExp2),C.push(R.sizeAttenuation),C.push(R.morphTargetsCount),C.push(R.morphAttributeCount),C.push(R.numDirLights),C.push(R.numPointLights),C.push(R.numSpotLights),C.push(R.numSpotLightMaps),C.push(R.numHemiLights),C.push(R.numRectAreaLights),C.push(R.numDirLightShadows),C.push(R.numPointLightShadows),C.push(R.numSpotLightShadows),C.push(R.numSpotLightShadowsWithMaps),C.push(R.numLightProbes),C.push(R.shadowMapType),C.push(R.toneMapping),C.push(R.numClippingPlanes),C.push(R.numClipIntersection),C.push(R.depthPacking)}function D(C,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),C.push(d.mask)}function I(C){const R=E[C.type];let B;if(R){const Z=_a[R];B=E3.clone(Z.uniforms)}else B=C.uniforms;return B}function V(C,R){let B;for(let Z=0,le=g.length;Z<le;Z++){const ge=g[Z];if(ge.cacheKey===R){B=ge,++B.usedTimes;break}}return B===void 0&&(B=new cw(r,R,C,c),g.push(B)),B}function O(C){if(--C.usedTimes===0){const R=g.indexOf(C);g[R]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function ne(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:I,acquireProgram:V,releaseProgram:O,releaseShaderCache:z,programs:g,dispose:ne}}function pw(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function mw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function u2(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function f2(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,y,E,A,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,x,y,E,A,S){const v=u(_,x,y,E,A,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,x,y,E,A,S){const v=u(_,x,y,E,A,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||mw),a.length>1&&a.sort(x||u2),o.length>1&&o.sort(x||u2)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function gw(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new f2,r.set(a,[u])):o>=c.length?(u=new f2,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function _w(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new oe,color:new Et};break;case"SpotLight":n={position:new oe,direction:new oe,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new oe,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new oe,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new oe,halfWidth:new oe,halfHeight:new oe};break}return r[e.id]=n,n}}}function xw(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let vw=0;function bw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function yw(r){const e=new _w,n=xw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new oe);const o=new oe,c=new un,u=new un;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,E=0,A=0,S=0,v=0,N=0,D=0,I=0,V=0,O=0,z=0;p.sort(bw);for(let C=0,R=p.length;C<R;C++){const B=p[C],Z=B.color,le=B.intensity,ge=B.distance,$=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=Z.r*le,_+=Z.g*le,x+=Z.b*le;else if(B.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(B.sh.coefficients[P],le);z++}else if(B.isDirectionalLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const X=B.shadow,k=n.get(B);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,a.directionalShadow[y]=k,a.directionalShadowMap[y]=$,a.directionalShadowMatrix[y]=B.shadow.matrix,N++}a.directional[y]=P,y++}else if(B.isSpotLight){const P=e.get(B);P.position.setFromMatrixPosition(B.matrixWorld),P.color.copy(Z).multiplyScalar(le),P.distance=ge,P.coneCos=Math.cos(B.angle),P.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),P.decay=B.decay,a.spot[A]=P;const X=B.shadow;if(B.map&&(a.spotLightMap[V]=B.map,V++,X.updateMatrices(B),B.castShadow&&O++),a.spotLightMatrix[A]=X.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,a.spotShadow[A]=k,a.spotShadowMap[A]=$,I++}A++}else if(B.isRectAreaLight){const P=e.get(B);P.color.copy(Z).multiplyScalar(le),P.halfWidth.set(B.width*.5,0,0),P.halfHeight.set(0,B.height*.5,0),a.rectArea[S]=P,S++}else if(B.isPointLight){const P=e.get(B);if(P.color.copy(B.color).multiplyScalar(B.intensity),P.distance=B.distance,P.decay=B.decay,B.castShadow){const X=B.shadow,k=n.get(B);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,a.pointShadow[E]=k,a.pointShadowMap[E]=$,a.pointShadowMatrix[E]=B.shadow.matrix,D++}a.point[E]=P,E++}else if(B.isHemisphereLight){const P=e.get(B);P.skyColor.copy(B.color).multiplyScalar(le),P.groundColor.copy(B.groundColor).multiplyScalar(le),a.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ge.LTC_FLOAT_1,a.rectAreaLTC2=Ge.LTC_FLOAT_2):(a.rectAreaLTC1=Ge.LTC_HALF_1,a.rectAreaLTC2=Ge.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const ne=a.hash;(ne.directionalLength!==y||ne.pointLength!==E||ne.spotLength!==A||ne.rectAreaLength!==S||ne.hemiLength!==v||ne.numDirectionalShadows!==N||ne.numPointShadows!==D||ne.numSpotShadows!==I||ne.numSpotMaps!==V||ne.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=A,a.rectArea.length=S,a.point.length=E,a.hemi.length=v,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.pointShadow.length=D,a.pointShadowMap.length=D,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=N,a.pointShadowMatrix.length=D,a.spotLightMatrix.length=I+V-O,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=O,a.numLightProbes=z,ne.directionalLength=y,ne.pointLength=E,ne.spotLength=A,ne.rectAreaLength=S,ne.hemiLength=v,ne.numDirectionalShadows=N,ne.numPointShadows=D,ne.numSpotShadows=I,ne.numSpotMaps=V,ne.numLightProbes=z,a.version=vw++)}function m(p,g){let _=0,x=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let v=0,N=p.length;v<N;v++){const D=p[v];if(D.isDirectionalLight){const I=a.directional[_];I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),_++}else if(D.isSpotLight){const I=a.spot[y];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const I=a.rectArea[E];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),u.identity(),c.copy(D.matrixWorld),c.premultiply(S),u.extractRotation(c),I.halfWidth.set(D.width*.5,0,0),I.halfHeight.set(0,D.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),E++}else if(D.isPointLight){const I=a.point[x];I.position.setFromMatrixPosition(D.matrixWorld),I.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const I=a.hemi[A];I.direction.setFromMatrixPosition(D.matrixWorld),I.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:a}}function d2(r){const e=new yw(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function Sw(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new d2(r),e.set(o,[d])):c>=u.length?(d=new d2(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const Mw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ew=`uniform sampler2D shadow_pass;
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
}`;function Tw(r,e,n){let a=new Rf;const o=new Yt,c=new Yt,u=new yn,d=new H3({depthPacking:qS}),m=new G3,p={},g=n.maxTextureSize,_={[Ps]:_i,[_i]:Ps,[va]:va},x=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Yt},radius:{value:4}},vertexShader:Mw,fragmentShader:Ew}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Oi;E.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new gi(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I2;let v=this.type;this.render=function(O,z,ne){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const C=r.getRenderTarget(),R=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending($a),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const le=v!==Wa&&this.type===Wa,ge=v===Wa&&this.type!==Wa;for(let $=0,P=O.length;$<P;$++){const X=O[$],k=X.shadow;if(k===void 0){yt("WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const fe=k.getFrameExtents();if(o.multiply(fe),c.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/fe.x),o.x=c.x*fe.x,k.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/fe.y),o.y=c.y*fe.y,k.mapSize.y=c.y)),k.map===null||le===!0||ge===!0){const L=this.type!==Wa?{minFilter:Li,magFilter:Li}:{};k.map!==null&&k.map.dispose(),k.map=new vr(o.x,o.y,L),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const pe=k.getViewportCount();for(let L=0;L<pe;L++){const ie=k.getViewport(L);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),Z.viewport(u),k.updateMatrices(X,L),a=k.getFrustum(),I(z,ne,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===Wa&&N(k,ne),k.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,R,B)};function N(O,z){const ne=e.update(A);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new vr(o.x,o.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,r.setRenderTarget(O.mapPass),r.clear(),r.renderBufferDirect(z,null,ne,x,A,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,r.setRenderTarget(O.map),r.clear(),r.renderBufferDirect(z,null,ne,y,A,null)}function D(O,z,ne,C){let R=null;const B=ne.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)R=B;else if(R=ne.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const Z=R.uuid,le=z.uuid;let ge=p[Z];ge===void 0&&(ge={},p[Z]=ge);let $=ge[le];$===void 0&&($=R.clone(),ge[le]=$,z.addEventListener("dispose",V)),R=$}if(R.visible=z.visible,R.wireframe=z.wireframe,C===Wa?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:_[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,ne.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Z=r.properties.get(R);Z.light=ne}return R}function I(O,z,ne,C,R){if(O.visible===!1)return;if(O.layers.test(z.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&R===Wa)&&(!O.frustumCulled||a.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,O.matrixWorld);const le=e.update(O),ge=O.material;if(Array.isArray(ge)){const $=le.groups;for(let P=0,X=$.length;P<X;P++){const k=$[P],fe=ge[k.materialIndex];if(fe&&fe.visible){const pe=D(O,fe,C,R);O.onBeforeShadow(r,O,z,ne,le,pe,k),r.renderBufferDirect(ne,null,le,pe,O,k),O.onAfterShadow(r,O,z,ne,le,pe,k)}}}else if(ge.visible){const $=D(O,ge,C,R);O.onBeforeShadow(r,O,z,ne,le,$,null),r.renderBufferDirect(ne,null,le,$,O,null),O.onAfterShadow(r,O,z,ne,le,$,null)}}const Z=O.children;for(let le=0,ge=Z.length;le<ge;le++)I(Z[le],z,ne,C,R)}function V(O){O.target.removeEventListener("dispose",V);for(const ne in p){const C=p[ne],R=O.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}const Aw={[I0]:F0,[B0]:V0,[H0]:j0,[wo]:G0,[F0]:I0,[V0]:B0,[j0]:H0,[G0]:wo};function ww(r,e){function n(){let G=!1;const Ie=new yn;let Le=null;const Oe=new yn(0,0,0,0);return{setMask:function(we){Le!==we&&!G&&(r.colorMask(we,we,we,we),Le=we)},setLocked:function(we){G=we},setClear:function(we,be,je,ft,xe){xe===!0&&(we*=ft,be*=ft,je*=ft),Ie.set(we,be,je,ft),Oe.equals(Ie)===!1&&(r.clearColor(we,be,je,ft),Oe.copy(Ie))},reset:function(){G=!1,Le=null,Oe.set(-1,0,0,0)}}}function a(){let G=!1,Ie=!1,Le=null,Oe=null,we=null;return{setReversed:function(be){if(Ie!==be){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ie=be;const ft=we;we=null,this.setClear(ft)}},getReversed:function(){return Ie},setTest:function(be){be?ue(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(be){Le!==be&&!G&&(r.depthMask(be),Le=be)},setFunc:function(be){if(Ie&&(be=Aw[be]),Oe!==be){switch(be){case I0:r.depthFunc(r.NEVER);break;case F0:r.depthFunc(r.ALWAYS);break;case B0:r.depthFunc(r.LESS);break;case wo:r.depthFunc(r.LEQUAL);break;case H0:r.depthFunc(r.EQUAL);break;case G0:r.depthFunc(r.GEQUAL);break;case V0:r.depthFunc(r.GREATER);break;case j0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Oe=be}},setLocked:function(be){G=be},setClear:function(be){we!==be&&(Ie&&(be=1-be),r.clearDepth(be),we=be)},reset:function(){G=!1,Le=null,Oe=null,we=null,Ie=!1}}}function o(){let G=!1,Ie=null,Le=null,Oe=null,we=null,be=null,je=null,ft=null,xe=null;return{setTest:function(tt){G||(tt?ue(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(tt){Ie!==tt&&!G&&(r.stencilMask(tt),Ie=tt)},setFunc:function(tt,Xt,gn){(Le!==tt||Oe!==Xt||we!==gn)&&(r.stencilFunc(tt,Xt,gn),Le=tt,Oe=Xt,we=gn)},setOp:function(tt,Xt,gn){(be!==tt||je!==Xt||ft!==gn)&&(r.stencilOp(tt,Xt,gn),be=tt,je=Xt,ft=gn)},setLocked:function(tt){G=tt},setClear:function(tt){xe!==tt&&(r.clearStencil(tt),xe=tt)},reset:function(){G=!1,Ie=null,Le=null,Oe=null,we=null,be=null,je=null,ft=null,xe=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],E=null,A=!1,S=null,v=null,N=null,D=null,I=null,V=null,O=null,z=new Et(0,0,0),ne=0,C=!1,R=null,B=null,Z=null,le=null,ge=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,X=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),P=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),P=X>=2);let fe=null,pe={};const L=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Se=new yn().fromArray(L),Me=new yn().fromArray(ie);function Ue(G,Ie,Le,Oe){const we=new Uint8Array(4),be=r.createTexture();r.bindTexture(G,be),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Le;je++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Ie,0,r.RGBA,1,1,Oe,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(Ie+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return be}const K={};K[r.TEXTURE_2D]=Ue(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),u.setFunc(wo),xt(!1),St(cv),ue(r.CULL_FACE),gt($a);function ue(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Ne(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function qe(G,Ie){return _[G]!==Ie?(r.bindFramebuffer(G,Ie),_[G]=Ie,G===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Ie),G===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Ie),!0):!1}function We(G,Ie){let Le=y,Oe=!1;if(G){Le=x.get(Ie),Le===void 0&&(Le=[],x.set(Ie,Le));const we=G.textures;if(Le.length!==we.length||Le[0]!==r.COLOR_ATTACHMENT0){for(let be=0,je=we.length;be<je;be++)Le[be]=r.COLOR_ATTACHMENT0+be;Le.length=we.length,Oe=!0}}else Le[0]!==r.BACK&&(Le[0]=r.BACK,Oe=!0);Oe&&r.drawBuffers(Le)}function _t(G){return E!==G?(r.useProgram(G),E=G,!0):!1}const Ot={[cr]:r.FUNC_ADD,[vS]:r.FUNC_SUBTRACT,[bS]:r.FUNC_REVERSE_SUBTRACT};Ot[yS]=r.MIN,Ot[SS]=r.MAX;const ct={[MS]:r.ZERO,[ES]:r.ONE,[TS]:r.SRC_COLOR,[P0]:r.SRC_ALPHA,[LS]:r.SRC_ALPHA_SATURATE,[CS]:r.DST_COLOR,[wS]:r.DST_ALPHA,[AS]:r.ONE_MINUS_SRC_COLOR,[z0]:r.ONE_MINUS_SRC_ALPHA,[DS]:r.ONE_MINUS_DST_COLOR,[RS]:r.ONE_MINUS_DST_ALPHA,[US]:r.CONSTANT_COLOR,[OS]:r.ONE_MINUS_CONSTANT_COLOR,[NS]:r.CONSTANT_ALPHA,[PS]:r.ONE_MINUS_CONSTANT_ALPHA};function gt(G,Ie,Le,Oe,we,be,je,ft,xe,tt){if(G===$a){A===!0&&(Ne(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),G!==xS){if(G!==S||tt!==C){if((v!==cr||I!==cr)&&(r.blendEquation(r.FUNC_ADD),v=cr,I=cr),tt)switch(G){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFunc(r.ONE,r.ONE);break;case uv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case fv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:bn("WebGLState: Invalid blending: ",G);break}else switch(G){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case uv:bn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fv:bn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:bn("WebGLState: Invalid blending: ",G);break}N=null,D=null,V=null,O=null,z.set(0,0,0),ne=0,S=G,C=tt}return}we=we||Ie,be=be||Le,je=je||Oe,(Ie!==v||we!==I)&&(r.blendEquationSeparate(Ot[Ie],Ot[we]),v=Ie,I=we),(Le!==N||Oe!==D||be!==V||je!==O)&&(r.blendFuncSeparate(ct[Le],ct[Oe],ct[be],ct[je]),N=Le,D=Oe,V=be,O=je),(ft.equals(z)===!1||xe!==ne)&&(r.blendColor(ft.r,ft.g,ft.b,xe),z.copy(ft),ne=xe),S=G,C=!1}function H(G,Ie){G.side===va?Ne(r.CULL_FACE):ue(r.CULL_FACE);let Le=G.side===_i;Ie&&(Le=!Le),xt(Le),G.blending===xo&&G.transparent===!1?gt($a):gt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const Oe=G.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ye(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){R!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),R=G)}function St(G){G!==mS?(ue(r.CULL_FACE),G!==B&&(G===cv?r.cullFace(r.BACK):G===gS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),B=G}function kt(G){G!==Z&&(P&&r.lineWidth(G),Z=G)}function Ye(G,Ie,Le){G?(ue(r.POLYGON_OFFSET_FILL),(le!==Ie||ge!==Le)&&(r.polygonOffset(Ie,Le),le=Ie,ge=Le)):Ne(r.POLYGON_OFFSET_FILL)}function $t(G){G?ue(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function at(G){G===void 0&&(G=r.TEXTURE0+$-1),fe!==G&&(r.activeTexture(G),fe=G)}function pt(G,Ie,Le){Le===void 0&&(fe===null?Le=r.TEXTURE0+$-1:Le=fe);let Oe=pe[Le];Oe===void 0&&(Oe={type:void 0,texture:void 0},pe[Le]=Oe),(Oe.type!==G||Oe.texture!==Ie)&&(fe!==Le&&(r.activeTexture(Le),fe=Le),r.bindTexture(G,Ie||K[G]),Oe.type=G,Oe.texture=Ie)}function U(){const G=pe[fe];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function M(){try{r.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Q(){try{r.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function _e(){try{r.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ae(){try{r.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function nt(){try{r.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function ze(){try{r.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function st(){try{r.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Qe(){try{r.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Te(){try{r.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Re(G){Se.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Se.copy(G))}function it(G){Me.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),Me.copy(G))}function ke(G,Ie){let Le=p.get(Ie);Le===void 0&&(Le=new WeakMap,p.set(Ie,Le));let Oe=Le.get(G);Oe===void 0&&(Oe=r.getUniformBlockIndex(Ie,G.name),Le.set(G,Oe))}function Ve(G,Ie){const Oe=p.get(Ie).get(G);m.get(Ie)!==Oe&&(r.uniformBlockBinding(Ie,Oe,G.__bindingPointIndex),m.set(Ie,Oe))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},fe=null,pe={},_={},x=new WeakMap,y=[],E=null,A=!1,S=null,v=null,N=null,D=null,I=null,V=null,O=null,z=new Et(0,0,0),ne=0,C=!1,R=null,B=null,Z=null,le=null,ge=null,Se.set(0,0,r.canvas.width,r.canvas.height),Me.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ue,disable:Ne,bindFramebuffer:qe,drawBuffers:We,useProgram:_t,setBlending:gt,setMaterial:H,setFlipSided:xt,setCullFace:St,setLineWidth:kt,setPolygonOffset:Ye,setScissorTest:$t,activeTexture:at,bindTexture:pt,unbindTexture:U,compressedTexImage2D:M,compressedTexImage3D:Q,texImage2D:Qe,texImage3D:Te,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:ze,texStorage3D:st,texSubImage2D:_e,texSubImage3D:Ae,compressedTexSubImage2D:de,compressedTexSubImage3D:nt,scissor:Re,viewport:it,reset:ut}}function Rw(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Yt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,M){return y?new OffscreenCanvas(U,M):tc("canvas")}function A(U,M,Q){let _e=1;const Ae=pt(U);if((Ae.width>Q||Ae.height>Q)&&(_e=Q/Math.max(Ae.width,Ae.height)),_e<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(_e*Ae.width),nt=Math.floor(_e*Ae.height);_===void 0&&(_=E(de,nt));const ze=M?E(de,nt):_;return ze.width=de,ze.height=nt,ze.getContext("2d").drawImage(U,0,0,de,nt),yt("WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+de+"x"+nt+")."),ze}else return"data"in U&&yt("WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),U;return U}function S(U){return U.generateMipmaps}function v(U){r.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(U,M,Q,_e,Ae=!1){if(U!==null){if(r[U]!==void 0)return r[U];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=M;if(M===r.RED&&(Q===r.FLOAT&&(de=r.R32F),Q===r.HALF_FLOAT&&(de=r.R16F),Q===r.UNSIGNED_BYTE&&(de=r.R8)),M===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.R8UI),Q===r.UNSIGNED_SHORT&&(de=r.R16UI),Q===r.UNSIGNED_INT&&(de=r.R32UI),Q===r.BYTE&&(de=r.R8I),Q===r.SHORT&&(de=r.R16I),Q===r.INT&&(de=r.R32I)),M===r.RG&&(Q===r.FLOAT&&(de=r.RG32F),Q===r.HALF_FLOAT&&(de=r.RG16F),Q===r.UNSIGNED_BYTE&&(de=r.RG8)),M===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RG8UI),Q===r.UNSIGNED_SHORT&&(de=r.RG16UI),Q===r.UNSIGNED_INT&&(de=r.RG32UI),Q===r.BYTE&&(de=r.RG8I),Q===r.SHORT&&(de=r.RG16I),Q===r.INT&&(de=r.RG32I)),M===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGB16UI),Q===r.UNSIGNED_INT&&(de=r.RGB32UI),Q===r.BYTE&&(de=r.RGB8I),Q===r.SHORT&&(de=r.RGB16I),Q===r.INT&&(de=r.RGB32I)),M===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),Q===r.UNSIGNED_INT&&(de=r.RGBA32UI),Q===r.BYTE&&(de=r.RGBA8I),Q===r.SHORT&&(de=r.RGBA16I),Q===r.INT&&(de=r.RGBA32I)),M===r.RGB&&(Q===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),Q===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),M===r.RGBA){const nt=Ae?uf:jt.getTransfer(_e);Q===r.FLOAT&&(de=r.RGBA32F),Q===r.HALF_FLOAT&&(de=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(de=nt===tn?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(U,M){let Q;return U?M===null||M===xr||M===Ql?Q=r.DEPTH24_STENCIL8:M===qa?Q=r.DEPTH32F_STENCIL8:M===Kl&&(Q=r.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===xr||M===Ql?Q=r.DEPTH_COMPONENT24:M===qa?Q=r.DEPTH_COMPONENT32F:M===Kl&&(Q=r.DEPTH_COMPONENT16),Q}function V(U,M){return S(U)===!0||U.isFramebufferTexture&&U.minFilter!==Li&&U.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?M.mipmaps.length:1}function O(U){const M=U.target;M.removeEventListener("dispose",O),ne(M),M.isVideoTexture&&g.delete(M)}function z(U){const M=U.target;M.removeEventListener("dispose",z),R(M)}function ne(U){const M=a.get(U);if(M.__webglInit===void 0)return;const Q=U.source,_e=x.get(Q);if(_e){const Ae=_e[M.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&C(U),Object.keys(_e).length===0&&x.delete(Q)}a.remove(U)}function C(U){const M=a.get(U);r.deleteTexture(M.__webglTexture);const Q=U.source,_e=x.get(Q);delete _e[M.__cacheKey],u.memory.textures--}function R(U){const M=a.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),a.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(M.__webglFramebuffer[_e]))for(let Ae=0;Ae<M.__webglFramebuffer[_e].length;Ae++)r.deleteFramebuffer(M.__webglFramebuffer[_e][Ae]);else r.deleteFramebuffer(M.__webglFramebuffer[_e]);M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer[_e])}else{if(Array.isArray(M.__webglFramebuffer))for(let _e=0;_e<M.__webglFramebuffer.length;_e++)r.deleteFramebuffer(M.__webglFramebuffer[_e]);else r.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&r.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&r.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let _e=0;_e<M.__webglColorRenderbuffer.length;_e++)M.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(M.__webglColorRenderbuffer[_e]);M.__webglDepthRenderbuffer&&r.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Q=U.textures;for(let _e=0,Ae=Q.length;_e<Ae;_e++){const de=a.get(Q[_e]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),a.remove(Q[_e])}a.remove(U)}let B=0;function Z(){B=0}function le(){const U=B;return U>=o.maxTextures&&yt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),B+=1,U}function ge(U){const M=[];return M.push(U.wrapS),M.push(U.wrapT),M.push(U.wrapR||0),M.push(U.magFilter),M.push(U.minFilter),M.push(U.anisotropy),M.push(U.internalFormat),M.push(U.format),M.push(U.type),M.push(U.generateMipmaps),M.push(U.premultiplyAlpha),M.push(U.flipY),M.push(U.unpackAlignment),M.push(U.colorSpace),M.join()}function $(U,M){const Q=a.get(U);if(U.isVideoTexture&&$t(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const _e=U.image;if(_e===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(Q,U,M);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+M)}function P(U,M){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){K(Q,U,M);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+M)}function X(U,M){const Q=a.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){K(Q,U,M);return}n.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+M)}function k(U,M){const Q=a.get(U);if(U.version>0&&Q.__version!==U.version){ue(Q,U,M);return}n.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+M)}const fe={[W0]:r.REPEAT,[Di]:r.CLAMP_TO_EDGE,[q0]:r.MIRRORED_REPEAT},pe={[Li]:r.NEAREST,[XS]:r.NEAREST_MIPMAP_NEAREST,[Eu]:r.NEAREST_MIPMAP_LINEAR,[Qn]:r.LINEAR,[Xh]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},L={[ZS]:r.NEVER,[n3]:r.ALWAYS,[KS]:r.LESS,[q2]:r.LEQUAL,[QS]:r.EQUAL,[t3]:r.GEQUAL,[JS]:r.GREATER,[e3]:r.NOTEQUAL};function ie(U,M){if(M.type===qa&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===Xh||M.magFilter===Eu||M.magFilter===dr||M.minFilter===Qn||M.minFilter===Xh||M.minFilter===Eu||M.minFilter===dr)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,fe[M.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,fe[M.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,fe[M.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,pe[M.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Li||M.minFilter!==Eu&&M.minFilter!==dr||M.type===qa&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||a.get(M).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),a.get(M).__currentAnisotropy=M.anisotropy}}}function Se(U,M){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,M.addEventListener("dispose",O));const _e=M.source;let Ae=x.get(_e);Ae===void 0&&(Ae={},x.set(_e,Ae));const de=ge(M);if(de!==U.__cacheKey){Ae[de]===void 0&&(Ae[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),Ae[de].usedTimes++;const nt=Ae[U.__cacheKey];nt!==void 0&&(Ae[U.__cacheKey].usedTimes--,nt.usedTimes===0&&C(M)),U.__cacheKey=de,U.__webglTexture=Ae[de].texture}return Q}function Me(U,M,Q){return Math.floor(Math.floor(U/Q)/M)}function Ue(U,M,Q,_e){const de=U.updateRanges;if(de.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,M.width,M.height,Q,_e,M.data);else{de.sort((Te,Re)=>Te.start-Re.start);let nt=0;for(let Te=1;Te<de.length;Te++){const Re=de[nt],it=de[Te],ke=Re.start+Re.count,Ve=Me(it.start,M.width,4),ut=Me(Re.start,M.width,4);it.start<=ke+1&&Ve===ut&&Me(it.start+it.count-1,M.width,4)===Ve?Re.count=Math.max(Re.count,it.start+it.count-Re.start):(++nt,de[nt]=it)}de.length=nt+1;const ze=r.getParameter(r.UNPACK_ROW_LENGTH),st=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,M.width);for(let Te=0,Re=de.length;Te<Re;Te++){const it=de[Te],ke=Math.floor(it.start/4),Ve=Math.ceil(it.count/4),ut=ke%M.width,G=Math.floor(ke/M.width),Ie=Ve,Le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,G),n.texSubImage2D(r.TEXTURE_2D,0,ut,G,Ie,Le,Q,_e,M.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ze),r.pixelStorei(r.UNPACK_SKIP_PIXELS,st),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function K(U,M,Q){let _e=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(_e=r.TEXTURE_3D);const Ae=Se(U,M),de=M.source;n.bindTexture(_e,U.__webglTexture,r.TEXTURE0+Q);const nt=a.get(de);if(de.version!==nt.__version||Ae===!0){n.activeTexture(r.TEXTURE0+Q);const ze=jt.getPrimaries(jt.workingColorSpace),st=M.colorSpace===Cs?null:jt.getPrimaries(M.colorSpace),Qe=M.colorSpace===Cs||ze===st?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let Te=A(M.image,!1,o.maxTextureSize);Te=at(M,Te);const Re=c.convert(M.format,M.colorSpace),it=c.convert(M.type);let ke=D(M.internalFormat,Re,it,M.colorSpace,M.isVideoTexture);ie(_e,M);let Ve;const ut=M.mipmaps,G=M.isVideoTexture!==!0,Ie=nt.__version===void 0||Ae===!0,Le=de.dataReady,Oe=V(M,Te);if(M.isDepthTexture)ke=I(M.format===ec,M.type),Ie&&(G?n.texStorage2D(r.TEXTURE_2D,1,ke,Te.width,Te.height):n.texImage2D(r.TEXTURE_2D,0,ke,Te.width,Te.height,0,Re,it,null));else if(M.isDataTexture)if(ut.length>0){G&&Ie&&n.texStorage2D(r.TEXTURE_2D,Oe,ke,ut[0].width,ut[0].height);for(let we=0,be=ut.length;we<be;we++)Ve=ut[we],G?Le&&n.texSubImage2D(r.TEXTURE_2D,we,0,0,Ve.width,Ve.height,Re,it,Ve.data):n.texImage2D(r.TEXTURE_2D,we,ke,Ve.width,Ve.height,0,Re,it,Ve.data);M.generateMipmaps=!1}else G?(Ie&&n.texStorage2D(r.TEXTURE_2D,Oe,ke,Te.width,Te.height),Le&&Ue(M,Te,Re,it)):n.texImage2D(r.TEXTURE_2D,0,ke,Te.width,Te.height,0,Re,it,Te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){G&&Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ke,ut[0].width,ut[0].height,Te.depth);for(let we=0,be=ut.length;we<be;we++)if(Ve=ut[we],M.format!==ra)if(Re!==null)if(G){if(Le)if(M.layerUpdates.size>0){const je=jv(Ve.width,Ve.height,M.format,M.type);for(const ft of M.layerUpdates){const xe=Ve.data.subarray(ft*je/Ve.data.BYTES_PER_ELEMENT,(ft+1)*je/Ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,ft,Ve.width,Ve.height,1,Re,xe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Ve.width,Ve.height,Te.depth,Re,Ve.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,we,ke,Ve.width,Ve.height,Te.depth,0,Ve.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Le&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,we,0,0,0,Ve.width,Ve.height,Te.depth,Re,it,Ve.data):n.texImage3D(r.TEXTURE_2D_ARRAY,we,ke,Ve.width,Ve.height,Te.depth,0,Re,it,Ve.data)}else{G&&Ie&&n.texStorage2D(r.TEXTURE_2D,Oe,ke,ut[0].width,ut[0].height);for(let we=0,be=ut.length;we<be;we++)Ve=ut[we],M.format!==ra?Re!==null?G?Le&&n.compressedTexSubImage2D(r.TEXTURE_2D,we,0,0,Ve.width,Ve.height,Re,Ve.data):n.compressedTexImage2D(r.TEXTURE_2D,we,ke,Ve.width,Ve.height,0,Ve.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Le&&n.texSubImage2D(r.TEXTURE_2D,we,0,0,Ve.width,Ve.height,Re,it,Ve.data):n.texImage2D(r.TEXTURE_2D,we,ke,Ve.width,Ve.height,0,Re,it,Ve.data)}else if(M.isDataArrayTexture)if(G){if(Ie&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Oe,ke,Te.width,Te.height,Te.depth),Le)if(M.layerUpdates.size>0){const we=jv(Te.width,Te.height,M.format,M.type);for(const be of M.layerUpdates){const je=Te.data.subarray(be*we/Te.data.BYTES_PER_ELEMENT,(be+1)*we/Te.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,be,Te.width,Te.height,1,Re,it,je)}M.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,Re,it,Te.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,ke,Te.width,Te.height,Te.depth,0,Re,it,Te.data);else if(M.isData3DTexture)G?(Ie&&n.texStorage3D(r.TEXTURE_3D,Oe,ke,Te.width,Te.height,Te.depth),Le&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,Re,it,Te.data)):n.texImage3D(r.TEXTURE_3D,0,ke,Te.width,Te.height,Te.depth,0,Re,it,Te.data);else if(M.isFramebufferTexture){if(Ie)if(G)n.texStorage2D(r.TEXTURE_2D,Oe,ke,Te.width,Te.height);else{let we=Te.width,be=Te.height;for(let je=0;je<Oe;je++)n.texImage2D(r.TEXTURE_2D,je,ke,we,be,0,Re,it,null),we>>=1,be>>=1}}else if(ut.length>0){if(G&&Ie){const we=pt(ut[0]);n.texStorage2D(r.TEXTURE_2D,Oe,ke,we.width,we.height)}for(let we=0,be=ut.length;we<be;we++)Ve=ut[we],G?Le&&n.texSubImage2D(r.TEXTURE_2D,we,0,0,Re,it,Ve):n.texImage2D(r.TEXTURE_2D,we,ke,Re,it,Ve);M.generateMipmaps=!1}else if(G){if(Ie){const we=pt(Te);n.texStorage2D(r.TEXTURE_2D,Oe,ke,we.width,we.height)}Le&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,it,Te)}else n.texImage2D(r.TEXTURE_2D,0,ke,Re,it,Te);S(M)&&v(_e),nt.__version=de.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function ue(U,M,Q){if(M.image.length!==6)return;const _e=Se(U,M),Ae=M.source;n.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Q);const de=a.get(Ae);if(Ae.version!==de.__version||_e===!0){n.activeTexture(r.TEXTURE0+Q);const nt=jt.getPrimaries(jt.workingColorSpace),ze=M.colorSpace===Cs?null:jt.getPrimaries(M.colorSpace),st=M.colorSpace===Cs||nt===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Qe=M.isCompressedTexture||M.image[0].isCompressedTexture,Te=M.image[0]&&M.image[0].isDataTexture,Re=[];for(let be=0;be<6;be++)!Qe&&!Te?Re[be]=A(M.image[be],!0,o.maxCubemapSize):Re[be]=Te?M.image[be].image:M.image[be],Re[be]=at(M,Re[be]);const it=Re[0],ke=c.convert(M.format,M.colorSpace),Ve=c.convert(M.type),ut=D(M.internalFormat,ke,Ve,M.colorSpace),G=M.isVideoTexture!==!0,Ie=de.__version===void 0||_e===!0,Le=Ae.dataReady;let Oe=V(M,it);ie(r.TEXTURE_CUBE_MAP,M);let we;if(Qe){G&&Ie&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ut,it.width,it.height);for(let be=0;be<6;be++){we=Re[be].mipmaps;for(let je=0;je<we.length;je++){const ft=we[je];M.format!==ra?ke!==null?G?Le&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,ft.width,ft.height,ke,ft.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,ut,ft.width,ft.height,0,ft.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Le&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,ft.width,ft.height,ke,Ve,ft.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,ut,ft.width,ft.height,0,ke,Ve,ft.data)}}}else{if(we=M.mipmaps,G&&Ie){we.length>0&&Oe++;const be=pt(Re[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Oe,ut,be.width,be.height)}for(let be=0;be<6;be++)if(Te){G?Le&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Re[be].width,Re[be].height,ke,Ve,Re[be].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,Re[be].width,Re[be].height,0,ke,Ve,Re[be].data);for(let je=0;je<we.length;je++){const xe=we[je].image[be].image;G?Le&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,xe.width,xe.height,ke,Ve,xe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,ut,xe.width,xe.height,0,ke,Ve,xe.data)}}else{G?Le&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ke,Ve,Re[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,ke,Ve,Re[be]);for(let je=0;je<we.length;je++){const ft=we[je];G?Le&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,ke,Ve,ft.image[be]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,ut,ke,Ve,ft.image[be])}}}S(M)&&v(r.TEXTURE_CUBE_MAP),de.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}U.__version=M.version}function Ne(U,M,Q,_e,Ae,de){const nt=c.convert(Q.format,Q.colorSpace),ze=c.convert(Q.type),st=D(Q.internalFormat,nt,ze,Q.colorSpace),Qe=a.get(M),Te=a.get(Q);if(Te.__renderTarget=M,!Qe.__hasExternalTextures){const Re=Math.max(1,M.width>>de),it=Math.max(1,M.height>>de);Ae===r.TEXTURE_3D||Ae===r.TEXTURE_2D_ARRAY?n.texImage3D(Ae,de,st,Re,it,M.depth,0,nt,ze,null):n.texImage2D(Ae,de,st,Re,it,0,nt,ze,null)}n.bindFramebuffer(r.FRAMEBUFFER,U),Ye(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Ae,Te.__webglTexture,0,kt(M)):(Ae===r.TEXTURE_2D||Ae>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Ae,Te.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(U,M,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,U),M.depthBuffer){const _e=M.depthTexture,Ae=_e&&_e.isDepthTexture?_e.type:null,de=I(M.stencilBuffer,Ae),nt=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ze=kt(M);Ye(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ze,de,M.width,M.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,de,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,de,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,U)}else{const _e=M.textures;for(let Ae=0;Ae<_e.length;Ae++){const de=_e[Ae],nt=c.convert(de.format,de.colorSpace),ze=c.convert(de.type),st=D(de.internalFormat,nt,ze,de.colorSpace),Qe=kt(M);Q&&Ye(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,st,M.width,M.height):Ye(M)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,st,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,st,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(U,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,U),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=a.get(M.depthTexture);_e.__renderTarget=M,(!_e.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const Ae=_e.__webglTexture,de=kt(M);if(M.depthTexture.format===Jl)Ye(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ae,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ae,0);else if(M.depthTexture.format===ec)Ye(M)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ae,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function _t(U){const M=a.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==U.depthTexture){const _e=U.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),_e){const Ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,_e.removeEventListener("dispose",Ae)};_e.addEventListener("dispose",Ae),M.__depthDisposeCallback=Ae}M.__boundDepthTexture=_e}if(U.depthTexture&&!M.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");const _e=U.texture.mipmaps;_e&&_e.length>0?We(M.__webglFramebuffer[0],U):We(M.__webglFramebuffer,U)}else if(Q){M.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[_e]),M.__webglDepthbuffer[_e]===void 0)M.__webglDepthbuffer[_e]=r.createRenderbuffer(),qe(M.__webglDepthbuffer[_e],U,!1);else{const Ae=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,de)}}else{const _e=U.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=r.createRenderbuffer(),qe(M.__webglDepthbuffer,U,!1);else{const Ae=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=M.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,de)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(U,M,Q){const _e=a.get(U);M!==void 0&&Ne(_e.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&_t(U)}function ct(U){const M=U.texture,Q=a.get(U),_e=a.get(M);U.addEventListener("dispose",z);const Ae=U.textures,de=U.isWebGLCubeRenderTarget===!0,nt=Ae.length>1;if(nt||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=M.version,u.memory.textures++),de){Q.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer[ze]=[];for(let st=0;st<M.mipmaps.length;st++)Q.__webglFramebuffer[ze][st]=r.createFramebuffer()}else Q.__webglFramebuffer[ze]=r.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ze=0;ze<M.mipmaps.length;ze++)Q.__webglFramebuffer[ze]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(nt)for(let ze=0,st=Ae.length;ze<st;ze++){const Qe=a.get(Ae[ze]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}if(U.samples>0&&Ye(U)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ze=0;ze<Ae.length;ze++){const st=Ae[ze];Q.__webglColorRenderbuffer[ze]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[ze]);const Qe=c.convert(st.format,st.colorSpace),Te=c.convert(st.type),Re=D(st.internalFormat,Qe,Te,st.colorSpace,U.isXRRenderTarget===!0),it=kt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,it,Re,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ze,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ze])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(Q.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),ie(r.TEXTURE_CUBE_MAP,M);for(let ze=0;ze<6;ze++)if(M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Ne(Q.__webglFramebuffer[ze][st],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,st);else Ne(Q.__webglFramebuffer[ze],U,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);S(M)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(nt){for(let ze=0,st=Ae.length;ze<st;ze++){const Qe=Ae[ze],Te=a.get(Qe);let Re=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Re,Te.__webglTexture),ie(Re,Qe),Ne(Q.__webglFramebuffer,U,Qe,r.COLOR_ATTACHMENT0+ze,Re,0),S(Qe)&&v(Re)}n.unbindTexture()}else{let ze=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ze=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(ze,_e.__webglTexture),ie(ze,M),M.mipmaps&&M.mipmaps.length>0)for(let st=0;st<M.mipmaps.length;st++)Ne(Q.__webglFramebuffer[st],U,M,r.COLOR_ATTACHMENT0,ze,st);else Ne(Q.__webglFramebuffer,U,M,r.COLOR_ATTACHMENT0,ze,0);S(M)&&v(ze),n.unbindTexture()}U.depthBuffer&&_t(U)}function gt(U){const M=U.textures;for(let Q=0,_e=M.length;Q<_e;Q++){const Ae=M[Q];if(S(Ae)){const de=N(U),nt=a.get(Ae).__webglTexture;n.bindTexture(de,nt),v(de),n.unbindTexture()}}}const H=[],xt=[];function St(U){if(U.samples>0){if(Ye(U)===!1){const M=U.textures,Q=U.width,_e=U.height;let Ae=r.COLOR_BUFFER_BIT;const de=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=a.get(U),ze=M.length>1;if(ze)for(let Qe=0;Qe<M.length;Qe++)n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);const st=U.texture.mipmaps;st&&st.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let Qe=0;Qe<M.length;Qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Ae|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Ae|=r.STENCIL_BUFFER_BIT)),ze){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Qe]);const Te=a.get(M[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Te,0)}r.blitFramebuffer(0,0,Q,_e,0,0,Q,_e,Ae,r.NEAREST),m===!0&&(H.length=0,xt.length=0,H.push(r.COLOR_ATTACHMENT0+Qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(H.push(de),xt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ze)for(let Qe=0;Qe<M.length;Qe++){n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Qe]);const Te=a.get(M[Qe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,Te,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const M=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[M])}}}function kt(U){return Math.min(o.maxSamples,U.samples)}function Ye(U){const M=a.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $t(U){const M=u.render.frame;g.get(U)!==M&&(g.set(U,M),U.update())}function at(U,M){const Q=U.colorSpace,_e=U.format,Ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Do&&Q!==Cs&&(jt.getTransfer(Q)===tn?(_e!==ra||Ae!==ya)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):bn("WebGLTextures: Unsupported texture color space:",Q)),M}function pt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=Z,this.setTexture2D=$,this.setTexture2DArray=P,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Ot,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=Ye}function Cw(r,e){function n(a,o=Cs){let c;const u=jt.getTransfer(o);if(a===ya)return r.UNSIGNED_BYTE;if(a===$p)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Zp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===V2)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===j2)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===H2)return r.BYTE;if(a===G2)return r.SHORT;if(a===Kl)return r.UNSIGNED_SHORT;if(a===Yp)return r.INT;if(a===xr)return r.UNSIGNED_INT;if(a===qa)return r.FLOAT;if(a===Io)return r.HALF_FLOAT;if(a===k2)return r.ALPHA;if(a===X2)return r.RGB;if(a===ra)return r.RGBA;if(a===Jl)return r.DEPTH_COMPONENT;if(a===ec)return r.DEPTH_STENCIL;if(a===W2)return r.RED;if(a===Kp)return r.RED_INTEGER;if(a===Qp)return r.RG;if(a===Jp)return r.RG_INTEGER;if(a===em)return r.RGBA_INTEGER;if(a===$u||a===Zu||a===Ku||a===Qu)if(u===tn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===$u)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Zu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ku)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Qu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===$u)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Zu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ku)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Qu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Y0||a===$0||a===Z0||a===K0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===Y0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===$0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Z0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===K0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Q0||a===J0||a===ep)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Q0||a===J0)return u===tn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===ep)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===tp||a===np||a===ip||a===ap||a===sp||a===rp||a===op||a===lp||a===cp||a===up||a===fp||a===dp||a===hp||a===pp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===tp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===np)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===ip)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ap)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===sp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===rp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===op)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===lp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===cp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===up)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===fp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===dp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===hp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===pp)return u===tn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===mp||a===gp||a===_p)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===mp)return u===tn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===gp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===_p)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===xp||a===vp||a===bp||a===yp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(a===vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===bp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===yp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Ql?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lw=`
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

}`;class Uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new a1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new Sa({vertexShader:Dw,fragmentShader:Lw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gi(new aa(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ow extends Fo{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,E=null;const A=typeof XRWebGLBinding<"u",S=new Uw,v={},N=n.getContextAttributes();let D=null,I=null;const V=[],O=[],z=new Yt;let ne=null;const C=new Wi;C.viewport=new yn;const R=new Wi;R.viewport=new yn;const B=[C,R],Z=new K3;let le=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ue=V[K];return ue===void 0&&(ue=new p0,V[K]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(K){let ue=V[K];return ue===void 0&&(ue=new p0,V[K]=ue),ue.getGripSpace()},this.getHand=function(K){let ue=V[K];return ue===void 0&&(ue=new p0,V[K]=ue),ue.getHandSpace()};function $(K){const ue=O.indexOf(K.inputSource);if(ue===-1)return;const Ne=V[ue];Ne!==void 0&&(Ne.update(K.inputSource,K.frame,p||u),Ne.dispatchEvent({type:K.type,data:K.inputSource}))}function P(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",X);for(let K=0;K<V.length;K++){const ue=O[K];ue!==null&&(O[K]=null,V[K].disconnect(ue))}le=null,ge=null,S.reset();for(const K in v)delete v[K];e.setRenderTarget(D),y=null,x=null,_=null,o=null,I=null,Ue.stop(),a.isPresenting=!1,e.setPixelRatio(ne),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,a.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,a.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",P),o.addEventListener("inputsourceschange",X),N.xrCompatible!==!0&&await n.makeXRCompatible(),ne=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,qe=null,We=null;N.depth&&(We=N.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=N.stencil?ec:Jl,qe=N.stencil?Ql:xr);const _t={colorFormat:n.RGBA8,depthFormat:We,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(_t),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new vr(x.textureWidth,x.textureHeight,{format:ra,type:ya,depthTexture:new i1(x.textureWidth,x.textureHeight,qe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ne),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new vr(y.framebufferWidth,y.framebufferHeight,{format:ra,type:ya,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function X(K){for(let ue=0;ue<K.removed.length;ue++){const Ne=K.removed[ue],qe=O.indexOf(Ne);qe>=0&&(O[qe]=null,V[qe].disconnect(Ne))}for(let ue=0;ue<K.added.length;ue++){const Ne=K.added[ue];let qe=O.indexOf(Ne);if(qe===-1){for(let _t=0;_t<V.length;_t++)if(_t>=O.length){O.push(Ne),qe=_t;break}else if(O[_t]===null){O[_t]=Ne,qe=_t;break}if(qe===-1)break}const We=V[qe];We&&We.connect(Ne)}}const k=new oe,fe=new oe;function pe(K,ue,Ne){k.setFromMatrixPosition(ue.matrixWorld),fe.setFromMatrixPosition(Ne.matrixWorld);const qe=k.distanceTo(fe),We=ue.projectionMatrix.elements,_t=Ne.projectionMatrix.elements,Ot=We[14]/(We[10]-1),ct=We[14]/(We[10]+1),gt=(We[9]+1)/We[5],H=(We[9]-1)/We[5],xt=(We[8]-1)/We[0],St=(_t[8]+1)/_t[0],kt=Ot*xt,Ye=Ot*St,$t=qe/(-xt+St),at=$t*-xt;if(ue.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ($t),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),We[10]===-1)K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const pt=Ot+$t,U=ct+$t,M=kt-at,Q=Ye+(qe-at),_e=gt*ct/U*pt,Ae=H*ct/U*pt;K.projectionMatrix.makePerspective(M,Q,_e,Ae,pt,U),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function L(K,ue){ue===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ue.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;let ue=K.near,Ne=K.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),Z.near=R.near=C.near=ue,Z.far=R.far=C.far=Ne,(le!==Z.near||ge!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),le=Z.near,ge=Z.far),Z.layers.mask=K.layers.mask|6,C.layers.mask=Z.layers.mask&3,R.layers.mask=Z.layers.mask&5;const qe=K.parent,We=Z.cameras;L(Z,qe);for(let _t=0;_t<We.length;_t++)L(We[_t],qe);We.length===2?pe(Z,C,R):Z.projectionMatrix.copy(C.projectionMatrix),ie(K,Z,qe)};function ie(K,ue,Ne){Ne===null?K.matrix.copy(ue.matrixWorld):(K.matrix.copy(Ne.matrixWorld),K.matrix.invert(),K.matrix.multiply(ue.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ue.projectionMatrix),K.projectionMatrixInverse.copy(ue.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Sp*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(K){m=K,x!==null&&(x.fixedFoveation=K),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(K){return v[K]};let Se=null;function Me(K,ue){if(g=ue.getViewerPose(p||u),E=ue,g!==null){const Ne=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let qe=!1;Ne.length!==Z.cameras.length&&(Z.cameras.length=0,qe=!0);for(let ct=0;ct<Ne.length;ct++){const gt=Ne[ct];let H=null;if(y!==null)H=y.getViewport(gt);else{const St=_.getViewSubImage(x,gt);H=St.viewport,ct===0&&(e.setRenderTargetTextures(I,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(I))}let xt=B[ct];xt===void 0&&(xt=new Wi,xt.layers.enable(ct),xt.viewport=new yn,B[ct]=xt),xt.matrix.fromArray(gt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(gt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(H.x,H.y,H.width,H.height),ct===0&&(Z.matrix.copy(xt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),qe===!0&&Z.cameras.push(xt)}const We=o.enabledFeatures;if(We&&We.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const ct=_.getDepthInformation(Ne[0]);ct&&ct.isValid&&ct.texture&&S.init(ct,o.renderState)}if(We&&We.includes("camera-access")&&A){e.state.unbindTexture(),_=a.getBinding();for(let ct=0;ct<Ne.length;ct++){const gt=Ne[ct].camera;if(gt){let H=v[gt];H||(H=new a1,v[gt]=H);const xt=_.getCameraImage(gt);H.sourceTexture=xt}}}}for(let Ne=0;Ne<V.length;Ne++){const qe=O[Ne],We=V[Ne];qe!==null&&We!==void 0&&We.update(qe,ue,p||u)}Se&&Se(K,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ue=new r1;Ue.setAnimationLoop(Me),this.setAnimationLoop=function(K){Se=K},this.dispose=function(){}}}const or=new Ka,Nw=new un;function Pw(r,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,J2(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,N,D,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,I)):v.isMeshMatcapMaterial?(c(S,v),E(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,N,D):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===_i&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===_i&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const N=e.get(v),D=N.envMap,I=N.envMapRotation;D&&(S.envMap.value=D,or.copy(I),or.x*=-1,or.y*=-1,or.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),S.envMapRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(or)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,N,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*N,S.scale.value=D*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,N){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===_i&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const N=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function zw(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(N,D){const I=D.program;a.uniformBlockBinding(N,I)}function p(N,D){let I=o[N.id];I===void 0&&(E(N),I=g(N),o[N.id]=I,N.addEventListener("dispose",S));const V=D.program;a.updateUBOMapping(N,V);const O=e.render.frame;c[N.id]!==O&&(x(N),c[N.id]=O)}function g(N){const D=_();N.__bindingPointIndex=D;const I=r.createBuffer(),V=N.__size,O=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,V,O),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,I),I}function _(){for(let N=0;N<d;N++)if(u.indexOf(N)===-1)return u.push(N),N;return bn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const D=o[N.id],I=N.uniforms,V=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let O=0,z=I.length;O<z;O++){const ne=Array.isArray(I[O])?I[O]:[I[O]];for(let C=0,R=ne.length;C<R;C++){const B=ne[C];if(y(B,O,C,V)===!0){const Z=B.__offset,le=Array.isArray(B.value)?B.value:[B.value];let ge=0;for(let $=0;$<le.length;$++){const P=le[$],X=A(P);typeof P=="number"||typeof P=="boolean"?(B.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,Z+ge,B.__data)):P.isMatrix3?(B.__data[0]=P.elements[0],B.__data[1]=P.elements[1],B.__data[2]=P.elements[2],B.__data[3]=0,B.__data[4]=P.elements[3],B.__data[5]=P.elements[4],B.__data[6]=P.elements[5],B.__data[7]=0,B.__data[8]=P.elements[6],B.__data[9]=P.elements[7],B.__data[10]=P.elements[8],B.__data[11]=0):(P.toArray(B.__data,ge),ge+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,D,I,V){const O=N.value,z=D+"_"+I;if(V[z]===void 0)return typeof O=="number"||typeof O=="boolean"?V[z]=O:V[z]=O.clone(),!0;{const ne=V[z];if(typeof O=="number"||typeof O=="boolean"){if(ne!==O)return V[z]=O,!0}else if(ne.equals(O)===!1)return ne.copy(O),!0}return!1}function E(N){const D=N.uniforms;let I=0;const V=16;for(let z=0,ne=D.length;z<ne;z++){const C=Array.isArray(D[z])?D[z]:[D[z]];for(let R=0,B=C.length;R<B;R++){const Z=C[R],le=Array.isArray(Z.value)?Z.value:[Z.value];for(let ge=0,$=le.length;ge<$;ge++){const P=le[ge],X=A(P),k=I%V,fe=k%X.boundary,pe=k+fe;I+=fe,pe!==0&&V-pe<X.storage&&(I+=V-pe),Z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=I,I+=X.storage}}}const O=I%V;return O>0&&(I+=V-O),N.__size=I,N.__cache={},this}function A(N){const D={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(D.boundary=4,D.storage=4):N.isVector2?(D.boundary=8,D.storage=8):N.isVector3||N.isColor?(D.boundary=16,D.storage=12):N.isVector4?(D.boundary=16,D.storage=16):N.isMatrix3?(D.boundary=48,D.storage=48):N.isMatrix4?(D.boundary=64,D.storage=64):N.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):yt("WebGLRenderer: Unsupported uniform value type.",N),D}function S(N){const D=N.target;D.removeEventListener("dispose",S);const I=u.indexOf(D.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function v(){for(const N in o)r.deleteBuffer(o[N]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const Iw=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Xa=null;function Fw(){return Xa===null&&(Xa=new L3(Iw,32,32,Qp,Io),Xa.minFilter=Qn,Xa.magFilter=Qn,Xa.wrapS=Di,Xa.wrapT=Di,Xa.generateMipmaps=!1,Xa.needsUpdate=!0),Xa}class Bw{constructor(e={}){const{canvas:n=i3(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const E=new Set([em,Jp,Kp]),A=new Set([ya,xr,Kl,Ql,$p,Zp]),S=new Uint32Array(4),v=new Int32Array(4);let N=null,D=null;const I=[],V=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1;this._outputColorSpace=mi;let ne=0,C=0,R=null,B=-1,Z=null;const le=new yn,ge=new yn;let $=null;const P=new Et(0);let X=0,k=n.width,fe=n.height,pe=1,L=null,ie=null;const Se=new yn(0,0,k,fe),Me=new yn(0,0,k,fe);let Ue=!1;const K=new Rf;let ue=!1,Ne=!1;const qe=new un,We=new oe,_t=new yn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function gt(){return R===null?pe:1}let H=a;function xt(w,W){return n.getContext(w,W)}try{const w={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qp}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",be,!1),n.addEventListener("webglcontextcreationerror",je,!1),H===null){const W="webgl2";if(H=xt(W,w),H===null)throw xt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let St,kt,Ye,$t,at,pt,U,M,Q,_e,Ae,de,nt,ze,st,Qe,Te,Re,it,ke,Ve,ut,G,Ie;function Le(){St=new qT(H),St.init(),ut=new Cw(H,St),kt=new FT(H,St,e,ut),Ye=new ww(H,St),kt.reversedDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),$t=new ZT(H),at=new pw,pt=new Rw(H,St,Ye,at,kt,ut,$t),U=new HT(O),M=new WT(O),Q=new eM(H),G=new zT(H,Q),_e=new YT(H,Q,$t,G),Ae=new QT(H,_e,Q,$t),it=new KT(H,kt,pt),Qe=new BT(at),de=new hw(O,U,M,St,kt,G,Qe),nt=new Pw(O,at),ze=new gw,st=new Sw(St),Re=new PT(O,U,M,Ye,Ae,y,m),Te=new Tw(O,Ae,kt),Ie=new zw(H,$t,kt,Ye),ke=new IT(H,St,$t),Ve=new $T(H,St,$t),$t.programs=de.programs,O.capabilities=kt,O.extensions=St,O.properties=at,O.renderLists=ze,O.shadowMap=Te,O.state=Ye,O.info=$t}Le();const Oe=new Ow(O,H);this.xr=Oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=St.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=St.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(w){w!==void 0&&(pe=w,this.setSize(k,fe,!1))},this.getSize=function(w){return w.set(k,fe)},this.setSize=function(w,W,se=!0){if(Oe.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,fe=W,n.width=Math.floor(w*pe),n.height=Math.floor(W*pe),se===!0&&(n.style.width=w+"px",n.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(k*pe,fe*pe).floor()},this.setDrawingBufferSize=function(w,W,se){k=w,fe=W,pe=se,n.width=Math.floor(w*se),n.height=Math.floor(W*se),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(le)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,W,se,J){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,W,se,J),Ye.viewport(le.copy(Se).multiplyScalar(pe).round())},this.getScissor=function(w){return w.copy(Me)},this.setScissor=function(w,W,se,J){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,W,se,J),Ye.scissor(ge.copy(Me).multiplyScalar(pe).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(w){Ye.setScissorTest(Ue=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,se=!0){let J=0;if(w){let Y=!1;if(R!==null){const De=R.texture.format;Y=E.has(De)}if(Y){const De=R.texture.type,he=A.has(De),Ee=Re.getClearColor(),Ce=Re.getClearAlpha(),Fe=Ee.r,Xe=Ee.g,He=Ee.b;he?(S[0]=Fe,S[1]=Xe,S[2]=He,S[3]=Ce,H.clearBufferuiv(H.COLOR,0,S)):(v[0]=Fe,v[1]=Xe,v[2]=He,v[3]=Ce,H.clearBufferiv(H.COLOR,0,v))}else J|=H.COLOR_BUFFER_BIT}W&&(J|=H.DEPTH_BUFFER_BIT),se&&(J|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",be,!1),n.removeEventListener("webglcontextcreationerror",je,!1),Re.dispose(),ze.dispose(),st.dispose(),at.dispose(),U.dispose(),M.dispose(),Ae.dispose(),G.dispose(),Ie.dispose(),de.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",oi),Oe.removeEventListener("sessionend",Bt),Cn.stop()};function we(w){w.preventDefault(),gv("WebGLRenderer: Context Lost."),z=!0}function be(){gv("WebGLRenderer: Context Restored."),z=!1;const w=$t.autoReset,W=Te.enabled,se=Te.autoUpdate,J=Te.needsUpdate,Y=Te.type;Le(),$t.autoReset=w,Te.enabled=W,Te.autoUpdate=se,Te.needsUpdate=J,Te.type=Y}function je(w){bn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ft(w){const W=w.target;W.removeEventListener("dispose",ft),xe(W)}function xe(w){tt(w),at.remove(w)}function tt(w){const W=at.get(w).programs;W!==void 0&&(W.forEach(function(se){de.releaseProgram(se)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,se,J,Y,De){W===null&&(W=Ot);const he=Y.isMesh&&Y.matrixWorld.determinant()<0,Ee=Ma(w,W,se,J,Y);Ye.setMaterial(J,he);let Ce=se.index,Fe=1;if(J.wireframe===!0){if(Ce=_e.getWireframeAttribute(se),Ce===void 0)return;Fe=2}const Xe=se.drawRange,He=se.attributes.position;let Je=Xe.start*Fe,vt=(Xe.start+Xe.count)*Fe;De!==null&&(Je=Math.max(Je,De.start*Fe),vt=Math.min(vt,(De.start+De.count)*Fe)),Ce!==null?(Je=Math.max(Je,0),vt=Math.min(vt,Ce.count)):He!=null&&(Je=Math.max(Je,0),vt=Math.min(vt,He.count));const ht=vt-Je;if(ht<0||ht===1/0)return;G.setup(Y,J,Ee,se,Ce);let ot,Ct=ke;if(Ce!==null&&(ot=Q.get(Ce),Ct=Ve,Ct.setIndex(ot)),Y.isMesh)J.wireframe===!0?(Ye.setLineWidth(J.wireframeLinewidth*gt()),Ct.setMode(H.LINES)):Ct.setMode(H.TRIANGLES);else if(Y.isLine){let $e=J.linewidth;$e===void 0&&($e=1),Ye.setLineWidth($e*gt()),Y.isLineSegments?Ct.setMode(H.LINES):Y.isLineLoop?Ct.setMode(H.LINE_LOOP):Ct.setMode(H.LINE_STRIP)}else Y.isPoints?Ct.setMode(H.POINTS):Y.isSprite&&Ct.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)nc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const $e=Y._multiDrawStarts,dt=Y._multiDrawCounts,Ze=Y._multiDrawCount,Dt=Ce?Q.get(Ce).bytesPerElement:1,rn=at.get(J).currentProgram.getUniforms();for(let mt=0;mt<Ze;mt++)rn.setValue(H,"_gl_DrawID",mt),Ct.render($e[mt]/Dt,dt[mt])}else if(Y.isInstancedMesh)Ct.renderInstances(Je,ht,Y.count);else if(se.isInstancedBufferGeometry){const $e=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,dt=Math.min(se.instanceCount,$e);Ct.renderInstances(Je,ht,dt)}else Ct.render(Je,ht)};function Xt(w,W,se){w.transparent===!0&&w.side===va&&w.forceSinglePass===!1?(w.side=_i,w.needsUpdate=!0,Sn(w,W,se),w.side=Ps,w.needsUpdate=!0,Sn(w,W,se),w.side=va):Sn(w,W,se)}this.compile=function(w,W,se=null){se===null&&(se=w),D=st.get(se),D.init(W),V.push(D),se.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),w!==se&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(D.pushLight(Y),Y.castShadow&&D.pushShadow(Y))}),D.setupLights();const J=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const De=Y.material;if(De)if(Array.isArray(De))for(let he=0;he<De.length;he++){const Ee=De[he];Xt(Ee,se,Y),J.add(Ee)}else Xt(De,se,Y),J.add(De)}),D=V.pop(),J},this.compileAsync=function(w,W,se=null){const J=this.compile(w,W,se);return new Promise(Y=>{function De(){if(J.forEach(function(he){at.get(he).currentProgram.isReady()&&J.delete(he)}),J.size===0){Y(w);return}setTimeout(De,10)}St.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let gn=null;function nn(w){gn&&gn(w)}function oi(){Cn.stop()}function Bt(){Cn.start()}const Cn=new r1;Cn.setAnimationLoop(nn),typeof self<"u"&&Cn.setContext(self),this.setAnimationLoop=function(w){gn=w,Oe.setAnimationLoop(w),w===null?Cn.stop():Cn.start()},Oe.addEventListener("sessionstart",oi),Oe.addEventListener("sessionend",Bt),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){bn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(W),W=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,W,R),D=st.get(w,V.length),D.init(W),V.push(D),qe.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),K.setFromProjectionMatrix(qe,ba,W.reversedDepth),Ne=this.localClippingEnabled,ue=Qe.init(this.clippingPlanes,Ne),N=ze.get(w,I.length),N.init(),I.push(N),Oe.enabled===!0&&Oe.isPresenting===!0){const De=O.xr.getDepthSensingMesh();De!==null&&bi(De,W,-1/0,O.sortObjects)}bi(w,W,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(L,ie),ct=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ct&&Re.addToRenderList(N,w),this.info.render.frame++,ue===!0&&Qe.beginShadows();const se=D.state.shadowsArray;Te.render(se,w,W),ue===!0&&Qe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=N.opaque,Y=N.transmissive;if(D.setupLights(),W.isArrayCamera){const De=W.cameras;if(Y.length>0)for(let he=0,Ee=De.length;he<Ee;he++){const Ce=De[he];$i(J,Y,w,Ce)}ct&&Re.render(w);for(let he=0,Ee=De.length;he<Ee;he++){const Ce=De[he];ua(N,w,Ce,Ce.viewport)}}else Y.length>0&&$i(J,Y,w,W),ct&&Re.render(w),ua(N,w,W);R!==null&&C===0&&(pt.updateMultisampleRenderTarget(R),pt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(O,w,W),G.resetDefaultState(),B=-1,Z=null,V.pop(),V.length>0?(D=V[V.length-1],ue===!0&&Qe.setGlobalState(O.clippingPlanes,D.state.camera)):D=null,I.pop(),I.length>0?N=I[I.length-1]:N=null};function bi(w,W,se,J){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)se=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)D.pushLight(w),w.castShadow&&D.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){J&&_t.setFromMatrixPosition(w.matrixWorld).applyMatrix4(qe);const he=Ae.update(w),Ee=w.material;Ee.visible&&N.push(w,he,Ee,se,_t.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const he=Ae.update(w),Ee=w.material;if(J&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),_t.copy(w.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),_t.copy(he.boundingSphere.center)),_t.applyMatrix4(w.matrixWorld).applyMatrix4(qe)),Array.isArray(Ee)){const Ce=he.groups;for(let Fe=0,Xe=Ce.length;Fe<Xe;Fe++){const He=Ce[Fe],Je=Ee[He.materialIndex];Je&&Je.visible&&N.push(w,he,Je,se,_t.z,He)}}else Ee.visible&&N.push(w,he,Ee,se,_t.z,null)}}const De=w.children;for(let he=0,Ee=De.length;he<Ee;he++)bi(De[he],W,se,J)}function ua(w,W,se,J){const{opaque:Y,transmissive:De,transparent:he}=w;D.setupLightsView(se),ue===!0&&Qe.setGlobalState(O.clippingPlanes,se),J&&Ye.viewport(le.copy(J)),Y.length>0&&ii(Y,W,se),De.length>0&&ii(De,W,se),he.length>0&&ii(he,W,se),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function $i(w,W,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;D.state.transmissionRenderTarget[J.id]===void 0&&(D.state.transmissionRenderTarget[J.id]=new vr(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?Io:ya,minFilter:dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const De=D.state.transmissionRenderTarget[J.id],he=J.viewport||le;De.setSize(he.z*O.transmissionResolutionScale,he.w*O.transmissionResolutionScale);const Ee=O.getRenderTarget(),Ce=O.getActiveCubeFace(),Fe=O.getActiveMipmapLevel();O.setRenderTarget(De),O.getClearColor(P),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),ct&&Re.render(se);const Xe=O.toneMapping;O.toneMapping=Us;const He=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),D.setupLightsView(J),ue===!0&&Qe.setGlobalState(O.clippingPlanes,J),ii(w,se,J),pt.updateMultisampleRenderTarget(De),pt.updateRenderTargetMipmap(De),St.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let vt=0,ht=W.length;vt<ht;vt++){const ot=W[vt],{object:Ct,geometry:$e,material:dt,group:Ze}=ot;if(dt.side===va&&Ct.layers.test(J.layers)){const Dt=dt.side;dt.side=_i,dt.needsUpdate=!0,_n(Ct,se,J,$e,dt,Ze),dt.side=Dt,dt.needsUpdate=!0,Je=!0}}Je===!0&&(pt.updateMultisampleRenderTarget(De),pt.updateRenderTargetMipmap(De))}O.setRenderTarget(Ee,Ce,Fe),O.setClearColor(P,X),He!==void 0&&(J.viewport=He),O.toneMapping=Xe}function ii(w,W,se){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,De=w.length;Y<De;Y++){const he=w[Y],{object:Ee,geometry:Ce,group:Fe}=he;let Xe=he.material;Xe.allowOverride===!0&&J!==null&&(Xe=J),Ee.layers.test(se.layers)&&_n(Ee,W,se,Ce,Xe,Fe)}}function _n(w,W,se,J,Y,De){w.onBeforeRender(O,W,se,J,Y,De),w.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(O,W,se,J,w,De),Y.transparent===!0&&Y.side===va&&Y.forceSinglePass===!1?(Y.side=_i,Y.needsUpdate=!0,O.renderBufferDirect(se,W,J,Y,w,De),Y.side=Ps,Y.needsUpdate=!0,O.renderBufferDirect(se,W,J,Y,w,De),Y.side=va):O.renderBufferDirect(se,W,J,Y,w,De),w.onAfterRender(O,W,se,J,Y,De)}function Sn(w,W,se){W.isScene!==!0&&(W=Ot);const J=at.get(w),Y=D.state.lights,De=D.state.shadowsArray,he=Y.state.version,Ee=de.getParameters(w,Y.state,De,W,se),Ce=de.getProgramCacheKey(Ee);let Fe=J.programs;J.environment=w.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(w.isMeshStandardMaterial?M:U).get(w.envMap||J.environment),J.envMapRotation=J.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ft),Fe=new Map,J.programs=Fe);let Xe=Fe.get(Ce);if(Xe!==void 0){if(J.currentProgram===Xe&&J.lightsStateVersion===he)return Qa(w,Ee),Xe}else Ee.uniforms=de.getUniforms(w),w.onBeforeCompile(Ee,O),Xe=de.acquireProgram(Ee,Ce),Fe.set(Ce,Xe),J.uniforms=Ee.uniforms;const He=J.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=Qe.uniform),Qa(w,Ee),J.needsLights=zs(w),J.lightsStateVersion=he,J.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Xe,J.uniformsList=null,Xe}function Zi(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Ju.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Qa(w,W){const se=at.get(w);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Ma(w,W,se,J,Y){W.isScene!==!0&&(W=Ot),pt.resetTextureUnits();const De=W.fog,he=J.isMeshStandardMaterial?W.environment:null,Ee=R===null?O.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Do,Ce=(J.isMeshStandardMaterial?M:U).get(J.envMap||he),Fe=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,Xe=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!se.morphAttributes.position,Je=!!se.morphAttributes.normal,vt=!!se.morphAttributes.color;let ht=Us;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ht=O.toneMapping);const ot=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Ct=ot!==void 0?ot.length:0,$e=at.get(J),dt=D.state.lights;if(ue===!0&&(Ne===!0||w!==Z)){const Ft=w===Z&&J.id===B;Qe.setState(J,w,Ft)}let Ze=!1;J.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==dt.state.version||$e.outputColorSpace!==Ee||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isBatchedMesh&&$e.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&$e.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==Ce||J.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Qe.numPlanes||$e.numIntersection!==Qe.numIntersection)||$e.vertexAlphas!==Fe||$e.vertexTangents!==Xe||$e.morphTargets!==He||$e.morphNormals!==Je||$e.morphColors!==vt||$e.toneMapping!==ht||$e.morphTargetsCount!==Ct)&&(Ze=!0):(Ze=!0,$e.__version=J.version);let Dt=$e.currentProgram;Ze===!0&&(Dt=Sn(J,W,Y));let rn=!1,mt=!1,hn=!1;const wt=Dt.getUniforms(),an=$e.uniforms;if(Ye.useProgram(Dt.program)&&(rn=!0,mt=!0,hn=!0),J.id!==B&&(B=J.id,mt=!0),rn||Z!==w){Ye.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),wt.setValue(H,"projectionMatrix",w.projectionMatrix),wt.setValue(H,"viewMatrix",w.matrixWorldInverse);const on=wt.map.cameraPosition;on!==void 0&&on.setValue(H,We.setFromMatrixPosition(w.matrixWorld)),kt.logarithmicDepthBuffer&&wt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&wt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),Z!==w&&(Z=w,mt=!0,hn=!0)}if(Y.isSkinnedMesh){wt.setOptional(H,Y,"bindMatrix"),wt.setOptional(H,Y,"bindMatrixInverse");const Ft=Y.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),wt.setValue(H,"boneTexture",Ft.boneTexture,pt))}Y.isBatchedMesh&&(wt.setOptional(H,Y,"batchingTexture"),wt.setValue(H,"batchingTexture",Y._matricesTexture,pt),wt.setOptional(H,Y,"batchingIdTexture"),wt.setValue(H,"batchingIdTexture",Y._indirectTexture,pt),wt.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&wt.setValue(H,"batchingColorTexture",Y._colorsTexture,pt));const Ht=se.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&it.update(Y,se,Dt),(mt||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,wt.setValue(H,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(an.envMap.value=Ce,an.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(an.envMapIntensity.value=W.environmentIntensity),an.dfgLUT!==void 0&&(an.dfgLUT.value=Fw()),mt&&(wt.setValue(H,"toneMappingExposure",O.toneMappingExposure),$e.needsLights&&Go(an,hn),De&&J.fog===!0&&nt.refreshFogUniforms(an,De),nt.refreshMaterialUniforms(an,J,pe,fe,D.state.transmissionRenderTarget[w.id]),Ju.upload(H,Zi($e),an,pt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ju.upload(H,Zi($e),an,pt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&wt.setValue(H,"center",Y.center),wt.setValue(H,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(H,"normalMatrix",Y.normalMatrix),wt.setValue(H,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ft=J.uniformsGroups;for(let on=0,Jn=Ft.length;on<Jn;on++){const ai=Ft[on];Ie.update(ai,Dt),Ie.bind(ai,Dt)}}return Dt}function Go(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function zs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,W,se){const J=at.get(w);J.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),at.get(w.texture).__webglTexture=W,at.get(w.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const se=at.get(w);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0};const Pi=H.createFramebuffer();this.setRenderTarget=function(w,W=0,se=0){R=w,ne=W,C=se;let J=!0,Y=null,De=!1,he=!1;if(w){const Ce=at.get(w);if(Ce.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(H.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)pt.setupRenderTarget(w);else if(Ce.__hasExternalTextures)pt.rebindTextures(w,at.get(w.texture).__webglTexture,at.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const He=w.depthTexture;if(Ce.__boundDepthTexture!==He){if(He!==null&&at.has(He)&&(w.width!==He.image.width||w.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(w)}}const Fe=w.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(he=!0);const Xe=at.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?Y=Xe[W][se]:Y=Xe[W],De=!0):w.samples>0&&pt.useMultisampledRTT(w)===!1?Y=at.get(w).__webglMultisampledFramebuffer:Array.isArray(Xe)?Y=Xe[se]:Y=Xe,le.copy(w.viewport),ge.copy(w.scissor),$=w.scissorTest}else le.copy(Se).multiplyScalar(pe).floor(),ge.copy(Me).multiplyScalar(pe).floor(),$=Ue;if(se!==0&&(Y=Pi),Ye.bindFramebuffer(H.FRAMEBUFFER,Y)&&J&&Ye.drawBuffers(w,Y),Ye.viewport(le),Ye.scissor(ge),Ye.setScissorTest($),De){const Ce=at.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ce.__webglTexture,se)}else if(he){const Ce=W;for(let Fe=0;Fe<w.textures.length;Fe++){const Xe=at.get(w.textures[Fe]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Fe,Xe.__webglTexture,se,Ce)}}else if(w!==null&&se!==0){const Ce=at.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ce.__webglTexture,se)}B=-1},this.readRenderTargetPixels=function(w,W,se,J,Y,De,he,Ee=0){if(!(w&&w.isWebGLRenderTarget)){bn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he]),Ce){Ye.bindFramebuffer(H.FRAMEBUFFER,Ce);try{const Fe=w.textures[Ee],Xe=Fe.format,He=Fe.type;if(!kt.textureFormatReadable(Xe)){bn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(He)){bn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-J&&se>=0&&se<=w.height-Y&&(w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ee),H.readPixels(W,se,J,Y,ut.convert(Xe),ut.convert(He),De))}finally{const Fe=R!==null?at.get(R).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,W,se,J,Y,De,he,Ee=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=at.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&he!==void 0&&(Ce=Ce[he]),Ce)if(W>=0&&W<=w.width-J&&se>=0&&se<=w.height-Y){Ye.bindFramebuffer(H.FRAMEBUFFER,Ce);const Fe=w.textures[Ee],Xe=Fe.format,He=Fe.type;if(!kt.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Je),H.bufferData(H.PIXEL_PACK_BUFFER,De.byteLength,H.STREAM_READ),w.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ee),H.readPixels(W,se,J,Y,ut.convert(Xe),ut.convert(He),0);const vt=R!==null?at.get(R).__webglFramebuffer:null;Ye.bindFramebuffer(H.FRAMEBUFFER,vt);const ht=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await a3(H,ht,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Je),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,De),H.deleteBuffer(Je),H.deleteSync(ht),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,se=0){const J=Math.pow(2,-se),Y=Math.floor(w.image.width*J),De=Math.floor(w.image.height*J),he=W!==null?W.x:0,Ee=W!==null?W.y:0;pt.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,se,0,0,he,Ee,Y,De),Ye.unbindTexture()};const zi=H.createFramebuffer(),fa=H.createFramebuffer();this.copyTextureToTexture=function(w,W,se=null,J=null,Y=0,De=null){De===null&&(Y!==0?(nc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Y,Y=0):De=0);let he,Ee,Ce,Fe,Xe,He,Je,vt,ht;const ot=w.isCompressedTexture?w.mipmaps[De]:w.image;if(se!==null)he=se.max.x-se.min.x,Ee=se.max.y-se.min.y,Ce=se.isBox3?se.max.z-se.min.z:1,Fe=se.min.x,Xe=se.min.y,He=se.isBox3?se.min.z:0;else{const Ht=Math.pow(2,-Y);he=Math.floor(ot.width*Ht),Ee=Math.floor(ot.height*Ht),w.isDataArrayTexture?Ce=ot.depth:w.isData3DTexture?Ce=Math.floor(ot.depth*Ht):Ce=1,Fe=0,Xe=0,He=0}J!==null?(Je=J.x,vt=J.y,ht=J.z):(Je=0,vt=0,ht=0);const Ct=ut.convert(W.format),$e=ut.convert(W.type);let dt;W.isData3DTexture?(pt.setTexture3D(W,0),dt=H.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(pt.setTexture2DArray(W,0),dt=H.TEXTURE_2D_ARRAY):(pt.setTexture2D(W,0),dt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,W.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,W.unpackAlignment);const Ze=H.getParameter(H.UNPACK_ROW_LENGTH),Dt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),rn=H.getParameter(H.UNPACK_SKIP_PIXELS),mt=H.getParameter(H.UNPACK_SKIP_ROWS),hn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ot.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ot.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Fe),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,He);const wt=w.isDataArrayTexture||w.isData3DTexture,an=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const Ht=at.get(w),Ft=at.get(W),on=at.get(Ht.__renderTarget),Jn=at.get(Ft.__renderTarget);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,on.__webglFramebuffer),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let ai=0;ai<Ce;ai++)wt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,at.get(w).__webglTexture,Y,He+ai),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,at.get(W).__webglTexture,De,ht+ai)),H.blitFramebuffer(Fe,Xe,he,Ee,Je,vt,he,Ee,H.DEPTH_BUFFER_BIT,H.NEAREST);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||at.has(w)){const Ht=at.get(w),Ft=at.get(W);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,zi),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,fa);for(let on=0;on<Ce;on++)wt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ht.__webglTexture,Y,He+on):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ht.__webglTexture,Y),an?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ft.__webglTexture,De,ht+on):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ft.__webglTexture,De),Y!==0?H.blitFramebuffer(Fe,Xe,he,Ee,Je,vt,he,Ee,H.COLOR_BUFFER_BIT,H.NEAREST):an?H.copyTexSubImage3D(dt,De,Je,vt,ht+on,Fe,Xe,he,Ee):H.copyTexSubImage2D(dt,De,Je,vt,Fe,Xe,he,Ee);Ye.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else an?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(dt,De,Je,vt,ht,he,Ee,Ce,Ct,$e,ot.data):W.isCompressedArrayTexture?H.compressedTexSubImage3D(dt,De,Je,vt,ht,he,Ee,Ce,Ct,ot.data):H.texSubImage3D(dt,De,Je,vt,ht,he,Ee,Ce,Ct,$e,ot):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,De,Je,vt,he,Ee,Ct,$e,ot.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,De,Je,vt,ot.width,ot.height,Ct,ot.data):H.texSubImage2D(H.TEXTURE_2D,De,Je,vt,he,Ee,Ct,$e,ot);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ze),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Dt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,rn),H.pixelStorei(H.UNPACK_SKIP_ROWS,mt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,hn),De===0&&W.generateMipmaps&&H.generateMipmap(dt),Ye.unbindTexture()},this.initRenderTarget=function(w){at.get(w).__webglFramebuffer===void 0&&pt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?pt.setTextureCube(w,0):w.isData3DTexture?pt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?pt.setTexture2DArray(w,0):pt.setTexture2D(w,0),Ye.unbindTexture()},this.resetState=function(){ne=0,C=0,R=null,Ye.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),n.unpackColorSpace=jt._getUnpackColorSpace()}}const Hw="/MarcoinSF/assets/2021-10-31-P_JYddXs.JPG",Gw=Object.freeze(Object.defineProperty({__proto__:null,default:Hw},Symbol.toStringTag,{value:"Module"})),Vw="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",jw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),kw="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",Xw=Object.freeze(Object.defineProperty({__proto__:null,default:kw},Symbol.toStringTag,{value:"Module"})),Ww="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",qw=Object.freeze(Object.defineProperty({__proto__:null,default:Ww},Symbol.toStringTag,{value:"Module"})),Yw="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",$w=Object.freeze(Object.defineProperty({__proto__:null,default:Yw},Symbol.toStringTag,{value:"Module"})),Zw="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Qw="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Qw},Symbol.toStringTag,{value:"Module"})),eR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",tR=Object.freeze(Object.defineProperty({__proto__:null,default:eR},Symbol.toStringTag,{value:"Module"})),nR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",iR=Object.freeze(Object.defineProperty({__proto__:null,default:nR},Symbol.toStringTag,{value:"Module"})),aR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",sR=Object.freeze(Object.defineProperty({__proto__:null,default:aR},Symbol.toStringTag,{value:"Module"})),rR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",oR=Object.freeze(Object.defineProperty({__proto__:null,default:rR},Symbol.toStringTag,{value:"Module"})),lR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",cR=Object.freeze(Object.defineProperty({__proto__:null,default:lR},Symbol.toStringTag,{value:"Module"})),uR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",fR=Object.freeze(Object.defineProperty({__proto__:null,default:uR},Symbol.toStringTag,{value:"Module"})),dR="/MarcoinSF/assets/2024-05-14-Dirs4CkQ.jpeg",hR=Object.freeze(Object.defineProperty({__proto__:null,default:dR},Symbol.toStringTag,{value:"Module"})),pR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",mR=Object.freeze(Object.defineProperty({__proto__:null,default:pR},Symbol.toStringTag,{value:"Module"})),gR="/MarcoinSF/assets/2024-07-28-DoG5eYmo.mp4",_R=Object.freeze(Object.defineProperty({__proto__:null,default:gR},Symbol.toStringTag,{value:"Module"})),xR="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",vR=Object.freeze(Object.defineProperty({__proto__:null,default:xR},Symbol.toStringTag,{value:"Module"})),bR="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",yR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),SR="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",MR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),ER="/MarcoinSF/assets/2024-08-23-1-zHKGYiam.jpeg",TR=Object.freeze(Object.defineProperty({__proto__:null,default:ER},Symbol.toStringTag,{value:"Module"})),AR="/MarcoinSF/assets/2024-08-23-3-DZL7AOVs.jpeg",wR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),RR="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",CR=Object.freeze(Object.defineProperty({__proto__:null,default:RR},Symbol.toStringTag,{value:"Module"})),DR="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",LR=Object.freeze(Object.defineProperty({__proto__:null,default:DR},Symbol.toStringTag,{value:"Module"})),UR="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",OR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),NR="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",PR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),zR="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",IR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),FR="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",BR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),HR="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",GR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),VR="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",jR=Object.freeze(Object.defineProperty({__proto__:null,default:VR},Symbol.toStringTag,{value:"Module"})),kR="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",XR=Object.freeze(Object.defineProperty({__proto__:null,default:kR},Symbol.toStringTag,{value:"Module"})),WR="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",qR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"})),YR="/MarcoinSF/assets/2024-09-25-BtbmW8ns.jpeg",$R=Object.freeze(Object.defineProperty({__proto__:null,default:YR},Symbol.toStringTag,{value:"Module"})),ZR="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",KR=Object.freeze(Object.defineProperty({__proto__:null,default:ZR},Symbol.toStringTag,{value:"Module"})),QR="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",JR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),eC="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",tC=Object.freeze(Object.defineProperty({__proto__:null,default:eC},Symbol.toStringTag,{value:"Module"})),nC="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",iC=Object.freeze(Object.defineProperty({__proto__:null,default:nC},Symbol.toStringTag,{value:"Module"})),aC="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",sC=Object.freeze(Object.defineProperty({__proto__:null,default:aC},Symbol.toStringTag,{value:"Module"})),rC="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",oC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"})),lC="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",cC=Object.freeze(Object.defineProperty({__proto__:null,default:lC},Symbol.toStringTag,{value:"Module"})),uC="/MarcoinSF/assets/2024-10-20-3nGD_4Ej.mp4",fC=Object.freeze(Object.defineProperty({__proto__:null,default:uC},Symbol.toStringTag,{value:"Module"})),dC="/MarcoinSF/assets/2024-10-22-Bfi-n3YD.JPG",hC=Object.freeze(Object.defineProperty({__proto__:null,default:dC},Symbol.toStringTag,{value:"Module"})),pC="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",mC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"})),gC="/MarcoinSF/assets/2024-11-01-B0vPq0V1.mp4",_C=Object.freeze(Object.defineProperty({__proto__:null,default:gC},Symbol.toStringTag,{value:"Module"})),xC="/MarcoinSF/assets/2024-11-03-C4k0HJqk.mp4",vC=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),bC="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",yC=Object.freeze(Object.defineProperty({__proto__:null,default:bC},Symbol.toStringTag,{value:"Module"})),SC="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",MC=Object.freeze(Object.defineProperty({__proto__:null,default:SC},Symbol.toStringTag,{value:"Module"})),EC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",TC=Object.freeze(Object.defineProperty({__proto__:null,default:EC},Symbol.toStringTag,{value:"Module"})),AC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",wC=Object.freeze(Object.defineProperty({__proto__:null,default:AC},Symbol.toStringTag,{value:"Module"})),RC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",CC=Object.freeze(Object.defineProperty({__proto__:null,default:RC},Symbol.toStringTag,{value:"Module"})),DC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",LC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),UC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",OC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),NC="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",PC=Object.freeze(Object.defineProperty({__proto__:null,default:NC},Symbol.toStringTag,{value:"Module"})),zC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",IC=Object.freeze(Object.defineProperty({__proto__:null,default:zC},Symbol.toStringTag,{value:"Module"})),FC="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",BC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),HC="/MarcoinSF/assets/2025-02-26-CsXnUoPc.jpeg",GC=Object.freeze(Object.defineProperty({__proto__:null,default:HC},Symbol.toStringTag,{value:"Module"})),VC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",jC=Object.freeze(Object.defineProperty({__proto__:null,default:VC},Symbol.toStringTag,{value:"Module"})),kC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",XC=Object.freeze(Object.defineProperty({__proto__:null,default:kC},Symbol.toStringTag,{value:"Module"})),WC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",qC=Object.freeze(Object.defineProperty({__proto__:null,default:WC},Symbol.toStringTag,{value:"Module"})),YC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",$C=Object.freeze(Object.defineProperty({__proto__:null,default:YC},Symbol.toStringTag,{value:"Module"})),ZC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",KC=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),QC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",JC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),e4="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",t4=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),n4="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",i4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),a4="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",s4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),r4="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",o4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),l4="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",c4=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),u4="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",f4=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),d4="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",h4=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),p4="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",m4=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),g4="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",_4=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),x4="/MarcoinSF/assets/2025-06-09-xDmcrKNe.mp4",v4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),b4="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",y4=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),S4="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",M4=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),E4="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",T4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),A4="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",w4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),R4="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",C4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),D4="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",L4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),U4="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",O4=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),N4="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",P4=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),z4="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",I4=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),F4="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",B4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),H4="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",G4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),V4="/MarcoinSF/assets/2025-08-16-BOeyTKzo.mp4",j4=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),k4="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",X4=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),W4="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",q4=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),Y4="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",$4=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),Z4="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",K4=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),Q4="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",J4=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),eD="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",iD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),aD="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",sD=Object.freeze(Object.defineProperty({__proto__:null,default:aD},Symbol.toStringTag,{value:"Module"})),rD="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",oD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),lD="/MarcoinSF/assets/2025-11-04-CxajqofK.jpeg",cD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),uD="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",fD=Object.freeze(Object.defineProperty({__proto__:null,default:uD},Symbol.toStringTag,{value:"Module"})),dD="/MarcoinSF/assets/2025-11-09-B-v5Ulwz.mp4",hD=Object.freeze(Object.defineProperty({__proto__:null,default:dD},Symbol.toStringTag,{value:"Module"})),pD="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",mD=Object.freeze(Object.defineProperty({__proto__:null,default:pD},Symbol.toStringTag,{value:"Module"})),gD="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",_D=Object.freeze(Object.defineProperty({__proto__:null,default:gD},Symbol.toStringTag,{value:"Module"})),xD="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",vD=Object.freeze(Object.defineProperty({__proto__:null,default:xD},Symbol.toStringTag,{value:"Module"})),bD="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",yD=Object.freeze(Object.defineProperty({__proto__:null,default:bD},Symbol.toStringTag,{value:"Module"})),SD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",MD=Object.freeze(Object.defineProperty({__proto__:null,default:SD},Symbol.toStringTag,{value:"Module"})),ED="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",TD=Object.freeze(Object.defineProperty({__proto__:null,default:ED},Symbol.toStringTag,{value:"Module"})),AD="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",wD=Object.freeze(Object.defineProperty({__proto__:null,default:AD},Symbol.toStringTag,{value:"Module"})),RD="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",CD=Object.freeze(Object.defineProperty({__proto__:null,default:RD},Symbol.toStringTag,{value:"Module"})),f1="/MarcoinSF/assets/Ignore_2024-08-23-5-CqrWweLB.png",DD=Object.freeze(Object.defineProperty({__proto__:null,default:f1},Symbol.toStringTag,{value:"Module"})),d1="/MarcoinSF/assets/Ignore_2025-05-10-06-CBdoQwmN.png",LD=Object.freeze(Object.defineProperty({__proto__:null,default:d1},Symbol.toStringTag,{value:"Module"})),UD="/MarcoinSF/assets/BeggingBuddha-CATTcvPs.mp3",OD="/MarcoinSF/assets/FujiMt-CkmfackC.mp3",ND="/MarcoinSF/assets/Handbeaten-fishball-55E7UMtG.mp3",PD="/MarcoinSF/assets/LouMei-B79Jap0g.mp3",E0=[{title:"卤味",src:PD},{title:"手打鱼丸",src:ND},{title:"Begging Buddha",src:UD},{title:"Fuji Mt",src:OD}],zD=Object.assign({"./assets/media/2021-10-31.JPG":Gw,"./assets/media/2021-10-31.jpeg":jw,"./assets/media/2021-12-10.jpg":Xw,"./assets/media/2022-05-13.JPG":qw,"./assets/media/2022-06-13.jpeg":$w,"./assets/media/2022-07-06-2.jpeg":Kw,"./assets/media/2022-08-14.JPG":Jw,"./assets/media/2022-10-29 Large.jpeg":tR,"./assets/media/2023-01-01.jpeg":iR,"./assets/media/2023-03-01.jpeg":sR,"./assets/media/2024-03-09-1.jpeg":oR,"./assets/media/2024-03-09.jpeg":cR,"./assets/media/2024-05-05.jpeg":fR,"./assets/media/2024-05-14.jpeg":hR,"./assets/media/2024-07-21.mp4":mR,"./assets/media/2024-07-28.mp4":_R,"./assets/media/2024-07-31.jpeg":vR,"./assets/media/2024-08-10-1.mp4":yR,"./assets/media/2024-08-10.jpeg":MR,"./assets/media/2024-08-23-1.jpeg":TR,"./assets/media/2024-08-23-3.jpeg":wR,"./assets/media/2024-08-23-4.jpg":CR,"./assets/media/2024-08-23.jpg":LR,"./assets/media/2024-08-23.mp4":OR,"./assets/media/2024-08-25.mp4":PR,"./assets/media/2024-09-01.jpeg":IR,"./assets/media/2024-09-02.jpeg":BR,"./assets/media/2024-09-08.jpeg":GR,"./assets/media/2024-09-19-02.JPG":jR,"./assets/media/2024-09-19-03.mp4":XR,"./assets/media/2024-09-19.jpg":qR,"./assets/media/2024-09-25.jpeg":$R,"./assets/media/2024-10-15.jpeg":KR,"./assets/media/2024-10-20-1.jpeg":JR,"./assets/media/2024-10-20-2.jpeg":tC,"./assets/media/2024-10-20-3.jpeg":iC,"./assets/media/2024-10-20-4.mp4":sC,"./assets/media/2024-10-20-7 Large.jpeg":oC,"./assets/media/2024-10-20.jpeg":cC,"./assets/media/2024-10-20.mp4":fC,"./assets/media/2024-10-22.JPG":hC,"./assets/media/2024-10-26.jpeg":mC,"./assets/media/2024-11-01.mp4":_C,"./assets/media/2024-11-03.mp4":vC,"./assets/media/2024-11-08.jpeg":yC,"./assets/media/2024-11-17-1.jpeg":MC,"./assets/media/2024-11-17-2.jpeg":TC,"./assets/media/2024-11-17-2.mp4":wC,"./assets/media/2024-11-17-3.jpg":CC,"./assets/media/2024-11-17.jpeg":LC,"./assets/media/2024-12-07.jpeg":OC,"./assets/media/2024-12-11.JPG":PC,"./assets/media/2025-02-12-1.mp4":IC,"./assets/media/2025-02-12.jpeg":BC,"./assets/media/2025-02-26.jpeg":GC,"./assets/media/2025-03-07.jpeg":jC,"./assets/media/2025-03-08-1.jpeg":XC,"./assets/media/2025-03-08.jpeg":qC,"./assets/media/2025-03-08.mp4":$C,"./assets/media/2025-03-12.jpeg":KC,"./assets/media/2025-04-20-02.jpeg":JC,"./assets/media/2025-04-20.jpeg":t4,"./assets/media/2025-04-24.jpeg":i4,"./assets/media/2025-05-09.jpeg":s4,"./assets/media/2025-05-10-01.jpeg":o4,"./assets/media/2025-05-10-03.jpeg":c4,"./assets/media/2025-05-10-04.jpeg":f4,"./assets/media/2025-05-10-05.jpg":h4,"./assets/media/2025-05-23.mp4":m4,"./assets/media/2025-05-30.jpeg":_4,"./assets/media/2025-06-09.mp4":v4,"./assets/media/2025-06-16.jpg":y4,"./assets/media/2025-06-17.jpeg":M4,"./assets/media/2025-06-19.jpeg":T4,"./assets/media/2025-06-20.jpeg":w4,"./assets/media/2025-06-29.JPG":C4,"./assets/media/2025-07-02.jpeg":L4,"./assets/media/2025-07-04.jpeg":O4,"./assets/media/2025-07-19.jpg":P4,"./assets/media/2025-07-23.jpeg":I4,"./assets/media/2025-08-02.jpeg":B4,"./assets/media/2025-08-15.jpeg":G4,"./assets/media/2025-08-16.mp4":j4,"./assets/media/2025-10-04.mp4":X4,"./assets/media/2025-10-08-2.jpeg":q4,"./assets/media/2025-10-08.jpeg":$4,"./assets/media/2025-10-09.JPG":K4,"./assets/media/2025-10-10.jpeg":J4,"./assets/media/2025-10-11.jpeg":tD,"./assets/media/2025-10-31-2.jpeg":iD,"./assets/media/2025-10-31-3.mp4":sD,"./assets/media/2025-10-31.jpeg":oD,"./assets/media/2025-11-04.jpeg":cD,"./assets/media/2025-11-09.jpeg":fD,"./assets/media/2025-11-09.mp4":hD,"./assets/media/2025-11-29.jpeg":mD,"./assets/media/2025-12-03.JPG":_D,"./assets/media/2025-12-03.jpeg":vD,"./assets/media/2025-12-04-02.jpeg":yD,"./assets/media/2025-12-04-10.mp4":MD,"./assets/media/2025-12-04.jpeg":TD,"./assets/media/2025-12-05-01.mp4":wD,"./assets/media/2025-12-05-02.mp4":CD,"./assets/media/Ignore_2024-08-23-5.png":DD,"./assets/media/Ignore_2025-05-10-06.png":LD}),Ap=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},ID="ignore_",FD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},BD={"2023-03-01.jpeg":"399开张","2024-10-20-1.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-10-31.jpeg":"Halloween","2025-12-04.jpeg":"Last Day"},rm=Object.entries(zD).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(ID))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=Ap(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>r!==null);rm.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:d1,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});rm.push({filename:"2024-10-20.mp4",type:"embed",sortKey:"2024-10-20",dateOverride:"2024-10-20",src:"https://player.vimeo.com/video/1144210034",previewSrc:f1,embedUrl:"https://player.vimeo.com/video/1144210034",titleOverride:"2024-10-20",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const xa=rm.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,timelineLabel:r.timelineLabel||BD[r.filename],title:r.dateOverride||Ap(r.filename),description:r.description??FD[r.filename]??"",date:r.dateOverride||Ap(r.filename),filename:r.filename})),wp={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},T0="/MarcoinSF/assets/cover-BrcYv754.mp4",h2="/MarcoinSF/assets/Balloon-C59jG2U_.wav",HD="/MarcoinSF/assets/Typing-K6XFAZpo.mp3",GD="/MarcoinSF/assets/curtain-D_OCfkhx.wav",h1=r=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(r)}%3C/text%3E%3C/svg%3E") 16 16, auto`,VD=h1("❤️"),jD=h1("🌸"),kD=({onStartTransition:r})=>{const[e,n]=Be.useState(0),[a,o]=Be.useState(!1),[c,u]=Be.useState(!1),[d,m]=Be.useState(null),[p,g]=Be.useState([]),_="Chef of SF's Finest Egg Fried Rice 👨🏽‍🍳, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys 🐵, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[x,y]=Be.useState(""),E=Be.useRef(0),A=Be.useRef(!1),S=Be.useRef(null),v=Be.useRef(null),N=Be.useRef(null),D=Be.useRef(!1),I=($,P,X)=>{E.current+=1;const k=E.current;g(fe=>[...fe,{id:k,x:$,y:P,scale:X}])};Be.useEffect(()=>{let $=0;const P=xa.slice(0,4),X=[{src:T0,previewSrc:T0,type:"video"},...xa.filter(Me=>Me.type==="image"),...P],k=new Set,fe=X.filter(Me=>{const Ue=Me.previewSrc||Me.src;return k.has(Ue)?!1:(k.add(Ue),!0)}),pe=fe.length||1,L=Me=>new Promise(Ue=>{const K=new Image;K.src=Me,K.onload=()=>Ue(),K.onerror=()=>Ue()}),ie=async()=>{const Me=fe.map(Ue=>L(Ue.previewSrc||Ue.src).then(()=>{$++,n(Math.floor($/pe*100))}));await Promise.all(Me),setTimeout(()=>o(!0),300)},Se=setTimeout(()=>{n(100),o(!0)},6e3);ie().finally(()=>clearTimeout(Se))},[]),Be.useEffect(()=>{var k;if(!v.current){const fe=new Audio(HD);fe.loop=!0,fe.volume=.4,v.current=fe}(k=v.current)==null||k.play().catch(()=>{});let $=0;const X=setInterval(()=>{var fe;$+=1,y(_.slice(0,$)),$>=_.length&&((fe=v.current)==null||fe.pause(),v.current&&(v.current.currentTime=0),clearInterval(X))},30);return()=>{var fe;clearInterval(X),(fe=v.current)==null||fe.pause(),v.current&&(v.current.currentTime=0)}},[_]);const V=()=>{var $;u(!0),D.current=!0,A.current=!1,m(null),g(P=>P.map(X=>({...X,fading:!0}))),setTimeout(()=>g([]),250),S.current&&(S.current.pause(),S.current.currentTime=0),N.current||(N.current=new Audio(GD)),($=N.current)==null||$.play().catch(()=>{}),setTimeout(()=>{r()},100)},O=.6,z=3,ne=2,C=4;Be.useEffect(()=>{let $=0,P=performance.now();const X=k=>{const fe=(k-P)/1e3;P=k,m(pe=>{if(!pe)return null;let L=pe.scale;return pe.growing?(L=Math.min(z,L+ne*fe),L>=z&&S.current?(S.current.pause(),I(pe.x,pe.y,L),A.current=!1,{...pe,growing:!1,scale:L}):{...pe,scale:L}):(L=Math.max(O,L-C*fe),L<=O+.01?null:{...pe,scale:L})}),$=requestAnimationFrame(X)};return $=requestAnimationFrame(X),()=>cancelAnimationFrame($)},[]);const R=($,P)=>{E.current+=1;const X=E.current;m({id:X,x:$,y:P,scale:O,growing:!0})},B=()=>{A.current=!1,m($=>$&&$.growing?(I($.x,$.y,$.scale),{...$,growing:!1}):$),S.current&&(S.current.pause(),S.current.currentTime=0)},Z=$=>{var fe;if(c||D.current)return;const P=$.currentTarget.getBoundingClientRect(),X=$.clientX-P.left,k=$.clientY-P.top;if(A.current=!0,!S.current){const pe=new Audio(h2);pe.loop=!0,pe.playbackRate=1.2,S.current=pe}(fe=S.current)==null||fe.play().catch(()=>{}),R(X,k)},le=()=>{B()},ge=()=>{B()};return e<100&&!a?re.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[re.jsx("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:re.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}})}),re.jsxs("div",{className:"mt-2 text-xs font-bold text-gray-400 font-mono",children:[e,"%"]}),re.jsx("p",{className:"mt-1 font-bold text-gray-400 animate-pulse text-sm",children:"Loading Gallery..."})]}):re.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:Z,onMouseUp:le,onMouseLeave:ge,onTouchStart:$=>{var pe;if($.target.closest("wired-button")||c||D.current)return;const P=$.touches[0],X=$.currentTarget.getBoundingClientRect(),k=P.clientX-X.left,fe=P.clientY-X.top;if(A.current=!0,!S.current){const L=new Audio(h2);L.loop=!0,L.playbackRate=1.2,S.current=L}(pe=S.current)==null||pe.play().catch(()=>{}),R(k,fe)},onTouchEnd:()=>{B()},onTouchMove:$=>A.current&&$.preventDefault(),style:{cursor:VD},children:[re.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map($=>re.jsx("div",{style:{position:"absolute",left:$.x,top:$.y,transform:`translate(-50%, -50%) scale(${$.scale})`,opacity:$.fading?0:1,transition:$.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},$.id)),d&&re.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),re.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out 
            ${c?"opacity-0 scale-95":"md:hover:scale-105 active:scale-100"}
        `,children:re.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[re.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[re.jsx("video",{src:T0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),re.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),re.jsx("h1",{className:"text-3xl text-center font-bold mb-1 select-none pointer-events-none",children:"The Secret Life of Warco Mu"}),re.jsx("p",{className:"text-gray-500 text-sm text-center mb-6 select-none pointer-events-none",children:"2021.8-2025.12"}),re.jsxs("p",{className:"text-gray-800 text-m text-center mb-6 select-none pointer-events-none",children:[x,x.length<_.length&&re.jsx("span",{className:"animate-pulse",children:"|"})]}),re.jsx("wired-button",{elevation:2,onClick:V,className:"bg-black text-white font-bold tracking-widest cursor-pointer select-none",style:{cursor:jD},children:"PAY RESPECT"})]})})]})},XD=({onCovered:r,onComplete:e})=>{const[n,a]=Be.useState([]),o=Be.useRef("raining"),c=Be.useRef(0),u=Be.useRef(null),d=40,m=1,p=1.5,g=80;Be.useEffect(()=>{const x=window.innerWidth,y=Math.ceil(x/d),E=()=>{if(o.current==="clearing")return;const v=[];for(let N=0;N<y;N++)v.push({id:c.current++,colIndex:N,left:N/y*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(N=>[...N,...v])};u.current=window.setInterval(E,g);const A=m*1e3+200,S=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},A);return()=>{u.current&&clearInterval(u.current),clearTimeout(S)}},[r]);const _=x=>{a(y=>{const E=y.filter(A=>A.id!==x);return o.current==="clearing"&&E.length===0&&setTimeout(e,0),E})};return re.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[re.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>re.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},WD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",qD={sky:11129335,base:15919305,wall:16314853,roof:16747678,shadow:10325391,accent:6740456},p1={startZ:40},YD=(r,e=-200)=>{const n=new Ds,a=[51283,2712319,16728193,16739584,16766464,58879,6422762],o=p1.startZ+20,c=e-50,u=Math.abs(o-c),d=o+50,m=c-200,p=Math.abs(d-m),_=Math.min(1e5,Math.max(5e4,Math.floor(p*50))),x=new Oi,y=new Float32Array(_*3),E=new Float32Array(_),A=new Float32Array(_);for(let B=0;B<_;B++)y[B*3]=(Math.random()-.5)*600,y[B*3+1]=(Math.random()-.5)*400,y[B*3+2]=d-Math.random()*p,E[B]=Math.random(),A[B]=Math.random()*100;x.setAttribute("position",new Ui(y,3)),x.setAttribute("aSize",new Ui(E,1)),x.setAttribute("aSeed",new Ui(A,1));const S=new Sa({uniforms:{uTime:{value:0},uColor:{value:new Et(16777215)}},vertexShader:`
        uniform float uTime;
        attribute float aSize;
        attribute float aSeed;
        void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
            
            // TWINKLE: Sine wave based on time + random seed
            float twinkle = 0.5 + 0.5 * sin(uTime * 2.0 + aSeed);
            
            // Size attenuation + twinkle
            gl_PointSize = (10.0 * aSize * twinkle) * (100.0 / -mvPosition.z);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        void main() {
           // Soft circle shape
           float r = distance(gl_PointCoord, vec2(0.5));
           if (r > 0.5) discard;
           
           // Glow falloff
           float alpha = 1.0 - (r * 2.0);
           alpha = pow(alpha, 1.5);

           gl_FragColor = vec4(uColor, alpha);
        }
      `,transparent:!0,depthWrite:!1,blending:Gl}),v=new I3(x,S);n.add(v);const N=750,D=new Oi,I=[],V=[],O=()=>{const B=20+Math.random()*80,Z=Math.random()*Math.PI*2;return{x:Math.cos(Z)*B,y:Math.sin(Z)*B,angle:Z}};for(let B=0;B<N;B++){const{x:Z,y:le}=O(),ge=o-Math.random()*u,$=20+Math.random()*100,P=ge-$;I.push(Z,le,ge),I.push(Z,le,P);const X=a[Math.floor(Math.random()*a.length)],k=new Et(X);V.push(k.r,k.g,k.b),V.push(k.r,k.g,k.b)}D.setAttribute("position",new oa(I,3)),D.setAttribute("color",new oa(V,3));const z=new im({vertexColors:!0,opacity:.6,transparent:!0,blending:Gl}),ne=new n1(D,z);n.add(ne);const C=60;for(let B=0;B<C;B++){const{x:Z,y:le}=O(),ge=o-Math.random()*u,$=40+Math.random()*120,P=.5+Math.random()*2.5,X=new aa(P,$),k=a[Math.floor(Math.random()*a.length)],fe=new bo({color:k,side:va,transparent:!0,opacity:.6,blending:Gl}),pe=new gi(X,fe);pe.position.set(Z,le,ge-$/2),pe.rotation.x=Math.PI/2,n.add(pe)}return r.add(n),{group:n,palette:qD,update:B=>{S.uniforms.uTime.value=B*.001}}},qt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:p1.startZ,FADE_START:15,FADE_END:50,HIGHLIGHT_RANGE:4,BGM_FADE_ZONE:20,BGM_SILENCE_RADIUS:5,MAX_SCROLL_SPEED:20,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4,SKY_STOPS:[{pos:0,color:new Et(15857116)},{pos:.2,color:new Et(12770290)},{pos:.5,color:new Et(14923423)},{pos:.75,color:new Et(4018605)},{pos:.95,color:new Et(328976)}]},p2=r=>{const e=r?1.9:qt.X_OFFSET;return xa.map((n,a)=>{let o=3.2,c=2.4;const u=wp[n.filename];if(u){const g=u.aspectRatio;g>1?(o=Math.min(u.width,3.2),c=o/g,c>3.2&&(c=3.2,o=c*g)):(c=Math.min(u.height,3.2),o=c*g,o>3.2&&(o=3.2,c=o/g))}return a===xa.length-1?{...n,z:-a*qt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:o,initialHeight:c}:{...n,z:-a*qt.Z_SPACING,x:(Math.random()-.5)*2+(a%2===0?-e:e),y:(Math.random()-.5)*.5,rotationY:(a%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:o,initialHeight:c}})},m2=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,y,E)=>{const A=y-_,S=E-x,v=Math.sqrt(A*A+S*S),N=A/v,D=S/v,I=_-N*(Math.random()*m),V=x-D*(Math.random()*m),O=y+N*(Math.random()*m),z=E+D*(Math.random()*m);a.push(new oe(I,V,0));const ne=(I+O)/2+(Math.random()-.5)*d,C=(V+z)/2+(Math.random()-.5)*d;a.push(new oe(ne,C,0)),a.push(new oe(O,z,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new Oi().setFromPoints(a)},$D=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new B3(e);return a.minFilter=Qn,a},ZD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("path",{d:"M9 18V5l12-2v13"}),re.jsx("circle",{cx:"6",cy:"18",r:"3"}),re.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),KD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"3"}),re.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),QD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"10"}),re.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),re.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),g2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),re.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),_2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),re.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),JD=()=>re.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:re.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),e5=()=>re.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[re.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),re.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),A0=()=>re.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),t5=()=>{var je,ft;const r=Be.useRef(null),e=Be.useRef(null),[n,a]=Be.useState(()=>p2(window.innerWidth<768));Be.useEffect(()=>{const xe=()=>{const tt=window.innerWidth<768;a(p2(tt))};return window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const[o,c]=Be.useState(!1);Be.useEffect(()=>{const xe=()=>c(window.innerWidth<768);return xe(),window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const[u,d]=Be.useState(null),[m,p]=Be.useState(!1),[g,_]=Be.useState(!1),[x,y]=Be.useState(!1),[E,A]=Be.useState(null),S=Be.useRef(null),[v,N]=Be.useState(!1),[D,I]=Be.useState(!0),[V,O]=Be.useState(0),[z,ne]=Be.useState(!1),[C,R]=Be.useState(5),B=Be.useRef(0),Z=Be.useRef(1),[le,ge]=Be.useState(1),$=Be.useRef(1),[P,X]=Be.useState(null),k=Be.useRef(null),[fe,pe]=Be.useState(0),L=Be.useRef([]),ie=Be.useRef({}),Se=Be.useRef({}),Me=Be.useRef([]),Ue=Be.useRef(!1),K=Be.useRef(!1),ue=Be.useRef(0),Ne=Be.useRef(0),qe=Be.useRef(null),We=Be.useRef(null),_t=Be.useRef(!1);Be.useRef(1);const Ot=Be.useRef(0),ct=Be.useRef(0),gt=Be.useRef(0),H=Be.useRef(!1),xt=Be.useRef(0),St=Be.useRef(0);Be.useRef(0);const kt=Be.useRef(null);Be.useRef(!1),Be.useEffect(()=>{Ue.current=m,m?(document.body.style.overflow="hidden",Object.values(Se.current).forEach(xe=>xe.pause())):g&&(document.body.style.overflow="auto")},[m,g]),Be.useEffect(()=>{K.current=g,g?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[g]),Be.useEffect(()=>{B.current=C},[C]),Be.useEffect(()=>{_t.current=z},[z]),Be.useEffect(()=>{$.current=le},[le]),Be.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&ge(1.8)},[]),Be.useEffect(()=>{S.current&&(v&&D?S.current.play().catch(xe=>console.error("Audio playback failed:",xe)):S.current.pause())},[v,D,V]);const Ye=()=>N(!v),$t=xe=>{O(xe),N(!0),I(!0)},at=()=>{window.scrollTo({top:0,behavior:"auto"}),ue.current=0,Ne.current=0,Ot.current=0,gt.current=0,y(!0)},pt=()=>{_(!0),N(!0),R(5),Object.values(Se.current).forEach(xe=>{xe.muted=!1,xe.volume=0})},U=()=>{y(!1)},M=xe=>{const tt=xe.currentTarget.getBoundingClientRect(),Xt=Math.min(Math.max((xe.clientX-tt.left)/tt.width,0),1);pe(xe.clientX);const gn=xa.length,nn=Math.floor(Xt*(gn-1)),oi=xa[nn];oi&&X(oi.date)},Q=()=>{X(null)},[_e,Ae]=Be.useState(()=>window.innerWidth<768?14:qt.CAMERA_START_Z);Be.useEffect(()=>{const xe=()=>{const tt=window.innerWidth<768?14:qt.CAMERA_START_Z;Ae(Xt=>Xt!==tt?tt:Xt)};return window.addEventListener("resize",xe),()=>window.removeEventListener("resize",xe)},[]);const de=_e,nt=n[n.length-1].z,ze=de-(nt+5),st=250/le;Be.useEffect(()=>{ct.current=ze*st},[ze,st]),Be.useEffect(()=>{const xe=nn=>{Ue.current||!K.current||(Ot.current+=nn.deltaY,Ot.current=Math.max(0,Math.min(Ot.current,ct.current)),gt.current=0)},tt=nn=>{nn.target.closest("button, wired-slider, input, .wired-rendered")||(H.current=!0,gt.current=0,xt.current=nn.touches[0].clientY,St.current=performance.now())},Xt=nn=>{if(nn.target.closest("button, wired-slider, input, .wired-rendered")||Ue.current||!K.current)return;nn.preventDefault();const Bt=nn.touches[0].clientY,Cn=xt.current-Bt;xt.current=Bt,Ot.current+=Cn,Ot.current=Math.max(0,Math.min(Ot.current,ct.current));const bi=performance.now(),ua=bi-St.current;if(St.current=bi,ua>0){const $i=Cn;gt.current=gt.current*.5+$i*.5}},gn=()=>{H.current=!1};return window.addEventListener("wheel",xe,{passive:!1}),window.addEventListener("touchstart",tt,{passive:!1}),window.addEventListener("touchmove",Xt,{passive:!1}),window.addEventListener("touchend",gn),()=>{window.removeEventListener("wheel",xe),window.removeEventListener("touchstart",tt),window.removeEventListener("touchmove",Xt),window.removeEventListener("touchend",gn)}},[]),Be.useEffect(()=>{const xe=()=>{window.audioContext||(window.audioContext=new(window.AudioContext||window.webkitAudioContext)),window.audioContext.state==="suspended"&&window.audioContext.resume()};return window.addEventListener("touchstart",xe,{once:!0}),window.addEventListener("click",xe,{once:!0}),window.addEventListener("keydown",xe,{once:!0}),()=>{window.removeEventListener("touchstart",xe),window.removeEventListener("click",xe),window.removeEventListener("keydown",xe)}},[]),Be.useEffect(()=>{var De;if(!r.current)return;const xe=new D3;xe.background=new Et(15857116),xe.fog=new df(15857116,20,80);const tt=((De=n[n.length-1])==null?void 0:De.z)||-100,{update:Xt}=YD(xe,tt);kt.current=Xt;const gn=new W3(16777215,16777215,.35);xe.add(gn);const nn=new $3(16772306,1.5);nn.position.set(80,60,50),nn.castShadow=!0,nn.shadow.mapSize.width=2048,nn.shadow.mapSize.height=2048,nn.shadow.camera.left=-50,nn.shadow.camera.right=50,nn.shadow.camera.top=50,nn.shadow.camera.bottom=-50,xe.add(nn);const oi=new Z3(4210752,.5);xe.add(oi);const Bt=new Wi(50,window.innerWidth/window.innerHeight,.1,2e3);Bt.position.set(0,0,_e),qe.current=Bt;const Cn=new Bw({canvas:r.current,antialias:!0,alpha:!1});Cn.setSize(window.innerWidth,window.innerHeight),Cn.setPixelRatio(Math.min(window.devicePixelRatio,2));const bi=new X3;bi.crossOrigin="Anonymous";const ua=3.2,$i=3.2;new aa(3.2,2.4);const ii=new bo({color:16777215,transparent:!0}),_n=2,Sn=.5,Zi=new aa(_n,Sn),Qa=new im({color:2236962,linewidth:2,opacity:.8,transparent:!0});L.current=[],ie.current={},Me.current=[],n.forEach(he=>{const Ee=new Ds;Ee.position.set(he.x,he.y,he.z),Ee.rotation.y=he.rotationY,Ee.rotation.z=he.rotationZ;const Ce=he.initialWidth,Fe=he.initialHeight,Xe=new aa(Ce,Fe),He=new gi(Xe,new bo({transparent:!0,opacity:0}));He.position.z=.1,He.position.y=.15;const Je=Ce+.3,vt=Fe+.8,ht=new aa(Je,vt),ot=new gi(ht,ii.clone());ot.position.z=0;const Ct=m2(Je+.05,vt+.05,he.borderIntensity),$e=new n1(Ct,Qa.clone());$e.position.z=.15,ie.current[he.id]=$e;const dt=(Dt,rn)=>{const mt=Dt/rn;let hn=ua,wt=ua/mt;wt>$i&&(wt=$i,hn=$i*mt),He.geometry.dispose(),He.geometry=new aa(hn,wt);const an=hn+.3,Ht=wt+.8;ot.geometry.dispose(),ot.geometry=new aa(an,Ht);const Ft=m2(an+.05,Ht+.05,he.borderIntensity);$e.geometry.dispose(),$e.geometry=Ft;const on=-(Ht/2)+.4,Jn=Ee.children.find(ai=>ai.userData.isDate);Jn&&(Jn.position.y=on)};Me.current.push({item:he,contentMesh:He,updateGeometry:dt,loadedOpacity:0,targetLoadedOpacity:0});const Ze=$D(he.date);if(Ze){const Dt=new bo({map:Ze,transparent:!0,opacity:.8}),rn=new gi(Zi,Dt);rn.userData={isDate:!0},rn.position.y=-(vt/2)+.4,rn.position.z=.11,Ee.add(rn)}Ee.add(ot),Ee.add(He),Ee.add($e),Ee.userData={id:he.id},xe.add(Ee),L.current.push(He)});const Ma={},Go=he=>{const Ee=he.item;if(!Ma[Ee.id]){if(Ee.type==="video"){const Ce=document.createElement("video");Ce.src=Ee.src,Ce.crossOrigin="Anonymous",Ce.muted=!0,Ce.loop=!0,Ce.playsInline=!0,Ce.preload="auto",Se.current[Ee.id]=Ce,he.video=Ce,Ce.onloadedmetadata=()=>{he.updateGeometry(Ce.videoWidth,Ce.videoHeight),he.targetLoadedOpacity=1,Ce.play().catch(()=>{})};let Fe=null;if(window.audioContext)try{const He=window.audioContext.createMediaElementSource(Ce);Fe=window.audioContext.createGain(),He.connect(Fe),Fe.connect(window.audioContext.destination),Fe.gain.value=0}catch(He){console.error(He)}Fe&&(he.gainNode=Fe);const Xe=new F3(Ce);Xe.minFilter=Qn,Xe.magFilter=Qn,Xe.wrapS=Di,Xe.wrapT=Di,Xe.colorSpace=mi,he.texture=Xe,he.contentMesh.material.map=Xe,he.contentMesh.material.needsUpdate=!0}else{const Ce=Ee.type==="embed"&&Ee.previewSrc||Ee.src;bi.load(Ce,Fe=>{Fe.colorSpace=mi,Fe.wrapS=Di,Fe.wrapT=Di,he.texture=Fe,he.contentMesh.material.map=Fe,he.contentMesh.material.needsUpdate=!0,Fe.image&&he.updateGeometry(Fe.image.width,Fe.image.height),he.targetLoadedOpacity=1})}Ma[Ee.id]=!0}},zs=he=>{const Ee=he.item.id;Ma[Ee]&&(he.loadedOpacity=0,he.targetLoadedOpacity=0,he.texture&&(he.texture.dispose(),he.contentMesh.material.map=null,he.contentMesh.material.needsUpdate=!0,he.texture=void 0),he.video&&(he.video.pause(),he.video.src="",he.video.load(),delete Se.current[Ee],he.video=void 0),delete Ma[Ee])};n[n.length-1].z;const Pi=new Q3,zi=new Yt,fa=he=>{const Ee=Math.abs(Bt.position.z-he.position.z);return Ee<=qt.FADE_START?1:Ee>=qt.FADE_END?0:1-(Ee-qt.FADE_START)/(qt.FADE_END-qt.FADE_START)},w=he=>{var Je,vt;if(Ue.current||!K.current)return;if(We.current){const ht=n.find(ot=>ot.id===We.current);if(ht){d(ht),p(!0);return}}zi.x=he.clientX/window.innerWidth*2-1,zi.y=-(he.clientY/window.innerHeight)*2+1,xe.updateMatrixWorld(!0),Pi.setFromCamera(zi,Bt);const Ee=xe.children.filter(ht=>ht instanceof Ds&&ht.userData.id),Ce=Pi.intersectObjects(Ee,!0).filter(ht=>ht.object instanceof gi),Fe=new Rf,Xe=new un;Xe.multiplyMatrices(Bt.projectionMatrix,Bt.matrixWorldInverse),Fe.setFromProjectionMatrix(Xe);const He=Bt.getWorldDirection(new oe);for(const ht of Ce){let ot=ht.object;for(;ot.parent&&!((Je=ot.userData)!=null&&Je.id);)ot=ot.parent;const Ct=(vt=ot.userData)==null?void 0:vt.id;if(!Ct)continue;const $e=ot.getWorldPosition(new oe);if(!Fe.containsPoint($e)||$e.clone().sub(Bt.position).dot(He)<=0||fa(ot)<.1)continue;const Dt=n.find(rn=>rn.id===Ct);if(Dt){d(Dt),p(!0);break}}};r.current.addEventListener("click",w);const W=he=>{var Xe,He;if(Ue.current||!K.current)return;zi.x=he.clientX/window.innerWidth*2-1,zi.y=-(he.clientY/window.innerHeight)*2+1,Pi.setFromCamera(zi,Bt);const Ee=xe.children.filter(Je=>Je instanceof Ds&&Je.userData.id),Fe=Pi.intersectObjects(Ee,!0).find(Je=>Je.object instanceof gi);if(Fe){let Je=Fe.object;for(;Je.parent&&!((Xe=Je.userData)!=null&&Xe.id);)Je=Je.parent;We.current=(He=Je.userData)==null?void 0:He.id,document.body.style.cursor="pointer"}else We.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",W);let se;window.matchMedia("(pointer: coarse)").matches;const J=()=>{var $e;if(se=requestAnimationFrame(J),!Ue.current&&K.current){const dt=We.current?qt.HOVER_MIN_SPEED_FACTOR:1;if(Z.current+=(dt-Z.current)*.1,!H.current){let hn=0;if(B.current>0){const wt=250/$.current;hn=B.current*.8*(wt/200)*Z.current}gt.current+=(hn-gt.current)*.05,Math.abs(hn)<.01&&Math.abs(gt.current)<.01&&(gt.current=0),Ot.current+=gt.current,Ot.current<0?(Ot.current=0,gt.current=0):Ot.current>ct.current&&(Ot.current=ct.current,gt.current=0)}ct.current>0&&(Ne.current=Ot.current/ct.current);const Ze=Ne.current-ue.current,Dt=Math.max(-20*.2,Math.min(qt.MAX_SCROLL_SPEED*.2,Ze));ue.current+=Dt*.1+Ze*.05,Bt.position.z=_e-ue.current*ze,e.current&&(e.current.style.width=`${ue.current*100}% `);const rn=Math.min(1,Math.max(0,ue.current)),mt=qt.SKY_STOPS;for(let hn=0;hn<mt.length-1;hn++){const wt=mt[hn],an=mt[hn+1];if(rn>=wt.pos&&rn<=an.pos){const Ht=an.pos-wt.pos,Ft=(rn-wt.pos)/Ht;xe.background instanceof Et&&xe.background.copy(wt.color).lerp(an.color,Ft),xe.fog instanceof df&&xe.fog.color.copy(xe.background);break}}}Object.keys(Ma).forEach(dt=>{const Ze=Me.current.find(Dt=>Dt.item.id===dt);if(Ze){const Dt=Ze.contentMesh.parent;Math.abs(Bt.position.z-Dt.position.z)>32&&zs(Ze)}});const he=Math.max(0,Math.floor(-Bt.position.z/qt.Z_SPACING)),Ee=8,Ce=Math.max(0,he-Ee),Fe=Math.min(Me.current.length-1,he+Ee),Xe=_e-Bt.position.z,He=Math.min(xa.length-1,Math.max(0,Math.round(Xe/qt.Z_SPACING))),Je=xa[He];let vt=null,ht=0;Je&&Je.type==="video"&&(vt=Je.id,ht=-(He*qt.Z_SPACING)+_e+0);const ot=qt.Z_SPACING/2;let Ct=0;for(let dt=Ce;dt<=Fe;dt++){const Ze=Me.current[dt],Dt=Ze.contentMesh.parent,rn=Ze.contentMesh,mt=Math.abs(Bt.position.z-Dt.position.z),hn=22,wt=32,an=dt===Me.current.length-1;mt<hn?Go(Ze):mt>wt&&!an&&zs(Ze);const Ht=Ze.item.id,Ft=ie.current[Ht];Ft&&(We.current===Ht?(Ft.material.color.setHex(0),Ft.material.opacity=1,Ft.scale.setScalar(1.02)):(Ft.material.color.setHex(2236962),Ft.material.opacity=.8,Ft.scale.setScalar(1)));let on=0;const Jn=4,ai=.5;mt<ai?on=0:mt<Jn?on=(mt-ai)/(Jn-ai):mt<=qt.FADE_START?on=1:mt>=qt.FADE_END?on=.3:on=1-.7*((mt-qt.FADE_START)/(qt.FADE_END-qt.FADE_START)),Ze.loadedOpacity+=(Ze.targetLoadedOpacity-Ze.loadedOpacity)*.05;const Is=on*Ze.loadedOpacity;rn.material.opacity=Is;const yr=Dt.children.find(Mn=>Mn.isMesh&&Mn!==rn&&!Mn.userData.isDate);if(yr&&yr.material&&(yr.material.opacity=Is),Ft){const Mn=We.current===Ht?1:.8;Ft.material.opacity=Mn*Is,Ft.material.transparent=!0}const Fs=Dt.children.find(Mn=>Mn.userData.isDate);Fs&&Fs.material&&(Fs.material.opacity=.8*Is);let Vo=1;if(mt<qt.HIGHLIGHT_RANGE&&(Vo=1+(1-mt/qt.HIGHLIGHT_RANGE)*.15),Dt.scale.set(Vo,Vo,1),Se.current[Ht]){const Mn=Se.current[Ht];if(!Ue.current&&K.current){const Sr=window.innerWidth<768,Ki=Ht===vt,Mr=dt===Me.current.length-1;if(_t.current||Sr&&!Mr)Mn.muted||(Mn.muted=!0),Ze.gainNode&&Ze.gainNode.gain.value>0&&(Ze.gainNode.gain.cancelScheduledValues(0),Ze.gainNode.gain.value=0);else if(Ki){Mn.muted=!1;let Er=Math.abs(Bt.position.z-ht);Mr&&Bt.position.z<ht&&(Er=0);let da=Math.max(0,1-Er/ot);Ze.gainNode?Ze.gainNode.gain.setTargetAtTime(da,window.audioContext.currentTime,.1):Mn.volume=da,Ct=Math.max(Ct,da),Mn.paused&&Mn.play().catch(()=>{})}else Mn.muted||(Mn.muted=!0),Mn.paused&&Mn.play().catch(()=>{})}}}if(S.current&&D){let dt=1;const Ze=Math.abs(Bt.position.z-n[n.length-1].z),Dt=($e=Me.current[Me.current.length-1])==null?void 0:$e.item.id;vt===Dt?dt=0:Ct>.1?dt=.1:Ze<qt.BGM_FADE_ZONE&&(dt=Math.max(0,(Ze-qt.BGM_SILENCE_RADIUS)/(qt.BGM_FADE_ZONE-qt.BGM_SILENCE_RADIUS))),v&&S.current.paused&&dt>.01&&S.current.play().catch(()=>{});const mt=S.current.volume;Math.abs(mt-dt)>.005?S.current.volume+=(dt-mt)*.05:S.current.volume=dt}Cn.render(xe,Bt)};J();const Y=()=>{Bt.aspect=window.innerWidth/window.innerHeight,Bt.updateProjectionMatrix(),Cn.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Y),()=>{var he;window.removeEventListener("resize",Y),window.removeEventListener("mousemove",W),(he=r.current)==null||he.removeEventListener("click",w),cancelAnimationFrame(se),k.current&&cancelAnimationFrame(k.current),Cn.dispose(),document.body.style.height="auto",Object.values(Se.current).forEach(Ee=>{Ee.pause(),Ee.src="",Ee.load()})}},[n,_e,ze]);const Qe=()=>{p(!1),d(null)},Te=xe=>{gt.current=0,Ne.current=Math.max(0,Math.min(1,xe)),ct.current>0&&(Ot.current=Ne.current*ct.current)},Re=xe=>{const tt=xe.currentTarget.getBoundingClientRect(),Xt=xe.touches[0],gn=Math.min(Math.max((Xt.clientX-tt.left)/tt.width,0),1);pe(Xt.clientX);const nn=xa.length,oi=Math.floor(gn*(nn-1)),Bt=xa[oi];Bt&&X(Bt.date),Te(gn)},it=xe=>{if(m||!g)return;const tt=xe.currentTarget.getBoundingClientRect(),Xt=Math.min(Math.max((xe.clientX-tt.left)/tt.width,0),1);Te(we(Xt))},ke=xe=>{A(E===xe?null:xe)},Ve=qt.CAMERA_START_Z,G=n[n.length-1].z+5,Ie=Ve-G||1,Le=xe=>Math.min(Math.max((Ve-xe)/Ie,0),1),Oe=xe=>Ve-xe*Ie,we=xe=>Le(Oe(xe)+qt.TIMELINE_FOCUS_OFFSET),be=n.filter(xe=>xe.timelineLabel).map(xe=>({id:xe.id,label:xe.timelineLabel,pct:Le(xe.z),focusPct:Le(xe.z+qt.TIMELINE_FOCUS_OFFSET),z:xe.z}));return re.jsxs(re.Fragment,{children:[re.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),re.jsx("audio",{ref:S,src:E0[V].src,onEnded:()=>$t((V+1)%E0.length)}),!g&&re.jsx(kD,{onStartTransition:at}),x&&re.jsx(XD,{onCovered:pt,onComplete:U}),re.jsx("div",{className:`fixed top-6 left-0 right-6 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 flex justify-center ${g?"opacity-100":"opacity-0"} `,children:re.jsxs("h1",{className:"text-1xl md:text-3xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg] text-center px-4",children:["The secret life of ",re.jsx("span",{className:"text-gray-600",children:"Warco Mu 🐵"})]})}),re.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${g?"opacity-100":"opacity-0 pointer-events-none"} `,children:[re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>ke("audio"),children:re.jsx(ZD,{})}),E==="audio"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),re.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:re.jsx(A0,{})})]}),re.jsxs("div",{className:"mb-4",children:[re.jsxs("div",{className:"flex justify-between items-center mb-1",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"Video Sound"}),re.jsx("button",{onClick:()=>ne(!z),className:"p-1 rounded hover:bg-gray-100",title:z?"Unmute Videos":"Mute Videos",children:z?re.jsx(_2,{}):re.jsx(g2,{})})]}),o&&re.jsxs("div",{className:"text-[10px] text-amber-700 bg-amber-50 p-2 rounded mb-2 border border-amber-200 leading-tight",children:["Video sound is disabled on mobile devices. ",re.jsx("br",{}),"(Except for the finale!)"]})]}),re.jsxs("div",{children:[re.jsxs("div",{className:"flex justify-between items-center mb-2",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),re.jsx("div",{className:"flex items-center gap-2",children:re.jsx("button",{onClick:()=>I(!D),className:"p-1 rounded hover:bg-gray-100",title:D?"Disable BGM":"Enable BGM",children:D?re.jsx(g2,{}):re.jsx(_2,{})})})]}),re.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:re.jsx("button",{onClick:Ye,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:v?re.jsx(e5,{}):re.jsx(JD,{})})}),re.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${D?"opacity-100":"opacity-50 pointer-events-none"} `,children:E0.map((xe,tt)=>re.jsxs("div",{onClick:()=>$t(tt),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${V===tt?"bg-blue-50 font-bold text-blue-700":"text-gray-600"} `,children:[tt+1,". ",xe.title]},tt))})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>ke("general"),children:re.jsx(KD,{})}),E==="general"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),re.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:re.jsx(A0,{})})]}),re.jsxs("div",{children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),re.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:C,onChange:xe=>R(Number(xe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs font-bold w-4 text-center",children:C})]})]}),re.jsxs("div",{className:"mt-4",children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),re.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:le,onChange:xe=>ge(Number(xe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>ke("credit"),children:re.jsx(QD,{})}),E==="credit"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Credits"}),re.jsx("button",{onClick:()=>A(null),className:"text-gray-500 hover:text-black",children:re.jsx(A0,{})})]}),re.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[re.jsx("p",{className:"mb-2",children:re.jsx("strong",{children:"Coming Soon"})}),re.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",re.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),re.jsx("br",{}),re.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),re.jsx("br",{}),re.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),g&&re.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:it,onMouseMove:M,onMouseLeave:Q,onTouchStart:Re,onTouchMove:Re,onTouchEnd:Q,children:[be.map(xe=>re.jsxs("button",{onClick:tt=>{tt.stopPropagation(),Te(xe.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${xe.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:xe.label,children:[re.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:xe.label}),re.jsx("img",{src:WD,alt:xe.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},xe.id)),re.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),P&&re.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:fe},children:[P,re.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),m&&u&&re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[re.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:Qe}),re.jsx("div",{className:"relative z-10 w-auto max-w-[95vw] flex flex-col items-center pointer-events-auto",children:re.jsx("wired-card",{elevation:4,className:"bg-white p-2 w-full",children:re.jsxs("div",{className:"p-4 flex flex-col items-center overflow-y-auto max-h-[85vh] no-scrollbar",children:[re.jsx("div",{className:"w-full flex justify-end mb-2",children:re.jsx("wired-button",{onClick:Qe,elevation:2,children:"Close [X]"})}),re.jsxs("div",{className:"relative flex items-center justify-center bg-black border-2 border-black rounded-sm shadow-inner overflow-hidden",style:{maxHeight:"80vh",maxWidth:"90vw",aspectRatio:u.type==="embed"?((je=wp[u.filename])==null?void 0:je.aspectRatio)||16/9:void 0,width:u.type==="embed"?`min(100%, calc(80vh * ${((ft=wp[u.filename])==null?void 0:ft.aspectRatio)||1.777}))`:"auto",minWidth:u.type==="embed"?"60vw":"auto"},children:[u.type==="video"&&re.jsx("video",{src:u.src,className:"block max-w-full max-h-[80vh] w-auto h-auto object-contain",controls:!0,autoPlay:!0}),u.type==="embed"&&re.jsx("iframe",{src:(()=>{const xe=u.embedUrl||u.src,tt=xe.includes("?")?"&":"?";return`${xe}${tt} autoplay=1&muted=1&playsinline=1&loop=1&controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:u.title}),u.type==="image"&&re.jsx("img",{src:u.src,alt:u.title,className:"block max-w-full max-h-[80vh] w-auto h-auto object-contain"})]}),re.jsxs("div",{className:"mt-6 text-center",children:[re.jsx("h2",{className:"text-xl md:text-3xl font-bold text-gray-800 mb-2",children:u.title}),u.description&&re.jsx("p",{className:"text-gray-600 text-sm md:text-lg font-light",children:u.description})]})]})})})]})]})},m1=document.getElementById("root");if(!m1)throw new Error("Could not find root element to mount to");const n5=pS.createRoot(m1);n5.render(re.jsx(rS.StrictMode,{children:re.jsx(t5,{})}));
