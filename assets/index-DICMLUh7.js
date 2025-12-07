(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Iu=window,gp=Iu.ShadowRoot&&(Iu.ShadyCSS===void 0||Iu.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_p=Symbol(),Dx=new WeakMap;let s2=class{constructor(e,n,a){if(this._$cssResult$=!0,a!==_p)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(gp&&e===void 0){const a=n!==void 0&&n.length===1;a&&(e=Dx.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&Dx.set(n,e))}return e}toString(){return this.cssText}};const ay=r=>new s2(typeof r=="string"?r:r+"",void 0,_p),an=(r,...e)=>{const n=r.length===1?r[0]:e.reduce(((a,o,c)=>a+(u=>{if(u._$cssResult$===!0)return u.cssText;if(typeof u=="number")return u;throw Error("Value passed to 'css' function must be a 'css' function result: "+u+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[c+1]),r[0]);return new s2(n,r,_p)},sy=(r,e)=>{gp?r.adoptedStyleSheets=e.map((n=>n instanceof CSSStyleSheet?n:n.styleSheet)):e.forEach((n=>{const a=document.createElement("style"),o=Iu.litNonce;o!==void 0&&a.setAttribute("nonce",o),a.textContent=n.cssText,r.appendChild(a)}))},Ox=gp?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let n="";for(const a of e.cssRules)n+=a.cssText;return ay(n)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Sh;const ju=window,Ux=ju.trustedTypes,ry=Ux?Ux.emptyScript:"",Lx=ju.reactiveElementPolyfillSupport,g0={toAttribute(r,e){switch(e){case Boolean:r=r?ry:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let n=r;switch(e){case Boolean:n=r!==null;break;case Number:n=r===null?null:Number(r);break;case Object:case Array:try{n=JSON.parse(r)}catch{n=null}}return n}},r2=(r,e)=>e!==r&&(e==e||r==r),Mh={attribute:!0,type:String,converter:g0,reflect:!1,hasChanged:r2},_0="finalized";let co=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var n;this.finalize(),((n=this.h)!==null&&n!==void 0?n:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((n,a)=>{const o=this._$Ep(a,n);o!==void 0&&(this._$Ev.set(o,a),e.push(o))})),e}static createProperty(e,n=Mh){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){const a=typeof e=="symbol"?Symbol():"__"+e,o=this.getPropertyDescriptor(e,a,n);o!==void 0&&Object.defineProperty(this.prototype,e,o)}}static getPropertyDescriptor(e,n,a){return{get(){return this[n]},set(o){const c=this[e];this[n]=o,this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Mh}static finalize(){if(this.hasOwnProperty(_0))return!1;this[_0]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const n=this.properties,a=[...Object.getOwnPropertyNames(n),...Object.getOwnPropertySymbols(n)];for(const o of a)this.createProperty(o,n[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const o of a)n.unshift(Ox(o))}else e!==void 0&&n.push(Ox(e));return n}static _$Ep(e,n){const a=n.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((n=>this.enableUpdating=n)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((n=>n(this)))}addController(e){var n,a;((n=this._$ES)!==null&&n!==void 0?n:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((a=e.hostConnected)===null||a===void 0||a.call(e))}removeController(e){var n;(n=this._$ES)===null||n===void 0||n.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,n)=>{this.hasOwnProperty(n)&&(this._$Ei.set(n,this[n]),delete this[n])}))}createRenderRoot(){var e;const n=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return sy(n,this.constructor.elementStyles),n}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostConnected)===null||a===void 0?void 0:a.call(n)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((n=>{var a;return(a=n.hostDisconnected)===null||a===void 0?void 0:a.call(n)}))}attributeChangedCallback(e,n,a){this._$AK(e,a)}_$EO(e,n,a=Mh){var o;const c=this.constructor._$Ep(e,a);if(c!==void 0&&a.reflect===!0){const u=(((o=a.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?a.converter:g0).toAttribute(n,a.type);this._$El=e,u==null?this.removeAttribute(c):this.setAttribute(c,u),this._$El=null}}_$AK(e,n){var a;const o=this.constructor,c=o._$Ev.get(e);if(c!==void 0&&this._$El!==c){const u=o.getPropertyOptions(c),d=typeof u.converter=="function"?{fromAttribute:u.converter}:((a=u.converter)===null||a===void 0?void 0:a.fromAttribute)!==void 0?u.converter:g0;this._$El=c,this[c]=d.fromAttribute(n,u.type),this._$El=null}}requestUpdate(e,n,a){let o=!0;e!==void 0&&(((a=a||this.constructor.getPropertyOptions(e)).hasChanged||r2)(this[e],n)?(this._$AL.has(e)||this._$AL.set(e,n),a.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,a))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((o,c)=>this[c]=o)),this._$Ei=void 0);let n=!1;const a=this._$AL;try{n=this.shouldUpdate(a),n?(this.willUpdate(a),(e=this._$ES)===null||e===void 0||e.forEach((o=>{var c;return(c=o.hostUpdate)===null||c===void 0?void 0:c.call(o)})),this.update(a)):this._$Ek()}catch(o){throw n=!1,this._$Ek(),o}n&&this._$AE(a)}willUpdate(e){}_$AE(e){var n;(n=this._$ES)===null||n===void 0||n.forEach((a=>{var o;return(o=a.hostUpdated)===null||o===void 0?void 0:o.call(a)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((n,a)=>this._$EO(a,this[a],n))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};co[_0]=!0,co.elementProperties=new Map,co.elementStyles=[],co.shadowRootOptions={mode:"open"},Lx==null||Lx({ReactiveElement:co}),((Sh=ju.reactiveElementVersions)!==null&&Sh!==void 0?Sh:ju.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Eh;const ku=window,ho=ku.trustedTypes,Nx=ho?ho.createPolicy("lit-html",{createHTML:r=>r}):void 0,x0="$lit$",Ss=`lit$${(Math.random()+"").slice(9)}$`,o2="?"+Ss,oy=`<${o2}>`,rr=document,Ul=()=>rr.createComment(""),Ll=r=>r===null||typeof r!="object"&&typeof r!="function",l2=Array.isArray,ly=r=>l2(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Th=`[ 	
\f\r]`,bl=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Px=/-->/g,zx=/>/g,qs=RegExp(`>|${Th}(?:([^\\s"'>=/]+)(${Th}*=${Th}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ix=/'/g,Fx=/"/g,c2=/^(?:script|style|textarea|title)$/i,cy=r=>(e,...n)=>({_$litType$:r,strings:e,values:n}),nn=cy(1),po=Symbol.for("lit-noChange"),Bn=Symbol.for("lit-nothing"),Bx=new WeakMap,ir=rr.createTreeWalker(rr,129,null,!1);function u2(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nx!==void 0?Nx.createHTML(e):e}const uy=(r,e)=>{const n=r.length-1,a=[];let o,c=e===2?"<svg>":"",u=bl;for(let d=0;d<n;d++){const m=r[d];let p,g,_=-1,x=0;for(;x<m.length&&(u.lastIndex=x,g=u.exec(m),g!==null);)x=u.lastIndex,u===bl?g[1]==="!--"?u=Px:g[1]!==void 0?u=zx:g[2]!==void 0?(c2.test(g[2])&&(o=RegExp("</"+g[2],"g")),u=qs):g[3]!==void 0&&(u=qs):u===qs?g[0]===">"?(u=o??bl,_=-1):g[1]===void 0?_=-2:(_=u.lastIndex-g[2].length,p=g[1],u=g[3]===void 0?qs:g[3]==='"'?Fx:Ix):u===Fx||u===Ix?u=qs:u===Px||u===zx?u=bl:(u=qs,o=void 0);const y=u===qs&&r[d+1].startsWith("/>")?" ":"";c+=u===bl?m+oy:_>=0?(a.push(p),m.slice(0,_)+x0+m.slice(_)+Ss+y):m+Ss+(_===-2?(a.push(void 0),d):y)}return[u2(r,c+(r[n]||"<?>")+(e===2?"</svg>":"")),a]};class Nl{constructor({strings:e,_$litType$:n},a){let o;this.parts=[];let c=0,u=0;const d=e.length-1,m=this.parts,[p,g]=uy(e,n);if(this.el=Nl.createElement(p,a),ir.currentNode=this.el.content,n===2){const _=this.el.content,x=_.firstChild;x.remove(),_.append(...x.childNodes)}for(;(o=ir.nextNode())!==null&&m.length<d;){if(o.nodeType===1){if(o.hasAttributes()){const _=[];for(const x of o.getAttributeNames())if(x.endsWith(x0)||x.startsWith(Ss)){const y=g[u++];if(_.push(x),y!==void 0){const M=o.getAttribute(y.toLowerCase()+x0).split(Ss),A=/([.?@])?(.*)/.exec(y);m.push({type:1,index:c,name:A[2],strings:M,ctor:A[1]==="."?dy:A[1]==="?"?py:A[1]==="@"?my:nf})}else m.push({type:6,index:c})}for(const x of _)o.removeAttribute(x)}if(c2.test(o.tagName)){const _=o.textContent.split(Ss),x=_.length-1;if(x>0){o.textContent=ho?ho.emptyScript:"";for(let y=0;y<x;y++)o.append(_[y],Ul()),ir.nextNode(),m.push({type:2,index:++c});o.append(_[x],Ul())}}}else if(o.nodeType===8)if(o.data===o2)m.push({type:2,index:c});else{let _=-1;for(;(_=o.data.indexOf(Ss,_+1))!==-1;)m.push({type:7,index:c}),_+=Ss.length-1}c++}}static createElement(e,n){const a=rr.createElement("template");return a.innerHTML=e,a}}function mo(r,e,n=r,a){var o,c,u,d;if(e===po)return e;let m=a!==void 0?(o=n._$Co)===null||o===void 0?void 0:o[a]:n._$Cl;const p=Ll(e)?void 0:e._$litDirective$;return(m==null?void 0:m.constructor)!==p&&((c=m==null?void 0:m._$AO)===null||c===void 0||c.call(m,!1),p===void 0?m=void 0:(m=new p(r),m._$AT(r,n,a)),a!==void 0?((u=(d=n)._$Co)!==null&&u!==void 0?u:d._$Co=[])[a]=m:n._$Cl=m),m!==void 0&&(e=mo(r,m._$AS(r,e.values),m,a)),e}class fy{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var n;const{el:{content:a},parts:o}=this._$AD,c=((n=e==null?void 0:e.creationScope)!==null&&n!==void 0?n:rr).importNode(a,!0);ir.currentNode=c;let u=ir.nextNode(),d=0,m=0,p=o[0];for(;p!==void 0;){if(d===p.index){let g;p.type===2?g=new ql(u,u.nextSibling,this,e):p.type===1?g=new p.ctor(u,p.name,p.strings,this,e):p.type===6&&(g=new gy(u,this,e)),this._$AV.push(g),p=o[++m]}d!==(p==null?void 0:p.index)&&(u=ir.nextNode(),d++)}return ir.currentNode=rr,c}v(e){let n=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,n),n+=a.strings.length-2):a._$AI(e[n])),n++}}class ql{constructor(e,n,a,o){var c;this.type=2,this._$AH=Bn,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=a,this.options=o,this._$Cp=(c=o==null?void 0:o.isConnected)===null||c===void 0||c}get _$AU(){var e,n;return(n=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&n!==void 0?n:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=mo(this,e,n),Ll(e)?e===Bn||e==null||e===""?(this._$AH!==Bn&&this._$AR(),this._$AH=Bn):e!==this._$AH&&e!==po&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ly(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Bn&&Ll(this._$AH)?this._$AA.nextSibling.data=e:this.$(rr.createTextNode(e)),this._$AH=e}g(e){var n;const{values:a,_$litType$:o}=e,c=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=Nl.createElement(u2(o.h,o.h[0]),this.options)),o);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===c)this._$AH.v(a);else{const u=new fy(c,this),d=u.u(this.options);u.v(a),this.$(d),this._$AH=u}}_$AC(e){let n=Bx.get(e.strings);return n===void 0&&Bx.set(e.strings,n=new Nl(e)),n}T(e){l2(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let a,o=0;for(const c of e)o===n.length?n.push(a=new ql(this.k(Ul()),this.k(Ul()),this,this.options)):a=n[o],a._$AI(c),o++;o<n.length&&(this._$AR(a&&a._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var a;for((a=this._$AP)===null||a===void 0||a.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cp=e,(n=this._$AP)===null||n===void 0||n.call(this,e))}}class nf{constructor(e,n,a,o,c){this.type=1,this._$AH=Bn,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=c,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=Bn}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,n=this,a,o){const c=this.strings;let u=!1;if(c===void 0)e=mo(this,e,n,0),u=!Ll(e)||e!==this._$AH&&e!==po,u&&(this._$AH=e);else{const d=e;let m,p;for(e=c[0],m=0;m<c.length-1;m++)p=mo(this,d[a+m],n,m),p===po&&(p=this._$AH[m]),u||(u=!Ll(p)||p!==this._$AH[m]),p===Bn?e=Bn:e!==Bn&&(e+=(p??"")+c[m+1]),this._$AH[m]=p}u&&!o&&this.j(e)}j(e){e===Bn?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class dy extends nf{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Bn?void 0:e}}const hy=ho?ho.emptyScript:"";class py extends nf{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Bn?this.element.setAttribute(this.name,hy):this.element.removeAttribute(this.name)}}class my extends nf{constructor(e,n,a,o,c){super(e,n,a,o,c),this.type=5}_$AI(e,n=this){var a;if((e=(a=mo(this,e,n,0))!==null&&a!==void 0?a:Bn)===po)return;const o=this._$AH,c=e===Bn&&o!==Bn||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,u=e!==Bn&&(o===Bn||c);c&&this.element.removeEventListener(this.name,this,o),u&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n,a;typeof this._$AH=="function"?this._$AH.call((a=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&a!==void 0?a:this.element,e):this._$AH.handleEvent(e)}}class gy{constructor(e,n,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){mo(this,e)}}const Hx=ku.litHtmlPolyfillSupport;Hx==null||Hx(Nl,ql),((Eh=ku.litHtmlVersions)!==null&&Eh!==void 0?Eh:ku.litHtmlVersions=[]).push("2.8.0");const _y=(r,e,n)=>{var a,o;const c=(a=n==null?void 0:n.renderBefore)!==null&&a!==void 0?a:e;let u=c._$litPart$;if(u===void 0){const d=(o=n==null?void 0:n.renderBefore)!==null&&o!==void 0?o:null;c._$litPart$=u=new ql(e.insertBefore(Ul(),d),d,void 0,n??{})}return u._$AI(r),u};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ah,Rh;class Fa extends co{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,n;const a=super.createRenderRoot();return(e=(n=this.renderOptions).renderBefore)!==null&&e!==void 0||(n.renderBefore=a.firstChild),a}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_y(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return po}}Fa.finalized=!0,Fa._$litElement$=!0,(Ah=globalThis.litElementHydrateSupport)===null||Ah===void 0||Ah.call(globalThis,{LitElement:Fa});const Gx=globalThis.litElementPolyfillSupport;Gx==null||Gx({LitElement:Fa});((Rh=globalThis.litElementVersions)!==null&&Rh!==void 0?Rh:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rn=r=>e=>typeof e=="function"?((n,a)=>(customElements.define(n,a),a))(r,e):((n,a)=>{const{kind:o,elements:c}=a;return{kind:o,elements:c,finisher(u){customElements.define(n,u)}}})(r,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xy=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,r)}},vy=(r,e,n)=>{e.constructor.createProperty(n,r)};function Ue(r){return(e,n)=>n!==void 0?vy(r,e,n):xy(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function by(r){return Ue({...r,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yy=({finisher:r,descriptor:e})=>(n,a)=>{var o;if(a===void 0){const c=(o=n.originalKey)!==null&&o!==void 0?o:n.key,u=e!=null?{kind:"method",placement:"prototype",key:c,descriptor:e(n.key)}:{...n,key:c};return r!=null&&(u.finisher=function(d){r(d,c)}),u}{const c=n.constructor;e!==void 0&&Object.defineProperty(n,a,e(a)),r==null||r(c,a)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nn(r,e){return yy({descriptor:n=>({get(){var o,c;return(c=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(r))!==null&&c!==void 0?c:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wh;((wh=window.HTMLSlotElement)===null||wh===void 0?void 0:wh.prototype.assignedElements)!=null;var Sy=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},My=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const vn=an`
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
`;class bn extends Fa{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const n=this.canvasSize();if(!e&&n[0]===this.lastSize[0]&&n[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${n[0]}`),this.svg.setAttribute("height",`${n[1]}`),this.draw(this.svg,n),this.lastSize=n,this.classList.add("wired-rendered")}}fire(e,n){xp(this,e,n)}}Sy([Nn("svg"),My("design:type",SVGSVGElement)],bn.prototype,"svg",void 0);function Ey(){return Math.floor(Math.random()*2**31)}function xp(r,e,n){r.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:n}))}function v0(r,e,n){if(r&&r.length){const[a,o]=e,c=Math.PI/180*n,u=Math.cos(c),d=Math.sin(c);for(const m of r){const[p,g]=m;m[0]=(p-a)*u-(g-o)*d+a,m[1]=(p-a)*d+(g-o)*u+o}}}function Ty(r,e,n){const a=[];r.forEach(o=>a.push(...o)),v0(a,e,n)}function Ay(r,e){return r[0]===e[0]&&r[1]===e[1]}function Ry(r,e,n,a=1){const o=n,c=Math.max(e,.1),u=r[0]&&r[0][0]&&typeof r[0][0]=="number"?[r]:r,d=[0,0];if(o)for(const p of u)v0(p,d,o);const m=wy(u,c,a);if(o){for(const p of u)v0(p,d,-o);Ty(m,d,-o)}return m}function wy(r,e,n){const a=[];for(const p of r){const g=[...p];Ay(g[0],g[g.length-1])||g.push([g[0][0],g[0][1]]),g.length>2&&a.push(g)}const o=[];e=Math.max(e,.1);const c=[];for(const p of a)for(let g=0;g<p.length-1;g++){const _=p[g],x=p[g+1];if(_[1]!==x[1]){const y=Math.min(_[1],x[1]);c.push({ymin:y,ymax:Math.max(_[1],x[1]),x:y===_[1]?_[0]:x[0],islope:(x[0]-_[0])/(x[1]-_[1])})}}if(c.sort((p,g)=>p.ymin<g.ymin?-1:p.ymin>g.ymin?1:p.x<g.x?-1:p.x>g.x?1:p.ymax===g.ymax?0:(p.ymax-g.ymax)/Math.abs(p.ymax-g.ymax)),!c.length)return o;let u=[],d=c[0].ymin,m=0;for(;u.length||c.length;){if(c.length){let p=-1;for(let _=0;_<c.length&&!(c[_].ymin>d);_++)p=_;c.splice(0,p+1).forEach(_=>{u.push({s:d,edge:_})})}if(u=u.filter(p=>!(p.edge.ymax<=d)),u.sort((p,g)=>p.edge.x===g.edge.x?0:(p.edge.x-g.edge.x)/Math.abs(p.edge.x-g.edge.x)),(n!==1||m%e===0)&&u.length>1)for(let p=0;p<u.length;p=p+2){const g=p+1;if(g>=u.length)break;const _=u[p].edge,x=u[g].edge;o.push([[Math.round(_.x),d],[Math.round(x.x),d]])}d+=n,u.forEach(p=>{p.edge.x=p.edge.x+n*p.edge.islope}),m++}return o}function f2(r,e){var n;const a=e.hachureAngle+90;let o=e.hachureGap;o<0&&(o=e.strokeWidth*4),o=Math.round(Math.max(o,.1));let c=1;return e.roughness>=1&&(((n=e.randomizer)===null||n===void 0?void 0:n.next())||Math.random())>.7&&(c=o),Ry(r,o,a,c||1)}class Cy{constructor(e){this.helper=e}fillPolygons(e,n){return this._fillPolygons(e,n)}_fillPolygons(e,n){const a=f2(e,n);return{type:"fillSketch",ops:this.renderLines(a,n)}}renderLines(e,n){const a=[];for(const o of e)a.push(...this.helper.doubleLineOps(o[0][0],o[0][1],o[1][0],o[1][1],n));return a}}function Dy(r){const e=r[0],n=r[1];return Math.sqrt(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2))}class Oy extends Cy{fillPolygons(e,n){let a=n.hachureGap;a<0&&(a=n.strokeWidth*4),a=Math.max(a,.1);const o=Object.assign({},n,{hachureGap:a}),c=f2(e,o),u=Math.PI/180*n.hachureAngle,d=[],m=a*.5*Math.cos(u),p=a*.5*Math.sin(u);for(const[_,x]of c)Dy([_,x])&&d.push([[_[0]-m,_[1]+p],[...x]],[[_[0]+m,_[1]-p],[...x]]);return{type:"fillSketch",ops:this.renderLines(d,n)}}}class Uy{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function d2(r,e,n,a,o){return{type:"path",ops:Xu(r,e,n,a,o)}}function Ly(r,e,n){const a=(r||[]).length;if(a>2){const o=[];for(let c=0;c<a-1;c++)o.push(...Xu(r[c][0],r[c][1],r[c+1][0],r[c+1][1],n));return o.push(...Xu(r[a-1][0],r[a-1][1],r[0][0],r[0][1],n)),{type:"path",ops:o}}else if(a===2)return d2(r[0][0],r[0][1],r[1][0],r[1][1],n);return{type:"path",ops:[]}}function h2(r,e){return Ly(r,!0,e)}function Ny(r,e,n,a,o){const c=[[r,e],[r+n,e],[r+n,e+a],[r,e+a]];return h2(c,o)}function p2(r,e,n,a,o){const c=m2(n,a,o);return Py(r,e,o,c).opset}function m2(r,e,n){const a=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(r/2,2)+Math.pow(e/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*a)),c=Math.PI*2/o;let u=Math.abs(r/2),d=Math.abs(e/2);const m=1-n.curveFitting;return u+=Dn(u*m,n),d+=Dn(d*m,n),{increment:c,rx:u,ry:d}}function Py(r,e,n,a){const[o,c]=jx(a.increment,r,e,a.rx,a.ry,1,a.increment*b0(.1,b0(.4,1,n),n),n);let u=Vx(o,null,n);if(!n.disableMultiStroke&&n.roughness!==0){const[d]=jx(a.increment,r,e,a.rx,a.ry,1.5,0,n),m=Vx(d,null,n);u=u.concat(m)}return{estimatedPoints:c,opset:{type:"path",ops:u}}}function zy(r,e,n,a,o){return Xu(r,e,n,a,o,!0)}function g2(r){return r.randomizer||(r.randomizer=new Uy(r.seed||0)),r.randomizer.next()}function b0(r,e,n,a=1){return n.roughness*a*(g2(n)*(e-r)+r)}function Dn(r,e,n=1){return b0(-r,r,e,n)}function Xu(r,e,n,a,o,c=!1){const u=c?o.disableMultiStrokeFill:o.disableMultiStroke,d=y0(r,e,n,a,o,!0,!1);if(u)return d;const m=y0(r,e,n,a,o,!0,!0);return d.concat(m)}function y0(r,e,n,a,o,c,u){const d=Math.pow(r-n,2)+Math.pow(e-a,2),m=Math.sqrt(d);let p=1;m<200?p=1:m>500?p=.4:p=-.0016668*m+1.233334;let g=o.maxRandomnessOffset||0;g*g*100>d&&(g=m/10);const _=g/2,x=.2+g2(o)*.2;let y=o.bowing*o.maxRandomnessOffset*(a-e)/200,M=o.bowing*o.maxRandomnessOffset*(r-n)/200;y=Dn(y,o,p),M=Dn(M,o,p);const A=[],S=()=>Dn(_,o,p),v=()=>Dn(g,o,p),L=o.preserveVertices;return u?A.push({op:"move",data:[r+(L?0:S()),e+(L?0:S())]}):A.push({op:"move",data:[r+(L?0:Dn(g,o,p)),e+(L?0:Dn(g,o,p))]}),u?A.push({op:"bcurveTo",data:[y+r+(n-r)*x+S(),M+e+(a-e)*x+S(),y+r+2*(n-r)*x+S(),M+e+2*(a-e)*x+S(),n+(L?0:S()),a+(L?0:S())]}):A.push({op:"bcurveTo",data:[y+r+(n-r)*x+v(),M+e+(a-e)*x+v(),y+r+2*(n-r)*x+v(),M+e+2*(a-e)*x+v(),n+(L?0:v()),a+(L?0:v())]}),A}function Vx(r,e,n){const a=r.length,o=[];if(a>3){const c=[],u=1-n.curveTightness;o.push({op:"move",data:[r[1][0],r[1][1]]});for(let d=1;d+2<a;d++){const m=r[d];c[0]=[m[0],m[1]],c[1]=[m[0]+(u*r[d+1][0]-u*r[d-1][0])/6,m[1]+(u*r[d+1][1]-u*r[d-1][1])/6],c[2]=[r[d+1][0]+(u*r[d][0]-u*r[d+2][0])/6,r[d+1][1]+(u*r[d][1]-u*r[d+2][1])/6],c[3]=[r[d+1][0],r[d+1][1]],o.push({op:"bcurveTo",data:[c[1][0],c[1][1],c[2][0],c[2][1],c[3][0],c[3][1]]})}}else a===3?(o.push({op:"move",data:[r[1][0],r[1][1]]}),o.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):a===2&&o.push(...y0(r[0][0],r[0][1],r[1][0],r[1][1],n,!0,!0));return o}function jx(r,e,n,a,o,c,u,d){const m=d.roughness===0,p=[],g=[];if(m){r=r/4,g.push([e+a*Math.cos(-r),n+o*Math.sin(-r)]);for(let _=0;_<=Math.PI*2;_=_+r){const x=[e+a*Math.cos(_),n+o*Math.sin(_)];p.push(x),g.push(x)}g.push([e+a*Math.cos(0),n+o*Math.sin(0)]),g.push([e+a*Math.cos(r),n+o*Math.sin(r)])}else{const _=Dn(.5,d)-Math.PI/2;g.push([Dn(c,d)+e+.9*a*Math.cos(_-r),Dn(c,d)+n+.9*o*Math.sin(_-r)]);const x=Math.PI*2+_-.01;for(let y=_;y<x;y=y+r){const M=[Dn(c,d)+e+a*Math.cos(y),Dn(c,d)+n+o*Math.sin(y)];p.push(M),g.push(M)}g.push([Dn(c,d)+e+a*Math.cos(_+Math.PI*2+u*.5),Dn(c,d)+n+o*Math.sin(_+Math.PI*2+u*.5)]),g.push([Dn(c,d)+e+.98*a*Math.cos(_+u),Dn(c,d)+n+.98*o*Math.sin(_+u)]),g.push([Dn(c,d)+e+.9*a*Math.cos(_+u*.5),Dn(c,d)+n+.9*o*Math.sin(_+u*.5)])}return[g,p]}const Iy={randOffset(r,e){return r},randOffsetWithRange(r,e,n){return(r+e)/2},ellipse(r,e,n,a,o){return p2(r,e,n,a,o)},doubleLineOps(r,e,n,a,o){return zy(r,e,n,a,o)}};function Eo(r){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:r}}function Fy(r,e){let n="";for(const a of r.ops){const o=a.data;switch(a.op){case"move":if(e&&n)break;n+=`M${o[0]} ${o[1]} `;break;case"bcurveTo":n+=`C${o[0]} ${o[1]}, ${o[2]} ${o[3]}, ${o[4]} ${o[5]} `;break;case"lineTo":n+=`L${o[0]} ${o[1]} `;break}}return n.trim()}function go(r,e){const n=document.createElementNS("http://www.w3.org/2000/svg",r);if(e)for(const a in e)n.setAttributeNS(null,a,e[a]);return n}function Yl(r,e,n=!1){const a=go("path",{d:Fy(r,n)});return e&&e.appendChild(a),a}function fi(r,e,n,a,o,c){return Yl(Ny(e+2,n+2,a-4,o-4,Eo(c)),r)}function xn(r,e,n,a,o,c){return Yl(d2(e,n,a,o,Eo(c)),r)}function By(r,e,n){return Yl(h2(e,Eo(n)),r,!0)}function or(r,e,n,a,o,c){return a=Math.max(a>10?a-4:a-1,1),o=Math.max(o>10?o-4:o-1,1),Yl(p2(e,n,a,o,Eo(c)),r)}function af(r,e){const a=new Oy(Iy).fillPolygon(r,Eo(e));return Yl(a,null)}function vp(r,e,n,a,o){const c=Eo(o),u=m2(n,a,c),d=[];let m=0;for(;m<=Math.PI*2;)d.push([r+u.rx*Math.cos(m),e+u.ry*Math.sin(m)]),m+=u.increment;return af(d,o)}var sf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},rf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Pl=class extends bn{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};fi(e,0,0,o.width,o.height,this.seed);for(let c=1;c<a;c++)xn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,xn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`,xn(e,c*2,o.height+c*2,o.width+c*2,o.height+c*2,this.seed).style.opacity=`${(75-c*10)/100}`,xn(e,o.width+c*2,o.height+c*2,o.width+c*2,c*2,this.seed).style.opacity=`${(75-c*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};sf([Ue({type:Number}),rf("design:type",Object)],Pl.prototype,"elevation",void 0);sf([Ue({type:Boolean,reflect:!0}),rf("design:type",Object)],Pl.prototype,"disabled",void 0);sf([Nn("button"),rf("design:type",HTMLButtonElement)],Pl.prototype,"button",void 0);Pl=sf([rn("wired-button"),rf("design:paramtypes",[])],Pl);var bp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},yp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let zl=class extends bn{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const n=e.has("fill");this.wiredRender(n),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};if(this.fill&&this.fill.trim()){const c=af([[2,2],[o.width-4,2],[o.width-2,o.height-4],[2,o.height-4]],this.seed);c.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(c)}fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)xn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};bp([Ue({type:Number}),yp("design:type",Object)],zl.prototype,"elevation",void 0);bp([Ue({type:String}),yp("design:type",String)],zl.prototype,"fill",void 0);zl=bp([rn("wired-card"),yp("design:paramtypes",[])],zl);var $l=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},of=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let _o=class extends bn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[vn,an`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return nn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){fi(e,0,0,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck),xn(this.svgCheck,n[0]*.3,n[1]*.4,n[0]*.5,n[1]*.7,this.seed),xn(this.svgCheck,n[0]*.5,n[1]*.7,n[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};$l([Ue({type:Boolean}),of("design:type",Object)],_o.prototype,"checked",void 0);$l([Ue({type:Boolean,reflect:!0}),of("design:type",Object)],_o.prototype,"disabled",void 0);$l([by(),of("design:type",Object)],_o.prototype,"focused",void 0);$l([Nn("input"),of("design:type",HTMLInputElement)],_o.prototype,"input",void 0);_o=$l([rn("wired-checkbox")],_o);var lf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Sp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Il=class extends bn{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){const a=af([[0,0],[n[0],0],[n[0],n[1]],[0,n[1]]],this.seed);e.appendChild(a)}};lf([Ue(),Sp("design:type",Object)],Il.prototype,"value",void 0);lf([Ue(),Sp("design:type",Object)],Il.prototype,"name",void 0);lf([Ue({type:Boolean}),Sp("design:type",Object)],Il.prototype,"selected",void 0);Il=lf([rn("wired-item")],Il);var To=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Zl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let lr=class extends Fa{constructor(){super(...arguments),this.disabled=!1,this.seed=Ey(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return an`
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
    `}render(){return nn`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const n=this.svg;for(;n.hasChildNodes();)n.removeChild(n.lastChild);const a=this.shadowRoot.getElementById("container").getBoundingClientRect();n.setAttribute("width",`${a.width}`),n.setAttribute("height",`${a.height}`);const o=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=o.height+"px",fi(n,0,0,o.width,o.height,this.seed);const c=o.width-4;fi(n,c,0,34,o.height,this.seed);const u=Math.max(0,Math.abs((o.height-24)/2)),d=By(n,[[c+8,5+u],[c+26,5+u],[c+17,u+Math.min(o.height,18)]],this.seed);if(d.style.fill="currentColor",d.style.pointerEvents=this.disabled?"none":"auto",d.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const m=this.shadowRoot.getElementById("slot").assignedNodes();if(m&&m.length)for(let p=0;p<m.length;p++){const g=m[p];g.tagName==="WIRED-ITEM"&&(g.setAttribute("role","option"),this.itemNodes.push(g))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||c.getAttribute("value")||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(a=>a.nodeType===Node.ELEMENT_NODE).forEach(a=>{const o=a;o.requestUpdate&&o.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){xp(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};To([Ue({type:Object}),Zl("design:type",Object)],lr.prototype,"value",void 0);To([Ue({type:String,reflect:!0}),Zl("design:type",String)],lr.prototype,"selected",void 0);To([Ue({type:Boolean,reflect:!0}),Zl("design:type",Object)],lr.prototype,"disabled",void 0);To([Nn("svg"),Zl("design:type",SVGSVGElement)],lr.prototype,"svg",void 0);To([Nn("#card"),Zl("design:type",HTMLDivElement)],lr.prototype,"card",void 0);lr=To([rn("wired-combo")],lr);var cf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Mp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fl=class extends Fa{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return an`
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
    `}render(){return nn`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};cf([Ue({type:Number}),Mp("design:type",Object)],Fl.prototype,"elevation",void 0);cf([Ue({type:Boolean,reflect:!0}),Mp("design:type",Object)],Fl.prototype,"open",void 0);cf([Nn("wired-card"),Mp("design:type",zl)],Fl.prototype,"card",void 0);Fl=cf([rn("wired-dialog")],Fl);var _2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Hy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let S0=class extends bn{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[vn,an`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return nn`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5);return[e.width,n*6]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5);for(let o=0;o<a;o++)xn(e,0,o*6+3,n[0],o*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};_2([Ue({type:Number}),Hy("design:type",Object)],S0.prototype,"elevation",void 0);S0=_2([rn("wired-divider")],S0);var Ep=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},x2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Wu=class extends bn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]),o=vp(a/2,a/2,a,a,this.seed);e.appendChild(o)}};Ep([Ue({type:Boolean,reflect:!0}),x2("design:type",Object)],Wu.prototype,"disabled",void 0);Ep([Nn("button"),x2("design:type",HTMLButtonElement)],Wu.prototype,"button",void 0);Wu=Ep([rn("wired-fab")],Wu);var Tp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},v2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let qu=class extends bn{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,n){const a=Math.min(n[0],n[1]);e.setAttribute("width",`${a}`),e.setAttribute("height",`${a}`),or(e,a/2,a/2,a,a,this.seed)}};Tp([Ue({type:Boolean,reflect:!0}),v2("design:type",Object)],qu.prototype,"disabled",void 0);Tp([Nn("button"),v2("design:type",HTMLButtonElement)],qu.prototype,"button",void 0);qu=Tp([rn("wired-icon-button")],qu);var Ap=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Rp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};const Gy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Yu=class extends bn{constructor(){super(),this.elevation=1,this.src=Gy,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width+(n-1)*2,o=e.height+(n-1)*2;return[a,o]}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0]-(a-1)*2,height:n[1]-(a-1)*2};fi(e,2,2,o.width-4,o.height-4,this.seed);for(let c=1;c<a;c++)xn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,c*2,o.height-4+c*2,o.width-4+c*2,o.height-4+c*2,this.seed).style.opacity=`${(85-c*10)/100}`,xn(e,o.width-4+c*2,o.height-4+c*2,o.width-4+c*2,c*2,this.seed).style.opacity=`${(85-c*10)/100}`}};Ap([Ue({type:Number}),Rp("design:type",Object)],Yu.prototype,"elevation",void 0);Ap([Ue({type:String}),Rp("design:type",String)],Yu.prototype,"src",void 0);Yu=Ap([rn("wired-image"),Rp("design:paramtypes",[])],Yu);var Gn=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Vn=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let On=class extends bn{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};Gn([Ue({type:Boolean,reflect:!0}),Vn("design:type",Object)],On.prototype,"disabled",void 0);Gn([Ue({type:String}),Vn("design:type",Object)],On.prototype,"placeholder",void 0);Gn([Ue({type:String}),Vn("design:type",String)],On.prototype,"name",void 0);Gn([Ue({type:String}),Vn("design:type",String)],On.prototype,"min",void 0);Gn([Ue({type:String}),Vn("design:type",String)],On.prototype,"max",void 0);Gn([Ue({type:String}),Vn("design:type",String)],On.prototype,"step",void 0);Gn([Ue({type:String}),Vn("design:type",Object)],On.prototype,"type",void 0);Gn([Ue({type:String}),Vn("design:type",Object)],On.prototype,"autocomplete",void 0);Gn([Ue({type:String}),Vn("design:type",Object)],On.prototype,"autocapitalize",void 0);Gn([Ue({type:String}),Vn("design:type",Object)],On.prototype,"autocorrect",void 0);Gn([Ue({type:Boolean}),Vn("design:type",Object)],On.prototype,"required",void 0);Gn([Ue({type:Boolean}),Vn("design:type",Object)],On.prototype,"autofocus",void 0);Gn([Ue({type:Boolean}),Vn("design:type",Object)],On.prototype,"readonly",void 0);Gn([Ue({type:Number}),Vn("design:type",Number)],On.prototype,"minlength",void 0);Gn([Ue({type:Number}),Vn("design:type",Number)],On.prototype,"maxlength",void 0);Gn([Ue({type:Number}),Vn("design:type",Number)],On.prototype,"size",void 0);Gn([Nn("input"),Vn("design:type",HTMLInputElement)],On.prototype,"textInput",void 0);On=Gn([rn("wired-input"),Vn("design:paramtypes",[])],On);var Kl=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},uf=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let xo=class extends bn{constructor(){super(...arguments),this.elevation=1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),n=Math.min(Math.max(1,this.elevation),5),a=e.width,o=e.height+(n-1)*2;return[a,o]}return this.lastSize}draw(e,n){const a=Math.min(Math.max(1,this.elevation),5),o={width:n[0],height:n[1]-(a-1)*2};for(let c=0;c<a;c++)xn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed),xn(e,0,o.height+c*2-2,o.width,o.height+c*2-2,this.seed)}};Kl([Ue({type:Number}),uf("design:type",Object)],xo.prototype,"elevation",void 0);Kl([Ue({type:String}),uf("design:type",String)],xo.prototype,"href",void 0);Kl([Ue({type:String}),uf("design:type",String)],xo.prototype,"target",void 0);Kl([Nn("a"),uf("design:type",HTMLAnchorElement)],xo.prototype,"anchor",void 0);xo=Kl([rn("wired-link")],xo);var ff=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},wp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Bl=class extends bn{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let n=0;n<e.length;n++){const a=e[n];a.tagName==="WIRED-ITEM"&&(a.setAttribute("role","option"),this.itemNodes.push(a))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const n=this.shadowRoot.getElementById("slot").assignedNodes();if(n){let a=null;for(let o=0;o<n.length;o++){const c=n[o];if(c.tagName==="WIRED-ITEM"){const u=c.value||"";if(this.selected&&u===this.selected){a=c;break}}}this.lastSelectedItem=a||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),a?this.value={value:a.value||"",text:a.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.lastSelectedItem){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,0,0,n[0],n[1],this.seed)}};ff([Ue({type:Object}),wp("design:type",Object)],Bl.prototype,"value",void 0);ff([Ue({type:String}),wp("design:type",String)],Bl.prototype,"selected",void 0);ff([Ue({type:Boolean}),wp("design:type",Object)],Bl.prototype,"horizontal",void 0);Bl=ff([rn("wired-listbox")],Bl);var Ql=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},df=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let cr=class extends bn{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const n=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const a=n.width*Math.max(0,Math.min(e,100));this.progBox=af([[0,0],[a,0],[a,n.height],[0,n.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Ql([Ue({type:Number}),df("design:type",Object)],cr.prototype,"value",void 0);Ql([Ue({type:Number}),df("design:type",Object)],cr.prototype,"min",void 0);Ql([Ue({type:Number}),df("design:type",Object)],cr.prototype,"max",void 0);Ql([Ue({type:Boolean}),df("design:type",Object)],cr.prototype,"percentage",void 0);cr=Ql([rn("wired-progress")],cr);var Ao=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Jl=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ur=class extends bn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[vn,an`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return nn`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,n){or(e,n[0]/2,n[1]/2,n[0],n[1],this.seed),this.svgCheck=go("g"),e.appendChild(this.svgCheck);const a=Math.max(n[0]*.6,5),o=Math.max(n[1]*.6,5);or(this.svgCheck,n[0]/2,n[1]/2,a,o,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ao([Ue({type:Boolean}),Jl("design:type",Object)],ur.prototype,"checked",void 0);Ao([Ue({type:Boolean,reflect:!0}),Jl("design:type",Object)],ur.prototype,"disabled",void 0);Ao([Ue({type:String}),Jl("design:type",String)],ur.prototype,"name",void 0);Ao([Ue(),Jl("design:type",Object)],ur.prototype,"focused",void 0);Ao([Nn("input"),Jl("design:type",HTMLInputElement)],ur.prototype,"input",void 0);ur=Ao([rn("wired-radio")],ur);var b2=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Vy=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let M0=class extends Fa{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return an`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return nn`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const n=e.detail.checked,a=e.target,o=a.name||"";n?(this.selected=n&&o||"",this.fireSelected()):a.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const n=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],n&&n.length)for(let a=0;a<n.length;a++){const o=n[a];if(o.tagName==="WIRED-RADIO"){this.radioNodes.push(o);const c=o.name||"";this.selected&&c===this.selected?o.checked=!0:o.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a--,a<0&&(a=e.length-1),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let n=null,a=-1;if(this.selected){for(let o=0;o<e.length;o++)if(e[o].name===this.selected){a=o;break}a<0?n=e[0]:(a++,a>=e.length&&(a=0),n=e[a])}else n=e[0];n&&(n.focus(),this.selected=n.name,this.fireSelected())}}fireSelected(){xp(this,"selected",{selected:this.selected})}};b2([Ue({type:String}),Vy("design:type",String)],M0.prototype,"selected",void 0);M0=b2([rn("wired-radio-group")],M0);var hr=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Ro=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Rs=class extends bn{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.input;n&&(n.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-2,n[1]-2,this.seed),this.searchIcon=go("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),or(this.searchIcon,n[0]-30,(n[1]-30)/2+10,20,20,this.seed),xn(this.searchIcon,n[0]-10,(n[1]-30)/2+30,n[0]-25,(n[1]-30)/2+15,this.seed),this.closeIcon=go("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),xn(this.closeIcon,n[0]-33,(n[1]-30)/2+2,n[0]-7,(n[1]-30)/2+28,this.seed),xn(this.closeIcon,n[0]-7,(n[1]-30)/2+2,n[0]-33,(n[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};hr([Ue({type:Boolean,reflect:!0}),Ro("design:type",Object)],Rs.prototype,"disabled",void 0);hr([Ue({type:String}),Ro("design:type",Object)],Rs.prototype,"placeholder",void 0);hr([Ue({type:String}),Ro("design:type",Object)],Rs.prototype,"autocomplete",void 0);hr([Ue({type:String}),Ro("design:type",Object)],Rs.prototype,"autocorrect",void 0);hr([Ue({type:Boolean}),Ro("design:type",Object)],Rs.prototype,"autofocus",void 0);hr([Nn("input"),Ro("design:type",HTMLInputElement)],Rs.prototype,"textInput",void 0);Rs=hr([rn("wired-search-input")],Rs);var wo=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},ec=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let ws=class extends bn{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[vn,an`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return nn`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){this.canvasWidth=n[0];const a=Math.round(n[1]/2);xn(e,0,a,n[0],a,this.seed).classList.add("bar"),this.knob=or(e,10,a,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,n=Math.max(this.step,this.max-this.min),a=(e-this.min)/n;this.knob&&(this.knob.style.transform=`translateX(${a*(this.canvasWidth-20)}px)`)}}};wo([Ue({type:Number}),ec("design:type",Object)],ws.prototype,"min",void 0);wo([Ue({type:Number}),ec("design:type",Object)],ws.prototype,"max",void 0);wo([Ue({type:Number}),ec("design:type",Object)],ws.prototype,"step",void 0);wo([Ue({type:Boolean,reflect:!0}),ec("design:type",Object)],ws.prototype,"disabled",void 0);wo([Nn("input"),ec("design:type",HTMLInputElement)],ws.prototype,"input",void 0);ws=wo([rn("wired-slider")],ws);var Cp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let $u=class extends bn{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[vn,an`
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
      `]}render(){return nn`<svg></svg>`}canvasSize(){return[76,76]}draw(e,n){or(e,n[0]/2,n[1]/2,Math.floor(n[0]*.8),Math.floor(.8*n[1]),this.seed),this.knob=vp(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Cp([Ue({type:Boolean}),y2("design:type",Object)],$u.prototype,"spinning",void 0);Cp([Ue({type:Number}),y2("design:type",Object)],$u.prototype,"duration",void 0);$u=Cp([rn("wired-spinner")],$u);var Dp=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Op=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Zu=class extends bn{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[vn,an`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return nn`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-4,n[1]-4,this.seed)}};Dp([Ue({type:String}),Op("design:type",Object)],Zu.prototype,"name",void 0);Dp([Ue({type:String}),Op("design:type",Object)],Zu.prototype,"label",void 0);Zu=Dp([rn("wired-tab"),Op("design:paramtypes",[])],Zu);var Up=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S2=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Ku=class extends Fa{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <div id="bar">
      ${this.pages.map(e=>nn`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let n=0;n<e.length;n++){const a=e[n];if(a.nodeType===Node.ELEMENT_NODE&&a.tagName.toLowerCase()==="wired-tab"){const o=a;this.pages.push(o);const c=o.getAttribute("name")||"";c&&c.trim().split(" ").forEach(u=>{u&&this.pageMap.set(u,o)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let n=0;n<this.pages.length;n++){const a=this.pages[n];a===e?a.classList.remove("hidden"):a.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0?n=0:n===0?n=e.length-1:n--,this.selected=e[n].name||""}}selectNext(){const e=this.pages;if(e.length){let n=-1;for(let a=0;a<e.length;a++)if(e[a]===this.current){n=a;break}n<0||n>=e.length-1?n=0:n++,this.selected=e[n].name||""}}};Up([Ue({type:String}),S2("design:type",String)],Ku.prototype,"selected",void 0);Up([Nn("slot"),S2("design:type",HTMLSlotElement)],Ku.prototype,"slotElement",void 0);Ku=Up([rn("wired-tabs")],Ku);var Ai=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Bi=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let di=class extends bn{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const n=this.textarea;if(n){n.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,4,4,n[0]-4,n[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ai([Ue({type:Boolean,reflect:!0}),Bi("design:type",Object)],di.prototype,"disabled",void 0);Ai([Ue({type:Number}),Bi("design:type",Object)],di.prototype,"rows",void 0);Ai([Ue({type:Number}),Bi("design:type",Object)],di.prototype,"maxrows",void 0);Ai([Ue({type:String}),Bi("design:type",Object)],di.prototype,"autocomplete",void 0);Ai([Ue({type:Boolean}),Bi("design:type",Object)],di.prototype,"autofocus",void 0);Ai([Ue({type:String}),Bi("design:type",Object)],di.prototype,"inputmode",void 0);Ai([Ue({type:String}),Bi("design:type",Object)],di.prototype,"placeholder",void 0);Ai([Ue({type:Boolean}),Bi("design:type",Object)],di.prototype,"required",void 0);Ai([Ue({type:Boolean}),Bi("design:type",Object)],di.prototype,"readonly",void 0);Ai([Ue({type:Number}),Bi("design:type",Number)],di.prototype,"minlength",void 0);Ai([Ue({type:Number}),Bi("design:type",Number)],di.prototype,"maxlength",void 0);Ai([Nn("textarea"),Bi("design:type",HTMLTextAreaElement)],di.prototype,"textareaInput",void 0);di=Ai([rn("wired-textarea")],di);var hf=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},Lp=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Hl=class extends bn{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[vn,an`
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
      `]}render(){return nn`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,n){fi(e,16,8,n[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=go("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const o=vp(16,16,32,32,this.seed);o.classList.add("knobfill"),this.knob.appendChild(o),or(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};hf([Ue({type:Boolean}),Lp("design:type",Object)],Hl.prototype,"checked",void 0);hf([Ue({type:Boolean,reflect:!0}),Lp("design:type",Object)],Hl.prototype,"disabled",void 0);hf([Nn("input"),Lp("design:type",HTMLInputElement)],Hl.prototype,"input",void 0);Hl=hf([rn("wired-toggle")],Hl);var Yi=function(r,e,n,a){var o=arguments.length,c=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,n):a,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(r,e,n,a);else for(var d=r.length-1;d>=0;d--)(u=r[d])&&(c=(o<3?u(c):o>3?u(e,n,c):u(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},$i=function(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)};let Fi=class extends bn{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[vn,an`
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
      `]}render(){return nn`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,n){fi(e,2,2,n[0]-4,n[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const n=Math.floor(e/60),a=Math.round(e-n*60);return`${n}:${a}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};Yi([Ue({type:String}),$i("design:type",Object)],Fi.prototype,"src",void 0);Yi([Ue({type:Boolean}),$i("design:type",Object)],Fi.prototype,"autoplay",void 0);Yi([Ue({type:Boolean}),$i("design:type",Object)],Fi.prototype,"loop",void 0);Yi([Ue({type:Boolean}),$i("design:type",Object)],Fi.prototype,"muted",void 0);Yi([Ue({type:Boolean}),$i("design:type",Object)],Fi.prototype,"playsinline",void 0);Yi([Ue(),$i("design:type",Object)],Fi.prototype,"playing",void 0);Yi([Ue(),$i("design:type",Object)],Fi.prototype,"timeDisplay",void 0);Yi([Nn("wired-progress"),$i("design:type",cr)],Fi.prototype,"progressBar",void 0);Yi([Nn("wired-slider"),$i("design:type",ws)],Fi.prototype,"slider",void 0);Yi([Nn("video"),$i("design:type",HTMLVideoElement)],Fi.prototype,"video",void 0);Fi=Yi([rn("wired-video"),$i("design:paramtypes",[])],Fi);function M2(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ch={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx;function jy(){if(kx)return yl;kx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var d in o)d!=="key"&&(c[d]=o[d])}else c=o;return o=c.ref,{$$typeof:r,type:a,key:u,ref:o!==void 0?o:null,props:c}}return yl.Fragment=e,yl.jsx=n,yl.jsxs=n,yl}var Xx;function ky(){return Xx||(Xx=1,Ch.exports=jy()),Ch.exports}var re=ky(),Dh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wx;function Xy(){if(Wx)return dt;Wx=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,S={};function v(D,ie,Se){this.props=D,this.context=ie,this.refs=S,this.updater=Se||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,ie){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ie,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=v.prototype;function U(D,ie,Se){this.props=D,this.context=ie,this.refs=S,this.updater=Se||M}var I=U.prototype=new L;I.constructor=U,A(I,v.prototype),I.isPureReactComponent=!0;var j=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function C(D,ie,Se){var Te=Se.ref;return{$$typeof:r,type:D,key:ie,ref:Te!==void 0?Te:null,props:Se}}function w(D,ie){return C(D.type,ie,D.props)}function G(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function ne(D){var ie={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Se){return ie[Se]})}var fe=/\/+/g;function ge(D,ie){return typeof D=="object"&&D!==null&&D.key!=null?ne(""+D.key):ie.toString(36)}function K(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(N,N):(D.status="pending",D.then(function(ie){D.status==="pending"&&(D.status="fulfilled",D.value=ie)},function(ie){D.status==="pending"&&(D.status="rejected",D.reason=ie)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,ie,Se,Te,Le){var ae=typeof D;(ae==="undefined"||ae==="boolean")&&(D=null);var ue=!1;if(D===null)ue=!0;else switch(ae){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(D.$$typeof){case r:case e:ue=!0;break;case g:return ue=D._init,P(ue(D._payload),ie,Se,Te,Le)}}if(ue)return Le=Le(D),ue=Te===""?"."+ge(D,0):Te,j(Le)?(Se="",ue!=null&&(Se=ue.replace(fe,"$&/")+"/"),P(Le,ie,Se,"",function(Qe){return Qe})):Le!=null&&(G(Le)&&(Le=w(Le,Se+(Le.key==null||D&&D.key===Le.key?"":(""+Le.key).replace(fe,"$&/")+"/")+ue)),ie.push(Le)),1;ue=0;var Ne=Te===""?".":Te+":";if(j(D))for(var Xe=0;Xe<D.length;Xe++)Te=D[Xe],ae=Ne+ge(Te,Xe),ue+=P(Te,ie,Se,ae,Le);else if(Xe=y(D),typeof Xe=="function")for(D=Xe.call(D),Xe=0;!(Te=D.next()).done;)Te=Te.value,ae=Ne+ge(Te,Xe++),ue+=P(Te,ie,Se,ae,Le);else if(ae==="object"){if(typeof D.then=="function")return P(K(D),ie,Se,Te,Le);throw ie=String(D),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function q(D,ie,Se){if(D==null)return D;var Te=[],Le=0;return P(D,Te,"","",function(ae){return ie.call(Se,ae,Le++)}),Te}function Y(D){if(D._status===-1){var ie=D._result;ie=ie(),ie.then(function(Se){(D._status===0||D._status===-1)&&(D._status=1,D._result=Se)},function(Se){(D._status===0||D._status===-1)&&(D._status=2,D._result=Se)}),D._status===-1&&(D._status=0,D._result=ie)}if(D._status===1)return D._result.default;throw D._result}var he=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},pe={map:q,forEach:function(D,ie,Se){q(D,function(){ie.apply(this,arguments)},Se)},count:function(D){var ie=0;return q(D,function(){ie++}),ie},toArray:function(D){return q(D,function(ie){return ie})||[]},only:function(D){if(!G(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return dt.Activity=_,dt.Children=pe,dt.Component=v,dt.Fragment=n,dt.Profiler=o,dt.PureComponent=U,dt.StrictMode=a,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,dt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},dt.cache=function(D){return function(){return D.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(D,ie,Se){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Te=A({},D.props),Le=D.key;if(ie!=null)for(ae in ie.key!==void 0&&(Le=""+ie.key),ie)!Q.call(ie,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&ie.ref===void 0||(Te[ae]=ie[ae]);var ae=arguments.length-2;if(ae===1)Te.children=Se;else if(1<ae){for(var ue=Array(ae),Ne=0;Ne<ae;Ne++)ue[Ne]=arguments[Ne+2];Te.children=ue}return C(D.type,Le,Te)},dt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},dt.createElement=function(D,ie,Se){var Te,Le={},ae=null;if(ie!=null)for(Te in ie.key!==void 0&&(ae=""+ie.key),ie)Q.call(ie,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(Le[Te]=ie[Te]);var ue=arguments.length-2;if(ue===1)Le.children=Se;else if(1<ue){for(var Ne=Array(ue),Xe=0;Xe<ue;Xe++)Ne[Xe]=arguments[Xe+2];Le.children=Ne}if(D&&D.defaultProps)for(Te in ue=D.defaultProps,ue)Le[Te]===void 0&&(Le[Te]=ue[Te]);return C(D,ae,Le)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(D){return{$$typeof:d,render:D}},dt.isValidElement=G,dt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:Y}},dt.memo=function(D,ie){return{$$typeof:p,type:D,compare:ie===void 0?null:ie}},dt.startTransition=function(D){var ie=z.T,Se={};z.T=Se;try{var Te=D(),Le=z.S;Le!==null&&Le(Se,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,he)}catch(ae){he(ae)}finally{ie!==null&&Se.types!==null&&(ie.types=Se.types),z.T=ie}},dt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},dt.use=function(D){return z.H.use(D)},dt.useActionState=function(D,ie,Se){return z.H.useActionState(D,ie,Se)},dt.useCallback=function(D,ie){return z.H.useCallback(D,ie)},dt.useContext=function(D){return z.H.useContext(D)},dt.useDebugValue=function(){},dt.useDeferredValue=function(D,ie){return z.H.useDeferredValue(D,ie)},dt.useEffect=function(D,ie){return z.H.useEffect(D,ie)},dt.useEffectEvent=function(D){return z.H.useEffectEvent(D)},dt.useId=function(){return z.H.useId()},dt.useImperativeHandle=function(D,ie,Se){return z.H.useImperativeHandle(D,ie,Se)},dt.useInsertionEffect=function(D,ie){return z.H.useInsertionEffect(D,ie)},dt.useLayoutEffect=function(D,ie){return z.H.useLayoutEffect(D,ie)},dt.useMemo=function(D,ie){return z.H.useMemo(D,ie)},dt.useOptimistic=function(D,ie){return z.H.useOptimistic(D,ie)},dt.useReducer=function(D,ie,Se){return z.H.useReducer(D,ie,Se)},dt.useRef=function(D){return z.H.useRef(D)},dt.useState=function(D){return z.H.useState(D)},dt.useSyncExternalStore=function(D,ie,Se){return z.H.useSyncExternalStore(D,ie,Se)},dt.useTransition=function(){return z.H.useTransition()},dt.version="19.2.1",dt}var qx;function Np(){return qx||(qx=1,Dh.exports=Xy()),Dh.exports}var Ke=Np();const Wy=M2(Ke);var Oh={exports:{}},Sl={},Uh={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx;function qy(){return Yx||(Yx=1,(function(r){function e(P,q){var Y=P.length;P.push(q);e:for(;0<Y;){var he=Y-1>>>1,pe=P[he];if(0<o(pe,q))P[he]=q,P[Y]=pe,Y=he;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var q=P[0],Y=P.pop();if(Y!==q){P[0]=Y;e:for(var he=0,pe=P.length,D=pe>>>1;he<D;){var ie=2*(he+1)-1,Se=P[ie],Te=ie+1,Le=P[Te];if(0>o(Se,Y))Te<pe&&0>o(Le,Se)?(P[he]=Le,P[Te]=Y,he=Te):(P[he]=Se,P[ie]=Y,he=ie);else if(Te<pe&&0>o(Le,Y))P[he]=Le,P[Te]=Y,he=Te;else break e}}return q}function o(P,q){var Y=P.sortIndex-q.sortIndex;return Y!==0?Y:P.id-q.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var m=[],p=[],g=1,_=null,x=3,y=!1,M=!1,A=!1,S=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(P){for(var q=n(p);q!==null;){if(q.callback===null)a(p);else if(q.startTime<=P)a(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=n(p)}}function j(P){if(A=!1,I(P),!M)if(n(m)!==null)M=!0,N||(N=!0,ne());else{var q=n(p);q!==null&&K(j,q.startTime-P)}}var N=!1,z=-1,Q=5,C=-1;function w(){return S?!0:!(r.unstable_now()-C<Q)}function G(){if(S=!1,N){var P=r.unstable_now();C=P;var q=!0;try{e:{M=!1,A&&(A=!1,L(z),z=-1),y=!0;var Y=x;try{t:{for(I(P),_=n(m);_!==null&&!(_.expirationTime>P&&w());){var he=_.callback;if(typeof he=="function"){_.callback=null,x=_.priorityLevel;var pe=he(_.expirationTime<=P);if(P=r.unstable_now(),typeof pe=="function"){_.callback=pe,I(P),q=!0;break t}_===n(m)&&a(m),I(P)}else a(m);_=n(m)}if(_!==null)q=!0;else{var D=n(p);D!==null&&K(j,D.startTime-P),q=!1}}break e}finally{_=null,x=Y,y=!1}q=void 0}}finally{q?ne():N=!1}}}var ne;if(typeof U=="function")ne=function(){U(G)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ge=fe.port2;fe.port1.onmessage=G,ne=function(){ge.postMessage(null)}}else ne=function(){v(G,0)};function K(P,q){z=v(function(){P(r.unstable_now())},q)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(P){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var Y=x;x=q;try{return P()}finally{x=Y}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=x;x=P;try{return q()}finally{x=Y}},r.unstable_scheduleCallback=function(P,q,Y){var he=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?he+Y:he):Y=he,P){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=Y+pe,P={id:g++,callback:q,priorityLevel:P,startTime:Y,expirationTime:pe,sortIndex:-1},Y>he?(P.sortIndex=Y,e(p,P),n(m)===null&&P===n(p)&&(A?(L(z),z=-1):A=!0,K(j,Y-he))):(P.sortIndex=pe,e(m,P),M||y||(M=!0,N||(N=!0,ne()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var q=x;return function(){var Y=x;x=q;try{return P.apply(this,arguments)}finally{x=Y}}}})(Lh)),Lh}var $x;function Yy(){return $x||($x=1,Uh.exports=qy()),Uh.exports}var Nh={exports:{}},$n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zx;function $y(){if(Zx)return $n;Zx=1;var r=Np();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var u=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return $n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,$n.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},$n.flushSync=function(m){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=g,a.d.f()}},$n.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},$n.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},$n.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:y}):g==="script"&&a.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},$n.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},$n.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);a.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},$n.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},$n.requestFormReset=function(m){a.d.r(m)},$n.unstable_batchedUpdates=function(m,p){return m(p)},$n.useFormState=function(m,p,g){return u.H.useFormState(m,p,g)},$n.useFormStatus=function(){return u.H.useHostTransitionStatus()},$n.version="19.2.1",$n}var Kx;function Zy(){if(Kx)return Nh.exports;Kx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nh.exports=$y(),Nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qx;function Ky(){if(Qx)return Sl;Qx=1;var r=Yy(),e=Np(),n=Zy();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function d(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(a(188))}function p(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var f=s.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===s)return m(f),t;if(h===l)return m(f),i;h=h.sibling}throw Error(a(188))}if(s.return!==l.return)s=f,l=h;else{for(var b=!1,R=f.child;R;){if(R===s){b=!0,s=f,l=h;break}if(R===l){b=!0,l=f,s=h;break}R=R.sibling}if(!b){for(R=h.child;R;){if(R===s){b=!0,s=h,l=f;break}if(R===l){b=!0,l=h,s=f;break}R=R.sibling}if(!b)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function g(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=g(t),i!==null)return i;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function ne(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case v:return"Profiler";case S:return"StrictMode";case j:return"Suspense";case N:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case U:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case I:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return i=t.displayName||null,i!==null?i:ge(t.type)||"Memo";case Q:i=t._payload,t=t._init;try{return ge(t(i))}catch{}}return null}var K=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},he=[],pe=-1;function D(t){return{current:t}}function ie(t){0>pe||(t.current=he[pe],he[pe]=null,pe--)}function Se(t,i){pe++,he[pe]=t.current,t.current=i}var Te=D(null),Le=D(null),ae=D(null),ue=D(null);function Ne(t,i){switch(Se(ae,i),Se(Le,t),Se(Te,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?J_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=J_(i),t=ex(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Te),Se(Te,t)}function Xe(){ie(Te),ie(Le),ie(ae)}function Qe(t){t.memoizedState!==null&&Se(ue,t);var i=Te.current,s=ex(i,t.type);i!==s&&(Se(Le,t),Se(Te,s))}function ut(t){Le.current===t&&(ie(Te),ie(Le)),ue.current===t&&(ie(ue),gl._currentValue=Y)}var on,mt;function Ut(t){if(on===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);on=i&&i[1]||"",mt=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+on+t+mt}var B=!1;function pt(t,i){if(!t||B)return"";B=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(ce){var se=ce}Reflect.construct(t,[],be)}else{try{be.call()}catch(ce){se=ce}t.call(be.prototype)}}else{try{throw Error()}catch(ce){se=ce}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(ce){if(ce&&se&&typeof ce.stack=="string")return[ce.stack,se.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=l.DetermineComponentFrameRoot(),b=h[0],R=h[1];if(b&&R){var F=b.split(`
`),te=R.split(`
`);for(f=l=0;l<F.length&&!F[l].includes("DetermineComponentFrameRoot");)l++;for(;f<te.length&&!te[f].includes("DetermineComponentFrameRoot");)f++;if(l===F.length||f===te.length)for(l=F.length-1,f=te.length-1;1<=l&&0<=f&&F[l]!==te[f];)f--;for(;1<=l&&0<=f;l--,f--)if(F[l]!==te[f]){if(l!==1||f!==1)do if(l--,f--,0>f||F[l]!==te[f]){var me=`
`+F[l].replace(" at new "," at ");return t.displayName&&me.includes("<anonymous>")&&(me=me.replace("<anonymous>",t.displayName)),me}while(1<=l&&0<=f);break}}}finally{B=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ut(s):""}function _t(t,i){switch(t.tag){case 26:case 27:case 5:return Ut(t.type);case 16:return Ut("Lazy");case 13:return t.child!==i&&i!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return pt(t.type,!1);case 11:return pt(t.type.render,!1);case 1:return pt(t.type,!0);case 31:return Ut("Activity");default:return""}}function Nt(t){try{var i="",s=null;do i+=_t(t,s),s=t,t=t.return;while(t);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var We=Object.prototype.hasOwnProperty,jt=r.unstable_scheduleCallback,tt=r.unstable_cancelCallback,lt=r.unstable_shouldYield,O=r.unstable_requestPaint,E=r.unstable_now,J=r.unstable_getCurrentPriorityLevel,_e=r.unstable_ImmediatePriority,Ee=r.unstable_UserBlockingPriority,de=r.unstable_NormalPriority,nt=r.unstable_LowPriority,oe=r.unstable_IdlePriority,Ce=r.log,Fe=r.unstable_setDisableYieldValue,ye=null,Ae=null;function ke(t){if(typeof Ce=="function"&&Fe(t),Ae&&typeof Ae.setStrictMode=="function")try{Ae.setStrictMode(ye,t)}catch{}}var Ve=Math.clz32?Math.clz32:H,Ie=Math.log,ot=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Ie(t)/ot|0)|0}var ze=256,Oe=262144,De=4194304;function Re(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var f=0,h=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var R=l&134217727;return R!==0?(l=R&~h,l!==0?f=Re(l):(b&=R,b!==0?f=Re(b):s||(s=R&~t,s!==0&&(f=Re(s))))):(R=l&~h,R!==0?f=Re(R):b!==0?f=Re(b):s||(s=l&~t,s!==0&&(f=Re(s)))),f===0?0:i!==0&&i!==f&&(i&h)===0&&(h=f&-f,s=i&-i,h>=s||h===32&&(s&4194048)!==0)?i:f}function je(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function st(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Ct(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Rn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function ei(t,i,s,l,f,h){var b=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,te=t.hiddenUpdates;for(s=b&~s;0<s;){var me=31-Ve(s),be=1<<me;R[me]=0,F[me]=-1;var se=te[me];if(se!==null)for(te[me]=null,me=0;me<se.length;me++){var ce=se[me];ce!==null&&(ce.lane&=-536870913)}s&=~be}l!==0&&pr(t,l,0),h!==0&&f===0&&t.tag!==0&&(t.suspendedLanes|=h&~(b&~i))}function pr(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-Ve(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&261930}function Xa(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Ve(s),f=1<<l;f&i|t[l]&i&&(t[l]|=i),s&=~f}}function mr(t,i){var s=i&-i;return s=(s&42)!==0?1:hi(s),(s&(t.suspendedLanes|i))!==0?0:s}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function la(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wa(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:Mx(t.type))}function Ki(t,i){var s=q.p;try{return q.p=t,i()}finally{q.p=s}}var yn=Math.random().toString(36).slice(2),cn="__reactFiber$"+yn,un="__reactProps$"+yn,Ri="__reactContainer$"+yn,ca="__reactEvents$"+yn,Uo="__reactListeners$"+yn,gr="__reactHandles$"+yn,Ds="__reactResources$"+yn,Ye="__reactMarker$"+yn;function ct(t){delete t[cn],delete t[un],delete t[ca],delete t[Uo],delete t[gr]}function Ft(t){var i=t[cn];if(i)return i;for(var s=t.parentNode;s;){if(i=s[Ri]||s[cn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=ox(t);t!==null;){if(s=t[cn])return s;t=ox(t)}return i}t=s,s=t.parentNode}return null}function T(t){if(t=t[cn]||t[Ri]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function k(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function Z(t){var i=t[Ds];return i||(i=t[Ds]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(t){t[Ye]=!0}var X=new Set,Me={};function we(t,i){Ge(t,i),Ge(t+"Capture",i)}function Ge(t,i){for(Me[t]=i,t=0;t<i.length;t++)X.add(i[t])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qe={},Je={};function $e(t){return We.call(Je,t)?!0:We.call(qe,t)?!1:Pe.test(t)?Je[t]=!0:(qe[t]=!0,!1)}function at(t,i,s){if($e(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function xt(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function vt(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Et(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Be(t,i,s){var l=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,h=l.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,h.call(this,b)}}),Object.defineProperty(t,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Bt(t){if(!t._valueTracker){var i=Et(t)?"checked":"value";t._valueTracker=Be(t,i,""+t[i])}}function bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Et(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function ln(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Qi=/[\n"\\]/g;function Qt(t){return t.replace(Qi,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ua(t,i,s,l,f,h,b,R){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),i!=null?b==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+ft(i)):t.value!==""+ft(i)&&(t.value=""+ft(i)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),i!=null?Pn(t,b,ft(i)):s!=null?Pn(t,b,ft(s)):l!=null&&t.removeAttribute("value"),f==null&&h!=null&&(t.defaultChecked=!!h),f!=null&&(t.checked=f&&typeof f!="function"&&typeof f!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+ft(R):t.removeAttribute("name")}function Jt(t,i,s,l,f,h,b,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),i!=null||s!=null){if(!(h!=="submit"&&h!=="reset"||i!=null)){Bt(t);return}s=s!=null?""+ft(s):"",i=i!=null?""+ft(i):s,R||i===t.value||(t.value=i),t.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=R?t.checked:!!l,t.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Bt(t)}function Pn(t,i,s){i==="number"&&ln(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function wn(t,i,s,l){if(t=t.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<t.length;s++)f=i.hasOwnProperty("$"+t[s].value),t[s].selected!==f&&(t[s].selected=f),f&&l&&(t[s].defaultSelected=!0)}else{for(s=""+ft(s),i=null,f=0;f<t.length;f++){if(t[f].value===s){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function zn(t,i,s){if(i!=null&&(i=""+ft(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+ft(s):""}function jn(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(K(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=ft(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l),Bt(t)}function Ji(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var fa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||fa.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Kp(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Zp(t,f,l)}else for(var h in i)i.hasOwnProperty(h)&&Zp(t,h,i[h])}function xf(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var e1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),t1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rc(t){return t1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function da(){}var vf=null;function bf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _r=null,xr=null;function Qp(t){var i=T(t);if(i&&(t=i.stateNode)){var s=t[un]||null;e:switch(t=i.stateNode,i.type){case"input":if(ua(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Qt(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var f=l[un]||null;if(!f)throw Error(a(90));ua(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&bt(l)}break e;case"textarea":zn(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&wn(t,!!s.multiple,i,!1)}}}var yf=!1;function Jp(t,i,s){if(yf)return t(i,s);yf=!0;try{var l=t(i);return l}finally{if(yf=!1,(_r!==null||xr!==null)&&(qc(),_r&&(i=_r,t=xr,xr=_r=null,Qp(i),t)))for(i=0;i<t.length;i++)Qp(t[i])}}function Lo(t,i){var s=t.stateNode;if(s===null)return null;var l=s[un]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=!1;if(ha)try{var No={};Object.defineProperty(No,"passive",{get:function(){Sf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Sf=!1}var qa=null,Mf=null,oc=null;function em(){if(oc)return oc;var t,i=Mf,s=i.length,l,f="value"in qa?qa.value:qa.textContent,h=f.length;for(t=0;t<s&&i[t]===f[t];t++);var b=s-t;for(l=1;l<=b&&i[s-l]===f[h-l];l++);return oc=f.slice(t,1<l?1-l:void 0)}function lc(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function cc(){return!0}function tm(){return!1}function ti(t){function i(s,l,f,h,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=b,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(s=t[R],this[R]=s?s(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cc:tm,this.isPropagationStopped=tm,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=cc)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=cc)},persist:function(){},isPersistent:cc}),i}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=ti(Os),Po=_({},Os,{view:0,detail:0}),n1=ti(Po),Ef,Tf,zo,fc=_({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zo&&(zo&&t.type==="mousemove"?(Ef=t.screenX-zo.screenX,Tf=t.screenY-zo.screenY):Tf=Ef=0,zo=t),Ef)},movementY:function(t){return"movementY"in t?t.movementY:Tf}}),nm=ti(fc),i1=_({},fc,{dataTransfer:0}),a1=ti(i1),s1=_({},Po,{relatedTarget:0}),Af=ti(s1),r1=_({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),o1=ti(r1),l1=_({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),c1=ti(l1),u1=_({},Os,{data:0}),im=ti(u1),f1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},d1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},h1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function p1(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=h1[t])?!!i[t]:!1}function Rf(){return p1}var m1=_({},Po,{key:function(t){if(t.key){var i=f1[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=lc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?d1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rf,charCode:function(t){return t.type==="keypress"?lc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?lc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),g1=ti(m1),_1=_({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),am=ti(_1),x1=_({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rf}),v1=ti(x1),b1=_({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),y1=ti(b1),S1=_({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M1=ti(S1),E1=_({},Os,{newState:0,oldState:0}),T1=ti(E1),A1=[9,13,27,32],wf=ha&&"CompositionEvent"in window,Io=null;ha&&"documentMode"in document&&(Io=document.documentMode);var R1=ha&&"TextEvent"in window&&!Io,sm=ha&&(!wf||Io&&8<Io&&11>=Io),rm=" ",om=!1;function lm(t,i){switch(t){case"keyup":return A1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vr=!1;function w1(t,i){switch(t){case"compositionend":return cm(i);case"keypress":return i.which!==32?null:(om=!0,rm);case"textInput":return t=i.data,t===rm&&om?null:t;default:return null}}function C1(t,i){if(vr)return t==="compositionend"||!wf&&lm(t,i)?(t=em(),oc=Mf=qa=null,vr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return sm&&i.locale!=="ko"?null:i.data;default:return null}}var D1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function um(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!D1[t.type]:i==="textarea"}function fm(t,i,s,l){_r?xr?xr.push(l):xr=[l]:_r=l,i=eu(i,"onChange"),0<i.length&&(s=new uc("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Fo=null,Bo=null;function O1(t){q_(t,0)}function dc(t){var i=k(t);if(bt(i))return t}function dm(t,i){if(t==="change")return i}var hm=!1;if(ha){var Cf;if(ha){var Df="oninput"in document;if(!Df){var pm=document.createElement("div");pm.setAttribute("oninput","return;"),Df=typeof pm.oninput=="function"}Cf=Df}else Cf=!1;hm=Cf&&(!document.documentMode||9<document.documentMode)}function mm(){Fo&&(Fo.detachEvent("onpropertychange",gm),Bo=Fo=null)}function gm(t){if(t.propertyName==="value"&&dc(Bo)){var i=[];fm(i,Bo,t,bf(t)),Jp(O1,i)}}function U1(t,i,s){t==="focusin"?(mm(),Fo=i,Bo=s,Fo.attachEvent("onpropertychange",gm)):t==="focusout"&&mm()}function L1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dc(Bo)}function N1(t,i){if(t==="click")return dc(i)}function P1(t,i){if(t==="input"||t==="change")return dc(i)}function z1(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var pi=typeof Object.is=="function"?Object.is:z1;function Ho(t,i){if(pi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!We.call(i,f)||!pi(t[f],i[f]))return!1}return!0}function _m(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xm(t,i){var s=_m(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=_m(s)}}function vm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?vm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=ln(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=ln(t.document)}return i}function Of(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var I1=ha&&"documentMode"in document&&11>=document.documentMode,br=null,Uf=null,Go=null,Lf=!1;function ym(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Lf||br==null||br!==ln(l)||(l=br,"selectionStart"in l&&Of(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Go&&Ho(Go,l)||(Go=l,l=eu(Uf,"onSelect"),0<l.length&&(i=new uc("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=br)))}function Us(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var yr={animationend:Us("Animation","AnimationEnd"),animationiteration:Us("Animation","AnimationIteration"),animationstart:Us("Animation","AnimationStart"),transitionrun:Us("Transition","TransitionRun"),transitionstart:Us("Transition","TransitionStart"),transitioncancel:Us("Transition","TransitionCancel"),transitionend:Us("Transition","TransitionEnd")},Nf={},Sm={};ha&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ls(t){if(Nf[t])return Nf[t];if(!yr[t])return t;var i=yr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in Sm)return Nf[t]=i[s];return t}var Mm=Ls("animationend"),Em=Ls("animationiteration"),Tm=Ls("animationstart"),F1=Ls("transitionrun"),B1=Ls("transitionstart"),H1=Ls("transitioncancel"),Am=Ls("transitionend"),Rm=new Map,Pf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pf.push("scrollEnd");function Hi(t,i){Rm.set(t,i),we(i,[t])}var hc=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wi=[],Sr=0,zf=0;function pc(){for(var t=Sr,i=zf=Sr=0;i<t;){var s=wi[i];wi[i++]=null;var l=wi[i];wi[i++]=null;var f=wi[i];wi[i++]=null;var h=wi[i];if(wi[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}h!==0&&wm(s,f,h)}}function mc(t,i,s,l){wi[Sr++]=t,wi[Sr++]=i,wi[Sr++]=s,wi[Sr++]=l,zf|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function If(t,i,s,l){return mc(t,i,s,l),gc(t)}function Ns(t,i){return mc(t,null,null,i),gc(t)}function wm(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var f=!1,h=t.return;h!==null;)h.childLanes|=s,l=h.alternate,l!==null&&(l.childLanes|=s),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(f=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,f&&i!==null&&(f=31-Ve(s),t=h.hiddenUpdates,l=t[f],l===null?t[f]=[i]:l.push(i),i.lane=s|536870912),h):null}function gc(t){if(50<cl)throw cl=0,Wd=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Mr={};function G1(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(t,i,s,l){return new G1(t,i,s,l)}function Ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pa(t,i){var s=t.alternate;return s===null?(s=mi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Cm(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function _c(t,i,s,l,f,h){var b=0;if(l=t,typeof t=="function")Ff(t)&&(b=1);else if(typeof t=="string")b=Wb(t,s,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=mi(31,s,i,f),t.elementType=C,t.lanes=h,t;case A:return Ps(s.children,f,h,i);case S:b=8,f|=24;break;case v:return t=mi(12,s,i,f|2),t.elementType=v,t.lanes=h,t;case j:return t=mi(13,s,i,f),t.elementType=j,t.lanes=h,t;case N:return t=mi(19,s,i,f),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:b=10;break e;case L:b=9;break e;case I:b=11;break e;case z:b=14;break e;case Q:b=16,l=null;break e}b=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=mi(b,s,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Ps(t,i,s,l){return t=mi(7,t,l,i),t.lanes=s,t}function Bf(t,i,s){return t=mi(6,t,null,i),t.lanes=s,t}function Dm(t){var i=mi(18,null,null,0);return i.stateNode=t,i}function Hf(t,i,s){return i=mi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Om=new WeakMap;function Ci(t,i){if(typeof t=="object"&&t!==null){var s=Om.get(t);return s!==void 0?s:(i={value:t,source:i,stack:Nt(i)},Om.set(t,i),i)}return{value:t,source:i,stack:Nt(i)}}var Er=[],Tr=0,xc=null,Vo=0,Di=[],Oi=0,Ya=null,ea=1,ta="";function ma(t,i){Er[Tr++]=Vo,Er[Tr++]=xc,xc=t,Vo=i}function Um(t,i,s){Di[Oi++]=ea,Di[Oi++]=ta,Di[Oi++]=Ya,Ya=t;var l=ea;t=ta;var f=32-Ve(l)-1;l&=~(1<<f),s+=1;var h=32-Ve(i)+f;if(30<h){var b=f-f%5;h=(l&(1<<b)-1).toString(32),l>>=b,f-=b,ea=1<<32-Ve(i)+f|s<<f|l,ta=h+t}else ea=1<<h|s<<f|l,ta=t}function Gf(t){t.return!==null&&(ma(t,1),Um(t,1,0))}function Vf(t){for(;t===xc;)xc=Er[--Tr],Er[Tr]=null,Vo=Er[--Tr],Er[Tr]=null;for(;t===Ya;)Ya=Di[--Oi],Di[Oi]=null,ta=Di[--Oi],Di[Oi]=null,ea=Di[--Oi],Di[Oi]=null}function Lm(t,i){Di[Oi++]=ea,Di[Oi++]=ta,Di[Oi++]=Ya,ea=i.id,ta=i.overflow,Ya=t}var kn=null,en=null,Dt=!1,$a=null,Ui=!1,jf=Error(a(519));function Za(t){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jo(Ci(i,t)),jf}function Nm(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[cn]=t,i[un]=l,s){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(s=0;s<fl.length;s++)At(fl[s],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":At("invalid",i),Jt(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":At("invalid",i);break;case"textarea":At("invalid",i),jn(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||K_(i.textContent,s)?(l.popover!=null&&(At("beforetoggle",i),At("toggle",i)),l.onScroll!=null&&At("scroll",i),l.onScrollEnd!=null&&At("scrollend",i),l.onClick!=null&&(i.onclick=da),i=!0):i=!1,i||Za(t,!0)}function Pm(t){for(kn=t.return;kn;)switch(kn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:kn=kn.return}}function Ar(t){if(t!==kn)return!1;if(!Dt)return Pm(t),Dt=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||oh(t.type,t.memoizedProps)),s=!s),s&&en&&Za(t),Pm(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=rx(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));en=rx(t)}else i===27?(i=en,us(t.type)?(t=dh,dh=null,en=t):en=i):en=kn?Ni(t.stateNode.nextSibling):null;return!0}function zs(){en=kn=null,Dt=!1}function kf(){var t=$a;return t!==null&&(si===null?si=t:si.push.apply(si,t),$a=null),t}function jo(t){$a===null?$a=[t]:$a.push(t)}var Xf=D(null),Is=null,ga=null;function Ka(t,i,s){Se(Xf,i._currentValue),i._currentValue=s}function _a(t){t._currentValue=Xf.current,ie(Xf)}function Wf(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function qf(t,i,s,l){var f=t.child;for(f!==null&&(f.return=t);f!==null;){var h=f.dependencies;if(h!==null){var b=f.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=f;for(var F=0;F<i.length;F++)if(R.context===i[F]){h.lanes|=s,R=h.alternate,R!==null&&(R.lanes|=s),Wf(h.return,s,t),l||(b=null);break e}h=R.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(a(341));b.lanes|=s,h=b.alternate,h!==null&&(h.lanes|=s),Wf(b,s,t),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===t){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Rr(t,i,s,l){t=null;for(var f=i,h=!1;f!==null;){if(!h){if((f.flags&524288)!==0)h=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var R=f.type;pi(f.pendingProps.value,b.value)||(t!==null?t.push(R):t=[R])}}else if(f===ue.current){if(b=f.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(t!==null?t.push(gl):t=[gl])}f=f.return}t!==null&&qf(i,t,s,l),i.flags|=262144}function vc(t){for(t=t.firstContext;t!==null;){if(!pi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fs(t){Is=t,ga=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return zm(Is,t)}function bc(t,i){return Is===null&&Fs(t),zm(t,i)}function zm(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},ga===null){if(t===null)throw Error(a(308));ga=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else ga=ga.next=i;return s}var V1=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},j1=r.unstable_scheduleCallback,k1=r.unstable_NormalPriority,Sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yf(){return{controller:new V1,data:new Map,refCount:0}}function ko(t){t.refCount--,t.refCount===0&&j1(k1,function(){t.controller.abort()})}var Xo=null,$f=0,wr=0,Cr=null;function X1(t,i){if(Xo===null){var s=Xo=[];$f=0,wr=Qd(),Cr={status:"pending",value:void 0,then:function(l){s.push(l)}}}return $f++,i.then(Im,Im),i}function Im(){if(--$f===0&&Xo!==null){Cr!==null&&(Cr.status="fulfilled");var t=Xo;Xo=null,wr=0,Cr=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function W1(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var Fm=P.S;P.S=function(t,i){y_=E(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&X1(t,i),Fm!==null&&Fm(t,i)};var Bs=D(null);function Zf(){var t=Bs.current;return t!==null?t:Kt.pooledCache}function yc(t,i){i===null?Se(Bs,Bs.current):Se(Bs,i.pool)}function Bm(){var t=Zf();return t===null?null:{parent:Sn._currentValue,pool:t}}var Dr=Error(a(460)),Kf=Error(a(474)),Sc=Error(a(542)),Mc={then:function(){}};function Hm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gm(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then(da,da),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,jm(t),t;default:if(typeof i.status=="string")i.then(da,da);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,jm(t),t}throw Gs=i,Dr}}function Hs(t){try{var i=t._init;return i(t._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(Gs=s,Dr):s}}var Gs=null;function Vm(){if(Gs===null)throw Error(a(459));var t=Gs;return Gs=null,t}function jm(t){if(t===Dr||t===Sc)throw Error(a(483))}var Or=null,Wo=0;function Ec(t){var i=Wo;return Wo+=1,Or===null&&(Or=[]),Gm(Or,t,i)}function qo(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Tc(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function km(t){function i($,V){if(t){var ee=$.deletions;ee===null?($.deletions=[V],$.flags|=16):ee.push(V)}}function s($,V){if(!t)return null;for(;V!==null;)i($,V),V=V.sibling;return null}function l($){for(var V=new Map;$!==null;)$.key!==null?V.set($.key,$):V.set($.index,$),$=$.sibling;return V}function f($,V){return $=pa($,V),$.index=0,$.sibling=null,$}function h($,V,ee){return $.index=ee,t?(ee=$.alternate,ee!==null?(ee=ee.index,ee<V?($.flags|=67108866,V):ee):($.flags|=67108866,V)):($.flags|=1048576,V)}function b($){return t&&$.alternate===null&&($.flags|=67108866),$}function R($,V,ee,xe){return V===null||V.tag!==6?(V=Bf(ee,$.mode,xe),V.return=$,V):(V=f(V,ee),V.return=$,V)}function F($,V,ee,xe){var it=ee.type;return it===A?me($,V,ee.props.children,xe,ee.key):V!==null&&(V.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Q&&Hs(it)===V.type)?(V=f(V,ee.props),qo(V,ee),V.return=$,V):(V=_c(ee.type,ee.key,ee.props,null,$.mode,xe),qo(V,ee),V.return=$,V)}function te($,V,ee,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=Hf(ee,$.mode,xe),V.return=$,V):(V=f(V,ee.children||[]),V.return=$,V)}function me($,V,ee,xe,it){return V===null||V.tag!==7?(V=Ps(ee,$.mode,xe,it),V.return=$,V):(V=f(V,ee),V.return=$,V)}function be($,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Bf(""+V,$.mode,ee),V.return=$,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return ee=_c(V.type,V.key,V.props,null,$.mode,ee),qo(ee,V),ee.return=$,ee;case M:return V=Hf(V,$.mode,ee),V.return=$,V;case Q:return V=Hs(V),be($,V,ee)}if(K(V)||ne(V))return V=Ps(V,$.mode,ee,null),V.return=$,V;if(typeof V.then=="function")return be($,Ec(V),ee);if(V.$$typeof===U)return be($,bc($,V),ee);Tc($,V)}return null}function se($,V,ee,xe){var it=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return it!==null?null:R($,V,""+ee,xe);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:return ee.key===it?F($,V,ee,xe):null;case M:return ee.key===it?te($,V,ee,xe):null;case Q:return ee=Hs(ee),se($,V,ee,xe)}if(K(ee)||ne(ee))return it!==null?null:me($,V,ee,xe,null);if(typeof ee.then=="function")return se($,V,Ec(ee),xe);if(ee.$$typeof===U)return se($,V,bc($,ee),xe);Tc($,ee)}return null}function ce($,V,ee,xe,it){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return $=$.get(ee)||null,R(V,$,""+xe,it);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case y:return $=$.get(xe.key===null?ee:xe.key)||null,F(V,$,xe,it);case M:return $=$.get(xe.key===null?ee:xe.key)||null,te(V,$,xe,it);case Q:return xe=Hs(xe),ce($,V,ee,xe,it)}if(K(xe)||ne(xe))return $=$.get(ee)||null,me(V,$,xe,it,null);if(typeof xe.then=="function")return ce($,V,ee,Ec(xe),it);if(xe.$$typeof===U)return ce($,V,ee,bc(V,xe),it);Tc(V,xe)}return null}function Ze($,V,ee,xe){for(var it=null,Pt=null,et=V,yt=V=0,wt=null;et!==null&&yt<ee.length;yt++){et.index>yt?(wt=et,et=null):wt=et.sibling;var zt=se($,et,ee[yt],xe);if(zt===null){et===null&&(et=wt);break}t&&et&&zt.alternate===null&&i($,et),V=h(zt,V,yt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt,et=wt}if(yt===ee.length)return s($,et),Dt&&ma($,yt),it;if(et===null){for(;yt<ee.length;yt++)et=be($,ee[yt],xe),et!==null&&(V=h(et,V,yt),Pt===null?it=et:Pt.sibling=et,Pt=et);return Dt&&ma($,yt),it}for(et=l(et);yt<ee.length;yt++)wt=ce(et,$,yt,ee[yt],xe),wt!==null&&(t&&wt.alternate!==null&&et.delete(wt.key===null?yt:wt.key),V=h(wt,V,yt),Pt===null?it=wt:Pt.sibling=wt,Pt=wt);return t&&et.forEach(function(ms){return i($,ms)}),Dt&&ma($,yt),it}function rt($,V,ee,xe){if(ee==null)throw Error(a(151));for(var it=null,Pt=null,et=V,yt=V=0,wt=null,zt=ee.next();et!==null&&!zt.done;yt++,zt=ee.next()){et.index>yt?(wt=et,et=null):wt=et.sibling;var ms=se($,et,zt.value,xe);if(ms===null){et===null&&(et=wt);break}t&&et&&ms.alternate===null&&i($,et),V=h(ms,V,yt),Pt===null?it=ms:Pt.sibling=ms,Pt=ms,et=wt}if(zt.done)return s($,et),Dt&&ma($,yt),it;if(et===null){for(;!zt.done;yt++,zt=ee.next())zt=be($,zt.value,xe),zt!==null&&(V=h(zt,V,yt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt);return Dt&&ma($,yt),it}for(et=l(et);!zt.done;yt++,zt=ee.next())zt=ce(et,$,yt,zt.value,xe),zt!==null&&(t&&zt.alternate!==null&&et.delete(zt.key===null?yt:zt.key),V=h(zt,V,yt),Pt===null?it=zt:Pt.sibling=zt,Pt=zt);return t&&et.forEach(function(iy){return i($,iy)}),Dt&&ma($,yt),it}function $t($,V,ee,xe){if(typeof ee=="object"&&ee!==null&&ee.type===A&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case y:e:{for(var it=ee.key;V!==null;){if(V.key===it){if(it=ee.type,it===A){if(V.tag===7){s($,V.sibling),xe=f(V,ee.props.children),xe.return=$,$=xe;break e}}else if(V.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Q&&Hs(it)===V.type){s($,V.sibling),xe=f(V,ee.props),qo(xe,ee),xe.return=$,$=xe;break e}s($,V);break}else i($,V);V=V.sibling}ee.type===A?(xe=Ps(ee.props.children,$.mode,xe,ee.key),xe.return=$,$=xe):(xe=_c(ee.type,ee.key,ee.props,null,$.mode,xe),qo(xe,ee),xe.return=$,$=xe)}return b($);case M:e:{for(it=ee.key;V!==null;){if(V.key===it)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){s($,V.sibling),xe=f(V,ee.children||[]),xe.return=$,$=xe;break e}else{s($,V);break}else i($,V);V=V.sibling}xe=Hf(ee,$.mode,xe),xe.return=$,$=xe}return b($);case Q:return ee=Hs(ee),$t($,V,ee,xe)}if(K(ee))return Ze($,V,ee,xe);if(ne(ee)){if(it=ne(ee),typeof it!="function")throw Error(a(150));return ee=it.call(ee),rt($,V,ee,xe)}if(typeof ee.then=="function")return $t($,V,Ec(ee),xe);if(ee.$$typeof===U)return $t($,V,bc($,ee),xe);Tc($,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint"?(ee=""+ee,V!==null&&V.tag===6?(s($,V.sibling),xe=f(V,ee),xe.return=$,$=xe):(s($,V),xe=Bf(ee,$.mode,xe),xe.return=$,$=xe),b($)):s($,V)}return function($,V,ee,xe){try{Wo=0;var it=$t($,V,ee,xe);return Or=null,it}catch(et){if(et===Dr||et===Sc)throw et;var Pt=mi(29,et,null,$.mode);return Pt.lanes=xe,Pt.return=$,Pt}finally{}}}var Vs=km(!0),Xm=km(!1),Qa=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function es(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Ht&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=gc(t),wm(t,null,s),i}return mc(t,l,i,s),gc(t)}function Yo(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Xa(t,s)}}function ed(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};h===null?f=h=b:h=h.next=b,s=s.next}while(s!==null);h===null?f=h=i:h=h.next=i}else f=h=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var td=!1;function $o(){if(td){var t=Cr;if(t!==null)throw t}}function Zo(t,i,s,l){td=!1;var f=t.updateQueue;Qa=!1;var h=f.firstBaseUpdate,b=f.lastBaseUpdate,R=f.shared.pending;if(R!==null){f.shared.pending=null;var F=R,te=F.next;F.next=null,b===null?h=te:b.next=te,b=F;var me=t.alternate;me!==null&&(me=me.updateQueue,R=me.lastBaseUpdate,R!==b&&(R===null?me.firstBaseUpdate=te:R.next=te,me.lastBaseUpdate=F))}if(h!==null){var be=f.baseState;b=0,me=te=F=null,R=h;do{var se=R.lane&-536870913,ce=se!==R.lane;if(ce?(Rt&se)===se:(l&se)===se){se!==0&&se===wr&&(td=!0),me!==null&&(me=me.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,rt=R;se=i;var $t=s;switch(rt.tag){case 1:if(Ze=rt.payload,typeof Ze=="function"){be=Ze.call($t,be,se);break e}be=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=rt.payload,se=typeof Ze=="function"?Ze.call($t,be,se):Ze,se==null)break e;be=_({},be,se);break e;case 2:Qa=!0}}se=R.callback,se!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=f.callbacks,ce===null?f.callbacks=[se]:ce.push(se))}else ce={lane:se,tag:R.tag,payload:R.payload,callback:R.callback,next:null},me===null?(te=me=ce,F=be):me=me.next=ce,b|=se;if(R=R.next,R===null){if(R=f.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,f.lastBaseUpdate=ce,f.shared.pending=null}}while(!0);me===null&&(F=be),f.baseState=F,f.firstBaseUpdate=te,f.lastBaseUpdate=me,h===null&&(f.shared.lanes=0),ss|=b,t.lanes=b,t.memoizedState=be}}function Wm(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function qm(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)Wm(s[t],i)}var Ur=D(null),Ac=D(0);function Ym(t,i){t=Aa,Se(Ac,t),Se(Ur,i),Aa=t|i.baseLanes}function nd(){Se(Ac,Aa),Se(Ur,Ur.current)}function id(){Aa=Ac.current,ie(Ur),ie(Ac)}var gi=D(null),Li=null;function ts(t){var i=t.alternate;Se(mn,mn.current&1),Se(gi,t),Li===null&&(i===null||Ur.current!==null||i.memoizedState!==null)&&(Li=t)}function ad(t){Se(mn,mn.current),Se(gi,t),Li===null&&(Li=t)}function $m(t){t.tag===22?(Se(mn,mn.current),Se(gi,t),Li===null&&(Li=t)):ns()}function ns(){Se(mn,mn.current),Se(gi,gi.current)}function _i(t){ie(gi),Li===t&&(Li=null),ie(mn)}var mn=D(0);function Rc(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||uh(s)||fh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xa=0,gt=null,qt=null,Mn=null,wc=!1,Lr=!1,js=!1,Cc=0,Ko=0,Nr=null,q1=0;function fn(){throw Error(a(321))}function sd(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!pi(t[s],i[s]))return!1;return!0}function rd(t,i,s,l,f,h){return xa=h,gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,P.H=t===null||t.memoizedState===null?Ug:yd,js=!1,h=s(l,f),js=!1,Lr&&(h=Km(i,s,l,f)),Zm(t),h}function Zm(t){P.H=el;var i=qt!==null&&qt.next!==null;if(xa=0,Mn=qt=gt=null,wc=!1,Ko=0,Nr=null,i)throw Error(a(300));t===null||En||(t=t.dependencies,t!==null&&vc(t)&&(En=!0))}function Km(t,i,s,l){gt=t;var f=0;do{if(Lr&&(Nr=null),Ko=0,Lr=!1,25<=f)throw Error(a(301));if(f+=1,Mn=qt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}P.H=Lg,h=i(s,l)}while(Lr);return h}function Y1(){var t=P.H,i=t.useState()[0];return i=typeof i.then=="function"?Qo(i):i,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(gt.flags|=1024),i}function od(){var t=Cc!==0;return Cc=0,t}function ld(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function cd(t){if(wc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}wc=!1}xa=0,Mn=qt=gt=null,Lr=!1,Ko=Cc=0,Nr=null}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?gt.memoizedState=Mn=t:Mn=Mn.next=t,Mn}function gn(){if(qt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var i=Mn===null?gt.memoizedState:Mn.next;if(i!==null)Mn=i,qt=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},Mn===null?gt.memoizedState=Mn=t:Mn=Mn.next=t}return Mn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(t){var i=Ko;return Ko+=1,Nr===null&&(Nr=[]),t=Gm(Nr,t,i),i=gt,(Mn===null?i.memoizedState:Mn.next)===null&&(i=i.alternate,P.H=i===null||i.memoizedState===null?Ug:yd),t}function Oc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qo(t);if(t.$$typeof===U)return Xn(t)}throw Error(a(438,String(t)))}function ud(t){var i=null,s=gt.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=gt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Dc(),gt.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=w;return i.index++,s}function va(t,i){return typeof i=="function"?i(t):i}function Uc(t){var i=gn();return fd(i,qt,t)}function fd(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var f=t.baseQueue,h=l.pending;if(h!==null){if(f!==null){var b=f.next;f.next=h.next,h.next=b}i.baseQueue=f=h,l.pending=null}if(h=t.baseState,f===null)t.memoizedState=h;else{i=f.next;var R=b=null,F=null,te=i,me=!1;do{var be=te.lane&-536870913;if(be!==te.lane?(Rt&be)===be:(xa&be)===be){var se=te.revertLane;if(se===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),be===wr&&(me=!0);else if((xa&se)===se){te=te.next,se===wr&&(me=!0);continue}else be={lane:0,revertLane:te.revertLane,gesture:null,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=be,b=h):F=F.next=be,gt.lanes|=se,ss|=se;be=te.action,js&&s(h,be),h=te.hasEagerState?te.eagerState:s(h,be)}else se={lane:be,revertLane:te.revertLane,gesture:te.gesture,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null},F===null?(R=F=se,b=h):F=F.next=se,gt.lanes|=be,ss|=be;te=te.next}while(te!==null&&te!==i);if(F===null?b=h:F.next=R,!pi(h,t.memoizedState)&&(En=!0,me&&(s=Cr,s!==null)))throw s;t.memoizedState=h,t.baseState=b,t.baseQueue=F,l.lastRenderedState=h}return f===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function dd(t){var i=gn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,f=s.pending,h=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do h=t(h,b.action),b=b.next;while(b!==f);pi(h,i.memoizedState)||(En=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function Qm(t,i,s){var l=gt,f=gn(),h=Dt;if(h){if(s===void 0)throw Error(a(407));s=s()}else s=i();var b=!pi((qt||f).memoizedState,s);if(b&&(f.memoizedState=s,En=!0),f=f.queue,md(tg.bind(null,l,f,t),[t]),f.getSnapshot!==i||b||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,Pr(9,{destroy:void 0},eg.bind(null,l,f,s,i),null),Kt===null)throw Error(a(349));h||(xa&127)!==0||Jm(l,i,s)}return s}function Jm(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=gt.updateQueue,i===null?(i=Dc(),gt.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function eg(t,i,s,l){i.value=s,i.getSnapshot=l,ng(i)&&ig(t)}function tg(t,i,s){return s(function(){ng(i)&&ig(t)})}function ng(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!pi(t,s)}catch{return!0}}function ig(t){var i=Ns(t,2);i!==null&&ri(i,t,2)}function hd(t){var i=Qn();if(typeof t=="function"){var s=t;if(t=s(),js){ke(!0);try{s()}finally{ke(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:t},i}function ag(t,i,s,l){return t.baseState=s,fd(t,qt,typeof l=="function"?l:va)}function $1(t,i,s,l,f){if(Pc(t))throw Error(a(485));if(t=i.action,t!==null){var h={payload:f,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){h.listeners.push(b)}};P.T!==null?s(!0):h.isTransition=!1,l(h),s=i.pending,s===null?(h.next=i.pending=h,sg(i,h)):(h.next=s.next,i.pending=s.next=h)}}function sg(t,i){var s=i.action,l=i.payload,f=t.state;if(i.isTransition){var h=P.T,b={};P.T=b;try{var R=s(f,l),F=P.S;F!==null&&F(b,R),rg(t,i,R)}catch(te){pd(t,i,te)}finally{h!==null&&b.types!==null&&(h.types=b.types),P.T=h}}else try{h=s(f,l),rg(t,i,h)}catch(te){pd(t,i,te)}}function rg(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){og(t,i,l)},function(l){return pd(t,i,l)}):og(t,i,s)}function og(t,i,s){i.status="fulfilled",i.value=s,lg(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,sg(t,s)))}function pd(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,lg(i),i=i.next;while(i!==l)}t.action=null}function lg(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function cg(t,i){return i}function ug(t,i){if(Dt){var s=Kt.formState;if(s!==null){e:{var l=gt;if(Dt){if(en){t:{for(var f=en,h=Ui;f.nodeType!==8;){if(!h){f=null;break t}if(f=Ni(f.nextSibling),f===null){f=null;break t}}h=f.data,f=h==="F!"||h==="F"?f:null}if(f){en=Ni(f.nextSibling),l=f.data==="F!";break e}}Za(l)}l=!1}l&&(i=s[0])}}return s=Qn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cg,lastRenderedState:i},s.queue=l,s=Cg.bind(null,gt,l),l.dispatch=s,l=hd(!1),h=bd.bind(null,gt,!1,l.queue),l=Qn(),f={state:i,dispatch:null,action:t,pending:null},l.queue=f,s=$1.bind(null,gt,f,h,s),f.dispatch=s,l.memoizedState=t,[i,s,!1]}function fg(t){var i=gn();return dg(i,qt,t)}function dg(t,i,s){if(i=fd(t,i,cg)[0],t=Uc(va)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(b){throw b===Dr?Sc:b}else l=i;i=gn();var f=i.queue,h=f.dispatch;return s!==i.memoizedState&&(gt.flags|=2048,Pr(9,{destroy:void 0},Z1.bind(null,f,s),null)),[l,h,t]}function Z1(t,i){t.action=i}function hg(t){var i=gn(),s=qt;if(s!==null)return dg(i,s,t);gn(),i=i.memoizedState,s=gn();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Pr(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=gt.updateQueue,i===null&&(i=Dc(),gt.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function pg(){return gn().memoizedState}function Lc(t,i,s,l){var f=Qn();gt.flags|=t,f.memoizedState=Pr(1|i,{destroy:void 0},s,l===void 0?null:l)}function Nc(t,i,s,l){var f=gn();l=l===void 0?null:l;var h=f.memoizedState.inst;qt!==null&&l!==null&&sd(l,qt.memoizedState.deps)?f.memoizedState=Pr(i,h,s,l):(gt.flags|=t,f.memoizedState=Pr(1|i,h,s,l))}function mg(t,i){Lc(8390656,8,t,i)}function md(t,i){Nc(2048,8,t,i)}function K1(t){gt.flags|=4;var i=gt.updateQueue;if(i===null)i=Dc(),gt.updateQueue=i,i.events=[t];else{var s=i.events;s===null?i.events=[t]:s.push(t)}}function gg(t){var i=gn().memoizedState;return K1({ref:i,nextImpl:t}),function(){if((Ht&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function _g(t,i){return Nc(4,2,t,i)}function xg(t,i){return Nc(4,4,t,i)}function vg(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function bg(t,i,s){s=s!=null?s.concat([t]):null,Nc(4,4,vg.bind(null,i,t),s)}function gd(){}function yg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&sd(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Sg(t,i){var s=gn();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&sd(i,l[1]))return l[0];if(l=t(),js){ke(!0);try{t()}finally{ke(!1)}}return s.memoizedState=[l,i],l}function _d(t,i,s){return s===void 0||(xa&1073741824)!==0&&(Rt&261930)===0?t.memoizedState=i:(t.memoizedState=s,t=M_(),gt.lanes|=t,ss|=t,s)}function Mg(t,i,s,l){return pi(s,i)?s:Ur.current!==null?(t=_d(t,s,l),pi(t,i)||(En=!0),t):(xa&42)===0||(xa&1073741824)!==0&&(Rt&261930)===0?(En=!0,t.memoizedState=s):(t=M_(),gt.lanes|=t,ss|=t,i)}function Eg(t,i,s,l,f){var h=q.p;q.p=h!==0&&8>h?h:8;var b=P.T,R={};P.T=R,bd(t,!1,i,s);try{var F=f(),te=P.S;if(te!==null&&te(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var me=W1(F,l);Jo(t,i,me,bi(t))}else Jo(t,i,l,bi(t))}catch(be){Jo(t,i,{then:function(){},status:"rejected",reason:be},bi())}finally{q.p=h,b!==null&&R.types!==null&&(b.types=R.types),P.T=b}}function Q1(){}function xd(t,i,s,l){if(t.tag!==5)throw Error(a(476));var f=Tg(t).queue;Eg(t,f,i,Y,s===null?Q1:function(){return Ag(t),s(l)})}function Tg(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:Y},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ag(t){var i=Tg(t);i.next===null&&(i=t.alternate.memoizedState),Jo(t,i.next.queue,{},bi())}function vd(){return Xn(gl)}function Rg(){return gn().memoizedState}function wg(){return gn().memoizedState}function J1(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=bi();t=Ja(s);var l=es(i,t,s);l!==null&&(ri(l,i,s),Yo(l,i,s)),i={cache:Yf()},t.payload=i;return}i=i.return}}function eb(t,i,s){var l=bi();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Pc(t)?Dg(i,s):(s=If(t,i,s,l),s!==null&&(ri(s,t,l),Og(s,i,l)))}function Cg(t,i,s){var l=bi();Jo(t,i,s,l)}function Jo(t,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Pc(t))Dg(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var b=i.lastRenderedState,R=h(b,s);if(f.hasEagerState=!0,f.eagerState=R,pi(R,b))return mc(t,i,f,0),Kt===null&&pc(),!1}catch{}finally{}if(s=If(t,i,f,l),s!==null)return ri(s,t,l),Og(s,i,l),!0}return!1}function bd(t,i,s,l){if(l={lane:2,revertLane:Qd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Pc(t)){if(i)throw Error(a(479))}else i=If(t,s,l,2),i!==null&&ri(i,t,2)}function Pc(t){var i=t.alternate;return t===gt||i!==null&&i===gt}function Dg(t,i){Lr=wc=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Og(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Xa(t,s)}}var el={readContext:Xn,use:Oc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};el.useEffectEvent=fn;var Ug={readContext:Xn,use:Oc,useCallback:function(t,i){return Qn().memoizedState=[t,i===void 0?null:i],t},useContext:Xn,useEffect:mg,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Lc(4194308,4,vg.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Lc(4194308,4,t,i)},useInsertionEffect:function(t,i){Lc(4,2,t,i)},useMemo:function(t,i){var s=Qn();i=i===void 0?null:i;var l=t();if(js){ke(!0);try{t()}finally{ke(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Qn();if(s!==void 0){var f=s(i);if(js){ke(!0);try{s(i)}finally{ke(!1)}}}else f=i;return l.memoizedState=l.baseState=f,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:f},l.queue=t,t=t.dispatch=eb.bind(null,gt,t),[l.memoizedState,t]},useRef:function(t){var i=Qn();return t={current:t},i.memoizedState=t},useState:function(t){t=hd(t);var i=t.queue,s=Cg.bind(null,gt,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:gd,useDeferredValue:function(t,i){var s=Qn();return _d(s,t,i)},useTransition:function(){var t=hd(!1);return t=Eg.bind(null,gt,t.queue,!0,!1),Qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=gt,f=Qn();if(Dt){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Kt===null)throw Error(a(349));(Rt&127)!==0||Jm(l,i,s)}f.memoizedState=s;var h={value:s,getSnapshot:i};return f.queue=h,mg(tg.bind(null,l,h,t),[t]),l.flags|=2048,Pr(9,{destroy:void 0},eg.bind(null,l,h,s,i),null),s},useId:function(){var t=Qn(),i=Kt.identifierPrefix;if(Dt){var s=ta,l=ea;s=(l&~(1<<32-Ve(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Cc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=q1++,i="_"+i+"r_"+s.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:vd,useFormState:ug,useActionState:ug,useOptimistic:function(t){var i=Qn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=bd.bind(null,gt,!0,s),s.dispatch=i,[t,i]},useMemoCache:ud,useCacheRefresh:function(){return Qn().memoizedState=J1.bind(null,gt)},useEffectEvent:function(t){var i=Qn(),s={impl:t};return i.memoizedState=s,function(){if((Ht&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},yd={readContext:Xn,use:Oc,useCallback:yg,useContext:Xn,useEffect:md,useImperativeHandle:bg,useInsertionEffect:_g,useLayoutEffect:xg,useMemo:Sg,useReducer:Uc,useRef:pg,useState:function(){return Uc(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=gn();return Mg(s,qt.memoizedState,t,i)},useTransition:function(){var t=Uc(va)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Qm,useId:Rg,useHostTransitionStatus:vd,useFormState:fg,useActionState:fg,useOptimistic:function(t,i){var s=gn();return ag(s,qt,t,i)},useMemoCache:ud,useCacheRefresh:wg};yd.useEffectEvent=gg;var Lg={readContext:Xn,use:Oc,useCallback:yg,useContext:Xn,useEffect:md,useImperativeHandle:bg,useInsertionEffect:_g,useLayoutEffect:xg,useMemo:Sg,useReducer:dd,useRef:pg,useState:function(){return dd(va)},useDebugValue:gd,useDeferredValue:function(t,i){var s=gn();return qt===null?_d(s,t,i):Mg(s,qt.memoizedState,t,i)},useTransition:function(){var t=dd(va)[0],i=gn().memoizedState;return[typeof t=="boolean"?t:Qo(t),i]},useSyncExternalStore:Qm,useId:Rg,useHostTransitionStatus:vd,useFormState:hg,useActionState:hg,useOptimistic:function(t,i){var s=gn();return qt!==null?ag(s,qt,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:ud,useCacheRefresh:wg};Lg.useEffectEvent=gg;function Sd(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:_({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var Md={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=bi(),f=Ja(l);f.payload=i,s!=null&&(f.callback=s),i=es(t,f,l),i!==null&&(ri(i,t,l),Yo(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=bi(),f=Ja(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=es(t,f,l),i!==null&&(ri(i,t,l),Yo(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=bi(),l=Ja(s);l.tag=2,i!=null&&(l.callback=i),i=es(t,l,s),i!==null&&(ri(i,t,s),Yo(i,t,s))}};function Ng(t,i,s,l,f,h,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,b):i.prototype&&i.prototype.isPureReactComponent?!Ho(s,l)||!Ho(f,h):!0}function Pg(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&Md.enqueueReplaceState(i,i.state,null)}function ks(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=_({},s));for(var f in t)s[f]===void 0&&(s[f]=t[f])}return s}function zg(t){hc(t)}function Ig(t){console.error(t)}function Fg(t){hc(t)}function zc(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function Bg(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Ed(t,i,s){return s=Ja(s),s.tag=3,s.payload={element:null},s.callback=function(){zc(t,i)},s}function Hg(t){return t=Ja(t),t.tag=3,t}function Gg(t,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var h=l.value;t.payload=function(){return f(h)},t.callback=function(){Bg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Bg(i,s,l),typeof f!="function"&&(rs===null?rs=new Set([this]):rs.add(this));var R=l.stack;this.componentDidCatch(l.value,{componentStack:R!==null?R:""})})}function tb(t,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Rr(i,s,f,!0),s=gi.current,s!==null){switch(s.tag){case 31:case 13:return Li===null?Yc():s.alternate===null&&dn===0&&(dn=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),$d(t,l,f)),!1;case 22:return s.flags|=65536,l===Mc?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),$d(t,l,f)),!1}throw Error(a(435,s.tag))}return $d(t,l,f),Yc(),!1}if(Dt)return i=gi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==jf&&(t=Error(a(422),{cause:l}),jo(Ci(t,s)))):(l!==jf&&(i=Error(a(423),{cause:l}),jo(Ci(i,s))),t=t.current.alternate,t.flags|=65536,f&=-f,t.lanes|=f,l=Ci(l,s),f=Ed(t.stateNode,l,f),ed(t,f),dn!==4&&(dn=2)),!1;var h=Error(a(520),{cause:l});if(h=Ci(h,s),ll===null?ll=[h]:ll.push(h),dn!==4&&(dn=2),i===null)return!0;l=Ci(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=f&-f,s.lanes|=t,t=Ed(s.stateNode,l,t),ed(s,t),!1;case 1:if(i=s.type,h=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(rs===null||!rs.has(h))))return s.flags|=65536,f&=-f,s.lanes|=f,f=Hg(f),Gg(f,t,s,l),ed(s,f),!1}s=s.return}while(s!==null);return!1}var Td=Error(a(461)),En=!1;function Wn(t,i,s,l){i.child=t===null?Xm(i,null,s,l):Vs(i,t.child,s,l)}function Vg(t,i,s,l,f){s=s.render;var h=i.ref;if("ref"in l){var b={};for(var R in l)R!=="ref"&&(b[R]=l[R])}else b=l;return Fs(i),l=rd(t,i,s,b,h,f),R=od(),t!==null&&!En?(ld(t,i,f),ba(t,i,f)):(Dt&&R&&Gf(i),i.flags|=1,Wn(t,i,l,f),i.child)}function jg(t,i,s,l,f){if(t===null){var h=s.type;return typeof h=="function"&&!Ff(h)&&h.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=h,kg(t,i,h,l,f)):(t=_c(s.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!Ld(t,f)){var b=h.memoizedProps;if(s=s.compare,s=s!==null?s:Ho,s(b,l)&&t.ref===i.ref)return ba(t,i,f)}return i.flags|=1,t=pa(h,l),t.ref=i.ref,t.return=i,i.child=t}function kg(t,i,s,l,f){if(t!==null){var h=t.memoizedProps;if(Ho(h,l)&&t.ref===i.ref)if(En=!1,i.pendingProps=l=h,Ld(t,f))(t.flags&131072)!==0&&(En=!0);else return i.lanes=t.lanes,ba(t,i,f)}return Ad(t,i,s,l,f)}function Xg(t,i,s,l){var f=l.children,h=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(h=h!==null?h.baseLanes|s:s,t!==null){for(l=i.child=t.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~h}else l=0,i.child=null;return Wg(t,i,h,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&yc(i,h!==null?h.cachePool:null),h!==null?Ym(i,h):nd(),$m(i);else return l=i.lanes=536870912,Wg(t,i,h!==null?h.baseLanes|s:s,s,l)}else h!==null?(yc(i,h.cachePool),Ym(i,h),ns(),i.memoizedState=null):(t!==null&&yc(i,null),nd(),ns());return Wn(t,i,f,s),i.child}function tl(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Wg(t,i,s,l,f){var h=Zf();return h=h===null?null:{parent:Sn._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&yc(i,null),nd(),$m(i),t!==null&&Rr(t,i,l,!0),i.childLanes=f,null}function Ic(t,i){return i=Bc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function qg(t,i,s){return Vs(i,t.child,null,s),t=Ic(i,i.pendingProps),t.flags|=2,_i(i),i.memoizedState=null,t}function nb(t,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Dt){if(l.mode==="hidden")return t=Ic(i,l),i.lanes=536870912,tl(null,t);if(ad(i),(t=en)?(t=sx(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Dm(t),s.return=i,i.child=s,kn=i,en=null)):t=null,t===null)throw Za(i);return i.lanes=536870912,null}return Ic(i,l)}var h=t.memoizedState;if(h!==null){var b=h.dehydrated;if(ad(i),f)if(i.flags&256)i.flags&=-257,i=qg(t,i,s);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(a(558));else if(En||Rr(t,i,s,!1),f=(s&t.childLanes)!==0,En||f){if(l=Kt,l!==null&&(b=mr(l,s),b!==0&&b!==h.retryLane))throw h.retryLane=b,Ns(t,b),ri(l,t,b),Td;Yc(),i=qg(t,i,s)}else t=h.treeContext,en=Ni(b.nextSibling),kn=i,Dt=!0,$a=null,Ui=!1,t!==null&&Lm(i,t),i=Ic(i,l),i.flags|=4096;return i}return t=pa(t.child,{mode:l.mode,children:l.children}),t.ref=i.ref,i.child=t,t.return=i,t}function Fc(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Ad(t,i,s,l,f){return Fs(i),s=rd(t,i,s,l,void 0,f),l=od(),t!==null&&!En?(ld(t,i,f),ba(t,i,f)):(Dt&&l&&Gf(i),i.flags|=1,Wn(t,i,s,f),i.child)}function Yg(t,i,s,l,f,h){return Fs(i),i.updateQueue=null,s=Km(i,l,s,f),Zm(t),l=od(),t!==null&&!En?(ld(t,i,h),ba(t,i,h)):(Dt&&l&&Gf(i),i.flags|=1,Wn(t,i,s,h),i.child)}function $g(t,i,s,l,f){if(Fs(i),i.stateNode===null){var h=Mr,b=s.contextType;typeof b=="object"&&b!==null&&(h=Xn(b)),h=new s(l,h),i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Md,i.stateNode=h,h._reactInternals=i,h=i.stateNode,h.props=l,h.state=i.memoizedState,h.refs={},Qf(i),b=s.contextType,h.context=typeof b=="object"&&b!==null?Xn(b):Mr,h.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Sd(i,s,b,l),h.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(b=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),b!==h.state&&Md.enqueueReplaceState(h,h.state,null),Zo(i,l,h,f),$o(),h.state=i.memoizedState),typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){h=i.stateNode;var R=i.memoizedProps,F=ks(s,R);h.props=F;var te=h.context,me=s.contextType;b=Mr,typeof me=="object"&&me!==null&&(b=Xn(me));var be=s.getDerivedStateFromProps;me=typeof be=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=i.pendingProps!==R,me||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||te!==b)&&Pg(i,h,l,b),Qa=!1;var se=i.memoizedState;h.state=se,Zo(i,l,h,f),$o(),te=i.memoizedState,R||se!==te||Qa?(typeof be=="function"&&(Sd(i,s,be,l),te=i.memoizedState),(F=Qa||Ng(i,s,F,l,se,te,b))?(me||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(i.flags|=4194308)):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=te),h.props=l,h.state=te,h.context=b,l=F):(typeof h.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{h=i.stateNode,Jf(t,i),b=i.memoizedProps,me=ks(s,b),h.props=me,be=i.pendingProps,se=h.context,te=s.contextType,F=Mr,typeof te=="object"&&te!==null&&(F=Xn(te)),R=s.getDerivedStateFromProps,(te=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(b!==be||se!==F)&&Pg(i,h,l,F),Qa=!1,se=i.memoizedState,h.state=se,Zo(i,l,h,f),$o();var ce=i.memoizedState;b!==be||se!==ce||Qa||t!==null&&t.dependencies!==null&&vc(t.dependencies)?(typeof R=="function"&&(Sd(i,s,R,l),ce=i.memoizedState),(me=Qa||Ng(i,s,me,l,se,ce,F)||t!==null&&t.dependencies!==null&&vc(t.dependencies))?(te||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(l,ce,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(l,ce,F)),typeof h.componentDidUpdate=="function"&&(i.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ce),h.props=l,h.state=ce,h.context=F,l=me):(typeof h.componentDidUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&se===t.memoizedState||(i.flags|=1024),l=!1)}return h=l,Fc(t,i),l=(i.flags&128)!==0,h||l?(h=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:h.render(),i.flags|=1,t!==null&&l?(i.child=Vs(i,t.child,null,f),i.child=Vs(i,null,s,f)):Wn(t,i,s,f),i.memoizedState=h.state,t=i.child):t=ba(t,i,f),t}function Zg(t,i,s,l){return zs(),i.flags|=256,Wn(t,i,s,l),i.child}var Rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wd(t){return{baseLanes:t,cachePool:Bm()}}function Cd(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=vi),t}function Kg(t,i,s){var l=i.pendingProps,f=!1,h=(i.flags&128)!==0,b;if((b=h)||(b=t!==null&&t.memoizedState===null?!1:(mn.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,t===null){if(Dt){if(f?ts(i):ns(),(t=en)?(t=sx(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Ya!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},s=Dm(t),s.return=i,i.child=s,kn=i,en=null)):t=null,t===null)throw Za(i);return fh(t)?i.lanes=32:i.lanes=536870912,null}var R=l.children;return l=l.fallback,f?(ns(),f=i.mode,R=Bc({mode:"hidden",children:R},f),l=Ps(l,f,s,null),R.return=i,l.return=i,R.sibling=l,i.child=R,l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(null,l)):(ts(i),Dd(i,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(h)i.flags&256?(ts(i),i.flags&=-257,i=Od(t,i,s)):i.memoizedState!==null?(ns(),i.child=t.child,i.flags|=128,i=null):(ns(),R=l.fallback,f=i.mode,l=Bc({mode:"visible",children:l.children},f),R=Ps(R,f,s,null),R.flags|=2,l.return=i,R.return=i,l.sibling=R,i.child=l,Vs(i,t.child,null,s),l=i.child,l.memoizedState=wd(s),l.childLanes=Cd(t,b,s),i.memoizedState=Rd,i=tl(null,l));else if(ts(i),fh(R)){if(b=R.nextSibling&&R.nextSibling.dataset,b)var te=b.dgst;b=te,l=Error(a(419)),l.stack="",l.digest=b,jo({value:l,source:null,stack:null}),i=Od(t,i,s)}else if(En||Rr(t,i,s,!1),b=(s&t.childLanes)!==0,En||b){if(b=Kt,b!==null&&(l=mr(b,s),l!==0&&l!==F.retryLane))throw F.retryLane=l,Ns(t,l),ri(b,t,l),Td;uh(R)||Yc(),i=Od(t,i,s)}else uh(R)?(i.flags|=192,i.child=t.child,i=null):(t=F.treeContext,en=Ni(R.nextSibling),kn=i,Dt=!0,$a=null,Ui=!1,t!==null&&Lm(i,t),i=Dd(i,l.children),i.flags|=4096);return i}return f?(ns(),R=l.fallback,f=i.mode,F=t.child,te=F.sibling,l=pa(F,{mode:"hidden",children:l.children}),l.subtreeFlags=F.subtreeFlags&65011712,te!==null?R=pa(te,R):(R=Ps(R,f,s,null),R.flags|=2),R.return=i,l.return=i,l.sibling=R,i.child=l,tl(null,l),l=i.child,R=t.child.memoizedState,R===null?R=wd(s):(f=R.cachePool,f!==null?(F=Sn._currentValue,f=f.parent!==F?{parent:F,pool:F}:f):f=Bm(),R={baseLanes:R.baseLanes|s,cachePool:f}),l.memoizedState=R,l.childLanes=Cd(t,b,s),i.memoizedState=Rd,tl(t.child,l)):(ts(i),s=t.child,t=s.sibling,s=pa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(b=i.deletions,b===null?(i.deletions=[t],i.flags|=16):b.push(t)),i.child=s,i.memoizedState=null,s)}function Dd(t,i){return i=Bc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function Bc(t,i){return t=mi(22,t,null,i),t.lanes=0,t}function Od(t,i,s){return Vs(i,t.child,null,s),t=Dd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Qg(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Wf(t.return,i,s)}function Ud(t,i,s,l,f,h){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:h}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=h)}function Jg(t,i,s){var l=i.pendingProps,f=l.revealOrder,h=l.tail;l=l.children;var b=mn.current,R=(b&2)!==0;if(R?(b=b&1|2,i.flags|=128):b&=1,Se(mn,b),Wn(t,i,l,s),l=Dt?Vo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qg(t,s,i);else if(t.tag===19)Qg(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)t=s.alternate,t!==null&&Rc(t)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),Ud(i,!1,f,s,h,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Rc(t)===null){i.child=f;break}t=f.sibling,f.sibling=s,s=f,f=t}Ud(i,!0,s,null,h,l);break;case"together":Ud(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ba(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),ss|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(Rr(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=pa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=pa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Ld(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&vc(t)))}function ib(t,i,s){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),Ka(i,Sn,t.memoizedState.cache),zs();break;case 27:case 5:Qe(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:Ka(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,ad(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ts(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Kg(t,i,s):(ts(i),t=ba(t,i,s),t!==null?t.sibling:null);ts(i);break;case 19:var f=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Rr(t,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return Jg(t,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Se(mn,mn.current),l)break;return null;case 22:return i.lanes=0,Xg(t,i,s,i.pendingProps);case 24:Ka(i,Sn,t.memoizedState.cache)}return ba(t,i,s)}function e_(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)En=!0;else{if(!Ld(t,s)&&(i.flags&128)===0)return En=!1,ib(t,i,s);En=(t.flags&131072)!==0}else En=!1,Dt&&(i.flags&1048576)!==0&&Um(i,Vo,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(t=Hs(i.elementType),i.type=t,typeof t=="function")Ff(t)?(l=ks(t,l),i.tag=1,i=$g(null,i,t,l,s)):(i.tag=0,i=Ad(null,i,t,l,s));else{if(t!=null){var f=t.$$typeof;if(f===I){i.tag=11,i=Vg(null,i,t,l,s);break e}else if(f===z){i.tag=14,i=jg(null,i,t,l,s);break e}}throw i=ge(t)||t,Error(a(306,i,""))}}return i;case 0:return Ad(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=ks(l,i.pendingProps),$g(t,i,l,f,s);case 3:e:{if(Ne(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var h=i.memoizedState;f=h.element,Jf(t,i),Zo(i,l,null,s);var b=i.memoizedState;if(l=b.cache,Ka(i,Sn,l),l!==h.cache&&qf(i,[Sn],s,!0),$o(),l=b.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){i=Zg(t,i,l,s);break e}else if(l!==f){f=Ci(Error(a(424)),i),jo(f),i=Zg(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(en=Ni(t.firstChild),kn=i,Dt=!0,$a=null,Ui=!0,s=Xm(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(zs(),l===f){i=ba(t,i,s);break e}Wn(t,i,l,s)}i=i.child}return i;case 26:return Fc(t,i),t===null?(s=fx(i.type,null,i.pendingProps,null))?i.memoizedState=s:Dt||(s=i.type,t=i.pendingProps,l=tu(ae.current).createElement(s),l[cn]=i,l[un]=t,qn(l,s,t),W(l),i.stateNode=l):i.memoizedState=fx(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return Qe(i),t===null&&Dt&&(l=i.stateNode=lx(i.type,i.pendingProps,ae.current),kn=i,Ui=!0,f=en,us(i.type)?(dh=f,en=Ni(l.firstChild)):en=f),Wn(t,i,i.pendingProps.children,s),Fc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Dt&&((f=l=en)&&(l=Lb(l,i.type,i.pendingProps,Ui),l!==null?(i.stateNode=l,kn=i,en=Ni(l.firstChild),Ui=!1,f=!0):f=!1),f||Za(i)),Qe(i),f=i.type,h=i.pendingProps,b=t!==null?t.memoizedProps:null,l=h.children,oh(f,h)?l=null:b!==null&&oh(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=rd(t,i,Y1,null,null,s),gl._currentValue=f),Fc(t,i),Wn(t,i,l,s),i.child;case 6:return t===null&&Dt&&((t=s=en)&&(s=Nb(s,i.pendingProps,Ui),s!==null?(i.stateNode=s,kn=i,en=null,t=!0):t=!1),t||Za(i)),null;case 13:return Kg(t,i,s);case 4:return Ne(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Vs(i,null,l,s):Wn(t,i,l,s),i.child;case 11:return Vg(t,i,i.type,i.pendingProps,s);case 7:return Wn(t,i,i.pendingProps,s),i.child;case 8:return Wn(t,i,i.pendingProps.children,s),i.child;case 12:return Wn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ka(i,i.type,l.value),Wn(t,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,Fs(i),f=Xn(f),l=l(f),i.flags|=1,Wn(t,i,l,s),i.child;case 14:return jg(t,i,i.type,i.pendingProps,s);case 15:return kg(t,i,i.type,i.pendingProps,s);case 19:return Jg(t,i,s);case 31:return nb(t,i,s);case 22:return Xg(t,i,s,i.pendingProps);case 24:return Fs(i),l=Xn(Sn),t===null?(f=Zf(),f===null&&(f=Kt,h=Yf(),f.pooledCache=h,h.refCount++,h!==null&&(f.pooledCacheLanes|=s),f=h),i.memoizedState={parent:l,cache:f},Qf(i),Ka(i,Sn,f)):((t.lanes&s)!==0&&(Jf(t,i),Zo(i,null,null,s),$o()),f=t.memoizedState,h=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),Ka(i,Sn,l)):(l=h.cache,Ka(i,Sn,l),l!==f.cache&&qf(i,[Sn],s,!0))),Wn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ya(t){t.flags|=4}function Nd(t,i,s,l,f){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(f&335544128)===f)if(t.stateNode.complete)t.flags|=8192;else if(R_())t.flags|=8192;else throw Gs=Mc,Kf}else t.flags&=-16777217}function t_(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!gx(i))if(R_())t.flags|=8192;else throw Gs=Mc,Kf}function Hc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?Vt():536870912,t.lanes|=i,Br|=i)}function nl(t,i){if(!Dt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function tn(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function ab(t,i,s){var l=i.pendingProps;switch(Vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(i),null;case 1:return tn(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),_a(Sn),Xe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(Ar(i)?ya(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,kf())),tn(i),null;case 26:var f=i.type,h=i.memoizedState;return t===null?(ya(i),h!==null?(tn(i),t_(i,h)):(tn(i),Nd(i,f,null,l,s))):h?h!==t.memoizedState?(ya(i),tn(i),t_(i,h)):(tn(i),i.flags&=-16777217):(t=t.memoizedProps,t!==l&&ya(i),tn(i),Nd(i,f,t,l,s)),null;case 27:if(ut(i),s=ae.current,f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}t=Te.current,Ar(i)?Nm(i):(t=lx(f,l,s),i.stateNode=t,ya(i))}return tn(i),null;case 5:if(ut(i),f=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return tn(i),null}if(h=Te.current,Ar(i))Nm(i);else{var b=tu(ae.current);switch(h){case 1:h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":h=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":h=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":h=b.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?h.multiple=!0:l.size&&(h.size=l.size);break;default:h=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}h[cn]=i,h[un]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)h.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=h;e:switch(qn(h,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ya(i)}}return tn(i),Nd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,s),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ya(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ae.current,Ar(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,f=kn,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}t[cn]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||K_(t.nodeValue,s)),t||Za(i,!0)}else t=tu(t).createTextNode(l),t[cn]=i,i.stateNode=t}return tn(i),null;case 31:if(s=i.memoizedState,t===null||t.memoizedState!==null){if(l=Ar(i),s!==null){if(t===null){if(!l)throw Error(a(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[cn]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),t=!1}else s=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=s),t=!0;if(!t)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return tn(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(f=Ar(i),l!==null&&l.dehydrated!==null){if(t===null){if(!f)throw Error(a(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[cn]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;tn(i),f=!1}else f=kf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,t=t!==null&&t.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),h=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(h=l.memoizedState.cachePool.pool),h!==f&&(l.flags|=2048)),s!==t&&s&&(i.child.flags|=8192),Hc(i,i.updateQueue),tn(i),null);case 4:return Xe(),t===null&&nh(i.stateNode.containerInfo),tn(i),null;case 10:return _a(i.type),tn(i),null;case 19:if(ie(mn),l=i.memoizedState,l===null)return tn(i),null;if(f=(i.flags&128)!==0,h=l.rendering,h===null)if(f)nl(l,!1);else{if(dn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(h=Rc(t),h!==null){for(i.flags|=128,nl(l,!1),t=h.updateQueue,i.updateQueue=t,Hc(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Cm(s,t),s=s.sibling;return Se(mn,mn.current&1|2),Dt&&ma(i,l.treeForkCount),i.child}t=t.sibling}l.tail!==null&&E()>Xc&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304)}else{if(!f)if(t=Rc(h),t!==null){if(i.flags|=128,f=!0,t=t.updateQueue,i.updateQueue=t,Hc(i,t),nl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!h.alternate&&!Dt)return tn(i),null}else 2*E()-l.renderingStartTime>Xc&&s!==536870912&&(i.flags|=128,f=!0,nl(l,!1),i.lanes=4194304);l.isBackwards?(h.sibling=i.child,i.child=h):(t=l.last,t!==null?t.sibling=h:i.child=h,l.last=h)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=E(),t.sibling=null,s=mn.current,Se(mn,f?s&1|2:s&1),Dt&&ma(i,l.treeForkCount),t):(tn(i),null);case 22:case 23:return _i(i),id(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(tn(i),i.subtreeFlags&6&&(i.flags|=8192)):tn(i),s=i.updateQueue,s!==null&&Hc(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&ie(Bs),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),_a(Sn),tn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function sb(t,i){switch(Vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return _a(Sn),Xe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ut(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));zs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(_i(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));zs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return ie(mn),null;case 4:return Xe(),null;case 10:return _a(i.type),null;case 22:case 23:return _i(i),id(),t!==null&&ie(Bs),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return _a(Sn),null;case 25:return null;default:return null}}function n_(t,i){switch(Vf(i),i.tag){case 3:_a(Sn),Xe();break;case 26:case 27:case 5:ut(i);break;case 4:Xe();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:ie(mn);break;case 10:_a(i.type);break;case 22:case 23:_i(i),id(),t!==null&&ie(Bs);break;case 24:_a(Sn)}}function il(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&t)===t){l=void 0;var h=s.create,b=s.inst;l=h(),b.destroy=l}s=s.next}while(s!==f)}}catch(R){Xt(i,i.return,R)}}function is(t,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var h=f.next;l=h;do{if((l.tag&t)===t){var b=l.inst,R=b.destroy;if(R!==void 0){b.destroy=void 0,f=i;var F=s,te=R;try{te()}catch(me){Xt(f,F,me)}}}l=l.next}while(l!==h)}}catch(me){Xt(i,i.return,me)}}function i_(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{qm(i,s)}catch(l){Xt(t,t.return,l)}}}function a_(t,i,s){s.props=ks(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){Xt(t,i,l)}}function al(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(f){Xt(t,i,f)}}function na(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Xt(t,i,f)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Xt(t,i,f)}else s.current=null}function s_(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Xt(t,t.return,f)}}function Pd(t,i,s){try{var l=t.stateNode;Rb(l,t.type,s,i),l[un]=i}catch(f){Xt(t,t.return,f)}}function r_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&us(t.type)||t.tag===4}function zd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&us(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Id(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(l===27&&us(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Id(t,i,s),t=t.sibling;t!==null;)Id(t,i,s),t=t.sibling}function Gc(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&us(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(Gc(t,i,s),t=t.sibling;t!==null;)Gc(t,i,s),t=t.sibling}function o_(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);qn(i,l,s),i[cn]=t,i[un]=s}catch(h){Xt(t,t.return,h)}}var Sa=!1,Tn=!1,Fd=!1,l_=typeof WeakSet=="function"?WeakSet:Set,In=null;function rb(t,i){if(t=t.containerInfo,sh=lu,t=bm(t),Of(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var b=0,R=-1,F=-1,te=0,me=0,be=t,se=null;t:for(;;){for(var ce;be!==s||f!==0&&be.nodeType!==3||(R=b+f),be!==h||l!==0&&be.nodeType!==3||(F=b+l),be.nodeType===3&&(b+=be.nodeValue.length),(ce=be.firstChild)!==null;)se=be,be=ce;for(;;){if(be===t)break t;if(se===s&&++te===f&&(R=b),se===h&&++me===l&&(F=b),(ce=be.nextSibling)!==null)break;be=se,se=be.parentNode}be=ce}s=R===-1||F===-1?null:{start:R,end:F}}else s=null}s=s||{start:0,end:0}}else s=null;for(rh={focusedElem:t,selectionRange:s},lu=!1,In=i;In!==null;)if(i=In,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,In=t;else for(;In!==null;){switch(i=In,h=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(s=0;s<t.length;s++)f=t[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,s=i,f=h.memoizedProps,h=h.memoizedState,l=s.stateNode;try{var Ze=ks(s.type,f);t=l.getSnapshotBeforeUpdate(Ze,h),l.__reactInternalSnapshotBeforeUpdate=t}catch(rt){Xt(s,s.return,rt)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)ch(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ch(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,In=t;break}In=i.return}}function c_(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ea(t,s),l&4&&il(5,s);break;case 1:if(Ea(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(b){Xt(s,s.return,b)}else{var f=ks(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(f,i,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Xt(s,s.return,b)}}l&64&&i_(s),l&512&&al(s,s.return);break;case 3:if(Ea(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{qm(t,i)}catch(b){Xt(s,s.return,b)}}break;case 27:i===null&&l&4&&o_(s);case 26:case 5:Ea(t,s),i===null&&l&4&&s_(s),l&512&&al(s,s.return);break;case 12:Ea(t,s);break;case 31:Ea(t,s),l&4&&d_(t,s);break;case 13:Ea(t,s),l&4&&h_(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=mb.bind(null,s),Pb(t,s))));break;case 22:if(l=s.memoizedState!==null||Sa,!l){i=i!==null&&i.memoizedState!==null||Tn,f=Sa;var h=Tn;Sa=l,(Tn=i)&&!h?Ta(t,s,(s.subtreeFlags&8772)!==0):Ea(t,s),Sa=f,Tn=h}break;case 30:break;default:Ea(t,s)}}function u_(t){var i=t.alternate;i!==null&&(t.alternate=null,u_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ct(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var sn=null,ni=!1;function Ma(t,i,s){for(s=s.child;s!==null;)f_(t,i,s),s=s.sibling}function f_(t,i,s){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(ye,s)}catch{}switch(s.tag){case 26:Tn||na(s,i),Ma(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:Tn||na(s,i);var l=sn,f=ni;us(s.type)&&(sn=s.stateNode,ni=!1),Ma(t,i,s),hl(s.stateNode),sn=l,ni=f;break;case 5:Tn||na(s,i);case 6:if(l=sn,f=ni,sn=null,Ma(t,i,s),sn=l,ni=f,sn!==null)if(ni)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(s.stateNode)}catch(h){Xt(s,i,h)}else try{sn.removeChild(s.stateNode)}catch(h){Xt(s,i,h)}break;case 18:sn!==null&&(ni?(t=sn,ix(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),qr(t)):ix(sn,s.stateNode));break;case 4:l=sn,f=ni,sn=s.stateNode.containerInfo,ni=!0,Ma(t,i,s),sn=l,ni=f;break;case 0:case 11:case 14:case 15:is(2,s,i),Tn||is(4,s,i),Ma(t,i,s);break;case 1:Tn||(na(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&a_(s,i,l)),Ma(t,i,s);break;case 21:Ma(t,i,s);break;case 22:Tn=(l=Tn)||s.memoizedState!==null,Ma(t,i,s),Tn=l;break;default:Ma(t,i,s)}}function d_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{qr(t)}catch(s){Xt(i,i.return,s)}}}function h_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{qr(t)}catch(s){Xt(i,i.return,s)}}function ob(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new l_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new l_),i;default:throw Error(a(435,t.tag))}}function Vc(t,i){var s=ob(t);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=gb.bind(null,t,l);l.then(f,f)}})}function ii(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],h=t,b=i,R=b;e:for(;R!==null;){switch(R.tag){case 27:if(us(R.type)){sn=R.stateNode,ni=!1;break e}break;case 5:sn=R.stateNode,ni=!1;break e;case 3:case 4:sn=R.stateNode.containerInfo,ni=!0;break e}R=R.return}if(sn===null)throw Error(a(160));f_(h,b,f),sn=null,ni=!1,h=f.alternate,h!==null&&(h.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)p_(i,t),i=i.sibling}var Gi=null;function p_(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ii(i,t),ai(t),l&4&&(is(3,t,t.return),il(3,t),is(5,t,t.return));break;case 1:ii(i,t),ai(t),l&512&&(Tn||s===null||na(s,s.return)),l&64&&Sa&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=Gi;if(ii(i,t),ai(t),l&512&&(Tn||s===null||na(s,s.return)),l&4){var h=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":h=f.getElementsByTagName("title")[0],(!h||h[Ye]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=f.createElement(l),f.head.insertBefore(h,f.querySelector("head > title"))),qn(h,l,s),h[cn]=t,W(h),l=h;break e;case"link":var b=px("link","href",f).get(l+(s.href||""));if(b){for(var R=0;R<b.length;R++)if(h=b[R],h.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&h.getAttribute("rel")===(s.rel==null?null:s.rel)&&h.getAttribute("title")===(s.title==null?null:s.title)&&h.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(R,1);break t}}h=f.createElement(l),qn(h,l,s),f.head.appendChild(h);break;case"meta":if(b=px("meta","content",f).get(l+(s.content||""))){for(R=0;R<b.length;R++)if(h=b[R],h.getAttribute("content")===(s.content==null?null:""+s.content)&&h.getAttribute("name")===(s.name==null?null:s.name)&&h.getAttribute("property")===(s.property==null?null:s.property)&&h.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&h.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(R,1);break t}}h=f.createElement(l),qn(h,l,s),f.head.appendChild(h);break;default:throw Error(a(468,l))}h[cn]=t,W(h),l=h}t.stateNode=l}else mx(f,t.type,t.stateNode);else t.stateNode=hx(f,l,t.memoizedProps);else h!==l?(h===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):h.count--,l===null?mx(f,t.type,t.stateNode):hx(f,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Pd(t,t.memoizedProps,s.memoizedProps)}break;case 27:ii(i,t),ai(t),l&512&&(Tn||s===null||na(s,s.return)),s!==null&&l&4&&Pd(t,t.memoizedProps,s.memoizedProps);break;case 5:if(ii(i,t),ai(t),l&512&&(Tn||s===null||na(s,s.return)),t.flags&32){f=t.stateNode;try{Ji(f,"")}catch(Ze){Xt(t,t.return,Ze)}}l&4&&t.stateNode!=null&&(f=t.memoizedProps,Pd(t,f,s!==null?s.memoizedProps:f)),l&1024&&(Fd=!0);break;case 6:if(ii(i,t),ai(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(Ze){Xt(t,t.return,Ze)}}break;case 3:if(au=null,f=Gi,Gi=nu(i.containerInfo),ii(i,t),Gi=f,ai(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qr(i.containerInfo)}catch(Ze){Xt(t,t.return,Ze)}Fd&&(Fd=!1,m_(t));break;case 4:l=Gi,Gi=nu(t.stateNode.containerInfo),ii(i,t),ai(t),Gi=l;break;case 12:ii(i,t),ai(t);break;case 31:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 13:ii(i,t),ai(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(kc=E()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 22:f=t.memoizedState!==null;var F=s!==null&&s.memoizedState!==null,te=Sa,me=Tn;if(Sa=te||f,Tn=me||F,ii(i,t),Tn=me,Sa=te,ai(t),l&8192)e:for(i=t.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||F||Sa||Tn||Xs(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){F=s=i;try{if(h=F.stateNode,f)b=h.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{R=F.stateNode;var be=F.memoizedProps.style,se=be!=null&&be.hasOwnProperty("display")?be.display:null;R.style.display=se==null||typeof se=="boolean"?"":(""+se).trim()}}catch(Ze){Xt(F,F.return,Ze)}}}else if(i.tag===6){if(s===null){F=i;try{F.stateNode.nodeValue=f?"":F.memoizedProps}catch(Ze){Xt(F,F.return,Ze)}}}else if(i.tag===18){if(s===null){F=i;try{var ce=F.stateNode;f?ax(ce,!0):ax(F.stateNode,!1)}catch(Ze){Xt(F,F.return,Ze)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Vc(t,s))));break;case 19:ii(i,t),ai(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,Vc(t,l)));break;case 30:break;case 21:break;default:ii(i,t),ai(t)}}function ai(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(r_(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var f=s.stateNode,h=zd(t);Gc(t,h,f);break;case 5:var b=s.stateNode;s.flags&32&&(Ji(b,""),s.flags&=-33);var R=zd(t);Gc(t,R,b);break;case 3:case 4:var F=s.stateNode.containerInfo,te=zd(t);Id(t,te,F);break;default:throw Error(a(161))}}catch(me){Xt(t,t.return,me)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function m_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;m_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ea(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)c_(t,i.alternate,i),i=i.sibling}function Xs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:is(4,i,i.return),Xs(i);break;case 1:na(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&a_(i,i.return,s),Xs(i);break;case 27:hl(i.stateNode);case 26:case 5:na(i,i.return),Xs(i);break;case 22:i.memoizedState===null&&Xs(i);break;case 30:Xs(i);break;default:Xs(i)}t=t.sibling}}function Ta(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=t,h=i,b=h.flags;switch(h.tag){case 0:case 11:case 15:Ta(f,h,s),il(4,h);break;case 1:if(Ta(f,h,s),l=h,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(te){Xt(l,l.return,te)}if(l=h,f=l.updateQueue,f!==null){var R=l.stateNode;try{var F=f.shared.hiddenCallbacks;if(F!==null)for(f.shared.hiddenCallbacks=null,f=0;f<F.length;f++)Wm(F[f],R)}catch(te){Xt(l,l.return,te)}}s&&b&64&&i_(h),al(h,h.return);break;case 27:o_(h);case 26:case 5:Ta(f,h,s),s&&l===null&&b&4&&s_(h),al(h,h.return);break;case 12:Ta(f,h,s);break;case 31:Ta(f,h,s),s&&b&4&&d_(f,h);break;case 13:Ta(f,h,s),s&&b&4&&h_(f,h);break;case 22:h.memoizedState===null&&Ta(f,h,s),al(h,h.return);break;case 30:break;default:Ta(f,h,s)}i=i.sibling}}function Bd(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&ko(s))}function Hd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t))}function Vi(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)g_(t,i,s,l),i=i.sibling}function g_(t,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:Vi(t,i,s,l),f&2048&&il(9,i);break;case 1:Vi(t,i,s,l);break;case 3:Vi(t,i,s,l),f&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&ko(t)));break;case 12:if(f&2048){Vi(t,i,s,l),t=i.stateNode;try{var h=i.memoizedProps,b=h.id,R=h.onPostCommit;typeof R=="function"&&R(b,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Xt(i,i.return,F)}}else Vi(t,i,s,l);break;case 31:Vi(t,i,s,l);break;case 13:Vi(t,i,s,l);break;case 23:break;case 22:h=i.stateNode,b=i.alternate,i.memoizedState!==null?h._visibility&2?Vi(t,i,s,l):sl(t,i):h._visibility&2?Vi(t,i,s,l):(h._visibility|=2,zr(t,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&Bd(b,i);break;case 24:Vi(t,i,s,l),f&2048&&Hd(i.alternate,i);break;default:Vi(t,i,s,l)}}function zr(t,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var h=t,b=i,R=s,F=l,te=b.flags;switch(b.tag){case 0:case 11:case 15:zr(h,b,R,F,f),il(8,b);break;case 23:break;case 22:var me=b.stateNode;b.memoizedState!==null?me._visibility&2?zr(h,b,R,F,f):sl(h,b):(me._visibility|=2,zr(h,b,R,F,f)),f&&te&2048&&Bd(b.alternate,b);break;case 24:zr(h,b,R,F,f),f&&te&2048&&Hd(b.alternate,b);break;default:zr(h,b,R,F,f)}i=i.sibling}}function sl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,f=l.flags;switch(l.tag){case 22:sl(s,l),f&2048&&Bd(l.alternate,l);break;case 24:sl(s,l),f&2048&&Hd(l.alternate,l);break;default:sl(s,l)}i=i.sibling}}var rl=8192;function Ir(t,i,s){if(t.subtreeFlags&rl)for(t=t.child;t!==null;)__(t,i,s),t=t.sibling}function __(t,i,s){switch(t.tag){case 26:Ir(t,i,s),t.flags&rl&&t.memoizedState!==null&&qb(s,Gi,t.memoizedState,t.memoizedProps);break;case 5:Ir(t,i,s);break;case 3:case 4:var l=Gi;Gi=nu(t.stateNode.containerInfo),Ir(t,i,s),Gi=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=rl,rl=16777216,Ir(t,i,s),rl=l):Ir(t,i,s));break;default:Ir(t,i,s)}}function x_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function ol(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,b_(l,t)}x_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)v_(t),t=t.sibling}function v_(t){switch(t.tag){case 0:case 11:case 15:ol(t),t.flags&2048&&is(9,t,t.return);break;case 3:ol(t);break;case 12:ol(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,jc(t)):ol(t);break;default:ol(t)}}function jc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];In=l,b_(l,t)}x_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:is(8,i,i.return),jc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,jc(i));break;default:jc(i)}t=t.sibling}}function b_(t,i){for(;In!==null;){var s=In;switch(s.tag){case 0:case 11:case 15:is(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ko(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,In=l;else e:for(s=t;In!==null;){l=In;var f=l.sibling,h=l.return;if(u_(l),l===s){In=null;break e}if(f!==null){f.return=h,In=f;break e}In=h}}}var lb={getCacheForType:function(t){var i=Xn(Sn),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s},cacheSignal:function(){return Xn(Sn).controller.signal}},cb=typeof WeakMap=="function"?WeakMap:Map,Ht=0,Kt=null,Tt=null,Rt=0,kt=0,xi=null,as=!1,Fr=!1,Gd=!1,Aa=0,dn=0,ss=0,Ws=0,Vd=0,vi=0,Br=0,ll=null,si=null,jd=!1,kc=0,y_=0,Xc=1/0,Wc=null,rs=null,Cn=0,os=null,Hr=null,Ra=0,kd=0,Xd=null,S_=null,cl=0,Wd=null;function bi(){return(Ht&2)!==0&&Rt!==0?Rt&-Rt:P.T!==null?Qd():Wa()}function M_(){if(vi===0)if((Rt&536870912)===0||Dt){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),vi=t}else vi=536870912;return t=gi.current,t!==null&&(t.flags|=32),vi}function ri(t,i,s){(t===Kt&&(kt===2||kt===9)||t.cancelPendingCommit!==null)&&(Gr(t,0),ls(t,Rt,vi,!1)),Rn(t,s),((Ht&2)===0||t!==Kt)&&(t===Kt&&((Ht&2)===0&&(Ws|=s),dn===4&&ls(t,Rt,vi,!1)),ia(t))}function E_(t,i,s){if((Ht&6)!==0)throw Error(a(327));var l=!s&&(i&127)===0&&(i&t.expiredLanes)===0||je(t,i),f=l?db(t,i):Yd(t,i,!0),h=l;do{if(f===0){Fr&&!l&&ls(t,i,0,!1);break}else{if(s=t.current.alternate,h&&!ub(s)){f=Yd(t,i,!1),h=!1;continue}if(f===2){if(h=i,t.errorRecoveryDisabledLanes&h)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var R=t;f=ll;var F=R.current.memoizedState.isDehydrated;if(F&&(Gr(R,b).flags|=256),b=Yd(R,b,!1),b!==2){if(Gd&&!F){R.errorRecoveryDisabledLanes|=h,Ws|=h,f=4;break e}h=si,si=f,h!==null&&(si===null?si=h:si.push.apply(si,h))}f=b}if(h=!1,f!==2)continue}}if(f===1){Gr(t,0),ls(t,i,0,!0);break}e:{switch(l=t,h=f,h){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:ls(l,i,vi,!as);break e;case 2:si=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(f=kc+300-E(),10<f)){if(ls(l,i,vi,!as),ve(l,0,!0)!==0)break e;Ra=i,l.timeoutHandle=tx(T_.bind(null,l,s,si,Wc,jd,i,vi,Ws,Br,as,h,"Throttled",-0,0),f);break e}T_(l,s,si,Wc,jd,i,vi,Ws,Br,as,h,null,-0,0)}}break}while(!0);ia(t)}function T_(t,i,s,l,f,h,b,R,F,te,me,be,se,ce){if(t.timeoutHandle=-1,be=i.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},__(i,h,be);var Ze=(h&62914560)===h?kc-E():(h&4194048)===h?y_-E():0;if(Ze=Yb(be,Ze),Ze!==null){Ra=h,t.cancelPendingCommit=Ze(L_.bind(null,t,i,h,s,l,f,b,R,F,me,be,null,se,ce)),ls(t,h,b,!te);return}}L_(t,i,h,s,l,f,b,R,F)}function ub(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],h=f.getSnapshot;f=f.value;try{if(!pi(h(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ls(t,i,s,l){i&=~Vd,i&=~Ws,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var f=i;0<f;){var h=31-Ve(f),b=1<<h;l[h]=-1,f&=~b}s!==0&&pr(t,s,i)}function qc(){return(Ht&6)===0?(ul(0),!1):!0}function qd(){if(Tt!==null){if(kt===0)var t=Tt.return;else t=Tt,ga=Is=null,cd(t),Or=null,Wo=0,t=Tt;for(;t!==null;)n_(t.alternate,t),t=t.return;Tt=null}}function Gr(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,Db(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),Ra=0,qd(),Kt=t,Tt=s=pa(t.current,null),Rt=i,kt=0,xi=null,as=!1,Fr=je(t,i),Gd=!1,Br=vi=Vd=Ws=ss=dn=0,si=ll=null,jd=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var f=31-Ve(l),h=1<<f;i|=t[f],l&=~h}return Aa=i,pc(),s}function A_(t,i){gt=null,P.H=el,i===Dr||i===Sc?(i=Vm(),kt=3):i===Kf?(i=Vm(),kt=4):kt=i===Td?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,xi=i,Tt===null&&(dn=1,zc(t,Ci(i,t.current)))}function R_(){var t=gi.current;return t===null?!0:(Rt&4194048)===Rt?Li===null:(Rt&62914560)===Rt||(Rt&536870912)!==0?t===Li:!1}function w_(){var t=P.H;return P.H=el,t===null?el:t}function C_(){var t=P.A;return P.A=lb,t}function Yc(){dn=4,as||(Rt&4194048)!==Rt&&gi.current!==null||(Fr=!0),(ss&134217727)===0&&(Ws&134217727)===0||Kt===null||ls(Kt,Rt,vi,!1)}function Yd(t,i,s){var l=Ht;Ht|=2;var f=w_(),h=C_();(Kt!==t||Rt!==i)&&(Wc=null,Gr(t,i)),i=!1;var b=dn;e:do try{if(kt!==0&&Tt!==null){var R=Tt,F=xi;switch(kt){case 8:qd(),b=6;break e;case 3:case 2:case 9:case 6:gi.current===null&&(i=!0);var te=kt;if(kt=0,xi=null,Vr(t,R,F,te),s&&Fr){b=0;break e}break;default:te=kt,kt=0,xi=null,Vr(t,R,F,te)}}fb(),b=dn;break}catch(me){A_(t,me)}while(!0);return i&&t.shellSuspendCounter++,ga=Is=null,Ht=l,P.H=f,P.A=h,Tt===null&&(Kt=null,Rt=0,pc()),b}function fb(){for(;Tt!==null;)D_(Tt)}function db(t,i){var s=Ht;Ht|=2;var l=w_(),f=C_();Kt!==t||Rt!==i?(Wc=null,Xc=E()+500,Gr(t,i)):Fr=je(t,i);e:do try{if(kt!==0&&Tt!==null){i=Tt;var h=xi;t:switch(kt){case 1:kt=0,xi=null,Vr(t,i,h,1);break;case 2:case 9:if(Hm(h)){kt=0,xi=null,O_(i);break}i=function(){kt!==2&&kt!==9||Kt!==t||(kt=7),ia(t)},h.then(i,i);break e;case 3:kt=7;break e;case 4:kt=5;break e;case 7:Hm(h)?(kt=0,xi=null,O_(i)):(kt=0,xi=null,Vr(t,i,h,7));break;case 5:var b=null;switch(Tt.tag){case 26:b=Tt.memoizedState;case 5:case 27:var R=Tt;if(b?gx(b):R.stateNode.complete){kt=0,xi=null;var F=R.sibling;if(F!==null)Tt=F;else{var te=R.return;te!==null?(Tt=te,$c(te)):Tt=null}break t}}kt=0,xi=null,Vr(t,i,h,5);break;case 6:kt=0,xi=null,Vr(t,i,h,6);break;case 8:qd(),dn=6;break e;default:throw Error(a(462))}}hb();break}catch(me){A_(t,me)}while(!0);return ga=Is=null,P.H=l,P.A=f,Ht=s,Tt!==null?0:(Kt=null,Rt=0,pc(),dn)}function hb(){for(;Tt!==null&&!lt();)D_(Tt)}function D_(t){var i=e_(t.alternate,t,Aa);t.memoizedProps=t.pendingProps,i===null?$c(t):Tt=i}function O_(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=Yg(s,i,i.pendingProps,i.type,void 0,Rt);break;case 11:i=Yg(s,i,i.pendingProps,i.type.render,i.ref,Rt);break;case 5:cd(i);default:n_(s,i),i=Tt=Cm(i,Aa),i=e_(s,i,Aa)}t.memoizedProps=t.pendingProps,i===null?$c(t):Tt=i}function Vr(t,i,s,l){ga=Is=null,cd(i),Or=null,Wo=0;var f=i.return;try{if(tb(t,f,i,s,Rt)){dn=1,zc(t,Ci(s,t.current)),Tt=null;return}}catch(h){if(f!==null)throw Tt=f,h;dn=1,zc(t,Ci(s,t.current)),Tt=null;return}i.flags&32768?(Dt||l===1?t=!0:Fr||(Rt&536870912)!==0?t=!1:(as=t=!0,(l===2||l===9||l===3||l===6)&&(l=gi.current,l!==null&&l.tag===13&&(l.flags|=16384))),U_(i,t)):$c(i)}function $c(t){var i=t;do{if((i.flags&32768)!==0){U_(i,as);return}t=i.return;var s=ab(i.alternate,i,Aa);if(s!==null){Tt=s;return}if(i=i.sibling,i!==null){Tt=i;return}Tt=i=t}while(i!==null);dn===0&&(dn=5)}function U_(t,i){do{var s=sb(t.alternate,t);if(s!==null){s.flags&=32767,Tt=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=s}while(t!==null);dn=6,Tt=null}function L_(t,i,s,l,f,h,b,R,F){t.cancelPendingCommit=null;do Zc();while(Cn!==0);if((Ht&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(h=i.lanes|i.childLanes,h|=zf,ei(t,s,h,b,R,F),t===Kt&&(Tt=Kt=null,Rt=0),Hr=i,os=t,Ra=s,kd=h,Xd=f,S_=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,_b(de,function(){return F_(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=P.T,P.T=null,f=q.p,q.p=2,b=Ht,Ht|=4;try{rb(t,i,s)}finally{Ht=b,q.p=f,P.T=l}}Cn=1,N_(),P_(),z_()}}function N_(){if(Cn===1){Cn=0;var t=os,i=Hr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=P.T,P.T=null;var l=q.p;q.p=2;var f=Ht;Ht|=4;try{p_(i,t);var h=rh,b=bm(t.containerInfo),R=h.focusedElem,F=h.selectionRange;if(b!==R&&R&&R.ownerDocument&&vm(R.ownerDocument.documentElement,R)){if(F!==null&&Of(R)){var te=F.start,me=F.end;if(me===void 0&&(me=te),"selectionStart"in R)R.selectionStart=te,R.selectionEnd=Math.min(me,R.value.length);else{var be=R.ownerDocument||document,se=be&&be.defaultView||window;if(se.getSelection){var ce=se.getSelection(),Ze=R.textContent.length,rt=Math.min(F.start,Ze),$t=F.end===void 0?rt:Math.min(F.end,Ze);!ce.extend&&rt>$t&&(b=$t,$t=rt,rt=b);var $=xm(R,rt),V=xm(R,$t);if($&&V&&(ce.rangeCount!==1||ce.anchorNode!==$.node||ce.anchorOffset!==$.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var ee=be.createRange();ee.setStart($.node,$.offset),ce.removeAllRanges(),rt>$t?(ce.addRange(ee),ce.extend(V.node,V.offset)):(ee.setEnd(V.node,V.offset),ce.addRange(ee))}}}}for(be=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&be.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<be.length;R++){var xe=be[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}lu=!!sh,rh=sh=null}finally{Ht=f,q.p=l,P.T=s}}t.current=i,Cn=2}}function P_(){if(Cn===2){Cn=0;var t=os,i=Hr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=P.T,P.T=null;var l=q.p;q.p=2;var f=Ht;Ht|=4;try{c_(t,i.alternate,i)}finally{Ht=f,q.p=l,P.T=s}}Cn=3}}function z_(){if(Cn===4||Cn===3){Cn=0,O();var t=os,i=Hr,s=Ra,l=S_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Cn=5:(Cn=0,Hr=os=null,I_(t,t.pendingLanes));var f=t.pendingLanes;if(f===0&&(rs=null),la(s),i=i.stateNode,Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(ye,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=P.T,f=q.p,q.p=2,P.T=null;try{for(var h=t.onRecoverableError,b=0;b<l.length;b++){var R=l[b];h(R.value,{componentStack:R.stack})}}finally{P.T=i,q.p=f}}(Ra&3)!==0&&Zc(),ia(t),f=t.pendingLanes,(s&261930)!==0&&(f&42)!==0?t===Wd?cl++:(cl=0,Wd=t):cl=0,ul(0)}}function I_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,ko(i)))}function Zc(){return N_(),P_(),z_(),F_()}function F_(){if(Cn!==5)return!1;var t=os,i=kd;kd=0;var s=la(Ra),l=P.T,f=q.p;try{q.p=32>s?32:s,P.T=null,s=Xd,Xd=null;var h=os,b=Ra;if(Cn=0,Hr=os=null,Ra=0,(Ht&6)!==0)throw Error(a(331));var R=Ht;if(Ht|=4,v_(h.current),g_(h,h.current,b,s),Ht=R,ul(0,!1),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(ye,h)}catch{}return!0}finally{q.p=f,P.T=l,I_(t,i)}}function B_(t,i,s){i=Ci(s,i),i=Ed(t.stateNode,i,2),t=es(t,i,2),t!==null&&(Rn(t,2),ia(t))}function Xt(t,i,s){if(t.tag===3)B_(t,t,s);else for(;i!==null;){if(i.tag===3){B_(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(rs===null||!rs.has(l))){t=Ci(s,t),s=Hg(2),l=es(i,s,2),l!==null&&(Gg(s,l,i,t),Rn(l,2),ia(l));break}}i=i.return}}function $d(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new cb;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(Gd=!0,f.add(s),t=pb.bind(null,t,i,s),i.then(t,t))}function pb(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,Kt===t&&(Rt&s)===s&&(dn===4||dn===3&&(Rt&62914560)===Rt&&300>E()-kc?(Ht&2)===0&&Gr(t,0):Vd|=s,Br===Rt&&(Br=0)),ia(t)}function H_(t,i){i===0&&(i=Vt()),t=Ns(t,i),t!==null&&(Rn(t,i),ia(t))}function mb(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),H_(t,s)}function gb(t,i){var s=0;switch(t.tag){case 31:case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),H_(t,s)}function _b(t,i){return jt(t,i)}var Kc=null,jr=null,Zd=!1,Qc=!1,Kd=!1,cs=0;function ia(t){t!==jr&&t.next===null&&(jr===null?Kc=jr=t:jr=jr.next=t),Qc=!0,Zd||(Zd=!0,vb())}function ul(t,i){if(!Kd&&Qc){Kd=!0;do for(var s=!1,l=Kc;l!==null;){if(t!==0){var f=l.pendingLanes;if(f===0)var h=0;else{var b=l.suspendedLanes,R=l.pingedLanes;h=(1<<31-Ve(42|t)+1)-1,h&=f&~(b&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(s=!0,k_(l,h))}else h=Rt,h=ve(l,l===Kt?h:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(h&3)===0||je(l,h)||(s=!0,k_(l,h));l=l.next}while(s);Kd=!1}}function xb(){G_()}function G_(){Qc=Zd=!1;var t=0;cs!==0&&Cb()&&(t=cs);for(var i=E(),s=null,l=Kc;l!==null;){var f=l.next,h=V_(l,i);h===0?(l.next=null,s===null?Kc=f:s.next=f,f===null&&(jr=s)):(s=l,(t!==0||(h&3)!==0)&&(Qc=!0)),l=f}Cn!==0&&Cn!==5||ul(t),cs!==0&&(cs=0)}function V_(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var b=31-Ve(h),R=1<<b,F=f[b];F===-1?((R&s)===0||(R&l)!==0)&&(f[b]=st(R,i)):F<=i&&(t.expiredLanes|=R),h&=~R}if(i=Kt,s=Rt,s=ve(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(kt===2||kt===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&tt(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||je(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&tt(l),la(s)){case 2:case 8:s=Ee;break;case 32:s=de;break;case 268435456:s=oe;break;default:s=de}return l=j_.bind(null,t),s=jt(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&tt(l),t.callbackPriority=2,t.callbackNode=null,2}function j_(t,i){if(Cn!==0&&Cn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(Zc()&&t.callbackNode!==s)return null;var l=Rt;return l=ve(t,t===Kt?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(E_(t,l,i),V_(t,E()),t.callbackNode!=null&&t.callbackNode===s?j_.bind(null,t):null)}function k_(t,i){if(Zc())return null;E_(t,i,!0)}function vb(){Ob(function(){(Ht&6)!==0?jt(_e,xb):G_()})}function Qd(){if(cs===0){var t=wr;t===0&&(t=ze,ze<<=1,(ze&261888)===0&&(ze=256)),cs=t}return cs}function X_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:rc(""+t)}function W_(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function bb(t,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var h=X_((f[un]||null).action),b=l.submitter;b&&(i=(i=b[un]||null)?X_(i.formAction):b.getAttribute("formAction"),i!==null&&(h=i,b=null));var R=new uc("action","action",null,l,f);t.push({event:R,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(cs!==0){var F=b?W_(f,b):new FormData(f);xd(s,{pending:!0,data:F,method:f.method,action:h},null,F)}}else typeof h=="function"&&(R.preventDefault(),F=b?W_(f,b):new FormData(f),xd(s,{pending:!0,data:F,method:f.method,action:h},h,F))},currentTarget:f}]})}}for(var Jd=0;Jd<Pf.length;Jd++){var eh=Pf[Jd],yb=eh.toLowerCase(),Sb=eh[0].toUpperCase()+eh.slice(1);Hi(yb,"on"+Sb)}Hi(Mm,"onAnimationEnd"),Hi(Em,"onAnimationIteration"),Hi(Tm,"onAnimationStart"),Hi("dblclick","onDoubleClick"),Hi("focusin","onFocus"),Hi("focusout","onBlur"),Hi(F1,"onTransitionRun"),Hi(B1,"onTransitionStart"),Hi(H1,"onTransitionCancel"),Hi(Am,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),we("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),we("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),we("onBeforeInput",["compositionend","keypress","textInput","paste"]),we("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),we("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function q_(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var b=l.length-1;0<=b;b--){var R=l[b],F=R.instance,te=R.currentTarget;if(R=R.listener,F!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=te;try{h(f)}catch(me){hc(me)}f.currentTarget=null,h=F}else for(b=0;b<l.length;b++){if(R=l[b],F=R.instance,te=R.currentTarget,R=R.listener,F!==h&&f.isPropagationStopped())break e;h=R,f.currentTarget=te;try{h(f)}catch(me){hc(me)}f.currentTarget=null,h=F}}}}function At(t,i){var s=i[ca];s===void 0&&(s=i[ca]=new Set);var l=t+"__bubble";s.has(l)||(Y_(i,t,2,!1),s.add(l))}function th(t,i,s){var l=0;i&&(l|=4),Y_(s,t,l,i)}var Jc="_reactListening"+Math.random().toString(36).slice(2);function nh(t){if(!t[Jc]){t[Jc]=!0,X.forEach(function(s){s!=="selectionchange"&&(Mb.has(s)||th(s,!1,t),th(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Jc]||(i[Jc]=!0,th("selectionchange",!1,i))}}function Y_(t,i,s,l){switch(Mx(i)){case 2:var f=Kb;break;case 8:f=Qb;break;default:f=_h}s=f.bind(null,i,s,t),f=void 0,!Sf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,s,{capture:!0,passive:f}):t.addEventListener(i,s,!0):f!==void 0?t.addEventListener(i,s,{passive:f}):t.addEventListener(i,s,!1)}function ih(t,i,s,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var R=l.stateNode.containerInfo;if(R===f)break;if(b===4)for(b=l.return;b!==null;){var F=b.tag;if((F===3||F===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;R!==null;){if(b=Ft(R),b===null)return;if(F=b.tag,F===5||F===6||F===26||F===27){l=h=b;continue e}R=R.parentNode}}l=l.return}Jp(function(){var te=h,me=bf(s),be=[];e:{var se=Rm.get(t);if(se!==void 0){var ce=uc,Ze=t;switch(t){case"keypress":if(lc(s)===0)break e;case"keydown":case"keyup":ce=g1;break;case"focusin":Ze="focus",ce=Af;break;case"focusout":Ze="blur",ce=Af;break;case"beforeblur":case"afterblur":ce=Af;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=a1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=v1;break;case Mm:case Em:case Tm:ce=o1;break;case Am:ce=y1;break;case"scroll":case"scrollend":ce=n1;break;case"wheel":ce=M1;break;case"copy":case"cut":case"paste":ce=c1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=am;break;case"toggle":case"beforetoggle":ce=T1}var rt=(i&4)!==0,$t=!rt&&(t==="scroll"||t==="scrollend"),$=rt?se!==null?se+"Capture":null:se;rt=[];for(var V=te,ee;V!==null;){var xe=V;if(ee=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||ee===null||$===null||(xe=Lo(V,$),xe!=null&&rt.push(dl(V,xe,ee))),$t)break;V=V.return}0<rt.length&&(se=new ce(se,Ze,null,s,me),be.push({event:se,listeners:rt}))}}if((i&7)===0){e:{if(se=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",se&&s!==vf&&(Ze=s.relatedTarget||s.fromElement)&&(Ft(Ze)||Ze[Ri]))break e;if((ce||se)&&(se=me.window===me?me:(se=me.ownerDocument)?se.defaultView||se.parentWindow:window,ce?(Ze=s.relatedTarget||s.toElement,ce=te,Ze=Ze?Ft(Ze):null,Ze!==null&&($t=c(Ze),rt=Ze.tag,Ze!==$t||rt!==5&&rt!==27&&rt!==6)&&(Ze=null)):(ce=null,Ze=te),ce!==Ze)){if(rt=nm,xe="onMouseLeave",$="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(rt=am,xe="onPointerLeave",$="onPointerEnter",V="pointer"),$t=ce==null?se:k(ce),ee=Ze==null?se:k(Ze),se=new rt(xe,V+"leave",ce,s,me),se.target=$t,se.relatedTarget=ee,xe=null,Ft(me)===te&&(rt=new rt($,V+"enter",Ze,s,me),rt.target=ee,rt.relatedTarget=$t,xe=rt),$t=xe,ce&&Ze)t:{for(rt=Eb,$=ce,V=Ze,ee=0,xe=$;xe;xe=rt(xe))ee++;xe=0;for(var it=V;it;it=rt(it))xe++;for(;0<ee-xe;)$=rt($),ee--;for(;0<xe-ee;)V=rt(V),xe--;for(;ee--;){if($===V||V!==null&&$===V.alternate){rt=$;break t}$=rt($),V=rt(V)}rt=null}else rt=null;ce!==null&&$_(be,se,ce,rt,!1),Ze!==null&&$t!==null&&$_(be,$t,Ze,rt,!0)}}e:{if(se=te?k(te):window,ce=se.nodeName&&se.nodeName.toLowerCase(),ce==="select"||ce==="input"&&se.type==="file")var Pt=dm;else if(um(se))if(hm)Pt=P1;else{Pt=L1;var et=U1}else ce=se.nodeName,!ce||ce.toLowerCase()!=="input"||se.type!=="checkbox"&&se.type!=="radio"?te&&xf(te.elementType)&&(Pt=dm):Pt=N1;if(Pt&&(Pt=Pt(t,te))){fm(be,Pt,s,me);break e}et&&et(t,se,te),t==="focusout"&&te&&se.type==="number"&&te.memoizedProps.value!=null&&Pn(se,"number",se.value)}switch(et=te?k(te):window,t){case"focusin":(um(et)||et.contentEditable==="true")&&(br=et,Uf=te,Go=null);break;case"focusout":Go=Uf=br=null;break;case"mousedown":Lf=!0;break;case"contextmenu":case"mouseup":case"dragend":Lf=!1,ym(be,s,me);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":ym(be,s,me)}var yt;if(wf)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else vr?lm(t,s)&&(wt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(wt="onCompositionStart");wt&&(sm&&s.locale!=="ko"&&(vr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&vr&&(yt=em()):(qa=me,Mf="value"in qa?qa.value:qa.textContent,vr=!0)),et=eu(te,wt),0<et.length&&(wt=new im(wt,t,null,s,me),be.push({event:wt,listeners:et}),yt?wt.data=yt:(yt=cm(s),yt!==null&&(wt.data=yt)))),(yt=R1?w1(t,s):C1(t,s))&&(wt=eu(te,"onBeforeInput"),0<wt.length&&(et=new im("onBeforeInput","beforeinput",null,s,me),be.push({event:et,listeners:wt}),et.data=yt)),bb(be,t,te,s,me)}q_(be,i)})}function dl(t,i,s){return{instance:t,listener:i,currentTarget:s}}function eu(t,i){for(var s=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||h===null||(f=Lo(t,s),f!=null&&l.unshift(dl(t,f,h)),f=Lo(t,i),f!=null&&l.push(dl(t,f,h))),t.tag===3)return l;t=t.return}return[]}function Eb(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $_(t,i,s,l,f){for(var h=i._reactName,b=[];s!==null&&s!==l;){var R=s,F=R.alternate,te=R.stateNode;if(R=R.tag,F!==null&&F===l)break;R!==5&&R!==26&&R!==27||te===null||(F=te,f?(te=Lo(s,h),te!=null&&b.unshift(dl(s,te,F))):f||(te=Lo(s,h),te!=null&&b.push(dl(s,te,F)))),s=s.return}b.length!==0&&t.push({event:i,listeners:b})}var Tb=/\r\n?/g,Ab=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(Tb,`
`).replace(Ab,"")}function K_(t,i){return i=Z_(i),Z_(t)===i}function Yt(t,i,s,l,f,h){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ji(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ji(t,""+l);break;case"className":xt(t,"class",l);break;case"tabIndex":xt(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xt(t,s,l);break;case"style":Kp(t,l,h);break;case"data":if(i!=="object"){xt(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(s==="formAction"?(i!=="input"&&Yt(t,i,"name",f.name,f,null),Yt(t,i,"formEncType",f.formEncType,f,null),Yt(t,i,"formMethod",f.formMethod,f,null),Yt(t,i,"formTarget",f.formTarget,f,null)):(Yt(t,i,"encType",f.encType,f,null),Yt(t,i,"method",f.method,f,null),Yt(t,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=rc(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=da);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=rc(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":At("beforetoggle",t),At("toggle",t),at(t,"popover",l);break;case"xlinkActuate":vt(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":vt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":vt(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":vt(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":vt(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":vt(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":vt(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":vt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":vt(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":at(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=e1.get(s)||s,at(t,s,l))}}function ah(t,i,s,l,f,h){switch(s){case"style":Kp(t,l,h);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Ji(t,l):(typeof l=="number"||typeof l=="bigint")&&Ji(t,""+l);break;case"onScroll":l!=null&&At("scroll",t);break;case"onScrollEnd":l!=null&&At("scrollend",t);break;case"onClick":l!=null&&(t.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Me.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),h=t[un]||null,h=h!=null?h[s]:null,typeof h=="function"&&t.removeEventListener(i,h,f),typeof l=="function")){typeof h!="function"&&h!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,f);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):at(t,s,l)}}}function qn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var l=!1,f=!1,h;for(h in s)if(s.hasOwnProperty(h)){var b=s[h];if(b!=null)switch(h){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Yt(t,i,h,b,s,null)}}f&&Yt(t,i,"srcSet",s.srcSet,s,null),l&&Yt(t,i,"src",s.src,s,null);return;case"input":At("invalid",t);var R=h=b=f=null,F=null,te=null;for(l in s)if(s.hasOwnProperty(l)){var me=s[l];if(me!=null)switch(l){case"name":f=me;break;case"type":b=me;break;case"checked":F=me;break;case"defaultChecked":te=me;break;case"value":h=me;break;case"defaultValue":R=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(a(137,i));break;default:Yt(t,i,l,me,s,null)}}Jt(t,h,R,F,te,b,f,!1);return;case"select":At("invalid",t),l=b=h=null;for(f in s)if(s.hasOwnProperty(f)&&(R=s[f],R!=null))switch(f){case"value":h=R;break;case"defaultValue":b=R;break;case"multiple":l=R;default:Yt(t,i,f,R,s,null)}i=h,s=b,t.multiple=!!l,i!=null?wn(t,!!l,i,!1):s!=null&&wn(t,!!l,s,!0);return;case"textarea":At("invalid",t),h=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(R=s[b],R!=null))switch(b){case"value":l=R;break;case"defaultValue":f=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Yt(t,i,b,R,s,null)}jn(t,l,f,h);return;case"option":for(F in s)if(s.hasOwnProperty(F)&&(l=s[F],l!=null))switch(F){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Yt(t,i,F,l,s,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(l=0;l<fl.length;l++)At(fl[l],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(te in s)if(s.hasOwnProperty(te)&&(l=s[te],l!=null))switch(te){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Yt(t,i,te,l,s,null)}return;default:if(xf(i)){for(me in s)s.hasOwnProperty(me)&&(l=s[me],l!==void 0&&ah(t,i,me,l,s,void 0));return}}for(R in s)s.hasOwnProperty(R)&&(l=s[R],l!=null&&Yt(t,i,R,l,s,null))}function Rb(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,h=null,b=null,R=null,F=null,te=null,me=null;for(ce in s){var be=s[ce];if(s.hasOwnProperty(ce)&&be!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=be;default:l.hasOwnProperty(ce)||Yt(t,i,ce,null,l,be)}}for(var se in l){var ce=l[se];if(be=s[se],l.hasOwnProperty(se)&&(ce!=null||be!=null))switch(se){case"type":h=ce;break;case"name":f=ce;break;case"checked":te=ce;break;case"defaultChecked":me=ce;break;case"value":b=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(a(137,i));break;default:ce!==be&&Yt(t,i,se,ce,l,be)}}ua(t,b,R,F,te,me,h,f);return;case"select":ce=b=R=se=null;for(h in s)if(F=s[h],s.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ce=F;default:l.hasOwnProperty(h)||Yt(t,i,h,null,l,F)}for(f in l)if(h=l[f],F=s[f],l.hasOwnProperty(f)&&(h!=null||F!=null))switch(f){case"value":se=h;break;case"defaultValue":R=h;break;case"multiple":b=h;default:h!==F&&Yt(t,i,f,h,l,F)}i=R,s=b,l=ce,se!=null?wn(t,!!s,se,!1):!!l!=!!s&&(i!=null?wn(t,!!s,i,!0):wn(t,!!s,s?[]:"",!1));return;case"textarea":ce=se=null;for(R in s)if(f=s[R],s.hasOwnProperty(R)&&f!=null&&!l.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Yt(t,i,R,null,l,f)}for(b in l)if(f=l[b],h=s[b],l.hasOwnProperty(b)&&(f!=null||h!=null))switch(b){case"value":se=f;break;case"defaultValue":ce=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==h&&Yt(t,i,b,f,l,h)}zn(t,se,ce);return;case"option":for(var Ze in s)if(se=s[Ze],s.hasOwnProperty(Ze)&&se!=null&&!l.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Yt(t,i,Ze,null,l,se)}for(F in l)if(se=l[F],ce=s[F],l.hasOwnProperty(F)&&se!==ce&&(se!=null||ce!=null))switch(F){case"selected":t.selected=se&&typeof se!="function"&&typeof se!="symbol";break;default:Yt(t,i,F,se,l,ce)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in s)se=s[rt],s.hasOwnProperty(rt)&&se!=null&&!l.hasOwnProperty(rt)&&Yt(t,i,rt,null,l,se);for(te in l)if(se=l[te],ce=s[te],l.hasOwnProperty(te)&&se!==ce&&(se!=null||ce!=null))switch(te){case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(a(137,i));break;default:Yt(t,i,te,se,l,ce)}return;default:if(xf(i)){for(var $t in s)se=s[$t],s.hasOwnProperty($t)&&se!==void 0&&!l.hasOwnProperty($t)&&ah(t,i,$t,void 0,l,se);for(me in l)se=l[me],ce=s[me],!l.hasOwnProperty(me)||se===ce||se===void 0&&ce===void 0||ah(t,i,me,se,l,ce);return}}for(var $ in s)se=s[$],s.hasOwnProperty($)&&se!=null&&!l.hasOwnProperty($)&&Yt(t,i,$,null,l,se);for(be in l)se=l[be],ce=s[be],!l.hasOwnProperty(be)||se===ce||se==null&&ce==null||Yt(t,i,be,se,l,ce)}function Q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function wb(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],h=f.transferSize,b=f.initiatorType,R=f.duration;if(h&&R&&Q_(b)){for(b=0,R=f.responseEnd,l+=1;l<s.length;l++){var F=s[l],te=F.startTime;if(te>R)break;var me=F.transferSize,be=F.initiatorType;me&&Q_(be)&&(F=F.responseEnd,b+=me*(F<R?1:(R-te)/(F-te)))}if(--l,i+=8*(h+b)/(f.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,rh=null;function tu(t){return t.nodeType===9?t:t.ownerDocument}function J_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ex(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function oh(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var lh=null;function Cb(){var t=window.event;return t&&t.type==="popstate"?t===lh?!1:(lh=t,!0):(lh=null,!1)}var tx=typeof setTimeout=="function"?setTimeout:void 0,Db=typeof clearTimeout=="function"?clearTimeout:void 0,nx=typeof Promise=="function"?Promise:void 0,Ob=typeof queueMicrotask=="function"?queueMicrotask:typeof nx<"u"?function(t){return nx.resolve(null).then(t).catch(Ub)}:tx;function Ub(t){setTimeout(function(){throw t})}function us(t){return t==="head"}function ix(t,i){var s=i,l=0;do{var f=s.nextSibling;if(t.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){t.removeChild(f),qr(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")hl(t.ownerDocument.documentElement);else if(s==="head"){s=t.ownerDocument.head,hl(s);for(var h=s.firstChild;h;){var b=h.nextSibling,R=h.nodeName;h[Ye]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||s.removeChild(h),h=b}}else s==="body"&&hl(t.ownerDocument.body);s=f}while(s);qr(i)}function ax(t,i){var s=t;t=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(t===0)break;t--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||t++;s=l}while(s)}function ch(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ch(s),ct(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function Lb(t,i,s,l){for(;t.nodeType===1;){var f=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[Ye])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==f.rel||t.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||t.getAttribute("title")!==(f.title==null?null:f.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(f.src==null?null:f.src)||t.getAttribute("type")!==(f.type==null?null:f.type)||t.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var h=f.name==null?null:""+f.name;if(f.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Ni(t.nextSibling),t===null)break}return null}function Nb(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=Ni(t.nextSibling),t===null))return null;return t}function sx(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Ni(t.nextSibling),t===null))return null;return t}function uh(t){return t.data==="$?"||t.data==="$~"}function fh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Pb(t,i){var s=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function Ni(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var dh=null;function rx(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"||s==="/&"){if(i===0)return Ni(t.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}t=t.nextSibling}return null}function ox(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return t;i--}else s!=="/$"&&s!=="/&"||i++}t=t.previousSibling}return null}function lx(t,i,s){switch(i=tu(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function hl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ct(t)}var Pi=new Map,cx=new Set;function nu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var wa=q.d;q.d={f:zb,r:Ib,D:Fb,C:Bb,L:Hb,m:Gb,X:jb,S:Vb,M:kb};function zb(){var t=wa.f(),i=qc();return t||i}function Ib(t){var i=T(t);i!==null&&i.tag===5&&i.type==="form"?Ag(i):wa.r(t)}var kr=typeof document>"u"?null:document;function ux(t,i,s){var l=kr;if(l&&typeof i=="string"&&i){var f=Qt(i);f='link[rel="'+t+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),cx.has(f)||(cx.add(f),t={rel:t,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),qn(i,"link",t),W(i),l.head.appendChild(i)))}}function Fb(t){wa.D(t),ux("dns-prefetch",t,null)}function Bb(t,i){wa.C(t,i),ux("preconnect",t,i)}function Hb(t,i,s){wa.L(t,i,s);var l=kr;if(l&&t&&i){var f='link[rel="preload"][as="'+Qt(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+Qt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+Qt(s.imageSizes)+'"]')):f+='[href="'+Qt(t)+'"]';var h=f;switch(i){case"style":h=Xr(t);break;case"script":h=Wr(t)}Pi.has(h)||(t=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Pi.set(h,t),l.querySelector(f)!==null||i==="style"&&l.querySelector(pl(h))||i==="script"&&l.querySelector(ml(h))||(i=l.createElement("link"),qn(i,"link",t),W(i),l.head.appendChild(i)))}}function Gb(t,i){wa.m(t,i);var s=kr;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+Qt(l)+'"][href="'+Qt(t)+'"]',h=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wr(t)}if(!Pi.has(h)&&(t=_({rel:"modulepreload",href:t},i),Pi.set(h,t),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ml(h)))return}l=s.createElement("link"),qn(l,"link",t),W(l),s.head.appendChild(l)}}}function Vb(t,i,s){wa.S(t,i,s);var l=kr;if(l&&t){var f=Z(l).hoistableStyles,h=Xr(t);i=i||"default";var b=f.get(h);if(!b){var R={loading:0,preload:null};if(b=l.querySelector(pl(h)))R.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Pi.get(h))&&hh(t,s);var F=b=l.createElement("link");W(F),qn(F,"link",t),F._p=new Promise(function(te,me){F.onload=te,F.onerror=me}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,iu(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:R},f.set(h,b)}}}function jb(t,i){wa.X(t,i);var s=kr;if(s&&t){var l=Z(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0},i),(i=Pi.get(f))&&ph(t,i),h=s.createElement("script"),W(h),qn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function kb(t,i){wa.M(t,i);var s=kr;if(s&&t){var l=Z(s).hoistableScripts,f=Wr(t),h=l.get(f);h||(h=s.querySelector(ml(f)),h||(t=_({src:t,async:!0,type:"module"},i),(i=Pi.get(f))&&ph(t,i),h=s.createElement("script"),W(h),qn(h,"link",t),s.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},l.set(f,h))}}function fx(t,i,s,l){var f=(f=ae.current)?nu(f):null;if(!f)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Xr(s.href),s=Z(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=Xr(s.href);var h=Z(f).hoistableStyles,b=h.get(t);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,b),(h=f.querySelector(pl(t)))&&!h._p&&(b.instance=h,b.state.loading=5),Pi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Pi.set(t,s),h||Xb(f,t,s,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wr(s),s=Z(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function Xr(t){return'href="'+Qt(t)+'"'}function pl(t){return'link[rel="stylesheet"]['+t+"]"}function dx(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Xb(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qn(i,"link",s),W(i),t.head.appendChild(i))}function Wr(t){return'[src="'+Qt(t)+'"]'}function ml(t){return"script[async]"+t}function hx(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Qt(s.href)+'"]');if(l)return i.instance=l,W(l),l;var f=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),W(l),qn(l,"style",f),iu(l,s.precedence,t),i.instance=l;case"stylesheet":f=Xr(s.href);var h=t.querySelector(pl(f));if(h)return i.state.loading|=4,i.instance=h,W(h),h;l=dx(s),(f=Pi.get(f))&&hh(l,f),h=(t.ownerDocument||t).createElement("link"),W(h);var b=h;return b._p=new Promise(function(R,F){b.onload=R,b.onerror=F}),qn(h,"link",l),i.state.loading|=4,iu(h,s.precedence,t),i.instance=h;case"script":return h=Wr(s.src),(f=t.querySelector(ml(h)))?(i.instance=f,W(f),f):(l=s,(f=Pi.get(h))&&(l=_({},s),ph(l,f)),t=t.ownerDocument||t,f=t.createElement("script"),W(f),qn(f,"link",l),t.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,iu(l,s.precedence,t));return i.instance}function iu(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,h=f,b=0;b<l.length;b++){var R=l[b];if(R.dataset.precedence===i)h=R;else if(h!==f)break}h?h.parentNode.insertBefore(t,h.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function hh(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function ph(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var au=null;function px(t,i,s){if(au===null){var l=new Map,f=au=new Map;f.set(s,l)}else f=au,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),f=0;f<s.length;f++){var h=s[f];if(!(h[Ye]||h[cn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var b=h.getAttribute(i)||"";b=t+b;var R=l.get(b);R?R.push(h):l.set(b,[h])}}return l}function mx(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function Wb(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function gx(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function qb(t,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Xr(l.href),h=i.querySelector(pl(f));if(h){i=h._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=su.bind(t),i.then(t,t)),s.state.loading|=4,s.instance=h,W(h);return}h=i.ownerDocument||i,l=dx(l),(f=Pi.get(f))&&hh(l,f),h=h.createElement("link"),W(h);var b=h;b._p=new Promise(function(R,F){b.onload=R,b.onerror=F}),qn(h,"link",l),s.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(t.count++,s=su.bind(t),i.addEventListener("load",s),i.addEventListener("error",s))}}var mh=0;function Yb(t,i){return t.stylesheets&&t.count===0&&ou(t,t.stylesheets),0<t.count||0<t.imgCount?function(s){var l=setTimeout(function(){if(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+i);0<t.imgBytes&&mh===0&&(mh=62500*wb());var f=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ou(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>mh?50:800)+i);return t.unsuspend=s,function(){t.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function su(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ou(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ru=null;function ou(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ru=new Map,i.forEach($b,t),ru=null,su.call(t))}function $b(t,i){if(!(i.state.loading&4)){var s=ru.get(t);if(s)var l=s.get(null);else{s=new Map,ru.set(t,s);for(var f=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<f.length;h++){var b=f[h];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),h=s.get(b)||l,h===l&&s.set(null,f),s.set(b,f),this.count++,l=su.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),h?h.parentNode.insertBefore(f,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(f,t.firstChild)),i.state.loading|=4}}var gl={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Zb(t,i,s,l,f,h,b,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=h,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function _x(t,i,s,l,f,h,b,R,F,te,me,be){return t=new Zb(t,i,s,b,F,te,me,be,R),i=1,h===!0&&(i|=24),h=mi(3,null,null,i),t.current=h,h.stateNode=t,i=Yf(),i.refCount++,t.pooledCache=i,i.refCount++,h.memoizedState={element:l,isDehydrated:s,cache:i},Qf(h),t}function xx(t){return t?(t=Mr,t):Mr}function vx(t,i,s,l,f,h){f=xx(f),l.context===null?l.context=f:l.pendingContext=f,l=Ja(i),l.payload={element:s},h=h===void 0?null:h,h!==null&&(l.callback=h),s=es(t,l,i),s!==null&&(ri(s,t,i),Yo(s,t,i))}function bx(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function gh(t,i){bx(t,i),(t=t.alternate)&&bx(t,i)}function yx(t){if(t.tag===13||t.tag===31){var i=Ns(t,67108864);i!==null&&ri(i,t,67108864),gh(t,67108864)}}function Sx(t){if(t.tag===13||t.tag===31){var i=bi();i=hi(i);var s=Ns(t,i);s!==null&&ri(s,t,i),gh(t,i)}}var lu=!0;function Kb(t,i,s,l){var f=P.T;P.T=null;var h=q.p;try{q.p=2,_h(t,i,s,l)}finally{q.p=h,P.T=f}}function Qb(t,i,s,l){var f=P.T;P.T=null;var h=q.p;try{q.p=8,_h(t,i,s,l)}finally{q.p=h,P.T=f}}function _h(t,i,s,l){if(lu){var f=xh(l);if(f===null)ih(t,i,l,cu,s),Ex(t,l);else if(ey(f,t,i,s,l))l.stopPropagation();else if(Ex(t,l),i&4&&-1<Jb.indexOf(t)){for(;f!==null;){var h=T(f);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var b=Re(h.pendingLanes);if(b!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;b;){var F=1<<31-Ve(b);R.entanglements[1]|=F,b&=~F}ia(h),(Ht&6)===0&&(Xc=E()+500,ul(0))}}break;case 31:case 13:R=Ns(h,2),R!==null&&ri(R,h,2),qc(),gh(h,2)}if(h=xh(l),h===null&&ih(t,i,l,cu,s),h===f)break;f=h}f!==null&&l.stopPropagation()}else ih(t,i,l,null,s)}}function xh(t){return t=bf(t),vh(t)}var cu=null;function vh(t){if(cu=null,t=Ft(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===31){if(t=d(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return cu=t,null}function Mx(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case _e:return 2;case Ee:return 8;case de:case nt:return 32;case oe:return 268435456;default:return 32}default:return 32}}var bh=!1,fs=null,ds=null,hs=null,_l=new Map,xl=new Map,ps=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ex(t,i){switch(t){case"focusin":case"focusout":fs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xl.delete(i.pointerId)}}function vl(t,i,s,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=T(i),i!==null&&yx(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function ey(t,i,s,l,f){switch(i){case"focusin":return fs=vl(fs,t,i,s,l,f),!0;case"dragenter":return ds=vl(ds,t,i,s,l,f),!0;case"mouseover":return hs=vl(hs,t,i,s,l,f),!0;case"pointerover":var h=f.pointerId;return _l.set(h,vl(_l.get(h)||null,t,i,s,l,f)),!0;case"gotpointercapture":return h=f.pointerId,xl.set(h,vl(xl.get(h)||null,t,i,s,l,f)),!0}return!1}function Tx(t){var i=Ft(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,Ki(t.priority,function(){Sx(s)});return}}else if(i===31){if(i=d(s),i!==null){t.blockedOn=i,Ki(t.priority,function(){Sx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uu(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=xh(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);vf=l,s.target.dispatchEvent(l),vf=null}else return i=T(s),i!==null&&yx(i),t.blockedOn=s,!1;i.shift()}return!0}function Ax(t,i,s){uu(t)&&s.delete(i)}function ty(){bh=!1,fs!==null&&uu(fs)&&(fs=null),ds!==null&&uu(ds)&&(ds=null),hs!==null&&uu(hs)&&(hs=null),_l.forEach(Ax),xl.forEach(Ax)}function fu(t,i){t.blockedOn===i&&(t.blockedOn=null,bh||(bh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ty)))}var du=null;function Rx(t){du!==t&&(du=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===t&&(du=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],f=t[i+2];if(typeof l!="function"){if(vh(l||s)===null)continue;break}var h=T(s);h!==null&&(t.splice(i,3),i-=3,xd(h,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function qr(t){function i(F){return fu(F,t)}fs!==null&&fu(fs,t),ds!==null&&fu(ds,t),hs!==null&&fu(hs,t),_l.forEach(i),xl.forEach(i);for(var s=0;s<ps.length;s++){var l=ps[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<ps.length&&(s=ps[0],s.blockedOn===null);)Tx(s),s.blockedOn===null&&ps.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],h=s[l+1],b=f[un]||null;if(typeof h=="function")b||Rx(s);else if(b){var R=null;if(h&&h.hasAttribute("formAction")){if(f=h,b=h[un]||null)R=b.formAction;else if(vh(f)!==null)continue}else R=b.action;typeof R=="function"?s[l+1]=R:(s.splice(l,3),l-=3),Rx(s)}}}function wx(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function yh(t){this._internalRoot=t}hu.prototype.render=yh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=bi();vx(s,l,t,i,null,null)},hu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;vx(t.current,2,null,t,null,null),qc(),i[Ri]=null}};function hu(t){this._internalRoot=t}hu.prototype.unstable_scheduleHydration=function(t){if(t){var i=Wa();t={blockedOn:null,target:t,priority:i};for(var s=0;s<ps.length&&i!==0&&i<ps[s].priority;s++);ps.splice(s,0,t),s===0&&Tx(t)}};var Cx=e.version;if(Cx!=="19.2.1")throw Error(a(527,Cx,"19.2.1"));q.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=p(i),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var ny={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pu.isDisabled&&pu.supportsFiber)try{ye=pu.inject(ny),Ae=pu}catch{}}return Sl.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",f=zg,h=Ig,b=Fg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(h=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=_x(t,1,!1,null,null,s,l,null,f,h,b,wx),t[Ri]=i.current,nh(t),new yh(i)},Sl.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,f="",h=zg,b=Ig,R=Fg,F=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(h=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(R=s.onRecoverableError),s.formState!==void 0&&(F=s.formState)),i=_x(t,1,!0,i,s??null,l,f,F,h,b,R,wx),i.context=xx(null),s=i.current,l=bi(),l=hi(l),f=Ja(l),f.callback=null,es(s,f,l),s=l,i.current.lanes=s,Rn(i,s),ia(i),t[Ri]=i.current,nh(t),new hu(i)},Sl.version="19.2.1",Sl}var Jx;function Qy(){if(Jx)return Oh.exports;Jx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Oh.exports=Ky(),Oh.exports}var Jy=Qy();const eS=M2(Jy);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="181",tS=0,ev=1,nS=2,E2=1,iS=2,Pa=3,Cs=0,ci=1,za=2,Ba=0,uo=1,tv=2,nv=3,iv=4,aS=5,tr=100,sS=101,rS=102,oS=103,lS=104,cS=200,uS=201,fS=202,dS=203,E0=204,T0=205,hS=206,pS=207,mS=208,gS=209,_S=210,xS=211,vS=212,bS=213,yS=214,A0=0,R0=1,w0=2,vo=3,C0=4,D0=5,O0=6,U0=7,T2=0,SS=1,MS=2,As=0,ES=1,TS=2,AS=3,RS=4,wS=5,CS=6,DS=7,A2=300,bo=301,yo=302,L0=303,N0=304,pf=306,P0=1e3,Ei=1001,z0=1002,Ti=1003,OS=1004,mu=1005,Yn=1006,Ph=1007,ar=1008,Va=1009,R2=1010,w2=1011,Gl=1012,zp=1013,fr=1014,Ia=1015,Co=1016,Ip=1017,Fp=1018,Vl=1020,C2=35902,D2=35899,O2=1021,U2=1022,qi=1023,jl=1026,kl=1027,L2=1028,Bp=1029,Hp=1030,Gp=1031,Vp=1033,Fu=33776,Bu=33777,Hu=33778,Gu=33779,I0=35840,F0=35841,B0=35842,H0=35843,G0=36196,V0=37492,j0=37496,k0=37808,X0=37809,W0=37810,q0=37811,Y0=37812,$0=37813,Z0=37814,K0=37815,Q0=37816,J0=37817,ep=37818,tp=37819,np=37820,ip=37821,ap=36492,sp=36494,rp=36495,op=36283,lp=36284,cp=36285,up=36286,US=3200,LS=3201,NS=0,PS=1,Ms="",li="srgb",So="srgb-linear",Qu="linear",Zt="srgb",Yr=7680,av=519,zS=512,IS=513,FS=514,N2=515,BS=516,HS=517,GS=518,VS=519,sv=35044,rv="300 es",ra=2e3,Ju=2001;function P2(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Xl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jS(){const r=Xl("canvas");return r.style.display="block",r}const ov={};function lv(...r){const e="THREE."+r.shift();console.log(e,...r)}function ht(...r){const e="THREE."+r.shift();console.warn(e,...r)}function hn(...r){const e="THREE."+r.shift();console.error(e,...r)}function Wl(...r){const e=r.join(" ");e in ov||(ov[e]=!0,ht(...r))}function kS(r,e,n){return new Promise(function(a,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:a()}}setTimeout(c,n)})}class Do{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(n)===-1&&a[e].push(n)}hasEventListener(e,n){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(n)!==-1}removeEventListener(e,n){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const a=n[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const Zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zh=Math.PI/180,fp=180/Math.PI;function tc(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Zn[r&255]+Zn[r>>8&255]+Zn[r>>16&255]+Zn[r>>24&255]+"-"+Zn[e&255]+Zn[e>>8&255]+"-"+Zn[e>>16&15|64]+Zn[e>>24&255]+"-"+Zn[n&63|128]+Zn[n>>8&255]+"-"+Zn[n>>16&255]+Zn[n>>24&255]+Zn[a&255]+Zn[a>>8&255]+Zn[a>>16&255]+Zn[a>>24&255]).toLowerCase()}function Ot(r,e,n){return Math.max(e,Math.min(n,r))}function XS(r,e){return(r%e+e)%e}function Ih(r,e,n){return(1-n)*r+n*e}function Ml(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function oi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Wt{constructor(e=0,n=0){Wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,a=this.y,o=e.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y;return n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const a=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*a-u*o+e.x,this.y=c*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nc{constructor(e=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=a,this._w=o}static slerpFlat(e,n,a,o,c,u,d){let m=a[o+0],p=a[o+1],g=a[o+2],_=a[o+3],x=c[u+0],y=c[u+1],M=c[u+2],A=c[u+3];if(d<=0){e[n+0]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_;return}if(d>=1){e[n+0]=x,e[n+1]=y,e[n+2]=M,e[n+3]=A;return}if(_!==A||m!==x||p!==y||g!==M){let S=m*x+p*y+g*M+_*A;S<0&&(x=-x,y=-y,M=-M,A=-A,S=-S);let v=1-d;if(S<.9995){const L=Math.acos(S),U=Math.sin(L);v=Math.sin(v*L)/U,d=Math.sin(d*L)/U,m=m*v+x*d,p=p*v+y*d,g=g*v+M*d,_=_*v+A*d}else{m=m*v+x*d,p=p*v+y*d,g=g*v+M*d,_=_*v+A*d;const L=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=L,p*=L,g*=L,_*=L}}e[n]=m,e[n+1]=p,e[n+2]=g,e[n+3]=_}static multiplyQuaternionsFlat(e,n,a,o,c,u){const d=a[o],m=a[o+1],p=a[o+2],g=a[o+3],_=c[u],x=c[u+1],y=c[u+2],M=c[u+3];return e[n]=d*M+g*_+m*y-p*x,e[n+1]=m*M+g*x+p*_-d*y,e[n+2]=p*M+g*y+d*x-m*_,e[n+3]=g*M-d*_-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,a,o){return this._x=e,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const a=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),g=d(o/2),_=d(c/2),x=m(a/2),y=m(o/2),M=m(c/2);switch(u){case"XYZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"YXZ":this._x=x*g*_+p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"ZXY":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_-x*y*M;break;case"ZYX":this._x=x*g*_-p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_+x*y*M;break;case"YZX":this._x=x*g*_+p*y*M,this._y=p*y*_+x*g*M,this._z=p*g*M-x*y*_,this._w=p*g*_-x*y*M;break;case"XZY":this._x=x*g*_-p*y*M,this._y=p*y*_-x*g*M,this._z=p*g*M+x*y*_,this._w=p*g*_+x*y*M;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const a=n/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,a=n[0],o=n[4],c=n[8],u=n[1],d=n[5],m=n[9],p=n[2],g=n[6],_=n[10],x=a+d+_;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(u-o)*y}else if(a>d&&a>_){const y=2*Math.sqrt(1+a-d-_);this._w=(g-m)/y,this._x=.25*y,this._y=(o+u)/y,this._z=(c+p)/y}else if(d>_){const y=2*Math.sqrt(1+d-a-_);this._w=(c-p)/y,this._x=(o+u)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+_-a-d);this._w=(u-o)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let a=e.dot(n)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,n){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const a=e._x,o=e._y,c=e._z,u=e._w,d=n._x,m=n._y,p=n._z,g=n._w;return this._x=a*g+u*d+o*p-c*m,this._y=o*g+u*m+c*d-a*p,this._z=c*g+u*p+a*m-o*d,this._w=u*g-a*d-o*m-c*p,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let a=e._x,o=e._y,c=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,c=-c,u=-u,d=-d);let m=1-n;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);m=Math.sin(m*p)/g,n=Math.sin(n*p)/g,this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this._onChangeCallback()}else this._x=this._x*m+a*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+u*n,this.normalize();return this}slerpQuaternions(e,n,a){return this.copy(e).slerp(n,a)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class le{constructor(e=0,n=0,a=0){le.prototype.isVector3=!0,this.x=e,this.y=n,this.z=a}set(e,n,a){return a===void 0&&(a=this.z),this.x=e,this.y=n,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(cv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*a+c[6]*o,this.y=c[1]*n+c[4]*a+c[7]*o,this.z=c[2]*n+c[5]*a+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*a+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*a+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*a+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*a+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,a=this.y,o=this.z,c=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),g=2*(d*n-c*o),_=2*(c*a-u*n);return this.x=n+m*p+u*_-d*g,this.y=a+m*g+d*p-c*_,this.z=o+m*_+c*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,a=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*a+c[8]*o,this.y=c[1]*n+c[5]*a+c[9]*o,this.z=c[2]*n+c[6]*a+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const a=e.x,o=e.y,c=e.z,u=n.x,d=n.y,m=n.z;return this.x=o*m-c*d,this.y=c*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const a=e.dot(this)/n;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Fh.copy(this).projectOnVector(e),this.sub(Fh)}reflect(e){return this.sub(Fh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(e)/n;return Math.acos(Ot(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return n*n+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,a){const o=Math.sin(n)*e;return this.x=o*Math.sin(a),this.y=Math.cos(n)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,a){return this.x=e*Math.sin(n),this.y=a,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(e),this.y=n,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fh=new le,cv=new nc;class St{constructor(e,n,a,o,c,u,d,m,p){St.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p)}set(e,n,a,o,c,u,d,m,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=n,g[4]=c,g[5]=m,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(e,n,a){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],g=a[4],_=a[7],x=a[2],y=a[5],M=a[8],A=o[0],S=o[3],v=o[6],L=o[1],U=o[4],I=o[7],j=o[2],N=o[5],z=o[8];return c[0]=u*A+d*L+m*j,c[3]=u*S+d*U+m*N,c[6]=u*v+d*I+m*z,c[1]=p*A+g*L+_*j,c[4]=p*S+g*U+_*N,c[7]=p*v+g*I+_*z,c[2]=x*A+y*L+M*j,c[5]=x*S+y*U+M*N,c[8]=x*v+y*I+M*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8];return n*u*g-n*d*p-a*c*g+a*d*m+o*c*p-o*u*m}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=g*u-d*p,x=d*m-g*c,y=p*c-u*m,M=n*_+a*x+o*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(o*p-g*a)*A,e[2]=(d*a-o*u)*A,e[3]=x*A,e[4]=(g*n-o*m)*A,e[5]=(o*c-d*n)*A,e[6]=y*A,e[7]=(a*m-p*n)*A,e[8]=(u*n-a*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,a,o,c,u,d){const m=Math.cos(c),p=Math.sin(c);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Bh.makeScale(e,n)),this}rotate(e){return this.premultiply(Bh.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<9;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bh=new St,uv=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fv=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(o,c,u){return this.enabled===!1||c===u||!c||!u||(this.spaces[c].transfer===Zt&&(o.r=Ha(o.r),o.g=Ha(o.g),o.b=Ha(o.b)),this.spaces[c].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Zt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ms?Qu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,u){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return Wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return Wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[So]:{primaries:e,whitePoint:a,transfer:Qu,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:a,transfer:Zt,toXYZ:uv,fromXYZ:fv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),r}const It=WS();function Ha(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let $r;class qS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{$r===void 0&&($r=Xl("canvas")),$r.width=e.width,$r.height=e.height;const o=$r.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=$r}return a.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const a=n.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Ha(c[u]/255)*255;return a.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ha(n[a]/255)*255):n[a]=Ha(n[a]);return{data:n,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=tc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Hh(o[u].image)):c.push(Hh(o[u]))}else c=Hh(o);a.url=c}return n||(e.images[this.uuid]=a),a}}function Hh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?qS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let $S=0;const Gh=new le;class Hn extends Do{constructor(e=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,a=Ei,o=Ei,c=Yn,u=ar,d=qi,m=Va,p=Hn.DEFAULT_ANISOTROPY,g=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=tc(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gh).x}get height(){return this.source.getSize(Gh).y}get depth(){return this.source.getSize(Gh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const a=e[n];if(a===void 0){ht(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==A2)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case P0:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case z0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case P0:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case z0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=A2;Hn.DEFAULT_ANISOTROPY=1;class _n{constructor(e=0,n=0,a=0,o=1){_n.prototype.isVector4=!0,this.x=e,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,a,o){return this.x=e,this.y=n,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,a=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*a+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*a+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*a+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*a+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,a,o,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],y=m[5],M=m[9],A=m[2],S=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-A)<.01&&Math.abs(M-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+A)<.1&&Math.abs(M+S)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,I=(y+1)/2,j=(v+1)/2,N=(g+x)/4,z=(_+A)/4,Q=(M+S)/4;return U>I&&U>j?U<.01?(a=0,o=.707106781,c=.707106781):(a=Math.sqrt(U),o=N/a,c=z/a):I>j?I<.01?(a=.707106781,o=0,c=.707106781):(o=Math.sqrt(I),a=N/o,c=Q/o):j<.01?(a=.707106781,o=.707106781,c=0):(c=Math.sqrt(j),a=z/c,o=Q/c),this.set(a,o,c,n),this}let L=Math.sqrt((S-M)*(S-M)+(_-A)*(_-A)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(_-A)/L,this.z=(x-g)/L,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ot(this.x,e.x,n.x),this.y=Ot(this.y,e.y,n.y),this.z=Ot(this.z,e.z,n.z),this.w=Ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ot(this.x,e,n),this.y=Ot(this.y,e,n),this.z=Ot(this.z,e,n),this.w=Ot(this.w,e,n),this}clampLength(e,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Ot(a,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,a){return this.x=e.x+(n.x-e.x)*a,this.y=e.y+(n.y-e.y)*a,this.z=e.z+(n.z-e.z)*a,this.w=e.w+(n.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZS extends Do{constructor(e=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=a.depth,this.scissor=new _n(0,0,e,n),this.scissorTest=!1,this.viewport=new _n(0,0,e,n);const o={width:e,height:n,depth:a.depth},c=new Hn(o);this.textures=[];const u=a.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const n={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,a=1){if(this.width!==e||this.height!==n||this.depth!==a){this.width=e,this.height=n,this.depth=a;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new jp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class dr extends ZS{constructor(e=1,n=1,a={}){super(e,n,a),this.isWebGLRenderTarget=!0}}class z2 extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends Hn{constructor(e=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:a,depth:o},this.magFilter=Ti,this.minFilter=Ti,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=new le(1/0,1/0,1/0),n=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n+=3)this.expandByPoint(ji.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,a=e.count;n<a;n++)this.expandByPoint(ji.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,a=e.length;n<a;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const a=ji.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ji):ji.fromBufferAttribute(c,u),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gu.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),gu.copy(a.boundingBox)),gu.applyMatrix4(e.matrixWorld),this.union(gu)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,a;return e.normal.x>0?(n=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),n<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(El),_u.subVectors(this.max,El),Zr.subVectors(e.a,El),Kr.subVectors(e.b,El),Qr.subVectors(e.c,El),gs.subVectors(Kr,Zr),_s.subVectors(Qr,Kr),Ys.subVectors(Zr,Qr);let n=[0,-gs.z,gs.y,0,-_s.z,_s.y,0,-Ys.z,Ys.y,gs.z,0,-gs.x,_s.z,0,-_s.x,Ys.z,0,-Ys.x,-gs.y,gs.x,0,-_s.y,_s.x,0,-Ys.y,Ys.x,0];return!Vh(n,Zr,Kr,Qr,_u)||(n=[1,0,0,0,1,0,0,0,1],!Vh(n,Zr,Kr,Qr,_u))?!1:(xu.crossVectors(gs,_s),n=[xu.x,xu.y,xu.z],Vh(n,Zr,Kr,Qr,_u))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ca),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ca=[new le,new le,new le,new le,new le,new le,new le,new le],ji=new le,gu=new ic,Zr=new le,Kr=new le,Qr=new le,gs=new le,_s=new le,Ys=new le,El=new le,_u=new le,xu=new le,$s=new le;function Vh(r,e,n,a,o){for(let c=0,u=r.length-3;c<=u;c+=3){$s.fromArray(r,c);const d=o.x*Math.abs($s.x)+o.y*Math.abs($s.y)+o.z*Math.abs($s.z),m=e.dot($s),p=n.dot($s),g=a.dot($s);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const QS=new ic,Tl=new le,jh=new le;class mf{constructor(e=new le,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const a=this.center;n!==void 0?a.copy(n):QS.setFromPoints(e).getCenter(a);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const a=this.center.distanceToSquared(e);return n.copy(e),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tl.subVectors(e,this.center);const n=Tl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(Tl,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tl.copy(e.center).add(jh)),this.expandByPoint(Tl.copy(e.center).sub(jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Da=new le,kh=new le,vu=new le,xs=new le,Xh=new le,bu=new le,Wh=new le;class kp{constructor(e=new le,n=new le(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Da.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,n),Da.distanceToSquared(e))}distanceSqToSegment(e,n,a,o){kh.copy(e).add(n).multiplyScalar(.5),vu.copy(n).sub(e).normalize(),xs.copy(this.origin).sub(kh);const c=e.distanceTo(n)*.5,u=-this.direction.dot(vu),d=xs.dot(this.direction),m=-xs.dot(vu),p=xs.lengthSq(),g=Math.abs(1-u*u);let _,x,y,M;if(g>0)if(_=u*m-d,x=u*d-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const A=1/g;_*=A,x*=A,y=_*(_+u*x+2*d)+x*(u*_+x+2*m)+p}else x=c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-u*c+d)),x=_>0?-c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(_=Math.max(0,-(u*c+d)),x=_>0?c:Math.min(Math.max(-c,-m),c),y=-_*_+x*(x+2*m)+p);else x=u>0?-c:c,_=Math.max(0,-(u*x+d)),y=-_*_+x*(x+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(kh).addScaledVector(vu,x),y}intersectSphere(e,n){Da.subVectors(e.center,this.origin);const a=Da.dot(this.direction),o=Da.dot(Da)-a*a,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/n;return a>=0?a:null}intersectPlane(e,n){const a=this.distanceToPlane(e);return a===null?null:this.at(a,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let a,o,c,u,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(a=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(a=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),a>u||c>o||((c>a||isNaN(a))&&(a=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,n,a,o,c){Xh.subVectors(n,e),bu.subVectors(a,e),Wh.crossVectors(Xh,bu);let u=this.direction.dot(Wh),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xs.subVectors(this.origin,e);const m=d*this.direction.dot(bu.crossVectors(xs,bu));if(m<0)return null;const p=d*this.direction.dot(Xh.cross(xs));if(p<0||m+p>u)return null;const g=-d*xs.dot(Wh);return g<0?null:this.at(g/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,n,a,o,c,u,d,m,p,g,_,x,y,M,A,S){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,A,S)}set(e,n,a,o,c,u,d,m,p,g,_,x,y,M,A,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=a,v[12]=o,v[1]=c,v[5]=u,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=y,v[7]=M,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const n=this.elements,a=e.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(e){const n=this.elements,a=e.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,a){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,n,a){return this.set(e.x,n.x,a.x,0,e.y,n.y,a.y,0,e.z,n.z,a.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,a=e.elements,o=1/Jr.setFromMatrixColumn(e,0).length(),c=1/Jr.setFromMatrixColumn(e,1).length(),u=1/Jr.setFromMatrixColumn(e,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*c,n[5]=a[5]*c,n[6]=a[6]*c,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,a=e.x,o=e.y,c=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=u*g,y=u*_,M=d*g,A=d*_;n[0]=m*g,n[4]=-m*_,n[8]=p,n[1]=y+M*p,n[5]=x-A*p,n[9]=-d*m,n[2]=A-x*p,n[6]=M+y*p,n[10]=u*m}else if(e.order==="YXZ"){const x=m*g,y=m*_,M=p*g,A=p*_;n[0]=x+A*d,n[4]=M*d-y,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-d,n[2]=y*d-M,n[6]=A+x*d,n[10]=u*m}else if(e.order==="ZXY"){const x=m*g,y=m*_,M=p*g,A=p*_;n[0]=x-A*d,n[4]=-u*_,n[8]=M+y*d,n[1]=y+M*d,n[5]=u*g,n[9]=A-x*d,n[2]=-u*p,n[6]=d,n[10]=u*m}else if(e.order==="ZYX"){const x=u*g,y=u*_,M=d*g,A=d*_;n[0]=m*g,n[4]=M*p-y,n[8]=x*p+A,n[1]=m*_,n[5]=A*p+x,n[9]=y*p-M,n[2]=-p,n[6]=d*m,n[10]=u*m}else if(e.order==="YZX"){const x=u*m,y=u*p,M=d*m,A=d*p;n[0]=m*g,n[4]=A-x*_,n[8]=M*_+y,n[1]=_,n[5]=u*g,n[9]=-d*g,n[2]=-p*g,n[6]=y*_+M,n[10]=x-A*_}else if(e.order==="XZY"){const x=u*m,y=u*p,M=d*m,A=d*p;n[0]=m*g,n[4]=-_,n[8]=p*g,n[1]=x*_+A,n[5]=u*g,n[9]=y*_-M,n[2]=M*_-y,n[6]=d*g,n[10]=A*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,e3)}lookAt(e,n,a){const o=this.elements;return yi.subVectors(e,n),yi.lengthSq()===0&&(yi.z=1),yi.normalize(),vs.crossVectors(a,yi),vs.lengthSq()===0&&(Math.abs(a.z)===1?yi.x+=1e-4:yi.z+=1e-4,yi.normalize(),vs.crossVectors(a,yi)),vs.normalize(),yu.crossVectors(yi,vs),o[0]=vs.x,o[4]=yu.x,o[8]=yi.x,o[1]=vs.y,o[5]=yu.y,o[9]=yi.y,o[2]=vs.z,o[6]=yu.z,o[10]=yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const a=e.elements,o=n.elements,c=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],g=a[1],_=a[5],x=a[9],y=a[13],M=a[2],A=a[6],S=a[10],v=a[14],L=a[3],U=a[7],I=a[11],j=a[15],N=o[0],z=o[4],Q=o[8],C=o[12],w=o[1],G=o[5],ne=o[9],fe=o[13],ge=o[2],K=o[6],P=o[10],q=o[14],Y=o[3],he=o[7],pe=o[11],D=o[15];return c[0]=u*N+d*w+m*ge+p*Y,c[4]=u*z+d*G+m*K+p*he,c[8]=u*Q+d*ne+m*P+p*pe,c[12]=u*C+d*fe+m*q+p*D,c[1]=g*N+_*w+x*ge+y*Y,c[5]=g*z+_*G+x*K+y*he,c[9]=g*Q+_*ne+x*P+y*pe,c[13]=g*C+_*fe+x*q+y*D,c[2]=M*N+A*w+S*ge+v*Y,c[6]=M*z+A*G+S*K+v*he,c[10]=M*Q+A*ne+S*P+v*pe,c[14]=M*C+A*fe+S*q+v*D,c[3]=L*N+U*w+I*ge+j*Y,c[7]=L*z+U*G+I*K+j*he,c[11]=L*Q+U*ne+I*P+j*pe,c[15]=L*C+U*fe+I*q+j*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],a=e[4],o=e[8],c=e[12],u=e[1],d=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],y=e[14],M=e[3],A=e[7],S=e[11],v=e[15];return M*(+c*m*_-o*p*_-c*d*x+a*p*x+o*d*y-a*m*y)+A*(+n*m*y-n*p*x+c*u*x-o*u*y+o*p*g-c*m*g)+S*(+n*p*_-n*d*y-c*u*_+a*u*y+c*d*g-a*p*g)+v*(-o*d*g-n*m*_+n*d*x+o*u*_-a*u*x+a*m*g)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=a),this}invert(){const e=this.elements,n=e[0],a=e[1],o=e[2],c=e[3],u=e[4],d=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],y=e[11],M=e[12],A=e[13],S=e[14],v=e[15],L=_*S*p-A*x*p+A*m*y-d*S*y-_*m*v+d*x*v,U=M*x*p-g*S*p-M*m*y+u*S*y+g*m*v-u*x*v,I=g*A*p-M*_*p+M*d*y-u*A*y-g*d*v+u*_*v,j=M*_*m-g*A*m-M*d*x+u*A*x+g*d*S-u*_*S,N=n*L+a*U+o*I+c*j;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=L*z,e[1]=(A*x*c-_*S*c-A*o*y+a*S*y+_*o*v-a*x*v)*z,e[2]=(d*S*c-A*m*c+A*o*p-a*S*p-d*o*v+a*m*v)*z,e[3]=(_*m*c-d*x*c-_*o*p+a*x*p+d*o*y-a*m*y)*z,e[4]=U*z,e[5]=(g*S*c-M*x*c+M*o*y-n*S*y-g*o*v+n*x*v)*z,e[6]=(M*m*c-u*S*c-M*o*p+n*S*p+u*o*v-n*m*v)*z,e[7]=(u*x*c-g*m*c+g*o*p-n*x*p-u*o*y+n*m*y)*z,e[8]=I*z,e[9]=(M*_*c-g*A*c-M*a*y+n*A*y+g*a*v-n*_*v)*z,e[10]=(u*A*c-M*d*c+M*a*p-n*A*p-u*a*v+n*d*v)*z,e[11]=(g*d*c-u*_*c-g*a*p+n*_*p+u*a*y-n*d*y)*z,e[12]=j*z,e[13]=(g*A*o-M*_*o+M*a*x-n*A*x-g*a*S+n*_*S)*z,e[14]=(M*d*o-u*A*o-M*a*m+n*A*m+u*a*S-n*d*S)*z,e[15]=(u*_*o-g*d*o+g*a*m-n*_*m-u*a*x+n*d*x)*z,this}scale(e){const n=this.elements,a=e.x,o=e.y,c=e.z;return n[0]*=a,n[4]*=o,n[8]*=c,n[1]*=a,n[5]*=o,n[9]*=c,n[2]*=a,n[6]*=o,n[10]*=c,n[3]*=a,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(e,n,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),a=Math.sin(e);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const a=Math.cos(n),o=Math.sin(n),c=1-a,u=e.x,d=e.y,m=e.z,p=c*u,g=c*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,g*d+a,g*m-o*u,0,p*m-o*d,g*m+o*u,c*m*m+a,0,0,0,0,1),this}makeScale(e,n,a){return this.set(e,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,n,a,o,c,u){return this.set(1,a,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,a){const o=this.elements,c=n._x,u=n._y,d=n._z,m=n._w,p=c+c,g=u+u,_=d+d,x=c*p,y=c*g,M=c*_,A=u*g,S=u*_,v=d*_,L=m*p,U=m*g,I=m*_,j=a.x,N=a.y,z=a.z;return o[0]=(1-(A+v))*j,o[1]=(y+I)*j,o[2]=(M-U)*j,o[3]=0,o[4]=(y-I)*N,o[5]=(1-(x+v))*N,o[6]=(S+L)*N,o[7]=0,o[8]=(M+U)*z,o[9]=(S-L)*z,o[10]=(1-(x+A))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,a){const o=this.elements;let c=Jr.set(o[0],o[1],o[2]).length();const u=Jr.set(o[4],o[5],o[6]).length(),d=Jr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ki.copy(this);const p=1/c,g=1/u,_=1/d;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=g,ki.elements[5]*=g,ki.elements[6]*=g,ki.elements[8]*=_,ki.elements[9]*=_,ki.elements[10]*=_,n.setFromRotationMatrix(ki),a.x=c,a.y=u,a.z=d,this}makePerspective(e,n,a,o,c,u,d=ra,m=!1){const p=this.elements,g=2*c/(n-e),_=2*c/(a-o),x=(n+e)/(n-e),y=(a+o)/(a-o);let M,A;if(m)M=c/(u-c),A=u*c/(u-c);else if(d===ra)M=-(u+c)/(u-c),A=-2*u*c/(u-c);else if(d===Ju)M=-u/(u-c),A=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,a,o,c,u,d=ra,m=!1){const p=this.elements,g=2/(n-e),_=2/(a-o),x=-(n+e)/(n-e),y=-(a+o)/(a-o);let M,A;if(m)M=1/(u-c),A=u/(u-c);else if(d===ra)M=-2/(u-c),A=-(u+c)/(u-c);else if(d===Ju)M=-1/(u-c),A=-c/(u-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,a=e.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(e,n=0){for(let a=0;a<16;a++)this.elements[a]=e[a+n];return this}toArray(e=[],n=0){const a=this.elements;return e[n]=a[0],e[n+1]=a[1],e[n+2]=a[2],e[n+3]=a[3],e[n+4]=a[4],e[n+5]=a[5],e[n+6]=a[6],e[n+7]=a[7],e[n+8]=a[8],e[n+9]=a[9],e[n+10]=a[10],e[n+11]=a[11],e[n+12]=a[12],e[n+13]=a[13],e[n+14]=a[14],e[n+15]=a[15],e}}const Jr=new le,ki=new pn,JS=new le(0,0,0),e3=new le(1,1,1),vs=new le,yu=new le,yi=new le,dv=new pn,hv=new nc;class ja{constructor(e=0,n=0,a=0,o=ja.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,a,o=this._order){return this._x=e,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,a=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],m=o[1],p=o[5],g=o[9],_=o[2],x=o[6],y=o[10];switch(n){case"XYZ":this._y=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ot(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,a){return dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dv,n,a)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hv.setFromEuler(this),this.setFromQuaternion(hv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ja.DEFAULT_ORDER="XYZ";class Xp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let t3=0;const pv=new le,eo=new nc,Oa=new pn,Su=new le,Al=new le,n3=new le,i3=new nc,mv=new le(1,0,0),gv=new le(0,1,0),_v=new le(0,0,1),xv={type:"added"},a3={type:"removed"},to={type:"childadded",child:null},qh={type:"childremoved",child:null};class ui extends Do{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:t3++}),this.uuid=tc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ui.DEFAULT_UP.clone();const e=new le,n=new ja,a=new nc,o=new le(1,1,1);function c(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(c),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new pn},normalMatrix:{value:new St}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ui.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,n){return eo.setFromAxisAngle(e,n),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(mv,e)}rotateY(e){return this.rotateOnAxis(gv,e)}rotateZ(e){return this.rotateOnAxis(_v,e)}translateOnAxis(e,n){return pv.copy(e).applyQuaternion(this.quaternion),this.position.add(pv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mv,e)}translateY(e){return this.translateOnAxis(gv,e)}translateZ(e){return this.translateOnAxis(_v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oa.copy(this.matrixWorld).invert())}lookAt(e,n,a){e.isVector3?Su.copy(e):Su.set(e,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oa.lookAt(Al,Su,this.up):Oa.lookAt(Su,Al,this.up),this.quaternion.setFromRotationMatrix(Oa),o&&(Oa.extractRotation(o.matrixWorld),eo.setFromRotationMatrix(Oa),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(hn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),to.child=e,this.dispatchEvent(to),to.child=null):hn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(a3),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,a=[]){this[e]===n&&a.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,e,n3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,i3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(e)}updateWorldMatrix(e,n){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",a={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(c(e.animations,m))}}if(n){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),y=u(e.animations),M=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),x.length>0&&(a.skeletons=x),y.length>0&&(a.animations=y),M.length>0&&(a.nodes=M)}return a.object=o,a;function u(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}}ui.DEFAULT_UP=new le(0,1,0);ui.DEFAULT_MATRIX_AUTO_UPDATE=!0;ui.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new le,Ua=new le,Yh=new le,La=new le,no=new le,io=new le,vv=new le,$h=new le,Zh=new le,Kh=new le,Qh=new _n,Jh=new _n,e0=new _n;class Wi{constructor(e=new le,n=new le,a=new le){this.a=e,this.b=n,this.c=a}static getNormal(e,n,a,o){o.subVectors(a,n),Xi.subVectors(e,n),o.cross(Xi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,a,o,c){Xi.subVectors(o,n),Ua.subVectors(a,n),Yh.subVectors(e,n);const u=Xi.dot(Xi),d=Xi.dot(Ua),m=Xi.dot(Yh),p=Ua.dot(Ua),g=Ua.dot(Yh),_=u*p-d*d;if(_===0)return c.set(0,0,0),null;const x=1/_,y=(p*m-d*g)*x,M=(u*g-d*m)*x;return c.set(1-y-M,M,y)}static containsPoint(e,n,a,o){return this.getBarycoord(e,n,a,o,La)===null?!1:La.x>=0&&La.y>=0&&La.x+La.y<=1}static getInterpolation(e,n,a,o,c,u,d,m){return this.getBarycoord(e,n,a,o,La)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,La.x),m.addScaledVector(u,La.y),m.addScaledVector(d,La.z),m)}static getInterpolatedAttribute(e,n,a,o,c,u){return Qh.setScalar(0),Jh.setScalar(0),e0.setScalar(0),Qh.fromBufferAttribute(e,n),Jh.fromBufferAttribute(e,a),e0.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Qh,c.x),u.addScaledVector(Jh,c.y),u.addScaledVector(e0,c.z),u}static isFrontFacing(e,n,a,o){return Xi.subVectors(a,n),Ua.subVectors(e,n),Xi.cross(Ua).dot(o)<0}set(e,n,a){return this.a.copy(e),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(e,n,a,o){return this.a.copy(e[n]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,a,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Ua.subVectors(this.a,this.b),Xi.cross(Ua).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,a,o,c){return Wi.getInterpolation(e,this.a,this.b,this.c,n,a,o,c)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const a=this.a,o=this.b,c=this.c;let u,d;no.subVectors(o,a),io.subVectors(c,a),$h.subVectors(e,a);const m=no.dot($h),p=io.dot($h);if(m<=0&&p<=0)return n.copy(a);Zh.subVectors(e,o);const g=no.dot(Zh),_=io.dot(Zh);if(g>=0&&_<=g)return n.copy(o);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return u=m/(m-g),n.copy(a).addScaledVector(no,u);Kh.subVectors(e,c);const y=no.dot(Kh),M=io.dot(Kh);if(M>=0&&y<=M)return n.copy(c);const A=y*p-m*M;if(A<=0&&p>=0&&M<=0)return d=p/(p-M),n.copy(a).addScaledVector(io,d);const S=g*M-y*_;if(S<=0&&_-g>=0&&y-M>=0)return vv.subVectors(c,o),d=(_-g)/(_-g+(y-M)),n.copy(o).addScaledVector(vv,d);const v=1/(S+A+x);return u=A*v,d=x*v,n.copy(a).addScaledVector(no,u).addScaledVector(io,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Mu={h:0,s:0,l:0};function t0(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Gt{constructor(e,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,a)}set(e,n,a){if(n===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,n),this}setRGB(e,n,a,o=It.workingColorSpace){return this.r=e,this.g=n,this.b=a,It.colorSpaceToWorking(this,o),this}setHSL(e,n,a,o=It.workingColorSpace){if(e=XS(e,1),n=Ot(n,0,1),a=Ot(a,0,1),n===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+n):a+n-a*n,u=2*a-c;this.r=t0(u,c,e+1/3),this.g=t0(u,c,e),this.b=t0(u,c,e-1/3)}return It.colorSpaceToWorking(this,o),this}setStyle(e,n=li){function a(c){c!==void 0&&parseFloat(c)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:ht("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const a=I2[e.toLowerCase()];return a!==void 0?this.setHex(a,n):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ha(e.r),this.g=Ha(e.g),this.b=Ha(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return It.workingToColorSpace(Kn.copy(this),e),Math.round(Ot(Kn.r*255,0,255))*65536+Math.round(Ot(Kn.g*255,0,255))*256+Math.round(Ot(Kn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=It.workingColorSpace){It.workingToColorSpace(Kn.copy(this),n);const a=Kn.r,o=Kn.g,c=Kn.b,u=Math.max(a,o,c),d=Math.min(a,o,c);let m,p;const g=(d+u)/2;if(d===u)m=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case a:m=(o-c)/_+(o<c?6:0);break;case o:m=(c-a)/_+2;break;case c:m=(a-o)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,n=It.workingColorSpace){return It.workingToColorSpace(Kn.copy(this),n),e.r=Kn.r,e.g=Kn.g,e.b=Kn.b,e}getStyle(e=li){It.workingToColorSpace(Kn.copy(this),e);const n=Kn.r,a=Kn.g,o=Kn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,n,a){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+n,bs.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,a){return this.r=e.r+(n.r-e.r)*a,this.g=e.g+(n.g-e.g)*a,this.b=e.b+(n.b-e.b)*a,this}lerpHSL(e,n){this.getHSL(bs),e.getHSL(Mu);const a=Ih(bs.h,Mu.h,n),o=Ih(bs.s,Mu.s,n),c=Ih(bs.l,Mu.l,n);return this.setHSL(a,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,a=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*a+c[6]*o,this.g=c[1]*n+c[4]*a+c[7]*o,this.b=c[2]*n+c[5]*a+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kn=new Gt;Gt.NAMES=I2;let s3=0;class ac extends Do{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:s3++}),this.uuid=tc(),this.name="",this.type="Material",this.blending=uo,this.side=Cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=E0,this.blendDst=T0,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=av,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const a=e[n];if(a===void 0){ht(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ht(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(a.blending=this.blending),this.side!==Cs&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==E0&&(a.blendSrc=this.blendSrc),this.blendDst!==T0&&(a.blendDst=this.blendDst),this.blendEquation!==tr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==av&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(c){const u=[];for(const d in c){const m=c[d];delete m.metadata,u.push(m)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(a.textures=c),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let c=0;c!==o;++c)a[c]=n[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ja,this.combine=T2,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const An=new le,Eu=new Wt;let r3=0;class oa{constructor(e,n,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=a,this.usage=sv,this.updateRanges=[],this.gpuType=Ia,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,a){e*=this.itemSize,a*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Eu.fromBufferAttribute(this,n),Eu.applyMatrix3(e),this.setXY(n,Eu.x,Eu.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix3(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyMatrix4(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(e),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(e),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(e){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.transformDirection(e),this.setXYZ(n,An.x,An.y,An.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let a=this.array[e*this.itemSize+n];return this.normalized&&(a=Ml(a,this.array)),a}setComponent(e,n,a){return this.normalized&&(a=oi(a,this.array)),this.array[e*this.itemSize+n]=a,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ml(n,this.array)),n}setX(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ml(n,this.array)),n}setY(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ml(n,this.array)),n}setZ(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ml(n,this.array)),n}setW(e,n){return this.normalized&&(n=oi(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,a){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array)),this.array[e+0]=n,this.array[e+1]=a,this}setXYZ(e,n,a,o){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),o=oi(o,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,n,a,o,c){return e*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),o=oi(o,this.array),c=oi(c,this.array)),this.array[e+0]=n,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sv&&(e.usage=this.usage),e}}class F2 extends oa{constructor(e,n,a){super(new Uint16Array(e),n,a)}}class B2 extends oa{constructor(e,n,a){super(new Uint32Array(e),n,a)}}class Ga extends oa{constructor(e,n,a){super(new Float32Array(e),n,a)}}let o3=0;const zi=new pn,n0=new ui,ao=new le,Si=new ic,Rl=new ic,Fn=new le;class Zi extends Do{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=tc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P2(e)?B2:F2)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,a=0){this.groups.push({start:e,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new St().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,n,a){return zi.makeTranslation(e,n,a),this.applyMatrix4(zi),this}scale(e,n,a){return zi.makeScale(e,n,a),this.applyMatrix4(zi),this}lookAt(e){return n0.lookAt(e),n0.updateMatrix(),this.applyMatrix4(n0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ga(a,3))}else{const a=Math.min(e.length,n.count);for(let o=0;o<a;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ic);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){hn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const c=n[a];Si.setFromBufferAttribute(c),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&hn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){hn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];Rl.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Si.min,Rl.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,Rl.max),Si.expandByPoint(Fn)):(Si.expandByPoint(Rl.min),Si.expandByPoint(Rl.max))}Si.getCenter(a);let o=0;for(let c=0,u=e.count;c<u;c++)Fn.fromBufferAttribute(e,c),o=Math.max(o,a.distanceToSquared(Fn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Fn.fromBufferAttribute(d,p),m&&(ao.fromBufferAttribute(e,p),Fn.add(ao)),o=Math.max(o,a.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&hn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){hn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oa(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<a.count;Q++)d[Q]=new le,m[Q]=new le;const p=new le,g=new le,_=new le,x=new Wt,y=new Wt,M=new Wt,A=new le,S=new le;function v(Q,C,w){p.fromBufferAttribute(a,Q),g.fromBufferAttribute(a,C),_.fromBufferAttribute(a,w),x.fromBufferAttribute(c,Q),y.fromBufferAttribute(c,C),M.fromBufferAttribute(c,w),g.sub(p),_.sub(p),y.sub(x),M.sub(x);const G=1/(y.x*M.y-M.x*y.y);isFinite(G)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-y.y).multiplyScalar(G),S.copy(_).multiplyScalar(y.x).addScaledVector(g,-M.x).multiplyScalar(G),d[Q].add(A),d[C].add(A),d[w].add(A),m[Q].add(S),m[C].add(S),m[w].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Q=0,C=L.length;Q<C;++Q){const w=L[Q],G=w.start,ne=w.count;for(let fe=G,ge=G+ne;fe<ge;fe+=3)v(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const U=new le,I=new le,j=new le,N=new le;function z(Q){j.fromBufferAttribute(o,Q),N.copy(j);const C=d[Q];U.copy(C),U.sub(j.multiplyScalar(j.dot(C))).normalize(),I.crossVectors(N,C);const G=I.dot(m[Q])<0?-1:1;u.setXYZW(Q,U.x,U.y,U.z,G)}for(let Q=0,C=L.length;Q<C;++Q){const w=L[Q],G=w.start,ne=w.count;for(let fe=G,ge=G+ne;fe<ge;fe+=3)z(e.getX(fe+0)),z(e.getX(fe+1)),z(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new oa(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let x=0,y=a.count;x<y;x++)a.setXYZ(x,0,0,0);const o=new le,c=new le,u=new le,d=new le,m=new le,p=new le,g=new le,_=new le;if(e)for(let x=0,y=e.count;x<y;x+=3){const M=e.getX(x+0),A=e.getX(x+1),S=e.getX(x+2);o.fromBufferAttribute(n,M),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,S),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),d.fromBufferAttribute(a,M),m.fromBufferAttribute(a,A),p.fromBufferAttribute(a,S),d.add(g),m.add(g),p.add(g),a.setXYZ(M,d.x,d.y,d.z),a.setXYZ(A,m.x,m.y,m.z),a.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,y=n.count;x<y;x+=3)o.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),u.fromBufferAttribute(n,x+2),g.subVectors(u,c),_.subVectors(o,c),g.cross(_),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,a=e.count;n<a;n++)Fn.fromBufferAttribute(e,n),Fn.normalize(),e.setXYZ(n,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,m){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(m.length*g);let y=0,M=0;for(let A=0,S=m.length;A<S;A++){d.isInterleavedBufferAttribute?y=m[A]*d.data.stride+d.offset:y=m[A]*g;for(let v=0;v<g;v++)x[M++]=p[y++]}return new oa(x,g,_)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zi,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);n.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],y=e(x,a);m.push(y)}n.morphAttributes[d]=m}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const y=p[_];g.push(y.toJSON(e.data))}g.length>0&&(o[m]=g,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(n))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,y=_.length;x<y;x++)g.push(_[x].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bv=new pn,Zs=new kp,Tu=new mf,yv=new le,Au=new le,Ru=new le,wu=new le,i0=new le,Cu=new le,Sv=new le,Du=new le;class Mi extends ui{constructor(e=new Zi,n=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const a=this.geometry,o=a.attributes.position,c=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){Cu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(i0.fromBufferAttribute(_,e),u?Cu.addScaledVector(i0,g):Cu.addScaledVector(i0.sub(n),g))}n.add(Cu)}return n}raycast(e,n){const a=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Tu.copy(a.boundingSphere),Tu.applyMatrix4(c),Zs.copy(e.ray).recast(e.near),!(Tu.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(Tu,yv)===null||Zs.origin.distanceToSquared(yv)>(e.far-e.near)**2))&&(bv.copy(c).invert(),Zs.copy(e.ray).applyMatrix4(bv),!(a.boundingBox!==null&&Zs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,n,Zs)))}_computeIntersections(e,n,a){let o;const c=this.geometry,u=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=L,j=U;I<j;I+=3){const N=d.getX(I),z=d.getX(I+1),Q=d.getX(I+2);o=Ou(this,v,e,a,p,g,_,N,z,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=d.getX(S),U=d.getX(S+1),I=d.getX(S+2);o=Ou(this,u,e,a,p,g,_,L,U,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let M=0,A=x.length;M<A;M++){const S=x[M],v=u[S.materialIndex],L=Math.max(S.start,y.start),U=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let I=L,j=U;I<j;I+=3){const N=I,z=I+1,Q=I+2;o=Ou(this,v,e,a,p,g,_,N,z,Q),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const M=Math.max(0,y.start),A=Math.min(m.count,y.start+y.count);for(let S=M,v=A;S<v;S+=3){const L=S,U=S+1,I=S+2;o=Ou(this,u,e,a,p,g,_,L,U,I),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function l3(r,e,n,a,o,c,u,d){let m;if(e.side===ci?m=a.intersectTriangle(u,c,o,!0,d):m=a.intersectTriangle(o,c,u,e.side===Cs,d),m===null)return null;Du.copy(d),Du.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Du);return p<n.near||p>n.far?null:{distance:p,point:Du.clone(),object:r}}function Ou(r,e,n,a,o,c,u,d,m,p){r.getVertexPosition(d,Au),r.getVertexPosition(m,Ru),r.getVertexPosition(p,wu);const g=l3(r,e,n,a,Au,Ru,wu,Sv);if(g){const _=new le;Wi.getBarycoord(Sv,Au,Ru,wu,_),o&&(g.uv=Wi.getInterpolatedAttribute(o,d,m,p,_,new Wt)),c&&(g.uv1=Wi.getInterpolatedAttribute(c,d,m,p,_,new Wt)),u&&(g.normal=Wi.getInterpolatedAttribute(u,d,m,p,_,new le),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new le,materialIndex:0};Wi.getNormal(Au,Ru,wu,x.normal),g.face=x,g.barycoord=_}return g}class sc extends Zi{constructor(e=1,n=1,a=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:a,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const m=[],p=[],g=[],_=[];let x=0,y=0;M("z","y","x",-1,-1,a,n,e,u,c,0),M("z","y","x",1,-1,a,n,-e,u,c,1),M("x","z","y",1,1,e,a,n,o,u,2),M("x","z","y",1,-1,e,a,-n,o,u,3),M("x","y","z",1,-1,e,n,a,o,c,4),M("x","y","z",-1,-1,e,n,-a,o,c,5),this.setIndex(m),this.setAttribute("position",new Ga(p,3)),this.setAttribute("normal",new Ga(g,3)),this.setAttribute("uv",new Ga(_,2));function M(A,S,v,L,U,I,j,N,z,Q,C){const w=I/z,G=j/Q,ne=I/2,fe=j/2,ge=N/2,K=z+1,P=Q+1;let q=0,Y=0;const he=new le;for(let pe=0;pe<P;pe++){const D=pe*G-fe;for(let ie=0;ie<K;ie++){const Se=ie*w-ne;he[A]=Se*L,he[S]=D*U,he[v]=ge,p.push(he.x,he.y,he.z),he[A]=0,he[S]=0,he[v]=N>0?1:-1,g.push(he.x,he.y,he.z),_.push(ie/z),_.push(1-pe/Q),q+=1}}for(let pe=0;pe<Q;pe++)for(let D=0;D<z;D++){const ie=x+D+K*pe,Se=x+D+K*(pe+1),Te=x+(D+1)+K*(pe+1),Le=x+(D+1)+K*pe;m.push(ie,Se,Le),m.push(Se,Te,Le),Y+=6}d.addGroup(y,Y,C),y+=Y,x+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mo(r){const e={};for(const n in r){e[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][a]=null):e[n][a]=o.clone():Array.isArray(o)?e[n][a]=o.slice():e[n][a]=o}}return e}function Jn(r){const e={};for(let n=0;n<r.length;n++){const a=Mo(r[n]);for(const o in a)e[o]=a[o]}return e}function c3(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function H2(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const u3={clone:Mo,merge:Jn};var f3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ka extends ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f3,this.fragmentShader=d3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mo(e.uniforms),this.uniformsGroups=c3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class G2 extends ui{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ys=new le,Mv=new Wt,Ev=new Wt;class Ii extends G2{constructor(e=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fp*2*Math.atan(Math.tan(zh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,a){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ys.x,ys.y).multiplyScalar(-e/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ys.x,ys.y).multiplyScalar(-e/ys.z)}getViewSize(e,n){return this.getViewBounds(e,Mv,Ev),n.subVectors(Ev,Mv)}setViewOffset(e,n,a,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zh*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;c+=u.offsetX*o/m,n-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const so=-90,ro=1;class h3 extends ui{constructor(e,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ii(so,ro,e,n);o.layers=this.layers,this.add(o);const c=new Ii(so,ro,e,n);c.layers=this.layers,this.add(c);const u=new Ii(so,ro,e,n);u.layers=this.layers,this.add(u);const d=new Ii(so,ro,e,n);d.layers=this.layers,this.add(d);const m=new Ii(so,ro,e,n);m.layers=this.layers,this.add(m);const p=new Ii(so,ro,e,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[a,o,c,u,d,m]=n;for(const p of n)this.remove(p);if(e===ra)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ju)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of n)this.add(p),p.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,o),e.render(n,c),e.setRenderTarget(a,1,o),e.render(n,u),e.setRenderTarget(a,2,o),e.render(n,d),e.setRenderTarget(a,3,o),e.render(n,m),e.setRenderTarget(a,4,o),e.render(n,p),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,o),e.render(n,g),e.setRenderTarget(_,x,y),e.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class V2 extends Hn{constructor(e=[],n=bo,a,o,c,u,d,m,p,g){super(e,n,a,o,c,u,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p3 extends dr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new V2(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new sc(5,5,5),c=new ka({name:"CubemapFromEquirect",uniforms:Mo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ci,blending:Ba});c.uniforms.tEquirect.value=n;const u=new Mi(o,c),d=n.minFilter;return n.minFilter===ar&&(n.minFilter=Yn),new h3(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,a=!0,o=!0){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,a,o);e.setRenderTarget(c)}}class sr extends ui{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m3={type:"move"};class a0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const a of e.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,a){let o=null,c=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=n.getJointPose(A,a),v=this._getHandJoint(p,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),y=.02,M=.005;p.inputState.pinching&&x>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,a),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,a),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(m3)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const a=new sr;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[n.jointName]=a,e.add(a)}return e.joints[n.jointName]}}class Wp{constructor(e,n=1,a=1e3){this.isFog=!0,this.name="",this.color=new Gt(e),this.near=n,this.far=a}clone(){return new Wp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class g3 extends ui{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ja,this.environmentIntensity=1,this.environmentRotation=new ja,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class _3 extends Hn{constructor(e=null,n=1,a=1,o,c,u,d,m,p=Ti,g=Ti,_,x){super(null,u,d,m,p,g,o,c,_,x),this.isDataTexture=!0,this.image={data:e,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const s0=new le,x3=new le,v3=new St;class er{constructor(e=new le(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,a,o){return this.normal.set(e,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,a){const o=s0.subVectors(a,n).cross(x3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const a=e.delta(s0),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return n<0&&a>0||a<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const a=n||v3.getNormalMatrix(e),o=this.coplanarPoint(s0).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ks=new mf,b3=new Wt(.5,.5),Uu=new le;class qp{constructor(e=new er,n=new er,a=new er,o=new er,c=new er,u=new er){this.planes=[e,n,a,o,c,u]}set(e,n,a,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(a),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,n=ra,a=!1){const o=this.planes,c=e.elements,u=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],x=c[6],y=c[7],M=c[8],A=c[9],S=c[10],v=c[11],L=c[12],U=c[13],I=c[14],j=c[15];if(o[0].setComponents(p-u,y-g,v-M,j-L).normalize(),o[1].setComponents(p+u,y+g,v+M,j+L).normalize(),o[2].setComponents(p+d,y+_,v+A,j+U).normalize(),o[3].setComponents(p-d,y-_,v-A,j-U).normalize(),a)o[4].setComponents(m,x,S,I).normalize(),o[5].setComponents(p-m,y-x,v-S,j-I).normalize();else if(o[4].setComponents(p-m,y-x,v-S,j-I).normalize(),n===ra)o[5].setComponents(p+m,y+x,v+S,j+I).normalize();else if(n===Ju)o[5].setComponents(m,x,S,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){Ks.center.set(0,0,0);const n=b3.distanceTo(e.center);return Ks.radius=.7071067811865476+n,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){const n=this.planes,a=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(Uu.x=o.normal.x>0?e.max.x:e.min.x,Uu.y=o.normal.y>0?e.max.y:e.min.y,Uu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dp extends ac{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ef=new le,tf=new le,Tv=new pn,wl=new kp,Lu=new mf,r0=new le,Av=new le;class y3 extends ui{constructor(e=new Zi,n=new dp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[0];for(let o=1,c=n.count;o<c;o++)ef.fromBufferAttribute(n,o-1),tf.fromBufferAttribute(n,o),a[o]=a[o-1],a[o]+=ef.distanceTo(tf);e.setAttribute("lineDistance",new Ga(a,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const a=this.geometry,o=this.matrixWorld,c=e.params.Line.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Lu.copy(a.boundingSphere),Lu.applyMatrix4(o),Lu.radius+=c,e.ray.intersectsSphere(Lu)===!1)return;Tv.copy(o).invert(),wl.copy(e.ray).applyMatrix4(Tv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=a.index,x=a.attributes.position;if(g!==null){const y=Math.max(0,u.start),M=Math.min(g.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=p){const v=g.getX(A),L=g.getX(A+1),U=Nu(this,e,wl,m,v,L,A);U&&n.push(U)}if(this.isLineLoop){const A=g.getX(M-1),S=g.getX(y),v=Nu(this,e,wl,m,A,S,M-1);v&&n.push(v)}}else{const y=Math.max(0,u.start),M=Math.min(x.count,u.start+u.count);for(let A=y,S=M-1;A<S;A+=p){const v=Nu(this,e,wl,m,A,A+1,A);v&&n.push(v)}if(this.isLineLoop){const A=Nu(this,e,wl,m,M-1,y,M-1);A&&n.push(A)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Nu(r,e,n,a,o,c,u){const d=r.geometry.attributes.position;if(ef.fromBufferAttribute(d,o),tf.fromBufferAttribute(d,c),n.distanceSqToSegment(ef,tf,r0,Av)>a)return;r0.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(r0);if(!(p<e.near||p>e.far))return{distance:p,point:Av.clone().applyMatrix4(r.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:r}}const Rv=new le,wv=new le;class Cv extends y3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,a=[];for(let o=0,c=n.count;o<c;o+=2)Rv.fromBufferAttribute(n,o),wv.fromBufferAttribute(n,o+1),a[o]=o===0?0:a[o-1],a[o+1]=a[o]+Rv.distanceTo(wv);e.setAttribute("lineDistance",new Ga(a,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class S3 extends Hn{constructor(e,n,a,o,c=Yn,u=Yn,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const g=this;function _(){g.needsUpdate=!0,g._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(_))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class M3 extends Hn{constructor(e,n,a,o,c,u,d,m,p){super(e,n,a,o,c,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class j2 extends Hn{constructor(e,n,a=fr,o,c,u,d=Ti,m=Ti,p,g=jl,_=1){if(g!==jl&&g!==kl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:n,depth:_};super(x,o,c,u,d,m,g,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class k2 extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class aa extends Zi{constructor(e=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:a,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(a),m=Math.floor(o),p=d+1,g=m+1,_=e/d,x=n/m,y=[],M=[],A=[],S=[];for(let v=0;v<g;v++){const L=v*x-u;for(let U=0;U<p;U++){const I=U*_-c;M.push(I,-L,0),A.push(0,0,1),S.push(U/d),S.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<d;L++){const U=L+p*v,I=L+p*(v+1),j=L+1+p*(v+1),N=L+1+p*v;y.push(U,I,N),y.push(I,j,N)}this.setIndex(y),this.setAttribute("position",new Ga(M,3)),this.setAttribute("normal",new Ga(A,3)),this.setAttribute("uv",new Ga(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class E3 extends ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class T3 extends ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const o0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class A3{constructor(e,n,a){const o=this;let c=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(g){d++,c===!1&&o.onStart!==void 0&&o.onStart(g,u,d),c=!0},this.itemEnd=function(g){u++,o.onProgress!==void 0&&o.onProgress(g,u,d),u===d&&(c=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(g){o.onError!==void 0&&o.onError(g)},this.resolveURL=function(g){return m?m(g):g},this.setURLModifier=function(g){return m=g,this},this.addHandler=function(g,_){return p.push(g,_),this},this.removeHandler=function(g){const _=p.indexOf(g);return _!==-1&&p.splice(_,2),this},this.getHandler=function(g){for(let _=0,x=p.length;_<x;_+=2){const y=p[_],M=p[_+1];if(y.global&&(y.lastIndex=0),y.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const R3=new A3;class Yp{constructor(e){this.manager=e!==void 0?e:R3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const a=this;return new Promise(function(o,c){a.load(e,o,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yp.DEFAULT_MATERIAL_NAME="__DEFAULT";const oo=new WeakMap;class w3 extends Yp{constructor(e){super(e)}load(e,n,a,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,u=o0.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)c.manager.itemStart(e),setTimeout(function(){n&&n(u),c.manager.itemEnd(e)},0);else{let _=oo.get(u);_===void 0&&(_=[],oo.set(u,_)),_.push({onLoad:n,onError:o})}return u}const d=Xl("img");function m(){g(),n&&n(this);const _=oo.get(this)||[];for(let x=0;x<_.length;x++){const y=_[x];y.onLoad&&y.onLoad(this)}oo.delete(this),c.manager.itemEnd(e)}function p(_){g(),o&&o(_),o0.remove(`image:${e}`);const x=oo.get(this)||[];for(let y=0;y<x.length;y++){const M=x[y];M.onError&&M.onError(_)}oo.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function g(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),o0.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class C3 extends Yp{constructor(e){super(e)}load(e,n,a,o){const c=new Hn,u=new w3(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){c.image=d,c.needsUpdate=!0,n!==void 0&&n(c)},a,o),c}}class D3 extends G2{constructor(e=-1,n=1,a=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=a,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,a,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=a-e,u=a+e,d=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,u=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class O3 extends Ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Dv=new pn;class U3{constructor(e,n,a=0,o=1/0){this.ray=new kp(e,n),this.near=a,this.far=o,this.camera=null,this.layers=new Xp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):hn("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Dv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dv),this}intersectObject(e,n=!0,a=[]){return hp(e,this,a,n),a.sort(Ov),a}intersectObjects(e,n=!0,a=[]){for(let o=0,c=e.length;o<c;o++)hp(e[o],this,a,n);return a.sort(Ov),a}}function Ov(r,e){return r.distance-e.distance}function hp(r,e,n,a){let o=!0;if(r.layers.test(e.layers)&&r.raycast(e,n)===!1&&(o=!1),o===!0&&a===!0){const c=r.children;for(let u=0,d=c.length;u<d;u++)hp(c[u],e,n,!0)}}function Uv(r,e,n,a){const o=L3(a);switch(n){case O2:return r*e;case L2:return r*e/o.components*o.byteLength;case Bp:return r*e/o.components*o.byteLength;case Hp:return r*e*2/o.components*o.byteLength;case Gp:return r*e*2/o.components*o.byteLength;case U2:return r*e*3/o.components*o.byteLength;case qi:return r*e*4/o.components*o.byteLength;case Vp:return r*e*4/o.components*o.byteLength;case Fu:case Bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Hu:case Gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case F0:case H0:return Math.max(r,16)*Math.max(e,8)/4;case I0:case B0:return Math.max(r,8)*Math.max(e,8)/2;case G0:case V0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case j0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case k0:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case X0:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case W0:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case q0:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Y0:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case $0:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Z0:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case K0:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Q0:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case J0:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ep:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case tp:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case np:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ip:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case ap:case sp:case rp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case op:case lp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case cp:case up:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function L3(r){switch(r){case Va:case R2:return{byteLength:1,components:1};case Gl:case w2:case Co:return{byteLength:2,components:1};case Ip:case Fp:return{byteLength:2,components:4};case fr:case zp:case Ia:return{byteLength:4,components:1};case C2:case D2:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function X2(){let r=null,e=!1,n=null,a=null;function o(c,u){n(c,u),a=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(a=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function N3(r){const e=new WeakMap;function n(d,m){const p=d.array,g=d.usage,_=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,g),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function a(d,m,p){const g=m.array,_=m.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((y,M)=>y.start-M.start);let x=0;for(let y=1;y<_.length;y++){const M=_[x],A=_[y];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++x,_[x]=A)}_.length=x+1;for(let y=0,M=_.length;y<M;y++){const A=_[y];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,n(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:c,update:u}}var P3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z3=`#ifdef USE_ALPHAHASH
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
#endif`,I3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,F3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G3=`#ifdef USE_AOMAP
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
#endif`,V3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j3=`#ifdef USE_BATCHING
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
#endif`,k3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,X3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,W3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,q3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y3=`#ifdef USE_IRIDESCENCE
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
#endif`,$3=`#ifdef USE_BUMPMAP
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
#endif`,Z3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,K3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Q3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,aM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rM=`vec3 transformedNormal = objectNormal;
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
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
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
#endif`,gM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_M=`#ifdef USE_ENVMAP
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
#endif`,xM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
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
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AM=`uniform bool receiveShadow;
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
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
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
#endif`,LM=`uniform sampler2D dfgLUT;
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
}`,NM=`
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
#endif`,PM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kM=`#if defined( USE_POINTS_UV )
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
#endif`,XM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`#ifdef USE_MORPHTARGETS
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
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,JM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,jE=`#define DISTANCE
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
}`,kE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,YE=`#include <common>
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
}`,$E=`uniform vec3 diffuse;
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
}`,ZE=`#define LAMBERT
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
}`,KE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,JE=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,tT=`#define NORMAL
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
}`,nT=`#define PHONG
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
}`,iT=`#define PHONG
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
}`,aT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
}`,rT=`#define TOON
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
}`,oT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,cT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,fT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,hT=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:P3,alphahash_pars_fragment:z3,alphamap_fragment:I3,alphamap_pars_fragment:F3,alphatest_fragment:B3,alphatest_pars_fragment:H3,aomap_fragment:G3,aomap_pars_fragment:V3,batching_pars_vertex:j3,batching_vertex:k3,begin_vertex:X3,beginnormal_vertex:W3,bsdfs:q3,iridescence_fragment:Y3,bumpmap_pars_fragment:$3,clipping_planes_fragment:Z3,clipping_planes_pars_fragment:K3,clipping_planes_pars_vertex:Q3,clipping_planes_vertex:J3,color_fragment:eM,color_pars_fragment:tM,color_pars_vertex:nM,color_vertex:iM,common:aM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:rM,displacementmap_pars_vertex:oM,displacementmap_vertex:lM,emissivemap_fragment:cM,emissivemap_pars_fragment:uM,colorspace_fragment:fM,colorspace_pars_fragment:dM,envmap_fragment:hM,envmap_common_pars_fragment:pM,envmap_pars_fragment:mM,envmap_pars_vertex:gM,envmap_physical_pars_fragment:RM,envmap_vertex:_M,fog_vertex:xM,fog_pars_vertex:vM,fog_fragment:bM,fog_pars_fragment:yM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:TM,lights_pars_begin:AM,lights_toon_fragment:wM,lights_toon_pars_fragment:CM,lights_phong_fragment:DM,lights_phong_pars_fragment:OM,lights_physical_fragment:UM,lights_physical_pars_fragment:LM,lights_fragment_begin:NM,lights_fragment_maps:PM,lights_fragment_end:zM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:BM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:jM,map_particle_pars_fragment:kM,metalnessmap_fragment:XM,metalnessmap_pars_fragment:WM,morphinstance_vertex:qM,morphcolor_vertex:YM,morphnormal_vertex:$M,morphtarget_pars_vertex:ZM,morphtarget_vertex:KM,normal_fragment_begin:QM,normal_fragment_maps:JM,normal_pars_fragment:eE,normal_pars_vertex:tE,normal_vertex:nE,normalmap_pars_fragment:iE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:oE,opaque_fragment:lE,packing:cE,premultiplied_alpha_fragment:uE,project_vertex:fE,dithering_fragment:dE,dithering_pars_fragment:hE,roughnessmap_fragment:pE,roughnessmap_pars_fragment:mE,shadowmap_pars_fragment:gE,shadowmap_pars_vertex:_E,shadowmap_vertex:xE,shadowmask_pars_fragment:vE,skinbase_vertex:bE,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:AE,tonemapping_pars_fragment:RE,transmission_fragment:wE,transmission_pars_fragment:CE,uv_pars_fragment:DE,uv_pars_vertex:OE,uv_vertex:UE,worldpos_vertex:LE,background_vert:NE,background_frag:PE,backgroundCube_vert:zE,backgroundCube_frag:IE,cube_vert:FE,cube_frag:BE,depth_vert:HE,depth_frag:GE,distanceRGBA_vert:VE,distanceRGBA_frag:jE,equirect_vert:kE,equirect_frag:XE,linedashed_vert:WE,linedashed_frag:qE,meshbasic_vert:YE,meshbasic_frag:$E,meshlambert_vert:ZE,meshlambert_frag:KE,meshmatcap_vert:QE,meshmatcap_frag:JE,meshnormal_vert:eT,meshnormal_frag:tT,meshphong_vert:nT,meshphong_frag:iT,meshphysical_vert:aT,meshphysical_frag:sT,meshtoon_vert:rT,meshtoon_frag:oT,points_vert:lT,points_frag:cT,shadow_vert:uT,shadow_frag:fT,sprite_vert:dT,sprite_frag:hT},He={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},sa={basic:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Jn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Jn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Jn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Jn([He.points,He.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Jn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Jn([He.common,He.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Jn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Jn([He.sprite,He.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Jn([He.common,He.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Jn([He.lights,He.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};sa.physical={uniforms:Jn([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Pu={r:0,b:0,g:0},Qs=new ja,pT=new pn;function mT(r,e,n,a,o,c,u){const d=new Gt(0);let m=c===!0?0:1,p,g,_=null,x=0,y=null;function M(U){let I=U.isScene===!0?U.background:null;return I&&I.isTexture&&(I=(U.backgroundBlurriness>0?n:e).get(I)),I}function A(U){let I=!1;const j=M(U);j===null?v(d,m):j&&j.isColor&&(v(j,1),I=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?a.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(r.autoClear||I)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(U,I){const j=M(I);j&&(j.isCubeTexture||j.mapping===pf)?(g===void 0&&(g=new Mi(new sc(1,1,1),new ka({name:"BackgroundCubeMaterial",uniforms:Mo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(N,z,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),Qs.copy(I.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(pT.makeRotationFromEuler(Qs)),g.material.toneMapped=It.getTransfer(j.colorSpace)!==Zt,(_!==j||x!==j.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(p===void 0&&(p=new Mi(new aa(2,2),new ka({name:"BackgroundMaterial",uniforms:Mo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:Cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=j,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=It.getTransfer(j.colorSpace)!==Zt,j.matrixAutoUpdate===!0&&j.updateMatrix(),p.material.uniforms.uvTransform.value.copy(j.matrix),(_!==j||x!==j.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,_=j,x=j.version,y=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,I){U.getRGB(Pu,H2(r)),a.buffers.color.setClear(Pu.r,Pu.g,Pu.b,I,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(U,I=1){d.set(U),m=I,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(d,m)},render:A,addToRenderList:S,dispose:L}}function gT(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=x(null);let c=o,u=!1;function d(w,G,ne,fe,ge){let K=!1;const P=_(fe,ne,G);c!==P&&(c=P,p(c.object)),K=y(w,fe,ne,ge),K&&M(w,fe,ne,ge),ge!==null&&e.update(ge,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,I(w,G,ne,fe),ge!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ge).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function _(w,G,ne){const fe=ne.wireframe===!0;let ge=a[w.id];ge===void 0&&(ge={},a[w.id]=ge);let K=ge[G.id];K===void 0&&(K={},ge[G.id]=K);let P=K[fe];return P===void 0&&(P=x(m()),K[fe]=P),P}function x(w){const G=[],ne=[],fe=[];for(let ge=0;ge<n;ge++)G[ge]=0,ne[ge]=0,fe[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:fe,object:w,attributes:{},index:null}}function y(w,G,ne,fe){const ge=c.attributes,K=G.attributes;let P=0;const q=ne.getAttributes();for(const Y in q)if(q[Y].location>=0){const pe=ge[Y];let D=K[Y];if(D===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),pe===void 0||pe.attribute!==D||D&&pe.data!==D.data)return!0;P++}return c.attributesNum!==P||c.index!==fe}function M(w,G,ne,fe){const ge={},K=G.attributes;let P=0;const q=ne.getAttributes();for(const Y in q)if(q[Y].location>=0){let pe=K[Y];pe===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(pe=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(pe=w.instanceColor));const D={};D.attribute=pe,pe&&pe.data&&(D.data=pe.data),ge[Y]=D,P++}c.attributes=ge,c.attributesNum=P,c.index=fe}function A(){const w=c.newAttributes;for(let G=0,ne=w.length;G<ne;G++)w[G]=0}function S(w){v(w,0)}function v(w,G){const ne=c.newAttributes,fe=c.enabledAttributes,ge=c.attributeDivisors;ne[w]=1,fe[w]===0&&(r.enableVertexAttribArray(w),fe[w]=1),ge[w]!==G&&(r.vertexAttribDivisor(w,G),ge[w]=G)}function L(){const w=c.newAttributes,G=c.enabledAttributes;for(let ne=0,fe=G.length;ne<fe;ne++)G[ne]!==w[ne]&&(r.disableVertexAttribArray(ne),G[ne]=0)}function U(w,G,ne,fe,ge,K,P){P===!0?r.vertexAttribIPointer(w,G,ne,ge,K):r.vertexAttribPointer(w,G,ne,fe,ge,K)}function I(w,G,ne,fe){A();const ge=fe.attributes,K=ne.getAttributes(),P=G.defaultAttributeValues;for(const q in K){const Y=K[q];if(Y.location>=0){let he=ge[q];if(he===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(he=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(he=w.instanceColor)),he!==void 0){const pe=he.normalized,D=he.itemSize,ie=e.get(he);if(ie===void 0)continue;const Se=ie.buffer,Te=ie.type,Le=ie.bytesPerElement,ae=Te===r.INT||Te===r.UNSIGNED_INT||he.gpuType===zp;if(he.isInterleavedBufferAttribute){const ue=he.data,Ne=ue.stride,Xe=he.offset;if(ue.isInstancedInterleavedBuffer){for(let Qe=0;Qe<Y.locationSize;Qe++)v(Y.location+Qe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Qe=0;Qe<Y.locationSize;Qe++)S(Y.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let Qe=0;Qe<Y.locationSize;Qe++)U(Y.location+Qe,D/Y.locationSize,Te,pe,Ne*Le,(Xe+D/Y.locationSize*Qe)*Le,ae)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)v(Y.location+ue,he.meshPerAttribute);w.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<Y.locationSize;ue++)S(Y.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Se);for(let ue=0;ue<Y.locationSize;ue++)U(Y.location+ue,D/Y.locationSize,Te,pe,D*Le,D/Y.locationSize*ue*Le,ae)}}else if(P!==void 0){const pe=P[q];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(Y.location,pe);break;case 3:r.vertexAttrib3fv(Y.location,pe);break;case 4:r.vertexAttrib4fv(Y.location,pe);break;default:r.vertexAttrib1fv(Y.location,pe)}}}}L()}function j(){Q();for(const w in a){const G=a[w];for(const ne in G){const fe=G[ne];for(const ge in fe)g(fe[ge].object),delete fe[ge];delete G[ne]}delete a[w]}}function N(w){if(a[w.id]===void 0)return;const G=a[w.id];for(const ne in G){const fe=G[ne];for(const ge in fe)g(fe[ge].object),delete fe[ge];delete G[ne]}delete a[w.id]}function z(w){for(const G in a){const ne=a[G];if(ne[w.id]===void 0)continue;const fe=ne[w.id];for(const ge in fe)g(fe[ge].object),delete fe[ge];delete ne[w.id]}}function Q(){C(),u=!0,c!==o&&(c=o,p(c.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:C,dispose:j,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:L}}function _T(r,e,n){let a;function o(p){a=p}function c(p,g){r.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,g,0,_);let y=0;for(let M=0;M<_;M++)y+=g[M];n.update(y,a,1)}function m(p,g,_,x){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)u(p[M],g[M],x[M]);else{y.multiDrawArraysInstancedWEBGL(a,p,0,g,0,x,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A]*x[A];n.update(M,a,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function xT(r,e,n,a){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==qi&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Q=z===Co&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Va&&a.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ia&&!Q)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=m(p);g!==p&&(ht("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,x=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,N=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:I,vertexTextures:j,maxSamples:N}}function vT(r){const e=this;let n=null,a=0,o=!1,c=!1;const u=new er,d=new St,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const y=_.length!==0||x||a!==0||o;return o=x,a=_.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=g(_,x,0)},this.setState=function(_,x,y){const M=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=r.get(_);if(!o||M===null||M.length===0||c&&!S)c?g(null):p();else{const L=c?0:a,U=L*4;let I=v.clippingState||null;m.value=I,I=g(M,x,U,y);for(let j=0;j!==U;++j)I[j]=n[j];v.clippingState=I,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(_,x,y,M){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=m.value,M!==!0||S===null){const v=y+A*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let U=0,I=y;U!==A;++U,I+=4)u.copy(_[U]).applyMatrix4(L,d),u.normal.toArray(S,I),S[I+3]=u.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function bT(r){let e=new WeakMap;function n(u,d){return d===L0?u.mapping=bo:d===N0&&(u.mapping=yo),u}function a(u){if(u&&u.isTexture){const d=u.mapping;if(d===L0||d===N0)if(e.has(u)){const m=e.get(u).texture;return n(m,u.mapping)}else{const m=u.image;if(m&&m.height>0){const p=new p3(m.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),n(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Es=4,Lv=[.125,.215,.35,.446,.526,.582],nr=20,yT=256,Cl=new D3,Nv=new Gt;let l0=null,c0=0,u0=0,f0=!1;const ST=new le;class Pv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,a=.1,o=100,c={}){const{size:u=256,position:d=ST}=c;l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(l0,c0,u0),this._renderer.xr.enabled=f0,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===bo||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),l0=this._renderer.getRenderTarget(),c0=this._renderer.getActiveCubeFace(),u0=this._renderer.getActiveMipmapLevel(),f0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Co,format:qi,colorSpace:So,depthBuffer:!1},o=zv(e,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zv(e,n,a);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=MT(c)),this._blurMaterial=TT(c,e,n),this._ggxMaterial=ET(c,e,n)}return o}_compileMaterial(e){const n=new Mi(new Zi,e);this._renderer.compile(n,Cl)}_sceneToCubeUV(e,n,a,o,c){const m=new Ii(90,1,n,a),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,y=_.toneMapping;_.getClearColor(Nv),_.toneMapping=As,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new sc,new Ol({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,S=A.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(Nv),v=!0);for(let U=0;U<6;U++){const I=U%3;I===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[U],c.y,c.z)):I===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[U]));const j=this._cubeSize;lo(o,I*j,U>2?j:0,j,j),_.setRenderTarget(o),v&&_.render(A,m),_.render(e,m)}_.toneMapping=y,_.autoClear=x,e.background=L}_textureToCubeUV(e,n){const a=this._renderer,o=e.mapping===bo||e.mapping===yo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iv());const c=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;lo(n,0,0,3*m,2*m),a.setRenderTarget(n),a.render(u,Cl)}_applyPMREM(e){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=a}_applyGGXFilter(e,n,a){const o=this._renderer,c=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),g=n/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=.05+p*.95,y=_*x,{_lodMax:M}=this,A=this._sizeLods[a],S=3*A*(a>M-Es?a-M+Es:0),v=4*(this._cubeSize-A);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=M-n,lo(c,S,v,3*A,2*A),o.setRenderTarget(c),o.render(d,Cl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-a,lo(e,S,v,3*A,2*A),o.setRenderTarget(e),o.render(d,Cl)}_blur(e,n,a,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,a,o,"latitudinal",c),this._halfBlur(u,e,a,a,o,"longitudinal",c)}_halfBlur(e,n,a,o,c,u,d){const m=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&hn("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=p;const x=p.uniforms,y=this._sizeLods[a]-1,M=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*nr-1),A=c/M,S=isFinite(c)?1+Math.floor(g*A):nr;S>nr&&ht(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${nr}`);const v=[];let L=0;for(let z=0;z<nr;++z){const Q=z/A,C=Math.exp(-Q*Q/2);v.push(C),z===0?L+=C:z<S&&(L+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=v,x.latitudinal.value=u==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:U}=this;x.dTheta.value=M,x.mipInt.value=U-a;const I=this._sizeLods[o],j=3*I*(o>U-Es?o-U+Es:0),N=4*(this._cubeSize-I);lo(n,j,N,3*I,2*I),m.setRenderTarget(n),m.render(_,Cl)}}function MT(r){const e=[],n=[],a=[];let o=r;const c=r-Es+1+Lv.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);e.push(d);let m=1/d;u>r-Es?m=Lv[u-r+Es-1]:u===0&&(m=0),n.push(m);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],y=6,M=6,A=3,S=2,v=1,L=new Float32Array(A*M*y),U=new Float32Array(S*M*y),I=new Float32Array(v*M*y);for(let N=0;N<y;N++){const z=N%3*2/3-1,Q=N>2?0:-1,C=[z,Q,0,z+2/3,Q,0,z+2/3,Q+1,0,z,Q,0,z+2/3,Q+1,0,z,Q+1,0];L.set(C,A*M*N),U.set(x,S*M*N);const w=[N,N,N,N,N,N];I.set(w,v*M*N)}const j=new Zi;j.setAttribute("position",new oa(L,A)),j.setAttribute("uv",new oa(U,S)),j.setAttribute("faceIndex",new oa(I,v)),a.push(new Mi(j,null)),o>Es&&o--}return{lodMeshes:a,sizeLods:e,sigmas:n}}function zv(r,e,n){const a=new dr(r,e,n);return a.texture.mapping=pf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function lo(r,e,n,a,o){r.viewport.set(e,n,a,o),r.scissor.set(e,n,a,o)}function ET(r,e,n){return new ka({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function TT(r,e,n){const a=new Float32Array(nr),o=new le(0,1,0);return new ka({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Iv(){return new ka({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function Fv(){return new ka({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function gf(){return`

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
	`}function AT(r){let e=new WeakMap,n=null;function a(d){if(d&&d.isTexture){const m=d.mapping,p=m===L0||m===N0,g=m===bo||m===yo;if(p||g){let _=e.get(d);const x=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new Pv(r)),_=p?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const y=d.image;return p&&y&&y.height>0||g&&y&&o(y)?(n===null&&(n=new Pv(r)),_=p?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function RT(r){const e={};function n(a){if(e[a]!==void 0)return e[a];const o=r.getExtension(a);return e[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&Wl("WebGLRenderer: "+a+" extension not supported."),o}}}function wT(r,e,n,a){const o={},c=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);x.removeEventListener("dispose",u),delete o[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,n.memory.geometries++),x}function m(_){const x=_.attributes;for(const y in x)e.update(x[y],r.ARRAY_BUFFER)}function p(_){const x=[],y=_.index,M=_.attributes.position;let A=0;if(y!==null){const L=y.array;A=y.version;for(let U=0,I=L.length;U<I;U+=3){const j=L[U+0],N=L[U+1],z=L[U+2];x.push(j,N,N,z,z,j)}}else if(M!==void 0){const L=M.array;A=M.version;for(let U=0,I=L.length/3-1;U<I;U+=3){const j=U+0,N=U+1,z=U+2;x.push(j,N,N,z,z,j)}}else return;const S=new(P2(x)?B2:F2)(x,1);S.version=A;const v=c.get(_);v&&e.remove(v),c.set(_,S)}function g(_){const x=c.get(_);if(x){const y=_.index;y!==null&&x.version<y.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function CT(r,e,n){let a;function o(x){a=x}let c,u;function d(x){c=x.type,u=x.bytesPerElement}function m(x,y){r.drawElements(a,y,c,x*u),n.update(y,a,1)}function p(x,y,M){M!==0&&(r.drawElementsInstanced(a,y,c,x*u,M),n.update(y,a,M))}function g(x,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,y,0,c,x,0,M);let S=0;for(let v=0;v<M;v++)S+=y[v];n.update(S,a,1)}function _(x,y,M,A){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<x.length;v++)p(x[v]/u,y[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(a,y,0,c,x,0,A,0,M);let v=0;for(let L=0;L<M;L++)v+=y[L]*A[L];n.update(v,a,1)}}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function DT(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:hn("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:a}}function OT(r,e,n){const a=new WeakMap,o=new _n;function c(u,d,m){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==_){let w=function(){Q.dispose(),a.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const M=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),A===!0&&(I=2),S===!0&&(I=3);let j=d.attributes.position.count*I,N=1;j>e.maxTextureSize&&(N=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const z=new Float32Array(j*N*4*_),Q=new z2(z,j,N,_);Q.type=Ia,Q.needsUpdate=!0;const C=I*4;for(let G=0;G<_;G++){const ne=v[G],fe=L[G],ge=U[G],K=j*N*4*G;for(let P=0;P<ne.count;P++){const q=P*C;M===!0&&(o.fromBufferAttribute(ne,P),z[K+q+0]=o.x,z[K+q+1]=o.y,z[K+q+2]=o.z,z[K+q+3]=0),A===!0&&(o.fromBufferAttribute(fe,P),z[K+q+4]=o.x,z[K+q+5]=o.y,z[K+q+6]=o.z,z[K+q+7]=0),S===!0&&(o.fromBufferAttribute(ge,P),z[K+q+8]=o.x,z[K+q+9]=o.y,z[K+q+10]=o.z,z[K+q+11]=ge.itemSize===4?o.w:1)}}x={count:_,texture:Q,size:new Wt(j,N)},a.set(d,x),d.addEventListener("dispose",w)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const A=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(r,"morphTargetBaseInfluence",A),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:c}}function UT(r,e,n,a){let o=new WeakMap;function c(m){const p=a.render.frame,g=m.geometry,_=e.get(m,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:u}}const W2=new Hn,Bv=new j2(1,1),q2=new z2,Y2=new KS,$2=new V2,Hv=[],Gv=[],Vv=new Float32Array(16),jv=new Float32Array(9),kv=new Float32Array(4);function Oo(r,e,n){const a=r[0];if(a<=0||a>0)return r;const o=e*n;let c=Hv[o];if(c===void 0&&(c=new Float32Array(o),Hv[o]=c),e!==0){a.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Un(r,e){if(r.length!==e.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==e[n])return!1;return!0}function Ln(r,e){for(let n=0,a=e.length;n<a;n++)r[n]=e[n]}function _f(r,e){let n=Gv[e];n===void 0&&(n=new Int32Array(e),Gv[e]=n);for(let a=0;a!==e;++a)n[a]=r.allocateTextureUnit();return n}function LT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function NT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;r.uniform2fv(this.addr,e),Ln(n,e)}}function PT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Un(n,e))return;r.uniform3fv(this.addr,e),Ln(n,e)}}function zT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;r.uniform4fv(this.addr,e),Ln(n,e)}}function IT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;kv.set(a),r.uniformMatrix2fv(this.addr,!1,kv),Ln(n,a)}}function FT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;jv.set(a),r.uniformMatrix3fv(this.addr,!1,jv),Ln(n,a)}}function BT(r,e){const n=this.cache,a=e.elements;if(a===void 0){if(Un(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ln(n,e)}else{if(Un(n,a))return;Vv.set(a),r.uniformMatrix4fv(this.addr,!1,Vv),Ln(n,a)}}function HT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function GT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;r.uniform2iv(this.addr,e),Ln(n,e)}}function VT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;r.uniform3iv(this.addr,e),Ln(n,e)}}function jT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;r.uniform4iv(this.addr,e),Ln(n,e)}}function kT(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function XT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Un(n,e))return;r.uniform2uiv(this.addr,e),Ln(n,e)}}function WT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Un(n,e))return;r.uniform3uiv(this.addr,e),Ln(n,e)}}function qT(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Un(n,e))return;r.uniform4uiv(this.addr,e),Ln(n,e)}}function YT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Bv.compareFunction=N2,c=Bv):c=W2,n.setTexture2D(e||c,o)}function $T(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(e||Y2,o)}function ZT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(e||$2,o)}function KT(r,e,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(e||q2,o)}function QT(r){switch(r){case 5126:return LT;case 35664:return NT;case 35665:return PT;case 35666:return zT;case 35674:return IT;case 35675:return FT;case 35676:return BT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return jT;case 5125:return kT;case 36294:return XT;case 36295:return WT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return ZT;case 36289:case 36303:case 36311:case 36292:return KT}}function JT(r,e){r.uniform1fv(this.addr,e)}function eA(r,e){const n=Oo(e,this.size,2);r.uniform2fv(this.addr,n)}function tA(r,e){const n=Oo(e,this.size,3);r.uniform3fv(this.addr,n)}function nA(r,e){const n=Oo(e,this.size,4);r.uniform4fv(this.addr,n)}function iA(r,e){const n=Oo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function aA(r,e){const n=Oo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function sA(r,e){const n=Oo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function rA(r,e){r.uniform1iv(this.addr,e)}function oA(r,e){r.uniform2iv(this.addr,e)}function lA(r,e){r.uniform3iv(this.addr,e)}function cA(r,e){r.uniform4iv(this.addr,e)}function uA(r,e){r.uniform1uiv(this.addr,e)}function fA(r,e){r.uniform2uiv(this.addr,e)}function dA(r,e){r.uniform3uiv(this.addr,e)}function hA(r,e){r.uniform4uiv(this.addr,e)}function pA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Un(a,c)||(r.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||W2,c[u])}function mA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Un(a,c)||(r.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Y2,c[u])}function gA(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Un(a,c)||(r.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||$2,c[u])}function _A(r,e,n){const a=this.cache,o=e.length,c=_f(n,o);Un(a,c)||(r.uniform1iv(this.addr,c),Ln(a,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||q2,c[u])}function xA(r){switch(r){case 5126:return JT;case 35664:return eA;case 35665:return tA;case 35666:return nA;case 35674:return iA;case 35675:return aA;case 35676:return sA;case 5124:case 35670:return rA;case 35667:case 35671:return oA;case 35668:case 35672:return lA;case 35669:case 35673:return cA;case 5125:return uA;case 36294:return fA;case 36295:return dA;case 36296:return hA;case 35678:case 36198:case 36298:case 36306:case 35682:return pA;case 35679:case 36299:case 36307:return mA;case 35680:case 36300:case 36308:case 36293:return gA;case 36289:case 36303:case 36311:case 36292:return _A}}class vA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.setValue=QT(n.type)}}class bA{constructor(e,n,a){this.id=e,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xA(n.type)}}class yA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,a){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],a)}}}const d0=/(\w+)(\])?(\[|\.)?/g;function Xv(r,e){r.seq.push(e),r.map[e.id]=e}function SA(r,e,n){const a=r.name,o=a.length;for(d0.lastIndex=0;;){const c=d0.exec(a),u=d0.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){Xv(n,p===void 0?new vA(d,r,e):new bA(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new yA(d),Xv(n,_)),n=_}}}class Vu{constructor(e,n){this.seq=[],this.map={};const a=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<a;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);SA(c,u,this)}}setValue(e,n,a,o){const c=this.map[n];c!==void 0&&c.setValue(e,a,o)}setOptional(e,n,a){const o=n[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,n,a,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,n){const a=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&a.push(u)}return a}}function Wv(r,e,n){const a=r.createShader(e);return r.shaderSource(a,n),r.compileShader(a),a}const MA=37297;let EA=0;function TA(r,e){const n=r.split(`
`),a=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return a.join(`
`)}const qv=new St;function AA(r){It._getMatrix(qv,It.workingColorSpace,r);const e=`mat3( ${qv.elements.map(n=>n.toFixed(4))} )`;switch(It.getTransfer(r)){case Qu:return[e,"LinearTransferOETF"];case Zt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Yv(r,e,n){const a=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const u=/ERROR: 0:(\d+)/.exec(c);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+c+`

`+TA(r.getShaderSource(e),d)}else return c}function RA(r,e){const n=AA(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function wA(r,e){let n;switch(e){case ES:n="Linear";break;case TS:n="Reinhard";break;case AS:n="Cineon";break;case RS:n="ACESFilmic";break;case CS:n="AgX";break;case DS:n="Neutral";break;case wS:n="Custom";break;default:ht("WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const zu=new le;function CA(){It.getLuminanceCoefficients(zu);const r=zu.x.toFixed(4),e=zu.y.toFixed(4),n=zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dl).join(`
`)}function OA(r){const e=[];for(const n in r){const a=r[n];a!==!1&&e.push("#define "+n+" "+a)}return e.join(`
`)}function UA(r,e){const n={},a=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function Dl(r){return r!==""}function $v(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const LA=/^[ \t]*#include +<([\w\d./]+)>/gm;function pp(r){return r.replace(LA,PA)}const NA=new Map;function PA(r,e){let n=Mt[e];if(n===void 0){const a=NA.get(e);if(a!==void 0)n=Mt[a],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return pp(n)}const zA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kv(r){return r.replace(zA,IA)}function IA(r,e,n,a){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function Qv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function FA(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===E2?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===iS?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pa&&(e="SHADOWMAP_TYPE_VSM"),e}function BA(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case bo:case yo:e="ENVMAP_TYPE_CUBE";break;case pf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HA(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case yo:e="ENVMAP_MODE_REFRACTION";break}return e}function GA(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case T2:e="ENVMAP_BLENDING_MULTIPLY";break;case SS:e="ENVMAP_BLENDING_MIX";break;case MS:e="ENVMAP_BLENDING_ADD";break}return e}function VA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function jA(r,e,n,a){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const m=FA(n),p=BA(n),g=HA(n),_=GA(n),x=VA(n),y=DA(n),M=OA(c),A=o.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Dl).join(`
`),v.length>0&&(v+=`
`)):(S=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dl).join(`
`),v=[Qv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==As?"#define TONE_MAPPING":"",n.toneMapping!==As?Mt.tonemapping_pars_fragment:"",n.toneMapping!==As?wA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,RA("linearToOutputTexel",n.outputColorSpace),CA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Dl).join(`
`)),u=pp(u),u=$v(u,n),u=Zv(u,n),d=pp(d),d=$v(d,n),d=Zv(d,n),u=Kv(u),d=Kv(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===rv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=L+S+u,I=L+v+d,j=Wv(o,o.VERTEX_SHADER,U),N=Wv(o,o.FRAGMENT_SHADER,I);o.attachShader(A,j),o.attachShader(A,N),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function z(G){if(r.debug.checkShaderErrors){const ne=o.getProgramInfoLog(A)||"",fe=o.getShaderInfoLog(j)||"",ge=o.getShaderInfoLog(N)||"",K=ne.trim(),P=fe.trim(),q=ge.trim();let Y=!0,he=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,j,N);else{const pe=Yv(o,j,"vertex"),D=Yv(o,N,"fragment");hn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+K+`
`+pe+`
`+D)}else K!==""?ht("WebGLProgram: Program Info Log:",K):(P===""||q==="")&&(he=!1);he&&(G.diagnostics={runnable:Y,programLog:K,vertexShader:{log:P,prefix:S},fragmentShader:{log:q,prefix:v}})}o.deleteShader(j),o.deleteShader(N),Q=new Vu(o,A),C=UA(o,A)}let Q;this.getUniforms=function(){return Q===void 0&&z(this),Q};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=o.getProgramParameter(A,MA)),w},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=EA++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=j,this.fragmentShader=N,this}let kA=0;class XA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,a=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(a),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let a=n.get(e);return a===void 0&&(a=new Set,n.set(e,a)),a}_getShaderStage(e){const n=this.shaderCache;let a=n.get(e);return a===void 0&&(a=new WA(e),n.set(e,a)),a}}class WA{constructor(e){this.id=kA++,this.code=e,this.usedTimes=0}}function qA(r,e,n,a,o,c,u){const d=new Xp,m=new XA,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let y=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,w,G,ne,fe){const ge=ne.fog,K=fe.geometry,P=C.isMeshStandardMaterial?ne.environment:null,q=(C.isMeshStandardMaterial?n:e).get(C.envMap||P),Y=q&&q.mapping===pf?q.image.height:null,he=M[C.type];C.precision!==null&&(y=o.getMaxPrecision(C.precision),y!==C.precision&&ht("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const pe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,D=pe!==void 0?pe.length:0;let ie=0;K.morphAttributes.position!==void 0&&(ie=1),K.morphAttributes.normal!==void 0&&(ie=2),K.morphAttributes.color!==void 0&&(ie=3);let Se,Te,Le,ae;if(he){const Ct=sa[he];Se=Ct.vertexShader,Te=Ct.fragmentShader}else Se=C.vertexShader,Te=C.fragmentShader,m.update(C),Le=m.getVertexShaderID(C),ae=m.getFragmentShaderID(C);const ue=r.getRenderTarget(),Ne=r.state.buffers.depth.getReversed(),Xe=fe.isInstancedMesh===!0,Qe=fe.isBatchedMesh===!0,ut=!!C.map,on=!!C.matcap,mt=!!q,Ut=!!C.aoMap,B=!!C.lightMap,pt=!!C.bumpMap,_t=!!C.normalMap,Nt=!!C.displacementMap,We=!!C.emissiveMap,jt=!!C.metalnessMap,tt=!!C.roughnessMap,lt=C.anisotropy>0,O=C.clearcoat>0,E=C.dispersion>0,J=C.iridescence>0,_e=C.sheen>0,Ee=C.transmission>0,de=lt&&!!C.anisotropyMap,nt=O&&!!C.clearcoatMap,oe=O&&!!C.clearcoatNormalMap,Ce=O&&!!C.clearcoatRoughnessMap,Fe=J&&!!C.iridescenceMap,ye=J&&!!C.iridescenceThicknessMap,Ae=_e&&!!C.sheenColorMap,ke=_e&&!!C.sheenRoughnessMap,Ve=!!C.specularMap,Ie=!!C.specularColorMap,ot=!!C.specularIntensityMap,H=Ee&&!!C.transmissionMap,ze=Ee&&!!C.thicknessMap,Oe=!!C.gradientMap,De=!!C.alphaMap,Re=C.alphaTest>0,ve=!!C.alphaHash,je=!!C.extensions;let st=As;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(st=r.toneMapping);const Vt={shaderID:he,shaderType:C.type,shaderName:C.name,vertexShader:Se,fragmentShader:Te,defines:C.defines,customVertexShaderID:Le,customFragmentShaderID:ae,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Qe,batchingColor:Qe&&fe._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&fe.instanceColor!==null,instancingMorph:Xe&&fe.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:So,alphaToCoverage:!!C.alphaToCoverage,map:ut,matcap:on,envMap:mt,envMapMode:mt&&q.mapping,envMapCubeUVHeight:Y,aoMap:Ut,lightMap:B,bumpMap:pt,normalMap:_t,displacementMap:x&&Nt,emissiveMap:We,normalMapObjectSpace:_t&&C.normalMapType===PS,normalMapTangentSpace:_t&&C.normalMapType===NS,metalnessMap:jt,roughnessMap:tt,anisotropy:lt,anisotropyMap:de,clearcoat:O,clearcoatMap:nt,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ce,dispersion:E,iridescence:J,iridescenceMap:Fe,iridescenceThicknessMap:ye,sheen:_e,sheenColorMap:Ae,sheenRoughnessMap:ke,specularMap:Ve,specularColorMap:Ie,specularIntensityMap:ot,transmission:Ee,transmissionMap:H,thicknessMap:ze,gradientMap:Oe,opaque:C.transparent===!1&&C.blending===uo&&C.alphaToCoverage===!1,alphaMap:De,alphaTest:Re,alphaHash:ve,combine:C.combine,mapUv:ut&&A(C.map.channel),aoMapUv:Ut&&A(C.aoMap.channel),lightMapUv:B&&A(C.lightMap.channel),bumpMapUv:pt&&A(C.bumpMap.channel),normalMapUv:_t&&A(C.normalMap.channel),displacementMapUv:Nt&&A(C.displacementMap.channel),emissiveMapUv:We&&A(C.emissiveMap.channel),metalnessMapUv:jt&&A(C.metalnessMap.channel),roughnessMapUv:tt&&A(C.roughnessMap.channel),anisotropyMapUv:de&&A(C.anisotropyMap.channel),clearcoatMapUv:nt&&A(C.clearcoatMap.channel),clearcoatNormalMapUv:oe&&A(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&A(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&A(C.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&A(C.sheenColorMap.channel),sheenRoughnessMapUv:ke&&A(C.sheenRoughnessMap.channel),specularMapUv:Ve&&A(C.specularMap.channel),specularColorMapUv:Ie&&A(C.specularColorMap.channel),specularIntensityMapUv:ot&&A(C.specularIntensityMap.channel),transmissionMapUv:H&&A(C.transmissionMap.channel),thicknessMapUv:ze&&A(C.thicknessMap.channel),alphaMapUv:De&&A(C.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(_t||lt),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!K.attributes.uv&&(ut||De),fog:!!ge,useFog:C.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ne,skinning:fe.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:st,decodeVideoTexture:ut&&C.map.isVideoTexture===!0&&It.getTransfer(C.map.colorSpace)===Zt,decodeVideoTextureEmissive:We&&C.emissiveMap.isVideoTexture===!0&&It.getTransfer(C.emissiveMap.colorSpace)===Zt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===za,flipSided:C.side===ci,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:je&&C.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&C.extensions.multiDraw===!0||Qe)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Vt.vertexUv1s=p.has(1),Vt.vertexUv2s=p.has(2),Vt.vertexUv3s=p.has(3),p.clear(),Vt}function v(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)w.push(G),w.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(L(w,C),U(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function L(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function U(C,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function I(C){const w=M[C.type];let G;if(w){const ne=sa[w];G=u3.clone(ne.uniforms)}else G=C.uniforms;return G}function j(C,w){let G;for(let ne=0,fe=g.length;ne<fe;ne++){const ge=g[ne];if(ge.cacheKey===w){G=ge,++G.usedTimes;break}}return G===void 0&&(G=new jA(r,w,C,c),g.push(G)),G}function N(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),C.destroy()}}function z(C){m.remove(C)}function Q(){m.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:I,acquireProgram:j,releaseProgram:N,releaseShaderCache:z,programs:g,dispose:Q}}function YA(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function a(u){r.delete(u)}function o(u,d,m){r.get(u)[d]=m}function c(){r=new WeakMap}return{has:e,get:n,remove:a,update:o,dispose:c}}function $A(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function e2(){const r=[];let e=0;const n=[],a=[],o=[];function c(){e=0,n.length=0,a.length=0,o.length=0}function u(_,x,y,M,A,S){let v=r[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:y,groupOrder:M,renderOrder:_.renderOrder,z:A,group:S},r[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=y,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,x,y,M,A,S){const v=u(_,x,y,M,A,S);y.transmission>0?a.push(v):y.transparent===!0?o.push(v):n.push(v)}function m(_,x,y,M,A,S){const v=u(_,x,y,M,A,S);y.transmission>0?a.unshift(v):y.transparent===!0?o.unshift(v):n.unshift(v)}function p(_,x){n.length>1&&n.sort(_||$A),a.length>1&&a.sort(x||Jv),o.length>1&&o.sort(x||Jv)}function g(){for(let _=e,x=r.length;_<x;_++){const y=r[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:a,transparent:o,init:c,push:d,unshift:m,finish:g,sort:p}}function ZA(){let r=new WeakMap;function e(a,o){const c=r.get(a);let u;return c===void 0?(u=new e2,r.set(a,[u])):o>=c.length?(u=new e2,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function KA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new le,color:new Gt};break;case"SpotLight":n={position:new le,direction:new le,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new le,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new le,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new le,halfWidth:new le,halfHeight:new le};break}return r[e.id]=n,n}}}function QA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let JA=0;function eR(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function tR(r){const e=new KA,n=QA(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new le);const o=new le,c=new pn,u=new pn;function d(p){let g=0,_=0,x=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let y=0,M=0,A=0,S=0,v=0,L=0,U=0,I=0,j=0,N=0,z=0;p.sort(eR);for(let C=0,w=p.length;C<w;C++){const G=p[C],ne=G.color,fe=G.intensity,ge=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=ne.r*fe,_+=ne.g*fe,x+=ne.b*fe;else if(G.isLightProbe){for(let P=0;P<9;P++)a.probe[P].addScaledVector(G.sh.coefficients[P],fe);z++}else if(G.isDirectionalLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,Y=n.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,a.directionalShadow[y]=Y,a.directionalShadowMap[y]=K,a.directionalShadowMatrix[y]=G.shadow.matrix,L++}a.directional[y]=P,y++}else if(G.isSpotLight){const P=e.get(G);P.position.setFromMatrixPosition(G.matrixWorld),P.color.copy(ne).multiplyScalar(fe),P.distance=ge,P.coneCos=Math.cos(G.angle),P.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),P.decay=G.decay,a.spot[A]=P;const q=G.shadow;if(G.map&&(a.spotLightMap[j]=G.map,j++,q.updateMatrices(G),G.castShadow&&N++),a.spotLightMatrix[A]=q.matrix,G.castShadow){const Y=n.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,a.spotShadow[A]=Y,a.spotShadowMap[A]=K,I++}A++}else if(G.isRectAreaLight){const P=e.get(G);P.color.copy(ne).multiplyScalar(fe),P.halfWidth.set(G.width*.5,0,0),P.halfHeight.set(0,G.height*.5,0),a.rectArea[S]=P,S++}else if(G.isPointLight){const P=e.get(G);if(P.color.copy(G.color).multiplyScalar(G.intensity),P.distance=G.distance,P.decay=G.decay,G.castShadow){const q=G.shadow,Y=n.get(G);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,a.pointShadow[M]=Y,a.pointShadowMap[M]=K,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=P,M++}else if(G.isHemisphereLight){const P=e.get(G);P.skyColor.copy(G.color).multiplyScalar(fe),P.groundColor.copy(G.groundColor).multiplyScalar(fe),a.hemi[v]=P,v++}}S>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=He.LTC_FLOAT_1,a.rectAreaLTC2=He.LTC_FLOAT_2):(a.rectAreaLTC1=He.LTC_HALF_1,a.rectAreaLTC2=He.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=x;const Q=a.hash;(Q.directionalLength!==y||Q.pointLength!==M||Q.spotLength!==A||Q.rectAreaLength!==S||Q.hemiLength!==v||Q.numDirectionalShadows!==L||Q.numPointShadows!==U||Q.numSpotShadows!==I||Q.numSpotMaps!==j||Q.numLightProbes!==z)&&(a.directional.length=y,a.spot.length=A,a.rectArea.length=S,a.point.length=M,a.hemi.length=v,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=I,a.spotShadowMap.length=I,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=I+j-N,a.spotLightMap.length=j,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=z,Q.directionalLength=y,Q.pointLength=M,Q.spotLength=A,Q.rectAreaLength=S,Q.hemiLength=v,Q.numDirectionalShadows=L,Q.numPointShadows=U,Q.numSpotShadows=I,Q.numSpotMaps=j,Q.numLightProbes=z,a.version=JA++)}function m(p,g){let _=0,x=0,y=0,M=0,A=0;const S=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const U=p[v];if(U.isDirectionalLight){const I=a.directional[_];I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),_++}else if(U.isSpotLight){const I=a.spot[y];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(S),y++}else if(U.isRectAreaLight){const I=a.rectArea[M];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),u.identity(),c.copy(U.matrixWorld),c.premultiply(S),u.extractRotation(c),I.halfWidth.set(U.width*.5,0,0),I.halfHeight.set(0,U.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),M++}else if(U.isPointLight){const I=a.point[x];I.position.setFromMatrixPosition(U.matrixWorld),I.position.applyMatrix4(S),x++}else if(U.isHemisphereLight){const I=a.hemi[A];I.direction.setFromMatrixPosition(U.matrixWorld),I.direction.transformDirection(S),A++}}}return{setup:d,setupView:m,state:a}}function t2(r){const e=new tR(r),n=[],a=[];function o(g){p.camera=g,n.length=0,a.length=0}function c(g){n.push(g)}function u(g){a.push(g)}function d(){e.setup(n)}function m(g){e.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:u}}function nR(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new t2(r),e.set(o,[d])):c>=u.length?(d=new t2(r),u.push(d)):d=u[c],d}function a(){e=new WeakMap}return{get:n,dispose:a}}const iR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aR=`uniform sampler2D shadow_pass;
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
}`;function sR(r,e,n){let a=new qp;const o=new Wt,c=new Wt,u=new _n,d=new E3({depthPacking:LS}),m=new T3,p={},g=n.maxTextureSize,_={[Cs]:ci,[ci]:Cs,[za]:za},x=new ka({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:iR,fragmentShader:aR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const M=new Zi;M.setAttribute("position",new oa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mi(M,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E2;let v=this.type;this.render=function(N,z,Q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=r.getRenderTarget(),w=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),ne=r.state;ne.setBlending(Ba),ne.buffers.depth.getReversed()===!0?ne.buffers.color.setClear(0,0,0,0):ne.buffers.color.setClear(1,1,1,1),ne.buffers.depth.setTest(!0),ne.setScissorTest(!1);const fe=v!==Pa&&this.type===Pa,ge=v===Pa&&this.type!==Pa;for(let K=0,P=N.length;K<P;K++){const q=N[K],Y=q.shadow;if(Y===void 0){ht("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const he=Y.getFrameExtents();if(o.multiply(he),c.copy(Y.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(c.x=Math.floor(g/he.x),o.x=c.x*he.x,Y.mapSize.x=c.x),o.y>g&&(c.y=Math.floor(g/he.y),o.y=c.y*he.y,Y.mapSize.y=c.y)),Y.map===null||fe===!0||ge===!0){const D=this.type!==Pa?{minFilter:Ti,magFilter:Ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new dr(o.x,o.y,D),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}r.setRenderTarget(Y.map),r.clear();const pe=Y.getViewportCount();for(let D=0;D<pe;D++){const ie=Y.getViewport(D);u.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),ne.viewport(u),Y.updateMatrices(q,D),a=Y.getFrustum(),I(z,Q,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Pa&&L(Y,Q),Y.needsUpdate=!1}v=this.type,S.needsUpdate=!1,r.setRenderTarget(C,w,G)};function L(N,z){const Q=e.update(A);x.defines.VSM_SAMPLES!==N.blurSamples&&(x.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new dr(o.x,o.y)),x.uniforms.shadow_pass.value=N.map.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,Q,x,A,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,Q,y,A,null)}function U(N,z,Q,C){let w=null;const G=Q.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)w=G;else if(w=Q.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ne=w.uuid,fe=z.uuid;let ge=p[ne];ge===void 0&&(ge={},p[ne]=ge);let K=ge[fe];K===void 0&&(K=w.clone(),ge[fe]=K,z.addEventListener("dispose",j)),w=K}if(w.visible=z.visible,w.wireframe=z.wireframe,C===Pa?w.side=z.shadowSide!==null?z.shadowSide:z.side:w.side=z.shadowSide!==null?z.shadowSide:_[z.side],w.alphaMap=z.alphaMap,w.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,w.map=z.map,w.clipShadows=z.clipShadows,w.clippingPlanes=z.clippingPlanes,w.clipIntersection=z.clipIntersection,w.displacementMap=z.displacementMap,w.displacementScale=z.displacementScale,w.displacementBias=z.displacementBias,w.wireframeLinewidth=z.wireframeLinewidth,w.linewidth=z.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ne=r.properties.get(w);ne.light=Q}return w}function I(N,z,Q,C,w){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&w===Pa)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),ge=N.material;if(Array.isArray(ge)){const K=fe.groups;for(let P=0,q=K.length;P<q;P++){const Y=K[P],he=ge[Y.materialIndex];if(he&&he.visible){const pe=U(N,he,C,w);N.onBeforeShadow(r,N,z,Q,fe,pe,Y),r.renderBufferDirect(Q,null,fe,pe,N,Y),N.onAfterShadow(r,N,z,Q,fe,pe,Y)}}}else if(ge.visible){const K=U(N,ge,C,w);N.onBeforeShadow(r,N,z,Q,fe,K,null),r.renderBufferDirect(Q,null,fe,K,N,null),N.onAfterShadow(r,N,z,Q,fe,K,null)}}const ne=N.children;for(let fe=0,ge=ne.length;fe<ge;fe++)I(ne[fe],z,Q,C,w)}function j(N){N.target.removeEventListener("dispose",j);for(const Q in p){const C=p[Q],w=N.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const rR={[A0]:R0,[w0]:O0,[C0]:U0,[vo]:D0,[R0]:A0,[O0]:w0,[U0]:C0,[D0]:vo};function oR(r,e){function n(){let H=!1;const ze=new _n;let Oe=null;const De=new _n(0,0,0,0);return{setMask:function(Re){Oe!==Re&&!H&&(r.colorMask(Re,Re,Re,Re),Oe=Re)},setLocked:function(Re){H=Re},setClear:function(Re,ve,je,st,Vt){Vt===!0&&(Re*=st,ve*=st,je*=st),ze.set(Re,ve,je,st),De.equals(ze)===!1&&(r.clearColor(Re,ve,je,st),De.copy(ze))},reset:function(){H=!1,Oe=null,De.set(-1,0,0,0)}}}function a(){let H=!1,ze=!1,Oe=null,De=null,Re=null;return{setReversed:function(ve){if(ze!==ve){const je=e.get("EXT_clip_control");ve?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),ze=ve;const st=Re;Re=null,this.setClear(st)}},getReversed:function(){return ze},setTest:function(ve){ve?ue(r.DEPTH_TEST):Ne(r.DEPTH_TEST)},setMask:function(ve){Oe!==ve&&!H&&(r.depthMask(ve),Oe=ve)},setFunc:function(ve){if(ze&&(ve=rR[ve]),De!==ve){switch(ve){case A0:r.depthFunc(r.NEVER);break;case R0:r.depthFunc(r.ALWAYS);break;case w0:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case C0:r.depthFunc(r.EQUAL);break;case D0:r.depthFunc(r.GEQUAL);break;case O0:r.depthFunc(r.GREATER);break;case U0:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}De=ve}},setLocked:function(ve){H=ve},setClear:function(ve){Re!==ve&&(ze&&(ve=1-ve),r.clearDepth(ve),Re=ve)},reset:function(){H=!1,Oe=null,De=null,Re=null,ze=!1}}}function o(){let H=!1,ze=null,Oe=null,De=null,Re=null,ve=null,je=null,st=null,Vt=null;return{setTest:function(Ct){H||(Ct?ue(r.STENCIL_TEST):Ne(r.STENCIL_TEST))},setMask:function(Ct){ze!==Ct&&!H&&(r.stencilMask(Ct),ze=Ct)},setFunc:function(Ct,Rn,ei){(Oe!==Ct||De!==Rn||Re!==ei)&&(r.stencilFunc(Ct,Rn,ei),Oe=Ct,De=Rn,Re=ei)},setOp:function(Ct,Rn,ei){(ve!==Ct||je!==Rn||st!==ei)&&(r.stencilOp(Ct,Rn,ei),ve=Ct,je=Rn,st=ei)},setLocked:function(Ct){H=Ct},setClear:function(Ct){Vt!==Ct&&(r.clearStencil(Ct),Vt=Ct)},reset:function(){H=!1,ze=null,Oe=null,De=null,Re=null,ve=null,je=null,st=null,Vt=null}}}const c=new n,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,U=null,I=null,j=null,N=null,z=new Gt(0,0,0),Q=0,C=!1,w=null,G=null,ne=null,fe=null,ge=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=q>=2);let he=null,pe={};const D=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Se=new _n().fromArray(D),Te=new _n().fromArray(ie);function Le(H,ze,Oe,De){const Re=new Uint8Array(4),ve=r.createTexture();r.bindTexture(H,ve),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<Oe;je++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(ze,0,r.RGBA,1,1,De,0,r.RGBA,r.UNSIGNED_BYTE,Re):r.texImage2D(ze+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Re);return ve}const ae={};ae[r.TEXTURE_2D]=Le(r.TEXTURE_2D,r.TEXTURE_2D,1),ae[r.TEXTURE_CUBE_MAP]=Le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[r.TEXTURE_2D_ARRAY]=Le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ae[r.TEXTURE_3D]=Le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),u.setFunc(vo),pt(!1),_t(ev),ue(r.CULL_FACE),Ut(Ba);function ue(H){g[H]!==!0&&(r.enable(H),g[H]=!0)}function Ne(H){g[H]!==!1&&(r.disable(H),g[H]=!1)}function Xe(H,ze){return _[H]!==ze?(r.bindFramebuffer(H,ze),_[H]=ze,H===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=ze),H===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=ze),!0):!1}function Qe(H,ze){let Oe=y,De=!1;if(H){Oe=x.get(ze),Oe===void 0&&(Oe=[],x.set(ze,Oe));const Re=H.textures;if(Oe.length!==Re.length||Oe[0]!==r.COLOR_ATTACHMENT0){for(let ve=0,je=Re.length;ve<je;ve++)Oe[ve]=r.COLOR_ATTACHMENT0+ve;Oe.length=Re.length,De=!0}}else Oe[0]!==r.BACK&&(Oe[0]=r.BACK,De=!0);De&&r.drawBuffers(Oe)}function ut(H){return M!==H?(r.useProgram(H),M=H,!0):!1}const on={[tr]:r.FUNC_ADD,[sS]:r.FUNC_SUBTRACT,[rS]:r.FUNC_REVERSE_SUBTRACT};on[oS]=r.MIN,on[lS]=r.MAX;const mt={[cS]:r.ZERO,[uS]:r.ONE,[fS]:r.SRC_COLOR,[E0]:r.SRC_ALPHA,[_S]:r.SRC_ALPHA_SATURATE,[mS]:r.DST_COLOR,[hS]:r.DST_ALPHA,[dS]:r.ONE_MINUS_SRC_COLOR,[T0]:r.ONE_MINUS_SRC_ALPHA,[gS]:r.ONE_MINUS_DST_COLOR,[pS]:r.ONE_MINUS_DST_ALPHA,[xS]:r.CONSTANT_COLOR,[vS]:r.ONE_MINUS_CONSTANT_COLOR,[bS]:r.CONSTANT_ALPHA,[yS]:r.ONE_MINUS_CONSTANT_ALPHA};function Ut(H,ze,Oe,De,Re,ve,je,st,Vt,Ct){if(H===Ba){A===!0&&(Ne(r.BLEND),A=!1);return}if(A===!1&&(ue(r.BLEND),A=!0),H!==aS){if(H!==S||Ct!==C){if((v!==tr||I!==tr)&&(r.blendEquation(r.FUNC_ADD),v=tr,I=tr),Ct)switch(H){case uo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tv:r.blendFunc(r.ONE,r.ONE);break;case nv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case iv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:hn("WebGLState: Invalid blending: ",H);break}else switch(H){case uo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nv:hn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case iv:hn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:hn("WebGLState: Invalid blending: ",H);break}L=null,U=null,j=null,N=null,z.set(0,0,0),Q=0,S=H,C=Ct}return}Re=Re||ze,ve=ve||Oe,je=je||De,(ze!==v||Re!==I)&&(r.blendEquationSeparate(on[ze],on[Re]),v=ze,I=Re),(Oe!==L||De!==U||ve!==j||je!==N)&&(r.blendFuncSeparate(mt[Oe],mt[De],mt[ve],mt[je]),L=Oe,U=De,j=ve,N=je),(st.equals(z)===!1||Vt!==Q)&&(r.blendColor(st.r,st.g,st.b,Vt),z.copy(st),Q=Vt),S=H,C=!1}function B(H,ze){H.side===za?Ne(r.CULL_FACE):ue(r.CULL_FACE);let Oe=H.side===ci;ze&&(Oe=!Oe),pt(Oe),H.blending===uo&&H.transparent===!1?Ut(Ba):Ut(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),c.setMask(H.colorWrite);const De=H.stencilWrite;d.setTest(De),De&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),We(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(H){w!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),w=H)}function _t(H){H!==tS?(ue(r.CULL_FACE),H!==G&&(H===ev?r.cullFace(r.BACK):H===nS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ne(r.CULL_FACE),G=H}function Nt(H){H!==ne&&(P&&r.lineWidth(H),ne=H)}function We(H,ze,Oe){H?(ue(r.POLYGON_OFFSET_FILL),(fe!==ze||ge!==Oe)&&(r.polygonOffset(ze,Oe),fe=ze,ge=Oe)):Ne(r.POLYGON_OFFSET_FILL)}function jt(H){H?ue(r.SCISSOR_TEST):Ne(r.SCISSOR_TEST)}function tt(H){H===void 0&&(H=r.TEXTURE0+K-1),he!==H&&(r.activeTexture(H),he=H)}function lt(H,ze,Oe){Oe===void 0&&(he===null?Oe=r.TEXTURE0+K-1:Oe=he);let De=pe[Oe];De===void 0&&(De={type:void 0,texture:void 0},pe[Oe]=De),(De.type!==H||De.texture!==ze)&&(he!==Oe&&(r.activeTexture(Oe),he=Oe),r.bindTexture(H,ze||ae[H]),De.type=H,De.texture=ze)}function O(){const H=pe[he];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function J(){try{r.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function _e(){try{r.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(){try{r.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function nt(){try{r.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function oe(){try{r.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Ce(){try{r.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Fe(){try{r.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ye(){try{r.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ae(H){Se.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),Se.copy(H))}function ke(H){Te.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function Ve(H,ze){let Oe=p.get(ze);Oe===void 0&&(Oe=new WeakMap,p.set(ze,Oe));let De=Oe.get(H);De===void 0&&(De=r.getUniformBlockIndex(ze,H.name),Oe.set(H,De))}function Ie(H,ze){const De=p.get(ze).get(H);m.get(ze)!==De&&(r.uniformBlockBinding(ze,De,H.__bindingPointIndex),m.set(ze,De))}function ot(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},he=null,pe={},_={},x=new WeakMap,y=[],M=null,A=!1,S=null,v=null,L=null,U=null,I=null,j=null,N=null,z=new Gt(0,0,0),Q=0,C=!1,w=null,G=null,ne=null,fe=null,ge=null,Se.set(0,0,r.canvas.width,r.canvas.height),Te.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:ue,disable:Ne,bindFramebuffer:Xe,drawBuffers:Qe,useProgram:ut,setBlending:Ut,setMaterial:B,setFlipSided:pt,setCullFace:_t,setLineWidth:Nt,setPolygonOffset:We,setScissorTest:jt,activeTexture:tt,bindTexture:lt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Fe,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:oe,texStorage3D:Ce,texSubImage2D:_e,texSubImage3D:Ee,compressedTexSubImage2D:de,compressedTexSubImage3D:nt,scissor:Ae,viewport:ke,reset:ot}}function lR(r,e,n,a,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Wt,g=new WeakMap;let _;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(O,E){return y?new OffscreenCanvas(O,E):Xl("canvas")}function A(O,E,J){let _e=1;const Ee=lt(O);if((Ee.width>J||Ee.height>J)&&(_e=J/Math.max(Ee.width,Ee.height)),_e<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const de=Math.floor(_e*Ee.width),nt=Math.floor(_e*Ee.height);_===void 0&&(_=M(de,nt));const oe=E?M(de,nt):_;return oe.width=de,oe.height=nt,oe.getContext("2d").drawImage(O,0,0,de,nt),ht("WebGLRenderer: Texture has been resized from ("+Ee.width+"x"+Ee.height+") to ("+de+"x"+nt+")."),oe}else return"data"in O&&ht("WebGLRenderer: Image in DataTexture is too big ("+Ee.width+"x"+Ee.height+")."),O;return O}function S(O){return O.generateMipmaps}function v(O){r.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?r.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(O,E,J,_e,Ee=!1){if(O!==null){if(r[O]!==void 0)return r[O];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let de=E;if(E===r.RED&&(J===r.FLOAT&&(de=r.R32F),J===r.HALF_FLOAT&&(de=r.R16F),J===r.UNSIGNED_BYTE&&(de=r.R8)),E===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.R8UI),J===r.UNSIGNED_SHORT&&(de=r.R16UI),J===r.UNSIGNED_INT&&(de=r.R32UI),J===r.BYTE&&(de=r.R8I),J===r.SHORT&&(de=r.R16I),J===r.INT&&(de=r.R32I)),E===r.RG&&(J===r.FLOAT&&(de=r.RG32F),J===r.HALF_FLOAT&&(de=r.RG16F),J===r.UNSIGNED_BYTE&&(de=r.RG8)),E===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RG8UI),J===r.UNSIGNED_SHORT&&(de=r.RG16UI),J===r.UNSIGNED_INT&&(de=r.RG32UI),J===r.BYTE&&(de=r.RG8I),J===r.SHORT&&(de=r.RG16I),J===r.INT&&(de=r.RG32I)),E===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGB8UI),J===r.UNSIGNED_SHORT&&(de=r.RGB16UI),J===r.UNSIGNED_INT&&(de=r.RGB32UI),J===r.BYTE&&(de=r.RGB8I),J===r.SHORT&&(de=r.RGB16I),J===r.INT&&(de=r.RGB32I)),E===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),J===r.UNSIGNED_INT&&(de=r.RGBA32UI),J===r.BYTE&&(de=r.RGBA8I),J===r.SHORT&&(de=r.RGBA16I),J===r.INT&&(de=r.RGBA32I)),E===r.RGB&&(J===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),J===r.UNSIGNED_INT_10F_11F_11F_REV&&(de=r.R11F_G11F_B10F)),E===r.RGBA){const nt=Ee?Qu:It.getTransfer(_e);J===r.FLOAT&&(de=r.RGBA32F),J===r.HALF_FLOAT&&(de=r.RGBA16F),J===r.UNSIGNED_BYTE&&(de=nt===Zt?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(O,E){let J;return O?E===null||E===fr||E===Vl?J=r.DEPTH24_STENCIL8:E===Ia?J=r.DEPTH32F_STENCIL8:E===Gl&&(J=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fr||E===Vl?J=r.DEPTH_COMPONENT24:E===Ia?J=r.DEPTH_COMPONENT32F:E===Gl&&(J=r.DEPTH_COMPONENT16),J}function j(O,E){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==Ti&&O.minFilter!==Yn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function N(O){const E=O.target;E.removeEventListener("dispose",N),Q(E),E.isVideoTexture&&g.delete(E)}function z(O){const E=O.target;E.removeEventListener("dispose",z),w(E)}function Q(O){const E=a.get(O);if(E.__webglInit===void 0)return;const J=O.source,_e=x.get(J);if(_e){const Ee=_e[E.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&C(O),Object.keys(_e).length===0&&x.delete(J)}a.remove(O)}function C(O){const E=a.get(O);r.deleteTexture(E.__webglTexture);const J=O.source,_e=x.get(J);delete _e[E.__cacheKey],u.memory.textures--}function w(O){const E=a.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),a.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Ee=0;Ee<E.__webglFramebuffer[_e].length;Ee++)r.deleteFramebuffer(E.__webglFramebuffer[_e][Ee]);else r.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)r.deleteFramebuffer(E.__webglFramebuffer[_e]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=O.textures;for(let _e=0,Ee=J.length;_e<Ee;_e++){const de=a.get(J[_e]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),a.remove(J[_e])}a.remove(O)}let G=0;function ne(){G=0}function fe(){const O=G;return O>=o.maxTextures&&ht("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),G+=1,O}function ge(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function K(O,E){const J=a.get(O);if(O.isVideoTexture&&jt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&J.__version!==O.version){const _e=O.image;if(_e===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(J,O,E);return}}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+E)}function P(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ae(J,O,E);return}else O.isExternalTexture&&(J.__webglTexture=O.sourceTexture?O.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+E)}function q(O,E){const J=a.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&J.__version!==O.version){ae(J,O,E);return}n.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+E)}function Y(O,E){const J=a.get(O);if(O.version>0&&J.__version!==O.version){ue(J,O,E);return}n.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+E)}const he={[P0]:r.REPEAT,[Ei]:r.CLAMP_TO_EDGE,[z0]:r.MIRRORED_REPEAT},pe={[Ti]:r.NEAREST,[OS]:r.NEAREST_MIPMAP_NEAREST,[mu]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[Ph]:r.LINEAR_MIPMAP_NEAREST,[ar]:r.LINEAR_MIPMAP_LINEAR},D={[zS]:r.NEVER,[VS]:r.ALWAYS,[IS]:r.LESS,[N2]:r.LEQUAL,[FS]:r.EQUAL,[GS]:r.GEQUAL,[BS]:r.GREATER,[HS]:r.NOTEQUAL};function ie(O,E){if(E.type===Ia&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Yn||E.magFilter===Ph||E.magFilter===mu||E.magFilter===ar||E.minFilter===Yn||E.minFilter===Ph||E.minFilter===mu||E.minFilter===ar)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(O,r.TEXTURE_WRAP_S,he[E.wrapS]),r.texParameteri(O,r.TEXTURE_WRAP_T,he[E.wrapT]),(O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY)&&r.texParameteri(O,r.TEXTURE_WRAP_R,he[E.wrapR]),r.texParameteri(O,r.TEXTURE_MAG_FILTER,pe[E.magFilter]),r.texParameteri(O,r.TEXTURE_MIN_FILTER,pe[E.minFilter]),E.compareFunction&&(r.texParameteri(O,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(O,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ti||E.minFilter!==mu&&E.minFilter!==ar||E.type===Ia&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");r.texParameterf(O,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Se(O,E){let J=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",N));const _e=E.source;let Ee=x.get(_e);Ee===void 0&&(Ee={},x.set(_e,Ee));const de=ge(E);if(de!==O.__cacheKey){Ee[de]===void 0&&(Ee[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,J=!0),Ee[de].usedTimes++;const nt=Ee[O.__cacheKey];nt!==void 0&&(Ee[O.__cacheKey].usedTimes--,nt.usedTimes===0&&C(E)),O.__cacheKey=de,O.__webglTexture=Ee[de].texture}return J}function Te(O,E,J){return Math.floor(Math.floor(O/J)/E)}function Le(O,E,J,_e){const de=O.updateRanges;if(de.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,J,_e,E.data);else{de.sort((ye,Ae)=>ye.start-Ae.start);let nt=0;for(let ye=1;ye<de.length;ye++){const Ae=de[nt],ke=de[ye],Ve=Ae.start+Ae.count,Ie=Te(ke.start,E.width,4),ot=Te(Ae.start,E.width,4);ke.start<=Ve+1&&Ie===ot&&Te(ke.start+ke.count-1,E.width,4)===Ie?Ae.count=Math.max(Ae.count,ke.start+ke.count-Ae.start):(++nt,de[nt]=ke)}de.length=nt+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),Ce=r.getParameter(r.UNPACK_SKIP_PIXELS),Fe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Ae=de.length;ye<Ae;ye++){const ke=de[ye],Ve=Math.floor(ke.start/4),Ie=Math.ceil(ke.count/4),ot=Ve%E.width,H=Math.floor(Ve/E.width),ze=Ie,Oe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ot),r.pixelStorei(r.UNPACK_SKIP_ROWS,H),n.texSubImage2D(r.TEXTURE_2D,0,ot,H,ze,Oe,J,_e,E.data)}O.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,Fe)}}function ae(O,E,J){let _e=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=r.TEXTURE_3D);const Ee=Se(O,E),de=E.source;n.bindTexture(_e,O.__webglTexture,r.TEXTURE0+J);const nt=a.get(de);if(de.version!==nt.__version||Ee===!0){n.activeTexture(r.TEXTURE0+J);const oe=It.getPrimaries(It.workingColorSpace),Ce=E.colorSpace===Ms?null:It.getPrimaries(E.colorSpace),Fe=E.colorSpace===Ms||oe===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ye=A(E.image,!1,o.maxTextureSize);ye=tt(E,ye);const Ae=c.convert(E.format,E.colorSpace),ke=c.convert(E.type);let Ve=U(E.internalFormat,Ae,ke,E.colorSpace,E.isVideoTexture);ie(_e,E);let Ie;const ot=E.mipmaps,H=E.isVideoTexture!==!0,ze=nt.__version===void 0||Ee===!0,Oe=de.dataReady,De=j(E,ye);if(E.isDepthTexture)Ve=I(E.format===kl,E.type),ze&&(H?n.texStorage2D(r.TEXTURE_2D,1,Ve,ye.width,ye.height):n.texImage2D(r.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ae,ke,null));else if(E.isDataTexture)if(ot.length>0){H&&ze&&n.texStorage2D(r.TEXTURE_2D,De,Ve,ot[0].width,ot[0].height);for(let Re=0,ve=ot.length;Re<ve;Re++)Ie=ot[Re],H?Oe&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):n.texImage2D(r.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Ae,ke,Ie.data);E.generateMipmaps=!1}else H?(ze&&n.texStorage2D(r.TEXTURE_2D,De,Ve,ye.width,ye.height),Oe&&Le(E,ye,Ae,ke)):n.texImage2D(r.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Ae,ke,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ve,ot[0].width,ot[0].height,ye.depth);for(let Re=0,ve=ot.length;Re<ve;Re++)if(Ie=ot[Re],E.format!==qi)if(Ae!==null)if(H){if(Oe)if(E.layerUpdates.size>0){const je=Uv(Ie.width,Ie.height,E.format,E.type);for(const st of E.layerUpdates){const Vt=Ie.data.subarray(st*je/Ie.data.BYTES_PER_ELEMENT,(st+1)*je/Ie.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,st,Ie.width,Ie.height,1,Ae,Vt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,ye.depth,Ae,Ie.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Re,Ve,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Oe&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,ye.depth,Ae,ke,Ie.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Re,Ve,Ie.width,Ie.height,ye.depth,0,Ae,ke,Ie.data)}else{H&&ze&&n.texStorage2D(r.TEXTURE_2D,De,Ve,ot[0].width,ot[0].height);for(let Re=0,ve=ot.length;Re<ve;Re++)Ie=ot[Re],E.format!==qi?Ae!==null?H?Oe&&n.compressedTexSubImage2D(r.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ae,Ie.data):n.compressedTexImage2D(r.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Ie.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Oe&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ae,ke,Ie.data):n.texImage2D(r.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Ae,ke,Ie.data)}else if(E.isDataArrayTexture)if(H){if(ze&&n.texStorage3D(r.TEXTURE_2D_ARRAY,De,Ve,ye.width,ye.height,ye.depth),Oe)if(E.layerUpdates.size>0){const Re=Uv(ye.width,ye.height,E.format,E.type);for(const ve of E.layerUpdates){const je=ye.data.subarray(ve*Re/ye.data.BYTES_PER_ELEMENT,(ve+1)*Re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ve,ye.width,ye.height,1,Ae,ke,je)}E.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ae,ke,ye.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,Ae,ke,ye.data);else if(E.isData3DTexture)H?(ze&&n.texStorage3D(r.TEXTURE_3D,De,Ve,ye.width,ye.height,ye.depth),Oe&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ae,ke,ye.data)):n.texImage3D(r.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,Ae,ke,ye.data);else if(E.isFramebufferTexture){if(ze)if(H)n.texStorage2D(r.TEXTURE_2D,De,Ve,ye.width,ye.height);else{let Re=ye.width,ve=ye.height;for(let je=0;je<De;je++)n.texImage2D(r.TEXTURE_2D,je,Ve,Re,ve,0,Ae,ke,null),Re>>=1,ve>>=1}}else if(ot.length>0){if(H&&ze){const Re=lt(ot[0]);n.texStorage2D(r.TEXTURE_2D,De,Ve,Re.width,Re.height)}for(let Re=0,ve=ot.length;Re<ve;Re++)Ie=ot[Re],H?Oe&&n.texSubImage2D(r.TEXTURE_2D,Re,0,0,Ae,ke,Ie):n.texImage2D(r.TEXTURE_2D,Re,Ve,Ae,ke,Ie);E.generateMipmaps=!1}else if(H){if(ze){const Re=lt(ye);n.texStorage2D(r.TEXTURE_2D,De,Ve,Re.width,Re.height)}Oe&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ae,ke,ye)}else n.texImage2D(r.TEXTURE_2D,0,Ve,Ae,ke,ye);S(E)&&v(_e),nt.__version=de.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ue(O,E,J){if(E.image.length!==6)return;const _e=Se(O,E),Ee=E.source;n.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+J);const de=a.get(Ee);if(Ee.version!==de.__version||_e===!0){n.activeTexture(r.TEXTURE0+J);const nt=It.getPrimaries(It.workingColorSpace),oe=E.colorSpace===Ms?null:It.getPrimaries(E.colorSpace),Ce=E.colorSpace===Ms||nt===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Ae=[];for(let ve=0;ve<6;ve++)!Fe&&!ye?Ae[ve]=A(E.image[ve],!0,o.maxCubemapSize):Ae[ve]=ye?E.image[ve].image:E.image[ve],Ae[ve]=tt(E,Ae[ve]);const ke=Ae[0],Ve=c.convert(E.format,E.colorSpace),Ie=c.convert(E.type),ot=U(E.internalFormat,Ve,Ie,E.colorSpace),H=E.isVideoTexture!==!0,ze=de.__version===void 0||_e===!0,Oe=Ee.dataReady;let De=j(E,ke);ie(r.TEXTURE_CUBE_MAP,E);let Re;if(Fe){H&&ze&&n.texStorage2D(r.TEXTURE_CUBE_MAP,De,ot,ke.width,ke.height);for(let ve=0;ve<6;ve++){Re=Ae[ve].mipmaps;for(let je=0;je<Re.length;je++){const st=Re[je];E.format!==qi?Ve!==null?H?Oe&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,st.width,st.height,Ve,st.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,ot,st.width,st.height,0,st.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Oe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,0,0,st.width,st.height,Ve,Ie,st.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je,ot,st.width,st.height,0,Ve,Ie,st.data)}}}else{if(Re=E.mipmaps,H&&ze){Re.length>0&&De++;const ve=lt(Ae[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,De,ot,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(ye){H?Oe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ae[ve].width,Ae[ve].height,Ve,Ie,Ae[ve].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Ae[ve].width,Ae[ve].height,0,Ve,Ie,Ae[ve].data);for(let je=0;je<Re.length;je++){const Vt=Re[je].image[ve].image;H?Oe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Vt.width,Vt.height,Ve,Ie,Vt.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,ot,Vt.width,Vt.height,0,Ve,Ie,Vt.data)}}else{H?Oe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ve,Ie,Ae[ve]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ot,Ve,Ie,Ae[ve]);for(let je=0;je<Re.length;je++){const st=Re[je];H?Oe&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,0,0,Ve,Ie,st.image[ve]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ve,je+1,ot,Ve,Ie,st.image[ve])}}}S(E)&&v(r.TEXTURE_CUBE_MAP),de.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Ne(O,E,J,_e,Ee,de){const nt=c.convert(J.format,J.colorSpace),oe=c.convert(J.type),Ce=U(J.internalFormat,nt,oe,J.colorSpace),Fe=a.get(E),ye=a.get(J);if(ye.__renderTarget=E,!Fe.__hasExternalTextures){const Ae=Math.max(1,E.width>>de),ke=Math.max(1,E.height>>de);Ee===r.TEXTURE_3D||Ee===r.TEXTURE_2D_ARRAY?n.texImage3D(Ee,de,Ce,Ae,ke,E.depth,0,nt,oe,null):n.texImage2D(Ee,de,Ce,Ae,ke,0,nt,oe,null)}n.bindFramebuffer(r.FRAMEBUFFER,O),We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_e,Ee,ye.__webglTexture,0,Nt(E)):(Ee===r.TEXTURE_2D||Ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_e,Ee,ye.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(O,E,J){if(r.bindRenderbuffer(r.RENDERBUFFER,O),E.depthBuffer){const _e=E.depthTexture,Ee=_e&&_e.isDepthTexture?_e.type:null,de=I(E.stencilBuffer,Ee),nt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=Nt(E);We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,de,E.width,E.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,O)}else{const _e=E.textures;for(let Ee=0;Ee<_e.length;Ee++){const de=_e[Ee],nt=c.convert(de.format,de.colorSpace),oe=c.convert(de.type),Ce=U(de.internalFormat,nt,oe,de.colorSpace),Fe=Nt(E);J&&We(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Fe,Ce,E.width,E.height):We(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Fe,Ce,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Ce,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qe(O,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=a.get(E.depthTexture);_e.__renderTarget=E,(!_e.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),K(E.depthTexture,0);const Ee=_e.__webglTexture,de=Nt(E);if(E.depthTexture.format===jl)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ee,0);else if(E.depthTexture.format===kl)We(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ee,0);else throw new Error("Unknown depthTexture format")}function ut(O){const E=a.get(O),J=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const _e=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Ee=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Ee)};_e.addEventListener("dispose",Ee),E.__depthDisposeCallback=Ee}E.__boundDepthTexture=_e}if(O.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const _e=O.texture.mipmaps;_e&&_e.length>0?Qe(E.__webglFramebuffer[0],O):Qe(E.__webglFramebuffer,O)}else if(J){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=r.createRenderbuffer(),Xe(E.__webglDepthbuffer[_e],O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[_e];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}else{const _e=O.texture.mipmaps;if(_e&&_e.length>0?n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Xe(E.__webglDepthbuffer,O,!1);else{const Ee=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,de)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function on(O,E,J){const _e=a.get(O);E!==void 0&&Ne(_e.__webglFramebuffer,O,O.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&ut(O)}function mt(O){const E=O.texture,J=a.get(O),_e=a.get(E);O.addEventListener("dispose",z);const Ee=O.textures,de=O.isWebGLCubeRenderTarget===!0,nt=Ee.length>1;if(nt||(_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture()),_e.__version=E.version,u.memory.textures++),de){J.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[oe]=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)J.__webglFramebuffer[oe][Ce]=r.createFramebuffer()}else J.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)J.__webglFramebuffer[oe]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(nt)for(let oe=0,Ce=Ee.length;oe<Ce;oe++){const Fe=a.get(Ee[oe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=r.createTexture(),u.memory.textures++)}if(O.samples>0&&We(O)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let oe=0;oe<Ee.length;oe++){const Ce=Ee[oe];J.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[oe]);const Fe=c.convert(Ce.format,Ce.colorSpace),ye=c.convert(Ce.type),Ae=U(Ce.internalFormat,Fe,ye,Ce.colorSpace,O.isXRRenderTarget===!0),ke=Nt(O);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,Ae,O.width,O.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,J.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),O.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(J.__webglDepthRenderbuffer,O,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,_e.__webglTexture),ie(r.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)Ne(J.__webglFramebuffer[oe][Ce],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ce);else Ne(J.__webglFramebuffer[oe],O,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);S(E)&&v(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(nt){for(let oe=0,Ce=Ee.length;oe<Ce;oe++){const Fe=Ee[oe],ye=a.get(Fe);let Ae=r.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ye.__webglTexture),ie(Ae,Fe),Ne(J.__webglFramebuffer,O,Fe,r.COLOR_ATTACHMENT0+oe,Ae,0),S(Fe)&&v(Ae)}n.unbindTexture()}else{let oe=r.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(oe=O.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(oe,_e.__webglTexture),ie(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)Ne(J.__webglFramebuffer[Ce],O,E,r.COLOR_ATTACHMENT0,oe,Ce);else Ne(J.__webglFramebuffer,O,E,r.COLOR_ATTACHMENT0,oe,0);S(E)&&v(oe),n.unbindTexture()}O.depthBuffer&&ut(O)}function Ut(O){const E=O.textures;for(let J=0,_e=E.length;J<_e;J++){const Ee=E[J];if(S(Ee)){const de=L(O),nt=a.get(Ee).__webglTexture;n.bindTexture(de,nt),v(de),n.unbindTexture()}}}const B=[],pt=[];function _t(O){if(O.samples>0){if(We(O)===!1){const E=O.textures,J=O.width,_e=O.height;let Ee=r.COLOR_BUFFER_BIT;const de=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=a.get(O),oe=E.length>1;if(oe)for(let Fe=0;Fe<E.length;Fe++)n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,nt.__webglMultisampledFramebuffer);const Ce=O.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ee|=r.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ee|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Fe]);const ye=a.get(E[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ye,0)}r.blitFramebuffer(0,0,J,_e,0,0,J,_e,Ee,r.NEAREST),m===!0&&(B.length=0,pt.length=0,B.push(r.COLOR_ATTACHMENT0+Fe),O.depthBuffer&&O.resolveDepthBuffer===!1&&(B.push(de),pt.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,pt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Fe=0;Fe<E.length;Fe++){n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,nt.__webglColorRenderbuffer[Fe]);const ye=a.get(E[Fe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ye,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,nt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Nt(O){return Math.min(o.maxSamples,O.samples)}function We(O){const E=a.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function jt(O){const E=u.render.frame;g.get(O)!==E&&(g.set(O,E),O.update())}function tt(O,E){const J=O.colorSpace,_e=O.format,Ee=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||J!==So&&J!==Ms&&(It.getTransfer(J)===Zt?(_e!==qi||Ee!==Va)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):hn("WebGLTextures: Unsupported texture color space:",J)),E}function lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(p.width=O.naturalWidth||O.width,p.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(p.width=O.displayWidth,p.height=O.displayHeight):(p.width=O.width,p.height=O.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ne,this.setTexture2D=K,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=on,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=We}function cR(r,e){function n(a,o=Ms){let c;const u=It.getTransfer(o);if(a===Va)return r.UNSIGNED_BYTE;if(a===Ip)return r.UNSIGNED_SHORT_4_4_4_4;if(a===Fp)return r.UNSIGNED_SHORT_5_5_5_1;if(a===C2)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===D2)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===R2)return r.BYTE;if(a===w2)return r.SHORT;if(a===Gl)return r.UNSIGNED_SHORT;if(a===zp)return r.INT;if(a===fr)return r.UNSIGNED_INT;if(a===Ia)return r.FLOAT;if(a===Co)return r.HALF_FLOAT;if(a===O2)return r.ALPHA;if(a===U2)return r.RGB;if(a===qi)return r.RGBA;if(a===jl)return r.DEPTH_COMPONENT;if(a===kl)return r.DEPTH_STENCIL;if(a===L2)return r.RED;if(a===Bp)return r.RED_INTEGER;if(a===Hp)return r.RG;if(a===Gp)return r.RG_INTEGER;if(a===Vp)return r.RGBA_INTEGER;if(a===Fu||a===Bu||a===Hu||a===Gu)if(u===Zt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Bu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Gu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===I0||a===F0||a===B0||a===H0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===I0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===F0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===B0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===H0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===G0||a===V0||a===j0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===G0||a===V0)return u===Zt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===j0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===k0||a===X0||a===W0||a===q0||a===Y0||a===$0||a===Z0||a===K0||a===Q0||a===J0||a===ep||a===tp||a===np||a===ip)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===k0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===X0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===W0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===q0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Y0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===$0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Z0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===K0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Q0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===J0)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ep)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===tp)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===np)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ip)return u===Zt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ap||a===sp||a===rp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ap)return u===Zt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===rp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===op||a===lp||a===cp||a===up)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===op)return c.COMPRESSED_RED_RGTC1_EXT;if(a===lp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===up)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Vl?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const uR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fR=`
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

}`;class dR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const a=new k2(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,a=new ka({vertexShader:uR,fragmentShader:fR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mi(new aa(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hR extends Do{constructor(e,n){super();const a=this;let o=null,c=1,u=null,d="local-floor",m=1,p=null,g=null,_=null,x=null,y=null,M=null;const A=typeof XRWebGLBinding<"u",S=new dR,v={},L=n.getContextAttributes();let U=null,I=null;const j=[],N=[],z=new Wt;let Q=null;const C=new Ii;C.viewport=new _n;const w=new Ii;w.viewport=new _n;const G=[C,w],ne=new O3;let fe=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=j[ae];return ue===void 0&&(ue=new a0,j[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=j[ae];return ue===void 0&&(ue=new a0,j[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=j[ae];return ue===void 0&&(ue=new a0,j[ae]=ue),ue.getHandSpace()};function K(ae){const ue=N.indexOf(ae.inputSource);if(ue===-1)return;const Ne=j[ue];Ne!==void 0&&(Ne.update(ae.inputSource,ae.frame,p||u),Ne.dispatchEvent({type:ae.type,data:ae.inputSource}))}function P(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",P),o.removeEventListener("inputsourceschange",q);for(let ae=0;ae<j.length;ae++){const ue=N[ae];ue!==null&&(N[ae]=null,j[ae].disconnect(ue))}fe=null,ge=null,S.reset();for(const ae in v)delete v[ae];e.setRenderTarget(U),y=null,x=null,_=null,o=null,I=null,Le.stop(),a.isPresenting=!1,e.setPixelRatio(Q),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,a.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,a.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",P),o.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await n.makeXRCompatible(),Q=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Xe=null,Qe=null;L.depth&&(Qe=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ne=L.stencil?kl:jl,Xe=L.stencil?Vl:fr);const ut={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:c};_=this.getBinding(),x=_.createProjectionLayer(ut),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new dr(x.textureWidth,x.textureHeight,{format:qi,type:Va,depthTexture:new j2(x.textureWidth,x.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ne={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(o,n,Ne),o.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new dr(y.framebufferWidth,y.framebufferHeight,{format:qi,type:Va,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(ae){for(let ue=0;ue<ae.removed.length;ue++){const Ne=ae.removed[ue],Xe=N.indexOf(Ne);Xe>=0&&(N[Xe]=null,j[Xe].disconnect(Ne))}for(let ue=0;ue<ae.added.length;ue++){const Ne=ae.added[ue];let Xe=N.indexOf(Ne);if(Xe===-1){for(let ut=0;ut<j.length;ut++)if(ut>=N.length){N.push(Ne),Xe=ut;break}else if(N[ut]===null){N[ut]=Ne,Xe=ut;break}if(Xe===-1)break}const Qe=j[Xe];Qe&&Qe.connect(Ne)}}const Y=new le,he=new le;function pe(ae,ue,Ne){Y.setFromMatrixPosition(ue.matrixWorld),he.setFromMatrixPosition(Ne.matrixWorld);const Xe=Y.distanceTo(he),Qe=ue.projectionMatrix.elements,ut=Ne.projectionMatrix.elements,on=Qe[14]/(Qe[10]-1),mt=Qe[14]/(Qe[10]+1),Ut=(Qe[9]+1)/Qe[5],B=(Qe[9]-1)/Qe[5],pt=(Qe[8]-1)/Qe[0],_t=(ut[8]+1)/ut[0],Nt=on*pt,We=on*_t,jt=Xe/(-pt+_t),tt=jt*-pt;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(tt),ae.translateZ(jt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const lt=on+jt,O=mt+jt,E=Nt-tt,J=We+(Xe-tt),_e=Ut*mt/O*lt,Ee=B*mt/O*lt;ae.projectionMatrix.makePerspective(E,J,_e,Ee,lt,O),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function D(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ue=ae.near,Ne=ae.far;S.texture!==null&&(S.depthNear>0&&(ue=S.depthNear),S.depthFar>0&&(Ne=S.depthFar)),ne.near=w.near=C.near=ue,ne.far=w.far=C.far=Ne,(fe!==ne.near||ge!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),fe=ne.near,ge=ne.far),ne.layers.mask=ae.layers.mask|6,C.layers.mask=ne.layers.mask&3,w.layers.mask=ne.layers.mask&5;const Xe=ae.parent,Qe=ne.cameras;D(ne,Xe);for(let ut=0;ut<Qe.length;ut++)D(Qe[ut],Xe);Qe.length===2?pe(ne,C,w):ne.projectionMatrix.copy(C.projectionMatrix),ie(ae,ne,Xe)};function ie(ae,ue,Ne){Ne===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(Ne.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=fp*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(ae){m=ae,x!==null&&(x.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ne)},this.getCameraTexture=function(ae){return v[ae]};let Se=null;function Te(ae,ue){if(g=ue.getViewerPose(p||u),M=ue,g!==null){const Ne=g.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Xe=!1;Ne.length!==ne.cameras.length&&(ne.cameras.length=0,Xe=!0);for(let mt=0;mt<Ne.length;mt++){const Ut=Ne[mt];let B=null;if(y!==null)B=y.getViewport(Ut);else{const _t=_.getViewSubImage(x,Ut);B=_t.viewport,mt===0&&(e.setRenderTargetTextures(I,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(I))}let pt=G[mt];pt===void 0&&(pt=new Ii,pt.layers.enable(mt),pt.viewport=new _n,G[mt]=pt),pt.matrix.fromArray(Ut.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Ut.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(B.x,B.y,B.width,B.height),mt===0&&(ne.matrix.copy(pt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Xe===!0&&ne.cameras.push(pt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=a.getBinding();const mt=_.getDepthInformation(Ne[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,o.renderState)}if(Qe&&Qe.includes("camera-access")&&A){e.state.unbindTexture(),_=a.getBinding();for(let mt=0;mt<Ne.length;mt++){const Ut=Ne[mt].camera;if(Ut){let B=v[Ut];B||(B=new k2,v[Ut]=B);const pt=_.getCameraImage(Ut);B.sourceTexture=pt}}}}for(let Ne=0;Ne<j.length;Ne++){const Xe=N[Ne],Qe=j[Ne];Xe!==null&&Qe!==void 0&&Qe.update(Xe,ue,p||u)}Se&&Se(ae,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Le=new X2;Le.setAnimationLoop(Te),this.setAnimationLoop=function(ae){Se=ae},this.dispose=function(){}}}const Js=new ja,pR=new pn;function mR(r,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function a(S,v){v.color.getRGB(S.fogColor.value,H2(r)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,U,I){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(S,v):v.isMeshToonMaterial?(c(S,v),_(S,v)):v.isMeshPhongMaterial?(c(S,v),g(S,v)):v.isMeshStandardMaterial?(c(S,v),x(S,v),v.isMeshPhysicalMaterial&&y(S,v,I)):v.isMeshMatcapMaterial?(c(S,v),M(S,v)):v.isMeshDepthMaterial?c(S,v):v.isMeshDistanceMaterial?(c(S,v),A(S,v)):v.isMeshNormalMaterial?c(S,v):v.isLineBasicMaterial?(u(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?m(S,v,L,U):v.isSpriteMaterial?p(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===ci&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===ci&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),U=L.envMap,I=L.envMapRotation;U&&(S.envMap.value=U,Js.copy(I),Js.x*=-1,Js.y*=-1,Js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),S.envMapRotation.value.setFromMatrix4(pR.makeRotationFromEuler(Js)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function u(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function m(S,v,L,U){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=U*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function p(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function x(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function y(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===ci&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function gR(r,e,n,a){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,U){const I=U.program;a.uniformBlockBinding(L,I)}function p(L,U){let I=o[L.id];I===void 0&&(M(L),I=g(L),o[L.id]=I,L.addEventListener("dispose",S));const j=U.program;a.updateUBOMapping(L,j);const N=e.render.frame;c[L.id]!==N&&(x(L),c[L.id]=N)}function g(L){const U=_();L.__bindingPointIndex=U;const I=r.createBuffer(),j=L.__size,N=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,j,N),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,I),I}function _(){for(let L=0;L<d;L++)if(u.indexOf(L)===-1)return u.push(L),L;return hn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const U=o[L.id],I=L.uniforms,j=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let N=0,z=I.length;N<z;N++){const Q=Array.isArray(I[N])?I[N]:[I[N]];for(let C=0,w=Q.length;C<w;C++){const G=Q[C];if(y(G,N,C,j)===!0){const ne=G.__offset,fe=Array.isArray(G.value)?G.value:[G.value];let ge=0;for(let K=0;K<fe.length;K++){const P=fe[K],q=A(P);typeof P=="number"||typeof P=="boolean"?(G.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,ne+ge,G.__data)):P.isMatrix3?(G.__data[0]=P.elements[0],G.__data[1]=P.elements[1],G.__data[2]=P.elements[2],G.__data[3]=0,G.__data[4]=P.elements[3],G.__data[5]=P.elements[4],G.__data[6]=P.elements[5],G.__data[7]=0,G.__data[8]=P.elements[6],G.__data[9]=P.elements[7],G.__data[10]=P.elements[8],G.__data[11]=0):(P.toArray(G.__data,ge),ge+=q.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ne,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(L,U,I,j){const N=L.value,z=U+"_"+I;if(j[z]===void 0)return typeof N=="number"||typeof N=="boolean"?j[z]=N:j[z]=N.clone(),!0;{const Q=j[z];if(typeof N=="number"||typeof N=="boolean"){if(Q!==N)return j[z]=N,!0}else if(Q.equals(N)===!1)return Q.copy(N),!0}return!1}function M(L){const U=L.uniforms;let I=0;const j=16;for(let z=0,Q=U.length;z<Q;z++){const C=Array.isArray(U[z])?U[z]:[U[z]];for(let w=0,G=C.length;w<G;w++){const ne=C[w],fe=Array.isArray(ne.value)?ne.value:[ne.value];for(let ge=0,K=fe.length;ge<K;ge++){const P=fe[ge],q=A(P),Y=I%j,he=Y%q.boundary,pe=Y+he;I+=he,pe!==0&&j-pe<q.storage&&(I+=j-pe),ne.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=I,I+=q.storage}}}const N=I%j;return N>0&&(I+=j-N),L.__size=I,L.__cache={},this}function A(L){const U={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(U.boundary=4,U.storage=4):L.isVector2?(U.boundary=8,U.storage=8):L.isVector3||L.isColor?(U.boundary=16,U.storage=12):L.isVector4?(U.boundary=16,U.storage=16):L.isMatrix3?(U.boundary=48,U.storage=48):L.isMatrix4?(U.boundary=64,U.storage=64):L.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",L),U}function S(L){const U=L.target;U.removeEventListener("dispose",S);const I=u.indexOf(U.__bindingPointIndex);u.splice(I,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function v(){for(const L in o)r.deleteBuffer(o[L]);u=[],o={},c={}}return{bind:m,update:p,dispose:v}}const _R=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let Na=null;function xR(){return Na===null&&(Na=new _3(_R,32,32,Hp,Co),Na.minFilter=Yn,Na.magFilter=Yn,Na.wrapS=Ei,Na.wrapT=Ei,Na.generateMipmaps=!1,Na.needsUpdate=!0),Na}class vR{constructor(e={}){const{canvas:n=jS(),context:a=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=a.getContextAttributes().alpha}else y=u;const M=new Set([Vp,Gp,Bp]),A=new Set([Va,fr,Gl,Vl,Ip,Fp]),S=new Uint32Array(4),v=new Int32Array(4);let L=null,U=null;const I=[],j=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=As,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let z=!1;this._outputColorSpace=li;let Q=0,C=0,w=null,G=-1,ne=null;const fe=new _n,ge=new _n;let K=null;const P=new Gt(0);let q=0,Y=n.width,he=n.height,pe=1,D=null,ie=null;const Se=new _n(0,0,Y,he),Te=new _n(0,0,Y,he);let Le=!1;const ae=new qp;let ue=!1,Ne=!1;const Xe=new pn,Qe=new le,ut=new _n,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function Ut(){return w===null?pe:1}let B=a;function pt(T,k){return n.getContext(T,k)}try{const T={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Pp}`),n.addEventListener("webglcontextlost",Re,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",je,!1),B===null){const k="webgl2";if(B=pt(k,T),B===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let _t,Nt,We,jt,tt,lt,O,E,J,_e,Ee,de,nt,oe,Ce,Fe,ye,Ae,ke,Ve,Ie,ot,H,ze;function Oe(){_t=new RT(B),_t.init(),ot=new cR(B,_t),Nt=new xT(B,_t,e,ot),We=new oR(B,_t),Nt.reversedDepthBuffer&&x&&We.buffers.depth.setReversed(!0),jt=new DT(B),tt=new YA,lt=new lR(B,_t,We,tt,Nt,ot,jt),O=new bT(N),E=new AT(N),J=new N3(B),H=new gT(B,J),_e=new wT(B,J,jt,H),Ee=new UT(B,_e,J,jt),ke=new OT(B,Nt,lt),Fe=new vT(tt),de=new qA(N,O,E,_t,Nt,H,Fe),nt=new mR(N,tt),oe=new ZA,Ce=new nR(_t),Ae=new mT(N,O,E,We,Ee,y,m),ye=new sR(N,Ee,Nt),ze=new gR(B,jt,Nt,We),Ve=new _T(B,_t,jt),Ie=new CT(B,_t,jt),jt.programs=de.programs,N.capabilities=Nt,N.extensions=_t,N.properties=tt,N.renderLists=oe,N.shadowMap=ye,N.state=We,N.info=jt}Oe();const De=new hR(N,B);this.xr=De,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=_t.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=_t.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(T){T!==void 0&&(pe=T,this.setSize(Y,he,!1))},this.getSize=function(T){return T.set(Y,he)},this.setSize=function(T,k,Z=!0){if(De.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,he=k,n.width=Math.floor(T*pe),n.height=Math.floor(k*pe),Z===!0&&(n.style.width=T+"px",n.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Y*pe,he*pe).floor()},this.setDrawingBufferSize=function(T,k,Z){Y=T,he=k,pe=Z,n.width=Math.floor(T*Z),n.height=Math.floor(k*Z),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(fe)},this.getViewport=function(T){return T.copy(Se)},this.setViewport=function(T,k,Z,W){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,k,Z,W),We.viewport(fe.copy(Se).multiplyScalar(pe).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,k,Z,W){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,k,Z,W),We.scissor(ge.copy(Te).multiplyScalar(pe).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(T){We.setScissorTest(Le=T)},this.setOpaqueSort=function(T){D=T},this.setTransparentSort=function(T){ie=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Z=!0){let W=0;if(T){let X=!1;if(w!==null){const Me=w.texture.format;X=M.has(Me)}if(X){const Me=w.texture.type,we=A.has(Me),Ge=Ae.getClearColor(),Pe=Ae.getClearAlpha(),qe=Ge.r,Je=Ge.g,$e=Ge.b;we?(S[0]=qe,S[1]=Je,S[2]=$e,S[3]=Pe,B.clearBufferuiv(B.COLOR,0,S)):(v[0]=qe,v[1]=Je,v[2]=$e,v[3]=Pe,B.clearBufferiv(B.COLOR,0,v))}else W|=B.COLOR_BUFFER_BIT}k&&(W|=B.DEPTH_BUFFER_BIT),Z&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Re,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",je,!1),Ae.dispose(),oe.dispose(),Ce.dispose(),tt.dispose(),O.dispose(),E.dispose(),Ee.dispose(),H.dispose(),ze.dispose(),de.dispose(),De.dispose(),De.removeEventListener("sessionstart",Xa),De.removeEventListener("sessionend",mr),hi.stop()};function Re(T){T.preventDefault(),lv("WebGLRenderer: Context Lost."),z=!0}function ve(){lv("WebGLRenderer: Context Restored."),z=!1;const T=jt.autoReset,k=ye.enabled,Z=ye.autoUpdate,W=ye.needsUpdate,X=ye.type;Oe(),jt.autoReset=T,ye.enabled=k,ye.autoUpdate=Z,ye.needsUpdate=W,ye.type=X}function je(T){hn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const k=T.target;k.removeEventListener("dispose",st),Vt(k)}function Vt(T){Ct(T),tt.remove(T)}function Ct(T){const k=tt.get(T).programs;k!==void 0&&(k.forEach(function(Z){de.releaseProgram(Z)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Z,W,X,Me){k===null&&(k=on);const we=X.isMesh&&X.matrixWorld.determinant()<0,Ge=Uo(T,k,Z,W,X);We.setMaterial(W,we);let Pe=Z.index,qe=1;if(W.wireframe===!0){if(Pe=_e.getWireframeAttribute(Z),Pe===void 0)return;qe=2}const Je=Z.drawRange,$e=Z.attributes.position;let at=Je.start*qe,xt=(Je.start+Je.count)*qe;Me!==null&&(at=Math.max(at,Me.start*qe),xt=Math.min(xt,(Me.start+Me.count)*qe)),Pe!==null?(at=Math.max(at,0),xt=Math.min(xt,Pe.count)):$e!=null&&(at=Math.max(at,0),xt=Math.min(xt,$e.count));const vt=xt-at;if(vt<0||vt===1/0)return;H.setup(X,W,Ge,Z,Pe);let ft,Et=Ve;if(Pe!==null&&(ft=J.get(Pe),Et=Ie,Et.setIndex(ft)),X.isMesh)W.wireframe===!0?(We.setLineWidth(W.wireframeLinewidth*Ut()),Et.setMode(B.LINES)):Et.setMode(B.TRIANGLES);else if(X.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),We.setLineWidth(Be*Ut()),X.isLineSegments?Et.setMode(B.LINES):X.isLineLoop?Et.setMode(B.LINE_LOOP):Et.setMode(B.LINE_STRIP)}else X.isPoints?Et.setMode(B.POINTS):X.isSprite&&Et.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Et.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Be=X._multiDrawStarts,Bt=X._multiDrawCounts,bt=X._multiDrawCount,ln=Pe?J.get(Pe).bytesPerElement:1,Qi=tt.get(W).currentProgram.getUniforms();for(let Qt=0;Qt<bt;Qt++)Qi.setValue(B,"_gl_DrawID",Qt),Et.render(Be[Qt]/ln,Bt[Qt])}else if(X.isInstancedMesh)Et.renderInstances(at,vt,X.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,Be);Et.renderInstances(at,vt,Bt)}else Et.render(at,vt)};function Rn(T,k,Z){T.transparent===!0&&T.side===za&&T.forceSinglePass===!1?(T.side=ci,T.needsUpdate=!0,un(T,k,Z),T.side=Cs,T.needsUpdate=!0,un(T,k,Z),T.side=za):un(T,k,Z)}this.compile=function(T,k,Z=null){Z===null&&(Z=T),U=Ce.get(Z),U.init(k),j.push(U),Z.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(k.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),U.setupLights();const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Me=X.material;if(Me)if(Array.isArray(Me))for(let we=0;we<Me.length;we++){const Ge=Me[we];Rn(Ge,Z,X),W.add(Ge)}else Rn(Me,Z,X),W.add(Me)}),U=j.pop(),W},this.compileAsync=function(T,k,Z=null){const W=this.compile(T,k,Z);return new Promise(X=>{function Me(){if(W.forEach(function(we){tt.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){X(T);return}setTimeout(Me,10)}_t.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let ei=null;function pr(T){ei&&ei(T)}function Xa(){hi.stop()}function mr(){hi.start()}const hi=new X2;hi.setAnimationLoop(pr),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){ei=T,De.setAnimationLoop(T),T===null?hi.stop():hi.start()},De.addEventListener("sessionstart",Xa),De.addEventListener("sessionend",mr),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){hn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(k),k=De.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,k,w),U=Ce.get(T,j.length),U.init(k),j.push(U),Xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ae.setFromProjectionMatrix(Xe,ra,k.reversedDepth),Ne=this.localClippingEnabled,ue=Fe.init(this.clippingPlanes,Ne),L=oe.get(T,I.length),L.init(),I.push(L),De.enabled===!0&&De.isPresenting===!0){const Me=N.xr.getDepthSensingMesh();Me!==null&&la(Me,k,-1/0,N.sortObjects)}la(T,k,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(D,ie),mt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,mt&&Ae.addToRenderList(L,T),this.info.render.frame++,ue===!0&&Fe.beginShadows();const Z=U.state.shadowsArray;ye.render(Z,T,k),ue===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=L.opaque,X=L.transmissive;if(U.setupLights(),k.isArrayCamera){const Me=k.cameras;if(X.length>0)for(let we=0,Ge=Me.length;we<Ge;we++){const Pe=Me[we];Ki(W,X,T,Pe)}mt&&Ae.render(T);for(let we=0,Ge=Me.length;we<Ge;we++){const Pe=Me[we];Wa(L,T,Pe,Pe.viewport)}}else X.length>0&&Ki(W,X,T,k),mt&&Ae.render(T),Wa(L,T,k);w!==null&&C===0&&(lt.updateMultisampleRenderTarget(w),lt.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(N,T,k),H.resetDefaultState(),G=-1,ne=null,j.pop(),j.length>0?(U=j[j.length-1],ue===!0&&Fe.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,I.pop(),I.length>0?L=I[I.length-1]:L=null};function la(T,k,Z,W){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ae.intersectsSprite(T)){W&&ut.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Xe);const we=Ee.update(T),Ge=T.material;Ge.visible&&L.push(T,we,Ge,Z,ut.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ae.intersectsObject(T))){const we=Ee.update(T),Ge=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ut.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ut.copy(we.boundingSphere.center)),ut.applyMatrix4(T.matrixWorld).applyMatrix4(Xe)),Array.isArray(Ge)){const Pe=we.groups;for(let qe=0,Je=Pe.length;qe<Je;qe++){const $e=Pe[qe],at=Ge[$e.materialIndex];at&&at.visible&&L.push(T,we,at,Z,ut.z,$e)}}else Ge.visible&&L.push(T,we,Ge,Z,ut.z,null)}}const Me=T.children;for(let we=0,Ge=Me.length;we<Ge;we++)la(Me[we],k,Z,W)}function Wa(T,k,Z,W){const{opaque:X,transmissive:Me,transparent:we}=T;U.setupLightsView(Z),ue===!0&&Fe.setGlobalState(N.clippingPlanes,Z),W&&We.viewport(fe.copy(W)),X.length>0&&yn(X,k,Z),Me.length>0&&yn(Me,k,Z),we.length>0&&yn(we,k,Z),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function Ki(T,k,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[W.id]===void 0&&(U.state.transmissionRenderTarget[W.id]=new dr(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Co:Va,minFilter:ar,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const Me=U.state.transmissionRenderTarget[W.id],we=W.viewport||fe;Me.setSize(we.z*N.transmissionResolutionScale,we.w*N.transmissionResolutionScale);const Ge=N.getRenderTarget(),Pe=N.getActiveCubeFace(),qe=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(P),q=N.getClearAlpha(),q<1&&N.setClearColor(16777215,.5),N.clear(),mt&&Ae.render(Z);const Je=N.toneMapping;N.toneMapping=As;const $e=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),U.setupLightsView(W),ue===!0&&Fe.setGlobalState(N.clippingPlanes,W),yn(T,Z,W),lt.updateMultisampleRenderTarget(Me),lt.updateRenderTargetMipmap(Me),_t.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let xt=0,vt=k.length;xt<vt;xt++){const ft=k[xt],{object:Et,geometry:Be,material:Bt,group:bt}=ft;if(Bt.side===za&&Et.layers.test(W.layers)){const ln=Bt.side;Bt.side=ci,Bt.needsUpdate=!0,cn(Et,Z,W,Be,Bt,bt),Bt.side=ln,Bt.needsUpdate=!0,at=!0}}at===!0&&(lt.updateMultisampleRenderTarget(Me),lt.updateRenderTargetMipmap(Me))}N.setRenderTarget(Ge,Pe,qe),N.setClearColor(P,q),$e!==void 0&&(W.viewport=$e),N.toneMapping=Je}function yn(T,k,Z){const W=k.isScene===!0?k.overrideMaterial:null;for(let X=0,Me=T.length;X<Me;X++){const we=T[X],{object:Ge,geometry:Pe,group:qe}=we;let Je=we.material;Je.allowOverride===!0&&W!==null&&(Je=W),Ge.layers.test(Z.layers)&&cn(Ge,k,Z,Pe,Je,qe)}}function cn(T,k,Z,W,X,Me){T.onBeforeRender(N,k,Z,W,X,Me),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(N,k,Z,W,T,Me),X.transparent===!0&&X.side===za&&X.forceSinglePass===!1?(X.side=ci,X.needsUpdate=!0,N.renderBufferDirect(Z,k,W,X,T,Me),X.side=Cs,X.needsUpdate=!0,N.renderBufferDirect(Z,k,W,X,T,Me),X.side=za):N.renderBufferDirect(Z,k,W,X,T,Me),T.onAfterRender(N,k,Z,W,X,Me)}function un(T,k,Z){k.isScene!==!0&&(k=on);const W=tt.get(T),X=U.state.lights,Me=U.state.shadowsArray,we=X.state.version,Ge=de.getParameters(T,X.state,Me,k,Z),Pe=de.getProgramCacheKey(Ge);let qe=W.programs;W.environment=T.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(T.isMeshStandardMaterial?E:O).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",st),qe=new Map,W.programs=qe);let Je=qe.get(Pe);if(Je!==void 0){if(W.currentProgram===Je&&W.lightsStateVersion===we)return ca(T,Ge),Je}else Ge.uniforms=de.getUniforms(T),T.onBeforeCompile(Ge,N),Je=de.acquireProgram(Ge,Pe),qe.set(Pe,Je),W.uniforms=Ge.uniforms;const $e=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($e.clippingPlanes=Fe.uniform),ca(T,Ge),W.needsLights=Ds(T),W.lightsStateVersion=we,W.needsLights&&($e.ambientLightColor.value=X.state.ambient,$e.lightProbe.value=X.state.probe,$e.directionalLights.value=X.state.directional,$e.directionalLightShadows.value=X.state.directionalShadow,$e.spotLights.value=X.state.spot,$e.spotLightShadows.value=X.state.spotShadow,$e.rectAreaLights.value=X.state.rectArea,$e.ltc_1.value=X.state.rectAreaLTC1,$e.ltc_2.value=X.state.rectAreaLTC2,$e.pointLights.value=X.state.point,$e.pointLightShadows.value=X.state.pointShadow,$e.hemisphereLights.value=X.state.hemi,$e.directionalShadowMap.value=X.state.directionalShadowMap,$e.directionalShadowMatrix.value=X.state.directionalShadowMatrix,$e.spotShadowMap.value=X.state.spotShadowMap,$e.spotLightMatrix.value=X.state.spotLightMatrix,$e.spotLightMap.value=X.state.spotLightMap,$e.pointShadowMap.value=X.state.pointShadowMap,$e.pointShadowMatrix.value=X.state.pointShadowMatrix),W.currentProgram=Je,W.uniformsList=null,Je}function Ri(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Vu.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ca(T,k){const Z=tt.get(T);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Uo(T,k,Z,W,X){k.isScene!==!0&&(k=on),lt.resetTextureUnits();const Me=k.fog,we=W.isMeshStandardMaterial?k.environment:null,Ge=w===null?N.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:So,Pe=(W.isMeshStandardMaterial?E:O).get(W.envMap||we),qe=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Je=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),$e=!!Z.morphAttributes.position,at=!!Z.morphAttributes.normal,xt=!!Z.morphAttributes.color;let vt=As;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(vt=N.toneMapping);const ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Et=ft!==void 0?ft.length:0,Be=tt.get(W),Bt=U.state.lights;if(ue===!0&&(Ne===!0||T!==ne)){const zn=T===ne&&W.id===G;Fe.setState(W,T,zn)}let bt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Bt.state.version||Be.outputColorSpace!==Ge||X.isBatchedMesh&&Be.batching===!1||!X.isBatchedMesh&&Be.batching===!0||X.isBatchedMesh&&Be.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Be.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Be.instancing===!1||!X.isInstancedMesh&&Be.instancing===!0||X.isSkinnedMesh&&Be.skinning===!1||!X.isSkinnedMesh&&Be.skinning===!0||X.isInstancedMesh&&Be.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Be.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Be.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Be.instancingMorph===!1&&X.morphTexture!==null||Be.envMap!==Pe||W.fog===!0&&Be.fog!==Me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Fe.numPlanes||Be.numIntersection!==Fe.numIntersection)||Be.vertexAlphas!==qe||Be.vertexTangents!==Je||Be.morphTargets!==$e||Be.morphNormals!==at||Be.morphColors!==xt||Be.toneMapping!==vt||Be.morphTargetsCount!==Et)&&(bt=!0):(bt=!0,Be.__version=W.version);let ln=Be.currentProgram;bt===!0&&(ln=un(W,k,X));let Qi=!1,Qt=!1,ua=!1;const Jt=ln.getUniforms(),Pn=Be.uniforms;if(We.useProgram(ln.program)&&(Qi=!0,Qt=!0,ua=!0),W.id!==G&&(G=W.id,Qt=!0),Qi||ne!==T){We.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Jt.setValue(B,"projectionMatrix",T.projectionMatrix),Jt.setValue(B,"viewMatrix",T.matrixWorldInverse);const jn=Jt.map.cameraPosition;jn!==void 0&&jn.setValue(B,Qe.setFromMatrixPosition(T.matrixWorld)),Nt.logarithmicDepthBuffer&&Jt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Jt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),ne!==T&&(ne=T,Qt=!0,ua=!0)}if(X.isSkinnedMesh){Jt.setOptional(B,X,"bindMatrix"),Jt.setOptional(B,X,"bindMatrixInverse");const zn=X.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Jt.setValue(B,"boneTexture",zn.boneTexture,lt))}X.isBatchedMesh&&(Jt.setOptional(B,X,"batchingTexture"),Jt.setValue(B,"batchingTexture",X._matricesTexture,lt),Jt.setOptional(B,X,"batchingIdTexture"),Jt.setValue(B,"batchingIdTexture",X._indirectTexture,lt),Jt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Jt.setValue(B,"batchingColorTexture",X._colorsTexture,lt));const wn=Z.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ke.update(X,Z,ln),(Qt||Be.receiveShadow!==X.receiveShadow)&&(Be.receiveShadow=X.receiveShadow,Jt.setValue(B,"receiveShadow",X.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Pn.envMap.value=Pe,Pn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Pn.envMapIntensity.value=k.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=xR()),Qt&&(Jt.setValue(B,"toneMappingExposure",N.toneMappingExposure),Be.needsLights&&gr(Pn,ua),Me&&W.fog===!0&&nt.refreshFogUniforms(Pn,Me),nt.refreshMaterialUniforms(Pn,W,pe,he,U.state.transmissionRenderTarget[T.id]),Vu.upload(B,Ri(Be),Pn,lt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Vu.upload(B,Ri(Be),Pn,lt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Jt.setValue(B,"center",X.center),Jt.setValue(B,"modelViewMatrix",X.modelViewMatrix),Jt.setValue(B,"normalMatrix",X.normalMatrix),Jt.setValue(B,"modelMatrix",X.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zn=W.uniformsGroups;for(let jn=0,Ji=zn.length;jn<Ji;jn++){const fa=zn[jn];ze.update(fa,ln),ze.bind(fa,ln)}}return ln}function gr(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ds(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,k,Z){const W=tt.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),tt.get(T.texture).__webglTexture=k,tt.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const Z=tt.get(T);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const Ye=B.createFramebuffer();this.setRenderTarget=function(T,k=0,Z=0){w=T,Q=k,C=Z;let W=!0,X=null,Me=!1,we=!1;if(T){const Pe=tt.get(T);if(Pe.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(Pe.__webglFramebuffer===void 0)lt.setupRenderTarget(T);else if(Pe.__hasExternalTextures)lt.rebindTextures(T,tt.get(T.texture).__webglTexture,tt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(Pe.__boundDepthTexture!==$e){if($e!==null&&tt.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");lt.setupDepthRenderbuffer(T)}}const qe=T.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(we=!0);const Je=tt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[k])?X=Je[k][Z]:X=Je[k],Me=!0):T.samples>0&&lt.useMultisampledRTT(T)===!1?X=tt.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?X=Je[Z]:X=Je,fe.copy(T.viewport),ge.copy(T.scissor),K=T.scissorTest}else fe.copy(Se).multiplyScalar(pe).floor(),ge.copy(Te).multiplyScalar(pe).floor(),K=Le;if(Z!==0&&(X=Ye),We.bindFramebuffer(B.FRAMEBUFFER,X)&&W&&We.drawBuffers(T,X),We.viewport(fe),We.scissor(ge),We.setScissorTest(K),Me){const Pe=tt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pe.__webglTexture,Z)}else if(we){const Pe=k;for(let qe=0;qe<T.textures.length;qe++){const Je=tt.get(T.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Je.__webglTexture,Z,Pe)}}else if(T!==null&&Z!==0){const Pe=tt.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,Z)}G=-1},this.readRenderTargetPixels=function(T,k,Z,W,X,Me,we,Ge=0){if(!(T&&T.isWebGLRenderTarget)){hn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){We.bindFramebuffer(B.FRAMEBUFFER,Pe);try{const qe=T.textures[Ge],Je=qe.format,$e=qe.type;if(!Nt.textureFormatReadable(Je)){hn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable($e)){hn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-W&&Z>=0&&Z<=T.height-X&&(T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(k,Z,W,X,ot.convert(Je),ot.convert($e),Me))}finally{const qe=w!==null?tt.get(w).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,k,Z,W,X,Me,we,Ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=tt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe)if(k>=0&&k<=T.width-W&&Z>=0&&Z<=T.height-X){We.bindFramebuffer(B.FRAMEBUFFER,Pe);const qe=T.textures[Ge],Je=qe.format,$e=qe.type;if(!Nt.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),T.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ge),B.readPixels(k,Z,W,X,ot.convert(Je),ot.convert($e),0);const xt=w!==null?tt.get(w).__webglFramebuffer:null;We.bindFramebuffer(B.FRAMEBUFFER,xt);const vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await kS(B,vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,at),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(at),B.deleteSync(vt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Z=0){const W=Math.pow(2,-Z),X=Math.floor(T.image.width*W),Me=Math.floor(T.image.height*W),we=k!==null?k.x:0,Ge=k!==null?k.y:0;lt.setTexture2D(T,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,we,Ge,X,Me),We.unbindTexture()};const ct=B.createFramebuffer(),Ft=B.createFramebuffer();this.copyTextureToTexture=function(T,k,Z=null,W=null,X=0,Me=null){Me===null&&(X!==0?(Wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=X,X=0):Me=0);let we,Ge,Pe,qe,Je,$e,at,xt,vt;const ft=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(Z!==null)we=Z.max.x-Z.min.x,Ge=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,Je=Z.min.y,$e=Z.isBox3?Z.min.z:0;else{const wn=Math.pow(2,-X);we=Math.floor(ft.width*wn),Ge=Math.floor(ft.height*wn),T.isDataArrayTexture?Pe=ft.depth:T.isData3DTexture?Pe=Math.floor(ft.depth*wn):Pe=1,qe=0,Je=0,$e=0}W!==null?(at=W.x,xt=W.y,vt=W.z):(at=0,xt=0,vt=0);const Et=ot.convert(k.format),Be=ot.convert(k.type);let Bt;k.isData3DTexture?(lt.setTexture3D(k,0),Bt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(lt.setTexture2DArray(k,0),Bt=B.TEXTURE_2D_ARRAY):(lt.setTexture2D(k,0),Bt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const bt=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Qi=B.getParameter(B.UNPACK_SKIP_PIXELS),Qt=B.getParameter(B.UNPACK_SKIP_ROWS),ua=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$e);const Jt=T.isDataArrayTexture||T.isData3DTexture,Pn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const wn=tt.get(T),zn=tt.get(k),jn=tt.get(wn.__renderTarget),Ji=tt.get(zn.__renderTarget);We.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let fa=0;fa<Pe;fa++)Jt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(T).__webglTexture,X,$e+fa),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(k).__webglTexture,Me,vt+fa)),B.blitFramebuffer(qe,Je,we,Ge,at,xt,we,Ge,B.DEPTH_BUFFER_BIT,B.NEAREST);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||tt.has(T)){const wn=tt.get(T),zn=tt.get(k);We.bindFramebuffer(B.READ_FRAMEBUFFER,ct),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ft);for(let jn=0;jn<Pe;jn++)Jt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,wn.__webglTexture,X,$e+jn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,wn.__webglTexture,X),Pn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,zn.__webglTexture,Me,vt+jn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,zn.__webglTexture,Me),X!==0?B.blitFramebuffer(qe,Je,we,Ge,at,xt,we,Ge,B.COLOR_BUFFER_BIT,B.NEAREST):Pn?B.copyTexSubImage3D(Bt,Me,at,xt,vt+jn,qe,Je,we,Ge):B.copyTexSubImage2D(Bt,Me,at,xt,qe,Je,we,Ge);We.bindFramebuffer(B.READ_FRAMEBUFFER,null),We.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pn?T.isDataTexture||T.isData3DTexture?B.texSubImage3D(Bt,Me,at,xt,vt,we,Ge,Pe,Et,Be,ft.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Bt,Me,at,xt,vt,we,Ge,Pe,Et,ft.data):B.texSubImage3D(Bt,Me,at,xt,vt,we,Ge,Pe,Et,Be,ft):T.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Me,at,xt,we,Ge,Et,Be,ft.data):T.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Me,at,xt,ft.width,ft.height,Et,ft.data):B.texSubImage2D(B.TEXTURE_2D,Me,at,xt,we,Ge,Et,Be,ft);B.pixelStorei(B.UNPACK_ROW_LENGTH,bt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Qi),B.pixelStorei(B.UNPACK_SKIP_ROWS,Qt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ua),Me===0&&k.generateMipmaps&&B.generateMipmap(Bt),We.unbindTexture()},this.initRenderTarget=function(T){tt.get(T).__webglFramebuffer===void 0&&lt.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?lt.setTextureCube(T,0):T.isData3DTexture?lt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?lt.setTexture2DArray(T,0):lt.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){Q=0,C=0,w=null,We.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),n.unpackColorSpace=It._getUnpackColorSpace()}}const bR="/MarcoinSF/assets/2021-10-31-CDuc_qmG.JPG",yR=Object.freeze(Object.defineProperty({__proto__:null,default:bR},Symbol.toStringTag,{value:"Module"})),SR="/MarcoinSF/assets/2021-10-31-DcWNroCu.jpeg",MR=Object.freeze(Object.defineProperty({__proto__:null,default:SR},Symbol.toStringTag,{value:"Module"})),ER="/MarcoinSF/assets/2021-12-10-Cfb1W4aW.jpg",TR=Object.freeze(Object.defineProperty({__proto__:null,default:ER},Symbol.toStringTag,{value:"Module"})),AR="/MarcoinSF/assets/2022-05-13-ZW7768q6.JPG",RR=Object.freeze(Object.defineProperty({__proto__:null,default:AR},Symbol.toStringTag,{value:"Module"})),wR="/MarcoinSF/assets/2022-06-13-CxNIdfIC.jpeg",CR=Object.freeze(Object.defineProperty({__proto__:null,default:wR},Symbol.toStringTag,{value:"Module"})),DR="/MarcoinSF/assets/2022-07-06-2-todjBix1.jpeg",OR=Object.freeze(Object.defineProperty({__proto__:null,default:DR},Symbol.toStringTag,{value:"Module"})),UR="/MarcoinSF/assets/2022-08-14-DUbsbZ4q.JPG",LR=Object.freeze(Object.defineProperty({__proto__:null,default:UR},Symbol.toStringTag,{value:"Module"})),NR="/MarcoinSF/assets/2022-10-29%20Large-BwUDGQao.jpeg",PR=Object.freeze(Object.defineProperty({__proto__:null,default:NR},Symbol.toStringTag,{value:"Module"})),zR="/MarcoinSF/assets/2023-01-01-ZvfabK-5.jpeg",IR=Object.freeze(Object.defineProperty({__proto__:null,default:zR},Symbol.toStringTag,{value:"Module"})),FR="/MarcoinSF/assets/2023-03-01-aqF_3lvk.jpeg",BR=Object.freeze(Object.defineProperty({__proto__:null,default:FR},Symbol.toStringTag,{value:"Module"})),HR="/MarcoinSF/assets/2024-03-09-1-5r1AjpoY.jpeg",GR=Object.freeze(Object.defineProperty({__proto__:null,default:HR},Symbol.toStringTag,{value:"Module"})),VR="/MarcoinSF/assets/2024-03-09-D0kOqaW7.jpeg",jR=Object.freeze(Object.defineProperty({__proto__:null,default:VR},Symbol.toStringTag,{value:"Module"})),kR="/MarcoinSF/assets/2024-05-05-BOtxUIu1.jpeg",XR=Object.freeze(Object.defineProperty({__proto__:null,default:kR},Symbol.toStringTag,{value:"Module"})),WR="/MarcoinSF/assets/2024-05-14-KI90_q1g.jpeg",qR=Object.freeze(Object.defineProperty({__proto__:null,default:WR},Symbol.toStringTag,{value:"Module"})),YR="/MarcoinSF/assets/2024-07-21-DLIIzHuZ.mp4",$R=Object.freeze(Object.defineProperty({__proto__:null,default:YR},Symbol.toStringTag,{value:"Module"})),ZR="/MarcoinSF/assets/2024-07-28-BON0UAU4.mp4",KR=Object.freeze(Object.defineProperty({__proto__:null,default:ZR},Symbol.toStringTag,{value:"Module"})),QR="/MarcoinSF/assets/2024-07-31-mlItGP0c.jpeg",JR=Object.freeze(Object.defineProperty({__proto__:null,default:QR},Symbol.toStringTag,{value:"Module"})),ew="/MarcoinSF/assets/2024-08-10-1-CLHfImQR.mp4",tw=Object.freeze(Object.defineProperty({__proto__:null,default:ew},Symbol.toStringTag,{value:"Module"})),nw="/MarcoinSF/assets/2024-08-10-usYrqNu_.jpeg",iw=Object.freeze(Object.defineProperty({__proto__:null,default:nw},Symbol.toStringTag,{value:"Module"})),aw="/MarcoinSF/assets/2024-08-23-1-BMj95jfC.jpg",sw=Object.freeze(Object.defineProperty({__proto__:null,default:aw},Symbol.toStringTag,{value:"Module"})),rw="/MarcoinSF/assets/2024-08-23-3-DkddrKGM.jpg",ow=Object.freeze(Object.defineProperty({__proto__:null,default:rw},Symbol.toStringTag,{value:"Module"})),lw="/MarcoinSF/assets/2024-08-23-4-CNdgbWFz.jpg",cw=Object.freeze(Object.defineProperty({__proto__:null,default:lw},Symbol.toStringTag,{value:"Module"})),uw="/MarcoinSF/assets/2024-08-23-CzaGYrwc.jpg",fw=Object.freeze(Object.defineProperty({__proto__:null,default:uw},Symbol.toStringTag,{value:"Module"})),dw="/MarcoinSF/assets/2024-08-23-CplMc93Q.mp4",hw=Object.freeze(Object.defineProperty({__proto__:null,default:dw},Symbol.toStringTag,{value:"Module"})),pw="/MarcoinSF/assets/2024-08-25-cOKYphAI.mp4",mw=Object.freeze(Object.defineProperty({__proto__:null,default:pw},Symbol.toStringTag,{value:"Module"})),gw="/MarcoinSF/assets/2024-09-01-CP4RYK6Z.jpeg",_w=Object.freeze(Object.defineProperty({__proto__:null,default:gw},Symbol.toStringTag,{value:"Module"})),xw="/MarcoinSF/assets/2024-09-02-BIdH0tQs.jpeg",vw=Object.freeze(Object.defineProperty({__proto__:null,default:xw},Symbol.toStringTag,{value:"Module"})),bw="/MarcoinSF/assets/2024-09-08-DRZDdej9.jpeg",yw=Object.freeze(Object.defineProperty({__proto__:null,default:bw},Symbol.toStringTag,{value:"Module"})),Sw="/MarcoinSF/assets/2024-09-19-02-CRrM6iw-.JPG",Mw=Object.freeze(Object.defineProperty({__proto__:null,default:Sw},Symbol.toStringTag,{value:"Module"})),Ew="/MarcoinSF/assets/2024-09-19-03-98asKbHO.mp4",Tw=Object.freeze(Object.defineProperty({__proto__:null,default:Ew},Symbol.toStringTag,{value:"Module"})),Aw="/MarcoinSF/assets/2024-09-19-Yttg9DWC.jpg",Rw=Object.freeze(Object.defineProperty({__proto__:null,default:Aw},Symbol.toStringTag,{value:"Module"})),ww="/MarcoinSF/assets/2024-09-25-BXZ-JE61.jpeg",Cw=Object.freeze(Object.defineProperty({__proto__:null,default:ww},Symbol.toStringTag,{value:"Module"})),Dw="/MarcoinSF/assets/2024-10-15-BF3fCPW2.jpeg",Ow=Object.freeze(Object.defineProperty({__proto__:null,default:Dw},Symbol.toStringTag,{value:"Module"})),Uw="/MarcoinSF/assets/2024-10-20-1-UaeBmH8_.jpeg",Lw=Object.freeze(Object.defineProperty({__proto__:null,default:Uw},Symbol.toStringTag,{value:"Module"})),Nw="/MarcoinSF/assets/2024-10-20-2-CXE_ZJ88.jpeg",Pw=Object.freeze(Object.defineProperty({__proto__:null,default:Nw},Symbol.toStringTag,{value:"Module"})),zw="/MarcoinSF/assets/2024-10-20-3-DFppJf_d.jpeg",Iw=Object.freeze(Object.defineProperty({__proto__:null,default:zw},Symbol.toStringTag,{value:"Module"})),Fw="/MarcoinSF/assets/2024-10-20-4-DYSIXoD2.mp4",Bw=Object.freeze(Object.defineProperty({__proto__:null,default:Fw},Symbol.toStringTag,{value:"Module"})),Hw="/MarcoinSF/assets/2024-10-20-7%20Large-p3W3qreI.jpeg",Gw=Object.freeze(Object.defineProperty({__proto__:null,default:Hw},Symbol.toStringTag,{value:"Module"})),Vw="/MarcoinSF/assets/2024-10-20-Bd_4AOPQ.MOV",jw=Object.freeze(Object.defineProperty({__proto__:null,default:Vw},Symbol.toStringTag,{value:"Module"})),kw="/MarcoinSF/assets/2024-10-20-DIUHYx3b.jpeg",Xw=Object.freeze(Object.defineProperty({__proto__:null,default:kw},Symbol.toStringTag,{value:"Module"})),Ww="/MarcoinSF/assets/2024-10-22-CiL1HWjJ.JPG",qw=Object.freeze(Object.defineProperty({__proto__:null,default:Ww},Symbol.toStringTag,{value:"Module"})),Yw="/MarcoinSF/assets/2024-10-26-6I-A6_EY.jpeg",$w=Object.freeze(Object.defineProperty({__proto__:null,default:Yw},Symbol.toStringTag,{value:"Module"})),Zw="/MarcoinSF/assets/2024-11-01-B0vPq0V1.mp4",Kw=Object.freeze(Object.defineProperty({__proto__:null,default:Zw},Symbol.toStringTag,{value:"Module"})),Qw="/MarcoinSF/assets/2024-11-03-C4k0HJqk.mp4",Jw=Object.freeze(Object.defineProperty({__proto__:null,default:Qw},Symbol.toStringTag,{value:"Module"})),eC="/MarcoinSF/assets/2024-11-08-kM8awXmA.jpeg",tC=Object.freeze(Object.defineProperty({__proto__:null,default:eC},Symbol.toStringTag,{value:"Module"})),nC="/MarcoinSF/assets/2024-11-17-1-XWAmTuvK.jpeg",iC=Object.freeze(Object.defineProperty({__proto__:null,default:nC},Symbol.toStringTag,{value:"Module"})),aC="/MarcoinSF/assets/2024-11-17-2-CMXhdSPr.jpeg",sC=Object.freeze(Object.defineProperty({__proto__:null,default:aC},Symbol.toStringTag,{value:"Module"})),rC="/MarcoinSF/assets/2024-11-17-2-ClCIFVUl.mp4",oC=Object.freeze(Object.defineProperty({__proto__:null,default:rC},Symbol.toStringTag,{value:"Module"})),lC="/MarcoinSF/assets/2024-11-17-3-CL__783K.jpg",cC=Object.freeze(Object.defineProperty({__proto__:null,default:lC},Symbol.toStringTag,{value:"Module"})),uC="/MarcoinSF/assets/2024-11-17-Dlj7Ggg_.jpeg",fC=Object.freeze(Object.defineProperty({__proto__:null,default:uC},Symbol.toStringTag,{value:"Module"})),dC="/MarcoinSF/assets/2024-12-07-D5ESRNF6.jpeg",hC=Object.freeze(Object.defineProperty({__proto__:null,default:dC},Symbol.toStringTag,{value:"Module"})),pC="/MarcoinSF/assets/2024-12-11-LCPTHdsD.JPG",mC=Object.freeze(Object.defineProperty({__proto__:null,default:pC},Symbol.toStringTag,{value:"Module"})),gC="/MarcoinSF/assets/2025-02-12-1-BX8k8eV8.mp4",_C=Object.freeze(Object.defineProperty({__proto__:null,default:gC},Symbol.toStringTag,{value:"Module"})),xC="/MarcoinSF/assets/2025-02-12-CmQmbk28.jpeg",vC=Object.freeze(Object.defineProperty({__proto__:null,default:xC},Symbol.toStringTag,{value:"Module"})),bC="/MarcoinSF/assets/2025-02-26-weniPF9W.JPG",yC=Object.freeze(Object.defineProperty({__proto__:null,default:bC},Symbol.toStringTag,{value:"Module"})),SC="/MarcoinSF/assets/2025-03-07-rHk_O326.jpeg",MC=Object.freeze(Object.defineProperty({__proto__:null,default:SC},Symbol.toStringTag,{value:"Module"})),EC="/MarcoinSF/assets/2025-03-08-1-4LawzdwT.jpeg",TC=Object.freeze(Object.defineProperty({__proto__:null,default:EC},Symbol.toStringTag,{value:"Module"})),AC="/MarcoinSF/assets/2025-03-08-CsRDiP1v.jpeg",RC=Object.freeze(Object.defineProperty({__proto__:null,default:AC},Symbol.toStringTag,{value:"Module"})),wC="/MarcoinSF/assets/2025-03-08-JZOWf09E.mp4",CC=Object.freeze(Object.defineProperty({__proto__:null,default:wC},Symbol.toStringTag,{value:"Module"})),DC="/MarcoinSF/assets/2025-03-12-Ie8pwHnw.jpeg",OC=Object.freeze(Object.defineProperty({__proto__:null,default:DC},Symbol.toStringTag,{value:"Module"})),UC="/MarcoinSF/assets/2025-04-20-02-CTl6eCl4.jpeg",LC=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),NC="/MarcoinSF/assets/2025-04-20-m521MAgC.jpeg",PC=Object.freeze(Object.defineProperty({__proto__:null,default:NC},Symbol.toStringTag,{value:"Module"})),zC="/MarcoinSF/assets/2025-04-24-BJB22Ibv.jpeg",IC=Object.freeze(Object.defineProperty({__proto__:null,default:zC},Symbol.toStringTag,{value:"Module"})),FC="/MarcoinSF/assets/2025-05-09-BgJ2uyI6.jpeg",BC=Object.freeze(Object.defineProperty({__proto__:null,default:FC},Symbol.toStringTag,{value:"Module"})),HC="/MarcoinSF/assets/2025-05-10-01-CmiKVq7X.jpeg",GC=Object.freeze(Object.defineProperty({__proto__:null,default:HC},Symbol.toStringTag,{value:"Module"})),VC="/MarcoinSF/assets/2025-05-10-03-C7cYxHVB.jpeg",jC=Object.freeze(Object.defineProperty({__proto__:null,default:VC},Symbol.toStringTag,{value:"Module"})),kC="/MarcoinSF/assets/2025-05-10-04-D51B-kbo.jpeg",XC=Object.freeze(Object.defineProperty({__proto__:null,default:kC},Symbol.toStringTag,{value:"Module"})),WC="/MarcoinSF/assets/2025-05-10-05-ZspL2DFk.jpg",qC=Object.freeze(Object.defineProperty({__proto__:null,default:WC},Symbol.toStringTag,{value:"Module"})),YC="/MarcoinSF/assets/2025-05-23-DrMQ0MaP.mp4",$C=Object.freeze(Object.defineProperty({__proto__:null,default:YC},Symbol.toStringTag,{value:"Module"})),ZC="/MarcoinSF/assets/2025-05-30-B31ntIOA.jpeg",KC=Object.freeze(Object.defineProperty({__proto__:null,default:ZC},Symbol.toStringTag,{value:"Module"})),QC="/MarcoinSF/assets/2025-06-09-StP8uvDz.mp4",JC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),e4="/MarcoinSF/assets/2025-06-16-NxVx32rp.jpg",t4=Object.freeze(Object.defineProperty({__proto__:null,default:e4},Symbol.toStringTag,{value:"Module"})),n4="/MarcoinSF/assets/2025-06-17-C8HU58WO.jpeg",i4=Object.freeze(Object.defineProperty({__proto__:null,default:n4},Symbol.toStringTag,{value:"Module"})),a4="/MarcoinSF/assets/2025-06-19-DxprC_A4.jpeg",s4=Object.freeze(Object.defineProperty({__proto__:null,default:a4},Symbol.toStringTag,{value:"Module"})),r4="/MarcoinSF/assets/2025-06-20-DQi2tzWE.jpeg",o4=Object.freeze(Object.defineProperty({__proto__:null,default:r4},Symbol.toStringTag,{value:"Module"})),l4="/MarcoinSF/assets/2025-06-29-BcidFJty.JPG",c4=Object.freeze(Object.defineProperty({__proto__:null,default:l4},Symbol.toStringTag,{value:"Module"})),u4="/MarcoinSF/assets/2025-07-02-Or5BW8GN.jpeg",f4=Object.freeze(Object.defineProperty({__proto__:null,default:u4},Symbol.toStringTag,{value:"Module"})),d4="/MarcoinSF/assets/2025-07-04-C1wj0M1h.jpeg",h4=Object.freeze(Object.defineProperty({__proto__:null,default:d4},Symbol.toStringTag,{value:"Module"})),p4="/MarcoinSF/assets/2025-07-19-B14G1TL2.jpg",m4=Object.freeze(Object.defineProperty({__proto__:null,default:p4},Symbol.toStringTag,{value:"Module"})),g4="/MarcoinSF/assets/2025-07-23-CTlJaCIv.jpeg",_4=Object.freeze(Object.defineProperty({__proto__:null,default:g4},Symbol.toStringTag,{value:"Module"})),x4="/MarcoinSF/assets/2025-08-02-BYfa6nBi.jpeg",v4=Object.freeze(Object.defineProperty({__proto__:null,default:x4},Symbol.toStringTag,{value:"Module"})),b4="/MarcoinSF/assets/2025-08-15-BwvLJtju.jpeg",y4=Object.freeze(Object.defineProperty({__proto__:null,default:b4},Symbol.toStringTag,{value:"Module"})),S4="/MarcoinSF/assets/2025-08-16-CQmSO3ij.mp4",M4=Object.freeze(Object.defineProperty({__proto__:null,default:S4},Symbol.toStringTag,{value:"Module"})),E4="/MarcoinSF/assets/2025-10-04-BEvm4bRr.mp4",T4=Object.freeze(Object.defineProperty({__proto__:null,default:E4},Symbol.toStringTag,{value:"Module"})),A4="/MarcoinSF/assets/2025-10-08-2-BJssy64D.jpeg",R4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),w4="/MarcoinSF/assets/2025-10-08-BbBU71mk.jpeg",C4=Object.freeze(Object.defineProperty({__proto__:null,default:w4},Symbol.toStringTag,{value:"Module"})),D4="/MarcoinSF/assets/2025-10-09-Be-NfefO.JPG",O4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),U4="/MarcoinSF/assets/2025-10-10-DSgqI2iz.jpeg",L4=Object.freeze(Object.defineProperty({__proto__:null,default:U4},Symbol.toStringTag,{value:"Module"})),N4="/MarcoinSF/assets/2025-10-11-BE2_tkS1.jpeg",P4=Object.freeze(Object.defineProperty({__proto__:null,default:N4},Symbol.toStringTag,{value:"Module"})),z4="/MarcoinSF/assets/2025-10-31-2-4DBQdFfB.jpeg",I4=Object.freeze(Object.defineProperty({__proto__:null,default:z4},Symbol.toStringTag,{value:"Module"})),F4="/MarcoinSF/assets/2025-10-31-3-CMAQg5eZ.mp4",B4=Object.freeze(Object.defineProperty({__proto__:null,default:F4},Symbol.toStringTag,{value:"Module"})),H4="/MarcoinSF/assets/2025-10-31-C_2gu8e1.jpeg",G4=Object.freeze(Object.defineProperty({__proto__:null,default:H4},Symbol.toStringTag,{value:"Module"})),V4="/MarcoinSF/assets/2025-11-04-CxajqofK.jpeg",j4=Object.freeze(Object.defineProperty({__proto__:null,default:V4},Symbol.toStringTag,{value:"Module"})),k4="/MarcoinSF/assets/2025-11-09-xa64oJGS.jpeg",X4=Object.freeze(Object.defineProperty({__proto__:null,default:k4},Symbol.toStringTag,{value:"Module"})),W4="/MarcoinSF/assets/2025-11-09-BxC_sGgm.mp4",q4=Object.freeze(Object.defineProperty({__proto__:null,default:W4},Symbol.toStringTag,{value:"Module"})),Y4="/MarcoinSF/assets/2025-11-29-Dq6Asxu3.jpeg",$4=Object.freeze(Object.defineProperty({__proto__:null,default:Y4},Symbol.toStringTag,{value:"Module"})),Z4="/MarcoinSF/assets/2025-12-03-DSQwbWlu.JPG",K4=Object.freeze(Object.defineProperty({__proto__:null,default:Z4},Symbol.toStringTag,{value:"Module"})),Q4="/MarcoinSF/assets/2025-12-03-BkHMkApE.jpeg",J4=Object.freeze(Object.defineProperty({__proto__:null,default:Q4},Symbol.toStringTag,{value:"Module"})),eD="/MarcoinSF/assets/2025-12-04-02-CEkCKTxA.jpeg",tD=Object.freeze(Object.defineProperty({__proto__:null,default:eD},Symbol.toStringTag,{value:"Module"})),nD="/MarcoinSF/assets/2025-12-04-10-C3KxTeOd.mp4",iD=Object.freeze(Object.defineProperty({__proto__:null,default:nD},Symbol.toStringTag,{value:"Module"})),aD="/MarcoinSF/assets/2025-12-04-supQhv4p.jpeg",sD=Object.freeze(Object.defineProperty({__proto__:null,default:aD},Symbol.toStringTag,{value:"Module"})),rD="/MarcoinSF/assets/2025-12-05-01-BFaM4Oml.mp4",oD=Object.freeze(Object.defineProperty({__proto__:null,default:rD},Symbol.toStringTag,{value:"Module"})),lD="/MarcoinSF/assets/2025-12-05-02-BrtAXchK.mp4",cD=Object.freeze(Object.defineProperty({__proto__:null,default:lD},Symbol.toStringTag,{value:"Module"})),Z2="/MarcoinSF/assets/Ignore_2024-08-23-5-CqrWweLB.png",uD=Object.freeze(Object.defineProperty({__proto__:null,default:Z2},Symbol.toStringTag,{value:"Module"})),K2="/MarcoinSF/assets/Ignore_2025-05-10-06-YgLAOf2q.png",fD=Object.freeze(Object.defineProperty({__proto__:null,default:K2},Symbol.toStringTag,{value:"Module"})),dD="/MarcoinSF/assets/BeggingBuddha-CATTcvPs.mp3",hD="/MarcoinSF/assets/FujiMt-CkmfackC.mp3",pD="/MarcoinSF/assets/Handbeaten-fishball-55E7UMtG.mp3",mD="/MarcoinSF/assets/LouMei-B79Jap0g.mp3",h0=[{title:"Handbeaten Fishball",src:pD},{title:"Begging Buddha",src:dD},{title:"Fuji Mt",src:hD},{title:"Lou Mei",src:mD}],gD=Object.assign({"./assets/media/2021-10-31.JPG":yR,"./assets/media/2021-10-31.jpeg":MR,"./assets/media/2021-12-10.jpg":TR,"./assets/media/2022-05-13.JPG":RR,"./assets/media/2022-06-13.jpeg":CR,"./assets/media/2022-07-06-2.jpeg":OR,"./assets/media/2022-08-14.JPG":LR,"./assets/media/2022-10-29 Large.jpeg":PR,"./assets/media/2023-01-01.jpeg":IR,"./assets/media/2023-03-01.jpeg":BR,"./assets/media/2024-03-09-1.jpeg":GR,"./assets/media/2024-03-09.jpeg":jR,"./assets/media/2024-05-05.jpeg":XR,"./assets/media/2024-05-14.jpeg":qR,"./assets/media/2024-07-21.mp4":$R,"./assets/media/2024-07-28.mp4":KR,"./assets/media/2024-07-31.jpeg":JR,"./assets/media/2024-08-10-1.mp4":tw,"./assets/media/2024-08-10.jpeg":iw,"./assets/media/2024-08-23-1.jpg":sw,"./assets/media/2024-08-23-3.jpg":ow,"./assets/media/2024-08-23-4.jpg":cw,"./assets/media/2024-08-23.jpg":fw,"./assets/media/2024-08-23.mp4":hw,"./assets/media/2024-08-25.mp4":mw,"./assets/media/2024-09-01.jpeg":_w,"./assets/media/2024-09-02.jpeg":vw,"./assets/media/2024-09-08.jpeg":yw,"./assets/media/2024-09-19-02.JPG":Mw,"./assets/media/2024-09-19-03.mp4":Tw,"./assets/media/2024-09-19.jpg":Rw,"./assets/media/2024-09-25.jpeg":Cw,"./assets/media/2024-10-15.jpeg":Ow,"./assets/media/2024-10-20-1.jpeg":Lw,"./assets/media/2024-10-20-2.jpeg":Pw,"./assets/media/2024-10-20-3.jpeg":Iw,"./assets/media/2024-10-20-4.mp4":Bw,"./assets/media/2024-10-20-7 Large.jpeg":Gw,"./assets/media/2024-10-20.MOV":jw,"./assets/media/2024-10-20.jpeg":Xw,"./assets/media/2024-10-22.JPG":qw,"./assets/media/2024-10-26.jpeg":$w,"./assets/media/2024-11-01.mp4":Kw,"./assets/media/2024-11-03.mp4":Jw,"./assets/media/2024-11-08.jpeg":tC,"./assets/media/2024-11-17-1.jpeg":iC,"./assets/media/2024-11-17-2.jpeg":sC,"./assets/media/2024-11-17-2.mp4":oC,"./assets/media/2024-11-17-3.jpg":cC,"./assets/media/2024-11-17.jpeg":fC,"./assets/media/2024-12-07.jpeg":hC,"./assets/media/2024-12-11.JPG":mC,"./assets/media/2025-02-12-1.mp4":_C,"./assets/media/2025-02-12.jpeg":vC,"./assets/media/2025-02-26.JPG":yC,"./assets/media/2025-03-07.jpeg":MC,"./assets/media/2025-03-08-1.jpeg":TC,"./assets/media/2025-03-08.jpeg":RC,"./assets/media/2025-03-08.mp4":CC,"./assets/media/2025-03-12.jpeg":OC,"./assets/media/2025-04-20-02.jpeg":LC,"./assets/media/2025-04-20.jpeg":PC,"./assets/media/2025-04-24.jpeg":IC,"./assets/media/2025-05-09.jpeg":BC,"./assets/media/2025-05-10-01.jpeg":GC,"./assets/media/2025-05-10-03.jpeg":jC,"./assets/media/2025-05-10-04.jpeg":XC,"./assets/media/2025-05-10-05.jpg":qC,"./assets/media/2025-05-23.mp4":$C,"./assets/media/2025-05-30.jpeg":KC,"./assets/media/2025-06-09.mp4":JC,"./assets/media/2025-06-16.jpg":t4,"./assets/media/2025-06-17.jpeg":i4,"./assets/media/2025-06-19.jpeg":s4,"./assets/media/2025-06-20.jpeg":o4,"./assets/media/2025-06-29.JPG":c4,"./assets/media/2025-07-02.jpeg":f4,"./assets/media/2025-07-04.jpeg":h4,"./assets/media/2025-07-19.jpg":m4,"./assets/media/2025-07-23.jpeg":_4,"./assets/media/2025-08-02.jpeg":v4,"./assets/media/2025-08-15.jpeg":y4,"./assets/media/2025-08-16.mp4":M4,"./assets/media/2025-10-04.mp4":T4,"./assets/media/2025-10-08-2.jpeg":R4,"./assets/media/2025-10-08.jpeg":C4,"./assets/media/2025-10-09.JPG":O4,"./assets/media/2025-10-10.jpeg":L4,"./assets/media/2025-10-11.jpeg":P4,"./assets/media/2025-10-31-2.jpeg":I4,"./assets/media/2025-10-31-3.mp4":B4,"./assets/media/2025-10-31.jpeg":G4,"./assets/media/2025-11-04.jpeg":j4,"./assets/media/2025-11-09.jpeg":X4,"./assets/media/2025-11-09.mp4":q4,"./assets/media/2025-11-29.jpeg":$4,"./assets/media/2025-12-03.JPG":K4,"./assets/media/2025-12-03.jpeg":J4,"./assets/media/2025-12-04-02.jpeg":tD,"./assets/media/2025-12-04-10.mp4":iD,"./assets/media/2025-12-04.jpeg":sD,"./assets/media/2025-12-05-01.mp4":oD,"./assets/media/2025-12-05-02.mp4":cD,"./assets/media/Ignore_2024-08-23-5.png":uD,"./assets/media/Ignore_2025-05-10-06.png":fD}),mp=r=>{const e=r.match(/(\d{4}-\d{2}-\d{2})/);return e?e[1]:r},_D="ignore_",xD={"2025-05-23.mp4":"The best egg-fried rice in SF","2024-07-28.mp4":"Baby Seagull Rescue Mission"},vD={"2023-03-01.jpeg":"399开张","2024-10-20-3.jpeg":"Bye Caroline","2024-11-17-1.jpeg":"吴情吴义","2025-10-31.jpeg":"多邻国之神","2025-12-04.jpeg":"Last Day"},$p=Object.entries(gD).map(([r,e])=>{const n=r.split("/").pop()||r;if(n.toLowerCase().startsWith(_D))return null;const a=e.default,c=n.toLowerCase().split(".").pop()||"",u=c==="mp4"||c==="mov";if(!u&&!(c==="jpg"||c==="jpeg"||c==="png"))return null;const m=u?"video":"image",p=mp(n);return{filename:n,src:a,previewSrc:a,type:m,sortKey:p}}).filter(r=>r!==null);$p.push({filename:"Ignore_2025-05-10-06.png",src:"https://vimeo.com/1083175160/86c067f4f9",previewSrc:K2,embedUrl:"https://player.vimeo.com/video/1083175160?h=86c067f4f9",type:"embed",sortKey:"2025-05-10",dateOverride:"2025-05-10",titleOverride:"2025-05-10",description:"Mini-film Festival Winner",timelineLabel:"春天里"});$p.push({filename:"Ignore_2024-08-23-5.png",src:"https://vimeo.com/1144210034",previewSrc:Z2,embedUrl:"https://player.vimeo.com/video/1144210034",type:"embed",sortKey:"2024-08-23",dateOverride:"2024-08-23",titleOverride:"2024-08-23",description:"Who makes the most authentic old Beijing Zhajiang Noodles?",timelineLabel:"炸酱面大赛"});const Ts=$p.sort((r,e)=>r.sortKey.localeCompare(e.sortKey)||r.filename.localeCompare(e.filename)).map((r,e)=>({id:String(e+1),type:r.type,src:r.src,previewSrc:r.previewSrc,embedUrl:r.embedUrl,timelineLabel:r.timelineLabel||vD[r.filename],title:r.dateOverride||mp(r.filename),description:r.description??xD[r.filename]??"",date:r.dateOverride||mp(r.filename),filename:r.filename})),bD={"2021-10-31.JPG":{width:768,height:1024,aspectRatio:.75},"2021-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2021-12-10.jpg":{width:869,height:982,aspectRatio:.884928716904277},"2022-05-13.JPG":{width:1512,height:2016,aspectRatio:.75},"2022-06-13.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2022-07-06-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2022-08-14.JPG":{width:2231,height:4032,aspectRatio:.5533234126984127},"2022-10-29 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-01-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2023-03-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-03-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-05-05.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-05-14.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-07-21.mp4":{width:810,height:1080,aspectRatio:.75},"2024-07-28.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-07-31.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-08-10-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-08-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-08-23-1.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-3.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23-4.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.jpg":{width:6024,height:4024,aspectRatio:1.497017892644135},"2024-08-23.mp4":{width:720,height:960,aspectRatio:.75},"2024-08-25.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-09-19-02.JPG":{width:2048,height:3089,aspectRatio:.6629977338944643},"2024-09-19-03.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-09-19.jpg":{width:2075,height:3130,aspectRatio:.6629392971246006},"2024-09-25.jpeg":{width:3024,height:4032,aspectRatio:.75},"2024-10-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20-1.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-3.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-20-4.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-10-20-7 Large.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-10-20.MOV":{width:3840,height:2160,aspectRatio:1.7777777777777777},"2024-10-20.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-10-22.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2024-10-26.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2024-11-01.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-03.mp4":{width:405,height:720,aspectRatio:.5625},"2024-11-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-11-17-2.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2024-11-17-3.jpg":{width:1290,height:2228,aspectRatio:.5789946140035906},"2024-11-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2024-12-11.JPG":{width:1170,height:2080,aspectRatio:.5625},"2025-02-12-1.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-02-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-02-26.JPG":{width:3089,height:2048,aspectRatio:1.50830078125},"2025-03-07.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08-1.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-03-08.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-03-12.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-04-24.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-05-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-01.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-03.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-05-10-05.jpg":{width:1290,height:1710,aspectRatio:.7543859649122807},"2025-05-23.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-05-30.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-09.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-06-16.jpg":{width:1280,height:1707,aspectRatio:.7498535442296427},"2025-06-17.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-19.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-06-20.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-06-29.JPG":{width:4032,height:3024,aspectRatio:1.3333333333333333},"2025-07-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-07-19.jpg":{width:3024,height:4032,aspectRatio:.75},"2025-07-23.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-15.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-08-16.mp4":{width:1280,height:720,aspectRatio:1.7777777777777777},"2025-10-04.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-08-2.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-08.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-09.JPG":{width:1080,height:1920,aspectRatio:.5625},"2025-10-10.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-11.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-10-31-2.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-10-31-3.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-10-31.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-11-09.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-11-29.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-03.JPG":{width:1263,height:1535,aspectRatio:.8228013029315961},"2025-12-03.jpeg":{width:1280,height:960,aspectRatio:1.3333333333333333},"2025-12-04-02.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-04-10.mp4":{width:607,height:1080,aspectRatio:.562037037037037},"2025-12-04.jpeg":{width:960,height:1280,aspectRatio:.75},"2025-12-05-01.mp4":{width:1920,height:1080,aspectRatio:1.7777777777777777},"2025-12-05-02.mp4":{width:1630,height:1080,aspectRatio:1.5092592592592593},"Ignore_2024-08-23-5.png":{width:1090,height:1966,aspectRatio:.5544252288911495},"Ignore_2025-05-10-06.png":{width:3448,height:1724,aspectRatio:2}},p0="/MarcoinSF/assets/cover-Cm2iNRoQ.mp4",yD="/MarcoinSF/assets/Balloon-C59jG2U_.wav",SD="/MarcoinSF/assets/Typing-K6XFAZpo.mp3",MD="/MarcoinSF/assets/curtain-D_OCfkhx.wav",Q2=r=>`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Ctext y='32' font-size='32'%3E${encodeURIComponent(r)}%3C/text%3E%3C/svg%3E") 16 16, auto`,ED=Q2("❤️"),TD=Q2("🌸"),AD=({onStartTransition:r})=>{const[e,n]=Ke.useState(0),[a,o]=Ke.useState(!1),[c,u]=Ke.useState(!1),[d,m]=Ke.useState(null),[p,g]=Ke.useState([]),_="Chef of SF's Finest Egg Fried Rice, Tennis 5.0 Player and Coach, Poet of Three-and-No-More Verses, Informal Member of the 399, Examiner of All Furry Friends, King of Monkeys, Award-winning Transgender Actor, Watermelon Annihilator, 华埠老广地陪, Slayer of 100+ Arkvelds,连续戒烟成功者...",[x,y]=Ke.useState(""),M=Ke.useRef(0),A=Ke.useRef(!1),S=Ke.useRef(null),v=Ke.useRef(null),L=Ke.useRef(null),U=Ke.useRef(!1),I=(K,P,q)=>{M.current+=1;const Y=M.current;g(he=>[...he,{id:Y,x:K,y:P,scale:q}])};Ke.useEffect(()=>{let K=0;const P=Ts.slice(0,4),q=[{src:p0,previewSrc:p0,type:"video"},...Ts.filter(Te=>Te.type==="image"),...P],Y=new Set,he=q.filter(Te=>{const Le=Te.previewSrc||Te.src;return Y.has(Le)?!1:(Y.add(Le),!0)}),pe=he.length||1,D=Te=>new Promise(Le=>{const ae=new Image;ae.src=Te,ae.onload=()=>Le(),ae.onerror=()=>Le()}),ie=async()=>{const Te=he.map(Le=>D(Le.previewSrc||Le.src).then(()=>{K++,n(Math.floor(K/pe*100))}));await Promise.all(Te),setTimeout(()=>o(!0),300)},Se=setTimeout(()=>{n(100),o(!0)},6e3);ie().finally(()=>clearTimeout(Se))},[]),Ke.useEffect(()=>{var Y;if(!v.current){const he=new Audio(SD);he.loop=!0,he.volume=.4,v.current=he}(Y=v.current)==null||Y.play().catch(()=>{});let K=0;const q=setInterval(()=>{var he;K+=1,y(_.slice(0,K)),K>=_.length&&((he=v.current)==null||he.pause(),v.current&&(v.current.currentTime=0),clearInterval(q))},30);return()=>{var he;clearInterval(q),(he=v.current)==null||he.pause(),v.current&&(v.current.currentTime=0)}},[_]);const j=()=>{var K;u(!0),U.current=!0,A.current=!1,m(null),g(P=>P.map(q=>({...q,fading:!0}))),setTimeout(()=>g([]),250),S.current&&(S.current.pause(),S.current.currentTime=0),L.current||(L.current=new Audio(MD)),(K=L.current)==null||K.play().catch(()=>{}),setTimeout(()=>{r()},100)},N=.6,z=3,Q=2,C=4;Ke.useEffect(()=>{let K=0,P=performance.now();const q=Y=>{const he=(Y-P)/1e3;P=Y,m(pe=>{if(!pe)return null;let D=pe.scale;return pe.growing?(D=Math.min(z,D+Q*he),D>=z&&S.current?(S.current.pause(),I(pe.x,pe.y,D),A.current=!1,{...pe,growing:!1,scale:D}):{...pe,scale:D}):(D=Math.max(N,D-C*he),D<=N+.01?null:{...pe,scale:D})}),K=requestAnimationFrame(q)};return K=requestAnimationFrame(q),()=>cancelAnimationFrame(K)},[]);const w=(K,P)=>{M.current+=1;const q=M.current;m({id:q,x:K,y:P,scale:N,growing:!0})},G=()=>{A.current=!1,m(K=>K&&K.growing?(I(K.x,K.y,K.scale),{...K,growing:!1}):K),S.current&&(S.current.pause(),S.current.currentTime=0)},ne=K=>{var he;if(c||U.current)return;const P=K.currentTarget.getBoundingClientRect(),q=K.clientX-P.left,Y=K.clientY-P.top;if(A.current=!0,!S.current){const pe=new Audio(yD);pe.loop=!0,pe.playbackRate=1.2,S.current=pe}(he=S.current)==null||he.play().catch(()=>{}),w(q,Y)},fe=()=>{G()},ge=()=>{G()};return e<100&&!a?re.jsxs("div",{className:"fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fcfbf9] transition-opacity duration-1000",children:[re.jsxs("div",{className:"relative w-64 h-2 bg-gray-200 rounded overflow-hidden",children:[re.jsx("div",{className:"h-full bg-black transition-all duration-200",style:{width:`${e}%`}}),re.jsxs("div",{className:"absolute inset-0 flex items-center justify-center text-[10px] font-bold text-gray-600 pointer-events-none mix-blend-multiply",children:[e,"%"]})]}),re.jsx("p",{className:"mt-4 font-bold text-gray-400 animate-pulse",children:"Loading Gallery..."})]}):re.jsxs("div",{className:`fixed inset-0 z-50 flex items-center justify-center bg-[#fcfbf9] overflow-hidden transition-none ${c?"pointer-events-none":""}`,onMouseDown:ne,onMouseUp:fe,onMouseLeave:ge,style:{cursor:ED},children:[re.jsxs("div",{className:"absolute inset-0 pointer-events-none",style:{zIndex:1e4},children:[p.map(K=>re.jsx("div",{style:{position:"absolute",left:K.x,top:K.y,transform:`translate(-50%, -50%) scale(${K.scale})`,opacity:K.fading?0:1,transition:K.fading?"opacity 200ms ease-out":void 0,fontSize:"32px",pointerEvents:"none",zIndex:10001},children:"❤️"},K.id)),d&&re.jsx("div",{style:{position:"absolute",left:d.x,top:d.y,transform:`translate(-50%, -50%) scale(${d.scale})`,opacity:1,fontSize:"32px",pointerEvents:"none"},children:"❤️"})]}),re.jsx("div",{className:`relative z-20 bg-white p-4 shadow-2xl border-2 border-gray-100 transform scale-100 transition-all duration-500 ease-out ${c?"opacity-0 scale-95":"hover:scale-105"}`,children:re.jsxs("div",{className:"w-80 aspect-[4/5] flex flex-col items-center",children:[re.jsxs("div",{className:"w-full h-64 bg-gray-200 overflow-hidden border-2 border-black mb-4 relative opacity-0 animate-fade-in",children:[re.jsx("video",{src:p0,className:"w-full h-full object-cover grayscale contrast-125 opacity-80",muted:!0,loop:!0,autoPlay:!0,playsInline:!0}),re.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"})]}),re.jsx("h1",{className:"text-3xl text-center font-bold mb-1",children:"The Secret Life of Warco Mu"}),re.jsx("p",{className:"text-gray-500 text-sm text-center mb-6",children:"2021.8-2025.12"}),re.jsxs("p",{className:"text-gray-800 text-m text-center mb-6",children:[x,x.length<_.length&&re.jsx("span",{className:"animate-pulse",children:"|"})]}),re.jsx("wired-button",{elevation:2,onClick:j,className:"bg-black text-white font-bold tracking-widest cursor-pointer",style:{cursor:TD},children:"PAY RESPECT"})]})})]})},RD=({onCovered:r,onComplete:e})=>{const[n,a]=Ke.useState([]),o=Ke.useRef("raining"),c=Ke.useRef(0),u=Ke.useRef(null),d=40,m=1,p=1.5,g=80;Ke.useEffect(()=>{const x=window.innerWidth,y=Math.ceil(x/d),M=()=>{if(o.current==="clearing")return;const v=[];for(let L=0;L<y;L++)v.push({id:c.current++,colIndex:L,left:L/y*100+Math.random()*2,duration:m+Math.random()*(p-m),rotation:Math.random()*360});a(L=>[...L,...v])};u.current=window.setInterval(M,g);const A=m*1e3+200,S=setTimeout(()=>{r(),setTimeout(()=>{o.current="clearing",u.current&&clearInterval(u.current)},1500)},A);return()=>{u.current&&clearInterval(u.current),clearTimeout(S)}},[r]);const _=x=>{a(y=>{const M=y.filter(A=>A.id!==x);return o.current==="clearing"&&M.length===0&&setTimeout(e,0),M})};return re.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:9999,pointerEvents:"none",overflow:"hidden"},children:[re.jsx("style",{children:`
          @keyframes tennisFall {
            0% {
              transform: translateY(-60px) rotate(0deg);
            }
            100% { transform: translateY(110vh) rotate(var(--rot)); }
          }
        `}),n.map(x=>re.jsx("div",{onAnimationEnd:()=>_(x.id),style:{position:"absolute",left:`${x.left}%`,top:"-60px",width:`${d}px`,height:`${d}px`,fontSize:`${d}px`,lineHeight:"1",textAlign:"center","--rot":`${x.rotation}deg`,animationName:"tennisFall",animationDuration:`${x.duration}s`,animationTimingFunction:"cubic-bezier(0.3, 0.1, 0.7, 1)",animationFillMode:"forwards"},children:"🎾"},x.id))]})},wD="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.5%201.99997C10.1347%201.99987%2010.7457%202.2412%2011.209%202.67501C11.6724%203.10882%2011.9534%203.70262%2011.995%204.33597L12%204.49997V9.10497L17.442%209.70997C18.3855%209.81483%2019.261%2010.2518%2019.9119%2010.9429C20.5628%2011.6339%2020.9467%2012.5339%2020.995%2013.482L21%2013.685V14C21%2016.0784%2020.1911%2018.0752%2018.7445%2019.5677C17.298%2021.0601%2015.3274%2021.931%2013.25%2021.996L13%2022H12.326C10.8885%2021.9999%209.47751%2021.6126%208.24148%2020.8786C7.00546%2020.1446%205.99004%2019.0911%205.302%2017.829L5.171%2017.578L2.329%2011.894C1.969%2011.174%202.236%2010.211%203.076%209.86597C4.119%209.43897%205.11%209.35897%206.131%209.87797C6.353%209.9913%206.571%2010.1293%206.785%2010.292L7%2010.462V4.49997C7%203.83693%207.26339%203.20104%207.73223%202.7322C8.20107%202.26336%208.83696%201.99997%209.5%201.99997ZM9.5%203.99997C9.38297%203.99993%209.26964%204.04094%209.17974%204.11586C9.08984%204.19078%209.02906%204.29486%209.008%204.40997L9%204.49997V13C8.99984%2013.207%208.93542%2013.4089%208.81565%2013.5777C8.69587%2013.7466%208.52663%2013.8741%208.3313%2013.9427C8.13596%2014.0113%207.92414%2014.0176%207.72509%2013.9607C7.52604%2013.9037%207.34956%2013.7865%207.22%2013.625L6.888%2013.218L6.585%2012.864C6.005%2012.207%205.584%2011.844%205.225%2011.661C5.01269%2011.5466%204.77084%2011.4989%204.531%2011.524L4.39%2011.544L6.96%2016.684C7.43992%2017.6435%208.16833%2018.4567%209.06935%2019.0391C9.97038%2019.6214%2011.0111%2019.9515%2012.083%2019.995L12.326%2020H13C14.5524%2020%2016.0444%2019.3984%2017.1625%2018.3215C18.2806%2017.2446%2018.9378%2015.7763%2018.996%2014.225L19%2014V13.685C19.0001%2013.2203%2018.8383%2012.77%2018.5425%2012.4116C18.2467%2012.0532%2017.8353%2011.809%2017.379%2011.721L17.221%2011.697L11.779%2011.093C11.317%2011.0417%2010.8872%2010.831%2010.5637%2010.4972C10.2401%2010.1635%2010.0429%209.72738%2010.006%209.26397L10%209.10497V4.49997C10%204.36736%209.94732%204.24018%209.85355%204.14642C9.75979%204.05265%209.63261%203.99997%209.5%203.99997ZM4%205.99997C4.26522%205.99997%204.51957%206.10533%204.70711%206.29286C4.89464%206.4804%205%206.73475%205%206.99997C5%207.26519%204.89464%207.51954%204.70711%207.70708C4.51957%207.89461%204.26522%207.99997%204%207.99997H3C2.73478%207.99997%202.48043%207.89461%202.29289%207.70708C2.10536%207.51954%202%207.26519%202%206.99997C2%206.73475%202.10536%206.4804%202.29289%206.29286C2.48043%206.10533%202.73478%205.99997%203%205.99997H4ZM16%204.99997C16.2549%205.00025%2016.5%205.09785%2016.6854%205.27282C16.8707%205.44779%2016.9822%205.68692%2016.9972%205.94136C17.0121%206.19581%2016.9293%206.44635%2016.7657%206.6418C16.6021%206.83725%2016.3701%206.96287%2016.117%206.99297L16%206.99997H15C14.7451%206.99969%2014.5%206.90209%2014.3146%206.72712C14.1293%206.55215%2014.0178%206.31302%2014.0028%206.05857C13.9879%205.80413%2014.0707%205.55359%2014.2343%205.35814C14.3979%205.16268%2014.6299%205.03707%2014.883%205.00697L15%204.99997H16ZM4.707%201.29297L5.707%202.29297C5.88916%202.48157%205.98995%202.73417%205.98767%202.99637C5.9854%203.25857%205.88023%203.50938%205.69482%203.69479C5.50941%203.8802%205.2586%203.98537%204.9964%203.98764C4.7342%203.98992%204.4816%203.88913%204.293%203.70697L3.293%202.70697C3.11084%202.51837%203.01005%202.26577%203.01233%202.00357C3.0146%201.74137%203.11977%201.49056%203.30518%201.30515C3.49059%201.11974%203.7414%201.01457%204.0036%201.0123C4.2658%201.01002%204.5184%201.11081%204.707%201.29297ZM15.707%201.29297C15.8945%201.4805%2015.9998%201.73481%2015.9998%201.99997C15.9998%202.26513%2015.8945%202.51944%2015.707%202.70697L14.707%203.70697C14.6148%203.80248%2014.5044%203.87866%2014.3824%203.93107C14.2604%203.98348%2014.1292%204.01107%2013.9964%204.01222C13.8636%204.01337%2013.7319%203.98807%2013.609%203.93779C13.4861%203.88751%2013.3745%203.81326%2013.2806%203.71936C13.1867%203.62547%2013.1125%203.51382%2013.0622%203.39092C13.0119%203.26803%2012.9866%203.13635%2012.9877%203.00357C12.9889%202.87079%2013.0165%202.73957%2013.0689%202.61757C13.1213%202.49556%2013.1975%202.38522%2013.293%202.29297L14.293%201.29297C14.4805%201.1055%2014.7348%201.00018%2015%201.00018C15.2652%201.00018%2015.5195%201.1055%2015.707%201.29297Z'%20fill='black'/%3e%3c/svg%3e",Lt={Z_SPACING:8,X_OFFSET:2.2,CAMERA_START_Z:8,FOG_COLOR:16579577,FADE_START:12,FADE_END:24,HIGHLIGHT_RANGE:4,AUDIO_MAX_DISTANCE:12,AUDIO_QUICK_FADE_BEHIND:1.2,BGM_FADE_ZONE:25,BGM_SILENCE_RADIUS:6,MAX_SCROLL_SPEED:.15,HOVER_MIN_SPEED_FACTOR:.05,TIMELINE_FOCUS_OFFSET:4},CD=()=>Ts.map((r,e)=>{let n=3.2,a=2.4;const o=bD[r.filename];if(o){const m=o.aspectRatio;m>1?(n=Math.min(o.width,3.2),a=n/m,a>3.2&&(a=3.2,n=a*m)):(a=Math.min(o.height,3.2),n=a*m,n>3.2&&(n=3.2,a=n/m))}return e===Ts.length-1?{...r,z:-e*Lt.Z_SPACING-8,x:0,y:0,rotationY:0,rotationZ:0,borderIntensity:2,initialWidth:n,initialHeight:a}:{...r,z:-e*Lt.Z_SPACING,x:(Math.random()-.5)*2+(e%2===0?-2.2:Lt.X_OFFSET),y:(Math.random()-.5)*.5,rotationY:(e%2===0?.12:-.12)+(Math.random()-.5)*.05,rotationZ:(Math.random()-.5)*.1,borderIntensity:Math.random()<.3?2:Math.random()<.6?1:0,initialWidth:n,initialHeight:a}}),n2=(r,e,n=1)=>{const a=[],o=r/2,c=e/2,u=n===0?1:n===1?2:3,d=n===0?.01:n===1?.02:.04,m=n===2?.1:.02,p=(_,x,y,M)=>{const A=y-_,S=M-x,v=Math.sqrt(A*A+S*S),L=A/v,U=S/v,I=_-L*(Math.random()*m),j=x-U*(Math.random()*m),N=y+L*(Math.random()*m),z=M+U*(Math.random()*m);a.push(new le(I,j,0));const Q=(I+N)/2+(Math.random()-.5)*d,C=(j+z)/2+(Math.random()-.5)*d;a.push(new le(Q,C,0)),a.push(new le(N,z,0))};for(let _=0;_<u;_++){const x=d*(_+1);p(-o-Math.random()*x,c+Math.random()*x,o+Math.random()*x,c-Math.random()*x),p(o+Math.random()*x,c-Math.random()*x,o-Math.random()*x,-c+Math.random()*x),p(o-Math.random()*x,-c+Math.random()*x,-o+Math.random()*x,-c-Math.random()*x),p(-o+Math.random()*x,-c-Math.random()*x,-o-Math.random()*x,c+Math.random()*x)}return new Zi().setFromPoints(a)},DD=()=>{const r=[],n=(M,A,S,v,L=.2)=>{let I=M,j=A;const N=(S-M)/6,z=(v-A)/6;for(let Q=0;Q<6;Q++){const C=M+N*(Q+1),w=A+z*(Q+1);r.push(new le(I,j,0));const G=Q===5?0:(Math.random()-.5)*L,ne=Q===5?0:(Math.random()-.5)*L;r.push(new le(C+G,w+ne,0)),I=C+G,j=w+ne}};let a=0;for(let M=-120/2;M<=120/2;M+=2){const A=Math.sin(M*.05)*5+Math.sin(M*.15)*2-5;M>-120/2&&(n(M-2,a,M,A,.4),n(M-2,a-.2,M,A-.2,.6)),a=A}const o=15,c=Math.sin(o*.05)*5+Math.sin(o*.15)*2-5;n(o-4,c,o,c+18,.3),n(o+4,c,o,c+18,.3),n(o-3.8,c+2,o+3.8,c+2,.2),n(o-2.5,c+12,o+2.5,c+12,.2);const u=-25,d=Math.sin(u*.05)*5-5;n(u,d,u,d+12,.3),n(u+1,d,u+1,d+12,.3),n(u-.5,d+10,u+1.5,d+10,.1),n(u-15,d-2,u-15,d+10,.3);let m=u-15,p=d+10;for(let M=u-15;M<=u;M+=2){const A=d+10-Math.sin((M-(u-15))/15*Math.PI)*4;n(m,p,M,A,.1),m=M,p=A}const g=(M,A,S)=>{let L=M+Math.cos(0)*S,U=A+Math.sin(0)*S*.6;for(let I=1;I<=13;I++){const j=I/12*Math.PI*2,N=S+(Math.random()-.5)*(S*.4),z=M+Math.cos(j)*N,Q=A+Math.sin(j)*(N*.6);n(L,U,z,Q,.5),L=z,U=Q}};g(-30,15,6),g(-10,20,4),g(25,18,7);const _=35,x=22;g(_,x,3);for(let M=0;M<8;M++){const A=M/8*Math.PI*2,S=_+Math.cos(A)*4,v=x+Math.sin(A)*4,L=_+Math.cos(A)*6,U=x+Math.sin(A)*6;n(S,v,L,U,.2)}return new Zi().setFromPoints(r)},OD=r=>{const e=document.createElement("canvas"),n=e.getContext("2d");if(!n)return null;e.width=512,e.height=128,n.clearRect(0,0,e.width,e.height),n.font='40px "Gloria Hallelujah", cursive',n.fillStyle="#666666",n.textAlign="center",n.textBaseline="middle",n.fillText(r,e.width/2,e.height/2);const a=new M3(e);return a.minFilter=Yn,a},UD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("path",{d:"M9 18V5l12-2v13"}),re.jsx("circle",{cx:"6",cy:"18",r:"3"}),re.jsx("circle",{cx:"18",cy:"16",r:"3"})]}),LD=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"3"}),re.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),ND=()=>re.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[re.jsx("circle",{cx:"12",cy:"12",r:"10"}),re.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),re.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),i2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),re.jsx("path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]}),a2=()=>re.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"}),re.jsx("path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4l-6.81 3.4A9.916 9.916 0 0 0 6 7.68M9.69 16.69l-1.5 1.5H6a2 2 0 0 1-2-2v-5.5"})]}),PD=()=>re.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:re.jsx("polygon",{points:"5 3 19 12 5 21 5 3"})}),zD=()=>re.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"currentColor",children:[re.jsx("rect",{x:"6",y:"4",width:"4",height:"16"}),re.jsx("rect",{x:"14",y:"4",width:"4",height:"16"})]}),m0=()=>re.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[re.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),ID=()=>{const r=Ke.useRef(null),e=Ke.useRef(null),[n]=Ke.useState(CD),[a,o]=Ke.useState(null),[c,u]=Ke.useState(!1),[d,m]=Ke.useState(!1),[p,g]=Ke.useState(!1),[_,x]=Ke.useState(null),y=Ke.useRef(null),[M,A]=Ke.useState(!1),[S,v]=Ke.useState(!0),[L,U]=Ke.useState(0),[I,j]=Ke.useState(!1),[N,z]=Ke.useState(5),Q=Ke.useRef(0),C=Ke.useRef(1),[w,G]=Ke.useState(1),ne=Ke.useRef(1),[fe,ge]=Ke.useState(null),K=Ke.useRef(null),[P,q]=Ke.useState(0),Y=Ke.useRef([]),he=Ke.useRef({}),pe=Ke.useRef({}),D=Ke.useRef([]),ie=Ke.useRef(!1),Se=Ke.useRef(!1),Te=Ke.useRef(0),Le=Ke.useRef(0),ae=Ke.useRef(null),ue=Ke.useRef(null),Ne=Ke.useRef(!1),Xe=Ke.useRef(1);Ke.useEffect(()=>{ie.current=c,c?(document.body.style.overflow="hidden",Object.values(pe.current).forEach(oe=>oe.pause())):d&&(document.body.style.overflow="auto")},[c,d]),Ke.useEffect(()=>{Se.current=d,d?document.body.style.overflow="auto":document.body.style.overflow="hidden"},[d]),Ke.useEffect(()=>{Q.current=N},[N]),Ke.useEffect(()=>{Ne.current=I},[I]),Ke.useEffect(()=>{ne.current=w},[w]),Ke.useEffect(()=>{typeof window<"u"&&window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&G(1.8)},[]),Ke.useEffect(()=>{y.current&&(M&&S?y.current.play().catch(oe=>console.error("Audio playback failed:",oe)):y.current.pause())},[M,S,L]);const Qe=()=>A(!M),ut=oe=>{U(oe),A(!0),v(!0)},on=()=>{window.scrollTo({top:0,behavior:"auto"}),Te.current=0,Le.current=0,g(!0)},mt=()=>{m(!0),A(!0),z(5),Object.values(pe.current).forEach(oe=>{oe.muted=!1,oe.volume=0})},Ut=()=>{g(!1)},B=oe=>{const Ce=oe.currentTarget.getBoundingClientRect(),Fe=Math.min(Math.max((oe.clientX-Ce.left)/Ce.width,0),1);q(oe.clientX);const ye=Ts.length,Ae=Math.floor(Fe*(ye-1)),ke=Ts[Ae];ke&&ge(ke.date)},pt=()=>{ge(null)};Ke.useEffect(()=>{if(!r.current)return;const oe=new g3;oe.background=new Gt(Lt.FOG_COLOR),oe.fog=new Wp(Lt.FOG_COLOR,10,30);const Ce=new Ii(50,window.innerWidth/window.innerHeight,.1,2e3);Ce.position.set(0,0,Lt.CAMERA_START_Z),ae.current=Ce;const Fe=new vR({canvas:r.current,antialias:!0,alpha:!1});Fe.setSize(window.innerWidth,window.innerHeight),Fe.setPixelRatio(Math.min(window.devicePixelRatio,2));const ye=new C3;ye.crossOrigin="Anonymous";const Ae=3.2,ke=3.2;new aa(3.2,2.4);const Ve=new Ol({color:16777215}),Ie=2,ot=.5,H=new aa(Ie,ot),ze=new dp({color:2236962,linewidth:2,opacity:.8,transparent:!0}),Oe=DD(),De=new Cv(Oe,new dp({color:8947848,opacity:.6,transparent:!0,fog:!1})),Re=n[n.length-1].z,ve=Math.abs(Re-Lt.CAMERA_START_Z)+20;De.position.set(0,0,Re-10);const je=Math.max(1.5,ve/50);De.scale.set(je,je,1),oe.add(De),Y.current=[],he.current={},D.current=[],n.forEach(Ye=>{const ct=new sr;ct.position.set(Ye.x,Ye.y,Ye.z),ct.rotation.y=Ye.rotationY,ct.rotation.z=Ye.rotationZ;const Ft=Ye.initialWidth,T=Ye.initialHeight,k=new aa(Ft,T),Z=new Mi(k,new Ol({transparent:!0,opacity:0}));Z.position.z=.1,Z.position.y=.15;const W=Ft+.3,X=T+.8,Me=new aa(W,X),we=new Mi(Me,Ve.clone());we.position.z=0;const Ge=n2(W+.05,X+.05,Ye.borderIntensity),Pe=new Cv(Ge,ze.clone());Pe.position.z=.15,he.current[Ye.id]=Pe;const qe=($e,at)=>{const xt=$e/at;let vt=Ae,ft=Ae/xt;ft>ke&&(ft=ke,vt=ke*xt),Z.geometry.dispose(),Z.geometry=new aa(vt,ft);const Et=vt+.3,Be=ft+.8;we.geometry.dispose(),we.geometry=new aa(Et,Be);const Bt=n2(Et+.05,Be+.05,Ye.borderIntensity);Pe.geometry.dispose(),Pe.geometry=Bt;const bt=-(Be/2)+.4,ln=ct.children.find(Qi=>Qi.userData.isDate);ln&&(ln.position.y=bt)};D.current.push({item:Ye,contentMesh:Z,updateGeometry:qe,loadedOpacity:0,targetLoadedOpacity:0});const Je=OD(Ye.date);if(Je){const $e=new Ol({map:Je,transparent:!0,opacity:.8}),at=new Mi(H,$e);at.userData={isDate:!0},at.position.y=-(X/2)+.4,at.position.z=.11,ct.add(at)}ct.add(we),ct.add(Z),ct.add(Pe),ct.userData={id:Ye.id},oe.add(ct),Y.current.push(Z)});const st={},Vt=Ye=>{const ct=Ye.item;if(!st[ct.id]){if(ct.type==="video"){const Ft=document.createElement("video");Ft.src=ct.src,Ft.crossOrigin="Anonymous",Ft.muted=!0,Ft.loop=!0,Ft.playsInline=!0,Ft.preload="auto",pe.current[ct.id]=Ft,Ye.video=Ft,Ft.onloadedmetadata=()=>{Ye.updateGeometry(Ft.videoWidth,Ft.videoHeight),Ye.targetLoadedOpacity=1};const T=new S3(Ft);T.minFilter=Yn,T.magFilter=Yn,T.wrapS=Ei,T.wrapT=Ei,T.colorSpace=li,Ye.texture=T,Ye.contentMesh.material.map=T,Ye.contentMesh.material.needsUpdate=!0}else{const Ft=ct.type==="embed"&&ct.previewSrc||ct.src;ye.load(Ft,T=>{T.colorSpace=li,T.wrapS=Ei,T.wrapT=Ei,Ye.texture=T,Ye.contentMesh.material.map=T,Ye.contentMesh.material.needsUpdate=!0,T.image&&Ye.updateGeometry(T.image.width,T.image.height),Ye.targetLoadedOpacity=1})}st[ct.id]=!0}},Ct=Ye=>{const ct=Ye.item.id;st[ct]&&(Ye.loadedOpacity=0,Ye.targetLoadedOpacity=0,Ye.texture&&(Ye.texture.dispose(),Ye.contentMesh.material.map=null,Ye.contentMesh.material.needsUpdate=!0,Ye.texture=void 0),Ye.video&&(Ye.video.pause(),Ye.video.src="",Ye.video.load(),delete pe.current[ct],Ye.video=void 0),delete st[ct])},Rn=Lt.CAMERA_START_Z,pr=n[n.length-1].z+5,Xa=Rn-pr,hi=250/w,la=Xa*hi+window.innerHeight;document.body.style.height=`${la}px`;const Wa=()=>{if(ie.current||!Se.current)return;const Ye=document.body.scrollHeight-window.innerHeight;Ye>0&&(Le.current=Math.max(0,Math.min(1,window.scrollY/Ye)))};window.addEventListener("scroll",Wa);const Ki=new U3,yn=new Wt,cn=Ye=>{const ct=Math.abs(Ce.position.z-Ye.position.z);return ct<=Lt.FADE_START?1:ct>=Lt.FADE_END?0:1-(ct-Lt.FADE_START)/(Lt.FADE_END-Lt.FADE_START)},un=Ye=>{var W,X;if(ie.current||!Se.current)return;if(ue.current){const Me=n.find(we=>we.id===ue.current);if(Me){o(Me),u(!0);return}}yn.x=Ye.clientX/window.innerWidth*2-1,yn.y=-(Ye.clientY/window.innerHeight)*2+1,oe.updateMatrixWorld(!0),Ki.setFromCamera(yn,Ce);const ct=oe.children.filter(Me=>Me instanceof sr&&Me.userData.id),Ft=Ki.intersectObjects(ct,!0).filter(Me=>Me.object instanceof Mi),T=new qp,k=new pn;k.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),T.setFromProjectionMatrix(k);const Z=Ce.getWorldDirection(new le);for(const Me of Ft){let we=Me.object;for(;we.parent&&!((W=we.userData)!=null&&W.id);)we=we.parent;const Ge=(X=we.userData)==null?void 0:X.id;if(!Ge)continue;const Pe=we.getWorldPosition(new le);if(!T.containsPoint(Pe)||Pe.clone().sub(Ce.position).dot(Z)<=0||cn(we)<.1)continue;const $e=n.find(at=>at.id===Ge);if($e){o($e),u(!0);break}}};r.current.addEventListener("click",un);const Ri=Ye=>{var k,Z;if(ie.current||!Se.current)return;yn.x=Ye.clientX/window.innerWidth*2-1,yn.y=-(Ye.clientY/window.innerHeight)*2+1,Ki.setFromCamera(yn,Ce);const ct=oe.children.filter(W=>W instanceof sr&&W.userData.id),T=Ki.intersectObjects(ct,!0).find(W=>W.object instanceof Mi);if(T){let W=T.object;for(;W.parent&&!((k=W.userData)!=null&&k.id);)W=W.parent;ue.current=(Z=W.userData)==null?void 0:Z.id,document.body.style.cursor="pointer"}else ue.current=null,document.body.style.cursor="default"};window.addEventListener("mousemove",Ri);let ca;const Uo=window.matchMedia("(pointer: coarse)").matches,gr=()=>{if(ca=requestAnimationFrame(gr),!ie.current&&Se.current){const k=ue.current?Lt.HOVER_MIN_SPEED_FACTOR:1;if(C.current+=(k-C.current)*.1,Q.current>0){const X=Q.current*C.current;X>.01&&window.scrollBy(0,X)}const Z=Le.current-Te.current;if(Uo)Te.current=Le.current;else{const X=Math.max(-.015,Math.min(Lt.MAX_SCROLL_SPEED*.1,Z));Te.current+=X*.05+Z*.01}Ce.position.z=Rn-Te.current*Xa,e.current&&(e.current.style.width=`${Te.current*100}% `);const W=Math.abs(Ce.position.z-Re);if(y.current&&S){let X=1;W<Lt.BGM_FADE_ZONE&&(X=Math.max(0,(W-Lt.BGM_SILENCE_RADIUS)/(Lt.BGM_FADE_ZONE-Lt.BGM_SILENCE_RADIUS))),Xe.current+=(X-Xe.current)*.05,y.current.volume=Math.max(0,Math.min(1,Xe.current))}}Object.keys(st).forEach(k=>{const Z=D.current.find(W=>W.item.id===k);if(Z){const W=Z.contentMesh.parent;Math.abs(Ce.position.z-W.position.z)>32&&Ct(Z)}});const Ye=Math.max(0,Math.floor(-Ce.position.z/Lt.Z_SPACING)),ct=8,Ft=Math.max(0,Ye-ct),T=Math.min(D.current.length-1,Ye+ct);for(let k=Ft;k<=T;k++){const Z=D.current[k],W=Z.contentMesh.parent,X=Z.contentMesh,Me=Math.abs(Ce.position.z-W.position.z);Me<22?Vt(Z):Me>32&&Ct(Z);const Pe=Z.item.id,qe=he.current[Pe];qe&&(ue.current===Pe?(qe.material.color.setHex(0),qe.material.opacity=1,qe.scale.setScalar(1.02)):(qe.material.color.setHex(2236962),qe.material.opacity=.8,qe.scale.setScalar(1)));let Je=0;const $e=4,at=.5;Me<at?Je=0:Me<$e?Je=(Me-at)/($e-at):Me<=Lt.FADE_START?Je=1:Me>=Lt.FADE_END?Je=0:Je=1-(Me-Lt.FADE_START)/(Lt.FADE_END-Lt.FADE_START),Z.loadedOpacity+=(Z.targetLoadedOpacity-Z.loadedOpacity)*.05;const xt=Je*Z.loadedOpacity;X.material.opacity=xt;const vt=W.children.find(Be=>Be.isMesh&&Be!==X&&!Be.userData.isDate);if(vt&&vt.material&&(vt.material.opacity=xt,vt.material.transparent=!0),qe){const Be=ue.current===Pe?1:.8;qe.material.opacity=Be*xt,qe.material.transparent=!0}const ft=W.children.find(Be=>Be.userData.isDate);ft&&ft.material&&(ft.material.opacity=.8*xt);let Et=1;if(Me<Lt.HIGHLIGHT_RANGE&&(Et=1+(1-Me/Lt.HIGHLIGHT_RANGE)*.15),W.scale.set(Et,Et,1),pe.current[Pe]){const Be=pe.current[Pe];if(!ie.current&&Se.current)if(Ne.current)Be.volume=0;else if(Me<Lt.AUDIO_MAX_DISTANCE){Be.muted=!1;const Bt=Ce.position.z<W.position.z-2;let bt=0;if(Bt){const ln=Math.abs(Ce.position.z-W.position.z);bt=Math.max(0,1-ln/Lt.AUDIO_QUICK_FADE_BEHIND)}else bt=Math.max(0,1-Me/Lt.AUDIO_MAX_DISTANCE);Be.volume=bt,Be.paused&&Be.play().catch(()=>{})}else Be.volume>0&&(Be.volume=0),Be.paused||Be.pause()}}Fe.render(oe,Ce)};gr();const Ds=()=>{Ce.aspect=window.innerWidth/window.innerHeight,Ce.updateProjectionMatrix(),Fe.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ds),()=>{var Ye;window.removeEventListener("scroll",Wa),window.removeEventListener("resize",Ds),window.removeEventListener("mousemove",Ri),(Ye=r.current)==null||Ye.removeEventListener("click",un),cancelAnimationFrame(ca),K.current&&cancelAnimationFrame(K.current),Fe.dispose(),document.body.style.height="auto",Object.values(pe.current).forEach(ct=>{ct.pause(),ct.src="",ct.load()})}},[n]);const _t=()=>{u(!1),o(null)},Nt=oe=>{const Ce=document.body.scrollHeight-window.innerHeight,Fe=oe*Ce;Le.current=oe,K.current&&cancelAnimationFrame(K.current);const ye=Lt.MAX_SCROLL_SPEED*window.innerHeight,Ae=()=>{const ke=window.scrollY,Ve=Fe-ke;if(Math.abs(Ve)<1){window.scrollTo({top:Fe,behavior:"auto"}),K.current=null;return}const Ie=Math.sign(Ve)*Math.min(Math.abs(Ve),ye);window.scrollTo({top:ke+Ie,behavior:"auto"}),K.current=requestAnimationFrame(Ae)};K.current=requestAnimationFrame(Ae)},We=oe=>{const Ce=oe.currentTarget.getBoundingClientRect(),Fe=oe.touches[0],ye=Math.min(Math.max((Fe.clientX-Ce.left)/Ce.width,0),1);q(Fe.clientX);const Ae=Ts.length,ke=Math.floor(ye*(Ae-1)),Ve=Ts[ke];Ve&&ge(Ve.date);const Ie=document.body.scrollHeight-window.innerHeight;window.scrollTo({top:ye*Ie,behavior:"auto"})},jt=oe=>{if(c||!d)return;const Ce=oe.currentTarget.getBoundingClientRect(),Fe=Math.min(Math.max((oe.clientX-Ce.left)/Ce.width,0),1);Nt(de(Fe))},tt=oe=>{x(_===oe?null:oe)},lt=Lt.CAMERA_START_Z,E=n[n.length-1].z+5,J=lt-E||1,_e=oe=>Math.min(Math.max((lt-oe)/J,0),1),Ee=oe=>lt-oe*J,de=oe=>_e(Ee(oe)+Lt.TIMELINE_FOCUS_OFFSET),nt=n.filter(oe=>oe.timelineLabel).map(oe=>({id:oe.id,label:oe.timelineLabel,pct:_e(oe.z),focusPct:_e(oe.z+Lt.TIMELINE_FOCUS_OFFSET),z:oe.z}));return re.jsxs(re.Fragment,{children:[re.jsx("canvas",{ref:r,className:"fixed top-0 left-0 w-full h-full block z-0"}),re.jsx("audio",{ref:y,src:h0[L].src,onEnded:()=>ut((L+1)%h0.length)}),!d&&re.jsx(AD,{onStartTransition:on}),p&&re.jsx(RD,{onCovered:mt,onComplete:Ut}),re.jsx("div",{className:`fixed top-6 left-16 z-10 pointer-events-none mix-blend-multiply transition-opacity duration-500 ${d?"opacity-100":"opacity-0"} `,children:re.jsxs("h1",{className:"text-4xl font-bold text-gray-800 drop-shadow-sm rotate-[-2deg]",children:["The secret life of ",re.jsx("span",{className:"text-blue-600",children:"Warco Mu"})]})}),re.jsxs("div",{className:`fixed top-6 right-6 z-40 flex flex-col items-end gap-3 transition-opacity duration-500 ${d?"opacity-100":"opacity-0 pointer-events-none"} `,children:[re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("audio"),children:re.jsx(UD,{})}),_==="audio"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-72 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Audio Settings"}),re.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:re.jsx(m0,{})})]}),re.jsx("div",{className:"mb-4",children:re.jsxs("div",{className:"flex justify-between items-center mb-1",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"3D Video Sound"}),re.jsx("button",{onClick:()=>j(!I),className:"p-1 rounded hover:bg-gray-100",title:I?"Unmute Videos":"Mute Videos",children:I?re.jsx(a2,{}):re.jsx(i2,{})})]})}),re.jsxs("div",{children:[re.jsxs("div",{className:"flex justify-between items-center mb-2",children:[re.jsx("label",{className:"text-xs text-gray-500",children:"Background Music"}),re.jsx("div",{className:"flex items-center gap-2",children:re.jsx("button",{onClick:()=>v(!S),className:"p-1 rounded hover:bg-gray-100",title:S?"Disable BGM":"Enable BGM",children:S?re.jsx(i2,{}):re.jsx(a2,{})})})]}),re.jsx("div",{className:`flex items-center gap-2 justify-center py-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"} `,children:re.jsx("button",{onClick:Qe,className:"w-10 h-10 flex items-center justify-center border-2 border-black rounded-full hover:bg-gray-100 transition-colors",children:M?re.jsx(zD,{}):re.jsx(PD,{})})}),re.jsx("div",{className:`flex flex-col gap-1 max-h-32 overflow-y-auto no-scrollbar mt-2 transition-opacity ${S?"opacity-100":"opacity-50 pointer-events-none"} `,children:h0.map((oe,Ce)=>re.jsxs("div",{onClick:()=>ut(Ce),className:`text-xs px-2 py-1 cursor-pointer rounded border border-transparent hover:border-gray-300 ${L===Ce?"bg-blue-50 font-bold text-blue-700":"text-gray-600"} `,children:[Ce+1,". ",oe.title]},Ce))})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("general"),children:re.jsx(LD,{})}),_==="general"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"General Settings"}),re.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:re.jsx(m0,{})})]}),re.jsxs("div",{children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Auto-Forward Speed"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Off"}),re.jsx("input",{type:"range",min:"0",max:"20",step:"1",value:N,onChange:oe=>z(Number(oe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs font-bold w-4 text-center",children:N})]})]}),re.jsxs("div",{className:"mt-4",children:[re.jsx("label",{className:"text-xs text-gray-500 block mb-1",children:"Scroll Sensitivity"}),re.jsxs("div",{className:"flex items-center gap-2",children:[re.jsx("span",{className:"text-xs text-gray-400",children:"Low"}),re.jsx("input",{type:"range",min:"0.1",max:"5.0",step:"0.1",value:w,onChange:oe=>G(Number(oe.target.value)),className:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"}),re.jsx("span",{className:"text-xs text-gray-400",children:"High"})]})]})]})})]}),re.jsxs("div",{className:"relative flex flex-col items-end",children:[re.jsx("wired-icon-button",{className:"bg-white text-gray-800 rounded-full",onClick:()=>tt("credit"),children:re.jsx(ND,{})}),_==="credit"&&re.jsx("div",{className:"absolute top-12 right-0 z-50 animate-fade-in",children:re.jsxs("wired-card",{elevation:3,className:"bg-white p-4 w-64 block",children:[re.jsxs("div",{className:"flex justify-between items-center border-b border-gray-200 pb-2 mb-3",children:[re.jsx("span",{className:"font-bold text-sm",children:"Credits"}),re.jsx("button",{onClick:()=>x(null),className:"text-gray-500 hover:text-black",children:re.jsx(m0,{})})]}),re.jsxs("div",{className:"text-xs text-gray-600 leading-relaxed",children:[re.jsx("p",{className:"mb-2",children:re.jsx("strong",{children:"Coming Soon"})}),re.jsxs("p",{className:"mb-2",children:["This gallery would like to thank the generous photo donors, who bravely surrendered their most questionable selfies. ",re.jsx("br",{}),"Special thanks to the friends who helped build this website—your debugging tears now live forever in this exhibit."]}),re.jsx("br",{}),re.jsx("p",{children:"Built with Gemini 3 Pro, GPT, Suno and their humble human operators with React, Three.js & Wired Elements."}),re.jsx("br",{}),re.jsx("p",{children:"BGM from YouTube: https://www.youtube.com/watch?v=bYkyj1GbdGU&list=RDssxbJpuzruQ&index=4, https://www.youtube.com/results?search_query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E4%B8%8B+low+fi"})]})]})})]})]}),d&&re.jsxs("div",{className:"fixed left-0 right-0 bottom-0 h-4 bg-gray-200 cursor-pointer z-30 group hover:h-6 transition-all border-t-2 border-gray-400 border-dashed animate-fade-in relative",style:{position:"fixed",bottom:0,left:0,right:0,top:"auto",touchAction:"none"},onClick:jt,onMouseMove:B,onMouseLeave:pt,onTouchStart:We,onTouchMove:We,onTouchEnd:pt,children:[nt.map(oe=>re.jsxs("button",{onClick:Ce=>{Ce.stopPropagation(),Nt(oe.focusPct)},className:"absolute flex flex-col items-center group/pin transition-transform duration-150",style:{left:`calc(${oe.pct*100}% - 6px)`,bottom:"8px",zIndex:10},title:oe.label,children:[re.jsx("span",{className:"text-[10px] font-semibold text-gray-700 mb-1 px-2 py-0.5 bg-white border border-gray-300 rounded shadow-sm whitespace-nowrap",children:oe.label}),re.jsx("img",{src:wD,alt:oe.label,className:"w-4 h-4 drop-shadow group-hover/pin:scale-110 transition-transform duration-150"})]},oe.id)),re.jsx("div",{ref:e,className:"h-full bg-blue-500 relative transition-all duration-75 z-0",style:{width:"0%",backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjNDI5OUUxIi8+CjxwYXRoIGQ9Ik0wIDBMNCA0Wk00IDBMMCA0WiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')"}}),fe&&re.jsxs("div",{className:"absolute bottom-8 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded pointer-events-none whitespace-nowrap z-50",style:{left:P},children:[fe,re.jsx("div",{className:"absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"})]})]}),c&&a&&re.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in",children:[re.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm",onClick:_t}),re.jsx("div",{className:"relative z-10 max-w-5xl w-full max-h-[90vh] flex flex-col items-center",children:re.jsx("wired-card",{elevation:4,className:"w-full bg-white p-2",children:re.jsxs("div",{className:"p-4 flex flex-col items-center",children:[re.jsx("div",{className:"w-full flex justify-end mb-2",children:re.jsx("wired-button",{onClick:_t,elevation:2,children:"Close [X]"})}),re.jsxs("div",{className:"w-full aspect-video bg-black flex items-center justify-center overflow-hidden border-2 border-black rounded-sm shadow-inner",children:[a.type==="video"&&re.jsx("video",{src:a.src,className:"w-full h-full object-contain",controls:!0,autoPlay:!0}),a.type==="embed"&&re.jsx("iframe",{src:(()=>{const oe=a.embedUrl||a.src,Ce=oe.includes("?")?"&":"?";return`${oe}${Ce} autoplay = 1 & muted=1 & playsinline=1 & loop=1 & controls=1`})(),className:"w-full h-full",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:a.title}),a.type==="image"&&re.jsx("img",{src:a.src,alt:a.title,className:"w-full h-full object-contain"})]}),re.jsxs("div",{className:"mt-6 text-center",children:[re.jsx("h2",{className:"text-3xl font-bold text-gray-800 mb-2",children:a.title}),a.description&&re.jsx("p",{className:"text-gray-600 text-lg font-light",children:a.description})]})]})})})]})]})},J2=document.getElementById("root");if(!J2)throw new Error("Could not find root element to mount to");const FD=eS.createRoot(J2);FD.render(re.jsx(Wy.StrictMode,{children:re.jsx(ID,{})}));
